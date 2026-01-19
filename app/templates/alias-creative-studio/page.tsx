'use client'

import * as React from 'react'
import { ArrowRight, ArrowUpRight, ShieldCheck, Star, Check, Info, Heart, Users, Sparkles, Palette, Lightbulb, Monitor, Settings, Play, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

export default function AliasCreativeStudioPage() {
  const [billingMode, setBillingMode] = React.useState<'monthly' | 'project'>('monthly')

  const billingStates = {
    monthly: {
      price: '2500',
      unit: 'month',
      title: 'Subscription',
      desc: 'Ongoing support and flexible design when you need it. Ideal for startups, growing brands, and marketing teams needing consistent creative momentum.',
      addon: 'Optional SEO add-on ($800/m)',
      scope: 'One active task at a time',
      eta: '48 hours'
    },
    project: {
      price: '4800',
      unit: 'project',
      title: 'Project Sprint',
      desc: 'Focused, milestone-driven engagement for a defined scope. Perfect for launches, rebrands, or site upgrades.',
      addon: 'Add-ons available by scope',
      scope: 'Scoped deliverables & milestones',
      eta: '1–2 weeks'
    }
  }

  const currentBilling = billingStates[billingMode]

  const services = [
    {
      icon: Palette,
      title: 'Brand Identity Design',
      description: 'Create memorable visual identities with custom logos, color systems, and brand guidelines that capture your essence.',
      preview: 'logo'
    },
    {
      icon: Monitor,
      title: 'Web Design & Development',
      description: 'Design and build responsive, user-friendly websites that engage visitors and drive conversions across all devices.',
      preview: 'browser'
    },
    {
      icon: Users,
      title: 'Digital Marketing',
      description: 'Develop strategic campaigns across social media, email, and digital channels to amplify your brand reach.',
      preview: 'social'
    },
    {
      icon: Sparkles,
      title: 'Print & Packaging Design',
      description: 'Design compelling print materials and packaging that make lasting impressions in physical spaces.',
      preview: 'print'
    },
    {
      icon: Play,
      title: 'Video Production',
      description: 'Produce engaging video content from concept to post-production for marketing, social media, and brand storytelling.',
      preview: 'video'
    },
    {
      icon: Lightbulb,
      title: 'Creative Consulting',
      description: 'Partner with our creative strategists to develop comprehensive brand strategies and innovative creative solutions.',
      preview: 'consulting'
    }
  ]

  const team = [
    { name: 'Sarah Chen', role: 'Creative Director', experience: '8 years experience', icon: Palette },
    { name: 'Marcus Reid', role: 'Brand Strategist', experience: '12 years experience', icon: Lightbulb },
    { name: 'Elena Vasquez', role: 'UX Designer', experience: '6 years experience', icon: Monitor },
    { name: 'James Morrison', role: 'Project Manager', experience: '10 years experience', icon: Settings }
  ]

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Navigation */}
      <nav className="mx-auto mt-4 max-w-6xl rounded-3xl bg-neutral-950 px-5 py-2 sm:px-20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-geist text-lg font-medium tracking-tight text-neutral-100">
              ALIAS
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#method" className="font-geist text-sm text-neutral-400 transition-colors hover:text-neutral-100">
              Method
            </a>
            <a href="#services" className="font-geist text-sm text-neutral-400 transition-colors hover:text-neutral-100">
              Services
            </a>
            <a href="#toolbox" className="font-geist text-sm text-neutral-400 transition-colors hover:text-neutral-100">
              Toolbox
            </a>
            <Button variant="outline" size="sm" className="gap-2 border-white/10 bg-white/5 text-neutral-100 hover:bg-white/10">
              <ArrowRight className="h-4 w-4" />
              Talk to an Architect
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative mx-auto mt-10 max-w-6xl overflow-hidden rounded-3xl bg-neutral-950 pb-10 pt-10 sm:pb-10 sm:pt-10 lg:min-h-[760px] sm:min-h-[640px] min-h-[520px] sm:px-6 lg:px-8">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d0a38672-ee19-40e5-8a8f-ddcf0d834caa_1600w.jpg')"
          }}
        />
        <div className="relative z-10 flex h-full flex-col">
          {/* Animated Title */}
          <header className="mb-12 sm:mb-16">
            <h1 className="overflow-hidden pr-1 text-[12vw] font-semibold leading-none tracking-tighter sm:text-[10vw] md:text-[8vw] lg:text-[9vw]">
              {['A', 'L', 'I', 'A', 'S'].map((letter, index) => (
                <span
                  key={letter}
                  className="inline-block font-geist tracking-tighter"
                  style={{
                    animation: `letterSlideIn 0.8s ease-out ${index * 0.1}s forwards`,
                    transform: 'translateY(-100%)',
                    opacity: 0
                  }}
                >
                  {letter}
                </span>
              ))}
            </h1>
          </header>

          {/* Hero Content */}
          <div className="grid auto-rows-max grid-cols-1 gap-12 sm:gap-16 sm:grid-cols-2 mt-auto">
            <div className="flex flex-col justify-between gap-6">
              <div className="hidden sm:block" />
              <div className="flex items-start gap-4">
                <div className="mt-1 h-12 w-6 border-l border-b rounded-sm border-white/20" />
                <div className="space-y-4">
                  <p className="font-geist text-sm leading-6 text-neutral-300">
                    Agent-first AI consulting
                  </p>
                  <Button size="lg" className="gap-2 rounded-full bg-white text-neutral-950 hover:bg-zinc-200">
                    See the Toolbox
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex items-end">
              <p className="font-geist text-2xl font-light leading-tight tracking-tight text-neutral-300 sm:text-3xl">
                We orchestrate human + AI teams with{' '}
                <span className="font-semibold text-white">MOSAIC</span>{' '}
                <span className="text-neutral-400">patterns</span> and{' '}
                <span className="font-semibold text-white">UCE</span> context. Welcome to ALIAS, where enterprise AI actually ships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="mx-auto mt-10 max-w-6xl rounded-3xl bg-neutral-950 px-5 py-10 sm:px-20">
        <div className="mb-16 text-center">
          <h2 className="font-geist text-4xl font-light tracking-tighter text-white sm:text-7xl">
            What Sets Us Apart
          </h2>
          <p className="font-geist mx-auto mt-6 max-w-2xl text-lg text-neutral-400">
            Experience the Lumina difference through our proven approach, exceptional results, and unwavering commitment to your success.
          </p>
        </div>

        <Card className="border-white/10 bg-neutral-900/40">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {/* Design with Purpose */}
              <div className="relative overflow-hidden rounded-2xl border border-white/10">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/7b3a5f3f-a38a-47b5-8f19-6d90cb6f3137_800w.jpg')"
                  }}
                />
                <div className="relative flex h-[440px] flex-col justify-between p-6 sm:h-[520px] sm:p-8">
                  <div>
                    <p className="font-geist text-sm text-neutral-300">Our Edge</p>
                    <p className="font-geist mt-1 text-xs text-neutral-400 sm:text-sm">
                      Strategic Design Thinking
                    </p>
                  </div>
                  <div>
                    <h3 className="font-geist text-2xl font-semibold tracking-tight text-white sm:text-4xl">
                      Design with <span className="text-blue-500">Purpose</span>
                    </h3>
                    <div className="mb-6 mt-4 flex items-center gap-2 text-neutral-200">
                      <div className="flex gap-1">
                        <div className="h-2 w-2 rounded-full bg-blue-500" />
                        <div className="h-2 w-2 rounded-full bg-blue-400" />
                        <div className="h-2 w-2 rounded-full bg-blue-600" />
                      </div>
                      <p className="font-geist text-sm">Every pixel has intention</p>
                    </div>
                    <div className="flex items-center gap-2 font-geist text-xs text-neutral-300">
                      Discover our approach
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Results & Methodology */}
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
                <div className="relative">
                  <div
                    className="pointer-events-none absolute inset-0 opacity-20"
                    style={{
                      background: 'repeating-radial-gradient(circle at 80% -20%, rgba(59,130,246,0.08) 0 1px, transparent 1px 60px)'
                    }}
                  />
                  <div className="relative">
                    <p className="font-geist text-sm text-neutral-400">Proven Results:</p>
                    <h3 className="font-geist mt-2 text-2xl font-light tracking-tight text-neutral-100 sm:text-3xl">
                      <span className="font-semibold text-blue-500">3x</span> faster project delivery,{' '}
                      <span className="font-semibold text-blue-400">2x</span> higher engagement
                    </h3>

                    <p className="font-geist mt-8 text-sm text-neutral-400">Our Methodology:</p>
                    <div className="mt-4 space-y-3">
                      {['Strategic Discovery & Research', 'Collaborative Design Process', 'Data-Driven Optimization'].map((item, index) => (
                        <div key={item} className="flex items-center gap-3 font-geist text-sm text-neutral-200">
                          <span
                            className={cn(
                              'h-1.5 w-1.5 rounded-full',
                              index === 0 ? 'bg-blue-500' : index === 1 ? 'bg-blue-400' : 'bg-blue-600'
                            )}
                          />
                          {item}
                        </div>
                      ))}
                    </div>

                    {/* Testimonial */}
                    <div className="mt-8 rounded-xl border border-white/10 bg-black/30 p-5">
                      <div className="mb-3 flex gap-1 text-amber-300">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                      <p className="font-geist mt-3 text-sm text-neutral-300">
                        "Lumina doesn't just create designs—they craft experiences. Their strategic thinking elevated our entire brand presence."
                      </p>
                      <div className="mt-4 flex items-center gap-3">
                        <img
                          src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/096dab35-ecaf-418f-a932-5b514543b035_320w.jpg"
                          alt="Michael Torres"
                          className="h-8 w-8 rounded-full object-cover"
                        />
                        <div className="text-sm">
                          <p className="font-geist text-neutral-200">Michael Torres</p>
                          <p className="font-geist text-xs text-neutral-500">CEO, Innovation Labs</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust & Metrics */}
              <div className="grid grid-rows-2 gap-6">
                {/* 100% Satisfaction */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
                  <div className="flex items-center sm:block">
                    <div className="relative h-28 w-28 sm:mx-auto">
                      <div className="absolute inset-0 rounded-full bg-blue-500" />
                      <div className="absolute inset-[10px] rounded-full flex items-center justify-center bg-black/40">
                        <ShieldCheck className="h-6 w-6 text-blue-400" />
                      </div>
                    </div>
                    <div className="ml-5 text-center sm:ml-0 sm:mt-6">
                      <h4 className="font-geist text-lg font-light tracking-tight text-white">100% Satisfaction</h4>
                      <p className="font-geist mt-2 text-sm text-neutral-400">
                        Guaranteed results or we'll make it right. Your success is our mission.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
                  <div className="mb-6 grid grid-cols-2 gap-4">
                    <div>
                      <div className="font-geist text-2xl font-light tracking-tight text-white">150+</div>
                      <p className="font-geist mt-1 text-xs text-neutral-400">Projects delivered</p>
                    </div>
                    <div>
                      <div className="font-geist text-2xl font-light tracking-tight text-white">48h</div>
                      <p className="font-geist mt-1 text-xs text-neutral-400">Average start time</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      { label: 'Brand Strategy', color: 'text-blue-500' },
                      { label: 'Visual Design', color: 'text-blue-400' },
                      { label: 'Digital Marketing', color: 'text-blue-600' }
                    ].map((item) => (
                      <div key={item.label} className="flex items-center justify-between font-geist text-sm">
                        <span className="text-neutral-300">{item.label}</span>
                        <span className={item.color}>Expert</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 border-t border-white/10 pt-4">
                    <div className="flex items-center gap-2 font-geist text-xs text-neutral-300">
                      <Check className="h-3 w-3 text-green-400" />
                      Lumina Certified Team
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Creative Services */}
      <section className="mx-auto mt-10 max-w-6xl rounded-3xl bg-neutral-950 px-5 py-10 sm:px-20">
        <div className="mb-16 text-center">
          <h2 className="font-geist text-4xl font-light tracking-tighter text-white sm:text-7xl">
            Creative Services
          </h2>
          <p className="font-geist mx-auto mt-6 max-w-2xl text-lg text-neutral-400">
            Comprehensive creative solutions designed to elevate your brand across every touchpoint and platform.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={service.title}
                className={cn(
                  'border-white/10 bg-neutral-900/40 transition-all hover:border-white/20',
                  'animate-[slideUp_0.6s_ease-out_both]'
                )}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="flex flex-col p-6">
                  <div className="mb-5 rounded-lg border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center justify-center">
                      <Icon className="h-12 w-12 text-blue-500" />
                    </div>
                  </div>
                  <div className="mt-auto">
                    <h3 className="font-geist text-xl font-medium tracking-tight">{service.title}</h3>
                    <p className="font-geist mt-2 text-sm text-neutral-400">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Team Section */}
      <section className="mx-auto mt-10 max-w-6xl rounded-3xl bg-neutral-950 px-5 py-10 sm:px-20">
        <div className="mb-16 text-center">
          <h2 className="font-geist text-4xl font-light tracking-tighter text-white sm:text-7xl">
            The faces behind your vision.
          </h2>
          <p className="font-geist mx-auto mt-6 max-w-2xl text-lg text-neutral-400">
            Our passionate team of designers, strategists, and creatives who bring your brand to life with expertise and dedication.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl">
          <section className="relative z-10 rounded-3xl bg-zinc-900 p-6 sm:p-8">
            {/* Background dividers */}
            <div className="pointer-events-none absolute inset-0 opacity-10">
              <div className="absolute left-0 right-0 top-1/4 h-px bg-gradient-to-r from-transparent via-zinc-600 to-transparent" />
              <div className="absolute left-0 right-0 top-3/4 h-px bg-gradient-to-r from-transparent via-zinc-600 to-transparent" />
              <div className="absolute left-1/3 top-0 h-full w-px bg-gradient-to-b from-transparent via-zinc-600 to-transparent" />
              <div className="absolute right-1/3 top-0 h-full w-px bg-gradient-to-b from-transparent via-zinc-600 to-transparent" />
            </div>

            <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-2 sm:gap-10">
              {/* Team Philosophy */}
              <div className="flex flex-col justify-between">
                <div>
                  <span className="font-geist text-sm font-normal text-zinc-500">Creative Excellence</span>
                  <h3 className="font-geist mt-2 text-3xl font-medium tracking-tighter text-zinc-100 sm:text-4xl lg:text-5xl">
                    Passionate creators, innovative thinkers.
                  </h3>

                  <div className="mt-8 relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="h-px w-full bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800" />
                    </div>
                    <div className="relative hidden grid-cols-3 gap-6 bg-zinc-900 px-4 sm:grid">
                      {[
                        { icon: Heart, label: 'Passion Driven' },
                        { icon: Users, label: 'Collaborative' },
                        { icon: Sparkles, label: 'Innovative' }
                      ].map((item) => (
                        <div key={item.label} className="flex items-center gap-2 text-zinc-600">
                          <item.icon className="h-4 w-4" />
                          <span className="font-geist text-sm font-normal">{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
                  <div>
                    <p className="font-geist text-sm font-medium tracking-tight text-zinc-100">
                      Meet our creative team
                    </p>
                    <p className="font-geist mt-1 text-sm text-zinc-400">
                      Talented individuals who pour their expertise and creativity into every project.
                    </p>
                    <Button size="sm" className="mt-4 gap-2 rounded-full bg-zinc-100 text-zinc-900 hover:bg-zinc-200">
                      View Full Team
                      <span className="inline-block h-2 w-2 rounded-full bg-zinc-900" />
                    </Button>
                  </div>

                  <div className="relative">
                    <div className="absolute left-0 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-zinc-700 to-transparent sm:block" />
                    <p className="font-geist text-base leading-relaxed text-zinc-300 sm:text-right sm:pl-8">
                      With over <span className="font-medium text-zinc-100">50+ years</span> of combined experience, our team brings{' '}
                      <span className="font-medium text-zinc-100">diverse perspectives</span> and specialized skills to every creative challenge.
                    </p>
                  </div>
                </div>
              </div>

              {/* Team Grid */}
              <div className="grid grid-cols-2 gap-4">
                {team.map((member) => {
                  const Icon = member.icon
                  return (
                    <article
                      key={member.name}
                      className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-800"
                    >
                      <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      <div className="absolute left-3 right-3 top-3 flex items-center justify-between">
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-zinc-700 bg-zinc-100/90 text-zinc-900">
                          <Icon className="h-3.5 w-3.5" />
                        </span>
                        <span className="rounded-md border border-zinc-800 bg-zinc-900/60 px-2 py-1 font-geist text-[11px] text-zinc-300 backdrop-blur">
                          {member.role}
                        </span>
                      </div>

                      <div className="absolute bottom-3 left-3 right-3">
                        <p className="font-geist text-lg font-medium leading-tight text-white">{member.name}</p>
                        <p className="font-geist mt-1 text-xs text-zinc-300">{member.experience}</p>
                      </div>
                    </article>
                  )
                })}
              </div>
            </div>
          </section>
        </div>

        {/* Team Stats */}
        <div className="mt-8 grid grid-cols-3 gap-6 text-center">
          {[
            { value: '15+', label: 'Team Members' },
            { value: '150+', label: 'Projects Completed' },
            { value: '98%', label: 'Client Satisfaction' }
          ].map((stat) => (
            <div key={stat.label} className="rounded-xl border border-white/10 bg-white/5 px-4 py-6">
              <div className="font-geist text-2xl font-medium text-zinc-100">{stat.value}</div>
              <div className="font-geist mt-1 text-sm text-zinc-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="mx-auto mt-10 max-w-6xl rounded-3xl bg-neutral-950 px-5 py-10 sm:px-20">
        <div className="mb-12 flex flex-col items-end justify-between sm:flex-row">
          <div className="mb-6 sm:mb-0">
            <h2 className="font-geist text-4xl font-light tracking-tighter text-white sm:text-7xl">
              Pricing Plans
            </h2>
            <p className="font-geist max-w-2xl text-lg text-neutral-400">
              Flexible options that match your pace. Built for startups, growing brands, and teams that value thoughtful design.
            </p>
          </div>

          {/* Billing Toggle */}
          <div className="inline-flex gap-1 rounded-full border border-white/10 bg-white/5 p-1 ring-1 ring-white/10">
            <button
              onClick={() => setBillingMode('monthly')}
              className={cn(
                'rounded-full px-3.5 py-1.5 font-geist text-xs transition-all sm:text-sm',
                billingMode === 'monthly'
                  ? 'bg-neutral-100 text-black'
                  : 'text-neutral-300 hover:text-neutral-100'
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingMode('project')}
              className={cn(
                'rounded-full px-3.5 py-1.5 font-geist text-xs transition-all sm:text-sm',
                billingMode === 'project'
                  ? 'bg-neutral-100 text-black'
                  : 'text-neutral-300 hover:text-neutral-100'
              )}
            >
              Project based
            </button>
          </div>
        </div>

        {/* Plan Card */}
        <Card className="overflow-hidden border-white/10 bg-neutral-900/40">
          <div className="grid items-center lg:grid-cols-2">
            {/* Plan Summary */}
            <div className="p-5 sm:p-6 lg:p-8">
              <div className="relative rounded-2xl border border-white/10 bg-neutral-100 p-5 text-neutral-900 sm:p-6 lg:p-7">
                <div className="absolute right-5 top-4 font-geist text-xs text-neutral-500 select-none">
                  Lumina®
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-geist text-sm font-medium tracking-tight text-neutral-700">
                      {currentBilling.title}
                    </div>
                    <div className="mt-3 flex items-baseline gap-2">
                      <span className="font-geist text-3xl font-medium tracking-tight sm:text-4xl">
                        ${currentBilling.price}
                      </span>
                      <span className="font-geist text-base text-neutral-500">
                        /{currentBilling.unit}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="font-geist mt-4 text-sm leading-6 text-neutral-600">
                  {currentBilling.desc}
                </p>

                <div className="mt-8 flex items-center justify-between">
                  <div className="flex items-center gap-2 font-geist text-[11px] text-neutral-500">
                    <span className="h-2 w-2 rounded-full bg-neutral-400/50" />
                    {currentBilling.addon}
                  </div>
                  <div className="h-5 w-9 rounded-full bg-neutral-200 relative">
                    <div className="absolute left-[2px] top-[2px] h-4 w-4 rounded-full bg-neutral-500" />
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="flex flex-col justify-between border-t border-white/10 bg-black/20 p-6 lg:border-t-0 lg:p-8">
              <div>
                <div className="font-geist text-sm text-neutral-400 mb-4">What's included:</div>
                <ul className="space-y-3">
                  {[
                    'Unlimited design requests',
                    currentBilling.scope,
                    'Weekly progress calls',
                    'Fast turnaround times',
                    'Brand consistency across deliverables',
                    'Priority support',
                    'Pause or cancel anytime'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 font-geist text-sm text-neutral-200">
                      <CheckCircle2
                        className={cn(
                          'h-4 w-4 shrink-0 mt-0.5',
                          index % 3 === 0 ? 'text-blue-500' : index % 3 === 1 ? 'text-blue-400' : 'text-blue-600'
                        )}
                      />
                      <span className="text-neutral-100">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex items-center justify-between gap-6">
                <div>
                  <div className="font-geist text-sm text-neutral-400">Estimated kickoff</div>
                  <div className="font-geist text-neutral-100">{currentBilling.eta}</div>
                </div>
                <Button size="lg" className="gap-2 rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/15">
                  Get started
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Micro-copy */}
        <div className="font-geist mt-6 flex items-center gap-2 text-[11px] text-neutral-500">
          <Info className="h-3 w-3 text-neutral-400" />
          No hidden fees. Transparent, collaborative process from day one.
        </div>
      </section>

      {/* Results Section */}
      <section className="mx-auto mt-10 max-w-6xl rounded-3xl bg-neutral-950 px-5 py-10 sm:px-20">
        <div className="overflow-hidden rounded-2xl border bg-white sm:border-white/10">
          <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden rounded-xl sm:min-h-[520px] lg:min-h-[600px]">
            {/* Stage with product image */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="aspect-[16/9] w-[88%] max-w-6xl overflow-hidden rounded-sm bg-black shadow-2xl sm:w-[72%]">
                <img
                  src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d7050fd5-9b66-45d7-a30a-569d8f5e9017_800w.jpg"
                  alt="Minimal cosmetic bottle on a dark stage"
                  className="h-full w-full object-cover opacity-80"
                />
              </div>
            </div>

            {/* Oversized headline */}
            <h2 className="relative z-10 px-2 text-center font-geist font-semibold tracking-tight select-none mix-blend-difference text-white leading-[0.82] text-[13vw] sm:text-[11vw] lg:text-[9vw]">
              <span className="block">From concept</span>
              <span className="block">to creation</span>
            </h2>

            {/* Crosshair lines */}
            <div className="pointer-events-none absolute bottom-0 left-1/2 w-full max-w-6xl -translate-x-1/2 opacity-20">
              <div className="h-px bg-black/30" />
            </div>
            <div className="pointer-events-none absolute left-1/2 top-0 h-full -translate-x-1/2 opacity-20">
              <div className="h-full w-px bg-black/10" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto mt-10 max-w-6xl rounded-2xl bg-neutral-950 px-5 py-4 sm:px-20">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 flex items-center gap-3 md:mb-0">
            <span className="font-geist text-lg font-medium tracking-tight">Lumina Studio</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-neutral-400">
            <a href="#" className="font-geist transition-colors hover:text-neutral-100">
              Privacy
            </a>
            <a href="#" className="font-geist transition-colors hover:text-neutral-100">
              Terms
            </a>
            <a href="#" className="font-geist transition-colors hover:text-neutral-100">
              Contact
            </a>
            <span className="font-geist">© 2024</span>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes letterSlideIn {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideUp {
          animation: slideUp 0.6s ease-out;
        }
      `}</style>
    </div>
  )
}
