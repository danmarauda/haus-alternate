import { generatePageMetadata } from "@/lib/metadata"
import type { Metadata } from "next"

export const metadata: Metadata = generatePageMetadata({
  title: "Dashboard | HAUS",
  description: "Your personalized HAUS dashboard with property updates, saved searches, favorites, notifications, and market insights.",
  keywords: ["dashboard", "home", "property feed", "saved searches", "favorites"],
})

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return children
}
