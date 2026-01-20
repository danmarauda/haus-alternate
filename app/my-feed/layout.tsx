import { generatePageMetadata } from "@/lib/metadata"
import type { Metadata } from "next"

export const metadata: Metadata = generatePageMetadata({
  title: "My Feed | HAUS",
  description: "Your personalized property feed with AI-powered recommendations, market insights, and schedule management.",
  keywords: ["personalized feed", "AI recommendations", "property alerts", "market insights", "activity feed"],
})

export default function MyFeedLayout({ children }: { children: React.ReactNode }) {
  return children
}
