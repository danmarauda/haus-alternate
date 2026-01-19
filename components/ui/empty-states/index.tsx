/**
 * Empty State Components for HAUS Platform
 *
 * Reusable empty state components for:
 * - No search results
 * - No saved properties
 * - No documents
 * - No insights
 * - No notifications
 * - Error states
 */

import { cn } from "@/lib/utils"
import { HomeIcon, Search, FileText, Bell, Sparkles, Inbox, AlertCircle, Users } from "lucide-react"

// ==================== BASE EMPTY STATE ====================
interface EmptyStateProps {
  icon?: React.ReactNode
  title: string
  description?: string
  action?: {
    label: string
    onClick: () => void
    variant?: "primary" | "secondary"
  }
  className?: string
}

export function EmptyState({
  icon,
  title,
  description,
  action,
  className,
}: EmptyStateProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center p-8 text-center", className)}>
      {icon && (
        <div className="w-16 h-16 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center mb-4 text-neutral-400">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-2">
        {title}
      </h3>
      {description && (
        <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-sm mb-6">
          {description}
        </p>
      )}
      {action && (
        <button
          onClick={action.onClick}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition",
            action.variant === "primary"
              ? "bg-black dark:bg-white text-white dark:text-black"
              : "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-700"
          )}
        >
          {action.label}
        </button>
      )}
    </div>
  )
}

// ==================== PROPERTY EMPTY STATES ====================

export function NoProperties({
  onCreateListing,
  onSearch
}: {
  onCreateListing?: () => void
  onSearch?: () => void
}) {
  return (
    <EmptyState
      icon={<HomeIcon className="w-8 h-8" />}
      title="No properties found"
      description="We couldn't find any properties matching your criteria. Try adjusting your filters or search terms."
      action={
        onSearch
          ? { label: "Browse all properties", onClick: onSearch }
          : onCreateListing
          ? { label: "Create listing", onClick: onCreateListing, variant: "primary" }
          : undefined
      }
    />
  )
}

export function NoSavedProperties({ onBrowse }: { onBrowse?: () => void }) {
  return (
    <EmptyState
      icon={<Inbox className="w-8 h-8" />}
      title="No saved properties"
      description="Save properties to quickly access them later. Click the heart icon on any listing to save it."
      action={onBrowse ? { label: "Browse properties", onClick: onBrowse } : undefined}
    />
  )
}

export function NoSearchResults({ query, onClear }: { query?: string; onClear?: () => void }) {
  return (
    <EmptyState
      icon={<Search className="w-8 h-8" />}
      title="No results found"
      description={
        query
          ? `No properties match "${query}". Try different keywords or filters.`
          : "Try adjusting your search filters to find what you're looking for."
      }
      action={onClear ? { label: "Clear filters", onClick: onClear } : undefined}
    />
  )
}

// ==================== DOCUMENT EMPTY STATE ====================

export function NoDocuments({ onUpload }: { onUpload?: () => void }) {
  return (
    <EmptyState
      icon={<FileText className="w-8 h-8" />}
      title="No documents yet"
      description="Upload contracts, appraisals, inspections, and other documents to your secure vault."
      action={onUpload ? { label: "Upload document", onClick: onUpload, variant: "primary" } : undefined}
    />
  )
}

export function NoDocumentsCategory({ category }: { category: string }) {
  return (
    <EmptyState
      icon={<FileText className="w-8 h-8" />}
      title={`No ${category} documents`}
      description={`You don't have any ${category.toLowerCase()} documents yet.`}
    />
  )
}

// ==================== INSIGHTS EMPTY STATE ====================

export function NoInsights({ onRefresh }: { onRefresh?: () => void }) {
  return (
    <EmptyState
      icon={<Sparkles className="w-8 h-8" />}
      title="No insights yet"
      description="Our AI is analyzing the market. Check back soon for personalized insights and recommendations."
      action={onRefresh ? { label: "Refresh", onClick: onRefresh } : undefined}
    />
  )
}

// ==================== NOTIFICATIONS EMPTY STATE ====================

export function NoNotifications({ onConfigure }: { onConfigure?: () => void }) {
  return (
    <EmptyState
      icon={<Bell className="w-8 h-8" />}
      title="All caught up!"
      description="You have no new notifications. We'll notify you when something important happens."
      action={onConfigure ? { label: "Configure notifications", onClick: onConfigure } : undefined}
    />
  )
}

// ==================== LEADS/ENQUIRIES EMPTY STATE ====================

export function NoLeads() {
  return (
    <EmptyState
      icon={<Inbox className="w-8 h-8" />}
      title="No enquiries yet"
      description="When buyers enquire about your properties, they'll appear here."
    />
  )
}

// ==================== TEAM/AGENTS EMPTY STATE ====================

export function NoTeamMembers({ onInvite }: { onInvite?: () => void }) {
  return (
    <EmptyState
      icon={<Users className="w-8 h-8" />}
      title="No team members yet"
      description="Invite agents and staff to collaborate on listings and manage enquiries together."
      action={onInvite ? { label: "Invite member", onClick: onInvite, variant: "primary" } : undefined}
    />
  )
}

// ==================== MARKET DATA EMPTY STATE ====================

export function NoMarketData({ suburb }: { suburb?: string }) {
  return (
    <EmptyState
      icon={<AlertCircle className="w-8 h-8" />}
      title="No market data available"
      description={
        suburb
          ? `Market intelligence for ${suburb} is coming soon. We're analyzing data for this area.`
          : "Market intelligence is coming soon. We're currently analyzing data for this area."
      }
    />
  )
}

// ==================== SEARCH EMPTY STATE ====================

export function NoRecentSearches({ onSearch }: { onSearch?: () => void }) {
  return (
    <EmptyState
      icon={<Search className="w-8 h-8" />}
      title="No recent searches"
      description="Your recent searches will appear here for quick access."
      action={onSearch ? { label: "Start searching", onClick: onSearch, variant: "primary" } : undefined}
    />
  )
}

// ==================== ERROR EMPTY STATES ====================

export function ErrorState({
  title = "Something went wrong",
  description = "We encountered an error. Please try again.",
  onRetry
}: {
  title?: string
  description?: string
  onRetry?: () => void
}) {
  return (
    <EmptyState
      icon={<AlertCircle className="w-8 h-8 text-rose-500" />}
      title={title}
      description={description}
      action={onRetry ? { label: "Try again", onClick: onRetry } : undefined}
    />
  )
}

export function NetworkError({ onRetry }: { onRetry: () => void }) {
  return (
    <ErrorState
      title="Connection lost"
      description="Please check your internet connection and try again."
      onRetry={onRetry}
    />
  )
}

// ==================== LOADING/PROCESSING STATE ====================

export function ProcessingState({ message = "Processing..." }: { message?: string }) {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <div className="w-16 h-16 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center mb-4">
        <div className="w-8 h-8 border-4 border-neutral-300 border-t-black dark:border-neutral-600 dark:border-t-white rounded-full animate-spin" />
      </div>
      <h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-2">
        {message}
      </h3>
      <p className="text-sm text-neutral-500 dark:text-neutral-400">
        This may take a moment...
      </p>
    </div>
  )
}

// ==================== CARD VARIANT ====================

interface EmptyCardProps {
  icon?: React.ReactNode
  title: string
  value?: string | number
  trend?: string
  className?: string
}

export function EmptyStatCard({ icon, title, value = "—", trend, className }: EmptyCardProps) {
  return (
    <div className={cn("bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6", className)}>
      <div className="flex items-center justify-between mb-4">
        <div className="w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-400">
          {icon || <Sparkles className="w-5 h-5" />}
        </div>
        {trend && (
          <span className={cn(
            "text-xs font-medium",
            trend.startsWith("+") ? "text-emerald-600" : "text-rose-600"
          )}>
            {trend}
          </span>
        )}
      </div>
      <div className="text-2xl font-display text-neutral-900 dark:text-white mb-1">
        {value}
      </div>
      <div className="text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
        {title}
      </div>
    </div>
  )
}
