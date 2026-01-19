"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  ArrowUpRight,
  Play,
  Mail,
  Target,
  LineChart,
  Factory,
  Rocket,
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
  CalendarClock,
  Search,
  PencilRuler,
  CodeXml,
  Send,
  Gauge,
  MonitorSmartphone,
  Cpu,
  Layers,
  Shield,
  BadgeCheck,
  Sparkles,
  ShieldCheck,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { HausLogo } from "@/components/haus-logo"

export default function EnterprisePage() {
  const [email, setEmail] = useState("")

  const stats = [
    { value: "98.9%", label: "Inference uptime" },
    { value: "-62%", label: "Latency reduction" },
    { value: "SOC2", label: "Security ready" },
  ]

  const frameworkStages = [
    {
      icon: Target,
      stage: "Stage 1",
      title: "Develop AI Strategy",
      items: ["Executive alignment", "Governance framework", "Pilot selection & design", "Technical foundation"],
    },
    {
      icon: LineChart,
      stage: "Stage 2",
      title: "Create Business Value",
      items: ["High-impact use cases", "Success metrics", "Model selection", "Evaluation framework"],
    },
    {
      icon: Factory,
      stage: "Stage 3",
      title: "Build for Production",
      items: ["Prompt engineering", "Evaluation systems", "Optimization strategies", "Scaling architecture"],
    },
    {
      icon: Rocket,
      stage: "Stage 4",
      title: "Deploy & Scale",
      items: ["LLMOps implementation", "Monitoring systems", "Continuous improvement", "Org-wide adoption"],
    },
  ]

  const architectureLayers = [
    {
      icon: Database,
      title: "Data Layer",
      description: "Unified foundation with governance & access control",
      items: ["Enterprise Sources", "Pipelines", "Data Governance", "ETL"],
    },
    {
      icon: BrainCircuit,
      title: "AI Layer",
      description: "Models, training, and lifecycle management",
      items: ["LLM Integration", "Model Dev", "Training Infra", "Model Registry"],
    },
    {
      icon: Cable,
      title: "Integration Layer",
      description: "Connectors, APIs, microservices, and events",
      items: ["APIs", "Microservices", "Legacy Connectors", "Event Streaming"],
    },
    {
      icon: LayoutDashboard,
      title: "Application Layer",
      description: "Interfaces and workflows that deliver value",
      items: ["UI", "Workflow Automation", "Dashboards", "Mobile"],
    },
    {
      icon: Activity,
      title: "Monitoring Layer",
      description: "Observability, evaluation, and security guardrails",
      items: ["Performance Analytics", "Feedback Systems", "Continuous Evals", "Security Monitoring"],
    },
  ]

  const agentArchitecture = [
    { icon: Brain, title: "LLM Core", description: "Reasoning and language understanding." },
    { icon: BookOpenCheck, title: "Memory", description: "Context persistence for continuity." },
    { icon: ListTodo, title: "Planning", description: "Task decomposition and control flow." },
    { icon: Wrench, title: "Tools & Actions", description: "Secure tool use and system orchestration." },
  ]

  const enterpriseApplications = [
    { icon: ServerCog, title: "IT Operations", description: "Monitoring, diagnostics, and incident response." },
    { icon: MessageSquare, title: "Customer Service", description: "End-to-end case resolution with system hooks." },
    { icon: ShoppingCart, title: "Procurement", description: "Supplier analysis, negotiation support, processing." },
    { icon: Banknote, title: "Finance Automation", description: "Docs, reconciliation, and reporting orchestration." },
  ]

  const roadmapPhases = [
    {
      months: "Months 1–3",
      title: "Foundation Building",
      items: ["Governance structure", "Technical requirements", "Team formation"],
      deliverables: "Strategy, Governance, Team Structure",
    },
    {
      months: "Months 4–6",
      title: "Pilot Implementation",
      items: ["Initial projects", "Metrics framework", "Feedback loops"],
      deliverables: "PoC, Success Metrics, User Feedback",
    },
    {
      months: "Months 7–12",
      title: "Strategic Scaling",
      items: ["Expand pilots", "Process optimization", "Capability building"],
      deliverables: "Production Systems, Training, Playbook",
    },
    {
      months: "Months 13–18",
      title: "Enterprise Adoption",
      items: ["Strategy refinement", "Enhanced automation", "Cross-department scale"],
      deliverables: "AI Platform, CoE, Improvement Framework",
    },
  ]

  const processSteps = [
    {
      icon: Search,
      title: "Discovery",
      items: ["Business challenge definition", "Data inventory assessment", "Opportunity qualification", "Success criteria"],
      deliverables: "Discovery Report, Value Assessment",
    },
    {
      icon: PencilRuler,
      title: "Design",
      items: ["Solution architecture", "Model selection", "Integration blueprint", "Implementation roadmap"],
      deliverables: "Design, Technical Spec",
    },
    {
      icon: CodeXml,
      title: "Development",
      items: ["Model customization", "Integrations", "Prompt engineering", "System testing"],
      deliverables: "Prototype, Test Docs",
    },
    {
      icon: Send,
      title: "Deployment",
      items: ["Production rollout", "User training", "Performance monitoring", "Knowledge transfer"],
      deliverables: "Production System, Training",
    },
    {
      icon: Gauge,
      title: "Optimization",
      items: ["Performance analysis", "Model refinements", "Continuous improvement", "ROI tracking"],
      deliverables: "Reports, Enhancement Plan",
    },
  ]

  const pricingPlans = [
    {
      name: "Starter",
      description: "Prototypes & small teams",
      price: "$0",
      period: "/month",
      features: ["10K calls/mo", "Basic evals", "3 team members"],
      buttonLabel: "Get Started",
      highlighted: false,
    },
    {
      name: "Pro",
      description: "Growing teams & production apps",
      price: "$99",
      period: "/month",
      features: ["1M calls/mo", "Advanced evals & A/B", "Unlimited team"],
      buttonLabel: "Start 14-Day Trial",
      highlighted: true,
    },
    {
      name: "Enterprise",
      description: "Custom solutions at scale",
      price: "Custom",
      period: "",
      features: ["Unlimited calls", "SOC2 & audit trails", "Dedicated infra & support"],
      buttonLabel: "Contact Sales",
      highlighted: false,
    },
  ]

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-4 mb-3 rounded-2xl border border-white/10 bg-zinc-900/60 px-4 py-3 sm:px-6 flex items-center justify-between">
            <Link href="/" className="inline-flex items-center gap-2">
              <div className="h-6 w-6 rounded-md bg-white/10 border border-white/10 flex items-center justify-center">
                <Sparkles className="h-3.5 w-3.5 text-white/80" />
              </div>
              <span className="text-base font-semibold tracking-tight">HAUS</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#overview" className="text-sm font-medium text-zinc-300 hover:text-white transition">
                Overview
              </a>
              <a href="#framework" className="text-sm font-medium text-zinc-300 hover:text-white transition">
                Framework
              </a>
              <a href="#architecture" className="text-sm font-medium text-zinc-300 hover:text-white transition">
                Architecture
              </a>
              <a href="#agents" className="text-sm font-medium text-zinc-300 hover:text-white transition">
                AI Agents
              </a>
              <a href="#roadmap" className="text-sm font-medium text-zinc-300 hover:text-white transition">
                Roadmap
              </a>
              <a href="#process" className="text-sm font-medium text-zinc-300 hover:text-white transition">
                Process
              </a>
            </nav>
            <div className="flex items-center gap-2">
              <a
                href="#contact"
                className="hidden md:inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200 hover:bg-white/10 transition"
              >
                <Mail className="h-4 w-4 text-zinc-300" />
                Contact
              </a>
              <a
                href="#overview"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-gradient-to-r from-white/10 to-white/5 px-4 py-2 text-sm text-white hover:scale-[1.02] transition shadow-lg shadow-white/10"
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
              <p className="mt-5 max-w-xl text-base text-zinc-300">
                A structured approach to AI adoption: strategy, framework, architecture, agents, and production
                rollout. Built for scale, governance, and security across the enterprise.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center">
                <a
                  href="#framework"
                  className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white hover:bg-white/10 transition"
                >
                  Explore Framework
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-orange-300 text-zinc-900 group-hover:translate-x-0.5 transition">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </a>
                <a
                  href="#architecture"
                  className="inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-white transition"
                >
                  <Play className="h-4 w-4 text-orange-300" />
                  View Platform
                </a>
              </div>
              <div className="mt-8 grid max-w-md grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
                  >
                    <div className="text-2xl tracking-tight">{stat.value}</div>
                    <div className="mt-1 text-xs text-zinc-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="w-full max-w-[34rem] rounded-2xl border border-white/10 bg-gradient-to-tr from-white/10 to-white/5 p-6 backdrop-blur-xl shadow-2xl shadow-white/10">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-[22px] tracking-tight font-medium">HAUS Platform Snapshot</h3>
                    <p className="text-sm text-zinc-300 mt-1">Observability • Evaluation • Governance</p>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-zinc-900/50 px-2 py-1 text-xs text-zinc-300">
                    <Search className="h-3.5 w-3.5 text-zinc-400" />
                    haus-platform
                  </div>
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-lg border border-white/10 bg-zinc-950/50 p-3">
                    <div className="text-xs text-zinc-400">Models</div>
                    <div className="mt-1 text-lg tracking-tight">28</div>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-zinc-950/50 p-3">
                    <div className="text-xs text-zinc-400">Agents</div>
                    <div className="mt-1 text-lg tracking-tight">12</div>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-zinc-950/50 p-3">
                    <div className="text-xs text-zinc-400">Eval Suites</div>
                    <div className="mt-1 text-lg tracking-tight">36</div>
                  </div>
                </div>
                <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-lg border border-white/10 bg-zinc-950/50 p-3">
                    <div className="text-xs text-zinc-400">Latency p95</div>
                    <div className="mt-1 text-lg tracking-tight">147ms</div>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-zinc-950/50 p-3">
                    <div className="text-xs text-zinc-400">Guardrails</div>
                    <div className="mt-1 text-lg tracking-tight">Active</div>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-zinc-950/50 p-3">
                    <div className="text-xs text-zinc-400">Rollbacks</div>
                    <div className="mt-1 text-lg tracking-tight">1-click</div>
                  </div>
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <div className="text-xs text-zinc-400">ENV: Production</div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-zinc-200">
                    <Shield className="h-3.5 w-3.5 text-zinc-300" />
                    Compliance Enabled
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Logos */}
          <div className="mt-14 border-t border-white/10 pt-8">
            <p className="text-center text-sm text-zinc-400">
              Trusted by product teams focused on reliability and scale
            </p>
            <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-6 text-zinc-400/80">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="h-8 rounded-md border border-white/10 bg-white/5"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Framework */}
      <section id="framework" className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl tracking-tight">Implementation Framework</h2>
            <p className="mt-3 max-w-2xl mx-auto text-sm text-zinc-300">
              A four-stage methodology that aligns strategy, value, productionization, and scale.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {frameworkStages.map((stage, index) => {
              const Icon = stage.icon
              return (
                <Card key={index} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <CardContent className="p-0">
                    <div className="flex items-center gap-2">
                      <Icon className="h-5 w-5 text-orange-300" />
                      <span className="text-xs text-zinc-400">{stage.stage}</span>
                    </div>
                    <h3 className="mt-2 text-lg tracking-tight font-semibold">{stage.title}</h3>
                    <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                      {stage.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Target className="h-4 w-4 text-orange-300 flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
          <p className="mt-8 text-center text-sm text-zinc-400 max-w-3xl mx-auto">
            Methodical adoption leads to durable value—each phase compounds outcomes by aligning governance,
            measurable value, and technical maturity.
          </p>
        </div>
      </section>

      {/* Technical Architecture */}
      <section id="architecture" className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl tracking-tight">Technical Architecture</h2>
            <p className="mt-3 max-w-2xl mx-auto text-sm text-zinc-300">
              Layered platform that integrates securely with enterprise systems.
            </p>
          </div>
          <div className="mt-10 space-y-4">
            {architectureLayers.map((layer, index) => {
              const Icon = layer.icon
              return (
                <Card key={index} className="rounded-xl border border-white/10 bg-white/5 p-5">
                  <CardContent className="p-0">
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center gap-2">
                        <Icon className="h-5 w-5 text-orange-300" />
                        <h3 className="text-sm tracking-tight text-zinc-200">{layer.title}</h3>
                      </div>
                      <span className="text-xs text-zinc-400">{layer.description}</span>
                    </div>
                    <div className="mt-4 grid gap-3 sm:grid-cols-4">
                      {layer.items.map((item, i) => (
                        <div
                          key={i}
                          className="rounded-md border border-white/10 bg-zinc-950/50 p-3 text-center text-sm"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
          <p className="mt-8 text-center text-sm text-zinc-400 max-w-3xl mx-auto">
            Resilient by design—connect seamlessly with existing systems while maintaining governance, safety,
            and performance.
          </p>
        </div>
      </section>

      {/* AI Agents */}
      <section id="agents" className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl tracking-tight">Enterprise AI Agents</h2>
            <p className="mt-3 max-w-2xl mx-auto text-sm text-zinc-300">
              Autonomous systems that plan, remember, and act—safely integrated with your stack.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* Architecture card */}
            <Card className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <CardContent className="p-0">
                <h3 className="text-lg tracking-tight font-semibold">Agent Architecture</h3>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {agentArchitecture.map((item, index) => {
                    const Icon = item.icon
                    return (
                      <div
                        key={index}
                        className="rounded-lg border border-white/10 bg-zinc-950/50 p-4"
                      >
                        <div className="inline-flex items-center gap-2">
                          <Icon className="h-4 w-4 text-orange-300" />
                          <span className="text-sm">{item.title}</span>
                        </div>
                        <p className="mt-2 text-xs text-zinc-400">{item.description}</p>
                      </div>
                    )
                  })}
                </div>
                <p className="mt-4 text-sm text-zinc-300">
                  Agents combine reasoning, memory, and tool-use to autonomously complete tasks under policy
                  controls.
                </p>
              </CardContent>
            </Card>
            {/* Applications card */}
            <Card className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <CardContent className="p-0">
                <h3 className="text-lg tracking-tight font-semibold">Enterprise Applications</h3>
                <div className="mt-4 space-y-4">
                  {enterpriseApplications.map((app, index) => {
                    const Icon = app.icon
                    return (
                      <div key={index} className="border-l-2 border-zinc-700 pl-3">
                        <h4 className="text-sm text-zinc-200 inline-flex items-center gap-2">
                          <Icon className="h-4 w-4 text-orange-300" />
                          {app.title}
                        </h4>
                        <p className="mt-1 text-xs text-zinc-400">{app.description}</p>
                      </div>
                    )
                  })}
                </div>
                <blockquote className="mt-6 text-sm italic text-zinc-400">
                  "Rather than outputting text alone, agents interact with systems to accomplish goals—safely
                  and reliably."
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl tracking-tight">18-Month Roadmap</h2>
            <p className="mt-3 max-w-2xl mx-auto text-sm text-zinc-300">
              Foundation to enterprise adoption with measurable milestones.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-4">
            {roadmapPhases.map((phase, index) => (
              <Card key={index} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <CardContent className="p-0">
                  <div className="inline-flex items-center gap-2 text-xs text-zinc-400">
                    <CalendarClock className="h-4 w-4 text-orange-300" />
                    {phase.months}
                  </div>
                  <h3 className="mt-2 text-sm tracking-tight text-zinc-200">{phase.title}</h3>
                  <ul className="mt-3 space-y-2 text-xs text-zinc-300">
                    {phase.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <div className="mt-4 border-t border-white/10 pt-3 text-xs text-zinc-400">
                    Deliverables: {phase.deliverables}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-zinc-400 max-w-3xl mx-auto">
            Build confidence through staged delivery—learn from pilots, standardize patterns, and scale
            responsibly.
          </p>
        </div>
      </section>

      {/* Solution Engineering Process */}
      <section id="process" className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl tracking-tight">HAUS Solution Engineering Process</h2>
            <p className="mt-3 max-w-2xl mx-auto text-sm text-zinc-300">
              Clear phases with artifacts at each step to ensure measurable outcomes.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-5">
            {processSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <Card key={index} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <CardContent className="p-0">
                    <div className="flex justify-center mb-4">
                      <div className="h-12 w-12 rounded-full border border-white/15 bg-zinc-900/50 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-zinc-300" />
                      </div>
                    </div>
                    <h3 className="text-sm tracking-tight text-center">{step.title}</h3>
                    <ul className="mt-3 space-y-2 text-xs text-zinc-300">
                      {step.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    <div className="mt-4 border-t border-white/10 pt-3 text-xs text-zinc-400">
                      Deliverables: {step.deliverables}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Technical Architecture (Core + Integration) */}
      <section id="alias-core" className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl tracking-tight">HAUS Technical Architecture</h2>
            <p className="mt-3 max-w-2xl mx-auto text-sm text-zinc-300">
              Enterprise integration with model management, orchestration, and governance.
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
                  <div
                    key={i}
                    className="rounded-md border border-white/10 bg-zinc-950/50 p-3 text-center text-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            {/* Core */}
            <div className="rounded-xl border border-white/10 bg-zinc-950/50 p-6">
              <div className="flex items-center justify-center gap-2">
                <Cpu className="h-5 w-5 text-orange-300" />
                <h3 className="text-sm tracking-tight">HAUS AI Platform Core</h3>
              </div>
              <div className="mt-6 grid gap-6 md:grid-cols-3">
                <div>
                  <h4 className="text-xs text-zinc-400 text-center mb-2">Model Management</h4>
                  <div className="space-y-2">
                    {["Model Registry", "Fine-tuning Engine", "Prompt Management"].map((item, i) => (
                      <div
                        key={i}
                        className="rounded-md border border-white/10 bg-zinc-900/60 p-2 text-center text-xs"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs text-zinc-400 text-center mb-2">Orchestration</h4>
                  <div className="space-y-2">
                    {["Workflow Engine", "Agent Framework", "Tool Integration"].map((item, i) => (
                      <div
                        key={i}
                        className="rounded-md border border-white/10 bg-zinc-900/60 p-2 text-center text-xs"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs text-zinc-400 text-center mb-2">Governance</h4>
                  <div className="space-y-2">
                    {["Access Control", "Monitoring & Logs", "Evaluation System"].map((item, i) => (
                      <div
                        key={i}
                        className="rounded-md border border-white/10 bg-zinc-900/60 p-2 text-center text-xs"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Integration */}
            <div className="mt-6">
              <div className="inline-flex items-center gap-2">
                <Layers className="h-5 w-5 text-orange-300" />
                <h3 className="text-sm tracking-tight">Enterprise Integration</h3>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-5">
                {["ERP", "CRM", "Warehouses", "Docs/ECM", "Cloud Services"].map((item, i) => (
                  <div
                    key={i}
                    className="rounded-md border border-white/10 bg-zinc-950/50 p-3 text-center text-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="mt-8 text-center text-sm text-zinc-400 max-w-3xl mx-auto">
            Secure, scalable, and governed—supporting custom builds and industry accelerators.
          </p>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-12">
          <Card className="rounded-3xl border border-white/10 bg-zinc-900/60 p-6 sm:p-10">
            <CardContent className="p-0">
              <div className="grid gap-8 lg:grid-cols-2 items-center">
                <div>
                  <h3 className="text-2xl tracking-tight">Ready to operationalize AI?</h3>
                  <p className="mt-2 max-w-lg text-sm text-zinc-300">
                    Request early access. We'll reach out with next steps and help tailor the framework to
                    your environment.
                  </p>
                  <form className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-zinc-950/60 px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-300/30 focus:border-zinc-400/40"
                    />
                    <Button
                      type="button"
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-5 py-3 text-sm text-white hover:bg-white/15 transition"
                    >
                      Request Access
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </form>
                  <p className="mt-2 text-xs text-zinc-500">
                    By submitting, you agree to our terms and privacy policy.
                  </p>
                </div>
                <div className="relative">
                  <div className="relative h-56 w-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-950">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-300/10 to-transparent" />
                    <div className="absolute bottom-4 left-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs backdrop-blur">
                      <Shield className="mr-2 h-4 w-4 text-zinc-300" />
                      Enterprise-grade security
                    </div>
                    <div className="absolute top-4 right-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs backdrop-blur">
                      <BadgeCheck className="mr-2 h-4 w-4 text-zinc-300" />
                      SOC2 Ready
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pricing summary */}
          <div className="mt-12 text-center">
            <h4 className="text-xl tracking-tight">Simple, transparent pricing</h4>
            <p className="mt-2 text-sm text-zinc-300">Start with pilots. Scale at your pace. No hidden fees.</p>
            <div className="mx-auto mt-8 grid max-w-7xl gap-8 lg:grid-cols-3">
              {pricingPlans.map((plan, index) => (
                <Card
                  key={index}
                  className={`rounded-2xl border ${
                    plan.highlighted
                      ? "border-white/20 bg-gradient-to-br from-zinc-900/80 to-zinc-900/40"
                      : "border-white/10 bg-white/5"
                  } p-8`}
                >
                  <CardContent className="p-0">
                    <h5 className="text-lg tracking-tight font-semibold">{plan.name}</h5>
                    <p className="mt-2 text-sm text-zinc-400">{plan.description}</p>
                    <div className="mt-5 flex items-baseline gap-2">
                      <span className="text-3xl tracking-tight">{plan.price}</span>
                      {plan.period && <span className="text-sm text-zinc-400">{plan.period}</span>}
                    </div>
                    <ul className="mt-6 space-y-3 text-sm text-zinc-300">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Target className="h-4 w-4 text-orange-300 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`mt-6 w-full rounded-xl ${
                        plan.highlighted
                          ? "bg-orange-300 text-zinc-900 hover:brightness-95 font-semibold"
                          : "border border-white/10 bg-white/5 text-white hover:bg-white/10"
                      } px-4 py-3 text-sm transition`}
                    >
                      {plan.buttonLabel}
                    </Button>
                  </CardContent>
                </Card>
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
                <span className="text-xl font-semibold tracking-tight">HAUS</span>
              </div>
              <p className="text-sm text-white/60">
                Operationalize AI with reliable, governed inference. Built for security and scale.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-white mb-4 uppercase tracking-wide">Platform</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a className="text-white/60 hover:text-white transition" href="#framework">
                    Framework
                  </a>
                </li>
                <li>
                  <a className="text-white/60 hover:text-white transition" href="#architecture">
                    Architecture
                  </a>
                </li>
                <li>
                  <a className="text-white/60 hover:text-white transition" href="#agents">
                    AI Agents
                  </a>
                </li>
                <li>
                  <a className="text-white/60 hover:text-white transition" href="#roadmap">
                    Roadmap
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium text-white mb-4 uppercase tracking-wide">Solutions</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <span className="text-white/60">Enterprise AI</span>
                </li>
                <li>
                  <span className="text-white/60">Production Inference</span>
                </li>
                <li>
                  <span className="text-white/60">Model Evaluation</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium text-white mb-4 uppercase tracking-wide">Stay Updated</h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="email@domain.com"
                  className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-zinc-300/30"
                />
                <Button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-5 py-3 text-sm text-white hover:bg-white/15 transition"
                >
                  Subscribe
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-6 text-xs text-white/40">
              <span>© {new Date().getFullYear()} HAUS. All rights reserved.</span>
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
                <ShieldCheck className="h-3.5 w-3.5 text-zinc-500" />
              </span>
              <span className="inline-flex items-center gap-2">
                99.9% Uptime
                <Activity className="h-3.5 w-3.5 text-zinc-500" />
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
