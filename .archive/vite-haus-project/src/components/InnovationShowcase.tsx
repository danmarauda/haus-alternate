import { FairPlayProtocolCard } from "./FairPlayProtocolCard";
import { TransparencyReceiptCard } from "./TransparencyReceiptCard";
import { InvestmentIntelligenceCard } from "./InvestmentIntelligenceCard";
import { ImmersiveExperienceCard } from "./ImmersiveExperienceCard";
import { ComplianceCard } from "./ComplianceCard";
import { PlatformPerformanceCard } from "./PlatformPerformanceCard";

export const InnovationShowcase = () => {
  return (
    <div className="space-y-10">
      {/* Trust + Protocol + Transparency */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 grid lg:grid-cols-3 gap-6">
        <FairPlayProtocolCard />
        <TransparencyReceiptCard />
        <InvestmentIntelligenceCard />
      </section>

      {/* Immersive + Compliance + Platform */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 grid lg:grid-cols-3 gap-6">
        <ImmersiveExperienceCard />
        <ComplianceCard />
        <PlatformPerformanceCard />
      </section>
    </div>
  );
};