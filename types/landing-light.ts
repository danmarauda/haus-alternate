/**
 * Landing Light Page Types
 *
 * Type definitions for the light-themed landing page components
 */

import { LucideIcon } from "lucide-react"

/**
 * Platform statistics displayed on the landing page
 */
export interface PlatformStat {
  value: string
  label: string
}

/**
 * Feature/capability card with icon and metadata
 */
export interface FeatureCard {
  id: string
  title: string
  subtitle: string
  description: string
  tags: string[]
  icon: LucideIcon
  imageSrc?: string
}

/**
 * Property listing card
 */
export interface PropertyListing {
  id: string
  title: string
  location: string
  price: string
  beds: number
  baths: number
  sqft: number
  imageSrc: string
  badge?: string
}

/**
 * Testimonial data
 */
export interface Testimonial {
  quote: string
  author: string
  company: string
  imageSrc: string
}

/**
 * Fee breakdown item for transparency receipt
 */
export interface FeeBreakdown {
  label: string
  value: string
}

/**
 * ROI Calculator state
 */
export interface ROICalculatorState {
  purchasePrice: number
  holdingPeriod: number
  totalReturn: number
  annualAppreciation: number
}
