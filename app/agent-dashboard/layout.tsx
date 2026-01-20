import { generatePageMetadata } from "@/lib/metadata"
import type { Metadata } from "next"

export const metadata: Metadata = generatePageMetadata({
  title: "Agent Dashboard | HAUS",
  description: "AI-powered agent dashboard for HAUS advisors. Manage campaigns, track pipeline, communicate with leads, and maximize your GCI.",
  keywords: ["agent dashboard", "real estate CRM", "deal pipeline", "GCI tracking", "campaign management"],
})

export default function AgentDashboardLayout({ children }: { children: React.ReactNode }) {
  return children
}
