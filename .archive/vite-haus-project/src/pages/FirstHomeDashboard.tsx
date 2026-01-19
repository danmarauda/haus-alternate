import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Search,
  Check,
  Gift,
  AlertCircle,
  Bell,
  MapPin,
  Calendar,
  Trash2,
  FileCheck,
  UploadCloud,
  BookOpen,
  ArrowRight,
  BedDouble,
  Bath,
  Car,
  DollarSign,
  Hammer,
  MessageSquare,
  FileText,
  Heart,
} from "lucide-react";

interface Step {
  id: string;
  label: string;
  status: "complete" | "active" | "pending";
  icon?: any;
  subtitle?: string;
}

interface Inspection {
  time: string;
  address: string;
  warning?: string;
}

interface Document {
  name: string;
  status: "complete" | "pending" | "upload";
  icon?: any;
}

interface PropertyCard {
  id: string;
  title: string;
  address: string;
  price: string;
  image?: string;
  beds: number;
  baths: number;
  cars: number;
  matchPercentage: string;
  tag?: string;
  tagStyle?: string;
  actionLabel?: string;
  secondaryAction?: any;
  repayment?: string;
  repaymentNote?: string;
}

const FirstHomeDashboard = () => {
  const [mounted, setMounted] = useState(false);
  const [weeklyBudget, setWeeklyBudget] = useState(950);

  useEffect(() => {
    setMounted(true);
  }, []);

  const steps: Step[] = [
    {
      id: "1",
      label: "Goal Set",
      status: "complete",
      subtitle: "Jan 12",
    },
    {
      id: "2",
      label: "Deposit",
      status: "complete",
      subtitle: "$120k Saved",
    },
    {
      id: "3",
      label: "Pre-Approval",
      status: "complete",
      subtitle: "Valid (54 days)",
    },
    {
      id: "4",
      label: "Hunting",
      status: "active",
      subtitle: "4 Active",
    },
    {
      id: "5",
      label: "Offer",
      status: "pending",
    },
    {
      id: "6",
      label: "Settlement",
      status: "pending",
    },
  ];

  const inspections: Inspection[] = [
    {
      time: "10:00 AM - 10:30 AM",
      address: "88 Campbell St",
    },
    {
      time: "11:15 AM - 11:45 AM",
      address: "12 Railway Pde",
      warning: "Tight travel time",
    },
  ];

  const documents: Document[] = [
    { name: "Payslips (Recent)", status: "complete", icon: FileCheck },
    { name: "Bank Statements", status: "complete", icon: FileCheck },
    { name: "ID Verification", status: "pending", icon: UploadCloud },
  ];

  const watchlistProperties: PropertyCard[] = [
    {
      id: "1",
      title: "$780k - $820k",
      address: "88 Campbell St, Surry Hills",
      price: "$780k - $820k",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop",
      beds: 2,
      baths: 1,
      cars: 1,
      matchPercentage: "94%",
      tag: "Auction Sat 10am",
      actionLabel: "Request Contract",
      secondaryAction: Calendar,
      repayment: "$1,045 / week",
      repaymentNote: "(In Budget)",
    },
    {
      id: "2",
      title: "$750k Guide",
      address: "12 Railway Pde, Marrickville",
      price: "$750k Guide",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop",
      beds: 2,
      baths: 1,
      cars: 1,
      matchPercentage: "78%",
      tag: "Private Treaty",
      tagStyle: "amber",
      actionLabel: "View Analysis",
      secondaryAction: Trash2,
      repayment: "~$40k required",
      repaymentNote: "(Tight Budget)",
    },
  ];

  return (
    <div className="min-h-screen bg-[#050505] pt-28 pb-12 px-6 md:px-8 max-w-[1600px] mx-auto space-y-8">
      {/* Noise Overlay */}
      <div
        className="fixed inset-0 z-0 w-full h-full pointer-events-none opacity-40"
        style={{
          backgroundImage: `url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.05%22/%3E%3C/svg%3E')`,
        }}
      />

      {/* Hero: Welcome & Roadmap */}
      <section
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div className="col-span-12 lg:col-span-4">
          <div className="inline-flex items-center gap-2 px-2 py-1 rounded border border-amber-500/20 bg-amber-500/10 text-amber-500 text-[10px] font-mono mb-4">
            <Sparkles className="w-3 h-3" />
            FIRST HOME BUYER
          </div>
          <h1 className="text-3xl md:text-4xl font-medium text-white font-['Space_Grotesk'] tracking-tight mb-2">
            Good afternoon, <span className="text-gradient">Sarah</span>
          </h1>
          <p className="text-sm text-neutral-400 max-w-md">
            You're currently in the <strong className="text-white">Hunting Phase</strong>.
            Your pre-approval is valid for another{" "}
            <span className="text-white">54 days</span>.
          </p>
        </div>

        {/* Progress Stepper */}
        <div className="col-span-12 lg:col-span-8 w-full pb-2">
          <div className="relative">
            <div className="stepper-line absolute top-3.5 left-0 w-full h-0.5 bg-neutral-800 -z-10" />
            <div
              className="stepper-progress absolute top-3.5 left-0 h-0.5 bg-emerald-500 -z-10 transition-all duration-1000 ease-out"
              style={{ width: mounted ? "65%" : "0%" }}
            />
            <div className="relative z-10 flex justify-between w-full">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className={`flex flex-col items-center gap-3 ${
                    step.status === "active" ? "cursor-pointer" : "cursor-default"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full border-4 border-[#050505] flex items-center justify-center ${
                      step.status === "complete"
                        ? "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.4)]"
                        : step.status === "active"
                        ? "bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.5)] animate-pulse-slow"
                        : "bg-[#1a1a1a] opacity-40"
                    }`}
                  >
                    {step.status === "complete" ? (
                      <Check className="w-4 h-4 text-black" />
                    ) : step.status === "active" ? (
                      <Search className="w-4 h-4" />
                    ) : step.id === "6" ? (
                      <Check className="w-3 h-3 text-neutral-500" />
                    ) : (
                      <span className="text-[10px] font-mono">{step.id}</span>
                    )}
                  </div>
                  <div className="text-center">
                    <div
                      className={`text-[10px] font-mono uppercase font-bold ${
                        step.status === "complete"
                          ? "text-emerald-500"
                          : step.status === "active"
                          ? "text-white"
                          : "text-neutral-500"
                      }`}
                    >
                      {step.label}
                    </div>
                    {step.subtitle && (
                      <div className="text-[10px] text-neutral-500 mt-1">
                        {step.subtitle}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-12 gap-6 lg:gap-8">
        {/* LEFT COLUMN: FINANCIAL DNA */}
        <div
          className="col-span-12 lg:col-span-3 space-y-6"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s",
          }}
        >
          {/* Budget Card */}
          <div className="glass-panel rounded-xl p-5 relative overflow-hidden">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xs font-mono uppercase text-neutral-400 tracking-widest">
                Max Budget
              </h3>
              <div className="bg-emerald-500/10 border border-emerald-500/20 px-2 py-1 rounded text-[10px] text-emerald-500 font-mono">
                APPROVED
              </div>
            </div>
            <div className="mb-4">
              <span className="text-3xl font-medium text-white font-['Space_Grotesk'] tracking-tight">
                $850,000
              </span>
              <p className="text-[11px] text-neutral-500 mt-1">
                Based on $120k Deposit + Grants
              </p>
            </div>

            {/* Circular Progress */}
            <div className="flex items-center gap-4 bg-white/5 p-3 rounded-lg border border-white/5">
              <div className="relative w-12 h-12 flex-shrink-0">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="24"
                    cy="24"
                    r="20"
                    stroke="#262626"
                    strokeWidth="3"
                    fill="transparent"
                  />
                  <circle
                    cx="24"
                    cy="24"
                    r="20"
                    stroke="#10b981"
                    strokeWidth="3"
                    fill="transparent"
                    strokeDasharray="125.6"
                    strokeDashoffset="12.5"
                    className="progress-ring__circle"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-[9px] font-mono text-white">
                  90%
                </div>
              </div>
              <div>
                <div className="text-[11px] text-white font-medium">Deposit Ready</div>
                <div className="text-[10px] text-neutral-500">$120,000 / $132,000</div>
              </div>
            </div>

            {/* Grants */}
            <div className="mt-4 pt-4 border-t border-white/5 space-y-2">
              <div className="flex items-center gap-2">
                <Gift className="w-3 h-3 text-amber-400" />
                <span className="text-[11px] text-neutral-300">
                  Gov. Stamp Duty Waiver
                </span>
                <span className="ml-auto text-[11px] text-white font-mono">Active</span>
              </div>
            </div>
          </div>

          {/* Weekly Cost Calculator */}
          <div className="glass-panel rounded-xl p-5">
            <h3 className="text-xs font-mono uppercase text-neutral-400 tracking-widest mb-4">
              Repayment Comfort
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-[10px] text-neutral-400 mb-2">
                  <span>Weekly Budget</span>
                  <span className="text-white">${weeklyBudget}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value="70"
                  className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
                />
              </div>
              <div className="p-3 bg-amber-500/5 border border-amber-500/10 rounded-lg flex items-start gap-3">
                <AlertCircle className="w-4 h-4 text-amber-500 mt-0.5" />
                <div>
                  <p className="text-[10px] text-amber-200 leading-relaxed">
                    Current market rates (6.14%) mean a $730k loan costs approx{" "}
                    <strong className="text-amber-400">$1,020/wk</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Comms Widget */}
          <div className="glass-panel rounded-xl p-5">
            <h3 className="text-xs font-mono uppercase text-neutral-400 tracking-widest mb-4">
              Support Team
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 group cursor-pointer hover:bg-white/5 p-2 rounded transition-colors -mx-2">
                <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-[10px] text-white relative">
                  MK
                  <div className="absolute bottom-0 right-0 w-2 h-2 bg-emerald-500 rounded-full border border-[#0A0A0A]" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-white font-medium">Mike (Broker)</div>
                  <div className="text-[10px] text-emerald-500">Pre-approval issued</div>
                </div>
                <MessageSquare className="w-4 h-4 text-neutral-600 group-hover:text-white transition-colors" />
              </div>
              <div className="flex items-center gap-3 group cursor-pointer hover:bg-white/5 p-2 rounded transition-colors -mx-2">
                <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-[10px] text-white">
                  LL
                </div>
                <div className="flex-1">
                  <div className="text-xs text-white font-medium">Legal Team</div>
                  <div className="text-[10px] text-neutral-500">Contract review ready</div>
                </div>
                <FileText className="w-4 h-4 text-neutral-600 group-hover:text-white transition-colors" />
              </div>
            </div>
          </div>
        </div>

        {/* MIDDLE COLUMN: THE HUNT (Watchlist) */}
        <div
          className="col-span-12 lg:col-span-6 space-y-6"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
          }}
        >
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium text-white font-['Space_Grotesk'] flex items-center gap-2">
              <Heart className="w-4 h-4 text-red-500 fill-red-500/20" />
              Your Watchlist
            </h2>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 text-[10px] font-medium text-white bg-white/10 rounded hover:bg-white/15 transition-colors">
                All (4)
              </button>
              <button className="px-3 py-1.5 text-[10px] font-medium text-neutral-400 hover:text-white transition-colors">
                Inspection Sat
              </button>
            </div>
          </div>

          {/* Property Cards */}
          {watchlistProperties.map((property) => (
            <div
              key={property.id}
              className="group bg-[#0A0A0A] border border-white/10 hover:border-emerald-500/30 rounded-xl overflow-hidden transition-all duration-300"
            >
              <div className="relative h-48">
                {property.image && (
                  <>
                    <div
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                      style={{ backgroundImage: `url('${property.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
                  </>
                )}
                <div className="absolute top-3 left-3 flex gap-2">
                  <span
                    className={`text-[9px] font-bold px-2 py-1 rounded shadow-lg uppercase tracking-wider ${
                      property.tagStyle === "amber"
                        ? "bg-amber-500 text-black"
                        : "bg-emerald-500 text-white"
                    }`}
                  >
                    {property.matchPercentage} Match
                  </span>
                  <span className="bg-black/60 backdrop-blur text-white text-[9px] font-mono px-2 py-1 rounded border border-white/10">
                    {property.tag}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                  <div>
                    <div className="text-xl font-medium text-white font-['Space_Grotesk']">
                      {property.price}
                    </div>
                    <div className="text-xs text-neutral-300 font-medium">
                      {property.address}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="bg-white/5 rounded p-2 text-center">
                    <BedDouble className="w-3 h-3 text-neutral-400 mx-auto mb-1" />
                    <span className="text-xs text-white">{property.beds} Bed</span>
                  </div>
                  <div className="bg-white/5 rounded p-2 text-center">
                    <Bath className="w-3 h-3 text-neutral-400 mx-auto mb-1" />
                    <span className="text-xs text-white">{property.baths} Bath</span>
                  </div>
                  <div className="bg-white/5 rounded p-2 text-center">
                    <Car className="w-3 h-3 text-neutral-400 mx-auto mb-1" />
                    <span className="text-xs text-white">{property.cars} Car</span>
                  </div>
                </div>

                {property.repayment && (
                  <div
                    className={`flex items-center gap-3 ${
                      property.repaymentNote?.includes("In Budget")
                        ? "bg-emerald-900/10 border-emerald-500/10"
                        : "bg-neutral-900 border-white/5"
                    } p-2.5 rounded-lg mb-4`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        property.repaymentNote?.includes("In Budget")
                          ? "bg-emerald-500/20 text-emerald-500"
                          : "bg-white/5 text-neutral-400"
                      } font-bold text-xs`}
                    >
                      {property.repaymentNote?.includes("In Budget") ? (
                        <DollarSign />
                      ) : (
                        <Hammer className="w-3 h-3" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="text-[10px] text-neutral-400 uppercase tracking-wider">
                        {property.repaymentNote?.includes("In Budget")
                          ? "Est. Repayment"
                          : "Renovation Est."}
                      </div>
                      <div className="text-xs font-medium text-white">
                        {property.repayment}{" "}
                        <span
                          className={
                            property.repaymentNote?.includes("In Budget")
                              ? "text-[10px] text-emerald-500"
                              : "text-[10px] text-amber-500"
                          }
                        >
                          {property.repaymentNote}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex gap-2">
                  <button
                    className={`flex-1 py-2 text-xs font-medium rounded transition-colors ${
                      property.actionLabel === "View Analysis"
                        ? "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                        : "bg-white text-black hover:bg-neutral-200"
                    }`}
                  >
                    {property.actionLabel}
                  </button>
                  <button className="px-3 py-2 bg-white/5 border border-white/10 rounded hover:bg-white/10 text-white transition-colors">
                    {property.secondaryAction && <property.secondaryAction className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT COLUMN: ACTION & EDUCATION */}
        <div
          className="col-span-12 lg:col-span-3 space-y-6"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.3s",
          }}
        >
          {/* Upcoming Inspections */}
          <div className="glass-panel rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs font-mono uppercase text-neutral-400 tracking-widest">
                This Saturday
              </h3>
              <span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded text-white">
                2 Homes
              </span>
            </div>
            <div className="relative pl-4 border-l border-white/10 space-y-6">
              {inspections.map((inspection, index) => (
                <div key={index} className="relative">
                  <div
                    className={`absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-[#0A0A0A] ${
                      index === 0 ? "bg-emerald-500" : "bg-neutral-600"
                    }`}
                  />
                  <div className="text-xs font-medium text-white">{inspection.time}</div>
                  <div className="text-[11px] text-neutral-400 mt-0.5">
                    {inspection.address}
                  </div>
                  {index === 0 && (
                    <div className="mt-2 flex gap-2">
                      <button className="text-[10px] flex items-center gap-1 text-emerald-500 hover:text-emerald-400">
                        <MapPin className="w-3 h-3" />
                        Directions
                      </button>
                    </div>
                  )}
                  {inspection.warning && (
                    <div className="text-[10px] text-amber-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {inspection.warning}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Document Vault */}
          <div className="glass-panel rounded-xl p-5">
            <h3 className="text-xs font-mono uppercase text-neutral-400 tracking-widest mb-4">
              Document Vault
            </h3>
            <div className="space-y-3">
              {documents.map((doc, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between p-2 rounded cursor-pointer transition-colors ${
                    doc.status === "complete"
                      ? "bg-emerald-500/5 border border-emerald-500/10"
                      : "bg-amber-500/5 border border-amber-500/10 hover:bg-amber-500/10"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {doc.icon && <doc.icon className="w-3 h-3 text-emerald-500" />}
                    <span className="text-[11px] text-white">{doc.name}</span>
                  </div>
                  {doc.status === "complete" ? (
                    <Check className="w-3 h-3 text-emerald-500" />
                  ) : (
                    <span className="text-[9px] text-amber-500 font-mono">UPLOAD</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Education Nudge */}
          <div className="rounded-xl p-4 bg-gradient-to-br from-indigo-900/20 to-black border border-indigo-500/20 relative overflow-hidden group cursor-pointer hover:border-indigo-500/30 transition-colors">
            <div className="absolute -right-4 -top-4 bg-indigo-500/10 w-24 h-24 rounded-full group-hover:bg-indigo-500/20 transition-colors" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-3 h-3 text-indigo-400" />
                <span className="text-[10px] font-mono text-indigo-400 uppercase">
                  Knowledge Base
                </span>
              </div>
              <h4 className="text-sm font-medium text-white mb-1">
                Understanding Strata
              </h4>
              <p className="text-[10px] text-neutral-400 leading-relaxed mb-3">
                Don't get caught out by hidden levies. Learn what to look for in a
                Strata Report.
              </p>
              <div className="flex items-center gap-1 text-[10px] text-white font-medium hover:gap-2 transition-all">
                Read Guide <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .glass-panel {
          background: rgba(10, 10, 10, 0.6);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        .text-gradient {
          background: linear-gradient(to right, #fff, #a3a3a3);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .stepper-line {
          position: absolute;
          top: 14px;
          left: 0;
          width: 100%;
          height: 2px;
          background: #262626;
          z-index: 0;
        }
        .stepper-progress {
          position: absolute;
          top: 14px;
          left: 0;
          height: 2px;
          background: #10b981;
          z-index: 0;
        }
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
        .progress-ring__circle {
          transition: stroke-dashoffset 1s ease-in-out;
          transform: rotate(-90deg);
          transform-origin: 50% 50%;
        }
      `}</style>
    </div>
  );
};

export default FirstHomeDashboard;
