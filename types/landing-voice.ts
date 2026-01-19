/**
 * Landing Voice Type Definitions
 *
 * @description
 * TypeScript interfaces for the HAUS voice-first landing page.
 * Includes voice search states, property cards, FAQ items, and feature metrics.
 *
 * @example
 * ```ts
 * import type { VoiceSearchState, FeaturedProperty } from '@/types/landing-voice'
 *
 * const voiceState: VoiceSearchState = {
 *   isListening: false,
 *   transcript: '',
 *   results: null
 * }
 * ```
 *
 * @module types/landing-voice
 */

/**
 * Voice search state and results
 */
export interface VoiceSearchState {
  /** Whether voice recognition is active */
  isListening: boolean
  /** Current voice transcript */
  transcript: string
  /** Search results from voice query */
  results: VoiceSearchResult | null
  /** Recognition accuracy percentage */
  accuracy?: number
}

/**
 * Voice search result data
 */
export interface VoiceSearchResult {
  /** Unique result identifier */
  id: string
  /** Search query used */
  query: string
  /** Number of properties found */
  propertyCount: number
  /** Search duration in milliseconds */
  searchTime: number
  /** Array of matching property IDs */
  matches: string[]
  /** Search confidence score (0-1) */
  confidence: number
}

/**
 * Featured property card data
 */
export interface FeaturedProperty {
  /** Unique property identifier */
  id: string
  /** Property title */
  title: string
  /** Location/suburb name */
  location: string
  /** Listing price in AUD */
  price: number
  /** Number of bedrooms */
  bedrooms: number
  /** Number of bathrooms */
  bathrooms: number
  /** Property size in square feet */
  size: number
  /** Main property image URL */
  imageUrl: string
  /** Property URL slug */
  slug: string
}

/**
 * FAQ item with answer
 */
export interface FAQItem {
  /** Question text */
  question: string
  /** Detailed answer */
  answer: string
  /** Whether item is expanded (controlled state) */
  isOpen?: boolean
}

/**
 * Platform metric/statistic
 */
export interface PlatformMetric {
  /** Metric label */
  label: string
  /** Metric value (can include suffixes like '%', 'K', '+') */
  value: string
  /** Optional description */
  description?: string
  /** Icon component name (from lucide-react) */
  icon?: string
}

/**
 * Feature highlight card
 */
export interface FeatureHighlight {
  /** Feature title */
  title: string
  /** Feature description */
  description: string
  /** Icon component name */
  icon: string
  /** Optional stat/value */
  stat?: string
}

/**
 * Transparency receipt item
 */
export interface ReceiptItem {
  /** Item label */
  label: string
  /** Cost/value */
  value: string
  /** Whether this is a final total */
  isTotal?: boolean
}
