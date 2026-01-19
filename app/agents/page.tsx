"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search, MapPin, Star, Award, TrendingUp, MessageCircle, Calendar,
  ChevronDown, Grid, Map, Shield, CheckCircle, Globe, Users,
} from "lucide-react";

const agents = [
  { id: 1, name: "Sarah Chen", title: "Principal Advisor", location: "Sydney", specialty: "Waterfront", volume: "$420M", rating: 4.9, verified: true, image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400" },
  { id: 2, name: "Marcus Rivera", title: "Senior Partner", location: "New York", specialty: "Penthouses", volume: "$680M", rating: 5.0, verified: true, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400" },
  { id: 3, name: "Emily Watson", title: "Wealth Architect", location: "London", specialty: "Estates", volume: "$520M", rating: 4.8, verified: true, image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400" },
  { id: 4, name: "James Park", title: "Market Specialist", location: "Dubai", specialty: "Commercial", volume: "$890M", rating: 4.9, verified: true, image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400" },
  { id: 5, name: "Olivia Martinez", title: "Investment Advisor", location: "Miami", specialty: "Luxury Condos", volume: "$340M", rating: 4.7, verified: true, image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400" },
  { id: 6, name: "David Kim", title: "Portfolio Director", location: "Singapore", specialty: "Mixed-Use", volume: "$750M", rating: 4.9, verified: true, image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400" },
  { id: 7, name: "Sophie Laurent", title: "Private Client", location: "Paris", specialty: "Historic Properties", volume: "$280M", rating: 4.8, verified: true, image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400" },
  { id: 8, name: "Alexander Novak", title: "Global Advisor", location: "Monaco", specialty: "Ultra-Luxury", volume: "$1.2B", rating: 5.0, verified: true, image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400" },
];

export default function Agents() {
  const [view, setView] = useState<"grid" | "map">("grid");

  return (
    <div className="landing-page min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full px-6 py-4 md:px-12 flex justify-between items-center z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <Link href="/landing" className="font-display text-lg font-medium tracking-tight flex items-center gap-2 group">
          <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-bold tracking-tighter group-hover:scale-90 transition-transform">H.</div>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/search" className="text-xs font-mono text-white/60 hover:text-white transition-colors">PROPERTIES</Link>
          <span className="text-xs font-mono text-white border-b border-white">AGENTS</span>
          <Link href="/analytics" className="text-xs font-mono text-white/60 hover:text-white transition-colors">MARKET DATA</Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/settings" className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 border border-white/20" />
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6 md:px-12 max-w-[1600px] mx-auto">
        {/* Header */}
        <header className="mb-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="px-2 py-0.5 rounded border border-white/20 bg-white/5 text-[10px] uppercase tracking-widest text-indigo-300 font-medium">Global Network</span>
                <span className="text-[10px] text-neutral-500 font-mono">Ver. 2.4</span>
              </div>
              <h1 className="font-display text-5xl md:text-7xl font-medium tracking-tighter text-white leading-[0.9]">
                <span className="block">ELITE</span>
                <span className="block text-neutral-500">ADVISORY</span>
              </h1>
            </div>
            <div className="max-w-md">
              <p className="text-neutral-400 font-light text-sm md:text-base leading-relaxed">
                Our agents aren't just salespeople; they are data analysts, wealth architects, and market makers.
                Top 1% of performers by volume, verified by blockchain.
              </p>
            </div>
          </div>

          {/* Filters Bar */}
          <div className="sticky top-24 z-40 bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl p-2 flex flex-col md:flex-row gap-2 shadow-2xl">
            <div className="flex-1 bg-[#0A0A0A] border border-white/5 rounded-lg flex items-center px-4 h-12 focus-within:border-white/20 transition-colors">
              <Search className="w-4 h-4 text-neutral-500 mr-3" />
              <input type="text" placeholder="Search by name, region, or specialty..." className="bg-transparent border-none text-white text-xs placeholder-neutral-600 focus:outline-none w-full h-full font-mono" />
            </div>
            <div className="grid grid-cols-2 md:flex gap-2">
              <button className="px-4 h-12 bg-[#0A0A0A] border border-white/5 rounded-lg flex items-center justify-between gap-3 text-xs text-white hover:bg-white/5 transition-colors min-w-[140px]">
                <span className="text-neutral-400">Location</span>
                <ChevronDown className="w-3 h-3 text-neutral-600" />
              </button>
              <button className="px-4 h-12 bg-[#0A0A0A] border border-white/5 rounded-lg flex items-center justify-between gap-3 text-xs text-white hover:bg-white/5 transition-colors min-w-[140px]">
                <span className="text-neutral-400">Specialty</span>
                <ChevronDown className="w-3 h-3 text-neutral-600" />
              </button>
              <button className="px-4 h-12 bg-[#0A0A0A] border border-white/5 rounded-lg flex items-center justify-between gap-3 text-xs text-white hover:bg-white/5 transition-colors min-w-[140px]">
                <span className="text-neutral-400">Language</span>
                <ChevronDown className="w-3 h-3 text-neutral-600" />
              </button>
            </div>
            <div className="flex bg-[#0A0A0A] p-1 rounded-lg border border-white/5">
              <button onClick={() => setView("grid")} className={`w-10 h-10 rounded flex items-center justify-center ${view === "grid" ? "bg-white/10 text-white" : "text-neutral-500 hover:text-white"} transition-colors`}>
                <Grid className="w-4 h-4" />
              </button>
              <button onClick={() => setView("map")} className={`w-10 h-10 rounded flex items-center justify-center ${view === "map" ? "bg-white/10 text-white" : "text-neutral-500 hover:text-white"} transition-colors`}>
                <Map className="w-4 h-4" />
              </button>
            </div>
          </div>
        </header>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: "Active Agents", value: "248", icon: Users },
            { label: "Markets Covered", value: "42", icon: Globe },
            { label: "Total Volume", value: "$18.4B", icon: TrendingUp },
            { label: "Avg. Rating", value: "4.9", icon: Star },
          ].map((stat) => (
            <div key={stat.label} className="bg-[#0A0A0A] border border-white/10 rounded-xl p-5">
              <stat.icon className="w-4 h-4 text-neutral-600 mb-3" />
              <div className="text-2xl font-medium text-white">{stat.value}</div>
              <div className="text-xs text-neutral-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {agents.map((agent) => (
            <div key={agent.id} className="group relative bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden cursor-pointer hover:border-white/20 transition-all hover:-translate-y-1">
              {/* Image */}
              <div className="aspect-[4/5] relative overflow-hidden">
                <img src={agent.image} alt={agent.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                {agent.verified && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 rounded-full bg-indigo-500/20 backdrop-blur border border-indigo-500/30">
                    <Shield className="w-3 h-3 text-indigo-400" />
                    <span className="text-[10px] font-medium text-indigo-300">Verified</span>
                  </div>
                )}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-display text-xl font-medium text-white">{agent.name}</h3>
                  <p className="text-xs text-neutral-400 mt-1">{agent.title}</p>
                </div>
              </div>

              {/* Info */}
              <div className="p-4 border-t border-white/5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-xs text-neutral-400">
                    <MapPin className="w-3 h-3" />{agent.location}
                  </div>
                  <div className="flex items-center gap-1 text-xs">
                    <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                    <span className="text-white font-medium">{agent.rating}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Award className="w-3 h-3 text-neutral-600" />
                    <span className="text-xs text-neutral-500">{agent.specialty}</span>
                  </div>
                  <span className="text-xs font-mono text-emerald-400">{agent.volume}</span>
                </div>
                <div className="flex gap-2 mt-4">
                  <button className="flex-1 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-white hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                    <MessageCircle className="w-3 h-3" /> Message
                  </button>
                  <button className="flex-1 py-2 rounded-lg bg-indigo-600 text-xs font-medium text-white hover:bg-indigo-500 transition-colors flex items-center justify-center gap-2">
                    <Calendar className="w-3 h-3" /> Book
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-12 text-center">
          <button className="px-8 py-3 rounded-full border border-white/10 bg-white/5 text-xs font-bold uppercase tracking-widest text-white hover:bg-white hover:text-black transition-colors">
            View All Agents
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6 md:px-12">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-neutral-500" />
            <span className="text-xs text-neutral-500">HAUS Advisory Network</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="text-xs text-neutral-500 hover:text-white transition-colors">Terms</Link>
            <Link href="/privacy" className="text-xs text-neutral-500 hover:text-white transition-colors">Privacy</Link>
            <Link href="/about" className="text-xs text-neutral-500 hover:text-white transition-colors">About</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
