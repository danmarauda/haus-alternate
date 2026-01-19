"use client"

import { useState, useEffect } from "react"
import {
  Activity,
  Atom,
  ArrowRight,
  BarChart3,
  BatteryCharging,
  Calendar,
  CheckCircle,
  ChevronDown,
  FileText,
  Inbox,
  LayoutGrid,
  MessageCircle,
  Play,
  Shield,
  Star,
  Target,
  Wand2,
  Wifi,
  Zap,
} from "lucide-react"
import { Card } from "@/components/ui/card"

interface Testimonial {
  icon: typeof Star
  quote: string
  name: string
  role: string
  avatar: string
}

interface PricingPlan {
  name: string
  description: string
  price: string
  period?: string
  popular?: boolean
  features: string[]
  cta: string
  variant?: "default" | "outline"
}

interface FAQ {
  question: string
  answer: string
}

export default function FinanceDashboardPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const testimonials: Testimonial[] = [
    {
      icon: MessageCircle,
      quote: "The hover grid adds a tactile feel without overwhelming the layout.",
      name: "Avery Lin",
      role: "Design Lead",
      avatar: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/066580a6-c095-413e-9b45-18f0ea77397e_320w.webp",
    },
    {
      icon: FileText,
      quote: "Glass panels feel premium, and remain readable above the motion.",
      name: "Jon Vega",
      role: "PM, Core",
      avatar: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/31b3e971-6384-4e96-ac8a-6aa0a13d8963_320w.webp",
    },
    {
      icon: Star,
      quote: "Smooth animation timing creates a natural, delightful experience.",
      name: "Maya Chen",
      role: "Creative Director",
      avatar: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b6673cec-22b1-4ee3-b2a4-a816700254c4_320w.webp",
    },
  ]

  const pricingPlans: PricingPlan[] = [
    {
      name: "Starter",
      description: "For individuals",
      price: "$0",
      period: "/mo",
      features: ["2 pipelines", "Realtime dashboards", "Basic automations"],
      cta: "Get started",
    },
    {
      name: "Growth",
      description: "For growing teams",
      price: "$29",
      period: "/mo",
      popular: true,
      features: ["Unlimited pipelines", "Advanced KPIs", "Priority support"],
      cta: "Start trial",
    },
    {
      name: "Enterprise",
      description: "For organizations",
      price: "Custom",
      features: ["SSO + SCIM", "Dedicated CSM", "Custom SLAs"],
      cta: "Contact sales",
      variant: "outline",
    },
  ]

  const faqs: FAQ[] = [
    {
      question: "How does billing work?",
      answer: "Monthly or annual billing. Cancel anytime.",
    },
    {
      question: "Can I change plans?",
      answer: "Yes, upgrade or downgrade anytime.",
    },
  ]

  const metrics = [
    { label: "Latency", value: "~12ms" },
    { label: "Icons", value: "700+" },
    { label: "FPS", value: "60" },
  ]

  const integrations = [
    { icon: Inbox, label: "Email" },
    { icon: MessageCircle, label: "Chat" },
    { icon: Calendar, label: "Cal" },
    { icon: Zap, label: "Auto" },
  ]

  const featureChips = [
    { icon: Shield, label: "GPU-smooth" },
    { icon: Target, label: "Glass UI" },
    { icon: Wand2, label: "Hover trails" },
  ]

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <div className="min-h-screen antialiased bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4 sm:p-8">
      {/* Background */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900" />
        <div
          className="absolute inset-0"
          style={{
            maskImage: "linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)",
          }}
        />
      </div>

      {/* 3 iPhone Frames */}
      <div className="flex items-center justify-center gap-4 sm:gap-8 lg:gap-10 flex-wrap lg:flex-nowrap">
        {/* Left iPhone: Feature Section */}
        <IPhoneFrame>
          {/* Background */}
          <div
            className="absolute top-0 w-full h-full bg-cover bg-center -z-10"
            style={{
              backgroundImage: "url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/14f40dea-bfc2-4fea-9f86-798fbef967be_3840w.webp')",
              maskImage: "linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)",
              WebkitMaskImage: "linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)",
            }}
          />

          {/* Grid overlay */}
          <GridOverlay />

          {/* Glow */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div
              className="absolute -top-12 -left-12 h-[200px] w-[200px] sm:h-[250px] sm:w-[250px] lg:h-[300px] lg:w-[300px] rounded-full blur-3xl opacity-30"
              style={{
                background: "radial-gradient(60% 60% at 50% 50%, rgba(59,130,246,.35), rgba(59,130,246,0) 65%)",
              }}
            />
          </div>

          {/* Content */}
          <div className="h-full overflow-y-auto px-4 sm:px-5 py-6 sm:py-8 scrollbar-hide">
            {/* Status Bar */}
            <StatusBar />

            {/* Badge */}
            <div className="flex justify-center mb-4">
              <GlassBadge icon={<Atom className="h-3.5 w-3.5 text-sky-300" />} label="Features" />
            </div>

            {/* Heading */}
            <h1 className="text-center text-xl sm:text-2xl font-semibold tracking-tight text-white mb-3">
              Accelerate Your Sales
            </h1>
            <p className="text-center text-sm text-white/70 mb-6">
              Track, automate, and scale your pipeline
            </p>

            {/* Feature Cards */}
            <div className="space-y-4">
              {/* Card 1: Realtime KPIs */}
              <GlassCard className="bg-gradient-to-br from-sky-500/10 via-transparent to-transparent">
                <div className="border-gradient-inner rounded-xl p-3 bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="flex items-center gap-2 text-white/80 text-xs mb-2">
                    <BarChart3 className="h-3.5 w-3.5 text-sky-300" />
                    <span className="font-medium">Realtime KPIs</span>
                  </div>

                  <div className="space-y-2">
                    <div className="rounded-lg p-2 bg-white/5 backdrop-blur-sm border border-white/10">
                      <div className="flex items-center gap-2">
                        <img
                          src="https://flagcdn.com/us.svg"
                          alt="US"
                          className="h-4 w-4 rounded-full ring-1 ring-white/20 object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <p className="text-xs font-medium text-white/90">United States</p>
                            <p className="text-[10px] text-white/60">$89k</p>
                          </div>
                          <div className="mt-1.5 h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-sky-400 to-blue-500"
                              style={{ width: "76%" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="mt-3 text-base font-semibold tracking-tight text-white">
                  Real-Time Tracking
                </h3>
                <p className="mt-1 text-xs text-white/70">
                  See KPIs and revenue trends as they happen
                </p>
              </GlassCard>

              {/* Card 2: Integrations */}
              <GlassCard className="bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent">
                <div className="border-gradient-inner rounded-xl p-3 bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="flex items-center gap-2 text-white/80 text-xs mb-2">
                    <LayoutGrid className="h-3.5 w-3.5 text-emerald-300" />
                    <span className="font-medium">Integrations</span>
                  </div>

                  <div className="grid grid-cols-4 gap-2">
                    {integrations.map((item, idx) => {
                      const Icon = item.icon
                      return (
                        <div
                          key={idx}
                          className="flex flex-col items-center gap-1 rounded-lg p-2 bg-white/5 backdrop-blur-sm border border-white/10"
                        >
                          <Icon className="h-4 w-4 text-white/80" />
                          <span className="text-[9px] text-white/70">{item.label}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>

                <h3 className="mt-3 text-base font-semibold tracking-tight text-white">
                  Collaborate Seamlessly
                </h3>
                <p className="mt-1 text-xs text-white/70">
                  Connect your entire stack in one place
                </p>
              </GlassCard>
            </div>
          </div>
        </IPhoneFrame>

        {/* Center iPhone: Hero Section */}
        <IPhoneFrame>
          {/* Background */}
          <div
            className="absolute top-0 w-full h-full bg-cover bg-center -z-10"
            style={{
              backgroundImage: "url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/14f40dea-bfc2-4fea-9f86-798fbef967be_3840w.webp')",
              maskImage: "linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)",
              WebkitMaskImage: "linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)",
            }}
          />

          {/* Grid overlay */}
          <GridOverlay masked />

          {/* Glow accents */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div
              className="absolute -top-12 -left-12 h-[200px] w-[200px] sm:h-[250px] sm:w-[250px] lg:h-[300px] lg:w-[300px] rounded-full blur-3xl opacity-30"
              style={{
                background: "radial-gradient(60% 60% at 50% 50%, rgba(59,130,246,.35), rgba(59,130,246,0) 65%)",
              }}
            />
            <div
              className="absolute bottom-0 right-0 h-[180px] w-[220px] sm:h-[220px] sm:w-[260px] lg:h-[250px] lg:w-[300px] rounded-full blur-3xl opacity-25"
              style={{
                background: "radial-gradient(60% 60% at 50% 50%, rgba(16,185,129,.28), rgba(16,185,129,0) 65%)",
              }}
            />
          </div>

          {/* Content */}
          <div className="h-full overflow-y-auto px-4 sm:px-5 py-6 sm:py-8 scrollbar-hide">
            {/* Status Bar */}
            <StatusBar className="mb-4 sm:mb-6" />

            {/* Logo */}
            <div className="mb-4 sm:mb-6">
              <div
                className="w-[120px] h-[32px] bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d257331d-dbc9-4389-9767-ff5d0e2512eb_1600w.png')",
                }}
              />
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-2xl px-2.5 py-1.5 mb-4 bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="h-5 w-5 grid place-items-center rounded-lg bg-emerald-500/10 text-emerald-400">
                <Shield className="h-3 w-3" />
              </div>
              <span className="text-xs text-white/70">Live interactive hero</span>
            </div>

            {/* Hero Title */}
            <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-4 leading-tight">
              Liquid glass meets
              <span
                className="text-transparent bg-clip-text block"
                style={{
                  backgroundImage: "linear-gradient(180deg, #fff, rgba(255,255,255,0.65))",
                }}
              >
                dynamic grids
              </span>
            </h1>

            <p className="text-sm leading-relaxed text-white/60 mb-5">
              A responsive hero that blends a hover-reactive icon grid with floating glass panels. Subtle depth, crisp type, and delightful motion.
            </p>

            {/* Feature chips */}
            <div className="flex flex-wrap gap-2 mb-5">
              {featureChips.map((chip, idx) => {
                const Icon = chip.icon
                return (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-1.5 rounded-xl px-2.5 py-1.5 bg-white/5 backdrop-blur-sm border border-white/10"
                  >
                    <Icon className="h-3.5 w-3.5" />
                    <span className="text-[10px] text-white/70">{chip.label}</span>
                  </div>
                )
              })}
            </div>

            {/* Interactive card preview */}
            <Card className="overflow-hidden aspect-[16/12] rounded-2xl p-3 relative mb-5 bg-white/5 backdrop-blur-sm border border-white/10">
              {/* Stacked testimonial cards */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="relative w-full max-w-[200px] sm:max-w-[240px] h-[240px] sm:h-[280px]">
                  {testimonials.map((testimonial, index) => {
                    const Icon = testimonial.icon
                    const position = (index - activeTestimonial + testimonials.length) % testimonials.length

                    return (
                      <div
                        key={index}
                        className="testimonial-card absolute w-full cursor-pointer transition-all duration-500 pointer-events-auto"
                        onClick={() => setActiveTestimonial(index)}
                        style={{
                          top: "50%",
                          zIndex: position === 0 ? 5 : position === 1 ? 4 : position === 2 ? 3 : 1,
                          opacity: position === 0 ? 1 : position === 1 ? 0.7 : position === 2 ? 0.4 : 0,
                          transform: `translateY(-50%) translateY(-${position * 20}px) scale(${1 - position * 0.05}) rotateZ(-${position * 2}deg)`,
                          pointerEvents: position > 2 ? "none" : "auto",
                        }}
                      >
                        <Card className="rounded-xl p-3 bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl">
                          <div className="inline-flex w-7 h-7 rounded-lg items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10">
                            <Icon className="h-3.5 w-3.5" />
                          </div>
                          <p className="mt-2 text-[10px] text-white/70 leading-relaxed">
                            &quot;{testimonial.quote}&quot;
                          </p>
                          <div className="mt-3 flex items-center gap-2 pt-2 border-t border-white/10">
                            <img
                              className="h-6 w-6 rounded-lg ring-2 ring-white/10 object-cover"
                              src={testimonial.avatar}
                              alt={testimonial.name}
                            />
                            <div>
                              <div className="text-[10px] font-medium text-white tracking-tight">
                                {testimonial.name}
                              </div>
                              <div className="text-[9px] text-white/60">{testimonial.role}</div>
                            </div>
                          </div>
                        </Card>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Navigation dots */}
              <div className="pointer-events-auto absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                {testimonials.map((_, index) => (
                  <div
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className="h-1.5 rounded-full transition-all duration-300 cursor-pointer"
                    style={{
                      width: activeTestimonial === index ? "16px" : "6px",
                      backgroundColor: activeTestimonial === index ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.3)",
                    }}
                  />
                ))}
              </div>

              {/* Vignette */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl"
                style={{
                  background: "radial-gradient(400px 200px at 50% 40%, rgba(255,255,255,0.07), transparent 60%)",
                }}
              />
            </Card>

            {/* CTAs */}
            <div className="flex flex-col gap-2.5 mb-5">
              <button className="group inline-flex items-center justify-center gap-2 rounded-xl bg-zinc-100 text-zinc-900 hover:bg-white px-4 py-2.5 text-sm font-medium tracking-tight transition-all border border-white/10">
                <Play className="h-4 w-4" />
                <span>See live demo</span>
              </button>
              <button className="group inline-flex transition-all text-sm text-white tracking-tight rounded-xl py-2.5 px-4 bg-white/5 backdrop-blur-sm border border-white/10 gap-2 items-center justify-center hover:bg-white/10">
                <ArrowRight className="h-4 w-4" />
                <span>Get started</span>
              </button>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-4" />

            {/* Mini metrics */}
            <div className="grid grid-cols-3 gap-2.5">
              {metrics.map((metric, index) => (
                <Card
                  key={index}
                  className="rounded-2xl p-3 bg-white/5 backdrop-blur-sm border border-white/10"
                >
                  <div className="text-[10px] text-white/60">{metric.label}</div>
                  <div className="mt-0.5 text-base font-medium tracking-tight text-white">
                    {metric.value}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </IPhoneFrame>

        {/* Right iPhone: Pricing Section */}
        <IPhoneFrame>
          {/* Background */}
          <div
            className="absolute top-0 w-full h-full bg-cover bg-center -z-10"
            style={{
              backgroundImage: "url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/14f40dea-bfc2-4fea-9f86-798fbef967be_3840w.webp')",
              maskImage: "linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)",
              WebkitMaskImage: "linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)",
            }}
          />

          {/* Grid overlay */}
          <GridOverlay />

          {/* Glow */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div
              className="absolute bottom-0 right-0 h-[200px] w-[200px] sm:h-[250px] sm:w-[250px] lg:h-[300px] lg:w-[300px] rounded-full blur-3xl opacity-25"
              style={{
                background: "radial-gradient(60% 60% at 50% 50%, rgba(16,185,129,.28), rgba(16,185,129,0) 65%)",
              }}
            />
          </div>

          {/* Content */}
          <div className="h-full overflow-y-auto px-4 sm:px-5 py-6 sm:py-8 scrollbar-hide">
            {/* Status Bar */}
            <StatusBar />

            {/* Heading */}
            <div className="text-center mb-6">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">
                Simple pricing
              </h2>
              <p className="mt-1.5 text-sm text-white/60">Start free. Scale when ready.</p>
            </div>

            {/* Pricing Cards */}
            <div className="space-y-3 mb-6 sm:mb-8">
              {pricingPlans.map((plan, index) => (
                <Card
                  key={index}
                  className={`relative rounded-2xl p-4 bg-white/5 backdrop-blur-sm border border-white/10 ${
                    plan.popular ? "ring-1 ring-amber-500/30" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] text-amber-200 bg-white/5 backdrop-blur-sm border border-amber-500/20">
                      Popular
                    </div>
                  )}
                  <h3 className="text-base font-medium text-white">{plan.name}</h3>
                  <p className="mt-0.5 text-xs text-white/60">{plan.description}</p>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-2xl sm:text-3xl font-semibold text-white">{plan.price}</span>
                    {plan.period && <span className="text-sm text-white/60">{plan.period}</span>}
                  </div>
                  <ul className="mt-3 space-y-2">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-white/70">
                        <CheckCircle className="h-3.5 w-3.5 text-emerald-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`mt-3 w-full rounded-xl px-3 py-2 text-xs font-medium transition border border-white/10 ${
                      plan.variant === "outline"
                        ? "bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm"
                        : "bg-white text-zinc-900 hover:bg-zinc-100"
                    }`}
                  >
                    {plan.cta}
                  </button>
                </Card>
              ))}
            </div>

            {/* FAQ */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-white mb-3">Common questions</h3>
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between rounded-xl p-3 text-xs font-medium text-white/90">
                    {faq.question}
                    <span className="grid h-5 w-5 place-items-center rounded-md bg-white/5 border border-white/10">
                      <ChevronDown className="h-3 w-3 transition-transform group-open:rotate-180" />
                    </span>
                  </summary>
                  <p className="px-3 pb-3 text-[10px] text-white/70">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </IPhoneFrame>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .border-gradient {
          position: relative;
        }
        .border-gradient::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          background: linear-gradient(225deg, rgba(255, 255, 255, 0.0) 0%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.0) 100%);
          pointer-events: none;
        }
      `}</style>
    </div>
  )
}

// ============================================
// Reusable Components
// ============================================

interface IPhoneFrameProps {
  children: React.ReactNode
}

function IPhoneFrame({ children }: IPhoneFrameProps) {
  return (
    <Card className="relative w-[320px] sm:w-[360px] lg:w-[393px] h-[700px] sm:h-[800px] lg:h-[852px] bg-black rounded-[50px] sm:rounded-[55px] lg:rounded-[60px] p-2.5 sm:p-3 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] overflow-hidden border-0">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] sm:w-[140px] lg:w-[150px] h-[24px] sm:h-[27px] lg:h-[30px] bg-black rounded-b-2xl sm:rounded-b-[24px] lg:rounded-b-3xl z-10" />

      {/* Screen */}
      <div className="w-full h-full bg-[#0a0a0b] rounded-[38px] sm:rounded-[43px] lg:rounded-[48px] overflow-hidden relative">
        {children}
      </div>
    </Card>
  )
}

interface StatusBarProps {
  className?: string
}

function StatusBar({ className = "mb-6 sm:mb-8" }: StatusBarProps) {
  return (
    <div className={`flex items-center justify-between text-white text-xs ${className}`}>
      <span>9:41</span>
      <div className="flex items-center gap-1">
        <Wifi className="h-3.5 w-3.5" />
        <BatteryCharging className="h-3.5 w-3.5" />
      </div>
    </div>
  )
}

interface GridOverlayProps {
  masked?: boolean
}

function GridOverlay({ masked = false }: GridOverlayProps) {
  return (
    <div
      className="absolute inset-0 -z-20 opacity-[0.45]"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
        ...(masked && {
          maskImage: "radial-gradient(600px 400px at 50% 30%, #000 60%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(600px 400px at 50% 30%, #000 60%, transparent 100%)",
        }),
      }}
    />
  )
}

interface GlassBadgeProps {
  icon: React.ReactNode
  label: string
}

function GlassBadge({ icon, label }: GlassBadgeProps) {
  return (
    <div className="border-gradient inline-flex items-center gap-2 rounded-full px-3 py-1.5 bg-white/5 backdrop-blur-sm border border-sky-500/20">
      {icon}
      <span className="text-xs text-sky-200/90">{label}</span>
    </div>
  )
}

interface GlassCardProps {
  children: React.ReactNode
  className?: string
}

function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <Card
      className={`border-gradient overflow-hidden rounded-2xl p-4 relative bg-white/5 backdrop-blur-sm border border-white/10 ${className}`}
    >
      <div className="absolute inset-0 pointer-events-none" />
      {children}
    </Card>
  )
}
