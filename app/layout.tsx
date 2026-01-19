import type { Metadata } from "next"
import { Inter, Space_Grotesk, Space_Mono } from "next/font/google"
import "./globals.css"
import { ShowcaseSidebar } from "@/components/showcase-sidebar"
import { ConvexContextProvider } from "@/components/providers/ConvexProvider"

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

export const metadata: Metadata = {
  title: "HAUS | Luxury Real Estate Platform",
  description: "AI-native luxury real estate platform with transparent pricing, fair play guarantee, and elite advisory network",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${spaceMono.variable}`}>
      <body className="flex min-h-screen">
        <ConvexContextProvider>
          <ShowcaseSidebar />
          <main className="flex-1 overflow-auto">
            {children}
          </main>
        </ConvexContextProvider>
      </body>
    </html>
  )
}
