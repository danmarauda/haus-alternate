import { generatePageMetadata } from "@/lib/metadata"
import type { Metadata } from "next"

export const metadata: Metadata = generatePageMetadata({
  title: "Help Center | HAUS",
  description: "Find answers to frequently asked questions, getting started guides, and support for HAUS platform features.",
  keywords: ["help", "support", "FAQ", "documentation", "getting started"],
})

export default function HelpLayout({ children }: { children: React.ReactNode }) {
  return children
}
