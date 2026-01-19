import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface VoiceWaveformProps {
  isActive: boolean;
  className?: string;
}

export const VoiceWaveform = ({ isActive, className }: VoiceWaveformProps) => {
  const [bars, setBars] = useState<number[]>([0.3, 0.5, 0.4, 0.6, 0.3]);

  useEffect(() => {
    if (!isActive) {
      setBars([0.3, 0.3, 0.3, 0.3, 0.3]);
      return;
    }

    const interval = setInterval(() => {
      setBars(prev => prev.map(() => 0.2 + Math.random() * 0.8));
    }, 100);

    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <div className={cn("flex items-center justify-center gap-0.5 h-5", className)}>
      {bars.map((height, i) => (
        <div
          key={i}
          className={cn(
            "w-0.5 rounded-full transition-all duration-100",
            isActive ? "bg-brand-cyan" : "bg-white/30"
          )}
          style={{
            height: `${height * 100}%`,
            animationDelay: `${i * 50}ms`
          }}
        />
      ))}
    </div>
  );
};
