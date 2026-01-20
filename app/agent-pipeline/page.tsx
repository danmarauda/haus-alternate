"use client"

/**
 * AgentPipeline - AI-powered deal pipeline kanban board
 *
 * @description
 * Modern kanban-style deal pipeline management interface with drag-and-drop
 * columns for different deal stages (Appraisal, Pre-Market, Active, Under Offer, Settlement).
 *
 * @features
 * - Responsive kanban board with horizontal scrolling
 * - Deal cards with status, metrics, and actions
 * - Pipeline summary widget with GCI tracking
 * - Filter and search functionality
 * - Mobile-optimized with touch interactions
 */

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Bell, Plus, Home, MoreHorizontal, Check, AlertCircle, Calendar, CalendarClock, Gift, Key, User, ArrowUpDown, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"
import { Suspense } from "react"
import { Shell } from "@/components/shell"
import { ErrorBoundary } from "@/components/error-boundary"
import { PageLoader } from "@/components/page-loader"


// Types with const assertions
interface DealCard {
  id: string
  title: string
  subtitle: string
  image?: string
  tags?: Array<{ label: string; variant: "default" | "secondary" | "outline" | "orange" | "emerald" | "purple" }>
  metrics?: { label: string; value: string; icon?: React.ComponentType<{ className?: string }> }[]
  status?: string
  probability?: number
  assignedTo?: { initials: string; name?: string }[]
  schedule?: string
  actions?: Array<{ label: string; onClick: () => void; variant?: "default" | "outline" | "ghost" }>
  tasks?: Array<{ label: string; completed: boolean }>
  checklist?: boolean
  checklistItems?: Array<{ label: string; completed: boolean }>
  alert?: { message: string; action: string; type: "warning" | "info" | "success" }
  price?: string
  salePrice?: string
  estValue?: string
  estGCI?: string
  guidePrice?: string
  contract?: boolean
  settled?: boolean
  daysUntilSettlement?: number
  progress?: number
  dom?: number
  openHome?: string
  hot?: boolean
  updated?: string
}

interface PipelineColumn {
  id: string
  title: string
  status: "neutral" | "indigo" | "emerald" | "purple" | "gray"
  count: number
  estGCI: string
  deals: DealCard[]
  pulse?: boolean
}

// Mock pipeline data with const assertion
const pipeline: PipelineColumn[] = [
  {
    id: "appraisal",
    title: "Appraisal",
    status: "neutral",
    count: 4,
    estGCI: "$85k",
    deals: [
      {
        id: "1",
        title: "88 Campbell St",
        subtitle: "Surry Hills",
        tags: [{ label: "Warm Lead", variant: "orange" }],
        status: "Prob: 40%",
        assignedTo: [{ initials: "JD", name: "John Doe" }],
        schedule: "Call Tue 2pm",
        actions: [{ label: "Follow Up", onClick: () => {}, variant: "outline" }],
      },
      {
        id: "2",
        title: "15 Ocean St",
        subtitle: "Double Bay",
        image: "https://images.unsplash.com/photo-1600596542815-60c37c65b585?auto=format&fit=crop&q=80&w=100&h=100",
        estValue: "$4.5M - $5M",
        estGCI: "$90k",
        updated: "Proposal Sent 2d ago",
        actions: [{ label: "Follow Up", onClick: () => {} }],
      },
    ],
  },
  {
    id: "pre-market",
    title: "Pre-Market",
    status: "indigo",
    count: 2,
    estGCI: "$45k",
    deals: [
      {
        id: "3",
        title: "Unit 402, The Altair",
        subtitle: "Rushcutters Bay · $1.8M",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=400",
        tags: [{ label: "Agency Signed", variant: "default" }],
        checklist: true,
        checklistItems: [
          { label: "Agency Agreement", completed: true },
          { label: "Photography Booked (Fri)", completed: false },
          { label: "Marketing Copy", completed: false },
        ],
        actions: [{ label: "Open Checklist", onClick: () => {}, variant: "ghost" }],
      },
      {
        id: "4",
        title: "72 Wilson St",
        subtitle: "Newtown",
        tags: [{ label: "Drafting", variant: "secondary" }],
        updated: "Updated 1h ago",
      },
    ],
  },
  {
    id: "active",
    title: "Active",
    status: "emerald",
    count: 3,
    estGCI: "$122k",
    pulse: true,
    deals: [
      {
        id: "5",
        title: "128 Crown Street",
        subtitle: "Surry Hills · Guide: $2.2M",
        image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg",
        hot: true,
        tags: [{ label: "Auction Sat 1pm", variant: "emerald" }],
        metrics: [
          { label: "Enq", value: "42" },
          { label: "Insp", value: "18" },
          { label: "Cont", value: "5" },
        ],
        assignedTo: [
          { initials: "MK", name: "Mike K" },
          { initials: "+4", name: "Others" },
        ],
        actions: [{ label: "View Vendor Report →", onClick: () => {}, variant: "ghost" }],
      },
      {
        id: "6",
        title: "5/20 Cooper St",
        subtitle: "Redfern · $1.1M",
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=400",
        tags: [{ label: "Private Treaty", variant: "secondary" }],
        dom: 14,
        progress: 20,
        alert: {
          message: "Price reduction suggested.",
          action: "Email Vendor",
          type: "warning",
        },
        openHome: "Sat 10:00",
      },
    ],
  },
  {
    id: "under-offer",
    title: "Under Offer",
    status: "purple",
    count: 1,
    estGCI: "$90k",
    deals: [
      {
        id: "7",
        title: "22 Park Road",
        subtitle: "Paddington",
        salePrice: "$4,250,000",
        contract: true,
        checklistItems: [
          { label: "0.25% Deposit Paid", completed: true },
          { label: "Finance Clause (24h)", completed: false },
        ],
        actions: [
          { label: "Call Solicitor", onClick: () => {} },
          { label: "View Contract", onClick: () => {}, variant: "outline" },
        ],
      },
    ],
  },
  {
    id: "settlement",
    title: "Settlement",
    status: "gray",
    count: 5,
    estGCI: "$0",
    deals: [
      {
        id: "8",
        title: "808/200 George St",
        subtitle: "Sydney CBD",
        settled: true,
        actions: [{ label: "Gift Sent", onClick: () => {}, variant: "ghost" }],
      },
      {
        id: "9",
        title: "14 Smith St",
        subtitle: "Surry Hills",
        daysUntilSettlement: 7,
        alert: {
          message: "Arrange Keys",
          action: "",
          type: "info",
        },
      },
    ],
  },
] as const

function AgentPipelinePageContent() {
  const [viewMode, setViewMode] = useState<"board" | "list">("board")
  const [searchQuery, setSearchQuery] = useState("")

  const handleViewModeChange = useCallback((mode: "board" | "list") => {
    setViewMode(mode)
  }, [])

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }, [])

  return (
    <div className="flex flex-col h-screen bg-[#050505] text-neutral-300">
      {/* Background Effects */}
      <div
        className="fixed inset-0 z-0 w-full h-full pointer-events-none opacity-40"
        style={{
          backgroundImage: `url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.05%22/%3E%3C/svg%3E')`,
        }}
        aria-hidden="true"
      />

      {/* Navigation */}
      <nav className="shrink-0 w-full px-4 sm:px-6 md:px-8 h-16 flex justify-between items-center z-50 bg-[#050505] border-b border-white/5" aria-label="Main navigation">
        <div className="flex items-center gap-4 sm:gap-8">
          <Link
            href="/landing-1"
            className="font-display text-lg sm:text-xl font-medium tracking-tight flex items-center gap-2 group"
            aria-label="HAUS home"
          >
            <div className="w-8 h-8 bg-indigo-600 text-white flex items-center justify-center font-bold tracking-tighter rounded-sm group-hover:scale-95 transition-transform">
              AG
            </div>
            <span className="text-white hidden sm:inline">
              PROP<span className="text-neutral-500">.AGENT</span>
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-1">
            <Link
              href="/agent-dashboard"
              className="px-3 py-1.5 text-xs font-medium text-neutral-400 hover:text-white transition-colors rounded hover:bg-white/5"
            >
              Dashboard
            </Link>
            <Link
              href="/agent-pipeline"
              className="px-3 py-1.5 text-xs font-medium text-white bg-white/5 shadow-sm rounded border border-white/5"
              aria-current="page"
            >
              Pipeline
            </Link>
            <Link
              href="#"
              className="px-3 py-1.5 text-xs font-medium text-neutral-400 hover:text-white transition-colors rounded hover:bg-white/5"
            >
              Contacts
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Pipeline Summary Widget */}
          <div className="hidden lg:flex items-center gap-3 sm:gap-4 px-3 sm:px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.02]">
            <div className="flex flex-col items-end leading-none">
              <span className="text-[9px] font-mono text-neutral-500 uppercase">Est. GCI</span>
              <span className="text-xs font-medium text-emerald-400">$342,500</span>
            </div>
            <div className="w-px h-6 bg-white/10"></div>
            <div className="flex flex-col items-start leading-none">
              <span className="text-[9px] font-mono text-neutral-500 uppercase">Active Vol</span>
              <span className="text-xs font-medium text-white">$14.2M</span>
            </div>
          </div>

          <Button
            size="sm"
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-2 sm:px-3 py-1.5 rounded text-xs font-medium transition-colors flex items-center gap-2 h-9"
          >
            <Plus className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">New Deal</span>
          </Button>
          <button className="relative p-2 text-neutral-400 hover:text-white transition-colors" aria-label="Notifications">
            <Bell className="w-5 h-5" />
            <div className="absolute top-2 right-2.5 w-1.5 h-1.5 bg-indigo-500 rounded-full border border-[#050505]" />
          </button>
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-blue-500 border border-white/20 ring-4 ring-black/50" aria-label="Your profile" />
        </div>
      </nav>

      {/* Pipeline Header / Filters */}
      <header className="shrink-0 px-4 sm:px-6 md:px-8 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-white/5 bg-[#050505]/50 backdrop-blur-sm z-40" aria-labelledby="pipeline-heading">
        <h2 id="pipeline-heading" className="sr-only">Deal Pipeline</h2>
        <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto overflow-x-auto">
          <div className="flex items-center bg-[#0A0A0A] border border-white/5 rounded-lg p-0.5 shrink-0">
            <Button
              size="sm"
              variant={viewMode === "board" ? "default" : "ghost"}
              onClick={() => handleViewModeChange("board")}
              className="px-3 py-1.5 rounded-md bg-white/10 text-white text-xs font-medium shadow-sm h-8"
              aria-label="Board view"
              aria-pressed={viewMode === "board"}
            >
              Board
            </Button>
            <Button
              size="sm"
              variant={viewMode === "list" ? "default" : "ghost"}
              onClick={() => handleViewModeChange("list")}
              className="px-3 py-1.5 rounded-md text-neutral-500 hover:text-white text-xs font-medium transition-colors h-8"
              aria-label="List view"
              aria-pressed={viewMode === "list"}
            >
              List
            </Button>
          </div>
          <div className="h-6 w-px bg-white/5 shrink-0" aria-hidden="true" />
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide" role="group" aria-label="Pipeline filters">
            <span className="text-xs text-neutral-500 whitespace-nowrap">Filter:</span>
            <button className="flex items-center gap-1.5 px-2.5 py-1 rounded border border-dashed border-white/20 text-xs text-neutral-400 hover:text-white hover:border-white/40 transition-all shrink-0">
              <div className="w-2 h-2 rounded-full bg-indigo-500" aria-hidden="true" />
              Sales
            </button>
            <button className="flex items-center gap-1.5 px-2.5 py-1 rounded border border-dashed border-white/20 text-xs text-neutral-400 hover:text-white hover:border-white/40 transition-all shrink-0">
              <User className="w-3 h-3" aria-hidden="true" />
              Vendor: All
            </button>
            <div className="h-4 w-px bg-white/5 shrink-0" aria-hidden="true" />
            <button className="flex items-center gap-1.5 px-2.5 py-1 rounded border border-dashed border-white/20 text-xs text-neutral-400 hover:text-white hover:border-white/40 transition-all shrink-0">
              <ArrowUpDown className="w-3 h-3" aria-hidden="true" />
              Sort
            </button>
          </div>
        </div>
        <div className="relative group w-full sm:w-auto">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-neutral-500 group-focus-within:text-white transition-colors" aria-hidden="true" />
          <Input
            type="text"
            placeholder="Search address..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="bg-[#0A0A0A] border border-white/10 rounded-lg pl-8 pr-3 py-1.5 text-xs text-white focus:outline-none focus:border-indigo-500/50 w-full sm:w-48 focus:w-64 transition-all placeholder:text-neutral-600 h-9"
            aria-label="Search deals"
          />
        </div>
      </header>

      {/* Kanban Board */}
      <main className="flex-1 overflow-x-auto overflow-y-hidden" aria-labelledby="pipeline-heading">
        <div className="h-full flex px-4 sm:px-6 md:px-8 py-4 sm:py-6 gap-4 sm:gap-6 min-w-max">
          {pipeline.map((column) => (
            <section key={column.id} className="min-w-[300px] sm:min-w-[340px] w-[300px] sm:w-[340px] h-full flex flex-col">
              {/* Column Header */}
              <div className="flex items-center justify-between mb-3 sm:mb-4 px-1">
                <div className="flex items-center gap-2">
                  {column.pulse ? (
                    <div className="relative">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse absolute"></div>
                      <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    </div>
                  ) : (
                    <div
                      className={cn(
                        "w-2 h-2 rounded-full",
                        column.status === "neutral" && "bg-neutral-500",
                        column.status === "indigo" && "bg-indigo-500",
                        column.status === "emerald" && "bg-emerald-500",
                        column.status === "purple" && "bg-purple-500",
                        column.status === "gray" && "bg-neutral-700"
                      )}
                    ></div>
                  )}
                  <h3 className="text-xs font-medium text-white uppercase tracking-wider font-mono">
                    {column.title}
                  </h3>
                  <span className="bg-white/5 text-neutral-400 px-1.5 py-0.5 rounded text-[10px]">
                    {column.count}
                  </span>
                </div>
                <span className="text-[10px] text-neutral-500 font-mono">
                  {column.estGCI !== "$0" && `Est. GCI: ${column.estGCI}`}
                </span>
              </div>

              {/* Cards Container */}
              <div className="flex-1 overflow-y-auto pr-2 space-y-2 sm:space-y-3 pb-20 scrollbar-hide" role="list" aria-label={`${column.title} deals`}>
                {column.deals.map((deal) => (
                  <DealCard key={deal.id} deal={deal} />
                ))}
              </div>
            </section>
          ))}

          {/* Add Column Button */}
          <div className="min-w-[50px] flex items-start pt-2">
            <button className="w-10 h-10 rounded-full border border-dashed border-white/20 flex items-center justify-center text-white/20 hover:text-white hover:border-white/50 transition-all" aria-label="Add new column">
              <Plus className="w-5 h-5" />
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

// Deal Card Component with proper types
function DealCard({ deal }: { deal: DealCard }) {
  const handleActionClick = useCallback((action: { label: string; onClick: () => void }) => {
    action.onClick()
  }, [deal])

  return (
    <div className="deal-card group relative bg-[#0A0A0A] p-3 rounded-xl border border-white/5 hover:border-white/10 transition-all duration-200 hover:transform hover:-translate-y-0.5 hover:shadow-xl hover:-translate-y-0.5 hover:z-10" role="listitem">
      {deal.contract && <div className="h-1 w-full stripe-progress" aria-hidden="true"></div>}

      {deal.image && !deal.checklist && (
        <div className="relative h-24 sm:h-28 w-full -mx-3 -mt-3 mb-3">
          <Image
            src={deal.image}
            alt={deal.title}
            width={400}
            height={300}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
          {deal.tags && deal.tags[0] && (
            <div className="absolute bottom-2 left-2">
              <DealBadge badge={deal.tags[0]} />
            </div>
          )}
        </div>
      )}

      {deal.image && deal.checklist && (
        <div className="relative h-24 w-full -mx-3 -mt-3 mb-3 rounded-t-xl overflow-hidden">
          <Image
            src={deal.image}
            alt={deal.title}
            width={400}
            height={300}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
          {deal.tags && deal.tags[0] && (
            <div className="absolute top-2 right-2 bg-black/60 backdrop-blur px-1.5 py-0.5 rounded text-[9px] text-white font-mono border border-white/10">
              {deal.tags[0].label}
            </div>
          )}
        </div>
      )}

      <div className="flex items-start justify-between mb-2 sm:mb-3">
        <div className="flex gap-2 sm:gap-3 flex-1 min-w-0">
          {!deal.image && (
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded bg-neutral-800 flex items-center justify-center border border-white/5 shrink-0">
              <Home className="w-4 h-4 text-neutral-500" />
            </div>
          )}
          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-2">
              <h4 className="text-xs sm:text-sm font-medium text-white leading-tight mb-0.5 truncate">
                {deal.title}
              </h4>
              {deal.hot && (
                <span className="text-[10px] font-mono text-emerald-400 shrink-0" aria-label="Hot deal">HOT</span>
              )}
            </div>
            <p className="text-[10px] sm:text-[11px] text-neutral-500 truncate">{deal.subtitle}</p>
            {deal.salePrice && (
              <div className="text-right">
                <div className="text-xs font-bold text-white">{deal.salePrice}</div>
                <div className="text-[9px] text-neutral-500">Sale Price</div>
              </div>
            )}
            {deal.guidePrice && !deal.salePrice && <p className="text-[10px] text-neutral-500">Guide: {deal.guidePrice}</p>}
          </div>
        </div>
        <button className="text-neutral-600 hover:text-white shrink-0" aria-label="More options">
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </div>

      {/* Tags */}
      {deal.tags && deal.tags.length > 0 && !deal.image && (
        <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3 flex-wrap" role="list" aria-label="Deal tags">
          {deal.tags.map((tag, idx) => (
            <DealBadge key={idx} badge={tag} />
          ))}
          {deal.probability && <span className="text-[10px] text-neutral-500 font-mono">Prob: {deal.probability}%</span>}
        </div>
      )}

      {/* Est Value / GCI */}
      {deal.estValue && deal.estGCI && (
        <div className="grid grid-cols-2 gap-2 mb-2 sm:mb-3">
          <div className="bg-white/5 rounded px-2 py-1">
            <div className="text-[9px] text-neutral-500 uppercase">Est. Value</div>
            <div className="text-xs text-neutral-300">{deal.estValue}</div>
          </div>
          <div className="bg-white/5 rounded px-2 py-1">
            <div className="text-[9px] text-neutral-500 uppercase">Est. GCI</div>
            <div className="text-xs text-indigo-300">{deal.estGCI}</div>
          </div>
        </div>
      )}

      {/* Metrics Grid */}
      {deal.metrics && deal.metrics.length > 0 && (
        <div className="grid grid-cols-3 gap-px bg-white/5 rounded border border-white/5 mb-2 sm:mb-3">
          {deal.metrics.map((metric, idx) => (
            <div key={idx} className="bg-[#0A0A0A] p-1 sm:p-1.5 text-center">
              <div className="text-[9px] text-neutral-500">{metric.label}</div>
              <div className="text-xs font-medium text-white">{metric.value}</div>
            </div>
          ))}
        </div>
      )}

      {/* Checklist */}
      {deal.checklist && deal.checklistItems && (
        <>
          <div className="space-y-1.5 mb-2 sm:mb-3" role="list" aria-label="Checklist items">
            {deal.checklistItems.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2 text-[10px]">
                <div
                  className={cn(
                    "w-3 h-3 rounded-full border flex items-center justify-center shrink-0",
                    item.completed ? "border-indigo-500 bg-indigo-500/20" : "border-white/20 hover:border-white cursor-pointer"
                  )}
                >
                  {item.completed && <Check className="w-2 h-2 text-indigo-400" />}
                </div>
                <span className={cn(item.completed ? "line-through opacity-50 text-neutral-400" : "text-white")}>
                  {item.label}
                </span>
              </li>
            ))}
          </div>
        </>
      )}

      {/* Contract Checklist */}
      {!deal.checklist && deal.checklistItems && (
        <div className="space-y-2 mt-2 sm:mt-3" role="list" aria-label="Contract checklist items">
          {deal.checklistItems.map((item, idx) => (
            <li
              key={idx}
              className={cn(
                "flex justify-between items-center p-2 rounded bg-white/5 border border-white/5",
                !item.completed && "bg-yellow-500/5 border-yellow-500/10"
              )}
            >
              <div className="flex items-center gap-2">
                <div
                  className={cn(
                    "w-1.5 h-1.5 rounded-full",
                    item.completed ? "bg-green-500" : "bg-yellow-500 animate-pulse"
                  )}
                ></div>
                <span className={cn("text-[10px]", item.completed ? "text-neutral-300" : "text-white font-medium")}>
                  {item.label}
                </span>
              </div>
              {item.completed ? (
                <Check className="w-3 h-3 text-green-500" />
              ) : (
                <span className="text-[9px] font-mono text-neutral-500">Due TOMORROW</span>
              )}
            </li>
          ))}
        </div>
      )}

      {/* Alert */}
      {deal.alert && (
        <div className="p-2 bg-orange-500/5 border border-orange-500/10 rounded flex gap-2 items-start mb-2" role="alert">
          <AlertCircle className="w-3 h-3 text-orange-400 mt-0.5 shrink-0" />
          <div>
            <p className="text-[10px] text-orange-200">{deal.alert.message}</p>
            {deal.alert.action && (
              <button className="text-[10px] underline text-orange-400 hover:text-orange-300">
                {deal.alert.action}
              </button>
            )}
          </div>
        </div>
      )}

      {/* Progress Bar */}
      {deal.dom !== undefined && (
        <div className="flex items-center gap-2 mb-2">
          <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden" aria-label={`Progress: ${deal.dom} days on market`}>
            <div className="bg-indigo-500 h-full" style={{ width: `${deal.progress || 20}%` }}></div>
          </div>
          <span className="text-[9px] text-neutral-500 font-mono whitespace-nowrap">DOM: {deal.dom}</span>
        </div>
      )}

      {/* Footer */}
      <div className={cn("pt-2 sm:pt-3 border-t border-white/5 flex items-center justify-between gap-2", !deal.checklist && !deal.checklistItems)}>
        <div className="flex items-center gap-1.5 sm:gap-2">
          {deal.assignedTo && deal.assignedTo.length > 0 && (
            <div className="flex -space-x-2" role="group" aria-label="Assigned team members">
              {deal.assignedTo.map((person, idx) => (
                <div
                  key={idx}
                  className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-neutral-700 border border-[#0A0A0A] flex items-center justify-center text-[9px] text-white"
                  title={person.name}
                >
                  {person.initials}
                </div>
              ))}
            </div>
          )}
          {deal.schedule && (
            <div className="flex items-center gap-1.5 text-[10px] text-neutral-400">
              <CalendarClock className="w-3 h-3" aria-hidden="true" />
              <span className="hidden sm:inline">{deal.schedule}</span>
            </div>
          )}
          {deal.openHome && (
            <div className="flex items-center gap-1.5 text-[10px] text-indigo-300">
              <Calendar className="w-3 h-3" aria-hidden="true" />
              <span className="hidden sm:inline">Next Open: {deal.openHome}</span>
            </div>
          )}
          {deal.settled && (
            <div className="flex items-center gap-2 text-[10px] text-green-500 font-mono">
              SETTLED
            </div>
          )}
          {deal.daysUntilSettlement && (
            <div className="flex items-center gap-2 text-[10px] text-neutral-400 font-mono">
              {deal.daysUntilSettlement} Days
            </div>
          )}
          {deal.updated && !deal.actions && <span className="text-[10px] text-neutral-500">{deal.updated}</span>}
          {deal.alert && deal.alert.type === "info" && !deal.alert.action && (
            <div className="flex items-center gap-2 text-[10px] text-orange-400 bg-orange-500/10 p-1.5 rounded border border-orange-500/10">
              <Key className="w-3 h-3" />
              <span>{deal.alert.message}</span>
            </div>
          )}
        </div>

        {deal.actions && deal.actions.length > 0 && (
          <div className="flex gap-1.5 sm:gap-2">
            {deal.actions.map((action, idx) => (
              <Button
                key={idx}
                size="sm"
                variant={action.variant === "outline" ? "outline" : action.variant === "ghost" ? "ghost" : "default"}
                onClick={() => handleActionClick(action)}
                className={cn(
                  "text-[10px] font-medium h-7 sm:h-8 px-2",
                  action.variant === "default" && "bg-white text-black hover:bg-neutral-200",
                  action.variant === "outline" && "border border-white/10",
                  action.variant === "ghost" && "bg-white/5 hover:bg-white/10 text-neutral-300 border border-white/5",
                  idx > 0 && "hidden sm:block"
                )}
              >
                {action.label}
              </Button>
            ))}
          </div>
        )}
      </div>

      {deal.updated && deal.actions && <span className="text-[9px] text-neutral-600 mt-1">{deal.updated}</span>}
    </div>
  )
}

// Deal Badge Component with proper variant typing
function DealBadge({ badge }: { badge: { label: string; variant: "default" | "secondary" | "outline" | "orange" | "emerald" | "purple" } }) {
  const variants: Record<string, string> = {
    default: "bg-black/60 backdrop-blur text-white border border-white/10 text-[9px]",
    secondary: "bg-white/5 text-neutral-400 border border-white/5 text-[10px]",
    outline: "bg-white/5 text-neutral-400 border border-white/5 text-[10px]",
    orange: "bg-orange-500/10 text-orange-400 border border-orange-500/20 text-[10px]",
    emerald: "bg-emerald-500 text-black px-1.5 py-0.5 rounded text-[9px] font-bold uppercase",
    purple: "bg-purple-500/10 text-purple-400 border border-purple-500/20 text-[10px]",
  }

  return <span className={cn("rounded font-medium uppercase tracking-wide", variants[badge.variant])}>{badge.label}</span>
}

function AgentPipelinePageWrapper() {
  return <AgentPipelinePageContent />
}

export default function AgentPipelinePage() {
  return (
    <ErrorBoundary>
      <Shell>
        <Suspense fallback={<PageLoader text="Loading pipeline..." />}>
          <AgentPipelinePageWrapper />
        </Suspense>
      </Shell>
    </ErrorBoundary>
  )
}
