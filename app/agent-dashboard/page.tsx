"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Image from "next/image"
import {
  LayoutDashboard, Megaphone, Users, CheckCircle2, Trophy,
  MessageCircle, Phone, Bell, Edit2, Calendar, Clock,
  FileBarChart, MoreHorizontal, Wallet, UserPlus, Home,
  StickyNote, Plus, Search, FilePlus, ClipboardList, Database,
  AlertCircle, Activity,
} from "lucide-react"
import { Suspense } from "react"
import { Shell } from "@/components/shell"
import { ErrorBoundary } from "@/components/error-boundary"
import { PageLoader } from "@/components/page-loader"


interface Lead {
  id: string
  initials: string
  name: string
  status: "WARM" | "HOT" | "COLD"
  type: string
  time: string
}

interface Badge {
  text: string
  variant: "default" | "auction" | "active"
}

interface CampaignStats {
  enquiries: number
  groups: number
  contracts: number
}

interface Campaign {
  id: string
  title: string
  suburb: string
  vendor: string
  image: string
  badges: Badge[]
  healthScore: number
  stats: CampaignStats
  updates: string[]
}

interface ScheduleEvent {
  id: string
  type: "OPEN_HOME" | "APPRAISAL" | "MEETING" | "CALL"
  time: string
  title: string
  note: string
  color: string
}

interface Communication {
  id: string
  type: "call" | "enquiry" | "system"
  title: string
  time: string
  color: string
}

const hotLeads: Lead[] = [
  { id: "1", initials: "JD", name: "John Doe", status: "WARM", type: "Vendor (Redfern)", time: "2h ago" },
  { id: "2", initials: "SM", name: "Sarah Miller", status: "HOT", type: "Buyer ($2M+)", time: "5m ago" },
] as const

const campaigns: Campaign[] = [
  {
    id: "1",
    title: "128 Crown Street",
    suburb: "Surrey Hills",
    vendor: "Johnson",
    image: "https://images.unsplash.com/photo-1600596542815-2a4d9f6facb8?q=80&w=1000&auto=format&fit=crop",
    badges: [
      { text: "Auction Sat 10am", variant: "auction" },
      { text: "Active", variant: "active" },
    ],
    healthScore: 85,
    stats: { enquiries: 42, groups: 18, contracts: 5 },
    updates: ["Vendor Report Sent", "REA Upload Synced"],
  },
  {
    id: "2",
    title: "42 Cooper Street",
    suburb: "Redfern",
    vendor: "Davis",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=400&auto=format&fit=crop",
    badges: [
      { text: "APPRAISAL", variant: "default" },
    ],
    healthScore: 72,
    stats: { enquiries: 28, groups: 12, contracts: 2 },
    updates: [],
  },
] as const

const scheduleEvents: ScheduleEvent[] = [
  {
    id: "1",
    type: "OPEN_HOME",
    time: "10:00 AM",
    title: "128 Crown St, Surry Hills",
    note: "Collect keys from office",
    color: "indigo",
  },
  {
    id: "2",
    type: "APPRAISAL",
    time: "12:30 PM",
    title: "55 George St, Redfern",
    note: "Owner: Mrs. Davis (Referral)",
    color: "purple",
  },
] as const

const communications: Communication[] = [
  { id: "1", type: "call", title: "Missed Call - Solicitor re: 128 Crown St", time: "10m", color: "red" },
  { id: "2", type: "enquiry", title: "New lead on 55 George St", time: "32m", color: "blue" },
  { id: "3", type: "system", title: "Offer expiring in 24h", time: "2h", color: "orange" },
] as const

function AgentDashboardContent() {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

  const handleNotificationClick = useCallback(() => {
    // Handle notification click
  }, [])

  const handleFloatingActionClick = useCallback(() => {
    // Handle floating action button click
  }, [])

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="landing-page min-h-screen">
      {/* Background Effects */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-40"
        style={{ backgroundImage: `url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.05%22/%3E%3C/svg%3E')` }}
        aria-hidden="true"
      />
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{ background: "radial-gradient(circle at 100% 0%, rgba(99, 102, 241, 0.03) 0%, transparent 40%)" }}
        aria-hidden="true"
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full px-6 md:px-8 h-16 flex justify-between items-center z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5" role="navigation" aria-label="Agent dashboard navigation">
        <div className="flex items-center gap-8">
          <Link href="/landing-1" className="font-display text-lg font-medium tracking-tight flex items-center gap-2 group" aria-label="HAUS home">
            <div className="w-8 h-8 bg-indigo-600 text-white flex items-center justify-center font-bold tracking-tighter rounded-sm group-hover:scale-95 transition-transform">
              AG
            </div>
            <span className="text-white">
              PROP<span className="text-neutral-500">.AGENT</span>
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-1" role="list" aria-label="Dashboard sections">
            <Link href="/agent-dashboard" className="px-3 py-1.5 text-xs font-medium text-white bg-white/5 shadow-sm rounded border border-white/5" aria-current="page">
              Dashboard
            </Link>
            <Link href="#" className="px-3 py-1.5 text-xs font-medium text-neutral-400 hover:text-white transition-colors rounded hover:bg-white/5">
              My Listings
              <span className="ml-1 text-[10px] bg-neutral-800 px-1.5 py-0.5 rounded-full text-white" aria-label="5 listings">5</span>
            </Link>
            <Link href="/agent-pipeline" className="px-3 py-1.5 text-xs font-medium text-neutral-400 hover:text-white transition-colors rounded hover:bg-white/5">
              Pipeline
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5" role="status" aria-label="Office location">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" aria-hidden="true" />
            <span className="text-[10px] font-mono font-medium text-neutral-300">
              OFFICE: DOUBLE BAY
            </span>
          </div>
          <button
            className="relative text-neutral-400 hover:text-white transition-colors"
            onClick={handleNotificationClick}
            aria-label={`Notifications, 3 unread`}
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-[#050505]" aria-hidden="true" />
          </button>
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-blue-500 border border-white/20 ring-4 ring-black/50" aria-hidden="true" />
        </div>
      </nav>

      {/* Content */}
      <main className="relative z-10 pt-28 pb-12 px-6 md:px-8" aria-labelledby="dashboard-heading">
        <h1 id="dashboard-heading" className="sr-only">Agent Dashboard</h1>
        <div className="grid grid-cols-12 gap-8 lg:gap-12">
          {/* Left Sidebar */}
          <aside className="col-span-12 lg:col-span-3" aria-label="Dashboard sidebar">
            <div className={`sticky top-32 space-y-8 transition-opacity duration-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
              {/* Context Header */}
              <div>
                <h1 className="font-display text-lg text-white font-medium mb-1">
                  Hello, Marcus
                </h1>
                <p className="text-[11px] text-neutral-500 font-mono">
                  3 Contracts due for exchange today
                </p>
              </div>

              {/* Workflow Nav */}
              <nav className="space-y-1" aria-label="Workflow navigation">
                <div className="px-3 pb-2 text-[10px] font-mono uppercase tracking-widest text-neutral-600">
                  Workflow
                </div>
                <a href="#" className="flex items-center justify-between px-3 py-2 text-xs font-medium rounded-lg text-white bg-white/5 border border-white/10 transition-all group" aria-current="page">
                  <div className="flex items-center gap-3">
                    <LayoutDashboard className="w-4 h-4 text-indigo-400" aria-hidden="true" />
                    Overview
                  </div>
                </a>
                <a href="#" className="flex items-center justify-between px-3 py-2 text-xs font-medium rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 border border-transparent transition-all group">
                  <div className="flex items-center gap-3">
                    <Megaphone className="w-4 h-4 group-hover:text-indigo-400 transition-colors" aria-hidden="true" />
                    Active Campaigns
                  </div>
                  <span className="text-[10px] bg-indigo-500/10 text-indigo-400 px-1.5 rounded border border-indigo-500/20" aria-label="5 active campaigns">5</span>
                </a>
                <a href="#" className="flex items-center justify-between px-3 py-2 text-xs font-medium rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 border border-transparent transition-all group">
                  <div className="flex items-center gap-3">
                    <Users className="w-4 h-4 group-hover:text-indigo-400 transition-colors" aria-hidden="true" />
                    Appraisals
                  </div>
                  <span className="text-[10px] text-neutral-600" aria-label="8 appraisals">8</span>
                </a>
                <a href="#" className="flex items-center justify-between px-3 py-2 text-xs font-medium rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 border border-transparent transition-all group">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 group-hover:text-indigo-400 transition-colors" aria-hidden="true" />
                    Sold / Settlement
                  </div>
                </a>
              </nav>

              {/* Performance */}
              <section className="p-4 rounded-xl border border-white/5 bg-white/[0.02]" aria-labelledby="performance-heading">
                <div className="flex items-center gap-2 mb-3">
                  <Trophy className="w-3.5 h-3.5 text-yellow-500" aria-hidden="true" />
                  <h2 id="performance-heading" className="text-[10px] uppercase font-mono tracking-widest text-neutral-500">
                    Performance (Q4)
                  </h2>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-end">
                    <span className="text-xs text-neutral-400">GCI Goal</span>
                    <span className="text-sm font-medium text-white font-mono">$385k</span>
                  </div>
                  <div className="w-full bg-neutral-800 h-1 rounded-full overflow-hidden relative" role="progressbar" aria-valuenow={72} aria-valuemin={0} aria-valuemax={100} aria-label="GCI progress">
                    <div className="bg-indigo-500 h-full w-[72%] absolute top-0 left-0" aria-hidden="true" />
                  </div>
                  <div className="flex justify-between text-[10px] text-neutral-500">
                    <span>Current: $277,200</span>
                    <span className="text-indigo-400">72%</span>
                  </div>
                </div>
              </section>

              {/* Hot Leads */}
              <section className="space-y-4" aria-labelledby="hot-leads-heading">
                <div className="flex items-center justify-between px-1">
                  <h2 id="hot-leads-heading" className="text-[10px] uppercase font-mono tracking-widest text-neutral-600">
                    Hot Leads
                  </h2>
                  <a href="#" className="text-[10px] text-neutral-500 hover:text-white transition-colors">
                    View CRM
                  </a>
                </div>
                <div className="space-y-2" role="list" aria-label="Hot leads">
                  {hotLeads.map((lead) => (
                    <a
                      key={lead.id}
                      href="#"
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors group"
                      role="listitem"
                    >
                      <div
                        className={`w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center border border-white/5 text-xs font-medium text-neutral-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors`}
                        aria-hidden="true"
                      >
                        {lead.initials}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-baseline mb-0.5">
                          <span className="text-[11px] text-white font-medium truncate">{lead.name}</span>
                          <span
                            className={`text-[9px] font-mono ${lead.status === "HOT" ? "text-emerald-400" : "text-indigo-400"}`}
                            aria-label={`Lead status: ${lead.status}`}
                          >
                            {lead.status}
                          </span>
                        </div>
                        <div className="flex justify-between items-center text-[10px] text-neutral-500">
                          <span className="truncate">{lead.type}</span>
                          <time className="font-mono text-[9px]">{lead.time}</time>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </section>

              {/* Quick Tools */}
              <section className="space-y-4" aria-labelledby="quick-tools-heading">
                <h2 id="quick-tools-heading" className="text-[10px] uppercase font-mono tracking-widest text-neutral-600 px-1">
                  Quick Tools
                </h2>
                <div className="grid grid-cols-2 gap-2" role="list" aria-label="Quick tools">
                  <a
                    href="#"
                    className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group"
                    role="listitem"
                  >
                    <FilePlus className="w-3.5 h-3.5 text-neutral-400 group-hover:text-indigo-400 transition-colors" aria-hidden="true" />
                    <span className="text-[10px] font-medium text-neutral-300">Appraisal</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group"
                    role="listitem"
                  >
                    <Search className="w-3.5 h-3.5 text-neutral-400 group-hover:text-indigo-400 transition-colors" aria-hidden="true" />
                    <span className="text-[10px] font-medium text-neutral-300">Title Search</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group"
                    role="listitem"
                  >
                    <ClipboardList className="w-3.5 h-3.5 text-neutral-400 group-hover:text-indigo-400 transition-colors" aria-hidden="true" />
                    <span className="text-[10px] font-medium text-neutral-300">Vendor Rpt</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group"
                    role="listitem"
                  >
                    <Database className="w-3.5 h-3.5 text-neutral-400 group-hover:text-indigo-400 transition-colors" aria-hidden="true" />
                    <span className="text-[10px] font-medium text-neutral-300">CRM</span>
                  </a>
                </div>
              </section>
            </div>
          </aside>

          {/* Main Feed */}
          <div className="col-span-12 lg:col-span-6 space-y-6">
            {/* Action Required Card */}
            <article
              className={`p-4 rounded-xl border border-orange-500/20 bg-orange-500/5 flex items-start gap-4 transition-all duration-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
              role="alert"
              aria-labelledby="action-required-title"
            >
              <div className="p-2 bg-orange-500/10 rounded-lg text-orange-400 shrink-0">
                <AlertCircle className="w-4 h-4" aria-hidden="true" />
              </div>
              <div>
                <h3 id="action-required-title" className="text-xs font-medium text-white mb-1">Action Required: 128 Crown St</h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-2">
                  Contracts for the Smith family are pending exchange. Finance clause expires in 24 hours.
                </p>
                <div className="flex gap-3 mt-2">
                  <a href="#" className="text-[10px] font-medium text-orange-400 hover:text-orange-300 flex items-center gap-1">
                    Call Solicitor <Phone className="w-3 h-3" aria-hidden="true" />
                  </a>
                  <a href="#" className="text-[10px] font-medium text-neutral-400 hover:text-white">
                    Mark Complete
                  </a>
                </div>
              </div>
            </article>

            {/* Message Card */}
            <article
              className={`p-4 rounded-xl border border-white/5 bg-[#0A0A0A] flex gap-4 group cursor-pointer hover:border-indigo-500/30 transition-colors transition-all duration-500 delay-100 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
            >
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-medium text-white border border-white/10" aria-hidden="true">
                  MK
                </div>
                <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-0.5 border border-[#0A0A0A]" aria-hidden="true">
                  <MessageCircle className="w-2.5 h-2.5 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-0.5">
                  <h3 className="text-sm font-medium text-white">
                    Michael King <span className="text-neutral-500 font-normal ml-1">enquired on 128 Crown St</span>
                  </h3>
                  <time className="text-[10px] text-neutral-500 font-mono">2m ago</time>
                </div>
                <p className="text-xs text-neutral-400 line-clamp-1 group-hover:text-neutral-300">
                  "Hi Marcus, is it possible to organize a private inspection this Thursday? We're very interested..."
                </p>
                <div className="flex gap-2 mt-2">
                  <button className="px-2 py-1 rounded bg-white/5 text-[10px] text-neutral-300 hover:text-white hover:bg-white/10 border border-white/5">
                    Reply
                  </button>
                  <button className="px-2 py-1 rounded bg-white/5 text-[10px] text-neutral-300 hover:text-white hover:bg-white/10 border border-white/5">
                    Call
                  </button>
                </div>
              </div>
            </article>

            {/* Campaign Cards */}
            <section aria-label="Active campaigns">
              {campaigns.map((campaign, idx) => (
                <article
                  key={campaign.id}
                  className={`group rounded-2xl bg-[#0A0A0A] border border-white/5 overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:border-white/10 hover:shadow-xl hover:shadow-black/20 ${
                    mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                  }`}
                  style={{ transitionDelay: `${(idx + 2) * 100}ms` }}
                  aria-labelledby={`campaign-${campaign.id}-title`}
                >
                  {/* Image Area */}
                  <div className="relative h-64 w-full overflow-hidden cursor-pointer group/img">
                    <Image
                      src={campaign.image}
                      alt={`Property image for ${campaign.title}`}
                      width={800}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                    />

                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex gap-2" aria-label="Property status badges">
                      {campaign.badges.map((badge, badgeIdx) => (
                        <div
                          key={badgeIdx}
                          className={`${
                            badge.variant === "auction"
                              ? "bg-black/60 backdrop-blur-md border border-white/10"
                              : badge.variant === "active"
                              ? "bg-emerald-500/90 backdrop-blur-md"
                              : "bg-blue-500 backdrop-blur-md"
                          } border border-white/10 px-2 py-1 rounded text-[10px] font-bold ${
                            badge.variant === "active" ? "text-black" : "text-white"
                          } uppercase tracking-wider flex items-center gap-1`}
                        >
                          {badge.variant === "active" && <Activity className="w-3 h-3 fill-black" aria-hidden="true" />}
                          {badge.text}
                        </div>
                      ))}
                    </div>

                    {/* Admin Actions */}
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
                        aria-label={`Edit ${campaign.title}`}
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Bottom Gradient */}
                    <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#0A0A0A] to-transparent" aria-hidden="true" />
                  </div>

                  {/* Content */}
                  <div className="p-5 relative">
                    {/* Health Ring */}
                    <div
                      className="absolute -top-6 right-5 relative w-12 h-12 rounded-full"
                      style={{
                        background: `conic-gradient(#818cf8 ${campaign.healthScore}%, rgba(255,255,255,0.1) 0)`,
                      }}
                      aria-hidden="true"
                    >
                      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pt-0.5">
                        <span className="text-[10px] font-bold text-indigo-400">{campaign.healthScore}%</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-start mb-2 -mt-4">
                      <div>
                        <h2
                          id={`campaign-${campaign.id}-title`}
                          className="text-base font-medium text-white mb-0.5 group-hover:text-indigo-400 transition-colors cursor-pointer"
                        >
                          {campaign.title}
                        </h2>
                        <p className="text-xs text-neutral-500">
                          {campaign.suburb} · Vendor: {campaign.vendor}
                        </p>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-px bg-white/5 rounded-lg overflow-hidden my-4 border border-white/5" role="list" aria-label="Campaign statistics">
                      <div className="bg-[#0A0A0A] p-3 text-center" role="listitem">
                        <div className="text-[10px] text-neutral-500 uppercase tracking-wide font-mono mb-1">Enquiries</div>
                        <div className="text-sm font-medium text-white">{campaign.stats.enquiries}</div>
                      </div>
                      <div className="bg-[#0A0A0A] p-3 text-center" role="listitem">
                        <div className="text-[10px] text-neutral-500 uppercase tracking-wide font-mono mb-1">Groups</div>
                        <div className="text-sm font-medium text-white">{campaign.stats.groups}</div>
                      </div>
                      <div className="bg-[#0A0A0A] p-3 text-center" role="listitem">
                        <div className="text-[10px] text-neutral-500 uppercase tracking-wide font-mono mb-1">Contracts</div>
                        <div className="text-sm font-medium text-indigo-400">{campaign.stats.contracts}</div>
                      </div>
                    </div>

                    {/* Updates */}
                    {campaign.updates.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-[10px] text-neutral-500 font-mono py-1">Last Update:</span>
                        {campaign.updates.map((update, updateIdx) => (
                          <span key={updateIdx} className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-neutral-400 flex items-center gap-1.5">
                            {update}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center gap-3 pt-1">
                      <button className="flex-1 bg-white text-black px-4 py-2 rounded-lg text-xs font-semibold hover:bg-neutral-200 transition-colors">
                        Manage Campaign
                      </button>
                      <button className="px-4 py-2 rounded-lg border border-white/10 text-white text-xs font-medium hover:bg-white/5 transition-colors">
                        Email Vendor
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </section>
          </div>

          {/* Right Sidebar */}
          <aside className="col-span-12 lg:col-span-3 space-y-6" aria-label="Schedule and updates">
            <div className={`sticky top-32 transition-opacity duration-500 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
              {/* Schedule */}
              <section aria-labelledby="schedule-heading">
                <div className="flex items-center justify-between mb-4">
                  <h2 id="schedule-heading" className="text-xs font-medium text-white uppercase tracking-wider font-mono">
                    Today's Schedule
                  </h2>
                  <button className="text-neutral-500 hover:text-white transition-colors" aria-label="Open calendar">
                    <Calendar className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-3" role="list" aria-label="Scheduled events">
                  {scheduleEvents.map((event) => (
                    <div
                      key={event.id}
                      className="group relative p-3 rounded-lg bg-[#0A0A0A] border border-white/5 hover:border-white/20 transition-all cursor-pointer"
                      role="listitem"
                    >
                      <div
                        className={`absolute left-0 top-3 bottom-3 w-0.5 rounded-r bg-${event.color}-500`}
                        aria-hidden="true"
                      />
                      <div className="pl-3">
                        <div className="flex justify-between items-start mb-1">
                          <span
                            className={`text-[10px] font-bold bg-${event.color}-500/10 text-${event.color}-400 px-1.5 py-0.5 rounded border border-${event.color}-500/20`}
                          >
                            {event.type.replace("_", " ")}
                          </span>
                          <time className="text-[10px] font-mono text-neutral-400">{event.time}</time>
                        </div>
                        <h3 className="text-xs font-medium text-white mb-0.5 group-hover:text-indigo-400">
                          {event.title}
                        </h3>
                        <p className="text-[11px] text-neutral-500 truncate">{event.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Pipeline Value */}
              <section className="mt-8 pt-6 border-t border-white/5" aria-labelledby="pipeline-heading">
                <h2 id="pipeline-heading" className="text-xs font-medium text-white uppercase tracking-wider font-mono mb-3">
                  Pipeline Value
                </h2>
                <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-950/20 to-transparent border border-indigo-500/20 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity" aria-hidden="true">
                    <Wallet className="w-3 h-3 text-indigo-400" />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-400 text-[9px] font-bold uppercase tracking-wide border border-indigo-500/20">
                        Projected GCI
                      </span>
                    </div>
                    <div className="flex items-baseline gap-1 mb-3">
                      <span className="text-xs text-neutral-400">$</span>
                      <span className="text-xl font-semibold text-white tracking-tight">84,500</span>
                    </div>
                    <div className="w-full bg-neutral-800 h-1 rounded-full overflow-hidden mb-2" role="progressbar" aria-valuenow={45} aria-valuemin={0} aria-valuemax={100} aria-label="Pipeline progress">
                      <div className="bg-indigo-500 h-full w-[45%] rounded-full" aria-hidden="true" />
                    </div>
                    <div className="flex justify-between items-center text-[10px] font-mono">
                      <span className="text-neutral-400">Nov Target</span>
                      <span className="text-neutral-500">45% Reached</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Communications */}
              <section className="mt-8 pt-6 border-t border-white/5" aria-labelledby="communications-heading">
                <div className="flex items-center justify-between mb-3">
                  <h2 id="communications-heading" className="text-xs font-medium text-white uppercase tracking-wider font-mono">
                    Comms & Alerts
                  </h2>
                  <span className="text-[9px] font-bold text-red-400 bg-red-500/10 px-1.5 py-0.5 rounded border border-red-500/20">
                    3 NEW
                  </span>
                </div>
                <div className="space-y-2" role="list" aria-label="Recent communications">
                  {communications.map((comm) => (
                    <div
                      key={comm.id}
                      className="flex gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group"
                      role="listitem"
                      tabIndex={0}
                    >
                      <div className="mt-1 relative">
                        <div
                          className={`w-1.5 h-1.5 rounded-full bg-${comm.color}-500 ${comm.type === "call" ? "animate-pulse" : ""}`}
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-0.5">
                          <span className="text-xs text-white font-medium capitalize">{comm.type}</span>
                          <time className="text-[9px] font-mono text-neutral-500">{comm.time}</time>
                        </div>
                        <p className="text-[10px] text-neutral-400 truncate">{comm.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </aside>
        </div>
      </main>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50 group">
        <button
          className="w-12 h-12 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full shadow-lg shadow-indigo-900/20 flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
          onClick={handleFloatingActionClick}
          aria-label="Quick actions menu"
          aria-expanded="false"
        >
          <Plus className="w-6 h-6" />
        </button>
        <div
          className="absolute bottom-14 right-0 w-40 p-2 bg-[#0A0A0A] border border-white/10 rounded-xl shadow-xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 flex flex-col gap-1"
          role="menu"
          aria-label="Quick actions"
        >
          <a
            href="#"
            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5 text-xs text-neutral-300 hover:text-white transition-colors"
            role="menuitem"
          >
            <UserPlus className="w-3.5 h-3.5" aria-hidden="true" />
            Add Contact
          </a>
          <a
            href="#"
            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5 text-xs text-neutral-300 hover:text-white transition-colors"
            role="menuitem"
          >
            <Home className="w-3.5 h-3.5" aria-hidden="true" />
            New Appraisal
          </a>
          <a
            href="#"
            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5 text-xs text-neutral-300 hover:text-white transition-colors"
            role="menuitem"
          >
            <StickyNote className="w-3.5 h-3.5" aria-hidden="true" />
            Quick Note
          </a>
        </div>
      </div>
    </div>
  )
}

export default function AgentDashboardPage() {
  return (
    <ErrorBoundary>
      <Shell>
        <Suspense fallback={<PageLoader text="Loading dashboard..." />}>
          <AgentDashboardContent />
        </Suspense>
      </Shell>
    </ErrorBoundary>
  )
}
