import { Link } from "react-router-dom";
import {
  Sparkles, ArrowRight, Home, DollarSign, TrendingUp, Users, Camera,
  FileText, Clock, CheckCircle, BarChart2, Shield, Star, Zap,
  Calculator, MessageSquare, Calendar, Award,
} from "lucide-react";
import "@/styles/landing.css";

const steps = [
  { icon: Calculator, title: "Get Your Free Appraisal", desc: "AI-powered valuation in under 60 seconds" },
  { icon: Camera, title: "Professional Photography", desc: "Free professional photos & 3D virtual tour" },
  { icon: Users, title: "Match with Top Agents", desc: "Connect with verified local experts" },
  { icon: Zap, title: "List & Sell Fast", desc: "Average 21 days on market" },
];

const benefits = [
  { value: "2.1%", label: "Avg. Commission", sub: "vs 2.5% industry avg" },
  { value: "21", label: "Days on Market", sub: "vs 35 days avg" },
  { value: "$12K", label: "Above Asking", sub: "avg sale price vs estimate" },
  { value: "98%", label: "Seller Satisfaction", sub: "based on 1,200+ reviews" },
];

const features = [
  { icon: BarChart2, title: "Real-Time Analytics", desc: "Track views, inquiries, and market comparisons in your seller dashboard" },
  { icon: Shield, title: "Verified Buyers", desc: "All buyers are pre-qualified with proof of funds before viewing" },
  { icon: Star, title: "Premium Listing", desc: "Featured placement, social promotion, and email campaigns included" },
  { icon: MessageSquare, title: "Dedicated Support", desc: "Personal concierge to guide you through the entire process" },
];

const testimonials = [
  {
    quote: "HAUS sold my property in just 14 days, $85K above the asking price. The whole process was seamless.",
    author: "Michael Chen",
    role: "Sold in Bondi Beach",
    avatar: "https://i.pravatar.cc/100?u=michael",
  },
  {
    quote: "The AI valuation was spot-on and the agent they matched me with was incredible. Highly recommend!",
    author: "Sarah Williams",
    role: "Sold in Surry Hills",
    avatar: "https://i.pravatar.cc/100?u=sarahw",
  },
];

export default function Sell() {
  return (
    <div className="landing-page min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 backdrop-blur-xl border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link to="/landing" className="inline-flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-white/10 border border-white/10 flex items-center justify-center">
              <Sparkles className="h-3.5 w-3.5 text-white/80" />
            </div>
            <span className="text-base font-semibold tracking-tight">HAUS</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/search" className="text-sm text-neutral-400 hover:text-white transition-colors">Buy</Link>
            <span className="text-sm text-white font-medium">Sell</span>
            <Link to="/agents" className="text-sm text-neutral-400 hover:text-white transition-colors">Agents</Link>
          </div>
          <Link to="/login" className="px-4 py-2 rounded-lg border border-white/10 text-sm text-white hover:bg-white/5 transition-colors">
            Sign In
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 to-transparent" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 mb-6">
              <TrendingUp className="w-3 h-3 text-emerald-400" />
              <span className="text-xs font-medium text-emerald-300">Sellers are getting 12% above asking</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-medium tracking-tight text-white mb-6">
              Sell Your Property<br />
              <span className="text-neutral-400">For More, Faster</span>
            </h1>
            <p className="text-lg text-neutral-400 mb-8 max-w-lg">
              Get a free AI-powered valuation, match with top local agents, and sell with confidence.
              Average 21 days on market. Zero hassle.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/appraisal-request"
                className="px-8 py-4 rounded-xl bg-white text-black text-sm font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors flex items-center gap-2"
              >
                Get Free Appraisal
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 rounded-xl border border-white/10 text-white text-sm font-bold uppercase tracking-widest hover:bg-white/5 transition-colors"
              >
                Speak to an Expert
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200"
                alt="Beautiful home"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 p-4 rounded-xl bg-[#0A0A0A] border border-white/10 shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <div className="text-xs text-neutral-500">Avg. Sale Price</div>
                  <div className="text-xl font-medium text-white">$1.24M</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {benefits.map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-2xl border border-white/10 bg-white/5">
              <div className="text-3xl font-medium text-white mb-1">{stat.value}</div>
              <div className="text-sm text-neutral-300 mb-1">{stat.label}</div>
              <div className="text-xs text-neutral-500">{stat.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
              <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">Process</span>
            </div>
            <h2 className="text-4xl font-display font-medium tracking-tight text-white">How It Works</h2>
            <p className="text-neutral-400 mt-4 max-w-xl mx-auto">Four simple steps to selling your property for the best price.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={step.title} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-px bg-gradient-to-r from-white/20 to-transparent" />
                )}
                <div className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div className="text-xs text-neutral-500 mb-2">Step {i + 1}</div>
                  <h3 className="font-medium text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-neutral-500">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">Why HAUS</span>
            </div>
            <h2 className="text-4xl font-display font-medium tracking-tight text-white mb-6">Sell Smarter,<br />Not Harder</h2>
            <p className="text-neutral-400 mb-8">Every seller gets premium features included at no extra cost. We believe in transparency and results.</p>
            <div className="space-y-4">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4 p-4 rounded-xl border border-white/10 bg-white/5">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white mb-1">{feature.title}</h3>
                    <p className="text-sm text-neutral-500">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200"
                alt="Modern interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">Testimonials</span>
            </div>
            <h2 className="text-4xl font-display font-medium tracking-tight text-white">What Sellers Say</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author} className="p-6 rounded-2xl border border-white/10 bg-white/5">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-neutral-300 mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <img src={testimonial.avatar} alt={testimonial.author} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <div className="font-medium text-white text-sm">{testimonial.author}</div>
                    <div className="text-xs text-neutral-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-display font-medium tracking-tight text-white mb-6">Ready to Sell?</h2>
          <p className="text-lg text-neutral-400 mb-8">Get your free property appraisal in under 60 seconds.</p>
          <Link
            to="/appraisal-request"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-black text-sm font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors"
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-xs text-neutral-500">© 2025 HAUS Group Pty Ltd</span>
          <div className="flex items-center gap-6">
            <Link to="/terms" className="text-xs text-neutral-500 hover:text-white transition-colors">Terms</Link>
            <Link to="/privacy" className="text-xs text-neutral-500 hover:text-white transition-colors">Privacy</Link>
            <Link to="/contact" className="text-xs text-neutral-500 hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
