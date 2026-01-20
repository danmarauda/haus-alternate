import { generatePageMetadata } from "@/lib/metadata"
import type { Metadata } from "next"

export const metadata: Metadata = generatePageMetadata({
  title: "Sign In | HAUS",
  description: "Sign in to your HAUS account to access your properties, saved searches, and personalized recommendations.",
  keywords: ["login", "sign in", "authentication"],
  noIndex: true,
})

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return children
}
