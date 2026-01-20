import { Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface PageLoaderProps {
  size?: "sm" | "md" | "lg"
  fullScreen?: boolean
  text?: string
  className?: string
}

/**
 * Universal Loading State
 * Consistent loading UI across all pages
 */
export function PageLoader({
  size = "md",
  fullScreen = false,
  text = "Loading...",
  className,
}: PageLoaderProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  }

  const content = (
    <div className={cn("flex flex-col items-center justify-center gap-4", className)}>
      <Loader2 className={cn("animate-spin text-primary", sizeClasses[size])} />
      {text && (
        <p className="text-sm text-muted-foreground animate-pulse">{text}</p>
      )}
    </div>
  )

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex min-h-screen items-center justify-center bg-background/80 backdrop-blur-sm">
        {content}
      </div>
    )
  }

  return content
}

/**
 * Skeleton Page Loader
 * More detailed loading state with page structure preview
 */
export function SkeletonPage() {
  return (
    <div className="container py-12 space-y-8">
      {/* Header Skeleton */}
      <div className="space-y-4">
        <div className="h-8 w-1/3 animate-pulse rounded bg-muted" />
        <div className="h-4 w-1/2 animate-pulse rounded bg-muted" />
      </div>

      {/* Content Skeleton */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="space-y-4 rounded-lg border bg-card p-6"
          >
            <div className="h-48 w-full animate-pulse rounded bg-muted" />
            <div className="space-y-2">
              <div className="h-4 w-3/4 animate-pulse rounded bg-muted" />
              <div className="h-4 w-1/2 animate-pulse rounded bg-muted" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
