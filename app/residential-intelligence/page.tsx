"use client"

/**
 * Residential Intelligence Page
 *
 * @description
 * Australian residential property market intelligence dashboard with auction results,
 * clearance rates, home value indices, and live transaction streams.
 * Features suburb-level analytics, yield calculations, and research list management.
 *
 * @features
 * - Live auction clearance rates and results
 * - National home value index with historical trends
 * - Market velocity and days on market metrics
 * - Top growth suburbs and cooling markets analysis
 * - Rental yield data by region
 * - Live auction and sales transaction stream
 * - Research list management for tracking properties
 * - Interactive charts with hover effects
 *
 * @example
 * ```tsx
 * // Access at /residential-intelligence route
 * <ResidentialIntelligencePage />
 * ```
 */

import { useState } from "react"
import {
  Gavel,
  Home,
  Clock,
  Percent,
  Layers,
  Key,
  Tag,
  TrendingUp,
  TrendingDown,
  Coins,
  Activity,
  Search,
  Plus,
  PlusCircle,
  ChevronRight,
  AlertCircle,
  Building,
  Filter,
  Download
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import type {
  NationalStats,
  AuctionListing,
  SuburbData,
  ResearchList,
  WatchProperty,
  CapitalCityIndex,
  ChartType,
  AUState,
  ResidentialType,
  AuctionResult
} from "@/types/residential"

// Mock data
const MOCK_NATIONAL_STATS: NationalStats = {
  auctionClearance: {
    clearanceRate: 68.4,
    totalAuctions: 2140,
    sold: 1463,
    passedIn: 477,
    withdrawn: 120,
    vendorBid: 56,
    priorSale: 24,
    change: 2.1,
    changeDirection: "up"
  },
  homeValueIndex: {
    value: 182.4,
    change: 0.6,
    changePercent: 0.6,
    period: "Combined Capitals",
    trend: "up"
  },
  daysOnMarket: {
    daysOnMarket: 32,
    change: -2,
    changeDirection: "down",
    trend: "faster"
  },
  rentalYield: {
    yield: 3.85,
    change: 0.1,
    vacancyRate: 1.1,
    trend: "up"
  },
  newListings: {
    count: 42105,
    change: 5.2,
    changePercent: 5.2,
    note: "Spring seasonal surge"
  },
  vacancyRate: {
    rate: 1.04,
    change: -0.1,
    note: "Critical shortage"
  },
  vendorDiscount: {
    discount: -3.6,
    change: 0,
    note: "Market stabilizing"
  },
  investorLending: {
    share: 36.2,
    change: 1.8,
    note: "Share of finance"
  }
}

const TOP_SUBURBS: SuburbData[] = [
  { name: "Double Bay", postcode: "2028", state: "NSW", country: "Australia", medianPrice: 0, changePercent: 12.2, period: "QoQ", trend: "up" },
  { name: "New Farm", postcode: "4005", state: "QLD", country: "Australia", medianPrice: 0, changePercent: 8.4, period: "QoQ", trend: "up" },
  { name: "Cottesloe", postcode: "6011", state: "WA", country: "Australia", medianPrice: 0, changePercent: 6.1, period: "QoQ", trend: "up" }
]

const COOLING_MARKETS: SuburbData[] = [
  { name: "Docklands", postcode: "3008", state: "VIC", country: "Australia", medianPrice: 0, changePercent: -3.4, period: "", trend: "down" },
  { name: "Parramatta", postcode: "2150", state: "NSW", country: "Australia", medianPrice: 0, changePercent: -1.8, period: "", trend: "down" }
]

const TOP_YIELDS: SuburbData[] = [
  { name: "Port Hedland", postcode: "6721", state: "WA", country: "Australia", medianPrice: 0, changePercent: 9.4, period: "Gross", trend: "up" },
  { name: "Broken Hill", postcode: "2880", state: "NSW", country: "Australia", medianPrice: 0, changePercent: 8.8, period: "Gross", trend: "up" },
  { name: "Mount Isa", postcode: "4825", state: "QLD", country: "Australia", medianPrice: 0, changePercent: 8.1, period: "Gross", trend: "up" }
]

const AUCTION_LISTINGS: AuctionListing[] = [
  {
    address: "42 Ocean Ave",
    suburb: "Bondi Beach",
    state: "NSW",
    postcode: "2026",
    features: { bedrooms: 4, bathrooms: 3, carSpaces: 2 },
    price: { estimate: { low: 3200000, high: 3500000, formatted: "$3.2M - $3.5M" } },
    propertyType: "house",
    result: "sold",
    resultLabel: "Sold at Auction",
    resultColor: "emerald",
    tags: ["Fundamentals", "DD Ready"]
  },
  {
    address: "8/12 Toorak Rd",
    suburb: "South Yarra",
    state: "VIC",
    postcode: "3141",
    features: { bedrooms: 2, bathrooms: 1, carSpaces: 1 },
    price: { sold: 845000, formatted: "$845,000" },
    propertyType: "unit",
    result: "sold",
    resultLabel: "Private Treaty",
    resultColor: "emerald",
    tags: []
  },
  {
    address: "15 James St",
    suburb: "Fortitude Valley",
    state: "QLD",
    postcode: "4006",
    features: { bedrooms: 3, bathrooms: 2 },
    price: {},
    propertyType: "house",
    result: "passed-in",
    resultLabel: "Passed In (VB)",
    resultColor: "amber",
    tags: []
  },
  {
    address: "92 Coast Rd",
    suburb: "Scarborough",
    state: "WA",
    postcode: "6019",
    features: { bedrooms: 5, bathrooms: 4, carSpaces: 2, specialFeatures: ["Pool"] },
    price: { sold: 2200000, formatted: "$2,200,000" },
    propertyType: "house",
    result: "sold",
    resultLabel: "Sold Prior",
    resultColor: "emerald",
    tags: []
  },
  {
    address: "22/5 Circular Quay",
    suburb: "Sydney",
    state: "NSW",
    postcode: "2000",
    features: { bedrooms: 3, bathrooms: 2, specialFeatures: ["View"] },
    price: { sold: 4800000, formatted: "$4,800,000" },
    propertyType: "unit",
    result: "withdrawn",
    resultLabel: "Withdrawn",
    resultColor: "neutral",
    tags: []
  }
]

const RESEARCH_LISTS: ResearchList[] = [
  {
    id: "list-1",
    name: "Eastern Suburbs Lux",
    propertyCount: 8,
    status: "active",
    statusLabel: "Active",
    tags: ["Eastern Suburbs", "Luxury"]
  },
  {
    id: "list-2",
    name: "Brisbane Yield > 5%",
    propertyCount: 14,
    status: "archived",
    statusLabel: "2d ago",
    tags: ["Brisbane", "High Yield"]
  },
  {
    id: "list-3",
    name: "Toorak Renos",
    propertyCount: 5,
    status: "review",
    statusLabel: "Review",
    tags: ["Toorak", "Renovations"]
  }
]

const WATCH_PROPERTIES: WatchProperty[] = [
  {
    id: "watch-1",
    address: "12 Ocean St",
    suburb: "Bondi",
    state: "NSW",
    priority: "auction-sat",
    priorityLabel: "Auction Sat",
    priorityColor: "emerald",
    price: { estimate: "$3.2M - $3.5M" },
    tags: ["Fundamentals", "DD Ready"]
  },
  {
    id: "watch-2",
    address: "88 Smith St",
    suburb: "Fitzroy",
    state: "VIC",
    priority: "negotiating",
    priorityLabel: "Negotiating",
    priorityColor: "amber",
    price: { offer: "$1.85M" },
    tags: []
  }
]

export default function ResidentialIntelligencePage() {
  const [chartType, setChartType] = useState<ChartType>("index")
  const [selectedState, setSelectedState] = useState<AUState | "all">("all")
  const [propertyType, setPropertyType] = useState<ResidentialType>("house")

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Noise Overlay */}
      <div className="fixed inset-0 z-0 w-full h-full pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          maskImage: "radial-gradient(circle at center, black 40%, transparent 100%)"
        }}
      />

      {/* Live Ticker */}
      <div className="fixed top-16 z-40 w-full">
        <div className="bg-black border-b border-white/10 py-2 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[
              { city: "SYDNEY", value: "Med $1.62M", change: 0.4, trend: "up" },
              { city: "MELBOURNE", value: "Med $925K", change: -0.2, trend: "down" },
              { city: "BRISBANE", value: "Med $885K", change: 1.1, trend: "up" },
              { city: "PERTH", value: "Med $710K", change: 1.4, trend: "up" },
              { city: "ADELAIDE", value: "Med $795K", change: 0.8, trend: "up" },
              { city: "HOBART", value: "Med $680K", change: 0, trend: "stable" },
              { city: "DARWIN", value: "Med $490K", change: -0.1, trend: "down" },
              { city: "CANBERRA", value: "Med $950K", change: -0.3, trend: "down" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 px-8 text-xs font-mono">
                <span className="text-white font-semibold">{item.city}</span>
                <span className="text-neutral-400">{item.value}</span>
                <span className={cn(
                  "flex items-center gap-1",
                  item.trend === "up" && "text-emerald-500",
                  item.trend === "down" && "text-red-500",
                  item.trend === "stable" && "text-neutral-500"
                )}>
                  {item.trend === "up" && <TrendingUp className="w-3 h-3" />}
                  {item.trend === "down" && <TrendingDown className="w-3 h-3" />}
                  {item.trend === "stable" && <Activity className="w-3 h-3 rotate-90" />}
                  {item.trend === "up" && "▲"}
                  {item.trend === "down" && "▼"}
                  {item.trend === "stable" && "―"}
                  {Math.abs(item.change)}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full px-6 py-4 md:px-8 h-16 flex justify-between items-center z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5">
        <a href="/" className="font-display text-lg font-medium tracking-tight flex items-center gap-2 group">
          <div className="w-8 h-8 bg-emerald-600 text-white flex items-center justify-center font-bold tracking-tighter rounded-sm">
            AU
          </div>
          <span className="text-white">
            PROP
            <span className="text-neutral-500">.DATA</span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-lg border border-white/5">
          <a href="#" className="px-4 py-1.5 text-xs font-medium text-white bg-white/10 shadow-sm rounded border border-white/5">
            Overview
          </a>
          <a href="#" className="px-4 py-1.5 text-xs font-medium text-neutral-400 hover:text-white transition-colors rounded hover:bg-white/5">
            Auctions
          </a>
          <a href="#" className="px-4 py-1.5 text-xs font-medium text-neutral-400 hover:text-white transition-colors rounded hover:bg-white/5">
            Valuations
          </a>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-[10px] font-mono font-medium text-emerald-400">
              SYD SERVER
            </span>
          </div>
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-500 border border-white/20"></div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 pt-32 pb-12 px-6 md:px-8 max-w-[1920px] mx-auto">
        <div className="grid grid-cols-12 gap-8">

          {/* Sidebar */}
          <aside className="col-span-12 lg:col-span-2 space-y-8">
            {/* User Profile */}
            <div className="flex items-center gap-3 pb-6 border-b border-white/10 mb-6">
              <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold tracking-tighter shadow-lg shadow-emerald-900/20">
                JD
              </div>
              <div>
                <div className="text-sm font-medium text-white">James D.</div>
                <div className="text-[10px] text-neutral-500 font-mono">
                  Senior Buyer's Agent
                </div>
              </div>
            </div>

            {/* Research Lists */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-semibold">
                  Research Lists
                </h3>
                <button className="text-neutral-500 hover:text-white transition-colors">
                  <Plus className="w-3 h-3" />
                </button>
              </div>
              <div className="space-y-1">
                {RESEARCH_LISTS.map((list) => (
                  <div
                    key={list.id}
                    className={cn(
                      "group flex flex-col gap-2 p-3 rounded-lg cursor-pointer transition-all",
                      list.status === "active"
                        ? "bg-white/5 border border-emerald-500/30 hover:bg-white/10"
                        : "border border-transparent hover:border-white/10 hover:bg-white/5"
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <span className={cn(
                        "text-xs font-medium transition-colors",
                        list.status === "active" ? "text-white group-hover:text-emerald-400" : "text-neutral-300 group-hover:text-white"
                      )}>
                        {list.name}
                      </span>
                      <ChevronRight className="w-3 h-3 text-neutral-600 group-hover:text-white" />
                    </div>
                    <div className="flex items-center gap-3 text-[10px] text-neutral-500 font-mono">
                      <span className="flex items-center gap-1">
                        <Building className="w-3 h-3" />
                        {list.propertyCount} Props
                      </span>
                      {list.status === "active" && (
                        <span className="flex items-center gap-1 text-emerald-500">
                          <Activity className="w-3 h-3" />
                          Active
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Priority Watch */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-semibold">
                  Priority Watch
                </h3>
                <button className="text-neutral-500 hover:text-white transition-colors">
                  <Filter className="w-3 h-3" />
                </button>
              </div>
              <div className="space-y-2">
                {WATCH_PROPERTIES.map((property) => (
                  <div
                    key={property.id}
                    className="p-3 rounded-lg border border-white/5 bg-[#0A0A0A] hover:border-emerald-500/50 cursor-pointer transition-colors group"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className={cn(
                        "text-[10px] px-1.5 py-0.5 rounded border font-mono flex items-center gap-1",
                        property.priorityColor === "emerald" && "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
                        property.priorityColor === "amber" && "bg-amber-500/10 text-amber-400 border-amber-500/20"
                      )}>
                        {property.priority === "auction-sat" && (
                          <>
                            <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse"></div>
                            {property.priorityLabel}
                          </>
                        )}
                        {property.priority !== "auction-sat" && property.priorityLabel}
                      </div>
                    </div>
                    <div className="text-xs font-medium text-white mb-1 group-hover:text-emerald-400 transition-colors">
                      {property.address}, {property.suburb}
                    </div>
                    <div className="flex justify-between items-end">
                      <div className="text-[10px] text-neutral-500 font-mono">
                        {property.price?.estimate || property.price?.offer || "N/A"}
                      </div>
                      <ChevronRight className="w-3 h-3 text-neutral-600 group-hover:text-emerald-500 transition-colors" />
                    </div>
                    {property.tags.length > 0 && (
                      <div className="mt-2 pt-2 border-t border-white/5 flex gap-2">
                        {property.tags.map((tag, idx) => (
                          <div key={idx} className="text-[9px] text-neutral-400 font-mono bg-white/5 px-1 rounded border border-white/5">
                            {tag}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Create New List Button */}
            <div className="pt-6 mt-6 border-t border-white/10">
              <Button className="w-full bg-white/5 hover:bg-white/10 text-white border border-white/5 h-10 text-xs font-medium">
                <PlusCircle className="w-4 h-4 mr-2 text-emerald-500" />
                Create New List
              </Button>
            </div>
          </aside>

          {/* Main Dashboard */}
          <main className="col-span-12 lg:col-span-10 space-y-6">

            {/* Top Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Auction Clearance */}
              <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-5 hover:border-white/20 transition-colors">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Gavel className="w-12 h-12 text-white" />
                </div>
                <div className="text-[11px] text-neutral-500 font-mono uppercase tracking-widest mb-2">
                  Auction Clearance (Nat)
                </div>
                <div className="flex items-end gap-3">
                  <span className="font-display text-2xl font-medium text-white">
                    {MOCK_NATIONAL_STATS.auctionClearance.clearanceRate}%
                  </span>
                  <span className="text-[11px] font-mono text-emerald-500 mb-1 flex items-center">
                    <TrendingUp className="w-3 h-3 mr-0.5" />
                    {MOCK_NATIONAL_STATS.auctionClearance.change}%
                  </span>
                </div>
                <div className="mt-2 text-[10px] text-neutral-600">
                  Based on {MOCK_NATIONAL_STATS.auctionClearance.totalAuctions} auctions
                </div>
              </div>

              {/* Home Value Index */}
              <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-5 hover:border-white/20 transition-colors">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Home className="w-12 h-12 text-white" />
                </div>
                <div className="text-[11px] text-neutral-500 font-mono uppercase tracking-widest mb-2">
                  Nat. Home Value Index
                </div>
                <div className="flex items-end gap-3">
                  <span className="font-display text-2xl font-medium text-white">
                    {MOCK_NATIONAL_STATS.homeValueIndex.value}
                  </span>
                  <span className="text-[11px] font-mono text-emerald-500 mb-1 flex items-center">
                    <TrendingUp className="w-3 h-3 mr-0.5" />
                    {MOCK_NATIONAL_STATS.homeValueIndex.change}%
                  </span>
                </div>
                <div className="mt-2 text-[10px] text-neutral-600">
                  {MOCK_NATIONAL_STATS.homeValueIndex.period}
                </div>
              </div>

              {/* Days on Market */}
              <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-5 hover:border-white/20 transition-colors">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Clock className="w-12 h-12 text-white" />
                </div>
                <div className="text-[11px] text-neutral-500 font-mono uppercase tracking-widest mb-2">
                  Days on Market
                </div>
                <div className="flex items-end gap-3">
                  <span className="font-display text-2xl font-medium text-white">
                    {MOCK_NATIONAL_STATS.daysOnMarket.daysOnMarket} Days
                  </span>
                  <span className="text-[11px] font-mono text-red-500 mb-1 flex items-center">
                    <TrendingDown className="w-3 h-3 mr-0.5" />
                    {Math.abs(MOCK_NATIONAL_STATS.daysOnMarket.change)}d
                  </span>
                </div>
                <div className="mt-2 text-[10px] text-neutral-600">
                  Faster turnover
                </div>
              </div>

              {/* Rental Yield */}
              <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-5 hover:border-white/20 transition-colors">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Percent className="w-12 h-12 text-white" />
                </div>
                <div className="text-[11px] text-neutral-500 font-mono uppercase tracking-widest mb-2">
                  Rental Yield (Avg)
                </div>
                <div className="flex items-end gap-3">
                  <span className="font-display text-2xl font-medium text-white">
                    {MOCK_NATIONAL_STATS.rentalYield.yield}%
                  </span>
                  <span className="text-[11px] font-mono text-emerald-500 mb-1 flex items-center">
                    <TrendingUp className="w-3 h-3 mr-0.5" />
                    {MOCK_NATIONAL_STATS.rentalYield.change}%
                  </span>
                </div>
                <div className="mt-2 text-[10px] text-neutral-600">
                  Vacancy Rate: {MOCK_NATIONAL_STATS.rentalYield.vacancyRate}%
                </div>
              </div>
            </div>

            {/* Main Chart Section */}
            <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-6 md:p-8 relative overflow-hidden">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h2 className="text-sm font-medium text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                    Capital City Aggregate Index (Rolling 12M)
                  </h2>
                  <p className="text-xs text-neutral-500 mt-1 font-mono">
                    Weighted dwelling values across 8 capital cities
                  </p>
                </div>
                <div className="flex items-center gap-2 bg-white/5 p-1 rounded-lg border border-white/10">
                  {(["index", "volume", "yields"] as ChartType[]).map((type) => (
                    <button
                      key={type}
                      onClick={() => setChartType(type)}
                      className={cn(
                        "px-3 py-1.5 text-[10px] font-medium rounded capitalize transition-colors",
                        chartType === type
                          ? "bg-white/10 text-white shadow-sm border border-white/5"
                          : "text-neutral-500 hover:text-white hover:bg-white/5"
                      )}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Chart */}
              <div className="w-full aspect-[21/9] md:aspect-[3/1] relative">
                {/* Grid Lines */}
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-full h-px bg-white/5" />
                  ))}
                </div>

                {/* SVG Chart */}
                <svg viewBox="0 0 1000 300" preserveAspectRatio="none" className="w-full h-full overflow-visible">
                  <defs>
                    <linearGradient id="chartGradientEmerald" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="rgba(16, 185, 129, 0.2)" />
                      <stop offset="100%" stopColor="rgba(16, 185, 129, 0)" />
                    </linearGradient>
                  </defs>

                  <path
                    d="M0,220 C100,215 150,180 250,170 C350,160 400,190 500,150 C600,110 700,130 800,90 C900,50 950,70 1000,40 V300 H0 Z"
                    fill="url(#chartGradientEmerald)"
                    className="opacity-0"
                    style={{ animation: 'fadeIn 1s ease-out 0.5s forwards' }}
                  />

                  <path
                    d="M0,220 C100,215 150,180 250,170 C350,160 400,190 500,150 C600,110 700,130 800,90 C900,50 950,70 1000,40"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                    className="animate-draw"
                    style={{ strokeDasharray: 2000, strokeDashoffset: 2000, animation: 'drawChart 2.5s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}
                    vectorEffect="non-scaling-stroke"
                  />

                  <circle
                    cx="800"
                    cy="90"
                    r="3"
                    fill="#0A0A0A"
                    stroke="#fff"
                    strokeWidth="2"
                    className="shadow-[0_0_10px_rgba(16,185,129,0.8)]"
                    style={{ animation: 'popIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) 1.5s forwards', opacity: 0 }}
                  />
                  <circle
                    cx="500"
                    cy="150"
                    r="3"
                    fill="#0A0A0A"
                    stroke="#fff"
                    strokeWidth="2"
                    style={{ animation: 'popIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) 1.2s forwards', opacity: 0 }}
                  />
                </svg>

                {/* X Axis Labels */}
                <div className="absolute bottom-0 left-0 w-full flex justify-between text-[10px] font-mono text-neutral-600 translate-y-6">
                  <span>NOV '23</span>
                  <span>JAN '24</span>
                  <span>MAR '24</span>
                  <span>MAY '24</span>
                  <span>JUL '24</span>
                  <span>NOV '24</span>
                </div>
              </div>
            </div>

            {/* Split Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

              {/* Top Growth Suburbs */}
              <div className="lg:col-span-1 space-y-4">
                <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-5">
                  <h3 className="text-xs font-mono uppercase text-neutral-500 mb-4 flex items-center gap-2">
                    <TrendingUp className="w-3 h-3" />
                    Top Growth Suburbs
                  </h3>
                  <div className="space-y-3">
                    {TOP_SUBURBS.map((suburb) => (
                      <div key={suburb.name} className="flex justify-between items-center group cursor-pointer">
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded bg-white/5 flex items-center justify-center text-[10px] text-white">
                            {suburb.name === "Double Bay" ? "1" : suburb.name === "New Farm" ? "2" : "3"}
                          </div>
                          <div>
                            <div className="text-xs font-medium text-white group-hover:text-emerald-400 transition-colors">
                              {suburb.name}
                            </div>
                            <div className="text-[10px] text-neutral-500">
                              {suburb.state} {suburb.postcode}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-mono text-emerald-500">
                            +{suburb.changePercent}%
                          </div>
                          <div className="text-[10px] font-mono text-neutral-600">
                            {suburb.period}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cooling Markets */}
                <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-5">
                  <h3 className="text-xs font-mono uppercase text-neutral-500 mb-4 flex items-center gap-2">
                    <TrendingDown className="w-3 h-3" />
                    Cooling Markets
                  </h3>
                  <div className="space-y-3">
                    {COOLING_MARKETS.map((market) => (
                      <div key={market.name} className="flex justify-between items-center group cursor-pointer">
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded bg-white/5 flex items-center justify-center text-[10px] text-white">
                            {market.name === "Docklands" ? "1" : "2"}
                          </div>
                          <div>
                            <div className="text-xs font-medium text-white group-hover:text-red-400 transition-colors">
                              {market.name}
                            </div>
                            <div className="text-[10px] text-neutral-500">
                              {market.state} {market.postcode}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-mono text-red-500">
                            {market.changePercent}%
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Top Yields */}
                <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-5">
                  <h3 className="text-xs font-mono uppercase text-neutral-500 mb-4 flex items-center gap-2">
                    <Coins className="w-3 h-3" />
                    Top Yields (Houses)
                  </h3>
                  <div className="space-y-3">
                    {TOP_YIELDS.map((suburb, idx) => (
                      <div key={idx} className="flex justify-between items-center group cursor-pointer">
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded bg-white/5 flex items-center justify-center text-[10px] text-white">
                            {idx + 1}
                          </div>
                          <div>
                            <div className="text-xs font-medium text-white group-hover:text-emerald-400 transition-colors">
                              {suburb.name}
                            </div>
                            <div className="text-[10px] text-neutral-500">
                              {suburb.state} {suburb.postcode}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-mono text-emerald-500">
                            {suburb.changePercent}%
                          </div>
                          <div className="text-[10px] font-mono text-neutral-600">
                            Gross
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Auction Stream Table */}
              <div className="lg:col-span-2 bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden flex flex-col">
                <div className="p-5 border-b border-white/10 flex justify-between items-center">
                  <h3 className="text-xs font-medium text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    Live Auction Stream & Sales
                  </h3>
                  <div className="flex gap-2">
                    <button className="p-1 hover:bg-white/10 rounded text-neutral-500 hover:text-white transition-colors">
                      <Filter className="w-3 h-3" />
                    </button>
                    <button className="p-1 hover:bg-white/10 rounded text-neutral-500 hover:text-white transition-colors">
                      <Download className="w-3 h-3" />
                    </button>
                  </div>
                </div>
                <div className="overflow-x-auto flex-1">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-white/5 text-[10px] text-neutral-400 font-mono uppercase tracking-wider">
                        <th className="p-4 font-normal">Address / Suburb</th>
                        <th className="p-4 font-normal">Features</th>
                        <th className="p-4 font-normal">Price (AUD)</th>
                        <th className="p-4 font-normal">Type</th>
                        <th className="p-4 font-normal text-right">Result</th>
                      </tr>
                    </thead>
                    <tbody className="text-xs font-mono text-neutral-300">
                      {AUCTION_LISTINGS.map((listing) => (
                        <tr key={listing.address} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors cursor-pointer group">
                          <td className="p-4">
                            <div className="font-medium text-white group-hover:text-emerald-400 transition-colors">
                              {listing.address}
                            </div>
                            <div className="text-[10px] text-neutral-600">
                              {listing.suburb}, {listing.state}
                            </div>
                          </td>
                          <td className="p-4 text-neutral-500">
                            {listing.features.bedrooms && `${listing.features.bedrooms} Bed • `}
                            {listing.features.bathrooms && `${listing.features.bathrooms} Bath • `}
                            {listing.features.carSpaces && `${listing.features.carSpaces} Car`}
                          </td>
                          <td className="p-4 text-white">
                            {listing.price?.estimate?.formatted || (listing.price?.sold !== undefined ? `$${listing.price.sold.toLocaleString()}` : undefined) || listing.price?.formatted || "---"}
                          </td>
                          <td className="p-4">
                            <span className={cn(
                              "px-2 py-0.5 rounded text-[10px] border",
                              listing.propertyType === "house" && "bg-blue-500/10 text-blue-400 border-blue-500/20",
                              listing.propertyType === "unit" && "bg-purple-500/10 text-purple-400 border-purple-500/20"
                            )}>
                              {listing.propertyType === "house" ? "Hse" : "Unt"}
                            </span>
                          </td>
                          <td className="p-4 text-right">
                            <span className={cn(
                              "flex items-center justify-end gap-1",
                              listing.resultColor === "emerald" && "text-emerald-500",
                              listing.resultColor === "amber" && "text-amber-500",
                              listing.resultColor === "neutral" && "text-neutral-500"
                            )}>
                              {listing.resultLabel}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="p-3 border-t border-white/10 flex justify-center">
                  <button className="text-[10px] font-mono text-neutral-500 hover:text-white uppercase tracking-widest transition-colors">
                    Load More Sales
                  </button>
                </div>
              </div>
            </div>

          </main>
        </div>
      </div>
    </div>
  )
}
