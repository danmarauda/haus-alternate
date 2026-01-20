import { generatePageMetadata } from "@/lib/metadata"
import type { Metadata } from "next"

export const metadata: Metadata = generatePageMetadata({
  title: "Messages | HAUS",
  description: "Real-time messaging with your real estate team, agents, and service providers. Chat, share files, and stay connected.",
  keywords: ["messages", "chat", "communication", "messaging", "real estate contacts"],
})

export default function MessagesLayout({ children }: { children: React.ReactNode }) {
  return children
}
