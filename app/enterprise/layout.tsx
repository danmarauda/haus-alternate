import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Enterprise AI Platform | HAUS",
  description: "A structured approach to AI adoption: strategy, framework, architecture, agents, and production rollout.",
}

export default function EnterpriseLayout({ children }: { children: React.ReactNode }) {
  return children
}
