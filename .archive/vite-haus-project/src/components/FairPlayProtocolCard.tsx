import { useState, useEffect } from "react";
import { Shield, BadgeCheck, AlertTriangle, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";

interface FlaggedItem {
  id: number;
  type: string;
  risk: "high" | "medium" | "low";
  description: string;
}

const ProgressRing = ({ progress, color, size = 60 }: { progress: number; color: string; size?: number }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);
  const strokeWidth = 6;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (animatedProgress / 100) * circumference;

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedProgress(progress), 300);
    return () => clearTimeout(timer);
  }, [progress]);

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg className="transform -rotate-90" width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
          className="text-muted/30"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-sm font-semibold text-foreground">{animatedProgress}%</span>
      </div>
    </div>
  );
};

export const FairPlayProtocolCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [flaggedItems, setFlaggedItems] = useState<FlaggedItem[]>([]);
  const [isScanning, setIsScanning] = useState(true);

  // Simulate real-time fraud detection
  useEffect(() => {
    const items: FlaggedItem[] = [
      { id: 1, type: "Price Anomaly", risk: "high", description: "20% below market value" },
      { id: 2, type: "Image Reuse", risk: "medium", description: "Photos from 2019 listing" },
      { id: 3, type: "Fee Hidden", risk: "low", description: "Admin fee in fine print" },
    ];

    let index = 0;
    const interval = setInterval(() => {
      const next = items[index];

      // Extra safety: never allow an undefined element into state.
      if (!next) {
        setIsScanning(false);
        clearInterval(interval);
        return;
      }

      setFlaggedItems((prev) => [...prev, next]);
      index++;

      if (index >= items.length) {
        setIsScanning(false);
        clearInterval(interval);
      }
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "high":
        return "text-red-400 bg-red-400/10";
      case "medium":
        return "text-amber-400 bg-amber-400/10";
      case "low":
        return "text-emerald-400 bg-emerald-400/10";
      default:
        return "text-muted-foreground";
    }
  };

  // Defensive rendering: if anything ever inserts a bad item, we won't crash the page.
  const safeFlaggedItems = flaggedItems.filter((x): x is FlaggedItem => Boolean(x));

  return (
    <div className="rounded-2xl bg-card/80 ring-1 ring-border/60 backdrop-blur shadow-2xl overflow-hidden">
      <div className="flex items-center justify-between p-5 border-b border-border/60">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/30 flex items-center justify-center relative">
            <Shield className="w-5 h-5 text-emerald-400" />
            <CheckCircle2 className="w-3 h-3 text-emerald-400 absolute -top-1 -right-1 animate-scale-in" />
          </div>
          <h2 className="text-foreground font-medium tracking-tight">Fair Play Protocol</h2>
        </div>
        <span className="text-xs text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full">Ethical AI</span>
      </div>

      <div className="p-5">
        {/* Progress Rings */}
        <div className="flex items-center justify-around mb-5">
          <div className="text-center">
            <ProgressRing progress={95} color="hsl(142, 71%, 45%)" />
            <p className="text-xs text-muted-foreground mt-2">Detection Rate</p>
          </div>
          <div className="text-center">
            <ProgressRing progress={100} color="hsl(199, 89%, 48%)" />
            <p className="text-xs text-muted-foreground mt-2">Fee Transparency</p>
          </div>
        </div>

        {/* Real-time Detection Feed */}
        <div className="p-4 rounded-xl bg-muted/30 ring-1 ring-border mb-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-foreground">Live Detection Feed</h3>
            {isScanning && (
              <span className="flex items-center gap-1.5 text-xs text-amber-400">
                <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
                Scanning...
              </span>
            )}
          </div>
          <div className="space-y-2 max-h-32 overflow-y-auto">
            {safeFlaggedItems.length > 0 ? (
              safeFlaggedItems.map((item, idx) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-2 rounded-lg bg-card/60 ring-1 ring-border animate-fade-in"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="flex items-center gap-2">
                    <AlertTriangle className={`w-3.5 h-3.5 ${getRiskColor(item.risk).split(' ')[0]}`} />
                    <span className="text-xs text-foreground">{item.type}</span>
                  </div>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded ${getRiskColor(item.risk)}`}>
                    {item.risk.toUpperCase()}
                  </span>
                </div>
              ))
            ) : (
              <p className="text-xs text-muted-foreground text-center py-2">Initializing scan...</p>
            )}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="p-3 rounded-xl bg-card ring-1 ring-border">
            <div className="flex items-center gap-2">
              <BadgeCheck className="w-4 h-4 text-amber-400" />
              <p className="text-xs text-muted-foreground">Compliance</p>
            </div>
            <p className="text-sm text-foreground mt-1">AUSTRAC Certified</p>
          </div>
          <div className="p-3 rounded-xl bg-card ring-1 ring-border">
            <p className="text-xs text-muted-foreground">Security</p>
            <p className="text-lg text-emerald-400 font-medium">Zero</p>
            <p className="text-[10px] text-muted-foreground">breach record</p>
          </div>
        </div>

        {/* Expandable Accordion */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between p-3 rounded-xl bg-muted/30 ring-1 ring-border hover:bg-muted/50 transition-colors"
        >
          <span className="text-sm text-foreground">Learn more about Fair Play</span>
          {isExpanded ? (
            <ChevronUp className="w-4 h-4 text-muted-foreground" />
          ) : (
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          )}
        </button>
        {isExpanded && (
          <div className="mt-3 p-4 rounded-xl bg-card/60 ring-1 ring-border animate-fade-in">
            <ul className="text-xs text-muted-foreground space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                <span>AI-powered detection of misleading listings and hidden fees</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                <span>Real-time monitoring of 50+ risk indicators per listing</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                <span>Automatic flagging and agent notification system</span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
