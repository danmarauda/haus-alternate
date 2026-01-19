import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Help Center - HAUS",
  description: "Find answers to common questions and get help with HAUS platform features.",
};

export default function HelpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
