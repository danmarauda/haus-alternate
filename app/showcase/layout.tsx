import { generatePageMetadata } from "@/lib/metadata"
import type { Metadata } from "next"

export const metadata: Metadata = generatePageMetadata({
  title: "Property Showcase | HAUS",
  description: "Premium property showcase featuring luxury homes with virtual tours, detailed specifications, and market analysis.",
  keywords: ["showcase", "featured properties", "luxury homes", "virtual tours", "premium"],
})

export default function ShowcaseLayout({ children }: { children: React.ReactNode }) {
  return children
}
