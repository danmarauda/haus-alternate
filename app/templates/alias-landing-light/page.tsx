"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Menu,
  PenTool,
  Shapes,
  Code2,
  Film,
  ArrowRight,
  Sparkles,
  Activity,
  LayoutDashboard,
  Clapperboard,
  TrendingUp,
  Zap,
  ShieldCheck,
  Shield,
  Lock,
  Eye,
  FileCheck,
  Cpu,
  Check,
  Clock,
  ListChecks,
  CalendarPlus,
  Rocket,
  Gauge,
  Handshake,
  ArrowUpRight,
  Calendar,
  Send,
  Mail,
  Phone,
  Twitter,
  Instagram,
  Linkedin,
  Plus,
  X,
} from "lucide-react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

/**
 * Alias Landing Light Template
 *
 * Premium light-themed landing page for design agencies
 * Features hero section, portfolio showcase, services, differentiators, pricing, and contact form
 *
 * @example
 * ```tsx
 * import AliasLandingLightPage from './templates/alias-landing-light/page'
 * <AliasLandingLightPage />
 * ```
 */

type Service = {
  id: string
  title: string
  icon: any
}

type Project = {
  id: string
  title: string
  category: string
  imageSrc: string
  icon: any
  aspectRatio: string
}

type PricingFeature = {
  text: string
}

type PricingPlan = {
  id: string
  name: string
  price: string
  period: string
  description: string
  badge?: string
  featured?: boolean
  features: PricingFeature[]
  cta: string
}

export default function AliasLandingLightPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "25-50k",
    timeline: "asap",
    services: "Product Design",
    projectDetails: "",
  })

  const services: Service[] = [
    { id: "1", title: "Product Design", icon: PenTool },
    { id: "2", title: "Brand Systems", icon: Shapes },
    { id: "3", title: "Design Engineering", icon: Code2 },
    { id: "4", title: "Motion & 3D", icon: Film },
  ]

  const projects: Project[] = [
    {
      id: "1",
      title: "Arcadia OS",
      category: "Branding",
      imageSrc: "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c6bb21d7-3ce2-44b4-abbf-2b0d092cd7fc_800w.jpg",
      icon: Sparkles,
      aspectRatio: "aspect-[4/5]",
    },
    {
      id: "2",
      title: "Nimbus Finance",
      category: "Product",
      imageSrc: "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6dc04406-de49-4988-8d82-e1d9fe1d83c1_800w.jpg",
      icon: LayoutDashboard,
      aspectRatio: "aspect-[4/3]",
    },
    {
      id: "3",
      title: "Helix Care",
      category: "Health",
      imageSrc: "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9b13123e-ec51-4d3a-b994-c64aab4555ba_800w.jpg",
      icon: Activity,
      aspectRatio: "aspect-[4/3]",
    },
    {
      id: "4",
      title: "Lumen AI",
      category: "Motion",
      imageSrc: "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5ee0a38a-b5d3-4531-8793-98beed4af162_800w.jpg",
      icon: Clapperboard,
      aspectRatio: "aspect-[4/5]",
    },
  ]

  const pricingPlans: PricingPlan[] = [
    {
      id: "starter",
      name: "Starter Sprint",
      price: "$25k",
      period: "per 2-week sprint",
      description: "Best for focused features or MVP validation.",
      badge: "Quick start",
      features: [
        { text: "1 pod: Designer + Engineer" },
        { text: "Weekly demo + async updates" },
        { text: "Handoff or code-ready assets" },
      ],
      cta: "Start with Starter",
    },
    {
      id: "growth",
      name: "Growth Sprint",
      price: "$40k",
      period: "per 3-week sprint",
      description: "For multi-track work: design + build in parallel.",
      badge: "More velocity",
      featured: true,
      features: [
        { text: "2 pods: Design + Engineering" },
        { text: "Research, testing, and analytics setup" },
        { text: "Design system tokens + components" },
      ],
      cta: "Book a Growth sprint",
    },
    {
      id: "embedded",
      name: "Embedded Partner",
      price: "$12k",
      period: "per week",
      description: "Your senior squad integrated with your team.",
      badge: "Embedded",
      features: [
        { text: "Dedicated PM, Designers, Engineers" },
        { text: "Standups, roadmaps, repo access" },
        { text: "Priority support + fast turnarounds" },
      ],
      cta: "Discuss Embedded",
    },
  ]

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission
  }

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 antialiased">
      {/* Background Image Overlay */}
      <div
        className="absolute top-0 left-0 right-0 h-[920px] -z-10 blur-3xl bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f03d228e-5eab-4149-af94-7d6c5c2eb5c5_3840w.jpg)",
        }}
      />

      {/* Strap */}
      <div className="relative w-full overflow-hidden">
        <div className="flex w-full mx-auto justify-center" />
      </div>

      {/* Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto mt-12 mb-12 px-4 sm:px-6 md:px-10">
        {/* Header */}
        <header className="w-full">
          <div className="flex w-full mb-8 items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-lg font-semibold text-black tracking-tight" style={{ fontFamily: '"Playfair Display", serif' }}>
                RELAY
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-700">
              <Link href="#work" className="hover:text-black transition-colors font-medium">
                Work
              </Link>
              <Link href="#services" className="hover:text-black transition-colors font-medium">
                Services
              </Link>
              <Link href="#approach" className="hover:text-black transition-colors font-medium">
                Approach
              </Link>
              <Link href="#contact" className="hover:text-black transition-colors font-medium">
                Contact
              </Link>
            </nav>
            <div className="flex gap-3 items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg ring-1 ring-black/20 bg-black text-white hover:bg-neutral-800 transition-colors"
                aria-label="Open menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
              <button className="hidden md:inline-flex cursor-pointer text-sm text-white text-center bg-gradient-to-b from-neutral-700 to-neutral-900 border-0 rounded-full py-3 px-8 items-center justify-center shadow-lg hover:opacity-90 transition-opacity">
                Get Started
              </button>
            </div>
          </div>
        </header>

        {/* Headline */}
        <h1 className="max-w-3xl text-4xl sm:text-5xl md:text-6xl lg:text-8xl leading-[1.05] font-medium text-black tracking-tighter" style={{ fontFamily: '"Playfair Display", serif' }}>
          We design
          <Image
            alt="Product UI"
            src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0c07c30e-40d3-4e44-b2b4-f36565320508_800w.jpg"
            width={112}
            height={64}
            className="inline-block align-middle h-10 w-14 sm:h-12 sm:w-20 md:h-16 md:w-28 object-cover rounded-xl mx-2 shadow-lg"
          />
          brands, products, and websites that ship.
          <Image
            alt="Brand system"
            src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/75013a1d-ac6c-4409-9764-7d4b6db81eb3_320w.jpg"
            width={96}
            height={64}
            className="inline-block align-middle h-10 w-12 sm:h-12 sm:w-16 md:h-16 md:w-24 object-cover rounded-xl mx-2 shadow-lg"
          />
        </h1>

        {/* Subcopy */}
        <p className="max-w-3xl text-base sm:text-3xl text-black mt-4">
          Relay is a design and engineering studio partnering with ambitious teams to build category-defining experiences—from zero-to-one to scale. Senior-only, outcome-first, fast by default.
        </p>

        {/* Feature Badges */}
        <div className="flex flex-wrap gap-2.5 mt-24">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <span
                key={service.id}
                className="inline-flex items-center gap-2 text-xs text-white/90 bg-black/20 border border-white/20 rounded-full py-1.5 px-3 backdrop-blur"
              >
                <Icon className="w-[14px] h-[14px] text-white/90" />
                {service.title}
              </span>
            )
          })}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8">
          <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-b from-orange-500 to-orange-600 px-6 py-3 text-sm font-medium text-white shadow-lg transition-all hover:scale-105 active:scale-95">
            <span className="flex items-center gap-2">
              Get Started
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
          <Link
            href="#work"
            className="inline-flex items-center justify-center hover:bg-white/10 text-base font-medium text-white/90 bg-black/20 border border-white/10 rounded-full py-3 px-6 shadow-lg backdrop-blur transition-colors"
          >
            See our work
          </Link>
        </div>
      </section>

      {/* Work Highlights Section */}
      <section id="work" className="max-w-7xl bg-neutral-50 rounded-3xl mt-24 mb-24 mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8">
        {/* Background Dividers */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
          <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
          <div className="absolute top-0 bottom-0 left-1/3 w-px bg-gradient-to-b from-transparent via-neutral-300 to-transparent" />
          <div className="absolute top-0 bottom-0 right-1/3 w-px bg-gradient-to-b from-transparent via-neutral-300 to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-start relative z-10">
          {/* Left: Heading + Copy */}
          <div className="flex flex-col justify-between min-h-full">
            <div>
              <span className="text-sm font-normal text-neutral-500">Portfolio showcase</span>
              <h2 className="text-[44px] sm:text-6xl lg:text-7xl leading-[0.9] text-neutral-900 mt-2 font-medium tracking-tighter" style={{ fontFamily: '"Playfair Display", serif' }}>
                Projects that define categories and drive growth.
              </h2>

              {/* Markers */}
              <div className="mt-8 relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full h-px bg-gradient-to-r from-neutral-200 via-neutral-300 to-neutral-200" />
                </div>
                <div className="hidden sm:grid grid-cols-3 gap-6 text-neutral-600 bg-neutral-50 px-4 relative">
                  <div className="flex items-center gap-2">
                    <Plus className="h-4 w-4" />
                    <span className="text-sm font-normal">Brand Identity</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Plus className="h-4 w-4" />
                    <span className="text-sm font-normal">Product Design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Plus className="h-4 w-4" />
                    <span className="text-sm font-normal">Web Development</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full mt-10">
              <p className="text-sm font-medium text-neutral-900 tracking-tight">
                Impactful results across industries
              </p>
              <p className="text-sm text-neutral-600 mt-1 max-w-sm">
                From startup MVPs to enterprise transformations, our projects consistently deliver measurable outcomes and user engagement that drives business growth.
              </p>
              <Link
                href="#work"
                className="w-full inline-flex items-center justify-center gap-2 h-10 hover:bg-neutral-800 transition text-sm font-normal text-white bg-neutral-900 rounded-full mt-4 px-4 max-w-sm"
              >
                View all projects
                <span className="inline-flex h-2 w-2 rounded-full bg-white" />
              </Link>
            </div>
          </div>

          {/* Right: Project Grid */}
          <div className="grid grid-cols-2 gap-4 relative">
            {/* Left Column */}
            <div className="flex flex-col gap-4">
              {projects.slice(0, 2).map((project) => {
                const Icon = project.icon
                return (
                  <article
                    key={project.id}
                    className={`relative overflow-hidden ${project.aspectRatio} bg-cover border-neutral-200 border rounded-2xl group cursor-pointer`}
                    style={{ backgroundImage: `url(${project.imageSrc})` }}
                  >
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center justify-center gap-2 text-xs text-white/90 bg-white/10 border border-white/20 rounded-full p-1.5 backdrop-blur">
                        <Icon className="h-3.5 w-3.5" />
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border border-white/20 rounded-full py-1.5 px-3 backdrop-blur">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <p className="text-white text-lg font-medium tracking-tight leading-tight">
                        {project.title}
                      </p>
                    </div>
                  </article>
                )
              })}
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-4">
              {projects.slice(2).map((project) => {
                const Icon = project.icon
                return (
                  <article
                    key={project.id}
                    className={`relative overflow-hidden ${project.aspectRatio} bg-cover border-neutral-200 border rounded-2xl group cursor-pointer`}
                    style={{ backgroundImage: `url(${project.imageSrc})` }}
                  >
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center justify-center gap-2 text-xs text-white/90 bg-white/10 border border-white/20 rounded-full p-1.5 backdrop-blur">
                        <Icon className="h-3.5 w-3.5" />
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border border-white/20 rounded-full py-1.5 px-3 backdrop-blur">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <p className="text-white text-lg font-medium tracking-tight leading-tight">
                        {project.title}
                      </p>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-20">
        <div className="relative overflow-hidden rounded-3xl bg-white ring-1 ring-neutral-200 p-4 sm:p-6 md:p-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-8">
            <div>
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-neutral-500">(01) Innovation</p>
              <h2 className="sm:text-4xl md:text-5xl text-3xl text-neutral-900 mt-2 font-medium tracking-tighter" style={{ fontFamily: '"Playfair Display", serif' }}>
                Driving Success with Quantum Labs
              </h2>
            </div>
            <p className="text-sm sm:text-base text-neutral-600 max-w-[42ch]">
              Quantum Labs empowers startups and enterprises with cutting-edge solutions to accelerate growth, optimize performance, and scale seamlessly.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Large Card */}
            <Card className="lg:col-span-2 group relative overflow-hidden bg-white border-neutral-200 border rounded-2xl p-6">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-neutral-900 text-xl sm:text-2xl font-medium tracking-tighter">Real-Time Performance Analytics</h3>
                <span className="text-lg font-semibold text-emerald-600">99.2%</span>
              </div>
              <p className="text-sm text-neutral-600 mb-6">
                Monitor system performance, user engagement, and business metrics with our advanced analytics dashboard.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="relative h-[180px] rounded-xl bg-gradient-to-br from-blue-50 to-indigo-100 ring-1 ring-blue-200 overflow-hidden">
                  <div className="absolute left-4 top-4 flex -space-x-2">
                    <Image
                      className="h-8 w-8 ring-2 ring-white object-cover rounded-full"
                      src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/184099c3-3f6c-4f6f-a05a-830150bf75c1_320w.jpg"
                      alt="team member"
                      width={32}
                      height={32}
                    />
                    <Image
                      className="h-8 w-8 ring-2 ring-white object-cover rounded-full"
                      src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/292b814a-2c70-4f95-a74d-5a101fc0b698_320w.jpg"
                      alt="team member"
                      width={32}
                      height={32}
                    />
                    <Image
                      className="h-8 w-8 ring-2 ring-white object-cover rounded-full"
                      src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9e675575-668c-4087-8408-fa06dd33c5f0_320w.jpg"
                      alt="team member"
                      width={32}
                      height={32}
                    />
                  </div>
                  <div className="absolute left-4 bottom-4">
                    <span className="inline-flex items-center gap-2 text-[11px] text-blue-800 bg-white/90 rounded-full px-3 py-1.5 ring-1 ring-blue-200">
                      <TrendingUp className="w-3.5 h-3.5" />
                      Performance Insights
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between rounded-xl bg-gradient-to-r from-emerald-50 to-emerald-100 ring-1 ring-emerald-200 px-4 py-3">
                    <div className="flex items-center gap-3">
                      <span className="h-3 w-3 rounded-full bg-emerald-500" />
                      <span className="text-sm text-emerald-800 font-medium">System Health Check</span>
                    </div>
                    <span className="text-[11px] text-emerald-600">Active</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-gradient-to-r from-orange-50 to-orange-100 ring-1 ring-orange-200 px-4 py-3">
                    <div className="flex items-center gap-3">
                      <span className="h-3 w-3 rounded-full bg-orange-500" />
                      <span className="text-sm text-orange-800 font-medium">Load Balancing</span>
                    </div>
                    <span className="text-[11px] text-orange-600">Optimizing</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-gradient-to-r from-purple-50 to-purple-100 ring-1 ring-purple-200 px-4 py-3">
                    <div className="flex items-center gap-3">
                      <span className="h-3 w-3 rounded-full bg-purple-500" />
                      <div className="flex flex-col">
                        <span className="text-sm text-purple-800 font-medium">Data Processing</span>
                        <span className="text-[10px] text-purple-600">Real-time stream</span>
                      </div>
                    </div>
                    <span className="text-[11px] text-purple-600">Live</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-2 text-[11px] text-neutral-700 bg-neutral-100 rounded-full px-3 py-1 ring-1 ring-neutral-200">
                  <Zap className="w-3.5 h-3.5" />
                  Powered by AI
                </span>
                <span className="inline-flex items-center gap-2 text-[11px] text-neutral-700 bg-neutral-100 rounded-full px-3 py-1 ring-1 ring-neutral-200">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Secure & Compliant
                </span>
              </div>
            </Card>

            {/* Small Cards */}
            <Card className="group relative rounded-2xl border border-neutral-200 bg-white p-6">
              <h3 className="text-neutral-900 text-lg sm:text-xl tracking-tight font-medium">Smart Automation Hub</h3>
              <p className="mt-2 text-sm text-neutral-600">
                Streamline workflows and boost productivity with intelligent automation.
              </p>

              <div className="mt-6 rounded-xl bg-neutral-100 ring-1 ring-neutral-200 p-4">
                <div className="relative h-[120px] flex items-center justify-center">
                  <div className="text-center">
                    <Cpu className="w-12 h-12 text-indigo-500 mx-auto mb-2" />
                    <p className="text-xs text-neutral-600">Auto-Scaling Active</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2">
                <span className="inline-flex items-center gap-2 text-[11px] text-indigo-700 bg-indigo-50 rounded-full px-2 py-1 ring-1 ring-indigo-200">
                  <Cpu className="w-3.5 h-3.5" />
                  Auto-Scaling
                </span>
              </div>
            </Card>

            <Card className="group relative rounded-2xl border border-neutral-200 bg-white p-6">
              <h3 className="text-neutral-900 text-lg sm:text-xl tracking-tight font-medium">Enterprise Integration</h3>
              <p className="mt-2 text-sm text-neutral-600">
                Seamlessly connect with your existing tech stack and third-party services.
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between rounded-lg ring-1 ring-neutral-200 bg-neutral-50 px-3 py-2">
                  <span className="text-sm text-neutral-800">01 API Gateway Setup</span>
                  <Check className="text-emerald-500 w-4 h-4" />
                </div>
                <div className="flex items-center justify-between rounded-lg ring-1 ring-neutral-200 bg-neutral-50 px-3 py-2">
                  <span className="text-sm text-neutral-800">02 Data Synchronization</span>
                  <Check className="text-emerald-500 w-4 h-4" />
                </div>
                <div className="flex items-center justify-between rounded-lg ring-1 ring-orange-200 bg-orange-50 px-3 py-2">
                  <span className="text-sm text-neutral-800">03 Security Protocols</span>
                  <Clock className="text-orange-500 w-4 h-4" />
                </div>
                <div className="flex items-center justify-between rounded-lg ring-1 ring-neutral-200 bg-neutral-50 px-3 py-2">
                  <span className="text-sm text-neutral-800">04 Performance Optimization</span>
                  <Clock className="text-neutral-400 w-4 h-4" />
                </div>
              </div>
            </Card>

            {/* Security Card */}
            <Card className="lg:col-span-2 group relative overflow-hidden bg-white border-neutral-200 border rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-neutral-900 text-xl sm:text-2xl font-medium tracking-tighter">Advanced Security & Compliance</h3>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-2 text-[11px] text-emerald-700 bg-emerald-50 rounded-full px-2 py-1 ring-1 ring-emerald-200">
                    <Shield className="w-3.5 h-3.5" />
                    Enterprise Grade
                  </span>
                  <span className="text-lg font-semibold text-neutral-800">SOC 2 Certified</span>
                </div>
              </div>
              <p className="text-sm text-neutral-600 mb-6">
                Protect your data and maintain compliance with industry-leading security measures and automated governance tools.
              </p>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-xl bg-gradient-to-br from-red-50 to-red-100 ring-1 ring-red-200">
                  <div className="inline-flex items-center justify-center w-8 h-8 bg-red-500 text-white rounded-full mb-2">
                    <Lock className="w-4 h-4" />
                  </div>
                  <h4 className="font-medium text-red-800 text-sm">Encryption</h4>
                  <p className="text-xs text-red-600">End-to-end AES-256</p>
                </div>

                <div className="text-center p-4 rounded-xl bg-gradient-to-br from-green-50 to-green-100 ring-1 ring-green-200">
                  <div className="inline-flex items-center justify-center w-8 h-8 bg-green-500 text-white rounded-full mb-2">
                    <Eye className="w-4 h-4" />
                  </div>
                  <h4 className="font-medium text-green-800 text-sm">Monitoring</h4>
                  <p className="text-xs text-green-600">24/7 threat detection</p>
                </div>

                <div className="text-center p-4 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 ring-1 ring-blue-200">
                  <div className="inline-flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full mb-2">
                    <FileCheck className="w-4 h-4" />
                  </div>
                  <h4 className="font-medium text-blue-800 text-sm">Compliance</h4>
                  <p className="text-xs text-blue-600">GDPR, HIPAA ready</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Progress Timeline */}
          <div className="mt-10">
            <div className="relative">
              <div className="h-px w-full bg-gradient-to-r from-black/0 via-neutral-300 to-black/0" />
              <div className="mt-6 grid grid-cols-5 text-[11px] text-neutral-600">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  DISCOVERY
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  PLANNING
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
                  DEVELOPMENT
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-neutral-300" />
                  TESTING
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-neutral-300" />
                  DEPLOYMENT
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section id="services" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-20">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <p className="text-sm font-medium text-black/50" style={{ fontFamily: '"Playfair Display", serif' }}>
              What we do best
            </p>
            <h2 className="sm:text-4xl md:text-5xl text-3xl text-black font-medium tracking-tighter" style={{ fontFamily: '"Playfair Display", serif' }}>
              Strategy, design, and engineering—tightly integrated
            </h2>
            <p className="sm:text-lg max-w-[85ch] text-base text-neutral-600 mt-4">
              We deliver end-to-end: from brand platforms and design systems to production-ready interfaces and high-performance marketing sites.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Big Feature */}
          <div className="group relative overflow-hidden md:col-span-2 md:row-span-2 bg-white border border-neutral-200 rounded-2xl">
            <div className="relative overflow-hidden">
              <Image
                src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8eb65de1-5616-4a1b-a6cb-f2a48d70bcb7_1600w.jpg"
                alt="Sprint workshop"
                width={800}
                height={450}
                className="aspect-video w-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1">
                  SPRINTS
                </span>
                <span className="text-xs text-neutral-600">End-to-end product</span>
              </div>
              <h3 className="text-2xl sm:text-5xl text-neutral-900 mt-3 font-medium tracking-tighter">
                Design sprints that move from idea to shipped
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 mt-2">
                We structure work in focused sprints: align on outcomes, explore broadly, converge through testing, and deliver production-ready designs with handoff or code.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <Link
                  href="#services"
                  className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-100 transition-colors"
                >
                  <ListChecks className="h-4 w-4" />
                  See process
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-medium text-white bg-emerald-600 rounded-lg px-4 py-2 hover:bg-emerald-700 transition-colors"
                >
                  <CalendarPlus className="h-4 w-4" />
                  Book a intro call
                </Link>
              </div>
            </div>
          </div>

          {/* Service Cards */}
          <Card className="group bg-white border border-neutral-200 rounded-2xl p-6">
            <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-medium tracking-tight text-neutral-900">Design systems</h3>
                <span className="inline-flex items-center text-xs font-medium text-neutral-700 bg-neutral-100 border border-neutral-200 rounded-full px-3 py-1">
                  SCALABLE
                </span>
              </div>
              <p className="mt-2 text-sm text-neutral-600">
                Token-driven systems, accessibility by default, and component libraries that teams love to use.
              </p>
              <div className="mt-4 rounded-lg overflow-hidden border border-neutral-200">
                <Image
                  src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/97aab9d9-1ab5-4a9b-a254-33095a9fadf2_800w.jpg"
                  alt="Design system components"
                  width={400}
                  height={225}
                  className="aspect-video w-full object-cover"
                />
              </div>
            </div>
          </Card>

          <Card className="group bg-white border border-neutral-200 rounded-2xl p-6">
            <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-medium tracking-tight text-neutral-900">High‑performance websites</h3>
                <span className="inline-flex items-center text-xs font-medium text-neutral-700 bg-neutral-100 border border-neutral-200 rounded-full px-3 py-1">
                  SEO & SPEED
                </span>
              </div>
              <p className="mt-2 text-sm text-neutral-600">
                Narratives that convert, visuals that differentiate, and performance that ranks.
              </p>
              <div className="mt-4 rounded-lg overflow-hidden border border-neutral-200">
                <Image
                  src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/452fb7c8-d2af-414b-9dd0-99ba9a76cc5a_800w.jpg"
                  alt="Website performance"
                  width={400}
                  height={225}
                  className="aspect-video w-full object-cover"
                />
              </div>
            </div>
          </Card>

          <Card className="group bg-white border border-neutral-200 rounded-2xl p-6">
            <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6">
              <h3 className="text-lg font-medium tracking-tight text-neutral-900 flex items-center gap-2">
                Research & testing
                <span className="ml-2 inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700">
                  INSIGHT
                </span>
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                Discovery, interviews, and evaluative testing inform design decisions and reduce risk.
              </p>
              <div className="mt-4 rounded-lg overflow-hidden border border-neutral-200">
                <Image
                  src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3499908d-d502-44d2-9721-9b471b0460bb_800w.jpg"
                  alt="User research"
                  width={400}
                  height={225}
                  className="aspect-video w-full object-cover"
                />
              </div>
            </div>
          </Card>

          <Card className="group bg-white border border-neutral-200 rounded-2xl p-6">
            <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6">
              <h3 className="text-lg font-medium tracking-tight text-neutral-900 flex items-center gap-2">
                Motion & content
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                Launch films, micro‑interactions, and content systems that bring products to life.
              </p>
              <div className="mt-4 rounded-lg overflow-hidden border border-neutral-200">
                <Image
                  src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f03d228e-5eab-4149-af94-7d6c5c2eb5c5_800w.jpg"
                  alt="Motion design"
                  width={400}
                  height={225}
                  className="aspect-video w-full object-cover"
                />
              </div>
            </div>
          </Card>

          <Card className="group bg-white border border-neutral-200 rounded-2xl p-6">
            <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6">
              <h3 className="text-lg font-medium tracking-tight text-neutral-900 flex items-center gap-2">
                Embedded partnerships
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                We join your standups, work in your repos, and deliver like an internal team.
              </p>
              <div className="mt-4 rounded-lg overflow-hidden border border-neutral-200">
                <Image
                  src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0153dbec-e119-4666-b642-3f8e0284fb69_800w.jpg"
                  alt="Partnership"
                  width={400}
                  height={225}
                  className="aspect-video w-full object-cover"
                />
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="max-w-7xl border-neutral-200 border-t mt-12 mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 gap-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <p className="text-sm font-medium text-neutral-600" style={{ fontFamily: '"Playfair Display", serif' }}>
                Transparent pricing
              </p>
              <h3 className="text-3xl sm:text-4xl md:text-5xl text-neutral-900 mt-2 font-medium tracking-tighter" style={{ fontFamily: '"Playfair Display", serif' }}>
                Plans that match how you ship
              </h3>
              <p className="sm:text-base text-sm text-neutral-600 mt-4 max-w-[80ch]">
                Clear scopes, fixed sprints, and embedded options. No surprises—just momentum.
              </p>
            </div>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-white bg-neutral-900 hover:bg-neutral-800 transition rounded-xl px-6 py-3 ring-1 ring-neutral-800"
            >
              Get a tailored quote
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={cn(
                  "relative rounded-2xl border bg-white p-8 transition-all duration-300",
                  plan.featured
                    ? "border-2 border-emerald-200 bg-gradient-to-b from-emerald-50 to-white shadow-lg shadow-emerald-100/50"
                    : "border-neutral-200 hover:shadow-lg hover:border-neutral-300"
                )}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-8 inline-flex items-center rounded-full bg-emerald-600 text-white text-xs font-medium px-3 py-1 ring-2 ring-white">
                    Most popular
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-medium tracking-tight text-neutral-900" style={{ fontFamily: '"Playfair Display", serif' }}>
                    {plan.name}
                  </h4>
                  {plan.badge && (
                    <span
                      className={cn(
                        "inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs",
                        plan.featured
                          ? "border-emerald-300 bg-emerald-100 text-emerald-800"
                          : "border-neutral-200 bg-neutral-100 text-neutral-700"
                      )}
                    >
                      {plan.badge === "Quick start" && <Rocket className="w-3.5 h-3.5" />}
                      {plan.badge === "More velocity" && <Gauge className="w-3.5 h-3.5" />}
                      {plan.badge === "Embedded" && <Handshake className="w-3.5 h-3.5" />}
                      {plan.badge}
                    </span>
                  )}
                </div>
                <div className="mt-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl text-neutral-900 font-medium tracking-tighter">
                      {plan.price}
                    </span>
                    <span className="text-neutral-600 text-sm">{plan.period}</span>
                  </div>
                  <p className="text-sm text-neutral-600 mt-2">{plan.description}</p>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-neutral-700">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                      {feature.text}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contact"
                  className={cn(
                    "mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl text-sm font-medium px-4 py-3 transition ring-1",
                    plan.featured
                      ? "bg-emerald-600 text-white hover:bg-emerald-700 ring-emerald-600"
                      : "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 border-neutral-200"
                  )}
                >
                  {plan.cta}
                  {plan.featured && <Calendar className="w-4 h-4" />}
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 text-sm">
            <div className="text-neutral-600">
              <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs text-neutral-700 mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                What's included
              </div>
              <p>
                Every plan includes weekly demos, shared roadmaps, async updates, and access to source files or repos.
              </p>
            </div>
            <div className="text-neutral-600">
              <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs text-neutral-700 mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Flexible scope
              </div>
              <p>Pause between sprints. Scale pods up or down as priorities shift.</p>
            </div>
            <div className="text-neutral-600">
              <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs text-neutral-700 mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Custom engagements
              </div>
              <p>Have a unique scope? We'll tailor a plan and price to your goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="w-full max-w-7xl mx-auto mt-24 mb-24 px-4 sm:px-6 lg:px-8 py-12">
        <div className="relative bg-neutral-50">
          <div className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 border-neutral-200 border-b pb-12">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-6 h-6 text-emerald-600" />
                  <h3 className="text-2xl sm:text-3xl text-neutral-900 font-medium tracking-tighter">Relay</h3>
                </div>
                <p className="text-lg sm:text-xl text-neutral-700 leading-relaxed max-w-2xl">
                  We're a senior design and engineering studio partnering with ambitious teams to build brands, products, and websites that perform.
                </p>
              </div>

              {/* Navigation Links */}
              <div>
                <h4 className="text-neutral-900 font-medium mb-4">Services</h4>
                <ul className="space-y-2 text-sm text-neutral-600">
                  <li>
                    <Link href="#services" className="hover:text-emerald-600 transition">
                      Product Design
                    </Link>
                  </li>
                  <li>
                    <Link href="#services" className="hover:text-emerald-600 transition">
                      Brand Systems
                    </Link>
                  </li>
                  <li>
                    <Link href="#services" className="hover:text-emerald-600 transition">
                      Design Engineering
                    </Link>
                  </li>
                  <li>
                    <Link href="#services" className="hover:text-emerald-600 transition">
                      Research & Testing
                    </Link>
                  </li>
                  <li>
                    <Link href="#services" className="hover:text-emerald-600 transition">
                      Motion & 3D
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Company Info */}
              <div>
                <h4 className="text-neutral-900 font-medium mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-neutral-600">
                  <li>
                    <Link href="#work" className="hover:text-emerald-600 transition">
                      Work
                    </Link>
                  </li>
                  <li>
                    <Link href="#approach" className="hover:text-emerald-600 transition">
                      Approach
                    </Link>
                  </li>
                  <li>
                    <Link href="#pricing" className="hover:text-emerald-600 transition">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href="#contact" className="hover:text-emerald-600 transition">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Section */}
            <div className="mt-8 rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6 md:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 ring-1 ring-emerald-200 text-xs text-emerald-800 bg-emerald-100 rounded-full py-1.5 px-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse" />
                    Now booking Q4 2024
                  </div>
                  <h4 className="text-xl sm:text-2xl text-neutral-900 font-medium tracking-tighter">
                    Ready to ship something great?
                  </h4>
                  <ul className="text-sm text-neutral-700 space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                      <span>Senior-only team on every engagement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                      <span>Weekly demos and shared roadmaps</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                      <span>Clear pricing, flexible scopes</span>
                    </li>
                  </ul>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-2 text-sm">
                    <a
                      href="mailto:hello@relay.studio"
                      className="inline-flex items-center gap-2 text-neutral-700 hover:text-emerald-600 transition"
                    >
                      <Mail className="w-4 h-4" />
                      hello@relay.studio
                    </a>
                    <span className="text-neutral-400 hidden sm:inline">•</span>
                    <a
                      href="tel:+1-555-RELAY-01"
                      className="inline-flex items-center gap-2 text-neutral-700 hover:text-emerald-600 transition"
                    >
                      <Phone className="w-4 h-4" />
                      Schedule a call
                    </a>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full placeholder-neutral-500 outline-none focus:ring-2 focus:ring-emerald-400/60 focus:border-emerald-300 transition text-sm text-neutral-900 bg-white border-neutral-200 border rounded-xl py-2.5 px-3"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full placeholder-neutral-500 outline-none focus:ring-2 focus:ring-emerald-400/60 focus:border-emerald-300 transition text-sm text-neutral-900 bg-white border-neutral-200 border rounded-xl py-2.5 px-3"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Company name"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full placeholder-neutral-500 outline-none focus:ring-2 focus:ring-emerald-400/60 focus:border-emerald-300 transition text-sm text-neutral-900 bg-white border-neutral-200 border rounded-xl py-2.5 px-3"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-2">Budget</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full outline-none focus:ring-2 focus:ring-emerald-400/60 focus:border-emerald-300 transition text-sm text-neutral-900 bg-white border-neutral-200 border rounded-xl py-2.5 px-3 appearance-none cursor-pointer"
                    >
                      <option value="25-50k">$25k–$50k</option>
                      <option value="50-100k">$50k–$100k</option>
                      <option value="100-250k">$100k–$250k</option>
                      <option value="custom">Custom</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-2">Timeline</label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full outline-none focus:ring-2 focus:ring-emerald-400/60 focus:border-emerald-300 transition text-sm text-neutral-900 bg-white border-neutral-200 border rounded-xl py-2.5 px-3 appearance-none cursor-pointer"
                    >
                      <option value="asap">ASAP</option>
                      <option value="1-2m">1–2 months</option>
                      <option value="3m+">3+ months</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-2">Services</label>
                    <select
                      name="services"
                      value={formData.services}
                      onChange={handleInputChange}
                      className="w-full outline-none focus:ring-2 focus:ring-emerald-400/60 focus:border-emerald-300 transition text-sm text-neutral-900 bg-white border-neutral-200 border rounded-xl py-2.5 px-3 appearance-none cursor-pointer"
                    >
                      <option>Product Design</option>
                      <option>Brand & Identity</option>
                      <option>Web Design & Build</option>
                      <option>Design System</option>
                      <option>Motion & Content</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-medium text-neutral-700 mb-2">Project details</label>
                    <textarea
                      name="projectDetails"
                      rows={3}
                      placeholder="What are you building? Goals, scope, links…"
                      value={formData.projectDetails}
                      onChange={handleInputChange}
                      className="w-full placeholder-neutral-500 outline-none focus:ring-2 focus:ring-emerald-400/60 focus:border-emerald-300 transition text-sm text-neutral-900 bg-white border-neutral-200 border rounded-xl py-2.5 px-3 resize-none"
                    />
                  </div>
                  <div className="sm:col-span-2 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <p className="text-xs text-neutral-600">
                      We'll get back to you within 24 hours with next steps.
                    </p>
                    <button
                      type="submit"
                      className="inline-flex gap-2 ring-1 ring-emerald-300 hover:bg-emerald-300 transition text-sm font-medium text-white bg-emerald-500 rounded-xl py-2.5 px-4 shadow items-center"
                    >
                      <Send className="w-4 h-4" />
                      Send inquiry
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-0 border-neutral-200 border-t mt-8 pt-6 justify-between">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <p className="text-neutral-500 text-sm">© 2024 Relay Studio. All rights reserved.</p>
                <div className="flex items-center gap-4 text-neutral-500 text-sm">
                  <span>Remote-first • Global</span>
                  <span className="hidden sm:inline text-neutral-300">•</span>
                  <span>Working across timezones</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <a href="#" className="text-neutral-500 hover:text-emerald-600 transition">
                  <Twitter className="w-[20px] h-[20px]" />
                </a>
                <a href="#" className="text-neutral-500 hover:text-emerald-600 transition">
                  <Instagram className="w-[20px] h-[20px]" />
                </a>
                <a href="#" className="text-neutral-500 hover:text-emerald-600 transition">
                  <Linkedin className="w-[20px] h-[20px]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-neutral-50 md:hidden">
          <div className="flex flex-col h-full p-6">
            <div className="flex justify-between items-center mb-8">
              <span className="text-lg font-semibold text-black tracking-tight" style={{ fontFamily: '"Playfair Display", serif' }}>
                RELAY
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center h-10 w-10 rounded-lg ring-1 ring-black/20 bg-black text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="flex flex-col gap-6 text-lg text-neutral-900">
              <Link href="#work" onClick={() => setMobileMenuOpen(false)} className="hover:text-black transition-colors font-medium">
                Work
              </Link>
              <Link href="#services" onClick={() => setMobileMenuOpen(false)} className="hover:text-black transition-colors font-medium">
                Services
              </Link>
              <Link href="#approach" onClick={() => setMobileMenuOpen(false)} className="hover:text-black transition-colors font-medium">
                Approach
              </Link>
              <Link href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-black transition-colors font-medium">
                Contact
              </Link>
            </nav>
            <button className="mt-auto cursor-pointer text-base text-white text-center bg-gradient-to-b from-neutral-700 to-neutral-900 border-0 rounded-full py-3 px-8 items-center justify-center shadow-lg">
              Get Started
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
