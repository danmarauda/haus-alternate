import { generatePageMetadata } from "@/lib/metadata"
import type { Metadata } from "next"

export const metadata: Metadata = generatePageMetadata({
  title: "Saved Properties | HAUS",
  description: "View and manage your saved properties with price tracking, alerts, and property matching scores.",
  keywords: ["favorites", "saved properties", "price alerts", "watchlist", "property bookmarks"],
})

export default function FavoritesLayout({ children }: { children: React.ReactNode }) {
  return children
}
