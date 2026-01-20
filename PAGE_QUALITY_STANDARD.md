/**
 * HAUS Platform - Universal Page Quality Standard
 *
 * ALL pages must follow this template for consistency and quality
 */

import { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import { ErrorBoundary } from "@/components/error-boundary";
import { PageLoader } from "@/components/page-loader";
import { Shell } from "@/components/shell";

// ==================== METADATA ====================
// Every page MUST have proper metadata
export const metadata: Metadata = generatePageMetadata({
  title: "Page Title", // REQUIRED: Descriptive, unique
  description: "Clear description of page content (120-155 chars)", // REQUIRED
  keywords: ["keyword1", "keyword2"], // RECOMMENDED: 3-5 relevant keywords
  ogImage: "/path/to/image.jpg", // RECOMMENDED: 1200x630px
  canonical: "https://haus-platform.com/page", // RECOMMENDED: Absolute URL
});

// ==================== TYPES ====================
// All page props MUST be typed
interface PageProps {
  params?: Promise<Record<string, string>>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}

// ==================== PAGE COMPONENT ====================
// Default export is REQUIRED for Next.js App Router
export default async function Page({ params, searchParams }: PageProps) {
  // Await params (Next.js 15+ requirement)
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  return (
    <ErrorBoundary>
      <Shell>
        <Suspense fallback={<PageLoader />}>
          <PageContent params={resolvedParams} searchParams={resolvedSearchParams} />
        </Suspense>
      </Shell>
    </ErrorBoundary>
  );
}

// ==================== PAGE CONTENT ====================
// Extract main content for better separation of concerns
async function PageContent({
  params,
  searchParams,
}: {
  params: Record<string, string>;
  searchParams: Record<string, string | string[] | undefined>;
}) {
  // Data fetching with proper typing
  const data = await fetchData();

  // Error handling
  if (!data) {
    return <ErrorMessage />;
  }

  return (
    <main className="min-h-screen">
      {/* Page Header - REQUIRED for SEO */}
      <section className="container py-12">
        <h1 className="text-4xl font-bold tracking-tight">
          Page Heading
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Page description for context and accessibility.
        </p>
      </section>

      {/* Page Content */}
      <section className="container py-8">
        {data.map((item) => (
          <Card key={item.id} className="mb-4">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="mt-2 text-muted-foreground">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  );
}

// ==================== DATA FETCHING ====================
// Always use async functions with proper error handling
async function fetchData() {
  try {
    // Replace with actual data fetching logic
    const response = await fetch("https://api.example.com/data", {
      cache: "force-cache", // or "no-store" for dynamic data
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return null;
  }
}

// ==================== ERROR COMPONENT ====================
// Always provide graceful error handling
function ErrorMessage() {
  return (
    <section className="container py-12">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-destructive">
          Unable to Load Content
        </h2>
        <p className="mt-4 text-muted-foreground">
          Please try again later or contact support if the problem persists.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-primary-foreground hover:bg-primary/90"
        >
          Return Home
        </Link>
      </div>
    </section>
  );
}

// ==================== CLIENT COMPONENTS ====================
// For pages with interactivity, create client components
"use client";

import { useState } from "react";

export function InteractiveComponent() {
  const [state, setState] = useState(initialState);

  return (
    <div className="space-y-4">
      {/* Interactive content */}
    </div>
  );
}

// ==================== QUALITY CHECKLIST ====================
// Before marking a page as complete, verify:

// Structure
// ✅ Has proper metadata (title, description, keywords)
// ✅ Uses Semantic HTML (<main>, <section>, <article>, <nav>)
// ✅ Has proper heading hierarchy (h1 → h2 → h3)
// ✅ Has ErrorBoundary wrapper
// ✅ Has Suspense + loading state
// ✅ Proper TypeScript types (no `any`)
// ✅ Client components marked with "use client"

// Accessibility
// ✅ All images have alt text
// ✅ Forms have proper labels and ARIA
// ✅ Buttons have descriptive text
// ✅ Links have meaningful anchor text
// ✅ Keyboard navigation works
// ✅ Color contrast meets WCAG AA (4.5:1)

// Performance
// ✅ Images use Next.js Image component
// ✅ Large content is code-split/lazy-loaded
// ✅ No unnecessary re-renders (use React.memo, useMemo, useCallback)
// ✅ Data fetching uses appropriate caching strategy
// ✅ No console errors or warnings

// SEO
// ✅ Unique title and description
// ✅ Canonical URL (when applicable)
// ✅ Open Graph tags for social sharing
// ✅ Structured data (JSON-LD) when relevant
// ✅ Meta robots tags correct (index/noindex)

// Styling
// ✅ Uses Tailwind CSS classes (no inline styles except dynamic)
// ✅ Responsive design (mobile, tablet, desktop)
// ✅ Dark mode support (when applicable)
// ✅ Consistent spacing and typography
// ✅ Proper use of CSS variables for theming

// Code Quality
// ✅ No commented-out code
// ✅ No unused imports
// ✅ No `any` types
// ✅ Proper error handling
// ✅ Loading states for all async operations
// ✅ Empty states when no data
