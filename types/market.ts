/**
 * Market Intelligence Types
 *
 * @description
 * Type definitions for market intelligence data including global metrics,
 * regional statistics, transaction records, and market analysis.
 */

/**
 * Geographic region classification
 */
export type MarketRegion = 'north-america' | 'emea' | 'apac' | 'latam' | 'global'

/**
 * Asset class categorization
 */
export type AssetClass = 'residential' | 'commercial' | 'industrial' | 'land' | 'mixed-use'

/**
 * Market trend direction
 */
export type TrendDirection = 'up' | 'down' | 'stable'

/**
 * Time period for data aggregation
 */
export type TimePeriod = '1h' | '1d' | '1w' | '1m' | '1q' | '1y' | 'all'

/**
 * Transaction status
 */
export type TransactionStatus = 'pending' | 'completed' | 'withdrawn' | 'failed'

/**
 * Property type in transactions
 */
export type PropertyTypeCode = 'res' | 'com' | 'vac' | 'lnd' | 'ind' | 'ret' | 'off' | 'hos'

/**
 * Market metric card data
 */
export interface MarketMetric {
  id: string
  title: string
  value: string | number
  change: number
  changeLabel: string
  icon: string
  trend: TrendDirection
  subtitle?: string
  description?: string
}

/**
 * Global market index data point
 */
export interface MarketIndex {
  timestamp: Date
  value: number
  change: number
  changePercent: number
  volume: number
}

/**
 * Regional market data
 */
export interface RegionalMarket {
  region: string
  code: string
  country: string
  city?: string
  currency: string
  medianPrice: number
  averagePrice: number
  pricePerUnit: string
  change: number
  changePercent: number
  trend: TrendDirection
  volume: number
  volumeLabel: string
  updateTime: Date
}

/**
 * Top performing market
 */
export interface TopPerformer {
  rank: number
  location: string
  area: string
  change: number
  changePercent: number
  volume: string
  volumeNumeric: number
  trend: TrendDirection
}

/**
 * Transaction record
 */
export interface Transaction {
  id: string
  assetName: string
  assetId: string
  location: string
  price: number
  currency: string
  priceFormatted: string
  propertyType: PropertyTypeCode
  propertyTypeLabel: string
  time: string
  timeAgo: string
  status: TransactionStatus
  statusLabel: string
  statusColor: 'emerald' | 'amber' | 'red' | 'neutral'
}

/**
 * Market filter options
 */
export interface MarketFilters {
  assetClasses: AssetClass[]
  regions: MarketRegion[]
  priceRange?: [number, number]
  propertyTypes?: PropertyTypeCode[]
  dateRange?: {
    start: Date
    end: Date
  }
  searchTerm?: string
}

/**
 * Chart data point
 */
export interface ChartDataPoint {
  label: string
  value: number
  timestamp?: Date
}

/**
 * Time series data for charts
 */
export interface TimeSeriesData {
  period: string
  value: number
  volume?: number
  timestamp: Date
}

/**
 * Market analysis summary
 */
export interface MarketAnalysis {
  period: TimePeriod
  summary: {
    totalVolume: string
    totalChange: number
    totalChangePercent: string
    marketVelocity: string
    activeListings: number
    averageYield: string
  }
  trend: TrendDirection
  outlook: 'bullish' | 'bearish' | 'neutral'
  keyInsights: string[]
}

/**
 * Live ticker item
 */
export interface TickerItem {
  city: string
  value: string
  change: number
  changePercent: number
  trend: TrendDirection
}

/**
 * Filter state for market intelligence
 */
export interface MarketFilterState {
  assetClass: AssetClass[]
  region: MarketRegion[]
  timePeriod: TimePeriod
  priceRange: [number, number]
  searchTerm: string
  sortBy: 'price' | 'change' | 'volume' | 'date'
  sortOrder: 'asc' | 'desc'
}
