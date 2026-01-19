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
  PlayCircle,
  Apple,
  Bell,
  CheckCircle2,
  LifeBuoy,
} from "lucide-react";

/**
 * Finance Landing Page
 *
 * Displays three iPhone mockups showcasing a finance application:
 * - Left: Product workflow with 3-step process (dark theme with background image)
 * - Center: Hero with dashboard preview and stats (light theme)
 * - Right: Mobile app features and app store CTA (light theme)
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
      "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ae254670-d172-42d4-8b69-97ab2ade6de8_320w.jpg",
    changeColor: "text-emerald-600",
  },
  {
    label: "Net Profit",
    value: "$30,145",
    change: "+8%",
    iconBg:
      "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b6b83d37-3f6a-4823-a93d-2c633b910edb_320w.jpg",
    changeColor: "text-emerald-600",
  },
  {
    label: "Customers",
    value: "1,847",
    change: "+24",
    iconBg:
      "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/90ebe0ba-ebce-4718-a047-8f9ae422c646_320w.jpg",
    changeColor: "text-gray-600",
  },
  {
    label: "Growth Rate",
    value: "32.4%",
    change: "+18%",
    iconBg:
      "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/1f71e922-535f-4aaa-8ec1-be337e3db393_320w.jpg",
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
const GradientBlurTop: FC = () => (
  <div className="gradient-blur-top">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

const GradientBlurBottom: FC = () => (
  <div className="gradient-blur-bottom">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
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
    <span className="text-sm font-medium font-geist">9:41</span>
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
    { id: "settings", icon: LifeBuoy, label: "Settings" },
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
                className={`text-[10px] font-medium font-geist ${
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
    className={`relative ${className}`}
    style={{ width: "393px", height: "852px" }}
  >
    {/* Phone frame */}
    <div className="absolute inset-0 bg-black rounded-[3rem] shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] p-3">
      {/* Notch */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-50" />

      {/* Screen */}
      <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
        {children}
      </div>
    </div>
  </div>
);

// Left phone: Workflow steps (dark theme)
const WorkflowPhone: FC = () => (
  <PhoneFrame className="[animation:fadeSlideIn_1s_ease-out_0.1s_both]">
    <GradientBlurTop />

    {/* Content */}
    <div
      className="overflow-y-auto bg-gray-950 w-full h-full bg-cover"
      style={{
        backgroundImage:
          "url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a53ef6f7-ea7c-457d-a8d3-dd91c9933e39_3840w.jpg)",
      }}
    >
      {/* Status bar */}
      <StatusBar isDark />

      {/* Content area */}
      <div
        className="text-white bg-cover pt-12 px-6 pb-24 bg-center"
        style={{
          backgroundImage:
            "url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e63b6ef8-c2cb-44fd-80ac-2f4ea3efc8b0_800w.jpg)",
        }}
      >
        <div className="inline-flex items-center gap-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 px-3 py-1 text-[11px] text-white/80 font-geist mb-4">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Product workflow
        </div>

        <h1 className="text-4xl font-geist tracking-tight text-white mb-4">
          From data to decisions
        </h1>

        <p className="text-sm text-white/70 font-geist mb-8">
          Connect, understand, and act-end-to-end automation in three simple
          steps.
        </p>

        {/* Steps */}
        <div className="space-y-8">
          {workflowSteps.map((step) => (
            <div key={step.number} className="flex items-start gap-4">
              <span className="select-none leading-none text-5xl font-semibold text-white/10 font-geist w-12">
                {step.number}
              </span>
              <div>
                <p className="text-xl text-white font-geist tracking-tight">
                  {step.title}
                </p>
                <p className="mt-1 text-sm text-white/70 font-geist">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8">
          <button className="inline-flex gap-2 text-sm font-medium text-gray-900 font-geist bg-white w-full rounded-full py-3 px-5 shadow-lg items-center justify-center">
            Explore the demo
            <ArrowRight className="w-4 h-4" strokeWidth={2} />
          </button>
        </div>
      </div>
    </div>

    <GradientBlurBottom />
    <TabBar activeTab="home" isDark />
  </PhoneFrame>
);

// Center phone: Hero with dashboard (light theme)
const HeroPhone: FC = () => (
  <PhoneFrame className="[animation:fadeSlideIn_1s_ease-out_0.2s_both]">
    <GradientBlurTop />

    {/* Content */}
    <div className="overflow-y-auto bg-white w-full h-full">
      {/* Status bar */}
      <StatusBar />

      {/* Hero content */}
      <div className="px-6 pt-16 pb-24">
        {/* Background decorative elements */}
        <div className="absolute top-20 right-0 w-40 h-40 bg-fuchsia-500/20 rounded-full blur-3xl" />
        <div className="absolute top-40 left-0 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl" />

        <div className="relative">
          <div className="inline-flex text-xs text-gray-700 font-geist bg-white/80 border border-gray-200 rounded-full py-1 px-3 backdrop-blur-md gap-2 items-center mb-4">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Real-time Finance Platform
          </div>

          <h1 className="leading-tight text-4xl tracking-tighter font-geist mb-4">
            Financial visibility, simplified.
          </h1>

          <p className="text-sm text-gray-600 font-geist mb-6">
            Understand revenue, costs, and trends instantly-no spreadsheets
            required.
          </p>

          <div className="flex flex-col gap-3 mb-6">
            <button className="inline-flex gap-3 text-sm font-medium text-white bg-black rounded-full py-3 px-6 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] items-center justify-center">
              <span className="font-geist">Get Started</span>
              <div className="relative flex items-center justify-center w-5 h-5 bg-white/20 rounded-full">
                <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
              </div>
            </button>
            <button className="inline-flex xl:bg-white/10 text-sm font-medium text-gray-900 font-geist bg-gray-100 rounded-full py-3 px-6 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] gap-2 items-center justify-center">
              <PlayCircle className="w-[18px] h-[18px]" strokeWidth={1.5} />
              View demo
            </button>
          </div>

          {/* Dashboard preview card */}
          <div className="bg-white/70 ring-1 ring-black/5 rounded-2xl p-3 shadow-xl backdrop-blur-md">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium text-gray-700 font-geist">
                Dashboard Overview
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-emerald-600 text-[10px] font-geist">
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
                      className={`text-[10px] font-medium font-geist ${stat.changeColor}`}
                    >
                      {stat.change}
                    </span>
                  </div>
                  <p className="text-[10px] text-gray-500 font-geist">
                    {stat.label}
                  </p>
                  <p className="text-base font-semibold text-gray-900 tracking-tight font-geist">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

    <GradientBlurBottom />
    <TabBar activeTab="home" />
  </PhoneFrame>
);

// Right phone: Mobile app features (light theme)
const MobilePhone: FC = () => (
  <PhoneFrame className="[animation:fadeSlideIn_1s_ease-out_0.3s_both]">
    <GradientBlurTop />

    {/* Content */}
    <div className="w-full h-full overflow-y-auto bg-white">
      {/* Status bar */}
      <StatusBar />

      {/* Content area */}
      <div className="px-6 pt-8 pb-24">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-md border border-gray-200 px-3 py-1 text-xs text-gray-700 font-geist mb-4">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
          New - Mobile
        </div>

        <h2 className="text-3xl font-geist tracking-tight mb-3">
          Your finance copilot, now on mobile
        </h2>

        <p className="text-sm text-gray-600 font-geist mb-6">
          Approvals, insights, and alerts wherever you are. Stay on top of cash,
          revenue, and spend in real time.
        </p>

        {/* App Store Button */}
        <div className="mb-6">
          <button className="inline-flex text-white bg-black w-full rounded-full py-3 px-5 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] gap-3 items-center justify-center">
            <Apple className="w-5 h-5" fill="currentColor" strokeWidth={1.5} />
            <div className="text-left leading-tight">
              <span className="block text-[10px] text-white/70 font-geist">
                Download on the
              </span>
              <span className="block text-sm font-medium tracking-tight font-geist">
                App Store
              </span>
            </div>
          </button>
        </div>

        {/* Phone mockup */}
        <div className="relative mx-auto" style={{ width: "200px" }}>
          <div className="absolute -inset-3 bg-gradient-to-tr from-blue-600/20 via-indigo-500/10 to-amber-400/20 rounded-[2rem] blur-2xl" />
          <div className="ring-1 ring-black/10 bg-gray-900 rounded-[1.75rem] p-1.5 relative shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 h-4 w-20 rounded-b-xl bg-black/70" />
            <div className="overflow-hidden rounded-[1.4rem] bg-white">
              <img
                src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/38d4c429-57cd-4aed-8afc-441837f8ccb6_800w.webp"
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
                  <Icon
                    className={`w-4 h-4 ${feature.iconColor}`}
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 font-geist">
                    {feature.title}
                  </p>
                  <p className="text-xs text-gray-600 font-geist">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>

    <GradientBlurBottom />
    <TabBar activeTab="home" />
  </PhoneFrame>
);

export default function FinanceLandingPage() {
  return (
    <>
      {/* Custom styles for gradient blur effects */}
      <style jsx global>{`
        @keyframes fadeSlideIn {
          0% {
            opacity: 0;
            transform: translateY(30px);
            filter: blur(8px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0px);
          }
        }

        .font-geist {
          font-family: "Geist", "Inter", ui-sans-serif, system-ui, -apple-system,
            "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        }

        /* Progressive blur for status bar */
        .gradient-blur-top {
          position: absolute;
          z-index: 10;
          inset: 0 0 auto 0;
          height: 120px;
          pointer-events: none;
        }
        .gradient-blur-top > div,
        .gradient-blur-top::before,
        .gradient-blur-top::after {
          position: absolute;
          inset: 0;
        }
        .gradient-blur-top::before {
          content: "";
          z-index: 1;
          backdrop-filter: blur(0.5px);
          mask: linear-gradient(
            to top,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 1) 12.5%,
            rgba(0, 0, 0, 1) 25%,
            rgba(0, 0, 0, 0) 37.5%
          );
        }
        .gradient-blur-top > div:nth-of-type(1) {
          z-index: 2;
          backdrop-filter: blur(1px);
          mask: linear-gradient(
            to top,
            rgba(0, 0, 0, 0) 12.5%,
            rgba(0, 0, 0, 1) 25%,
            rgba(0, 0, 0, 1) 37.5%,
            rgba(0, 0, 0, 0) 50%
          );
        }
        .gradient-blur-top > div:nth-of-type(2) {
          z-index: 3;
          backdrop-filter: blur(2px);
          mask: linear-gradient(
            to top,
            rgba(0, 0, 0, 0) 25%,
            rgba(0, 0, 0, 1) 37.5%,
            rgba(0, 0, 0, 1) 50%,
            rgba(0, 0, 0, 0) 62.5%
          );
        }
        .gradient-blur-top > div:nth-of-type(3) {
          z-index: 4;
          backdrop-filter: blur(4px);
          mask: linear-gradient(
            to top,
            rgba(0, 0, 0, 0) 37.5%,
            rgba(0, 0, 0, 1) 50%,
            rgba(0, 0, 0, 1) 62.5%,
            rgba(0, 0, 0, 0) 75%
          );
        }
        .gradient-blur-top > div:nth-of-type(4) {
          z-index: 5;
          backdrop-filter: blur(8px);
          mask: linear-gradient(
            to top,
            rgba(0, 0, 0, 0) 50%,
            rgba(0, 0, 0, 1) 62.5%,
            rgba(0, 0, 0, 1) 75%,
            rgba(0, 0, 0, 0) 87.5%
          );
        }
        .gradient-blur-top > div:nth-of-type(5) {
          z-index: 6;
          backdrop-filter: blur(16px);
          mask: linear-gradient(
            to top,
            rgba(0, 0, 0, 0) 62.5%,
            rgba(0, 0, 0, 1) 75%,
            rgba(0, 0, 0, 1) 87.5%,
            rgba(0, 0, 0, 0) 100%
          );
        }
        .gradient-blur-top > div:nth-of-type(6) {
          z-index: 7;
          backdrop-filter: blur(32px);
          mask: linear-gradient(
            to top,
            rgba(0, 0, 0, 0) 75%,
            rgba(0, 0, 0, 1) 87.5%,
            rgba(0, 0, 0, 1) 100%
          );
        }
        .gradient-blur-top::after {
          content: "";
          z-index: 8;
          backdrop-filter: blur(64px);
          mask: linear-gradient(
            to top,
            rgba(0, 0, 0, 0) 87.5%,
            rgba(0, 0, 0, 1) 100%
          );
        }

        /* Bottom navbar blur */
        .gradient-blur-bottom {
          position: absolute;
          z-index: 50;
          inset: auto 0 0 0;
          height: 100px;
          pointer-events: none;
        }
        .gradient-blur-bottom > div,
        .gradient-blur-bottom::before,
        .gradient-blur-bottom::after {
          position: absolute;
          inset: 0;
        }
        .gradient-blur-bottom::before {
          content: "";
          z-index: 1;
          backdrop-filter: blur(0.5px);
          mask: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 1) 12.5%,
            rgba(0, 0, 0, 1) 25%,
            rgba(0, 0, 0, 0) 37.5%
          );
        }
        .gradient-blur-bottom > div:nth-of-type(1) {
          z-index: 2;
          backdrop-filter: blur(1px);
          mask: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0) 12.5%,
            rgba(0, 0, 0, 1) 25%,
            rgba(0, 0, 0, 1) 37.5%,
            rgba(0, 0, 0, 0) 50%
          );
        }
        .gradient-blur-bottom > div:nth-of-type(2) {
          z-index: 3;
          backdrop-filter: blur(2px);
          mask: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0) 25%,
            rgba(0, 0, 0, 1) 37.5%,
            rgba(0, 0, 0, 1) 50%,
            rgba(0, 0, 0, 0) 62.5%
          );
        }
        .gradient-blur-bottom > div:nth-of-type(3) {
          z-index: 4;
          backdrop-filter: blur(4px);
          mask: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0) 37.5%,
            rgba(0, 0, 0, 1) 50%,
            rgba(0, 0, 0, 1) 62.5%,
            rgba(0, 0, 0, 0) 75%
          );
        }
        .gradient-blur-bottom > div:nth-of-type(4) {
          z-index: 5;
          backdrop-filter: blur(8px);
          mask: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0) 50%,
            rgba(0, 0, 0, 1) 62.5%,
            rgba(0, 0, 0, 1) 75%,
            rgba(0, 0, 0, 0) 87.5%
          );
        }
        .gradient-blur-bottom > div:nth-of-type(5) {
          z-index: 6;
          backdrop-filter: blur(16px);
          mask: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0) 62.5%,
            rgba(0, 0, 0, 1) 75%,
            rgba(0, 0, 0, 1) 87.5%,
            rgba(0, 0, 0, 0) 100%
          );
        }
        .gradient-blur-bottom > div:nth-of-type(6) {
          z-index: 7;
          backdrop-filter: blur(32px);
          mask: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0) 75%,
            rgba(0, 0, 0, 1) 87.5%,
            rgba(0, 0, 0, 1) 100%
          );
        }
        .gradient-blur-bottom::after {
          content: "";
          z-index: 8;
          backdrop-filter: blur(64px);
          mask: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0) 87.5%,
            rgba(0, 0, 0, 1) 100%
          );
        }
      `}</style>

      <div className="min-h-screen flex items-center justify-center antialiased xl:bg-[radial-gradient(circle_at_top_left,var(--tw-gradient-stops))] xl:from-white xl:to-gray-400 bg-gradient-to-br from-gray-50 via-white to-gray-100 p-8">
        {/* Container for 3 iPhone frames */}
        <div className="flex gap-x-16 gap-y-8 items-center justify-center flex-col xl:flex-row">
          <WorkflowPhone />
          <HeroPhone />
          <MobilePhone />
        </div>
      </div>
    </>
  );
}
