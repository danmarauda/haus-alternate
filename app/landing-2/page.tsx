"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Mic,
  Compass,
  Rocket,
  Menu,
  Bot,
  MessageCircle,
  Loader2,
  CheckCircle2,
  Search,
  Scale,
  Layers,
  Heart,
  Star,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { HausLogo } from "@/components/haus-logo"
import { cn } from "@/lib/utils"

/**
 * Landing Page 2 - Geist Font
 *
 * Voice-first AI real estate platform with modern iOS-style mockups
 * Features conversational property search, AI assistant, and mobile-first design
 *
 * @example
 * ```tsx
 * import LandingPage2 from './landing-2/page'
 * <LandingPage2 />
 * ```
 */
export default function LandingPage2() {
  const [activeDemo, setActiveDemo] = useState<"voice" | "chat" | "transparency">("voice")

  const voiceQueries = [
    "Family home with courtyard near parks",
    "Investment property with high yield in Brisbane",
    "Waterfront apartment with city views",
    "Rural acreage with solar power and bore",
  ]

  const features = [
    {
      icon: Mic,
      title: "Voice-First Search",
      description: "Ask naturally. No more checkbox hell.",
      emoji: "🎤",
    },
    {
      icon: Scale,
      title: "Fair Play Protocol",
      description: "No underquoting or dodgy tactics.",
      emoji: "⚖️",
    },
    {
      icon: Layers,
      title: "Transparency by Design",
      description: "Every fee disclosed. Plain English.",
      emoji: "🏗️",
    },
  ]

  const earlyAccessCount = 1

  return (
    <div className="min-h-screen antialiased font-geist bg-black text-white selection:bg-white/10 selection:text-white">
      {/* Background Gradient */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_-10%,rgba(59,130,246,0.2),transparent),radial-gradient(800px_400px_at_20%_10%,rgba(168,85,247,0.18),transparent),radial-gradient(900px_500px_at_50%_120%,rgba(16,185,129,0.14),transparent)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
        <div className="pointer-events-none absolute inset-0 backdrop-blur-[1px]" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-black/40 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-md bg-white/10 ring-1 ring-white/10 flex items-center justify-center">
                <Heart className="w-4 h-4 text-white/90" />
              </div>
              <span className="text-base sm:text-lg tracking-tight font-semibold">HAUS</span>
            </Link>

            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#explore" className="text-white/80 hover:text-white transition">
                EXPLORE
              </a>
              <a href="#search" className="text-white/80 hover:text-white transition">
                SEARCH
              </a>
              <a href="#deephaus" className="text-white/80 hover:text-white transition">
                DEEPHAUS
              </a>
              <a href="#admin" className="text-white/80 hover:text-white transition">
                ADMIN
              </a>
            </nav>

            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                className="hidden sm:inline-flex items-center gap-2 rounded-lg px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/10"
              >
                <Rocket className="w-4 h-4 text-white/90" />
                <span className="text-sm font-medium">EARLY ACCESS</span>
                {earlyAccessCount > 0 && (
                  <Badge variant="secondary" className="ml-1 bg-emerald-400/20 text-emerald-300 border-emerald-400/30 px-1.5 py-1 text-[10px]">
                    {earlyAccessCount}
                  </Badge>
                )}
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden rounded-lg">
                <Menu className="w-4.5 h-4.5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-10 pt-14 pb-10">
              {/* Left: Content */}
              <div className="flex flex-col justify-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 text-xs text-white/70 bg-white/5 border border-white/10 rounded-full px-2.5 py-1 w-fit mb-4">
                  <Mic className="w-3.5 h-3.5 text-white/80" />
                  <span>Voice‑first. Compliance‑ready.</span>
                  <span className="h-3 w-px bg-white/10" />
                  <span>Built for Australians</span>
                </div>

                {/* Title */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight font-semibold">
                  A REVOLUTION IN REAL ESTATE
                </h1>

                {/* Description */}
                <p className="mt-4 text-base sm:text-lg leading-relaxed text-white/70">
                  Search, invest, buy, and manage in one AI‑native platform. Voice‑first. Compliance‑ready. Built for Australians.
                </p>

                {/* Warning */}
                <p className="mt-3 text-base text-rose-300/90 flex items-center gap-2">
                  <Scale className="w-4 h-4" />
                  Don't put up with dodgy agent tactics.
                </p>

                {/* CTA Buttons */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Button
                    size="lg"
                    className="inline-flex items-center justify-center rounded-lg px-4 py-2.5 bg-white text-black hover:bg-white/90 transition border border-white/10 text-sm font-semibold"
                  >
                    Get Early Access
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="inline-flex items-center gap-2 rounded-lg px-3.5 py-2.5 bg-white/5 hover:bg-white/10 transition border border-white/10 text-sm font-medium"
                  >
                    <Compass className="w-4.5 h-4.5" />
                    Explore Products
                  </Button>
                </div>

                {/* Feature Cards */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {features.map((feature, index) => {
                    const Icon = feature.icon
                    return (
                      <Card key={index} className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <CardContent className="p-0">
                          <div className="flex items-center gap-2 text-sm font-medium mb-2">
                            <span className="text-xl">{feature.emoji}</span>
                            <span className="text-white">{feature.title}</span>
                          </div>
                          <p className="text-sm text-white/70">{feature.description}</p>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>

              {/* Right: Phone Mockups */}
              <div className="relative">
                {/* Background Glow */}
                <div className="absolute -top-8 -right-8 -z-10 h-56 w-56 rounded-full bg-emerald-500/10 blur-3xl" />

                {/* Phone 1: Voice Search */}
                <Card className="relative w-[300px] sm:w-[340px] h-[620px] bg-black border border-white/10 rounded-[36px] shadow-2xl overflow-hidden">
                  <CardContent className="p-0 h-full">
                    <div className="w-full h-full overflow-hidden relative bg-neutral-950 rounded-[30px] ring-1 ring-white/10">
                      {/* Status Bar */}
                      <div className="flex justify-between items-center px-5 pt-3 pb-2">
                        <div className="text-white/90 text-xs font-medium">9:41</div>
                        <div className="flex items-center gap-1 text-white/70">
                          <div className="w-4 h-4" />
                          <div className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Header */}
                      <div className="px-5 pb-3">
                        <div className="flex items-center justify-between">
                          <h3 className="tracking-tight font-semibold text-xl text-white">Voice Search</h3>
                          <Badge variant="outline" className="text-[10px] text-amber-300/90 bg-amber-400/10 border-amber-400/20 rounded-full px-2 py-0.5">
                            Coming Soon
                          </Badge>
                        </div>
                        <p className="mt-1 text-xs text-white/60">98% accuracy AI voice processing</p>
                      </div>

                      {/* Search Input */}
                      <div className="px-5">
                        <div className="relative">
                          <input
                            placeholder="Ask for your perfect property…"
                            className="w-full text-sm placeholder-white/40 bg-white/5 border border-white/10 rounded-xl pl-10 pr-10 py-2.5 focus:outline-none focus:ring-2 focus:ring-white/20 text-white"
                          />
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                            <Search className="w-4.5 h-4.5 text-white/60" />
                          </div>
                          <button className="absolute inset-y-0 right-0 pr-3 flex items-center">
                            <div className="h-8 w-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                              <Mic className="w-4 h-4 text-emerald-300" />
                            </div>
                          </button>
                        </div>
                      </div>

                      {/* Suggestions */}
                      <div className="px-5 mt-4">
                        <p className="text-xs text-white/50 mb-2">Try these queries</p>
                        <div className="space-y-1.5 text-sm">
                          {voiceQueries.map((query, index) => (
                            <div key={index} className="flex items-center gap-2 text-white/80">
                              <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                              {query}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Real-time Feedback */}
                      <div className="px-5 mt-5">
                        <Card className="rounded-xl bg-white/5 border border-white/10 p-3">
                          <CardContent className="p-0 space-y-2">
                            <div className="flex items-center gap-2 text-xs text-emerald-300/90">
                              <MessageCircle className="w-3.5 h-3.5" />
                              <span>Recognized:</span>
                              <span className="text-white/80">"3 bedroom house in Melbourne with good transport links"</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-white/70">
                              <Loader2 className="w-3.5 h-3.5 animate-spin" />
                              <span>Processing:</span>
                              <span className="text-white/60">Searching 50,000+ listings</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-white/80">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                              <span>Results:</span>
                              <span>127 properties found in 89ms</span>
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Home Indicator */}
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 bg-white/25 rounded-full" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Features Section */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                Why Choose HAUS?
              </h2>
              <p className="mt-3 text-base text-white/60 max-w-2xl mx-auto">
                Built for Australians who demand transparency, fairness, and modern technology
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border border-white/10 bg-white/5 rounded-2xl p-6">
                <CardContent className="p-0">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-4">
                    <Mic className="w-6 h-6 text-blue-300" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Voice Search</h3>
                  <p className="text-sm text-white/60">
                    Just ask naturally. Our AI understands context, preferences, and Australian property terminology.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-white/10 bg-white/5 rounded-2xl p-6">
                <CardContent className="p-0">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-green-500/20 flex items-center justify-center mb-4">
                    <Scale className="w-6 h-6 text-emerald-300" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Fair Play</h3>
                  <p className="text-sm text-white/60">
                    No underquoting. No hidden fees. Every property verified with complete disclosure.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-white/10 bg-white/5 rounded-2xl p-6">
                <CardContent className="p-0">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-4">
                    <Layers className="w-6 h-6 text-purple-300" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Transparency</h3>
                  <p className="text-sm text-white/60">
                    Every fee disclosed. Plain English contracts. Full property history and insights.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Card className="border border-white/10 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 sm:p-12">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
                      Ready to transform your property search?
                    </h2>
                    <p className="text-white/60 mb-6">
                      Join early access and be among the first to experience AI-powered real estate search.
                    </p>
                    <Button
                      size="lg"
                      className="bg-white text-black hover:bg-white/90 rounded-full"
                    >
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                  <div className="flex justify-center">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4">
                        <div className="text-3xl font-bold text-white">12k+</div>
                        <div className="text-sm text-white/60">Listings</div>
                      </div>
                      <div className="text-center p-4">
                        <div className="text-3xl font-bold text-white">98%</div>
                        <div className="text-sm text-white/60">Accuracy</div>
                      </div>
                      <div className="text-center p-4">
                        <div className="text-3xl font-bold text-white">$1B+</div>
                        <div className="text-sm text-white/60">Volume</div>
                      </div>
                      <div className="text-center p-4">
                        <div className="text-3xl font-bold text-white">Zero</div>
                        <div className="text-sm text-white/60">Hidden Fees</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-md bg-white/10 flex items-center justify-center">
                  <Heart className="w-3.5 h-3.5 text-white/80" />
                </div>
                <span className="text-white/60 text-sm">© 2025 HAUS. All rights reserved.</span>
              </div>
              <div className="flex items-center gap-6 text-xs text-white/40">
                <Link href="#privacy" className="hover:text-white/60 transition">
                  Privacy
                </Link>
                <Link href="#terms" className="hover:text-white/60 transition">
                  Terms
                </Link>
                <Link href="#contact" className="hover:text-white/60 transition">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
