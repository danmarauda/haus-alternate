/**
 * Appraisal Report Types
 *
 * @description
 * Type definitions for the appraisal report page including property details,
 * valuation metrics, comparable sales, and market analysis data.
 */

/**
 * Property type classification
 */
export type PropertyType = 'residential' | 'commercial' | 'land' | 'industrial' | 'mixed-use'

/**
 * Valuation method used for appraisal
 */
export type ValuationMethod = 'sales-comparison' | 'cost-approach' | 'income-capitalization' | 'hybrid'

/**
 * Quality rating of the property
 */
export type QualityRating = 'excellent' | 'good' | 'average' | 'fair' | 'poor'

/**
 * Property condition assessment
 */
export type PropertyCondition = 'new' | 'excellent' | 'good' | 'fair' | 'needs-repair'

/**
 * Comparable sale status
 */
export type SaleStatus = 'sold' | 'pending' | 'withdrawn' | 'active'

/**
 * Room type for property details
 */
export interface Room {
  type: string
  dimensions: string
  features: string[]
}

/**
 * Property image with metadata
 */
export interface PropertyImage {
  id: string
  url: string
  category: 'exterior' | 'interior' | 'aerial' | 'floorplan' | 'site'
  caption: string
  timestamp?: Date
}

/**
 * Property details for appraisal
 */
export interface Property {
  id: string
  address: string
  city: string
  state: string
  zipCode: string
  country: string
  propertyType: PropertyType
  yearBuilt: number
  yearRenovated?: number
  squareFootage: number
  lotSize: number
  bedrooms: number
  bathrooms: number
  parkingSpaces: number
  rooms: Room[]
  condition: PropertyCondition
  qualityRating: QualityRating
  images: PropertyImage[]
  features: string[]
  zoning: string
  legalDescription: string
}

/**
 * Valuation breakdown by method
 */
export interface ValuationMethodBreakdown {
  method: ValuationMethod
  value: number
  weight: number
  adjustedValue: number
  notes: string
}

/**
 * Complete valuation report
 */
export interface Valuation {
  propertyId: string
  reportId: string
  reportDate: Date
  effectiveDate: Date
  appraiser: {
    name: string
    certification: string
    license: string
    firm: string
  }
  estimatedValue: number
  valueRange: {
    low: number
    high: number
  }
  pricePerSquareFoot: number
  methods: ValuationMethodBreakdown[]
  adjustments: {
    category: string
    amount: number
    description: string
  }[]
  marketConditions: {
    trend: 'increasing' | 'stable' | 'decreasing'
    supply: 'high' | 'moderate' | 'low'
    demand: 'high' | 'moderate' | 'low'
    averageDaysOnMarket: number
    monthsOfInventory: number
  }
}

/**
 * Comparable property sale
 */
export interface ComparableSale {
  id: string
  address: string
  distance: number
  salePrice: number
  saleDate: Date
  saleStatus: SaleStatus
  propertyType: PropertyType
  squareFootage: number
  pricePerSquareFoot: number
  bedrooms: number
  bathrooms: number
  lotSize: number
  yearBuilt: number
  condition: PropertyCondition
  similarity: number
  adjustments: {
    type: string
    amount: number
    reason: string
  }[]
  adjustedPrice: number
  imageURL?: string
}

/**
 * Market trend data point
 */
export interface MarketTrend {
  period: string
  medianPrice: number
  averagePrice: number
  pricePerSquareFoot: number
  numberOfSales: number
  averageDaysOnMarket: number
}

/**
 * Location metrics for market analysis
 */
export interface LocationMetrics {
  neighborhood: string
  schoolRating: number
  crimeRate: 'low' | 'medium' | 'high'
  walkScore: number
  transitScore: number
  amenities: {
    groceries: number
    restaurants: number
    parks: number
    hospitals: number
  }
}

/**
 * Filter state for appraisal report
 */
export interface AppraisalFilters {
  propertyType?: PropertyType
  priceRange?: [number, number]
  squareFootageRange?: [number, number]
  yearBuiltRange?: [number, number]
  bedrooms?: number
  bathrooms?: number
  condition?: PropertyCondition
  dateRange?: {
    start: Date
    end: Date
  }
}

/**
 * Report generation options
 */
export interface ReportOptions {
  includePhotos: boolean
  includeFloorplans: boolean
  includeComparablePhotos: boolean
  includeMarketTrends: boolean
  includeLocationAnalysis: boolean
  format: 'pdf' | 'html' | 'excel'
}
