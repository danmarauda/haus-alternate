import Link from "next/link"
import { ArrowRight, LayoutGrid, Sparkles } from "lucide-react"
import { Suspense } from "react"
import { Shell } from "@/components/shell"
import { ErrorBoundary } from "@/components/error-boundary"
import { PageLoader } from "@/components/page-loader"


function HomePageContent() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 flex items-center justify-center">
      <div className="text-center space-y-8 max-w-2xl px-4">
        {/* Logo */}
        <div className="space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/25">
            <LayoutGrid className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-6xl sm:text-7xl font-display font-bold text-white">HAUS</h1>
          <p className="text-neutral-400 text-lg">Modern Real Estate Platform</p>
        </div>

        {/* Description */}
        <p className="text-neutral-300 max-w-lg mx-auto">
          AI-native real estate platform with voice-first search, transparent pricing, and fair play guarantee. Explore our showcase of converted pages and components.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/search"
            className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition-colors text-lg font-medium shadow-lg shadow-indigo-500/25 group"
          >
            <Sparkles className="w-5 h-5" />
            Explore Platform
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors text-lg font-medium border border-zinc-700"
          >
            Learn More
          </Link>
        </div>

        {/* Feature badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-neutral-500 pt-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-800/50 border border-zinc-700">
            <LayoutGrid className="w-4 h-4" />
            90+ Pages
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-800/50 border border-zinc-700">
            <Sparkles className="w-4 h-4" />
            React 19 + Next.js 16
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-800/50 border border-zinc-700">
            Voice AI
          </span>
        </div>
      </div>
    </main>
  )
}

export default function HomePage() {
  return (
    <ErrorBoundary>
      <Shell>
        <Suspense fallback={<PageLoader text="Loading home..." />}>
          <HomePageContent />
        </Suspense>
      </Shell>
    </ErrorBoundary>
  )
}
