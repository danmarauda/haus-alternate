import { generatePageMetadata } from "@/lib/metadata"
import type { Metadata } from "next"
import { Inter, Space_Grotesk, Space_Mono } from "next/font/google"
import { ConvexContextProvider } from "@/components/providers/ConvexProvider"
import { ShowcaseSidebar } from "@/components/showcase-sidebar"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
  weight: "400",
})

export const metadata: Metadata = generatePageMetadata({
  title: "HAUS - Home",
  description: "AI-native real estate platform with voice-first search, transparent pricing, and fair play guarantee. Explore our showcase of converted pages and components.",
  keywords: ["HAUS", "real estate", "AI property search", "React 19", "Next.js 16"],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${spaceGrotesk.variable} ${spaceMono.variable}`}>
      <body className="flex min-h-screen antialiased">
        <ConvexContextProvider showDemoBanner={false}>
          <ShowcaseSidebar />
          <main className="flex-1 overflow-auto">
            {children}
          </main>
        </ConvexContextProvider>
      </body>
    </html>
  )
}
