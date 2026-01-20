import { generatePageMetadata } from "@/lib/metadata"
import type { Metadata } from "next"

export const metadata: Metadata = generatePageMetadata({
  title: "Forgot Password | HAUS",
  description: "Reset your HAUS account password. Enter your email address and we'll send you a secure link to reset your password.",
  keywords: ["forgot password", "reset password", "account recovery"],
  noIndex: true,
})

export default function ForgotPasswordLayout({ children }: { children: React.ReactNode }) {
  return children
}
