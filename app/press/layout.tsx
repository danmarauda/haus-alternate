import { generatePageMetadata } from "@/lib/metadata"
import type { Metadata } from "next"

export const metadata: Metadata = generatePageMetadata({
  title: "Press & Media | HAUS",
  description: "HAUS press releases, media coverage, news articles, and company announcements. Stay updated on our latest developments.",
  keywords: ["press", "media", "news", "announcements", "coverage"],
})

export default function PressLayout({ children }: { children: React.ReactNode }) {
  return children
}
