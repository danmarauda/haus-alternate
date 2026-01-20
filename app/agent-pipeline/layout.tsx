import { generatePageMetadata } from "@/lib/metadata"
import type { Metadata } from "next"

export const metadata: Metadata = generatePageMetadata({
  title: "Agent Pipeline | HAUS",
  description: "AI-powered deal pipeline management for HAUS agents. Track deals through appraisal, pre-market, active, under offer, and settlement stages with GCI tracking.",
  keywords: ["agent pipeline", "deal management", "kanban board", "real estate CRM", "GCI tracking"],
})

export default function AgentPipelineLayout({ children }: { children: React.ReactNode }) {
  return children
}
