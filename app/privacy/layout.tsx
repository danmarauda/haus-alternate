import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - HAUS",
  description: "HAUS privacy policy explaining how we collect, use, and protect your personal information.",
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
