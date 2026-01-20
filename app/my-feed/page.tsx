"use client"

/**
 * My Feed Page
 *
 * @description
 * Personalized property feed with matching algorithms, schedules,
 * and market insights.
 *
 * @features
 * - Top matches with AI scoring
 * - New listings feed
 * - Upcoming auctions calendar
 * - Recently sold properties
 * - Market pulse indicators
 * - Active search filters
 * - Finance status widget
 * - Quick tools integration
 */

import { useEffect, useState, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Sparkles, Clock, Flame, FileCheck, Star, EyeOff, Check, AlertCircle, TrendingUp,
  FileText, Map, History, ArrowRight, CalendarPlus, RefreshCw, Settings2
} from "lucide-react"
import { Suspense } from "react"
import { Shell } from "@/components/shell"
import { ErrorBoundary } from "@/components/error-boundary"
import { PageLoader } from "@/components/page-loader"

// TypeScript interfaces
interface PropertyListing {
  id: string
  title: string
  address: string
  suburb: string
  price: string
  beds: number
  baths: number
  parking: number
  image: string
  badges: string[]
  matchScore: number
  matchReasons: Array<{ text: string; type: 'check' | 'alert' }>
  auctionDate?: string
  inspectionTime?: string
}

interface ScheduleEvent {
  id: string
  type: 'inspection' | 'auction'
  date: string
  time: string
  title: string
  address: string
  tags?: string[]
}

interface RecentlySold {
  id: string
  address: string
  suburb: string
  price: string
  image: string
  daysAgo: number
}

const propertyListings: PropertyListing[] = [
  {
    id: '1',
    title: '4/128 Crown Street',
    address: '4/128 Crown Street',
    suburb: 'Surry Hills, NSW 2010',
    price: '$950k Guide',
    beds: 2,
    baths: 1,
    parking: 1,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop',
    badges: ['Auction', 'Strong Match'],
    matchScore: 94,
    matchReasons: [
      { text: 'Parking', type: 'check' },
      { text: 'Balcony', type: 'check' },
      { text: 'In Budget', type: 'check' }
    ]
  },
  {
    id: '2',
    title: '42 Cooper Street',
    address: '42 Cooper Street',
    suburb: 'Redfern, NSW 2016',
    price: 'Contact Agent',
    beds: 2,
    baths: 1,
    parking: 0,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop',
    badges: ['Off Market'],
    matchScore: 75,
    matchReasons: [
      { text: 'Quiet Street', type: 'check' },
      { text: 'No Parking', type: 'alert' }
    ]
  }
] as const

const scheduleEvents: ScheduleEvent[] = [
  {
    id: '1',
    type: 'inspection',
    date: 'TOMORROW',
    time: '09:30 AM',
    title: 'Inspection',
    address: '4/128 Crown St, Surry Hills'
  },
  {
    id: '2',
    type: 'auction',
    date: 'SAT 14 NOV',
    time: '11:00 AM',
    title: 'Auction',
    address: '22 Smith St, Redfern',
    tags: ['Contract Reviewed']
  }
] as const

const recentlySold: RecentlySold[] = [
  {
    id: '1',
    address: '28 Albion Street',
    suburb: 'Surry Hills',
    price: '$1.42M',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=150&q=80',
    daysAgo: 2
  },
  {
    id: '2',
    address: '5/120 Redfern St',
    suburb: 'Redfern',
    price: '$985k',
    image: 'https://images.unsplash.com/photo-1600596542815-2a4d9f6facb8?w=150&q=80',
    daysAgo: 4
  }
] as const

const feedFilters = [
  { id: 'top-matches' as const, icon: Sparkles, label: 'Top Matches', count: 12, countColor: 'emerald' },
  { id: 'new-listings' as const, icon: Clock, label: 'New Listings', count: 3 },
  { id: 'auctions' as const, icon: Flame, label: 'Upcoming Auctions' },
  { id: 'sold' as const, icon: FileCheck, label: 'Sold Prices' }
] as const

function MyFeedPageContent() {
  const [mounted, setMounted] = useState(false)
  const [feedView, setFeedView] = useState<'top-matches' | 'new-listings' | 'auctions' | 'sold'>('top-matches')

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleFeedViewChange = useCallback((viewId: typeof feedView) => {
    setFeedView(viewId)
  }, [])

  const getMatchRingStyle = useCallback((score: number) => ({
    background: `conic-gradient(${score >= 90 ? '#10b981' : score >= 75 ? '#eab308' : '#ef4444'} ${score}%, rgba(255,255,255,0.1) 0)`,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  }), [])

  return (
    <div className="landing-page min-h-screen bg-[#050505] text-neutral-300">
      {/* Background effects */}
      <div
        className="fixed inset-0 z-0 w-full h-full pointer-events-none opacity-40"
        style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.05%22/%3E%3C/svg%3E')"
        }}
        aria-hidden="true"
      />
      <div
        className="fixed inset-0 z-0 w-full h-full pointer-events-none"
        style={{ background: 'radial-gradient(circle at 0% 0%, rgba(16, 185, 129, 0.03) 0%, transparent 40%)' }}
        aria-hidden="true"
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full px-6 md:px-8 h-16 flex justify-between items-center z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5" role="navigation" aria-label="Main navigation">
        <div className="flex items-center gap-8">
          <Link href="/" className="font-display text-lg font-medium tracking-tight flex items-center gap-2 group" aria-label="HAUS home">
            <div className="w-8 h-8 bg-emerald-600 text-white flex items-center justify-center font-bold tracking-tighter rounded-sm group-hover:scale-95 transition-transform duration-300" aria-hidden="true">
              H
            </div>
            <span className="text-white">
              HAUS<span className="text-neutral-500">.AI</span>
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-1" role="list" aria-label="Navigation menu">
            <Link href="#" className="px-3 py-1.5 text-xs font-medium text-white bg-white/5 shadow-sm rounded border border-white/5" aria-current="page">
              My Feed
            </Link>
            <Link href="#" className="px-3 py-1.5 text-xs font-medium text-neutral-400 hover:text-white transition-colors rounded hover:bg-white/5">
              Watchlist
              <span className="ml-1 text-[10px] bg-neutral-800 px-1.5 py-0.5 rounded-full text-white" aria-label="4 items">
                4
              </span>
            </Link>
            <Link href="#" className="px-3 py-1.5 text-xs font-medium text-neutral-400 hover:text-white transition-colors rounded hover:bg-white/5">
              Profile
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5" aria-live="polite">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true"></div>
            <span className="text-[10px] font-mono font-medium text-neutral-300">
              MARKET: SYDNEY (AUCTION)
            </span>
          </div>
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 border border-white/20 ring-4 ring-black/50" aria-hidden="true"></div>
        </div>
      </nav>

      {/* Content Wrapper */}
      <div className="relative z-10 pt-28 pb-12 px-6 md:px-8 max-w-[1280px] mx-auto" role="main" aria-labelledby="feed-heading">
        <h2 id="feed-heading" className="sr-only">My Property Feed</h2>

        <div className="grid grid-cols-12 gap-8 lg:gap-12">
          {/* Left Sidebar: Filters */}
          <aside className={`col-span-12 lg:col-span-3 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'} transition-all duration-700`} aria-label="Feed filters">
            <div className="sticky top-32 space-y-8">
              {/* Context Header */}
              <div>
                <h1 className="font-display text-lg text-white font-medium mb-1">
                  Good Morning, Sarah
                </h1>
                <p className="text-[11px] text-neutral-500 font-mono">
                  3 new matches in Surry Hills
                </p>
              </div>

              {/* Feed Filters */}
              <nav className="space-y-1" aria-label="Feed view options">
                <div className="px-3 pb-2 text-[10px] font-mono uppercase tracking-widest text-neutral-600">
                  Feed Views
                </div>
                {feedFilters.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleFeedViewChange(item.id)}
                    className={`w-full flex items-center justify-between px-3 py-2 text-xs font-medium rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 border border-transparent transition-all group ${
                      feedView === item.id ? 'bg-white/5 border-white/10 text-white' : ''
                    }`}
                    aria-pressed={feedView === item.id}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className={`w-4 h-4 ${feedView === item.id ? 'text-emerald-400' : ''} transition-colors`} aria-hidden="true" />
                      {item.label}
                    </div>
                    {"count" in item && item.count && (
                      <span className={`text-[10px] ${"countColor" in item && item.countColor ? `${item.countColor}/10 text-${item.countColor}` : 'text-neutral-600'} px-1.5 rounded ${"countColor" in item && item.countColor ? `border ${item.countColor}/20` : ''}`} aria-label={`${item.count} items`}>
                        {item.count}
                      </span>
                    )}
                  </button>
                ))}
              </nav>

              {/* Quick Stats */}
              <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02]" role="region" aria-labelledby="market-pulse-heading">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" aria-hidden="true"></div>
                  <span id="market-pulse-heading" className="text-[10px] uppercase font-mono tracking-widest text-neutral-500">
                    Market Pulse
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-end">
                    <span className="text-xs text-neutral-400">Clearance Rate</span>
                    <span className="text-sm font-medium text-white font-mono">
                      68.4%
                    </span>
                  </div>
                  <div className="w-full bg-neutral-800 h-1 rounded-full overflow-hidden" role="progressbar" aria-valuenow={68} aria-valuemin={0} aria-valuemax={100} aria-label="Clearance rate">
                    <div className="bg-emerald-500 h-full w-[68%]" aria-hidden="true"></div>
                  </div>
                  <p className="text-[10px] text-neutral-500 leading-relaxed">
                    Sydney clearance rates up 2% this week. Competition increasing
                    in inner-west.
                  </p>
                </div>
              </div>

              {/* Active Search */}
              <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02]" role="region" aria-labelledby="active-search-heading">
                <div className="flex items-center justify-between mb-3">
                  <h3 id="active-search-heading" className="text-[10px] uppercase font-mono tracking-widest text-neutral-500">
                    Active Search
                  </h3>
                  <button className="text-neutral-500 hover:text-white transition-colors" aria-label="Search settings">
                    <Settings2 className="w-3 h-3" />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2 mb-4" role="list" aria-label="Active filters">
                  <span className="px-2 py-1.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-[10px] text-emerald-400 font-medium">
                    Surry Hills +3
                  </span>
                  <span className="px-2 py-1.5 rounded bg-white/5 border border-white/10 text-[10px] text-neutral-300 font-medium">
                    $900k - $1.35M
                  </span>
                  <span className="px-2 py-1.5 rounded bg-white/5 border border-white/10 text-[10px] text-neutral-300 font-medium">
                    2+ Bed
                  </span>
                  <span className="px-2 py-1.5 rounded bg-white/5 border border-white/10 text-[10px] text-neutral-300 font-medium">
                    Parking
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-neutral-800 h-1.5 rounded-full overflow-hidden" role="progressbar" aria-valuenow={65} aria-valuemin={0} aria-valuemax={100} aria-label="Match percentage">
                    <div className="bg-emerald-500 h-full w-[65%] rounded-full" aria-hidden="true"></div>
                  </div>
                  <span className="text-[9px] font-mono text-neutral-500">
                    24 Matches
                  </span>
                </div>
              </div>

              {/* Recently Sold */}
              <div className="space-y-4">
                <div className="flex items-center justify-between px-1">
                  <h3 className="text-[10px] uppercase font-mono tracking-widest text-neutral-600">
                    Recently Sold
                  </h3>
                  <Link href="#" className="text-[10px] text-neutral-500 hover:text-white transition-colors">
                    View Map
                  </Link>
                </div>
                <div className="space-y-2" role="list" aria-label="Recently sold properties">
                  {recentlySold.map((property) => (
                    <Link
                      key={property.id}
                      href="#"
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded bg-neutral-800 overflow-hidden border border-white/5 relative">
                        <Image
                          src={property.image}
                          alt={`Sold property: ${property.address}`}
                          width={40}
                          height={40}
                          className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-baseline mb-0.5">
                          <span className="text-[11px] text-white font-medium truncate">
                            {property.address}
                          </span>
                          <span className="text-[10px] font-mono text-emerald-500">
                            {property.price}
                          </span>
                        </div>
                        <div className="flex justify-between items-center text-[10px] text-neutral-500">
                          <span className="truncate">{property.suburb}</span>
                          <span className="font-mono text-[9px]">{property.daysAgo}d ago</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Feed Stream */}
          <main className={`col-span-12 lg:col-span-6 space-y-6 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'} transition-all duration-700 delay-100`} aria-labelledby="feed-items-heading">
            <h3 id="feed-items-heading" className="sr-only">Property Listings</h3>

            {/* Insight Card */}
            <article className="p-4 rounded-xl border border-indigo-500/20 bg-indigo-500/5 flex items-start gap-4" role="alert" aria-labelledby="insight-title">
              <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400 shrink-0">
                <TrendingUp className="w-4 h-4" aria-hidden="true" />
              </div>
              <div>
                <h3 id="insight-title" className="text-xs font-medium text-white mb-1">
                  New Listings in Redfern
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-2">
                  2 properties matching your "Terrace" criteria were listed in
                  Redfern today under $1.2M.
                </p>
                <Link href="#" className="text-[10px] font-medium text-indigo-400 hover:text-indigo-300 flex items-center gap-1">
                  View Listings
                  <ArrowRight className="w-3 h-3" aria-hidden="true" />
                </Link>
              </div>
            </article>

            {/* Feed Items */}
            {propertyListings.map((listing) => (
              <article
                key={listing.id}
                className="group rounded-2xl bg-[#0A0A0A] border border-white/5 overflow-hidden hover:border-white/15 hover:-translate-y-0.5 transition-all duration-300"
                role="listitem"
                aria-label={`Property: ${listing.title}, ${listing.suburb}`}
              >
                {/* Image Area */}
                <div className="relative h-64 w-full overflow-hidden cursor-pointer">
                  <Image
                    src={listing.image}
                    alt={listing.title}
                    width={400}
                    height={256}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2" aria-label="Property badges">
                    {listing.badges.map((badge, index) => (
                      <div
                        key={index}
                        className={`${
                          badge === 'Strong Match'
                            ? 'bg-emerald-500/90 backdrop-blur-md text-black'
                            : badge === 'Off Market'
                            ? 'bg-purple-500/90 backdrop-blur-md text-white'
                            : 'bg-black/60 backdrop-blur-md text-white'
                        } border border-white/10 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider flex items-center gap-1`}
                      >
                        {badge === 'Strong Match' && <Star className="w-3 h-3 fill-black" aria-hidden="true" />}
                        {badge === 'Off Market' && <EyeOff className="w-3 h-3" aria-hidden="true" />}
                        {badge}
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors" aria-label={`Save ${listing.title}`}>
                      <Star className="w-4 h-4" />
                    </button>
                    <Link href="#" className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors" aria-label={`View ${listing.title}`}>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Bottom Gradient */}
                  <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#0A0A0A] to-transparent" aria-hidden="true"></div>
                </div>

                {/* Content */}
                <div className="p-5 relative">
                  {/* Match Score Floating */}
                  <div className="absolute -top-6 right-5 w-12 h-12" style={getMatchRingStyle(listing.matchScore) as React.CSSProperties} aria-label={`Match score: ${listing.matchScore}%`}>
                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pt-0.5">
                      <span className={`text-[10px] font-bold ${
                        listing.matchScore >= 90 ? 'text-emerald-500' : listing.matchScore >= 75 ? 'text-yellow-500' : 'text-red-500'
                      }`}>
                        {listing.matchScore}%
                      </span>
                    </div>
                    <div className="absolute inset-0 rounded-full" style={{ background: '#0A0A0A', margin: '2px' }} aria-hidden="true"></div>
                  </div>

                  <div className="flex justify-between items-start mb-2 -mt-4">
                    <div>
                      <h2 className="text-base font-medium text-white mb-0.5 group-hover:text-emerald-400 transition-colors cursor-pointer">
                        {listing.title}
                      </h2>
                      <p className="text-xs text-neutral-500">{listing.suburb}</p>
                    </div>
                  </div>

                  {/* Key Stats */}
                  <div className="flex items-center gap-4 py-3 border-b border-white/5 mb-3" role="list" aria-label="Property features">
                    <div className="flex items-center gap-1.5 text-neutral-300">
                      <Star className="w-4 h-4 text-neutral-500" aria-hidden="true" />
                      <span className="text-xs font-mono">{listing.beds}</span>
                      <span className="sr-only">bedrooms</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-neutral-300">
                      <Star className="w-4 h-4 text-neutral-500" aria-hidden="true" />
                      <span className="text-xs font-mono">{listing.baths}</span>
                      <span className="sr-only">bathrooms</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-neutral-300">
                      {listing.parking > 0 ? (
                        <>
                          <Star className="w-4 h-4 text-neutral-500" aria-hidden="true" />
                          <span className="text-xs font-mono">{listing.parking}</span>
                          <span className="sr-only">parking spaces</span>
                        </>
                      ) : (
                        <>
                          <AlertCircle className="w-4 h-4 text-red-500/50" aria-hidden="true" />
                          <span className="text-xs font-mono text-neutral-500">0</span>
                          <span className="sr-only">no parking</span>
                        </>
                      )}
                    </div>
                    <div className="w-px h-4 bg-white/10 mx-1" aria-hidden="true"></div>
                    <div className="text-xs font-mono text-emerald-400">
                      {listing.price}
                    </div>
                  </div>

                  {/* Match Reasons */}
                  <div className="flex flex-wrap gap-2 mb-4" role="list" aria-label="Match reasons">
                    {listing.matchReasons.map((reason, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-neutral-400 flex items-center gap-1.5 font-mono"
                      >
                        {reason.type === 'check' ? <Check className="w-3 h-3 text-emerald-500" aria-hidden="true" /> : <AlertCircle className="w-3 h-3 text-red-500" aria-hidden="true" />}
                        {reason.text}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-1">
                    <button className="flex-1 bg-white text-black px-4 py-2 rounded-lg text-xs font-semibold hover:bg-neutral-200 transition-colors">
                      Request Contract
                    </button>
                    <button className="px-4 py-2 rounded-lg border border-white/10 text-white text-xs font-medium hover:bg-white/5 transition-colors">
                      Inspect
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </main>

          {/* Right Sidebar: Schedule & Tools */}
          <aside className={`col-span-12 lg:col-span-3 space-y-6 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'} transition-all duration-700 delay-200`} aria-label="Schedule and tools">
            <div className="sticky top-32">
              {/* Schedule Widget */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xs font-medium text-white uppercase tracking-wider font-mono">
                  Your Schedule
                </h3>
                <button className="text-neutral-500 hover:text-white transition-colors" aria-label="Add to schedule">
                  <CalendarPlus className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-3" role="list" aria-label="Upcoming events">
                {scheduleEvents.map((event) => (
                  <div
                    key={event.id}
                    className="group relative p-3 rounded-lg bg-[#0A0A0A] border border-white/5 hover:border-white/20 transition-all cursor-pointer"
                    role="listitem"
                  >
                    <div
                      className={`absolute left-0 top-3 bottom-3 w-0.5 rounded-r ${
                        event.type === 'inspection' ? 'bg-emerald-500' : 'bg-orange-500'
                      }`}
                      aria-hidden="true"
                    ></div>
                    <div className="pl-3">
                      <div className="flex justify-between items-start mb-1">
                        <span
                          className={`text-[10px] font-bold px-1.5 py-0.5 rounded border ${
                            event.type === 'inspection'
                              ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20'
                              : 'bg-orange-500/10 text-orange-500 border-orange-500/20'
                          }`}
                        >
                          {event.date}
                        </span>
                        <span className="text-[10px] font-mono text-neutral-400">
                          {event.time}
                        </span>
                      </div>
                      <h4 className="text-xs font-medium text-white mb-0.5 group-hover:underline decoration-white/20 underline-offset-2">
                        {event.title}
                      </h4>
                      <p className="text-[11px] text-neutral-500 truncate">
                        {event.address}
                      </p>
                      {event.tags && (
                        <div className="mt-2 flex items-center gap-2">
                          {event.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="text-[9px] text-neutral-400 bg-white/5 px-1.5 py-0.5 rounded flex items-center gap-1"
                            >
                              <FileText className="w-2.5 h-2.5" aria-hidden="true" />
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Finance Status */}
              <div className="mt-8 pt-6 border-t border-white/5" role="region" aria-labelledby="finance-status-heading">
                <h3 id="finance-status-heading" className="text-xs font-medium text-white uppercase tracking-wider font-mono mb-3">
                  Finance Status
                </h3>
                <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-950/20 to-transparent border border-emerald-500/20 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity">
                    <RefreshCw className="w-3 h-3 text-emerald-400" />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[9px] font-bold uppercase tracking-wide border border-emerald-500/20">
                        Pre-Approved
                      </span>
                    </div>
                    <div className="flex items-baseline gap-1 mb-3">
                      <span className="text-xs text-neutral-400">$</span>
                      <span className="text-xl font-semibold text-white tracking-tight">
                        1,350,000
                      </span>
                    </div>
                    <div className="w-full bg-neutral-800 h-1 rounded-full overflow-hidden mb-2" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} aria-label="Approval progress">
                      <div className="bg-emerald-500 h-full w-[85%]" aria-hidden="true"></div>
                    </div>
                    <div className="flex justify-between items-center text-[10px] font-mono">
                      <span className="text-neutral-400">CBA Variable</span>
                      <span className="text-neutral-500">Exp: 14 Dec</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Tools */}
              <div className="mt-8 pt-6 border-t border-white/5" aria-label="Quick tools">
                <h3 className="text-xs font-medium text-white uppercase tracking-wider font-mono mb-3">
                  Quick Tools
                </h3>
                <div className="grid grid-cols-2 gap-2" role="list">
                  <Link href="#" className="p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all group flex flex-col gap-2">
                    <FileText className="w-4 h-4 text-neutral-400 group-hover:text-emerald-400 transition-colors" />
                    <span className="text-[10px] text-neutral-300 font-medium">
                      Strata Check
                    </span>
                  </Link>
                  <Link href="#" className="p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all group flex flex-col gap-2">
                    <Map className="w-4 h-4 text-neutral-400 group-hover:text-emerald-400 transition-colors" />
                    <span className="text-[10px] text-neutral-300 font-medium">
                      Area Stats
                    </span>
                  </Link>
                  <Link href="#" className="p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all group flex flex-col gap-2">
                    <History className="w-4 h-4 text-neutral-400 group-hover:text-emerald-400 transition-colors" />
                    <span className="text-[10px] text-neutral-300 font-medium">
                      Past Sales
                    </span>
                  </Link>
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
