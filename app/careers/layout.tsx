import { generatePageMetadata } from "@/lib/metadata"
import type { Metadata } from "next"

export const metadata: Metadata = generatePageMetadata({
  title: "Careers | HAUS",
  description: "Join HAUS and help democratize real estate intelligence with AI technology. View open positions and join our world-class team.",
  keywords: ["careers", "jobs", "hiring", "join team", "work at HAUS"],
})

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return children
}
