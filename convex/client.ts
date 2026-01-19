/**
 * Convex Client Configuration for HAUS Platform
 *
 * Creates typed Convex client for server-side usage
 */

import { ConvexReactClient } from "convex/react"

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL ?? ""

if (!convexUrl) {
  // Don't throw error in build time, only at runtime
  console.warn("NEXT_PUBLIC_CONVEX_URL environment variable is not set")
}

/**
 * Create a new Convex client
 * @throws Error if NEXT_PUBLIC_CONVEX_URL is not configured
 */
export function makeConvexClient(): ConvexReactClient {
  if (!convexUrl) {
    throw new Error("NEXT_PUBLIC_CONVEX_URL environment variable is not set")
  }
  return new ConvexReactClient(convexUrl)
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
