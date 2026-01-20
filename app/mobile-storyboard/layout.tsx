import { generatePageMetadata } from "@/lib/metadata"
import type { Metadata } from "next"

export const metadata: Metadata = generatePageMetadata({
  title: "Mobile Storyboard | HAUS",
  description: "Interactive mobile experience storyboard showcasing the HAUS property platform features and user journey.",
  keywords: ["mobile", "storyboard", "UI/UX", "user experience", "app design"],
})

export default function MobileStoryboardLayout({ children }: { children: React.ReactNode }) {
  return children
}
