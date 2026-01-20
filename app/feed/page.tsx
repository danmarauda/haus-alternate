"use client"

/**
 * My Feed Page - Personalized property feed with AI-powered recommendations
 *
 * @description
 * A sophisticated property discovery interface featuring:
 * - AI-curated property matches with match scores
 * - Market intelligence and insights
 * - Schedule management for inspections
 * - Real-time finance and rate tracking
 * - Filtering and search capabilities
 *
 * @features
 * - Property feed cards with images and stats
 * - Match scores and AI recommendations
 * - Inspection and auction scheduling
 * - Market insights and trends
 * - Recently sold properties
 * - Finance status tracking
 * - Quick tools access
 */

import { useState, useCallback, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Sparkles,
  Clock,
  Flame,
  FileCheck,
  TrendingUp,
  ArrowRight,
  Heart,
  Share2,
  BedDouble,
  Bath,
  CarFront,
  Ban,
  Check,
  AlertCircle,
  EyeOff,
  Star,
  Settings2,
  CalendarPlus,
  FileText,
  RefreshCw,
  Calculator,
  FileSearch,
  Map,
  History,
} from "lucide-react"
import { Suspense } from "react"
import { Shell } from "@/components/shell"
import { ErrorBoundary } from "@/components/error-boundary"
import { PageLoader } from "@/components/page-loader"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"


// Types
interface FeedItem {
  id: string
  title: string
  address: string
  suburb: string
  postcode: string
  state: string
  imageUrl: string
  matchScore: number
  listingType: "auction" | "for-sale" | "off-market" | "sold"
  price?: string
  priceDisplay: string
  beds: number
  baths: number
  parking: number
  features: string[]
  isFavorite?: boolean
  inspectionDate?: string
  auctionDate?: string
}

interface ScheduleEvent {
  id: string
  type: "inspection" | "auction"
  date: string
  time: string
  property: string
  address: string
  status?: "confirmed" | "pending" | "contract-reviewed"
}

interface MarketInsight {
  id: string
  title: string
  description: string
  type: "new-listings" | "price-drop" | "market-update"
  link?: string
}

interface RecentlySold {
  id: string
  address: string
  suburb: string
  price: string
  imageUrl: string
  soldDate: string
}

// Mock data
const mockFeedItems: FeedItem[] = [
  {
    id: "1",
    title: "4/128 Crown Street",
    address: "4/128 Crown Street",
    suburb: "Surry Hills",
    postcode: "2010",
    state: "NSW",
    imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop",
    matchScore: 94,
    listingType: "auction",
    priceDisplay: "$950k Guide",
    beds: 2,
    baths: 1,
    parking: 1,
    features: ["Parking", "Balcony", "In Budget"],
    isFavorite: false,
    auctionDate: "2024-11-16",
  },
  {
    id: "2",
    title: "42 Cooper Street",
    address: "42 Cooper Street",
    suburb: "Redfern",
    postcode: "2016",
    state: "NSW",
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop",
    matchScore: 75,
    listingType: "off-market",
    priceDisplay: "Contact Agent",
    beds: 2,
    baths: 1,
    parking: 0,
    features: ["Quiet Street", "No Parking"],
    isFavorite: false,
  },
] as const

const mockSchedule: ScheduleEvent[] = [
  {
    id: "1",
    type: "inspection",
    date: "Tomorrow",
    time: "09:30 AM",
    property: "Inspection",
    address: "4/128 Crown St, Surry Hills",
  },
  {
    id: "2",
    type: "auction",
    date: "SAT 14 NOV",
    time: "11:00 AM",
    property: "Auction",
    address: "22 Smith St, Redfern",
    status: "contract-reviewed",
  },
] as const

const mockInsight: MarketInsight = {
  id: "1",
  title: "New Listings in Redfern",
  description: "2 properties matching your 'Terrace' criteria were listed in Redfern today under $1.2M.",
  type: "new-listings",
  link: "#",
} as const

const mockRecentlySold: RecentlySold[] = [
  {
    id: "1",
    address: "28 Albion Street",
    suburb: "Surry Hills",
    price: "$1.42M",
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=150&q=80",
    soldDate: "2d ago",
  },
  {
    id: "2",
    address: "5/120 Redfern St",
    suburb: "Redfern",
    price: "$985k",
    imageUrl: "https://images.unsplash.com/photo-1600596542815-2a4d9f6facb8?w=150&q=80",
    soldDate: "4d ago",
  },
] as const

function MyFeedPageContent() {
  const [favorites, setFavorites] = useState<Set<string>>(new Set())
  const [activeFilter, setActiveFilter] = useState<string>("top-matches")
  const [feedItems, setFeedItems] = useState<FeedItem[]>(mockFeedItems)

  const toggleFavorite = useCallback((id: string) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev)
      if (newFavorites.has(id)) {
        newFavorites.delete(id)
      } else {
        newFavorites.add(id)
      }
      return newFavorites
    })
  }, [])

  const handleFilterChange = useCallback((filterId: string) => {
    setActiveFilter(filterId)
  }, [])

  const filteredFeedItems = useMemo(() => {
    return feedItems
  }, [feedItems])

  return (
    <div className="min-h-screen bg-background">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40" aria-hidden="true">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute inset-0 w-full h-full bg-[rad-gradient(circle_at_0%_0%,rgba(16,185,129,0.03)_0%,transparent_40%)]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full px-6 md:px-8 h-16 flex justify-between items-center z-50 bg-background/80 backdrop-blur-xl border-b border-border" role="navigation" aria-label="Main navigation">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="font-display text-lg font-medium tracking-tight flex items-center gap-2 group"
            aria-label="HAUS home"
          >
            <div className="w-8 h-8 bg-primary text-primary-foreground flex items-center justify-center font-bold tracking-tighter rounded-sm group-hover:scale-95 transition-transform duration-300">
              AU
            </div>
            <span className="text-foreground">
              PROP
              <span className="text-muted-foreground">.BUYER</span>
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-1">
            <Link
              href="/feed"
              className={cn(
                "px-3 py-1.5 text-xs font-medium rounded border transition-colors",
                activeFilter === "top-matches"
                  ? "text-white bg-primary/10 shadow-sm border-primary/20"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent border-transparent"
              )}
              aria-current={activeFilter === "top-matches" ? "page" : undefined}
            >
              My Feed
            </Link>
            <Link
              href="#"
              className="px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors rounded hover:bg-accent flex items-center gap-1"
            >
              Watchlist
              <span className="text-[10px] bg-muted px-1.5 py-0.5 rounded-full text-foreground" aria-label="4 items in watchlist">
                4
              </span>
            </Link>
            <Link
              href="#"
              className="px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors rounded hover:bg-accent"
            >
              Profile
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-accent/50" aria-live="polite" aria-label="Market status">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" aria-hidden="true" />
            <span className="text-[10px] font-mono font-medium text-muted-foreground">
              MARKET: SYDNEY (AUCTION)
            </span>
          </div>
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 border border-border ring-4 ring-background/50" aria-hidden="true" />
        </div>
      </nav>

      {/* Content Wrapper */}
      <div className="relative z-10 pt-28 pb-12 px-6 md:px-8 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-12 gap-8 lg:gap-12">
          {/* Left Sidebar: Filters */}
          <aside className="col-span-12 lg:col-span-3" aria-label="Feed filters">
            <div className="sticky top-32 space-y-8">
              {/* Context Header */}
              <div>
                <h1 className="font-display text-lg text-foreground font-medium mb-1">
                  Good Morning, Sarah
                </h1>
                <p className="text-[11px] text-muted-foreground font-mono">
                  3 new matches in Surry Hills
                </p>
              </div>

              {/* Feed Filters */}
              <nav className="space-y-1" aria-label="Feed views">
                <div className="px-3 pb-2 text-[10px] font-mono uppercase tracking-widest text-muted-foreground/60">
                  Feed Views
                </div>
                {[
                  { id: "top-matches", icon: Sparkles, label: "Top Matches", count: "12", badge: true },
                  { id: "new-listings", icon: Clock, label: "New Listings", count: "3" },
                  { id: "auctions", icon: Flame, label: "Upcoming Auctions", count: null },
                  { id: "sold-prices", icon: FileCheck, label: "Sold Prices", count: null },
                ].map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => handleFilterChange(filter.id)}
                    className={cn(
                      "nav-item w-full flex items-center justify-between px-3 py-2 text-xs font-medium rounded-lg border transition-all group",
                      activeFilter === filter.id
                        ? "text-white bg-primary/10 shadow-sm border-primary/20"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent border-transparent"
                    )}
                    aria-pressed={activeFilter === filter.id}
                  >
                    <div className="flex items-center gap-3">
                      <filter.icon
                        className={cn(
                          "w-4 h-4 transition-colors",
                          activeFilter === filter.id ? "text-primary" : "group-hover:text-primary"
                        )}
                        aria-hidden="true"
                      />
                      {filter.label}
                    </div>
                    {filter.count && (
                      <span
                        className={cn(
                          "text-[10px] px-1.5 rounded",
                          filter.badge && activeFilter === filter.id
                            ? "bg-primary/10 text-primary border border-primary/20"
                            : "text-muted-foreground/60"
                        )}
                        aria-label={`${filter.count} items`}
                      >
                        {filter.count}
                      </span>
                    )}
                  </button>
                ))}
              </nav>

              {/* Quick Stats */}
              <Card className="p-4 border-border bg-accent/5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" aria-hidden="true" />
                  <span className="text-[10px] uppercase font-mono tracking-widest text-muted-foreground">
                    Market Pulse
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-end">
                    <span className="text-xs text-muted-foreground">Clearance Rate</span>
                    <span className="text-sm font-medium text-foreground font-mono">
                      68.4%
                    </span>
                  </div>
                  <div className="w-full bg-muted h-1 rounded-full overflow-hidden" role="progressbar" aria-valuenow={68.4} aria-valuemin={0} aria-valuemax={100} aria-label="Market clearance rate">
                    <div className="bg-primary h-full w-[68%]" />
                  </div>
                  <p className="text-[10px] text-muted-foreground leading-relaxed">
                    Sydney clearance rates up 2% this week. Competition increasing
                    in inner-west.
                  </p>
                </div>
              </Card>

              {/* Active Search */}
              <Card className="p-4 border-border bg-accent/5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-[10px] uppercase font-mono tracking-widest text-muted-foreground">
                    Active Search
                  </h3>
                  <button className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Search settings">
                    <Settings2 className="w-3 h-3" />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2 mb-4" role="list" aria-label="Active search filters">
                  <Badge className="bg-primary/10 border-primary/20 text-primary px-2 py-1.5 text-[10px]" role="listitem">
                    Surry Hills +3
                  </Badge>
                  <Badge variant="outline" className="px-2 py-1.5 text-[10px]" role="listitem">
                    $900k - $1.35M
                  </Badge>
                  <Badge variant="outline" className="px-2 py-1.5 text-[10px]" role="listitem">
                    2+ Bed
                  </Badge>
                  <Badge variant="outline" className="px-2 py-1.5 text-[10px]" role="listitem">
                    Parking
                  </Badge>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-muted h-1.5 rounded-full overflow-hidden" role="progressbar" aria-valuenow={65} aria-valuemin={0} aria-valuemax={100} aria-label="Search progress">
                    <div className="bg-primary h-full w-[65%] rounded-full" />
                  </div>
                  <span className="text-[9px] font-mono text-muted-foreground">
                    24 Matches
                  </span>
                </div>
              </Card>

              {/* Recently Sold */}
              <div className="space-y-4">
                <div className="flex items-center justify-between px-1">
                  <h3 className="text-[10px] uppercase font-mono tracking-widest text-muted-foreground/60">
                    Recently Sold
                  </h3>
                  <Link
                    href="#"
                    className="text-[10px] text-muted-foreground hover:text-foreground transition-colors"
                  >
                    View Map
                  </Link>
                </div>
                <div className="space-y-2" role="list" aria-label="Recently sold properties">
                  {mockRecentlySold.map((item) => (
                    <Link
                      key={item.id}
                      href="#"
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent transition-colors group"
                      role="listitem"
                    >
                      <div className="w-10 h-10 rounded bg-muted overflow-hidden border border-border relative">
                        <Image
                          src={item.imageUrl}
                          alt={item.address}
                          fill
                          className="object-cover opacity-70 group-hover:opacity-100 transition-opacity"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-baseline mb-0.5">
                          <span className="text-[11px] text-foreground font-medium truncate">
                            {item.address}
                          </span>
                          <span className="text-[10px] font-mono text-primary">
                            {item.price}
                          </span>
                        </div>
                        <div className="flex justify-between items-center text-[10px] text-muted-foreground">
                          <span className="truncate">{item.suburb}</span>
                          <span className="font-mono text-[9px]">{item.soldDate}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Feed Stream */}
          <main className="col-span-12 lg:col-span-6 space-y-6" aria-labelledby="feed-heading">
            <h2 id="feed-heading" className="sr-only">Property Feed</h2>

            {/* Insight Card */}
            <Card className="p-4 rounded-xl border-primary/20 bg-primary/5 flex items-start gap-4">
              <div className="p-2 bg-primary/10 rounded-lg text-primary shrink-0">
                <TrendingUp className="w-4 h-4" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xs font-medium text-foreground mb-1">
                  {mockInsight.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-2">
                  {mockInsight.description}
                </p>
                <Link
                  href={mockInsight.link || "#"}
                  className="text-[10px] font-medium text-primary hover:text-primary/80 flex items-center gap-1"
                >
                  View Listings
                  <ArrowRight className="w-3 h-3" aria-hidden="true" />
                </Link>
              </div>
            </Card>

            {/* Feed Items */}
            {filteredFeedItems.map((item) => (
              <FeedCard
                key={item.id}
                item={item}
                isFavorite={favorites.has(item.id)}
                onFavorite={() => toggleFavorite(item.id)}
              />
            ))}
          </main>

          {/* Right Sidebar: Schedule & Tools */}
          <aside className="col-span-12 lg:col-span-3 space-y-6" aria-label="Schedule and tools">
            <div className="sticky top-32">
              {/* Schedule Widget */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xs font-medium text-foreground uppercase tracking-wider font-mono">
                  Your Schedule
                </h3>
                <button className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Add to calendar">
                  <CalendarPlus className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-3" role="list" aria-label="Upcoming events">
                {mockSchedule.map((event) => (
                  <ScheduleCard key={event.id} event={event} />
                ))}
              </div>

              {/* Mortgage Rate Snippet */}
              <div className="mt-8 pt-6 border-t border-border">
                <h3 className="text-xs font-medium text-foreground uppercase tracking-wider font-mono mb-3">
                  Finance Status
                </h3>
                <Card className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-transparent border-primary/20 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity">
                    <RefreshCw className="w-3 h-3 text-primary" aria-hidden="true" />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-1.5 py-0.5 rounded bg-primary/20 text-primary text-[9px] font-bold uppercase tracking-wide border border-primary/20">
                        Pre-Approved
                      </span>
                    </div>
                    <div className="flex items-baseline gap-1 mb-3">
                      <span className="text-xs text-muted-foreground">$</span>
                      <span className="text-xl font-semibold text-foreground tracking-tight">
                        1,350,000
                      </span>
                    </div>
                    <div className="w-full bg-muted h-1 rounded-full overflow-hidden mb-2" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} aria-label="Approval used">
                      <div className="bg-primary h-full w-[85%] rounded-full" />
                    </div>
                    <div className="flex justify-between items-center text-[10px] font-mono">
                      <span className="text-muted-foreground">CBA Variable</span>
                      <span className="text-muted-foreground/60">Exp: 14 Dec</span>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Live Rates */}
              <div className="mt-8 pt-6 border-t border-border">
                <h3 className="text-xs font-medium text-foreground uppercase tracking-wider font-mono mb-3">
                  Live Rates
                </h3>
                <Card className="p-3 rounded-lg bg-accent/5 border-border flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-muted-foreground">
                      Variable (Owner)
                    </div>
                    <div className="text-xs font-medium text-foreground mt-0.5">
                      6.14% p.a.
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground/40" aria-hidden="true" />
                </Card>
              </div>

              {/* Quick Tools */}
              <div className="mt-8 pt-6 border-t border-border">
                <h3 className="text-xs font-medium text-foreground uppercase tracking-wider font-mono mb-3">
                  Quick Tools
                </h3>
                <div className="grid grid-cols-2 gap-2" role="list" aria-label="Quick tools">
                  {[
                    { icon: Calculator, label: "Stamp Duty" },
                    { icon: FileSearch, label: "Strata Check" },
                    { icon: Map, label: "Area Stats" },
                    { icon: History, label: "Past Sales" },
                  ].map((tool) => (
                    <Link
                      key={tool.label}
                      href="#"
                      className="p-3 rounded-lg bg-accent/5 border border-border hover:bg-accent/10 hover:border-border/80 transition-all group flex flex-col gap-2"
                      role="listitem"
                    >
                      <tool.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" aria-hidden="true" />
                      <span className="text-[10px] text-muted-foreground font-medium group-hover:text-foreground">
                        {tool.label}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

export default function MyFeedPage() {
  return (
    <ErrorBoundary>
      <Shell>
        <Suspense fallback={<PageLoader text="Loading feed..." />}>
          <MyFeedPageContent />
        </Suspense>
      </Shell>
    </ErrorBoundary>
  )
}

// Sub-components
function FeedCard({ item, isFavorite, onFavorite }: { item: FeedItem; isFavorite: boolean; onFavorite: () => void }) {
  return (
    <article className="group rounded-2xl bg-card border border-border overflow-hidden hover:shadow-lg transition-all">
      {/* Image Area */}
      <div className="relative h-64 w-full overflow-hidden cursor-pointer">
        <Image
          src={item.imageUrl}
          alt={item.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2" aria-label="Property badges">
          {item.listingType === "auction" && (
            <Badge className="bg-black/60 backdrop-blur-md border-border px-2 py-1 text-[10px] font-bold text-white uppercase tracking-wider">
              Auction
            </Badge>
          )}
          {item.listingType === "off-market" && (
            <Badge className="bg-purple-500/90 backdrop-blur-md px-2 py-1 text-[10px] font-bold text-white uppercase tracking-wider flex items-center gap-1">
              <EyeOff className="w-3 h-3" aria-hidden="true" />
              Off Market
            </Badge>
          )}
          {item.matchScore >= 90 && (
            <Badge className="bg-primary/90 backdrop-blur-md px-2 py-1 text-[10px] font-bold text-primary-foreground uppercase tracking-wider flex items-center gap-1">
              <Star className="w-3 h-3 fill-primary-foreground" aria-hidden="true" />
              Strong Match
            </Badge>
          )}
        </div>

        {/* Actions */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={onFavorite}
            className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-border flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
            aria-pressed={isFavorite}
          >
            <Heart className={cn("w-4 h-4", isFavorite && "fill-current")} />
          </button>
          <button className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-border flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors" aria-label="Share property">
            <Share2 className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-card to-transparent" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="p-5 relative">
        {/* Match Score */}
        <div
          className="absolute -top-6 right-5 relative w-12 h-12 rounded-full flex items-center justify-center"
          style={{
            background: `conic-gradient(${
              item.matchScore >= 90 ? "#10b981" : item.matchScore >= 75 ? "#eab308" : "#ef4444"
            } ${item.matchScore}%, rgba(255,255,255,0.1) 0)`,
          }}
          aria-label={`${item.matchScore}% match`}
          role="progressbar"
          aria-valuenow={item.matchScore}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div className="absolute inset-[2px] rounded-full bg-card" />
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pt-0.5">
            <span
              className={cn(
                "text-[10px] font-bold",
                item.matchScore >= 90 ? "text-primary" : item.matchScore >= 75 ? "text-yellow-500" : "text-red-500"
              )}
            >
              {item.matchScore}%
            </span>
          </div>
        </div>

        <div className="flex justify-between items-start mb-2 -mt-4">
          <div>
            <h2 className="text-base font-medium text-foreground mb-0.5 group-hover:text-primary transition-colors cursor-pointer">
              {item.title}
            </h2>
            <p className="text-xs text-muted-foreground">
              {item.suburb}, {item.state} {item.postcode}
            </p>
          </div>
        </div>

        {/* Key Stats */}
        <div className="flex items-center gap-4 py-3 border-b border-border mb-3">
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <BedDouble className="w-4 h-4" aria-hidden="true" />
            <span className="text-xs font-mono">{item.beds}</span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Bath className="w-4 h-4" aria-hidden="true" />
            <span className="text-xs font-mono">{item.baths}</span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            {item.parking > 0 ? (
              <>
                <CarFront className="w-4 h-4" aria-hidden="true" />
                <span className="text-xs font-mono">{item.parking}</span>
              </>
            ) : (
              <>
                <Ban className="w-4 h-4 text-red-500/50" aria-hidden="true" />
                <span className="text-xs font-mono text-muted-foreground/60">0</span>
              </>
            )}
          </div>
          <div className="w-px h-4 bg-border mx-1" aria-hidden="true" />
          <div className={cn("text-xs font-mono", item.price ? "text-primary" : "text-foreground")}>
            {item.priceDisplay}
          </div>
        </div>

        {/* Match Reasons */}
        <div className="flex flex-wrap gap-2 mb-4" role="list" aria-label="Property features">
          {item.features.map((feature, idx) => (
            <Badge
              key={idx}
              variant="outline"
              className={cn(
                "px-2 py-1 text-[10px]",
                feature.toLowerCase().includes("no")
                  ? "text-destructive border-destructive/20"
                  : "border-border"
              )}
              role="listitem"
            >
              {feature.toLowerCase().includes("no") ? (
                <AlertCircle className="w-3 h-3 text-destructive" aria-hidden="true" />
              ) : (
                <Check className="w-3 h-3 text-primary" aria-hidden="true" />
              )}
              {feature}
            </Badge>
          ))}
        </div>

        <div className="flex items-center gap-3 pt-1">
          <Button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
            Request Contract
          </Button>
          <Button variant="outline" className="border-border">
            Inspect
          </Button>
        </div>
      </div>
    </article>
  )
}

function ScheduleCard({ event }: { event: ScheduleEvent }) {
  const color = event.type === "inspection" ? "bg-emerald-500" : "bg-orange-500"

  return (
    <Card className="group relative p-3 rounded-lg bg-card border-border hover:border-border/80 transition-all cursor-pointer" role="listitem">
      <div className={cn("absolute left-0 top-3 bottom-3 w-0.5 rounded-r", color)} aria-hidden="true" />
      <div className="pl-3">
        <div className="flex justify-between items-start mb-1">
          <Badge
            className={cn(
              "text-[10px] font-bold px-1.5 py-0.5",
              event.type === "inspection"
                ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
                : "bg-orange-500/10 text-orange-500 border-orange-500/20"
            )}
          >
            {event.date}
          </Badge>
          <span className="text-[10px] font-mono text-muted-foreground">{event.time}</span>
        </div>
        <h4 className="text-xs font-medium text-foreground mb-0.5 group-hover:underline decoration-border/40 underline-offset-2">
          {event.property}
        </h4>
        <p className="text-[11px] text-muted-foreground truncate">{event.address}</p>
        {event.status === "contract-reviewed" && (
          <div className="mt-2 flex items-center gap-2">
            <span className="text-[9px] text-muted-foreground bg-accent px-1.5 py-0.5 rounded flex items-center gap-1">
              <FileText className="w-2.5 h-2.5" aria-hidden="true" />
              Contract Reviewed
            </span>
          </div>
        )}
      </div>
    </Card>
  )
}
