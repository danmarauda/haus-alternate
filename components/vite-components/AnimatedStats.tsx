import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedStatProps {
  value: number | string;
  label: string;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export const AnimatedStat = ({ 
  value, 
  label, 
  suffix = "", 
  prefix = "",
  duration = 2000,
  className 
}: AnimatedStatProps) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const numericValue = typeof value === 'string' ? parseFloat(value.replace(/[^0-9.]/g, '')) : value;
  const isDecimal = String(value).includes('.');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const startTime = Date.now();
          
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            
            if (isDecimal) {
              setDisplayValue(parseFloat((eased * numericValue).toFixed(1)));
            } else {
              setDisplayValue(Math.floor(eased * numericValue));
            }
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [numericValue, duration, hasAnimated, isDecimal]);

  return (
    <div 
      ref={ref}
      className={cn(
        "rounded-xl bg-secondary border border-glass-border p-3",
        "transform transition-all duration-300 hover:scale-105 hover:border-brand-cyan/30",
        className
      )}
    >
      <div className="text-xl font-semibold tracking-tight text-foreground font-geist tabular-nums">
        {prefix}{displayValue.toLocaleString()}{suffix}
      </div>
      <p className="text-[11px] text-muted-foreground mt-0.5 font-geist">{label}</p>
    </div>
  );
};

interface AnimatedStatsGridProps {
  stats: Array<{
    value: number | string;
    label: string;
    suffix?: string;
    prefix?: string;
  }>;
  className?: string;
}

export const AnimatedStatsGrid = ({ stats, className }: AnimatedStatsGridProps) => {
  return (
    <div className={cn("grid grid-cols-3 gap-4", className)}>
      {stats.map((stat, idx) => (
        <AnimatedStat 
          key={idx}
          value={stat.value}
          label={stat.label}
          suffix={stat.suffix}
          prefix={stat.prefix}
        />
      ))}
    </div>
  );
};
