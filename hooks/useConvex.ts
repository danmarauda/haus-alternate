/**
 * Custom Convex Hooks for HAUS Platform
 *
 * Type-safe hooks for common Convex operations.
 * These hooks wrap Convex's useQuery and useMutation with proper error handling.
 */

import { useQuery, useMutation, useAction } from "convex/react"

// Stub for Convex generated API - replace with actual Convex setup when available
const api = {
  functions: {
    listProperties: null as any,
    getPropertyBySlug: null as any,
    searchProperties: null as any,
    toggleSaveProperty: null as any,
    getUserByEmail: null as any,
    upsertUser: null as any,
    getMarketData: null as any,
    getTopSuburbs: null as any,
    getInsights: null as any,
    markInsightRead: null as any,
    submitEnquiry: null as any,
    trackEvent: null as any,
  },
}

// TODO: Uncomment when Convex is properly set up
// import { api } from "@/convex/_generated/api"
import type {
  Id,
  Property,
  PropertyFilters,
  PropertyListResponse,
  EnquiryFormData,
  User,
  MarketData,
  Insight,
  SavedSearch,
} from "@/lib/convex"
import { useCallback, useState, useEffect } from "react"

// ==================== PROPERTY HOOKS ====================

/**
 * Hook for fetching properties with filters
 * Falls back to mock data when Convex is not configured
 */
export function useProperties(filters?: PropertyFilters, limit = 20) {
  const [mockProperties] = useState<Property[]>([])

  // Try Convex query, fallback to mock data
  const result = useQuery(
    api.functions.listProperties,
    api.functions.listProperties ? { ...filters, limit } : undefined
  )

  // Return mock data for now when Convex isn't ready
  if (!api.functions.listProperties) {
    return {
      properties: mockProperties,
      isLoading: false,
      error: null,
      nextCursor: null,
      hasMore: false,
    }
  }

  return {
    ...result,
    properties: result.data?.properties || [],
    nextCursor: result.data?.nextCursor,
    hasMore: result.data?.hasMore || false,
  }
}

/**
 * Hook for fetching a single property by slug
 */
export function useProperty(slug: string) {
  const result = useQuery(
    api.functions.getPropertyBySlug,
    api.functions.getPropertyBySlug ? { slug } : undefined
  )

  if (!api.functions.getPropertyBySlug) {
    return { data: null, isLoading: false, error: null }
  }

  return result
}

/**
 * Hook for searching properties
 */
export function usePropertySearch(query: string, filters?: PropertyFilters) {
  const result = useQuery(
    api.functions.searchProperties,
    api.functions.searchProperties ? { query, filters } : undefined
  )

  if (!api.functions.searchProperties) {
    return { data: [], isLoading: false, error: null, results: [] }
  }

  return {
    ...result,
    results: result.data || [],
  }
}

/**
 * Hook for saving/unsaving a property
 */
export function useSaveProperty() {
  const [isSaving, setIsSaving] = useState(false)

  const saveProperty = useMutation(api.functions.toggleSaveProperty)

  const toggleSave = useCallback(
    async (propertyId: Id<"properties">, userId: Id<"users">, save: boolean) => {
      if (!api.functions.toggleSaveProperty) {
        console.warn("Convex toggleSaveProperty not configured")
        return { success: false }
      }

      setIsSaving(true)
      try {
        await saveProperty({ propertyId, userId, save })
        return { success: true }
      } catch (error) {
        console.error("Failed to save property:", error)
        return { success: false, error }
      } finally {
        setIsSaving(false)
      }
    },
    [saveProperty]
  )

  return {
    toggleSave,
    isSaving,
  }
}

/**
 * Hook for prestige properties
 */
export function usePrestigeProperties(limit = 10) {
  return useProperties({ isPrestige: true, status: "active" }, limit)
}

// ==================== USER HOOKS ====================

/**
 * Hook for fetching user by email
 */
export function useUserByEmail(email: string) {
  const result = useQuery(
    api.functions.getUserByEmail,
    api.functions.getUserByEmail ? { email } : undefined
  )

  if (!api.functions.getUserByEmail) {
    return { data: null, isLoading: false, error: null }
  }

  return result
}

/**
 * Hook for creating/updating user
 */
export function useUpsertUser() {
  const [isUpserting, setIsUpserting] = useState(false)
  const upsert = useMutation(api.functions.upsertUser)

  const upsertUser = useCallback(
    async (userData: {
      name: string
      email: string
      emailVerified?: boolean
      image?: string
      role: string
    }) => {
      if (!api.functions.upsertUser) {
        console.warn("Convex upsertUser not configured")
        return { success: false, userId: null }
      }

      setIsUpserting(true)
      try {
        const userId = await upsert(userData)
        return { success: true, userId }
      } catch (error) {
        console.error("Failed to upsert user:", error)
        return { success: false, error, userId: null }
      } finally {
        setIsUpserting(false)
      }
    },
    [upsert]
  )

  return {
    upsertUser,
    isUpserting,
  }
}

// ==================== MARKET DATA HOOKS ====================

/**
 * Hook for fetching market data for a suburb
 */
export function useMarketData(suburb: string, month?: string, year?: number) {
  const result = useQuery(
    api.functions.getMarketData,
    api.functions.getMarketData ? { suburb, month, year } : undefined
  )

  if (!api.functions.getMarketData) {
    return { data: null, isLoading: false, error: null }
  }

  return result
}

/**
 * Hook for fetching top performing suburbs
 */
export function useTopSuburbs(state?: string, limit = 10) {
  const result = useQuery(
    api.functions.getTopSuburbs,
    api.functions.getTopSuburbs ? { state, limit } : undefined
  )

  if (!api.functions.getTopSuburbs) {
    return { data: [], isLoading: false, error: null }
  }

  return result
}

// ==================== INSIGHTS HOOKS ====================

/**
 * Hook for fetching user insights
 */
export function useInsights(userId: Id<"users">, limit = 10) {
  const result = useQuery(
    api.functions.getInsights,
    api.functions.getInsights ? { userId, limit } : undefined
  )

  if (!api.functions.getInsights) {
    return { data: [], isLoading: false, error: null }
  }

  return result
}

/**
 * Hook for marking insight as read
 */
export function useMarkInsightRead() {
  const [isMarking, setIsMarking] = useState(false)
  const markRead = useMutation(api.functions.markInsightRead)

  const markAsRead = useCallback(
    async (insightId: Id<"insights">) => {
      if (!api.functions.markInsightRead) {
        console.warn("Convex markInsightRead not configured")
        return { success: false }
      }

      setIsMarking(true)
      try {
        await markRead({ insightId })
        return { success: true }
      } catch (error) {
        console.error("Failed to mark insight as read:", error)
        return { success: false, error }
      } finally {
        setIsMarking(false)
      }
    },
    [markRead]
  )

  return {
    markAsRead,
    isMarking,
  }
}

// ==================== LEAD HOOKS ====================

/**
 * Hook for submitting property enquiries
 */
export function useSubmitEnquiry() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const submit = useMutation(api.functions.submitEnquiry)

  const submitEnquiry = useCallback(
    async (data: EnquiryFormData) => {
      if (!api.functions.submitEnquiry) {
        console.warn("Convex submitEnquiry not configured")
        // Simulate submission for UI testing
        await new Promise(resolve => setTimeout(resolve, 1000))
        return { success: true, leadId: "mock-lead-id" }
      }

      setIsSubmitting(true)
      try {
        const leadId = await submit(data)
        return { success: true, leadId }
      } catch (error) {
        console.error("Failed to submit enquiry:", error)
        return { success: false, error }
      } finally {
        setIsSubmitting(false)
      }
    },
    [submit]
  )

  return {
    submitEnquiry,
    isSubmitting,
  }
}

// ==================== ANALYTICS HOOKS ====================

/**
 * Hook for tracking analytics events
 */
export function useTrackEvent() {
  const track = useMutation(api.functions.trackEvent)

  const trackEvent = useCallback(
    async (eventData: {
      sessionId: string
      userId?: Id<"users">
      event: string
      category?: string
      properties?: Record<string, unknown>
      page: string
      referrer?: string
    }) => {
      if (!api.functions.trackEvent) {
        console.log("Track event (mock):", eventData)
        return { success: true }
      }

      try {
        await track(eventData)
        return { success: true }
      } catch (error) {
        console.error("Failed to track event:", error)
        return { success: false, error }
      }
    },
    [track]
  )

  return {
    trackEvent,
  }
}

// ==================== COMPOUND HOOKS ====================

/**
 * Hook for property page data
 * Fetches property details + market data + similar properties
 */
export function usePropertyPageData(slug: string, suburb?: string) {
  const property = useProperty(slug)
  const marketData = useMarketData(suburb || "")
  const similarProperties = useProperties(
    suburb ? { suburb, status: "active" } : undefined,
    6
  )

  return {
    property: property.data,
    isLoading: property.isLoading,
    error: property.error,
    marketData: marketData.data,
    similarProperties: similarProperties.properties,
  }
}

/**
 * Hook for user dashboard data
 * Fetches saved properties + saved searches + insights
 */
export function useUserDashboard(userId: Id<"users">) {
  const insights = useInsights(userId)

  return {
    insights: insights.data,
    isLoading: insights.isLoading,
    error: insights.error,
  }
}

// ==================== UTILITY HOOKS ====================

/**
 * Hook to generate session ID for analytics
 */
export function useSessionId() {
  const [sessionId] = useState(() => {
    if (typeof window === "undefined") return "server"

    // Get or create session ID
    let id = sessionStorage.getItem("haus_session_id")
    if (!id) {
      id = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      sessionStorage.setItem("haus_session_id", id)
    }
    return id
  })

  return sessionId
}

/**
 * Hook for debounced search
 */
export function useDebouncedSearch(delay = 300) {
  const [debouncedQuery, setDebouncedQuery] = useState("")
  const [query, setQuery] = useState("")

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query)
    }, delay)

    return () => clearTimeout(timer)
  }, [query, delay])

  return {
    query,
    setQuery,
    debouncedQuery,
  }
}

/**
 * Hook for infinite scroll pagination
 */
export function useInfiniteScroll(
  fetchMore: (cursor: string) => void,
  hasMore: boolean,
  threshold = 200
) {
  const [isFetching, setIsFetching] = useState(false)
  const [cursor, setCursor] = useState<string | null>(null)

  const handleScroll = useCallback(() => {
    if (isFetching || !hasMore || !cursor) return

    const scrollTop = window.scrollY
    const scrollHeight = document.documentElement.scrollHeight
    const clientHeight = window.innerHeight

    if (scrollTop + clientHeight >= scrollHeight - threshold) {
      setIsFetching(true)
      fetchMore(cursor)
    }
  }, [isFetching, hasMore, cursor, fetchMore, threshold])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  return {
    isFetching,
    setCursor,
  }
}
