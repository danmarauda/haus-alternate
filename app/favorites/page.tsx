"use client"

/**
 * Favorites Page
 *
 * @description
 * Saved properties management with grid/list views, price tracking,
 * alerts, and property filtering.
 *
 * @features
 * - Grid and list view toggle
 * - Property cards with images and stats
 * - Price change tracking and alerts
 * - Status badges (Active, Under Offer, Auction, Sold)
 * - Match scores for property relevance
 * - Save/remove functionality
 * - Alert toggles for price updates
 */

import { useState } from "react"
import Link from "next/link"
import {
  Sparkles, Heart, Trash2, MapPin, Bed, Bath, Square, ArrowLeft,
  Grid, List, SlidersHorizontal, Bell, BellOff, Share2, ExternalLink,
  TrendingUp, TrendingDown, Calendar,
} from "lucide-react"

const savedProperties = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800",
    title: "Oceanview Modern Villa",
    location: "Malibu, CA",
    price: "$2,800,000",
    priceChange: -50000,
    beds: 4,
    baths: 3,
    sqft: "2,800",
    match: 98,
    savedDate: "Oct 20, 2025",
    alerts: true,
    status: "Active",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800",
    title: "Skyline Penthouse",
    location: "Manhattan, NY",
    price: "$5,200,000",
    priceChange: 0,
    beds: 3,
    baths: 2,
    sqft: "1,950",
    match: 94,
    savedDate: "Oct 18, 2025",
    alerts: true,
    status: "Active",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800",
    title: "Contemporary Townhouse",
    location: "Austin, TX",
    price: "$1,150,000",
    priceChange: 25000,
    beds: 3,
    baths: 3,
    sqft: "1,900",
    match: 91,
    savedDate: "Oct 15, 2025",
    alerts: false,
    status: "Under Offer",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800",
    title: "Minimalist Estate",
    location: "Beverly Hills, CA",
    price: "$8,500,000",
    priceChange: 0,
    beds: 6,
    baths: 7,
    sqft: "9,200",
    match: 92,
    savedDate: "Oct 12, 2025",
    alerts: true,
    status: "Active",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800",
    title: "The Glass House",
    location: "Montecito, CA",
    price: "$14,500,000",
    priceChange: -200000,
    beds: 5,
    baths: 6,
    sqft: "8,400",
    match: 89,
    savedDate: "Oct 10, 2025",
    alerts: true,
    status: "Auction",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfe1?q=80&w=800",
    title: "Urban Loft",
    location: "Brooklyn, NY",
    price: "$1,850,000",
    priceChange: 0,
    beds: 2,
    baths: 2,
    sqft: "1,400",
    match: 88,
    savedDate: "Oct 8, 2025",
    alerts: false,
    status: "Sold",
  },
]

export default function FavoritesPage() {
  const [view, setView] = useState<"grid" | "list">("grid")
  const [properties, setProperties] = useState(savedProperties)

  const removeProperty = (id: number) => {
    setProperties(properties.filter((p) => p.id !== id))
  }

  const toggleAlerts = (id: number) => {
    setProperties(properties.map((p) => p.id === id ? { ...p, alerts: !p.alerts } : p))
  }

  const activeCount = properties.filter((p) => p.status === "Active").length
  const totalValue = properties.reduce((sum, p) => sum + parseInt(p.price.replace(/[$,]/g, "")), 0)

  return (
    <div className="landing-page min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 backdrop-blur-xl border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="p-2 rounded-lg hover:bg-white/5 text-neutral-400 hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <Link href="/" className="inline-flex items-center gap-2">
              <div className="h-6 w-6 rounded-md bg-white/10 border border-white/10 flex items-center justify-center">
                <Sparkles className="h-3.5 w-3.5 text-white/80" />
              </div>
              <span className="text-base font-semibold tracking-tight">HAUS</span>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex bg-white/5 p-1 rounded-lg border border-white/5">
              <button
                onClick={() => setView("grid")}
                className={`p-2 rounded ${view === "grid" ? "bg-white/10 text-white" : "text-neutral-500 hover:text-white"} transition-colors`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setView("list")}
                className={`p-2 rounded ${view === "list" ? "bg-white/10 text-white" : "text-neutral-500 hover:text-white"} transition-colors`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
            <button className="p-2 rounded-lg hover:bg-white/5 text-neutral-400 hover:text-white transition-colors">
              <SlidersHorizontal className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      <main className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Heart className="w-6 h-6 text-rose-400" />
            <h1 className="text-3xl font-display font-medium tracking-tight text-white">Saved Properties</h1>
          </div>
          <p className="text-neutral-400 text-sm">Track price changes and get alerts on your favorite listings.</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="p-4 rounded-xl border border-white/10 bg-white/5">
            <div className="text-2xl font-medium text-white">{properties.length}</div>
            <div className="text-xs text-neutral-500">Total Saved</div>
          </div>
          <div className="p-4 rounded-xl border border-white/10 bg-white/5">
            <div className="text-2xl font-medium text-emerald-400">{activeCount}</div>
            <div className="text-xs text-neutral-500">Active Listings</div>
          </div>
          <div className="p-4 rounded-xl border border-white/10 bg-white/5">
            <div className="text-2xl font-medium text-white">${(totalValue / 1000000).toFixed(1)}M</div>
            <div className="text-xs text-neutral-500">Total Value</div>
          </div>
          <div className="p-4 rounded-xl border border-white/10 bg-white/5">
            <div className="text-2xl font-medium text-amber-400">{properties.filter((p) => p.alerts).length}</div>
            <div className="text-xs text-neutral-500">With Alerts</div>
          </div>
        </div>

        {/* Properties Grid */}
        {view === "grid" ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property) => (
              <div key={property.id} className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:border-white/20 transition-colors">
                <div className="relative aspect-[4/3]">
                  <img src={property.image} alt={property.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Status Badge */}
                  <div className={`absolute top-3 left-3 px-2 py-1 rounded text-[10px] font-medium uppercase tracking-wider ${
                    property.status === "Active" ? "bg-emerald-500/90 text-white" :
                    property.status === "Under Offer" ? "bg-amber-500/90 text-black" :
                    property.status === "Auction" ? "bg-purple-500/90 text-white" :
                    "bg-neutral-500/90 text-white"
                  }`}>
                    {property.status}
                  </div>

                  {/* Match Score */}
                  <div className="absolute top-3 right-3 px-2 py-1 rounded bg-indigo-500/90 text-[10px] font-medium text-white flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5" />{property.match}%
                  </div>

                  {/* Price Change */}
                  {property.priceChange !== 0 && (
                    <div className={`absolute bottom-3 left-3 px-2 py-1 rounded backdrop-blur-md text-[10px] font-medium flex items-center gap-1 ${
                      property.priceChange < 0 ? "bg-emerald-500/20 text-emerald-400" : "bg-red-500/20 text-red-400"
                    }`}>
                      {property.priceChange < 0 ? <TrendingDown className="w-3 h-3" /> : <TrendingUp className="w-3 h-3" />}
                      {property.priceChange < 0 ? "-" : "+"}${Math.abs(property.priceChange).toLocaleString()}
                    </div>
                  )}

                  {/* Actions */}
                  <div className="absolute bottom-3 right-3 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => toggleAlerts(property.id)}
                      className={`w-8 h-8 rounded-lg backdrop-blur-md flex items-center justify-center transition-colors ${
                        property.alerts ? "bg-amber-500/20 text-amber-400" : "bg-white/10 text-neutral-400 hover:text-white"
                      }`}
                    >
                      {property.alerts ? <Bell className="w-4 h-4" /> : <BellOff className="w-4 h-4" />}
                    </button>
                    <button className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center text-neutral-400 hover:text-white transition-colors">
                      <Share2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => removeProperty(property.id)}
                      className="w-8 h-8 rounded-lg bg-red-500/20 backdrop-blur-md flex items-center justify-center text-red-400 hover:bg-red-500/30 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <Link href={`/listing/${property.id}`} className="block p-4">
                  <h3 className="font-medium text-white group-hover:text-indigo-400 transition-colors">{property.title}</h3>
                  <div className="flex items-center gap-1 text-xs text-neutral-500 mt-1">
                    <MapPin className="w-3 h-3" />{property.location}
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-lg font-medium text-white">{property.price}</span>
                    <div className="flex gap-3 text-xs text-neutral-500">
                      <span className="flex items-center gap-1"><Bed className="w-3 h-3" />{property.beds}</span>
                      <span className="flex items-center gap-1"><Bath className="w-3 h-3" />{property.baths}</span>
                      <span className="flex items-center gap-1"><Square className="w-3 h-3" />{property.sqft}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-neutral-600 mt-3">
                    <Calendar className="w-3 h-3" />Saved {property.savedDate}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          /* List View */
          <div className="space-y-4">
            {properties.map((property) => (
              <div key={property.id} className="flex gap-4 p-4 rounded-xl border border-white/10 bg-white/5 hover:border-white/20 transition-colors group">
                <div className="w-32 h-24 rounded-lg overflow-hidden shrink-0">
                  <img src={property.image} alt={property.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <Link href={`/listing/${property.id}`} className="font-medium text-white hover:text-indigo-400 transition-colors">{property.title}</Link>
                      <div className="flex items-center gap-1 text-xs text-neutral-500 mt-1">
                        <MapPin className="w-3 h-3" />{property.location}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-white">{property.price}</div>
                      {property.priceChange !== 0 && (
                        <div className={`text-xs ${property.priceChange < 0 ? "text-emerald-400" : "text-red-400"}`}>
                          {property.priceChange < 0 ? "-" : "+"}${Math.abs(property.priceChange).toLocaleString()}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mt-3">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-medium ${
                      property.status === "Active" ? "bg-emerald-500/20 text-emerald-400" :
                      property.status === "Under Offer" ? "bg-amber-500/20 text-amber-400" :
                      property.status === "Auction" ? "bg-purple-500/20 text-purple-400" :
                      "bg-neutral-500/20 text-neutral-400"
                    }`}>{property.status}</span>
                    <span className="text-xs text-neutral-500">{property.beds} bed • {property.baths} bath • {property.sqft} sqft</span>
                    <span className="text-xs text-neutral-600 flex items-center gap-1"><Calendar className="w-3 h-3" />Saved {property.savedDate}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => toggleAlerts(property.id)} className={`p-2 rounded-lg transition-colors ${property.alerts ? "text-amber-400" : "text-neutral-500 hover:text-white"}`}>
                    {property.alerts ? <Bell className="w-4 h-4" /> : <BellOff className="w-4 h-4" />}
                  </button>
                  <button className="p-2 rounded-lg text-neutral-500 hover:text-white transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                  <button onClick={() => removeProperty(property.id)} className="p-2 rounded-lg text-red-400 hover:bg-red-500/20 transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {properties.length === 0 && (
          <div className="text-center py-20">
            <Heart className="w-12 h-12 text-neutral-700 mx-auto mb-4" />
            <h2 className="text-xl font-medium text-white mb-2">No saved properties</h2>
            <p className="text-neutral-500 text-sm mb-6">Start exploring and save properties you like.</p>
            <Link href="/search" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black text-sm font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors">
              Browse Properties
            </Link>
          </div>
        )}
      </main>
    </div>
  )
}
