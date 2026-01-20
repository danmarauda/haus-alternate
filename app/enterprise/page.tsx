"use client"

/**
 * Enterprise AI Platform Page
 *
 * @description
 * Comprehensive enterprise AI platform showcase with implementation framework,
 * technical architecture, AI agents overview, roadmap, and pricing. Migrated from
 * Vite to Next.js App Router.
 *
 * @features
 * - Four-stage implementation framework
 * - Layered technical architecture
 * - Enterprise AI agents overview
 * - 18-month roadmap visualization
 * - Solution engineering process
 * - Pricing tiers and contact forms
 *
 * @example
 * ```tsx
 * // Access at /enterprise route
 * <EnterpriseAIPlatformPage />
 * ```
 */

import { useState } from "react"
import Link from "next/link"
import {
  Sparkles,
  Mail,
  ArrowRight,
  ArrowUpRight,
  Play,
  Search,
  Shield,
  Target,
  LineChart,
  Factory,
  Rocket,
  CheckCircle2,
  CalendarClock,
  Database,
  BrainCircuit,
  Cable,
  LayoutDashboard,
  Activity,
  Brain,
  BookOpenCheck,
  ListTodo,
  Wrench,
  ServerCog,
  MessageSquare,
  ShoppingCart,
  Banknote,
  MonitorSmartphone,
  Cpu,
  Layers,
  PencilRuler,
  CodeXml,
  Send,
  Gauge,
  BadgeCheck,
} from "lucide-react"

// Implementation stages mock data
const stages = [
  {
    id: "1",
    stage: "Stage 1",
    title: "Develop AI Strategy",
    items: [
      "Executive alignment",
      "Governance framework",
      "Pilot selection & design",
      "Technical foundation",
    ],
    icon: Target,
  },
  {
    id: "2",
    stage: "Stage 2",
    title: "Create Business Value",
    items: [
      "High-impact use cases",
      "Success metrics",
      "Model selection",
      "Evaluation framework",
    ],
    icon: LineChart,
  },
  {
    id: "3",
    stage: "Stage 3",
    title: "Build for Production",
    items: [
      "Prompt engineering",
      "Evaluation systems",
      "Optimization strategies",
      "Scaling architecture",
    ],
    icon: Factory,
  },
  {
    id: "4",
    stage: "Stage 4",
    title: "Deploy & Scale",
    items: [
      "LLMOps implementation",
      "Monitoring systems",
      "Continuous improvement",
      "Org-wide adoption",
    ],
    icon: Rocket,
  },
]

// Architecture layers mock data
const layers = [
  {
    id: "data",
    title: "Data Layer",
    description: "Unified foundation with governance & access control",
    items: ["Enterprise Sources", "Pipelines", "Data Governance", "ETL"],
    icon: Database,
  },
  {
    id: "ai",
    title: "AI Layer",
    description: "Models, training, and lifecycle management",
    items: ["LLM Integration", "Model Dev", "Training Infra", "Model Registry"],
    icon: BrainCircuit,
  },
  {
    id: "integration",
    title: "Integration Layer",
    description: "Connectors, APIs, microservices, and events",
    items: ["APIs", "Microservices", "Legacy Connectors", "Event Streaming"],
    icon: Cable,
  },
  {
    id: "application",
    title: "Application Layer",
    description: "Interfaces and workflows that deliver value",
    items: ["UI", "Workflow Automation", "Dashboards", "Mobile"],
    icon: LayoutDashboard,
  },
  {
    id: "monitoring",
    title: "Monitoring Layer",
    description: "Observability, evaluation, and security guardrails",
    items: ["Performance Analytics", "Feedback Systems", "Continuous Evals", "Security Monitoring"],
    icon: Activity,
  },
]

// Process steps mock data
const processSteps = [
  {
    id: "discovery",
    title: "Discovery",
    items: [
      "Business challenge definition",
      "Data inventory assessment",
      "Opportunity qualification",
      "Success criteria",
    ],
    deliverable: "Deliverables: Discovery Report, Value Assessment",
    icon: Search,
  },
  {
    id: "design",
    title: "Design",
    items: [
      "Solution architecture",
      "Model selection",
      "Integration blueprint",
      "Implementation roadmap",
    ],
    deliverable: "Deliverables: Design, Technical Spec",
    icon: PencilRuler,
  },
  {
    id: "development",
    title: "Development",
    items: [
      "Model customization",
      "Integrations",
      "Prompt engineering",
      "System testing",
    ],
    deliverable: "Deliverables: Prototype, Test Docs",
    icon: CodeXml,
  },
  {
    id: "deployment",
    title: "Deployment",
    items: [
      "Production rollout",
      "User training",
      "Performance monitoring",
      "Knowledge transfer",
    ],
    deliverable: "Deliverables: Production System, Training",
    icon: Send,
  },
  {
    id: "optimization",
    title: "Optimization",
    items: [
      "Performance analysis",
      "Model refinements",
      "Continuous improvement",
      "ROI tracking",
    ],
    deliverable: "Deliverables: Reports, Enhancement Plan",
    icon: Gauge,
  },
]

// Pricing tiers mock data
const pricingTiers = [
  {
    id: "starter",
    name: "Starter",
    description: "Prototypes & small teams",
    price: "$0",
    period: "/month",
    features: ["10K calls/mo", "Basic evals", "3 team members"],
    buttonText: "Get Started",
    buttonStyle: "border border-white/10 bg-white/5 hover:bg-white/10",
  },
  {
    id: "pro",
    name: "Pro",
    description: "Growing teams & production apps",
    price: "$99",
    period: "/month",
    features: [
      "1M calls/mo",
      "Advanced evals & A/B",
      "Unlimited team",
    ],
    highlighted: true,
    buttonText: "Start 14-Day Trial",
    buttonStyle: "bg-orange-300 text-neutral-900 hover:brightness-95",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Custom solutions at scale",
    price: "Custom",
    features: [
      "Unlimited calls",
      "SOC2 & audit trails",
      "Dedicated infra & support",
    ],
    buttonText: "Contact Sales",
    buttonStyle: "border border-white/10 bg-white/5 hover:bg-white/10",
  },
]

// Roadmap phases mock data
const roadmapPhases = [
  {
    period: "Months 1–3",
    title: "Foundation Building",
    items: [
      "Governance structure",
      "Technical requirements",
      "Team formation",
    ],
    deliverable: "Deliverables: Strategy, Governance, Team Structure",
  },
  {
    period: "Months 4–6",
    title: "Pilot Implementation",
    items: [
      "Initial projects",
      "Metrics framework",
      "Feedback loops",
    ],
    deliverable: "Deliverables: PoC, Success Metrics, User Feedback",
  },
  {
    period: "Months 7–12",
    title: "Strategic Scaling",
    items: [
      "Expand pilots",
      "Process optimization",
      "Capability building",
    ],
    deliverable: "Deliverables: Production Systems, Training, Playbook",
  },
  {
    period: "Months 13–18",
    title: "Enterprise Adoption",
    items: [
      "Strategy refinement",
      "Enhanced automation",
      "Cross-department scale",
    ],
    deliverable: "Deliverables: AI Platform, CoE, Improvement Framework",
  },
]

export default function EnterpriseAIPlatformPage() {
  const [email, setEmail] = useState("")

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-4 mb-3 rounded-2xl border border-white/10 bg-neutral-900/60 px-4 py-3 sm:px-6 flex items-center justify-between">
            <Link href="/" className="inline-flex items-center gap-2">
              <div className="h-6 w-6 rounded-md bg-white/10 border border-white/10 flex items-center justify-center">
                <Sparkles className="h-3.5 w-3.5 text-white/80" />
              </div>
              <span className="text-base font-semibold tracking-tight">HAUS</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#overview" className="text-sm font-medium text-neutral-300 hover:text-white transition">
                Overview
              </a>
              <a href="#framework" className="text-sm font-medium text-neutral-300 hover:text-white transition">
                Framework
              </a>
              <a href="#architecture" className="text-sm font-medium text-neutral-300 hover:text-white transition">
                Architecture
              </a>
              <a href="#agents" className="text-sm font-medium text-neutral-300 hover:text-white transition">
                AI Agents
              </a>
              <a href="#roadmap" className="text-sm font-medium text-neutral-300 hover:text-white transition">
                Roadmap
              </a>
              <a href="#process" className="text-sm font-medium text-neutral-300 hover:text-white transition">
                Process
              </a>
            </nav>
            <div className="flex items-center gap-2">
              <a href="#contact" className="hidden md:inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-200 hover:bg-white/10 transition">
                <Mail className="h-4 w-4 text-neutral-300" />
                Contact
              </a>
              <a href="#overview" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-gradient-to-r from-white/10 to-white/5 px-4 py-2 text-sm text-white hover:scale-[1.02] transition"
                style={{ boxShadow: "0 4px 14px -6px rgba(255,255,255,0.14)" }}
              >
                <span>Get Started</span>
                <ArrowRight className="h-4 w-4 text-white" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="overview" className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.05]">
                Enterprise AI, implemented with precision
              </h1>
              <p className="mt-5 max-w-xl text-base text-neutral-300">
                A structured approach to AI adoption: strategy, framework,
                architecture, agents, and production rollout. Built for scale,
                governance, and security across the enterprise.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center">
                <a href="#framework" className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white hover:bg-white/10 transition">
                  Explore Framework
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-orange-300 text-neutral-900 group-hover:translate-x-0.5 transition">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </a>
                <a href="#architecture" className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition">
                  <Play className="h-4 w-4 text-orange-300" />
                  View Platform
                </a>
              </div>
              <div className="mt-8 grid max-w-md grid-cols-3 gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                  <div className="text-2xl tracking-tight">98.9%</div>
                  <div className="mt-1 text-xs text-neutral-400">Inference uptime</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                  <div className="text-2xl tracking-tight">-62%</div>
                  <div className="mt-1 text-xs text-neutral-400">Latency reduction</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                  <div className="text-2xl tracking-tight">SOC2</div>
                  <div className="mt-1 text-xs text-neutral-400">Security ready</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full max-w-[34rem] rounded-2xl border border-white/10 bg-gradient-to-tr from-white/10 to-white/5 p-6 backdrop-blur-xl"
                style={{ boxShadow: "0 10px 40px -16px rgba(255,255,255,0.18)" }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-[22px] tracking-tight font-medium">
                      HAUS Platform Snapshot
                    </h3>
                    <p className="text-sm text-neutral-300 mt-1">
                      Observability • Evaluation • Governance
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-neutral-900/50 px-2 py-1 text-xs text-neutral-300">
                    <Search className="h-3.5 w-3.5 text-neutral-400" />
                    haus-platform
                  </div>
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-lg border border-white/10 bg-neutral-950/50 p-3">
                    <div className="text-xs text-neutral-400">Models</div>
                    <div className="mt-1 text-lg tracking-tight">28</div>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-neutral-950/50 p-3">
                    <div className="text-xs text-neutral-400">Agents</div>
                    <div className="mt-1 text-lg tracking-tight">12</div>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-neutral-950/50 p-3">
                    <div className="text-xs text-neutral-400">Eval Suites</div>
                    <div className="mt-1 text-lg tracking-tight">36</div>
                  </div>
                </div>
                <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-lg border border-white/10 bg-neutral-950/50 p-3">
                    <div className="text-xs text-neutral-400">Latency p95</div>
                    <div className="mt-1 text-lg tracking-tight">147ms</div>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-neutral-950/50 p-3">
                    <div className="text-xs text-neutral-400">Guardrails</div>
                    <div className="mt-1 text-lg tracking-tight">Active</div>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-neutral-950/50 p-3">
                    <div className="text-xs text-neutral-400">Rollbacks</div>
                    <div className="mt-1 text-lg tracking-tight">1-click</div>
                  </div>
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <div className="text-xs text-neutral-400">ENV: Production</div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-neutral-200">
                    <Shield className="h-3.5 w-3.5 text-neutral-300" />
                    Compliance Enabled
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Logos */}
          <div className="mt-14 border-t border-white/10 pt-8">
            <p className="text-center text-sm text-neutral-400">
              Trusted by product teams focused on reliability and scale
            </p>
            <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-6 text-neutral-400/80">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-8 rounded-md border border-white/10 bg-white/5" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Framework */}
      <section id="framework" className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl tracking-tight">
              Implementation Framework
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-sm text-neutral-300">
              A four-stage methodology that aligns strategy, value,
              productionization, and scale.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stages.map((stage) => {
              const Icon = stage.icon
              return (
                <div key={stage.id} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-orange-300" />
                    <span className="text-xs text-neutral-400">{stage.stage}</span>
                  </div>
                  <h3 className="mt-2 text-lg tracking-tight font-semibold">
                    {stage.title}
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-neutral-300">
                    {stage.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-orange-300 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
          <p className="mt-8 text-center text-sm text-neutral-400 max-w-3xl mx-auto">
            Methodical adoption leads to durable value—each phase compounds
            outcomes by aligning governance, measurable value, and technical
            maturity.
          </p>
        </div>
      </section>

      {/* Technical Architecture */}
      <section id="architecture" className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl tracking-tight">
              Technical Architecture
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-sm text-neutral-300">
              Layered platform that integrates securely with enterprise systems.
            </p>
          </div>
          <div className="mt-10 space-y-4">
            {layers.map((layer) => {
              const Icon = layer.icon
              return (
                <div key={layer.id} className="rounded-xl border border-white/10 bg-white/5 p-5">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-2">
                      <Icon className="h-5 w-5 text-orange-300" />
                      <h3 className="text-sm tracking-tight text-neutral-200">
                        {layer.title}
                      </h3>
                    </div>
                    <span className="text-xs text-neutral-400">
                      {layer.description}
                    </span>
                  </div>
                  <div className="mt-4 grid gap-3 sm:grid-cols-4">
                    {layer.items.map((item, i) => (
                      <div key={i} className="rounded-md border border-white/10 bg-neutral-950/50 p-3 text-center text-sm">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
          <p className="mt-8 text-center text-sm text-neutral-400 max-w-3xl mx-auto">
            Resilient by design—connect seamlessly with existing systems while
            maintaining governance, safety, and performance.
          </p>
        </div>
      </section>

      {/* AI Agents */}
      <section id="agents" className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl tracking-tight">
              Enterprise AI Agents
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-sm text-neutral-300">
              Autonomous systems that plan, remember, and act—safely integrated
              with your stack.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* Architecture card */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg tracking-tight font-semibold">
                Agent Architecture
              </h3>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-white/10 bg-neutral-950/50 p-4">
                  <div className="inline-flex items-center gap-2">
                    <Brain className="h-4 w-4 text-orange-300" />
                    <span className="text-sm">LLM Core</span>
                  </div>
                  <p className="mt-2 text-xs text-neutral-400">
                    Reasoning and language understanding.
                  </p>
                </div>
                <div className="rounded-lg border border-white/10 bg-neutral-950/50 p-4">
                  <div className="inline-flex items-center gap-2">
                    <BookOpenCheck className="h-4 w-4 text-orange-300" />
                    <span className="text-sm">Memory</span>
                  </div>
                  <p className="mt-2 text-xs text-neutral-400">
                    Context persistence for continuity.
                  </p>
                </div>
                <div className="rounded-lg border border-white/10 bg-neutral-950/50 p-4">
                  <div className="inline-flex items-center gap-2">
                    <ListTodo className="h-4 w-4 text-orange-300" />
                    <span className="text-sm">Planning</span>
                  </div>
                  <p className="mt-2 text-xs text-neutral-400">
                    Task decomposition and control flow.
                  </p>
                </div>
                <div className="rounded-lg border border-white/10 bg-neutral-950/50 p-4">
                  <div className="inline-flex items-center gap-2">
                    <Wrench className="h-4 w-4 text-orange-300" />
                    <span className="text-sm">Tools & Actions</span>
                  </div>
                  <p className="mt-2 text-xs text-neutral-400">
                    Secure tool use and system orchestration.
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm text-neutral-300">
                Agents combine reasoning, memory, and tool-use to autonomously
                complete tasks under policy controls.
              </p>
            </div>

            {/* Applications card */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg tracking-tight font-semibold">
                Enterprise Applications
              </h3>
              <div className="mt-4 space-y-4">
                <div className="border-l-2 border-neutral-700 pl-3">
                  <h4 className="text-sm text-neutral-200 inline-flex items-center gap-2">
                    <ServerCog className="h-4 w-4 text-orange-300" /> IT
                    Operations
                  </h4>
                  <p className="mt-1 text-xs text-neutral-400">
                    Monitoring, diagnostics, and incident response.
                  </p>
                </div>
                <div className="border-l-2 border-neutral-700 pl-3">
                  <h4 className="text-sm text-neutral-200 inline-flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-orange-300" />{" "}
                    Customer Service
                  </h4>
                  <p className="mt-1 text-xs text-neutral-400">
                    End-to-end case resolution with system hooks.
                  </p>
                </div>
                <div className="border-l-2 border-neutral-700 pl-3">
                  <h4 className="text-sm text-neutral-200 inline-flex items-center gap-2">
                    <ShoppingCart className="h-4 w-4 text-orange-300" />{" "}
                    Procurement
                  </h4>
                  <p className="mt-1 text-xs text-neutral-400">
                    Supplier analysis, negotiation support, processing.
                  </p>
                </div>
                <div className="border-l-2 border-neutral-700 pl-3">
                  <h4 className="text-sm text-neutral-200 inline-flex items-center gap-2">
                    <Banknote className="h-4 w-4 text-orange-300" /> Finance
                    Automation
                  </h4>
                  <p className="mt-1 text-xs text-neutral-400">
                    Docs, reconciliation, and reporting orchestration.
                  </p>
                </div>
              </div>
              <blockquote className="mt-6 text-sm italic text-neutral-400">
                "Rather than outputting text alone, agents interact with systems
                to accomplish goals—safely and reliably."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl tracking-tight">
              18-Month Roadmap
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-sm text-neutral-300">
              Foundation to enterprise adoption with measurable milestones.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-4">
            {roadmapPhases.map((phase, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="inline-flex items-center gap-2 text-xs text-neutral-400">
                  <CalendarClock className="h-4 w-4 text-orange-300" />
                  {phase.period}
                </div>
                <h3 className="mt-2 text-sm tracking-tight text-neutral-200">
                  {phase.title}
                </h3>
                <ul className="mt-3 space-y-2 text-xs text-neutral-300">
                  {phase.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
                <div className="mt-4 border-t border-white/10 pt-3 text-xs text-neutral-400">
                  {phase.deliverable}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-neutral-400 max-w-3xl mx-auto">
            Build confidence through staged delivery—learn from pilots,
            standardize patterns, and scale responsibly.
          </p>
        </div>
      </section>

      {/* Solution Engineering Process */}
      <section id="process" className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl tracking-tight">
              HAUS Solution Engineering Process
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-sm text-neutral-300">
              Clear phases with artifacts at each step to ensure measurable
              outcomes.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-5">
            {processSteps.map((step) => {
              const Icon = step.icon
              return (
                <div key={step.id} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="flex justify-center mb-4">
                    <div className="h-12 w-12 rounded-full border border-white/15 bg-neutral-900/50 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-neutral-300" />
                    </div>
                  </div>
                  <h3 className="text-sm tracking-tight text-center">
                    {step.title}
                  </h3>
                  <ul className="mt-3 space-y-2 text-xs text-neutral-300">
                    {step.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <div className="mt-4 border-t border-white/10 pt-3 text-xs text-neutral-400">
                    {step.deliverable}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* HAUS Technical Architecture */}
      <section id="alias-core" className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl tracking-tight">
              HAUS Technical Architecture
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-sm text-neutral-300">
              Enterprise integration with model management, orchestration, and
              governance.
            </p>
          </div>
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
            {/* Client Layer */}
            <div className="border-b border-white/10 pb-6 mb-6">
              <div className="inline-flex items-center gap-2">
                <MonitorSmartphone className="h-5 w-5 text-orange-300" />
                <h3 className="text-sm tracking-tight">Client Layer</h3>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-4">
                {["Web Apps", "Mobile", "Enterprise Systems", "Edge/IoT"].map((item, i) => (
                  <div key={i} className="rounded-md border border-white/10 bg-neutral-950/50 p-3 text-center text-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Core */}
            <div className="rounded-xl border border-white/10 bg-neutral-950/50 p-6">
              <div className="flex items-center justify-center gap-2">
                <Cpu className="h-5 w-5 text-orange-300" />
                <h3 className="text-sm tracking-tight">
                  HAUS AI Platform Core
                </h3>
              </div>
              <div className="mt-6 grid gap-6 md:grid-cols-3">
                {[
                  {
                    title: "Model Management",
                    items: [
                      "Model Registry",
                      "Fine-tuning Engine",
                      "Prompt Management",
                    ],
                  },
                  {
                    title: "Orchestration",
                    items: [
                      "Workflow Engine",
                      "Agent Framework",
                      "Tool Integration",
                    ],
                  },
                  {
                    title: "Governance",
                    items: [
                      "Access Control",
                      "Monitoring & Logs",
                      "Evaluation System",
                    ],
                  },
                ].map((section) => (
                  <div key={section.title}>
                    <h4 className="text-xs text-neutral-400 text-center mb-2">
                      {section.title}
                    </h4>
                    <div className="space-y-2">
                      {section.items.map((item, i) => (
                        <div key={i} className="rounded-md border border-white/10 bg-neutral-900/60 p-2 text-center text-xs">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Integration */}
            <div className="mt-6">
              <div className="inline-flex items-center gap-2">
                <Layers className="h-5 w-5 text-orange-300" />
                <h3 className="text-sm tracking-tight">
                  Enterprise Integration
                </h3>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-5">
                {["ERP", "CRM", "Warehouses", "Docs/ECM", "Cloud Services"].map(
                  (item, i) => (
                    <div key={i} className="rounded-md border border-white/10 bg-neutral-950/50 p-3 text-center text-sm">
                      {item}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
          <p className="mt-8 text-center text-sm text-neutral-400 max-w-3xl mx-auto">
            Secure, scalable, and governed—supporting custom builds and
            industry accelerators.
          </p>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-12">
          <div className="rounded-3xl border border-white/10 bg-neutral-900/60 p-6 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div>
                <h3 className="text-2xl tracking-tight">
                  Ready to operationalize AI?
                </h3>
                <p className="mt-2 max-w-lg text-sm text-neutral-300">
                  Request early access. We'll reach out with next steps and help
                  tailor the framework to your environment.
                </p>
                <form className="mt-6 flex flex-col gap-3 sm:flex-row" onSubmit={(e) => { e.preventDefault() }}>
                  <input
                    type="email"
                    required
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-neutral-950/60 px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-300/30 focus:border-neutral-400/40"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-5 py-3 text-sm text-white hover:bg-white/15 transition"
                  >
                    Request Access
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
                <p className="mt-2 text-xs text-neutral-500">
                  By submitting, you agree to our terms and privacy policy.
                </p>
              </div>
              <div className="relative">
                <div className="relative h-56 w-full overflow-hidden rounded-2xl border border-white/10 bg-neutral-950">
                  <div className="absolute inset-0" style={{ background: "radial-gradient(120% 100% at 100% 0%, rgba(255,255,255,0.08) 0%, transparent 60%)" }} />
                  <div className="absolute bottom-4 left-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs backdrop-blur">
                    <Shield className="mr-2 h-4 w-4 text-neutral-300" />
                    Enterprise-grade security
                  </div>
                  <div className="absolute top-4 right-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs backdrop-blur">
                    <BadgeCheck className="mr-2 h-4 w-4 text-neutral-300" />
                    SOC2 Ready
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="mt-12 text-center">
            <h4 className="text-xl tracking-tight">
              Simple, transparent pricing
            </h4>
            <p className="mt-2 text-sm text-neutral-300">
              Start with pilots. Scale at your pace. No hidden fees.
            </p>
            <div className="mx-auto mt-8 grid max-w-7xl gap-8 lg:grid-cols-3">
              {pricingTiers.map((tier) => (
                <div
                  key={tier.id}
                  className={`rounded-2xl border p-8 ${
                    tier.highlighted
                      ? "border-white/20 bg-gradient-to-br from-neutral-900/80 to-neutral-900/40"
                      : "border-white/10 bg-white/5"
                  }`}
                >
                  <h5 className="text-lg tracking-tight font-semibold">
                    {tier.name}
                  </h5>
                  <p className="mt-2 text-sm text-neutral-400">
                    {tier.description}
                  </p>
                  <div className="mt-5 flex items-baseline gap-2">
                    <span className="text-3xl tracking-tight">{tier.price}</span>
                    {tier.period && (
                      <span className="text-sm text-neutral-400">
                        {tier.period}
                      </span>
                    )}
                  </div>
                  <ul className="mt-6 space-y-3 text-sm text-neutral-300">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-orange-300" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`mt-6 w-full rounded-xl px-4 py-3 text-sm font-semibold transition ${
                      tier.buttonStyle === "bg-orange-300 text-neutral-900 hover:brightness-95"
                        ? "bg-orange-300 text-neutral-900 hover:brightness-95"
                        : tier.buttonStyle
                    }`}
                  >
                    {tier.buttonText}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-7xl px-6 pt-16 pb-12">
        <div className="rounded-3xl border border-white/10 px-6 py-12 sm:px-12 backdrop-blur-2xl">
          <div className="grid gap-12 lg:grid-cols-4 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-6 w-6 rounded-md bg-white/10 border border-white/10 flex items-center justify-center">
                  <Sparkles className="h-3.5 w-3.5 text-white/80" />
                </div>
                <span className="text-xl font-semibold tracking-tight">
                  HAUS
                </span>
              </div>
              <p className="text-sm text-white/60">
                Operationalize AI with reliable, governed inference. Built for
                security and scale.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-white mb-4 uppercase tracking-wide">
                Platform
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#framework" className="text-white/60 hover:text-white transition">
                    Framework
                  </a>
                </li>
                <li>
                  <a href="#architecture" className="text-white/60 hover:text-white transition">
                    Architecture
                  </a>
                </li>
                <li>
                  <a href="#agents" className="text-white/60 hover:text-white transition">
                    AI Agents
                  </a>
                </li>
                <li>
                  <a href="#roadmap" className="text-white/60 hover:text-white transition">
                    Roadmap
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium text-white mb-4 uppercase tracking-wide">
                Solutions
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <span className="text-white/60">Enterprise AI</span>
                </li>
                <li>
                  <span className="text-white/60">
                    Production Inference
                  </span>
                </li>
                <li>
                  <span className="text-white/60">Model Evaluation</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium text-white mb-4 uppercase tracking-wide">
                Stay Updated
              </h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="email@domain.com"
                  className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-neutral-300/30"
                />
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-5 py-3 text-sm text-white hover:bg-white/15 transition"
                >
                  Subscribe
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-6 text-xs text-white/40">
              <span>
                © {new Date().getFullYear()} HAUS. All rights reserved.
              </span>
              <a href="#" className="hover:text-white/60 transition">
                Privacy
              </a>
              <a href="#" className="hover:text-white/60 transition">
                Terms
              </a>
            </div>
            <div className="flex items-center gap-4 text-xs text-white/40">
              <span className="inline-flex items-center gap-2">
                SOC2 Compliant
                <Shield className="h-3.5 w-3.5 text-neutral-500" />
              </span>
              <span className="inline-flex items-center gap-2">
                99.9% Uptime
                <Activity className="h-3.5 w-3.5 text-neutral-500" />
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
