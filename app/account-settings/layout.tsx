import { generatePageMetadata } from "@/lib/metadata"
import type { Metadata } from "next"

export const metadata: Metadata = generatePageMetadata({
  title: "Account Settings | HAUS",
  description: "Manage your HAUS account settings including profile, security, notifications, privacy, billing, and API keys.",
  keywords: ["account settings", "profile", "security", "notifications", "privacy", "billing", "API keys"],
})

export default function AccountSettingsLayout({ children }: { children: React.ReactNode }) {
  return children
}
