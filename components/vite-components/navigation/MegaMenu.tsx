import { useState } from "react";
import { 
  Compass, 
  LayoutDashboard, 
  BarChart3, 
  Bot, 
  Settings,
  Home,
  TrendingUp,
  Users,
  MessageSquare,
  FileText,
  Shield,
  ChevronRight,
  Sparkles,
  Map,
  Heart,
  Calendar,
  PieChart,
  Brain,
  Search,
  Zap,
  Star,
  ArrowUpRight,
  Clock,
  Bell,
  Target,
  Wallet
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

interface MenuItem {
  name: string;
  href: string;
  icon?: React.ElementType;
  badge?: string;
  description?: string;
}

interface MenuSection {
  title: string;
  description: string;
  icon: React.ElementType;
  href: string;
  gradient: string;
  items?: MenuItem[];
  preview?: React.ReactNode;
  featured?: {
    title: string;
    description: string;
    href: string;
    image?: string;
  };
  stats?: { label: string; value: string }[];
}

const menuSections: Record<string, MenuSection> = {
  explore: {
    title: "Explore",
    description: "Discover properties with AI-powered search",
    icon: Compass,
    href: "/explore",
    gradient: "from-blue-500 to-cyan-500",
    items: [
      { name: "Property Search", href: "/search", icon: Search, description: "AI-powered search" },
      { name: "Featured Listings", href: "/featured", icon: Star, badge: "12 New" },
      { name: "Map View", href: "/map", icon: Map },
      { name: "Saved Searches", href: "/saved", icon: Heart },
      { name: "Price Alerts", href: "/alerts", icon: Bell, badge: "3" },
    ],
    featured: {
      title: "AI Property Match",
      description: "Find your perfect property with our AI-powered matching system",
      href: "/ai-match",
    },
    stats: [
      { label: "Properties", value: "50K+" },
      { label: "Cities", value: "200+" },
    ],
    preview: (
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-3">
        <div className="grid grid-cols-2 gap-2">
          {[1, 2, 3, 4].map((i) => (
            <div 
              key={i} 
              className="aspect-[4/3] rounded-lg bg-gradient-to-br from-muted/80 to-muted/40 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-1 left-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="h-1.5 bg-white/20 rounded-full" />
              </div>
            </div>
          ))}
        </div>
        <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-xl" />
      </div>
    ),
  },
  dashboard: {
    title: "Dashboard",
    description: "Your command center for real estate",
    icon: LayoutDashboard,
    href: "/dashboard",
    gradient: "from-cyan-500 to-blue-500",
    items: [
      { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
      { name: "Active Leads", href: "/dashboard/leads", icon: Target, badge: "8" },
      { name: "Clients", href: "/dashboard/clients", icon: Users },
      { name: "Schedule", href: "/dashboard/schedule", icon: Calendar, badge: "Today" },
      { name: "Tasks", href: "/dashboard/tasks", icon: FileText },
    ],
    stats: [
      { label: "Active Leads", value: "24" },
      { label: "This Week", value: "$2.4M" },
    ],
    preview: (
      <div className="space-y-2">
        <div className="grid grid-cols-3 gap-1.5">
          {[
            { label: "Leads", value: "24", trend: "+12%" },
            { label: "Deals", value: "8", trend: "+5%" },
            { label: "Revenue", value: "$1.2M", trend: "+18%" },
          ].map((stat) => (
            <div key={stat.label} className="p-2 rounded-lg bg-muted/50 text-center">
              <p className="text-[10px] text-muted-foreground">{stat.label}</p>
              <p className="text-sm font-semibold text-foreground">{stat.value}</p>
              <p className="text-[9px] text-emerald-500">{stat.trend}</p>
            </div>
          ))}
        </div>
        <div className="h-16 rounded-lg bg-muted/30 p-2 flex items-end gap-0.5">
          {[40, 65, 45, 80, 55, 70, 85, 60, 75, 90].map((h, i) => (
            <div 
              key={i} 
              className="flex-1 bg-gradient-to-t from-cyan-500/60 to-blue-500/40 rounded-t transition-all hover:from-cyan-500 hover:to-blue-500" 
              style={{ height: `${h}%` }} 
            />
          ))}
        </div>
      </div>
    ),
  },
  analytics: {
    title: "Analytics",
    description: "Market insights and performance metrics",
    icon: BarChart3,
    href: "/analytics",
    gradient: "from-emerald-500 to-teal-500",
    items: [
      { name: "Market Overview", href: "/analytics", icon: PieChart },
      { name: "Price Trends", href: "/analytics/trends", icon: TrendingUp },
      { name: "Investment Analysis", href: "/analytics/investment", icon: Wallet, badge: "Pro" },
      { name: "Reports", href: "/analytics/reports", icon: FileText },
      { name: "Forecasts", href: "/analytics/forecasts", icon: Sparkles, badge: "AI" },
    ],
    stats: [
      { label: "Avg. Growth", value: "+8.4%" },
      { label: "Markets", value: "150+" },
    ],
    preview: (
      <div className="relative">
        <div className="h-24 rounded-lg bg-gradient-to-br from-emerald-500/10 to-teal-500/10 p-2">
          <svg viewBox="0 0 100 40" className="w-full h-full">
            <defs>
              <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgb(16, 185, 129)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="rgb(16, 185, 129)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M 0 35 Q 10 30, 20 25 T 40 20 T 60 15 T 80 10 T 100 5 L 100 40 L 0 40 Z"
              fill="url(#chartGradient)"
            />
            <path
              d="M 0 35 Q 10 30, 20 25 T 40 20 T 60 15 T 80 10 T 100 5"
              fill="none"
              stroke="rgb(16, 185, 129)"
              strokeWidth="2"
              className="animate-pulse"
            />
          </svg>
        </div>
        <div className="mt-2 flex items-center justify-between text-[10px]">
          <span className="text-muted-foreground">Jan</span>
          <span className="text-emerald-500 font-medium">+8.4% YTD</span>
          <span className="text-muted-foreground">Dec</span>
        </div>
      </div>
    ),
  },
  ai: {
    title: "AI Assistant",
    description: "Your intelligent property expert",
    icon: Bot,
    href: "/ai",
    gradient: "from-teal-500 to-cyan-500",
    items: [
      { name: "Chat", href: "/ai", icon: MessageSquare },
      { name: "Property Analysis", href: "/ai/analyze", icon: Search, badge: "Popular" },
      { name: "Document Review", href: "/ai/documents", icon: FileText },
      { name: "Market Research", href: "/ai/research", icon: Brain },
      { name: "Voice Assistant", href: "/ai/voice", icon: Zap, badge: "Beta" },
    ],
    featured: {
      title: "Try AI Property Analysis",
      description: "Get instant insights on any property with our advanced AI",
      href: "/ai/analyze",
    },
    preview: (
      <div className="space-y-2">
        <div className="flex items-start gap-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
            <Bot className="w-3 h-3 text-white" />
          </div>
          <div className="flex-1 space-y-1">
            <div className="p-2 rounded-lg bg-muted/50 text-xs text-muted-foreground">
              Based on my analysis, this property shows strong investment potential...
            </div>
          </div>
        </div>
        <div className="flex items-start gap-2 flex-row-reverse">
          <div className="w-6 h-6 rounded-full bg-muted/80 flex-shrink-0" />
          <div className="p-2 rounded-lg bg-cyan-500/20 text-xs text-foreground">
            What's the rental yield?
          </div>
        </div>
        <div className="flex gap-1.5">
          {["Analyze", "Compare", "Forecast"].map((action) => (
            <button key={action} className="px-2 py-1 rounded-full bg-muted/50 text-[10px] text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
              {action}
            </button>
          ))}
        </div>
      </div>
    ),
  },
  admin: {
    title: "Admin",
    description: "Settings, team, and billing",
    icon: Settings,
    href: "/admin",
    gradient: "from-slate-500 to-zinc-500",
    items: [
      { name: "Settings", href: "/admin/settings", icon: Settings },
      { name: "Team", href: "/admin/team", icon: Users },
      { name: "Billing", href: "/admin/billing", icon: Wallet },
      { name: "Integrations", href: "/admin/integrations", icon: Zap },
      { name: "Security", href: "/admin/security", icon: Shield },
    ],
  },
};

export const MegaMenu = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList className="gap-0.5">
        {Object.entries(menuSections).map(([key, section]) => (
          <NavigationMenuItem key={key}>
            <NavigationMenuTrigger 
              className="h-9 px-3 bg-transparent hover:bg-muted/50 data-[state=open]:bg-muted/50 gap-1.5"
              onMouseEnter={() => setActiveSection(key)}
            >
              <section.icon className="w-4 h-4" />
              <span className="hidden xl:inline">{section.title}</span>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-[600px] p-0 overflow-hidden">
                {/* Header with gradient */}
                <div className={`p-4 bg-gradient-to-r ${section.gradient} relative overflow-hidden`}>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <section.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{section.title}</h3>
                        <p className="text-sm text-white/80">{section.description}</p>
                      </div>
                    </div>
                    {section.stats && (
                      <div className="flex gap-4 mt-3">
                        {section.stats.map((stat) => (
                          <div key={stat.label} className="text-center">
                            <p className="text-lg font-bold text-white">{stat.value}</p>
                            <p className="text-xs text-white/70">{stat.label}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                  <div className="absolute bottom-0 left-1/2 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 blur-xl" />
                </div>

                {/* Content */}
                <div className="p-4 bg-popover">
                  <div className="flex gap-4">
                    {/* Left side - Menu items */}
                    <div className="flex-1 space-y-0.5">
                      {section.items?.map((item, idx) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-muted/50 transition-all group"
                          style={{ animationDelay: `${idx * 50}ms` }}
                        >
                          {item.icon && (
                            <div className="w-8 h-8 rounded-lg bg-muted/50 flex items-center justify-center group-hover:bg-muted transition-colors">
                              <item.icon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                            </div>
                          )}
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium text-foreground group-hover:text-foreground transition-colors">
                                {item.name}
                              </span>
                              {item.badge && (
                                <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-medium ${
                                  item.badge === "Pro" || item.badge === "AI" 
                                    ? "bg-gradient-to-r from-cyan-500/20 to-teal-500/20 text-cyan-400"
                                    : item.badge === "Beta"
                                    ? "bg-amber-500/20 text-amber-400"
                                    : "bg-emerald-500/20 text-emerald-400"
                                }`}>
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            {item.description && (
                              <p className="text-xs text-muted-foreground">{item.description}</p>
                            )}
                          </div>
                          <ChevronRight className="w-4 h-4 text-muted-foreground/30 group-hover:text-muted-foreground group-hover:translate-x-0.5 transition-all" />
                        </a>
                      ))}
                      
                      {/* Open section link */}
                      <a
                        href={section.href}
                        className={`flex items-center gap-2 p-2.5 mt-2 text-sm font-medium rounded-xl bg-gradient-to-r ${section.gradient} text-white hover:opacity-90 transition-opacity`}
                      >
                        <span>Open {section.title}</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>

                    {/* Right side - Preview */}
                    {section.preview && (
                      <div className="w-52 p-3 rounded-xl bg-muted/30 border border-border/50">
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="w-3 h-3 text-muted-foreground" />
                          <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Live Preview</p>
                        </div>
                        {section.preview}
                      </div>
                    )}
                  </div>

                  {/* Featured section */}
                  {section.featured && (
                    <a
                      href={section.featured.href}
                      className="mt-3 flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-muted/50 to-muted/30 border border-border/50 hover:border-border transition-colors group"
                    >
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${section.gradient} flex items-center justify-center`}>
                        <Sparkles className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">{section.featured.title}</p>
                        <p className="text-xs text-muted-foreground">{section.featured.description}</p>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                    </a>
                  )}
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
