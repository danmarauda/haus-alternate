/**
 * Convex Context Provider for HAUS Platform
 *
 * Provides typed Convex client throughout the app
 * Wrap your root layout with this component
 */

"use client"

import { ReactNode } from "react"
import { ConvexProvider, ConvexReactClient } from "convex/react"
import { makeConvexClient } from "../../convex/client"

interface ConvexContextProviderProps {
  children: ReactNode
}

/**
 * HAUS Platform Convex Provider
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
export function ConvexContextProvider({ children }: ConvexContextProviderProps) {
  const convex = makeConvexClient()

  return (
    <ConvexProvider client={convex}>
      {children}
    </ConvexProvider>
  )
}

/**
 * Helper hook to check Convex configuration status
 */
export function useConvexStatus() {
  const url = process.env.NEXT_PUBLIC_CONVEX_URL ?? ""
  const isConfigured = !!url

  return {
    isConfigured,
    convexUrl: url,
  }
}
