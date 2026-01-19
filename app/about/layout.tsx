import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - HAUS",
  description: "Learn about HAUS - the AI-powered real estate platform transforming how the world buys and sells property.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
