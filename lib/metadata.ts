/**
 * Universal Page Metadata Utility
 * Provides consistent SEO metadata across all pages
 */

import { Metadata } from "next";

export interface PageMetadataParams {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: "website" | "article";
  canonical?: string;
  noIndex?: boolean;
}

const siteName = "HAUS Platform";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://haus-platform.com";
const defaultOgImage = "/og-image.jpg";
const defaultDescription = "Luxury real estate platform with AI-powered market intelligence, elite agent network, and sophisticated property tools.";

export function generatePageMetadata(params: PageMetadataParams): Metadata {
  const {
    title,
    description,
    keywords = [],
    ogImage = defaultOgImage,
    ogType = "website",
    canonical,
    noIndex = false,
  } = params;

  const fullTitle = `${title} | ${siteName}`;
  const fullDescription = description || defaultDescription;
  const ogImageUrl = ogImage.startsWith("http") ? ogImage : `${siteUrl}${ogImage}`;

  const metadata: Metadata = {
    title: fullTitle,
    description: fullDescription,
    keywords: [...keywords, "real estate", "luxury property", "HAUS", "property platform"],
    authors: [{ name: "HAUS Platform" }],
    creator: "HAUS Platform",
    publisher: "HAUS Platform",

    openGraph: {
      type: ogType,
      locale: "en_AU",
      url: canonical,
      title: fullTitle,
      description: fullDescription,
      siteName,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: fullDescription,
      images: [ogImageUrl],
      creator: "@hausplatform",
    },

    alternates: {
      canonical: canonical,
    },

    robots: {
      index: !noIndex,
      follow: true,
      googleBot: {
        index: !noIndex,
        follow: true,
      },
    },

    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
    },
  };

  return metadata;
}

/**
 * Predefined metadata for common pages
 */
export const pageMetadata = {
  home: generatePageMetadata({
    title: "Home",
    description: "Discover luxury properties with AI-powered insights and elite real estate agents.",
    keywords: ["luxury homes", "property search", "real estate"],
  }),

  search: generatePageMetadata({
    title: "Property Search",
    description: "Search luxury properties with advanced filters, AI insights, and real-time market data.",
    keywords: ["property search", "find homes", "real estate listings"],
  }),

  about: generatePageMetadata({
    title: "About Us",
    description: "Learn about HAUS Platform - democratizing real estate intelligence with AI technology.",
    keywords: ["about HAUS", "company", "team"],
  }),

  contact: generatePageMetadata({
    title: "Contact Us",
    description: "Get in touch with our team for inquiries, support, or partnership opportunities.",
    keywords: ["contact", "support", "help"],
  }),

  login: generatePageMetadata({
    title: "Sign In",
    description: "Access your HAUS Platform account to manage properties and inquiries.",
    noIndex: true,
  }),

  register: generatePageMetadata({
    title: "Create Account",
    description: "Join HAUS Platform for access to luxury property listings and AI insights.",
    noIndex: true,
  }),
};
