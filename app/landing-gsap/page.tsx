"use client"

/**
 * LandingGSAP - AI-Native Real Estate Landing Page
 *
 * @description
 * High-conversion landing page with GSAP-style animations converted to Framer Motion.
 * Features hero section, property cards, market intelligence, and membership tiers.
 *
 * @features
 * - Hero with parallax image and text reveal animations
 * - Sticky card stack with scroll animations
 * - Market statistics and intelligence sections
 * - Property listings with match scores
 * - Membership pricing tiers
 * - Testimonials and FAQ sections
 * - Mobile-responsive design with dark theme
 */

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import Link from "next/link"
import {
  Search,
  Mic,
  ArrowUp,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  Glasses,
  CheckCircle2,
  TrendingUp,
  Users,
  BarChart2,
  Coffee,
  Train,
  Shield,
  Check,
  Crown,
  Briefcase,
  CreditCard,
  Ruler,
  Plane,
  Quote,
  Smartphone,
  Tablet,
  Home,
  Heart,
  MessageCircle,
  Github,
  Plus,
  Menu,
  X,
  Triangle,
  Circle,
  Hexagon,
  Square,
  Diamond,
  Bot,
  User,
  Search as SearchIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"

// Types
interface StatCard {
  value: string
  label: string
  change?: string
  changePercent?: string
}

interface PropertyCard {
  id: string
  title: string
  location: string
  price: string
  beds: string
  baths: string
  sqft: string
  imageUrl: string
  badge?: string
  matchScore?: string
}

interface ServiceItem {
  icon: React.ReactNode
  title: string
  description: string
}

interface ChangelogItem {
  title: string
  version: string
  date: string
  description: string
  isNew?: boolean
}

interface MarketCard {
  code: string
  city: string
  listings: string
  growth: string
  progress: number
}

export default function LandingGSAPPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 50])
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  useEffect(() => {
    // Simulate loading sequence
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const stats: StatCard[] = [
    { value: "12k+", label: "Active Listings", change: "14%", changePercent: "+14%" },
    { value: "98%", label: "Satisfaction", change: "2.4%", changePercent: "+2.4%" },
    { value: "$1B+", label: "Volume" },
    { value: "Zero", label: "Hidden Fees" },
  ]

  const properties: PropertyCard[] = [
    {
      id: "1",
      title: "Oceanview Modern Villa",
      location: "Malibu, CA",
      price: "$2.8M",
      beds: "4",
      baths: "3",
      sqft: "2,800",
      imageUrl: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1600&auto=format&fit=crop",
      badge: "New",
      matchScore: "98%",
    },
    {
      id: "2",
      title: "Skyline Penthouse",
      location: "Manhattan, NY",
      price: "$5.2M",
      beds: "3",
      baths: "2",
      sqft: "1,950",
      imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
      badge: "Verified",
      matchScore: "94%",
    },
    {
      id: "3",
      title: "Contemporary Townhouse",
      location: "Austin, TX",
      price: "$1.15M",
      beds: "3",
      baths: "3",
      sqft: "1,900",
      imageUrl: "https://images.unsplash.com/photo-1600566752355-35792bedcfe1?q=80&w=1600&auto=format&fit=crop",
      badge: "Open House",
    },
  ]

  const services: ServiceItem[] = [
    {
      icon: <Briefcase className="w-5 h-5" />,
      title: "Legal & Tax",
      description: "Structuring, compliance, and cross-border advisory optimization for global investors.",
    },
    {
      icon: <CreditCard className="w-5 h-5" />,
      title: "Smart Financing",
      description: "Asset-backed lending with approval in minutes, not weeks. Competitive rates for HNW individuals.",
    },
    {
      icon: <Ruler className="w-5 h-5" />,
      title: "Design & Build",
      description: "From architectural concepts to turn-key renovations. We manage the contractors, you enjoy the result.",
    },
    {
      icon: <Plane className="w-5 h-5" />,
      title: "Relocation",
      description: "Visa assistance, school enrollment, and logistics for international buyers moving to new markets.",
    },
  ]

  const changelog: ChangelogItem[] = [
    {
      title: "Neural Search v2.0",
      version: "v2.4.0",
      date: "Oct 24",
      description: "Introduced semantic search capabilities allowing natural language queries (e.g., 'homes with good light for painting').",
      isNew: true,
    },
    {
      title: "Predictive Valuation",
      version: "v2.3.1",
      date: "Oct 18",
      description: "Improved accuracy of the valuation algorithm by 14% in high-density urban areas. Added confidence intervals to all price estimates.",
    },
    {
      title: "Mobile Dark Mode",
      version: "v2.3.0",
      date: "Oct 12",
      description: "Complete overhaul of contrast ratios for better accessibility. Optimized specifically for OLED displays on mobile devices.",
    },
  ]

  const markets: MarketCard[] = [
    { code: "NYC", city: "New York", listings: "1,240 Active Listings", growth: "2.4%", progress: 80 },
    { code: "LDN", city: "London", listings: "980 Active Listings", growth: "1.1%", progress: 65 },
    { code: "SYD", city: "Sydney", listings: "650 Active Listings", growth: "4.8%", progress: 90 },
    { code: "DXB", city: "Dubai", listings: "2,100 Active Listings", growth: "12.5%", progress: 95 },
  ]

  const faqs = [
    {
      question: "How accurate is the valuation AI?",
      answer: "Our model, trained on 50M+ historical transaction points, currently holds a Median Absolute Percentage Error (MdAPE) of 2.1% in Tier 1 cities, significantly outperforming traditional appraisals.",
    },
    {
      question: "Is HAUS available for agents?",
      answer: "Yes. We offer HAUS Pro for verified agents, providing access to our CRM, predictive lead generation, and automated marketing suite.",
    },
    {
      question: "How do you handle privacy?",
      answer: "We use zero-knowledge proofs for verifying funds and identity without storing sensitive documents. Your search history is encrypted locally.",
    },
  ]

  // Loading Screen
  if (isLoading) {
    return (
      <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold tracking-tight text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            HAUS
          </motion.h1>
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 h-[2px] bg-white"
          />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans antialiased selection:bg-indigo-500/30 selection:text-indigo-100">
      {/* Noise Overlay */}
      <div
        className="fixed inset-0 z-0 w-full h-full pointer-events-none opacity-30"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
          maskImage: "radial-gradient(circle at center, black 40%, transparent 100%)",
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full px-6 py-4 md:px-12 md:py-6 flex justify-between items-center z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="font-medium tracking-tight flex items-center gap-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-bold tracking-tighter text-sm">
            H.
          </div>
        </div>

        {/* Desktop Search */}
        <div className="hidden md:flex items-center bg-neutral-900 border border-white/10 rounded-full px-4 py-2 w-80 gap-3">
          <Search className="w-4 h-4 text-neutral-500" />
          <input
            type="text"
            placeholder="Point Piper, NSW 2027"
            className="bg-transparent border-none text-xs text-white placeholder-neutral-500 focus:outline-none w-full font-mono"
          />
          <div className="text-[10px] bg-white/5 border border-white/5 px-1.5 py-0.5 rounded text-neutral-400 font-mono">
            ⌘K
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="#" className="text-xs font-mono text-neutral-400 hover:text-white uppercase transition">
            Search
          </Link>
          <Link href="#" className="text-xs font-mono text-neutral-400 hover:text-white uppercase transition">
            App
          </Link>
          <Link
            href="#"
            className="text-xs font-mono text-white border border-white/20 rounded-md px-4 py-2 hover:bg-white hover:text-black transition-all uppercase"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          className="fixed inset-0 z-40 bg-black/95 backdrop-blur-md md:hidden"
        >
          <div className="flex flex-col items-center justify-center h-full gap-8">
            <Link
              href="#"
              className="text-2xl font-medium text-white hover:text-indigo-400 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Search
            </Link>
            <Link
              href="#"
              className="text-2xl font-medium text-white hover:text-indigo-400 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              App
            </Link>
            <Link
              href="#"
              className="text-2xl font-medium text-white hover:text-indigo-400 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </Link>
          </div>
        </motion.div>
      )}

      {/* Main Content Wrapper */}
      <div className="relative z-10 bg-[#050505] mb-[100vh] rounded-b-[2rem] overflow-hidden shadow-2xl">
        {/* Hero Section */}
        <section className="h-screen relative flex flex-col items-center justify-center overflow-hidden">
          {/* Parallax Background */}
          <motion.div
            style={{
              y: heroY,
              scale: heroScale,
            }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1600&auto=format&fit=crop"
              className="w-full h-[120%] object-cover brightness-[0.7]"
              alt="Modern Architecture"
            />
          </motion.div>

          {/* Hero Content */}
          <div className="relative z-10 text-center text-white px-4 w-full max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="flex items-center justify-center gap-2 mb-6"
            >
              <span className="px-3 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-[10px] uppercase tracking-widest font-medium">
                Early Access v1.0
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-[13vw] leading-[0.8] tracking-tighter overflow-hidden"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              THE NEW
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex items-center justify-center"
            >
              <h1
                className="text-[13vw] leading-[0.8] tracking-tighter text-white"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                HOME OF
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <h1
                className="text-[13vw] leading-[0.8] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                HOMES
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-8 text-sm md:text-base font-light text-white/80 max-w-lg mx-auto"
            >
              Curated properties. Powerful search. Expert support.
              <br />
              AI-native real estate for the modern era.
            </motion.p>

            {/* Voice Search Demo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-12 mx-auto max-w-md w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-2 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-black shrink-0">
                <Mic className="w-5 h-5" />
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
            </motion.div>

            {/* Trending Tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="mt-8 flex flex-wrap justify-center gap-3"
            >
              <span className="text-[10px] text-neutral-600 uppercase tracking-widest pt-1.5 font-medium">
                Trending
              </span>
              <button className="px-3 py-1.5 rounded-full border border-white/5 bg-white/5 hover:bg-white/10 text-[10px] text-neutral-400 hover:text-white transition-colors">
                Waterfront
              </button>
              <button className="px-3 py-1.5 rounded-full border border-white/5 bg-white/5 hover:bg-white/10 text-[10px] text-neutral-400 hover:text-white transition-colors">
                Off-market
              </button>
              <button className="px-3 py-1.5 rounded-full border border-white/5 bg-white/5 hover:bg-white/10 text-[10px] text-neutral-400 hover:text-white transition-colors">
                Penthouse
              </button>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
              <span className="text-[9px] uppercase tracking-widest text-white/30 font-medium">
                Explore
              </span>
              <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
            </motion.div>
          </div>
        </section>

        {/* Stats & Intro Section */}
        <section className="py-32 px-6 md:px-20 max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-start border-b border-white/10 pb-24">
            <div className="lg:col-span-7">
              <h2
                className="text-4xl md:text-6xl font-medium leading-[1.05] tracking-tight text-white"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                A revolution in
                <br />
                <span className="text-neutral-500">real estate.</span> Search, invest, and buy in one platform.
              </h2>
            </div>
            <div className="lg:col-span-5 flex flex-col justify-between h-full pt-2">
              <p className="text-lg md:text-xl font-light text-neutral-400 leading-relaxed">
                No more checkbox hell. HAUS combines market expertise with a seamless, voice-first AI experience.
                We prioritize transparency, verified listings, and data-driven insights.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-end gap-2 mb-1">
                  <div className="text-3xl font-medium tracking-tight text-white">{stat.value}</div>
                  {stat.changePercent && (
                    <div className="text-[10px] font-medium text-emerald-500 mb-1.5 flex items-center">
                      <ArrowUp className="w-2.5 h-2.5 mr-0.5" />
                      {stat.changePercent}
                    </div>
                  )}
                </div>
                <div className="text-xs text-neutral-500 uppercase tracking-widest font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Trusted By Section */}
        <section className="py-20 border-t border-white/10">
          <div className="px-6 md:px-20 max-w-[1400px] mx-auto">
            <p className="text-[10px] font-mono text-neutral-600 text-center mb-10 uppercase tracking-[0.2em]">
              Trusted by Industry Leaders
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60">
              {[
                { icon: Triangle, name: "VORTEX" },
                { icon: Circle, name: "OBLIQUE" },
                { icon: Hexagon, name: "NEXUS" },
                { icon: Square, name: "QUARTZ" },
                { icon: Diamond, name: "ÆON" },
              ].map((company, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 group cursor-default"
                >
                  <company.icon className="w-5 h-5 text-white group-hover:text-indigo-400 transition-colors" />
                  <span className="text-lg font-bold tracking-tighter text-white group-hover:text-indigo-400 transition-colors">
                    {company.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Intelligent Tools Section - Card Stack */}
        <section className="py-20 border-t border-white/10 relative">
          <div className="px-6 md:px-20 mb-20 max-w-[1400px] mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                Platform Capabilities
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-medium tracking-tight text-white"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              INTELLIGENT
              <br />
              TOOLS
            </h2>
          </div>

          <div className="max-w-[1200px] mx-auto px-4 md:px-0 pb-32">
            {/* Card 1: AI Assistant */}
            <StickyCard
              index={0}
              number="01 / 03"
              icon={<Sparkles className="w-5 h-5" />}
              title="AI PROPERTY ASSISTANT"
              subtitle="GPT-4 Powered"
              description="Analyze investment potential, draft offer letters, and compare listings instantly. Your 24/7 expert."
              tags={["Market Trends", "Legal Drafting"]}
            >
              <div className="w-full h-full flex items-center justify-center bg-neutral-900 p-12">
                <div className="w-full max-w-sm bg-neutral-950 rounded-xl shadow-2xl border border-white/10 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div className="text-sm font-medium text-white">HAUS AI</div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white/5 p-3 rounded-lg rounded-tl-none text-xs text-neutral-400 leading-relaxed">
                      Based on the 12-month forecast, this property has a projected ROI of +12.4%. Rental yield
                      is above suburb average.
                    </div>
                    <div className="h-2 w-24 bg-white/10 rounded animate-pulse" />
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <div className="flex gap-2">
                      <div className="flex-1 h-8 bg-white/5 rounded-lg border border-white/10" />
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-black">
                        <ArrowUp className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </StickyCard>

            {/* Card 2: Fair Play Protocol */}
            <StickyCard
              index={1}
              number="02 / 03"
              icon={<ShieldCheck className="w-5 h-5" />}
              title="FAIR PLAY PROTOCOL"
              subtitle="Compliance Ready"
              description="No underquoting. No dodgy tactics. We detect price anomalies and verify every document automatically."
              tags={["AUSTRAC Certified", "ID Check"]}
            >
              <div className="w-full h-full flex items-center justify-center bg-neutral-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
                <div className="bg-neutral-950 p-6 rounded-xl shadow-2xl border border-white/10 w-64 z-10">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-medium text-neutral-500">Risk Score</span>
                    <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                      LOW
                    </span>
                  </div>
                  <div className="space-y-3">
                    {["Identity", "Funds Source", "Ownership"].map((item) => (
                      <div key={item} className="flex justify-between items-center">
                        <span className="text-xs text-neutral-400">{item}</span>
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </StickyCard>

            {/* Card 3: Immersive 3D */}
            <StickyCard
              index={2}
              number="03 / 03"
              icon={<Glasses className="w-5 h-5" />}
              title="IMMERSIVE 3D"
              subtitle="NeRF • WebXR"
              description="Explore homes remotely with photorealistic tours. AI staging helps you visualize the potential of every room."
              tags={["VR Ready", "Spatial AI"]}
              imageUrl="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop"
            >
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-lg text-xs font-medium flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Live View
              </div>
            </StickyCard>
          </div>
        </section>

        {/* Hyper-Local Intelligence Section */}
        <section className="py-32 px-6 md:px-20 border-t border-white/10">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                    Market Pulse
                  </span>
                </div>
                <h2
                  className="text-4xl md:text-5xl font-medium tracking-tight text-white"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  HYPER-LOCAL
                  <br />
                  INTELLIGENCE
                </h2>
              </div>
              <p className="text-sm text-neutral-400 max-w-md leading-relaxed">
                Don't just buy a home, buy into a future. Our predictive models analyze millions of data points to
                forecast neighborhood growth with 94% accuracy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
              {/* Map Card */}
              <div className="md:col-span-2 md:row-span-2 relative bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2400&auto=format&fit=crop"
                  className="w-full h-full object-cover opacity-40 grayscale group-hover:scale-105 transition-transform duration-700"
                  alt="Map area"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
                <div className="absolute top-1/3 left-1/4 bg-white text-black px-3 py-1.5 rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-110 cursor-default">
                  <div className="text-[10px] font-bold tracking-tight">+$124k (1yr)</div>
                  <div className="w-2 h-2 bg-white absolute -bottom-1 left-1/2 -translate-x-1/2 rotate-45" />
                </div>
                <div className="absolute top-1/2 right-1/3 bg-black/80 backdrop-blur border border-white/20 text-white px-3 py-1.5 rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-110 cursor-default">
                  <div className="text-[10px] font-bold tracking-tight">Top Rated School</div>
                </div>
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-xl font-medium text-white mb-1">Surry Hills, NSW</h3>
                  <div className="flex items-center gap-4 text-xs text-neutral-400">
                    <span className="flex items-center gap-1 text-emerald-400">
                      <TrendingUp className="w-3 h-3" />
                      +8.4% Growth
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      High Demand
                    </span>
                  </div>
                </div>
              </div>

              {/* Chart Card */}
              <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 flex flex-col justify-between group">
                <div className="flex justify-between items-start">
                  <span className="text-xs text-neutral-500 uppercase tracking-widest font-medium">Price Velocity</span>
                  <BarChart2 className="w-5 h-5 text-neutral-700 group-hover:text-white transition-colors" />
                </div>
                <div className="h-32 flex items-end justify-between gap-2 mt-4">
                  {[40, 55, 45, 70, 60, 85].map((height, index) => (
                    <div
                      key={index}
                      className={cn(
                        "w-full rounded-t transition-colors",
                        index === 5 ? "bg-emerald-500/20" : "bg-white/5 group-hover:bg-white/10"
                      )}
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
                <div className="mt-4">
                  <div className="text-2xl font-medium text-white tracking-tight">14 days</div>
                  <div className="text-xs text-neutral-500">Avg. time on market</div>
                </div>
              </div>

              {/* Score Card */}
              <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 flex flex-col justify-center gap-1">
                {[
                  { icon: Coffee, label: "Lifestyle", sub: "Cafes, Parks, Art", score: "9.8" },
                  { icon: Train, label: "Transit", sub: "Metro, Bus, Walk", score: "9.2" },
                  { icon: Shield, label: "Safety", sub: "Incident Reports", score: "9.5" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between border-b border-white/5 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center border border-white/5">
                        <item.icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">{item.label}</div>
                        <div className="text-[10px] text-neutral-500">{item.sub}</div>
                      </div>
                    </div>
                    <div className="text-lg font-bold text-emerald-400">{item.score}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Listings Section */}
        <section className="py-24 px-6 md:px-20">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex justify-between items-end mb-12">
              <h2
                className="text-3xl font-medium tracking-tight text-white"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                FEATURED
                <br />
                LISTINGS
              </h2>
              <Link
                href="#"
                className="text-xs font-medium uppercase tracking-widest border-b border-white/20 pb-1 hover:border-white hover:text-white text-neutral-400 transition-colors"
              >
                View All
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {properties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>
        </section>

        {/* Membership Pricing Section */}
        <section className="py-32 px-6 md:px-20 border-t border-white/10">
          <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16">
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">Membership</span>
              </div>
              <h2
                className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                ACCESS
                <br />
                LEVELS
              </h2>
              <p className="text-neutral-400 text-sm leading-relaxed max-w-md">
                Unlock the full potential of HAUS. From casual browsing to institutional-grade analytics and
                off-market deal flow.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {/* Free Plan */}
              <div className="p-8 rounded-2xl border border-white/10 bg-white/5 flex flex-col hover:bg-white/10 transition-colors">
                <div className="mb-4 text-xs font-mono text-neutral-400 uppercase tracking-widest">Core</div>
                <div className="text-3xl font-medium text-white mb-1">Free</div>
                <div className="text-xs text-neutral-500 mb-8">Forever</div>
                <ul className="space-y-4 mb-8 flex-1">
                  {["Global Search", "Basic AI Insights", "Public Data"].map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-xs text-neutral-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 rounded-lg border border-white/20 text-xs font-bold uppercase tracking-widest text-white hover:bg-white hover:text-black transition-colors">
                  Current Plan
                </button>
              </div>

              {/* Premium Plan */}
              <div className="p-8 rounded-2xl border border-indigo-500/30 bg-gradient-to-b from-indigo-900/10 to-transparent flex flex-col relative overflow-hidden group">
                <div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="mb-4 text-xs font-mono text-indigo-400 uppercase tracking-widest flex justify-between relative z-10">
                  <span>Private Office</span>
                  <Crown className="w-3 h-3" />
                </div>
                <div className="text-3xl font-medium text-white mb-1 relative z-10">$2,500</div>
                <div className="text-xs text-neutral-500 mb-8 relative z-10">/ month</div>
                <ul className="space-y-4 mb-8 flex-1 relative z-10">
                  {["Off-market Listings", "Wealth Advisory", "API Access", "Dedicated Agent"].map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-xs text-white">
                      <Check className="w-3.5 h-3.5 text-indigo-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="relative z-10 w-full py-3 rounded-lg bg-indigo-600 text-xs font-bold uppercase tracking-widest text-white hover:bg-indigo-500 transition-colors shadow-[0_0_20px_rgba(79,70,229,0.3)]">
                  Apply for Access
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-32 flex flex-col items-center justify-center text-center px-6 border-t border-white/10">
          <div className="max-w-3xl mx-auto">
            <Quote className="w-8 h-8 text-neutral-600 mx-auto mb-8" />
            <h3
              className="text-2xl md:text-3xl font-medium tracking-tight mb-8 leading-normal text-white"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              "HAUS's AI found me a property that wasn't even listed yet. The investment score was spot-on—I've seen
              15% appreciation in just 8 months."
            </h3>
            <div className="flex flex-col items-center">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100"
                className="w-10 h-10 rounded-full mb-3 object-cover grayscale opacity-80"
                alt="Sarah Chen"
              />
              <div className="text-xs font-semibold uppercase tracking-widest text-white">Sarah Chen</div>
              <div className="text-xs font-medium text-neutral-500 mt-1">Chen Capital</div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-32 px-6 md:px-20 border-t border-white/10">
          <div className="max-w-[1000px] mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-neutral-500" />
                <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">The Protocol</span>
              </div>
              <h2
                className="text-4xl md:text-5xl font-medium tracking-tight text-white"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                FREQUENTLY ASKED
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="group border border-white/10 rounded-2xl bg-white/5 p-6 hover:border-white/20 transition-all cursor-pointer"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium text-white">{faq.question}</h3>
                    <Plus className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors" />
                  </div>
                  <motion.div
                    initial={false}
                    animate={{
                      maxHeight: expandedFaq === index ? "200px" : "0px",
                      opacity: expandedFaq === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pt-4 text-sm text-neutral-400 leading-relaxed max-w-2xl">{faq.answer}</p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer CTA Section */}
        <footer className="py-32 flex flex-col items-center justify-center text-center px-6 border-t border-white/10 relative">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2700&auto=format&fit=crop"
              className="w-full h-full object-cover opacity-10 pointer-events-none grayscale"
              alt="Background"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent" />
          </div>

          <div className="relative z-10 text-center w-full max-w-4xl px-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] uppercase tracking-widest text-gray-300">Waitlist Active</span>
            </div>

            <Link href="#" className="block group">
              <h2
                className="text-[10vw] leading-[0.8] font-medium tracking-tighter text-white group-hover:text-gray-300 transition-colors duration-500"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                GET STARTED
              </h2>
              <div className="h-[1px] w-0 group-hover:w-full bg-white/50 mx-auto transition-all duration-700 ease-in-out mt-4" />
            </Link>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 text-left border-t border-white/10 pt-12">
              {[
                { title: "Platform", links: ["Search", "Analytics", "Agents"] },
                { title: "Company", links: ["About", "Careers", "Press"] },
                { title: "Legal", links: ["Terms", "Privacy", "AUSTRAC"] },
              ].map((section) => (
                <div key={section.title} className="flex flex-col gap-4">
                  <span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">
                    {section.title}
                  </span>
                  {section.links.map((link) => (
                    <Link
                      key={link}
                      href="#"
                      className="text-xs text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </Link>
                  ))}
                </div>
              ))}
              <div className="flex flex-col justify-between">
                <span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">© 2025</span>
                <div className="text-[10px] text-gray-600 uppercase tracking-widest">HAUS Group Pty Ltd</div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

// Sub-components
function StickyCard({
  index,
  number,
  icon,
  title,
  subtitle,
  description,
  tags,
  children,
  imageUrl,
}: {
  index: number
  number: string
  icon: React.ReactNode
  title: string
  subtitle: string
  description: string
  tags: string[]
  children?: React.ReactNode
  imageUrl?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative"
      style={{
        top: index === 0 ? "20vh" : index === 1 ? "25vh" : "30vh",
      }}
    >
      <div className="sticky h-[60vh] flex items-center justify-center mb-[5vh]">
        <div className="w-[95%] h-full bg-[#0A0A0A] border border-white/10 rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2 shadow-2xl hover:shadow-indigo-500/10 transition-shadow duration-500">
          {/* Content Side */}
          <div className="p-8 md:p-12 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/10 order-2 md:order-1 h-[45%] md:h-full">
            <div className="w-full">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-mono text-gray-400">{number}</span>
                <div className="text-gray-800">{icon}</div>
              </div>
              <h3
                className="text-3xl font-medium tracking-tight mt-6 text-white"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {title}
              </h3>
              <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mt-2">{subtitle}</p>
            </div>
            <div className="space-y-6">
              <p className="text-sm text-gray-600 leading-relaxed font-light">{description}</p>
              <div className="flex gap-2 flex-wrap">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-900 rounded-md text-[10px] uppercase tracking-wider font-medium text-gray-600 dark:text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Visual Side */}
          <div className="relative w-full h-full order-1 md:order-2 h-[55%] md:h-auto overflow-hidden">
            {imageUrl ? (
              <img src={imageUrl} className="w-full h-full object-cover" alt={title} />
            ) : (
              children
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function PropertyCard({ property }: { property: PropertyCard }) {
  return (
    <div className="group cursor-pointer">
      <div className="aspect-[4/3] bg-neutral-800 rounded-lg overflow-hidden mb-4 relative">
        <img
          src={property.imageUrl}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          alt={property.title}
        />
        {property.badge && (
          <div className="absolute top-3 left-3 bg-black/60 backdrop-blur px-2 py-1 rounded text-[10px] font-medium uppercase tracking-wider text-white">
            {property.badge}
          </div>
        )}
        {property.matchScore && (
          <div className="absolute top-3 right-3 bg-indigo-500/90 backdrop-blur-md border border-indigo-400/20 px-2 py-1 rounded text-[10px] font-semibold uppercase tracking-wider text-white flex items-center gap-1 shadow-lg">
            <Sparkles className="w-2.5 h-2.5" />
            {property.matchScore} Match
          </div>
        )}
      </div>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium text-sm text-white">{property.title}</h3>
          <p className="text-xs text-neutral-400 mt-1">{property.location}</p>
        </div>
        <div className="text-sm font-medium text-white">{property.price}</div>
      </div>
      <div className="flex gap-3 mt-3 text-xs text-neutral-500">
        <span>{property.beds} bd</span> • <span>{property.baths} ba</span> • <span>{property.sqft} sqft</span>
      </div>
    </div>
  )
}
