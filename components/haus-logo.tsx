/**
 * HausLogo - HAUS Brand Logo Component
 *
 * A simple, reusable logo component for the HAUS brand.
 * Displays the HAUS name with consistent styling.
 */

import { cn } from "@/lib/utils"

interface HausLogoProps {
  className?: string
  variant?: "default" | "light" | "dark"
}

export function HausLogo({ className, variant = "default" }: HausLogoProps) {
  return (
    <div
      className={cn(
        "font-display text-xl font-medium tracking-tight",
        variant === "light" && "text-white",
        variant === "dark" && "text-zinc-900",
        variant === "default" && "text-zinc-900 dark:text-white",
        className
      )}
    >
      HAUS
    </div>
  )
}
