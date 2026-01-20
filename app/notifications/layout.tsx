import { generatePageMetadata } from "@/lib/metadata"
import type { Metadata } from "next"

export const metadata: Metadata = generatePageMetadata({
  title: "Notifications | HAUS",
  description: "Stay updated with your property activity through notifications for price changes, new listings, viewings, and more.",
  keywords: ["notifications", "alerts", "price drops", "activity updates"],
})

export default function NotificationsLayout({ children }: { children: React.ReactNode }) {
  return children
}
