"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Menu,
  Mic,
  Sparkles,
  ShieldCheck,
  Bot,
  Glasses,
  Quote,
  ArrowUpRight,
  Home,
  CheckCircle2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { HausLogo } from "@/components/haus-logo"
import { cn } from "@/lib/utils"
import type {
  PlatformStat,
  FeatureCard,
  PropertyListing,
  Testimonial,
  FeeBreakdown,
} from "@/types/landing-light"

/**
 * Landing Page Light Theme
 *
 * Premium light-themed landing page for HAUS AI-native real estate platform
 * Features smooth scroll animations, voice search interface, and modern property cards
 *
 * @example
 * ```tsx
 * import LandingLightPage from './landing-light/page'
 * <LandingLightPage />
 * ```
 */
export default function LandingLightPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [purchasePrice, setPurchasePrice] = useState(500000)
  const [holdingPeriod, setHoldingPeriod] = useState(5)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  // Calculate ROI based on inputs
  const calculateROI = (price: number, years: number) => {
    const annualAppreciation = 5.2
    const totalReturn = Math.round((1 + annualAppreciation / 100) ** years * 100)
    return {
      totalReturn,
      annualAppreciation,
    }
  }

  const roiData = calculateROI(purchasePrice, holdingPeriod)

  const stats: PlatformStat[] = [
    { value: "12k+", label: "Active Listings" },
    { value: "98%", label: "Satisfaction" },
    { value: "$1B+", label: "Volume" },
    { value: "Zero", label: "Hidden Fees" },
  ]

  const features: FeatureCard[] = [
    {
      id: "01",
      title: "AI PROPERTY ASSISTANT",
      subtitle: "GPT-4 Powered",
      description: "Analyze investment potential, draft offer letters, and compare listings instantly. Your 24/7 expert.",
      tags: ["Market Trends", "Legal Drafting"],
      icon: Sparkles,
    },
    {
      id: "02",
      title: "FAIR PLAY PROTOCOL",
      subtitle: "Compliance Ready",
      description: "No underquoting. No dodgy tactics. We detect price anomalies and verify every document automatically.",
      tags: ["AUSTRAC Certified", "ID Check"],
      icon: ShieldCheck,
    },
    {
      id: "03",
      title: "IMMERSIVE 3D",
      subtitle: "NeRF • WebXR",
      description: "Explore homes remotely with photorealistic tours. AI staging helps you visualize the potential of every room.",
      tags: ["VR Ready", "Spatial AI"],
      icon: Glasses,
    },
  ]

  const featuredListings: PropertyListing[] = [
    {
      id: "1",
      title: "Oceanview Modern Villa",
      location: "Malibu, CA",
      price: "$2.8M",
      beds: 4,
      baths: 3,
      sqft: 2800,
      imageSrc: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1600&auto=format&fit=crop",
      badge: "New",
    },
    {
      id: "2",
      title: "Skyline Penthouse",
      location: "Manhattan, NY",
      price: "$5.2M",
      beds: 3,
      baths: 2,
      sqft: 1950,
      imageSrc: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
      badge: "Verified",
    },
    {
      id: "3",
      title: "Contemporary Townhouse",
      location: "Austin, TX",
      price: "$1.15M",
      beds: 3,
      baths: 3,
      sqft: 1900,
      imageSrc: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1600&auto=format&fit=crop",
      badge: "Open House",
    },
  ]

  const feeBreakdown: FeeBreakdown[] = [
    { label: "Agent Commission (2.5%)", value: "$22,000" },
    { label: "Marketing Fees", value: "Included" },
    { label: "Legal Costs (Est.)", value: "$1,200" },
    { label: "Building & Pest", value: "$550" },
  ]

  const testimonial: Testimonial = {
    quote: "HAUS's AI found me a property that wasn't even listed yet. The investment score was spot-on—I've seen 15% appreciation in just 8 months.",
    author: "Sarah Chen",
    company: "Chen Capital",
    imageSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100",
  }

  const footerLinks = {
    platform: [
      { name: "Search", href: "#search" },
      { name: "Analytics", href: "#analytics" },
      { name: "Agents", href: "#agents" },
    ],
    company: [
      { name: "About", href: "#about" },
      { name: "Careers", href: "#careers" },
      { name: "Press", href: "#press" },
    ],
    legal: [
      { name: "Terms", href: "#terms" },
      { name: "Privacy", href: "#privacy" },
      { name: "AUSTRAC", href: "#austrac" },
    ],
  }

  return (
    <div className="min-h-screen bg-[#F2F2F4] text-[#0F0F0F] antialiased">
      {/* Noise Overlay */}
      <div
        className="fixed inset-0 z-0 w-full h-full pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full px-4 sm:px-6 py-4 md:px-12 md:py-6 flex justify-between items-center z-50 mix-blend-exclusion text-white">
        <Link href="/" className="flex items-center gap-2 font-display text-base sm:text-lg font-medium tracking-tight">
          <div className="w-3 sm:w-4 h-3 sm:h-4 bg-white rounded-sm" /> HAUS
        </Link>

        <div className="hidden md:flex gap-6 sm:gap-8 text-[10px] sm:text-xs font-medium tracking-[0.15em] uppercase opacity-80">
          <Link href="#search" className="hover:opacity-100 transition-opacity">
            Search
          </Link>
          <Link href="#products" className="hover:opacity-100 transition-opacity">
            Products
          </Link>
          <Link href="#agents" className="hover:opacity-100 transition-opacity">
            Agents
          </Link>
          <Link href="#login" className="hover:opacity-100 transition-opacity">
            Login
          </Link>
        </div>

        <Button variant="ghost" size="icon" className="md:hidden rounded-full">
          <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
        </Button>
      </nav>

      {/* Main Wrapper */}
      <div className="relative z-10 shadow-2xl rounded-b-3xl overflow-hidden mb-[100vh]">
        {/* Hero Section */}
        <section className="h-screen relative flex flex-col items-center justify-center overflow-hidden">
          {/* Parallax Image */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2700&auto=format&fit=crop"
              alt="Modern Architecture"
              fill
              className="object-cover brightness-[0.7] scale-110"
              priority
            />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 text-center text-white mix-blend-exclusion px-4 w-full max-w-5xl">
            {/* Badge */}
            <div
              className={cn(
                "flex items-center justify-center gap-2 mb-4 sm:mb-6 transition-opacity duration-1000",
                isLoaded ? "opacity-100" : "opacity-0"
              )}
            >
              <span className="px-2.5 sm:px-3 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-[9px] sm:text-[10px] uppercase tracking-[0.15em] font-medium">
                Early Access v1.0
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display text-[13vw] leading-[0.8] tracking-tighter overflow-hidden">
              <span
                className={cn(
                  "block transition-transform duration-1000",
                  isLoaded ? "translate-y-0" : "translate-y-full"
                )}
              >
                THE NEW
              </span>
            </h1>

            <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-8 overflow-hidden">
              <h1 className="font-display text-[13vw] leading-[0.8] tracking-tighter">
                <span
                  className={cn(
                    "block transition-transform duration-1000 delay-100",
                    isLoaded ? "translate-y-0" : "translate-y-full"
                  )}
                >
                  HOME OF
                </span>
              </h1>
            </div>

            <div className="overflow-hidden">
              <h1 className="font-display text-[13vw] leading-[0.8] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
                <span
                  className={cn(
                    "block transition-transform duration-1000 delay-200",
                    isLoaded ? "translate-y-0" : "translate-y-full"
                  )}
                >
                  HOMES
                </span>
              </h1>
            </div>

            {/* Description */}
            <p
              className={cn(
                "mt-6 sm:mt-8 text-xs sm:text-sm md:text-base font-light text-white/80 max-w-lg mx-auto transition-opacity duration-1000 delay-500",
                isLoaded ? "opacity-100" : "opacity-0"
              )}
            >
              Curated properties. Powerful search. Expert support.
              <br />
              AI-native real estate for the modern era.
            </p>

            {/* Voice Search Demo */}
            <div
              className={cn(
                "mt-8 sm:mt-12 mx-auto max-w-md w-full bg-white/70 backdrop-blur-md border border-white/50 rounded-2xl p-2 flex items-center gap-3 transition-all duration-1000 delay-700",
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
            >
              <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-xl bg-black flex items-center justify-center text-white shrink-0">
                <Mic className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="flex-1 text-left">
                <div className="text-[10px] sm:text-xs text-black/60 font-medium">
                  Try asking...
                </div>
                <div className="text-xs sm:text-sm text-black font-medium">
                  "3 bed house in Melbourne with a pool"
                </div>
              </div>
              <div className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-black/5 rounded-lg text-[9px] sm:text-[10px] font-medium uppercase tracking-wider text-black/70">
                Enter
              </div>
            </div>
          </div>
        </section>

        {/* Stats & Intro Section */}
        <section className="py-20 sm:py-32 px-4 sm:px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto bg-[#F2F2F4]">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start border-b border-gray-200 pb-16 lg:pb-24">
            <div className="lg:col-span-7">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.05] tracking-tight text-[#0A0A0A]">
                A revolution in
                <br />
                <span className="text-gray-400">real estate.</span> Search, invest,
                and buy in one platform.
              </h2>
            </div>
            <div className="lg:col-span-5 flex flex-col justify-between h-full pt-2">
              <p className="text-base sm:text-lg md:text-xl font-light text-gray-600 leading-relaxed">
                No more checkbox hell. HAUS combines market expertise with a
                seamless, voice-first AI experience. We prioritize transparency,
                verified listings, and data-driven insights.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-8 sm:mt-12">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-2xl sm:text-3xl font-medium tracking-tight mb-1 text-[#0A0A0A]">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-[0.15em] font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Product Stack */}
        <section className="py-16 sm:py-20 md:py-32 bg-[#F2F2F4]">
          <div className="px-4 sm:px-6 md:px-12 lg:px-20 mb-12 sm:mb-16 md:mb-20">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] text-gray-500">
                Platform Capabilities
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#0A0A0A]">
              INTELLIGENT
              <br />
              TOOLS
            </h2>
          </div>

          <div className="space-y-8 sm:space-y-12 px-2 sm:px-4 md:px-12 lg:px-20">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card
                  key={index}
                  className="border border-gray-200 bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg"
                >
                  <CardContent className="p-0">
                    <div className="grid lg:grid-cols-[1fr_1.5fr]">
                      {/* Content Side */}
                      <div className="p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-gray-200 order-2 lg:order-1 h-auto lg:h-full min-h-[45%] lg:min-h-full">
                        <div className="w-full">
                          <div className="flex justify-between items-start mb-2">
                            <span className="text-[10px] sm:text-xs font-mono text-gray-400">
                              {feature.id} / 03
                            </span>
                            <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-800" />
                          </div>
                          <h3 className="font-display text-2xl sm:text-3xl font-medium tracking-tight mt-4 sm:mt-6 text-[#0A0A0A]">
                            {feature.title}
                          </h3>
                          <p className="text-[10px] sm:text-xs font-medium text-gray-400 uppercase tracking-[0.15em] mt-2">
                            {feature.subtitle}
                          </p>
                        </div>
                        <div className="space-y-4 sm:space-y-6 mt-4 sm:mt-6">
                          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
                            {feature.description}
                          </p>
                          <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {feature.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="px-2.5 sm:px-3 py-1 bg-gray-100 rounded-md text-[9px] sm:text-[10px] uppercase tracking-wider font-medium text-gray-600"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Image/Mockup Side */}
                      <div className="relative min-h-[250px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-full h-[55%] lg:h-auto flex items-center justify-center p-6 sm:p-8 lg:p-12 bg-gray-50 order-1 lg:order-2">
                        {feature.id === "01" && (
                          // AI Assistant Mockup
                          <div className="w-full max-w-xs sm:max-w-sm bg-white rounded-xl shadow-lg border border-gray-100 p-4 sm:p-6">
                            <div className="flex items-center gap-3 mb-3 sm:mb-4">
                              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                <Bot className="w-3 h-3 sm:w-4 sm:h-4" />
                              </div>
                              <div className="text-xs sm:text-sm font-medium">HAUS AI</div>
                            </div>
                            <div className="space-y-2 sm:space-y-3">
                              <div className="bg-gray-50 p-2.5 sm:p-3 rounded-lg rounded-tl-none text-[10px] sm:text-xs text-gray-600 leading-relaxed">
                                Based on the 12-month forecast, this property
                                has a projected ROI of +12.4%. Rental yield is
                                above suburb average.
                              </div>
                              <div className="h-1.5 sm:h-2 w-20 sm:w-24 bg-gray-100 rounded animate-pulse" />
                            </div>
                            <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100">
                              <div className="flex gap-2">
                                <div className="flex-1 h-6 sm:h-8 bg-gray-50 rounded-lg border border-gray-200" />
                                <div className="w-6 sm:w-8 h-6 sm:h-8 bg-black rounded-lg flex items-center justify-center text-white">
                                  <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4" />
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {feature.id === "02" && (
                          // Fair Play Protocol
                          <>
                            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:12px_12px] sm:[background-size:16px_16px] opacity-50" />
                            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-200 w-56 sm:w-64 z-10">
                              <div className="flex justify-between items-center mb-3 sm:mb-4">
                                <span className="text-[10px] sm:text-xs font-medium text-gray-500">
                                  Risk Score
                                </span>
                                <span className="text-[10px] sm:text-xs font-bold text-green-600 bg-green-50 px-1.5 sm:px-2 py-0.5 rounded">
                                  LOW
                                </span>
                              </div>
                              <div className="space-y-2 sm:space-y-3">
                                <div className="flex justify-between items-center">
                                  <span className="text-[10px] sm:text-xs text-gray-600">
                                    Identity
                                  </span>
                                  <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-[10px] sm:text-xs text-gray-600">
                                    Funds Source
                                  </span>
                                  <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-[10px] sm:text-xs text-gray-600">
                                    Ownership
                                  </span>
                                  <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
                                </div>
                              </div>
                            </div>
                          </>
                        )}

                        {feature.id === "03" && (
                          // 3D Tours Image
                          <>
                            <Image
                              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop"
                              alt="Interior 3D"
                              fill
                              className="object-cover transition-transform duration-1000 hover:scale-105"
                            />
                            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 bg-white/90 backdrop-blur px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-[10px] sm:text-xs font-medium flex items-center gap-2">
                              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse" />
                              Live View
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* ROI & Transparency Section */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 bg-white border-t border-gray-100">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Transparency Receipt */}
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-medium tracking-tight mb-2 text-[#0A0A0A]">
                Transparency Receipt
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mb-6 sm:mb-8 max-w-sm">
                Every fee disclosed in plain English before you sign. No surprises.
              </p>

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 sm:p-6 font-mono text-xs sm:text-sm max-w-md">
                <div className="flex justify-between border-b border-gray-200 pb-3 sm:pb-4 mb-3 sm:mb-4">
                  <span className="text-gray-500">Property Value</span>
                  <span className="font-medium">$880,000</span>
                </div>
                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 text-gray-600 text-[10px] sm:text-xs">
                  {feeBreakdown.map((fee, index) => (
                    <div key={index} className="flex justify-between">
                      <span>{fee.label}</span>
                      <span>{fee.value}</span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between border-t border-dashed border-gray-300 pt-3 sm:pt-4">
                  <span className="font-semibold text-gray-900">Total Est. Costs</span>
                  <span className="font-semibold text-gray-900">$24,400</span>
                </div>
              </div>
            </div>

            {/* ROI Calculator */}
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-medium tracking-tight mb-2 text-[#0A0A0A]">
                ROI Calculator
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mb-6 sm:mb-8 max-w-sm">
                Project your returns with AI-driven market appreciation data.
              </p>

              <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-sm">
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-[10px] sm:text-xs font-medium text-gray-600">
                        Purchase Price
                      </label>
                      <span className="text-[10px] sm:text-xs font-bold">
                        ${purchasePrice.toLocaleString()}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={300000}
                      max={2000000}
                      step={10000}
                      value={purchasePrice}
                      onChange={(e) => setPurchasePrice(Number(e.target.value))}
                      className="w-full h-1 sm:h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      style={{
                        WebkitAppearance: "none",
                        background: `linear-gradient(to-right, #000 0%, #000 ${
                          ((purchasePrice - 300000) / (2000000 - 300000)) * 100
                        }%, #e5e5e5 ${((purchasePrice - 300000) / (2000000 - 300000)) * 100}%)`,
                      }}
                    />
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-[10px] sm:text-xs font-medium text-gray-600">
                        Holding Period (Years)
                      </label>
                      <span className="text-[10px] sm:text-xs font-bold">
                        {holdingPeriod} Years
                      </span>
                    </div>
                    <input
                      type="range"
                      min={1}
                      max={30}
                      value={holdingPeriod}
                      onChange={(e) => setHoldingPeriod(Number(e.target.value))}
                      className="w-full h-1 sm:h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      style={{
                        WebkitAppearance: "none",
                        background: `linear-gradient(to-right, #000 0%, #000 ${
                          ((holdingPeriod - 1) / 29) * 100
                        }%, #e5e5e5 ${((holdingPeriod - 1) / 29) * 100}%)`,
                      }}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-3 sm:pt-4">
                    <div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
                      <div className="text-[9px] sm:text-[10px] text-blue-600 uppercase tracking-wider font-semibold mb-1">
                        Total Return
                      </div>
                      <div className="text-xl sm:text-2xl font-display font-medium text-blue-900">
                        {roiData.totalReturn}%
                      </div>
                    </div>
                    <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                      <div className="text-[9px] sm:text-[10px] text-gray-600 uppercase tracking-wider font-semibold mb-1">
                        Ann. Appreciation
                      </div>
                      <div className="text-xl sm:text-2xl font-display font-medium text-gray-900">
                        {roiData.annualAppreciation}%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Listings */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 bg-[#F2F2F4]">
          <div className="flex justify-between items-end mb-8 sm:mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-[#0A0A0A]">
              FEATURED
              <br />
              LISTINGS
            </h2>
            <Link
              href="#listings"
              className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.15em] border-b border-gray-300 pb-1 hover:border-black transition-colors hidden sm:block"
            >
              View All
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            {featuredListings.map((listing) => (
              <Card
                key={listing.id}
                className="group cursor-pointer border-0 shadow-sm hover:shadow-lg transition-all"
              >
                <CardContent className="p-0">
                  <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden mb-3 sm:mb-4 relative">
                    <Image
                      src={listing.imageSrc}
                      alt={listing.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {listing.badge && (
                      <div className="absolute top-2.5 sm:top-3 left-2.5 sm:left-3 bg-white/90 backdrop-blur px-2 py-0.5 sm:py-1 rounded text-[9px] sm:text-[10px] font-medium uppercase tracking-wider">
                        {listing.badge}
                      </div>
                    )}
                  </div>
                  <div className="px-0.5 sm:px-1 pb-0.5 sm:pb-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-xs sm:text-sm">
                          {listing.title}
                        </h3>
                        <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5 sm:mt-1">
                          {listing.location}
                        </p>
                      </div>
                      <div className="text-xs sm:text-sm font-medium">
                        {listing.price}
                      </div>
                    </div>
                    <div className="flex gap-2 sm:gap-3 mt-2 sm:mt-3 text-[10px] sm:text-xs text-gray-500">
                      <span>{listing.beds} bd</span> •{" "}
                      <span>{listing.baths} ba</span> •{" "}
                      <span>{listing.sqft.toLocaleString()} sqft</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 sm:py-32 flex flex-col items-center justify-center text-center px-4 sm:px-6 border-t border-gray-200">
          <div className="max-w-3xl mx-auto">
            <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-gray-300 mx-auto mb-6 sm:mb-8" />
            <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-medium tracking-tight mb-6 sm:mb-8 leading-normal text-gray-900">
              "{testimonial.quote}"
            </h3>
            <div className="flex flex-col items-center">
              <Image
                src={testimonial.imageSrc}
                alt={testimonial.author}
                width={40}
                height={40}
                className="w-10 h-10 rounded-full mb-3 object-cover grayscale opacity-80"
              />
              <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] text-gray-900">
                {testimonial.author}
              </div>
              <div className="text-[10px] sm:text-xs font-medium text-gray-400 mt-1">
                {testimonial.company}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer (Fixed) */}
      <footer className="fixed bottom-0 left-0 w-full h-screen z-1 bg-[#050505] text-white flex flex-col justify-center items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2700&auto=format&fit=crop"
            alt="Footer Background"
            fill
            className="object-cover opacity-10 pointer-events-none grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent" />
        </div>

        <div className="relative z-10 text-center w-full max-w-4xl px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6 sm:mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-gray-300">
              Waitlist Active
            </span>
          </div>

          <Link href="#get-started" className="block group">
            <h2 className="font-display text-[10vw] leading-[0.8] font-medium tracking-tighter text-white group-hover:text-gray-300 transition-colors duration-500">
              GET STARTED
            </h2>
            <div className="h-[1px] w-0 group-hover:w-full bg-white/50 mx-auto transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] mt-3 sm:mt-4" />
          </Link>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-16 sm:mt-24 text-left border-t border-white/10 pt-8 sm:pt-12">
            <div className="flex flex-col gap-3 sm:gap-4">
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-gray-500 font-semibold">
                Platform
              </span>
              {footerLinks.platform.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[10px] sm:text-xs text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3 sm:gap-4">
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-gray-500 font-semibold">
                Company
              </span>
              {footerLinks.company.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[10px] sm:text-xs text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3 sm:gap-4">
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-gray-500 font-semibold">
                Legal
              </span>
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[10px] sm:text-xs text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex flex-col justify-between">
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-gray-500 font-semibold">
                © 2025
              </span>
              <div className="text-[9px] sm:text-[10px] text-gray-600 uppercase tracking-[0.15em]">
                HAUS Group Pty Ltd
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
