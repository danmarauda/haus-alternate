import { generatePageMetadata } from "@/lib/metadata"
import type { Metadata } from "next"

export const metadata: Metadata = generatePageMetadata({
  title: "Finance Dashboard | HAUS",
  description: "Track your borrowing capacity, pre-approvals, loan applications, and financial readiness for property purchases.",
  keywords: ["finance", "mortgage", "borrowing capacity", "pre-approval", "loan calculator"],
})

export default function FinanceDashboardLayout({ children }: { children: React.ReactNode }) {
  return children
}
