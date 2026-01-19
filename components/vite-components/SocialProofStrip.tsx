import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

const AnimatedCounter = ({ end, suffix = "", prefix = "", duration = 2000 }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const startTime = Date.now();
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOut * end));
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
  }, [end, duration, hasAnimated]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

const partnerLogos = [
  { name: "Agency A", color: "from-brand-purple to-brand-pink" },
  { name: "Agency B", color: "from-brand-cyan to-brand-blue" },
  { name: "Agency C", color: "from-brand-green to-brand-cyan" },
  { name: "Agency D", color: "from-brand-amber to-brand-pink" },
  { name: "Agency E", color: "from-brand-pink to-brand-purple" },
  { name: "Agency F", color: "from-brand-blue to-brand-green" },
];

export const SocialProofStrip = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-8">
      <div className="relative overflow-hidden rounded-2xl bg-secondary/50 border border-glass-border backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-glass opacity-50" />
        
        <div className="relative py-6 px-6 sm:px-8">
          {/* Stats Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-center">
            <div className="flex items-center gap-2">
              <span className="text-2xl sm:text-3xl font-semibold text-foreground font-geist tracking-tight">
                <AnimatedCounter end={2400} suffix="+" />
              </span>
              <span className="text-sm text-muted-foreground font-geist">Agents trusting HAUS</span>
            </div>
            
            <div className="hidden sm:block w-px h-8 bg-border" />
            
            <div className="flex items-center gap-2">
              <span className="text-2xl sm:text-3xl font-semibold text-foreground font-geist tracking-tight">
                $<AnimatedCounter end={1.2} suffix="B" />
              </span>
              <span className="text-sm text-muted-foreground font-geist">Transaction volume</span>
            </div>
            
            <div className="hidden sm:block w-px h-8 bg-border" />
            
            <div className="flex items-center gap-2">
              <span className="text-2xl sm:text-3xl font-semibold text-foreground font-geist tracking-tight">
                <AnimatedCounter end={98} suffix="%" />
              </span>
              <span className="text-sm text-muted-foreground font-geist">Client satisfaction</span>
            </div>
          </div>

          {/* Divider */}
          <div className="my-5 border-t border-glass-border" />

          {/* Partner Logos - Infinite Scroll */}
          <div className="relative">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-xs text-muted-foreground font-geist uppercase tracking-wider">Trusted by leading agencies</span>
            </div>
            
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll-x gap-8">
                {[...partnerLogos, ...partnerLogos].map((logo, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 flex items-center justify-center"
                  >
                    <div 
                      className={cn(
                        "w-24 h-10 rounded-lg bg-gradient-to-r opacity-20 hover:opacity-40 transition-opacity",
                        logo.color
                      )}
                    />
                  </div>
                ))}
              </div>
              
              {/* Fade edges */}
              <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-secondary/50 to-transparent pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-secondary/50 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
