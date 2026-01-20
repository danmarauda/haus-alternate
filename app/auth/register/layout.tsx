import { generatePageMetadata } from "@/lib/metadata"
import type { Metadata } from "next"

export const metadata: Metadata = generatePageMetadata({
  title: "Create Account | HAUS",
  description: "Sign up for HAUS to access AI-powered property search, verified listings, and expert real estate support.",
  keywords: ["register", "sign up", "create account", "join HAUS"],
  noIndex: true,
})

export default function RegisterLayout({ children }: { children: React.ReactNode }) {
  return children
}
