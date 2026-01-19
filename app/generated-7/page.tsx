"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import {
  Mic,
  MapPin,
  Bed,
  Bath,
  Car,
  ShieldCheck,
  TrendingUp,
  List,
  Map,
  ChevronDown,
  Shield,
  Database,
  Mail,
  Phone,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface PropertyCard {
  id: string
  title: string
  address: string
  price: string
  bedrooms: number
  bathrooms: number
  parking: number
  image: string
  score: number
  badge?: string
}

const mockProperties: PropertyCard[] = [
  {
    id: "1",
    title: "Bondi Penthouse",
    address: "Campbell Parade, NSW 2026",
    price: "$4.2M AUD",
    bedrooms: 3,
    bathrooms: 2,
    parking: 2,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600",
    score: 94,
    badge: "3.4% Yield",
  },
  {
    id: "2",
    title: "Heritage Terrace",
    address: "Gertrude St, Fitzroy VIC",
    price: "$1.85M AUD",
    bedrooms: 2,
    bathrooms: 1,
    parking: 0,
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg",
    score: 88,
    badge: "+8.2% Growth",
  },
  {
    id: "3",
    title: "River Quay",
    address: "Eagle St, Brisbane City",
    price: "$950K AUD",
    bedrooms: 2,
    bathrooms: 2,
    parking: 1,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1600",
    score: 91,
    badge: "5.1% ROI",
  },
]

export default function PropertySearchPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [loaderProgress, setLoaderProgress] = useState(0)
  const [voiceActive, setVoiceActive] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    const progressTimer = setInterval(() => {
      setLoaderProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer)
          return 100
        }
        return prev + 2
      })
    }, 30)

    return () => {
      clearTimeout(timer)
      clearInterval(progressTimer)
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#F5F5F7] text-[#0A0A0A] font-sans selection:bg-[#0A0A0A] selection:text-white overflow-x-hidden">
      {/* Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.035] noise-bg" />

      {/* Preloader */}
      {isLoading && (
        <div className="fixed inset-0 z-[9999] bg-[#0A0A0A] text-white flex flex-col items-center justify-center">
          <div className="overflow-hidden h-[1.2em] mb-6">
            <div className="font-display text-8xl md:text-9xl font-medium tracking-tighter leading-none translate-y-0">
              {loaderProgress}
            </div>
          </div>
          <div className="w-64 h-[1px] bg-white/10 overflow-hidden">
            <div
              className="h-full bg-white transition-all duration-100 ease-out"
              style={{ width: `${loaderProgress}%` }}
            />
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed top-0 w-full px-6 py-6 md:px-12 md:py-8 flex justify-between items-center z-50 mix-blend-difference text-white">
        <Link
          href="/"
          className="font-display text-lg font-medium tracking-tight flex items-center gap-2"
        >
          HAUS
        </Link>
        <div className="hidden md:flex gap-8 text-xs font-medium tracking-widest uppercase opacity-70">
          <Link
            href="#"
            className="hover:opacity-100 transition-opacity"
          >
            Market
          </Link>
          <Link
            href="#"
            className="hover:opacity-100 transition-opacity"
          >
            Intelligence
          </Link>
          <Link
            href="#"
            className="hover:opacity-100 transition-opacity"
          >
            API
          </Link>
          <Link
            href="#"
            className="hover:opacity-100 transition-opacity"
          >
            Log In
          </Link>
        </div>
        <button className="md:hidden group text-white">
          <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
            <span className="block w-full h-px bg-white group-hover:w-3/4 transition-all" />
            <span className="block w-full h-px bg-white group-hover:w-1/2 transition-all" />
          </div>
        </button>
      </nav>

      {/* Main Content Wrapper */}
      <div className="relative z-10 bg-[#F5F5F7] mb-[100vh] shadow-[0_50px_100px_rgba(0,0,0,0.1)] rounded-b-3xl overflow-hidden">
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="h-screen relative flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0 w-full h-full">
            <img
              src="https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=3840&auto=format&fit=crop"
              className="w-full h-full object-cover brightness-[0.25] grayscale contrast-125 hero-image"
              alt="Hero"
            />
            <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
          </div>

          <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-6">
            {/* Voice Orb */}
            <button
              onClick={() => setVoiceActive(!voiceActive)}
              className="relative mb-12 group cursor-pointer"
            >
              <div
                className={cn(
                  "w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 blur-md shadow-[0_0_80px_rgba(16,185,129,0.4)] flex items-center justify-center relative z-10 transition-all duration-500",
                  "group-hover:scale-110",
                  voiceActive && "scale-110 animate-pulse"
                )}
              >
                <Mic className="w-10 h-10 text-white mix-blend-overlay" />
              </div>
              <div className="absolute inset-0 rounded-full border border-emerald-500/30 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]" />
              <div className="absolute inset-0 rounded-full border border-white/10 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] animation-delay-1000" />
            </button>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tighter mb-6 mix-blend-exclusion">
              The New Home of Homes
            </h1>

            <p className="font-display text-lg md:text-2xl font-light text-gray-300 tracking-wide mb-12 max-w-2xl">
              Get Deep. In the Property Market.
            </p>

            {/* Speech Interface */}
            <div className="flex flex-col items-center gap-6 w-full max-w-xl">
              <div className="w-full text-center">
                <p className="text-white/60 font-mono text-xs md:text-sm tracking-widest uppercase mb-4">
                  Tell us what you&apos;re looking for
                </p>
                <div className="relative overflow-hidden h-8">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-emerald-400 font-mono text-sm md:text-base">
                      &quot;Show me 3-bed terraces in Surry Hills under $2.5M&quot;
                    </span>
                  </div>
                </div>
              </div>
              {/* Audio Visualizer Lines */}
              <div className="flex items-center gap-1 h-8">
                <div className="w-1 h-3 bg-white/20 rounded-full animate-[pulse_1s_ease-in-out_infinite]" />
                <div className="w-1 h-5 bg-white/40 rounded-full animate-[pulse_1.2s_ease-in-out_infinite]" />
                <div className="w-1 h-8 bg-emerald-500 rounded-full animate-[pulse_0.8s_ease-in-out_infinite]" />
                <div className="w-1 h-5 bg-white/40 rounded-full animate-[pulse_1.5s_ease-in-out_infinite]" />
                <div className="w-1 h-3 bg-white/20 rounded-full animate-[pulse_1s_ease-in-out_infinite]" />
              </div>
            </div>
          </div>
        </section>

        {/* Market Filters Section */}
        <section className="py-32 px-6 md:px-20 max-w-[1600px] mx-auto bg-[#F5F5F7] relative z-20">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col md:flex-row justify-between items-end border-b border-black/10 pb-6">
              <div>
                <span className="text-xs font-mono text-gray-400 block mb-2 tracking-widest">
                  01 — PREFERENCES
                </span>
                <h2 className="font-display text-3xl font-medium tracking-tight">
                  Market Filters
                </h2>
              </div>
              <div className="flex gap-4 mt-4 md:mt-0">
                <button className="px-5 py-2 text-[10px] font-bold uppercase tracking-widest border border-black/10 rounded-full hover:bg-black hover:text-white transition-colors">
                  Reset
                </button>
                <button className="px-6 py-2 text-[10px] font-bold uppercase tracking-widest bg-black text-white rounded-full hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-900/20">
                  Update Search
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Location */}
              <div className="space-y-4">
                <label className="text-[10px] font-mono uppercase tracking-widest text-gray-400">
                  Location
                </label>
                <div className="relative group">
                  <MapPin className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-emerald-500 transition-colors w-4 h-4" />
                  <input
                    type="text"
                    defaultValue="Paddington, NSW"
                    className="w-full bg-transparent border-b border-gray-200 py-3 pl-6 font-medium focus:outline-none focus:border-black transition-colors placeholder-gray-300"
                  />
                </div>
              </div>
              {/* Price */}
              <div className="space-y-4">
                <label className="text-[10px] font-mono uppercase tracking-widest text-gray-400">
                  Price Range (AUD)
                </label>
                <div className="flex items-center gap-4">
                  <div className="relative w-full">
                    <span className="absolute text-xs left-0 top-1/2 -translate-y-1/2 text-gray-400">
                      $
                    </span>
                    <input
                      type="text"
                      defaultValue="1.2M"
                      className="w-full bg-transparent border-b border-gray-200 py-3 pl-3 font-medium text-center focus:outline-none focus:border-black"
                    />
                  </div>
                  <span className="text-gray-300">-</span>
                  <div className="relative w-full">
                    <span className="absolute text-xs left-0 top-1/2 -translate-y-1/2 text-gray-400">
                      $
                    </span>
                    <input
                      type="text"
                      defaultValue="3.5M"
                      className="w-full bg-transparent border-b border-gray-200 py-3 pl-3 font-medium text-center focus:outline-none focus:border-black"
                    />
                  </div>
                </div>
              </div>
              {/* Type */}
              <div className="space-y-4">
                <label className="text-[10px] font-mono uppercase tracking-widest text-gray-400">
                  Property Type
                </label>
                <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <div className="w-4 h-4 border border-gray-300 rounded-sm group-hover:border-black flex items-center justify-center transition-colors">
                      <div className="w-2 h-2 bg-black" />
                    </div>
                    <span className="text-sm font-medium">House</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <div className="w-4 h-4 border border-gray-300 rounded-sm group-hover:border-black flex items-center justify-center transition-colors" />
                    <span className="text-sm font-medium text-gray-500 group-hover:text-black transition-colors">
                      Apt
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <div className="w-4 h-4 border border-gray-300 rounded-sm group-hover:border-black flex items-center justify-center transition-colors" />
                    <span className="text-sm font-medium text-gray-500 group-hover:text-black transition-colors">
                      Land
                    </span>
                  </label>
                </div>
              </div>
              {/* Specs */}
              <div className="space-y-4">
                <label className="text-[10px] font-mono uppercase tracking-widest text-gray-400">
                  Min Specs
                </label>
                <div className="flex justify-between pt-2">
                  <div className="flex items-center gap-2 bg-white border border-gray-200 px-3 py-1.5 rounded-md">
                    <span className="text-sm font-medium">3</span>
                    <Bed className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="flex items-center gap-2 bg-white border border-gray-200 px-3 py-1.5 rounded-md">
                    <span className="text-sm font-medium">2</span>
                    <Bath className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="flex items-center gap-2 bg-white border border-gray-200 px-3 py-1.5 rounded-md">
                    <span className="text-sm font-medium">1</span>
                    <Car className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
            {/* Toggles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="flex items-center justify-between p-5 border border-gray-200 rounded-xl bg-gray-50/50 hover:bg-white hover:shadow-sm transition-all">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold">Fair Play Score™</span>
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  </div>
                  <span className="text-[10px] text-gray-400 uppercase tracking-wide">
                    Min. Threshold: 85/100
                  </span>
                </div>
                <div className="w-32 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div className="w-3/4 h-full bg-emerald-500 rounded-full" />
                </div>
              </div>
              <div className="flex items-center justify-between p-5 border border-gray-200 rounded-xl bg-gray-50/50 hover:bg-white hover:shadow-sm transition-all">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold">Investment Grade</span>
                    <TrendingUp className="w-4 h-4 text-indigo-500" />
                  </div>
                  <span className="text-[10px] text-gray-400 uppercase tracking-wide">
                    Show High Yield Only
                  </span>
                </div>
                <button className="w-10 h-5 bg-black rounded-full relative cursor-pointer">
                  <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full shadow-sm" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Search Results */}
        <section className="pb-32">
          <div className="px-6 md:px-20 mb-12 flex flex-col md:flex-row justify-between items-end gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                  42 Properties Found
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight">
                SEARCH
                <br />
                RESULTS
              </h2>
            </div>
            <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
              <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:opacity-60 transition-opacity">
                Sort: Relevance
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="flex bg-gray-200/50 p-1 rounded-full">
                <button className="px-5 py-2.5 rounded-full bg-white shadow-sm text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                  <List className="w-4 h-4" />
                  List
                </button>
                <button className="px-5 py-2.5 rounded-full text-gray-500 hover:text-black text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 transition-colors">
                  <Map className="w-4 h-4" />
                  Map
                </button>
              </div>
            </div>
          </div>

          <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
            {mockProperties.map((property) => (
              <div
                key={property.id}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={property.image}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale-[0.1] group-hover:grayscale-0"
                    alt={property.title}
                  />
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest flex items-center gap-1 shadow-sm">
                    <ShieldCheck className="w-3 h-3 text-emerald-500" />
                    {property.score}/100
                  </div>
                  <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/60 to-transparent">
                    <div className="text-2xl font-medium text-white">
                      {property.price}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <h3 className="font-display text-xl font-medium tracking-tight mb-1 group-hover:text-emerald-700 transition-colors">
                      {property.title}
                    </h3>
                    <p className="text-xs font-medium text-gray-400 uppercase tracking-widest">
                      {property.address}
                    </p>
                  </div>
                  <div className="flex justify-between items-center border-t border-gray-50 pt-4">
                    <div className="flex gap-3 text-xs font-medium text-gray-600">
                      <span className="flex items-center gap-1.5">
                        <Bed className="w-3.5 h-3.5 text-gray-400" />
                        {property.bedrooms}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Bath className="w-3.5 h-3.5 text-gray-400" />
                        {property.bathrooms}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Car className="w-3.5 h-3.5 text-gray-400" />
                        {property.parking}
                      </span>
                    </div>
                    {property.badge && (
                      <span className="text-[10px] uppercase font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">
                        {property.badge}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Pagination */}
            <div className="col-span-1 md:col-span-2 lg:col-span-3 flex justify-center mt-12">
              <button className="px-8 py-3 bg-white border border-gray-200 hover:border-black rounded-full text-xs font-bold uppercase tracking-widest transition-colors shadow-sm">
                Load More Properties
              </button>
            </div>
          </div>
        </section>

        {/* Features Horizontal Scroll */}
        <section className="relative h-screen overflow-hidden bg-[#F5F5F7] border-t border-black/5">
          <div className="flex h-full w-[300vw]">
            {/* Panel 1 */}
            <div className="w-screen h-full flex flex-col justify-center px-6 md:px-20 border-r border-black/10">
              <span className="text-xs font-mono text-gray-400 mb-4 tracking-widest flex items-center gap-2">
                <Mic className="w-4 h-4" />
                01 — INPUT
              </span>
              <h2 className="font-display text-6xl md:text-8xl font-medium tracking-tight">
                VOICE
                <br />
                SEARCH
              </h2>
              <p className="mt-8 max-w-md text-gray-500 text-lg leading-relaxed font-light">
                Ask natural questions. &quot;Show me 3-bed terraces in Surry
                Hills under 2 million with north-facing gardens.&quot; We handle
                the rest.
              </p>
            </div>
            {/* Panel 2 */}
            <div className="w-screen h-full flex flex-col justify-center px-6 md:px-20 border-r border-black/10 bg-[#F0F0F2]">
              <span className="text-xs font-mono text-gray-400 mb-4 tracking-widest flex items-center gap-2">
                <Shield className="w-4 h-4" />
                02 — VERIFICATION
              </span>
              <h2 className="font-display text-6xl md:text-8xl font-medium tracking-tight">
                FAIR PLAY
                <br />
                PROTOCOL
              </h2>
              <p className="mt-8 max-w-md text-gray-500 text-lg leading-relaxed font-light">
                Transparent pricing history. No underquoting. Just raw, verified
                auction results and contract data from across the nation.
              </p>
            </div>
            {/* Panel 3 */}
            <div className="w-screen h-full flex flex-col justify-center px-6 md:px-20 bg-white">
              <span className="text-xs font-mono text-gray-400 mb-4 tracking-widest flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                03 — GROWTH
              </span>
              <h2 className="font-display text-6xl md:text-8xl font-medium tracking-tight">
                AI
                <br />
                INSIGHTS
              </h2>
              <p className="mt-8 max-w-md text-gray-500 text-lg leading-relaxed font-light">
                Predictive growth modelling. Suburb yields. Investment grade
                analytics previously reserved for institutional buyers.
              </p>
            </div>
          </div>
        </section>

        {/* Market Depth Section */}
        <section className="py-32 px-6 md:px-20 max-w-[1600px] mx-auto bg-[#F5F5F7] overflow-hidden">
          <div className="mb-24 flex justify-between items-end">
            <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight">
              MARKET
              <br />
              DEPTH
            </h2>
            <p className="text-xs font-mono text-gray-400 hidden md:block">
              INDEXING / AUSTRALIA / REAL TIME
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 min-h-[120vh]">
            {/* Column 1 */}
            <div className="flex flex-col gap-4 md:gap-8 pt-20">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop"
                className="w-full aspect-[3/4] object-cover grayscale opacity-90 rounded-sm"
                alt=""
              />
              <div className="p-8 flex flex-col justify-center aspect-[4/5] bg-white border border-black/5">
                <span className="font-display text-5xl font-medium tracking-tighter">
                  12M+
                </span>
                <span className="text-xs text-gray-400 mt-2 uppercase tracking-widest">
                  Properties Indexed
                </span>
              </div>
            </div>
            {/* Column 2 */}
            <div className="flex flex-col gap-4 md:gap-8">
              <div className="w-full aspect-[3/4] bg-[#0A0A0A] text-white flex flex-col items-center justify-center p-8 text-center rounded-sm">
                <Database className="w-12 h-12 mb-6 opacity-50" />
                <p className="font-mono text-xs leading-relaxed tracking-widest uppercase">
                  &quot;Data is the new currency.&quot;
                </p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1600&auto=format&fit=crop"
                className="w-full aspect-[4/3] object-cover grayscale opacity-90 rounded-sm"
                alt=""
              />
            </div>
            {/* Column 3 */}
            <div className="flex flex-col gap-4 md:gap-8 pt-40 hidden md:flex">
              <div className="w-full aspect-[3/4] bg-gray-100 flex items-center justify-center rounded-sm">
                <div className="text-center">
                  <div className="text-4xl font-medium mb-1">98%</div>
                  <div className="text-[10px] uppercase text-gray-400 tracking-widest">
                    Suburb Coverage
                  </div>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1600&auto=format&fit=crop"
                className="w-full aspect-[4/5] object-cover grayscale opacity-90 rounded-sm"
                alt=""
              />
            </div>
          </div>
        </section>

        {/* Trusted Data Section */}
        <section className="py-48 bg-[#0A0A0A] text-white relative z-20">
          <div className="px-6 md:px-20 max-w-[1600px] mx-auto grid md:grid-cols-2 gap-16">
            <div>
              <span className="text-xs font-mono text-gray-500 block mb-6 tracking-widest">
                INTEGRATIONS
              </span>
              <h2 className="font-display text-5xl md:text-7xl font-medium tracking-tighter leading-none">
                TRUSTED
                <br />
                DATA
              </h2>
            </div>
            <div className="flex flex-col">
              {[
                { name: "CoreLogic RP Data", tag: "VERIFIED" },
                { name: "SQM Research", tag: "SOURCE" },
                { name: "Domain Group", tag: "PARTNER" },
                { name: "Ray White", tag: "AGENCY" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-baseline border-b border-white/20 py-6 group hover:pl-4 transition-all duration-300 cursor-default"
                >
                  <span className="text-lg md:text-xl font-light text-gray-300 group-hover:text-white">
                    {item.name}
                  </span>
                  <span className="text-xs font-mono text-gray-500">
                    {item.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-32 md:py-48 flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
          <h2 className="font-display text-3xl md:text-5xl font-medium tracking-tight mb-8 relative z-10">
            Transparency is the
            <span className="text-gray-400 italic font-light">
              {" "}
              ultimate amenity.
            </span>
          </h2>
          <p className="max-w-lg text-gray-500 font-light leading-relaxed relative z-10">
            We empower Australian buyers with the same professional-grade
            intelligence used by the industry&apos;s top agents.
          </p>

          {/* Decorative Grid */}
          <div className="absolute inset-0 z-0 opacity-[0.03] bg-grid" />
        </section>
      </div>

      {/* Fixed Footer */}
      <footer className="fixed bottom-0 left-0 w-full h-screen z-1 bg-[#050505] text-white flex flex-col justify-center items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=3840&auto=format&fit=crop"
            className="w-full h-full object-cover opacity-10 pointer-events-none grayscale"
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent" />
        </div>

        <div className="relative z-10 text-center w-full max-w-4xl px-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest text-gray-300">
              Live Platform Access
            </span>
          </div>

          <Link
            href="#"
            className="block group"
          >
            <h2 className="font-display text-[12vw] leading-[0.8] font-medium tracking-tighter text-white group-hover:text-gray-300 transition-colors duration-500">
              GET ACCESS
            </h2>
            <div className="h-[1px] w-0 group-hover:w-full bg-white/50 mx-auto transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] mt-4" />
          </Link>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 text-left border-t border-white/10 pt-12">
            <div className="flex flex-col gap-4">
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">
                Legal
              </span>
              <Link
                href="#"
                className="text-xs text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-xs text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-xs text-gray-400 hover:text-white transition-colors"
              >
                Data Ethics
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">
                HQ
              </span>
              <p className="text-xs text-gray-400">
                100 Barangaroo Ave
                <br />
                Sydney NSW 2000
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">
                Contact
              </span>
              <Link
                href="mailto:hello@haus.com.au"
                className="text-xs text-gray-400 hover:text-white transition-colors flex items-center gap-2"
              >
                <Mail className="w-3 h-3" />
                hello@haus.com.au
              </Link>
              <Link
                href="tel:+61290000000"
                className="text-xs text-gray-400 hover:text-white transition-colors flex items-center gap-2"
              >
                <Phone className="w-3 h-3" />
                +61 2 9000 0000
              </Link>
            </div>
            <div className="flex flex-col justify-between">
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">
                © 2024
              </span>
              <div className="text-[10px] text-gray-600 uppercase tracking-widest">
                HAUS Intelligence
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        .font-display {
          font-family: "Space Grotesk", sans-serif;
        }
        .noise-bg {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
        }
        .bg-grid {
          background-image: linear-gradient(#000 1px, transparent 1px),
            linear-gradient(90deg, #000 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .animation-delay-1000 {
          animation-delay: 1000ms;
        }
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        @keyframes ping {
          75%,
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: #f5f5f7;
        }
        ::-webkit-scrollbar-thumb {
          background: #d1d5db;
          border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #9ca3af;
        }
      `}</style>
    </div>
  )
}
