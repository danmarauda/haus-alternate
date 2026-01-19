import { useState, useEffect } from "react";
import { BookCheck, UserCheck, Banknote, Link, Shield, CheckCircle2, Clock } from "lucide-react";

interface WorkflowStep {
  id: string;
  icon: typeof UserCheck;
  label: string;
  status: "pending" | "processing" | "completed";
  time?: string;
}

const trustBadges = [
  { label: "ISO 27001", icon: Shield },
  { label: "SOC 2", icon: Shield },
  { label: "GDPR", icon: Shield },
];

export const ComplianceCard = () => {
  const [workflowSteps, setWorkflowSteps] = useState<WorkflowStep[]>([
    { id: "identity", icon: UserCheck, label: "Identity Verified", status: "pending" },
    { id: "funds", icon: Banknote, label: "Source of Funds", status: "pending" },
    { id: "ownership", icon: Link, label: "Beneficial Ownership", status: "pending" },
  ]);

  // Animate workflow steps
  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    
    // First step: processing
    timers.push(setTimeout(() => {
      setWorkflowSteps(prev => prev.map(step => 
        step.id === "identity" ? { ...step, status: "processing" } : step
      ));
    }, 500));

    // First step: completed
    timers.push(setTimeout(() => {
      setWorkflowSteps(prev => prev.map(step => 
        step.id === "identity" ? { ...step, status: "completed", time: "47s" } : step
      ));
    }, 1500));

    // Second step: processing
    timers.push(setTimeout(() => {
      setWorkflowSteps(prev => prev.map(step => 
        step.id === "funds" ? { ...step, status: "processing" } : step
      ));
    }, 2000));

    // Second step: completed
    timers.push(setTimeout(() => {
      setWorkflowSteps(prev => prev.map(step => 
        step.id === "funds" ? { ...step, status: "completed", time: "1m 23s" } : step
      ));
    }, 3500));

    // Third step: processing
    timers.push(setTimeout(() => {
      setWorkflowSteps(prev => prev.map(step => 
        step.id === "ownership" ? { ...step, status: "processing" } : step
      ));
    }, 4000));

    // Third step: completed
    timers.push(setTimeout(() => {
      setWorkflowSteps(prev => prev.map(step => 
        step.id === "ownership" ? { ...step, status: "completed", time: "2m 15s" } : step
      ));
    }, 5500));

    return () => timers.forEach(clearTimeout);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "text-emerald-400 bg-emerald-400/10 ring-emerald-400/30";
      case "processing": return "text-amber-400 bg-amber-400/10 ring-amber-400/30";
      default: return "text-muted-foreground bg-muted/30 ring-border";
    }
  };

  const getIconColor = (status: string) => {
    switch (status) {
      case "completed": return "text-emerald-400";
      case "processing": return "text-amber-400";
      default: return "text-muted-foreground";
    }
  };

  return (
    <div className="rounded-2xl bg-card/80 ring-1 ring-border/60 backdrop-blur shadow-2xl overflow-hidden">
      <div className="flex items-center justify-between p-5 border-b border-border/60">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/30 flex items-center justify-center">
            <BookCheck className="w-5 h-5 text-emerald-400" />
          </div>
          <h2 className="text-foreground font-medium tracking-tight">AUSTRAC Compliance</h2>
        </div>
        <span className="text-xs text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full">Automated</span>
      </div>

      <div className="p-5">
        {/* Compliance Badges */}
        <div className="grid grid-cols-4 gap-2 mb-4">
          {["AML", "CDD", "SMR", "KYC"].map((badge, idx) => (
            <div
              key={badge}
              className="p-2.5 rounded-xl bg-card ring-1 ring-border text-center animate-fade-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <span className="text-sm font-medium text-foreground">{badge}</span>
            </div>
          ))}
        </div>

        {/* Animated Workflow Timeline */}
        <div className="p-4 rounded-xl bg-muted/30 ring-1 ring-border mb-4">
          <h3 className="text-sm font-medium text-foreground mb-4">Verification Workflow</h3>
          <div className="space-y-3">
            {workflowSteps.map((step, idx) => (
              <div key={step.id} className="relative">
                {/* Connecting line */}
                {idx < workflowSteps.length - 1 && (
                  <div className={`absolute left-4 top-8 w-0.5 h-6 transition-colors duration-500 ${
                    step.status === "completed" ? "bg-emerald-400/50" : "bg-border"
                  }`} />
                )}
                
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg ring-1 flex items-center justify-center transition-all duration-500 ${getStatusColor(step.status)}`}>
                    {step.status === "completed" ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 animate-scale-in" />
                    ) : step.status === "processing" ? (
                      <Clock className="w-4 h-4 text-amber-400 animate-spin" />
                    ) : (
                      <step.icon className={`w-4 h-4 ${getIconColor(step.status)}`} />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className={`text-sm transition-colors duration-300 ${
                      step.status === "completed" ? "text-foreground" : "text-muted-foreground"
                    }`}>
                      {step.label}
                    </p>
                    {step.status === "completed" && step.time && (
                      <p className="text-[10px] text-emerald-400 animate-fade-in">Completed in {step.time}</p>
                    )}
                    {step.status === "processing" && (
                      <p className="text-[10px] text-amber-400 animate-pulse">Verifying...</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-3 gap-2">
          {trustBadges.map((badge, idx) => (
            <div
              key={badge.label}
              className="p-3 rounded-xl bg-card ring-1 ring-border flex flex-col items-center gap-2 animate-fade-in"
              style={{ animationDelay: `${(idx + 3) * 100}ms` }}
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 ring-1 ring-emerald-500/30 flex items-center justify-center">
                <badge.icon className="w-4 h-4 text-emerald-400" />
              </div>
              <span className="text-[10px] text-muted-foreground">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
