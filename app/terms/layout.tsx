import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - HAUS",
  description: "HAUS terms of service governing your use of our AI-powered real estate platform.",
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
