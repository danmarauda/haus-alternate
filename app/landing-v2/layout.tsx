import { generatePageMetadata } from "@/lib/metadata"
import type { Metadata } from "next"

export const metadata: Metadata = generatePageMetadata({
  title: "Premium Property Platform | HAUS",
  description: "Elevated real estate experience with luxury listings, market insights, and concierge services.",
  keywords: ["premium real estate", "luxury platform", "exclusive listings", "market data"],
})

export default function LandingV2Layout({ children }: { children: React.ReactNode }) {
  return children
}
