/**
 * Custom Convex Hooks for HAUS Platform
 *
 * Type-safe hooks for common Convex operations.
 * These hooks wrap Convex's useQuery and useMutation with proper error handling.
 * All hooks fall back to mock data when Convex is not configured.
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

  // Check BEFORE calling useQuery - prevents TypeError
  if (!api.functions.listProperties) {
    return {
      properties: mockProperties,
      isLoading: false,
      error: null,
      nextCursor: null,
      hasMore: false,
    }
  }

  // Only call useQuery if function exists
  const result = useQuery(api.functions.listProperties, { ...filters, limit })

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
  // Check BEFORE calling useQuery
  if (!api.functions.getPropertyBySlug) {
    return { data: null, isLoading: false, error: null }
  }

  const result = useQuery(api.functions.getPropertyBySlug, { slug })
  return result
}

/**
 * Hook for searching properties
 */
export function usePropertySearch(query: string, filters?: PropertyFilters) {
  // Check BEFORE calling useQuery
  if (!api.functions.searchProperties) {
    return { data: [], isLoading: false, error: null, results: [] }
  }

  const result = useQuery(api.functions.searchProperties, { query, filters })
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

  // Only create mutation if function exists
  const saveProperty = api.functions.toggleSaveProperty
    ? useMutation(api.functions.toggleSaveProperty)
    : null

  const toggleSave = useCallback(
    async (propertyId: Id<"properties">, userId: Id<"users">, save: boolean) => {
      if (!api.functions.toggleSaveProperty || !saveProperty) {
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
  // Check BEFORE calling useQuery
  if (!api.functions.getUserByEmail) {
    return { data: null, isLoading: false, error: null }
  }

  const result = useQuery(api.functions.getUserByEmail, { email })
  return result
}

/**
 * Hook for creating/updating user
 */
export function useUpsertUser() {
  const [isUpserting, setIsUpserting] = useState(false)

  // Only create mutation if function exists
  const upsert = api.functions.upsertUser
    ? useMutation(api.functions.upsertUser)
    : null

  const upsertUser = useCallback(
    async (userData: {
      name: string
      email: string
      emailVerified?: boolean
      image?: string
      role: string
    }) => {
      if (!api.functions.upsertUser || !upsert) {
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
  // Check BEFORE calling useQuery
  if (!api.functions.getMarketData) {
    return { data: null, isLoading: false, error: null }
  }

  const result = useQuery(api.functions.getMarketData, { suburb, month, year })
  return result
}

/**
 * Hook for fetching top performing suburbs
 */
export function useTopSuburbs(state?: string, limit = 10) {
  // Check BEFORE calling useQuery
  if (!api.functions.getTopSuburbs) {
    return { data: [], isLoading: false, error: null }
  }

  const result = useQuery(api.functions.getTopSuburbs, { state, limit })
  return result
}

// ==================== INSIGHTS HOOKS ====================

/**
 * Hook for fetching user insights
 */
export function useInsights(userId: Id<"users">, limit = 10) {
  // Check BEFORE calling useQuery
  if (!api.functions.getInsights) {
    return { data: [], isLoading: false, error: null }
  }

  const result = useQuery(api.functions.getInsights, { userId, limit })
  return result
}

/**
 * Hook for marking insight as read
 */
export function useMarkInsightRead() {
  const [isMarking, setIsMarking] = useState(false)

  // Only create mutation if function exists
  const markRead = api.functions.markInsightRead
    ? useMutation(api.functions.markInsightRead)
    : null

  const markAsRead = useCallback(
    async (insightId: Id<"insights">) => {
      if (!api.functions.markInsightRead || !markRead) {
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

  // Only create mutation if function exists
  const submit = api.functions.submitEnquiry
    ? useMutation(api.functions.submitEnquiry)
    : null

  const submitEnquiry = useCallback(
    async (data: EnquiryFormData) => {
      if (!api.functions.submitEnquiry || !submit) {
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
  // Only create mutation if function exists
  const track = api.functions.trackEvent
    ? useMutation(api.functions.trackEvent)
    : null

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
      if (!api.functions.trackEvent || !track) {
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
