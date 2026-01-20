import { generatePageMetadata } from "@/lib/metadata"
import type { Metadata } from "next"

export const metadata: Metadata = generatePageMetadata({
  title: "Property Feed | HAUS",
  description: "Your personalized property feed with AI-powered recommendations, market insights, and matching algorithm.",
  keywords: ["feed", "personalized", "AI recommendations", "property matches", "market insights"],
})

export default function FeedLayout({ children }: { children: React.ReactNode }) {
  return children
}
