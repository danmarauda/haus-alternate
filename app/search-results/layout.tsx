import { generatePageMetadata } from "@/lib/metadata"
import type { Metadata } from "next"

export const metadata: Metadata = generatePageMetadata({
  title: "Search Results | HAUS",
  description: "Browse property search results with advanced filtering, AI-powered recommendations, and comprehensive property details.",
  keywords: ["property search", "real estate listings", "home search", "property finder", "house hunting"],
})

export default function SearchResultsLayout({ children }: { children: React.ReactNode }) {
  return children
}
