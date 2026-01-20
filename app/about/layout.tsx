import { generatePageMetadata } from "@/lib/metadata"
import type { Metadata } from "next"

export const metadata: Metadata = generatePageMetadata({
  title: "About HAUS Platform",
  description: "Enterprise AI real estate platform with 98.9% uptime, 62% latency reduction, and SOC2 security. Learn about our mission, team, and world-class investors.",
  keywords: ["HAUS platform", "real estate AI", "enterprise AI", "about", "team"],
})

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
