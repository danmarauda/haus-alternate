/**
 * Residential Intelligence Types
 *
 * @description
 * Type definitions for residential market intelligence including
 * auction data, property listings, valuation metrics, and suburb analytics.
 */

/**
 * Australian state/territory
 */
export type AUState = 'NSW' | 'VIC' | 'QLD' | 'WA' | 'SA' | 'TAS' | 'NT' | 'ACT'

/**
 * Property type for residential
 */
export type ResidentialType = 'house' | 'unit' | 'townhouse' | 'land' | 'rural'

/**
 * Auction result status
 */
export type AuctionResult = 'sold' | 'passed-in' | 'withdrawn' | 'vendor-bid' | 'sold-prior' | 'private-treaty'

/**
 * Research list status
 */
export type ListStatus = 'active' | 'review' | 'archived'

/**
 * Property watch priority
 */
export type WatchPriority = 'auction-sat' | 'negotiating' | 'price-drop' | 'new-listing'

/**
 * Auction clearance metrics
 */
export interface AuctionMetrics {
  clearanceRate: number
  totalAuctions: number
  sold: number
  passedIn: number
  withdrawn: number
  vendorBid: number
  priorSale: number
  change: number
  changeDirection: 'up' | 'down' | 'neutral'
}

/**
 * Home value index data
 */
export interface HomeValueIndex {
  value: number
  change: number
  changePercent: number
  period: string
  trend: 'up' | 'down' | 'stable'
}

/**
 * Market velocity indicator
 */
export interface MarketVelocity {
  daysOnMarket: number
  change: number
  changeDirection: 'up' | 'down'
  trend: 'faster' | 'slower' | 'stable'
}

/**
 * Rental yield data
 */
export interface RentalYield {
  yield: number
  change: number
  vacancyRate: number
  trend: 'up' | 'down' | 'stable'
}

/**
 * Suburb market data
 */
export interface SuburbData {
  name: string
  postcode: string
  state: AUState
  country: string
  medianPrice: number
  changePercent: number
  period: string
  trend: 'up' | 'down'
}

/**
 * Property listing for auction
 */
export interface AuctionListing {
  address: string
  suburb: string
  state: AUState
  postcode: string
  features: {
    bedrooms?: number
    bathrooms?: number
    carSpaces?: number
    landSize?: string
    buildingSize?: string
    specialFeatures?: string[]
  }
  price?: {
    estimate?: {
      low: number
      high: number
      formatted: string
    }
    sold?: number
    offer?: number
    formatted?: string
  }
  propertyType: ResidentialType
  result: AuctionResult
  resultLabel: string
  resultColor: 'emerald' | 'amber' | 'red' | 'neutral'
  tags?: string[]
}

/**
 * Research list for tracking properties
 */
export interface ResearchList {
  id: string
  name: string
  propertyCount: number
  status: ListStatus
  statusLabel: string
  lastUpdated?: string
  tags: string[]
}

/**
 * Priority watch property
 */
export interface WatchProperty {
  id: string
  address: string
  suburb: string
  state: AUState
  priority: WatchPriority
  priorityLabel: string
  priorityColor: 'emerald' | 'amber' | 'red' | 'blue'
  price?: {
    estimate?: string
    offer?: string
  }
  tags: string[]
}

/**
 * Capital city index data point
 */
export interface CapitalCityIndex {
  city: string
  value: number
  change: number
  changePercent: number
  timestamp: Date
}

/**
 * National statistics
 */
export interface NationalStats {
  auctionClearance: AuctionMetrics
  homeValueIndex: HomeValueIndex
  daysOnMarket: MarketVelocity
  rentalYield: RentalYield
  newListings: {
    count: number
    change: number
    changePercent: number
    note: string
  }
  vacancyRate: {
    rate: number
    change: number
    note: string
  }
  vendorDiscount: {
    discount: number
    change: number
    note: string
  }
  investorLending: {
    share: number
    change: number
    note: string
  }
}

/**
 * Time series chart data
 */
export interface TimeSeriesChart {
  label: string
  value: number
  timestamp?: Date
}

/**
 * Market chart type selector
 */
export type ChartType = 'index' | 'volume' | 'yields'

/**
 * Filter state for residential intelligence
 */
export interface ResidentialFilters {
  states: AUState[]
  propertyTypes: ResidentialType[]
  priceRange?: [number, number]
  bedrooms?: number
  includeUnderContract: boolean
  includeAuction: boolean
  sortBy: 'price' | 'change' | 'yield' | 'days-on-market'
  sortOrder: 'asc' | 'desc'
}

/**
 * Market summary for a region
 */
export interface RegionalMarketSummary {
  state: AUState
  capital: string
  medianPrice: number
  change: number
  auctionClearance: number
  daysOnMarket: number
  rentalYield: number
}

/**
 * User profile for buyer's agent
 */
export interface BuyerAgentProfile {
  initials: string
  name: string
  title: string
  avatar?: string
}
