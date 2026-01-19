/**
 * Convex Type Utilities for HAUS Platform
 *
 * Helper types for validation and type safety
 */

import { defineTable } from "convex/server"

// Property Types
export const PROPERTY_TYPES = [
  "house",
  "apartment",
  "townhouse",
  "land",
  "commercial",
  "rural",
  "development"
] as const

export const PROPERTY_STATUS = [
  "active",
  "pending",
  "sold",
  "withdrawn",
  "draft"
] as const

export const PROPERTY_AMENITIES = [
  "Deep Water Jetty",
  "2000 Bottle Cellar",
  "Cinema Room",
  "Infinity Pool",
  "Biometric Security",
  "Smart Home Automation",
  "Tennis Court",
  "Wine Cellar",
  "Home Theater",
  "Gym",
  "Sauna",
  "Steam Room",
  "Swimming Pool",
  "Guest House",
  "Garage",
  "Garden",
  "Air Conditioning",
  "Heating",
  "Solar Panels"
] as const

// User Roles
export const USER_ROLES = [
  "admin",
  "agent",
  "buyer",
  "seller"
] as const

export const SUBSCRIPTION_TIERS = [
  "free",
  "professional",
  "enterprise"
] as const

// Document Types
export const DOCUMENT_TYPES = [
  "contract",
  "appraisal",
  "inspection",
  "floorplan",
  "title",
  "insurance",
  "other"
] as const

// Insight Types
export const INSIGHT_TYPES = [
  "market_alert",
  "valuation_update",
  "opportunity",
  "trend",
  "price_change",
  "competition"
] as const

// Notification Types
export const NOTIFICATION_TYPES = [
  "new_listing",
  "price_change",
  "inspection_reminder",
  "insight",
  "new_enquiry",
  "offer_received",
  "system"
] as const

// Lead Status
export const LEAD_STATUS = [
  "new",
  "contacted",
  "qualified",
  "proposal",
  "converted",
  "lost"
] as const

// Australian States
export const AU_STATES = [
  "NSW",
  "VIC",
  "QLD",
  "WA",
  "SA",
  "TAS",
  "ACT",
  "NT"
] as const

// Helper function to generate slugs
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

// Helper function to format price
export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
    maximumFractionDigits: 0,
  }).format(price)
}

// Helper function to format date
export function formatDate(timestamp: number): string {
  return new Intl.DateTimeFormat("en-AU", {
    dateStyle: "medium",
    timeZone: "Australia/Sydney",
  }).format(new Date(timestamp))
}
