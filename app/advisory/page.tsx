"use client"

/**
 * Advisory Network Page
 *
 * @description
 * A modern React page showcasing the HAUS elite advisory network of real estate agents.
 * Features agent cards with search/filter functionality, responsive design, and animations.
 *
 * @example
 * ```tsx
 * // Access at /advisory route
 * <AdvisoryPage />
 * ```
 */

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, Grid, Map, ChevronLeft, ChevronRight, Crown, TrendingUp, Award, BarChart2, Users, Globe, Zap } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Agent, FilterState, ViewMode } from "@/types/advisory"

// Mock data for agents
const AGENTS: Agent[] = [
  {
    id: "1",
    name: "Elias Thorne",
    title: "Senior Partner",
    location: "New York",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
    volume: "$142M",
    avgDeal: "$4.2M",
    specialties: ["Penthouses", "Off-market"],
    badges: [{ icon: "crown", text: "Top 1%", color: "amber" }]
  },
  {
    id: "2",
    name: "Sarah Chen",
    title: "Director",
    location: "London",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    volume: "£85M",
    avgDeal: "£2.8M",
    specialties: ["Heritage", "Legal"],
    badges: [{ icon: "trending-up", text: "Trending", color: "emerald" }]
  },
  {
    id: "3",
    name: "Marcus Vance",
    title: "Associate",
    location: "Sydney",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
    volume: "$64M",
    avgDeal: "$3.1M",
    specialties: ["Waterfront", "Dev"],
    isOnline: true
  },
  {
    id: "4",
    name: "Elena Ross",
    title: "Partner",
    location: "Dubai",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
    volume: "AED 420M",
    avgDeal: "AED 18M",
    specialties: ["Crypto", "Visa"]
  },
  {
    id: "5",
    name: "David Kim",
    title: "Analyst",
    location: "Singapore",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    volume: "S$ 45M",
    avgDeal: "S$ 5.2M",
    specialties: ["Commercial", "Tech"],
    badges: [{ icon: "award", text: "New", color: "indigo" }]
  },
  {
    id: "6",
    name: "Victoria Hales",
    title: "Senior Partner",
    location: "Los Angeles",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=800&auto=format&fit=crop",
    volume: "$210M",
    avgDeal: "$8.5M",
    specialties: ["Celebrity", "Hills"]
  },
  {
    id: "7",
    name: "James Sterling",
    title: "Director",
    location: "Miami",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
    volume: "$115M",
    avgDeal: "$4.9M",
    specialties: ["Island", "Yacht"]
  },
  {
    id: "8",
    name: "Sofia Bianchi",
    title: "Partner",
    location: "Milan",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
    volume: "€72M",
    avgDeal: "€3.4M",
    specialties: ["Historic", "Rural"]
  }
]

const BADGE_ICONS: Record<string, React.ElementType> = {
  crown: Crown,
  "trending-up": TrendingUp,
  award: Award
}

export default function AdvisoryPage() {
  const [filters, setFilters] = useState<FilterState>({
    search: "",
    location: "",
    specialty: "",
    language: ""
  })
  const [viewMode, setViewMode] = useState<ViewMode>("grid")
  const [currentPage, setCurrentPage] = useState(1)

  const handleSearchChange = (value: string) => {
    setFilters(prev => ({ ...prev, search: value }))
  }

  const handleLocationChange = (value: string) => {
    setFilters(prev => ({ ...prev, location: value }))
  }

  const handleSpecialtyChange = (value: string) => {
    setFilters(prev => ({ ...prev, specialty: value }))
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

      {/* Navigation */}
      <nav className="fixed top-0 w-full px-6 py-4 md:px-12 md:py-6 flex justify-between items-center z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <Link href="/" className="font-display text-lg font-medium tracking-tight flex items-center gap-2 group">
          <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-bold tracking-tighter group-hover:scale-90 transition-transform duration-300">
            H
          </div>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="#" className="text-xs font-mono text-white/60 hover:text-white transition-colors">
            PROPERTIES
          </Link>
          <Link href="#" className="text-xs font-mono text-white border-b border-white transition-colors">
            AGENTS
          </Link>
          <Link href="#" className="text-xs font-mono text-white/60 hover:text-white transition-colors">
            MARKET DATA
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-xs font-mono text-white border border-white/20 rounded-md px-4 py-2 hover:bg-white hover:text-black transition-all uppercase">
            Connect Wallet
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 pt-32 pb-24">

        {/* Header */}
        <header className="px-6 md:px-12 max-w-[1600px] mx-auto mb-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="px-2 py-0.5 rounded border border-white/20 bg-white/5 text-[10px] uppercase tracking-widest text-indigo-300 font-medium">
                  Global Network
                </span>
                <span className="text-[10px] text-neutral-500 font-mono">Ver. 2.4</span>
              </div>
              <h1 className="font-display text-5xl md:text-7xl font-medium tracking-tighter text-white leading-[0.9]">
                <span className="block">ELITE</span>
                <span className="block text-neutral-500">ADVISORY</span>
              </h1>
            </div>
            <div className="max-w-md">
              <p className="text-neutral-400 font-light text-sm md:text-base leading-relaxed">
                Our agents aren&apos;t just salespeople; they are data analysts, wealth architects, and market makers.
                Top 1% of performers by volume, verified by blockchain.
              </p>
            </div>
          </div>

          {/* Filters Bar */}
          <div className="sticky top-24 z-40 bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl p-2 flex flex-col md:flex-row gap-2 shadow-2xl">
            {/* Search */}
            <div className="flex-1 bg-[#0A0A0A] border border-white/5 rounded-lg flex items-center px-4 h-12 focus-within:border-white/20 transition-colors">
              <Search className="w-4 h-4 text-neutral-500 mr-3" />
              <input
                type="text"
                placeholder="Search by name, region, or specialty..."
                value={filters.search}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="bg-transparent border-none text-white text-xs placeholder-neutral-600 focus:outline-none w-full h-full font-mono"
              />
            </div>

            {/* Dropdowns */}
            <div className="grid grid-cols-2 md:flex gap-2">
              <button className="px-4 h-12 bg-[#0A0A0A] border border-white/5 rounded-lg flex items-center justify-between gap-3 text-xs text-white hover:bg-white/5 transition-colors min-w-[140px]">
                <span className="text-neutral-400">Location</span>
                <ChevronRight className="w-3 h-3 text-neutral-600" />
              </button>
              <button className="px-4 h-12 bg-[#0A0A0A] border border-white/5 rounded-lg flex items-center justify-between gap-3 text-xs text-white hover:bg-white/5 transition-colors min-w-[140px]">
                <span className="text-neutral-400">Specialty</span>
                <ChevronRight className="w-3 h-3 text-neutral-600" />
              </button>
              <button className="px-4 h-12 bg-[#0A0A0A] border border-white/5 rounded-lg flex items-center justify-between gap-3 text-xs text-white hover:bg-white/5 transition-colors min-w-[140px]">
                <span className="text-neutral-400">Language</span>
                <ChevronRight className="w-3 h-3 text-neutral-600" />
              </button>
            </div>

            {/* View Toggle */}
            <div className="flex bg-[#0A0A0A] p-1 rounded-lg border border-white/5">
              <button
                onClick={() => setViewMode("grid")}
                className={cn(
                  "w-10 h-10 rounded flex items-center justify-center transition-colors",
                  viewMode === "grid" ? "bg-white/10 text-white" : "text-neutral-500 hover:text-white"
                )}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("map")}
                className={cn(
                  "w-10 h-10 rounded flex items-center justify-center transition-colors",
                  viewMode === "map" ? "bg-white/10 text-white" : "text-neutral-500 hover:text-white"
                )}
              >
                <Map className="w-4 h-4" />
              </button>
            </div>
          </div>
        </header>

        {/* Agents Grid */}
        <section className="px-6 md:px-12 max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {AGENTS.map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-24 gap-2">
            <button className="w-10 h-10 rounded border border-white/10 flex items-center justify-center text-neutral-500 hover:text-white hover:bg-white/5 transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-10 h-10 rounded bg-white text-black text-xs font-mono font-medium">
              1
            </button>
            <button className="w-10 h-10 rounded border border-white/10 flex items-center justify-center text-neutral-400 text-xs font-mono hover:bg-white/5 hover:text-white transition-colors">
              2
            </button>
            <button className="w-10 h-10 rounded border border-white/10 flex items-center justify-center text-neutral-400 text-xs font-mono hover:bg-white/5 hover:text-white transition-colors">
              3
            </button>
            <span className="w-10 h-10 flex items-center justify-center text-neutral-600">...</span>
            <button className="w-10 h-10 rounded border border-white/10 flex items-center justify-center text-neutral-500 hover:text-white hover:bg-white/5 transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* Join CTA */}
        <section className="mt-32 border-t border-white/10 bg-[#0A0A0A]">
          <div className="px-6 md:px-12 max-w-[1600px] mx-auto py-24 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
                Are you a top 1%
                <br />
                performer?
              </h2>
              <p className="text-neutral-400 text-sm leading-relaxed max-w-md mb-8">
                Join the only network that combines institutional-grade AI analytics with global deal flow.
                We provide the leads, the tech, and the infrastructure. You close the deal.
              </p>
              <div className="flex gap-4">
                <button className="px-6 py-3 rounded bg-indigo-600 text-white text-xs font-bold uppercase tracking-widest hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-500/20">
                  Apply for Partnership
                </button>
                <button className="px-6 py-3 rounded border border-white/10 text-white text-xs font-bold uppercase tracking-widest hover:bg-white/5 transition-colors">
                  Download Brochure
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-transparent blur-3xl" />
              <div className="grid grid-cols-2 gap-4 relative z-10">
                <StatCard icon={BarChart2} value="3x" label="Deal Velocity" />
                <StatCard icon={Users} value="24k+" label="Qualified Leads" />
                <StatCard icon={Globe} value="50+" label="Global Markets" />
                <StatCard icon={Zap} value="0%" label="Admin Work" />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-24 px-6 md:px-12">
        <div className="max-w-[1600px] mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
          <div className="col-span-2 lg:col-span-2">
            <div className="font-display text-2xl font-medium tracking-tight text-white mb-6">
              HAUS
            </div>
            <p className="text-xs text-neutral-500 max-w-xs leading-relaxed">
              The operating system for modern real estate.
              Combining human expertise with artificial intelligence to power the next generation of ownership.
            </p>
          </div>
          <FooterColumn title="Network" links={["Agents", "Agencies", "Partners"]} />
          <FooterColumn title="Product" links={["Intelligence", "Valuation", "API"]} />
          <FooterColumn title="Social" links={["Twitter", "LinkedIn", "Instagram"]} />
        </div>
        <div className="max-w-[1600px] mx-auto mt-24 pt-8 border-t border-white/5 flex justify-between items-center">
          <div className="text-[10px] text-neutral-600 uppercase tracking-widest">© 2025 HAUS Group</div>
          <div className="text-[10px] text-neutral-600 uppercase tracking-widest">Privacy & Terms</div>
        </div>
      </footer>
    </div>
  )
}

// Agent Card Component
function AgentCard({ agent }: { agent: Agent }) {
  return (
    <div className="group relative bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:border-white/20">
      <div className="aspect-[3/4] overflow-hidden relative">
        <div className="relative w-full h-full">
          <Image
            src={agent.image}
            alt={agent.name}
            fill
            className="object-cover transition-transform duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </div>

        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          {agent.badges?.map((badge, idx) => {
            const Icon = BADGE_ICONS[badge.icon]
            return (
              <div key={idx} className="bg-black/60 backdrop-blur border border-white/10 px-2 py-1 rounded text-[10px] uppercase tracking-wider text-white flex items-center gap-1">
                <Icon className={`w-3 h-3 text-${badge.color}-400`} />
                {badge.text}
              </div>
            )
          })}
        </div>

        {/* Online Indicator */}
        {agent.isOnline && (
          <div className="absolute top-4 right-4 flex gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
          </div>
        )}

        {/* Agent Info Overlay */}
        <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/80 to-transparent pt-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="font-display text-2xl text-white font-medium">{agent.name}</h3>
          <p className="text-xs text-neutral-400 font-mono mt-1">{agent.title} • {agent.location}</p>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 border-t border-white/10 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1">Vol (YTD)</div>
            <div className="text-sm font-medium text-white">{agent.volume}</div>
          </div>
          <div>
            <div className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1">Avg Deal</div>
            <div className="text-sm font-medium text-white">{agent.avgDeal}</div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 pt-2">
          {agent.specialties.map((specialty, idx) => (
            <span key={idx} className="px-2 py-1 bg-white/5 border border-white/5 rounded text-[10px] text-neutral-400">
              {specialty}
            </span>
          ))}
        </div>
        <button className="w-full py-3 mt-2 rounded border border-white/20 text-xs font-bold uppercase tracking-widest text-white hover:bg-white hover:text-black transition-colors group-hover:bg-white/10">
          Contact
        </button>
      </div>
    </div>
  )
}

// Stat Card Component
function StatCard({ icon: Icon, value, label }: { icon: React.ElementType; value: string; label: string }) {
  return (
    <div className="bg-black border border-white/10 p-6 rounded-xl">
      <Icon className="w-6 h-6 text-indigo-400 mb-4" />
      <div className="text-2xl font-medium text-white mb-1">{value}</div>
      <div className="text-xs text-neutral-500">{label}</div>
    </div>
  )
}

// Footer Column Component
function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div className="flex flex-col gap-4">
      <span className="text-[10px] uppercase tracking-widest text-white font-semibold">{title}</span>
      {links.map((link, idx) => (
        <Link key={idx} href="#" className="text-xs text-neutral-400 hover:text-white transition-colors">
          {link}
        </Link>
      ))}
    </div>
  )
}
