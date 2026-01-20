import { generatePageMetadata } from "@/lib/metadata"
import type { Metadata } from "next"

export const metadata: Metadata = generatePageMetadata({
  title: "HAUS Platform",
  description: "Luxury real estate platform with AI-powered market intelligence, elite agent network, and sophisticated property tools.",
  keywords: ["HAUS", "real estate", "luxury properties", "AI platform", "property search"],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}
