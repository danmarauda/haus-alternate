"use client"

import { useState } from "react"
import Link from "next/link"
import {
  LayoutGrid,
  Edit3,
  Gauge,
  Database,
  GitBranch,
  Compass,
  Eye,
  Search,
  Newspaper,
  Save,
  Layout,
  Settings,
  Bell,
  Radio,
  FileText,
  Star,
  Users,
  Shapes,
  GaugeCircle,
  PanelLeft,
  Sun,
  RotateCw,
  FileOutput,
  Paperclip,
  ArrowUpRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ReputableDashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [timePeriod, setTimePeriod] = useState("Most Recent Data")
  const [query, setQuery] = useState("")

  const navigationSections = [
    {
      title: "Overview",
      items: [
        { name: "Dashboard", icon: Gauge, active: true },
      ],
    },
    {
      title: "Drivers",
      items: [
        { name: "Data", icon: Database },
        { name: "Strategy", icon: GitBranch },
      ],
    },
    {
      title: "Analysis",
      items: [
        { name: "Explore", icon: Compass },
        { name: "Insights", icon: Eye },
      ],
    },
    {
      title: "Monitor",
      items: [
        { name: "Search", icon: Search },
        { name: "News Feed", icon: Newspaper },
        { name: "Saved Searches", icon: Save },
        { name: "Overview", icon: Layout },
        { name: "Manage", icon: Settings },
        { name: "Alerts", icon: Bell },
      ],
    },
    {
      title: "Outputs",
      items: [
        { name: "Channels", icon: Radio },
        { name: "Content", icon: FileText },
      ],
    },
    {
      title: "Outcomes",
      items: [
        { name: "Reputation", icon: Star },
        { name: "Relationships", icon: Users },
        { name: "Themes", icon: Shapes },
        { name: "ROI Optimiser", icon: GaugeCircle },
      ],
    },
  ]

  const keyStatistics = [
    { value: "10k", label: "Website Views", color: "bg-cyan-400" },
    { value: "8k", label: "New IG Followers", color: "bg-cyan-400" },
    { value: "5k", label: "LinkedIn Likes", color: "bg-cyan-400" },
    { value: "3", label: "Media Features", color: "bg-cyan-400" },
    { value: "1", label: "Ongoing Crisis Issue", color: "bg-cyan-400" },
  ]

  const reputationDrivers = [
    { name: "Vision & Leadership", value: 90, color: "bg-cyan-400" },
    { name: "Products & Services", value: 80, color: "bg-sky-400" },
    { name: "Creativity & Innovation", value: 70, color: "bg-indigo-400" },
    { name: "Governance & Ethics", value: 70, color: "bg-cyan-300" },
    { name: "Social Responsibility", value: 55, color: "bg-violet-500" },
    { name: "Workplace & Culture", value: 38, color: "bg-orange-400" },
    { name: "Financial Performance", value: 18, color: "bg-pink-400" },
  ]

  const contentTypes = [
    { name: "Video", value: "20%", color: "bg-cyan-400" },
    { name: "LinkedIn Post", value: "20%", color: "bg-sky-400" },
    { name: "News Segment", value: "20%", color: "bg-indigo-500" },
    { name: "Facebook Post", value: "20%", color: "bg-violet-500" },
    { name: "Intranet Post", value: "20%", color: "bg-pink-400" },
  ]

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside
          className={`${sidebarOpen ? "flex" : "hidden"} lg:flex fixed lg:static inset-y-0 left-0 z-50 shrink-0 w-64 bg-zinc-900 border-r border-zinc-800`}
        >
          <div className="flex flex-col w-full">
            {/* Brand / tools */}
            <div className="px-6 pt-6 pb-4">
              <div className="flex items-center gap-3">
                <div className="relative h-9 w-9">
                  <span className="absolute left-0 top-2 h-3.5 w-3.5 rounded-full bg-cyan-400/80"></span>
                  <span className="absolute left-3 top-0 h-3.5 w-3.5 rounded-full bg-cyan-300/70"></span>
                  <span className="absolute left-5 top-4 h-3.5 w-3.5 rounded-full bg-cyan-500/70"></span>
                </div>
                <div className="ml-auto flex items-center gap-2">
                  <button className="h-8 w-8 flex items-center justify-center rounded-md border border-zinc-700 text-zinc-400 hover:bg-zinc-800">
                    <LayoutGrid className="h-4 w-4" />
                  </button>
                  <button className="h-8 w-8 flex items-center justify-center rounded-md border border-zinc-700 text-zinc-400 hover:bg-zinc-800">
                    <Edit3 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            <nav className="px-4 pb-6 overflow-y-auto flex-1">
              {navigationSections.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                  <div className="px-2 py-3 text-xs uppercase tracking-wide text-zinc-500">
                    {section.title}
                  </div>
                  <ul className="space-y-1 px-2">
                    {section.items.map((item, itemIndex) => {
                      const Icon = item.icon
                      return (
                        <li key={itemIndex}>
                          <Link
                            href="#"
                            className={`flex items-center gap-3 px-3 py-2 rounded-lg ${
                              "active" in item && item.active
                                ? "bg-cyan-400/20 text-zinc-100"
                                : "hover:bg-zinc-800 text-zinc-400"
                            }`}
                          >
                            {"active" in item && item.active ? (
                              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-400 text-white">
                                <Icon className="h-3.5 w-3.5" />
                              </span>
                            ) : (
                              <Icon className="h-5 w-5" />
                            )}
                            <span className="text-sm font-medium">{item.name}</span>
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              ))}
            </nav>
          </div>
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main */}
        <main className="flex-1 flex flex-col">
          {/* Top bar */}
          <header className="h-16 bg-zinc-950">
            <div className="h-full max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
              <div className="flex items-center gap-3 lg:pl-2">
                <button
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-zinc-700 bg-zinc-900"
                >
                  <PanelLeft className="h-5 w-5 text-zinc-400" />
                </button>
                <div className="hidden sm:flex items-center gap-2">
                  <span className="text-2xl font-semibold tracking-tight">Reputable</span>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <button className="h-9 w-9 flex items-center justify-center rounded-full hover:bg-zinc-900 border border-zinc-700">
                  <Search className="h-5 w-5 text-zinc-400" />
                </button>
                <button className="h-9 w-9 flex items-center justify-center rounded-full hover:bg-zinc-900 border border-zinc-700">
                  <Settings className="h-5 w-5 text-zinc-400" />
                </button>
                <button className="h-9 w-9 flex items-center justify-center rounded-full hover:bg-zinc-900 border border-zinc-700">
                  <Sun className="h-5 w-5 text-zinc-400" />
                </button>
                <img
                  src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=80&auto=format&fit=crop"
                  alt=""
                  className="hidden sm:block h-9 w-9 rounded-full object-cover ring-2 ring-zinc-800"
                />
                <div className="h-9 w-9 rounded-full bg-cyan-400 text-zinc-950 flex items-center justify-center text-sm font-medium">
                  JM
                </div>
              </div>
            </div>
          </header>

          {/* Content */}
          <section className="flex-1">
            <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-10">
              {/* Title + Actions */}
              <div className="flex items-start justify-between pt-6">
                <div>
                  <h1 className="text-2xl md:text-[28px] font-semibold tracking-tight">
                    Your Reputation Dashboard
                  </h1>
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <div className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-3.5 py-2 text-sm text-zinc-300">
                      <span className="font-medium">Time Period:</span>
                      <span className="text-zinc-500">{timePeriod}</span>
                    </div>
                    <Button className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-4 py-2 text-sm text-white hover:bg-cyan-600">
                      <RotateCw className="h-4 w-4" />
                      <span className="font-medium">Refresh</span>
                    </Button>
                    <Button className="inline-flex items-center gap-2 rounded-full bg-cyan-600 px-4 py-2 text-sm text-white hover:bg-cyan-700">
                      <FileOutput className="h-4 w-4" />
                      <span className="font-medium">Generate Report</span>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Grid */}
              <div className="mt-8 grid grid-cols-1 xl:grid-cols-12 gap-8">
                {/* Left: Score + Key stats */}
                <div className="xl:col-span-7">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Score */}
                    <div className="lg:col-span-7">
                      <div>
                        <h2 className="text-lg font-semibold tracking-tight">Reputation Score</h2>
                        <p className="text-zinc-500 text-sm mt-1">
                          How do people feel about your company?
                        </p>
                      </div>

                      <div className="mt-6 flex items-center justify-center">
                        {/* Circular segmented dial */}
                        <div className="relative w-[360px] h-[360px] rounded-full overflow-hidden">
                          {/* Base teal dashed all-around */}
                          <div
                            className="absolute inset-0 z-10"
                            style={{
                              background:
                                "repeating-conic-gradient(#22d3ee 0deg 8deg, transparent 8deg 12deg)",
                            }}
                          ></div>
                          {/* White wedge to mimic incomplete ring */}
                          <div
                            className="absolute inset-0 z-20"
                            style={{
                              background:
                                "conic-gradient(transparent 0deg 306deg, #09090b 306deg 360deg)",
                            }}
                          ></div>
                          {/* Inner hole */}
                          <div className="absolute inset-[48px] rounded-full bg-zinc-900 z-30"></div>

                          {/* Center content */}
                          <div className="absolute inset-0 z-40 flex items-center justify-center">
                            <div className="text-center">
                              <div className="text-5xl md:text-6xl font-semibold tracking-tight">
                                85
                              </div>
                              <div className="text-xl md:text-2xl font-medium text-zinc-300 mt-1">
                                Excellent
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Key Statistics */}
                    <div className="lg:col-span-5">
                      <div className="lg:pl-2">
                        <h3 className="text-lg font-semibold tracking-tight">Key Statistics</h3>
                        <div className="mt-6 space-y-6">
                          {keyStatistics.map((stat, index) => (
                            <div key={index}>
                              <div className="text-3xl font-semibold tracking-tight">{stat.value}</div>
                              <div className="text-sm text-zinc-500">{stat.label}</div>
                              <div className={`mt-2 h-0.5 ${stat.color} rounded-full w-24`}></div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Reputation Drivers */}
                <div className="xl:col-span-5">
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight">Reputation Drivers</h3>
                    <p className="text-sm text-zinc-500 mt-1">
                      What do people think about your company?
                    </p>

                    <div className="mt-6 space-y-4">
                      {reputationDrivers.map((driver, index) => (
                        <div key={index}>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-zinc-400">{driver.name}</span>
                            <span className="text-zinc-500">{driver.value}%</span>
                          </div>
                          <div className="mt-2 h-3 w-full rounded-full bg-zinc-800 overflow-hidden">
                            <div
                              className={`h-full ${driver.color} rounded-full`}
                              style={{ width: `${driver.value}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom charts */}
                <div className="xl:col-span-6">
                  <Card className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                    <CardContent className="p-0">
                      <h3 className="text-lg font-semibold tracking-tight">Channels</h3>
                      <p className="text-sm text-zinc-500 mt-1">Your top performing channels.</p>
                      <div className="mt-4">
                        <div className="relative h-64 flex items-center justify-center bg-zinc-800/50 rounded-lg border border-zinc-700">
                          <div className="text-center text-zinc-500">
                            <BarChart className="h-12 w-12 mx-auto mb-3 opacity-50" />
                            <p className="text-sm">Channels Bar Chart</p>
                            <p className="text-xs mt-1">Chart.js placeholder</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="xl:col-span-6">
                  <Card className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                    <CardContent className="p-0">
                      <h3 className="text-lg font-semibold tracking-tight">Content</h3>
                      <p className="text-sm text-zinc-500 mt-1">Your most engaging content.</p>
                      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                        <div className="relative aspect-square">
                          <div className="absolute inset-0 flex items-center justify-center bg-zinc-800/50 rounded-lg border border-zinc-700">
                            <div className="text-center text-zinc-500">
                              <PieChart className="h-12 w-12 mx-auto mb-3 opacity-50" />
                              <p className="text-sm">Content Pie Chart</p>
                            </div>
                          </div>
                        </div>
                        <ul className="space-y-3">
                          {contentTypes.map((type, index) => (
                            <li key={index} className="flex items-center gap-3">
                              <span className={`h-3 w-3 rounded-full ${type.color}`}></span>
                              <span className="text-sm text-zinc-300">
                                {type.name} {type.value}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Ask Reputable */}
              <div className="mt-8">
                <div className="relative max-w-5xl">
                  <div className="rounded-2xl border border-cyan-400/60 bg-zinc-900 shadow-[0_2px_0_0_rgba(0,0,0,0.02)]">
                    <div className="flex items-center gap-3 px-4 sm:px-6 py-4">
                      <Paperclip className="h-5 w-5 text-cyan-400" />
                      <input
                        type="text"
                        placeholder="Ask Reputable"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="w-full outline-none placeholder-zinc-500 text-zinc-200 text-base bg-transparent"
                      />
                      <Button
                        size="icon"
                        className="h-9 w-9 flex items-center justify-center rounded-full bg-cyan-500 text-white hover:bg-cyan-600"
                      >
                        <ArrowUpRight className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

// Placeholder chart icons (these would be replaced with actual Chart.js implementation)
function BarChart({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  )
}

function PieChart({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
      <path d="M22 12A10 10 0 0 0 12 2v10z" />
    </svg>
  )
}
