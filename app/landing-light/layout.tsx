import { generatePageMetadata } from "@/lib/metadata"
import type { Metadata } from "next"

export const metadata: Metadata = generatePageMetadata({
  title: "Modern Real Estate | HAUS",
  description: "Contemporary property platform with clean design and powerful AI tools. Find your perfect home.",
  keywords: ["modern real estate", "property search", "clean design", "minimal", "homes"],
})

export default function LandingLightLayout({ children }: { children: React.ReactNode }) {
  return children
}
