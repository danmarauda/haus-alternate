import { generatePageMetadata } from "@/lib/metadata"
import type { Metadata } from "next"

export const metadata: Metadata = generatePageMetadata({
  title: "Sell Your Property | HAUS",
  description: "List your property with HAUS for maximum exposure. AI-powered valuation, elite agent network, and premium marketing.",
  keywords: ["sell property", "list home", "property valuation", "real estate agent", "sell"],
})

export default function SellLayout({ children }: { children: React.ReactNode }) {
  return children
}
