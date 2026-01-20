import { generatePageMetadata } from "@/lib/metadata"
import type { Metadata } from "next"

export const metadata: Metadata = generatePageMetadata({
  title: "Elite Advisory Network | HAUS",
  description: "Connect with top 1% real estate agents worldwide. Verified by blockchain, powered by AI analytics.",
  keywords: ["advisory", "agents", "elite network", "real estate agents", "verified agents"],
})

export default function AdvisoryLayout({ children }: { children: React.ReactNode }) {
  return children
}
