import { generatePageMetadata } from "@/lib/metadata"
import type { Metadata } from "next"

export const metadata: Metadata = generatePageMetadata({
  title: "Elite Agents | HAUS",
  description: "Meet HAUS elite advisory network - top 1% performers by volume, verified by blockchain. Global network of expert real estate advisors across 42 markets.",
  keywords: ["agents", "real estate advisors", "elite network", "property agents", "HAUS advisory"],
})

export default function AgentsLayout({ children }: { children: React.ReactNode }) {
  return children
}
