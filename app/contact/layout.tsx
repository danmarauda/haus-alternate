import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - HAUS",
  description: "Get in touch with the HAUS team. We're here to help with all your real estate needs.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
