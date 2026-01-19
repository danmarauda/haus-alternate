import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers - HAUS",
  description: "Join the team transforming real estate with AI. View open positions and build the future with HAUS.",
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
