import { generatePageMetadata } from "@/lib/metadata"
import type { Metadata } from "next"

export const metadata: Metadata = generatePageMetadata({
  title: "Market Analytics | HAUS",
  description: "Real-time market intelligence and analytics across global prime real estate markets. Track price indices, volume trends, and buyer activity.",
  keywords: ["market analytics", "real estate data", "price trends", "market intelligence", "global markets"],
})

export default function AnalyticsLayout({ children }: { children: React.ReactNode }) {
  return children
}
