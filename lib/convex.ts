/**
 * Convex Type Utilities
 *
 * Type-safe utilities for working with Convex data structures.
 * These types are automatically inferred from your Convex schema.
 */

import {
 GenericDocument,
  GenericMutationCtx,
  GenericQueryCtx,
  NamedArray,
  NamedTableInfo,
  NamedDocument,
  NamedTableInfo,
} from "convex/server"
import type { DataModel } from "../convex/_generated/dataModel"

// ==================== TABLE TYPES ====================

/**
 * Property document type
 */
export type Property = NamedDocument<DataModel, "properties">

/**
 * User document type
 */
export type User = NamedDocument<DataModel, "users">

/**
 * Agency document type
 */
export type Agency = NamedDocument<DataModel, "agencies">

/**
 * Market data document type
 */
export type MarketData = NamedDocument<DataModel, "marketData">

/**
 * Saved search document type
 */
export type SavedSearch = NamedDocument<DataModel, "savedSearches">

/**
 * Document vault document type
 */
export type Document = NamedDocument<DataModel, "documents">

/**
 * AI insight document type
 */
export type Insight = NamedDocument<DataModel, "insights">

/**
 * Activity log document type
 */
export type ActivityLog = NamedDocument<DataModel, "activityLog">

/**
 * Notification document type
 */
export type Notification = NamedDocument<DataModel, "notifications">

/**
 * Lead document type
 */
export type Lead = NamedDocument<DataModel, "leads">

/**
 * Analytics event document type
 */
export type Analytics = NamedDocument<DataModel, "analytics">

// ==================== INPUT TYPES ====================

/**
 * Property search filters
 */
export interface PropertyFilters {
  status?: string
  suburb?: string
  agentId?: string
  isPrestige?: boolean
  priceMin?: number
  priceMax?: number
  bedrooms?: number
  bathrooms?: number
  propertyType?: string[]
  keywords?: string[]
}

/**
 * Search query with filters
 */
export interface SearchQuery {
  query: string
  filters?: PropertyFilters
  limit?: number
  cursor?: string
}

/**
 * Property listing response with pagination
 */
export interface PropertyListResponse {
  properties: Property[]
  nextCursor: string | null
  hasMore: boolean
}

/**
 * Enquiry form data
 */
export interface EnquiryFormData {
  propertyId: string
  name: string
  email: string
  phone?: string
  message?: string
  userId?: string
}

/**
 * Saved search criteria
 */
export interface SavedSearchCriteria {
  suburb?: string[]
  priceMin?: number
  priceMax?: number
  bedrooms?: { min?: number; max?: number }
  bathrooms?: { min?: number; max?: number }
  propertyType?: string[]
  status?: string
  keywords?: string[]
}

// ==================== UTILITY TYPES ====================

/**
 * Extract ID type from document
 */
export type Id<T extends NamedTableInfo<DataModel>> = GenericDocument<DataModel, T>["_id"]

/**
 * Create input type (without system fields)
 */
export type CreateProperty = Omit<Property, "_id" | "creationTime">
export type CreateUser = Omit<User, "_id" | "creationTime">
export type CreateAgency = Omit<Agency, "_id" | "creationTime">

// ==================== HELPER FUNCTIONS ====================

/**
 * Format price for display
 */
export function formatPrice(price?: number, priceGuide?: string): string {
  if (priceGuide) return priceGuide
  if (!price) return "Price on application"
  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
    maximumFractionDigits: 0,
  }).format(price)
}

/**
 * Format property address
 */
export function formatAddress(property: Pick<Property, "address" | "suburb" | "state" | "postcode">): string {
  const parts = [property.address, property.suburb, property.state, property.postcode].filter(Boolean)
  return parts.join(", ")
}

/**
 * Get property status badge color
 */
export function getStatusColor(status: string): string {
  switch (status.toLowerCase()) {
    case "active":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
    case "pending":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
    case "sold":
      return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
    case "withdrawn":
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    case "draft":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
  }
}

/**
 * Calculate days since listing
 */
export function getDaysListed(listedAt?: number): number | null {
  if (!listedAt) return null
  return Math.floor((Date.now() - listedAt) / (1000 * 60 * 60 * 24))
}

/**
 * Check if property has upcoming inspections
 */
export function hasUpcomingInspections(inspections?: Property["inspections"]): boolean {
  if (!inspections || inspections.length === 0) return false

  const now = new Date()
  return inspections.some(inspection => {
    const inspectionDate = new Date(`${inspection.date} ${inspection.time}`)
    return inspectionDate > now
  })
}

/**
 * Get next inspection date
 */
export function getNextInspection(inspections?: Property["inspections"]): Property["insights"] | null {
  if (!inspections || inspections.length === 0) return null

  const now = new Date()
  const upcoming = inspections
    .map(inspection => ({
      ...inspection,
      datetime: new Date(`${inspection.date} ${inspection.time}`),
    }))
    .filter(inspection => inspection.datetime > now)
    .sort((a, b) => a.datetime.getTime() - b.datetime.getTime())

  return upcoming[0] || null
}

/**
 * Format inspection display
 */
export function formatInspection(inspection: Property["inspections"][number]): string {
  return `${inspection.day} ${inspection.date} @ ${inspection.time}`
}

/**
 * Truncate text to specified length
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + "..."
}

/**
 * Generate property share URL
 */
export function getPropertyShareUrl(slug: string): string {
  if (typeof window === "undefined") return ""
  return `${window.location.origin}/properties/${slug}`
}

/**
 * Parse comma-separated string to array
 */
export function parseList(value: string | string[] | undefined): string[] {
  if (Array.isArray(value)) return value
  if (!value) return []
  return value.split(",").map(v => v.trim()).filter(Boolean)
}

/**
 * Convert filters to URL params
 */
export function filtersToSearchParams(filters: PropertyFilters): URLSearchParams {
  const params = new URLSearchParams()

  if (filters.suburb) params.set("suburb", filters.suburb)
  if (filters.status) params.set("status", filters.status)
  if (filters.priceMin) params.set("priceMin", filters.priceMin.toString())
  if (filters.priceMax) params.set("priceMax", filters.priceMax.toString())
  if (filters.bedrooms) params.set("bedrooms", filters.bedrooms.toString())
  if (filters.bathrooms) params.set("bathrooms", filters.bathrooms.toString())
  if (filters.isPrestige !== undefined) params.set("isPrestige", filters.isPrestige.toString())
  if (filters.propertyType) params.set("type", filters.propertyType.join(","))
  if (filters.keywords) params.set("keywords", filters.keywords.join(","))

  return params
}

/**
 * Parse URL params to filters
 */
export function searchParamsToFilters(searchParams: URLSearchParams): PropertyFilters {
  return {
    suburb: searchParams.get("suburb") || undefined,
    status: searchParams.get("status") || undefined,
    priceMin: searchParams.get("priceMin") ? Number(searchParams.get("priceMin")) : undefined,
    priceMax: searchParams.get("priceMax") ? Number(searchParams.get("priceMax")) : undefined,
    bedrooms: searchParams.get("bedrooms") ? Number(searchParams.get("bedrooms")) : undefined,
    bathrooms: searchParams.get("bathrooms") ? Number(searchParams.get("bathrooms")) : undefined,
    isPrestige: searchParams.get("isPrestige") === "true",
    propertyType: parseList(searchParams.get("type")),
    keywords: parseList(searchParams.get("keywords")),
  }
}
