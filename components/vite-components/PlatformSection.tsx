import { FairPlayProtocolCard } from "./FairPlayProtocolCard";
import { TransparencyReceiptCard } from "./TransparencyReceiptCard";
import { InvestmentIntelligenceCard } from "./InvestmentIntelligenceCard";
import { ImmersiveExperienceCard } from "./ImmersiveExperienceCard";
import { ComplianceCard } from "./ComplianceCard";
import { PlatformPerformanceCard } from "./PlatformPerformanceCard";
import { SectionErrorBoundary } from "./SectionErrorBoundary";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const PlatformSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={sectionRef} className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Platform <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Capabilities</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enterprise-grade features designed for the modern property professional
          </p>
        </div>

        {/* First Row: Fair Play, Transparency, Investment */}
        <div className="grid lg:grid-cols-3 gap-6 mb-6">
          <div 
            className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "100ms" }}
          >
            <SectionErrorBoundary sectionName="Fair Play Protocol">
              <FairPlayProtocolCard />
            </SectionErrorBoundary>
          </div>
          <div 
            className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "200ms" }}
          >
            <SectionErrorBoundary sectionName="Transparency Receipt">
              <TransparencyReceiptCard />
            </SectionErrorBoundary>
          </div>
          <div 
            className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "300ms" }}
          >
            <SectionErrorBoundary sectionName="Investment Intelligence">
              <InvestmentIntelligenceCard />
            </SectionErrorBoundary>
          </div>
        </div>

        {/* Second Row: Immersive, Compliance, Performance */}
        <div className="grid lg:grid-cols-3 gap-6">
          <div 
            className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "400ms" }}
          >
            <SectionErrorBoundary sectionName="Immersive Experience">
              <ImmersiveExperienceCard />
            </SectionErrorBoundary>
          </div>
          <div 
            className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "500ms" }}
          >
            <SectionErrorBoundary sectionName="Compliance">
              <ComplianceCard />
            </SectionErrorBoundary>
          </div>
          <div 
            className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "600ms" }}
          >
            <SectionErrorBoundary sectionName="Platform Performance">
              <PlatformPerformanceCard />
            </SectionErrorBoundary>
          </div>
        </div>
      </div>
    </section>
  );
};
