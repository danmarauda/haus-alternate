/**
 * Convex Client Configuration for HAUS Platform
 *
 * Creates typed Convex client for server-side usage
 */

import { ConvexReactClient } from "convex/react"

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL ?? ""

if (!convexUrl && typeof window === "undefined") {
  // Only warn at build time, not at runtime
  console.warn("[Convex] NEXT_PUBLIC_CONVEX_URL environment variable is not set")
}

/**
 * Create a new Convex client
 * Returns a mock client when Convex is not configured (demo mode)
 */
export function makeConvexClient(): ConvexReactClient {
  if (!convexUrl) {
    // Return a mock client for demo mode
    console.warn("[Convex] Running in demo mode - Convex backend not configured")
    return createMockClient()
  }
  return new ConvexReactClient(convexUrl)
}

/**
 * Create a mock Convex client for demo mode
 * This allows the app to run without Convex backend
 */
function createMockClient(): ConvexReactClient {
  // Create a minimal mock client that prevents crashes
  const mockUrl = "http://localhost:3001/mock"
  const client = new ConvexReactClient(mockUrl, {
    // Configure to not throw errors
    skipConvexDeploymentUrlCheck: true as any,
  })

  // Mark as mock for debugging
  ;(client as any)._isMock = true

  return client
}

/**
 * Get the Convex deployment URL
 */
export function getConvexUrl(): string {
  return convexUrl
}

/**
 * Check if Convex is properly configured
 */
export function isConvexConfigured(): boolean {
  return !!convexUrl
}

/**
 * Check if running in demo mode (Convex not configured)
 */
export function isDemoMode(): boolean {
  return !convexUrl && typeof window !== "undefined"
}
