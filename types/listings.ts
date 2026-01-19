/**
 * Property Listings Type Definitions
 *
 * @description
 * TypeScript interfaces and types for HAUS property listing pages.
 * Supports standard listings, prestige listings, and search results with
 * comprehensive property data, AI matching scores, and market insights.
 *
 * @example
 * ```ts
 * import type { Property, PropertyImage, MarketInsight } from '@/types/listings'
 *
 * const property: Property = {
 *   id: 'wolseley-1',
 *   title: 'The Wolseley Residence',
 *   address: '24 Reservoir St, Surry Hills',
 *   price: 2850000,
 *   images: [...],
 *   features: {...}
 * }
 * ```
 *
 * @module types/listings
 */

/**
 * Property image with metadata
 */
export interface PropertyImage {
  /** Unique image identifier */
  id: string
  /** Image URL (optimized for Next.js Image component) */
  url: string
  /** Alt text for accessibility */
  alt: string
  /** Optional image caption/description */
  caption?: string
  /** Image category (exterior, interior, aerial, floorplan, etc.) */
  category?: 'exterior' | 'interior' | 'kitchen' | 'bedroom' | 'bathroom' | 'aerial' | 'floorplan' | 'other'
}

/**
 * Property features and amenities
 */
export interface PropertyFeatures {
  /** Number of bedrooms */
  bedrooms: number
  /** Number of bathrooms (can be decimal for half baths) */
  bathrooms: number
  /** Number of parking spaces */
  parking?: number
  /** Internal floor area in square meters */
  internalArea: number
  /** Total land area in square meters (if applicable) */
  landArea?: number
  /** Property type */
  type: 'house' | 'terrace' | 'apartment' | 'penthouse' | 'studio' | 'warehouse' | 'other'
  /** Year built */
  yearBuilt?: number
  /** Architectural style */
  architecture?: 'Victorian' | 'Georgian' | 'Contemporary' | 'Heritage' | 'Industrial' | 'Minimalist' | 'Other'
  /** Outdoor features */
  outdoor?: string[]
  /** Indoor features */
  indoor?: string[]
}

/**
 * Market insight and AI analysis
 */
export interface MarketInsight {
  /** AI match score (0-100) */
  matchScore?: number
  /** Estimated growth percentage */
  estimatedGrowth?: number
  /** Market comparison indicator */
  marketComparison?: 'above-market' | 'at-market' | 'below-market' | 'under-market-value'
  /** Demand level in the area */
  demandLevel?: 'low' | 'moderate' | 'high' | 'very-high'
  /** Supply level in the area */
  supplyLevel?: 'abundant' | 'balanced' | 'tight' | 'very-tight'
  /** Rental yield estimate */
  rentalYield?: number
  /** Capital growth forecast (1 year) */
  capitalGrowthForecast?: number
}

/**
 * Property badge/label
 */
export interface PropertyBadge {
  /** Badge type */
  type: 'ai-match' | 'new' | 'rare' | 'eco-rated' | 'prestige' | 'off-market' | 'price-drop' | 'pending' | 'auction'
  /** Badge display text */
  text: string
  /** Badge icon name (lucide-react) */
  icon?: 'sparkles' | 'gem' | 'leaf' | 'crown' | 'zap' | 'trending-down' | 'clock'
  /** Badge color variant */
  color: 'indigo' | 'emerald' | 'purple' | 'amber' | 'neutral'
  /** Percentage or value to display */
  value?: string
}

/**
 * Property pricing information
 */
export interface PropertyPricing {
  /** Current listing price in AUD */
  current: number
  /** Original price (if changed) */
  original?: number
  /** Price display text (e.g., '$2,850,000') */
  display: string
  /** Sale method */
  method: 'fixed-price' | 'auction' | 'expression-of-interest' | 'tender' | 'off-market'
  /** Auction date (if applicable) */
  auctionDate?: string
  /** Price per square meter */
  pricePerSqm?: number
}

/**
 * Property listing data
 */
export interface Property {
  /** Unique property identifier */
  id: string
  /** Property title/name */
  title: string
  /** Street address */
  address: string
  /** Suburb */
  suburb: string
  /** State */
  state: string
  /** Postcode */
  postcode: string
  /** Full address string */
  fullAddress: string
  /** Pricing information */
  pricing: PropertyPricing
  /** Property images */
  images: PropertyImage[]
  /** Property features */
  features: PropertyFeatures
  /** Market insights */
  insights?: MarketInsight
  /** Property badges/labels */
  badges?: PropertyBadge[]
  /** Property description */
  description?: string
  /** Agent/Listing contact */
  agent?: {
    name: string
    agency: string
    phone?: string
    email?: string
    image?: string
  }
  /** Listing status */
  status: 'available' | 'pending' | 'sold' | 'off-market'
  /** Is prestige listing */
  isPrestige?: boolean
  /** Latitude for map */
  latitude?: number
  /** Longitude for map */
  longitude?: number
  /** Virtual tour URL */
  virtualTourUrl?: string
  /** Floorplan URL */
  floorplanUrl?: string
}

/**
 * Filter state for search results
 */
export interface ListingFilters {
  /** Search query */
  search: string
  /** Location filter */
  location: string
  /** Price range */
  priceRange: [number, number] | null
  /** Bedroom filter */
  bedrooms: number | null
  /** Bathroom filter */
  bathrooms: number | null
  /** Property type filter */
  propertyType: string[]
  /** Minimum internal area */
  minArea: number | null
  /** AI match only */
  aiMatchOnly: boolean
  /** Off-market only */
  offMarketOnly: boolean
  /** Eco-rated only */
  ecoRatedOnly: boolean
  /** Sort option */
  sortBy: 'newest' | 'price-asc' | 'price-desc' | 'match-score' | 'popularity'
}

/**
 * View mode for listings display
 */
export type ListingViewMode = 'grid' | 'list' | 'map'

/**
 * Sort options with display names
 */
export const SORT_OPTIONS = [
  { value: 'match-score', label: 'Best Match' },
  { value: 'newest', label: 'Newest' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'popularity', label: 'Most Popular' }
] as const

/**
 * Property type options
 */
export const PROPERTY_TYPES = [
  { value: 'house', label: 'House' },
  { value: 'terrace', label: 'Terrace' },
  { value: 'apartment', label: 'Apartment' },
  { value: 'penthouse', label: 'Penthouse' },
  { value: 'studio', label: 'Studio' },
  { value: 'warehouse', label: 'Warehouse' }
] as const
