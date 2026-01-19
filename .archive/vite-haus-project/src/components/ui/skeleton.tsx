import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-muted relative overflow-hidden",
        "after:absolute after:inset-0 after:translate-x-[-100%]",
        "after:bg-gradient-to-r after:from-transparent after:via-background/20 after:to-transparent",
        "after:animate-[shimmer_2s_infinite]",
        className
      )}
      {...props}
    />
  )
}

export { Skeleton }
