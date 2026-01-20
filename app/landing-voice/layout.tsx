import { generatePageMetadata } from "@/lib/metadata"
import type { Metadata } from "next"

export const metadata: Metadata = generatePageMetadata({
  title: "Voice-Enabled Real Estate | HAUS",
  description: "Search properties with your voice using AI-powered natural language processing. Just say what you're looking for.",
  keywords: ["voice search", "AI assistant", "real estate", "property search", "voice control"],
})

export default function LandingVoiceLayout({ children }: { children: React.ReactNode }) {
  return children
}
