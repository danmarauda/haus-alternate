import { Button } from "@/components/ui/button";
import { Home, Zap, Grid, Sun, Moon } from "lucide-react";
import { WorkspaceSwitcher } from "@/components/navigation/WorkspaceSwitcher";
import { MegaMenu } from "@/components/navigation/MegaMenu";
import { MobileNav } from "@/components/navigation/MobileNav";
import { CommandPalette } from "@/components/CommandPalette";
import { useTheme } from "@/hooks/useTheme";
import { SidebarTrigger } from "@/components/ui/sidebar";

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Sidebar Trigger + Logo + Workspace Switcher */}
          <div className="flex items-center gap-4">
            <SidebarTrigger />
            <MobileNav />
            
            {/* Logo */}
            <a href="/" className="flex items-center gap-2.5 group">
              <div className="h-9 w-9 rounded-xl bg-foreground flex items-center justify-center transition-transform group-hover:scale-105">
                <Home className="w-4.5 h-4.5 text-background" />
              </div>
              <span className="hidden sm:block text-lg font-semibold tracking-tight text-foreground font-display">
                HAUS
              </span>
            </a>

            {/* Workspace Switcher */}
            <div className="hidden md:block border-l border-border/50 pl-4">
              <WorkspaceSwitcher />
            </div>
          </div>

          {/* Center - Mega Navigation */}
          <MegaMenu />

          {/* Right side - Search, Theme, Actions */}
          <div className="flex items-center gap-2">
            {/* Command Palette / Search */}
            <CommandPalette />

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="hidden sm:flex p-2 rounded-lg hover:bg-muted/50 transition-colors focus-ring"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-muted-foreground" />
              ) : (
                <Moon className="w-4 h-4 text-muted-foreground" />
              )}
            </button>

            {/* Early Access Badge */}
            <a 
              href="#early-access" 
              className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm text-foreground hover:bg-muted/50 transition-colors"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-foreground opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-foreground"></span>
              </span>
              Early Access
            </a>

            {/* CTA Buttons */}
            <Button 
              size="sm"
              className="hidden sm:inline-flex bg-foreground hover:bg-foreground/90 text-background border-0"
            >
              <Zap className="w-4 h-4 mr-2" />
              Get Started
            </Button>

            <Button 
              variant="outline" 
              size="sm"
              className="hidden md:inline-flex border-border/50 hover:bg-muted/50"
            >
              <Grid className="w-4 h-4 mr-2" />
              Products
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
