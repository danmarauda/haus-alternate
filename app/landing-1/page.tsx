"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Search,
  Mic,
  Sparkles,
  ArrowUpRight,
  Bot,
  BarChart3,
  Shield,
  Zap,
  Menu,
  TrendingUp,
  Home,
  Triangle,
  Circle,
  Hexagon,
  Square,
  Diamond,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { HausLogo } from "@/components/haus-logo"
import { cn } from "@/lib/utils"
import { Shell } from "@/components/shell"
import { ErrorBoundary } from "@/components/error-boundary"
import { PageLoader } from "@/components/page-loader"


interface Stat {
  value: string
  label: string
  change?: string
}

interface Feature {
  id: string
  title: string
  subtitle: string
  description: string
  tags: string[]
  icon: typeof Bot
  gradient: string
}

interface Topic {
  name: string
  href: string
}

interface Partner {
  name: string
  icon: typeof Triangle
}

const stats: Stat[] = [
  { value: "12k+", label: "Active Listings", change: "+14%" },
  { value: "98%", label: "Satisfaction", change: "+2.4%" },
  { value: "$1B+", label: "Volume" },
  { value: "Zero", label: "Hidden Fees" },
] as const

const features: Feature[] = [
  {
    id: "01",
    title: "AI PROPERTY ASSISTANT",
    subtitle: "GPT-4 Powered",
    description: "Analyze investment potential, draft offer letters, and compare listings instantly. Your 24/7 expert.",
    tags: ["Market Trends", "Legal Drafting"],
    icon: Bot,
    gradient: "from-indigo-500/20 to-purple-500/20",
  },
  {
    id: "02",
    title: "VOICE-FIRST SEARCH",
    subtitle: "98% Accuracy",
    description: "Ask naturally. No more checkbox hell. Find your perfect property with conversational AI.",
    tags: ["Natural Language", "Instant Results"],
    icon: Mic,
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    id: "03",
    title: "TRANSPARENCY PROTOCOL",
    subtitle: "Fair Play Guaranteed",
    description: "No underquoting. No hidden fees. Every property verified with complete disclosure.",
    tags: ["Verified Listings", "Plain English"],
    icon: Shield,
    gradient: "from-amber-500/20 to-orange-500/20",
  },
] as const

const trendingTopics: Topic[] = [
  { name: "Waterfront", href: "#waterfront" },
  { name: "Off-market", href: "#offmarket" },
  { name: "Penthouse", href: "#penthouse" },
  { name: "Rural", href: "#rural" },
] as const

const partners: Partner[] = [
  { name: "VORTEX", icon: Triangle },
  { name: "OBLIQUE", icon: Circle },
  { name: "NEXUS", icon: Hexagon },
  { name: "QUARTZ", icon: Square },
  { name: "ÆON", icon: Diamond },
] as const

function LandingPage1Content() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const toggleSearch = useCallback(() => {
    setIsSearchOpen(prev => !prev)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="landing-page min-h-screen" role="document" aria-label="HAUS landing page">
      {/* Noise Overlay */}
      <div
        className="fixed inset-0 z-0 w-full h-full pointer-events-none opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          maskImage: "radial-gradient(circle at center, black 40%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* Navigation */}
      <nav className="sticky top-0 z-40 backdrop-blur-xl" aria-label="Main navigation">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="inline-flex items-center gap-2" aria-label="HAUS home">
            <div className="h-6 w-6 rounded-md bg-white/10 border border-white/10 flex items-center justify-center">
              <Home className="h-3.5 w-3.5" />
            </div>
            <span className="text-base font-semibold tracking-tight">HAUS</span>
          </Link>

          <div className="hidden md:flex items-center bg-neutral-900 border border-white/10 rounded-full px-4 py-2 w-80 gap-3" role="search">
            <Search className="w-4 h-4 text-neutral-500" aria-hidden="true" />
            <input
              type="text"
              placeholder="Point Piper, NSW 2027"
              className="bg-transparent border-none text-xs text-white placeholder-neutral-500 focus:outline-none w-full font-mono"
              aria-label="Search location"
            />
            <div className="text-[10px] bg-white/5 border border-white/5 px-1.5 py-0.5 rounded text-neutral-400 font-mono" aria-hidden="true">
              ⌘K
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link href="#search" className="text-xs font-mono text-neutral-300 hover:text-white transition">Search</Link>
            <Link href="#app" className="text-xs font-mono text-neutral-300 hover:text-white transition">App</Link>
            <Button variant="outline" size="sm" className="hidden md:inline-flex border-white/20 rounded-md">Login</Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Open menu"
              onClick={toggleSearch}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden" aria-labelledby="hero-heading">
        {/* Hero Background Image */}
        <div className="absolute inset-0 w-full h-full" aria-hidden="true">
          <Image
            src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1600&auto=format&fit=crop"
            alt="Modern Architecture"
            fill
            className="object-cover brightness-[0.4]"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 w-full max-w-5xl">
          {/* Badge */}
          <div className={cn(
            "flex items-center justify-center gap-2 mb-6 transition-opacity duration-1000",
            isLoaded ? "opacity-100" : "opacity-0"
          )}>
            <span className="px-3 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-[10px] uppercase tracking-widest font-medium">
              Early Access v1.0
            </span>
          </div>

          {/* Title */}
          <h1 id="hero-heading" className="display-font text-[13vw] leading-[0.8] tracking-tighter overflow-hidden">
            <span className={cn(
              "block transition-transform duration-1000",
              isLoaded ? "translate-y-0" : "translate-y-full"
            )}>
              THE NEW
            </span>
          </h1>
          <div className="flex items-center justify-center gap-4 md:gap-8 overflow-hidden">
            <h1 className="display-font text-[13vw] leading-[0.8] tracking-tight text-white">
              <span className={cn(
                "block transition-transform duration-1000 delay-100",
                isLoaded ? "translate-y-0" : "translate-y-full"
              )}>
                HOME OF
              </span>
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1 className="display-font text-[13vw] leading-[0.8] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
              <span className={cn(
                "block transition-transform duration-1000 delay-200",
                isLoaded ? "translate-y-0" : "translate-y-full"
              )}>
                HOMES
              </span>
            </h1>
          </div>

          {/* Description */}
          <p className={cn(
            "mt-8 text-sm md:text-base font-light text-white/80 max-w-2xl mx-auto transition-opacity duration-1000 delay-500",
            isLoaded ? "opacity-100" : "opacity-0"
          )}>
            Curated properties. Powerful search. Expert support.
            <br />
            AI-native real estate for the modern era.
          </p>

          {/* Voice Search Demo */}
          <div className={cn(
            "mt-12 mx-auto max-w-md w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-3 flex items-center gap-3 transition-all duration-1000 delay-700",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-black shrink-0">
              <Mic className="w-5 h-5" aria-hidden="true" />
            </div>
            <div className="flex-1 text-left">
              <div className="text-xs text-white/60 font-medium">Try asking...</div>
              <div className="text-sm text-white font-medium">
                "3 bed house in Melbourne with a pool"
              </div>
            </div>
            <div className="px-3 py-1.5 bg-white/10 rounded-lg text-[10px] font-medium uppercase tracking-wider text-white/70">
              Enter
            </div>
          </div>

          {/* Trending Topics */}
          <div className={cn(
            "mt-8 flex flex-wrap justify-center gap-3 transition-opacity duration-1000 delay-1000",
            isLoaded ? "opacity-100" : "opacity-0"
          )}>
            <span className="text-[10px] text-neutral-600 uppercase tracking-widest pt-1.5 font-medium">
              Trending
            </span>
            {trendingTopics.map((topic) => (
              <Button
                key={topic.name}
                variant="ghost"
                size="sm"
                className="px-3 py-1.5 rounded-full border border-white/5 bg-white/5 hover:bg-white/10 transition-colors"
                asChild
              >
                <Link href={topic.href}>{topic.name}</Link>
              </Button>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className={cn(
            "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-1000 delay-1000",
            isLoaded ? "opacity-100" : "opacity-0"
          )}>
            <span className="text-[9px] uppercase tracking-widest text-white/30 font-medium">
              Explore
            </span>
            <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* Stats & Intro Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto border-t border-white/10" aria-labelledby="stats-heading">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start pb-16 lg:pb-24">
          <h2 id="stats-heading" className="sr-only">Platform Statistics</h2>
          <div className="lg:col-span-7">
            <h2 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-white">
              A revolution in
              <br />
              <span className="text-neutral-500">real estate.</span>
              <br className="hidden sm:block" />
              Search, invest, and buy in one platform.
            </h2>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-between h-full pt-2">
            <p className="text-base sm:text-lg font-light text-neutral-400 leading-relaxed">
              No more checkbox hell. HAUS combines market expertise with a
              seamless, voice-first AI experience. We prioritize transparency,
              verified listings, and data-driven insights.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8" role="list" aria-label="Platform statistics">
          {stats.map((stat, index) => (
            <div key={index} role="listitem">
              <div className="flex items-end gap-2 mb-1">
                <div className="text-2xl sm:text-3xl font-medium tracking-tight text-white">
                  {stat.value}
                </div>
                {stat.change && (
                  <div className="text-[10px] font-medium text-emerald-500 mb-1.5 flex items-center">
                    <TrendingUp className="w-2.5 h-2.5 mr-0.5" aria-hidden="true" />
                    {stat.change}
                  </div>
                )}
              </div>
              <div className="text-xs text-neutral-500 uppercase tracking-widest font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 sm:py-20 border-t border-white/10" aria-labelledby="partners-heading">
        <div className="px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
          <h2 id="partners-heading" className="sr-only">Trusted Partners</h2>
          <p className="text-[10px] font-mono text-neutral-600 text-center mb-10 uppercase tracking-[0.2em]">
            Trusted by Industry Leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-16 lg:gap-24 opacity-60" role="list" aria-label="Partner companies">
            {partners.map((partner, index) => {
              const Icon = partner.icon
              return (
                <div key={index} className="flex items-center gap-2 group cursor-default" role="listitem">
                  <Icon className="w-5 h-5 text-white group-hover:text-indigo-400 transition-colors" aria-hidden="true" />
                  <span className="text-lg font-bold tracking-tighter text-white group-hover:text-indigo-400 transition-colors">
                    {partner.name}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Stack */}
      <section className="py-16 sm:py-20 border-t border-white/10 bg-zinc-950 relative z-10" aria-labelledby="features-heading">
        <div className="px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto mb-12 sm:mb-20">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-600" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
              Platform Capabilities
            </span>
          </div>
          <h2 id="features-heading" className="font-semibold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white">
            INTELLIGENT
            <br />
            TOOLS
          </h2>
        </div>

        <div className="space-y-8 sm:space-y-12 px-4 sm:px-6 lg:px-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="border border-white/10 bg-zinc-900 rounded-2xl overflow-hidden hover:border-white/20 transition-colors"
              >
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-2">
                    {/* Content Side */}
                    <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-between border-r border-white/10">
                      <div>
                        <div className="flex justify-between items-start mb-4">
                          <span className="text-xs font-mono text-neutral-500">{feature.id} / 03</span>
                          <Icon className={`w-5 h-5 bg-gradient-to-br ${feature.gradient} bg-clip-text`} aria-hidden="true" />
                        </div>
                        <h3 className="font-semibold text-2xl sm:text-3xl tracking-tight mt-4 text-white">
                          {feature.title}
                        </h3>
                        <p className="text-xs font-medium text-neutral-500 uppercase tracking-widest mt-2">
                          {feature.subtitle}
                        </p>
                      </div>
                      <div className="space-y-4 sm:space-y-6 mt-6 sm:mt-0">
                        <p className="text-sm text-neutral-400 leading-relaxed">
                          {feature.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {feature.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-3 py-1 bg-zinc-800 border border-white/10 rounded-md text-[10px] uppercase tracking-wider font-medium text-neutral-400"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Image/Mockup Side */}
                    <div className={cn(
                      "relative min-h-[300px] sm:min-h-[400px] flex items-center justify-center p-8 sm:p-12 bg-gradient-to-br",
                      feature.gradient
                    )}>
                      <div className="w-full max-w-sm bg-zinc-950/90 backdrop-blur rounded-xl shadow-2xl border border-white/10 p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className={cn(
                            "w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-br",
                            feature.gradient
                          )}>
                            <Icon className="w-4 h-4 text-white" aria-hidden="true" />
                          </div>
                          <div className="text-sm font-medium text-white">HAUS AI</div>
                        </div>
                        <div className="space-y-3">
                          <div className="bg-white/5 p-3 rounded-lg rounded-tl-none text-xs text-neutral-400 leading-relaxed border border-white/10">
                            Based on the 12-month forecast, this property has a
                            projected ROI of +12.4%. Rental yield is above suburb
                            average.
                          </div>
                          <div className="h-2 w-24 bg-white/10 rounded animate-pulse" aria-hidden="true" />
                          <div className="h-2 w-16 bg-white/10 rounded animate-pulse" aria-hidden="true" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 border-t border-white/10" aria-labelledby="cta-heading">
        <div className="px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
          <h2 id="cta-heading" className="sr-only">Call to Action</h2>
          <Card className="border border-white/10 bg-gradient-to-r from-white/10 to-white/5 p-8 sm:p-12 lg:p-16 rounded-3xl">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-white mb-4">
                    Ready to find your perfect home?
                  </h2>
                  <p className="text-neutral-400 mb-6 max-w-lg">
                    Join thousands of Australians using AI-powered search to discover
                    properties that match their lifestyle and investment goals.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button size="lg" className="bg-white text-black hover:bg-white/90">
                      Get Early Access
                      <ArrowUpRight className="ml-2 w-4 h-4" aria-hidden="true" />
                    </Button>
                    <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/5">
                      Learn More
                    </Button>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl rounded-full" aria-hidden="true" />
                    <div className="relative bg-zinc-900 border border-white/10 rounded-2xl p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center">
                          <Zap className="w-5 h-5 text-emerald-400" aria-hidden="true" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">AI-Powered</div>
                          <div className="text-xs text-neutral-500">Search Engine</div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs text-neutral-400">
                          <Sparkles className="w-3 h-3 text-emerald-400" aria-hidden="true" />
                          <span>98% accuracy on voice queries</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-400">
                          <Sparkles className="w-3 h-3 text-emerald-400" aria-hidden="true" />
                          <span>12,000+ verified listings</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-400">
                          <Sparkles className="w-3 h-3 text-emerald-400" aria-hidden="true" />
                          <span>Real-time market insights</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-4 sm:px-6 lg:px-8" role="contentinfo">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-neutral-500" aria-hidden="true" />
            <span className="text-xs text-neutral-500">HAUS Group Pty Ltd</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="text-xs text-neutral-500 hover:text-white transition-colors">Terms</Link>
            <Link href="/privacy" className="text-xs text-neutral-500 hover:text-white transition-colors">Privacy</Link>
            <Link href="/about" className="text-xs text-neutral-500 hover:text-white transition-colors">About</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default function LandingPage1() {
  return (
    <ErrorBoundary>
      <Shell variant="landing">
        <LandingPage1Content />
      </Shell>
    </ErrorBoundary>
  )
}
