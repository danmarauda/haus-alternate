import Link from "next/link";
import {
  Sparkles, Shield, Brain, Lock, Heart, ArrowRight,
  ArrowUpRight, Code, Building, Globe, Users,
} from "lucide-react";
import "./about.css";

const stats = [
  { value: "98.9%", label: "Inference uptime" },
  { value: "-62%", label: "Latency reduction" },
  { value: "SOC2", label: "Security ready" },
];

const values = [
  { icon: Shield, title: "Trust First", desc: "Every listing verified. Every transaction transparent. No hidden agendas." },
  { icon: Brain, title: "AI-Native", desc: "Built from the ground up with artificial intelligence at its core." },
  { icon: Heart, title: "Client Obsessed", desc: "Your success is our only metric that matters." },
  { icon: Lock, title: "Privacy by Design", desc: "Zero-knowledge proofs protect your data and identity." },
];

const team = [
  { name: "Alex Chen", role: "CEO & Co-founder", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400", bio: "Former Goldman Sachs, 15 years in real estate tech" },
  { name: "Sarah Mitchell", role: "CTO", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400", bio: "Ex-Google AI, Stanford PhD in Machine Learning" },
  { name: "Marcus Rivera", role: "COO", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400", bio: "Built ops at Compass, scaled to 50 markets" },
  { name: "Emily Watson", role: "Chief Product Officer", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400", bio: "Led product at Zillow, 3x founder" },
];

const investors = ["Sequoia", "a16z", "Y Combinator", "Founders Fund", "General Catalyst", "Khosla Ventures"];

export default function AboutPage() {
  return (
    <div className="landing-page min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-4 mb-3 rounded-2xl border border-white/10 bg-neutral-900/60 px-4 py-3 sm:px-6 flex items-center justify-between">
            <Link href="/landing-1" className="inline-flex items-center gap-2">
              <div className="h-6 w-6 rounded-md bg-white/10 border border-white/10 flex items-center justify-center">
                <Sparkles className="h-3.5 w-3.5 text-white/80" />
              </div>
              <span className="text-base font-semibold tracking-tight">HAUS</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/landing-1" className="text-sm font-medium text-neutral-300 hover:text-white transition">Home</Link>
              <Link href="/search" className="text-sm font-medium text-neutral-300 hover:text-white transition">Search</Link>
              <Link href="/analytics" className="text-sm font-medium text-neutral-300 hover:text-white transition">Analytics</Link>
              <span className="text-sm font-medium text-white">About</span>
            </nav>
            <Link href="/search" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-gradient-to-r from-white/10 to-white/5 px-4 py-2 text-sm text-white hover:scale-[1.02] transition">
              <span>Get Started</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-16 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.05] text-white">
                Enterprise AI, implemented with precision
              </h1>
              <p className="mt-5 max-w-xl text-base text-neutral-300">
                A structured approach to AI adoption: strategy, framework, architecture, agents, and production rollout.
                Built for scale, governance, and security.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center">
                <Link href="/careers" className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white hover:bg-white/10 transition">
                  Join Our Team
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-indigo-400 text-neutral-900 group-hover:translate-x-0.5 transition">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              </div>
              <div className="mt-8 grid max-w-md grid-cols-3 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                    <div className="text-2xl tracking-tight text-white">{stat.value}</div>
                    <div className="mt-1 text-xs text-neutral-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="w-full max-w-[34rem] rounded-2xl border border-white/10 bg-gradient-to-tr from-white/10 to-white/5 p-6 backdrop-blur-xl shadow-[0_10px_40px_-16px_rgba(255,255,255,0.18)]">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-[22px] tracking-tight font-medium text-white">HAUS Platform</h3>
                    <p className="text-sm text-neutral-300 mt-1">Observability • Evaluation • Governance</p>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-neutral-900/50 px-2 py-1 text-xs text-neutral-300">
                    <Code className="h-3.5 w-3.5 text-neutral-400" />
                    v2.4.0
                  </div>
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {[
                    { label: "Models", value: "28" },
                    { label: "Agents", value: "12" },
                    { label: "Eval Suites", value: "36" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-lg border border-white/10 bg-neutral-950/50 p-3">
                      <div className="text-xs text-neutral-400">{item.label}</div>
                      <div className="mt-1 text-lg tracking-tight text-white">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">Our Mission</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
                Democratizing<br />Real Estate Intelligence
              </h2>
              <p className="text-neutral-400 leading-relaxed mb-8">
                We believe everyone deserves access to the same market intelligence that was once reserved for institutional investors.
                HAUS combines cutting-edge AI with decades of real estate expertise to level the playing field.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5">
                  <Building className="w-4 h-4 text-neutral-400" />
                  <span className="text-sm text-neutral-300">Founded 2022</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5">
                  <Globe className="w-4 h-4 text-neutral-400" />
                  <span className="text-sm text-neutral-300">12 Markets</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5">
                  <Users className="w-4 h-4 text-neutral-400" />
                  <span className="text-sm text-neutral-300">85 Team Members</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {values.map((value) => (
                <div key={value.title} className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                  <value.icon className="w-6 h-6 text-indigo-400 mb-4" />
                  <h3 className="text-lg font-medium text-white mb-2">{value.title}</h3>
                  <p className="text-sm text-neutral-500">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">Leadership</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-white">Meet the Team</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="group text-center">
                <div className="aspect-square rounded-2xl overflow-hidden mb-4 border border-white/10">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <h3 className="text-lg font-medium text-white">{member.name}</h3>
                <p className="text-sm text-indigo-400 mb-2">{member.role}</p>
                <p className="text-xs text-neutral-500">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investors */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="mx-auto max-w-7xl text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">Backed By</span>
          </div>
          <h2 className="font-display text-3xl font-medium tracking-tight text-white mb-12">World-Class Investors</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {investors.map((investor) => (
              <div key={investor} className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 text-neutral-400 font-medium hover:bg-white/10 hover:text-white transition-colors">
                {investor}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">Join the Revolution</h2>
          <p className="text-neutral-400 mb-8">Be part of the team that's transforming how the world buys and sells property.</p>
          <div className="flex justify-center gap-4">
            <Link href="/careers" className="px-6 py-3 rounded-full bg-indigo-600 text-sm font-bold uppercase tracking-widest text-white hover:bg-indigo-500 transition-colors">
              View Careers
            </Link>
            <Link href="/search" className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-sm font-bold uppercase tracking-widest text-white hover:bg-white/10 transition-colors">
              Explore Platform
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-neutral-500" />
            <span className="text-xs text-neutral-500">HAUS Group Pty Ltd</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="text-xs text-neutral-500 hover:text-white transition-colors">Terms</Link>
            <Link href="/privacy" className="text-xs text-neutral-500 hover:text-white transition-colors">Privacy</Link>
            <Link href="/careers" className="text-xs text-neutral-500 hover:text-white transition-colors">Careers</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
