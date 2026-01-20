import { generatePageMetadata } from "@/lib/metadata"
import type { Metadata } from "next"

export const metadata: Metadata = generatePageMetadata({
  title: "Privacy Policy | HAUS",
  description: "HAUS privacy policy. Learn how we collect, use, and protect your data. Your privacy is our priority.",
  keywords: ["privacy", "privacy policy", "data protection", "GDPR", "user data"],
})

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children
}
