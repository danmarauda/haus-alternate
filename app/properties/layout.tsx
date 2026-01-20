import { generatePageMetadata } from "@/lib/metadata"
import type { Metadata } from "next"

export const metadata: Metadata = generatePageMetadata({
  title: "Properties | HAUS",
  description: "Browse luxury properties with AI-powered insights, verified listings, and comprehensive market data.",
  keywords: ["properties", "listings", "real estate", "property search", "homes"],
})

export default function PropertiesLayout({ children }: { children: React.ReactNode }) {
  return children
}
