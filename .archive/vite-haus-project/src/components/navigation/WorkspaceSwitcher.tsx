import { useState } from "react";
import { 
  ChevronDown, 
  Search, 
  LayoutDashboard, 
  BarChart3, 
  Bot, 
  Plus, 
  Check,
  Sparkles,
  Settings,
  Users,
  ArrowUpRight,
  Circle
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";

interface Workspace {
  id: string;
  name: string;
  icon: React.ElementType;
  description: string;
  href: string;
  gradient: string;
  status?: "active" | "idle" | "busy";
  notifications?: number;
}

const workspaces: Workspace[] = [
  { 
    id: "search", 
    name: "HAUS Search", 
    icon: Search, 
    description: "Property discovery", 
    href: "/",
    gradient: "from-foreground/80 to-foreground/60",
    status: "active",
    notifications: 3
  },
  { 
    id: "dashboard", 
    name: "HAUS Dashboard", 
    icon: LayoutDashboard, 
    description: "Your command center", 
    href: "/dashboard",
    gradient: "from-foreground/70 to-foreground/50",
    status: "idle",
    notifications: 12
  },
  { 
    id: "analytics", 
    name: "HAUS Analytics", 
    icon: BarChart3, 
    description: "Market insights", 
    href: "/analytics",
    gradient: "from-foreground/60 to-foreground/40",
    status: "idle"
  },
  { 
    id: "ai", 
    name: "HAUS AI Assistant", 
    icon: Bot, 
    description: "Intelligent support", 
    href: "/ai",
    gradient: "from-foreground/75 to-foreground/55",
    status: "busy"
  },
];

const quickLinks = [
  { icon: Settings, name: "Workspace Settings", href: "/settings/workspace" },
  { icon: Users, name: "Team Members", href: "/settings/team" },
];

const statusColors = {
  active: "bg-foreground",
  idle: "bg-muted-foreground",
  busy: "bg-foreground animate-pulse",
};

export const WorkspaceSwitcher = () => {
  const [currentWorkspace, setCurrentWorkspace] = useState(workspaces[0]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2.5 px-2.5 py-2 rounded-xl hover:bg-muted/50 transition-all focus-ring group">
          {/* Workspace icon with gradient and status */}
          <div className="relative">
            <div className={`h-8 w-8 rounded-xl bg-gradient-to-br ${currentWorkspace.gradient} flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform`}>
              <currentWorkspace.icon className="w-4 h-4 text-white" />
            </div>
            {/* Status indicator */}
            <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full ${statusColors[currentWorkspace.status || "idle"]} border-2 border-background`} />
          </div>
          
          {/* Workspace name and description */}
          <div className="hidden sm:flex flex-col items-start">
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-semibold text-foreground">{currentWorkspace.name}</span>
              {currentWorkspace.notifications && currentWorkspace.notifications > 0 && (
                <span className="px-1.5 py-0.5 rounded-full bg-red-500 text-white text-[10px] font-bold min-w-[18px] text-center">
                  {currentWorkspace.notifications > 9 ? "9+" : currentWorkspace.notifications}
                </span>
              )}
            </div>
            <span className="text-[10px] text-muted-foreground">{currentWorkspace.description}</span>
          </div>
          
          {/* Chevron with animation */}
          <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
        </button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent align="start" className="w-80 p-0 overflow-hidden">
        {/* Header */}
        <div className="p-3 bg-muted/30 border-b border-border/50">
          <div className="flex items-center justify-between">
            <DropdownMenuLabel className="p-0 text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Workspaces
            </DropdownMenuLabel>
            <button className="flex items-center gap-1 px-2 py-1 rounded-lg text-xs text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors">
              <Settings className="w-3 h-3" />
              Manage
            </button>
          </div>
        </div>

        {/* Workspace list */}
        <div className="p-1.5">
          {workspaces.map((workspace) => (
            <DropdownMenuItem
              key={workspace.id}
              onClick={() => {
                setCurrentWorkspace(workspace);
                setIsOpen(false);
              }}
              className="flex items-center gap-3 p-2.5 rounded-xl cursor-pointer focus:bg-muted/50"
            >
              {/* Icon with gradient */}
              <div className="relative">
                <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${workspace.gradient} flex items-center justify-center shadow-md`}>
                  <workspace.icon className="w-5 h-5 text-white" />
                </div>
                <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full ${statusColors[workspace.status || "idle"]} border-2 border-popover`} />
              </div>
              
              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-foreground truncate">{workspace.name}</p>
                  {workspace.notifications && workspace.notifications > 0 && (
                    <span className="px-1.5 py-0.5 rounded-full bg-muted text-muted-foreground text-[10px] font-medium">
                      {workspace.notifications}
                    </span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground truncate">{workspace.description}</p>
              </div>
              
              {/* Check mark for current */}
              {currentWorkspace.id === workspace.id && (
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                </div>
              )}
            </DropdownMenuItem>
          ))}
        </div>

        <DropdownMenuSeparator className="m-0" />

        {/* Quick links */}
        <div className="p-1.5">
          {quickLinks.map((link) => (
            <DropdownMenuItem
              key={link.name}
              className="flex items-center gap-3 p-2.5 rounded-xl cursor-pointer"
            >
              <div className="w-8 h-8 rounded-lg bg-muted/50 flex items-center justify-center">
                <link.icon className="w-4 h-4 text-muted-foreground" />
              </div>
              <span className="text-sm text-muted-foreground">{link.name}</span>
              <ArrowUpRight className="w-3 h-3 text-muted-foreground/50 ml-auto" />
            </DropdownMenuItem>
          ))}
        </div>

        <DropdownMenuSeparator className="m-0" />

        {/* Add workspace */}
        <div className="p-1.5">
          <DropdownMenuItem className="flex items-center gap-3 p-3 rounded-xl cursor-pointer border border-dashed border-muted-foreground/20 hover:border-muted-foreground/40 transition-colors">
            <div className="h-10 w-10 rounded-xl bg-muted/30 border border-dashed border-muted-foreground/30 flex items-center justify-center">
              <Plus className="w-5 h-5 text-muted-foreground" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-muted-foreground">Create new workspace</p>
              <p className="text-xs text-muted-foreground/60">Set up a custom workflow</p>
            </div>
            <Sparkles className="w-4 h-4 text-violet-500" />
          </DropdownMenuItem>
        </div>

        {/* Footer */}
        <div className="p-3 bg-muted/20 border-t border-border/50">
          <div className="flex items-center justify-between text-[10px] text-muted-foreground">
            <span>4 workspaces • 3 active</span>
            <a href="/settings/workspaces" className="text-brand-purple hover:underline">View all</a>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
