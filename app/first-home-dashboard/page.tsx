"use client"

/**
 * First Home Buyer Dashboard Page
 *
 * @description
 * A comprehensive React dashboard for first home buyers featuring journey tracking,
 * property watchlist, budget management, inspection scheduling, and document vault.
 * Built with TypeScript and Tailwind CSS following the Advisory page quality standards.
 *
 * @features
 * - Journey progress stepper with 6 stages
 * - Budget calculator with repayment estimates
 * - Property watchlist with match percentages
 * - Inspection scheduling and reminders
 * - Document vault with upload status
 * - Support team communication
 * - Educational content recommendations
 *
 * @example
 * ```tsx
 * // Access at /first-home-dashboard route
 * <FirstHomeDashboardPage />
 * ```
 */

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Sparkles,
  Check,
  Search,
  Gift,
  AlertCircle,
  MapPin,
  AlertTriangle,
  FileCheck,
  UploadCloud,
  BookOpen,
  ArrowRight,
  Heart,
  BedDouble,
  Bath,
  Car,
  Hammer,
  Trash2,
  MessageSquare,
  FileText,
  Calendar,
} from "lucide-react"
import { cn } from "@/lib/utils"
import type {
  JourneyStep,
  BudgetInfo,
  GrantInfo,
  WatchlistProperty,
  InspectionEvent,
  DocumentItem,
  SupportContact,
  EducationArticle,
} from "@/types/first-home-dashboard"

// Journey steps mock data
const JOURNEY_STEPS: JourneyStep[] = [
  { id: 1, label: "Goal Set", status: "completed", subtitle: "Jan 12" },
  { id: 2, label: "Deposit", status: "completed", subtitle: "$120k Saved" },
  { id: 3, label: "Pre-Approval", status: "completed", subtitle: "Valid (54 days)" },
  { id: 4, label: "Hunting", status: "active", subtitle: "4 Active", icon: "search" },
  { id: 5, label: "Offer", status: "pending" },
  { id: 6, label: "Settlement", status: "pending", icon: "key" },
]

// Budget information mock data
const BUDGET_INFO: BudgetInfo = {
  maxBudget: "$850,000",
  depositSaved: "$120,000",
  depositRequired: "$132,000",
  depositPercentage: 90,
  weeklyBudget: 950,
  estimatedRepayment: 1020,
  interestRate: 6.14,
  loanAmount: "$730,000",
}

// Grant information mock data
const GRANTS: GrantInfo[] = [
  {
    name: "Gov. Stamp Duty Waiver",
    status: "active",
  },
]

// Watchlist properties mock data
const WATCHLIST_PROPERTIES: WatchlistProperty[] = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop",
    address: "88 Campbell St",
    suburb: "Surrey Hills",
    priceRange: "$780k - $820k",
    priceType: "range",
    matchPercentage: 94,
    badges: [
      { text: "94% Match", color: "emerald" },
      { text: "Auction Sat 10am", color: "blue" },
    ],
    features: {
      beds: 2,
      baths: 1,
      cars: 1,
    },
    estimatedRepayment: {
      weekly: "$1,045",
      inBudget: true,
    },
    saleType: "auction",
    actions: [
      { label: "Request Contract", primary: true },
      { label: "", icon: "calendar" },
    ],
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop",
    address: "12 Railway Pde",
    suburb: "Marrickville",
    priceRange: "$750k Guide",
    priceType: "guide",
    badges: [
      { text: "Renovator", color: "amber" },
      { text: "Private Treaty", color: "blue" },
    ],
    features: {
      beds: 0,
      baths: 0,
      cars: 0,
    },
    renovationEstimate: {
      amount: "~$40k",
      budgetStatus: "tight",
    },
    saleType: "private-treaty",
    actions: [
      { label: "View Analysis", primary: false },
      { label: "", icon: "trash-2" },
    ],
  },
]

// Inspection events mock data
const INSPECTION_EVENTS: InspectionEvent[] = [
  {
    id: "1",
    time: "10:00 AM",
    timeEnd: "10:30 AM",
    address: "88 Campbell St",
    notes: "",
    color: "emerald",
  },
  {
    id: "2",
    time: "11:15 AM",
    timeEnd: "11:45 AM",
    address: "12 Railway Pde",
    notes: "Tight travel time",
    color: "neutral",
    warning: "Tight travel time",
  },
]

// Document items mock data
const DOCUMENTS: DocumentItem[] = [
  {
    id: "1",
    name: "Payslips (Recent)",
    status: "complete",
  },
  {
    id: "2",
    name: "Bank Statements",
    status: "complete",
  },
  {
    id: "3",
    name: "ID Verification",
    status: "upload-required",
    uploadRequired: true,
  },
]

// Support contacts mock data
const SUPPORT_CONTACTS: SupportContact[] = [
  {
    id: "1",
    initials: "MK",
    name: "Mike (Broker)",
    role: "Pre-approval issued",
    status: "Online",
    statusColor: "emerald",
    isOnline: true,
    actionIcon: "message-square",
  },
  {
    id: "2",
    initials: "LL",
    name: "Legal Team",
    role: "Contract review ready",
    status: "Offline",
    statusColor: "neutral",
    isOnline: false,
    actionIcon: "file-text",
  },
]

// Education article mock data
const EDUCATION_ARTICLE: EducationArticle = {
  id: "1",
  category: "Knowledge Base",
  title: "Understanding Strata",
  description: "Don't get caught out by hidden levies. Learn what to look for in a Strata Report.",
  icon: "book-open",
  gradientFrom: "indigo",
}

export default function FirstHomeDashboardPage() {
  const [weeklyBudget, setWeeklyBudget] = useState(950)
  const [isLoading, setIsLoading] = useState(true)

  // Simulate loading
  useState(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200)
    return () => clearTimeout(timer)
  })

  if (isLoading) {
    return <Preloader />
  }

  return (
    <div className="min-h-screen bg-[#050505] text-neutral-300">
      {/* Noise Overlay */}
      <div
        className="fixed inset-0 z-0 w-full h-full pointer-events-none opacity-40"
        style={{
          backgroundImage: `url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.05%22/%3E%3C/svg%3E')`,
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full px-6 py-4 md:px-8 h-16 flex justify-between items-center z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5">
        <Link href="/" className="font-display text-lg font-medium tracking-tight flex items-center gap-2 group">
          <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-bold tracking-tighter rounded-sm group-hover:scale-95 transition-transform duration-300">
            HA
          </div>
          <span className="text-white">
            HAUS
            <span className="text-neutral-500">.FHB</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-lg border border-white/5">
          <button className="px-4 py-1.5 text-xs font-medium text-white bg-white/10 shadow-sm rounded border border-white/5">
            Dashboard
          </button>
          <button className="px-4 py-1.5 text-xs font-medium text-neutral-400 hover:text-white transition-colors">
            Watchlist <span className="ml-1 bg-white/10 px-1.5 py-0.5 rounded-full text-[9px]">4</span>
          </button>
          <button className="px-4 py-1.5 text-xs font-medium text-neutral-400 hover:text-white transition-colors">
            Documents
          </button>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-3 px-3 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5">
            <div className="flex -space-x-2">
              <div className="w-5 h-5 rounded-full bg-neutral-700 border border-[#050505] flex items-center justify-center text-[8px] text-white">
                MK
              </div>
              <div className="w-5 h-5 rounded-full bg-emerald-600 border border-[#050505] flex items-center justify-center">
                <Check className="w-3 h-3 text-white" />
              </div>
            </div>
            <span className="text-[10px] font-mono font-medium text-blue-400">Broker: Online</span>
          </div>
          <button className="relative w-8 h-8 flex items-center justify-center text-neutral-400 hover:text-white transition-colors">
            <Calendar className="w-4 h-4" />
            <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full border border-[#050505]" />
          </button>
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 border border-white/20 flex items-center justify-center text-[10px] text-white font-bold shadow-[0_0_15px_rgba(59,130,246,0.5)]">
            S
          </div>
        </div>
      </nav>

      {/* Main Wrapper */}
      <div className="relative z-10 pt-28 pb-12 px-6 md:px-8 max-w-[1600px] mx-auto space-y-8">

        {/* Hero: Welcome & Roadmap */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="col-span-12 lg:col-span-4">
            <div className="inline-flex items-center gap-2 px-2 py-1 rounded border border-amber-500/20 bg-amber-500/10 text-amber-500 text-[10px] font-mono mb-4">
              <Sparkles className="w-3 h-3" /> FIRST HOME BUYER
            </div>
            <h1 className="text-3xl md:text-4xl font-medium text-white font-display tracking-tight mb-2">
              Good afternoon, <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400">Sarah</span>
            </h1>
            <p className="text-sm text-neutral-400 max-w-md">
              You&apos;re currently in the <strong className="text-white">Hunting Phase</strong>. Your pre-approval is valid for another <span className="text-white">54 days</span>.
            </p>
          </div>

          {/* Progress Stepper */}
          <div className="col-span-12 lg:col-span-8 w-full pb-2">
            <div className="relative">
              {/* Stepper Line */}
              <div className="absolute top-[14px] left-0 w-full h-[2px] bg-neutral-800 z-0" />
              <div
                className="absolute top-[14px] left-0 h-[2px] bg-emerald-500 z-0 transition-all duration-1000"
                style={{ width: "65%" }}
              />

              {/* Steps */}
              <div className="relative z-10 flex justify-between w-full">
                {JOURNEY_STEPS.map((step) => (
                  <JourneyStep key={step.id} step={step} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-12 gap-6 lg:gap-8">

          {/* Left Column: Financial DNA */}
          <div className="col-span-12 lg:col-span-3 space-y-6">
            <BudgetCard budget={BUDGET_INFO} grants={GRANTS} weeklyBudget={weeklyBudget} onBudgetChange={setWeeklyBudget} />
            <CommsWidget contacts={SUPPORT_CONTACTS} />
          </div>

          {/* Middle Column: The Hunt (Watchlist) */}
          <div className="col-span-12 lg:col-span-6 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium text-white font-display flex items-center gap-2">
                <Heart className="w-4 h-4 text-red-500 fill-red-500/20" />
                Your Watchlist
              </h2>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 text-[10px] font-medium text-white bg-white/10 rounded hover:bg-white/15 transition-colors">
                  All (4)
                </button>
                <button className="px-3 py-1.5 text-[10px] font-medium text-neutral-400 hover:text-white transition-colors">
                  Inspection Sat
                </button>
              </div>
            </div>

            {WATCHLIST_PROPERTIES.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          {/* Right Column: Action & Education */}
          <div className="col-span-12 lg:col-span-3 space-y-6">
            <InspectionWidget events={INSPECTION_EVENTS} />
            <DocumentVault documents={DOCUMENTS} />
            <EducationCard article={EDUCATION_ARTICLE} />
          </div>
        </div>
      </div>
    </div>
  )
}

// Preloader Component
function Preloader() {
  return (
    <div className="fixed inset-0 bg-[#050505] z-[10000] flex justify-center items-center">
      <div className="flex flex-col items-center gap-4">
        <span className="font-mono text-[10px] tracking-widest text-neutral-500 uppercase">
          Personalising Dashboard...
        </span>
        <div className="w-[200px] h-[1px] bg-neutral-800 relative overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-full bg-white animate-progress" />
        </div>
      </div>
    </div>
  )
}

// Journey Step Component
function JourneyStep({ step }: { step: JourneyStep }) {
  return (
    <div className={cn(
      "flex flex-col items-center gap-3",
      step.status === "pending" ? "cursor-default opacity-40" : "cursor-pointer"
    )}>
      <div className={cn(
        "w-8 h-8 rounded-full border-4 border-[#050505] flex items-center justify-center relative z-10",
        step.status === "completed" && "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.4)]",
        step.status === "active" && "bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.5)] animate-pulse-slow",
        step.status === "pending" && "bg-[#1a1a1a]"
      )}>
        {step.status === "completed" && <Check className="w-4 h-4 text-black" />}
        {step.status === "active" && step.icon === "search" && <Search className="w-4 h-4" />}
        {step.status === "pending" && step.icon === "key" && <span className="text-[10px] font-mono">{step.id}</span>}
        {step.status === "pending" && !step.icon && <span className="text-[10px] font-mono">{step.id}</span>}
      </div>
      <div className="text-center">
        <div className={cn(
          "text-[10px] font-mono uppercase font-bold mb-1",
          step.status === "completed" && "text-emerald-500",
          step.status === "active" && "text-white",
          step.status === "pending" && "text-neutral-500"
        )}>
          {step.label}
        </div>
        {step.subtitle && (
          <div className="text-[10px] text-neutral-500">
            {step.subtitle}
          </div>
        )}
      </div>
    </div>
  )
}

// Budget Card Component
function BudgetCard({
  budget,
  grants,
  weeklyBudget,
  onBudgetChange
}: {
  budget: BudgetInfo
  grants: GrantInfo[]
  weeklyBudget: number
  onBudgetChange: (value: number) => void
}) {
  const circumference = 2 * Math.PI * 20
  const offset = circumference - (budget.depositPercentage / 100) * circumference

  return (
    <div className="rounded-xl p-5 border border-white/10 bg-[rgba(10,10,10,0.6)] backdrop-blur-md relative overflow-hidden">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xs font-mono uppercase text-neutral-400 tracking-widest">Max Budget</h3>
        <div className="bg-emerald-500/10 border border-emerald-500/20 px-2 py-1 rounded text-[10px] text-emerald-500 font-mono">
          APPROVED
        </div>
      </div>
      <div className="mb-4">
        <span className="text-3xl font-medium text-white font-display tracking-tight">
          {budget.maxBudget}
        </span>
        <p className="text-[11px] text-neutral-500 mt-1">
          Based on {budget.depositSaved} Deposit + Grants
        </p>
      </div>

      {/* Circular Progress */}
      <div className="flex items-center gap-4 bg-white/5 p-3 rounded-lg border border-white/5">
        <div className="relative w-12 h-12 flex-shrink-0">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="24"
              cy="24"
              r="20"
              stroke="#262626"
              strokeWidth="3"
              fill="transparent"
            />
            <circle
              cx="24"
              cy="24"
              r="20"
              stroke="#10b981"
              strokeWidth="3"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              className="transition-all duration-1000"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-[9px] font-mono text-white">
            {budget.depositPercentage}%
          </div>
        </div>
        <div>
          <div className="text-[11px] text-white font-medium">Deposit Ready</div>
          <div className="text-[10px] text-neutral-500">
            {budget.depositSaved} / {budget.depositRequired}
          </div>
        </div>
      </div>

      {/* Grants */}
      {grants.length > 0 && (
        <div className="mt-4 pt-4 border-t border-white/5 space-y-2">
          {grants.map((grant, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <Gift className="w-3 h-3 text-amber-400" />
              <span className="text-[11px] text-neutral-300">{grant.name}</span>
              <span className="ml-auto text-[11px] text-white font-mono capitalize">
                {grant.status}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// Repayment Calculator Component
function RepaymentCalculator({
  weeklyBudget,
  onBudgetChange
}: {
  weeklyBudget: number
  onBudgetChange: (value: number) => void
}) {
  const interestRate = 6.14
  const loanAmount = 730000
  const weeklyRepayment = Math.round((loanAmount * (interestRate / 100 / 52)) / (1 - Math.pow(1 + interestRate / 100 / 52, -30 * 52)))

  return (
    <div className="rounded-xl p-5 border border-white/10 bg-[rgba(10,10,10,0.6)] backdrop-blur-md">
      <h3 className="text-xs font-mono uppercase text-neutral-400 tracking-widest mb-4">
        Repayment Comfort
      </h3>
      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-[10px] text-neutral-400 mb-2">
            <span>Weekly Budget</span>
            <span className="text-white">${weeklyBudget}</span>
          </div>
          <input
            type="range"
            min={500}
            max={2000}
            step={50}
            value={weeklyBudget}
            onChange={(e) => onBudgetChange(parseInt(e.target.value))}
            className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:hover:scale-125"
          />
        </div>
        <div className="p-3 bg-amber-500/5 border border-amber-500/10 rounded-lg flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
          <div>
            <p className="text-[10px] text-amber-200 leading-relaxed">
              Current market rates ({interestRate}%) mean a ${loanAmount.toLocaleString()} loan costs approx{" "}
              <strong className="text-amber-400">${weeklyRepayment}/wk</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Property Card Component
function PropertyCard({ property }: { property: WatchlistProperty }) {
  return (
    <div className="group bg-[#0A0A0A] border border-white/10 hover:border-emerald-500/30 rounded-xl overflow-hidden transition-all duration-300">
      <div className="relative h-48">
        <div
          className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
          style={{ backgroundImage: `url('${property.image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />

        <div className="absolute top-3 left-3 flex gap-2">
          {property.badges.map((badge, idx) => (
            <span
              key={idx}
              className={cn(
                "text-[9px] font-bold px-2 py-1 rounded shadow-lg uppercase tracking-wider",
                badge.color === "emerald" && "bg-emerald-500 text-white",
                badge.color === "amber" && "bg-amber-500 text-black",
                badge.color === "blue" && "bg-black/60 backdrop-blur text-white border border-white/10"
              )}
            >
              {badge.text}
            </span>
          ))}
        </div>
        <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
          <div>
            <div className="text-xl font-medium text-white font-display">
              {property.priceRange}
            </div>
            <div className="text-xs text-neutral-300 font-medium">
              {property.address}, {property.suburb}
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        {/* Features */}
        {property.features.beds > 0 && (
          <div className="grid grid-cols-3 gap-2 mb-4">
            <div className="bg-white/5 rounded p-2 text-center">
              <BedDouble className="w-3 h-3 text-neutral-400 mx-auto mb-1" />
              <span className="text-xs text-white">{property.features.beds} Bed</span>
            </div>
            <div className="bg-white/5 rounded p-2 text-center">
              <Bath className="w-3 h-3 text-neutral-400 mx-auto mb-1" />
              <span className="text-xs text-white">{property.features.baths} Bath</span>
            </div>
            <div className="bg-white/5 rounded p-2 text-center">
              <Car className="w-3 h-3 text-neutral-400 mx-auto mb-1" />
              <span className="text-xs text-white">{property.features.cars} Car</span>
            </div>
          </div>
        )}

        {/* Estimated Repayment */}
        {property.estimatedRepayment && (
          <div className="flex items-center gap-3 bg-emerald-900/10 border border-emerald-500/10 p-2.5 rounded-lg mb-4">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 font-bold text-xs">
              $
            </div>
            <div className="flex-1">
              <div className="text-[10px] text-neutral-400 uppercase tracking-wider">Est. Repayment</div>
              <div className="text-xs font-medium text-white">
                {property.estimatedRepayment.weekly}{" "}
                <span className={cn(
                  "text-[10px]",
                  property.estimatedRepayment.inBudget ? "text-emerald-500" : "text-amber-500"
                )}>
                  ({property.estimatedRepayment.inBudget ? "In Budget" : "Over Budget"})
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Renovation Estimate */}
        {property.renovationEstimate && (
          <div className="flex items-center gap-3 bg-neutral-900 border border-white/5 p-2.5 rounded-lg mb-4">
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 font-bold text-xs">
              <Hammer className="w-3 h-3" />
            </div>
            <div className="flex-1">
              <div className="text-[10px] text-neutral-400 uppercase tracking-wider">Renovation Est.</div>
              <div className="text-xs font-medium text-white">
                {property.renovationEstimate.amount}{" "}
                <span className={cn(
                  "text-[10px]",
                  property.renovationEstimate.budgetStatus === "tight" && "text-amber-500",
                  property.renovationEstimate.budgetStatus === "ok" && "text-emerald-500",
                  property.renovationEstimate.budgetStatus === "comfortable" && "text-blue-500"
                )}>
                  ({property.renovationEstimate.budgetStatus === "tight" && "Tight Budget"})
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-2">
          {property.actions?.map((action, idx) => (
            <button
              key={idx}
              className={cn(
                "py-2 text-xs font-medium rounded transition-colors",
                action.primary
                  ? "flex-1 bg-white text-black hover:bg-neutral-200"
                  : "px-3 bg-white/5 border border-white/10 text-white hover:bg-white/10"
              )}
            >
              {action.icon === "calendar" && <Calendar className="w-4 h-4" />}
              {action.icon === "trash-2" && <Trash2 className="w-4 h-4 text-neutral-500" />}
              {action.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

// Comms Widget Component
function CommsWidget({ contacts }: { contacts: SupportContact[] }) {
  return (
    <div className="rounded-xl p-5 border border-white/10 bg-[rgba(10,10,10,0.6)] backdrop-blur-md">
      <h3 className="text-xs font-mono uppercase text-neutral-400 tracking-widest mb-4">
        Support Team
      </h3>
      <div className="space-y-3">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="flex items-center gap-3 group cursor-pointer hover:bg-white/5 p-2 rounded transition-colors -mx-2"
          >
            <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-[10px] text-white relative">
              {contact.initials}
              {contact.isOnline && (
                <div className="absolute bottom-0 right-0 w-2 h-2 bg-emerald-500 rounded-full border border-[#0A0A0A]" />
              )}
            </div>
            <div className="flex-1">
              <div className="text-xs text-white font-medium">{contact.name}</div>
              <div className={cn(
                "text-[10px]",
                contact.statusColor === "emerald" && "text-emerald-500",
                contact.statusColor === "neutral" && "text-neutral-500"
              )}>
                {contact.role}
              </div>
            </div>
            {contact.actionIcon === "message-square" && (
              <MessageSquare className="w-4 h-4 text-neutral-600 group-hover:text-white transition-colors" />
            )}
            {contact.actionIcon === "file-text" && (
              <FileText className="w-4 h-4 text-neutral-600 group-hover:text-white transition-colors" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

// Inspection Widget Component
function InspectionWidget({ events }: { events: InspectionEvent[] }) {
  return (
    <div className="rounded-xl p-5 border border-white/10 bg-[rgba(10,10,10,0.6)] backdrop-blur-md">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xs font-mono uppercase text-neutral-400 tracking-widest">
          This Saturday
        </h3>
        <span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded text-white">
          {events.length} Homes
        </span>
      </div>
      <div className="relative pl-4 border-l border-white/10 space-y-6">
        {events.map((event, idx) => (
          <div key={event.id} className="relative">
            <div
              className={cn(
                "absolute -left-[-21px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-[#0A0A0A]",
                event.color === "emerald" && "bg-emerald-500",
                event.color === "neutral" && "bg-neutral-600"
              )}
            />
            <div className="text-xs font-medium text-white">
              {event.time}
              {event.timeEnd && ` - ${event.timeEnd}`}
            </div>
            <div className="text-[11px] text-neutral-400 mt-0.5">
              {event.address}
            </div>
            {event.notes && (
              <div className="mt-2 flex gap-2">
                <Link
                  href="#"
                  className="text-[10px] flex items-center gap-1 text-emerald-500 hover:text-emerald-400"
                >
                  <MapPin className="w-3 h-3" /> Directions
                </Link>
              </div>
            )}
            {event.warning && (
              <div className="text-[10px] text-amber-500 mt-1 flex items-center gap-1">
                <AlertTriangle className="w-3 h-3" /> {event.warning}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

// Document Vault Component
function DocumentVault({ documents }: { documents: DocumentItem[] }) {
  return (
    <div className="rounded-xl p-5 border border-white/10 bg-[rgba(10,10,10,0.6)] backdrop-blur-md">
      <h3 className="text-xs font-mono uppercase text-neutral-400 tracking-widest mb-4">
        Document Vault
      </h3>
      <div className="space-y-3">
        {documents.map((doc) => (
          <div
            key={doc.id}
            className={cn(
              "flex items-center justify-between p-2 rounded border cursor-pointer transition-colors",
              doc.status === "complete" && "bg-emerald-500/5 border-emerald-500/10",
              doc.status === "upload-required" && "bg-amber-500/5 border-amber-500/10 hover:bg-amber-500/10"
            )}
          >
            <div className="flex items-center gap-2">
              {doc.status === "complete" && <FileCheck className="w-3 h-3 text-emerald-500" />}
              {doc.status === "upload-required" && <UploadCloud className="w-3 h-3 text-amber-500" />}
              <span className="text-[11px] text-white">{doc.name}</span>
            </div>
            {doc.status === "complete" && <Check className="w-3 h-3 text-emerald-500" />}
            {doc.status === "upload-required" && (
              <span className="text-[9px] text-amber-500 font-mono">UPLOAD</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

// Education Card Component
function EducationCard({ article }: { article: EducationArticle }) {
  return (
    <div className="rounded-xl p-4 bg-gradient-to-br from-indigo-900/20 to-black border border-indigo-500/20 relative overflow-hidden group cursor-pointer hover:border-indigo-500/30 transition-colors">
      <div className="absolute -right-4 -top-4 bg-indigo-500/10 w-24 h-24 rounded-full group-hover:bg-indigo-500/20 transition-colors" />
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <BookOpen className="w-3 h-3 text-indigo-400" />
          <span className="text-[10px] font-mono text-indigo-400 uppercase">
            {article.category}
          </span>
        </div>
        <h4 className="text-sm font-medium text-white mb-1">
          {article.title}
        </h4>
        <p className="text-[10px] text-neutral-400 leading-relaxed mb-3">
          {article.description}
        </p>
        <div className="flex items-center gap-1 text-[10px] text-white font-medium hover:gap-2 transition-all">
          Read Guide <ArrowRight className="w-3 h-3" />
        </div>
      </div>
    </div>
  )
}
