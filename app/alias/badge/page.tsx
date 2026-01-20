"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Menu,
  Code2,
  Rocket,
  Cpu,
  ShieldCheck,
  ArrowUpRight,
  ArrowRight,
  ArrowUp,
  Plus,
  Minus,
  Brain,
  Zap,
  TrendingUp,
  Shield,
  BarChart3,
  Target,
  Lightbulb,
  Check,
  Mail,
  Phone,
  Github,
  Twitter,
  Linkedin,
  Send,
  Sparkles,
  BadgeCheck,
  CheckCircle2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"

interface NavLink {
  name: string
  href: string
}

interface TechBadge {
  icon: React.ComponentType<{ className?: string }>
  label: string
}

interface WorkItem {
  id: number
  category: string
  title: string
  image: string
  description: string
  status: string
  statusColor: "emerald" | "amber"
}

interface AIAgent {
  name: string
  category: string
  icon: React.ComponentType<{ className?: string }>
  image: string
}

interface Capability {
  id: string
  title: string
  description: string
  tools?: string[]
  image?: string
}

interface PlatformFeature {
  icon: React.ComponentType<{ className?: string }>
  label: string
}

/**
 * ALIAS Interactive Badge Page
 *
 * A modern, interactive landing page featuring:
 * - Dynamic badge hero section with embedded images
 * - AI-powered workforce showcase with team grid
 * - Capabilities accordion with expandable sections
 * - Work showcase with hover effects
 * - Platform features with cards
 * - Contact form with validation
 * - Mobile-first responsive design
 *
 * @example
 * ```tsx
 * import BadgePage from './alias/badge/page'
 * <BadgePage />
 * ```
 */
export default function BadgePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [currentYear, setCurrentYear] = useState(2025)

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowToast(true)
    setTimeout(() => setShowToast(false), 2600)
  }

  const handleSubscribeSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowToast(true)
    setTimeout(() => setShowToast(false), 2600)
  }

  const navLinks: NavLink[] = [
    { name: "Solutions", href: "#solutions" },
    { name: "Platform", href: "#platform" },
    { name: "Resources", href: "#resources" },
    { name: "Contact", href: "#contact" },
  ]

  const techBadges: TechBadge[] = [
    { icon: Code2, label: "TypeScript-first" },
    { icon: Rocket, label: "Edge-ready" },
    { icon: Cpu, label: "AI-native" },
    { icon: ShieldCheck, label: "Secure by default" },
  ]

  const workItems: WorkItem[] = [
    {
      id: 1,
      category: "SaaS - Analytics",
      title: "Telemetry Cloud",
      image: "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a64e6770-50ba-4159-829d-d5f20fab2595_800w.jpg",
      description: "Advanced analytics platform for SaaS companies. Real-time insights, custom dashboards, and predictive analytics to drive growth.",
      status: "Live Project",
      statusColor: "emerald",
    },
    {
      id: 2,
      category: "DevEx - Docs",
      title: "Launchpad Portal",
      image: "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/dc543ce0-b776-4e3a-a6d5-933229659050_800w.jpg",
      description: "Comprehensive developer experience platform with interactive documentation, API testing, and seamless onboarding flows.",
      status: "In Development",
      statusColor: "amber",
    },
    {
      id: 3,
      category: "AI - Product",
      title: "Pair AI",
      image: "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/51178af2-893c-4b8c-98ab-8023bddbc403_800w.jpg",
      description: "Intelligent code assistant with context-aware suggestions, automated testing, and collaborative programming features.",
      status: "Beta Release",
      statusColor: "emerald",
    },
    {
      id: 4,
      category: "Fintech - Platform",
      title: "LedgerFlow",
      image: "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/1459a924-0e1f-45a6-a3e5-87850677a537_800w.jpg",
      description: "Modern billing platform with automated invoicing, subscription management, and real-time financial reporting for growing businesses.",
      status: "Production Ready",
      statusColor: "emerald",
    },
    {
      id: 5,
      category: "Infra - DevOps",
      title: "Runway Pipelines",
      image: "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6d5e0510-9196-4a94-b2d3-5e95eddcbce9_800w.jpg",
      description: "Advanced CI/CD pipeline for mobile applications with automated testing, deployment orchestration, and rollback capabilities.",
      status: "Enterprise Scale",
      statusColor: "emerald",
    },
    {
      id: 6,
      category: "Realtime - Collab",
      title: "Syncboard",
      image: "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c8e6a60a-b3fb-4b34-83c2-ead36a2abc7f_800w.jpg",
      description: "Real-time collaboration platform with live cursors, shared workspaces, and conflict-free synchronization across teams.",
      status: "Coming Soon",
      statusColor: "amber",
    },
  ]

  const aiAgents: AIAgent[] = [
    {
      name: "CogniCore.AI",
      category: "Deep Learning",
      icon: Brain,
      image: "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6d09277c-88d3-4681-8a06-18307469ce9f_800w.jpg",
    },
    {
      name: "FlowMaster",
      category: "Process Engine",
      icon: Zap,
      image: "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0e60f1bd-bde0-4ec4-8c23-24383a8b650a_800w.jpg",
    },
    {
      name: "DataMind Pro",
      category: "Data Intelligence",
      icon: TrendingUp,
      image: "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ac4a631c-975f-4482-9cef-2a1f99a48178_800w.jpg",
    },
    {
      name: "SecureGuard AI",
      category: "Cyber Defense",
      icon: Shield,
      image: "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0129262d-84f8-4262-b816-efd622faf4e8_800w.jpg",
    },
  ]

  const capabilities: Capability[] = [
    {
      id: "001",
      title: "Full-stack product development",
      description: "Architecture, data, APIs, and slick UIs. We own delivery and keep velocity high with tight CI/CD.",
      tools: ["TypeScript", "React", "Node", "Postgres", "GraphQL"],
      image: "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/1d73ea37-684c-4cd9-97fd-02bf2d7528d4_320w.jpg",
    },
    {
      id: "002",
      title: "Frontend systems & performance",
      description: "Design systems, accessibility, animations, and Lighthouse 95+. We build maintainable interfaces that feel instant.",
    },
    {
      id: "003",
      title: "AI integrations & agents",
      description: "Retrieval, function calling, evals, and production monitoring. We make AI useful, reliable, and fast.",
    },
    {
      id: "004",
      title: "Cloud & DevOps",
      description: "Infra-as-code, observability, and autoscaling across clouds. Zero-downtime releases and strong security posture.",
    },
  ]

  const revenueFeatures: PlatformFeature[] = [
    { icon: BarChart3, label: "Real-time Metrics" },
    { icon: Target, label: "Growth Targets" },
    { icon: Zap, label: "Auto Optimization" },
    { icon: ShieldCheck, label: "Secure Platform" },
  ]

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 antialiased font-[family-name:var(--font-inter)]">
      {/* Toast Notification */}
      {showToast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-in slide-in-from-bottom-4 fade-in duration-300"
        >
          <div className="inline-flex items-center gap-3 rounded-xl bg-neutral-900 text-white px-4 py-3 ring-1 ring-white/10 shadow-xl">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <span className="text-sm">Thanks - we will be in touch shortly.</span>
          </div>
        </div>
      )}

      {/* Badge: Full-width hero */}
      <section className="relative w-full px-4 sm:px-6 md:px-10 mt-12 mb-12 max-w-7xl mx-auto">
        <Card className="relative -mt-2 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)] bg-white/90 border-neutral-200/70 rounded-[40px] border-t backdrop-blur-xl overflow-hidden">
          <CardContent className="p-4 sm:p-6 md:p-10 pt-8 pb-10">
            {/* Header */}
            <header className="flex gap-4 w-full mb-8 items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-lg font-semibold text-black tracking-tight">RELAY</span>
              </div>
              <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-700">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="hover:text-black transition-colors font-medium"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  className="md:hidden h-10 w-10 rounded-lg ring-1 ring-black/20 bg-black text-white hover:bg-neutral-800"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <Menu className="h-5 w-5" />
                </Button>
                <Button
                  className="bg-gradient-to-r from-neutral-800 to-neutral-900 text-white rounded-full px-6 py-2.5 shadow-sm ring-1 ring-black/10 hover:from-neutral-700 hover:to-neutral-800"
                >
                  Sign In
                </Button>
              </div>
            </header>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <div className="md:hidden border-t border-neutral-200 bg-white mb-8 -mx-4 px-4 py-4">
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-sm font-medium text-neutral-700 hover:text-black"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </div>
            )}

            {/* Headline */}
            <h1 className="max-w-3xl text-4xl sm:text-5xl md:text-6xl lg:text-8xl leading-[1.05] font-normal text-neutral-900 tracking-tighter">
              We&apos;re Relay,
              <Image
                src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/af757665-5346-4907-89cf-3b2b013be82e_320w.jpg"
                alt="Alex portrait"
                width={96}
                height={64}
                className="inline-block align-middle h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-24 ring-1 ring-neutral-200 object-cover rounded-xl mx-2"
              />
              {" "}a studio crafting digital experiences{" "}
              <Image
                src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f5a1c4ed-b9c4-4c15-94bd-68b789282cda_320w.jpg"
                alt="Design interface preview"
                width={96}
                height={64}
                className="inline-block align-middle h-10 w-12 sm:h-12 sm:w-16 md:h-16 md:w-24 ring-1 ring-neutral-200 object-cover rounded-xl mx-2"
              />
              {" "}and brands
            </h1>

            {/* Subcopy */}
            <p className="mt-4 text-base sm:text-lg text-neutral-600 max-w-[85ch]">
              From idea to production. Product strategy, engineering, and delivery - paired with obsessive attention to performance, DX, and accessibility.
            </p>

            {/* Tech Badges */}
            <div className="mt-6 flex flex-wrap gap-2.5">
              {techBadges.map((badge, index) => {
                const Icon = badge.icon
                return (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="gap-2 rounded-full bg-neutral-100 text-neutral-800 text-xs px-3 py-1.5 ring-1 ring-neutral-200"
                  >
                    <Icon className="w-3.5 h-3.5 text-neutral-600" />
                    {badge.label}
                  </Badge>
                )
              })}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                size="lg"
                className="group bg-gradient-to-tr from-neutral-900 to-neutral-800 text-white rounded-full px-6 py-3 shadow-lg shadow-neutral-900/20 ring-1 ring-black/10 hover:-translate-y-0.5 transition-all"
                asChild
              >
                <Link href="#contact">
                  Start a project
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/25 ml-3">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full bg-neutral-100/60 border-neutral-200 hover:bg-neutral-100 px-6 py-3"
                asChild
              >
                <Link href="#work">View work</Link>
              </Button>
            </div>

            {/* AI Workforce Section */}
            <section className="bg-zinc-900 border border-zinc-800 rounded-3xl mt-8 p-6 sm:p-8 relative overflow-hidden">
              {/* Background dividers */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-600 to-transparent" />
                <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-600 to-transparent" />
                <div className="absolute top-0 bottom-0 left-1/3 w-px bg-gradient-to-b from-transparent via-zinc-600 to-transparent" />
                <div className="absolute top-0 bottom-0 right-1/3 w-px bg-gradient-to-b from-transparent via-zinc-600 to-transparent" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-start relative z-10">
                {/* Left: Heading + copy */}
                <div className="flex flex-col justify-between min-h-full">
                  <div>
                    <span className="text-sm font-normal text-zinc-500">
                      Next Generation Technology
                    </span>
                    <h2 className="text-[44px] sm:text-6xl lg:text-7xl leading-[0.9] text-zinc-100 mt-2 font-medium tracking-tighter">
                      Introducing our AI-powered workforce.
                    </h2>

                    {/* Plus markers with divider */}
                    <div className="mt-8 relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full h-px bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800" />
                      </div>
                      <div className="hidden sm:grid grid-cols-3 gap-6 text-zinc-600 bg-zinc-900 px-4 relative">
                        {["Advanced Intelligence", "Seamless Workflow", "Infinite Scale"].map(
                          (label, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <Plus className="h-4 w-4" strokeWidth={1.5} />
                              <span className="text-sm font-normal">{label}</span>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <p className="text-sm text-zinc-100 font-medium tracking-tight">
                        Experience the future today
                      </p>
                      <p className="mt-1 text-sm text-zinc-400">
                        Discover how our intelligent AI agents revolutionize productivity and transform business operations at every scale.
                      </p>
                      <Button
                        variant="secondary"
                        className="mt-4 bg-zinc-100 text-zinc-900 hover:bg-zinc-200 rounded-full h-10"
                      >
                        Explore Capabilities
                        <span className="inline-flex h-2 w-2 rounded-full bg-zinc-900 ml-2" />
                      </Button>
                    </div>

                    {/* Vertical divider */}
                    <div className="relative">
                      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-zinc-700 to-transparent hidden sm:block" />
                      <p className="text-base text-zinc-300 leading-relaxed sm:text-right sm:pl-8">
                        Our breakthrough technology merges{" "}
                        <span className="font-medium text-zinc-100">
                          artificial intelligence excellence
                        </span>{" "}
                        with enterprise-grade solutions that evolve with your business needs.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right: Team grid */}
                <div className="grid grid-cols-2 gap-4 relative">
                  {aiAgents.map((agent, index) => {
                    const Icon = agent.icon
                    return (
                      <article
                        key={index}
                        className="relative overflow-hidden h-[200px] bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-800 rounded-2xl group"
                      >
                        <div
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                          style={{ backgroundImage: `url(${agent.image})` }}
                        />
                        <div className="absolute top-3 left-3">
                          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-zinc-100/90 text-zinc-900 border border-zinc-700">
                            <Icon className="h-3.5 w-3.5" />
                          </span>
                        </div>
                        <div className="absolute top-3 right-3">
                          <span className="px-2 py-1 rounded-md bg-zinc-900/60 backdrop-blur text-[11px] text-zinc-300 font-normal border border-zinc-800">
                            {agent.category}
                          </span>
                        </div>
                        <div className="absolute bottom-3 left-3 right-3">
                          <p className="text-white text-lg font-medium tracking-tight leading-tight">
                            {agent.name}
                          </p>
                        </div>
                      </article>
                    )
                  })}
                </div>
              </div>
            </section>
          </CardContent>
        </Card>
      </section>

      {/* Work Section */}
      <section id="work" className="w-full px-4 sm:px-6 md:px-10 py-12 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-6 sm:mb-8">
          <div>
            <p className="text-[11px] sm:text-xs uppercase text-neutral-500 tracking-[0.2em]">
              (01) Ship Log
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight">
              Recent builds we&apos;re proud of.
            </h2>
          </div>
          <Button
            variant="outline"
            className="hidden sm:inline-flex items-center gap-2 ring-1 ring-neutral-200 hover:shadow text-sm text-neutral-700 bg-white rounded-full px-4 py-2"
            asChild
          >
            <Link href="#work">
              Explore all
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {workItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden ring-1 ring-neutral-200 cursor-pointer bg-white rounded-3xl shadow-sm h-80"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-xs text-white/70">{item.category}</p>
                <div className="mt-1 flex items-center justify-between">
                  <h3 className="text-base sm:text-lg font-semibold tracking-tight text-white">
                    {item.title}
                  </h3>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-900">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex bg-black/40 p-6 backdrop-blur-md items-center justify-center">
                <div className="transform group-hover:translate-y-0 transition-transform duration-300 delay-75 text-center translate-y-8">
                  <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/90 leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className={cn(
                    "inline-flex items-center gap-2 rounded-full bg-white/20 text-white text-xs px-3 py-1.5 backdrop-blur-sm",
                    item.statusColor === "emerald" && "bg-emerald-400/20",
                    item.statusColor === "amber" && "bg-amber-400/20"
                  )}>
                    <span className={cn(
                      "h-2 w-2 rounded-full",
                      item.statusColor === "emerald" && "bg-emerald-400",
                      item.statusColor === "amber" && "bg-amber-400"
                    )} />
                    {item.status}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-10 flex justify-center">
          <Button
            variant="outline"
            className="rounded-full bg-white ring-1 ring-neutral-200 px-5 py-3 text-sm text-neutral-700 hover:shadow"
            asChild
          >
            <Link href="#work">
              View all work
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="w-full px-4 sm:px-6 md:px-10 py-12 max-w-7xl mx-auto">
        <Card className="relative overflow-hidden rounded-3xl ring-1 ring-neutral-800 bg-neutral-900">
          <CardContent className="relative z-10 p-5 sm:p-8 md:p-12">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2 text-white/80 text-xs">
                <Sparkles className="w-3.5 h-3.5" />
                <span>What we do</span>
              </div>
              <h2 className="text-5xl sm:text-6xl md:text-7xl text-white font-semibold tracking-tight leading-[1.05]">
                Capabilities.
              </h2>
            </div>

            <div className="mt-8 bg-white/5 backdrop-blur-3xl rounded-2xl ring-1 ring-white/10 overflow-hidden">
              {capabilities.map((capability, index) => (
                <details key={index} className="group" open={index === 0}>
                  <summary className="list-none cursor-pointer">
                    <div className={cn(
                      "flex items-center gap-4 justify-between p-4 sm:p-5 hover:bg-white/5 transition-colors",
                      index > 0 && "border-t border-white/10"
                    )}>
                      <div className="text-white/50 text-[11px]">({capability.id})</div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white font-semibold tracking-tight">
                          {capability.title}
                        </p>
                      </div>
                      <div className="shrink-0 h-8 w-8 rounded-full bg-white/10 ring-1 ring-white/15 flex items-center justify-center text-white">
                        <Plus className="w-4 h-4 group-open:hidden" />
                        <Minus className="w-4 h-4 hidden group-open:block" />
                      </div>
                    </div>
                  </summary>
                  <div className="p-4 sm:p-6">
                    {capability.tools && capability.image ? (
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                        <div className="lg:col-span-7 flex items-start gap-4">
                          <div className="shrink-0 h-14 w-20 rounded-xl overflow-hidden ring-1 ring-white/20 bg-white/10 relative">
                            <Image
                              src={capability.image}
                              alt="Product dev"
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="text-white font-semibold tracking-tight">
                              From spec to shipping
                            </h3>
                            <p className="text-neutral-300 text-sm mt-1">
                              {capability.description}
                            </p>
                          </div>
                        </div>
                        <div className="lg:col-span-5">
                          <p className="text-white/80 text-xs">Toolbox</p>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {capability.tools.map((tool, i) => (
                              <span
                                key={i}
                                className="inline-flex items-center rounded-full bg-white text-neutral-900 text-xs px-2.5 py-1"
                              >
                                {tool}
                              </span>
                            ))}
                            <span className="inline-flex items-center rounded-full bg-white/80 text-neutral-900 text-xs px-2.5 py-1">
                              + more
                            </span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <p className="text-neutral-300 text-sm max-w-[90ch]">
                        {capability.description}
                      </p>
                    )}
                    {index === 0 && (
                      <div className="mt-6">
                        <Button
                          className="bg-amber-500 text-neutral-900 hover:bg-amber-400 rounded-xl px-4 py-2.5 shadow-sm"
                          asChild
                        >
                          <Link href="#contact">
                            Get started
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                      </div>
                    )}
                  </div>
                </details>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Platform Section */}
      <section id="platform" className="w-full px-4 sm:px-6 md:px-10 py-12 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-6 sm:mb-8">
          <div>
            <p className="text-[11px] sm:text-xs uppercase text-neutral-500 tracking-[0.2em]">
              (02) Platform
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">
              Scale your business operations.
            </h2>
          </div>
          <Button
            variant="outline"
            className="hidden sm:inline-flex items-center gap-2 ring-1 ring-neutral-200 hover:shadow text-sm text-neutral-700 bg-white rounded-full px-4 py-2"
            asChild
          >
            <Link href="#contact">
              Explore platform
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Revenue & Analytics */}
          <article className="relative bg-white ring-1 ring-neutral-200 rounded-3xl p-5 sm:p-8 flex flex-col hover:-translate-y-0.5 transition-transform duration-200">
            <div className="flex items-center gap-3 mb-4">
              <Badge
                variant="secondary"
                className="gap-2 bg-emerald-400/10 text-emerald-600 border-0"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Revenue Engine
              </Badge>
            </div>
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 leading-tight mb-4">
              Revenue & Analytics
            </h3>
            <p className="text-neutral-600 text-base leading-relaxed mb-6 flex-1">
              Transform your business with intelligent revenue tracking, predictive analytics, and automated growth optimization.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {revenueFeatures.map((feature, i) => {
                const Icon = feature.icon
                return (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 ring-1 ring-neutral-200 text-xs text-neutral-800 bg-zinc-100 rounded-xl py-2 px-3.5"
                  >
                    <Icon className="w-4 h-4 text-neutral-700" />
                    {feature.label}
                  </span>
                )
              })}
            </div>
          </article>

          {/* Team Collaboration */}
          <article className="relative bg-white ring-1 ring-neutral-200 rounded-3xl p-5 sm:p-8 flex flex-col hover:-translate-y-0.5 transition-transform duration-200">
            <div className="flex items-center gap-3 mb-4">
              <Badge
                variant="secondary"
                className="gap-2 bg-amber-400/10 text-amber-600 border-0"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                Collaboration Hub
              </Badge>
            </div>
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 leading-tight mb-4">
              Team Collaboration
            </h3>
            <p className="text-neutral-600 text-base leading-relaxed mb-6 flex-1">
              Streamline teamwork with unified workspaces, real-time collaboration, and intelligent project management.
            </p>

            {/* Team member stack */}
            <div className="mt-auto relative">
              <div className="absolute inset-x-6 -top-1.5 h-12 rounded-xl bg-zinc-100/60 ring-1 ring-neutral-200" />
              <div className="relative">
                <div className="flex items-center gap-3 rounded-2xl bg-zinc-100 ring-1 ring-neutral-200 p-4">
                  <div className="flex -space-x-2">
                    <Image
                      src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/096dab35-ecaf-418f-a932-5b514543b035_320w.jpg"
                      alt="Team member"
                      width={32}
                      height={32}
                      className="h-8 w-8 rounded-full object-cover ring-2 ring-white"
                    />
                    <Image
                      src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/fc935cb1-ef8c-4e13-8bce-c3fd8e402f63_320w.jpg"
                      alt="Team member"
                      width={32}
                      height={32}
                      className="h-8 w-8 rounded-full object-cover ring-2 ring-white"
                    />
                    <div className="h-8 w-8 rounded-full bg-neutral-200 ring-2 ring-white flex items-center justify-center">
                      <span className="text-xs font-medium text-neutral-600">+3</span>
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-neutral-900 font-medium tracking-tight text-sm">
                      Team Alpha
                    </p>
                    <p className="text-xs text-neutral-600">5 active projects - Online</p>
                  </div>
                  <div className="h-2 w-2 rounded-full bg-emerald-400" />
                </div>
              </div>
            </div>
          </article>

          {/* AI-Powered Insights */}
          <article className="relative bg-white ring-1 ring-neutral-200 rounded-3xl p-5 sm:p-8 flex flex-col hover:-translate-y-0.5 transition-transform duration-200">
            <div className="flex items-center gap-3 mb-4">
              <Badge
                variant="secondary"
                className="gap-2 bg-indigo-400/10 text-indigo-600 border-0"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                AI Intelligence
              </Badge>
            </div>
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 leading-tight mb-4">
              AI-Powered Insights
            </h3>
            <p className="text-neutral-600 text-base leading-relaxed mb-6 flex-1">
              Leverage artificial intelligence for predictive analytics, automated decision-making, and strategic insights.
            </p>

            {/* AI insights panel */}
            <div className="mt-auto">
              <div className="rounded-2xl bg-zinc-100 ring-1 ring-neutral-200 p-4">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-medium text-neutral-900 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
                    AI Analysis
                  </p>
                  <span className="text-xs font-medium text-indigo-600">Active</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between px-3.5 py-2 rounded-lg bg-white/60 ring-1 ring-neutral-200">
                    <span className="text-sm text-neutral-600 flex items-center gap-2">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
                      Performance Score
                    </span>
                    <span className="text-sm font-medium text-neutral-900">94%</span>
                  </div>
                  <div className="flex items-center justify-between px-3.5 py-2 rounded-lg bg-white/60 ring-1 ring-neutral-200">
                    <span className="text-sm text-neutral-600 flex items-center gap-2">
                      <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                      Recommendations
                    </span>
                    <span className="text-sm font-medium text-neutral-900">12 new</span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* CTA section */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 bg-neutral-50 rounded-2xl ring-1 ring-neutral-200">
          <div>
            <h3 className="text-lg font-semibold text-neutral-900 tracking-tight">
              Ready to transform your operations?
            </h3>
            <p className="text-sm text-neutral-600 mt-1">
              Join thousands of businesses scaling with our platform.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="rounded-xl bg-white ring-1 ring-neutral-200 hover:shadow"
              asChild
            >
              <Link href="#work">View case studies</Link>
            </Button>
            <Button
              className="rounded-xl bg-neutral-900 text-white hover:bg-neutral-800 shadow"
              asChild
            >
              <Link href="#contact">
                Get started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="w-full px-4 sm:px-6 md:px-10 py-12 max-w-7xl mx-auto">
        <div className="relative overflow-hidden bg-neutral-900 rounded-3xl">
          <div className="relative z-10 p-8 sm:p-12 md:p-16 pt-12 pb-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 pb-12 border-b border-white/10">
              <div className="lg:col-span-4">
                <div className="flex items-center gap-2 mb-4">
                  <BadgeCheck className="w-5 h-5 text-white/80" />
                  <h3 className="text-2xl font-semibold text-white tracking-tight">
                    Relay Dev Studio
                  </h3>
                </div>
                <p className="text-white/70 max-w-3xl">
                  We build ambitious products with small, senior teams. Tell us a bit about your project and we will get back within one business day.
                </p>

                {/* Contact Form */}
                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 md:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="space-y-4">
                      <Badge
                        variant="outline"
                        className="gap-2 border-emerald-300/20 bg-emerald-400/10 text-emerald-300"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Booking Q4
                      </Badge>
                      <h4 className="text-white font-semibold tracking-tight">
                        Start a project
                      </h4>
                      <ul className="space-y-2 text-sm text-neutral-300">
                        {[
                          "Senior engineers and designers only - no handoffs, no fluff.",
                          "Transparent weekly demos, metrics, and delivery plans.",
                          "Security, accessibility, and performance baked-in.",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center gap-3 pt-2 text-sm">
                        <a
                          href="mailto:hello@relay.dev"
                          className="inline-flex items-center gap-2 text-white hover:text-amber-300 transition"
                        >
                          <Mail className="w-4 h-4" />
                          hello@relay.dev
                        </a>
                        <span className="text-white/20">-</span>
                        <a
                          href="tel:+14155551234"
                          className="inline-flex items-center gap-2 text-white hover:text-amber-300 transition"
                        >
                          <Phone className="w-4 h-4" />
                          +1 (415) 555-1234
                        </a>
                      </div>
                    </div>

                    <form
                      onSubmit={handleContactSubmit}
                      className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4"
                    >
                      <div className="sm:col-span-1">
                        <Label htmlFor="name" className="block text-xs font-medium text-white/80 mb-1">
                          Your name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          placeholder="Jane Doe"
                          className="w-full bg-white/10 border-white/10 text-white placeholder:text-white/40 focus-visible:ring-amber-400/60 focus-visible:ring-2 rounded-xl"
                        />
                      </div>
                      <div className="sm:col-span-1">
                        <Label htmlFor="email" className="block text-xs font-medium text-white/80 mb-1">
                          Email
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="jane@company.com"
                          className="w-full bg-white/10 border-white/10 text-white placeholder:text-white/40 focus-visible:ring-amber-400/60 focus-visible:ring-2 rounded-xl"
                        />
                      </div>
                      <div className="sm:col-span-1">
                        <Label htmlFor="company" className="block text-xs font-medium text-white/80 mb-1">
                          Company
                        </Label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          placeholder="Acme Inc."
                          className="w-full bg-white/10 border-white/10 text-white placeholder:text-white/40 focus-visible:ring-amber-400/60 focus-visible:ring-2 rounded-xl"
                        />
                      </div>
                      <div className="sm:col-span-1">
                        <Label htmlFor="project-type" className="block text-xs font-medium text-white/80 mb-1">
                          Project type
                        </Label>
                        <Select name="projectType">
                          <SelectTrigger className="w-full bg-white/10 border-white/10 text-white focus-visible:ring-amber-400/60 focus-visible:ring-2 rounded-xl">
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent className="bg-neutral-900 border-white/10">
                            <SelectItem value="product" className="text-white focus:bg-white/10">
                              New product build
                            </SelectItem>
                            <SelectItem value="feature" className="text-white focus:bg-white/10">
                              Feature delivery
                            </SelectItem>
                            <SelectItem value="advisory" className="text-white focus:bg-white/10">
                              Advisory / audit
                            </SelectItem>
                            <SelectItem value="ai" className="text-white focus:bg-white/10">
                              AI integration
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="sm:col-span-2">
                        <Label htmlFor="message" className="block text-xs font-medium text-white/80 mb-1">
                          What are you building?
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          rows={4}
                          placeholder="A few sentences about your goals, timeline, and success metrics."
                          className="w-full bg-white/10 border-white/10 text-white placeholder:text-white/40 focus-visible:ring-amber-400/60 focus-visible:ring-2 rounded-xl resize-none"
                        />
                      </div>
                      <div className="sm:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                        <div className="flex gap-2 text-xs text-white/70 items-center">
                          <Checkbox
                            id="nda"
                            className="bg-white/10 border-white/20 data-[state=checked]:bg-amber-400 data-[state=checked]:border-amber-400"
                          />
                          <Label htmlFor="nda" className="cursor-pointer">
                            Please send an NDA
                          </Label>
                        </div>
                        <Button
                          type="submit"
                          className="inline-flex gap-2 border border-amber-300 hover:bg-amber-300 bg-amber-400 text-neutral-900 rounded-xl shadow"
                        >
                          <Send className="w-4 h-4" />
                          Send request
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 pt-12">
              <div>
                <h4 className="text-white/80 text-xs uppercase tracking-[0.2em]">Services</h4>
                <ul className="mt-3 space-y-2 text-sm">
                  {["Product Development", "Frontend Systems", "AI & Agents", "Cloud & DevOps"].map(
                    (item, i) => (
                      <li key={i}>
                        <Link
                          href="#work"
                          className="text-neutral-300 hover:text-white transition inline-flex items-center gap-2"
                        >
                          {item}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div>
                <h4 className="text-white/80 text-xs uppercase tracking-[0.2em]">Resources</h4>
                <ul className="mt-3 space-y-2 text-sm">
                  {["Case Studies", "Playgrounds", "Open Source", "Guides"].map((item, i) => (
                    <li key={i}>
                      <Link href="#" className="text-neutral-300 hover:text-white transition">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-white/80 text-xs uppercase tracking-[0.2em]">Company</h4>
                <ul className="mt-3 space-y-2 text-sm">
                  {["About", "Principles", "Contact", "Careers"].map((item, i) => (
                    <li key={i}>
                      <Link
                        href={item === "Contact" ? "#contact" : "#"}
                        className="text-neutral-300 hover:text-white transition"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs text-white/80 uppercase tracking-[0.2em]">Stay in touch</h4>
                <form onSubmit={handleSubscribeSubmit} className="mt-3 flex items-center gap-2">
                  <div className="relative flex-1">
                    <Mail className="w-4 h-4 text-white/40 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <Input
                      type="email"
                      name="subscribeEmail"
                      required
                      placeholder="you@example.com"
                      className="w-full bg-white/10 border-white/10 text-white placeholder:text-white/40 pl-9 rounded-xl focus-visible:ring-amber-400/60 focus-visible:ring-2 text-xs"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="sm"
                    className="bg-white text-neutral-900 hover:bg-white/90 border-white/80 rounded-xl whitespace-nowrap"
                  >
                    Join
                  </Button>
                </form>
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href="#"
                    aria-label="GitHub"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 text-white/80 hover:text-white hover:bg-white/10 transition"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    aria-label="X"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 text-white/80 hover:text-white hover:bg-white/10 transition"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 text-white/80 hover:text-white hover:bg-white/10 transition"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <p className="text-white/60 text-sm">
                {currentYear} Relay Dev Studio. All rights reserved.
              </p>
              <div className="flex items-center gap-4 text-white/60 text-sm">
                <Link href="#" className="hover:text-white transition">
                  Privacy
                </Link>
                <span className="hidden sm:block text-white/20">-</span>
                <Link href="#" className="hover:text-white transition">
                  Terms
                </Link>
                <span className="hidden sm:block text-white/20">-</span>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="hover:text-white transition inline-flex items-center gap-1"
                >
                  <ArrowUp className="w-4 h-4" />
                  Back to top
                </button>
              </div>
            </div>
          </div>

          {/* Decorative glows */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-16 -right-10 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -left-10 h-80 w-80 rounded-full bg-indigo-400/10 blur-3xl"
          />
        </div>
      </footer>
    </div>
  )
}
