"use client"

/**
 * Search Results Page
 *
 * @description
 * Property search results page with filtering, sorting, grid/list/map views,
 * and AI-powered recommendations. Displays matching properties based on search
 * criteria with live market data and insights.
 *
 * @route /search-results
 *
 * @features
 * - Advanced filtering system
 * - Grid/list/map view modes
 * - Sort by relevance, price, newest
 * - AI match indicators
 * - Real-time market insights
 * - Save properties to favorites
 * - Compare properties
 * - Map view integration
 * - Infinite scroll pagination
 *
 * @example
 * ```tsx
 * import SearchResults from './page'
 * export default SearchResults
 * ```
 *
 * @component
 */

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Search,
  SlidersHorizontal,
  Grid,
  Map,
  List,
  ChevronRight,
  Heart,
  Bot,
  Sparkles,
  Zap,
  Leaf,
  Gem,
  MapPin,
  X,
  TrendingUp
} from "lucide-react"
import { cn } from "@/lib/utils"
import type { Property, ListingFilters, ListingViewMode } from "@/types/listings"

/**
 * Mock property search results
 */
const SEARCH_RESULTS: Property[] = [
  {
    id: "1",
    title: "The Concrete Loft",
    address: "24 Reservoir St",
    suburb: "Surry Hills",
    state: "NSW",
    postcode: "2010",
    fullAddress: "24 Reservoir St, Surry Hills NSW 2010",
    pricing: {
      current: 2850000,
      display: "$2,850,000",
      method: "fixed-price",
      pricePerSqm: 15405
    },
    images: [
      {
        id: "1",
        url: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop",
        alt: "The Concrete Loft",
        category: "exterior"
      }
    ],
    features: {
      bedrooms: 3,
      bathrooms: 2,
      parking: 2,
      internalArea: 185,
      type: "warehouse",
      yearBuilt: 2018,
      architecture: "Industrial"
    },
    insights: {
      matchScore: 98,
      estimatedGrowth: 4.2,
      marketComparison: "above-market",
      demandLevel: "high",
      supplyLevel: "tight"
    },
    badges: [
      {
        type: "ai-match",
        text: "98% Match",
        icon: "sparkles",
        color: "indigo",
        value: "98%"
      }
    ],
    status: "available",
    latitude: -33.8878,
    longitude: 151.2107
  },
  {
    id: "2",
    title: "Victorian Terrace",
    address: "88 Riley St",
    suburb: "Surry Hills",
    state: "NSW",
    postcode: "2010",
    fullAddress: "88 Riley St, Surry Hills NSW 2010",
    pricing: {
      current: 3100000,
      display: "$3,100,000",
      method: "auction",
      auctionDate: "12 Oct",
      pricePerSqm: 14762
    },
    images: [
      {
        id: "1",
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
        alt: "Victorian Terrace",
        category: "exterior"
      }
    ],
    features: {
      bedrooms: 4,
      bathrooms: 2.5,
      parking: 2,
      internalArea: 210,
      type: "terrace",
      yearBuilt: 1890,
      architecture: "Victorian"
    },
    insights: {
      matchScore: 92,
      estimatedGrowth: 5.8,
      marketComparison: "above-market",
      demandLevel: "high",
      supplyLevel: "tight"
    },
    badges: [
      {
        type: "new",
        text: "New",
        icon: undefined,
        color: "neutral"
      }
    ],
    status: "available",
    latitude: -33.8850,
    longitude: 151.2120
  },
  {
    id: "3",
    title: "Warehouse Conversion",
    address: "12 Foster St",
    suburb: "Surry Hills",
    state: "NSW",
    postcode: "2010",
    fullAddress: "12 Foster St, Surry Hills NSW 2010",
    pricing: {
      current: 1950000,
      display: "$1,950,000",
      method: "fixed-price",
      pricePerSqm: 13929
    },
    images: [
      {
        id: "1",
        url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop",
        alt: "Warehouse Conversion",
        category: "exterior"
      }
    ],
    features: {
      bedrooms: 2,
      bathrooms: 2,
      parking: 1,
      internalArea: 140,
      type: "warehouse",
      yearBuilt: 2015,
      architecture: "Industrial"
    },
    insights: {
      matchScore: 89,
      estimatedGrowth: 6.5,
      marketComparison: "under-market-value",
      demandLevel: "high",
      supplyLevel: "tight"
    },
    badges: [
      {
        type: "rare",
        text: "Rare",
        icon: "gem",
        color: "purple"
      }
    ],
    status: "available",
    latitude: -33.8880,
    longitude: 151.2080
  },
  {
    id: "4",
    title: "The Garden House",
    address: "45 Albion St",
    suburb: "Surry Hills",
    state: "NSW",
    postcode: "2010",
    fullAddress: "45 Albion St, Surry Hills NSW 2010",
    pricing: {
      current: 2200000,
      display: "$2,200,000",
      method: "fixed-price",
      pricePerSqm: 13750
    },
    images: [
      {
        id: "1",
        url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop",
        alt: "The Garden House",
        category: "exterior"
      }
    ],
    features: {
      bedrooms: 3,
      bathrooms: 2,
      parking: 1,
      internalArea: 160,
      type: "house",
      yearBuilt: 1920,
      architecture: "Heritage"
    },
    insights: {
      matchScore: 85,
      estimatedGrowth: 4.8,
      marketComparison: "at-market",
      demandLevel: "moderate",
      supplyLevel: "balanced"
    },
    badges: [
      {
        type: "eco-rated",
        text: "Eco-Rated",
        icon: "leaf",
        color: "emerald"
      }
    ],
    status: "available",
    latitude: -33.8860,
    longitude: 151.2090
  },
  {
    id: "5",
    title: "Minimalist Studio",
    address: "158 Campbell St",
    suburb: "Surry Hills",
    state: "NSW",
    postcode: "2010",
    fullAddress: "158 Campbell St, Surry Hills NSW 2010",
    pricing: {
      current: 980000,
      display: "$980,000",
      method: "fixed-price",
      pricePerSqm: 13067
    },
    images: [
      {
        id: "1",
        url: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=800&auto=format&fit=crop",
        alt: "Minimalist Studio",
        category: "interior"
      }
    ],
    features: {
      bedrooms: 1,
      bathrooms: 1,
      parking: 0,
      internalArea: 75,
      type: "studio",
      yearBuilt: 2020,
      architecture: "Minimalist"
    },
    badges: [
      {
        type: "pending",
        text: "Pending",
        icon: undefined,
        color: "neutral"
      }
    ],
    status: "pending",
    latitude: -33.8890,
    longitude: 151.2110
  },
  {
    id: "6",
    title: "Designer Flat",
    address: "50 Holt St",
    suburb: "Surry Hills",
    state: "NSW",
    postcode: "2010",
    fullAddress: "50 Holt St, Surry Hills NSW 2010",
    pricing: {
      current: 1450000,
      display: "$1,450,000",
      method: "fixed-price",
      original: 1550000,
      pricePerSqm: 15263
    },
    images: [
      {
        id: "1",
        url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop",
        alt: "Designer Flat",
        category: "interior"
      }
    ],
    features: {
      bedrooms: 2,
      bathrooms: 1,
      parking: 1,
      internalArea: 95,
      type: "apartment",
      yearBuilt: 2019,
      architecture: "Contemporary"
    },
    insights: {
      matchScore: 81,
      estimatedGrowth: 3.5,
      marketComparison: "at-market",
      demandLevel: "moderate",
      supplyLevel: "balanced"
    },
    badges: [
      {
        type: "price-drop",
        text: "Price Drop",
        icon: "trending-down",
        color: "neutral"
      }
    ],
    status: "available",
    latitude: -33.8870,
    longitude: 151.2130
  }
]

/**
 * Active filters state
 */
const INITIAL_FILTERS: ListingFilters = {
  search: "Surry Hills, NSW",
  location: "",
  priceRange: [1500000, 3000000],
  bedrooms: 3,
  bathrooms: null,
  propertyType: [],
  minArea: null,
  aiMatchOnly: false,
  offMarketOnly: false,
  ecoRatedOnly: false,
  sortBy: "match-score"
}

export default function SearchResultsPage() {
  const [filters, setFilters] = useState<ListingFilters>(INITIAL_FILTERS)
  const [viewMode, setViewMode] = useState<ListingViewMode>("grid")
  const [savedProperties, setSavedProperties] = useState<Set<string>>(new Set())
  const [showMobileFilters, setShowMobileFilters] = useState(false)

  const toggleSave = (id: string) => {
    setSavedProperties((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  const clearFilter = (filterKey: keyof ListingFilters) => {
    setFilters((prev) => ({
      ...prev,
      [filterKey]: filterKey === "priceRange" ? null : filterKey === "sortBy" ? "newest" : typeof INITIAL_FILTERS[filterKey]
    }))
  }

  const activeFilterCount = Object.entries(filters).filter(([key, value]) => {
    if (key === "search") return false
    if (key === "priceRange") return value !== null
    if (key === "sortBy") return value !== INITIAL_FILTERS.sortBy
    if (typeof value === "number") return value !== null
    if (typeof value === "boolean") return value === true
    if (Array.isArray(value)) return value.length > 0
    return false
  }).length

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Noise Overlay */}
      <div
        className="fixed inset-0 z-0 w-full h-full pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          maskImage: "radial-gradient(circle at center, black 40%, transparent 100%)"
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full px-6 py-4 md:px-12 md:py-6 flex justify-between items-center z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <Link href="/" className="font-display text-lg font-medium tracking-tight flex items-center gap-2 group">
          <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-bold tracking-tighter group-hover:scale-90 transition-transform duration-300">
            H
          </div>
        </Link>

        {/* Search Bar - Desktop */}
        <div className="hidden md:flex items-center bg-neutral-900 border border-white/10 rounded-full px-4 py-2 w-80 gap-3">
          <Search className="w-4 h-4 text-neutral-500" />
          <input
            type="text"
            placeholder="Point Piper, NSW 2027"
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            className="bg-transparent border-none text-xs text-white placeholder-neutral-500 focus:outline-none w-full font-mono"
          />
          <div className="text-[10px] bg-white/5 border border-white/5 px-1.5 py-0.5 rounded text-neutral-400 font-mono">
            ⌘K
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link href="#" className="text-xs font-mono text-neutral-400 hover:text-white uppercase transition hidden md:block">
            Search
          </Link>
          <Link href="#" className="text-xs font-mono text-neutral-400 hover:text-white uppercase transition hidden md:block">
            App
          </Link>
          <Link href="#" className="text-xs font-mono text-white border border-white/20 rounded-md px-4 py-2 hover:bg-white hover:text-black transition-all uppercase hidden md:block">
            Login
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 pt-28 px-6 md:px-12 pb-32 min-h-screen">
        {/* Header */}
        <header className="mb-8">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-6 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                  Live Market Data
                </span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl text-white font-medium tracking-tight">
                Surry Hills, NSW
              </h1>
            </div>

            {/* AI Insight Card */}
            <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-lg p-4 backdrop-blur-md">
              <div className="flex items-center gap-2 mb-2">
                <Bot className="w-4 h-4 text-indigo-400" />
                <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                  HAUS AI Insight
                </span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Demand in this sector has increased by{" "}
                <span className="text-white font-medium">14%</span>
                {" "}in the last 30 days. Inventory is tight. Properties with outdoor
                spaces are seeing a{" "}
                <span className="text-emerald-400 font-medium">+8% premium</span>.
              </p>
            </div>
          </div>

          {/* Filters Bar */}
          <div className="sticky top-[72px] z-40 bg-[#050505]/80 backdrop-blur-xl border-y border-white/10 py-4 -mx-6 md:-mx-12 px-6 md:px-12 mb-12 flex gap-3 overflow-x-auto no-scrollbar items-center">
            <button
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full text-xs font-bold uppercase tracking-wider hover:bg-neutral-200 transition-colors shrink-0"
            >
              <SlidersHorizontal className="w-3 h-3" />
              All Filters
              {activeFilterCount > 0 && (
                <span className="ml-1 px-1.5 py-0.5 bg-black/20 rounded-full text-[10px]">
                  {activeFilterCount}
                </span>
              )}
            </button>

            <div className="h-6 w-px bg-white/10 mx-2 shrink-0" />

            {/* Active Filters */}
            {filters.priceRange && (
              <button className="flex items-center gap-2 px-4 py-2 border border-white/20 text-white bg-white/5 rounded-full text-xs font-medium hover:bg-white/10 transition shrink-0 group">
                Price: $1.5M - $3M
                <X className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" onClick={() => clearFilter("priceRange")} />
              </button>
            )}

            {filters.bedrooms && (
              <button className="flex items-center gap-2 px-4 py-2 border border-white/20 text-white bg-white/5 rounded-full text-xs font-medium hover:bg-white/10 transition shrink-0 group">
                {filters.bedrooms}+ Beds
                <X className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" onClick={() => clearFilter("bedrooms")} />
              </button>
            )}

            {filters.propertyType.length > 0 && (
              <button className="flex items-center gap-2 px-4 py-2 border border-white/20 text-white bg-white/5 rounded-full text-xs font-medium hover:bg-white/10 transition shrink-0 group">
                House & Terrace
                <X className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" onClick={() => clearFilter("propertyType")} />
              </button>
            )}

            {filters.aiMatchOnly && (
              <button className="flex items-center gap-2 px-4 py-2 border border-indigo-500/30 text-indigo-300 bg-indigo-500/10 rounded-full text-xs font-medium hover:bg-indigo-500/20 transition shrink-0 group">
                <Sparkles className="w-3 h-3" />
                AI Matches Only
                <X className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" onClick={() => clearFilter("aiMatchOnly")} />
              </button>
            )}

            {filters.offMarketOnly && (
              <button className="flex items-center gap-2 px-4 py-2 border border-emerald-500/30 text-emerald-300 bg-emerald-500/10 rounded-full text-xs font-medium hover:bg-emerald-500/20 transition shrink-0 group">
                <Zap className="w-3 h-3" />
                Off-Market
                <X className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" onClick={() => clearFilter("offMarketOnly")} />
              </button>
            )}
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar Map Mockup */}
          <div className="lg:col-span-3 hidden lg:block space-y-6">
            <div className="sticky top-40">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden relative border border-white/10 group cursor-pointer bg-neutral-900">
                <Image
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop"
                  alt="Map view"
                  fill
                  className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-70 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <button className="w-full bg-white text-black px-4 py-3 rounded-lg text-xs font-bold uppercase tracking-widest shadow-lg flex justify-center items-center gap-2 hover:bg-neutral-200 transition-colors">
                    <MapPin className="w-3.5 h-3.5" />
                    Open Interactive Map
                  </button>
                </div>

                {/* Map Pins Mock */}
                <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white] animate-pulse" />
                <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white] animate-pulse" />
                <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-indigo-500 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.8)] animate-pulse" />
              </div>
            </div>
          </div>

          {/* Listing Grid */}
          <div className="lg:col-span-9">
            {/* View Toggle & Sort */}
            <div className="flex justify-between items-center mb-6">
              <div className="text-sm text-neutral-400">
                <span className="text-white font-medium">{SEARCH_RESULTS.length}</span> properties found
              </div>

              <div className="flex items-center gap-3">
                {/* View Mode Toggle */}
                <div className="flex bg-[#0A0A0A] p-1 rounded-lg border border-white/5">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={cn(
                      "w-8 h-8 rounded flex items-center justify-center transition-colors",
                      viewMode === "grid" ? "bg-white/10 text-white" : "text-neutral-500 hover:text-white"
                    )}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={cn(
                      "w-8 h-8 rounded flex items-center justify-center transition-colors",
                      viewMode === "list" ? "bg-white/10 text-white" : "text-neutral-500 hover:text-white"
                    )}
                  >
                    <List className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("map")}
                    className={cn(
                      "w-8 h-8 rounded flex items-center justify-center transition-colors",
                      viewMode === "map" ? "bg-white/10 text-white" : "text-neutral-500 hover:text-white"
                    )}
                  >
                    <Map className="w-4 h-4" />
                  </button>
                </div>

                {/* Sort Dropdown */}
                <button className="flex items-center gap-2 px-4 py-2 bg-[#0A0A0A] border border-white/10 rounded-lg text-xs text-white hover:bg-white/5 transition-colors">
                  Sort by: Relevance
                  <ChevronRight className="w-3 h-3 text-neutral-600" />
                </button>
              </div>
            </div>

            {/* Results Grid */}
            <div className={cn(
              "grid gap-6",
              viewMode === "grid" && "md:grid-cols-2 xl:grid-cols-3",
              viewMode === "list" && "grid-cols-1"
            )}>
              {SEARCH_RESULTS.map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  viewMode={viewMode}
                  isSaved={savedProperties.has(property.id)}
                  onSave={() => toggleSave(property.id)}
                />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-16">
              <button className="px-8 py-4 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest text-white hover:bg-white hover:text-black transition-colors">
                Load More Listings
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <footer className="fixed bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent z-20 flex items-end justify-center pb-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest text-neutral-300">
              Waitlist Active
            </span>
          </div>
          <h2 className="font-display text-6xl md:text-8xl font-medium tracking-tighter text-white">
            GET STARTED
          </h2>
        </div>
      </footer>
    </div>
  )
}

// Property Card Component
function PropertyCard({
  property,
  viewMode,
  isSaved,
  onSave
}: {
  property: Property
  viewMode: ListingViewMode
  isSaved: boolean
  onSave: () => void
}) {
  const mainImage = property.images[0]

  return (
    <Link href={`/listings/${property.id}`} className="group block">
      <div className={cn(
        "bg-[#0A0A0A] border border-white/5 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-white/20",
        viewMode === "list" && "flex gap-6"
      )}>
        {/* Image */}
        <div className={cn(
          "relative bg-neutral-900 overflow-hidden",
          viewMode === "grid" ? "aspect-[4/3] mb-4" : "w-80 flex-shrink-0"
        )}>
          <Image
            src={mainImage.url}
            alt={mainImage.alt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex gap-2">
            {property.badges?.map((badge, idx) => (
              <div
                key={idx}
                className={cn(
                  "px-2 py-1 rounded backdrop-blur border text-[10px] font-bold uppercase tracking-wider flex items-center gap-1",
                  badge.color === "indigo" && "bg-indigo-600/90 border-indigo-400/20 text-white",
                  badge.color === "emerald" && "bg-emerald-600/90 border-emerald-400/20 text-white",
                  badge.color === "purple" && "bg-purple-600/90 border-purple-400/20 text-white",
                  badge.color === "neutral" && "bg-neutral-900/80 border-white/10 text-neutral-300"
                )}
              >
                {badge.icon === "sparkles" && <Sparkles className="w-2.5 h-2.5" />}
                {badge.icon === "leaf" && <Leaf className="w-2.5 h-2.5" />}
                {badge.icon === "gem" && <Gem className="w-2.5 h-2.5" />}
                {badge.text}
              </div>
            ))}
          </div>

          {/* Save Button */}
          <button
            onClick={(e) => {
              e.preventDefault()
              onSave()
            }}
            className={cn(
              "absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-colors",
              isSaved
                ? "bg-rose-500 text-white"
                : "bg-black/40 backdrop-blur text-white hover:bg-white hover:text-black"
            )}
          >
            <Heart className={cn("w-3.5 h-3.5", isSaved && "fill-current")} />
          </button>

          {/* Market Growth Indicator */}
          {property.insights?.estimatedGrowth && (
            <div className="absolute bottom-3 left-3 px-2 py-1 rounded bg-emerald-500/90 backdrop-blur border border-emerald-400/20 text-white text-[10px] font-bold uppercase flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              +{property.insights.estimatedGrowth}%
            </div>
          )}
        </div>

        {/* Content */}
        <div className={cn(
          "p-4",
          viewMode === "grid" && "pt-0"
        )}>
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-medium text-base text-white group-hover:text-indigo-400 transition-colors">
                {property.title}
              </h3>
              <p className="text-xs text-neutral-500 mt-0.5 flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {property.address}
              </p>
            </div>
            <div className="text-right">
              <div className="font-medium text-white">{property.pricing.display}</div>
              {property.pricing.auctionDate && (
                <div className="text-[10px] text-neutral-500">
                  Auction {property.pricing.auctionDate}
                </div>
              )}
              {property.pricing.original && (
                <div className="text-[10px] text-emerald-400 font-medium">
                  Reduced from ${(property.pricing.original / 1000000).toFixed(1)}M
                </div>
              )}
            </div>
          </div>

          {/* Features */}
          <div className="flex gap-3 mt-3 text-xs text-neutral-400 border-t border-white/10 pt-3">
            <span className="flex items-center gap-1.5">
              <span className="text-neutral-600">•</span> {property.features.bedrooms} Beds
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-neutral-600">•</span> {property.features.bathrooms} Bath
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-neutral-600">•</span> {property.features.internalArea}m²
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
