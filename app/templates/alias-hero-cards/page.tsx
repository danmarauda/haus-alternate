"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Hexagon,
  Menu,
  ArrowRight,
  Monitor,
  Folder,
  FileCode,
  Server,
  Database,
  Settings,
  X,
  Plus,
  Zap,
  Terminal,
  Eye,
  ExternalLink,
  Star,
  GitBranch,
  TrendingUp,
  Users,
  BarChart3,
  ShieldCheck,
  Globe,
  Brain,
  Layers,
  Phone,
  Twitter,
  Github,
  Linkedin,
} from "lucide-react";

export default function AliasHeroCardsPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [counters, setCounters] = useState({
    developers: 0,
    uptime: 0,
    deployments: 0,
    locations: 0,
  });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Glow button effect
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  // Counter animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const startTime = performance.now();

    const animateCounters = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setCounters({
        developers: parseFloat((2.0 * easeOutQuart).toFixed(1)),
        uptime: parseFloat((99.99 * easeOutQuart).toFixed(2)),
        deployments: parseFloat((50.0 * easeOutQuart).toFixed(1)),
        locations: Math.floor(200 * easeOutQuart),
      });

      if (progress < 1) {
        requestAnimationFrame(animateCounters);
      }
    };

    requestAnimationFrame(animateCounters);
  }, [isVisible]);

  // Typing animation state
  const [currentLine, setCurrentLine] = useState(0);
  const typingLines = [
    "import React, { useState, useEffect } from 'react'",
    "import { Dashboard, MetricsPanel } from '@/components'",
    "",
    "interface DashboardProps {",
    "  userId: string",
    "  theme?: 'light' | 'dark'",
    "}",
    "",
    "export const Dashboard: React.FC<DashboardProps> =",
    "  ({ userId, theme = 'dark' }) => {",
    "    const [metrics, setMetrics] = useState<MetricsData | null>(null)",
    "    const [isLoading, setIsLoading] = useState(true)",
    "",
    "    useEffect(() => {",
    "      fetchUserMetrics(userId)",
    "        .then(setMetrics)",
    "        .finally(() => setIsLoading(false))",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % typingLines.length);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-white overflow-x-hidden">
      {/* Navigation */}
      <header className="fixed top-4 left-4 right-4 z-50 fade-in">
        <div className="max-w-7xl mx-auto">
          <div className="h-14 flex glass-effect bg-white/5 border border-white/10 rounded-full px-3 items-center justify-between backdrop-blur-xl">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 flex bg-gradient-to-b from-blue-400 to-blue-600 rounded-full items-center justify-center">
                <Hexagon className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-medium">Nexus Studio</span>
            </div>

            <nav className="hidden md:flex items-center gap-8 text-sm">
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                Platform
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                Solutions
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                Enterprise
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                Resources
              </a>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <button className="px-4 py-2 text-sm text-white/70 hover:text-white transition-colors">
                Sign In
              </button>
              <button className="px-4 py-2 text-sm bg-white text-black rounded-full hover:bg-white/90 transition-all transform hover:scale-105">
                Get Started
              </button>
            </div>

            <button className="md:hidden p-2">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="max-w-full sm:px-6 lg:px-8 relative z-10 mx-auto pt-40 px-4">
        <div className="max-w-4xl text-left mt-10 mb-10 justify-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/20 rounded-full mb-8"
          >
            <div className="w-2 h-2 rounded-full animate-pulse bg-cyan-400" />
            <span className="text-sm font-medium">
              Trusted by 2M+ developers worldwide
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl tracking-tight mb-8 bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent font-light"
          >
            Think different.
            <br />
            Build exceptional.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-2xl leading-relaxed text-lg font-normal text-white/60 mb-12 ml-0"
          >
            The most advanced development platform designed for teams who
            refuse to compromise on quality. Every line of code, every
            deployment, perfected.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-start"
          >
            <button
              onMouseMove={handleMouseMove}
              className="glow-btn relative overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-3.5 font-bold text-gray-900 transition-transform hover:translate-y-[-1px] hover:border-gray-300"
              style={
                {
                  "--x": `${mousePosition.x}px`,
                  "--y": `${mousePosition.y}px`,
                } as React.CSSProperties
              }
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started <ArrowRight className="w-5 h-5" />
              </span>
              <div className="pointer-events-none absolute inset-[-4px] rounded-full opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
            </button>

            <button className="flex items-center gap-2 rounded-full border border-white/20 bg-black px-8 py-4 font-medium hover:bg-white/10 transition-all">
              <Monitor className="h-5 w-5" />
              Watch Demo
            </button>
          </motion.div>
        </div>
      </div>

      {/* Interactive IDE Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0)" }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-gray-900/50 to-black/50 p-8 glass-effect"
          >
            {/* IDE Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-cyan-500" />
                </div>
                <span className="text-sm text-white/50">Nexus Cloud IDE</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs text-cyan-400">
                  <Zap className="mr-1 inline h-3 w-3" />
                  Live
                </div>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-12">
              {/* File Explorer */}
              <aside className="lg:col-span-3 space-y-2">
                <div className="mb-4 text-xs font-semibold uppercase tracking-wide text-white/40">
                  Project Explorer
                </div>
                <div className="space-y-1">
                  {[
                    { icon: Folder, label: "nexus-app", indent: 0 },
                    { icon: Folder, label: "components", indent: 1 },
                    {
                      icon: FileCode,
                      label: "Dashboard.tsx",
                      indent: 2,
                      active: true,
                    },
                    { icon: FileCode, label: "Analytics.tsx", indent: 2 },
                    { icon: Folder, label: "api", indent: 1 },
                    { icon: Server, label: "routes.ts", indent: 2 },
                    { icon: Database, label: "database.config", indent: 0 },
                    { icon: Settings, label: "nexus.config.json", indent: 0 },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`flex cursor-pointer items-center gap-2 rounded-lg p-2 transition-colors hover:bg-white/5 ${
                        item.active
                          ? "border-blue-500/30 bg-blue-500/10 pl-10"
                          : `pl-${item.indent * 4 + 2}`
                      }`}
                    >
                      <item.icon
                        className={`h-4 w-4 ${
                          item.active
                            ? "text-orange-400"
                            : item.icon === Folder
                            ? "text-blue-400"
                            : "text-white/60"
                        }`}
                      />
                      <span
                        className={`text-sm ${item.active ? "text-blue-300" : ""}`}
                      >
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </aside>

              {/* Code Editor */}
              <main className="lg:col-span-6">
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-gray-950/80">
                  {/* Editor Tabs */}
                  <div className="flex items-center gap-1 border-b border-white/10 bg-gray-900/50 p-2">
                    <div className="flex items-center gap-2 rounded-lg border border-blue-500/30 bg-blue-500/20 px-4 py-2">
                      <span className="text-xs text-blue-300">
                        Dashboard.tsx
                      </span>
                      <X className="h-3 w-3 cursor-pointer text-white/40 hover:text-white" />
                    </div>
                    <button className="rounded-lg p-2 hover:bg-white/5">
                      <Plus className="h-4 w-4 text-white/40" />
                    </button>
                  </div>

                  {/* Code Content */}
                  <div className="relative min-h-96 bg-gray-950/80 p-4 font-mono text-sm leading-7">
                    <div className="absolute inset-4 space-y-1">
                      {typingLines.map((line, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{
                            opacity: index <= currentLine ? 1 : 0,
                            x: index <= currentLine ? 0 : -10,
                          }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex"
                        >
                          <span className="mr-4 w-8 text-right text-white/30">
                            {index + 1}
                          </span>
                          <span className="typing-text">{line}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="mt-6 flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">
                        Analytics Dashboard Pro
                      </h3>
                      <p className="text-sm text-white/50">
                        by Enterprise Team • Updated 3 minutes ago
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="flex items-center gap-2 rounded-lg bg-white/10 px-3 py-1.5 text-xs transition-colors hover:bg-white/20">
                        <Star className="h-3 w-3" />
                        2.3k
                      </button>
                      <button className="flex items-center gap-2 rounded-lg bg-white/10 px-3 py-1.5 text-xs transition-colors hover:bg-white/20">
                        <GitBranch className="h-3 w-3" />
                        Fork
                      </button>
                    </div>
                  </div>
                </div>
              </main>

              {/* Terminal & Output */}
              <aside className="lg:col-span-3 space-y-4">
                {/* Live Terminal */}
                <div className="rounded-xl border border-white/10 bg-gray-950/80">
                  <div className="flex items-center justify-between border-b border-white/10 p-3">
                    <div className="flex items-center gap-2">
                      <Terminal className="h-4 w-4 text-cyan-400" />
                      <span className="text-sm font-medium">Terminal</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
                      <span className="text-xs text-cyan-400">Live</span>
                    </div>
                  </div>
                  <div className="h-48 space-y-2 overflow-y-auto p-3 font-mono text-xs">
                    <div className="text-cyan-400">→ nexus dev --hot-reload</div>
                    <div className="text-white/60">
                      🚀 Starting Nexus development server...
                    </div>
                    <div className="text-blue-400">
                      ✓ TypeScript compiler ready
                    </div>
                    <div className="text-blue-400">
                      ✓ Hot module replacement enabled
                    </div>
                    <div className="text-cyan-400">
                      ✓ Server running on https://localhost:3000
                    </div>
                    <div className="text-purple-400">
                      ✓ GraphQL playground available
                    </div>
                    <div className="text-yellow-400">
                      ⚡ Watching for file changes...
                    </div>
                    <div className="text-white/40">
                      Dashboard.tsx compiled in 847ms
                    </div>
                    <div className="text-cyan-400">→ nexus test --watch</div>
                    <div className="text-cyan-400">✅ 47 tests passed</div>
                    <div className="text-white/40">Code coverage: 94.3%</div>
                    <div className="text-blue-400">
                      → Ready for production deployment
                    </div>
                  </div>
                </div>

                {/* Live Preview */}
                <div className="rounded-xl border border-white/10 bg-gray-950/80">
                  <div className="flex items-center justify-between border-b border-white/10 p-3">
                    <div className="flex items-center gap-2">
                      <Eye className="h-4 w-4 text-blue-400" />
                      <span className="text-sm font-medium">Live Preview</span>
                    </div>
                    <button className="rounded p-1 hover:bg-white/10">
                      <ExternalLink className="h-3 w-3" />
                    </button>
                  </div>
                  <div className="space-y-3 p-3">
                    <div className="rounded-lg bg-blue-500/20 p-3">
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-xs font-medium">Performance</span>
                        <span className="text-xs text-cyan-400">98/100</span>
                      </div>
                      <div className="h-1 w-full rounded-full bg-white/10">
                        <div className="h-1 rounded-full bg-cyan-400" style={{ width: "98%" }} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-white/60">Bundle Size</span>
                        <span className="text-cyan-400">2.4MB ↓12%</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-white/60">Load Time</span>
                        <span className="text-blue-400">1.2s</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-white/60">Lighthouse</span>
                        <span className="text-purple-400">A+</span>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>

            {/* Floating action buttons */}
            <div className="absolute bottom-4 right-4 flex gap-2">
              <button className="rounded-full bg-white/10 p-3 transition-all hover:bg-white/20">
                <ArrowRight className="w-5 h-5 text-neutral-50" />
              </button>
              <button className="rounded-full bg-white/10 p-3 transition-all hover:bg-white/20">
                <ShareIcon className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-32" ref={sectionRef}>
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <h2 className="mb-6 text-4xl font-light tracking-tight sm:text-5xl">
              Trusted by industry leaders.
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-white/60">
              See how forward-thinking companies use Nexus Studio to build
              exceptional digital experiences.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "TechCorp Inc.",
                subtitle: "Fortune 500 Company",
                stat: "300% faster deployments",
                quote:
                  "Nexus Studio transformed our development workflow. We went from weekly deployments to multiple deployments per day, with zero downtime.",
                author: "Sarah Chen",
                role: "VP of Engineering",
                gradient: "from-blue-500/20 to-purple-600/20",
                icon: TrendingUp,
              },
              {
                title: "StartupX",
                subtitle: "Y Combinator Startup",
                stat: "10x team productivity",
                quote:
                  "As a growing startup, Nexus Studio gave us enterprise-grade tools without the complexity. Our team can focus on building, not infrastructure.",
                author: "Alex Rodriguez",
                role: "CTO & Co-founder",
                gradient: "from-purple-500/20 to-pink-600/20",
                icon: Users,
              },
              {
                title: "DataFlow Pro",
                subtitle: "Analytics Platform",
                stat: "99.99% uptime achieved",
                quote:
                  "Mission-critical analytics platform serving millions of users. Nexus Studio's reliability and monitoring tools ensure we never miss a beat.",
                author: "Maya Patel",
                role: "Head of Platform",
                gradient: "from-orange-500/20 to-red-600/20",
                icon: BarChart3,
              },
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/10"
              >
                <div className={`relative aspect-video overflow-hidden bg-gradient-to-br ${story.gradient}`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-500 group-hover:opacity-80" />
                  <div className="absolute top-4 left-4">
                    <div className="rounded-full bg-black/50 px-3 py-1 text-xs font-medium backdrop-blur-md">
                      Case Study
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/5 backdrop-blur-md">
                        <story.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{story.title}</h3>
                        <p className="text-sm text-white/70">{story.subtitle}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-8 transition-transform duration-300 group-hover:-translate-y-1">
                  <h4 className="mb-4 text-xl font-semibold">{story.stat}</h4>
                  <p className="mb-6 leading-relaxed text-white/60">
                    {story.quote}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600" />
                      <div>
                        <p className="text-sm font-medium">{story.author}</p>
                        <p className="text-xs text-white/50">{story.role}</p>
                      </div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-white/40 transition-all group-hover:text-white group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-20 grid grid-cols-2 gap-8 lg:grid-cols-4">
            {[
              { value: counters.developers, suffix: "M+", label: "Active Developers" },
              { value: counters.uptime, suffix: "%", label: "Platform Uptime" },
              { value: counters.deployments, suffix: "M+", label: "Monthly Deployments" },
              { value: counters.locations, suffix: "+", label: "Global Edge Locations" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-2 text-3xl font-light text-neutral-50 lg:text-4xl">
                  {stat.value}
                  {stat.suffix}
                </div>
                <div className="text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <h2 className="mb-6 text-4xl font-light tracking-tight sm:text-5xl">
              Engineered for excellence.
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-white/60">
              Every feature designed with the same attention to detail you'd
              expect from a premium experience.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Zap,
                title: "Lightning Performance",
                description:
                  "Experience sub-millisecond response times with our globally distributed edge network and intelligent caching.",
              },
              {
                icon: ShieldCheck,
                title: "Enterprise Security",
                description:
                  "Bank-grade encryption, SOC 2 Type II compliance, and advanced threat protection built into every layer.",
              },
              {
                icon: Globe,
                title: "Global Scale",
                description:
                  "Deploy instantly to 200+ edge locations worldwide. Your users get the fastest experience, anywhere.",
              },
              {
                icon: Brain,
                title: "AI-Powered Insights",
                description:
                  "Machine learning algorithms optimize your deployments, predict issues, and suggest performance improvements.",
              },
              {
                icon: Layers,
                title: "Seamless Integration",
                description:
                  "Connect with your favorite tools and services through our comprehensive API and webhook ecosystem.",
              },
              {
                icon: Users,
                title: "Team Collaboration",
                description:
                  "Built for teams. Real-time collaboration, advanced permissions, and integrated communication tools.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 transition-all duration-500 hover:border-white/20"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/5 backdrop-blur-md">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-4 text-xl font-semibold">{feature.title}</h3>
                <p className="leading-relaxed text-white/60">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="mx-auto px-4 text-center sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 p-16 glass-effect"
          >
            <h2 className="mb-6 text-4xl font-light tracking-tight sm:text-5xl">
              Ready to build the future?
            </h2>
            <p className="mb-10 mx-auto max-w-2xl text-xl text-white/60">
              Join the developers who choose excellence. Start your journey
              with Nexus Studio today.
            </p>
            <div className="flex flex-col gap-4 justify-center sm:flex-row">
              <button className="glow-btn rounded-full border border-gray-200 bg-white px-8 py-4 font-semibold text-gray-900 transition-transform hover:translate-y-[-1px] hover:border-gray-300">
                Start Building
                <ArrowRight className="ml-2 inline-block" />
              </button>
              <button className="flex items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-4 font-semibold transition-all hover:bg-white/10">
                <Phone className="h-5 w-5" />
                Schedule a Call
              </button>
            </div>
            <p className="mt-6 text-sm text-white/40">
              Free 14-day trial. No credit card required. Cancel anytime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
          <div className="mb-12 grid gap-12 md:grid-cols-5">
            <div className="md:col-span-2">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-b from-blue-400 to-blue-600">
                  <Hexagon className="h-4 w-4 text-white" />
                </div>
                <span className="text-xl font-semibold">Nexus Studio</span>
              </div>
              <p className="mb-6 max-w-md text-white/60">
                The development platform that empowers teams to create
                extraordinary digital experiences with uncompromising quality.
              </p>
              <div className="flex gap-4">
                <button className="rounded-lg bg-white/10 p-2 transition-colors hover:bg-white/20">
                  <Twitter className="h-5 w-5" />
                </button>
                <button className="rounded-lg bg-white/10 p-2 transition-colors hover:bg-white/20">
                  <Github className="h-5 w-5" />
                </button>
                <button className="rounded-lg bg-white/10 p-2 transition-colors hover:bg-white/20">
                  <Linkedin className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div>
              <h5 className="mb-6 font-semibold">Platform</h5>
              <ul className="space-y-3 text-white/60">
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Cloud IDE
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Deployment
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Analytics
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Monitoring
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="mb-6 font-semibold">Solutions</h5>
              <ul className="space-y-3 text-white/60">
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Startups
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Enterprise
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Agencies
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    E-commerce
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="mb-6 font-semibold">Support</h5>
              <ul className="space-y-3 text-white/60">
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    API Reference
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between border-t border-white/10 pt-8 md:flex-row">
            <p className="text-sm text-white/40">
              © 2024 Nexus Studio, Inc. All rights reserved.
            </p>
            <div className="mt-4 flex gap-6 text-sm text-white/40 md:mt-0">
              <a href="#" className="transition-colors hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="transition-colors hover:text-white">
                Terms of Service
              </a>
              <a href="#" className="transition-colors hover:text-white">
                Security
              </a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .glass-effect {
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }

        .glow-btn {
          position: relative;
          isolation: isolate;
        }

        .glow-btn::before,
        .glow-btn::after {
          content: "";
          position: absolute;
          inset: -4px;
          border-radius: inherit;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.2s ease;
          will-change: background;
          z-index: -1;
        }

        .glow-btn::before {
          background: radial-gradient(
              90px 90px at var(--x) var(--y),
              rgba(255, 255, 255, 0.8) 0%,
              rgba(255, 255, 255, 0.25) 45%,
              transparent 70%
            ),
            radial-gradient(
              140px 140px at var(--x) var(--y),
              rgba(192, 132, 252, 0.55) 0%,
              transparent 75%
            );
          mix-blend-mode: screen;
        }

        .glow-btn::after {
          inset: -8px;
          background: radial-gradient(
            200px 200px at var(--x) var(--y),
            rgba(192, 132, 252, 0.35) 0%,
            transparent 80%
          );
          filter: blur(20px);
          z-index: -2;
        }

        .glow-btn:hover::before,
        .glow-btn:hover::after {
          opacity: 1;
        }

        .fade-in {
          animation: fadeIn 1.2s ease-out forwards;
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }

        .typing-text {
          overflow: hidden;
          white-space: nowrap;
          animation: typing 0.5s steps(40, end);
        }

        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}

// Add missing Share icon
function ShareIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 2v13" />
      <path d="m16 6-4-4-4 4" />
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
    </svg>
  );
}
