import { Link } from "react-router-dom";
import {
  Sparkles, MapPin, Clock, ArrowRight, ArrowUpRight, Code, Palette,
  BarChart2, Users, Shield, Zap, Heart, Coffee, Plane, DollarSign,
  Building, Globe,
} from "lucide-react";
import "@/styles/landing.css";

const benefits = [
  { icon: DollarSign, title: "Competitive Salary", desc: "Top-tier compensation with equity" },
  { icon: Heart, title: "Health & Wellness", desc: "Comprehensive medical, dental, vision" },
  { icon: Plane, title: "Unlimited PTO", desc: "Take the time you need" },
  { icon: Building, title: "Remote First", desc: "Work from anywhere in the world" },
  { icon: Coffee, title: "Learning Budget", desc: "$5,000/year for personal development" },
  { icon: Zap, title: "Latest Tech", desc: "MacBook Pro, monitors, whatever you need" },
];

const departments = [
  { name: "Engineering", count: 12, icon: Code },
  { name: "Design", count: 4, icon: Palette },
  { name: "Data Science", count: 6, icon: BarChart2 },
  { name: "Operations", count: 5, icon: Users },
];

const jobs = [
  { id: 1, title: "Senior Full-Stack Engineer", dept: "Engineering", location: "Remote", type: "Full-time", featured: true },
  { id: 2, title: "ML Engineer - Real Estate AI", dept: "Data Science", location: "Sydney", type: "Full-time", featured: true },
  { id: 3, title: "Product Designer", dept: "Design", location: "Remote", type: "Full-time" },
  { id: 4, title: "Backend Engineer (Rust)", dept: "Engineering", location: "Remote", type: "Full-time" },
  { id: 5, title: "Data Analyst", dept: "Data Science", location: "New York", type: "Full-time" },
  { id: 6, title: "DevOps Engineer", dept: "Engineering", location: "Remote", type: "Full-time" },
  { id: 7, title: "Head of Growth", dept: "Operations", location: "Sydney", type: "Full-time", featured: true },
  { id: 8, title: "iOS Engineer", dept: "Engineering", location: "Remote", type: "Full-time" },
];

export default function Careers() {
  return (
    <div className="landing-page min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-4 mb-3 rounded-2xl border border-white/10 bg-neutral-900/60 px-4 py-3 sm:px-6 flex items-center justify-between">
            <Link to="/landing" className="inline-flex items-center gap-2">
              <div className="h-6 w-6 rounded-md bg-white/10 border border-white/10 flex items-center justify-center">
                <Sparkles className="h-3.5 w-3.5 text-white/80" />
              </div>
              <span className="text-base font-semibold tracking-tight">HAUS</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/about" className="text-sm font-medium text-neutral-300 hover:text-white transition">About</Link>
              <span className="text-sm font-medium text-white">Careers</span>
              <Link to="/press" className="text-sm font-medium text-neutral-300 hover:text-white transition">Press</Link>
            </nav>
            <Link to="/search" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-gradient-to-r from-white/10 to-white/5 px-4 py-2 text-sm text-white hover:scale-[1.02] transition">
              <span>Explore Platform</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-20 pb-24 px-4 sm:px-6 lg:px-8 text-center">
        <div className="mx-auto max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
            <span className="text-xs font-medium text-indigo-300">We're Hiring</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight text-white leading-[0.95] mb-6">
            Build the Future<br />of Real Estate
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-10">
            Join a team of world-class engineers, designers, and operators building the AI-native platform
            that's transforming how the world buys and sells property.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#positions" className="px-6 py-3 rounded-full bg-white text-black text-sm font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors flex items-center gap-2">
              View Open Roles <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "85+", label: "Team Members" },
              { value: "12", label: "Countries" },
              { value: "$42M", label: "Series B" },
              { value: "4.9", label: "Glassdoor Rating" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-6 rounded-2xl border border-white/10 bg-white/5">
                <div className="text-3xl font-medium text-white mb-1">{stat.value}</div>
                <div className="text-sm text-neutral-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">Benefits</span>
            </div>
            <h2 className="font-display text-4xl font-medium tracking-tight text-white">Why Join HAUS</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors group">
                <benefit.icon className="w-8 h-8 text-indigo-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-medium text-white mb-2">{benefit.title}</h3>
                <p className="text-sm text-neutral-500">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap justify-center gap-4">
            {departments.map((dept) => (
              <div key={dept.name} className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                <dept.icon className="w-4 h-4 text-neutral-400" />
                <span className="text-sm text-white">{dept.name}</span>
                <span className="text-xs text-neutral-500 bg-white/10 px-2 py-0.5 rounded-full">{dept.count}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section id="positions" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
              <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">Open Positions</span>
            </div>
            <h2 className="font-display text-4xl font-medium tracking-tight text-white">Join Our Team</h2>
          </div>
          <div className="space-y-4">
            {jobs.map((job) => (
              <div key={job.id} className="group p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-medium text-white group-hover:text-indigo-400 transition-colors">{job.title}</h3>
                      {job.featured && (
                        <span className="px-2 py-0.5 rounded-full bg-indigo-500/20 text-[10px] font-medium text-indigo-300 uppercase">Featured</span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500">
                      <span className="flex items-center gap-1"><Shield className="w-3 h-3" />{job.dept}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{job.location}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{job.type}</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors" />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-neutral-500 mb-4">Don't see the right role?</p>
            <button className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-white hover:bg-white/10 transition-colors">
              Send a General Application
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-neutral-500" />
            <span className="text-xs text-neutral-500">HAUS Group Pty Ltd</span>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/terms" className="text-xs text-neutral-500 hover:text-white transition-colors">Terms</Link>
            <Link to="/privacy" className="text-xs text-neutral-500 hover:text-white transition-colors">Privacy</Link>
            <Link to="/about" className="text-xs text-neutral-500 hover:text-white transition-colors">About</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
