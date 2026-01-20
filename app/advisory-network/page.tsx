"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Search, ChevronDown, Grid, Map, Crown, TrendingUp, Award, Globe, Users, Zap, BarChart2, Play, ArrowRight, X, ChevronLeft, ChevronRight, LucideIcon } from "lucide-react";

// TypeScript interfaces
interface Agent {
  id: string;
  name: string;
  role: string;
  location: string;
  image: string;
  volumeYTD: string;
  avgDeal: string;
  badges: Array<{
    text: string;
    icon?: LucideIcon;
    variant: 'top-1%' | 'trending' | 'new' | 'active' | 'online';
  }>;
  tags: string[];
}

const AdvisoryNetwork = () => {
  const [mounted, setMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');

  const agents: Agent[] = [
    {
      id: '1',
      name: 'Elias Thorne',
      role: 'Senior Partner',
      location: 'New York',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop',
      volumeYTD: '$142M',
      avgDeal: '$4.2M',
      badges: [
        { text: 'Top 1%', icon: Crown, variant: 'top-1%' },
      ],
      tags: ['Penthouses', 'Off-market']
    },
    {
      id: '2',
      name: 'Sarah Chen',
      role: 'Director',
      location: 'London',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
      volumeYTD: '£85M',
      avgDeal: '£2.8M',
      badges: [
        { text: 'Trending', icon: TrendingUp, variant: 'trending' },
      ],
      tags: ['Heritage', 'Legal']
    },
    {
      id: '3',
      name: 'Marcus Vance',
      role: 'Associate',
      location: 'Sydney',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop',
      volumeYTD: '$64M',
      avgDeal: '$3.1M',
      badges: [
        { text: 'Active', variant: 'active' },
        { text: 'Online', variant: 'online' }
      ],
      tags: ['Waterfront', 'Dev']
    },
    {
      id: '4',
      name: 'Elena Ross',
      role: 'Partner',
      location: 'Dubai',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop',
      volumeYTD: 'AED 420M',
      avgDeal: 'AED 18M',
      badges: [],
      tags: ['Crypto', 'Visa']
    },
    {
      id: '5',
      name: 'David Kim',
      role: 'Analyst',
      location: 'Singapore',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
      volumeYTD: 'S$ 45M',
      avgDeal: 'S$ 5.2M',
      badges: [
        { text: 'New', icon: Award, variant: 'new' },
      ],
      tags: ['Commercial', 'Tech']
    },
    {
      id: '6',
      name: 'Victoria Hales',
      role: 'Senior Partner',
      location: 'Los Angeles',
      image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=800&auto=format&fit=crop',
      volumeYTD: '$210M',
      avgDeal: '$8.5M',
      badges: [],
      tags: ['Celebrity', 'Hills']
    },
    {
      id: '7',
      name: 'James Sterling',
      role: 'Director',
      location: 'Miami',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop',
      volumeYTD: '$115M',
      avgDeal: '$4.9M',
      badges: [],
      tags: ['Island', 'Yacht']
    },
    {
      id: '8',
      name: 'Sofia Bianchi',
      role: 'Partner',
      location: 'Milan',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
      volumeYTD: '€72M',
      avgDeal: '€3.4M',
      badges: [],
      tags: ['Historic', 'Rural']
    },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  const getBadgeStyles = (variant: string) => {
    const base = "bg-black/60 backdrop-blur border border-white/10 px-2 py-1 rounded text-[10px] uppercase tracking-wider text-white flex items-center gap-1";

    switch (variant) {
      case 'top-1%':
        return `${base}`;
      case 'trending':
        return `${base}`;
      case 'new':
        return `${base}`;
      case 'online':
        return "bg-green-500/90 backdrop-blur border border-white/10 px-2 py-1 rounded text-[10px] uppercase tracking-wider text-white flex items-center gap-1";
      default:
        return base;
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-neutral-300">
      {/* Background noise effect */}
      <div
        className="fixed inset-0 z-0 w-full h-full pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full px-6 md:px-12 py-4 md:py-6 flex justify-between items-center z-50 bg-black/80 backdrop-blur-md border-b border-white/10 text-white">
        <Link href="/" className="font-['Space_Grotesk'] text-lg font-medium tracking-tight flex items-center gap-2 group">
          <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-bold tracking-tighter group-hover:scale-90 transition-transform duration-300">H.</div>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="#" className="text-xs font-['Space_Mono'] text-white/60 hover:text-white transition-colors">PROPERTIES</Link>
          <Link href="#" className="text-xs font-['Space_Mono'] text-white border-b border-white transition-colors">AGENTS</Link>
          <Link href="#" className="text-xs font-['Space_Mono'] text-white/60 hover:text-white transition-colors">MARKET DATA</Link>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-xs font-['Space_Mono'] text-white border border-white/20 rounded-md px-4 py-2 hover:bg-white hover:text-black transition-all uppercase">
            Connect Wallet
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 pt-32 pb-24">

        {/* Header */}
        <header className="px-6 md:px-12 max-w-[1600px] mx-auto mb-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
            <div>
              <div className={`flex items-center gap-2 mb-6 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-700`}>
                <span className="px-2 py-0.5 rounded border border-white/20 bg-white/5 text-[10px] uppercase tracking-widest text-indigo-300 font-medium">
                  Global Network
                </span>
                <span className="text-[10px] text-neutral-500 font-['Space_Mono']">Ver. 2.4</span>
              </div>
              <h1 className="font-['Space_Grotesk'] text-5xl md:text-7xl font-medium tracking-tighter text-white leading-[0.9] overflow-hidden">
                <span className={`block ${mounted ? 'translate-y-0' : 'translate-y-full'} transition-transform duration-700 ease-out`}>ELITE</span>
                <span className={`block ${mounted ? 'translate-y-0' : 'translate-y-full'} transition-transform duration-700 ease-out delay-100 text-neutral-500`}>ADVISORY</span>
              </h1>
            </div>
            <div className={`max-w-md ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-700 delay-200`}>
              <p className="text-neutral-400 font-light text-sm md:text-base leading-relaxed">
                Our agents aren't just salespeople; they are data analysts, wealth architects, and market makers.
                Top 1% of performers by volume, verified by blockchain.
              </p>
            </div>
          </div>

          {/* Filters Bar */}
          <div className={`sticky top-24 z-40 bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl p-2 flex flex-col md:flex-row gap-2 shadow-2xl ${mounted ? 'opacity-100' : 'opacity-0'} transition-all duration-700 delay-300`}>
            {/* Search */}
            <div className="flex-1 bg-[#0A0A0A] border border-white/5 rounded-lg flex items-center px-4 h-12 focus-within:border-white/20 transition-colors">
              <Search className="w-4 h-4 text-neutral-500 mr-3" />
              <input
                type="text"
                placeholder="Search by name, region, or specialty..."
                className="bg-transparent border-none text-white text-xs placeholder-neutral-600 focus:outline-none w-full h-full font-['Space_Mono']"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Dropdowns */}
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

            {/* View Toggle */}
            <div className="flex bg-[#0A0A0A] p-1 rounded-lg border border-white/5">
              <button
                onClick={() => setViewMode('grid')}
                className={`w-10 h-10 rounded flex items-center justify-center transition-colors ${viewMode === 'grid' ? 'bg-white/10 text-white' : 'text-neutral-500 hover:text-white'}`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('map')}
                className={`w-10 h-10 rounded flex items-center justify-center transition-colors ${viewMode === 'map' ? 'bg-white/10 text-white' : 'text-neutral-500 hover:text-white'}`}
              >
                <Map className="w-4 h-4" />
              </button>
            </div>
          </div>
        </header>

        {/* Agents Grid */}
        <section className="px-6 md:px-12 max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {agents.map((agent, index) => (
              <div
                key={agent.id}
                className="group relative bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
                style={{ opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0)' : 'translateY(20px)', transition: `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}ms` }}
              >
                <div className="aspect-[3/4] overflow-hidden relative">
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  />
                  {agent.badges.length > 0 && (
                    <div className="absolute top-4 left-4 flex gap-2">
                      {agent.badges.map((badge, badgeIndex) => (
                        <div key={badgeIndex} className={getBadgeStyles(badge.variant)}>
                          {badge.icon && <badge.icon className="w-3 h-3 text-amber-400" />}
                          {badge.text}
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/80 to-transparent pt-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-['Space_Grotesk'] text-2xl text-white font-medium">{agent.name}</h3>
                    <p className="text-xs text-neutral-400 font-['Space_Mono'] mt-1">{agent.role} • {agent.location}</p>
                  </div>
                </div>
                <div className="p-6 border-t border-white/10 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1">Vol (YTD)</div>
                      <div className="text-sm font-medium text-white">{agent.volumeYTD}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1">Avg Deal</div>
                      <div className="text-sm font-medium text-white">{agent.avgDeal}</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {agent.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 bg-white/5 border border-white/5 rounded text-[10px] text-neutral-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="w-full py-3 mt-2 rounded border border-white/20 text-xs font-bold uppercase tracking-widest text-white hover:bg-white hover:text-black transition-colors">
                    Contact
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-24 gap-2">
            <button className="w-10 h-10 rounded border border-white/10 flex items-center justify-center text-neutral-500 hover:text-white hover:bg-white/5 transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-10 h-10 rounded bg-white text-black text-xs font-['Space_Mono'] font-medium">1</button>
            <button className="w-10 h-10 rounded border border-white/10 flex items-center justify-center text-neutral-400 text-xs font-['Space_Mono'] hover:bg-white/5 hover:text-white transition-colors">2</button>
            <button className="w-10 h-10 rounded border border-white/10 flex items-center justify-center text-neutral-400 text-xs font-['Space_Mono'] hover:bg-white/5 hover:text-white transition-colors">3</button>
            <span className="w-10 h-10 flex items-center justify-center text-neutral-600">...</span>
            <button className="w-10 h-10 rounded border border-white/10 flex items-center justify-center text-neutral-500 hover:text-white hover:bg-white/5 transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* Join CTA */}
        <section className="mt-32 border-t border-white/10 bg-[#0A0A0A]">
          <div className="px-6 md:px-12 max-w-[1600px] mx-auto py-24 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
                Are you a top 1%
                <br />
                performer?
              </h2>
              <p className="text-neutral-400 text-sm leading-relaxed max-w-md mb-8">
                Join the only network that combines institutional-grade AI analytics with global deal flow.
                We provide the leads, the tech, and the infrastructure. You close the deal.
              </p>
              <div className="flex gap-4">
                <button className="px-6 py-3 rounded bg-indigo-600 text-white text-xs font-bold uppercase tracking-widest hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-500/20">
                  Apply for Partnership
                </button>
                <button className="px-6 py-3 rounded border border-white/10 text-white text-xs font-bold uppercase tracking-widest hover:bg-white/5 transition-colors">
                  Download Brochure
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-transparent blur-3xl"></div>
              <div className="grid grid-cols-2 gap-4 relative z-10">
                <div className="bg-black border border-white/10 p-6 rounded-xl">
                  <BarChart2 className="w-6 h-6 text-indigo-400 mb-4" />
                  <div className="text-2xl font-medium text-white mb-1">3x</div>
                  <div className="text-xs text-neutral-500">Deal Velocity</div>
                </div>
                <div className="bg-black border border-white/10 p-6 rounded-xl">
                  <Users className="w-6 h-6 text-indigo-400 mb-4" />
                  <div className="text-2xl font-medium text-white mb-1">24k+</div>
                  <div className="text-xs text-neutral-500">Qualified Leads</div>
                </div>
                <div className="bg-black border border-white/10 p-6 rounded-xl">
                  <Globe className="w-6 h-6 text-indigo-400 mb-4" />
                  <div className="text-2xl font-medium text-white mb-1">50+</div>
                  <div className="text-xs text-neutral-500">Global Markets</div>
                </div>
                <div className="bg-black border border-white/10 p-6 rounded-xl">
                  <Zap className="w-6 h-6 text-indigo-400 mb-4" />
                  <div className="text-2xl font-medium text-white mb-1">0%</div>
                  <div className="text-xs text-neutral-500">Admin Work</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-24 px-6 md:px-12">
        <div className="max-w-[1600px] mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
          <div className="col-span-2 lg:col-span-2">
            <div className="font-['Space_Grotesk'] text-2xl font-medium tracking-tight text-white mb-6">HAUS.</div>
            <p className="text-xs text-neutral-500 max-w-xs leading-relaxed">
              The operating system for modern real estate.
              Combining human expertise with artificial intelligence to power the next generation of ownership.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-[10px] uppercase tracking-widest text-white font-semibold">Network</span>
            <Link href="#" className="text-xs text-neutral-400 hover:text-white transition-colors">Agents</Link>
            <Link href="#" className="text-xs text-neutral-400 hover:text-white transition-colors">Agencies</Link>
            <Link href="#" className="text-xs text-neutral-400 hover:text-white transition-colors">Partners</Link>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-[10px] uppercase tracking-widest text-white font-semibold">Product</span>
            <Link href="#" className="text-xs text-neutral-400 hover:text-white transition-colors">Intelligence</Link>
            <Link href="#" className="text-xs text-neutral-400 hover:text-white transition-colors">Valuation</Link>
            <Link href="#" className="text-xs text-neutral-400 hover:text-white transition-colors">API</Link>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-[10px] uppercase tracking-widest text-white font-semibold">Social</span>
            <Link href="#" className="text-xs text-neutral-400 hover:text-white transition-colors">Twitter</Link>
            <Link href="#" className="text-xs text-neutral-400 hover:text-white transition-colors">LinkedIn</Link>
            <Link href="#" className="text-xs text-neutral-400 hover:text-white transition-colors">Instagram</Link>
          </div>
        </div>
        <div className="max-w-[1600px] mx-auto mt-24 pt-8 border-t border-white/5 flex justify-between items-center">
          <div className="text-[10px] text-neutral-600 uppercase tracking-widest">© 2025 HAUS Group</div>
          <div className="text-[10px] text-neutral-600 uppercase tracking-widest">Privacy & Terms</div>
        </div>
      </footer>
    </div>
  );
};

export default AdvisoryNetwork;
