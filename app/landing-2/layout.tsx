import { generatePageMetadata } from "@/lib/metadata"
import type { Metadata } from "next"

export const metadata: Metadata = generatePageMetadata({
  title: "Premium Real Estate | HAUS",
  description: "Discover luxury properties with AI-powered insights, verified listings, and elite agent network.",
  keywords: ["luxury homes", "real estate", "property search", "premium listings", "AI"],
})

export default function Landing2Layout({ children }: { children: React.ReactNode }) {
  return children
}
