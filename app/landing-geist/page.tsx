"use client"

/**
 * HAUS Landing Page - Geist Font Variant
 *
 * Premium dark-themed landing page with Geist font integration
 * Features AI-native real estate search, voice-first interface, property chat assistant, and compliance tools
 *
 * @description
 * Converts the haus-landing-geist-font.html to React with:
 * - Custom Geist font via Next.js Google Fonts
 * - React 19 with TypeScript
 * - lucide-react icons replacing data-lucide
 * - Mobile-first responsive design
 * - Dark theme with zinc-950 background
 *
 * @example
 * ```tsx
 * import LandingGeist from './landing-geist/page'
 * <LandingGeist />
 * ```
 */

import { useState, useEffect } from "react"
import Link from "next/link"
import { Geist } from "next/font/google"
import {
  Home,
  Rocket,
  Menu,
  Mic,
  Compass,
  Search,
  Wifi,
  Battery,
  MessageCircle,
  Loader2,
  CheckCircle2,
  Bot,
  User,
  Send,
  ShieldCheck,
  Activity,
  Percent,
  Sparkles,
  LineChart,
  Shield,
  Settings,
  Files,
  Users,
  ShieldAlert,
  LockKeyhole,
  Lock,
  ArrowRight,
  Copy,
  Twitter,
  Github,
  Linkedin,
  ScanSearch,
  FileCheck,
  BadgeCheck,
  Gavel,
  Receipt,
} from "lucide-react"
import { cn } from "@/lib/utils"

// Geist font configuration
const geist = Geist({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

export default function LandingGeist() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false)
  const [emailCopied, setEmailCopied] = useState(false)
  const [currentYear, setCurrentYear] = useState(2025)

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setWaitlistSubmitted(true)
  }

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("hello@haus.ai")
      setEmailCopied(true)
      setTimeout(() => setEmailCopied(false), 1600)
    } catch (err) {
      console.error("Failed to copy email:", err)
    }
  }

  const voiceQueries = [
    "Family home with courtyard near parks",
    "Investment property with high yield in Brisbane",
    "Waterfront apartment with city views",
    "Rural acreage with solar power and bore",
  ]

  const features = [
    { emoji: "🎤", title: "Voice-First Search", desc: "Ask naturally. No more checkbox hell." },
    { emoji: "⚖️", title: "Fair Play Protocol", desc: "No underquoting or dodgy tactics." },
    { emoji: "🏗️", title: "Transparency by Design", desc: "Every fee disclosed. Plain English." },
  ]

  const valuationMethods = [
    { label: "Comparable Sales", value: "$785,000" },
    { label: "Hedonic Regression", value: "$812,000" },
    { label: "Discounted Cash Flow", value: "$799,000" },
    { label: "ML Ensemble", value: "$826,000" },
  ]

  const topSuburbs = [
    { name: "Glen Iris", score: "8.9" },
    { name: "Balwyn North", score: "8.7" },
    { name: "New Farm", score: "8.5" },
  ]

  const productCards = [
    {
      title: "Voice Search",
      desc: "Natural language search across 50k+ listings.",
      icon: Mic,
      color: "emerald",
      href: "#search",
    },
    {
      title: "DeepHaus",
      desc: "Valuations, risk, and yield projections in one view.",
      icon: LineChart,
      color: "sky",
      href: "#deephaus",
    },
    {
      title: "Fair Play Protocol",
      desc: "Real-time detection of underquoting and dodgy tactics.",
      icon: Shield,
      color: "violet",
      href: "#fairplay",
    },
    {
      title: "Admin Console",
      desc: "Manage listings, compliance, and analytics.",
      icon: Settings,
      color: "amber",
      href: "#admin",
    },
  ]

  const complianceFeatures = [
    { label: "KYC lifecycle tracking" },
    { label: "Source-of-funds affidavits" },
    { label: "Audit-ready exports" },
  ]

  const vendorFeatures = [
    { label: "Campaign dashboard" },
    { label: "Offer tracking" },
    { label: "Fee approvals" },
  ]

  return (
    <div className={cn("min-h-screen antialiased bg-black text-white selection:bg-white/10 selection:text-white", geist.className)}>
      {/* Background */}
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
                <Home className="w-4 h-4 text-white/90" />
              </div>
              <span className="text-base sm:text-lg tracking-tight font-semibold">HAUS</span>
            </Link>

            <nav className="hidden md:flex items-center gap-6 text-sm">
              <Link href="#explore" className="text-white/80 hover:text-white transition">
                EXPLORE
              </Link>
              <Link href="#search" className="text-white/80 hover:text-white transition">
                SEARCH
              </Link>
              <Link href="#deephaus" className="text-white/80 hover:text-white transition">
                DEEPHAUS
              </Link>
              <Link href="#admin" className="text-white/80 hover:text-white transition">
                ADMIN
              </Link>
            </nav>

            <div className="flex items-center gap-3">
              <button className="hidden sm:inline-flex items-center gap-2 rounded-lg px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/10 transition">
                <Rocket className="w-4 h-4 text-white/90" />
                <span className="text-sm font-medium">EARLY ACCESS</span>
                <span className="ml-1 inline-flex items-center justify-center text-[10px] leading-none rounded-full bg-emerald-400/20 text-emerald-300 border border-emerald-400/30 px-1.5 py-1">
                  1
                </span>
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition"
              >
                <Menu className="w-4.5 h-4.5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <nav className="md:hidden fixed top-16 inset-x-0 z-50">
          <div className="mx-3 rounded-xl border border-white/10 bg-black/80 backdrop-blur-md shadow-xl">
            <ul className="p-3 text-sm">
              <li>
                <Link href="#explore" className="block rounded-lg px-3 py-2 hover:bg-white/5">
                  Explore
                </Link>
              </li>
              <li>
                <Link href="#search" className="block rounded-lg px-3 py-2 hover:bg-white/5">
                  Search
                </Link>
              </li>
              <li>
                <Link href="#deephaus" className="block rounded-lg px-3 py-2 hover:bg-white/5">
                  DeepHaus
                </Link>
              </li>
              <li>
                <Link href="#admin" className="block rounded-lg px-3 py-2 hover:bg-white/5">
                  Admin
                </Link>
              </li>
              <li className="mt-1">
                <Link href="#waitlist" className="inline-flex items-center gap-2 rounded-lg px-3 py-2 bg-white text-black hover:bg-white/90 border border-white/10 w-full justify-center font-semibold">
                  Early Access
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      )}

      <main>
        {/* Hero */}
        <section className="relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-10 pt-14 pb-10">
              <div className="flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 text-xs text-white/70 bg-white/5 border border-white/10 rounded-full px-2.5 py-1 w-fit mb-4">
                  <Mic className="w-3.5 h-3.5 text-white/80" />
                  <span>Voice-first. Compliance-ready.</span>
                  <span className="h-3 w-px bg-white/10" />
                  <span>Built for Australians</span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight font-semibold">
                  A REVOLUTION IN REAL ESTATE
                </h1>
                <p className="mt-4 text-base sm:text-lg leading-relaxed text-white/70">
                  Search, invest, buy, and manage in one AI-native platform. Voice-first. Compliance-ready. Built for Australians.
                </p>
                <p className="mt-3 text-base text-rose-300/90">Don't put up with dodgy agent tactics.</p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Link href="#waitlist" className="inline-flex items-center justify-center rounded-lg px-4 py-2.5 bg-white text-black hover:bg-white/90 transition border border-white/10 text-sm font-semibold">
                    Get Early Access
                  </Link>
                  <Link href="#explore" className="inline-flex items-center gap-2 rounded-lg px-3.5 py-2.5 bg-white/5 hover:bg-white/10 transition border border-white/10 text-sm font-medium">
                    <Compass className="w-4.5 h-4.5" />
                    Explore Products
                  </Link>
                </div>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {features.map((feature, idx) => (
                    <div key={idx} className="rounded-lg border border-white/10 bg-white/5 p-4">
                      <div className="flex items-center gap-2 text-sm font-medium">
                        <span className="text-xl">{feature.emoji}</span>
                        <span>{feature.title}</span>
                      </div>
                      <p className="mt-2 text-sm text-white/70">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Triple iOS Mock */}
              <div className="relative">
                <div className="absolute -top-8 -right-8 -z-10 h-56 w-56 rounded-full bg-emerald-500/10 blur-3xl" />
                <div className="flex items-end justify-center gap-6">
                  {/* Phone 1: Voice Search */}
                  <div className="relative">
                    <div className="w-[300px] sm:w-[340px] h-[620px] bg-black border border-white/10 rounded-[36px] p-2 shadow-2xl">
                      <div className="w-full h-full overflow-hidden relative bg-neutral-950 rounded-[30px] ring-1 ring-white/10">
                        {/* Status */}
                        <div className="flex justify-between items-center px-5 pt-3 pb-2">
                          <div className="text-white/90 text-xs font-medium">9:41</div>
                          <div className="flex items-center gap-1 text-white/70">
                            <Wifi className="w-4 h-4" />
                            <Battery className="w-4 h-4" />
                          </div>
                        </div>
                        {/* Header */}
                        <div className="px-5 pb-3">
                          <div className="flex items-center justify-between">
                            <h3 className="tracking-tight font-semibold text-xl">Voice Search</h3>
                            <span className="text-[10px] text-amber-300/90 bg-amber-400/10 border border-amber-400/20 rounded-full px-2 py-0.5">
                              Coming Soon
                            </span>
                          </div>
                          <p className="mt-1 text-xs text-white/60">98% accuracy AI voice processing</p>
                        </div>
                        {/* Search UI */}
                        <div className="px-5">
                          <div className="relative">
                            <input
                              placeholder="Ask for your perfect property…"
                              className="w-full text-sm placeholder-white/40 bg-white/5 border border-white/10 rounded-xl pl-10 pr-10 py-2.5 focus:outline-none focus:ring-2 focus:ring-white/20"
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
                            {voiceQueries.map((query, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-white/80">
                                <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                                "{query}"
                              </div>
                            ))}
                          </div>
                        </div>
                        {/* Real-time feedback */}
                        <div className="px-5 mt-5">
                          <div className="rounded-xl bg-white/5 border border-white/10 p-3">
                            <div className="flex items-center gap-2 text-xs text-emerald-300/90">
                              <MessageCircle className="w-3.5 h-3.5" />
                              <span>Recognized:</span>
                              <span className="text-white/80">"3 bedroom house in Melbourne with good transport links"</span>
                            </div>
                            <div className="mt-2 flex items-center gap-2 text-xs text-white/70">
                              <Loader2 className="w-3.5 h-3.5 animate-spin" />
                              <span>Processing:</span>
                              <span className="text-white/60">Searching 50,000+ listings</span>
                            </div>
                            <div className="mt-2 flex items-center gap-2 text-xs text-white/80">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                              <span>Results:</span>
                              <span>127 properties found in 89ms</span>
                            </div>
                          </div>
                        </div>
                        {/* Home indicator */}
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 bg-white/25 rounded-full" />
                      </div>
                    </div>
                  </div>

                  {/* Phone 2: Property Chat Assistant */}
                  <div className="relative hidden sm:block">
                    <div className="w-[300px] sm:w-[340px] h-[620px] bg-black border border-white/10 rounded-[36px] p-2 shadow-2xl">
                      <div className="w-full h-full overflow-hidden relative bg-neutral-950 rounded-[30px] ring-1 ring-white/10">
                        {/* Status */}
                        <div className="flex justify-between items-center px-5 pt-3 pb-2">
                          <div className="text-white/90 text-xs font-medium">9:41</div>
                          <div className="flex items-center gap-1 text-white/70">
                            <Wifi className="w-4 h-4" />
                            <Battery className="w-4 h-4" />
                          </div>
                        </div>
                        {/* Header */}
                        <div className="px-5 flex items-center justify-between pb-3">
                          <div>
                            <h3 className="tracking-tight font-semibold text-xl">AI Property Assistant</h3>
                            <p className="text-xs text-white/60">Personalized recommendations</p>
                          </div>
                          <span className="text-[10px] text-amber-300/90 bg-amber-400/10 border border-amber-400/20 rounded-full px-2 py-0.5">
                            Coming Soon
                          </span>
                        </div>
                        {/* Chat */}
                        <div className="px-5 space-y-3">
                          <div className="flex gap-2 items-start">
                            <div className="h-8 w-8 rounded-md bg-white/10 border border-white/10 flex items-center justify-center">
                              <Bot className="w-4 h-4 text-white/80" />
                            </div>
                            <div className="max-w-[75%] rounded-2xl rounded-tl-md bg-white/5 border border-white/10 p-3">
                              <p className="text-sm text-white/85">
                                Hi! Tell me about your ideal property and I'll shortlist options you'll love.
                              </p>
                            </div>
                          </div>
                          <div className="flex gap-2 items-start justify-end">
                            <div className="max-w-[75%] rounded-2xl rounded-tr-md bg-emerald-400/10 border border-emerald-400/20 p-3">
                              <p className="text-sm text-white/90">3-bed family home, quiet street, near good schools, budget $1.2M.</p>
                            </div>
                            <div className="h-8 w-8 rounded-md bg-white/10 border border-white/10 flex items-center justify-center">
                              <User className="w-4 h-4 text-white/80" />
                            </div>
                          </div>
                          <div className="flex gap-2 items-start">
                            <div className="h-8 w-8 rounded-md bg-white/10 border border-white/10 flex items-center justify-center">
                              <Bot className="w-4 h-4 text-white/80" />
                            </div>
                            <div className="max-w-[80%] rounded-2xl rounded-tl-md bg-white/5 border border-white/10 p-3">
                              <p className="text-sm text-white/85">
                                Got it. I found 18 properties matching your criteria. Two standout picks are in Balwyn North and Glen Iris with top-rated schools and low traffic streets.
                              </p>
                              <div className="mt-2 grid grid-cols-2 gap-2">
                                <div className="rounded-lg overflow-hidden border border-white/10 bg-white/5">
                                  <div className="aspect-video bg-[url('https://images.unsplash.com/photo-1613977257593-7f18b99f2ca3?q=80&w=900&auto=format&fit=crop')] bg-cover bg-center" />
                                  <div className="p-2">
                                    <p className="text-xs text-white/90">Glen Iris</p>
                                    <p className="text-[11px] text-white/60">3 bed • 2 bath • 520m²</p>
                                  </div>
                                </div>
                                <div className="rounded-lg overflow-hidden border border-white/10 bg-white/5">
                                  <div className="aspect-video bg-[url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=900&auto=format&fit=crop')] bg-cover bg-center" />
                                  <div className="p-2">
                                    <p className="text-xs text-white/90">Balwyn North</p>
                                    <p className="text-[11px] text-white/60">3 bed • 2 bath • 600m²</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Input */}
                        <div className="absolute left-0 right-0 bottom-9 px-5">
                          <div className="relative">
                            <input
                              disabled
                              value="Property Chat Assistant will be available once deployed"
                              className="w-full text-[13px] bg-white/5 border border-white/10 rounded-xl pl-3 pr-10 py-2 text-white/60 placeholder:text-white/50"
                            />
                            <div className="absolute inset-y-0 right-0 pr-2 flex items-center">
                              <Send className="w-4.5 h-4.5 text-white/40" />
                            </div>
                          </div>
                        </div>
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 bg-white/25 rounded-full" />
                      </div>
                    </div>
                  </div>

                  {/* Phone 3: Compliance & Fees */}
                  <div className="relative hidden lg:block">
                    <div className="w-[300px] sm:w-[340px] h-[620px] bg-black border border-white/10 rounded-[36px] p-2 shadow-2xl">
                      <div className="w-full h-full overflow-hidden relative bg-neutral-950 rounded-[30px] ring-1 ring-white/10">
                        {/* Status */}
                        <div className="flex justify-between items-center px-5 pt-3 pb-2">
                          <div className="text-white/90 text-xs font-medium">9:41</div>
                          <div className="flex items-center gap-1 text-white/70">
                            <Wifi className="w-4 h-4" />
                            <Battery className="w-4 h-4" />
                          </div>
                        </div>
                        {/* Header */}
                        <div className="px-5 pb-2 flex items-center justify-between">
                          <div>
                            <h3 className="tracking-tight font-semibold text-xl">Fair Play Protocol</h3>
                            <p className="text-xs text-white/60">Ethical AI • Real-time detection</p>
                          </div>
                          <div className="inline-flex items-center gap-1 text-[10px] text-emerald-300 bg-emerald-400/10 border border-emerald-400/20 rounded-full px-2 py-0.5">
                            <ShieldCheck className="w-3.5 h-3.5" /> Live
                          </div>
                        </div>
                        {/* Metrics */}
                        <div className="px-5">
                          <div className="grid grid-cols-2 gap-2">
                            <div className="rounded-lg bg-white/5 border border-white/10 p-3">
                              <p className="text-[11px] text-white/60">Dodgy Practice Detection</p>
                              <p className="text-lg tracking-tight font-semibold mt-1">95%</p>
                            </div>
                            <div className="rounded-lg bg-white/5 border border-white/10 p-3">
                              <p className="text-[11px] text-white/60">Fee Transparency</p>
                              <p className="text-lg tracking-tight font-semibold mt-1">100%</p>
                            </div>
                            <div className="rounded-lg bg-white/5 border border-white/10 p-3">
                              <p className="text-[11px] text-white/60">Compliance</p>
                              <div className="mt-1 inline-flex items-center gap-1 text-xs text-emerald-300">
                                <BadgeCheck className="w-3.5 h-3.5" /> AUSTRAC
                              </div>
                            </div>
                            <div className="rounded-lg bg-white/5 border border-white/10 p-3">
                              <p className="text-[11px] text-white/60">Security Breaches</p>
                              <p className="text-lg tracking-tight font-semibold mt-1">Zero</p>
                            </div>
                          </div>
                        </div>
                        {/* Receipt */}
                        <div className="px-5 mt-4">
                          <div className="rounded-xl bg-gradient-to-b from-white/[0.06] to-transparent border border-white/10 p-4">
                            <div className="flex items-center justify-between mb-2">
                              <p className="text-sm font-medium">Transparency Receipt</p>
                              <span className="text-[10px] text-white/60">Example</span>
                            </div>
                            <div className="space-y-2 text-sm">
                              <div className="flex items-center justify-between">
                                <span className="text-white/70">Agent Commission</span>
                                <span className="text-white/90">2.5% + GST</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-white/70">Marketing Fees</span>
                                <span className="text-white/90">Included in price</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-white/70">Legal Costs</span>
                                <span className="text-white/90">$1,200 estimated</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-white/70">Finance Fees</span>
                                <span className="text-white/90">$500–$800</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 bg-white/25 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Voice-first Property Search */}
        <section id="search" className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 lg:py-16">
            <div className="grid lg:grid-cols-2 gap-10">
              <div>
                <h2 className="text-2xl sm:text-3xl tracking-tight font-semibold">Voice-First Property Search</h2>
                <p className="mt-3 text-white/70">Speak naturally to find your perfect property. Powered by 98% accuracy AI voice processing.</p>
                <div className="mt-5 rounded-xl bg-white/5 border border-white/10 p-4">
                  <div className="flex items-center gap-2 text-sm text-white/80">
                    <Mic className="w-4.5 h-4.5 text-emerald-300" />
                    <span>Voice Search Interface — Coming Soon</span>
                  </div>
                  <p className="text-xs text-white/60 mt-2">AI-powered voice search will be available once deployed</p>
                </div>

                <div className="mt-6">
                  <p className="text-sm text-white/60 mb-2">Try These Queries</p>
                  <ul className="space-y-1.5 text-sm">
                    {voiceQueries.map((query, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-white/80">
                        <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                        "{query}"
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 rounded-xl bg-white/5 border border-white/10 p-4">
                  <p className="text-sm text-white/80">Real-Time Feedback</p>
                  <div className="mt-3 space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-emerald-300/90">
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-white/80">Recognized:</span>
                      <span className="text-white/70">"3 bedroom house in Melbourne with good transport links"</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/80">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Processing:</span>
                      <span className="text-white/70">Searching 50,000+ listings</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/80">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Results:</span>
                      <span>127 properties found in 89ms</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl tracking-tight font-semibold">AI Property Assistant</h3>
                <p className="mt-2 text-white/70">Chat with our AI assistant to get personalized property recommendations and investment insights.</p>
                <div className="mt-4 rounded-xl bg-white/5 border border-white/10 p-4">
                  <div className="flex items-center gap-2 text-sm text-white/80">
                    <Bot className="w-4.5 h-4.5" />
                    <span>Property Chat Assistant — Coming Soon</span>
                  </div>
                  <p className="text-xs text-white/60 mt-2">AI-powered property chat will be available once deployed</p>
                </div>

                <div className="mt-6 grid sm:grid-cols-2 gap-3">
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <Gavel className="w-4.5 h-4.5 text-white/80" />
                      Fair Play Protocol
                    </div>
                    <p className="mt-2 text-sm text-white/70">Ethical AI that protects you from dodgy practices.</p>
                    <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                      <div className="rounded-md bg-white/5 border border-white/10 p-2">
                        <p className="text-white/60">Detection Rate</p>
                        <p className="mt-1 text-white/90 font-semibold tracking-tight">95%</p>
                      </div>
                      <div className="rounded-md bg-white/5 border border-white/10 p-2">
                        <p className="text-white/60">Fee Transparency</p>
                        <p className="mt-1 text-white/90 font-semibold tracking-tight">100%</p>
                      </div>
                      <div className="rounded-md bg-white/5 border border-white/10 p-2">
                        <p className="text-white/60">Compliance</p>
                        <p className="mt-1 text-emerald-300">AUSTRAC</p>
                      </div>
                      <div className="rounded-md bg-white/5 border border-white/10 p-2">
                        <p className="text-white/60">Breach Record</p>
                        <p className="mt-1 text-white/90 font-semibold tracking-tight">Zero</p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <Receipt className="w-4.5 h-4.5 text-white/80" />
                      Transparency Receipt
                    </div>
                    <div className="mt-3 space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-white/70">Agent Commission</span>
                        <span className="text-white/90">2.5% + GST</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white/70">Marketing Fees</span>
                        <span className="text-white/90">Included</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white/70">Legal Costs</span>
                        <span className="text-white/90">$1,200 est.</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white/70">Finance Fees</span>
                        <span className="text-white/90">$500–$800</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Intelligence */}
        <section id="deephaus" className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 lg:py-16">
            <div className="grid lg:grid-cols-2 gap-10">
              <div>
                <h2 className="text-2xl sm:text-3xl tracking-tight font-semibold">Investment Intelligence</h2>
                <p className="mt-3 text-white/70">
                  Institutional-grade analytics for every property. 15+ valuation methodologies with predictive modeling.
                </p>
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                    <p className="text-xs text-white/60">Forecast Accuracy</p>
                    <p className="mt-1 text-xl tracking-tight font-semibold">85%</p>
                    <p className="text-[11px] text-white/60">12-month predictions</p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                    <p className="text-xs text-white/60">ARR Potential</p>
                    <p className="mt-1 text-xl tracking-tight font-semibold">$24.8M</p>
                    <p className="text-[11px] text-white/60">Advanced services</p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                    <p className="text-xs text-white/60">Valuation Methods</p>
                    <p className="mt-1 text-xl tracking-tight font-semibold">15+</p>
                    <p className="text-[11px] text-white/60">Hedonic, DCF, ML</p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                    <p className="text-xs text-white/60">Investment Score</p>
                    <p className="mt-1 text-xl tracking-tight font-semibold">8.7/10</p>
                    <p className="text-[11px] text-white/60">Composite metric</p>
                  </div>
                </div>

                <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-medium">Live Property Valuation</p>
                  <div className="mt-3 grid sm:grid-cols-2 gap-3 text-sm">
                    {valuationMethods.map((method, idx) => (
                      <div key={idx} className="rounded-lg bg-white/5 border border-white/10 p-3">
                        <div className="flex items-center justify-between">
                          <span className="text-white/70">{method.label}</span>
                          <span className="text-white/90">{method.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3">
                    <div className="flex items-center justify-between text-xs text-white/60 mb-1">
                      <span>Confidence Interval</span>
                      <span>±3.2%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full w-[64%] bg-gradient-to-r from-emerald-400/70 to-sky-400/70" />
                    </div>
                  </div>
                </div>
              </div>

              {/* DeepHaus Insight Panel */}
              <div>
                <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl tracking-tight font-semibold">DeepHaus Insight</h3>
                      <p className="text-xs text-white/60 mt-0.5">Price momentum • Yield • Risk bands</p>
                    </div>
                    <div className="inline-flex rounded-lg border border-white/10 bg-white/5 p-1 text-xs">
                      <button className="px-2 py-1 rounded-md bg-white/10 text-white border border-white/10">Buy</button>
                      <button className="px-2 py-1 rounded-md text-white/80 hover:text-white">Hold</button>
                      <button className="px-2 py-1 rounded-md text-white/80 hover:text-white">Rent</button>
                    </div>
                  </div>

                  {/* Chart */}
                  <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center justify-between text-xs text-white/60">
                      <span>12-mo price forecast</span>
                      <span>Base • Low • High</span>
                    </div>
                    <div className="mt-3 relative h-28">
                      <svg viewBox="0 0 300 100" className="absolute inset-0 w-full h-full">
                        <defs>
                          <linearGradient id="gradLine" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="rgb(16,185,129)" stopOpacity="0.9" />
                            <stop offset="100%" stopColor="rgb(56,189,248)" stopOpacity="0.9" />
                          </linearGradient>
                          <linearGradient id="gradFill" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="rgb(16,185,129)" stopOpacity="0.22" />
                            <stop offset="100%" stopColor="rgb(16,185,129)" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        {/* High/Low band */}
                        <path d="M0,70 C40,60 80,55 120,52 C160,50 200,48 240,46 C270,45 300,44 300,44 L300,66 C270,67 240,69 200,71 C160,73 120,76 80,79 C40,82 0,84 0,84 Z" fill="url(#gradFill)" />
                        {/* Base line */}
                        <path d="M0,77 C40,70 80,65 120,62 C160,59 200,56 240,54 C270,53 300,52" fill="none" stroke="url(#gradLine)" strokeWidth="2.5" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
                      <div className="rounded-lg bg-white/5 border border-white/10 p-2">
                        <p className="text-white/60">Base</p>
                        <p className="mt-1 text-white/90 font-semibold tracking-tight">$821k</p>
                      </div>
                      <div className="rounded-lg bg-white/5 border border-white/10 p-2">
                        <p className="text-white/60">Low</p>
                        <p className="mt-1 text-white/90 font-semibold tracking-tight">$796k</p>
                      </div>
                      <div className="rounded-lg bg-white/5 border border-white/10 p-2">
                        <p className="text-white/60">High</p>
                        <p className="mt-1 text-white/90 font-semibold tracking-tight">$846k</p>
                      </div>
                    </div>
                  </div>

                  {/* Factors */}
                  <div className="mt-4 grid sm:grid-cols-3 gap-3 text-sm">
                    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                      <div className="flex items-center gap-2">
                        <Activity className="w-4.5 h-4.5 text-emerald-300" />
                        <span className="font-medium">Momentum</span>
                      </div>
                      <p className="mt-2 text-white/70">Uptrend • 6-week streak</p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                      <div className="flex items-center gap-2">
                        <Percent className="w-4.5 h-4.5 text-sky-300" />
                        <span className="font-medium">Gross Yield</span>
                      </div>
                      <p className="mt-2 text-white/70">4.1% suburb median</p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4.5 h-4.5 text-violet-300" />
                        <span className="font-medium">Risk</span>
                      </div>
                      <p className="mt-2 text-white/70">Low volatility band</p>
                    </div>
                  </div>

                  {/* Top suburbs */}
                  <div className="mt-4">
                    <p className="text-sm font-medium">Top Suburbs Right Now</p>
                    <div className="mt-2 grid sm:grid-cols-3 gap-2 text-xs">
                      {topSuburbs.map((suburb, idx) => (
                        <div key={idx} className="rounded-lg border border-white/10 bg-white/5 p-2">
                          <p className="text-white/90">{suburb.name}</p>
                          <p className="text-white/60">Score {suburb.score}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <Link href="#waitlist" className="inline-flex items-center gap-2 rounded-lg px-3.5 py-2.5 bg-white text-black hover:bg-white/90 transition border border-white/10 text-sm font-semibold">
                      <Sparkles className="w-4.5 h-4.5" />
                      Unlock DeepHaus
                    </Link>
                    <Link href="#explore" className="inline-flex items-center gap-2 rounded-lg px-3.5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-sm">
                      <Compass className="w-4.5 h-4.5" />
                      Explore Products
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Explore Products */}
        <section id="explore" className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 lg:py-16">
            <div className="flex items-end justify-between gap-6">
              <div>
                <h2 className="text-2xl sm:text-3xl tracking-tight font-semibold">Explore the HAUS Suite</h2>
                <p className="mt-2 text-white/70">Built for buyers, investors, and professionals. AI-native from search to settlement.</p>
              </div>
              <Link href="#waitlist" className="hidden sm:inline-flex items-center gap-2 rounded-lg px-3.5 py-2.5 bg-white text-black hover:bg-white/90 border border-white/10 text-sm font-semibold">
                <Rocket className="w-4.5 h-4.5" />
                Get Early Access
              </Link>
            </div>

            <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-3">
              {productCards.map((product, idx) => {
                const Icon = product.icon
                return (
                  <Link
                    key={idx}
                    className="group rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition"
                    href={product.href}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className={cn(
                          "h-8 w-8 rounded-lg flex items-center justify-center",
                          product.color === "emerald" && "bg-emerald-400/15 border border-emerald-400/20",
                          product.color === "sky" && "bg-sky-400/15 border border-sky-400/20",
                          product.color === "violet" && "bg-violet-400/15 border border-violet-400/20",
                          product.color === "amber" && "bg-amber-400/15 border border-amber-400/20"
                        )}>
                          <Icon className={cn(
                            "w-4.5 h-4.5",
                            product.color === "emerald" && "text-emerald-300",
                            product.color === "sky" && "text-sky-300",
                            product.color === "violet" && "text-violet-300",
                            product.color === "amber" && "text-amber-300"
                          )} />
                        </div>
                        <p className="font-medium">{product.title}</p>
                      </div>
                      <ArrowRight className="w-4.5 h-4.5 text-white/60 group-hover:translate-x-0.5 transition" />
                    </div>
                    <p className="mt-2 text-sm text-white/70">{product.desc}</p>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* Fair Play Protocol */}
        <section id="fairplay" className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 lg:py-16">
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1">
                <h2 className="text-2xl sm:text-3xl tracking-tight font-semibold">Fair Play Protocol</h2>
                <p className="mt-3 text-white/70">We embed ethics into the product. Transparent fees, no games, and live detection of dodgy practices.</p>
                <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-emerald-400/10 text-emerald-300 border border-emerald-400/20 px-3 py-1 text-xs">
                  <ShieldCheck className="w-4 h-4" />
                  Live Monitoring Enabled
                </div>
              </div>
              <div className="lg:col-span-2 grid sm:grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <ScanSearch className="w-4.5 h-4.5 text-white/80" />
                      Underquoting Detector
                    </div>
                    <span className="text-[10px] rounded-full bg-white/5 border border-white/10 px-2 py-0.5 text-white/60">v0.9</span>
                  </div>
                  <p className="mt-2 text-sm text-white/70">Cross-checks guide prices against comps and market velocity.</p>
                  <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
                    <div className="rounded-lg bg-white/5 border border-white/10 p-2">
                      <p className="text-white/60">Precision</p>
                      <p className="mt-1 text-white/90 font-semibold tracking-tight">92%</p>
                    </div>
                    <div className="rounded-lg bg-white/5 border border-white/10 p-2">
                      <p className="text-white/60">Recall</p>
                      <p className="mt-1 text-white/90 font-semibold tracking-tight">89%</p>
                    </div>
                    <div className="rounded-lg bg-white/5 border border-white/10 p-2">
                      <p className="text-white/60">Latency</p>
                      <p className="mt-1 text-white/90 font-semibold tracking-tight">54ms</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <FileCheck className="w-4.5 h-4.5 text-white/80" />
                      Compliance Console
                    </div>
                    <span className="text-[10px] rounded-full bg-white/5 border border-white/10 px-2 py-0.5 text-white/60">AU</span>
                  </div>
                  <p className="mt-2 text-sm text-white/70">Built to support AUSTRAC, AML/CTF, and local regulations out-of-the-box.</p>
                  <ul className="mt-3 space-y-1.5 text-sm">
                    {complianceFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-white/80">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/60" />
                        {feature.label}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Admin Console */}
        <section id="admin" className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 lg:py-16">
            <div className="flex items-end justify-between gap-6">
              <div>
                <h2 className="text-2xl sm:text-3xl tracking-tight font-semibold">Admin Console</h2>
                <p className="mt-2 text-white/70">Operate with precision. Control listings, collaborate with vendors, and stay compliant.</p>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <Link href="#waitlist" className="inline-flex items-center gap-2 rounded-lg px-3.5 py-2.5 bg-white text-black hover:bg-white/90 border border-white/10 text-sm font-semibold">
                  <Lock className="w-4.5 h-4.5" />
                  Request Access
                </Link>
              </div>
            </div>

            <div className="mt-6 grid lg:grid-cols-3 gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center">
                      <Files className="w-4.5 h-4.5" />
                    </div>
                    <p className="font-medium">Listing Manager</p>
                  </div>
                  <span className="text-[10px] text-white/60">Beta</span>
                </div>
                <p className="mt-2 text-sm text-white/70">Sync portals, track enquiries, and publish updates in real-time.</p>
                <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
                  <div className="rounded-lg bg-white/5 border border-white/10 p-2">
                    <p className="text-white/60">Active</p>
                    <p className="mt-1 text-white/90 font-semibold tracking-tight">128</p>
                  </div>
                  <div className="rounded-lg bg-white/5 border border-white/10 p-2">
                    <p className="text-white/60">Avg. DOM</p>
                    <p className="mt-1 text-white/90 font-semibold tracking-tight">27</p>
                  </div>
                  <div className="rounded-lg bg-white/5 border border-white/10 p-2">
                    <p className="text-white/60">Leads</p>
                    <p className="mt-1 text-white/90 font-semibold tracking-tight">1.9k</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center">
                      <Users className="w-4.5 h-4.5" />
                    </div>
                    <p className="font-medium">Vendor Portal</p>
                  </div>
                  <span className="text-[10px] text-white/60">New</span>
                </div>
                <p className="mt-2 text-sm text-white/70">Transparent comms, shared timelines, and fee clarity for vendors.</p>
                <ul className="mt-3 space-y-1.5 text-sm">
                  {vendorFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-white/80">
                      <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                      {feature.label}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center">
                      <ShieldAlert className="w-4.5 h-4.5" />
                    </div>
                    <p className="font-medium">Compliance Monitor</p>
                  </div>
                  <span className="text-[10px] text-white/60">Live</span>
                </div>
                <p className="mt-2 text-sm text-white/70">Automated checks and alerts. Export audit trails with one click.</p>
                <div className="mt-3 rounded-lg border border-white/10 bg-white/5 p-3 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">Flags (7d)</span>
                    <span className="text-amber-300">3</span>
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-400/10 text-emerald-300 border border-emerald-400/20 px-2 py-0.5">
                      Closed
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20 px-2 py-0.5">
                      Pending
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Admin CTA */}
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-emerald-400/15 border border-emerald-400/20 flex items-center justify-center">
                  <LockKeyhole className="w-5 h-5 text-emerald-300" />
                </div>
                <div>
                  <p className="font-medium">Private Beta</p>
                  <p className="text-xs text-white/60">We're onboarding select agencies and buyers' advocates.</p>
                </div>
              </div>
              <Link href="#waitlist" className="inline-flex items-center gap-2 rounded-lg px-3.5 py-2.5 bg-white text-black hover:bg-white/90 border border-white/10 text-sm font-semibold">
                Join the Waitlist
                <ArrowRight className="w-4.5 h-4.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Waitlist */}
        <section id="waitlist" className="border-t border-white/10">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12 lg:py-16">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
              <div className="flex items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl tracking-tight font-semibold">Get Early Access</h3>
                  <p className="mt-1 text-white/70 text-sm">
                    Be first to try Voice Search, DeepHaus analytics, and the Fair Play Protocol.
                  </p>
                </div>
                <div className="hidden sm:flex h-10 w-10 rounded-xl bg-white/10 border border-white/10 items-center justify-center">
                  <Rocket className="w-5 h-5" />
                </div>
              </div>

              <form onSubmit={handleWaitlistSubmit} className="mt-6 grid sm:grid-cols-[1fr_auto] gap-3" aria-label="Join the waitlist">
                <label className="sr-only" htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@domain.com"
                  className="w-full rounded-lg bg-white/5 border border-white/10 px-3.5 py-2.5 text-sm placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-lg px-4 py-2.5 bg-white text-black hover:bg-white/90 transition border border-white/10 text-sm font-semibold"
                >
                  Request Invite
                </button>
                <p className="sm:col-span-2 text-xs text-white/60">
                  By joining, you agree to our Terms and acknowledge our Privacy Policy.
                </p>
                {waitlistSubmitted && (
                  <p className="sm:col-span-2 text-sm text-emerald-300">
                    Thanks! We'll be in touch shortly.
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-md bg-white/10 ring-1 ring-white/10 flex items-center justify-center">
                  <Home className="w-4 h-4 text-white/90" />
                </div>
                <span className="text-lg font-semibold tracking-tight">HAUS</span>
              </div>
              <p className="mt-3 text-sm text-white/70 max-w-md">
                AI-native real estate for Australia. Voice-first search, transparent fees, and institutional-grade analytics—built for everyone.
              </p>
              <div className="mt-4 flex items-center gap-3">
                <Link href="#waitlist" className="inline-flex items-center gap-2 rounded-lg px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-xs">
                  <Send className="w-4 h-4" />
                  Join Waitlist
                </Link>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 rounded-lg px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-xs"
                  aria-label="Copy email address"
                >
                  <Copy className="w-4 h-4" />
                  Copy Email
                </button>
                {emailCopied && (
                  <span className="text-[11px] rounded-full bg-emerald-400/10 text-emerald-300 border border-emerald-400/20 px-2 py-0.5">
                    Copied
                  </span>
                )}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium">Product</p>
              <ul className="mt-2 space-y-1.5 text-sm">
                <li>
                  <Link className="text-white/70 hover:text-white" href="#search">
                    Voice Search
                  </Link>
                </li>
                <li>
                  <Link className="text-white/70 hover:text-white" href="#deephaus">
                    DeepHaus
                  </Link>
                </li>
                <li>
                  <Link className="text-white/70 hover:text-white" href="#fairplay">
                    Fair Play
                  </Link>
                </li>
                <li>
                  <Link className="text-white/70 hover:text-white" href="#admin">
                    Admin Console
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-medium">Company</p>
              <ul className="mt-2 space-y-1.5 text-sm">
                <li>
                  <Link className="text-white/70 hover:text-white" href="#">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="text-white/70 hover:text-white" href="#">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link className="text-white/70 hover:text-white" href="#">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link className="text-white/70 hover:text-white" href="#">
                    Legal
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-white/10 pt-4">
            <p className="text-xs text-white/60">© {currentYear} HAUS. All rights reserved.</p>
            <div className="flex items-center gap-3">
              <a href="#" className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10" aria-label="Twitter">
                <Twitter className="w-4.5 h-4.5" />
              </a>
              <a href="#" className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10" aria-label="GitHub">
                <Github className="w-4.5 h-4.5" />
              </a>
              <a href="#" className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10" aria-label="LinkedIn">
                <Linkedin className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
