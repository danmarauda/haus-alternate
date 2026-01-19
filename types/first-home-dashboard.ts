/**
 * First Home Buyer Dashboard Types
 *
 * @description
 * TypeScript interfaces for the First Home Buyer Dashboard page,
 * including budget, properties, inspections, and documents.
 */

/**
 * Buyer journey step
 */
export interface JourneyStep {
  id: number
  label: string
  status: "completed" | "active" | "pending"
  subtitle?: string
  icon?: string
}

/**
 * Budget information
 */
export interface BudgetInfo {
  maxBudget: string
  depositSaved: string
  depositRequired: string
  depositPercentage: number
  weeklyBudget: number
  estimatedRepayment: number
  interestRate: number
  loanAmount: string
}

/**
 * Grant or incentive information
 */
export interface GrantInfo {
  name: string
  status: "active" | "pending" | "applied"
  amount?: string
}

/**
 * Property in watchlist
 */
export interface WatchlistProperty {
  id: string
  image: string
  address: string
  suburb: string
  priceRange: string
  priceType: "range" | "guide"
  matchPercentage?: number
  badges: Array<{
    text: string
    color: "emerald" | "amber" | "blue"
  }>
  features: {
    beds: number
    baths: number
    cars: number
  }
  estimatedRepayment?: {
    weekly: string
    inBudget: boolean
  }
  renovationEstimate?: {
    amount: string
    budgetStatus: "tight" | "ok" | "comfortable"
  }
  saleType: "auction" | "private-treaty"
  actions?: Array<{
    label: string
    primary?: boolean
    icon?: string
    href?: string
  }>
}

/**
 * Inspection event
 */
export interface InspectionEvent {
  id: string
  time: string
  timeEnd?: string
  address: string
  notes?: string
  color: "emerald" | "neutral"
  warning?: string
}

/**
 * Document status
 */
export type DocumentStatus = "complete" | "pending" | "upload-required"

/**
 * Document in vault
 */
export interface DocumentItem {
  id: string
  name: string
  status: DocumentStatus
  uploadRequired?: boolean
}

/**
 * Support team contact
 */
export interface SupportContact {
  id: string
  initials: string
  name: string
  role: string
  status: string
  statusColor: "emerald" | "neutral"
  isOnline?: boolean
  actionIcon?: string
}

/**
 * Education article
 */
export interface EducationArticle {
  id: string
  category: string
  title: string
  description: string
  readTime?: string
  href?: string
  icon?: string
  gradientFrom?: string
}

/**
 * Repayment comfort level
 */
export type RepaymentComfort = "comfortable" | "tight" | "stretch"

/**
 * Budget slider value
 */
export interface BudgetSlider {
  min: number
  max: number
  value: number
  step: number
}
