import { generatePageMetadata } from "@/lib/metadata"
import type { Metadata } from "next"

export const metadata: Metadata = generatePageMetadata({
  title: "HAUS - Home",
  description: "AI-native real estate platform with voice-first search, transparent pricing, and fair play guarantee. Explore our showcase of converted pages and components.",
  keywords: ["HAUS", "real estate", "AI property search", "React 19", "Next.js 16"],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
