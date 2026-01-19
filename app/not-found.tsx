import Link from "next/link"
import { Home, ArrowRight, Sparkles, Search } from "lucide-react"

// Special Next.js not-found.tsx file - this is the App Router format for 404 pages
// Note: Next.js automatically uses not-found.tsx in the app directory for 404 errors

export default function NotFound() {
  return (
    <div className="landing-page min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        {/* 404 Icon */}
        <div className="w-24 h-24 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-8">
          <Search className="w-10 h-10 text-neutral-600" />
        </div>

        {/* 404 Heading */}
        <h1 className="text-6xl md:text-7xl font-display font-medium tracking-tight text-white mb-4">
          404
        </h1>

        {/* Message */}
        <p className="text-xl text-neutral-400 mb-2">Page Not Found</p>
        <p className="text-neutral-500 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/landing"
            className="px-8 py-3 rounded-xl bg-white text-black text-sm font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            Go Home
          </Link>
          <Link
            href="/search"
            className="px-8 py-3 rounded-xl border border-white/10 text-white text-sm font-bold uppercase tracking-widest hover:bg-white/5 transition-colors flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            Browse Properties
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
