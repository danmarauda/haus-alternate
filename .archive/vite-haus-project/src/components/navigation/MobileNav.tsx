import { useState } from "react";
import { 
  Menu, 
  X, 
  Compass, 
  LayoutDashboard, 
  BarChart3, 
  Bot, 
  Settings,
  ChevronRight,
  Home,
  Search,
  Star,
  Map,
  Users,
  Calendar,
  FileText,
  Wallet,
  Shield,
  Zap,
  Sparkles,
  ArrowUpRight,
  Bell,
  Moon,
  Sun
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface SubItem {
  name: string;
  href: string;
  badge?: string;
  icon?: React.ElementType;
}

interface NavItem {
  title: string;
  description: string;
  icon: React.ElementType;
  href: string;
  gradient: string;
  items?: SubItem[];
  badge?: string;
}

const navItems: NavItem[] = [
  {
    title: "Explore",
    description: "Discover properties",
    icon: Compass,
    href: "/explore",
    gradient: "from-blue-500 to-cyan-500",
    items: [
      { name: "Property Search", href: "/search", icon: Search },
      { name: "Featured Listings", href: "/featured", icon: Star, badge: "New" },
      { name: "Map View", href: "/map", icon: Map },
      { name: "Saved Properties", href: "/saved", icon: Star },
    ],
  },
  {
    title: "Dashboard",
    description: "Your command center",
    icon: LayoutDashboard,
    href: "/dashboard",
    gradient: "from-cyan-500 to-blue-500",
    badge: "3 updates",
    items: [
      { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
      { name: "Active Leads", href: "/dashboard/leads", icon: Users, badge: "8" },
      { name: "Clients", href: "/dashboard/clients", icon: Users },
      { name: "Schedule", href: "/dashboard/schedule", icon: Calendar },
    ],
  },
  {
    title: "Analytics",
    description: "Market insights",
    icon: BarChart3,
    href: "/analytics",
    gradient: "from-emerald-500 to-teal-500",
    items: [
      { name: "Market Overview", href: "/analytics", icon: BarChart3 },
      { name: "Price Trends", href: "/analytics/trends", icon: BarChart3 },
      { name: "Investment Analysis", href: "/analytics/investment", icon: Wallet, badge: "Pro" },
      { name: "Reports", href: "/analytics/reports", icon: FileText },
    ],
  },
  {
    title: "AI Assistant",
    description: "Intelligent support",
    icon: Bot,
    href: "/ai",
    gradient: "from-teal-500 to-cyan-500",
    badge: "Beta",
    items: [
      { name: "Chat", href: "/ai", icon: Bot },
      { name: "Property Analysis", href: "/ai/analyze", icon: Search },
      { name: "Document Review", href: "/ai/documents", icon: FileText },
    ],
  },
  {
    title: "Admin",
    description: "Settings & billing",
    icon: Settings,
    href: "/admin",
    gradient: "from-slate-500 to-zinc-500",
    items: [
      { name: "Settings", href: "/admin/settings", icon: Settings },
      { name: "Team", href: "/admin/team", icon: Users },
      { name: "Billing", href: "/admin/billing", icon: Wallet },
      { name: "Security", href: "/admin/security", icon: Shield },
    ],
  },
];

export const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(true);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="lg:hidden p-2.5 rounded-xl hover:bg-muted/50 active:scale-95 transition-all focus-ring">
          <Menu className="w-5 h-5 text-foreground" />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full sm:w-96 p-0 border-r border-border/50">
        <div className="flex flex-col h-full bg-background">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border/50">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-brand flex items-center justify-center shadow-brand">
                <Home className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold text-foreground">HAUS</span>
                <p className="text-[10px] text-muted-foreground">Platform</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {/* Theme toggle */}
              <button 
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-lg hover:bg-muted/50 transition-colors"
              >
                {isDark ? <Sun className="w-4 h-4 text-muted-foreground" /> : <Moon className="w-4 h-4 text-muted-foreground" />}
              </button>
              {/* Notifications */}
              <button className="relative p-2 rounded-lg hover:bg-muted/50 transition-colors">
                <Bell className="w-4 h-4 text-muted-foreground" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500" />
              </button>
              {/* Close */}
              <button 
                onClick={() => setOpen(false)}
                className="p-2 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="p-4 border-b border-border/50">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">Quick Actions</p>
            <div className="grid grid-cols-4 gap-2">
              {[
                { icon: Search, label: "Search", gradient: "from-blue-500 to-cyan-500" },
                { icon: Zap, label: "Quick Add", gradient: "from-amber-500 to-orange-500" },
                { icon: Bot, label: "AI Chat", gradient: "from-teal-500 to-cyan-500" },
                { icon: Sparkles, label: "Insights", gradient: "from-cyan-500 to-teal-500" },
              ].map((action) => (
                <button
                  key={action.label}
                  className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-muted/30 hover:bg-muted/50 active:scale-95 transition-all"
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${action.gradient} flex items-center justify-center shadow-lg`}>
                    <action.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-[10px] font-medium text-muted-foreground">{action.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">Navigation</p>
            {navItems.map((item) => (
              <div key={item.title} className="space-y-1">
                <button
                  onClick={() => setExpandedSection(expandedSection === item.title ? null : item.title)}
                  className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-muted/50 active:scale-[0.98] transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg`}>
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-medium text-foreground">{item.title}</p>
                        {item.badge && (
                          <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-medium ${
                            item.badge === "Beta" 
                              ? "bg-cyan-500/20 text-cyan-400"
                              : "bg-emerald-500/20 text-emerald-400"
                          }`}>
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-[10px] text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                  <ChevronRight 
                    className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${
                      expandedSection === item.title ? 'rotate-90' : ''
                    }`} 
                  />
                </button>
                
                {/* Expanded sub-items */}
                {expandedSection === item.title && item.items && (
                  <div className="ml-14 space-y-0.5 animate-fade-down">
                    {item.items.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-2 p-2.5 rounded-xl text-sm text-muted-foreground hover:text-foreground hover:bg-muted/30 active:scale-[0.98] transition-all group"
                      >
                        {subItem.icon && (
                          <subItem.icon className="w-4 h-4 text-muted-foreground/60 group-hover:text-muted-foreground" />
                        )}
                        <span className="flex-1">{subItem.name}</span>
                        {subItem.badge && (
                          <span className={`px-1.5 py-0.5 rounded-full text-[9px] font-medium ${
                            subItem.badge === "Pro" || subItem.badge === "New"
                              ? "bg-emerald-500/20 text-emerald-400"
                              : "bg-muted text-muted-foreground"
                          }`}>
                            {subItem.badge}
                          </span>
                        )}
                        <ArrowUpRight className="w-3 h-3 text-muted-foreground/30 group-hover:text-muted-foreground transition-colors" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* User Section */}
          <div className="p-4 border-t border-border/50">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-cyan to-brand-blue flex items-center justify-center">
                <span className="text-white font-semibold text-sm">JD</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">John Doe</p>
                <p className="text-[10px] text-muted-foreground">Pro Plan • 12 credits left</p>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </div>
            
            <button className="w-full py-3.5 px-4 rounded-xl bg-gradient-brand text-white text-sm font-semibold hover:opacity-90 active:scale-[0.98] transition-all shadow-brand">
              Get Early Access
            </button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
