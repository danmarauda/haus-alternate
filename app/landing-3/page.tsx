"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  ArrowUpRight,
  Play,
  Mail,
  Target,
  Shield,
  Zap,
  Mic,
  Scale,
  Layers,
  Heart,
  Menu,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { HausLogo } from "@/components/haus-logo"
import { cn } from "@/lib/utils"

/**
 * Landing Page 3 - Light Theme
 *
 * Light-themed modern real estate platform with clean design
 * Features transparency, fair play protocol, and AI-powered search
 *
 * @example
 * ```tsx
 * import LandingPage3 from './landing-3/page'
 * <LandingPage3 />
 * ```
 */
export default function LandingPage3() {
  const [email, setEmail] = useState("")

  const features = [
    {
      icon: Mic,
      title: "Voice-First Search",
      description: "Ask naturally. No more checkbox hell.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Scale,
      title: "Fair Play Protocol",
      description: "No underquoting or dodgy tactics.",
      color: "text-amber-600",
      bgColor: "bg-amber-50",
    },
    {
      icon: Layers,
      title: "Transparency by Design",
      description: "Every fee disclosed. Plain English.",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
    },
  ]

  const testimonials = [
    {
      quote: "Finally, a platform that doesn't play games. Found my dream home in 2 weeks.",
      author: "Sarah M.",
      location: "Sydney",
    },
    {
      quote: "The voice search is incredible. Just asked for what I wanted and got results.",
      author: "James T.",
      location: "Melbourne",
    },
  ]

  const stats = [
    { value: "12,000+", label: "Listings" },
    { value: "98%", label: "Satisfaction" },
    { value: "$1.2B", label: "Volume" },
  ]

  return (
    <div className="min-h-screen bg-[#F2F2F4] text-neutral-900 antialiased">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-white/80 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-md bg-neutral-900 flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" />
              </div>
              <span className="text-base sm:text-lg tracking-tight font-semibold">HAUS</span>
            </Link>

            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#search" className="text-neutral-600 hover:text-neutral-900 transition">
                Search
              </a>
              <a href="#features" className="text-neutral-600 hover:text-neutral-900 transition">
                Features
              </a>
              <a href="#how" className="text-neutral-600 hover:text-neutral-900 transition">
                How it Works
              </a>
              <a href="#pricing" className="text-neutral-600 hover:text-neutral-900 transition">
                Pricing
              </a>
            </nav>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" className="hidden md:inline-flex">
                Login
              </Button>
              <Button size="sm" className="bg-neutral-900 text-white hover:bg-neutral-800">
                Get Started
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-emerald-50" />
          <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_50%_0%,rgba(59,130,246,0.1),transparent)]" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white border border-neutral-200 rounded-full px-4 py-2 mb-6 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sm font-medium">Now in Early Access</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">
                A New Way to
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
                  Find Your Home
                </span>
              </h1>

              {/* Description */}
              <p className="text-lg text-neutral-600 mb-8 max-w-xl">
                AI-native real estate platform built for Australians. Voice-first search,
                transparent pricing, and fair play guarantee.
              </p>

              {/* Warning */}
              <Card className="border-amber-200 bg-amber-50 mb-8">
                <CardContent className="p-4 flex items-start gap-3">
                  <Shield className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-amber-900">
                    <strong>No dodgy tactics.</strong> We verify every listing and disclose all fees upfront.
                  </div>
                </CardContent>
              </Card>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3">
                <Button
                  size="lg"
                  className="bg-neutral-900 text-white hover:bg-neutral-800"
                >
                  Start Searching
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-neutral-300 hover:bg-neutral-50"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Watch Demo
                </Button>
              </div>
            </div>

            {/* Right: Features Grid */}
            <div className="grid gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <Card
                    key={index}
                    className="border border-neutral-200 bg-white p-5 hover:shadow-lg transition-shadow"
                  >
                    <CardContent className="p-0">
                      <div className="flex items-start gap-4">
                        <div className={cn("p-3 rounded-xl", feature.bgColor)}>
                          <Icon className={cn("w-6 h-6", feature.color)} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{feature.title}</h3>
                          <p className="text-sm text-neutral-600">{feature.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-y border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-neutral-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
              Built Differently
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              We're changing real estate for the better. Here's how.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-neutral-200 bg-white p-6">
              <CardContent className="p-0">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                  <Mic className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Voice Search</h3>
                <p className="text-neutral-600 text-sm mb-4">
                  Just ask naturally. "3 bedroom house in Melbourne with a pool" gets you
                  exactly what you're looking for.
                </p>
                <ul className="space-y-2 text-sm text-neutral-600">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    98% accuracy
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    Natural language
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    Instant results
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-neutral-200 bg-white p-6">
              <CardContent className="p-0">
                <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center mb-4">
                  <Scale className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Fair Play Protocol</h3>
                <p className="text-neutral-600 text-sm mb-4">
                  No underquoting. No hidden fees. No bait-and-switch. Every listing is
                  verified and priced accurately.
                </p>
                <ul className="space-y-2 text-sm text-neutral-600">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                    Verified listings
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                    Price guarantees
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                    Agent ratings
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-neutral-200 bg-white p-6">
              <CardContent className="p-0">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-4">
                  <Layers className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Full Transparency</h3>
                <p className="text-neutral-600 text-sm mb-4">
                  Every fee, commission, and cost disclosed upfront. Plain English contracts.
                  No surprises at settlement.
                </p>
                <ul className="space-y-2 text-sm text-neutral-600">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                    Fee breakdown
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                    Property history
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                    Market insights
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24 bg-white border-y border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
              What People Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-neutral-200 bg-neutral-50">
                <CardContent className="p-6">
                  <p className="text-lg text-neutral-700 mb-4">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500" />
                    <div>
                      <div className="font-medium text-neutral-900">{testimonial.author}</div>
                      <div className="text-sm text-neutral-600">{testimonial.location}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Card className="border-neutral-200 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white">
            <CardContent className="p-8 sm:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
                    Ready to find your perfect home?
                  </h2>
                  <p className="text-neutral-300 mb-6">
                    Join thousands of Australians already using HAUS to search smarter.
                  </p>

                  <form className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 rounded-xl border border-neutral-700 bg-neutral-950/50 px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Button
                      type="button"
                      className="bg-white text-neutral-900 hover:bg-neutral-100"
                    >
                      Get Early Access
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </form>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4">
                    <div className="text-3xl font-bold">12k+</div>
                    <div className="text-sm text-neutral-400">Listings</div>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-3xl font-bold">98%</div>
                    <div className="text-sm text-neutral-400">Happy</div>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-3xl font-bold">$0</div>
                    <div className="text-sm text-neutral-400">Hidden Fees</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-md bg-neutral-900 flex items-center justify-center">
                <Heart className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-neutral-600 text-sm">© 2025 HAUS. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-neutral-600">
              <Link href="#privacy" className="hover:text-neutral-900 transition">
                Privacy
              </Link>
              <Link href="#terms" className="hover:text-neutral-900 transition">
                Terms
              </Link>
              <Link href="#contact" className="hover:text-neutral-900 transition">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
