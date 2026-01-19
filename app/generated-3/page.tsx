"use client"

/**
 * HAUS Prestige Property Listing
 *
 * @description
 * Premium property listing page for 12 Wolseley Rd, Point Piper.
 * Features bento-grid gallery, AI market insights, mortgage estimator,
 * and luxury real estate UI components.
 *
 * @route /generated-3
 *
 * @features
 * - Responsive bento-grid image gallery
 * - Haus Intelligence AI market analysis
 * - Interactive mortgage estimator
 * - Property amenities with icons
 * - Virtual tour integration
 * - Floor plan viewer
 * - Agent profile with contact
 * - Location map with nearby amenities
 * - Similar properties carousel
 *
 * @component
 */

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Search,
  User,
  ArrowUpRight,
  Share2,
  Heart,
  MapPin,
  Grid,
  Sparkles,
  Gavel,
  Phone,
  Mail,
  Anchor,
  Wine,
  Film,
  Waves,
  ShieldCheck,
  Server,
  GraduationCap,
  Utensils,
  Ship as ShipIcon,
  Palmtree,
  TrendingUp,
  Star,
  Download,
  Play
} from "lucide-react"
import { cn } from "@/lib/utils"

/**
 * Property data for 12 Wolseley Rd, Point Piper
 */
const PROPERTY_DATA = {
  title: "12 Wolseley Road",
  address: "Point Piper, New South Wales 2027",
  badges: [
    { text: "Active Listing", color: "emerald" },
    { text: "Prestige Collection", color: "neutral" }
  ],
  price: {
    display: "$35,000,000",
    guide: "$35M - $38.5M",
    auctionDate: "14 Oct, 11:00am",
    councilRates: "$4,200 pq"
  },
  images: [
    {
      url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1600&auto=format&fit=crop",
      alt: "Facade",
      main: true
    },
    {
      url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
      alt: "Pool"
    },
    {
      url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop",
      alt: "Kitchen"
    },
    {
      url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop",
      alt: "View"
    },
    {
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
      alt: "Interior"
    }
  ],
  stats: [
    { icon: "bed", label: "5 Bed", sublabel: "Master Retreat" },
    { icon: "bath", label: "6 Bath", sublabel: "Heated Floors" },
    { icon: "car", label: "4 Car", sublabel: "Turntable" },
    { icon: "scale", label: "892m²", sublabel: "Internal Living" }
  ],
  description: [
    "A monumental residence of rare distinction, this architectural masterpiece commands an iconic position on Australia's most prestigious street. Designed to dissolve the boundaries between the built form and the Sydney Harbour spectacle, the home offers an unparalleled waterfront lifestyle.",
    "Spanning four expansive levels connected by a commercial-grade lift, the residence features floor-to-ceiling vitrine glass, a state-of-the-art Wolf & Sub-Zero kitchen, and a temperature-controlled wine cellar housing 2,000 bottles. The outdoor entertaining haven flows seamlessly to a heated infinity pool and private deep-water jetty."
  ],
  aiInsights: {
    valueRange: "$35.2M - $38.5M",
    target: "$36M",
    yield: "2.4%",
    growth: "+42%",
    demand: "High Demand",
    performance: "+12.5%"
  },
  amenities: [
    { icon: Anchor, label: "Deep Water Jetty" },
    { icon: Wine, label: "2000 Bottle Cellar" },
    { icon: Film, label: "Cinema Room" },
    { icon: Waves, label: "Infinity Pool" },
    { icon: ShieldCheck, label: "Biometric Security" },
    { icon: Server, label: "Smart Home Automation" }
  ],
  floorplan: {
    internal: "892m²",
    external: "215m²",
    levels: ["Ground Floor", "Level 1 (Bedrooms)", "Lower Entertainment"]
  },
  agent: {
    name: "Alexander Phillips",
    role: "Principal • HAUS Prestige",
    rating: "4.9",
    reviews: 124,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200"
  },
  mortgage: {
    deposit: 20,
    monthly: "$142,500",
    rate: "6.14% p.a.",
    years: 30
  },
  inspections: [
    { date: "14", month: "Oct", day: "Saturday", time: "11:00am - 11:45am" },
    { date: "18", month: "Oct", day: "Wednesday", time: "6:00pm - 6:30pm" }
  ],
  propertyDetails: {
    type: "House",
    yearBuilt: "2018",
    aspect: "North-East",
    zoning: "R2 Low Density",
    landSize: "1,107m²",
    internal: "892m²"
  },
  neighbourhood: {
    name: "Point Piper",
    postcode: "2027",
    description: "Exclusive harbourfront enclave known for panoramic views and Australia's most prestigious real estate.",
    medianPrice: "$15.5M",
    growth: "+12.5%"
  },
  location: {
    education: { name: "Scots College", distance: "0.8 km", icon: GraduationCap },
    dining: { name: "Catalina", distance: "1.2 km", icon: Utensils },
    transport: { name: "Rose Bay Ferry", distance: "1.5 km", icon: ShipIcon },
    lifestyle: { name: "RMC Golf Club", distance: "2.1 km", icon: Palmtree }
  },
  similarProperties: [
    {
      id: "1",
      title: "38 Coolong Road",
      suburb: "Vaucluse",
      price: "$28M",
      beds: 5,
      baths: 4,
      cars: 3,
      image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"
    },
    {
      id: "2",
      title: "88 Wolseley Road",
      suburb: "Point Piper",
      price: "$42M",
      beds: 6,
      baths: 7,
      cars: 6,
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: "3",
      title: "The Penthouse",
      suburb: "Rose Bay",
      price: "Contact Agent",
      beds: 3,
      baths: 3.5,
      cars: 2,
      image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"
    },
    {
      id: "4",
      title: "15 Victoria Road",
      suburb: "Bellevue Hill",
      price: "$19.5M",
      beds: 5,
      baths: 4,
      cars: 2,
      image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=600&auto=format&fit=crop"
    }
  ]
}

// Icon mapping component
const IconMap = {
  bed: () => <span className="iconify" data-icon="lucide:bed-double" data-width="18" data-stroke-width="1.5" />,
  bath: () => <span className="iconify" data-icon="lucide:bath" data-width="18" data-stroke-width="1.5" />,
  car: () => <span className="iconify" data-icon="lucide:car" data-width="18" data-stroke-width="1.5" />,
  scale: () => <span className="iconify" data-icon="lucide:scaling" data-width="18" data-stroke-width="1.5" />,
  search: () => <span className="iconify" data-icon="lucide:search" data-width="14" data-stroke-width="1.5" />,
  download: () => <span className="iconify" data-icon="lucide:download" data-width="14" />
}

export default function HausPrestigeListing() {
  const [isSaved, setIsSaved] = useState(false)

  return (
    <div className="min-h-screen bg-[#030303] text-[#e5e5e5] font-sans antialiased overflow-x-hidden">
      {/* Background Texture */}
      <div className="fixed inset-0 z-0 w-full h-full pointer-events-none opacity-20"
        style={{
          backgroundImage: "radial-gradient(#333 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(circle at 50% 0%, black, transparent 80%)"
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/5 backdrop-blur-md border border-white/8 border-b-0 border-b-white/5">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 h-14 md:h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-white text-black rounded flex items-center justify-center font-display font-semibold text-sm tracking-tighter group-hover:scale-95 transition-transform">
                H.
              </div>
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link href="#" className="text-xs font-medium text-white hover:text-white/70 transition">
                Buy
              </Link>
              <Link href="#" className="text-xs font-medium text-neutral-400 hover:text-white transition">
                Rent
              </Link>
              <Link href="#" className="text-xs font-medium text-neutral-400 hover:text-white transition">
                Sell
              </Link>
              <Link href="#" className="text-xs font-medium text-neutral-400 hover:text-white transition">
                Market Insights
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center bg-white/5 border border-white/5 rounded-full px-3 py-1.5 w-64 gap-2 focus-within:bg-white/10 focus-within:border-white/10 transition group">
              <span className="iconify text-neutral-500 group-focus-within:text-white transition" data-icon="lucide:search" data-width="14" data-stroke-width="1.5"></span>
              <input
                type="text"
                placeholder="Search properties..."
                className="bg-transparent border-none text-xs text-white placeholder-neutral-500 focus:outline-none w-full font-mono"
              />
              <div className="hidden lg:block text-[10px] text-neutral-600 font-mono">
                /
              </div>
            </div>
            <button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition duration-300">
              <User className="w-[14px] h-[14px]" strokeWidth="1.5" />
            </button>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-24 pb-20">
        {/* Header Section */}
        <header className="max-w-[1400px] mx-auto px-4 md:px-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Active Listing
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-white/5 text-neutral-400 border border-white/5">
                  Prestige Collection
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-medium text-white tracking-tight leading-[0.9]">
                12 Wolseley Road
                <span className="text-neutral-600">.</span>
              </h1>
              <div className="flex items-center gap-2 text-neutral-400">
                <MapPin className="w-[14px] h-[14px]" strokeWidth="1.5" />
                <span className="text-sm font-medium">
                  Point Piper, New South Wales 2027
                </span>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black hover:bg-neutral-200 transition">
                <span className="text-xs font-medium">Book Inspection</span>
                <ArrowUpRight className="w-[14px] h-[14px] group-hover:translate-x-0.5 transition-transform" strokeWidth="1.5" />
              </button>
              <button className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/5 transition">
                <Share2 className="w-4 h-4" strokeWidth="1.5" />
              </button>
              <button
                onClick={() => setIsSaved(!isSaved)}
                className={cn(
                  "w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center transition",
                  isSaved
                    ? "text-red-400 bg-red-400/5 border-red-400/20"
                    : "text-neutral-400 hover:text-red-400 hover:bg-red-400/5 hover:border-red-400/20"
                )}
              >
                <Heart className={cn("w-4 h-4", isSaved && "fill-current")} strokeWidth="1.5" />
              </button>
            </div>
          </div>
        </header>

        {/* Bento Grid Gallery */}
        <section className="max-w-[1400px] mx-auto px-4 md:px-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 md:h-[600px] gap-2 rounded-2xl overflow-hidden">
            {/* Main */}
            <div className="md:col-span-2 md:row-span-2 relative group cursor-zoom-in overflow-hidden">
              <img
                src={PROPERTY_DATA.images[0].url}
                alt={PROPERTY_DATA.images[0].alt}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
            </div>
            {/* Sub 1 */}
            <div className="relative group cursor-pointer overflow-hidden bg-neutral-900">
              <img
                src={PROPERTY_DATA.images[1].url}
                alt={PROPERTY_DATA.images[1].alt}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
            {/* Sub 2 */}
            <div className="relative group cursor-pointer overflow-hidden bg-neutral-900">
              <img
                src={PROPERTY_DATA.images[2].url}
                alt={PROPERTY_DATA.images[2].alt}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
            {/* Sub 3 */}
            <div className="relative group cursor-pointer overflow-hidden bg-neutral-900">
              <img
                src={PROPERTY_DATA.images[3].url}
                alt={PROPERTY_DATA.images[3].alt}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
            {/* More */}
            <div className="relative group cursor-pointer overflow-hidden bg-neutral-900">
              <img
                src={PROPERTY_DATA.images[4].url}
                alt={PROPERTY_DATA.images[4].alt}
                className="w-full h-full object-cover opacity-50 transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-md text-xs font-medium text-white flex items-center gap-2 hover:bg-white hover:text-black transition">
                  <Grid className="w-3 h-3" strokeWidth="1.5" />
                  View All Photos
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Layout */}
        <div className="max-w-[1400px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left Column (Details) */}
            <div className="lg:col-span-8 space-y-16">
              {/* Stats Strip */}
              <div className="flex flex-wrap items-center justify-between border-y border-white/10 py-6 gap-6">
                {PROPERTY_DATA.stats.map((stat, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white border border-white/5">
                      <span className="iconify" data-icon={`lucide:${stat.icon}`} data-width="18" data-stroke-width="1.5"></span>
                    </div>
                    <div>
                      <div className="text-sm text-white font-medium">{stat.label}</div>
                      <div className="text-[10px] text-neutral-500 font-mono uppercase">
                        {stat.sublabel}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div className="space-y-6">
                <h3 className="text-xs font-mono text-neutral-500 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-white/20"></span>
                  Overview
                </h3>
                <div className="prose prose-invert prose-lg max-w-none">
                  {PROPERTY_DATA.description.map((paragraph, idx) => (
                    <p key={idx} className="text-neutral-300 font-light leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <button className="flex items-center gap-2 text-xs font-medium text-white hover:text-neutral-300 transition group">
                  Read Full Specification
                  <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="14" data-stroke-width="1.5"></span>
                </button>
              </div>

              {/* HAUS Intelligence 2.0 */}
              <div className="bg-neutral-900/30 border border-white/10 rounded-2xl p-1 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="bg-black/40 backdrop-blur rounded-xl p-8 border border-white/5 relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white">
                        <Sparkles className="w-4 h-4" strokeWidth="1.5" />
                      </div>
                      <div>
                        <h3 className="font-display font-medium text-lg text-white">
                          Haus Intelligence™
                        </h3>
                        <div className="text-[10px] text-neutral-400 font-mono">
                          AI-POWERED MARKET ANALYSIS
                        </div>
                      </div>
                    </div>
                    <div className="px-2 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded text-[10px] text-emerald-400 font-mono uppercase">
                      High Demand
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Valuation & Metrics */}
                    <div className="space-y-6">
                      <div>
                        <div className="text-xs text-neutral-500 mb-1">
                          Estimated Value Range
                        </div>
                        <div className="text-2xl font-display text-white tracking-tight">
                          {PROPERTY_DATA.aiInsights.valueRange}
                        </div>
                        <div className="w-full bg-neutral-800 h-1.5 rounded-full mt-3 overflow-hidden">
                          <div className="bg-indigo-500 h-full w-[85%] rounded-full relative">
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
                          </div>
                        </div>
                        <div className="flex justify-between text-[10px] text-neutral-500 font-mono mt-1">
                          <span>$30M</span>
                          <span>Target: {PROPERTY_DATA.aiInsights.target}</span>
                          <span>$40M</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                          <div className="text-[10px] text-neutral-500 uppercase mb-1">
                            Yield
                          </div>
                          <div className="text-white font-mono">{PROPERTY_DATA.aiInsights.yield}</div>
                        </div>
                        <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                          <div className="text-[10px] text-neutral-500 uppercase mb-1">
                            Growth (5y)
                          </div>
                          <div className="text-emerald-400 font-mono">{PROPERTY_DATA.aiInsights.growth}</div>
                        </div>
                      </div>
                    </div>

                    {/* Price History Graph */}
                    <div>
                      <div className="text-xs text-neutral-500 mb-4 flex justify-between">
                        <span>Suburb Performance (12 Mo)</span>
                        <span className="text-emerald-400">{PROPERTY_DATA.aiInsights.performance}</span>
                      </div>
                      <div className="h-32 flex items-end justify-between gap-2">
                        {[40, 45, 35, 50, 60, 55, 85, 75].map((height, idx) => (
                          <div
                            key={idx}
                            className={cn(
                              "w-full rounded-t-sm hover:bg-indigo-500/50 transition duration-300 relative group",
                              idx === 6 ? "bg-indigo-500/80 shadow-[0_0_15px_rgba(99,102,241,0.4)]" : "bg-white/5"
                            )}
                            style={{ height: `${height}%` }}
                          >
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-neutral-800 text-white text-[9px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition">
                              {["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May"][idx]}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 flex gap-3">
                        <button className="flex-1 py-2 bg-white/5 hover:bg-white/10 border border-white/5 rounded text-[10px] text-white font-mono uppercase transition">
                          Full Report
                        </button>
                        <button className="flex-1 py-2 bg-white/5 hover:bg-white/10 border border-white/5 rounded text-[10px] text-white font-mono uppercase transition">
                          Contract
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Amenities Grid */}
              <div>
                <h3 className="text-xs font-mono text-neutral-500 uppercase tracking-widest flex items-center gap-2 mb-6">
                  <span className="w-2 h-2 rounded-full bg-white/20"></span>
                  Amenities
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {PROPERTY_DATA.amenities.map((amenity, idx) => {
                    const IconComponent = amenity.icon
                    return (
                      <div key={idx} className="flex items-center gap-3 p-4 rounded-lg bg-neutral-900 border border-white/5 hover:border-white/10 transition group">
                        <IconComponent className="w-[18px] h-[18px] text-neutral-400 group-hover:text-white transition" strokeWidth="1.5" />
                        <span className="text-sm text-neutral-300">{amenity.label}</span>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Virtual Tour Placeholder */}
              <div className="rounded-xl overflow-hidden border border-white/10 relative group h-80 flex items-center justify-center bg-neutral-900 cursor-pointer">
                <div
                  className="absolute inset-0 bg-cover opacity-20 scale-105 group-hover:scale-100 transition duration-1000"
                  style={{ backgroundImage: "url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c)" }}
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition duration-300">
                    <Play className="w-6 h-6" strokeWidth="1.5" />
                  </div>
                  <div className="text-center">
                    <div className="text-white font-medium">Virtual Walkthrough</div>
                    <div className="text-xs text-neutral-400 mt-1">
                      Explore 892m² in 3D
                    </div>
                  </div>
                </div>
              </div>

              {/* Floor Plan Section */}
              <div>
                <h3 className="text-xs font-mono text-neutral-500 uppercase tracking-widest flex items-center gap-2 mb-6">
                  <span className="w-2 h-2 rounded-full bg-white/20"></span>
                  Floor Plan
                </h3>
                <div className="bg-neutral-900 border border-white/5 rounded-xl p-6 hover:border-white/10 transition group">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex-1 relative w-full h-64 md:h-56 bg-white/5 rounded-lg border border-white/5 overflow-hidden flex items-center justify-center group-hover:bg-white/10 transition">
                      <div
                        className="absolute inset-0 opacity-20"
                        style={{
                          backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                          backgroundSize: "20px 20px"
                        }}
                      />
                      <img
                        src="https://images.unsplash.com/photo-1594132692224-b1eb21c1723f?q=80&w=800&auto=format&fit=crop"
                        alt="Floorplan"
                        className="h-full object-contain invert opacity-70 mix-blend-screen"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                        <button className="bg-white text-black text-xs font-medium px-4 py-2 rounded-full shadow-lg transform translate-y-2 group-hover:translate-y-0 transition">
                          View Interactive
                        </button>
                      </div>
                    </div>
                    <div className="w-full md:w-64 space-y-6">
                      <div>
                        <div className="text-white font-medium mb-1">
                          Residence Layout
                        </div>
                        <div className="text-xs text-neutral-500">
                          Total Internal Area: {PROPERTY_DATA.floorplan.internal}
                        </div>
                        <div className="text-xs text-neutral-500">
                          External Terraces: {PROPERTY_DATA.floorplan.external}
                        </div>
                      </div>
                      <div className="space-y-2">
                        {PROPERTY_DATA.floorplan.levels.map((level, idx) => (
                          <a
                            key={idx}
                            href="#"
                            className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-xs text-neutral-300 hover:text-white transition group/btn"
                          >
                            <span>{level}</span>
                            <Download className="w-3.5 h-3.5 opacity-0 group-hover/btn:opacity-100 transition" strokeWidth="1.5" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Location Section */}
              <div>
                <h3 className="text-xs font-mono text-neutral-500 uppercase tracking-widest flex items-center gap-2 mb-6">
                  <span className="w-2 h-2 rounded-full bg-white/20"></span>
                  Location
                </h3>
                <div className="rounded-xl overflow-hidden border border-white/10 h-[400px] relative group">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.984087114758!2d151.2505563!3d-33.8642232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ac6507c9d967%3A0x6b0060965768e16a!2s12%20Wolseley%20Rd%2C%20Point%20Piper%20NSW%202027%2C%20Australia!5e0!3m2!1sen!2sus!4v1709400000000!5m2!1sen!2sus"
                    className="w-full h-full"
                    style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(85%)" }}
                    allowFullScreen
                    loading="lazy"
                  />

                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent pt-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {Object.values(PROPERTY_DATA.location).map((item, idx) => {
                        const IconComponent = item.icon
                        return (
                          <div
                            key={idx}
                            className="bg-white/5 backdrop-blur-md border border-white/10 p-3 rounded-lg hover:bg-white/10 transition cursor-default"
                          >
                            <div className="flex items-center gap-2 mb-1.5">
                              <IconComponent className="w-3 h-3 text-neutral-400" strokeWidth="1.5" />
                              <div className="text-[10px] text-neutral-400 uppercase">
                                {["Education", "Dining", "Transport", "Lifestyle"][idx]}
                              </div>
                            </div>
                            <div className="text-xs text-white font-medium">
                              {item.name}
                            </div>
                            <div className="text-[10px] text-emerald-400 mt-0.5">
                              {item.distance}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column (Sticky Sidebar) */}
            <div className="lg:col-span-4 relative">
              <div className="sticky top-28 space-y-6">
                {/* Price Card */}
                <div className="bg-neutral-900/80 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-2xl">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <div className="text-[10px] font-mono text-neutral-500 uppercase mb-1">
                        Guide Price
                      </div>
                      <div className="text-3xl font-display text-white tracking-tight">
                        {PROPERTY_DATA.price.display}
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                      <Gavel className="w-3.5 h-3.5" strokeWidth="1.5" />
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-xs py-2 border-b border-white/5">
                      <span className="text-neutral-400">Auction Date</span>
                      <span className="text-white font-medium">{PROPERTY_DATA.price.auctionDate}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs py-2 border-b border-white/5">
                      <span className="text-neutral-400">Council Rates</span>
                      <span className="text-white font-medium">{PROPERTY_DATA.price.councilRates}</span>
                    </div>
                  </div>

                  <button className="w-full bg-white text-black font-medium py-3 rounded-lg hover:bg-neutral-200 transition mb-3">
                    Register Interest
                  </button>
                  <button className="w-full bg-transparent border border-white/10 text-white font-medium py-3 rounded-lg hover:bg-white/5 transition">
                    Make an Offer
                  </button>
                </div>

                {/* Agent Profile */}
                <div className="bg-neutral-900 border border-white/10 rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-full bg-neutral-800 border border-white/10 overflow-hidden">
                        <img
                          src={PROPERTY_DATA.agent.image}
                          alt={PROPERTY_DATA.agent.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-black rounded-full flex items-center justify-center border border-white/10">
                        <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                      </div>
                    </div>
                    <div>
                      <div className="text-white font-medium">{PROPERTY_DATA.agent.name}</div>
                      <div className="text-xs text-neutral-500 mb-1">
                        {PROPERTY_DATA.agent.role}
                      </div>
                      <div className="flex gap-1">
                        <Star className="w-2.5 h-2.5 text-yellow-500 fill-current" />
                        <span className="text-[10px] text-white">
                          {PROPERTY_DATA.agent.rating} ({PROPERTY_DATA.agent.reviews} reviews)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white py-2.5 rounded-lg text-xs font-medium hover:bg-white/10 transition">
                      <Phone className="w-3.5 h-3.5" strokeWidth="1.5" />
                      Call
                    </button>
                    <button className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white py-2.5 rounded-lg text-xs font-medium hover:bg-white/10 transition">
                      <Mail className="w-3.5 h-3.5" strokeWidth="1.5" />
                      Email
                    </button>
                  </div>
                </div>

                {/* Mortgage Estimator */}
                <div className="bg-neutral-900 border border-white/10 rounded-xl p-6">
                  <h4 className="text-xs font-mono text-neutral-500 uppercase mb-4">
                    Mortgage Estimator
                  </h4>
                  <div className="mb-4">
                    <div className="flex justify-between text-xs mb-2">
                      <span className="text-neutral-400">Deposit (20%)</span>
                      <span className="text-white">$7,000,000</span>
                    </div>
                    <input
                      type="range"
                      className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer"
                      min="0"
                      max="100"
                      defaultValue={PROPERTY_DATA.mortgage.deposit}
                    />
                  </div>
                  <div className="flex items-end gap-2">
                    <span className="text-2xl text-white font-display tracking-tight">
                      {PROPERTY_DATA.mortgage.monthly}
                    </span>
                    <span className="text-xs text-neutral-500 mb-1">/ month</span>
                  </div>
                  <p className="text-[10px] text-neutral-600 mt-2">
                    Based on {PROPERTY_DATA.mortgage.rate} over {PROPERTY_DATA.mortgage.years} years.
                  </p>
                </div>

                {/* Inspections */}
                <div className="bg-neutral-900 border border-white/10 rounded-xl p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-xs font-mono text-neutral-500 uppercase">
                      Inspections
                    </h4>
                    <button className="text-[10px] text-white hover:underline">
                      Add to Calendar
                    </button>
                  </div>
                  <div className="space-y-3">
                    {PROPERTY_DATA.inspections.map((inspection, idx) => (
                      <div key={idx} className="flex items-center justify-between group cursor-pointer">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded bg-white/5 flex flex-col items-center justify-center text-white border border-white/5 group-hover:bg-white/10 transition">
                            <span className="text-[9px] uppercase font-mono text-neutral-400">
                              {inspection.month}
                            </span>
                            <span className="font-display font-medium text-sm leading-none">
                              {inspection.date}
                            </span>
                          </div>
                          <div>
                            <div className="text-xs text-white font-medium">
                              {inspection.day}
                            </div>
                            <div className="text-[10px] text-neutral-500">
                              {inspection.time}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Property Details */}
                <div className="bg-neutral-900 border border-white/10 rounded-xl p-6">
                  <h4 className="text-xs font-mono text-neutral-500 uppercase mb-4">
                    Property Details
                  </h4>
                  <div className="grid grid-cols-2 gap-y-4 gap-x-2">
                    <div>
                      <div className="text-[10px] text-neutral-500 uppercase mb-0.5">
                        Type
                      </div>
                      <div className="text-xs text-white">{PROPERTY_DATA.propertyDetails.type}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-neutral-500 uppercase mb-0.5">
                        Year Built
                      </div>
                      <div className="text-xs text-white">{PROPERTY_DATA.propertyDetails.yearBuilt}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-neutral-500 uppercase mb-0.5">
                        Aspect
                      </div>
                      <div className="text-xs text-white">{PROPERTY_DATA.propertyDetails.aspect}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-neutral-500 uppercase mb-0.5">
                        Zoning
                      </div>
                      <div className="text-xs text-white">{PROPERTY_DATA.propertyDetails.zoning}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-neutral-500 uppercase mb-0.5">
                        Land Size
                      </div>
                      <div className="text-xs text-white">{PROPERTY_DATA.propertyDetails.landSize}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-neutral-500 uppercase mb-0.5">
                        Internal
                      </div>
                      <div className="text-xs text-white">{PROPERTY_DATA.propertyDetails.internal}</div>
                    </div>
                  </div>
                </div>

                {/* Neighbourhood */}
                <div className="bg-neutral-900 border border-white/10 rounded-xl p-6 relative overflow-hidden group">
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/20 transition duration-700" />
                  <h4 className="text-xs font-mono text-neutral-500 uppercase mb-4 relative z-10">
                    Neighbourhood
                  </h4>
                  <div className="relative z-10">
                    <div className="flex items-baseline gap-2 mb-1">
                      <h3 className="text-xl font-display text-white">{PROPERTY_DATA.neighbourhood.name}</h3>
                      <span className="text-[10px] text-neutral-500 font-mono">
                        {PROPERTY_DATA.neighbourhood.postcode}
                      </span>
                    </div>
                    <p className="text-[10px] text-neutral-400 leading-relaxed mb-4">
                      {PROPERTY_DATA.neighbourhood.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-black/20 p-2 rounded border border-white/5">
                        <div className="text-[9px] text-neutral-500 uppercase mb-1">
                          Median Price
                        </div>
                        <div className="text-white text-sm font-medium">{PROPERTY_DATA.neighbourhood.medianPrice}</div>
                      </div>
                      <div className="bg-black/20 p-2 rounded border border-white/5">
                        <div className="text-[9px] text-neutral-500 uppercase mb-1">
                          Growth
                        </div>
                        <div className="text-emerald-400 text-sm font-medium flex items-center gap-1">
                          <TrendingUp className="w-2.5 h-2.5" strokeWidth="1.5" />
                          {PROPERTY_DATA.neighbourhood.growth}
                        </div>
                      </div>
                    </div>
                    <button className="w-full py-2 bg-white/5 hover:bg-white text-white hover:text-black rounded text-[10px] font-medium transition duration-300">
                      View Suburb Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Listings */}
        <section className="border-t border-white/10 mt-24 py-16">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6">
            <div className="flex justify-between items-end mb-8">
              <h2 className="text-xl font-display text-white">Similar Properties</h2>
              <Link href="#" className="text-xs font-mono text-neutral-400 hover:text-white transition">
                View all
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {PROPERTY_DATA.similarProperties.map((property) => (
                <div key={property.id} className="group cursor-pointer">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden relative mb-3 bg-neutral-900">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute top-2 left-2 px-2 py-1 bg-black/60 backdrop-blur rounded text-[10px] text-white font-mono uppercase">
                      {property.suburb}
                    </div>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-white text-sm font-medium">
                        {property.title}
                      </div>
                      <div className="text-neutral-500 text-xs">
                        {property.beds} Bed • {property.baths} Bath • {property.cars} Car
                      </div>
                    </div>
                    <div className="text-white text-sm font-mono">{property.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#050505] pt-16 pb-8">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
            <div className="col-span-2">
              <div className="w-8 h-8 bg-white text-black rounded flex items-center justify-center font-display font-semibold text-sm tracking-tighter mb-6">
                H.
              </div>
              <p className="text-xs text-neutral-500 max-w-xs leading-relaxed">
                Redefining luxury real estate with data-driven insights and world-class design. Experience the future of property.
              </p>
            </div>
            <div>
              <h5 className="text-white font-medium text-xs mb-4">Company</h5>
              <ul className="space-y-3 text-xs text-neutral-500">
                <li><Link href="#" className="hover:text-white transition">About</Link></li>
                <li><Link href="#" className="hover:text-white transition">Careers</Link></li>
                <li><Link href="#" className="hover:text-white transition">Press</Link></li>
                <li><Link href="#" className="hover:text-white transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-medium text-xs mb-4">Resources</h5>
              <ul className="space-y-3 text-xs text-neutral-500">
                <li><Link href="#" className="hover:text-white transition">Market Reports</Link></li>
                <li><Link href="#" className="hover:text-white transition">Haus Intelligence</Link></li>
                <li><Link href="#" className="hover:text-white transition">Concierge</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-medium text-xs mb-4">Social</h5>
              <div className="flex gap-4">
                <Link href="#" className="text-neutral-500 hover:text-white transition">
                  <span className="iconify" data-icon="lucide:instagram" data-width="16"></span>
                </Link>
                <Link href="#" className="text-neutral-500 hover:text-white transition">
                  <span className="iconify" data-icon="lucide:twitter" data-width="16"></span>
                </Link>
                <Link href="#" className="text-neutral-500 hover:text-white transition">
                  <span className="iconify" data-icon="lucide:linkedin" data-width="16"></span>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
            <div className="text-[10px] text-neutral-600 font-mono">
              © 2025 HAUS Real Estate Group.
            </div>
            <div className="flex gap-6 text-[10px] text-neutral-600 font-mono">
              <Link href="#" className="hover:text-white transition">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
