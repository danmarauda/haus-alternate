"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  Home,
  Mic,
  Lock,
  Sparkles,
  Compass,
  Mail,
  Scale,
  BadgeInfo,
  CheckCircle2,
  Cpu,
  ListChecks,
  MessageSquare,
  Clock,
  Receipt,
  Download,
  LineChart,
  ShieldCheck,
  Glasses,
  Sofa,
  CircuitBoard,
  Atom,
  Activity,
  Grid2x2,
  ExternalLink,
  Wand2,
  Camera,
  TrendingUp,
  LockKeyhole,
  Map,
  LayoutGrid,
  UserCheck,
  Banknote,
  Briefcase,
  Check,
  ChevronDown,
  Twitter,
  Linkedin,
  Github,
  MailOpen,
  Leaf,
  Shield,
  Rocket,
} from "lucide-react"
import { cn } from "@/lib/utils"
import type {
  VoiceSearchState,
  FeaturedProperty,
  FAQItem,
  PlatformMetric,
  FeatureHighlight,
  ReceiptItem,
} from "@/types/landing-voice"

/**
 * Voice-First Landing Page
 *
 * @description
 * HAUS landing page showcasing voice-first real estate search with AI-powered
 * property discovery, Fair Play Protocol, and transparent pricing.
 *
 * @features
 * - Voice search integration pattern
 * - Dark theme with zinc-950 background
 * - Responsive mobile-first design
 * - Interactive FAQ sections
 * - Live property valuation preview
 * - Platform performance metrics
 *
 * @example
 * ```tsx
 * import LandingVoicePage from './page'
 *
 * <LandingVoicePage />
 * ```
 */
export default function LandingVoicePage() {
  // Voice search state
  const [voiceSearch, setVoiceSearch] = useState<VoiceSearchState>({
    isListening: false,
    transcript: "",
    results: null,
    accuracy: 98,
  })

  // FAQ state
  const [faqs, setFaqs] = useState<FAQItem[]>([
    {
      question: "How is HAUS different from other portals?",
      answer: "HAUS is voice-first, AI-native, and transparency-driven. We focus on explainability, compliance, and investment-grade analytics.",
    },
    {
      question: "When will voice search be available?",
      answer: "Voice features are rolling out in Early Access. Join the waitlist to get priority invites.",
    },
    {
      question: "Is HAUS available outside Australia?",
      answer: "We're focused on Australia first. Global markets are on our roadmap.",
    },
    {
      question: "How do you handle fees and disclosures?",
      answer: "Every cost is presented in plain English via the Transparency Receipt so there are no surprises.",
    },
  ])

  // Featured properties
  const featuredProperties: FeaturedProperty[] = [
    {
      id: "1",
      title: "Modern Downtown Loft",
      location: "Downtown District",
      price: 2850000,
      bedrooms: 3,
      bathrooms: 2,
      size: 2400,
      imageUrl:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2000&auto=format&fit=crop",
      slug: "modern-downtown-loft",
    },
    {
      id: "2",
      title: "Luxury Penthouse Suite",
      location: "Financial District",
      price: 4200000,
      bedrooms: 4,
      bathrooms: 3,
      size: 3200,
      imageUrl:
        "https://images.unsplash.com/photo-1515266591878-f93e32bc5937?q=80&w=2000&auto=format&fit=crop",
      slug: "luxury-penthouse-suite",
    },
    {
      id: "3",
      title: "Contemporary Family Home",
      location: "Residential Hills",
      price: 1950000,
      bedrooms: 4,
      bathrooms: 3,
      size: 2800,
      imageUrl:
        "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg",
      slug: "contemporary-family-home",
    },
  ]

  // Platform metrics
  const platformMetrics: PlatformMetric[] = [
    { label: "Concurrent users", value: "100K+" },
    { label: "API response time", value: "<100ms" },
    { label: "Platform uptime", value: "99.9%" },
    { label: "Security breaches", value: "Zero" },
  ]

  // Fair Play metrics
  const fairPlayMetrics: PlatformMetric[] = [
    { label: "Dodgy practice detection", value: "95%" },
    { label: "Fee disclosure", value: "100%" },
    { label: "Compliance certified", value: "AUSTRAC" },
    { label: "Security breaches", value: "Zero" },
  ]

  // Investment metrics
  const investmentMetrics: PlatformMetric[] = [
    { label: "Forecast accuracy", value: "85%" },
    { label: "ARR potential", value: "$24.8M" },
    { label: "Valuation methods", value: "15+" },
  ]

  // Advantage features
  const advantageFeatures: FeatureHighlight[] = [
    {
      title: "AI-Powered Matching",
      description:
        "Learns your explicit and implicit preferences for increasingly personalized recommendations.",
      icon: "Wand2",
    },
    {
      title: "Immersive Visualization",
      description: "Photoreal 3D tours, AR furniture, and day/night simulations.",
      icon: "Camera",
    },
    {
      title: "Predictive Analytics",
      description: "Price forecasts, investment scores, and neighborhood trends.",
      icon: "TrendingUp",
    },
    {
      title: "Exclusive Inventory",
      description:
        "Off-market, pre-market, and private listings you won't see elsewhere.",
      icon: "LockKeyhole",
    },
    {
      title: "Neighborhood Insights",
      description:
        "Schools, amenities, transit, safety, and future development data.",
      icon: "Map",
    },
    {
      title: "Smart Comparisons",
      description:
        "AI highlights differences and similarities based on your priorities.",
      icon: "LayoutGrid",
    },
  ]

  // Transparency receipt items
  const transparencyReceipt: ReceiptItem[] = [
    { label: "Agent Commission", value: "2.5% + GST" },
    { label: "Marketing Fees", value: "Included in price" },
    { label: "Legal Costs", value: "$1,200 estimated" },
    { label: "Finance Fees", value: "$500–$800" },
  ]

  // Current year for footer
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear())

  // Toggle FAQ
  const toggleFAQ = (index: number) => {
    setFaqs((prev) =>
      prev.map((faq, i) =>
        i === index ? { ...faq, isOpen: !faq.isOpen } : faq
      )
    )
  }

  // Voice search toggle (placeholder implementation)
  const toggleVoiceSearch = () => {
    setVoiceSearch((prev) => ({
      ...prev,
      isListening: !prev.isListening,
      transcript: prev.isListening ? "" : "Listening...",
    }))
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 antialiased selection:bg-cyan-400/20 selection:text-cyan-200">
      {/* Backdrop gradients */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-cyan-500/20 blur-3xl" />
        <div className="absolute -bottom-40 right-1/4 w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-sky-400/10 via-cyan-500/10 to-blue-400/10 blur-3xl" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/70 bg-zinc-950/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center ring-1 ring-white/10">
                <Home className="w-4 h-4 text-white" strokeWidth={1.5} />
              </div>
              <span className="text-[18px] font-semibold tracking-tight font-manrope">
                HAUS
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="#"
                className="text-sm text-zinc-300 hover:text-white transition-colors"
              >
                EXPLORE
              </Link>
              <Link
                href="#"
                className="text-sm text-zinc-300 hover:text-white transition-colors"
              >
                SEARCH
              </Link>
              <Link
                href="#"
                className="text-sm text-zinc-300 hover:text-white transition-colors"
              >
                DEEPHAUS
              </Link>
              <Link
                href="#"
                className="text-sm text-zinc-300 hover:text-white transition-colors"
              >
                ADMIN
              </Link>
              <Link
                href="#"
                className="relative text-sm text-zinc-300 hover:text-white transition-colors flex items-center gap-2"
              >
                EARLY ACCESS
                <span className="inline-flex items-center justify-center text-[11px] h-4 min-w-4 px-1 rounded-full bg-cyan-500/20 text-cyan-300 ring-1 ring-cyan-400/30">
                  1
                </span>
              </Link>
            </nav>
            <div className="flex items-center gap-2">
              <button
                onClick={toggleVoiceSearch}
                className="hidden sm:inline-flex items-center gap-2 h-9 px-3 rounded-lg bg-zinc-900/60 ring-1 ring-white/10 hover:ring-white/20 transition"
              >
                <Mic className="w-4 h-4 text-cyan-300" strokeWidth={1.5} />
                <span className="text-sm text-zinc-200">Try Voice</span>
              </button>
              <button className="inline-flex items-center gap-2 h-9 px-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:opacity-95 transition shadow-sm">
                <Lock className="w-4 h-4" strokeWidth={1.5} />
                <span className="text-sm">Get Early Access</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1 px-2.5 h-7 rounded-full bg-zinc-900/70 ring-1 ring-white/10 text-xs text-zinc-300">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-300" strokeWidth={1.5} />
                  EARLY ACCESS
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 h-7 rounded-full bg-cyan-500/15 ring-1 ring-cyan-400/30 text-xs text-cyan-200">
                  <Mic className="w-3.5 h-3.5" strokeWidth={1.5} />
                  Voice-first
                </span>
              </div>
              <h1 className="text-[40px] sm:text-[48px] leading-[1.05] tracking-tight font-semibold text-white font-manrope">
                A revolution in real estate
              </h1>
              <p className="mt-4 text-[17px] leading-7 text-zinc-300">
                Search, invest, buy, and manage in one AI-native platform.
                Voice-first. Compliance-ready. Built for Australians.
              </p>
              <p className="mt-2 text-[15px] text-zinc-400">
                Don't put up with dodgy agent tactics.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <button className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:opacity-95 transition shadow-sm">
                  <Mail className="w-5 h-5" strokeWidth={1.5} />
                  <span className="text-[15px]">Get Early Access</span>
                </button>
                <button className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-xl bg-zinc-900/70 ring-1 ring-white/10 hover:ring-white/20 text-zinc-200 transition">
                  <Compass className="w-5 h-5 text-cyan-300" strokeWidth={1.5} />
                  <span className="text-[15px]">Explore Products</span>
                </button>
              </div>
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-4 rounded-xl bg-zinc-900/50 ring-1 ring-white/10 hover:ring-white/20 transition">
                  <div className="flex items-center gap-2">
                    <Mic className="w-4.5 h-4.5 text-cyan-300" strokeWidth={1.5} />
                    <span className="text-sm text-zinc-200">Voice-First Search</span>
                  </div>
                  <p className="mt-1 text-xs text-zinc-400">
                    Ask naturally. No more checkbox hell.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-zinc-900/50 ring-1 ring-white/10 hover:ring-white/20 transition">
                  <div className="flex items-center gap-2">
                    <Scale className="w-4.5 h-4.5 text-cyan-300" strokeWidth={1.5} />
                    <span className="text-sm text-zinc-200">Fair Play Protocol</span>
                  </div>
                  <p className="mt-1 text-xs text-zinc-400">
                    No underquoting. No games.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-zinc-900/50 ring-1 ring-white/10 hover:ring-white/20 transition">
                  <div className="flex items-center gap-2">
                    <BadgeInfo className="w-4.5 h-4.5 text-cyan-300" strokeWidth={1.5} />
                    <span className="text-sm text-zinc-200">Transparency by Design</span>
                  </div>
                  <p className="mt-1 text-xs text-zinc-400">
                    Every fee disclosed. Plain English.
                  </p>
                </div>
              </div>
            </div>

            {/* Voice Search Mock UI */}
            <div className="relative">
              <div className="absolute -top-10 -left-6 w-56 h-56 rounded-full bg-cyan-500/10 blur-2xl" />
              <div className="relative mx-auto max-w-md w-full">
                <div className="rounded-3xl bg-zinc-900/70 ring-1 ring-white/10 p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                        <Mic className="w-4.5 h-4.5 text-white" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="text-sm text-zinc-300">Voice Search</p>
                        <p className="text-xs text-zinc-500">
                          {voiceSearch.accuracy}% accuracy
                        </p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 px-2 h-7 rounded-full bg-zinc-800 ring-1 ring-white/10 text-xs text-zinc-300">
                      <Clock className="w-3.5 h-3.5 text-cyan-300" strokeWidth={1.5} />
                      Coming soon
                    </span>
                  </div>
                  <div className="mt-4 rounded-xl border border-dashed border-white/10 bg-zinc-900/70 p-4">
                    <p className="text-sm text-zinc-400">
                      AI-powered voice search will be available once deployed
                    </p>
                    <div className="mt-3 grid grid-cols-1 gap-2">
                      {[
                        '"Family home with courtyard near parks"',
                        '"Investment property with high yield in Brisbane"',
                        '"Waterfront apartment with city views"',
                        '"Rural acreage with solar power and bore"',
                      ].map((example, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="mt-1 text-cyan-300">•</span>
                          <p className="text-sm text-zinc-300">{example}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-1 gap-2">
                    <div className="flex items-center justify-between px-3 h-10 rounded-lg bg-zinc-900/60 ring-1 ring-white/10">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4.5 h-4.5 text-emerald-400" strokeWidth={1.5} />
                        <span className="text-xs text-zinc-300">Recognized</span>
                      </div>
                      <span className="text-xs text-zinc-400">
                        "3 bedroom house in Melbourne with good transport links"
                      </span>
                    </div>
                    <div className="flex items-center justify-between px-3 h-10 rounded-lg bg-zinc-900/60 ring-1 ring-white/10">
                      <div className="flex items-center gap-2">
                        <Cpu className="w-4.5 h-4.5 text-sky-400" strokeWidth={1.5} />
                        <span className="text-xs text-zinc-300">Processing</span>
                      </div>
                      <span className="text-xs text-zinc-400">
                        Searching 50,000+ listings
                      </span>
                    </div>
                    <div className="flex items-center justify-between px-3 h-10 rounded-lg bg-zinc-900/60 ring-1 ring-white/10">
                      <div className="flex items-center gap-2">
                        <ListChecks className="w-4.5 h-4.5 text-cyan-400" strokeWidth={1.5} />
                        <span className="text-xs text-zinc-300">Results</span>
                      </div>
                      <span className="text-xs text-zinc-400">
                        127 properties • 89ms
                      </span>
                    </div>
                  </div>
                </div>

                {/* AI Assistant Preview */}
                <div className="mt-4 rounded-3xl bg-zinc-900/70 ring-1 ring-white/10 p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-lg bg-cyan-500/20 ring-1 ring-cyan-400/30 flex items-center justify-center">
                        <MessageSquare className="w-4 h-4 text-cyan-300" strokeWidth={1.5} />
                      </div>
                      <p className="text-sm text-zinc-300">AI Property Assistant</p>
                    </div>
                    <span className="text-xs text-zinc-400">Coming soon</span>
                  </div>
                  <p className="mt-2 text-sm text-zinc-400">
                    Chat with our AI assistant to get personalized property
                    recommendations and investment insights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fair Play Protocol */}
      <section className="mt-20 md:mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-[28px] sm:text-[32px] leading-[1.1] tracking-tight font-semibold font-manrope">
                Fair Play Protocol
              </h2>
              <p className="mt-3 text-zinc-300">
                Ethical AI that protects you from dodgy practices. Real-time
                detection with plain-English transparency.
              </p>
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {fairPlayMetrics.map((metric, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-zinc-900/60 ring-1 ring-white/10"
                  >
                    <p className="text-2xl font-semibold tracking-tight text-white font-manrope">
                      {metric.value}
                    </p>
                    <p className="text-xs text-zinc-400">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="rounded-2xl bg-zinc-900/60 ring-1 ring-white/10 p-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-zinc-300">Transparency Receipt Example</p>
                  <Receipt className="w-5 h-5 text-cyan-300" strokeWidth={1.5} />
                </div>
                <div className="mt-4 space-y-3">
                  {transparencyReceipt.map((item, i) => (
                    <div
                      key={i}
                      className={cn(
                        "flex items-center justify-between py-2",
                        i !== transparencyReceipt.length - 1 && "border-b border-white/10"
                      )}
                    >
                      <span className="text-sm text-zinc-300">{item.label}</span>
                      <span className="text-sm text-zinc-200">{item.value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-end">
                  <button className="inline-flex items-center gap-2 h-9 px-3 rounded-lg bg-zinc-950/60 ring-1 ring-white/10 hover:ring-white/20 text-zinc-200 transition">
                    <Download className="w-4 h-4 text-cyan-300" strokeWidth={1.5} />
                    <span className="text-sm">Download receipt</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Intelligence */}
      <section className="mt-20 md:mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-[28px] sm:text-[32px] leading-[1.1] tracking-tight font-semibold font-manrope">
                Investment Intelligence
              </h2>
              <p className="mt-3 text-zinc-300">
                Institutional-grade analytics for every property. 15+ valuation
                methodologies with predictive modeling.
              </p>
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {investmentMetrics.map((metric, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-zinc-900/60 ring-1 ring-white/10"
                  >
                    <p className="text-2xl font-semibold tracking-tight text-white font-manrope">
                      {metric.value}
                    </p>
                    <p className="text-xs text-zinc-400">{metric.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-zinc-900/60 ring-1 ring-white/10 p-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-zinc-300">Live Property Valuation</p>
                  <LineChart className="w-5 h-5 text-cyan-300" strokeWidth={1.5} />
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {[
                    { label: "Comparable Sales", value: "$785,000" },
                    { label: "Hedonic Regression", value: "$812,000" },
                    { label: "DCF Analysis", value: "$798,000" },
                    { label: "ML Forecast", value: "$805,000" },
                  ].map((method, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-zinc-950/60 ring-1 ring-white/10"
                    >
                      <p className="text-xs text-zinc-400">{method.label}</p>
                      <p className="text-lg font-semibold tracking-tight text-white font-manrope">
                        {method.value}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 px-2 h-7 rounded-full bg-emerald-500/15 ring-1 ring-emerald-400/30 text-xs text-emerald-300">
                      <ShieldCheck className="w-3.5 h-3.5" strokeWidth={1.5} />
                      Investment Score
                    </span>
                    <span className="text-sm text-zinc-200">8.7/10</span>
                  </div>
                  <button className="inline-flex items-center gap-2 h-9 px-3 rounded-lg bg-zinc-950/60 ring-1 ring-white/10 hover:ring-white/20 text-zinc-200 transition">
                    <Sparkles className="w-4 h-4 text-cyan-300" strokeWidth={1.5} />
                    <span className="text-sm">Explain</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Immersive 3D Experience */}
            <div>
              <h3 className="text-[22px] leading-[1.15] tracking-tight font-semibold text-white font-manrope">
                Immersive 3D Property Experience
              </h3>
              <p className="mt-3 text-zinc-300">
                Neural Radiance Fields (NeRF) powered WebXR tours with virtual
                staging and spatial intelligence.
              </p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-zinc-900/60 ring-1 ring-white/10">
                  <div className="flex items-center gap-2">
                    <Glasses className="w-5 h-5 text-cyan-300" strokeWidth={1.5} />
                    <p className="text-sm text-zinc-200">VR Ready • Virtual Tour</p>
                  </div>
                  <p className="mt-2 text-sm text-zinc-400">
                    Experience this property in full 3D immersive detail.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-zinc-900/60 ring-1 ring-white/10">
                  <div className="flex items-center gap-2">
                    <Sofa className="w-5 h-5 text-cyan-300" strokeWidth={1.5} />
                    <p className="text-sm text-zinc-200">AI Staged • Virtual Staging</p>
                  </div>
                  <p className="mt-2 text-sm text-zinc-400">
                    See this property with AI-designed interior layouts.
                  </p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: "3D tour generation", value: "<2 min" },
                  { label: "Device compatibility", value: "95%" },
                  { label: "Room measurements", value: "Spatial AI" },
                  { label: "Photorealistic 3D", value: "NeRF" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-zinc-900/60 ring-1 ring-white/10"
                  >
                    <p className="text-lg font-semibold tracking-tight font-manrope">
                      {stat.value}
                    </p>
                    <p className="text-xs text-zinc-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="mt-20 md:mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-zinc-900/60 ring-1 ring-white/10 p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="max-w-2xl">
                <h2 className="text-[28px] leading-[1.1] tracking-tight font-semibold font-manrope">
                  AUSTRAC Compliance by Design
                </h2>
                <p className="mt-3 text-zinc-300">
                  Built-in regulatory compliance with automated verification
                  workflows and transparency reporting.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["AML", "CDD", "SMR", "KYC"].map((item, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-2 h-8 px-3 rounded-lg bg-zinc-950/60 ring-1 ring-white/10 text-sm text-zinc-300"
                    >
                      <Check className="w-4 h-4 text-emerald-400" strokeWidth={1.5} />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="w-full md:max-w-md">
                <div className="grid grid-cols-1 gap-3">
                  {[
                    {
                      icon: "UserCheck",
                      label: "Identity Verified",
                      status: "Completed in 47s",
                      statusColor: "text-zinc-400",
                    },
                    {
                      icon: "Banknote",
                      label: "Source of Funds",
                      status: "Automated",
                      statusColor: "text-zinc-400",
                    },
                    {
                      icon: "Briefcase",
                      label: "Beneficial Ownership",
                      status: "Pending docs",
                      statusColor: "text-amber-300",
                    },
                  ].map((item, i) => {
                    const IconComponent = {
                      UserCheck,
                      Banknote,
                      Briefcase,
                    }[item.icon]
                    return (
                      <div
                        key={i}
                        className="flex items-center justify-between h-12 px-3 rounded-lg bg-zinc-950/60 ring-1 ring-white/10"
                      >
                        <div className="flex items-center gap-2">
                          <IconComponent className="w-4.5 h-4.5 text-cyan-300" strokeWidth={1.5} />
                          <span className="text-sm text-zinc-300">{item.label}</span>
                        </div>
                        <span className={cn("text-xs", item.statusColor)}>
                          {item.status}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Performance */}
      <section className="mt-20 md:mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {platformMetrics.map((metric, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-zinc-900/60 ring-1 ring-white/10"
              >
                <p className="text-2xl font-semibold tracking-tight font-manrope">
                  {metric.value}
                </p>
                <p className="text-xs text-zinc-400">{metric.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                icon: "CircuitBoard",
                title: "Neural Service Mesh",
                description: "Self-healing, auto-scaling microservices architecture.",
              },
              {
                icon: "Atom",
                title: "Quantum Security",
                description: "Post-quantum cryptography for future-proof protection.",
              },
              {
                icon: "Activity",
                title: "Real-Time Intelligence",
                description: "Live market data with predictive analytics.",
              },
            ].map((feature, i) => {
              const IconComponent = {
                CircuitBoard,
                Atom,
                Activity,
              }[feature.icon]
              return (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-zinc-900/60 ring-1 ring-white/10"
                >
                  <div className="flex items-center gap-2">
                    <IconComponent className="w-5 h-5 text-cyan-300" strokeWidth={1.5} />
                    <p className="text-sm text-zinc-200">{feature.title}</p>
                  </div>
                  <p className="mt-2 text-sm text-zinc-400">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="mt-20 md:mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h2 className="text-[28px] leading-[1.1] tracking-tight font-semibold font-manrope">
              Featured Properties
            </h2>
            <button className="inline-flex items-center gap-2 h-9 px-3 rounded-lg bg-zinc-900/60 ring-1 ring-white/10 hover:ring-white/20 text-zinc-200 transition">
              <Grid2x2 className="w-4 h-4 text-cyan-300" strokeWidth={1.5} />
              <span className="text-sm">View All</span>
            </button>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredProperties.map((property) => (
              <div
                key={property.id}
                className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-zinc-900/60"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={property.imageUrl}
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <p className="text-[15px] text-zinc-300">{property.location}</p>
                    <span className="text-[15px] text-white font-medium">
                      ${property.price.toLocaleString()}
                    </span>
                  </div>
                  <h3 className="mt-1 text-[18px] tracking-tight text-white font-manrope">
                    {property.title}
                  </h3>
                  <div className="mt-3 flex items-center gap-4 text-sm text-zinc-400">
                    <span className="inline-flex items-center gap-1">
                      <span className="flex items-center justify-center">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={1.5}
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2 12h20M2 12l5-5m-5 5l5 5"
                          />
                        </svg>
                      </span>
                      {property.bedrooms}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <span className="flex items-center justify-center">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={1.5}
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 2v20M2 12h20"
                          />
                        </svg>
                      </span>
                      {property.bathrooms}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                        />
                      </svg>
                      {property.size.toLocaleString()} sqft
                    </span>
                  </div>
                  <div className="mt-4">
                    <button className="w-full h-10 rounded-lg bg-zinc-950/60 ring-1 ring-white/10 hover:ring-white/20 text-sm text-zinc-200 flex items-center justify-center gap-2 transition">
                      <ExternalLink className="w-4 h-4 text-cyan-300" strokeWidth={1.5} />
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantage */}
      <section className="mt-20 md:mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[28px] leading-[1.1] tracking-tight font-semibold font-manrope">
            The HAUS Advantage
          </h2>
          <p className="mt-3 text-zinc-300">Intelligent real estate</p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {advantageFeatures.map((feature, i) => {
              const IconComponent = {
                Wand2,
                Camera,
                TrendingUp,
                LockKeyhole,
                Map,
                LayoutGrid,
              }[feature.icon]
              return (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-zinc-900/60 ring-1 ring-white/10"
                >
                  <div className="flex items-center gap-2">
                    <IconComponent className="w-5 h-5 text-cyan-300" strokeWidth={1.5} />
                    <p className="text-sm text-zinc-200">{feature.title}</p>
                  </div>
                  <p className="mt-2 text-sm text-zinc-400">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pain points + How it works */}
      <section className="mt-20 md:mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h3 className="text-[22px] leading-[1.15] tracking-tight font-semibold font-manrope">
                Traditional real estate search leaves you blind.
              </h3>
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  {
                    title: "Wasted Hours",
                    description: "Scrolling through irrelevant listings.",
                  },
                  {
                    title: "Hidden Costs",
                    description: "Surprise fees and unclear pricing.",
                  },
                  {
                    title: "Missed Opportunities",
                    description: "Perfect homes slip through filters.",
                  },
                ].map((pain, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-zinc-900/60 ring-1 ring-white/10"
                  >
                    <p className="text-sm text-zinc-200">{pain.title}</p>
                    <p className="mt-1 text-xs text-zinc-400">{pain.description}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-zinc-300">
                HAUS eliminates these problems with voice-first search, explainable
                AI, and transparent workflows.
              </p>
            </div>
            <div>
              <h3 className="text-[22px] leading-[1.15] tracking-tight font-semibold font-manrope">
                How HAUS works
              </h3>
              <div className="mt-5 space-y-4">
                {[
                  {
                    step: "01",
                    title: "Your Property Vision",
                    description:
                      "Tell us what you want or simply speak your requirements.",
                  },
                  {
                    step: "02",
                    title: "AI Analysis & Matching",
                    description:
                      "We scan thousands of listings and market signals to find perfect matches.",
                  },
                  {
                    step: "03",
                    title: "Review Insights & Shortlist",
                    description:
                      "Explainable scores, comparable sales, and risk flags to help you decide fast.",
                  },
                  {
                    step: "04",
                    title: "Verify & Make an Offer",
                    description:
                      "Built-in AUSTRAC-ready checks, fair pricing guidance, and compliant offer workflows.",
                  },
                  {
                    step: "05",
                    title: "Close & Manage",
                    description:
                      "Digital contracts, settlement tracking, and smart owner tools post-purchase.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-zinc-900/60 ring-1 ring-white/10"
                  >
                    <div className="flex items-start gap-3">
                      <span className="h-7 w-7 rounded-lg bg-cyan-500/15 ring-1 ring-cyan-400/30 text-cyan-200 flex items-center justify-center text-xs">
                        {item.step}
                      </span>
                      <div>
                        <p className="text-sm text-zinc-200">{item.title}</p>
                        <p className="text-xs text-zinc-400 mt-1">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <button className="inline-flex items-center gap-2 h-10 px-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:opacity-95 transition">
                  <Rocket className="w-4 h-4" strokeWidth={1.5} />
                  <span className="text-sm">Start your journey</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-20 md:mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl ring-1 ring-white/10 bg-zinc-900/60">
            <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="p-6 md:p-10 relative">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="max-w-2xl">
                  <h3 className="text-[24px] md:text-[28px] leading-[1.1] tracking-tight font-semibold text-white font-manrope">
                    Join the Early Access waitlist
                  </h3>
                  <p className="mt-2 text-zinc-300">
                    Be first to try voice-first real estate search and the Fair
                    Play Protocol.
                  </p>
                </div>
                <form
                  className="w-full md:max-w-md"
                  aria-label="Join waitlist"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="flex items-stretch gap-2">
                    <label htmlFor="email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="you@domain.com"
                      className="w-full h-11 px-3 rounded-lg bg-zinc-950/60 ring-1 ring-white/10 text-sm placeholder:text-zinc-500 focus:outline-none focus:ring-cyan-400/40"
                    />
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 h-11 px-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:opacity-95 transition"
                    >
                      <Mail className="w-4 h-4" strokeWidth={1.5} />
                      <span className="text-sm">Notify me</span>
                    </button>
                  </div>
                  <p className="mt-2 text-xs text-zinc-500">
                    No spam. Unsubscribe anytime.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-20 md:mt-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[28px] leading-[1.1] tracking-tight font-semibold text-center font-manrope">
            Frequently Asked Questions
          </h2>
          <div className="mt-6 space-y-3">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group rounded-xl bg-zinc-900/60 ring-1 ring-white/10 p-4"
                open={faq.isOpen}
                onToggle={(e) => {
                  if ((e.target as HTMLDetailsElement).open) {
                    toggleFAQ(index)
                  }
                }}
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="text-sm text-zinc-200">{faq.question}</span>
                  <ChevronDown className="w-4 h-4 text-zinc-400 transition group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm text-zinc-400">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 md:mt-28 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center ring-1 ring-white/10">
                  <Home className="w-4 h-4 text-white" strokeWidth={1.5} />
                </div>
                <span className="text-[18px] font-semibold tracking-tight font-manrope">
                  HAUS
                </span>
              </div>
              <p className="mt-3 text-sm text-zinc-400">
                Voice-first real estate. Fair, transparent, and intelligent by
                design.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <a
                  aria-label="Twitter"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md ring-1 ring-white/10 bg-zinc-900/60 hover:ring-white/20 transition"
                >
                  <Twitter className="w-4 h-4 text-zinc-300" />
                </a>
                <a
                  aria-label="LinkedIn"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md ring-1 ring-white/10 bg-zinc-900/60 hover:ring-white/20 transition"
                >
                  <Linkedin className="w-4 h-4 text-zinc-300" />
                </a>
                <a
                  aria-label="GitHub"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md ring-1 ring-white/10 bg-zinc-900/60 hover:ring-white/20 transition"
                >
                  <Github className="w-4 h-4 text-zinc-300" />
                </a>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-zinc-200">Product</p>
              <ul className="mt-3 space-y-2 text-sm text-zinc-400">
                <li>
                  <Link className="hover:text-zinc-200 transition" href="#">
                    Explore
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-zinc-200 transition" href="#">
                    Search
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-zinc-200 transition" href="#">
                    Investment
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-zinc-200 transition" href="#">
                    Compliance
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold text-zinc-200">Company</p>
              <ul className="mt-3 space-y-2 text-sm text-zinc-400">
                <li>
                  <Link className="hover:text-zinc-200 transition" href="#">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-zinc-200 transition" href="#">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-zinc-200 transition" href="#">
                    Press
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-zinc-200 transition" href="#">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold text-zinc-200">Legal</p>
              <ul className="mt-3 space-y-2 text-sm text-zinc-400">
                <li>
                  <Link className="hover:text-zinc-200 transition" href="#">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-zinc-200 transition" href="#">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-zinc-200 transition" href="#">
                    Security
                  </Link>
                </li>
              </ul>
              <div className="mt-4">
                <button className="inline-flex items-center gap-2 h-9 px-3 rounded-lg bg-zinc-900/60 ring-1 ring-white/10 hover:ring-white/20 text-zinc-200 transition">
                  <MailOpen className="w-4 h-4 text-cyan-300" />
                  <span className="text-sm">Contact support</span>
                </button>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xs text-zinc-500">
              © {currentYear} HAUS Technologies Pty Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1 px-2 h-7 rounded-full bg-zinc-900/60 ring-1 ring-white/10 text-xs text-zinc-300">
                <Leaf className="w-3.5 h-3.5 text-emerald-300" />
                Carbon neutral
              </span>
              <span className="inline-flex items-center gap-1 px-2 h-7 rounded-full bg-zinc-900/60 ring-1 ring-white/10 text-xs text-zinc-300">
                <Shield className="w-3.5 h-3.5 text-cyan-300" />
                ISO 27001
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
