import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search,
  Menu,
  Mic,
  ArrowUp,
  Sparkles,
  ShieldCheck,
  Glasses,
  TrendingUp,
  Users,
  BarChart2,
  Coffee,
  Train,
  Shield,
  Check,
  CheckCircle2,
  Crown,
  Triangle,
  Circle,
  Hexagon,
  Square,
  Diamond,
  ArrowUpRight,
  ArrowRight,
  Briefcase,
  CreditCard,
  Ruler,
  Plane,
  Quote,
} from 'lucide-react';

interface LandingPageProps {
  className?: string;
}

const LandingPage: React.FC<LandingPageProps> = ({ className }) => {
  const navigate = useNavigate();

  return (
    <div className={`landing-page ${className || ''}`}>
      {/* Noise Overlay */}
      <div
        className="fixed inset-0 z-0 w-full h-full pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)',
        }}
      />

      {/* Main Wrapper */}
      <div className="relative z-10 bg-[#050505] mb-[100vh] shadow-[0_50px_100px_rgba(0,0,0,0.5)] rounded-b-3xl overflow-hidden">
        {/* Hero Section */}
        <section className="h-screen relative flex flex-col items-center justify-center overflow-hidden">
          {/* Parallax Background */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1600&auto=format&fit=crop"
              className="w-full h-[120%] object-cover brightness-[0.7]"
              alt="Modern Architecture"
            />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 text-center text-white px-4 w-full max-w-5xl">
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="px-3 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-[10px] uppercase tracking-widest font-medium">
                Early Access v1.0
              </span>
            </div>

            <h1 className="font-['Space_Grotesk'] text-[6.5vw] leading-[0.8] tracking-tighter overflow-hidden">
              <span className="block">THE NEW</span>
            </h1>
            <div className="flex items-center justify-center gap-4 md:gap-8 overflow-hidden">
              <h1 className="font-['Space_Grotesk'] text-[6.5vw] leading-[0.8] tracking-tighter text-white">
                <span className="block">HOME OF</span>
              </h1>
            </div>
            <div className="overflow-hidden">
              <h1 className="font-['Space_Grotesk'] text-[6.5vw] leading-[0.8] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
                <span className="block">HOMES</span>
              </h1>
            </div>

            <p className="mt-8 text-sm md:text-base font-light text-white/80 max-w-lg mx-auto">
              Curated properties. Powerful search. Expert support.
              <br />
              AI-native real estate for the modern era.
            </p>

            {/* Voice Search Demo UI */}
            <div className="mt-12 mx-auto max-w-md w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-2 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-black shrink-0">
                <Mic className="w-5 h-5" />
              </div>
              <div className="flex-1 text-left">
                <div className="text-xs text-white/60 font-medium">Try asking...</div>
                <div className="text-sm text-white font-medium">
                  &quot;3 bed house in Melbourne with a pool&quot;
                </div>
              </div>
              <div className="px-3 py-1.5 bg-white/10 rounded-lg text-[10px] font-medium uppercase tracking-wider text-white/70">
                Enter
              </div>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <span className="text-[10px] text-neutral-600 uppercase tracking-widest pt-1.5 font-medium">
                Trending
              </span>
              <button className="px-3 py-1.5 rounded-full border border-white/5 bg-white/5 hover:bg-white/10 text-[10px] text-neutral-400 hover:text-white transition-colors">
                Waterfront
              </button>
              <button className="px-3 py-1.5 rounded-full border border-white/5 bg-white/5 hover:bg-white/10 text-[10px] text-neutral-400 hover:text-white transition-colors">
                Off-market
              </button>
              <button className="px-3 py-1.5 rounded-full border border-white/5 bg-white/5 hover:bg-white/10 text-[10px] text-neutral-400 hover:text-white transition-colors">
                Penthouse
              </button>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <span className="text-[9px] uppercase tracking-widest text-white/30 font-medium">
              Explore
            </span>
            <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent"></div>
          </div>
        </section>

        {/* Stats & Intro */}
        <section className="py-32 px-6 md:px-20 max-w-[1600px] mx-auto bg-[#050505]">
          <div className="grid lg:grid-cols-12 gap-12 items-start border-b border-white/10 pb-24">
            <div className="lg:col-span-7">
              <h2 className="font-['Space_Grotesk'] text-4xl md:text-6xl font-medium leading-[1.05] tracking-tight text-white">
                A revolution in
                <br />
                <span className="text-neutral-500">real estate.</span> Search, invest, and buy in one platform.
              </h2>
            </div>
            <div className="lg:col-span-5 flex flex-col justify-between h-full pt-2">
              <div className="text-lg md:text-xl font-light text-neutral-400 leading-relaxed">
                No more checkbox hell. HAUS combines market expertise with a
                seamless, voice-first AI experience. We prioritize transparency,
                verified listings, and data-driven insights.
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div>
              <div className="flex items-end gap-2 mb-1">
                <div className="text-3xl font-medium tracking-tight text-white">
                  12k+
                </div>
                <div className="text-[10px] font-medium text-emerald-500 mb-1.5 flex items-center">
                  <ArrowUp className="w-2.5 h-2.5 mr-0.5" />
                  14%
                </div>
              </div>
              <div className="text-xs text-neutral-500 uppercase tracking-widest font-medium">
                Active Listings
              </div>
            </div>
            <div>
              <div className="flex items-end gap-2 mb-1">
                <div className="text-3xl font-medium tracking-tight text-white">
                  98%
                </div>
                <div className="text-[10px] font-medium text-emerald-500 mb-1.5 flex items-center">
                  <ArrowUp className="w-2.5 h-2.5 mr-0.5" />
                  2.4%
                </div>
              </div>
              <div className="text-xs text-neutral-500 uppercase tracking-widest font-medium">
                Satisfaction
              </div>
            </div>
            <div>
              <div className="text-3xl font-medium tracking-tight mb-1 text-white">
                $1B+
              </div>
              <div className="text-xs text-neutral-500 uppercase tracking-widest font-medium">
                Volume
              </div>
            </div>
            <div>
              <div className="text-3xl font-medium tracking-tight mb-1 text-white">
                Zero
              </div>
              <div className="text-xs text-neutral-500 uppercase tracking-widest font-medium">
                Hidden Fees
              </div>
            </div>
          </div>
        </section>

        {/* Trusted By */}
        <section className="py-20 border-t border-white/10 bg-[#050505] relative z-10">
          <div className="px-6 md:px-20 max-w-[1400px] mx-auto">
            <p className="text-[10px] font-mono text-neutral-600 text-center mb-10 uppercase tracking-[0.2em]">
              Trusted by Industry Leaders
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60">
              <div className="flex items-center gap-2 group cursor-default">
                <Triangle className="w-5 h-5 text-white group-hover:text-indigo-400 transition-colors" />
                <span className="text-lg font-bold tracking-tighter text-white group-hover:text-indigo-400 transition-colors">
                  VORTEX
                </span>
              </div>
              <div className="flex items-center gap-2 group cursor-default">
                <Circle className="w-5 h-5 text-white group-hover:text-indigo-400 transition-colors" />
                <span className="text-lg font-bold tracking-tighter text-white group-hover:text-indigo-400 transition-colors">
                  OBLIQUE
                </span>
              </div>
              <div className="flex items-center gap-2 group cursor-default">
                <Hexagon className="w-5 h-5 text-white group-hover:text-indigo-400 transition-colors" />
                <span className="text-lg font-bold tracking-tighter text-white group-hover:text-indigo-400 transition-colors">
                  NEXUS
                </span>
              </div>
              <div className="flex items-center gap-2 group cursor-default">
                <Square className="w-5 h-5 text-white group-hover:text-indigo-400 transition-colors" />
                <span className="text-lg font-bold tracking-tighter text-white group-hover:text-indigo-400 transition-colors">
                  QUARTZ
                </span>
              </div>
              <div className="flex items-center gap-2 group cursor-default">
                <Diamond className="w-5 h-5 text-white group-hover:text-indigo-400 transition-colors" />
                <span className="text-lg font-bold tracking-tighter text-white group-hover:text-indigo-400 transition-colors">
                  ÆON
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Intelligent Tools (Card Stack) */}
        <section className="pb-32 bg-[#050505] relative">
          <div className="px-6 md:px-20 mb-20">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
              <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                Platform Capabilities
              </span>
            </div>
            <h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-medium tracking-tight text-white">
              INTELLIGENT
              <br />
              TOOLS
            </h2>
          </div>

          <div className="space-y-20">
            {/* Card 01: AI Assistant */}
            <div className="sticky top-[20vh] h-[60vh] flex items-center justify-center perspective-1000">
              <div className="w-[95%] h-full bg-[#0A0A0A] border border-white/10 rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] shadow-2xl">
                <div className="p-10 flex flex-col justify-between border-r border-white/10">
                  <div className="w-full">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-mono text-gray-400">01 / 03</span>
                      <Sparkles className="w-5 h-5 text-gray-800" />
                    </div>
                    <h3 className="font-['Space_Grotesk'] text-3xl font-medium tracking-tight mt-6 text-white">
                      AI PROPERTY ASSISTANT
                    </h3>
                    <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mt-2">
                      GPT-4 Powered
                    </p>
                  </div>
                  <div className="space-y-6">
                    <p className="text-sm text-gray-600 leading-relaxed font-light">
                      Analyze investment potential, draft offer letters, and
                      compare listings instantly. Your 24/7 expert.
                    </p>
                    <div className="flex gap-2">
                      <span className="px-3 py-1 bg-gray-100 rounded-md text-[10px] uppercase tracking-wider font-medium text-gray-600">
                        Market Trends
                      </span>
                      <span className="px-3 py-1 bg-gray-100 rounded-md text-[10px] uppercase tracking-wider font-medium text-gray-600">
                        Legal Drafting
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center bg-neutral-900 p-12">
                  {/* Mock UI */}
                  <div className="w-full max-w-sm bg-neutral-950 rounded-xl shadow-2xl border border-white/10 p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div className="text-sm font-medium text-white">HAUS AI</div>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-white/5 p-3 rounded-lg rounded-tl-none text-xs text-neutral-400 leading-relaxed">
                        Based on the 12-month forecast, this property has a
                        projected ROI of +12.4%. Rental yield is above suburb
                        average.
                      </div>
                      <div className="h-2 w-24 bg-white/10 rounded animate-pulse"></div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <div className="flex gap-2">
                        <div className="flex-1 h-8 bg-white/5 rounded-lg border border-white/10"></div>
                        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-black">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 02: Fair Play */}
            <div className="sticky top-[20vh] h-[60vh] flex items-center justify-center perspective-1000">
              <div className="w-[95%] h-full bg-[#0A0A0A] border border-white/10 rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] shadow-2xl">
                <div className="p-10 flex flex-col justify-between border-r border-white/10">
                  <div className="w-full">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-mono text-gray-400">02 / 03</span>
                      <ShieldCheck className="w-5 h-5 text-gray-800" />
                    </div>
                    <h3 className="font-['Space_Grotesk'] text-3xl font-medium tracking-tight mt-6">
                      FAIR PLAY PROTOCOL
                    </h3>
                    <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mt-2">
                      Compliance Ready
                    </p>
                  </div>
                  <div className="space-y-6">
                    <p className="text-sm text-gray-600 leading-relaxed font-light">
                      No underquoting. No dodgy tactics. We detect price anomalies
                      and verify every document automatically.
                    </p>
                    <div className="flex gap-2">
                      <span className="px-3 py-1 bg-gray-100 rounded-md text-[10px] uppercase tracking-wider font-medium text-gray-600">
                        AUSTRAC Certified
                      </span>
                      <span className="px-3 py-1 bg-gray-100 rounded-md text-[10px] uppercase tracking-wider font-medium text-gray-600">
                        ID Check
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center bg-neutral-900 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
                  <div className="bg-neutral-950 p-6 rounded-xl shadow-2xl border border-white/10 w-64 z-10">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-xs font-medium text-neutral-500">Risk Score</span>
                      <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                        LOW
                      </span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-neutral-400">Identity</span>
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-neutral-400">Funds Source</span>
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-neutral-400">Ownership</span>
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 03: 3D Tours */}
            <div className="sticky top-[20vh] h-[60vh] flex items-center justify-center perspective-1000">
              <div className="w-[95%] h-full bg-[#0A0A0A] border border-white/10 rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] shadow-2xl">
                <div className="p-10 flex flex-col justify-between border-r border-white/10">
                  <div className="w-full">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-mono text-gray-400">03 / 03</span>
                      <Glasses className="w-5 h-5 text-gray-800" />
                    </div>
                    <h3 className="font-['Space_Grotesk'] text-3xl font-medium tracking-tight mt-6">
                      IMMERSIVE 3D
                    </h3>
                    <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mt-2">
                      NeRF • WebXR
                    </p>
                  </div>
                  <div className="space-y-6">
                    <p className="text-sm text-gray-600 leading-relaxed font-light">
                      Explore homes remotely with photorealistic tours. AI staging
                      helps you visualize the potential of every room.
                    </p>
                    <div className="flex gap-2">
                      <span className="px-3 py-1 bg-gray-100 rounded-md text-[10px] uppercase tracking-wider font-medium text-gray-600">
                        VR Ready
                      </span>
                      <span className="px-3 py-1 bg-gray-100 rounded-md text-[10px] uppercase tracking-wider font-medium text-gray-600">
                        Spatial AI
                      </span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop"
                    className="w-full h-full object-cover"
                    alt="Interior 3D"
                  />
                  <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-lg text-xs font-medium flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    Live View
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hyper-local Intelligence */}
        <section className="py-32 px-6 md:px-20 bg-[#050505] border-t border-white/10">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                    Market Pulse
                  </span>
                </div>
                <h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-medium tracking-tight text-white">
                  HYPER-LOCAL
                  <br />
                  INTELLIGENCE
                </h2>
              </div>
              <p className="text-sm text-neutral-400 max-w-md leading-relaxed">
                Don't just buy a home, buy into a future. Our predictive models
                analyze millions of data points to forecast neighborhood growth
                with 94% accuracy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Map Card */}
              <div className="md:col-span-2 md:row-span-2 relative bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2400&auto=format&fit=crop"
                  className="w-full h-full object-cover opacity-40 grayscale group-hover:scale-105 transition-transform duration-700 min-h-[400px]"
                  alt="Map area"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>

                <div className="absolute top-1/3 left-1/4 bg-white text-black px-3 py-1.5 rounded-lg shadow-xl">
                  <div className="text-[10px] font-bold tracking-tight">+$124k (1yr)</div>
                  <div className="w-2 h-2 bg-white absolute -bottom-1 left-1/2 -translate-x-1/2 rotate-45"></div>
                </div>

                <div className="absolute top-1/2 right-1/3 bg-black/80 backdrop-blur border border-white/20 text-white px-3 py-1.5 rounded-lg shadow-xl">
                  <div className="text-[10px] font-bold tracking-tight">Top Rated School</div>
                </div>

                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-xl font-medium text-white mb-1">Surry Hills, NSW</h3>
                  <div className="flex items-center gap-4 text-xs text-neutral-400">
                    <span className="flex items-center gap-1 text-emerald-400">
                      <TrendingUp className="w-3 h-3" />
                      +8.4% Growth
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      High Demand
                    </span>
                  </div>
                </div>
              </div>

              {/* Chart Card */}
              <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 flex flex-col justify-between group">
                <div className="flex justify-between items-start">
                  <span className="text-xs text-neutral-500 uppercase tracking-widest font-medium">
                    Price Velocity
                  </span>
                  <BarChart2 className="w-5 h-5 text-neutral-700 group-hover:text-white transition-colors" />
                </div>
                <div className="h-32 flex items-end justify-between gap-2 mt-4">
                  <div className="w-full bg-white/5 rounded-t group-hover:bg-white/10 transition-colors h-[40%]"></div>
                  <div className="w-full bg-white/5 rounded-t group-hover:bg-white/10 transition-colors h-[55%]"></div>
                  <div className="w-full bg-white/5 rounded-t group-hover:bg-white/10 transition-colors h-[45%]"></div>
                  <div className="w-full bg-white/5 rounded-t group-hover:bg-white/10 transition-colors h-[70%]"></div>
                  <div className="w-full bg-white/5 rounded-t group-hover:bg-white/10 transition-colors h-[60%]"></div>
                  <div className="w-full bg-emerald-500/20 rounded-t h-[85%] relative">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-emerald-500 text-black text-[9px] font-bold px-1.5 py-0.5 rounded">
                      NOW
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="text-2xl font-medium text-white tracking-tight">
                    14 days
                  </div>
                  <div className="text-xs text-neutral-500">Avg. time on market</div>
                </div>
              </div>

              {/* Score Card */}
              <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 flex flex-col justify-center gap-1">
                <div className="flex items-center justify-between border-b border-white/5 py-3 first:pt-0">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center border border-white/5">
                      <Coffee className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">Lifestyle</div>
                      <div className="text-[10px] text-neutral-500">Cafes, Parks, Art</div>
                    </div>
                  </div>
                  <div className="text-lg font-bold text-emerald-400">9.8</div>
                </div>
                <div className="flex items-center justify-between border-b border-white/5 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center border border-white/5">
                      <Train className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">Transit</div>
                      <div className="text-[10px] text-neutral-500">Metro, Bus, Walk</div>
                    </div>
                  </div>
                  <div className="text-lg font-bold text-emerald-400">9.2</div>
                </div>
                <div className="flex items-center justify-between py-3 pb-0">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center border border-white/5">
                      <Shield className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">Safety</div>
                      <div className="text-[10px] text-neutral-500">Incident Reports</div>
                    </div>
                  </div>
                  <div className="text-lg font-bold text-emerald-400">9.5</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Listings */}
        <section className="py-24 px-6 md:px-20 bg-[#050505]">
          <div className="flex justify-between items-end mb-12">
            <h2 className="font-['Space_Grotesk'] text-3xl font-medium tracking-tight text-white">
              FEATURED
              <br />
              LISTINGS
            </h2>
            <button
              onClick={() => navigate('/search')}
              className="text-xs font-medium uppercase tracking-widest border-b border-white/20 pb-1 hover:border-white hover:text-white text-neutral-400 transition-colors"
            >
              View All
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Listing 1 */}
            <div
              className="group cursor-pointer"
              onClick={() => navigate('/listing/1')}
            >
              <div className="aspect-[4/3] bg-neutral-800 rounded-lg overflow-hidden mb-4 relative">
                <img
                  src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1600&auto=format&fit=crop"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur px-2 py-1 rounded text-[10px] font-medium uppercase tracking-wider text-white">
                  New
                </div>
                <div className="absolute top-3 right-3 bg-indigo-500/90 backdrop-blur-md border border-indigo-400/20 px-2 py-1 rounded text-[10px] font-semibold uppercase tracking-wider text-white flex items-center gap-1 shadow-lg">
                  <Sparkles className="w-2.5 h-2.5" />
                  98% Match
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-sm text-white">
                    Oceanview Modern Villa
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1">Malibu, CA</p>
                </div>
                <div className="text-sm font-medium text-white">$2.8M</div>
              </div>
              <div className="flex gap-3 mt-3 text-xs text-neutral-500">
                <span>4 bd</span> • <span>3 ba</span> • <span>2,800 sqft</span>
              </div>
            </div>

            {/* Listing 2 */}
            <div
              className="group cursor-pointer"
              onClick={() => navigate('/listing/2')}
            >
              <div className="aspect-[4/3] bg-neutral-800 rounded-lg overflow-hidden mb-4 relative">
                <img
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur px-2 py-1 rounded text-[10px] font-medium uppercase tracking-wider text-white">
                  Verified
                </div>
                <div className="absolute top-3 right-3 bg-indigo-500/90 backdrop-blur-md border border-indigo-400/20 px-2 py-1 rounded text-[10px] font-semibold uppercase tracking-wider text-white flex items-center gap-1 shadow-lg">
                  <Sparkles className="w-2.5 h-2.5" />
                  94% Match
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-sm text-white">Skyline Penthouse</h3>
                  <p className="text-xs text-neutral-400 mt-1">Manhattan, NY</p>
                </div>
                <div className="text-sm font-medium text-white">$5.2M</div>
              </div>
              <div className="flex gap-3 mt-3 text-xs text-neutral-500">
                <span>3 bd</span> • <span>2 ba</span> • <span>1,950 sqft</span>
              </div>
            </div>

            {/* Listing 3 */}
            <div
              className="group cursor-pointer"
              onClick={() => navigate('/listing/3')}
            >
              <div className="aspect-[4/3] bg-neutral-800 rounded-lg overflow-hidden mb-4 relative">
                <img
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1600&auto=format&fit=crop"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur px-2 py-1 rounded text-[10px] font-medium uppercase tracking-wider text-white">
                  Open House
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-sm text-white">
                    Contemporary Townhouse
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1">Austin, TX</p>
                </div>
                <div className="text-sm font-medium text-white">$1.15M</div>
              </div>
              <div className="flex gap-3 mt-3 text-xs text-neutral-500">
                <span>3 bd</span> • <span>3 ba</span> • <span>1,900 sqft</span>
              </div>
            </div>
          </div>
        </section>

        {/* The Glass Pavilion - Auction Section */}
        <section className="py-32 px-6 md:px-20 border-t border-white/10 bg-[#050505]">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-[1400px] mx-auto">
            {/* Gallery */}
            <div className="grid grid-cols-2 gap-4 h-[500px] md:h-[600px]">
              <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1200&auto=format&fit=crop"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="Main View"
                />
                <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-widest text-white">
                  Exclusive
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden hidden lg:block">
                <img
                  src="https://images.unsplash.com/photo-1600566752355-35792bedcfe1?q=80&w=600&auto=format&fit=crop"
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                  alt="Detail 1"
                />
              </div>
              <div className="rounded-2xl overflow-hidden hidden lg:block">
                <img
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=600&auto=format&fit=crop"
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                  alt="Detail 2"
                />
              </div>
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
                  Live Auction • 2d 14h left
                </span>
              </div>
              <h2 className="font-['Space_Grotesk'] text-5xl md:text-6xl font-medium tracking-tighter text-white mb-4 leading-[0.9]">
                THE GLASS
                <br />
                PAVILION
              </h2>
              <p className="text-lg text-neutral-400 font-light mb-8 max-w-md">
                A masterwork of minimalism. Floor-to-ceiling glass, floating
                cantilevers, and a private botanical garden in the heart of
                Montecito.
              </p>
              <div className="grid grid-cols-3 gap-8 border-y border-white/10 py-8 mb-10">
                <div>
                  <span className="block text-3xl font-medium text-white tracking-tight">
                    5
                  </span>
                  <span className="text-xs text-neutral-500 uppercase tracking-widest mt-1 block">
                    Bedrooms
                  </span>
                </div>
                <div>
                  <span className="block text-3xl font-medium text-white tracking-tight">
                    6.5
                  </span>
                  <span className="text-xs text-neutral-500 uppercase tracking-widest mt-1 block">
                    Bathrooms
                  </span>
                </div>
                <div>
                  <span className="block text-3xl font-medium text-white tracking-tight">
                    8.4k
                  </span>
                  <span className="text-xs text-neutral-500 uppercase tracking-widest mt-1 block">
                    Sq Ft
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-6">
                <button className="group bg-white text-black px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-indigo-500 hover:text-white transition-all duration-300 flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)]">
                  Place Bid
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                <div className="flex flex-col">
                  <span className="text-[10px] text-neutral-500 uppercase tracking-widest mb-0.5">
                    Current Ask
                  </span>
                  <span className="text-xl font-medium text-white">$14,500,000</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services - Beyond Transaction */}
        <section className="py-32 px-6 md:px-20 border-t border-white/10 bg-[#050505]">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-2 gap-20">
              {/* Left: Sticky Header */}
              <div className="lg:sticky lg:top-32 self-start">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-1.5 h-1.5 rounded-full bg-violet-500"></div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                    HAUS Private
                  </span>
                </div>
                <h2 className="font-['Space_Grotesk'] text-5xl md:text-6xl font-medium tracking-tighter text-white mb-6 leading-[0.9]">
                  BEYOND THE
                  <br />
                  TRANSACTION
                </h2>
                <p className="text-lg text-neutral-400 font-light max-w-md leading-relaxed mb-8">
                  Access a curated ecosystem of partners. From instant liquidity
                  to interior architecture, we manage the complexities of
                  ownership so you don't have to.
                </p>
                <a className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white border-b border-white/20 pb-1 hover:border-white transition-colors group cursor-pointer">
                  Explore Services
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>

              {/* Right: Service List */}
              <div className="flex flex-col gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
                {/* Item 1 */}
                <div className="group bg-[#0A0A0A] p-8 hover:bg-neutral-900 transition-colors duration-300 relative overflow-hidden cursor-pointer">
                  <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-4 group-hover:translate-x-0">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-violet-500/20 group-hover:text-violet-400 transition-colors">
                    <Briefcase className="w-5 h-5 text-neutral-400 group-hover:text-violet-400 transition-colors" />
                  </div>
                  <h3 className="font-['Space_Grotesk'] text-2xl text-white mb-2">
                    Legal & Tax
                  </h3>
                  <p className="text-sm text-neutral-500 max-w-sm group-hover:text-neutral-400 transition-colors">
                    Structuring, compliance, and cross-border advisory
                    optimization for global investors.
                  </p>
                </div>

                {/* Item 2 */}
                <div className="group bg-[#0A0A0A] p-8 hover:bg-neutral-900 transition-colors duration-300 relative overflow-hidden cursor-pointer">
                  <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-4 group-hover:translate-x-0">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-violet-500/20 group-hover:text-violet-400 transition-colors">
                    <CreditCard className="w-5 h-5 text-neutral-400 group-hover:text-violet-400 transition-colors" />
                  </div>
                  <h3 className="font-['Space_Grotesk'] text-2xl text-white mb-2">
                    Smart Financing
                  </h3>
                  <p className="text-sm text-neutral-500 max-w-sm group-hover:text-neutral-400 transition-colors">
                    Asset-backed lending with approval in minutes, not weeks.
                    Competitive rates for HNW individuals.
                  </p>
                </div>

                {/* Item 3 */}
                <div className="group bg-[#0A0A0A] p-8 hover:bg-neutral-900 transition-colors duration-300 relative overflow-hidden cursor-pointer">
                  <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-4 group-hover:translate-x-0">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-violet-500/20 group-hover:text-violet-400 transition-colors">
                    <Ruler className="w-5 h-5 text-neutral-400 group-hover:text-violet-400 transition-colors" />
                  </div>
                  <h3 className="font-['Space_Grotesk'] text-2xl text-white mb-2">
                    Design & Build
                  </h3>
                  <p className="text-sm text-neutral-500 max-w-sm group-hover:text-neutral-400 transition-colors">
                    From architectural concepts to turn-key renovations. We manage
                    the contractors, you enjoy the result.
                  </p>
                </div>

                {/* Item 4 */}
                <div className="group bg-[#0A0A0A] p-8 hover:bg-neutral-900 transition-colors duration-300 relative overflow-hidden cursor-pointer">
                  <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-4 group-hover:translate-x-0">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-violet-500/20 group-hover:text-violet-400 transition-colors">
                    <Plane className="w-5 h-5 text-neutral-400 group-hover:text-violet-400 transition-colors" />
                  </div>
                  <h3 className="font-['Space_Grotesk'] text-2xl text-white mb-2">
                    Relocation
                  </h3>
                  <p className="text-sm text-neutral-500 max-w-sm group-hover:text-neutral-400 transition-colors">
                    Visa assistance, school enrollment, and logistics for
                    international buyers moving to new markets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Market Intelligence */}
        <section className="py-32 px-6 md:px-20 border-t border-white/10 bg-[#050505]">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                    Editorial
                  </span>
                </div>
                <h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-medium tracking-tight text-white">
                  MARKET
                  <br />
                  INTELLIGENCE
                </h2>
              </div>
              <a className="text-xs font-medium uppercase tracking-widest border-b border-white/20 pb-1 hover:border-white hover:text-white text-neutral-400 transition-colors group flex items-center gap-1 cursor-pointer">
                Read All
                <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
            <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
              <div className="bg-[#050505] p-10 hover:bg-neutral-900 transition-colors group cursor-pointer relative">
                <div className="flex items-center justify-between mb-8">
                  <span className="px-2 py-1 rounded border border-white/10 text-[10px] uppercase tracking-wider text-neutral-400">
                    Trend
                  </span>
                  <span className="text-[10px] text-neutral-500 font-mono">Oct 24</span>
                </div>
                <h3 className="text-2xl text-white font-medium mb-4 leading-tight group-hover:text-indigo-400 transition-colors">
                  The Shift to Suburban Luxury
                </h3>
                <p className="text-xs text-neutral-500 leading-relaxed mb-8">
                  Why high-net-worth individuals are leaving city centers for
                  curated perimeter estates.
                </p>
                <div className="text-xs font-bold uppercase tracking-widest text-white flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
              <div className="bg-[#050505] p-10 hover:bg-neutral-900 transition-colors group cursor-pointer relative">
                <div className="flex items-center justify-between mb-8">
                  <span className="px-2 py-1 rounded border border-white/10 text-[10px] uppercase tracking-wider text-neutral-400">
                    Fintech
                  </span>
                  <span className="text-[10px] text-neutral-500 font-mono">Oct 20</span>
                </div>
                <h3 className="text-2xl text-white font-medium mb-4 leading-tight group-hover:text-indigo-400 transition-colors">
                  Tokenized Real Estate Assets
                </h3>
                <p className="text-xs text-neutral-500 leading-relaxed mb-8">
                  Understanding the fractional ownership model and liquidity
                  premium in 2025.
                </p>
                <div className="text-xs font-bold uppercase tracking-widest text-white flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
              <div className="bg-[#050505] p-10 hover:bg-neutral-900 transition-colors group cursor-pointer relative">
                <div className="flex items-center justify-between mb-8">
                  <span className="px-2 py-1 rounded border border-white/10 text-[10px] uppercase tracking-wider text-neutral-400">
                    Design
                  </span>
                  <span className="text-[10px] text-neutral-500 font-mono">Oct 12</span>
                </div>
                <h3 className="text-2xl text-white font-medium mb-4 leading-tight group-hover:text-indigo-400 transition-colors">
                  Biophilic Design Trends
                </h3>
                <p className="text-xs text-neutral-500 leading-relaxed mb-8">
                  How integration with nature is becoming the #1 requested feature
                  for new builds.
                </p>
                <div className="text-xs font-bold uppercase tracking-widest text-white flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-32 flex flex-col items-center justify-center text-center px-6 border-t border-white/10 bg-[#050505]">
          <div className="max-w-3xl mx-auto">
            <Quote className="w-8 h-8 text-neutral-600 mx-auto mb-8" />
            <h3 className="font-['Space_Grotesk'] text-2xl md:text-3xl font-medium tracking-tight mb-8 leading-normal text-white">
              &quot;HAUS's AI found me a property that wasn't even listed yet. The
              investment score was spot-on—I've seen 15% appreciation in just 8
              months.&quot;
            </h3>
            <div className="flex items-center justify-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
                className="w-12 h-12 rounded-full object-cover"
                alt="User"
              />
              <div className="text-left">
                <div className="text-sm font-medium text-white">James Chen</div>
                <div className="text-xs text-neutral-500">Angel Investor, San Francisco</div>
              </div>
            </div>
          </div>
        </section>

        {/* Membership Section */}
        <section className="py-32 px-6 md:px-20 border-t border-white/10 bg-[#050505]">
          <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16">
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                  Membership
                </span>
              </div>
              <h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
                ACCESS
                <br />
                LEVELS
              </h2>
              <p className="text-neutral-400 text-sm leading-relaxed max-w-md">
                Unlock the full potential of HAUS. From casual browsing to
                institutional-grade analytics and off-market deal flow.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {/* Core Plan */}
              <div className="p-8 rounded-2xl border border-white/10 bg-white/5 flex flex-col hover:bg-white/10 transition-colors">
                <div className="mb-4 text-xs font-mono text-neutral-400 uppercase tracking-widest">
                  Core
                </div>
                <div className="text-3xl font-medium text-white mb-1">Free</div>
                <div className="text-xs text-neutral-500 mb-8">Forever</div>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-center gap-3 text-xs text-neutral-300">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    Global Search
                  </li>
                  <li className="flex items-center gap-3 text-xs text-neutral-300">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    Basic AI Insights
                  </li>
                  <li className="flex items-center gap-3 text-xs text-neutral-300">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    Public Data
                  </li>
                </ul>
                <button className="w-full py-3 rounded-lg border border-white/20 text-xs font-bold uppercase tracking-widest text-white hover:bg-white hover:text-black transition-colors">
                  Current Plan
                </button>
              </div>

              {/* Pro Plan */}
              <div className="p-8 rounded-2xl border border-indigo-500/30 bg-gradient-to-b from-indigo-900/10 to-transparent flex flex-col relative overflow-hidden group">
                <div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="mb-4 text-xs font-mono text-indigo-400 uppercase tracking-widest flex justify-between">
                  <span>Private Office</span>
                  <Crown className="w-3 h-3" />
                </div>
                <div className="text-3xl font-medium text-white mb-1">$49</div>
                <div className="text-xs text-neutral-500 mb-8">/month</div>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-center gap-3 text-xs text-neutral-300">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    Everything in Core
                  </li>
                  <li className="flex items-center gap-3 text-xs text-neutral-300">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    Off-Market Access
                  </li>
                  <li className="flex items-center gap-3 text-xs text-neutral-300">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    Investment Analytics
                  </li>
                  <li className="flex items-center gap-3 text-xs text-neutral-300">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    Priority Support
                  </li>
                </ul>
                <button className="w-full py-3 rounded-lg bg-indigo-600 text-xs font-bold uppercase tracking-widest text-white hover:bg-indigo-500 transition-colors">
                  Upgrade Now
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6 md:px-20 bg-[#050505] border-t border-white/10 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
              Ready to find your
              <br />
              <span className="text-indigo-400">dream home?</span>
            </h2>
            <p className="text-neutral-400 text-sm mb-10 max-w-lg mx-auto">
              Join thousands of buyers who have already discovered the future of
              real estate. Start your journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/search')}
                className="px-8 py-4 bg-white text-black rounded-lg text-sm font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors"
              >
                Start Searching
              </button>
              <button className="px-8 py-4 border border-white/20 text-white rounded-lg text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-colors">
                Watch Demo
              </button>
            </div>
          </div>
        </section>

        {/* Haus OS - Build the Future */}
        <section className="py-32 px-6 md:px-20 border-t border-white/10 bg-[#050505] overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/5 to-transparent"></div>
          <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
                  Haus OS
                </span>
              </div>
              <h2 className="font-['Space_Grotesk'] text-4xl md:text-6xl font-medium tracking-tight text-white mb-6">
                BUILD THE
                <br />
                FUTURE
              </h2>
              <p className="text-lg text-neutral-400 font-light mb-8 max-w-md">
                Access our proprietary valuation engine, market data stream, and
                transaction infrastructure via a unified GraphQL API.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 rounded-lg bg-indigo-600 text-white text-xs font-bold uppercase tracking-widest hover:bg-indigo-500 transition-colors shadow-[0_0_20px_rgba(79,70,229,0.3)]">
                  Read Docs
                </button>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-[#0A0A0A] border border-white/10 rounded-xl p-6 font-mono text-xs leading-relaxed text-neutral-400 shadow-2xl">
                <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                  <span className="ml-2 text-[10px] text-neutral-600">
                    query.graphql
                  </span>
                </div>
                <div className="space-y-1">
                  <div>
                    <span className="text-purple-400">query</span>
                    <span className="text-yellow-200">GetPropertyValuation</span>
                    {`{`}
                  </div>
                  <div className="pl-4">
                    <span className="text-indigo-300">property</span>
                    (id:
                    <span className="text-green-400">"prop_8x92m..."</span>
                    ) {`{`}
                  </div>
                  <div className="pl-8">
                    <span className="text-indigo-300">address</span>
                    {`{`}
                  </div>
                  <div className="pl-12">street</div>
                  <div className="pl-12">city</div>
                  <div className="pl-8">{`}`}</div>
                  <div className="pl-8">
                    <span className="text-indigo-300">valuation</span>
                    {`{`}
                  </div>
                  <div className="pl-12">estimatedPrice</div>
                  <div className="pl-12">confidence</div>
                  <div className="pl-12">growth_1y_forecast</div>
                  <div className="pl-8">{`}`}</div>
                  <div className="pl-4">{`}`}</div>
                  <div>{`}`}</div>
                </div>

                <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center">
                  <span className="text-green-500">✓ 200 OK</span>
                  <span className="text-neutral-600">42ms</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="relative">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2700&auto=format&fit=crop"
            className="w-full h-full object-cover opacity-10 pointer-events-none grayscale"
            alt="Footer background"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center w-full max-w-4xl px-6 py-32">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-[10px] uppercase tracking-widest text-gray-300">
              Waitlist Active
            </span>
          </div>

          <a href="#" className="block group">
            <h2 className="font-['Space_Grotesk'] text-[10vw] leading-[0.8] font-medium tracking-tighter text-white group-hover:text-gray-300 transition-colors duration-500">
              GET STARTED
            </h2>
            <div className="h-[1px] w-0 group-hover:w-full bg-white/50 mx-auto transition-all duration-700 mt-4" style={{ transitionTimingFunction: 'cubic-bezier(0.16,1,0.3,1)' }}></div>
          </a>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 text-left border-t border-white/10 pt-12">
            <div className="flex flex-col gap-4">
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">
                Platform
              </span>
              <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
                Search
              </a>
              <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
                Analytics
              </a>
              <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
                Agents
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">
                Company
              </span>
              <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
                About
              </a>
              <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
                Careers
              </a>
              <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
                Press
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">
                Legal
              </span>
              <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
                AUSTRAC
              </a>
            </div>
            <div className="flex flex-col justify-between">
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">
                © 2025
              </span>
              <div className="text-[10px] text-gray-600 uppercase tracking-widest">
                HAUS Group Pty Ltd
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
