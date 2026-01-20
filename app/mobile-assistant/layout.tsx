import { generatePageMetadata } from "@/lib/metadata"
import type { Metadata } from "next"

export const metadata: Metadata = generatePageMetadata({
  title: "Mobile Assistant | HAUS",
  description: "AI-powered mobile assistant for property search on the go. Get personalized recommendations and instant alerts.",
  keywords: ["mobile", "assistant", "AI chatbot", "property search", "mobile app"],
})

export default function MobileAssistantLayout({ children }: { children: React.ReactNode }) {
  return children
}
