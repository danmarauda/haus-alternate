"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  Activity,
  AlertCircle,
  AlertOctagon,
  BarChart3,
  BookOpen,
  Bot,
  Briefcase,
  Calendar,
  LineChart,
  Check,
  CheckCircle,
  Circle,
  Compass,
  Download,
  FileText,
  Flag,
  GraduationCap,
  Handshake,
  Hash,
  HelpCircle,
  Key,
  LayoutGrid,
  Link as LinkIcon,
  Lock,
  Mail,
  Map,
  Megaphone,
  Menu,
  Printer,
  Route,
  ServerCog,
  Share2,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Unlock,
  User,
  Users,
  UsersRound,
  X,
  Zap,
  Box,
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function HausV2PRDPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openAccordion, setOpenAccordion] = useState<string | null>(null)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())

  useEffect(() => {
    // Scroll reveal animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]))
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll("section[id]").forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "HAUS v2 PRD",
        url: window.location.href,
      })
    }
  }

  const handleExport = () => {
    window.print()
  }

  const sections = [
    { id: "overview", label: "Overview", icon: BookOpen },
    { id: "problem", label: "Problem", icon: AlertCircle },
    { id: "vision", label: "Vision", icon: Sparkles },
    { id: "personas", label: "Personas", icon: Users },
    { id: "roadmap", label: "Roadmap", icon: Route },
    { id: "features", label: "Features", icon: LayoutGrid },
    { id: "nfr", label: "NFRs", icon: ShieldCheck },
    { id: "tech", label: "Tech", icon: ServerCog },
    { id: "metrics", label: "Metrics", icon: LineChart },
    { id: "gtm", label: "GTM", icon: Megaphone },
    { id: "risks", label: "Risks", icon: ShieldAlert },
  ]

  const navLinks = [
    "Overview",
    "Personas",
    "Roadmap",
    "Features",
    "Metrics",
    "Risks",
  ]

  const features = [
    {
      id: "academy",
      title: "HAUS Academy (FTHB)",
      description: "Guided journey, affordability, document vault",
      icon: GraduationCap,
      gradient: "from-emerald-500/20 to-teal-500/20",
      ring: "ring-emerald-500/30",
      iconColor: "text-emerald-400",
      capabilities: [
        "Gamified modules end-to-end",
        "True affordability incl. fees",
        "Document vault + readiness checklist",
      ],
      success: [
        "Complete journey",
        "Realistic budget generated",
        "Pre-approval steps clear",
      ],
    },
    {
      id: "open",
      title: "HAUS Open (Homeowners)",
      description: 'Anonymous "would-sell-for" price + verification',
      icon: Unlock,
      gradient: "from-amber-500/20 to-orange-500/20",
      ring: "ring-amber-500/30",
      iconColor: "text-amber-400",
      capabilities: [
        'Anonymous price signal in <2 min',
        "Ownership verification",
        "Alerts on qualified interest",
      ],
      success: [
        "Identity remains private",
        "Actionable notifications",
      ],
    },
    {
      id: "pro",
      title: "HAUS Pro (Agent SaaS)",
      description: "AI CRM, HITL assistant, compliance dashboards",
      icon: Briefcase,
      gradient: "from-violet-500/20 to-purple-500/20",
      ring: "ring-violet-500/30",
      iconColor: "text-violet-400",
      capabilities: [
        "Lead dashboard + routing",
        "AI comms drafts (human approval)",
        "Compliant logs & reports",
      ],
      success: [],
    },
  ]

  return (
    <div className="min-h-screen bg-[#050505] text-neutral-200 font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none grid-bg" />

      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 h-16 flex items-center">
          <div className="w-full flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-bold tracking-tighter rounded-sm font-display">
                H.
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="px-3 py-1.5 text-xs font-medium text-neutral-400 hover:text-white hover:bg-white/5 rounded-full transition font-mono uppercase"
                >
                  {link}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={handleShare}
                className="text-xs font-mono text-neutral-400 hover:text-white uppercase transition flex items-center gap-2"
              >
                <Share2 className="h-3.5 w-3.5" />
                Share
              </button>
              <button
                onClick={handleExport}
                className="bg-white text-black text-xs font-medium px-4 py-2 rounded hover:bg-neutral-200 transition font-mono uppercase flex items-center gap-2"
              >
                <Download className="h-3.5 w-3.5" />
                Export
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5 text-white" />
              ) : (
                <Menu className="h-5 w-5 text-white" />
              )}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden pb-4">
              <div className="rounded-xl bg-neutral-900/90 ring-1 ring-white/10 backdrop-blur p-2 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="block px-3 py-2 text-sm rounded-lg hover:bg-white/5 transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link}
                  </a>
                ))}
                <div className="grid grid-cols-2 gap-2 mt-2 pt-2 border-t border-white/5">
                  <button
                    onClick={handleShare}
                    className="flex items-center justify-center gap-2 rounded-lg bg-white/5 hover:bg-white/10 px-3 py-2 text-xs font-medium"
                  >
                    <Share2 className="h-3.5 w-3.5" />
                    Share
                  </button>
                  <button
                    onClick={handleExport}
                    className="flex items-center justify-center gap-2 rounded-lg bg-white text-neutral-900 px-3 py-2 text-xs font-medium"
                  >
                    <Download className="h-3.5 w-3.5" />
                    Export
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-28 pb-12 z-10">
        <div className="mx-auto px-6 md:px-8 max-w-[1440px]">
          <div className="mx-auto text-center">
            <div className="inline-flex items-center justify-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 ring-1 ring-emerald-500/20 px-3 py-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span className="text-xs font-medium text-emerald-300 tracking-wide">
                  PRD APPROVED
                </span>
              </div>
            </div>

            <h1 className="text-white font-semibold tracking-tighter text-4xl md:text-6xl lg:text-7xl mt-6 font-display">
              HAUS v2
              <span className="block mt-2">The Property Access OS</span>
            </h1>

            <p className="text-neutral-400 mt-6 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
              A demand-triggered roadmap and AI-native platform that unlocks
              off-market supply, guides first-time buyers, and empowers agents.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs md:text-sm">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-white/10 px-4 py-1.5 text-neutral-300">
                <Hash className="h-3.5 w-3.5 text-neutral-400" />
                Version 2.0
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-white/10 px-4 py-1.5 text-neutral-300">
                <User className="h-3.5 w-3.5 text-neutral-400" />
                Owner: ALIAS
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-white/10 px-4 py-1.5 text-neutral-300">
                <Calendar className="h-3.5 w-3.5 text-neutral-400" />
                Sept 2025
              </div>
            </div>
          </div>

          {/* Highlight Stats */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              {
                label: "North Star",
                value: "Weekly Active Engaged Users",
                icon: Activity,
                color: "emerald",
              },
              {
                label: "Wedge Strategy",
                value: "First-Time Home Buyers",
                icon: Flag,
                color: "sky",
              },
              {
                label: "Defensive Moat",
                value: '"Open to Offers" Network',
                icon: Lock,
                color: "purple",
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="group rounded-2xl bg-neutral-900/40 hover:bg-neutral-900/60 ring-1 ring-white/10 p-5 backdrop-blur-sm transition"
              >
                <div className="text-xs font-medium tracking-wider text-neutral-500 uppercase">
                  {stat.label}
                </div>
                <div className="mt-2 flex items-center gap-3">
                  <div
                    className={cn(
                      "p-2 rounded-lg",
                      `bg-${stat.color}-500/10 ring-1 ring-${stat.color}-500/20`
                    )}
                  >
                    <stat.icon className={`h-4 w-4 text-${stat.color}-400`} />
                  </div>
                  <span className="text-neutral-200 text-sm font-medium">
                    {stat.value}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Sticky Page Outline */}
          <div className="mt-12 sticky top-[65px] z-40 bg-black/80 backdrop-blur-xl border-y border-white/10 py-3 -mx-6 px-6 md:-mx-8 md:px-8">
            <div className="w-full overflow-x-auto no-scrollbar">
              <div className="inline-flex gap-2 min-w-max">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="inline-flex items-center gap-2 rounded-full bg-white/5 hover:bg-white/10 ring-1 ring-white/10 px-3 py-1.5 text-xs text-neutral-300 transition"
                  >
                    <section.icon className="h-3.5 w-3.5" />
                    {section.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="relative z-10 mx-auto px-6 md:px-8 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-[1440px]">
        {/* Content Column */}
        <div className="lg:col-span-8 space-y-8">
          {/* Overview */}
          <section
            id="overview"
            className={cn(
              "rounded-3xl bg-neutral-900/40 ring-1 ring-white/5 p-6 md:p-8 backdrop-blur-md transition-all duration-700",
              visibleSections.has("overview")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            )}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl text-white tracking-tight font-semibold font-display">
                  Executive Summary
                </h2>
                <p className="text-neutral-400 mt-4 leading-relaxed text-sm md:text-base">
                  HAUS v2 pivots from simple search to a Property Access OS. It
                  focuses on first-time buyers, discreet off-market supply, and an
                  AI-powered agent suite. AI assists; humans decide. Partner with
                  agents, default to trust, ship and learn.
                </p>
              </div>
              <div className="h-10 w-10 shrink-0 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 ring-1 ring-white/10 flex items-center justify-center">
                <FileText className="h-5 w-5 text-neutral-400" />
              </div>
            </div>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: "Mission", value: "Make access & ownership attainable" },
                {
                  label: "Flywheel",
                  value: "FTHB demand → Off-market supply → HAUS Pro agents",
                },
                { label: "North Star", value: "Weekly Active Engaged Users" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl bg-white/5 ring-1 ring-white/5 p-4 hover:bg-white/10 transition"
                >
                  <div className="text-[10px] uppercase tracking-wider text-neutral-500 font-semibold">
                    {item.label}
                  </div>
                  <div className="mt-1 text-sm text-neutral-200">{item.value}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Problem */}
          <section
            id="problem"
            className={cn(
              "rounded-3xl bg-neutral-900/40 ring-1 ring-white/5 p-6 md:p-8 backdrop-blur-md transition-all duration-700",
              visibleSections.has("problem")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            )}
          >
            <div className="flex items-start justify-between">
              <h2 className="text-2xl text-white tracking-tight font-semibold font-display">
                The Problem
              </h2>
              <AlertOctagon className="h-5 w-5 text-rose-400/80" />
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  title: "First-Time Buyers",
                  description:
                    "Black-box process, hidden costs, 124+ hrs searching; anxiety and low confidence.",
                },
                {
                  title: "Sellers",
                  description:
                    'No discreet way to test demand; "shadow inventory" remains locked.',
                },
                {
                  title: "Agents",
                  description:
                    "Low-value prospecting, missed calls, admin overhead; poor CX, burnout.",
                },
              ].map((problem) => (
                <div
                  key={problem.title}
                  className="rounded-2xl bg-neutral-900/50 ring-1 ring-white/5 p-5"
                >
                  <div className="text-sm font-medium text-white">
                    {problem.title}
                  </div>
                  <p className="text-neutral-400 text-xs mt-2 leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Vision */}
          <section
            id="vision"
            className={cn(
              "rounded-3xl bg-neutral-900/40 ring-1 ring-white/5 p-6 md:p-8 backdrop-blur-md transition-all duration-700",
              visibleSections.has("vision")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            )}
          >
            <div className="flex items-start justify-between">
              <h2 className="text-2xl text-white tracking-tight font-semibold font-display">
                Vision & Solution
              </h2>
              <Sparkles className="h-5 w-5 text-amber-300" />
            </div>
            <p className="text-neutral-400 mt-4 leading-relaxed text-sm md:text-base">
              An integrated OS for property access. AI predicts and advises;
              community turns transactions into relationships; accessibility
              unlocks pathways to ownership.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                { label: "Intelligence", icon: Bot, color: "indigo" },
                { label: "Community", icon: Handshake, color: "emerald" },
                { label: "Accessibility", icon: Key, color: "rose" },
              ].map((tag) => (
                <span
                  key={tag.label}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full",
                    `bg-${tag.color}-500/10 ring-1 ring-${tag.color}-500/20`,
                    `px-3 py-1 text-xs font-medium text-${tag.color}-300`
                  )}
                >
                  <tag.icon className="h-3.5 w-3.5" />
                  {tag.label}
                </span>
              ))}
            </div>
          </section>

          {/* Personas */}
          <section
            id="personas"
            className={cn(
              "rounded-3xl bg-neutral-900/40 ring-1 ring-white/5 p-6 md:p-8 backdrop-blur-md transition-all duration-700",
              visibleSections.has("personas")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            )}
          >
            <div className="flex items-start justify-between">
              <h2 className="text-2xl text-white tracking-tight font-semibold font-display">
                Personas
              </h2>
              <UsersRound className="h-5 w-5 text-sky-400/80" />
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  name: "Priya — FTHB",
                  badge: "Primary",
                  badgeColor: "emerald",
                  description:
                    "28–35, DINK, anxious but optimistic; wants a step-by-step plan to buy with confidence.",
                  tags: ["Guided journey", "True affordability"],
                },
                {
                  name: "Mark — Homeowner",
                  badge: "Supply",
                  badgeColor: "amber",
                  description:
                    "45–55, curious to sell privately; wants a discreet \"would-sell-for\" signal.",
                  tags: ["Anonymous", "Verification"],
                },
                {
                  name: "Chloe — Agent",
                  badge: "Pro",
                  badgeColor: "violet",
                  description:
                    "30–40, time-poor; wants qualified, transaction-ready leads and AI comms assistant.",
                  tags: ["Lead routing", "Compliance logs"],
                },
              ].map((persona) => (
                <div
                  key={persona.name}
                  className="rounded-2xl bg-neutral-900/50 ring-1 ring-white/5 p-5"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-sm font-medium text-white">
                      {persona.name}
                    </div>
                    <span
                      className={cn(
                        "inline-flex items-center gap-1 text-[10px] font-medium",
                        `bg-${persona.badgeColor}-400/10 text-${persona.badgeColor}-400`,
                        "px-2 py-0.5 rounded-full"
                      )}
                    >
                      {persona.badge}
                    </span>
                  </div>
                  <p className="text-neutral-400 text-xs leading-relaxed">
                    {persona.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {persona.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-[10px] font-medium text-neutral-300 rounded-md bg-white/5 ring-1 ring-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Roadmap */}
          <section
            id="roadmap"
            className={cn(
              "rounded-3xl bg-neutral-900/40 ring-1 ring-white/5 p-6 md:p-8 backdrop-blur-md transition-all duration-700",
              visibleSections.has("roadmap")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            )}
          >
            <div className="flex items-start justify-between">
              <h2 className="text-2xl text-white tracking-tight font-semibold font-display">
                Demand-Triggered Roadmap
              </h2>
              <Route className="h-5 w-5 text-teal-300" />
            </div>
            <p className="text-neutral-400 mt-4 leading-relaxed text-sm md:text-base">
              Progress via market signals, not dates. Each phase unlocks the next
              upon meeting explicit demand criteria.
            </p>

            <div className="mt-8 space-y-4">
              {[
                {
                  phase: 0,
                  title: "Foundation",
                  description: "Core multi-tenant infra, data model, compliance rails.",
                  status: "Stable",
                  statusColor: "emerald",
                  icon: CheckCircle,
                  items: [
                    { label: "Core Platform", value: "Next.js/Expo, Convex, Clerk" },
                    { label: "Data Model", value: "Users, Orgs, Properties" },
                    { label: "Compliance", value: "APP 8/11 gates, retention" },
                  ],
                  active: false,
                },
                {
                  phase: 1,
                  title: "Wedge — FTHB Academy & Open",
                  description: "Engage FTHBs; unlock off-market supply via price signals.",
                  status: "Active",
                  statusColor: "sky",
                  icon: Zap,
                  items: [
                    { label: "HAUS Academy", value: "Gamified journey to readiness" },
                    { label: "HAUS Open", value: 'Anonymous "would-sell-for"' },
                    {
                      label: "Trigger for P2",
                      value: "1k Academy & 500 Open homes",
                      highlight: true,
                    },
                  ],
                  active: true,
                },
                {
                  phase: 2,
                  title: "Flywheel — HAUS Pro & Marketplace v1",
                  description: "Agent SaaS + secure messaging & offer management.",
                  status: "",
                  statusColor: "",
                  icon: null,
                  items: [
                    { label: "HAUS Pro", value: "AI CRM, HITL comms" },
                    { label: "Marketplace v1", value: "Qualified buyers ↔ Homeowners" },
                    { label: "Trigger for P3", value: "200+ agents waitlist" },
                  ],
                  active: false,
                  opacity: true,
                },
                {
                  phase: 3,
                  title: "Ecosystem — Finance & Services",
                  description: "Integrated pre-approval, partner lenders, curated services.",
                  status: "",
                  statusColor: "",
                  icon: null,
                  items: [
                    { label: "Embedded Finance", value: "In-app mortgage & bridging" },
                    { label: "Vendor Market", value: "Vetted service ecosystem" },
                    { label: "Scale", value: "National rollout" },
                  ],
                  active: false,
                  opacity: true,
                },
              ].map((phase) => (
                <div
                  key={phase.phase}
                  className={cn(
                    "rounded-2xl ring-1 ring-white/5 bg-neutral-900/50 p-5 relative overflow-hidden",
                    phase.opacity && "opacity-60 hover:opacity-100 transition"
                  )}
                >
                  {phase.active && (
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-sky-400 to-indigo-500" />
                  )}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span
                        className={cn(
                          "inline-flex h-7 w-7 items-center justify-center rounded-lg",
                          phase.active
                            ? "bg-sky-500/10 ring-1 ring-sky-500/20 text-sky-400"
                            : "bg-neutral-800 ring-1 ring-white/10 text-neutral-400",
                          "text-xs font-mono"
                        )}
                      >
                        {phase.phase}
                      </span>
                      <div>
                        <h3 className="text-white text-base font-medium">
                          {phase.title}
                        </h3>
                        <p className="text-neutral-400 text-xs mt-0.5">
                          {phase.description}
                        </p>
                      </div>
                    </div>
                    {phase.status && (
                      <span
                        className={cn(
                          "inline-flex items-center gap-1.5 text-[10px] font-medium",
                          `bg-${phase.statusColor}-500/10 text-${phase.statusColor}-400`,
                          "px-2.5 py-1 rounded-full ring-1 ring-emerald-500/20"
                        )}
                      >
                        {phase.icon && <phase.icon className="h-3 w-3" />}
                        {phase.status}
                      </span>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {phase.items.map((item) => (
                      <div
                        key={item.label}
                        className={cn(
                          "rounded-xl bg-black/20 p-3",
                          "highlight" in item && item.highlight &&
                            "bg-sky-500/5 ring-1 ring-sky-500/10 text-sky-200"
                        )}
                      >
                        <div
                          className={cn(
                            "text-[10px] uppercase tracking-wider font-semibold",
                            "highlight" in item && item.highlight ? "text-sky-400/80" : "text-neutral-500"
                          )}
                        >
                          {item.label}
                        </div>
                        <div
                          className={cn(
                            "text-xs mt-1",
                            "highlight" in item && item.highlight ? "text-sky-200" : "text-neutral-300"
                          )}
                        >
                          {item.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Features */}
          <section
            id="features"
            className={cn(
              "rounded-3xl bg-neutral-900/40 ring-1 ring-white/5 p-6 md:p-8 backdrop-blur-md transition-all duration-700",
              visibleSections.has("features")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            )}
          >
            <div className="flex items-start justify-between">
              <h2 className="text-2xl text-white tracking-tight font-semibold font-display">
                Feature Breakdown
              </h2>
              <LayoutGrid className="h-5 w-5 text-indigo-300" />
            </div>

            <div className="mt-8 space-y-4">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className="rounded-2xl bg-neutral-900/50 ring-1 ring-white/5 overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setOpenAccordion(
                        openAccordion === feature.id ? null : feature.id
                      )
                    }
                    className="w-full flex items-center justify-between px-5 py-4 hover:bg-white/5 transition"
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={cn(
                          "inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br",
                          feature.gradient,
                          feature.ring
                        )}
                      >
                        <feature.icon
                          className={cn("h-5 w-5", feature.iconColor)}
                        />
                      </span>
                      <div className="text-left">
                        <div className="text-sm font-medium text-white">
                          {feature.title}
                        </div>
                        <div className="text-xs text-neutral-400 mt-0.5">
                          {feature.description}
                        </div>
                      </div>
                    </div>
                    <div
                      className={cn(
                        "h-5 w-5 text-neutral-500 transition-transform duration-200",
                        openAccordion === feature.id && "rotate-180"
                      )}
                    >
                      ▼
                    </div>
                  </button>
                  {openAccordion === feature.id && (
                    <div className="px-5 pb-5 pt-0 border-t border-white/5 mt-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="rounded-xl bg-black/20 p-4">
                          <div className="text-[10px] uppercase tracking-wider text-neutral-500 font-semibold mb-3">
                            Key Capabilities
                          </div>
                          <ul className="space-y-2.5">
                            {feature.capabilities.map((cap, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-xs text-neutral-300"
                              >
                                <Check className="h-3.5 w-3.5 text-emerald-400 mt-0.5" />
                                {cap}
                              </li>
                            ))}
                          </ul>
                        </div>
                        {feature.success.length > 0 && (
                          <div className="rounded-xl bg-black/20 p-4">
                            <div className="text-[10px] uppercase tracking-wider text-neutral-500 font-semibold mb-3">
                              Success Criteria
                            </div>
                            <ul className="space-y-2.5">
                              {feature.success.map((crit, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-2 text-xs text-neutral-300"
                                >
                                  <Circle className="h-3.5 w-3.5 text-neutral-500 mt-0.5" />
                                  {crit}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* NFRs */}
          <section
            id="nfr"
            className={cn(
              "rounded-3xl bg-neutral-900/40 ring-1 ring-white/5 p-6 md:p-8 backdrop-blur-md transition-all duration-700",
              visibleSections.has("nfr")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            )}
          >
            <div className="flex items-start justify-between">
              <h2 className="text-2xl text-white tracking-tight font-semibold font-display">
                Non-Functional Requirements
              </h2>
              <ShieldCheck className="h-5 w-5 text-emerald-300" />
            </div>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: Lock,
                  title: "Security & Privacy",
                  items: [
                    "SOC2 Type II ready infra",
                    "PII encryption at rest",
                    "Role-based access (RBAC)",
                  ],
                },
                {
                  icon: Zap,
                  title: "Performance",
                  items: [
                    "<100ms API response p95",
                    "Core Web Vitals green",
                    "Offline-first mobile capability",
                  ],
                },
              ].map((section) => (
                <div
                  key={section.title}
                  className="rounded-2xl bg-neutral-900/50 ring-1 ring-white/5 p-4"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <section.icon className="h-3.5 w-3.5 text-neutral-400" />
                    <span className="text-sm font-medium text-white">
                      {section.title}
                    </span>
                  </div>
                  <ul className="space-y-1.5">
                    {section.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs text-neutral-400"
                      >
                        <span className="h-1 w-1 rounded-full bg-emerald-500 mt-1.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Metrics */}
          <section
            id="metrics"
            className={cn(
              "rounded-3xl bg-neutral-900/40 ring-1 ring-white/5 p-6 md:p-8 backdrop-blur-md transition-all duration-700",
              visibleSections.has("metrics")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            )}
          >
            <div className="flex items-start justify-between">
              <h2 className="text-2xl text-white tracking-tight font-semibold font-display">
                Success Metrics (KPIs)
              </h2>
              <BarChart3 className="h-5 w-5 text-emerald-300" />
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { label: "North Star", value: "Weekly Active Engaged Users" },
                { label: "Acquisition", value: "Cost per FTHB / Open property" },
                { label: "Retention", value: "30/90-day retention • Agent churn" },
                { label: "Revenue", value: "MRR (Pro), Take rate, LTV" },
              ].map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl bg-neutral-900/50 ring-1 ring-white/5 p-4 text-center md:text-left"
                >
                  <div className="text-[10px] uppercase tracking-wider text-neutral-500 font-semibold">
                    {metric.label}
                  </div>
                  <div className="text-sm text-neutral-200 mt-2 font-medium">
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-neutral-900/50 ring-1 ring-white/5 p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm font-medium text-white">
                  WAEU Growth Projection
                </div>
                <div className="text-xs text-emerald-400 inline-flex items-center gap-1 bg-emerald-500/10 px-2 py-0.5 rounded-full ring-1 ring-emerald-500/20">
                  <TrendingUp className="h-3 w-3" />
                  +18% MoM
                </div>
              </div>
              <div className="w-full h-56 flex items-end justify-between gap-2">
                {[420, 460, 480, 520, 590, 610, 680, 720].map((value, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-emerald-500/20 to-transparent rounded-t relative group"
                    style={{ height: `${(value / 720) * 100}%` }}
                  >
                    <div className="absolute bottom-0 w-full bg-emerald-400/30 group-hover:bg-emerald-400/50 transition-colors" />
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-2 text-[10px] text-neutral-500">
                {["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"].map((label) => (
                  <span key={label}>{label}</span>
                ))}
              </div>
            </div>
          </section>

          {/* Tech Stack */}
          <section
            id="tech"
            className={cn(
              "rounded-3xl bg-neutral-900/40 ring-1 ring-white/5 p-6 md:p-8 backdrop-blur-md transition-all duration-700",
              visibleSections.has("tech")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            )}
          >
            <div className="flex items-start justify-between">
              <h2 className="text-2xl text-white tracking-tight font-semibold font-display">
                Tech Stack
              </h2>
              <Box className="h-5 w-5 text-cyan-300" />
            </div>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { label: "Frontend", value: "Next.js, Expo" },
                { label: "Backend", value: "Convex" },
                { label: "Auth", value: "Clerk" },
                { label: "AI Agents", value: "Mastra + LLMs" },
                { label: "Notifications", value: "Novu" },
                { label: "Infrastructure", value: "Vercel" },
              ].map((tech) => (
                <div
                  key={tech.label}
                  className="rounded-xl bg-neutral-900/50 ring-1 ring-white/5 p-4"
                >
                  <div className="text-[10px] uppercase tracking-wider text-neutral-500 font-semibold">
                    {tech.label}
                  </div>
                  <div className="text-sm text-neutral-200 mt-1">{tech.value}</div>
                </div>
              ))}
            </div>
          </section>

          {/* GTM */}
          <section
            id="gtm"
            className={cn(
              "rounded-3xl bg-neutral-900/40 ring-1 ring-white/5 p-6 md:p-8 backdrop-blur-md transition-all duration-700",
              visibleSections.has("gtm")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            )}
          >
            <div className="flex items-start justify-between">
              <h2 className="text-2xl text-white tracking-tight font-semibold font-display">
                Go-To-Market (GTM)
              </h2>
              <Megaphone className="h-5 w-5 text-rose-300" />
            </div>
            <div className="mt-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    phase: "Phase 1: Supply",
                    title: "Claim Your Home",
                    description:
                      "Direct mail & social to homeowners inviting them to set a silent price.",
                  },
                  {
                    phase: "Phase 2: Demand",
                    title: "FTHB Academy",
                    description:
                      "Free course on purchasing. Graduates unlock off-market inventory.",
                  },
                  {
                    phase: "Phase 3: Density",
                    title: "City Launch",
                    description:
                      "Focus liquidity on 3 core suburbs. 20% penetration target.",
                  },
                ].map((item) => (
                  <div
                    key={item.phase}
                    className="rounded-xl bg-neutral-900/50 ring-1 ring-white/5 p-4"
                  >
                    <div className="text-[10px] uppercase tracking-wider text-neutral-500 font-semibold">
                      {item.phase}
                    </div>
                    <div className="mt-2 text-sm text-white font-medium">
                      {item.title}
                    </div>
                    <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Risks & Questions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section
              id="risks"
              className={cn(
                "rounded-3xl bg-neutral-900/40 ring-1 ring-white/5 p-6 backdrop-blur-md transition-all duration-700",
                visibleSections.has("risks")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              )}
            >
              <div className="flex items-center gap-3 mb-4">
                <ShieldAlert className="h-5 w-5 text-red-400/80" />
                <h3 className="text-lg font-medium text-white">Top Risks</h3>
              </div>
              <ul className="space-y-3">
                {[
                  {
                    title: "Cold Start Problem",
                    mitigation: "Mitigation: Demand before supply via Academy wedge.",
                  },
                  {
                    title: "Competitive Response",
                    mitigation:
                      "Mitigation: Proprietary 'Open to Offers' data moat.",
                  },
                ].map((risk) => (
                  <li key={risk.title} className="text-xs text-neutral-400">
                    <strong className="block text-neutral-200 mb-0.5">
                      {risk.title}
                    </strong>
                    {risk.mitigation}
                  </li>
                ))}
              </ul>
            </section>

            <section
              id="questions"
              className={cn(
                "rounded-3xl bg-neutral-900/40 ring-1 ring-white/5 p-6 backdrop-blur-md transition-all duration-700",
                visibleSections.has("questions")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              )}
            >
              <div className="flex items-center gap-3 mb-4">
                <HelpCircle className="h-5 w-5 text-neutral-400" />
                <h3 className="text-lg font-medium text-white">Open Questions</h3>
              </div>
              <ul className="space-y-3 list-disc list-inside text-xs text-neutral-400">
                <li>Optimal pricing for HAUS Pro tiers?</li>
                <li>Which partner lenders to approach first?</li>
                <li>Acquisition channel for first 1,000 Open homes?</li>
              </ul>
            </section>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-4">
          <div className="sticky top-32 space-y-4">
            <div className="rounded-3xl bg-neutral-900/40 ring-1 ring-white/5 p-6 backdrop-blur-md">
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm font-medium text-white">Doc Status</div>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-medium px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Approved
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-white/5 p-3">
                  <div className="text-[10px] uppercase tracking-wider text-neutral-500 font-semibold">
                    Segment
                  </div>
                  <div className="text-sm text-neutral-200 mt-1">FTHB</div>
                </div>
                <div className="rounded-xl bg-white/5 p-3">
                  <div className="text-[10px] uppercase tracking-wider text-neutral-500 font-semibold">
                    Priority
                  </div>
                  <div className="text-sm text-neutral-200 mt-1">High</div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-white/5">
                <div className="text-[10px] uppercase tracking-wider text-neutral-500 font-semibold mb-3">
                  Quick Actions
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => navigator.clipboard.writeText(window.location.href)}
                    className="flex items-center justify-center gap-2 rounded-lg bg-white/5 hover:bg-white/10 ring-1 ring-white/10 px-3 py-2 text-xs text-neutral-300 transition"
                  >
                    <LinkIcon className="h-3.5 w-3.5" />
                    Copy
                  </button>
                  <button
                    onClick={handleExport}
                    className="flex items-center justify-center gap-2 rounded-lg bg-white/5 hover:bg-white/10 ring-1 ring-white/10 px-3 py-2 text-xs text-neutral-300 transition"
                  >
                    <Printer className="h-3.5 w-3.5" />
                    PDF
                  </button>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-neutral-900/40 ring-1 ring-white/5 p-6 backdrop-blur-md hidden lg:block">
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm font-medium text-white">
                  Guiding Principles
                </div>
                <Compass className="h-4 w-4 text-neutral-500" />
              </div>
              <ul className="space-y-3">
                {[
                  "AI amplifies; humans decide.",
                  "Partner with agents, don't replace.",
                  "Solve FTHB first.",
                  "Ship → Observe → Improve.",
                ].map((principle) => (
                  <li key={principle} className="flex items-start gap-2.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-1.5" />
                    <span className="text-xs text-neutral-300 leading-relaxed">
                      {principle}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      </main>

      {/* Footer */}
      <footer className="w-full bg-black border-t border-white/10 pt-12 pb-8 px-6 relative z-10">
        <div className="mx-auto px-6 md:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4 max-w-[1440px]">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-white text-black flex items-center justify-center font-bold text-xs rounded-sm font-display">
              H.
            </div>
            <span className="text-sm font-medium text-white tracking-tight">
              HAUS
            </span>
          </div>
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} HAUS. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-xs text-neutral-400 hover:text-white transition"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-xs text-neutral-400 hover:text-white transition"
            >
              Terms
            </a>
            <a
              href="mailto:hello@haus.app"
              className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-xs text-neutral-300 ring-1 ring-white/10 hover:bg-white/10 transition"
            >
              <Mail className="h-3 w-3" />
              hello@haus.app
            </a>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        .grid-bg {
          background-image: linear-gradient(
              rgba(255, 255, 255, 0.03) 1px,
              transparent 1px
            ),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          mask-image: radial-gradient(circle at center, black 40%, transparent 100%);
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}
