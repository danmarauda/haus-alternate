import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press - HAUS",
  description: "HAUS press room with latest news, announcements, media coverage, and press kit resources.",
};

export default function PressLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
