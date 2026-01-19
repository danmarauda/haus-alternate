/**
 * Custom Convex Hooks for HAUS Platform
 *
 * Type-safe hooks for common Convex operations.
 * These hooks wrap Convex's useQuery and useMutation with proper error handling.
 */

import { useQuery, useMutation, useAction } from "convex/react"
import { api } from "@/convex/_generated/api"
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
import { useCallback, useState } from "react"

// ==================== PROPERTY HOOKS ====================

/**
 * Hook for fetching properties with filters
 */
export function useProperties(filters?: PropertyFilters, limit = 20) {
  const result = useQuery(api.functions.listProperties, {
    ...filters,
    limit,
  })

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
  return useQuery(api.functions.getPropertyBySlug, { slug })
}

/**
 * Hook for searching properties
 */
export function usePropertySearch(query: string, filters?: PropertyFilters) {
  const result = useQuery(api.functions.searchProperties, {
    query,
    filters,
  })

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
  return useQuery(api.functions.getUserByEmail, { email })
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
      setIsUpserting(true)
      try {
        const userId = await upsert(userData)
        return { success: true, userId }
      } catch (error) {
        console.error("Failed to upsert user:", error)
        return { success: false, error }
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
  return useQuery(api.functions.getMarketData, {
    suburb,
    month,
    year,
  })
}

/**
 * Hook for fetching top performing suburbs
 */
export function useTopSuburbs(state?: string, limit = 10) {
  return useQuery(api.functions.getTopSuburbs, {
    state,
    limit,
  })
}

// ==================== INSIGHTS HOOKS ====================

/**
 * Hook for fetching user insights
 */
export function useInsights(userId: Id<"users">, limit = 10) {
  return useQuery(api.functions.getInsights, {
    userId,
    limit,
  })
}

/**
 * Hook for marking insight as read
 */
export function useMarkInsightRead() {
  const [isMarking, setIsMarking] = useState(false)
  const markRead = useMutation(api.functions.markInsightRead)

  const markAsRead = useCallback(
    async (insightId: Id<"insights">) => {
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
    isLoading: property.isLoading || marketData.isLoading,
    error: property.error || marketData.error,
    marketData: marketData.data,
    similarProperties: similarProperties.properties,
  }
}

/**
 * Hook for user dashboard data
 * Fetches saved properties + saved searches + insights
 */
export function useUserDashboard(userId: Id<"users">) {
  // Note: You'll need to add these queries to your Convex functions
  // const savedProperties = useSavedProperties(userId)
  const insights = useInsights(userId)

  return {
    insights: insights.data,
    isLoading: insights.isLoading,
    error: insights.error,
    // savedProperties: savedProperties.data,
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

  useCallback(
    () => {
      const timer = setTimeout(() => {
        setDebouncedQuery(query)
      }, delay)

      return () => clearTimeout(timer)
    },
    [query, delay]
  )

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

  // Set up scroll listener
  useCallback(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  return {
    isFetching,
    setCursor,
  }
}
