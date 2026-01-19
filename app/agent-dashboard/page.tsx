"use client"

/**
 * Agent Dashboard Page
 *
 * @description
 * A comprehensive React dashboard for real estate agents featuring pipeline management,
 * active campaigns, lead tracking, and performance metrics. Built with TypeScript
 * and Tailwind CSS following the Advisory page quality standards.
 *
 * @features
 * - Pipeline overview with workflow navigation
 * - Agent performance metrics with GCI tracking
 * - Hot leads management
 * - Active campaign cards with health scores
 * - Schedule and event management
 * - Communication hub
 * - Quick tools access
 *
 * @example
 * ```tsx
 * // Access at /agent-dashboard route
 * <AgentDashboardPage />
 * ```
 */

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  LayoutDashboard,
  Megaphone,
  Users,
  CheckCircle2,
  Trophy,
  FilePlus,
  Search,
  ClipboardList,
  Database,
  Bell,
  Phone,
  Calendar,
  AlertCircle,
  MessageCircle,
  Edit2,
  Activity,
  MoreHorizontal,
  Clock,
  FileBarChart,
  Wallet,
  Plus,
  UserPlus,
  Home,
  StickyNote,
} from "lucide-react"
import { cn } from "@/lib/utils"
import type {
  NavItem,
  PerformanceMetrics,
  Lead,
  QuickTool,
  FeedItem,
  ScheduleEvent,
  CommunicationItem,
  PipelineValue,
} from "@/types/agent-dashboard"

// Mock data for navigation items
const NAV_ITEMS: NavItem[] = [
  { id: "overview", label: "Overview", icon: "layout-dashboard", isActive: true },
  { id: "campaigns", label: "Active Campaigns", icon: "megaphone", count: 5 },
  { id: "appraisals", label: "Appraisals", icon: "users", count: 8 },
  { id: "sold", label: "Sold / Settlement", icon: "check-circle-2" },
]

// Performance metrics mock data
const PERFORMANCE: PerformanceMetrics = {
  gciGoal: "$385k",
  currentGCI: "$277,200",
  percentage: 72,
  period: "Q4",
}

// Hot leads mock data
const HOT_LEADS: Lead[] = [
  {
    id: "1",
    initials: "JD",
    name: "John Doe",
    type: "Vendor (Redfern)",
    status: "WARM",
    statusColor: "indigo",
    timeAgo: "2h ago",
  },
  {
    id: "2",
    initials: "SM",
    name: "Sarah Miller",
    type: "Buyer ($2M+)",
    status: "HOT",
    statusColor: "emerald",
    timeAgo: "5m ago",
  },
]

// Quick tools mock data
const QUICK_TOOLS: QuickTool[] = [
  { id: "appraisal", label: "Appraisal", icon: "file-plus" },
  { id: "title-search", label: "Title Search", icon: "search" },
  { id: "vendor-report", label: "Vendor Rpt", icon: "clipboard-list" },
  { id: "crm", label: "CRM", icon: "database" },
]

// Feed items mock data
const FEED_ITEMS: FeedItem[] = [
  {
    type: "alert",
    id: "alert-1",
    title: "Action Required: 128 Crown St",
    message: "Contracts for the Smith family are pending exchange. Finance clause expires in 24 hours.",
    severity: "orange",
    actions: [
      { label: "Call Solicitor", icon: "phone", color: "orange" },
      { label: "Mark Complete" },
    ],
  },
  {
    type: "message",
    id: "msg-1",
    sender: {
      initials: "MK",
      name: "Michael King",
      propertyContext: "enquired on 128 Crown St",
    },
    message: '"Hi Marcus, is it possible to organize a private inspection this Thursday? We\'re very interested..."',
    timeAgo: "2m ago",
    actions: [
      { label: "Reply" },
      { label: "Call" },
    ],
  },
  {
    type: "campaign",
    id: "campaign-1",
    image: "https://images.unsplash.com/photo-1600596542815-2a4d9f6facb8?q=80&w=1000&auto=format&fit=crop",
    address: "128 Crown Street",
    suburb: "Surrey Hills",
    vendor: "Johnson",
    badges: [
      { text: "Auction Sat 10am" },
      { text: "Active", color: "emerald", icon: "activity" },
    ],
    healthScore: 85,
    stats: {
      enquiries: 42,
      groups: 18,
      contracts: 5,
    },
    lastUpdate: ["Vendor Report Sent", "REA Upload Synced"],
    actions: [
      { label: "Manage Campaign", primary: true },
      { label: "Email Vendor" },
    ],
  },
  {
    type: "appraisal",
    id: "appraisal-1",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=400&auto=format&fit=crop",
    address: "42 Cooper Street",
    suburb: "Redfern",
    potentialPrice: "$1.8M - $2.0M",
    appraisalTime: "2 days ago",
    cmaViews: 3,
    actions: [
      { label: "Follow Up Call", primary: true },
      { label: "Resend CMA" },
    ],
  },
]

// Schedule events mock data
const SCHEDULE_EVENTS: ScheduleEvent[] = [
  {
    id: "sched-1",
    type: "open-home",
    time: "10:00 AM",
    title: "128 Crown St, Surry Hills",
    subtitle: "Collect keys from office",
    color: "indigo",
  },
  {
    id: "sched-2",
    type: "appraisal",
    time: "12:30 PM",
    title: "55 George St, Redfern",
    subtitle: "Owner: Mrs. Davis (Referral)",
    color: "purple",
  },
]

// Communication items mock data
const COMMUNICATIONS: CommunicationItem[] = [
  {
    id: "comm-1",
    type: "missed-call",
    title: "Missed Call",
    message: "Solicitor re: 128 Crown St",
    timeAgo: "10m",
    color: "red",
  },
  {
    id: "comm-2",
    type: "enquiry",
    title: "Enquiry",
    message: "New lead on 55 George St",
    timeAgo: "32m",
    color: "blue",
  },
  {
    id: "comm-3",
    type: "system",
    title: "System",
    message: "Offer expiring in 24h",
    timeAgo: "2h",
    color: "orange",
  },
]

// Pipeline value mock data
const PIPELINE_VALUE: PipelineValue = {
  projectedGCI: "$84,500",
  currentPercentage: 45,
  targetMonth: "Nov",
}

export default function AgentDashboardPage() {
  const [activeNav, setActiveNav] = useState("overview")

  return (
    <div className="min-h-screen bg-[#050505] text-neutral-300">
      {/* Noise Overlay */}
      <div
        className="fixed inset-0 z-0 w-full h-full pointer-events-none opacity-40"
        style={{
          backgroundImage: `url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.05%22/%3E%3C/svg%3E')`,
        }}
      />
      <div className="fixed inset-0 z-0 w-full h-full pointer-events-none bg-[radial-gradient(circle_at_100%_0%,rgba(99,102,241,0.03)_0%,transparent_40%)]" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full px-6 md:px-8 h-16 flex justify-between items-center z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5">
        <div className="flex items-center gap-8">
          <Link href="/" className="font-display text-lg font-medium tracking-tight flex items-center gap-2 group">
            <div className="w-8 h-8 bg-indigo-600 text-white flex items-center justify-center font-bold tracking-tighter rounded-sm group-hover:scale-95 transition-transform duration-300">
              AG
            </div>
            <span className="text-white">
              PROP
              <span className="text-neutral-500">.AGENT</span>
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-1">
            <Link
              href="#"
              className="px-3 py-1.5 text-xs font-medium text-white bg-white/5 shadow-sm rounded border border-white/5"
            >
              Dashboard
            </Link>
            <Link
              href="#"
              className="px-3 py-1.5 text-xs font-medium text-neutral-400 hover:text-white transition-colors rounded hover:bg-white/5"
            >
              My Listings
              <span className="ml-1 text-[10px] bg-neutral-800 px-1.5 py-0.5 rounded-full text-white">
                5
              </span>
            </Link>
            <Link
              href="#"
              className="px-3 py-1.5 text-xs font-medium text-neutral-400 hover:text-white transition-colors rounded hover:bg-white/5"
            >
              Pipeline
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
            <span className="text-[10px] font-mono font-medium text-neutral-300">
              OFFICE: DOUBLE BAY
            </span>
          </div>
          <button className="relative text-neutral-400 hover:text-white transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-[#050505]" />
          </button>
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-blue-500 border border-white/20 ring-4 ring-black/50" />
        </div>
      </nav>

      {/* Content Wrapper */}
      <div className="relative z-10 pt-28 pb-12 px-6 md:px-8">
        <div className="grid grid-cols-12 gap-8 lg:gap-12">
          {/* Left Sidebar */}
          <aside className="col-span-12 lg:col-span-3">
            <div className="sticky top-32 space-y-8">
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
              <nav className="space-y-1">
                <div className="px-3 pb-2 text-[10px] font-mono uppercase tracking-widest text-neutral-600">
                  Workflow
                </div>
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.id}
                    href="#"
                    className={cn(
                      "flex items-center justify-between px-3 py-2 text-xs font-medium rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 border border-transparent transition-all group",
                      item.isActive && "bg-white/5 text-white border-white/5"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      {item.icon === "layout-dashboard" && <LayoutDashboard className="w-4 h-4 group-hover:text-indigo-400 transition-colors" />}
                      {item.icon === "megaphone" && <Megaphone className="w-4 h-4 group-hover:text-indigo-400 transition-colors" />}
                      {item.icon === "users" && <Users className="w-4 h-4 group-hover:text-indigo-400 transition-colors" />}
                      {item.icon === "check-circle-2" && <CheckCircle2 className="w-4 h-4 group-hover:text-indigo-400 transition-colors" />}
                      {item.label}
                    </div>
                    {item.count && (
                      <span
                        className={cn(
                          "text-[10px] px-1.5 rounded",
                          item.isActive
                            ? "bg-indigo-500/10 text-indigo-500 border border-indigo-500/20"
                            : "text-neutral-600"
                        )}
                      >
                        {item.count}
                      </span>
                    )}
                  </Link>
                ))}
              </nav>

              {/* Agent Performance */}
              <PerformanceCard performance={PERFORMANCE} />

              {/* Hot Leads */}
              <div className="space-y-4">
                <div className="flex items-center justify-between px-1">
                  <h3 className="text-[10px] uppercase font-mono tracking-widest text-neutral-600">
                    Hot Leads
                  </h3>
                  <Link href="#" className="text-[10px] text-neutral-500 hover:text-white transition-colors">
                    View CRM
                  </Link>
                </div>
                <div className="space-y-2">
                  {HOT_LEADS.map((lead) => (
                    <Link
                      key={lead.id}
                      href="#"
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center border border-white/5 text-xs font-medium text-neutral-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                        {lead.initials}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-baseline mb-0.5">
                          <span className="text-[11px] text-white font-medium truncate">
                            {lead.name}
                          </span>
                          <span
                            className={cn(
                              "text-[9px] font-mono",
                              lead.statusColor === "indigo" && "text-indigo-400",
                              lead.statusColor === "emerald" && "text-emerald-400"
                            )}
                          >
                            {lead.status}
                          </span>
                        </div>
                        <div className="flex justify-between items-center text-[10px] text-neutral-500">
                          <span className="truncate">{lead.type}</span>
                          <span className="font-mono text-[9px]">{lead.timeAgo}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Quick Tools */}
              <div className="space-y-4">
                <h3 className="text-[10px] uppercase font-mono tracking-widest text-neutral-600 px-1">
                  Quick Tools
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {QUICK_TOOLS.map((tool) => (
                    <Link
                      key={tool.id}
                      href="#"
                      className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group"
                    >
                      {tool.icon === "file-plus" && <FilePlus className="w-3.5 h-3.5 text-neutral-400 group-hover:text-indigo-400 transition-colors" />}
                      {tool.icon === "search" && <Search className="w-3.5 h-3.5 text-neutral-400 group-hover:text-indigo-400 transition-colors" />}
                      {tool.icon === "clipboard-list" && <ClipboardList className="w-3.5 h-3.5 text-neutral-400 group-hover:text-indigo-400 transition-colors" />}
                      {tool.icon === "database" && <Database className="w-3.5 h-3.5 text-neutral-400 group-hover:text-indigo-400 transition-colors" />}
                      <span className="text-[10px] font-medium text-neutral-300">
                        {tool.label}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Feed Stream */}
          <main className="col-span-12 lg:col-span-6 space-y-6">
            {FEED_ITEMS.map((item) => (
              <FeedCard key={item.id} item={item} />
            ))}
          </main>

          {/* Right Sidebar */}
          <aside className="col-span-12 lg:col-span-3 space-y-6">
            <div className="sticky top-32">
              <ScheduleWidget events={SCHEDULE_EVENTS} />
              <PipelineCard pipeline={PIPELINE_VALUE} />
              <CommunicationsWidget communications={COMMUNICATIONS} />
            </div>
          </aside>
        </div>
      </div>

      {/* Floating Action Button */}
      <FloatingMenu />
    </div>
  )
}

// Performance Card Component
function PerformanceCard({ performance }: { performance: PerformanceMetrics }) {
  return (
    <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
      <div className="flex items-center gap-2 mb-3">
        <Trophy className="w-3.5 h-3.5 text-yellow-500" />
        <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-500">
          Performance ({performance.period})
        </span>
      </div>
      <div className="space-y-3">
        <div className="flex justify-between items-end">
          <span className="text-xs text-neutral-400">GCI Goal</span>
          <span className="text-sm font-medium text-white font-mono">
            {performance.gciGoal}
          </span>
        </div>
        <div className="w-full bg-neutral-800 h-1 rounded-full overflow-hidden relative">
          <div
            className="bg-indigo-500 h-full absolute top-0 left-0"
            style={{ width: `${performance.percentage}%` }}
          />
        </div>
        <div className="flex justify-between text-[10px] text-neutral-500">
          <span>Current: {performance.currentGCI}</span>
          <span className="text-indigo-400">{performance.percentage}%</span>
        </div>
      </div>
    </div>
  )
}

// Feed Card Component
function FeedCard({ item }: { item: FeedItem }) {
  if (item.type === "alert") {
    return (
      <div className="p-4 rounded-xl border border-orange-500/20 bg-orange-500/5 flex items-start gap-4">
        <div className="p-2 bg-orange-500/10 rounded-lg text-orange-400 shrink-0">
          <AlertCircle className="w-4 h-4" />
        </div>
        <div>
          <h3 className="text-xs font-medium text-white mb-1">{item.title}</h3>
          <p className="text-xs text-neutral-400 leading-relaxed mb-2">{item.message}</p>
          <div className="flex gap-3 mt-2">
            {item.actions?.map((action, idx) => (
              <Link
                key={idx}
                href="#"
                className={cn(
                  "text-[10px] font-medium flex items-center gap-1",
                  action.color === "orange" ? "text-orange-400 hover:text-orange-300" : "text-neutral-400 hover:text-white"
                )}
              >
                {action.label}
                {action.icon === "phone" && <Phone className="w-3 h-3" />}
              </Link>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (item.type === "message") {
    return (
      <div className="p-4 rounded-xl border border-white/5 bg-[#0A0A0A] flex gap-4 group cursor-pointer hover:border-indigo-500/30 transition-colors">
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-medium text-white border border-white/10">
            {item.sender.initials}
          </div>
          <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-0.5 border border-[#0A0A0A]">
            <MessageCircle className="w-2.5 h-2.5 text-white" />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start mb-0.5">
            <h3 className="text-sm font-medium text-white">
              {item.sender.name}
              {item.sender.propertyContext && (
                <span className="text-neutral-500 font-normal ml-1">
                  {item.sender.propertyContext}
                </span>
              )}
            </h3>
            <span className="text-[10px] text-neutral-500 font-mono">
              {item.timeAgo}
            </span>
          </div>
          <p className="text-xs text-neutral-400 line-clamp-1 group-hover:text-neutral-300">
            {item.message}
          </p>
          <div className="flex gap-2 mt-2">
            {item.actions?.map((action, idx) => (
              <button
                key={idx}
                className="px-2 py-1 rounded bg-white/5 text-[10px] text-neutral-300 hover:text-white hover:bg-white/10 border border-white/5"
              >
                {action.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (item.type === "campaign") {
    return (
      <article className="group rounded-2xl bg-[#0A0A0A] border border-white/5 overflow-hidden hover:border-white/10 transition-all">
        {/* Image Area */}
        <div className="relative h-64 w-full overflow-hidden cursor-pointer">
          <Image
            src={item.image}
            alt="Property"
            width={1000}
            height={640}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Badges */}
          <div className="absolute top-4 left-4 flex gap-2">
            {item.badges.map((badge, idx) => (
              <div
                key={idx}
                className={cn(
                  "backdrop-blur-md border px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider",
                  badge.color === "emerald"
                    ? "bg-emerald-500/90 text-black border-transparent"
                    : "bg-black/60 text-white border-white/10"
                )}
              >
                {badge.icon === "activity" && <Activity className="w-3 h-3 fill-black inline mr-1" />}
                {badge.text}
              </div>
            ))}
          </div>

          {/* Admin Actions */}
          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
              <Edit2 className="w-4 h-4" />
            </button>
          </div>

          {/* Bottom Gradient */}
          <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
        </div>

        {/* Content */}
        <div className="p-5 relative">
          {/* Campaign Health Ring */}
          <div
            className="absolute -top-6 right-5 relative w-12 h-12 rounded-full"
            style={{
              background: `conic-gradient(#818cf8 ${item.healthScore}%, rgba(255,255,255,0.1) 0)`,
            }}
          >
            <div className="absolute inset-[2px] rounded-full bg-[#0A0A0A]" />
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pt-0.5">
              <span className="text-[10px] font-bold text-indigo-400">
                {item.healthScore}%
              </span>
            </div>
          </div>

          <div className="flex justify-between items-start mb-2 -mt-4">
            <div>
              <h2 className="text-base font-medium text-white mb-0.5 group-hover:text-indigo-400 transition-colors cursor-pointer">
                {item.address}
              </h2>
              <p className="text-xs text-neutral-500">
                {item.suburb} · Vendor: {item.vendor}
              </p>
            </div>
          </div>

          {/* Campaign Stats */}
          <div className="grid grid-cols-3 gap-px bg-white/5 rounded-lg overflow-hidden my-4 border border-white/5">
            <div className="bg-[#0A0A0A] p-3 text-center">
              <div className="text-[10px] text-neutral-500 uppercase tracking-wide font-mono mb-1">
                Enquiries
              </div>
              <div className="text-sm font-medium text-white">{item.stats.enquiries}</div>
            </div>
            <div className="bg-[#0A0A0A] p-3 text-center">
              <div className="text-[10px] text-neutral-500 uppercase tracking-wide font-mono mb-1">
                Groups
              </div>
              <div className="text-sm font-medium text-white">{item.stats.groups}</div>
            </div>
            <div className="bg-[#0A0A0A] p-3 text-center">
              <div className="text-[10px] text-neutral-500 uppercase tracking-wide font-mono mb-1">
                Contracts
              </div>
              <div className="text-sm font-medium text-indigo-400">{item.stats.contracts}</div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-[10px] text-neutral-500 font-mono py-1">
              Last Update:
            </span>
            {item.lastUpdate.map((update, idx) => (
              <span
                key={idx}
                className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-neutral-400 font-mono"
              >
                {update}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3 pt-1">
            {item.actions?.map((action, idx) => (
              <button
                key={idx}
                className={cn(
                  "px-4 py-2 rounded-lg text-xs font-medium transition-colors",
                  action.primary
                    ? "flex-1 bg-white text-black hover:bg-neutral-200"
                    : "border border-white/10 text-white hover:bg-white/5"
                )}
              >
                {action.label}
              </button>
            ))}
          </div>
        </div>
      </article>
    )
  }

  if (item.type === "appraisal") {
    return (
      <article className="group rounded-2xl bg-[#0A0A0A] border border-white/5 overflow-hidden hover:border-white/10 transition-all">
        <div className="flex">
          <div className="relative h-auto w-32 overflow-hidden cursor-pointer border-r border-white/5">
            <Image
              src={item.image}
              alt="House"
              width={400}
              height={600}
              className="w-full h-full object-cover grayscale-[20%]"
            />
            <div className="absolute top-2 left-2">
              <span className="bg-blue-500 text-[9px] font-bold text-white px-1.5 py-0.5 rounded">
                APPRAISAL
              </span>
            </div>
          </div>

          <div className="p-4 flex-1 relative">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h2 className="text-sm font-medium text-white mb-0.5">
                  {item.address}
                </h2>
                <p className="text-[11px] text-neutral-500">
                  {item.suburb} · Potential: {item.potentialPrice}
                </p>
              </div>
              <button className="text-neutral-500 hover:text-white">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2 mb-3">
              <div className="flex items-center gap-2">
                <Clock className="w-3 h-3 text-neutral-500" />
                <span className="text-[11px] text-neutral-300">
                  Appraisal conducted {item.appraisalTime}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FileBarChart className="w-3 h-3 text-neutral-500" />
                <span className="text-[11px] text-neutral-300">
                  CMA Proposal Viewed ({item.cmaViews}x)
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-1">
              {item.actions?.map((action, idx) => (
                <button
                  key={idx}
                  className={cn(
                    "px-3 py-1.5 rounded-md text-[11px] font-medium transition-all",
                    action.primary
                      ? "flex-1 bg-white/5 border border-white/10 text-white hover:bg-white hover:text-black"
                      : "border border-white/10 text-white hover:bg-white/5"
                  )}
                >
                  {action.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </article>
    )
  }

  return null
}

// Schedule Widget Component
function ScheduleWidget({ events }: { events: ScheduleEvent[] }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xs font-medium text-white uppercase tracking-wider font-mono">
          Today&apos;s Schedule
        </h3>
        <button className="text-neutral-500 hover:text-white transition-colors">
          <Calendar className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-3">
        {events.map((event) => (
          <div
            key={event.id}
            className="group relative p-3 rounded-lg bg-[#0A0A0A] border border-white/5 hover:border-white/20 transition-all cursor-pointer"
          >
            <div
              className={cn(
                "absolute left-0 top-3 bottom-3 w-0.5 rounded-r",
                event.color === "indigo" && "bg-indigo-500",
                event.color === "purple" && "bg-purple-500"
              )}
            />
            <div className="pl-3">
              <div className="flex justify-between items-start mb-1">
                <span
                  className={cn(
                    "text-[10px] font-bold px-1.5 py-0.5 rounded border",
                    event.color === "indigo" &&
                      "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
                    event.color === "purple" &&
                      "bg-purple-500/10 text-purple-400 border-purple-500/20"
                  )}
                >
                  {event.type === "open-home" && "OPEN HOME"}
                  {event.type === "appraisal" && "APPRAISAL"}
                </span>
                <span className="text-[10px] font-mono text-neutral-400">
                  {event.time}
                </span>
              </div>
              <h4
                className={cn(
                  "text-xs font-medium text-white mb-0.5",
                  event.color === "indigo" && "group-hover:text-indigo-400",
                  event.color === "purple" && "group-hover:text-purple-400"
                )}
              >
                {event.title}
              </h4>
              <p className="text-[11px] text-neutral-500 truncate">
                {event.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Pipeline Card Component
function PipelineCard({ pipeline }: { pipeline: PipelineValue }) {
  return (
    <div className="mt-8 pt-6 border-t border-white/5">
      <h3 className="text-xs font-medium text-white uppercase tracking-wider font-mono mb-3">
        Pipeline Value
      </h3>
      <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-950/20 to-transparent border border-indigo-500/20 relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity">
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
            <span className="text-xl font-semibold text-white tracking-tight">
              {pipeline.projectedGCI.replace("$", "").replace(",", "")}
            </span>
          </div>
          <div className="w-full bg-neutral-800 h-1 rounded-full overflow-hidden mb-2">
            <div
              className="bg-indigo-500 h-full rounded-full"
              style={{ width: `${pipeline.currentPercentage}%` }}
            />
          </div>
          <div className="flex justify-between items-center text-[10px] font-mono">
            <span className="text-neutral-400">{pipeline.targetMonth} Target</span>
            <span className="text-neutral-500">{pipeline.currentPercentage}% Reached</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// Communications Widget Component
function CommunicationsWidget({ communications }: { communications: CommunicationItem[] }) {
  return (
    <div className="mt-8 pt-6 border-t border-white/5">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xs font-medium text-white uppercase tracking-wider font-mono">
          Comms & Alerts
        </h3>
        <span className="text-[9px] font-bold text-red-400 bg-red-500/10 px-1.5 py-0.5 rounded border border-red-500/20">
          3 NEW
        </span>
      </div>
      <div className="space-y-2">
        {communications.map((comm) => (
          <div
            key={comm.id}
            className="flex gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group"
          >
            <div className="mt-1 relative">
              <div
                className={cn(
                  "w-1.5 h-1.5 rounded-full",
                  comm.color === "red" && "bg-red-500 animate-pulse",
                  comm.color === "blue" && "bg-blue-500",
                  comm.color === "orange" && "bg-orange-500"
                )}
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start mb-0.5">
                <span className="text-xs text-white font-medium">
                  {comm.title}
                </span>
                <span className="text-[9px] font-mono text-neutral-500">
                  {comm.timeAgo}
                </span>
              </div>
              <p className="text-[10px] text-neutral-400 truncate">
                {comm.message}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Floating Menu Component
function FloatingMenu() {
  return (
    <div className="fixed bottom-8 right-8 z-50 group">
      <button className="w-12 h-12 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full shadow-lg shadow-indigo-900/20 flex items-center justify-center transition-transform hover:scale-105 active:scale-95">
        <Plus className="w-6 h-6" />
      </button>
      <div className="absolute bottom-14 right-0 w-40 p-2 bg-[#0A0A0A] border border-white/10 rounded-xl shadow-xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 flex flex-col gap-1">
    <Link
      href="#"
      className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5 text-xs text-neutral-300 hover:text-white transition-colors"
    >
      <UserPlus className="w-3.5 h-3.5" />
      Add Contact
    </Link>
    <Link
      href="#"
      className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5 text-xs text-neutral-300 hover:text-white transition-colors"
    >
      <Home className="w-3.5 h-3.5" />
      New Appraisal
    </Link>
    <Link
      href="#"
      className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5 text-xs text-neutral-300 hover:text-white transition-colors"
    >
      <StickyNote className="w-3.5 h-3.5" />
      Quick Note
    </Link>
  </div>
    </div>
  )
}
