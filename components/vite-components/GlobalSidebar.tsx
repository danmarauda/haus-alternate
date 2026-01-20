"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Search,
  Star,
  Map,
  Heart,
  Bell,
  LayoutDashboard,
  Users,
  Calendar,
  FileText,
  Wallet,
  Shield,
  Bot,
  MessageSquare,
  Brain,
  Zap,
  Target,
  TrendingUp,
  PieChart,
  Sparkles,
  Settings,
  ChevronRight,
  LogIn,
  UserPlus,
  HelpCircle,
  Calculator,
  GitCompare,
  Phone,
  Info,
  Briefcase,
  Newspaper,
  Building,
  BarChart3,
  Compass,
  Network,
  Grid3x3,
  Flag,
  Store,
  BadgeHelp,
  ScrollText,
  Landmark,
  Smartphone,
  Mic,
  Sun,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";

interface RouteItem {
  name: string;
  path: string;
  icon: React.ElementType;
}

interface RouteGroup {
  title: string;
  items: RouteItem[];
}

const routeGroups: RouteGroup[] = [
  {
    title: "Main",
    items: [
      { name: "Home", path: "/", icon: Home },
      { name: "Index", path: "/index", icon: Compass },
      { name: "Landing", path: "/landing", icon: Grid3x3 },
      { name: "Landing Page", path: "/landingpage", icon: Grid3x3 },
    ],
  },
  {
    title: "Property Search",
    items: [
      { name: "Search", path: "/search", icon: Search },
      { name: "Search Results", path: "/search-results", icon: Search },
      { name: "Property Listing", path: "/listing/:id", icon: Building },
      { name: "Featured", path: "/featured", icon: Star },
      { name: "Map View", path: "/map", icon: Map },
      { name: "Saved", path: "/saved", icon: Heart },
      { name: "Price Alerts", path: "/alerts", icon: Bell },
    ],
  },
  {
    title: "Authentication",
    items: [
      { name: "Login", path: "/login", icon: LogIn },
      { name: "Register", path: "/register", icon: UserPlus },
      { name: "Forgot Password", path: "/forgot-password", icon: HelpCircle },
    ],
  },
  {
    title: "User Dashboard",
    items: [
      { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
      { name: "Settings", path: "/settings", icon: Settings },
      { name: "Favorites", path: "/favorites", icon: Heart },
      { name: "Notifications", path: "/notifications", icon: Bell },
      { name: "Messages", path: "/messages", icon: MessageSquare },
      { name: "Active Leads", path: "/dashboard/leads", icon: Target },
      { name: "Clients", path: "/dashboard/clients", icon: Users },
      { name: "Schedule", path: "/dashboard/schedule", icon: Calendar },
    ],
  },
  {
    title: "Analytics",
    items: [
      { name: "Analytics", path: "/analytics", icon: BarChart3 },
      { name: "Market Overview", path: "/analytics", icon: PieChart },
      { name: "Price Trends", path: "/analytics/trends", icon: TrendingUp },
      { name: "Investment Analysis", path: "/analytics/investment", icon: Wallet },
      { name: "Reports", path: "/analytics/reports", icon: FileText },
      { name: "Forecasts", path: "/analytics/forecasts", icon: Sparkles },
    ],
  },
  {
    title: "AI Features",
    items: [
      { name: "AI Assistant", path: "/ai", icon: Bot },
      { name: "AI Chat", path: "/ai", icon: MessageSquare },
      { name: "Property Analysis", path: "/ai/analyze", icon: Search },
      { name: "Document Review", path: "/ai/documents", icon: FileText },
      { name: "Market Research", path: "/ai/research", icon: Brain },
      { name: "Voice Assistant", path: "/ai/voice", icon: Zap },
      { name: "AI Property Match", path: "/ai-match", icon: Sparkles },
    ],
  },
  {
    title: "Platform",
    items: [
      { name: "Agents", path: "/agents", icon: Users },
      { name: "Deal Team", path: "/deal-team", icon: Building },
      { name: "Agent Dashboard", path: "/agent-dashboard", icon: LayoutDashboard },
      { name: "Buyer Profile", path: "/buyer-profile", icon: UserPlus },
      { name: "Agent Pipeline", path: "/agent-pipeline", icon: Target },
      { name: "Market Intelligence", path: "/market-intelligence", icon: TrendingUp },
      { name: "Residential Intelligence", path: "/residential-intelligence", icon: Home },
      { name: "Advisory Network", path: "/advisory-network", icon: Network },
      { name: "My Feed", path: "/my-feed", icon: Grid3x3 },
    ],
  },
  {
    title: "Seller & Tools",
    items: [
      { name: "Sell", path: "/sell", icon: Store },
      { name: "Contact", path: "/contact", icon: Phone },
      { name: "Help", path: "/help", icon: BadgeHelp },
      { name: "Mortgage Calculator", path: "/mortgage-calculator", icon: Calculator },
      { name: "Compare", path: "/compare", icon: GitCompare },
    ],
  },
  {
    title: "Demos & Experiments",
    items: [
      { name: "Landing Geist", path: "/landing-geist", icon: Sparkles },
      { name: "Landing GSAP", path: "/landing-gsap", icon: Zap },
      { name: "Landing Light", path: "/landing-light", icon: Sun },
      { name: "Landing Spline", path: "/landing-spline", icon: Grid3x3 },
      { name: "Landing Voice", path: "/landing-voice", icon: Mic },
      { name: "Mobile Storyboard", path: "/mobile-storyboard", icon: Smartphone },
      { name: "Mobile Voice Assistant", path: "/mobile-voice-assistant", icon: Mic },
      { name: "Appraisal Report", path: "/appraisal-report", icon: FileText },
      { name: "Enterprise AI Platform", path: "/enterprise-ai-platform", icon: Building },
      { name: "First Home Dashboard", path: "/first-home-dashboard", icon: Home },
    ],
  },
  {
    title: "Listings",
    items: [
      { name: "Listing Wolseley", path: "/listing-wolseley", icon: Building },
      { name: "Listing Wolseley Prestige", path: "/listing-wolseley-prestige", icon: Star },
    ],
  },
  {
    title: "Company",
    items: [
      { name: "About", path: "/about", icon: Info },
      { name: "Careers", path: "/careers", icon: Briefcase },
      { name: "Press", path: "/press", icon: Newspaper },
    ],
  },
  {
    title: "Legal",
    items: [
      { name: "Terms", path: "/terms", icon: ScrollText },
      { name: "Privacy", path: "/privacy", icon: Shield },
      { name: "AUSTRAC", path: "/austrac", icon: Landmark },
    ],
  },
  {
    title: "Admin",
    items: [
      { name: "Admin", path: "/admin", icon: Settings },
      { name: "Admin Settings", path: "/admin/settings", icon: Settings },
      { name: "Team", path: "/admin/team", icon: Users },
      { name: "Billing", path: "/admin/billing", icon: Wallet },
      { name: "Integrations", path: "/admin/integrations", icon: Zap },
      { name: "Security", path: "/admin/security", icon: Shield },
    ],
  },
];

export const GlobalSidebar = () => {
  const pathname = usePathname();

  const isActiveRoute = (path: string) => {
    if (path === "/") return pathname === "/";
    // Handle dynamic routes
    if (path.includes(":")) {
      const basePath = path.split("/:")[0];
      return pathname.startsWith(basePath);
    }
    return pathname.startsWith(path);
  };

  return (
    <Sidebar>
      <SidebarHeader className="border-b border-border/50">
        <div className="flex items-center gap-2 px-2 py-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg">
            <Home className="w-4 h-4 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-foreground truncate">HAUS</p>
            <p className="text-[10px] text-muted-foreground">All Routes</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        {routeGroups.map((group, groupIndex) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.path}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActiveRoute(item.path)}
                      tooltip={item.name}
                    >
                      <Link href={item.path}>
                        <item.icon className="w-4 h-4" />
                        <span>{item.name}</span>
                        {isActiveRoute(item.path) && (
                          <ChevronRight className="ml-auto w-4 h-4" />
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
            {groupIndex < routeGroups.length - 1 && <SidebarSeparator />}
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
};
