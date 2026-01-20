import { generatePageMetadata } from "@/lib/metadata"
import type { Metadata } from "next"

export const metadata: Metadata = generatePageMetadata({
  title: "Luxury Property Search | HAUS",
  description: "Find your dream property with HAUS. AI-powered recommendations, verified listings, and expert guidance.",
  keywords: ["property search", "luxury homes", "real estate", "house hunting", "AI"],
})

export default function Landing4Layout({ children }: { children: React.ReactNode }) {
  return children
}
