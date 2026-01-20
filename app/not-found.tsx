import Link from "next/link"
import { Home, ArrowRight, Sparkles, Search } from "lucide-react"
import { Suspense } from "react"
import { Shell } from "@/components/shell"
import { ErrorBoundary } from "@/components/error-boundary"
import { PageLoader } from "@/components/page-loader"

/**
 * 404 Not Found Page
 *
 * @description
 * Custom 404 error page displayed when a route is not found.
 * Features navigation options and helpful CTAs.
 *
 * @features
 * - Clear 404 messaging
 * - Navigation to home and search
 * - Accessible error handling
 * - Consistent styling with app
 */

function NotFoundContent() {
  return (
    <div className="landing-page min-h-screen flex items-center justify-center px-4" role="main" aria-labelledby="not-found-heading">
      <div className="text-center max-w-2xl">
        {/* 404 Icon */}
        <div className="w-24 h-24 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-8" aria-hidden="true">
          <Search className="w-10 h-10 text-neutral-600" />
        </div>

        {/* 404 Heading */}
        <h1 id="not-found-heading" className="text-6xl md:text-7xl font-display font-medium tracking-tight text-white mb-4">
          404
        </h1>

        {/* Message */}
        <p className="text-xl text-neutral-400 mb-2">Page Not Found</p>
        <p className="text-neutral-500 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        {/* CTA Buttons */}
        <nav className="flex flex-col sm:flex-row items-center justify-center gap-4" aria-label="Navigation options">
          <Link
            href="/"
            className="px-8 py-3 rounded-xl bg-white text-black text-sm font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors flex items-center gap-2"
            aria-label="Go to home page"
          >
            <Home className="w-4 h-4" aria-hidden="true" />
            Go Home
          </Link>
          <Link
            href="/search"
            className="px-8 py-3 rounded-xl border border-white/10 text-white text-sm font-bold uppercase tracking-widest hover:bg-white/5 transition-colors flex items-center gap-2"
            aria-label="Browse properties"
          >
            <Sparkles className="w-4 h-4" aria-hidden="true" />
            Browse Properties
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default function NotFound() {
  return (
    <ErrorBoundary>
      <Shell>
        <Suspense fallback={<PageLoader text="Loading..." />}>
          <NotFoundContent />
        </Suspense>
      </Shell>
    </ErrorBoundary>
  )
}
