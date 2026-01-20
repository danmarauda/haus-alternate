"use client"

/**
 * Showcase Sidebar - Collapsible navigation sidebar
 *
 * Auto-hides to icons on smaller screens or when collapsed.
 * Features smooth transitions and category indicators.
 */

import { useState } from "react"
import { usePathname } from "next/navigation"
import {
  Home,
  LayoutGrid,
  Users,
  Building2,
  TrendingUp,
  MessageSquare,
  Mic,
  Smartphone,
  Star,
  ChevronLeft,
  ChevronRight,
  File,
  Cpu,
  FileText,
  Wand2,
  Search,
  FolderOpen,
  LineChart,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

interface NavItem {
  title: string
  href: string
  icon: React.ElementType
  badge?: string
  category: "landing" | "core" | "enterprise" | "component" | "template"
}

const navItems: NavItem[] = [
  // Home
  {
    title: "Home",
    href: "/",
    icon: Home,
    category: "core",
  },

  // Landing Pages
  {
    title: "GSAP Landing",
    href: "/landing-gsap",
    icon: LayoutGrid,
    badge: "Framer",
    category: "landing",
  },
  {
    title: "Geist Landing",
    href: "/landing-geist",
    icon: Star,
    badge: "Font",
    category: "landing",
  },
  {
    title: "Light Theme",
    href: "/landing-light",
    icon: LayoutGrid,
    badge: "Light",
    category: "landing",
  },
  {
    title: "Spline 3D",
    href: "/landing-spline",
    icon: Smartphone,
    badge: "Canvas",
    category: "landing",
  },
  {
    title: "Voice First",
    href: "/landing-voice",
    icon: Mic,
    badge: "AI",
    category: "landing",
  },
  {
    title: "Landing 1",
    href: "/landing-1",
    icon: LayoutGrid,
    category: "landing",
  },
  {
    title: "Landing 2",
    href: "/landing-2",
    icon: LayoutGrid,
    category: "landing",
  },
  {
    title: "Landing 3",
    href: "/landing-3",
    icon: LayoutGrid,
    category: "landing",
  },
  {
    title: "Landing 4",
    href: "/landing-4",
    icon: LayoutGrid,
    category: "landing",
  },

  // Core Features
  {
    title: "Advisory",
    href: "/advisory",
    icon: Users,
    category: "core",
  },
  {
    title: "Feed",
    href: "/feed",
    icon: MessageSquare,
    category: "core",
  },
  {
    title: "Pipeline",
    href: "/agent-pipeline",
    icon: TrendingUp,
    badge: "Kanban",
    category: "core",
  },
  {
    title: "Buyer Profile",
    href: "/buyer-profile",
    icon: File,
    category: "core",
  },
  {
    title: "Agent Dashboard",
    href: "/agent-dashboard",
    icon: LayoutGrid,
    badge: "New",
    category: "core",
  },
  {
    title: "First Home",
    href: "/first-home-dashboard",
    icon: Home,
    badge: "New",
    category: "core",
  },
  {
    title: "Residential Intel",
    href: "/residential-intelligence",
    icon: TrendingUp,
    badge: "New",
    category: "core",
  },
  {
    title: "Market Intel",
    href: "/market-intelligence",
    icon: Building2,
    badge: "New",
    category: "core",
  },

  // Listings
  {
    title: "Wolseley Listing",
    href: "/listings/wolseley",
    icon: Building2,
    badge: "New",
    category: "core",
  },
  {
    title: "Prestige Wolseley",
    href: "/listings/prestige-wolseley",
    icon: Star,
    badge: "Luxury",
    category: "core",
  },
  {
    title: "Search Results",
    href: "/search-results",
    icon: MessageSquare,
    badge: "New",
    category: "core",
  },

  // Settings & Reports
  {
    title: "Appraisal Report",
    href: "/appraisal-report",
    icon: File,
    badge: "New",
    category: "core",
  },
  {
    title: "Account Settings",
    href: "/account-settings",
    icon: Users,
    badge: "New",
    category: "core",
  },

  // Generated Pages
  {
    title: "Luminal Studio",
    href: "/generated-1",
    icon: LayoutGrid,
    badge: "Studio",
    category: "core",
  },
  {
    title: "Invoice Template",
    href: "/generated-2",
    icon: File,
    badge: "Template",
    category: "core",
  },
  {
    title: "Prestige Listing",
    href: "/generated-3",
    icon: Building2,
    badge: "Luxury",
    category: "core",
  },
  {
    title: "AEOS Architecture",
    href: "/generated-4",
    icon: Cpu,
    badge: "System",
    category: "core",
  },
  {
    title: "HAUS v2 PRD",
    href: "/generated-5",
    icon: FileText,
    badge: "Docs",
    category: "core",
  },
  {
    title: "Listing Generator",
    href: "/generated-6",
    icon: Wand2,
    badge: "AI",
    category: "core",
  },
  {
    title: "Market Search",
    href: "/generated-7",
    icon: Search,
    badge: "Search",
    category: "core",
  },
  {
    title: "Team Directory",
    href: "/generated-8",
    icon: Users,
    badge: "Contacts",
    category: "core",
  },
  {
    title: "Document Vault",
    href: "/generated-9",
    icon: FolderOpen,
    badge: "Files",
    category: "core",
  },
  {
    title: "Property Intel",
    href: "/generated-10",
    icon: LineChart,
    badge: "Dashboard",
    category: "core",
  },

  // Enterprise
  {
    title: "Enterprise",
    href: "/enterprise",
    icon: Building2,
    badge: "B2B",
    category: "enterprise",
  },

  // Components
  {
    title: "Voice Assistant",
    href: "/components/mobile-voice-assistant",
    icon: Mic,
    badge: "Demo",
    category: "component",
  },
  {
    title: "Storyboard",
    href: "/components/mobile-storyboard",
    icon: Smartphone,
    badge: "Demo",
    category: "component",
  },

  // Template Pages
  {
    title: "ALIAS Light Landing",
    href: "/templates/alias-landing-light",
    icon: Star,
    badge: "Light",
    category: "template",
  },
  {
    title: "ALIAS Fixed Nav",
    href: "/templates/alias-fixed-nav",
    icon: LayoutGrid,
    badge: "Fixed",
    category: "template",
  },
  {
    title: "ALIAS Interactive Badge",
    href: "/templates/alias-interactive-badge",
    icon: Mic,
    badge: "Badge",
    category: "template",
  },
  {
    title: "ALIAS Enterprise AI",
    href: "/templates/alias-enterprise-ai",
    icon: Cpu,
    badge: "AI",
    category: "template",
  },
  {
    title: "ALIAS Creative Studio",
    href: "/templates/alias-creative-studio",
    icon: Wand2,
    badge: "Studio",
    category: "template",
  },
  {
    title: "ALIAS Dark Header",
    href: "/templates/alias-dark-header",
    icon: Smartphone,
    badge: "Dark",
    category: "template",
  },
  {
    title: "ALIAS Hero Cards",
    href: "/templates/alias-hero-cards",
    icon: LayoutGrid,
    badge: "Hero",
    category: "template",
  },
  {
    title: "Megabuild Construction",
    href: "/templates/megabuild-construction",
    icon: Building2,
    badge: "Build",
    category: "template",
  },
  {
    title: "Fabrica Home",
    href: "/templates/fabrica-home",
    icon: Home,
    badge: "Home",
    category: "template",
  },
  {
    title: "Finance Landing",
    href: "/templates/finance-landing",
    icon: LineChart,
    badge: "Finance",
    category: "template",
  },
  {
    title: "Sales Dashboard",
    href: "/templates/mobile-sales-dashboard",
    icon: TrendingUp,
    badge: "Sales",
    category: "template",
  },
  {
    title: "Crypto Loans",
    href: "/templates/crypto-loans-mobile",
    icon: FileText,
    badge: "Crypto",
    category: "template",
  },
  {
    title: "Travel Booking",
    href: "/templates/travel-booking",
    icon: Search,
    badge: "Travel",
    category: "template",
  },
  {
    title: "HAUS Ecosystem",
    href: "/templates/haus-ecosystem-ui",
    icon: Users,
    badge: "Ecosystem",
    category: "template",
  },
  {
    title: "Reputable Dashboard",
    href: "/templates/reputable-dashboard",
    icon: File,
    badge: "Reputation",
    category: "template",
  },
  {
    title: "New Home Listing",
    href: "/new-home-listing",
    icon: Building2,
    badge: "Listing",
    category: "template",
  },
]

const categoryColors = {
  landing: "bg-blue-500",
  core: "bg-emerald-500",
  enterprise: "bg-purple-500",
  component: "bg-amber-500",
  template: "bg-cyan-500",
}

interface ShowcaseSidebarProps {
  className?: string
}

export function ShowcaseSidebar({ className }: ShowcaseSidebarProps) {
  const [collapsed, setCollapsed] = useState(false)
  const pathname = usePathname()

  return (
    <div
      className={cn(
        "flex flex-col bg-white dark:bg-zinc-950 border-r border-zinc-200 dark:border-zinc-800 transition-all duration-300 relative",
        collapsed ? "w-16" : "w-56",
        className
      )}
    >
      {/* Collapse Button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className={cn(
          "absolute -right-3 top-6 z-10 h-6 w-6 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex items-center justify-center shadow-sm hover:shadow-md transition-all",
          collapsed && "rotate-180"
        )}
      >
        {collapsed ? (
          <ChevronRight className="h-3 w-3" />
        ) : (
          <ChevronLeft className="h-3 w-3" />
        )}
      </button>

      {/* Header */}
      <div className="p-4 border-b border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0">
            <LayoutGrid className="h-4 w-4 text-white" />
          </div>
          {!collapsed && (
            <span className="font-semibold text-sm truncate">HAUS</span>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto overflow-x-hidden p-2 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))

          return (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all relative group no-underline",
                isActive
                  ? "bg-indigo-100 text-indigo-900 dark:bg-indigo-900/30 dark:text-indigo-100"
                  : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
              )}
              title={collapsed ? item.title : undefined}
            >
              {/* Category indicator */}
              <div className={cn("h-1.5 w-1.5 rounded-full flex-shrink-0", categoryColors[item.category])} />

              {/* Icon */}
              <Icon className="h-4 w-4 flex-shrink-0" />

              {/* Label */}
              {!collapsed && (
                <>
                  <span className="flex-1 truncate">{item.title}</span>
                  {item.badge && (
                    <Badge variant="secondary" className="text-xs">
                      {item.badge}
                    </Badge>
                  )}
                </>
              )}

              {/* Tooltip for collapsed state */}
              {collapsed && (
                <div className="absolute left-full ml-2 px-2 py-1 bg-zinc-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50">
                  {item.title}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-px w-1 h-1 bg-zinc-900 rotate-45" />
                </div>
              )}
            </a>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-zinc-200 dark:border-zinc-800">
        {!collapsed ? (
          <div className="text-xs text-zinc-500 dark:text-zinc-400">
            <p>React 19 + Next.js 16</p>
          </div>
        ) : (
          <div className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 mx-auto" />
        )}
      </div>
    </div>
  )
}
