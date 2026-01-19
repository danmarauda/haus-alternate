"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import {
  Mic,
  ArrowRight,
  Home,
  Camera,
  Compass,
  TrendingUp,
  Archive,
  PlusCircle,
  CheckCircle,
  Play,
  MessageSquare,
  Box,
  Twitter,
  Linkedin,
} from "lucide-react";

/**
 * HAUS Ecosystem Page
 * AI-Native Property Platform Landing Page
 *
 * Features:
 * - Voice-first property search demo
 * - 7 AI-powered ecosystem modules
 * - Complete user journey visualization
 * - Interactive demo section
 * - Mobile-first responsive design
 * - Dark theme with neutral-950 background
 */

interface PlatformStat {
  value: string;
  label: string;
}

interface EcosystemModule {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: "blue" | "emerald" | "orange" | "purple" | "indigo" | "teal";
  tags: string[];
}

interface JourneyStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: "blue" | "purple" | "orange" | "emerald";
  tags: string[];
  position: "left" | "right";
}

interface DemoExample {
  query: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: "blue" | "emerald" | "purple" | "orange";
}

interface FooterLink {
  name: string;
  href: string;
}

interface FooterLinks {
  platform: FooterLink[];
  solutions: FooterLink[];
  company: FooterLink[];
}

export default function EcosystemPage() {
  useEffect(() => {
    // Add smooth scrolling behavior for anchor links
    const handleAnchorClick = (e: Event) => {
      e.preventDefault();
      const target = (e.currentTarget as HTMLAnchorElement).getAttribute("href");
      if (target) {
        const element = document.querySelector(target);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((anchor) => {
      anchor.addEventListener("click", handleAnchorClick);
    });

    return () => {
      anchors.forEach((anchor) => {
        anchor.removeEventListener("click", handleAnchorClick);
      });
    };
  }, []);

  const platformStats: PlatformStat[] = [
    { value: "7", label: "AI Modules" },
    { value: ">98%", label: "Voice Accuracy" },
    { value: "<1.5s", label: "Response Time" },
    { value: "24/7", label: "AI Support" },
  ];

  const ecosystemModules: EcosystemModule[] = [
    {
      id: "haus",
      name: "HAUS",
      subtitle: "Voice-First Search",
      description:
        "AI-powered voice-first property discovery that transforms how people search for homes with natural language understanding.",
      icon: Mic,
      color: "blue",
      tags: ["Voice AI", "NLP", "Real-time"],
    },
    {
      id: "create",
      name: "CREATE",
      subtitle: "AI Listing Generation",
      description:
        "AI listing generation that creates compelling property descriptions in 60 seconds with 98% accuracy.",
      icon: Camera,
      color: "emerald",
      tags: ["AI Writing", "Auto-Gen", "Agent Tools"],
    },
    {
      id: "compass",
      name: "COMPASS",
      subtitle: "Trust & Transparency",
      description:
        "Trust and transparency layer that makes every property transaction clear, secure, and verifiable.",
      icon: Compass,
      color: "orange",
      tags: ["Blockchain", "Security", "Transparency"],
    },
    {
      id: "deephaus",
      name: "DEEPHAUS",
      subtitle: "Decision Intelligence",
      description:
        "AI decision intelligence that provides data-driven insights for confident property investment decisions.",
      icon: TrendingUp,
      color: "purple",
      tags: ["Analytics", "Predictions", "Investment"],
    },
    {
      id: "warehaus",
      name: "WAREHAUS",
      subtitle: "Commercial Platform",
      description:
        "Commercial property platform designed for large-scale transactions and institutional investments.",
      icon: Archive,
      color: "indigo",
      tags: ["Enterprise", "Commercial", "Scale"],
    },
    {
      id: "agency-market",
      name: "AGENCY & MARKET",
      subtitle: "Professional & Services",
      description:
        "Professional suite and vetted services marketplace completing the property ecosystem.",
      icon: PlusCircle,
      color: "teal",
      tags: ["Professional", "Services", "Marketplace"],
    },
  ];

  const journeySteps: JourneyStep[] = [
    {
      step: 1,
      title: "Discovery",
      subtitle: "Voice-powered property search",
      description:
        'Start with natural voice commands: "Find me a family home in Sydney with a pool under $1.2M"',
      icon: Mic,
      color: "blue",
      tags: ["HAUS Voice AI", "Natural Language"],
      position: "left",
    },
    {
      step: 2,
      title: "Analysis",
      subtitle: "AI-powered market insights",
      description:
        "DEEPHAUS provides investment analysis, price predictions, and risk assessments for informed decisions",
      icon: TrendingUp,
      color: "purple",
      tags: ["DEEPHAUS Intelligence", "Market Data"],
      position: "right",
    },
    {
      step: 3,
      title: "Transaction",
      subtitle: "Transparent & secure process",
      description:
        "COMPASS ensures complete transparency with blockchain-secured records and real-time progress tracking",
      icon: Compass,
      color: "orange",
      tags: ["COMPASS Security", "Blockchain"],
      position: "left",
    },
    {
      step: 4,
      title: "Settlement",
      subtitle: "Seamless completion",
      description:
        "Complete your property journey with automated compliance, digital signatures, and instant updates",
      icon: CheckCircle,
      color: "emerald",
      tags: ["Automated Process", "Digital Settlement"],
      position: "right",
    },
  ];

  const demoExamples: DemoExample[] = [
    {
      query: "Find me a 3 bedroom house in Melbourne",
      description: "Family home search with specific requirements",
      icon: Home,
      color: "blue",
    },
    {
      query: "Show me investment properties under $600k",
      description: "Investment-focused search with budget constraints",
      icon: TrendingUp,
      color: "emerald",
    },
    {
      query: "What's the market outlook for Brisbane apartments?",
      description: "Market intelligence and trend analysis",
      icon: Box,
      color: "purple",
    },
    {
      query: "Help me understand the buying process",
      description: "Guidance through property transaction steps",
      icon: Compass,
      color: "orange",
    },
  ];

  const footerLinks: FooterLinks = {
    platform: [
      { name: "HAUS Voice Search", href: "#" },
      { name: "CREATE Listings", href: "#" },
      { name: "COMPASS Security", href: "#" },
      { name: "DEEPHAUS Intelligence", href: "#" },
    ],
    solutions: [
      { name: "For Buyers", href: "#" },
      { name: "For Sellers", href: "#" },
      { name: "For Agents", href: "#" },
      { name: "For Investors", href: "#" },
    ],
    company: [
      { name: "About", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
      { name: "Contact", href: "#" },
    ],
  };

  const getModuleColorClasses = (color: EcosystemModule["color"]) => {
    const colorMap = {
      blue: {
        gradient: "from-blue-500 to-blue-600",
        text: "text-blue-400 hover:text-blue-300",
        bg: "bg-blue-500/20 text-blue-300",
      },
      emerald: {
        gradient: "from-emerald-500 to-emerald-600",
        text: "text-emerald-400 hover:text-emerald-300",
        bg: "bg-emerald-500/20 text-emerald-300",
      },
      orange: {
        gradient: "from-orange-500 to-orange-600",
        text: "text-orange-400 hover:text-orange-300",
        bg: "bg-orange-500/20 text-orange-300",
      },
      purple: {
        gradient: "from-purple-500 to-purple-600",
        text: "text-purple-400 hover:text-purple-300",
        bg: "bg-purple-500/20 text-purple-300",
      },
      indigo: {
        gradient: "from-indigo-500 to-indigo-600",
        text: "text-indigo-400 hover:text-indigo-300",
        bg: "bg-indigo-500/20 text-indigo-300",
      },
      teal: {
        gradient: "from-teal-500 to-teal-600",
        text: "text-teal-400 hover:text-teal-300",
        bg: "bg-teal-500/20 text-teal-300",
      },
    };
    return colorMap[color];
  };

  const getJourneyColorClasses = (color: JourneyStep["color"]) => {
    const colorMap = {
      blue: {
        gradient: "from-blue-500 to-blue-600",
        bg: "bg-blue-500",
        tag: "bg-blue-500/20 text-blue-300",
      },
      purple: {
        gradient: "from-purple-500 to-purple-600",
        bg: "bg-purple-500",
        tag: "bg-purple-500/20 text-purple-300",
      },
      orange: {
        gradient: "from-orange-500 to-orange-600",
        bg: "bg-orange-500",
        tag: "bg-orange-500/20 text-orange-300",
      },
      emerald: {
        gradient: "from-emerald-500 to-emerald-600",
        bg: "bg-emerald-500",
        tag: "bg-emerald-500/20 text-emerald-300",
      },
    };
    return colorMap[color];
  };

  const getDemoColorClasses = (color: DemoExample["color"]) => {
    const colorMap = {
      blue: {
        border: "hover:border-blue-400/50 hover:bg-blue-500/10",
        icon: "bg-blue-500/20 text-blue-400",
      },
      emerald: {
        border: "hover:border-emerald-400/50 hover:bg-emerald-500/10",
        icon: "bg-emerald-500/20 text-emerald-400",
      },
      purple: {
        border: "hover:border-purple-400/50 hover:bg-purple-500/10",
        icon: "bg-purple-500/20 text-purple-400",
      },
      orange: {
        border: "hover:border-orange-400/50 hover:bg-orange-500/10",
        icon: "bg-orange-500/20 text-orange-400",
      },
    };
    return colorMap[color];
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 antialiased selection:bg-blue-400/30 selection:text-neutral-100">
      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        .voice-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .module-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.3);
        }
      `}</style>

      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative z-10">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between bg-neutral-900/60 backdrop-blur-lg border border-white/10 rounded-2xl sm:rounded-3xl p-3 sm:px-6 mt-6">
            {/* Brand */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <span className="text-base font-semibold tracking-tight">
                HAUS
              </span>
            </Link>

            {/* Nav - Desktop */}
            <nav className="hidden md:flex items-center gap-6">
              <a
                href="#modules"
                className="text-sm font-medium text-neutral-300 hover:text-white transition-colors"
              >
                Modules
              </a>
              <a
                href="#journey"
                className="text-sm font-medium text-neutral-300 hover:text-white transition-colors"
              >
                User Journey
              </a>
              <a
                href="#platform"
                className="text-sm font-medium text-neutral-300 hover:text-white transition-colors"
              >
                Platform
              </a>
              <a
                href="#demo"
                className="text-sm font-medium text-neutral-300 hover:text-white transition-colors"
              >
                Demo
              </a>
            </nav>

            {/* CTA */}
            <div className="flex items-center gap-2">
              <button className="hidden md:inline-flex rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-neutral-200 backdrop-blur hover:bg-white/5 transition-colors">
                Sign In
              </button>
              <button className="inline-flex items-center justify-center h-10 px-6 text-white font-medium text-sm bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 transition-all duration-300 ease-out rounded-full outline-none overflow-hidden cursor-pointer">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <div className="text-center mb-16">
            <h1 className="max-w-4xl mx-auto text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tighter mb-6">
              The{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
                AI-native
              </span>{" "}
              operating system for{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-400">
                property
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-neutral-300 mb-8">
              Making every step of the property journey clear, fair, and fast
              through voice-first technology and transparent AI-powered
              insights.
            </p>

            {/* Voice Search Demo */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="bg-neutral-900/60 border border-white/10 rounded-2xl p-6 backdrop-blur-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center voice-pulse">
                    <Mic className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left flex-1">
                    <p className="text-sm text-neutral-400">Try saying:</p>
                    <p className="text-lg text-white">
                      &quot;Find me a 3 bedroom house in Melbourne under
                      $800k&quot;
                    </p>
                  </div>
                </div>
                <div className="text-xs text-neutral-500 text-center">
                  Voice search powered by HAUS AI &bull; &gt;98% accuracy
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white rounded-full px-8 py-4 text-lg font-semibold transition-all duration-300">
                Start Your Property Journey
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="inline-flex items-center gap-2 text-neutral-300 hover:text-white transition-colors rounded-full px-6 py-4 border border-white/10 hover:bg-white/5">
                <Play className="w-5 h-5 text-blue-400" />
                Watch Platform Demo
              </button>
            </div>

            {/* Platform Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {platformStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
                    {stat.value}
                  </div>
                  <div className="text-sm text-neutral-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HAUS Modules Section */}
        <section
          id="modules"
          className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl tracking-tighter mb-4">
              HAUS Ecosystem Modules
            </h2>
            <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
              Seven AI-powered modules working together to transform every
              aspect of the property experience
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {ecosystemModules.map((module) => {
              const Icon = module.icon;
              const colors = getModuleColorClasses(module.color);

              return (
                <div
                  key={module.id}
                  className="module-hover bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 border border-white/10 rounded-2xl p-8 backdrop-blur-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${colors.gradient} rounded-xl flex items-center justify-center`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{module.name}</h3>
                      <p className="text-sm text-neutral-400">
                        {module.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-neutral-300 mb-6">{module.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {module.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-3 py-1 ${colors.bg} rounded-full text-xs`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    className={`${colors.text} text-sm font-medium flex items-center gap-2 transition-colors`}
                  >
                    Explore Module
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        {/* User Journey Flow */}
        <section
          id="journey"
          className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl tracking-tighter mb-4">
              Complete Property Journey
            </h2>
            <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
              From discovery to settlement, HAUS guides you through every step
              with AI-powered insights and transparency
            </p>
          </div>

          {/* Journey Steps */}
          <div className="relative">
            {/* Journey Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-emerald-500 to-orange-500 opacity-30 hidden md:block" />

            <div className="space-y-16">
              {journeySteps.map((step) => {
                const Icon = step.icon;
                const colors = getJourneyColorClasses(step.color);

                const StepCard = (
                  <div className="bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 border border-white/10 rounded-2xl p-8 backdrop-blur-lg">
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${colors.gradient} rounded-full flex items-center justify-center`}
                      >
                        <span className="text-white font-bold">{step.step}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                        <p className="text-sm text-neutral-400">
                          {step.subtitle}
                        </p>
                      </div>
                    </div>
                    <p className="text-neutral-300 mb-4">{step.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {step.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className={`px-3 py-1 ${colors.tag} rounded-full text-xs`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                );

                const TimelineIcon = (
                  <div
                    className={`hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 ${colors.bg} rounded-full items-center justify-center z-10`}
                  >
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                );

                return (
                  <div key={step.step} className="relative flex items-center">
                    {step.position === "left" ? (
                      <>
                        <div className="flex-1 pr-0 md:pr-8">{StepCard}</div>
                        {TimelineIcon}
                        <div className="flex-1 pl-0 md:pl-8 hidden md:block" />
                      </>
                    ) : (
                      <>
                        <div className="flex-1 pr-0 md:pr-8 hidden md:block" />
                        {TimelineIcon}
                        <div className="flex-1 pl-0 md:pl-8">{StepCard}</div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Interactive Demo Section */}
        <section
          id="demo"
          className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
        >
          <div className="bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 border border-white/10 rounded-3xl p-6 sm:p-12 backdrop-blur-lg">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl tracking-tighter mb-4">
                Experience HAUS in Action
              </h2>
              <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
                Try our interactive demo to see how voice-first property search
                transforms the experience
              </p>
            </div>

            {/* Demo Interface */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-neutral-950/60 border border-white/10 rounded-2xl p-8">
                {/* Voice Interface */}
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 voice-pulse">
                    <Mic className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Tap to speak or try these examples:
                  </h3>
                </div>

                {/* Example Queries */}
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {demoExamples.map((example, index) => {
                    const Icon = example.icon;
                    const colors = getDemoColorClasses(example.color);

                    return (
                      <button
                        key={index}
                        className={`text-left p-4 bg-neutral-900/60 border border-white/10 rounded-xl transition-all duration-300 ${colors.border}`}
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className={`w-8 h-8 ${colors.icon} rounded-lg flex items-center justify-center flex-shrink-0 mt-1`}
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-white font-medium mb-1">
                              &quot;{example.query}&quot;
                            </p>
                            <p className="text-sm text-neutral-400">
                              {example.description}
                            </p>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Demo Results Area */}
                <div className="bg-neutral-900/40 border border-white/10 rounded-xl p-6 min-h-[200px] flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-neutral-700 to-neutral-800 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MessageSquare className="w-6 h-6 text-neutral-400" />
                    </div>
                    <p className="text-neutral-400">
                      Click on an example above or use voice to see HAUS AI in
                      action
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <button className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white rounded-full px-8 py-4 text-lg font-semibold transition-all duration-300">
                Start Your Property Journey
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pb-12">
        <div className="border border-white/10 rounded-3xl p-6 sm:p-12 lg:p-16 backdrop-blur-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">H</span>
                </div>
                <span className="text-xl font-semibold tracking-tight text-white">
                  HAUS
                </span>
              </div>
              <p className="leading-relaxed text-sm text-white/60 mb-8">
                The AI-native operating system for property. Making every step
                of your property journey clear, fair, and fast.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/5 bg-white/[0.03]"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4 text-white" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/5 bg-white/[0.03]"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>

            {/* Platform Links */}
            <div>
              <h4 className="text-sm font-medium text-white mb-6 uppercase tracking-wide">
                Platform
              </h4>
              <ul className="space-y-4">
                {footerLinks.platform.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions Links */}
            <div>
              <h4 className="text-sm font-medium text-white mb-6 uppercase tracking-wide">
                Solutions
              </h4>
              <ul className="space-y-4">
                {footerLinks.solutions.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-sm font-medium text-white mb-6 uppercase tracking-wide">
                Company
              </h4>
              <ul className="space-y-4">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-6 text-xs text-white/40">
              <span>2024 HAUS Group Pty Ltd. All rights reserved.</span>
              <a
                href="#"
                className="hover:text-white/60 transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-white/60 transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
            <div className="flex items-center gap-4 text-xs text-white/40">
              <span className="flex items-center gap-2">
                Australia & New Zealand
                <CheckCircle className="w-3 h-3 text-emerald-400" />
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
