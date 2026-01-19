"use client"

/**
 * Convex Client Provider
 *
 * Wraps the application with Convex provider for real-time data synchronization.
 * This should be used in app/layout.tsx to enable Convex throughout the app.
 */

import { ConvexProvider, ConvexReactClient } from "convex/react"
import { ReactNode } from "react"

interface ConvexClientProviderProps {
  children: ReactNode
}

/**
 * Initialize Convex client with environment variable
 */
function getConvexClient(): ConvexReactClient | null {
  const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL

  if (!convexUrl) {
    if (typeof window !== "undefined") {
      console.warn("NEXT_PUBLIC_CONVEX_URL is not configured. Convex features will be disabled.")
    }
    return null
  }

  try {
    const client = new ConvexReactClient(convexUrl, {
      // Enable verbose logging in development
      verbose: process.env.NODE_ENV === "development",
      // Configure connection options
      unsavedChangesWarning: true,
    })

    return client
  } catch (error) {
    console.error("Failed to initialize Convex client:", error)
    return null
  }
}

/**
 * Convex Provider Component
 *
 * Provides Convex client to all child components.
 * Falls back gracefully if Convex is not configured.
 */
export function ConvexClientProvider({ children }: ConvexClientProviderProps) {
  const client = getConvexClient()

  // If Convex is not configured, still render children
  if (!client) {
    return <>{children}</>
  }

  return (
    <ConvexProvider client={client}>
      {children}
    </ConvexProvider>
  )
}

/**
 * Hook to check if Convex is available
 * Useful for conditional feature rendering
 */
export function useIsConvexEnabled(): boolean {
  return !!process.env.NEXT_PUBLIC_CONVEX_URL
}
