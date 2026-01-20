import { generatePageMetadata } from "@/lib/metadata"
import type { Metadata } from "next"

export const metadata: Metadata = generatePageMetadata({
  title: "Terms of Service | HAUS",
  description: "HAUS terms of service and usage agreements. Read our terms for using the platform and our services.",
  keywords: ["terms", "terms of service", "legal", "user agreement", "TOS"],
})

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children
}
