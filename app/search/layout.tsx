import { generatePageMetadata } from "@/lib/metadata"
import type { Metadata } from "next"

export const metadata: Metadata = generatePageMetadata({
  title: "Property Search | HAUS",
  description: "Discover your next investment with AI-powered property matching. Search thousands of verified listings with intelligent recommendations.",
  keywords: ["property search", "real estate", "AI matching", "home search"],
})

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return children
}
