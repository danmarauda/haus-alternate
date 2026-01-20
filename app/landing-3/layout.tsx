import { generatePageMetadata } from "@/lib/metadata"
import type { Metadata } from "next"

export const metadata: Metadata = generatePageMetadata({
  title: "AI Real Estate | HAUS",
  description: "Revolutionary property platform with artificial intelligence. Search, analyze, and transact with confidence.",
  keywords: ["AI real estate", "property platform", "smart search", "market analytics", "tech"],
})

export default function Landing3Layout({ children }: { children: React.ReactNode }) {
  return children
}
