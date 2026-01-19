"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Megaphone,
  Mail,
  Zap,
  Compass,
  Shield,
  ShieldCheck,
  Mic,
  Scale,
  Layers,
  Grid,
  Bot,
  ArrowRight,
  Menu,
  Star,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { HausLogo } from "@/components/haus-logo"
import { cn } from "@/lib/utils"

/**
 * Landing Page 4 - Spline Particles
 *
 * Dark-themed landing with animated particle background
 * Features intelligent search, AI assistant, and modern card-based layout
 *
 * @example
 * ```tsx
 * import LandingPage4 from './landing-4/page'
 * <LandingPage4 />
 * ```
 */
export default function LandingPage4() {
  const [email, setEmail] = useState("")

  const stats = [
    { value: "12k+", label: "Active Listings", icon: Grid },
    { value: "98%", label: "Accuracy Rate", icon: Star },
    { value: "$1B+", label: "Market Volume", icon: Zap },
  ]

  const features = [
    {
      icon: Mic,
      title: "Voice-First Property Search",
      description: "98% accuracy",
      color: "text-blue-300",
      bgColor: "bg-blue-500/20",
      borderColor: "border-blue-500/30",
      items: [
        "Family home with courtyard near parks",
        "Investment property with high yield in Brisbane",
        "Waterfront apartment with city views",
        "Rural acreage with solar power and bore",
      ],
    },
    {
      icon: Bot,
      title: "AI Property Assistant",
      description: "Personalized insights",
      color: "text-purple-300",
      bgColor: "bg-purple-500/20",
      borderColor: "border-purple-500/30",
      items: [
        "24/7 availability",
        "Market analysis",
        "Investment advice",
        "Property comparisons",
      ],
    },
  ]

  const trustFeatures = [
    {
      icon: Shield,
      title: "Fair Play Protocol",
      description: "Ethical AI",
      items: [
        "No underquoting guarantees",
        "Verified agent ratings",
        "Transparent pricing",
        "Plain English contracts",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-neutral-950 font-inter text-neutral-400 antialiased selection:bg-neutral-800 selection:text-neutral-100">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 opacity-60">
        <iframe
          src="https://my.spline.design/particlesmoment-kW3xyVny6weIhXJ3vbs2M2bB"
          frameBorder="0"
          className="w-full h-full"
          title="Particle animation"
        />
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-20 backdrop-blur bg-neutral-950/60 border-b border-neutral-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-400 text-neutral-900 flex items-center justify-center ring-1 ring-neutral-700/60">
              <Home className="w-4 h-4" />
            </div>
            <span className="text-neutral-200 text-lg font-medium tracking-tight">HAUS</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <a className="text-neutral-300 hover:text-neutral-100 transition-colors text-sm" href="#explore">
              EXPLORE
            </a>
            <a className="text-neutral-300 hover:text-neutral-100 transition-colors text-sm" href="#search">
              SEARCH
            </a>
            <a className="text-neutral-300 hover:text-neutral-100 transition-colors text-sm" href="#deephaus">
              DEEPHAUS
            </a>
            <a className="text-neutral-300 hover:text-neutral-100 transition-colors text-sm" href="#admin">
              ADMIN
            </a>
            <a className="text-neutral-100 text-sm inline-flex items-center gap-2" href="#early-access">
              EARLY ACCESS
              <Badge variant="outline" className="text-[10px] px-1.5 py-0.5 rounded-md bg-neutral-800 ring-1 ring-neutral-700 text-neutral-300">
                1
              </Badge>
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-neutral-100 text-neutral-900 text-sm font-medium hover:bg-white transition-colors"
            >
              <Zap className="w-4 h-4" />
              Get Early Access
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-neutral-900 ring-1 ring-neutral-700 text-neutral-200 text-sm font-medium hover:bg-neutral-800 transition-colors"
            >
              <Grid className="w-4 h-4" />
              Explore Products
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 md:pt-14">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left: Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 text-xs text-neutral-400 mb-3">
              <Megaphone className="w-4 h-4 text-neutral-300" />
              EARLY ACCESS
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight text-neutral-100 font-semibold leading-tight">
              A Revolution in Real Estate
            </h1>

            {/* Description */}
            <p className="mt-4 text-neutral-300 text-sm sm:text-base">
              Search, invest, buy, and manage in one AI‑native platform. Voice‑first.
              Compliance‑ready. Built for Australians.
            </p>

            {/* Trust Badge */}
            <div className="mt-2 text-emerald-300/90 text-sm inline-flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              Don't put up with dodgy agent tactics.
            </div>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-wrap gap-3">
              <Button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-100 text-neutral-900 text-sm font-medium hover:bg-white transition-colors">
                <Mail className="w-4 h-4" />
                Get Early Access
              </Button>
              <Button
                variant="outline"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-900 ring-1 ring-neutral-700 text-neutral-200 text-sm font-medium hover:bg-neutral-800 transition-colors"
              >
                <Compass className="w-4 h-4" />
                Explore Products
              </Button>
            </div>

            {/* Feature Cards */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <Card
                    key={index}
                    className="p-4 rounded-2xl bg-neutral-900/70 backdrop-blur ring-1 ring-neutral-800/60 hover:ring-neutral-700/60 transition-all"
                  >
                    <CardContent className="p-0">
                      <div className="flex items-center gap-3">
                        <div className={cn("w-9 h-9 rounded-xl flex items-center justify-center", feature.bgColor, feature.borderColor, "ring-1")}>
                          <Icon className={cn("w-4 h-4", feature.color)} />
                        </div>
                        <div>
                          <p className="text-neutral-200 text-sm font-medium">{feature.title}</p>
                          <p className="text-xs text-neutral-500">{feature.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Right: Feature Cards Stack */}
          <div className="grid gap-4">
            {/* Voice Search Card */}
            <Card className="w-full rounded-2xl bg-neutral-900/80 ring-1 ring-neutral-800/60 backdrop-blur shadow-2xl">
              <div className="flex items-center justify-between p-5 border-b border-neutral-800/60">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-neutral-800/60 ring-1 ring-neutral-700 flex items-center justify-center">
                    <Mic className="w-4 h-4 text-blue-300" />
                  </div>
                  <h2 className="text-neutral-200 font-medium tracking-tight">Voice‑First Property Search</h2>
                </div>
                <span className="text-xs text-neutral-500">98% accuracy</span>
              </div>
              <div className="p-5">
                <Card className="rounded-xl bg-neutral-900 ring-1 ring-neutral-800 p-4">
                  <CardContent className="p-0 space-y-4">
                    <div className="flex items-center gap-3">
                      <Button size="icon" variant="ghost" className="w-10 h-10 rounded-lg bg-neutral-800/70 ring-1 ring-neutral-700 flex items-center justify-center text-neutral-300 hover:bg-neutral-800 transition">
                        <Mic className="w-4 h-4" />
                      </Button>
                      <div className="flex-1">
                        <p className="text-neutral-300 text-sm">Voice Search Interface — Coming Soon</p>
                        <p className="text-xs text-neutral-500">AI-powered voice search will be available once deployed</p>
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {features[0].items.map((item, index) => (
                        <div
                          key={index}
                          className="p-3 rounded-lg bg-neutral-800/40 ring-1 ring-neutral-800 text-xs text-neutral-300"
                        >
                          "{item}"
                        </div>
                      ))}
                    </div>
                    <div className="p-3 rounded-lg bg-neutral-800/30 ring-1 ring-neutral-800 space-y-2">
                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-neutral-500">Recognized:</span>
                        <span className="text-neutral-300">"3 bedroom house in Melbourne..."</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-neutral-500">Processing:</span>
                        <span className="text-neutral-300">Searching 50,000+ listings</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-neutral-500">Results:</span>
                        <span className="text-neutral-300">127 properties found in 89ms</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </Card>

            {/* AI Assistant Card */}
            <Card className="w-full rounded-2xl bg-neutral-900/80 ring-1 ring-neutral-800/60 backdrop-blur shadow-2xl">
              <div className="flex items-center justify-between p-5 border-b border-neutral-800/60">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-neutral-800/60 ring-1 ring-neutral-700 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-purple-300" />
                  </div>
                  <h2 className="text-neutral-200 font-medium tracking-tight">AI Property Assistant</h2>
                </div>
                <span className="text-xs text-neutral-500">Personalized insights</span>
              </div>
              <div className="p-5">
                <Card className="rounded-xl bg-neutral-900 ring-1 ring-neutral-800 p-4">
                  <CardContent className="p-0">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-neutral-800/70 ring-1 ring-neutral-700 flex items-center justify-center">
                        <Bot className="w-4 h-4 text-purple-300" />
                      </div>
                      <div className="flex-1">
                        <p className="text-neutral-300 text-sm">Property Chat Assistant — Coming Soon</p>
                        <p className="text-xs text-neutral-500">AI-powered property chat will be available once deployed</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {features[1].items.map((item, index) => (
                        <div
                          key={index}
                          className="p-2 rounded-lg bg-neutral-800/40 text-xs text-neutral-300 flex items-center gap-2"
                        >
                          <div className="w-1 h-1 rounded-full bg-purple-400" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats & Trust Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 grid lg:grid-cols-4 gap-6">
        {/* Stats */}
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <Card
              key={index}
              className="rounded-2xl bg-neutral-900/80 ring-1 ring-neutral-800/60 backdrop-blur shadow-2xl"
            >
              <CardContent className="p-6 text-center">
                <Icon className="w-8 h-8 text-neutral-400 mx-auto mb-3" />
                <div className="text-3xl tracking-tight text-neutral-100 mb-1">{stat.value}</div>
                <div className="text-xs text-neutral-500">{stat.label}</div>
              </CardContent>
            </Card>
          )
        })}

        {/* Trust Features */}
        {trustFeatures.map((feature, index) => {
          const Icon = feature.icon
          return (
            <Card
              key={index}
              className="rounded-2xl bg-neutral-900/80 ring-1 ring-neutral-800/60 backdrop-blur shadow-2xl"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-neutral-800/60 ring-1 ring-neutral-700 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-emerald-300" />
                    </div>
                    <h3 className="text-neutral-200 font-medium tracking-tight">{feature.title}</h3>
                  </div>
                  <span className="text-xs text-neutral-500">{feature.description}</span>
                </div>
                <ul className="space-y-2">
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-2 text-xs text-neutral-400">
                      <div className="w-1 h-1 rounded-full bg-emerald-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )
        })}
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 pb-12">
        <Card className="rounded-3xl border border-neutral-800/60 bg-neutral-900/60 backdrop-blur p-6 sm:p-10">
          <CardContent className="p-0">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div>
                <h3 className="text-2xl tracking-tight text-neutral-100">Ready to get started?</h3>
                <p className="mt-2 max-w-lg text-sm text-neutral-300">
                  Join early access and be among the first to experience AI-powered real estate search.
                </p>
                <form className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    required
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-neutral-700 bg-neutral-950/60 px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-300/30 focus:border-neutral-400/40"
                  />
                  <Button
                    type="button"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-700 bg-neutral-100 px-5 py-3 text-sm text-neutral-900 hover:bg-white transition font-medium"
                  >
                    Get Early Access
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </form>
                <p className="mt-2 text-xs text-neutral-500">
                  By submitting, you agree to our terms and privacy policy.
                </p>
              </div>
              <div className="relative">
                <div className="relative h-56 w-full overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
                  <div className="absolute bottom-4 left-4 inline-flex items-center rounded-full border border-neutral-700 bg-neutral-900/50 px-3 py-1.5 text-xs backdrop-blur text-neutral-300">
                    <ShieldCheck className="mr-2 h-4 w-4 text-emerald-400" />
                    Enterprise-grade security
                  </div>
                  <div className="absolute top-4 right-4 inline-flex items-center rounded-full border border-neutral-700 bg-neutral-900/50 px-3 py-1.5 text-xs backdrop-blur text-neutral-300">
                    <Star className="mr-2 h-4 w-4 text-amber-400" />
                    98% Satisfaction
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
        <div className="rounded-3xl border border-neutral-800/60 px-6 py-12 sm:px-12 backdrop-blur-2xl bg-neutral-900/30">
          <div className="grid gap-12 lg:grid-cols-4 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-6 w-6 rounded-md bg-neutral-800 border border-neutral-700 flex items-center justify-center">
                  <Home className="h-3.5 w-3.5 text-neutral-300" />
                </div>
                <span className="text-xl font-semibold tracking-tight text-neutral-100">HAUS</span>
              </div>
              <p className="text-sm text-neutral-400">
                AI-native real estate platform built for Australians.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-neutral-200 mb-4 uppercase tracking-wide">Platform</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a className="text-neutral-400 hover:text-neutral-200 transition" href="#search">
                    Search
                  </a>
                </li>
                <li>
                  <a className="text-neutral-400 hover:text-neutral-200 transition" href="#deephaus">
                    DeepHAUS
                  </a>
                </li>
                <li>
                  <a className="text-neutral-400 hover:text-neutral-200 transition" href="#admin">
                    Admin
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium text-neutral-200 mb-4 uppercase tracking-wide">Company</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a className="text-neutral-400 hover:text-neutral-200 transition" href="#about">
                    About
                  </a>
                </li>
                <li>
                  <a className="text-neutral-400 hover:text-neutral-200 transition" href="#careers">
                    Careers
                  </a>
                </li>
                <li>
                  <a className="text-neutral-400 hover:text-neutral-200 transition" href="#press">
                    Press
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium text-neutral-200 mb-4 uppercase tracking-wide">Stay Updated</h4>
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="email@domain.com"
                  className="flex-1 rounded-xl border border-neutral-700 bg-neutral-800 px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-300/30"
                />
                <Button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-xl border border-neutral-700 bg-neutral-100 px-5 py-3 text-sm text-neutral-900 hover:bg-white transition"
                >
                  Subscribe
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
          <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-6 text-xs text-neutral-500">
              <span>© 2025 HAUS. All rights reserved.</span>
              <a href="#" className="hover:text-neutral-300 transition">
                Privacy
              </a>
              <a href="#" className="hover:text-neutral-300 transition">
                Terms
              </a>
            </div>
            <div className="flex items-center gap-4 text-xs text-neutral-500">
              <span className="inline-flex items-center gap-2">
                SOC2 Compliant
                <ShieldCheck className="h-3.5 w-3.5 text-neutral-400" />
              </span>
              <span className="inline-flex items-center gap-2">
                99.9% Uptime
                <Zap className="h-3.5 w-3.5 text-neutral-400" />
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Home icon component
function Home({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-6 6 6-6" />
      <path d="m3 3 0 0 1 0 0h18a2 2 0 0 1 0 0v10a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2Z" />
    </svg>
  )
}
