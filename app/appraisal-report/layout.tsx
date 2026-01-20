import { generatePageMetadata } from "@/lib/metadata"
import type { Metadata } from "next"

export const metadata: Metadata = generatePageMetadata({
  title: "Property Appraisal Report | HAUS",
  description: "Comprehensive property valuation report with comparable sales analysis, multiple valuation methods, and market trend data.",
  keywords: ["appraisal", "property valuation", "comparable sales", "market analysis", "valuation report"],
})

export default function AppraisalReportLayout({ children }: { children: React.ReactNode }) {
  return children
}
