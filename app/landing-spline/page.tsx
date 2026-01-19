"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import {
  Home,
  Megaphone,
  ShieldCheck,
  Mail,
  Compass,
  Mic,
  Scale,
  Layers,
  Bot,
  MessageCircle,
  Shield,
  FileText,
  LineChart,
  Box,
  Glasses,
  Sofa,
  BookCheck,
  UserCheck,
  Banknote,
  Link as LinkIcon,
  Server,
  Network,
  Atom,
  Activity,
  Bed,
  ShowerHead,
  Ruler,
  ExternalLink,
  Sparkles,
  Camera,
  TrendingUp,
  Key,
  MapPinned,
  LayoutPanelTop,
  Grid,
  Zap,
  MailPlus,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { HausLogo } from "@/components/haus-logo"
import { cn } from "@/lib/utils"
import type {
  VoiceSearchExample,
  Property,
  Testimonial,
  AdvantageFeature,
  HowItWorksStep,
  DetectionMetric,
  TransparencyItem,
  ValuationMethod,
  ComplianceItem,
  ComplianceWorkflow,
} from "@/types/landing-spline"

/**
 * Landing Spline Page - Canvas Particles
 *
 * Premium dark-themed landing page with animated canvas particle effects
 * Replaces Spline 3D iframe with lightweight Canvas-based particle animation
 * Features AI-native real estate search, voice-first interface, and modern property cards
 *
 * @example
 * ```tsx
 * import LandingSplinePage from './landing-spline/page'
 * <LandingSplinePage />
 * ```
 */

export default function LandingSplinePage() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  // Particle animation setup
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Particle configuration
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      opacity: number
    }> = []
    const particleCount = 80
    const connectionDistance = 150

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      })
    }

    // Animation loop
    let animationFrameId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((particle, i) => {
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity * 0.3})`
        ctx.fill()

        // Draw connections
        particles.forEach((otherParticle, j) => {
          if (i >= j) return
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            const opacity = (1 - distance / connectionDistance) * 0.15
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()
    setIsLoaded(true)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  // Data
  const voiceExamples: VoiceSearchExample[] = [
    { query: "Family home with courtyard near parks" },
    { query: "Investment property with high yield in Brisbane" },
    { query: "Waterfront apartment with city views" },
    { query: "Rural acreage with solar power and bore" },
  ]

  const featuredProperties: Property[] = [
    {
      id: "1",
      title: "Modern Downtown Loft",
      location: "Downtown District",
      price: 2850000,
      beds: 3,
      baths: 2,
      sqft: 2400,
    },
    {
      id: "2",
      title: "Luxury Penthouse Suite",
      location: "Financial District",
      price: 4200000,
      beds: 4,
      baths: 3,
      sqft: 3200,
    },
    {
      id: "3",
      title: "Contemporary Family Home",
      location: "Residential Hills",
      price: 1950000,
      beds: 4,
      baths: 3,
      sqft: 2800,
    },
  ]

  const testimonials: Testimonial[] = [
    {
      quote:
        "HAUS found me the perfect condo in just 2 weeks. The AI recommendations were spot-on, and the virtual tours saved me countless hours.",
      author: "Sarah Chen",
      role: "First-time Buyer",
    },
    {
      quote:
        "The predictive analytics helped me spot an up-and-coming suburb. My investment is up 15% in 6 months.",
      author: "Michael Rodriguez",
      role: "Real Estate Investor",
    },
    {
      quote:
        "Moving across the country was stressful, but HAUS made finding our home effortless. Neighborhood insights were incredibly accurate.",
      author: "Emily Johnson",
      role: "Family Relocating",
    },
  ]

  const advantages: AdvantageFeature[] = [
    {
      icon: "Sparkles",
      title: "AI-Powered Matching",
      description: "Learns your preferences for personalized recommendations.",
    },
    {
      icon: "Camera",
      title: "Immersive Visualization",
      description: "Photorealistic 3D tours with AI insights.",
    },
    {
      icon: "TrendingUp",
      title: "Predictive Analytics",
      description: "Price forecasts, investment potential, trend detection.",
    },
    {
      icon: "Key",
      title: "Exclusive Inventory",
      description: "Off-market and pre-market access.",
    },
    {
      icon: "MapPinned",
      title: "Neighborhood Insights",
      description: "Schools, amenities, safety, development plans.",
    },
    {
      icon: "LayoutPanelTop",
      title: "Smart Comparisons",
      description: "Highlights differences based on your priorities.",
    },
  ]

  const howItWorks: HowItWorksStep[] = [
    {
      number: "01",
      title: "Your Property Vision",
      description: "Tell us what you're looking for or just speak naturally.",
    },
    {
      number: "02",
      title: "AI Analysis & Matching",
      description: "We analyze thousands of listings and datasets to find hidden gems.",
    },
    {
      number: "03",
      title: "Immersive Exploration",
      description: "Tour properties in 3D with neighborhood insights and forecasts.",
    },
  ]

  const detectionMetrics: DetectionMetric[] = [
    { label: "Dodgy Practice Detection", value: "95%", color: "text-emerald-300" },
    { label: "Fee Transparency", value: "100%", color: "text-blue-300" },
    {
      label: "Compliance",
      value: "AUSTRAC Certified",
      icon: "Shield",
    },
    { label: "Security", value: "Zero", color: "text-rose-300", sublabel: "breach record" },
  ]

  const transparencyItems: TransparencyItem[] = [
    { label: "Agent Commission", value: "2.5% + GST" },
    { label: "Marketing Fees", value: "Included in price" },
    { label: "Legal Costs", value: "$1,200 estimated" },
    { label: "Finance Fees", value: "$500-$800" },
  ]

  const valuationMethods: ValuationMethod[] = [
    { label: "Comparable Sales", value: "$785,000", color: "text-blue-300" },
    { label: "Hedonic Regression", value: "$812,000", color: "text-cyan-300" },
    { label: "DCF Analysis", value: "$798,000", color: "text-emerald-300" },
    { label: "ML Forecast", value: "$805,000", color: "text-amber-300" },
    { label: "Investment Score", value: "8.7/10", color: "text-violet-300" },
  ]

  const complianceItems: ComplianceItem[] = [
    { label: "AML" },
    { label: "CDD" },
    { label: "SMR" },
    { label: "KYC" },
  ]

  const complianceWorkflow: ComplianceWorkflow[] = [
    { icon: "UserCheck", label: "Identity Verified", status: "Completed in 47s" },
    {
      icon: "Banknote",
      label: "Source of Funds",
      status: "Automated verification",
    },
    {
      icon: "Link",
      label: "Beneficial Ownership",
      status: "Pending documentation",
    },
  ]

  const platformMetrics = [
    { label: "Concurrent Users", value: "100K+" },
    { label: "API Response", value: "<100ms", color: "text-emerald-300" },
    { label: "Uptime", value: "99.9%", color: "text-cyan-300" },
    { label: "Security Breaches", value: "Zero", color: "text-rose-300" },
  ]

  // Icon mapping helper
  const getIcon = (iconName: string, className: string) => {
    const icons: Record<string, React.ComponentType<{ className?: string }>> = {
      Sparkles,
      Camera,
      TrendingUp,
      Key,
      MapPinned,
      LayoutPanelTop,
      UserCheck,
      Banknote,
      Link: LinkIcon as any,
      Shield,
    }
    const Icon = icons[iconName]
    return Icon ? <Icon className={className} /> : null
  }

  return (
    <div className="min-h-screen bg-zinc-950 font-inter text-zinc-400 antialiased selection:bg-zinc-800 selection:text-zinc-100">
      {/* Background - Canvas Particles */}
      <div className="fixed inset-0 -z-10 opacity-60">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-20 backdrop-blur bg-zinc-950/60 border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <HausLogo />
            <span className="text-zinc-200 text-lg font-medium tracking-tight">
              HAUS
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#"
              className="text-zinc-300 hover:text-zinc-100 transition-colors text-sm"
            >
              EXPLORE
            </Link>
            <Link
              href="#"
              className="text-zinc-300 hover:text-zinc-100 transition-colors text-sm"
            >
              SEARCH
            </Link>
            <Link
              href="#"
              className="text-zinc-300 hover:text-zinc-100 transition-colors text-sm"
            >
              DEEPHAUS
            </Link>
            <Link
              href="#"
              className="text-zinc-300 hover:text-zinc-100 transition-colors text-sm"
            >
              ADMIN
            </Link>
            <Link
              href="#"
              className="text-zinc-100 text-sm inline-flex items-center gap-2"
            >
              EARLY ACCESS
              <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-zinc-800 ring-1 ring-zinc-700 text-zinc-300">
                1
              </span>
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              className="hidden sm:inline-flex items-center gap-2 bg-zinc-100 text-zinc-900 hover:bg-white"
            >
              <Zap className="w-4 h-4" />
              Get Early Access
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="bg-zinc-900 ring-1 ring-zinc-700 text-zinc-200 hover:bg-zinc-800"
            >
              <Grid className="w-4 h-4" />
              Explore Products
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 md:pt-14">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="inline-flex items-center gap-2 text-xs text-zinc-400 mb-3">
              <Megaphone className="w-4 h-4 text-zinc-300" />
              EARLY ACCESS
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight text-zinc-100 font-semibold leading-tight">
              A Revolution in Real Estate
            </h1>
            <p className="mt-4 text-zinc-300 text-sm sm:text-base">
              Search, invest, buy, and manage in one AI‑native platform. Voice‑first.
              Compliance‑ready. Built for Australians.
            </p>
            <p className="mt-2 text-emerald-300/90 text-sm inline-flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              Don't put up with dodgy agent tactics.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button className="inline-flex items-center gap-2 bg-zinc-100 text-zinc-900 hover:bg-white">
                <Mail className="w-4 h-4" />
                Get Early Access
              </Button>
              <Button
                variant="outline"
                className="bg-zinc-900 ring-1 ring-zinc-700 text-zinc-200 hover:bg-zinc-800"
              >
                <Compass className="w-4 h-4" />
                Explore Products
              </Button>
            </div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <Card className="p-4 bg-zinc-900/70 backdrop-blur ring-1 ring-zinc-800/60">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-zinc-800/70 ring-1 ring-zinc-700 flex items-center justify-center">
                    <Mic className="w-4 h-4 text-blue-300" />
                  </div>
                  <div>
                    <p className="text-zinc-200 text-sm font-medium">
                      Voice-First Search
                    </p>
                    <p className="text-xs text-zinc-500">
                      Ask naturally. No more checkbox hell.
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-4 bg-zinc-900/70 backdrop-blur ring-1 ring-zinc-800/60">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-zinc-800/70 ring-1 ring-zinc-700 flex items-center justify-center">
                    <Scale className="w-4 h-4 text-amber-300" />
                  </div>
                  <div>
                    <p className="text-zinc-200 text-sm font-medium">
                      Fair Play Protocol
                    </p>
                    <p className="text-xs text-zinc-500">
                      No underquoting. No dodgy tactics.
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-4 bg-zinc-900/70 backdrop-blur ring-1 ring-zinc-800/60">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-zinc-800/70 ring-1 ring-zinc-700 flex items-center justify-center">
                    <Layers className="w-4 h-4 text-green-300" />
                  </div>
                  <div>
                    <p className="text-zinc-200 text-sm font-medium">
                      Transparency by Design
                    </p>
                    <p className="text-xs text-zinc-500">
                      Every fee disclosed. Plain English.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Right stacked primary cards */}
          <div className="grid gap-4">
            {/* Voice Search Card */}
            <Card className="bg-zinc-900/80 ring-1 ring-zinc-800/60 backdrop-blur shadow-2xl">
              <div className="flex items-center justify-between p-5 border-b border-zinc-800/60">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-zinc-800/60 ring-1 ring-zinc-700 flex items-center justify-center">
                    <Mic className="w-4 h-4 text-blue-300" />
                  </div>
                  <h2 className="text-zinc-200 font-medium tracking-tight">
                    Voice‑First Property Search
                  </h2>
                </div>
                <span className="text-xs text-zinc-500">98% accuracy</span>
              </div>
              <CardContent className="p-5">
                <div className="rounded-xl bg-zinc-900 ring-1 ring-zinc-800 p-4">
                  <div className="flex items-center gap-3">
                    <Button
                      size="icon"
                      variant="ghost"
                      className="w-10 h-10 rounded-lg bg-zinc-800/70 ring-1 ring-zinc-700 text-zinc-300 hover:bg-zinc-800"
                    >
                      <Mic className="w-4 h-4" />
                    </Button>
                    <div className="flex-1">
                      <p className="text-zinc-300 text-sm">
                        Voice Search Interface — Coming Soon
                      </p>
                      <p className="text-xs text-zinc-500">
                        AI-powered voice search will be available once deployed
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 grid sm:grid-cols-2 gap-2">
                    {voiceExamples.map((example, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-lg bg-zinc-800/40 ring-1 ring-zinc-800 text-xs text-zinc-300"
                      >
                        "{example.query}"
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-3 rounded-lg bg-zinc-800/30 ring-1 ring-zinc-800 space-y-1">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-zinc-500">Recognized:</span>
                      <span className="text-zinc-300">
                        "3 bedroom house in Melbourne with good transport links"
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-zinc-500">Processing:</span>
                      <span className="text-zinc-300">
                        Searching 50,000+ listings
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-zinc-500">Results:</span>
                      <span className="text-zinc-300">
                        127 properties found in 89ms
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* AI Assistant Card */}
            <Card className="bg-zinc-900/80 ring-1 ring-zinc-800/60 backdrop-blur shadow-2xl">
              <div className="flex items-center justify-between p-5 border-b border-zinc-800/60">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-zinc-800/60 ring-1 ring-zinc-700 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-purple-300" />
                  </div>
                  <h2 className="text-zinc-200 font-medium tracking-tight">
                    AI Property Assistant
                  </h2>
                </div>
                <span className="text-xs text-zinc-500">Personalized insights</span>
              </div>
              <CardContent className="p-5">
                <div className="rounded-xl bg-zinc-900 ring-1 ring-zinc-800 p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-zinc-800/70 ring-1 ring-zinc-700 flex items-center justify-center">
                      <MessageCircle className="w-4 h-4 text-purple-300" />
                    </div>
                    <div className="flex-1">
                      <p className="text-zinc-300 text-sm">
                        Property Chat Assistant — Coming Soon
                      </p>
                      <p className="text-xs text-zinc-500">
                        AI-powered property chat will be available once deployed
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust + Protocol + Transparency */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 grid lg:grid-cols-3 gap-6">
        {/* Fair Play Protocol */}
        <Card className="bg-zinc-900/80 ring-1 ring-zinc-800/60 backdrop-blur shadow-2xl">
          <div className="flex items-center justify-between p-5 border-b border-zinc-800/60">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-zinc-800/60 ring-1 ring-zinc-700 flex items-center justify-center">
                <Shield className="w-4 h-4 text-emerald-300" />
              </div>
              <h2 className="text-zinc-200 font-medium tracking-tight">
                Fair Play Protocol
              </h2>
            </div>
            <span className="text-xs text-zinc-500">Ethical AI</span>
          </div>
          <CardContent className="p-5">
            <div className="grid grid-cols-2 gap-4">
              {detectionMetrics.map((metric, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-zinc-900 ring-1 ring-zinc-800"
                >
                  <p className="text-zinc-500 text-xs">{metric.label}</p>
                  {metric.icon ? (
                    <div className="mt-1 flex items-center gap-2">
                      {getIcon(metric.icon, "w-4 h-4 text-amber-300")}
                      <p className="text-sm text-zinc-300">{metric.value}</p>
                    </div>
                  ) : (
                    <p className={cn("text-2xl font-medium mt-1", metric.color)}>
                      {metric.value}
                    </p>
                  )}
                  {metric.sublabel && (
                    <p className="text-xs text-zinc-500">{metric.sublabel}</p>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-5">
              <h3 className="text-zinc-300 font-medium text-sm tracking-tight">
                Detection Overview
              </h3>
              <p className="text-xs text-zinc-500">
                Real-time risk scoring across listings
              </p>
              <div className="mt-3 rounded-xl bg-zinc-900 ring-1 ring-zinc-800 p-3">
                <div className="h-36 w-full flex items-center justify-center">
                  <div className="relative w-32 h-32">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        fill="none"
                        stroke="rgba(16, 185, 129, 0.2)"
                        strokeWidth="12"
                      />
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        fill="none"
                        stroke="rgba(244, 63, 94, 0.8)"
                        strokeWidth="12"
                        strokeDasharray="351.86"
                        strokeDashoffset="334.27"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-zinc-300 text-sm font-medium">95%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Transparency Receipt */}
        <Card className="bg-zinc-900/80 ring-1 ring-zinc-800/60 backdrop-blur shadow-2xl">
          <div className="flex items-center justify-between p-5 border-b border-zinc-800/60">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-zinc-800/60 ring-1 ring-zinc-700 flex items-center justify-center">
                <FileText className="w-4 h-4 text-sky-300" />
              </div>
              <h2 className="text-zinc-200 font-medium tracking-tight">
                Transparency Receipt
              </h2>
            </div>
            <span className="text-xs text-zinc-500">Example</span>
          </div>
          <CardContent className="p-5">
            <div className="space-y-3">
              {transparencyItems.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-3 rounded-lg bg-zinc-900 ring-1 ring-zinc-800"
                >
                  <span className="text-sm text-zinc-300">{item.label}</span>
                  <span className="text-sm text-zinc-200">{item.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Investment Intelligence */}
        <Card className="bg-zinc-900/80 ring-1 ring-zinc-800/60 backdrop-blur shadow-2xl">
          <div className="flex items-center justify-between p-5 border-b border-zinc-800/60">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-zinc-800/60 ring-1 ring-zinc-700 flex items-center justify-center">
                <LineChart className="w-4 h-4 text-cyan-300" />
              </div>
              <h2 className="text-zinc-200 font-medium tracking-tight">
                Investment Intelligence
              </h2>
            </div>
            <span className="text-xs text-zinc-500">15+ valuation methods</span>
          </div>
          <CardContent className="p-5">
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 rounded-lg bg-zinc-900 ring-1 ring-zinc-800">
                <p className="text-[11px] text-zinc-500">Forecast Accuracy</p>
                <p className="text-xl font-medium text-cyan-300 mt-0.5">85%</p>
              </div>
              <div className="p-3 rounded-lg bg-zinc-900 ring-1 ring-zinc-800">
                <p className="text-[11px] text-zinc-500">ARR Potential</p>
                <p className="text-xl font-medium text-emerald-300 mt-0.5">
                  $24.8M
                </p>
              </div>
              <div className="p-3 rounded-lg bg-zinc-900 ring-1 ring-zinc-800">
                <p className="text-[11px] text-zinc-500">Methods</p>
                <p className="text-xl font-medium text-amber-300 mt-0.5">15+</p>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-zinc-300 font-medium text-sm tracking-tight">
                12‑month Price Predictions
              </h3>
              <p className="text-xs text-zinc-500">Monte Carlo modeling</p>
              <div className="mt-3 rounded-xl bg-zinc-900 ring-1 ring-zinc-800 p-3">
                <div className="h-36 w-full flex items-end justify-between gap-1">
                  {Array.from({ length: 12 }).map((_, i) => {
                    const height = 40 + Math.random() * 50
                    return (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-blue-500/50 to-cyan-300/30 rounded-t"
                        style={{ height: `${height}%` }}
                      />
                    )
                  })}
                </div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="p-3 rounded-lg bg-zinc-900 ring-1 ring-zinc-800 space-y-2">
                {valuationMethods.slice(0, 2).map((method, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between"
                  >
                    <span className="text-sm text-zinc-300">{method.label}</span>
                    <span className={cn("text-sm", method.color)}>
                      {method.value}
                    </span>
                  </div>
                ))}
              </div>
              <div className="p-3 rounded-lg bg-zinc-900 ring-1 ring-zinc-800 space-y-2">
                {valuationMethods.slice(2).map((method, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between"
                  >
                    <span className="text-sm text-zinc-300">{method.label}</span>
                    <span className={cn("text-sm", method.color)}>
                      {method.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Immersive + Compliance + Platform */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 grid lg:grid-cols-3 gap-6">
        {/* Immersive 3D */}
        <Card className="bg-zinc-900/80 ring-1 ring-zinc-800/60 backdrop-blur shadow-2xl">
          <div className="flex items-center justify-between p-5 border-b border-zinc-800/60">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-zinc-800/60 ring-1 ring-zinc-700 flex items-center justify-center">
                <Box className="w-4 h-4 text-rose-300" />
              </div>
              <h2 className="text-zinc-200 font-medium tracking-tight">
                Immersive 3D Experience
              </h2>
            </div>
            <span className="text-xs text-zinc-500">NeRF • WebXR</span>
          </div>
          <CardContent className="p-5">
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-lg bg-zinc-900 ring-1 ring-zinc-800">
                <div className="flex items-center gap-2">
                  <Glasses className="w-4 h-4 text-emerald-300" />
                  <p className="text-sm text-zinc-300">VR Ready</p>
                </div>
                <p className="text-xs text-zinc-500 mt-1">Virtual Tour</p>
              </div>
              <div className="p-3 rounded-lg bg-zinc-900 ring-1 ring-zinc-800">
                <div className="flex items-center gap-2">
                  <Sofa className="w-4 h-4 text-amber-300" />
                  <p className="text-sm text-zinc-300">AI Staged</p>
                </div>
                <p className="text-xs text-zinc-500 mt-1">Virtual Staging</p>
              </div>
              <div className="p-3 rounded-lg bg-zinc-900 ring-1 ring-zinc-800">
                <p className="text-sm text-zinc-300">&lt;2 min</p>
                <p className="text-xs text-zinc-500">3D Tour Generation</p>
              </div>
              <div className="p-3 rounded-lg bg-zinc-900 ring-1 ring-zinc-800">
                <p className="text-sm text-zinc-300">95%</p>
                <p className="text-xs text-zinc-500">Device Compatibility</p>
              </div>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <div className="p-3 rounded-lg bg-zinc-900 ring-1 ring-zinc-800">
                <p className="text-sm text-zinc-300">Spatial AI</p>
                <p className="text-xs text-zinc-500">Room Measurements</p>
              </div>
              <div className="p-3 rounded-lg bg-zinc-900 ring-1 ring-zinc-800">
                <p className="text-sm text-zinc-300">NeRF</p>
                <p className="text-xs text-zinc-500">Photorealistic 3D</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* AUSTRAC Compliance */}
        <Card className="bg-zinc-900/80 ring-1 ring-zinc-800/60 backdrop-blur shadow-2xl">
          <div className="flex items-center justify-between p-5 border-b border-zinc-800/60">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-zinc-800/60 ring-1 ring-zinc-700 flex items-center justify-center">
                <BookCheck className="w-4 h-4 text-emerald-300" />
              </div>
              <h2 className="text-zinc-200 font-medium tracking-tight">
                AUSTRAC Compliance by Design
              </h2>
            </div>
            <span className="text-xs text-zinc-500">Automated</span>
          </div>
          <CardContent className="p-5">
            <div className="grid grid-cols-2 gap-3">
              {complianceItems.map((item, i) => (
                <div
                  key={i}
                  className="p-3 rounded-lg bg-zinc-900 ring-1 ring-zinc-800 text-sm text-zinc-300"
                >
                  {item.label}
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 rounded-xl bg-zinc-900 ring-1 ring-zinc-800">
              <h3 className="text-zinc-300 font-medium text-sm tracking-tight">
                Automated Workflow
              </h3>
              <div className="mt-3 space-y-2 text-sm">
                {complianceWorkflow.map((step, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between"
                  >
                    <div className="inline-flex items-center gap-2">
                      {getIcon(step.icon, "w-4 h-4 text-emerald-300")}
                      <span className="text-zinc-300">{step.label}</span>
                    </div>
                    <span className="text-zinc-400 text-xs">{step.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Platform Performance */}
        <Card className="bg-zinc-900/80 ring-1 ring-zinc-800/60 backdrop-blur shadow-2xl">
          <div className="flex items-center justify-between p-5 border-b border-zinc-800/60">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-zinc-800/60 ring-1 ring-zinc-700 flex items-center justify-center">
                <Server className="w-4 h-4 text-blue-300" />
              </div>
              <h2 className="text-zinc-200 font-medium tracking-tight">
                AI‑Native Platform Performance
              </h2>
            </div>
            <span className="text-xs text-zinc-500">Scale & Security</span>
          </div>
          <CardContent className="p-5">
            <div className="grid grid-cols-2 gap-3">
              {platformMetrics.map((metric, i) => (
                <div
                  key={i}
                  className="p-3 rounded-lg bg-zinc-900 ring-1 ring-zinc-800"
                >
                  <p className="text-[11px] text-zinc-500">{metric.label}</p>
                  <p
                    className={cn(
                      "text-xl font-medium",
                      metric.color || "text-zinc-200"
                    )}
                  >
                    {metric.value}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="p-3 rounded-lg bg-zinc-900 ring-1 ring-zinc-800 flex items-center gap-2">
                <Network className="w-4 h-4 text-zinc-300" />
                <p className="text-xs text-zinc-300">Neural Service Mesh</p>
              </div>
              <div className="p-3 rounded-lg bg-zinc-900 ring-1 ring-zinc-800 flex items-center gap-2">
                <Atom className="w-4 h-4 text-zinc-300" />
                <p className="text-xs text-zinc-300">Quantum Security</p>
              </div>
              <div className="p-3 rounded-lg bg-zinc-900 ring-1 ring-zinc-800 flex items-center gap-2">
                <Activity className="w-4 h-4 text-zinc-300" />
                <p className="text-xs text-zinc-300">Real‑Time Intelligence</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Featured Properties */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex items-center justify-between">
          <h2 className="text-zinc-100 text-2xl font-semibold tracking-tight">
            Featured Properties
          </h2>
          <Button
            variant="outline"
            className="text-sm text-zinc-200 bg-zinc-900 ring-1 ring-zinc-700 hover:bg-zinc-800"
          >
            View All Properties
          </Button>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {featuredProperties.map((property) => (
            <Card
              key={property.id}
              className="bg-zinc-900/80 ring-1 ring-zinc-800/60 backdrop-blur overflow-hidden"
            >
              <div className="h-40 bg-gradient-to-br from-zinc-800 to-zinc-900" />
              <CardContent className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-zinc-200 font-medium tracking-tight">
                    {property.title}
                  </h3>
                  <span className="text-zinc-100 text-sm">
                    ${property.price.toLocaleString()}
                  </span>
                </div>
                <p className="text-xs text-zinc-500 mt-1">{property.location}</p>
                <div className="mt-3 flex items-center gap-4 text-xs text-zinc-300">
                  <span className="inline-flex items-center gap-1">
                    <Bed className="w-4 h-4" />
                    {property.beds} beds
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <ShowerHead className="w-4 h-4" />
                    {property.baths} baths
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Ruler className="w-4 h-4" />
                    {property.sqft.toLocaleString()} sqft
                  </span>
                </div>
                <Button className="mt-4 w-full bg-zinc-100 text-zinc-900 hover:bg-white">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Advantage + How It Works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid lg:grid-cols-2 gap-6">
        {/* Advantage */}
        <Card className="bg-zinc-900/80 ring-1 ring-zinc-800/60 backdrop-blur shadow-2xl p-6">
          <h2 className="text-zinc-100 text-2xl font-semibold tracking-tight">
            The HAUS Advantage
          </h2>
          <p className="text-sm text-zinc-400 mt-1">Intelligent real estate</p>
          <div className="mt-5 grid sm:grid-cols-2 gap-4">
            {advantages.map((advantage, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-zinc-900 ring-1 ring-zinc-800"
              >
                <div className="flex items-center gap-2">
                  {getIcon(advantage.icon, "w-4 h-4 text-zinc-300")}
                  <p className="text-zinc-200 text-sm font-medium">
                    {advantage.title}
                  </p>
                </div>
                <p className="text-xs text-zinc-500 mt-1">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </Card>

        {/* How It Works */}
        <Card className="bg-zinc-900/80 ring-1 ring-zinc-800/60 backdrop-blur shadow-2xl p-6">
          <h2 className="text-zinc-100 text-2xl font-semibold tracking-tight">
            How HAUS Works
          </h2>
          <div className="mt-5 space-y-4">
            {howItWorks.map((step, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-zinc-900 ring-1 ring-zinc-800"
              >
                <div className="flex items-start gap-3">
                  <span className="text-zinc-200 text-sm px-2 py-1 rounded-md bg-zinc-800 ring-1 ring-zinc-700">
                    {step.number}
                  </span>
                  <div>
                    <p className="text-zinc-200 text-sm font-medium">{step.title}</p>
                    <p className="text-xs text-zinc-500 mt-1">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <h2 className="text-zinc-100 text-2xl font-semibold tracking-tight">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {testimonials.map((testimonial, i) => (
            <Card
              key={i}
              className="bg-zinc-900/80 ring-1 ring-zinc-800/60 backdrop-blur p-5"
            >
              <p className="text-sm text-zinc-300">"{testimonial.quote}"</p>
              <div className="mt-4 text-xs text-zinc-500">
                <p className="text-zinc-300">{testimonial.author}</p>
                <p>{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
        <Card className="bg-zinc-900/80 ring-1 ring-zinc-800/60 backdrop-blur p-6 text-center">
          <h2 className="text-zinc-100 text-2xl font-semibold tracking-tight">
            Welcome to the new home of homes.
          </h2>
          <p className="text-sm text-zinc-400 mt-1">
            Join the HAUS waitlist for early access.
          </p>
          <form className="mt-5 flex flex-col sm:flex-row gap-3 justify-center">
            <input
              type="email"
              placeholder="your.email@example.com"
              className="w-full sm:w-2/3 px-4 py-2.5 rounded-lg bg-zinc-950 ring-1 ring-zinc-800 text-zinc-200 placeholder-zinc-500 focus:outline-none focus:ring-zinc-600"
            />
            <Button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-zinc-100 text-zinc-900 hover:bg-white"
            >
              <MailPlus className="w-4 h-4" />
              Request Early Access
            </Button>
          </form>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <HausLogo />
            <span className="text-zinc-300 text-sm">HAUS</span>
          </Link>
          <div className="flex items-center gap-4 text-xs">
            <Link
              href="#"
              className="text-zinc-400 hover:text-zinc-200 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-zinc-400 hover:text-zinc-200 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-zinc-400 hover:text-zinc-200 transition-colors"
            >
              Contact Us
            </Link>
          </div>
          <p className="text-xs text-zinc-500">
            © 2025 The HAUS Group. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
