import { generatePageMetadata } from "@/lib/metadata"
import type { Metadata } from "next"

export const metadata: Metadata = generatePageMetadata({
  title: "Luxury Properties | HAUS",
  description: "AI-powered luxury real estate platform. Search premium properties with intelligent matching and market insights.",
  keywords: ["luxury real estate", "property search", "AI matching", "premium homes", "HAUS"],
})

export default function Landing1Layout({ children }: { children: React.ReactNode }) {
  return children
}
