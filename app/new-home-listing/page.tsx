"use client"

import React, { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import {
  BedDouble,
  Bath,
  CarFront,
  Scaling,
  MapPin,
  CalendarCheck,
  Share2,
  Heart,
  Eye,
  Mic,
  Bell,
  Play,
  Box,
  Layers,
  Grid3x3,
  CheckCircle,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  Users,
  Phone,
  MessageCircle,
  Video,
  Gavel,
  DollarSign,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Star,
  BadgeCheck,
  Calendar,
  Ruler,
  Building2,
  ScrollText,
  Coins,
  School,
  Activity,
  BrickWall,
  Mountain,
  FileKey,
  SearchCheck,
  Scale,
  Clock,
  Map,
  Download,
  ConciergeBell,
  Truck,
  Hammer,
  Shield,
  Instagram,
  Twitter,
  Linkedin,
  Check,
  ChevronDown
} from "lucide-react"

// Types
interface Property {
  id: string
  title: string
  address: string
  suburb: string
  state: string
  postcode: string
  price: number
  status: "for-sale" | "sold" | "pending"
  beds: number
  baths: number
  cars: number
  internalSize: number
  landSize: number
  yearBuilt: number
  yearRefurbished?: number
  description: string
  images: string[]
  agent: Agent
  features: PropertyFeature[]
  intelligence: PropertyIntelligence
}

interface Agent {
  name: string
  title: string
  company: string
  avatar: string
  rating: number
  reviews: number
  verified: boolean
  online: boolean
}

interface PropertyFeature {
  category: string
  items: { label: string; value: string }[]
}

interface PropertyIntelligence {
  estimatedValue: { min: number; max: number }
  confidence: number
  marketPhase: string
  growth: number
  demand: "low" | "medium" | "high"
  suburbPerformance: number[]
  targetPrice: number
}

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

// Components
const PropertyBadge = ({ children, variant = "default" }: { children: React.ReactNode; variant?: "default" | "success" | "commercial" }) => {
  const variants = {
    default: "bg-white/5 text-neutral-300 border-white/10",
    success: "bg-emerald-900/10 text-emerald-500 border-emerald-900/30",
    commercial: "bg-blue-500/10 text-blue-400 border-blue-500/20"
  }

  return (
    <span className={`text-[10px] font-mono uppercase tracking-widest border px-2 py-0.5 rounded-full flex items-center gap-1 ${variants[variant]}`}>
      {children}
    </span>
  )
}

const GlassCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-neutral-900/80 backdrop-blur-md border border-white/10 rounded-xl ${className}`}>
    {children}
  </div>
)

const IconPill = ({ icon: Icon, label, value, highlight = false }: {
  icon: any
  label: string
  value: string | number
  highlight?: boolean
}) => (
  <div className="flex items-center gap-4 group">
    <div className={`w-12 h-12 rounded-full flex items-center justify-center border transition-colors ${highlight ? "bg-white text-black border-white" : "bg-white/5 text-white border-white/5 group-hover:bg-white group-hover:text-black"}`}>
      <Icon className="w-5 h-5" />
    </div>
    <div>
      <div className="text-sm text-white font-medium">{value}</div>
      <div className="text-[10px] text-neutral-500 font-mono uppercase">{label}</div>
    </div>
  </div>
)

// Main Component
export default function NewHomeListingPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [scrollY, setScrollY] = useState(0)
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [isFavorited, setIsFavorited] = useState(false)

  // Sample property data
  const property: Property = {
    id: "H-2994-PP",
    title: "12 Wolseley Road",
    address: "12 Wolseley Road",
    suburb: "Point Piper",
    state: "NSW",
    postcode: "2027",
    price: 35000000,
    status: "for-sale",
    beds: 5,
    baths: 6,
    cars: 4,
    internalSize: 892,
    landSize: 1124,
    yearBuilt: 2018,
    yearRefurbished: 2023,
    description: `A monumental residence of rare distinction, this architectural masterpiece commands an iconic position on Australia's most prestigious street. Designed to dissolve the boundaries between the built form and the Sydney Harbour spectacle, the home offers an unparalleled waterfront lifestyle.

Spanning four expansive levels connected by a commercial-grade lift, the residence features floor-to-ceiling vitrine glass, a state-of-the-art Wolf & Sub-Zero kitchen, and a temperature-controlled wine cellar housing 2,000 bottles.`,
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop"
    ],
    agent: {
      name: "Alexander Phillips",
      title: "Principal",
      company: "HAUS Prestige",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200",
      rating: 5,
      reviews: 124,
      verified: true,
      online: true
    },
    features: [
      {
        category: "Building",
        items: [
          { label: "Year Built", value: "2018 (Refurb '23)" },
          { label: "Construction", value: "Double Brick" },
          { label: "Energy Rating", value: "6.5 Stars" },
          { label: "Interiors", value: "BKH Design" }
        ]
      },
      {
        category: "Land",
        items: [
          { label: "Lot Size", value: "1,124m²" },
          { label: "Zoning", value: "R2 Low Density" },
          { label: "Aspect", value: "North Facing" },
          { label: "Frontage", value: "24.5 Meters" }
        ]
      },
      {
        category: "Legal",
        items: [
          { label: "Title", value: "Torrens" },
          { label: "Easements", value: "None Registered" },
          { label: "Council", value: "Woollahra" },
          { label: "Rates", value: "$16,800 pa" }
        ]
      }
    ],
    intelligence: {
      estimatedValue: { min: 35200000, max: 38500000 },
      confidence: 94,
      marketPhase: "Seller's Market",
      growth: 24.5,
      demand: "high",
      suburbPerformance: [40, 45, 35, 50, 60, 55, 85, 75],
      targetPrice: 36000000
    }
  }

  const comparableProperties = [
    {
      address: "42 Wunulla Rd",
      suburb: "Point Piper",
      price: 34500000,
      status: "Sold Oct 24",
      beds: 5,
      baths: 5,
      cars: 4,
      image: "https://images.unsplash.com/photo-1600596542815-3ad19fb812a7?auto=format&fit=crop&q=80&w=800"
    },
    {
      address: "88 Wolseley Rd",
      suburb: "Point Piper",
      price: 41000000,
      status: "Sold Aug 24",
      beds: 6,
      baths: 7,
      cars: 6,
      image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&q=80&w=800"
    },
    {
      address: "22 Wentworth St",
      suburb: "Point Piper",
      price: 32000000,
      status: "For Sale",
      beds: 5,
      baths: 4,
      cars: 3,
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=800"
    }
  ]

  const conciergeServices = [
    {
      name: "Elite Conveyancing",
      category: "Legal",
      rating: 4.9,
      reviews: 84,
      responseTime: "< 2h Response",
      verified: true
    },
    {
      name: "Sydney Build Inspect",
      category: "Reports",
      rating: 5.0,
      reviews: 120,
      responseTime: "Same Day",
      verified: true
    }
  ]

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)

    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 2000)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(timer)
    }
  }, [])

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-AU", {
      style: "currency",
      currency: "AUD",
      minimumFractionDigits: 0
    }).format(price)
  }

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <motion.div
            className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            12 WOLSELEY RD
          </motion.div>
          <motion.div
            className="text-emerald-500 font-mono text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Loading...
          </motion.div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-neutral-300 font-sans">
      {/* Background Texture */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-50"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(circle at center, black 40%, transparent 100%)"
        }}
      />

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? "bg-zinc-950/80 backdrop-blur-xl border-b border-white/5" : "bg-transparent"}`}
      >
        <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <a href="#" className="w-8 h-8 bg-white text-black flex items-center justify-center font-bold tracking-tighter hover:scale-95 transition-transform rounded-sm">
              H.
            </a>
            <div className="hidden md:flex items-center gap-6">
              <a href="#" className="text-xs font-medium text-white">Residential</a>
              <a href="#" className="text-xs font-medium text-neutral-500 hover:text-white transition-colors">
                Warehaus
                <span className="text-[9px] align-top text-blue-400 ml-1">COMMERCIAL</span>
              </a>
              <a href="#" className="text-xs font-medium text-neutral-500 hover:text-white transition-colors">Marketplace</a>
              <a href="#" className="text-xs font-medium text-neutral-500 hover:text-white transition-colors">Intelligence</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center bg-white/5 border border-white/10 rounded-full px-3 py-1.5 w-72 gap-2 focus-within:bg-white/10 focus-within:border-white/20 transition-all group cursor-pointer">
              <Mic className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white transition-colors" />
              <input type="text" placeholder="Ask HAUS about school districts..." className="bg-transparent border-none text-xs text-white placeholder-neutral-500 focus:outline-none w-full font-mono h-5" />
              <div className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center">
                <span className="text-[8px] text-neutral-400">/</span>
              </div>
            </div>
            <button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors relative">
              <Bell className="w-3.5 h-3.5" />
              <div className="absolute top-1.5 right-2 w-1.5 h-1.5 bg-red-500 rounded-full border border-black" />
            </button>
            <button className="w-8 h-8 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-800 border border-white/10 flex items-center justify-center text-white overflow-hidden">
              <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80" alt="Profile" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition" />
            </button>
          </div>
        </div>
      </motion.nav>

      <div className="relative z-10 pt-28 pb-20">
        {/* Header */}
        <motion.header
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-[1400px] mx-auto px-6 mb-8"
        >
          <motion.div variants={fadeInUp} className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <PropertyBadge>Property ID: {property.id}</PropertyBadge>
                <PropertyBadge variant="success">
                  <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                  For Sale
                </PropertyBadge>
              </div>
              <h1 className="font-display text-4xl md:text-6xl text-white font-medium tracking-tight leading-[0.9]">
                {property.title}
                <span className="text-neutral-600">.</span>
              </h1>
              <div className="flex items-center gap-2 text-neutral-400">
                <MapPin className="w-3.5 h-3.5" />
                <span className="text-sm font-medium">{property.suburb}, {property.state} {property.postcode}</span>
              </div>
            </div>

            <div className="flex flex-col items-start md:items-end gap-3">
              <div className="flex gap-3">
                <button className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black hover:bg-neutral-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                  <span className="text-xs font-bold uppercase tracking-wider">Book Inspection</span>
                  <CalendarCheck className="w-3.5 h-3.5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
                <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/5 transition-colors">
                  <Share2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsFavorited(!isFavorited)}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-colors"
                >
                  <Heart className={`w-4 h-4 ${isFavorited ? "text-red-400 fill-red-400" : "text-neutral-400 hover:text-red-400"}`} />
                </button>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-white/5 text-neutral-400 border border-white/5">
                  Prestige Collection
                </span>
                <div className="flex items-center gap-1 text-[10px] text-neutral-500 font-mono">
                  <Eye className="w-3 h-3" />
                  24 watching now
                </div>
              </div>
            </div>
          </motion.div>
        </motion.header>

        {/* Bento Grid */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-[1400px] mx-auto px-6 mb-16"
        >
          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 md:h-[600px] gap-3 rounded-2xl overflow-hidden">
            {/* Main Image */}
            <div className="md:col-span-2 md:row-span-2 relative group cursor-zoom-in overflow-hidden bg-neutral-900">
              <img
                src={property.images[0]}
                alt="Facade"
                className="w-full h-full object-cover transition duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="absolute top-4 left-4 z-20">
                <span className="bg-black/50 backdrop-blur border border-white/10 px-2 py-1 rounded text-[10px] text-white font-mono uppercase">
                  Waterfront
                </span>
              </div>
              <div className="absolute bottom-6 left-6 z-20">
                <button className="flex items-center gap-3 bg-black/30 hover:bg-black/50 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full transition group">
                  <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-110 transition">
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-white">Watch Film</span>
                </button>
              </div>
              <div className="absolute top-4 right-4 z-20 flex gap-2">
                <button className="bg-black/50 backdrop-blur border border-white/10 px-3 py-1.5 rounded-full text-[10px] text-white font-medium hover:bg-white hover:text-black transition flex items-center gap-2 shadow-lg">
                  <Box className="w-3 h-3" />
                  3D Tour
                </button>
                <button className="bg-black/50 backdrop-blur border border-white/10 px-3 py-1.5 rounded-full text-[10px] text-white font-medium hover:bg-white hover:text-black transition flex items-center gap-2 shadow-lg">
                  <Layers className="w-3 h-3" />
                  Floor Plans
                </button>
              </div>
            </div>

            {/* Sub Images */}
            {property.images.slice(1, 4).map((image, index) => (
              <div key={index} className="relative group cursor-pointer overflow-hidden bg-neutral-900">
                <img
                  src={image}
                  alt={`View ${index + 2}`}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
            ))}

            {/* View All */}
            <div className="relative group cursor-pointer overflow-hidden bg-neutral-900">
              <img
                src={property.images[4]}
                alt="All images"
                className="w-full h-full object-cover opacity-60 transition duration-700 group-hover:scale-105 group-hover:opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2 hover:bg-white hover:text-black transition">
                  <Grid3x3 className="w-3 h-3" />
                  View All 42
                </button>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Main Content */}
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left Column */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="lg:col-span-8 space-y-16"
            >
              {/* Core Specs */}
              <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-between border-y border-white/10 py-8 gap-6">
                <IconPill icon={BedDouble} label="Master Retreat" value={`${property.beds} Bed`} />
                <div className="w-px h-10 bg-white/10 hidden sm:block" />
                <IconPill icon={Bath} label="Heated Floors" value={`${property.baths} Bath`} />
                <div className="w-px h-10 bg-white/10 hidden sm:block" />
                <IconPill icon={CarFront} label="Turntable" value={`${property.cars} Car`} />
                <div className="w-px h-10 bg-white/10 hidden sm:block" />
                <IconPill icon={Scaling} label="Internal" value={`${property.internalSize}m²`} />
              </motion.div>

              {/* Description */}
              <motion.div variants={fadeInUp} className="space-y-6">
                <h3 className="text-xs font-mono text-neutral-500 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  Overview
                </h3>
                <div className="prose prose-invert prose-lg max-w-none text-neutral-300 font-light leading-relaxed">
                  {property.description.split("\n\n").map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </motion.div>

              {/* Property DNA */}
              <motion.div variants={fadeInUp}>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xs font-mono text-neutral-500 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    Property DNA
                  </h3>
                  <div className="flex gap-4 text-[10px] font-mono text-neutral-500">
                    <span className="flex items-center gap-1 text-white">
                      <CheckCircle className="w-3 h-3 text-emerald-500" />
                      Verified
                    </span>
                    <span>Updated 2h ago</span>
                  </div>
                </div>
                <GlassCard className="overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-3 border-b border-white/10">
                    {property.features.map((feature, index) => (
                      <div
                        key={index}
                        className={`p-6 ${index < 2 ? "border-b md:border-b-0 md:border-r border-white/10" : ""}`}
                      >
                        <h4 className="text-xs text-white font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                          {feature.category === "Building" && <BrickWall className="w-3.5 h-3.5 text-neutral-400" />}
                          {feature.category === "Land" && <Mountain className="w-3.5 h-3.5 text-neutral-400" />}
                          {feature.category === "Legal" && <FileKey className="w-3.5 h-3.5 text-neutral-400" />}
                          {feature.category}
                        </h4>
                        <ul className="space-y-3">
                          {feature.items.map((item, i) => (
                            <li key={i} className="flex justify-between text-xs">
                              <span className="text-neutral-500">{item.label}</span>
                              <span className="text-white">{item.value}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="bg-white/5 p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-xs text-neutral-300">Ready for immediate settlement</span>
                    </div>
                    <button className="text-[10px] font-bold uppercase tracking-wider text-white border border-white/20 px-3 py-1.5 rounded hover:bg-white hover:text-black transition">
                      Download Contract
                    </button>
                  </div>
                </GlassCard>
              </motion.div>

              {/* HAUS Intelligence */}
              <motion.div variants={fadeInUp} className="bg-neutral-900/50 border border-white/10 rounded-2xl p-1 overflow-hidden relative group">
                <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none group-hover:bg-indigo-500/20 transition duration-1000" />
                <div className="bg-black/40 backdrop-blur rounded-xl p-8 border border-white/5 relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20 ring-1 ring-white/10">
                        <Sparkles className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-display font-medium text-xl text-white">HAUS Intelligence™</h3>
                        <div className="text-[10px] text-neutral-400 font-mono uppercase tracking-wider mt-1">
                          AI-Powered Market Analysis
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[10px] text-neutral-300 font-medium">
                        Buyer Demand: High
                      </div>
                      <div className="px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-[10px] text-emerald-400 font-mono uppercase font-bold flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                        </span>
                        Live Data
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                      <div>
                        <div className="text-xs text-neutral-500 mb-3 uppercase tracking-wide font-medium">
                          Estimated Value Range
                        </div>
                        <div className="text-4xl font-display text-white tracking-tight">
                          {formatPrice(property.intelligence.estimatedValue.min)}
                          <span className="text-neutral-700 mx-2">-</span>
                          {formatPrice(property.intelligence.estimatedValue.max)}
                        </div>
                        <div className="text-[10px] text-indigo-400 mt-2 flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          Confidence Level: {property.intelligence.confidence}% (High)
                        </div>
                        <div className="w-full bg-neutral-800 h-2 rounded-full mt-6 overflow-hidden relative">
                          <div className="bg-gradient-to-r from-indigo-600 to-purple-500 h-full rounded-full relative" style={{ width: "85%" }}>
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-indigo-500 rounded-full shadow-lg" />
                          </div>
                        </div>
                        <div className="flex justify-between text-[10px] text-neutral-500 font-mono mt-3 uppercase">
                          <span>Low: $30M</span>
                          <span className="text-white">Target: ${property.intelligence.targetPrice / 1000000}M</span>
                          <span>High: $40M</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/5 rounded-lg p-3 border border-white/5">
                          <div className="text-[10px] text-neutral-500 uppercase">Market Phase</div>
                          <div className="text-white font-medium mt-1">{property.intelligence.marketPhase}</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-3 border border-white/5">
                          <div className="text-[10px] text-neutral-500 uppercase">Growth (3yr)</div>
                          <div className="text-emerald-400 font-medium mt-1">+{property.intelligence.growth}%</div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="text-xs text-neutral-500 mb-6 flex justify-between uppercase tracking-wide font-medium">
                        <span>Suburb Performance (12 Mo)</span>
                        <span className="text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">+12.5%</span>
                      </div>
                      <div className="h-40 flex items-end justify-between gap-3">
                        {property.intelligence.suburbPerformance.map((height, index) => (
                          <div
                            key={index}
                            className={`w-full rounded-t-sm transition duration-300 ${
                              index === 6
                                ? "bg-gradient-to-t from-indigo-600 to-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.3)] relative"
                                : "bg-white/5 hover:bg-indigo-500/40"
                            }`}
                            style={{ height: `${height}%` }}
                          >
                            {index === 6 && (
                              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold px-2 py-1 rounded opacity-0 hover:opacity-100 transition">
                                You
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 pt-6 border-t border-white/5 flex gap-4">
                        <button className="flex-1 py-2.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white hover:bg-white hover:text-black transition">
                          View Full Report
                        </button>
                        <button className="flex-1 py-2.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-400 hover:bg-indigo-500 hover:text-white transition">
                          Ask AI Assistant
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Neighborhood Insights */}
              <motion.div variants={fadeInUp} className="mb-16">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xs font-mono text-neutral-500 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    Neighborhood Insights
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <GlassCard className="p-6">
                    <h4 className="text-white font-medium text-sm mb-4 flex items-center gap-2">
                      <Users className="w-4 h-4 text-neutral-400" />
                      Demographics
                    </h4>
                    <div className="space-y-4">
                      {[
                        { label: "Families", value: 72 },
                        { label: "Professionals", value: 85 },
                        { label: "Owner Occupier", value: 68 }
                      ].map((stat) => (
                        <div key={stat.label} className="space-y-1.5">
                          <div className="flex justify-between text-[10px] text-neutral-400 uppercase">
                            <span>{stat.label}</span>
                            <span>{stat.value}%</span>
                          </div>
                          <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                            <div className="h-full bg-white rounded-full" style={{ width: `${stat.value}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </GlassCard>

                  <GlassCard className="p-6">
                    <h4 className="text-white font-medium text-sm mb-4 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-neutral-400" />
                      Safety & Lifestyle
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { label: "Safety Score", value: "9.8", color: "text-emerald-400" },
                        { label: "Walk Score", value: "92", color: "text-white" },
                        { label: "Transit Score", value: "88", color: "text-white" },
                        { label: "Education", value: "A+", color: "text-white" }
                      ].map((stat) => (
                        <div key={stat.label} className="bg-white/5 rounded-lg p-3 text-center">
                          <div className={`text-2xl ${stat.color} font-bold`}>{stat.value}</div>
                          <div className="text-[10px] text-neutral-500 uppercase mt-1">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </GlassCard>
                </div>
              </motion.div>

              {/* Concierge Services */}
              <motion.div variants={fadeInUp}>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xs font-mono text-neutral-500 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    Concierge Services
                  </h3>
                  <a href="#" className="text-[10px] text-neutral-400 hover:text-white transition">
                    View Marketplace
                  </a>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {conciergeServices.map((service, index) => (
                    <GlassCard key={index} className="p-4 hover:border-white/10 transition group">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-lg bg-neutral-800 border border-white/5 flex items-center justify-center text-white relative">
                            {index === 0 ? <Scale className="w-6 h-6 text-neutral-400" /> : <SearchCheck className="w-6 h-6 text-neutral-400" />}
                            {service.verified && (
                              <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center border border-neutral-900">
                                <Check className="w-2.5 h-2.5 text-white" />
                              </div>
                            )}
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-white flex items-center gap-2">
                              {service.name}
                              <span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded text-neutral-300">
                                {service.category}
                              </span>
                            </h4>
                            <div className="flex items-center gap-3 mt-1 text-[10px] text-neutral-500 font-mono">
                              <span className="flex items-center gap-1">
                                <Star className="w-3 h-3 text-yellow-500 fill-current" />
                                {service.rating} ({service.reviews})
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {service.responseTime}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button className="px-4 py-2 bg-white/5 border border-white/10 hover:bg-white hover:text-black rounded-lg text-xs font-medium transition duration-300">
                            Get Quote
                          </button>
                        </div>
                      </div>
                    </GlassCard>
                  ))}
                </div>
              </motion.div>

              {/* Floor Plan */}
              <motion.div variants={fadeInUp}>
                <h3 className="text-xs font-mono text-neutral-500 uppercase tracking-widest flex items-center gap-2 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  Floor Plan
                </h3>
                <GlassCard className="p-6 hover:border-white/10 transition group">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex-1 relative w-full h-64 md:h-56 bg-white/5 rounded-lg border border-white/5 overflow-hidden flex items-center justify-center group-hover:bg-white/10 transition">
                      <div
                        className="absolute inset-0 opacity-20"
                        style={{
                          backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                          backgroundSize: "20px 20px"
                        }}
                      />
                      <div className="text-neutral-600 font-mono text-xs text-center p-4">
                        <Map className="w-8 h-8 mx-auto mb-2 opacity-50" />
                        Schematic Preview
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                        <button className="bg-white text-black text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full shadow-lg transform translate-y-2 group-hover:translate-y-0 transition">
                          View Interactive
                        </button>
                      </div>
                    </div>
                    <div className="w-full md:w-64 space-y-4">
                      <div>
                        <div className="text-white font-medium mb-1">Residence Layout</div>
                        <div className="text-xs text-neutral-500">Total Internal Area: {property.internalSize}m²</div>
                        <div className="text-xs text-neutral-500">External Terraces: 215m²</div>
                      </div>
                      <div className="space-y-2">
                        {["Ground Floor", "Level 1 (Bedrooms)"].map((floor) => (
                          <a
                            key={floor}
                            href="#"
                            className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-xs text-neutral-300 hover:text-white transition group"
                          >
                            <span>{floor}</span>
                            <Download className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>

              {/* Comparable Listings */}
              <motion.div variants={fadeInUp} className="border-t border-white/10 pt-10 mt-10">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xs font-mono text-neutral-500 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    Comparable Listings
                  </h3>
                  <div className="flex gap-2">
                    <button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition">
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition">
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {comparableProperties.map((comp, index) => (
                    <div key={index} className="group relative bg-neutral-900 border border-white/5 rounded-xl overflow-hidden hover:border-white/20 transition cursor-pointer">
                      <div className="h-48 overflow-hidden relative">
                        <img
                          src={comp.image}
                          alt={comp.address}
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                        />
                        <div className={`absolute top-3 right-3 backdrop-blur px-2 py-1 rounded text-[10px] text-white font-mono uppercase ${
                          comp.status.includes("Sold") ? "bg-black/50" : "bg-emerald-500/90"
                        }`}>
                          {comp.status}
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div className="text-white font-medium text-sm">{comp.address}</div>
                          <div className="text-emerald-400 font-mono text-xs">{formatPrice(comp.price)}</div>
                        </div>
                        <div className="text-[10px] text-neutral-500 mb-4">
                          {comp.suburb} • Waterfront
                        </div>
                        <div className="flex gap-3 text-[10px] text-neutral-400 border-t border-white/5 pt-3">
                          <span className="flex items-center gap-1">
                            <BedDouble className="w-3 h-3" />
                            {comp.beds}
                          </span>
                          <span className="flex items-center gap-1">
                            <Bath className="w-3 h-3" />
                            {comp.baths}
                          </span>
                          <span className="flex items-center gap-1">
                            <CarFront className="w-3 h-3" />
                            {comp.cars}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Sticky Sidebar */}
            <div className="lg:col-span-4 relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="sticky top-28 space-y-6"
              >
                {/* Price Card */}
                <GlassCard className="p-6 shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500" />
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <div className="text-[10px] font-mono text-neutral-500 uppercase mb-1">Guide Price</div>
                      <div className="text-3xl font-display text-white tracking-tight">
                        {formatPrice(property.price)}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white hover:text-black transition">
                        <DollarSign className="w-4 h-4" />
                      </button>
                      <button className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                        <Gavel className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-1 mb-4 grid grid-cols-2 gap-1">
                    <button className="text-[10px] font-bold uppercase py-1.5 rounded bg-white text-black shadow">
                      Buy
                    </button>
                    <button className="text-[10px] font-bold uppercase py-1.5 rounded text-neutral-400 hover:text-white hover:bg-white/10 transition">
                      Invest
                    </button>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-xs py-2 border-b border-white/5">
                      <span className="text-neutral-400">Auction Date</span>
                      <span className="text-white font-medium">14 Oct, 11:00am</span>
                    </div>
                    <div className="flex items-center justify-between text-xs py-2 border-b border-white/5">
                      <span className="text-neutral-400">Projected Yield</span>
                      <span className="text-emerald-400 font-medium">~2.4% ($840k pa)</span>
                    </div>
                    <div className="flex items-center justify-between text-xs py-2 border-b border-white/5">
                      <span className="text-neutral-400">Market Interest</span>
                      <span className="text-white font-medium flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                        High
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <button className="w-full bg-white text-black font-bold uppercase tracking-wider text-xs py-3.5 rounded-lg hover:bg-neutral-200 transition shadow-[0_0_20px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2">
                      Make an Offer
                      <ArrowRight className="w-3 h-3" />
                    </button>
                    <button className="w-full bg-transparent border border-white/10 text-white font-bold uppercase tracking-wider text-xs py-3.5 rounded-lg hover:bg-white/5 transition">
                      Register for Auction
                    </button>
                  </div>
                </GlassCard>

                {/* Agent */}
                <GlassCard className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full bg-neutral-800 border border-white/10 overflow-hidden">
                        <img src={property.agent.avatar} alt={property.agent.name} className="w-full h-full object-cover" />
                      </div>
                      {property.agent.online && (
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-black rounded-full flex items-center justify-center border border-white/10">
                          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="text-white font-medium flex items-center gap-1">
                        {property.agent.name}
                        {property.agent.verified && <BadgeCheck className="w-3.5 h-3.5 text-blue-500 fill-blue-500/20" />}
                      </div>
                      <div className="text-xs text-neutral-500 mb-2">{property.agent.title} • {property.agent.company}</div>
                      <div className="flex items-center gap-2">
                        <div className="flex text-yellow-500">
                          {[...Array(property.agent.rating)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-current" />
                          ))}
                        </div>
                        <span className="text-[10px] text-neutral-400">({property.agent.reviews})</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <button className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white py-2.5 rounded-lg text-xs font-medium hover:bg-white/10 transition group">
                      <Phone className="w-3.5 h-3.5 group-hover:text-emerald-400 transition" />
                      Call
                    </button>
                    <button className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white py-2.5 rounded-lg text-xs font-medium hover:bg-white/10 transition group">
                      <MessageCircle className="w-3.5 h-3.5 group-hover:text-blue-400 transition" />
                      Chat
                    </button>
                  </div>
                  <button className="w-full flex items-center justify-center gap-2 bg-transparent border border-white/5 text-neutral-400 py-2 rounded-lg text-[10px] font-mono hover:text-white transition">
                    <Video className="w-3 h-3" />
                    Watch Agent Bio
                  </button>
                </GlassCard>

                {/* Concierge */}
                <GlassCard className="p-5">
                  <h4 className="text-xs font-mono text-neutral-500 uppercase mb-4 tracking-widest flex items-center gap-2">
                    <ConciergeBell className="w-3 h-3" />
                    Concierge
                  </h4>
                  <ul className="space-y-3">
                    {[
                      { icon: Truck, label: "Moving Services" },
                      { icon: Hammer, label: "Renovation Quotes" },
                      { icon: Shield, label: "Insurance" }
                    ].map((item, index) => (
                      <li key={index} className="flex items-center justify-between text-xs group cursor-pointer">
                        <div className="flex items-center gap-2 text-white">
                          <item.icon className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white transition" />
                          {item.label}
                        </div>
                        <ChevronRight className="w-3 h-3 text-neutral-600 group-hover:text-white transition" />
                      </li>
                    ))}
                  </ul>
                </GlassCard>

                {/* Warehaus Commercial */}
                <div className="bg-gradient-to-br from-neutral-900 to-[#0d1117] border border-blue-900/30 rounded-xl p-5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-3 opacity-20">
                    <Building2 className="w-12 h-12 text-blue-500" />
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <PropertyBadge variant="commercial">Warehaus</PropertyBadge>
                    <span className="text-[10px] text-neutral-500">Portfolio Opportunity</span>
                  </div>
                  <h4 className="text-sm font-medium text-white mb-2 pr-8">
                    Expand your portfolio with local commercial assets.
                  </h4>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded bg-neutral-800 border border-white/5 overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=100&q=80" alt="Commercial" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="text-[10px] text-white">142 New South Head Rd</div>
                      <div className="text-[10px] text-neutral-500">Retail • 6% Yield</div>
                    </div>
                  </div>
                  <a href="#" className="inline-flex items-center gap-1 text-[10px] text-blue-400 hover:text-blue-300 transition">
                    View Commercial Listing
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#020202] pt-16 pb-8 relative z-10">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
            <div className="col-span-2">
              <div className="w-8 h-8 bg-white text-black rounded flex items-center justify-center font-display font-bold tracking-tighter mb-6">
                H.
              </div>
              <p className="text-xs text-neutral-500 max-w-xs leading-relaxed">
                Redefining luxury real estate with data-driven insights and world-class design. Experience the future of property.
              </p>
            </div>
            <div>
              <h5 className="text-white font-medium text-xs mb-4">Marketplace</h5>
              <ul className="space-y-3 text-xs text-neutral-500">
                <li><a href="#" className="hover:text-white transition">Find Buyers Agent</a></li>
                <li><a href="#" className="hover:text-white transition">Get Conveyancing Quote</a></li>
                <li><a href="#" className="hover:text-white transition">Building Inspectors</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-medium text-xs mb-4">Warehaus</h5>
              <ul className="space-y-3 text-xs text-neutral-500">
                <li><a href="#" className="hover:text-white transition">Commercial For Sale</a></li>
                <li><a href="#" className="hover:text-white transition">Lease Opportunities</a></li>
                <li><a href="#" className="hover:text-white transition">Industrial Zoning</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-medium text-xs mb-4">Social</h5>
              <div className="flex gap-4">
                <a href="#" className="text-neutral-500 hover:text-white transition">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="text-neutral-500 hover:text-white transition">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="text-neutral-500 hover:text-white transition">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
            <div className="text-[10px] text-neutral-600 font-mono">
              © 2025 HAUS Real Estate Group.
            </div>
            <div className="flex gap-6 text-[10px] text-neutral-600 font-mono">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Action Bar */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-zinc-950/90 backdrop-blur-xl border-t border-white/10 p-4 flex gap-3">
        <button className="flex-1 bg-white text-black font-bold uppercase tracking-wider py-3 rounded-lg text-xs">
          Make Offer
        </button>
        <button className="flex-1 bg-white/10 border border-white/10 text-white font-bold uppercase tracking-wider py-3 rounded-lg text-xs">
          Enquire
        </button>
      </div>
    </div>
  )
}
