import { useState, useEffect, useMemo } from "react";
import { 
  Search, 
  Home, 
  FileText, 
  Settings, 
  Users, 
  Plus, 
  BarChart3,
  Bot,
  Clock,
  Command,
  Compass,
  LayoutDashboard,
  Map,
  Star,
  TrendingUp,
  Calendar,
  Bell,
  Wallet,
  Shield,
  Zap,
  ArrowRight,
  Sparkles,
  Building,
  DollarSign,
  MapPin,
  Hash
} from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

interface CommandPaletteProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const recentItems = [
  { icon: Home, name: "Modern Downtown Loft - $1.2M", type: "Property", href: "/property/1", badge: "Viewed 2h ago" },
  { icon: Users, name: "Sarah Chen", type: "Client", href: "/clients/1", badge: "High Priority" },
  { icon: FileText, name: "Purchase Agreement - 123 Main St", type: "Document", href: "/documents/1" },
  { icon: Building, name: "Luxury Penthouse Suite", type: "Property", href: "/property/2", badge: "New" },
];

const quickActions = [
  { icon: Search, name: "New Property Search", shortcut: "⌘N", action: () => {}, gradient: "from-blue-500 to-cyan-500" },
  { icon: Plus, name: "Add New Listing", shortcut: "⌘L", action: () => {}, gradient: "from-emerald-500 to-teal-500" },
  { icon: Bot, name: "Ask AI Assistant", shortcut: "⌘I", action: () => {}, gradient: "from-teal-500 to-cyan-500" },
  { icon: Calendar, name: "Schedule Viewing", shortcut: "⌘V", action: () => {}, gradient: "from-amber-500 to-orange-500" },
  { icon: BarChart3, name: "View Analytics", shortcut: "⌘A", action: () => {}, gradient: "from-cyan-500 to-teal-500" },
];

const navigationItems = [
  { icon: Compass, name: "Explore Properties", href: "/explore", description: "Browse all listings" },
  { icon: LayoutDashboard, name: "Dashboard", href: "/dashboard", description: "Your command center" },
  { icon: BarChart3, name: "Analytics", href: "/analytics", description: "Market insights" },
  { icon: Bot, name: "AI Assistant", href: "/ai", description: "Get intelligent help" },
  { icon: Map, name: "Map View", href: "/map", description: "Geographic search" },
  { icon: Star, name: "Saved Properties", href: "/saved", description: "Your favorites" },
  { icon: Users, name: "Clients", href: "/clients", description: "Manage contacts" },
  { icon: Calendar, name: "Schedule", href: "/schedule", description: "Appointments" },
  { icon: Settings, name: "Settings", href: "/settings", description: "Preferences" },
];

const aiCommands = [
  { icon: Sparkles, name: "Analyze property value", description: "Get AI valuation" },
  { icon: TrendingUp, name: "Predict market trends", description: "Forecast prices" },
  { icon: FileText, name: "Generate property description", description: "AI copywriting" },
  { icon: DollarSign, name: "Calculate investment ROI", description: "Financial analysis" },
  { icon: MapPin, name: "Neighborhood analysis", description: "Area insights" },
];

const filterCommands = [
  { icon: Home, name: "filter: type = house", description: "Show only houses" },
  { icon: Building, name: "filter: type = apartment", description: "Show only apartments" },
  { icon: DollarSign, name: "filter: price < 500k", description: "Under $500,000" },
  { icon: Star, name: "filter: rating > 4", description: "Highly rated" },
];

export const CommandPalette = ({ open: controlledOpen, onOpenChange }: CommandPaletteProps) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const isOpen = controlledOpen !== undefined ? controlledOpen : open;
  const setIsOpen = onOpenChange || setOpen;

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen(!isOpen);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [isOpen, setIsOpen]);

  const isAIQuery = search.startsWith("/ai ") || search.startsWith("@ai ");
  const isFilterQuery = search.startsWith("filter:") || search.startsWith("#");

  return (
    <>
      {/* Enhanced trigger button */}
      <button
        onClick={() => setIsOpen(true)}
        className="hidden sm:flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-muted/30 border border-border/50 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 hover:border-border transition-all group"
      >
        <Search className="w-4 h-4 group-hover:scale-105 transition-transform" />
        <span className="hidden md:inline text-muted-foreground/80">Search everything...</span>
        <div className="hidden md:flex items-center gap-0.5 px-1.5 py-0.5 rounded-md bg-background/50 border border-border/50">
          <Command className="w-3 h-3" />
          <span className="text-[10px] font-medium">K</span>
        </div>
      </button>

      <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
        <div className="relative">
          <CommandInput 
            placeholder="Search properties, clients, documents, or type a command..."
            value={search}
            onValueChange={setSearch}
            className="h-14"
          />
          {/* Search mode indicator */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
            {isAIQuery && (
              <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-medium flex items-center gap-1">
                <Bot className="w-3 h-3" />
                AI Mode
              </span>
            )}
            {isFilterQuery && (
              <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 text-xs font-medium flex items-center gap-1">
                <Hash className="w-3 h-3" />
                Filter
              </span>
            )}
          </div>
        </div>

        <CommandList className="max-h-[60vh]">
          <CommandEmpty>
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <div className="w-12 h-12 rounded-2xl bg-muted/50 flex items-center justify-center mb-3">
                <Search className="w-6 h-6 text-muted-foreground" />
              </div>
              <p className="text-sm text-muted-foreground">No results found</p>
              <p className="text-xs text-muted-foreground/60 mt-1">Try a different search term or command</p>
              <div className="flex gap-2 mt-4">
                <button 
                  onClick={() => setSearch("/ai ")}
                  className="px-3 py-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 text-xs font-medium hover:bg-cyan-500/20 transition-colors"
                >
                  Try AI Search
                </button>
                <button 
                  onClick={() => setSearch("")}
                  className="px-3 py-1.5 rounded-lg bg-muted text-muted-foreground text-xs font-medium hover:bg-muted/80 transition-colors"
                >
                  Clear Search
                </button>
              </div>
            </div>
          </CommandEmpty>
          
          {/* Quick Actions - Always visible when no search */}
          {!search && (
            <>
              <CommandGroup heading={
                <div className="flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-amber-500" />
                  <span>Quick Actions</span>
                </div>
              }>
                <div className="grid grid-cols-5 gap-1.5 p-1.5">
                  {quickActions.map((action) => (
                    <button
                      key={action.name}
                      onClick={action.action}
                      className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors group"
                    >
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${action.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                        <action.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-[10px] text-muted-foreground group-hover:text-foreground transition-colors text-center leading-tight">
                        {action.name.split(' ').slice(0, 2).join(' ')}
                      </span>
                    </button>
                  ))}
                </div>
              </CommandGroup>

              <CommandSeparator />
            </>
          )}

          {/* Recent Items */}
          <CommandGroup heading={
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-muted-foreground" />
              <span>Recent</span>
            </div>
          }>
            {recentItems.map((item) => (
              <CommandItem key={item.name} className="flex items-center gap-3 p-2 rounded-xl">
                <div className="w-10 h-10 rounded-xl bg-muted/50 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-muted-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-foreground truncate">{item.name}</p>
                  <div className="flex items-center gap-2">
                    <p className="text-xs text-muted-foreground">{item.type}</p>
                    {item.badge && (
                      <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-medium ${
                        item.badge === "High Priority" 
                          ? "bg-red-500/20 text-red-400"
                          : item.badge === "New"
                          ? "bg-emerald-500/20 text-emerald-400"
                          : "bg-muted text-muted-foreground"
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground/30" />
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandSeparator />

          {/* AI Commands */}
          {(isAIQuery || search === "") && (
            <>
              <CommandGroup heading={
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
                  <span>AI Commands</span>
                  <span className="px-1.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-400 text-[10px] font-medium">
                    Type /ai
                  </span>
                </div>
              }>
                {aiCommands.map((cmd) => (
                  <CommandItem 
                    key={cmd.name} 
                    className="flex items-center gap-3 p-2 rounded-xl"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-teal-500/20 flex items-center justify-center">
                      <cmd.icon className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <span className="text-sm font-medium text-foreground">{cmd.name}</span>
                      <p className="text-xs text-muted-foreground">{cmd.description}</p>
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
              <CommandSeparator />
            </>
          )}

          {/* Navigation */}
          <CommandGroup heading={
            <div className="flex items-center gap-2">
              <Compass className="w-3.5 h-3.5 text-blue-500" />
              <span>Navigation</span>
            </div>
          }>
            {navigationItems.map((item) => (
              <CommandItem key={item.name} className="flex items-center gap-3 p-2 rounded-xl">
                <div className="w-8 h-8 rounded-lg bg-muted/50 flex items-center justify-center">
                  <item.icon className="w-4 h-4 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <span className="text-sm">{item.name}</span>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>

          {/* Keyboard shortcuts hint */}
          {!search && (
            <div className="p-3 border-t border-border/50">
              <div className="flex items-center justify-center gap-4 text-[10px] text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <kbd className="px-1.5 py-0.5 rounded bg-muted font-mono">↑↓</kbd>
                  Navigate
                </span>
                <span className="flex items-center gap-1.5">
                  <kbd className="px-1.5 py-0.5 rounded bg-muted font-mono">↵</kbd>
                  Select
                </span>
                <span className="flex items-center gap-1.5">
                  <kbd className="px-1.5 py-0.5 rounded bg-muted font-mono">esc</kbd>
                  Close
                </span>
                <span className="flex items-center gap-1.5">
                  <kbd className="px-1.5 py-0.5 rounded bg-muted font-mono">/ai</kbd>
                  AI Mode
                </span>
              </div>
            </div>
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
};
