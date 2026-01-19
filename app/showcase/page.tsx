"use client"

import { useState } from "react"
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
]

const categories = {
  landing: { title: "Landing Pages", color: "bg-blue-500/10 text-blue-700 border-blue-200" },
  core: { title: "Core Features", color: "bg-emerald-500/10 text-emerald-700 border-emerald-200" },
  enterprise: { title: "Enterprise", color: "bg-purple-500/10 text-purple-700 border-purple-200" },
  component: { title: "Components", color: "bg-amber-500/10 text-amber-700 border-amber-200" },
  auth: { title: "Authentication", color: "bg-rose-500/10 text-rose-700 border-rose-200" },
}

export default function ShowcasePage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredItems = navItems.filter((item) => {
    const matchesCategory = !selectedCategory || item.category === selectedCategory
    const matchesSearch =
      !searchQuery ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="space-y-6">
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
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
            <input
              type="search"
              placeholder="Search pages and components..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-zinc-100"
            />
          </div>
        </CardContent>
      </Card>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-2">
        <Button
          variant={selectedCategory === null ? "default" : "outline"}
          size="sm"
          onClick={() => setSelectedCategory(null)}
        >
          All Pages ({navItems.length})
        </Button>
        {Object.entries(categories).map(([key, { title }]) => {
          const count = navItems.filter((item) => item.category === key).length
          return (
            <Button
              key={key}
              variant={selectedCategory === key ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(key)}
            >
              {title} ({count})
            </Button>
          )
        })}
      </div>

      {/* Results Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredItems.map((item) => {
          const Icon = item.icon
          const categoryInfo = categories[item.category]
          return (
            <a key={item.href} href={item.href} className="block">
              <Card className="group hover:shadow-lg transition-all duration-200 hover:border-indigo-300 dark:hover:border-indigo-700 h-full cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between gap-3">
                    <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-900/50 transition-colors">
                      <Icon className="h-5 w-5 text-indigo-700 dark:text-indigo-300" />
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
                    <ArrowRight className="h-4 w-4 text-zinc-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
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
            <Search className="h-12 w-12 text-zinc-300 mx-auto mb-4" />
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
