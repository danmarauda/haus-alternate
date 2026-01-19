"use client";

import type { FC } from "react";
import {
  LayoutDashboard,
  TrendingUp,
  FileText,
  Settings,
  Wifi,
  Battery,
  ArrowRight,
  Play,
  Apple,
  Bell,
  CheckCircle2,
} from "lucide-react";

/**
 * Finance Landing Page Template
 *
 * Displays three iPhone mockups showcasing a finance application:
 * - Left: Product workflow with 3-step process
 * - Center: Hero with dashboard preview and stats
 * - Right: Mobile app features and app store CTA
 */

interface StatCard {
  label: string;
  value: string;
  change: string;
  iconBg: string;
  changeColor: string;
}

interface WorkflowStep {
  number: string;
  title: string;
  description: string;
}

interface FeatureItem {
  icon: FC<{ className?: string }>;
  title: string;
  description: string;
  iconColor?: string;
}

const statCards: StatCard[] = [
  {
    label: "Revenue",
    value: "$92,310",
    change: "+12%",
    iconBg:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=320&h=320&fit=crop",
    changeColor: "text-emerald-600",
  },
  {
    label: "Net Profit",
    value: "$30,145",
    change: "+8%",
    iconBg:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=320&h=320&fit=crop",
    changeColor: "text-emerald-600",
  },
  {
    label: "Customers",
    value: "1,847",
    change: "+24",
    iconBg:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=320&h=320&fit=crop",
    changeColor: "text-gray-600",
  },
  {
    label: "Growth Rate",
    value: "32.4%",
    change: "+18%",
    iconBg:
      "https://images.unsplash.com/photo-1611974765270-ca1258634369?w=320&h=320&fit=crop",
    changeColor: "text-emerald-600",
  },
];

const workflowSteps: WorkflowStep[] = [
  {
    number: "1",
    title: "Connect",
    description:
      "Link banks, billing, and spend tools in minutes—no spreadsheets.",
  },
  {
    number: "2",
    title: "Understand",
    description:
      "AI categorizes, explains, and forecasts using your business context.",
  },
  {
    number: "3",
    title: "Act",
    description: "Trigger approvals, alerts, and playbooks automatically.",
  },
];

const mobileFeatures: FeatureItem[] = [
  {
    icon: Bell,
    title: "Instant alerts",
    description: "Know when invoices are paid or spend spikes.",
    iconColor: "text-gray-700",
  },
  {
    icon: CheckCircle2,
    title: "One-tap approvals",
    description: "Approve expenses and POs securely on the go.",
    iconColor: "text-emerald-600",
  },
];

// Progressive blur gradient components for realistic iOS effect
const GradientBlurTop = () => (
  <div className="absolute inset-x-0 top-0 z-10 h-[120px] pointer-events-none">
    <div className="absolute inset-0 backdrop-blur-[0.5px]" />
    <div className="absolute inset-0 backdrop-blur-[1px]" />
    <div className="absolute inset-0 backdrop-blur-[2px]" />
    <div className="absolute inset-0 backdrop-blur-[4px]" />
    <div className="absolute inset-0 backdrop-blur-[8px]" />
    <div className="absolute inset-0 backdrop-blur-[16px]" />
    <div className="absolute inset-0 backdrop-blur-[64px]" />
  </div>
);

const GradientBlurBottom = () => (
  <div className="absolute inset-x-0 bottom-0 z-50 h-[100px] pointer-events-none">
    <div className="absolute inset-0 backdrop-blur-[0.5px]" />
    <div className="absolute inset-0 backdrop-blur-[1px]" />
    <div className="absolute inset-0 backdrop-blur-[2px]" />
    <div className="absolute inset-0 backdrop-blur-[4px]" />
    <div className="absolute inset-0 backdrop-blur-[8px]" />
    <div className="absolute inset-0 backdrop-blur-[16px]" />
    <div className="absolute inset-0 backdrop-blur-[64px]" />
  </div>
);

// Status bar component
interface StatusBarProps {
  isDark?: boolean;
}

const StatusBar: FC<StatusBarProps> = ({ isDark = false }) => (
  <div
    className={`flex z-50 pt-4 px-6 pb-2 relative items-center justify-between ${
      isDark ? "text-white" : "text-gray-900"
    }`}
  >
    <span className="text-sm font-medium">9:41</span>
    <div className="flex items-center gap-1">
      <Wifi className="w-4 h-4" strokeWidth={2} />
      <Battery className="w-5 h-5" fill={isDark ? "white" : "currentColor"} />
    </div>
  </div>
);

// Bottom tab bar component
interface TabBarProps {
  activeTab?: string;
  isDark?: boolean;
}

const TabBar: FC<TabBarProps> = ({ activeTab = "home", isDark = false }) => {
  const tabs = [
    { id: "home", icon: LayoutDashboard, label: "Home" },
    { id: "analytics", icon: TrendingUp, label: "Analytics" },
    { id: "reports", icon: FileText, label: "Reports" },
    { id: "settings", icon: Settings, label: "Settings" },
  ];

  return (
    <div
      className={`absolute bottom-0 left-0 right-0 backdrop-blur-xl border-t px-6 pb-6 pt-3 z-50 ${
        isDark
          ? "bg-gray-900/80 border-gray-700/50"
          : "bg-white/80 border-gray-200/50"
      }`}
    >
      <div className="flex items-center justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = tab.id === activeTab;
          return (
            <div key={tab.id} className="flex flex-col items-center gap-1">
              <Icon
                className={`w-6 h-6 ${
                  isActive
                    ? isDark
                      ? "text-white"
                      : "text-gray-900"
                    : "text-gray-400"
                }`}
                strokeWidth={1.5}
              />
              <span
                className={`text-[10px] font-medium ${
                  isActive
                    ? isDark
                      ? "text-white"
                      : "text-gray-900"
                    : "text-gray-400"
                }`}
              >
                {tab.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Phone frame wrapper component
interface PhoneFrameProps {
  children: React.ReactNode;
  className?: string;
}

const PhoneFrame: FC<PhoneFrameProps> = ({ children, className = "" }) => (
  <div
    className={`relative bg-black rounded-[3rem] shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] p-3 ${className}`}
    style={{ width: "393px", height: "852px" }}
  >
    {/* Notch */}
    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-50" />

    {/* Screen */}
    <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative">
      {children}
    </div>
  </div>
);

// Left phone: Workflow steps
const WorkflowPhone = () => (
  <PhoneFrame className="animate-[fadeSlideIn_1s_ease-out_0.1s_both]">
    <div className="w-full h-full overflow-y-auto bg-zinc-950 relative">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=3840&q=80)",
        }}
      />

      <GradientBlurTop />

      {/* Content overlay */}
      <div className="relative z-10 px-6 pt-12 pb-24">
        <StatusBar isDark />

        <div className="bg-gradient-to-b from-transparent to-black/50 backdrop-blur-sm rounded-2xl px-6 pt-12 pb-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 px-3 py-1 text-[11px] text-white/80 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Product workflow
          </div>

          <h1 className="text-4xl tracking-tight text-white mb-4">
            From data to decisions
          </h1>

          <p className="text-sm text-white/70 mb-8">
            Connect, understand, and act—end-to-end automation in three simple
            steps.
          </p>

          {/* Steps */}
          <div className="space-y-8">
            {workflowSteps.map((step) => (
              <div key={step.number} className="flex items-start gap-4">
                <span className="select-none leading-none text-5xl font-semibold text-white/10 w-12">
                  {step.number}
                </span>
                <div>
                  <p className="text-xl text-white tracking-tight">
                    {step.title}
                  </p>
                  <p className="mt-1 text-sm text-white/70">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <button className="mt-8 inline-flex gap-2 text-sm font-medium text-gray-900 bg-white w-full rounded-full px-5 py-3 shadow-lg items-center justify-center">
            Explore the demo
            <ArrowRight className="w-4 h-4" strokeWidth={2} />
          </button>
        </div>
      </div>

      <GradientBlurBottom />
      <TabBar activeTab="home" isDark />
    </div>
  </PhoneFrame>
);

// Center phone: Hero with dashboard
const HeroPhone = () => (
  <PhoneFrame className="animate-[fadeSlideIn_1s_ease-out_0.2s_both]">
    <div className="w-full h-full overflow-y-auto bg-white relative">
      <GradientBlurTop />

      <div className="px-6 pt-16 pb-24">
        {/* Decorative background elements */}
        <div className="absolute top-20 right-0 w-40 h-40 bg-fuchsia-500/20 rounded-full blur-3xl" />
        <div className="absolute top-40 left-0 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl" />

        <div className="relative">
          <StatusBar />

          <div className="inline-flex text-xs text-gray-700 bg-white/80 border border-gray-200 rounded-full px-3 py-1 backdrop-blur-md gap-2 items-center mb-4">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Real-time Finance Platform
          </div>

          <h1 className="leading-tight text-4xl tracking-tighter mb-4">
            Financial visibility, simplified.
          </h1>

          <p className="text-sm text-gray-600 mb-6">
            Understand revenue, costs, and trends instantly—no spreadsheets
            required.
          </p>

          <div className="flex flex-col gap-3 mb-6">
            <button className="inline-flex gap-3 text-sm font-medium text-white bg-black rounded-full px-6 py-3 shadow-lg items-center justify-center">
              Get Started
              <div className="relative flex items-center justify-center w-5 h-5 bg-white/20 rounded-full">
                <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
              </div>
            </button>
            <button className="inline-flex text-sm font-medium text-gray-900 bg-gray-100 rounded-full px-6 py-3 shadow-sm items-center justify-center">
              <Play className="w-4.5 h-4.5" strokeWidth={1.5} />
              View demo
            </button>
          </div>

          {/* Dashboard preview card */}
          <div className="bg-white/70 ring-1 ring-black/5 rounded-2xl p-3 shadow-xl backdrop-blur-md">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium text-gray-700">
                Dashboard Overview
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-emerald-600 text-[10px]">
                <span className="h-1 w-1 rounded-full bg-emerald-500" />
                Live
              </span>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-2">
              {statCards.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white ring-1 ring-black/5 rounded-xl p-3"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div
                      className="w-10 h-10 bg-cover rounded-xl shadow-sm"
                      style={{ backgroundImage: `url(${stat.iconBg})` }}
                    />
                    <span
                      className={`text-[10px] font-medium ${stat.changeColor}`}
                    >
                      {stat.change}
                    </span>
                  </div>
                  <p className="text-[10px] text-gray-500">{stat.label}</p>
                  <p className="text-base font-semibold text-gray-900 tracking-tight">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <GradientBlurBottom />
      <TabBar activeTab="home" />
    </div>
  </PhoneFrame>
);

// Right phone: Mobile app features
const MobilePhone = () => (
  <PhoneFrame className="animate-[fadeSlideIn_1s_ease-out_0.3s_both]">
    <div className="w-full h-full overflow-y-auto bg-white relative">
      <GradientBlurTop />

      <div className="px-6 pt-8 pb-24">
        <StatusBar />

        <div className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-md border border-gray-200 px-3 py-1 text-xs text-gray-700 mb-4">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
          New — Mobile
        </div>

        <h2 className="text-3xl tracking-tight mb-3">
          Your finance copilot, now on mobile
        </h2>

        <p className="text-sm text-gray-600 mb-6">
          Approvals, insights, and alerts wherever you are. Stay on top of cash,
          revenue, and spend in real time.
        </p>

        {/* App Store Button */}
        <div className="mb-6">
          <button className="inline-flex text-white bg-black w-full rounded-full px-5 py-3 shadow-lg items-center justify-center">
            <Apple className="w-5 h-5" fill="currentColor" strokeWidth={1.5} />
            <div className="text-left leading-tight ml-3">
              <span className="block text-[10px] text-white/70">
                Download on the
              </span>
              <span className="block text-sm font-medium tracking-tight">
                App Store
              </span>
            </div>
          </button>
        </div>

        {/* Phone mockup */}
        <div className="relative mx-auto" style={{ width: "200px" }}>
          <div className="absolute -inset-3 bg-gradient-to-tr from-blue-600/20 via-indigo-500/10 to-amber-400/20 rounded-[2rem] blur-2xl" />
          <div className="ring-1 ring-black/10 bg-gray-900 rounded-[1.75rem] p-1.5 relative shadow-lg">
            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 h-4 w-20 rounded-b-xl bg-black/70" />
            <div className="overflow-hidden rounded-[1.4rem] bg-white">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                alt="Mobile preview"
                className="w-full h-[380px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Feature bullets */}
        <div className="mt-8 space-y-4">
          {mobileFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 bg-gray-50 shadow-sm shrink-0">
                  <Icon className="w-4 h-4" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {feature.title}
                  </p>
                  <p className="text-xs text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <GradientBlurBottom />
      <TabBar activeTab="home" />
    </div>
  </PhoneFrame>
);

export default function FinanceLandingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center antialiased bg-gradient-to-br from-zinc-50 via-white to-zinc-100 p-8">
      {/* Background decorative gradient */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,var(--tw-gradient-stops))] from-white via-gray-300 to-gray-400 opacity-50" />

      {/* Container for 3 iPhone frames */}
      <div className="flex flex-col xl:flex-row gap-8 xl:gap-16 items-center justify-center">
        <WorkflowPhone />
        <HeroPhone />
        <MobilePhone />
      </div>
    </div>
  );
}
