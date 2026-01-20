import { generatePageMetadata } from "@/lib/metadata"
import type { Metadata } from "next"

export const metadata: Metadata = generatePageMetadata({
  title: "Contact Us | HAUS",
  description: "Get in touch with the HAUS team for inquiries, support, partnership opportunities, or media requests.",
  keywords: ["contact", "support", "help", "inquiry", "partnership"],
})

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
