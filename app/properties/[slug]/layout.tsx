import type { Metadata } from "next"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  return {
    title: `Property Details | HAUS`,
    description: "View comprehensive property details including images, specifications, floor plans, and market data.",
    keywords: ["property", "real estate", "details", "listing"],
  }
}

export default function PropertyLayout({ children }: { children: React.ReactNode }) {
  return children
}
