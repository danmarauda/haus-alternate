import { cn } from "@/lib/utils";

interface AnimatedGradientMeshProps {
  className?: string;
}

export const AnimatedGradientMesh = ({ className }: AnimatedGradientMeshProps) => {
  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      {/* Primary gradient orbs - neutral/monochrome */}
      <div className="absolute -top-1/2 -left-1/4 w-[80%] h-[80%] rounded-full bg-gradient-radial from-foreground/5 via-foreground/2 to-transparent blur-3xl animate-float" />
      <div className="absolute -bottom-1/4 -right-1/4 w-[60%] h-[60%] rounded-full bg-gradient-radial from-foreground/4 via-foreground/1 to-transparent blur-3xl animate-float-delayed" />
      <div className="absolute top-1/4 right-1/3 w-[40%] h-[40%] rounded-full bg-gradient-radial from-foreground/3 via-foreground/1 to-transparent blur-3xl animate-float-slow" />
      
      {/* Subtle grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay bg-noise" />
    </div>
  );
};
