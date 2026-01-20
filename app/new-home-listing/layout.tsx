import { generatePageMetadata } from "@/lib/metadata"
import type { Metadata } from "next"

export const metadata: Metadata = generatePageMetadata({
  title: "12 Wolseley Road, Point Piper | HAUS",
  description: "A monumental residence of rare distinction in Point Piper. 5 bedrooms, 6 bathrooms, 892m² internal, 1,124m² land. Waterfront masterpiece with commercial-grade lift.",
  keywords: ["luxury property", "Point Piper", "waterfront", "prestige real estate", "Sydney Harbour", "luxury home"],
})

export default function NewHomeListingLayout({ children }: { children: React.ReactNode }) {
  return children
}
