"use client"

/**
 * Component Showcase Page
 *
 * @description
 * Interactive showcase of all HAUS pages and components converted
 * from HTML to Next.js with shadcn/ui.
 *
 * @features
 * - Page catalog with categories
 * - Search and filter functionality
 * - Visual cards with badges
 * - Category filtering
 * - Responsive grid layout
 */

import { useState, useCallback, useMemo } from "react"
import Link from "next/link"
import {
  Home,
  LayoutGrid,
  Users,
  Building2,
  TrendingUp,
  MessageSquare,
  Search,
  Mic,
  Smartphone,
  Star,
  ArrowRight,
  File,
} from "lucide-react"
import { Suspense } from "react"
import { Shell } from "@/components/shell"
import { ErrorBoundary } from "@/components/error-boundary"
import { PageLoader } from "@/components/page-loader"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"


interface NavItem {
  title: string
  href: string
  description: string
  icon: React.ElementType
  badge?: string
  category: "landing" | "core" | "enterprise" | "component" | "auth"
}

const navItems: NavItem[] = [
  // Landing Pages
  {
    title: "Landing Page 1",
    href: "/landing-1",
    description: "GSAP animations, dark theme with smooth transitions",
    icon: Home,
    badge: "GSAP",
    category: "landing",
  },
  {
    title: "Landing Page 2",
    href: "/landing-2",
    description: "Geist font, voice-first AI platform with iOS mockups",
    icon: Mic,
    badge: "Voice AI",
    category: "landing",
  },
  {
    title: "Landing Page 3",
    href: "/landing-3",
    description: "Light theme, clean design with transparency focus",
    icon: LayoutGrid,
    badge: "Light",
    category: "landing",
  },
  {
    title: "Landing Page 4",
    href: "/landing-4",
    description: "Spline particles, dark theme with modern aesthetic",
    icon: Star,
    badge: "3D",
    category: "landing",
  },

  // Core Features
  {
    title: "Advisory Network",
    href: "/advisory",
    description: "Elite advisor directory with search and filtering",
    icon: Users,
    category: "core",
  },
  {
    title: "My Feed",
    href: "/feed",
    description: "Personalized property feed and schedule",
    icon: MessageSquare,
    category: "core",
  },
  {
    title: "Agent Pipeline",
    href: "/agent-pipeline",
    description: "Kanban board for deal management",
    icon: TrendingUp,
    badge: "Kanban",
    category: "core",
  },
  {
    title: "Buyer Profile",
    href: "/buyer-profile",
    description: "Comprehensive buyer preferences and forms",
    icon: File,
    category: "core",
  },

  // Enterprise
  {
    title: "Enterprise AI",
    href: "/enterprise",
    description: "B2B AI platform with advanced analytics",
    icon: Building2,
    badge: "B2B",
    category: "enterprise",
  },

  // Components
  {
    title: "Mobile Voice Assistant",
    href: "/components/mobile-voice-assistant",
    description: "Web Speech API integration with themes",
    icon: Mic,
    badge: "Component",
    category: "component",
  },
  {
    title: "Mobile Storyboard",
    href: "/components/mobile-storyboard",
    description: "Device frames and screen connectors",
    icon: Smartphone,
    badge: "Component",
    category: "component",
  },
] as const

const categories = {
  landing: { title: "Landing Pages", color: "bg-blue-500/10 text-blue-700 border-blue-200" },
  core: { title: "Core Features", color: "bg-emerald-500/10 text-emerald-700 border-emerald-200" },
  enterprise: { title: "Enterprise", color: "bg-purple-500/10 text-purple-700 border-purple-200" },
  component: { title: "Components", color: "bg-amber-500/10 text-amber-700 border-amber-200" },
  auth: { title: "Authentication", color: "bg-rose-500/10 text-rose-700 border-rose-200" },
}

function ShowcasePageContent() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const handleCategoryChange = useCallback((category: string | null) => {
    setSelectedCategory(category)
  }, [])

  const handleSearchChange = useCallback((query: string) => {
    setSearchQuery(query)
  }, [])

  const filteredItems = useMemo(() => {
    return navItems.filter((item) => {
      const matchesCategory = !selectedCategory || item.category === selectedCategory
      const matchesSearch =
        !searchQuery ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    for (const [key] of Object.entries(categories)) {
      counts[key] = navItems.filter((item) => item.category === key).length
    }
    return counts
  }, [])

  return (
    <div className="space-y-6" role="main" aria-labelledby="showcase-heading">
      <h2 id="showcase-heading" className="sr-only">HAUS Component Showcase</h2>

      {/* Hero */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white shadow-lg">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">
          HAUS Component Showcase
        </h1>
        <p className="text-indigo-100 text-lg max-w-2xl">
          Explore all converted HTML pages with modern React, Next.js 16, and shadcn/ui components.
          Featuring voice-first AI, transparency protocols, and enterprise solutions.
        </p>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" aria-hidden="true" />
            <input
              type="search"
              placeholder="Search pages and components..."
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-zinc-100"
              aria-label="Search components"
            />
          </div>
        </CardContent>
      </Card>

      {/* Category Filter Pills */}
      <nav className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
        <Button
          variant={selectedCategory === null ? "default" : "outline"}
          size="sm"
          onClick={() => handleCategoryChange(null)}
          aria-pressed={selectedCategory === null}
        >
          All Pages ({navItems.length})
        </Button>
        {Object.entries(categories).map(([key, { title }]) => (
          <Button
            key={key}
            variant={selectedCategory === key ? "default" : "outline"}
            size="sm"
            onClick={() => handleCategoryChange(key)}
            aria-pressed={selectedCategory === key}
          >
            {title} ({categoryCounts[key] || 0})
          </Button>
        ))}
      </nav>

      {/* Results Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" role="list" aria-label={`Showing ${filteredItems.length} components`}>
        {filteredItems.map((item) => {
          const Icon = item.icon
          const categoryInfo = categories[item.category]
          return (
            <a key={item.href} href={item.href} className="block" role="listitem">
              <Card className="group hover:shadow-lg transition-all duration-200 hover:border-indigo-300 dark:hover:border-indigo-700 h-full cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between gap-3">
                    <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-900/50 transition-colors">
                      <Icon className="h-5 w-5 text-indigo-700 dark:text-indigo-300" aria-hidden="true" />
                    </div>
                    {item.badge && (
                      <Badge variant="secondary" className="text-xs">
                        {item.badge}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg mt-3">{item.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <Badge
                      variant="outline"
                      className={cn("text-xs", categoryInfo.color)}
                    >
                      {categoryInfo.title}
                    </Badge>
                    <ArrowRight className="h-4 w-4 text-zinc-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" aria-hidden="true" />
                  </div>
                </CardContent>
              </Card>
            </a>
          )
        })}
      </div>

      {filteredItems.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <Search className="h-12 w-12 text-zinc-300 mx-auto mb-4" aria-hidden="true" />
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
              No results found
            </h3>
            <p className="text-zinc-500 dark:text-zinc-400">
              Try adjusting your search or category filter
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

export default function ShowcasePage() {
  return (
    <ErrorBoundary>
      <Shell>
        <Suspense fallback={<PageLoader text="Loading showcase..." />}>
          <ShowcasePageContent />
        </Suspense>
      </Shell>
    </ErrorBoundary>
  )
}
