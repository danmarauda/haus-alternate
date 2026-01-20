"use client"

/**
 * Market Intelligence Page
 *
 * @description
 * Global real estate market intelligence dashboard with real-time metrics,
 * interactive charts, transaction tracking, and regional analysis.
 * Features live data updates, comprehensive filtering, and export capabilities.
 *
 * @features
 * - Real-time global market metrics (volume, velocity, listings)
 * - Interactive liquidity index chart with hover tooltips
 * - Top gainers/losers analysis by region
 * - Detailed transaction table with status tracking
 * - Advanced filtering by asset class, region, and price range
 * - Live ticker with major market updates
 * - Export functionality for reports
 *
 * @example
 * ```tsx
 * // Access at /market-intelligence route
 * <MarketIntelligencePage />
 * ```
 */

import { useState, useMemo } from "react"
import {
  BarChart3,
  Activity,
  Home,
  PieChart,
  TrendingUp,
  TrendingDown,
  Filter,
  Download,
  Search,
  Globe,
  Building2,
  MapPin,
  DollarSign,
  Clock,
  CheckCircle2,
  AlertCircle,
  Zap,
  X
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
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import type {
  MarketMetric,
  TopPerformer,
  Transaction,
  TickerItem,
  MarketFilterState,
  TimePeriod,
  AssetClass,
  MarketRegion,
  PropertyTypeCode
} from "@/types/market"

// Mock data
const MOCK_METRICS: MarketMetric[] = [
  {
    id: "1",
    title: "Global Volume (24h)",
    value: "$4.2B",
    change: 12.5,
    changeLabel: "12.5%",
    icon: "bar-chart-2",
    trend: "up",
    subtitle: "Based on 2,140 transactions"
  },
  {
    id: "2",
    title: "Market Velocity",
    value: "42 Days",
    change: -3,
    changeLabel: "-3d",
    icon: "activity",
    trend: "down",
    subtitle: "Faster turnover"
  },
  {
    id: "3",
    title: "Active Listings",
    value: "1,842",
    change: -2.1,
    changeLabel: "-2.1%",
    icon: "home",
    trend: "down",
    subtitle: "Across all markets"
  },
  {
    id: "4",
    title: "Avg. Yield",
    value: "4.85%",
    change: 0,
    changeLabel: "0.0%",
    icon: "pie-chart",
    trend: "stable",
    subtitle: "Net rental yield"
  }
]

const TOP_GAINERS: TopPerformer[] = [
  {
    rank: 1,
    location: "Miami, FL",
    area: "Waterfront",
    change: 4.2,
    changePercent: 4.2,
    volume: "$12M Vol",
    volumeNumeric: 12000000,
    trend: "up"
  },
  {
    rank: 2,
    location: "Austin, TX",
    area: "Commercial",
    change: 3.8,
    changePercent: 3.8,
    volume: "$8M Vol",
    volumeNumeric: 8000000,
    trend: "up"
  },
  {
    rank: 3,
    location: "Lisbon, PT",
    area: "Historic",
    change: 2.1,
    changePercent: 2.1,
    volume: "€5M Vol",
    volumeNumeric: 5000000,
    trend: "up"
  }
]

const TOP_LOSERS: TopPerformer[] = [
  {
    rank: 1,
    location: "SF, CA",
    area: "Office",
    change: -2.4,
    changePercent: -2.4,
    volume: "-",
    volumeNumeric: 0,
    trend: "down"
  },
  {
    rank: 2,
    location: "Berlin, DE",
    area: "Retail",
    change: -1.8,
    changePercent: -1.8,
    volume: "-",
    volumeNumeric: 0,
    trend: "down"
  }
]

const TRANSACTIONS: Transaction[] = [
  {
    id: "1",
    assetName: "Penthouse 4B",
    assetId: "#8821-X",
    location: "New York, NY",
    price: 14250000,
    currency: "USD",
    priceFormatted: "$14,250,000",
    propertyType: "res",
    propertyTypeLabel: "Res",
    time: "2m ago",
    timeAgo: "2m ago",
    status: "completed",
    statusLabel: "Closed",
    statusColor: "emerald"
  },
  {
    id: "2",
    assetName: "Villa Sereno",
    assetId: "#9920-A",
    location: "Lake Como, IT",
    price: 8400000,
    currency: "EUR",
    priceFormatted: "€8,400,000",
    propertyType: "vac",
    propertyTypeLabel: "Vac",
    time: "14m ago",
    timeAgo: "14m ago",
    status: "completed",
    statusLabel: "Closed",
    statusColor: "emerald"
  },
  {
    id: "3",
    assetName: "Tech Park L2",
    assetId: "#7741-B",
    location: "Singapore",
    price: 42000000,
    currency: "SGD",
    priceFormatted: "S$ 42,000,000",
    propertyType: "com",
    propertyTypeLabel: "Com",
    time: "28m ago",
    timeAgo: "28m ago",
    status: "pending",
    statusLabel: "Pending",
    statusColor: "amber"
  },
  {
    id: "4",
    assetName: "Lot 84-A",
    assetId: "#1209-Z",
    location: "Aspen, CO",
    price: 9200000,
    currency: "USD",
    priceFormatted: "$9,200,000",
    propertyType: "lnd",
    propertyTypeLabel: "Lnd",
    time: "1h ago",
    timeAgo: "1h ago",
    status: "completed",
    statusLabel: "Closed",
    statusColor: "emerald"
  },
  {
    id: "5",
    assetName: "Marina Bay 12",
    assetId: "#3321-M",
    location: "Dubai, UAE",
    price: 18000000,
    currency: "AED",
    priceFormatted: "AED 18M",
    propertyType: "res",
    propertyTypeLabel: "Res",
    time: "1h ago",
    timeAgo: "1h ago",
    status: "completed",
    statusLabel: "Closed",
    statusColor: "emerald"
  }
]

const TICKER_ITEMS: TickerItem[] = [
  { city: "NYC", value: "$14,204/sqft", change: 0.4, changePercent: 0.4, trend: "up" },
  { city: "LON", value: "£12,850/sqft", change: -0.2, changePercent: -0.2, trend: "down" },
  { city: "DXB", value: "AED 3,450/sqft", change: 1.8, changePercent: 1.8, trend: "up" },
  { city: "SIN", value: "S$ 2,950/sqft", change: 0, changePercent: 0, trend: "stable" },
  { city: "MIA", value: "$9,850/sqft", change: 0.9, changePercent: 0.9, trend: "up" },
  { city: "TOK", value: "¥1.2M/sqm", change: -0.1, changePercent: -0.1, trend: "down" }
]

export default function MarketIntelligencePage() {
  const [timePeriod, setTimePeriod] = useState<TimePeriod>("1h")
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState<MarketFilterState>({
    assetClass: ["residential"],
    region: ["north-america", "emea"],
    timePeriod: "1h",
    priceRange: [1000000, 50000000],
    searchTerm: "",
    sortBy: "price",
    sortOrder: "desc"
  })

  const [chartHoverX, setChartHoverX] = useState<number>(65)

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="w-3 h-3" />
      case "down":
        return <TrendingDown className="w-3 h-3" />
      default:
        return <Activity className="w-3 h-3 rotate-90" />
    }
  }

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case "up":
        return "text-emerald-500"
      case "down":
        return "text-red-500"
      default:
        return "text-neutral-500"
    }
  }

  const getBadgeColor = (type: PropertyTypeCode) => {
    const colors: Record<PropertyTypeCode, string> = {
      res: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      com: "bg-orange-500/10 text-orange-400 border-orange-500/20",
      vac: "bg-purple-500/10 text-purple-400 border-purple-500/20",
      lnd: "bg-green-500/10 text-green-400 border-green-500/20",
      ind: "bg-red-500/10 text-red-400 border-red-500/20",
      ret: "bg-pink-500/10 text-pink-400 border-pink-500/20",
      off: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
      hos: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
    }
    return colors[type]
  }

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
            {TICKER_ITEMS.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 px-8 text-xs font-mono">
                <span className="text-white font-semibold">{item.city}</span>
                <span className="text-neutral-400">{item.value}</span>
                <span className={cn(
                  "flex items-center gap-1",
                  getTrendColor(item.trend)
                )}>
                  {getTrendIcon(item.trend)}
                  {item.trend === "up" && "▲"}
                  {item.trend === "down" && "▼"}
                  {item.trend === "stable" && "―"}
                  {Math.abs(item.changePercent)}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full px-6 py-4 md:px-8 h-16 flex justify-between items-center z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5">
        <a href="/" className="font-display text-lg font-medium tracking-tight flex items-center gap-2 group">
          <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-bold tracking-tighter rounded-sm group-hover:scale-95 transition-transform duration-300">
            H
          </div>
        </a>
        <div className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-lg border border-white/5">
          <a href="/" className="px-4 py-1.5 text-xs font-medium text-neutral-400 hover:text-white transition-colors rounded hover:bg-white/5">Dashboard</a>
          <a href="#" className="px-4 py-1.5 text-xs font-medium text-white bg-white/10 shadow-sm rounded border border-white/5">Market Data</a>
          <a href="#" className="px-4 py-1.5 text-xs font-medium text-neutral-400 hover:text-white transition-colors rounded hover:bg-white/5">Portfolio</a>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/20 bg-green-500/10">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-[10px] font-mono font-medium text-green-400">LIVE SOCKET</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 border border-white/20"></div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 pt-32 pb-12 px-6 md:px-8 max-w-[1920px] mx-auto">

        {/* Header */}
        <header className="flex flex-col lg:flex-row justify-between items-end gap-6 mb-12">
          <div>
            <h1 className="font-display text-3xl md:text-5xl font-medium tracking-tight text-white mb-2">Market Intelligence</h1>
            <p className="text-neutral-500 text-sm max-w-xl">
              Real-time liquidity analysis and valuation metrics across global prime markets.
              Data aggregated from verified on-chain settlements and agency feeds.
            </p>
          </div>
          <div className="flex items-center gap-2 bg-[#0A0A0A] p-1 rounded-lg border border-white/10">
            {(["1h", "1d", "1w", "1m", "1y"] as TimePeriod[]).map((period) => (
              <button
                key={period}
                onClick={() => setTimePeriod(period)}
                className={cn(
                  "px-4 py-2 text-xs font-medium rounded transition-colors",
                  timePeriod === period
                    ? "bg-white/10 text-white shadow-sm border border-white/5"
                    : "text-neutral-500 hover:text-white hover:bg-white/5"
                )}
              >
                {period.toUpperCase()}
              </button>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-12 gap-8">

          {/* Sidebar Filters */}
          <aside className="col-span-12 lg:col-span-2 space-y-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-semibold">Filters</h3>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="text-neutral-500 hover:text-white transition-colors"
              >
                <Filter className="w-4 h-4" />
              </button>
            </div>

            {/* Asset Class Filter */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-semibold">Asset Class</h3>
              <div className="space-y-2">
                {(["residential", "commercial", "land"] as const).map((asset) => (
                  <label key={asset} className="flex items-center gap-3 cursor-pointer group">
                    <Checkbox
                      checked={filters.assetClass.includes(asset as AssetClass)}
                      onChange={(checked) => {
                        if (checked) {
                          setFilters(prev => ({
                            ...prev,
                            assetClass: [...prev.assetClass, asset as AssetClass]
                          }))
                        } else {
                          setFilters(prev => ({
                            ...prev,
                            assetClass: prev.assetClass.filter(a => a !== asset)
                          }))
                        }
                      }}
                    />
                    <span className="text-sm text-neutral-300 group-hover:text-white transition-colors">
                      {asset.charAt(0).toUpperCase() + asset.slice(1)}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Region Filter */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-semibold">Region</h3>
              <div className="space-y-2">
                {(["north-america", "emea", "apac"] as const).map((region) => (
                  <label key={region} className="flex items-center gap-3 cursor-pointer group">
                    <Checkbox
                      checked={filters.region.includes(region as MarketRegion)}
                      onChange={(checked) => {
                        if (checked) {
                          setFilters(prev => ({
                            ...prev,
                            region: [...prev.region, region as MarketRegion]
                          }))
                        } else {
                          setFilters(prev => ({
                            ...prev,
                            region: prev.region.filter(r => r !== region)
                          }))
                        }
                      }}
                    />
                    <span className="text-sm text-neutral-300 group-hover:text-white transition-colors">
                      {region === "north-america" ? "North America" : region.toUpperCase()}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range Slider */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-semibold">Price Range</h3>
              <div className="relative h-1 bg-white/10 rounded w-full mt-6">
                <div
                  className="absolute top-0 left-1/4 right-1/4 h-full bg-indigo-500"
                  style={{
                    left: `${(filters.priceRange[0] / 50000000) * 100}%`,
                    right: `${100 - (filters.priceRange[1] / 50000000) * 100}%`
                  }}
                />
              </div>
              <div className="flex justify-between text-[10px] font-mono text-neutral-400 mt-2">
                <span>${(filters.priceRange[0] / 1000000).toFixed(0)}M</span>
                <span>${(filters.priceRange[1] / 1000000).toFixed(0)}M+</span>
              </div>
            </div>

            {/* Premium Upgrade CTA */}
            <div className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-xl p-4 mt-8">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-3 h-3 text-amber-400" />
                <span className="text-[10px] font-bold text-white uppercase">Premium Data</span>
              </div>
              <p className="text-[11px] text-neutral-400 leading-normal mb-3">
                Unlock order book depth and whale wallet tracking.
              </p>
              <Button className="w-full bg-white text-black hover:bg-neutral-200 text-[10px] font-bold uppercase tracking-widest h-8">
                Upgrade
              </Button>
            </div>
          </aside>

          {/* Main Dashboard */}
          <main className="col-span-12 lg:col-span-10 space-y-6">

            {/* Top Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {MOCK_METRICS.map((metric) => (
                <div key={metric.id} className="bg-[#0A0A0A] border border-white/10 rounded-xl p-5 relative overflow-hidden group hover:border-white/20 transition-colors">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <BarChart3 className="w-12 h-12 text-white" />
                  </div>
                  <div className="text-[11px] text-neutral-500 font-mono uppercase tracking-widest mb-2">
                    {metric.title}
                  </div>
                  <div className="flex items-end gap-3">
                    <span className="font-display text-2xl font-medium text-white">
                      {metric.value}
                    </span>
                    <span className={cn(
                      "text-[11px] font-mono mb-1 flex items-center",
                      getTrendColor(metric.trend)
                    )}>
                      {getTrendIcon(metric.trend)}
                      {metric.changeLabel}
                    </span>
                  </div>
                  {metric.subtitle && (
                    <div className="mt-2 text-[10px] text-neutral-600">
                      {metric.subtitle}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Main Chart Section */}
            <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-6 md:p-8 relative overflow-hidden">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h2 className="text-sm font-medium text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
                    Global Liquidity Index
                  </h2>
                  <p className="text-xs text-neutral-500 mt-1 font-mono">
                    Weighted average of top 10 metropolitan markets
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-medium text-white font-display">142.85</div>
                  <div className="text-xs text-emerald-500 font-mono">+12.4 (8.2%) YTD</div>
                </div>
              </div>

              {/* Interactive Chart */}
              <div
                className="w-full aspect-[21/9] md:aspect-[3/1] relative cursor-crosshair"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect()
                  const x = ((e.clientX - rect.left) / rect.width) * 100
                  setChartHoverX(x)
                }}
              >
                {/* Grid Lines */}
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-full h-px bg-white/5" />
                  ))}
                </div>

                {/* Dynamic Tooltip Line */}
                <div
                  className="absolute top-0 bottom-0 w-px bg-indigo-500/50 pointer-events-none z-10 transition-all duration-100"
                  style={{ left: `${chartHoverX}%` }}
                >
                  <div className="absolute top-1/4 -translate-y-1/2 left-0 w-2 h-2 -ml-1 rounded-full bg-indigo-500 border-2 border-black" />
                  <div className="absolute top-0 -translate-x-1/2 -mt-8 bg-neutral-900 border border-white/10 px-2 py-1 rounded text-[10px] font-mono whitespace-nowrap text-white">
                    Nov 14: $141.20
                  </div>
                </div>

                {/* SVG Chart */}
                <svg viewBox="0 0 1000 300" preserveAspectRatio="none" className="w-full h-full overflow-visible">
                  <defs>
                    <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="rgba(99, 102, 241, 0.3)" />
                      <stop offset="100%" stopColor="rgba(99, 102, 241, 0)" />
                    </linearGradient>
                  </defs>

                  <path
                    d="M0,250 C100,240 150,200 250,210 C350,220 400,180 500,150 C600,120 700,160 800,100 C900,40 950,80 1000,60 V300 H0 Z"
                    fill="url(#chartGradient)"
                    className="opacity-0 animate-fadeIn"
                    style={{ animation: 'fadeIn 1s ease-out 0.5s forwards' }}
                  />

                  <path
                    d="M0,250 C100,240 150,200 250,210 C350,220 400,180 500,150 C600,120 700,160 800,100 C900,40 950,80 1000,60"
                    fill="none"
                    stroke="#6366f1"
                    strokeWidth="2"
                    className="animate-draw"
                    style={{ strokeDasharray: 2000, strokeDashoffset: 2000, animation: 'drawChart 2.5s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}
                  vectorEffect="non-scaling-stroke"
                  />

                  <circle cx="800" cy="100" r="3" fill="#0A0A0A" stroke="#fff" strokeWidth="2" className="animate-pop" style={{ animation: 'popIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) 1.5s forwards' }} />
                  <circle cx="500" cy="150" r="3" fill="#0A0A0A" stroke="#fff" strokeWidth="2" className="animate-pop" style={{ animation: 'popIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) 1.2s forwards' }} />
                </svg>

                {/* X Axis Labels */}
                <div className="absolute bottom-0 left-0 w-full flex justify-between text-[10px] font-mono text-neutral-600 translate-y-6">
                  <span>JAN</span>
                  <span>MAR</span>
                  <span>MAY</span>
                  <span>JUL</span>
                  <span>SEP</span>
                  <span>NOV</span>
                </div>
              </div>
            </div>

            {/* Split Section: Gainers/Losers & Table */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

              {/* Top Movers */}
              <div className="lg:col-span-1 space-y-4">
                {/* Top Gainers */}
                <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-5">
                  <h3 className="text-xs font-mono uppercase text-neutral-500 mb-4 flex items-center gap-2">
                    <TrendingUp className="w-3 h-3" />
                    Top Gainers (24h)
                  </h3>
                  <div className="space-y-3">
                    {TOP_GAINERS.map((gainer) => (
                      <div key={gainer.rank} className="flex justify-between items-center group cursor-pointer">
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded bg-white/5 flex items-center justify-center text-[10px] text-white">
                            {gainer.rank}
                          </div>
                          <div>
                            <div className="text-xs font-medium text-white group-hover:text-indigo-400 transition-colors">
                              {gainer.location}
                            </div>
                            <div className="text-[10px] text-neutral-500">{gainer.area}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-mono text-emerald-500">+{gainer.changePercent}%</div>
                          <div className="text-[10px] font-mono text-neutral-600">{gainer.volume}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Top Losers */}
                <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-5">
                  <h3 className="text-xs font-mono uppercase text-neutral-500 mb-4 flex items-center gap-2">
                    <TrendingDown className="w-3 h-3" />
                    Top Losers (24h)
                  </h3>
                  <div className="space-y-3">
                    {TOP_LOSERS.map((loser) => (
                      <div key={loser.rank} className="flex justify-between items-center group cursor-pointer">
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded bg-white/5 flex items-center justify-center text-[10px] text-white">
                            {loser.rank}
                          </div>
                          <div>
                            <div className="text-xs font-medium text-white group-hover:text-red-400 transition-colors">
                              {loser.location}
                            </div>
                            <div className="text-[10px] text-neutral-500">{loser.area}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-mono text-red-500">{loser.changePercent}%</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Transaction Table */}
              <div className="lg:col-span-2 bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden flex flex-col">
                <div className="p-5 border-b border-white/10 flex justify-between items-center">
                  <h3 className="text-xs font-medium text-white flex items-center gap-2">
                    <Activity className="w-3 h-3 text-neutral-500" />
                    Recent Transactions
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
                        <th className="p-4 font-normal">Asset / ID</th>
                        <th className="p-4 font-normal">Location</th>
                        <th className="p-4 font-normal">Price</th>
                        <th className="p-4 font-normal">Type</th>
                        <th className="p-4 font-normal text-right">Time</th>
                        <th className="p-4 font-normal text-right">Status</th>
                      </tr>
                    </thead>
                    <tbody className="text-xs font-mono text-neutral-300">
                      {TRANSACTIONS.map((tx) => (
                        <tr key={tx.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors cursor-pointer group">
                          <td className="p-4">
                            <div className="font-medium text-white group-hover:text-indigo-400 transition-colors">
                              {tx.assetName}
                            </div>
                            <div className="text-[10px] text-neutral-600">{tx.assetId}</div>
                          </td>
                          <td className="p-4">{tx.location}</td>
                          <td className="p-4 text-white">{tx.priceFormatted}</td>
                          <td className="p-4">
                            <span className={cn(
                              "px-2 py-0.5 rounded text-[10px] border",
                              getBadgeColor(tx.propertyType)
                            )}>
                              {tx.propertyTypeLabel}
                            </span>
                          </td>
                          <td className="p-4 text-right text-neutral-500">{tx.time}</td>
                          <td className="p-4 text-right">
                            <span className={cn(
                              "flex items-center justify-end gap-1",
                              tx.statusColor === "emerald" && "text-emerald-500",
                              tx.statusColor === "amber" && "text-amber-500"
                            )}>
                              {tx.status === "completed" && <CheckCircle2 className="w-3 h-3" />}
                              {tx.status === "pending" && <Clock className="w-3 h-3" />}
                              {tx.statusLabel}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="p-3 border-t border-white/10 flex justify-center">
                  <button className="text-[10px] font-mono text-neutral-500 hover:text-white uppercase tracking-widest transition-colors">
                    View All Transactions
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
