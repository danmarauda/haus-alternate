/**
 * Convex Context Provider for HAUS Platform
 *
 * Provides typed Convex client throughout the app
 * Supports demo mode when Convex is not configured
 *
 * Usage in app/layout.tsx:
 *
 * import { ConvexContextProvider } from "@/components/providers/ConvexProvider"
 *
 * export default function RootLayout({ children }) {
 *   return (
 *     <ConvexContextProvider>
 *       {children}
 *     </ConvexContextProvider>
 *   )
 * }
 */

"use client"

import { ReactNode } from "react"
import { ConvexProvider, ConvexReactClient } from "convex/react"
import { makeConvexClient, isConvexConfigured } from "../../convex/client"

interface ConvexContextProviderProps {
  children: ReactNode
  /**
   * Show demo banner when Convex is not configured
   * @default true
   */
  showDemoBanner?: boolean
}

/**
 * Demo mode banner component
 */
function DemoBanner() {
  if (typeof window === "undefined") return null

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] bg-amber-500 text-black px-4 py-2 text-center text-sm font-medium">
      <div className="flex items-center justify-center gap-2 max-w-7xl mx-auto">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>
          <strong>Demo Mode:</strong> Convex backend not configured. Set <code className="px-1 py-0.5 bg-black/10 rounded text-xs">NEXT_PUBLIC_CONVEX_URL</code> environment variable to enable backend features.
        </span>
      </div>
    </div>
  )
}

/**
 * HAUS Platform Convex Provider
 *
 * Supports two modes:
 * 1. **Production Mode**: Full Convex backend when NEXT_PUBLIC_CONVEX_URL is set
 * 2. **Demo Mode**: Mock client with warning banner when Convex is not configured
 */
export function ConvexContextProvider({
  children,
  showDemoBanner = true
}: ConvexContextProviderProps) {
  const isConfigured = isConvexConfigured()
  const convex = makeConvexClient()
  const isMock = (convex as any)._isMock === true

  return (
    <ConvexProvider client={convex}>
      {!isConfigured && showDemoBanner && <DemoBanner />}
      {children}
    </ConvexProvider>
  )
}

/**
 * Helper hook to check Convex configuration status
 *
 * @example
 * function MyComponent() {
 *   const { isConfigured, convexUrl, isDemoMode } = useConvexStatus()
 *
 *   if (isDemoMode) {
 *     return <div>Demo mode active</div>
 *   }
 *
 *   return <div>Connected to {convexUrl}</div>
 * }
 */
export function useConvexStatus() {
  const url = process.env.NEXT_PUBLIC_CONVEX_URL ?? ""
  const isConfigured = !!url
  const isDemoMode = !isConfigured && typeof window !== "undefined"

  return {
    isConfigured,
    convexUrl: url,
    isDemoMode,
  }
}

/**
 * HOC to protect components that require Convex
 *
 * @example
 * function MyProtectedComponent() {
 *   const { requiresConvex } = useConvexStatus()
 *
 *   if (!requiresConvex) {
 *     return <ConvexRequiredFallback />
 *   }
 *
 *   return <MyComponent />
 * }
 */
export function RequiresConvex({
  children,
  fallback
}: {
  children: ReactNode
  fallback?: ReactNode
}) {
  const { isConfigured } = useConvexStatus()

  if (!isConfigured) {
    return fallback ?? (
      <div className="flex items-center justify-center min-h-screen bg-black text-white p-8">
        <div className="max-w-md text-center">
          <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold mb-2">Backend Required</h2>
          <p className="text-neutral-400 text-sm mb-4">
            This feature requires Convex backend to be configured.
          </p>
          <code className="px-3 py-2 bg-white/5 rounded-lg text-xs text-neutral-300">
            NEXT_PUBLIC_CONVEX_URL=your_convex_url
          </code>
        </div>
      </div>
    )
  }

  return children
}
