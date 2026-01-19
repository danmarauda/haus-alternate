/**
 * Agent Dashboard Types
 *
 * @description
 * TypeScript interfaces for the Agent Dashboard page, including campaigns,
 * leads, performance metrics, and schedule events.
 */

/**
 * Navigation item in the workflow sidebar
 */
export interface NavItem {
  id: string
  label: string
  icon: string
  count?: number | string
  isActive?: boolean
  href?: string
}

/**
 * Performance metrics for the agent
 */
export interface PerformanceMetrics {
  gciGoal: string
  currentGCI: string
  percentage: number
  period: string
}

/**
 * Lead information for hot leads section
 */
export interface Lead {
  id: string
  initials: string
  name: string
  type: string
  status: "WARM" | "HOT" | "COLD"
  statusColor: "indigo" | "emerald" | "blue"
  timeAgo: string
}

/**
 * Quick tool in the tools grid
 */
export interface QuickTool {
  id: string
  label: string
  icon: string
  href?: string
}

/**
 * Feed item type (message, campaign, or appraisal)
 */
export type FeedItemType = "message" | "campaign" | "appraisal" | "alert"

/**
 * Message from a lead
 */
export interface MessageFeed {
  type: "message"
  id: string
  sender: {
    initials: string
    name: string
    propertyContext?: string
  }
  message: string
  timeAgo: string
  hasMessageAction?: boolean
  actions?: Array<{
    label: string
    icon?: string
    href?: string
  }>
}

/**
 * Active campaign card data
 */
export interface CampaignFeed {
  type: "campaign"
  id: string
  image: string
  address: string
  suburb: string
  vendor: string
  badges: Array<{
    text: string
    color?: string
    icon?: string
  }>
  healthScore: number
  stats: {
    enquiries: number
    groups: number
    contracts: number
  }
  lastUpdate: string[]
  actions?: Array<{
    label: string
    primary?: boolean
    href?: string
  }>
}

/**
 * Pre-market appraisal card data
 */
export interface AppraisalFeed {
  type: "appraisal"
  id: string
  image: string
  address: string
  suburb: string
  potentialPrice: string
  appraisalTime: string
  cmaViews: number
  actions?: Array<{
    label: string
    primary?: boolean
    href?: string
  }>
}

/**
 * Alert/action required card
 */
export interface AlertFeed {
  type: "alert"
  id: string
  title: string
  message: string
  severity: "orange" | "red" | "amber"
  actions?: Array<{
    label: string
    icon?: string
    href?: string
    color?: string
  }>
}

/**
 * Union type for all feed items
 */
export type FeedItem = MessageFeed | CampaignFeed | AppraisalFeed | AlertFeed

/**
 * Schedule event type
 */
export type ScheduleEventType = "open-home" | "appraisal" | "meeting" | "call"

/**
 * Schedule event
 */
export interface ScheduleEvent {
  id: string
  type: ScheduleEventType
  time: string
  title: string
  subtitle: string
  color: "indigo" | "purple" | "blue" | "emerald"
}

/**
 * Communication or alert item
 */
export interface CommunicationItem {
  id: string
  type: "missed-call" | "enquiry" | "system"
  title: string
  message: string
  timeAgo: string
  color: "red" | "blue" | "orange"
}

/**
 * Pipeline value projection
 */
export interface PipelineValue {
  projectedGCI: string
  currentPercentage: number
  targetMonth: string
}

/**
 * Tool type for filtering
 */
export type ToolType = "appraisal" | "title-search" | "vendor-report" | "crm"
