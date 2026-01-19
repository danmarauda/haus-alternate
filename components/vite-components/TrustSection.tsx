import { Shield, Mic, Scale, Layers } from "lucide-react";
import { VoiceSearchCard } from "./VoiceSearchCard";
import { AIAssistantCard } from "./AIAssistantCard";
import { SectionErrorBoundary } from "./SectionErrorBoundary";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const TrustSection = () => {
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Left Column - Value Proposition */}
        <div 
          ref={leftRef}
          className={`transition-all duration-700 ${leftVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="inline-flex items-center gap-2 text-xs text-muted-foreground mb-3">
            <span className="w-2 h-2 rounded-full bg-foreground animate-pulse" />
            EARLY ACCESS
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground font-semibold leading-tight font-display">
            A Revolution in<br />
            <span className="text-foreground">
              Real Estate
            </span>
          </h1>
          <p className="mt-4 text-muted-foreground text-sm sm:text-base max-w-md">
            Search, invest, buy, and manage in one AI‑native platform. Voice‑first. Compliance‑ready. Built for Australians.
          </p>
          <p className="mt-3 text-foreground text-sm inline-flex items-center gap-2">
            <Shield className="w-4 h-4 text-foreground" />
            Don't put up with dodgy agent tactics.
          </p>
          
          {/* CTA Buttons */}
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-all">
              Get Early Access
              <span className="group-hover:translate-x-0.5 transition-transform">→</span>
            </button>
            <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-card ring-1 ring-border text-foreground text-sm font-medium hover:bg-muted transition-colors">
              Explore Products
            </button>
          </div>
          
          {/* Feature Pills */}
          <div className="mt-10 grid grid-cols-1 gap-3">
            {[
              { icon: Mic, title: "Voice-First Search", desc: "Ask naturally. No more checkbox hell.", delay: 0 },
              { icon: Scale, title: "Fair Play Protocol", desc: "No underquoting. No dodgy tactics.", delay: 100 },
              { icon: Layers, title: "Transparency by Design", desc: "Every fee disclosed. Plain English.", delay: 200 },
            ].map((feature, i) => (
              <div 
                key={i}
                className={`p-4 rounded-2xl bg-card/70 backdrop-blur ring-1 ring-border/60 hover:ring-foreground/20 transition-all duration-300 hover:scale-[1.02] cursor-pointer ${
                  leftVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${feature.delay + 300}ms` }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-muted ring-1 ring-border flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <p className="text-foreground text-sm font-medium">{feature.title}</p>
                    <p className="text-xs text-muted-foreground">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Interactive Cards */}
        <div 
          ref={rightRef}
          className="grid gap-6"
        >
          <div 
            className={`transition-all duration-700 ${rightVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <SectionErrorBoundary sectionName="Voice Search">
              <VoiceSearchCard />
            </SectionErrorBoundary>
          </div>
          <div 
            className={`transition-all duration-700 delay-150 ${rightVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <SectionErrorBoundary sectionName="AI Assistant">
              <AIAssistantCard />
            </SectionErrorBoundary>
          </div>
        </div>
      </div>
    </section>
  );
};
