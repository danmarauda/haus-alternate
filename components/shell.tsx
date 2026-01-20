import { cn } from "@/lib/utils"
import { Header } from "./header"
import { Footer } from "./footer"

interface ShellProps {
  children: React.ReactNode
  className?: string
  showHeader?: boolean
  showFooter?: boolean
  variant?: "default" | "landing" | "minimal"
}

/**
 * Universal Page Shell
 * Provides consistent layout structure across all pages
 *
 * Variants:
 * - default: Standard page with header and footer
 * - landing: Landing page with minimal navigation
 * - minimal: Minimal layout (auth pages, etc.)
 */
export function Shell({
  children,
  className,
  showHeader = true,
  showFooter = true,
  variant = "default",
}: ShellProps) {
  return (
    <div className={cn("min-h-screen flex flex-col bg-background", className)}>
      {showHeader && <Header variant={variant} />}

      <main className={cn(
        "flex-1",
        variant === "landing" && "flex-1",
        className
      )}>
        {children}
      </main>

      {showFooter && <Footer />}
    </div>
  )
}
