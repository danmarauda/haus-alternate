import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import {
  Search, Menu, Mic, ArrowUp, Triangle, Circle, Hexagon, Square, Diamond,
  Sparkles, Bot, ShieldCheck, CheckCircle2, Glasses, TrendingUp, Users,
  BarChart2, Coffee, Train, Shield, Briefcase, Calculator, Code2,
  CreditCard, Ruler, Plane, ArrowRight, ArrowUpRight, Quote, User,
  Home, Heart, MessageCircle, Smartphone, Tablet, Crown, Check, Plus,
  Github,
} from "lucide-react";
import "@/styles/landing.css";

gsap.registerPlugin(ScrollTrigger);

const listings = [
  {
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1600&auto=format&fit=crop",
    tag: "New",
    match: 98,
    title: "Oceanview Modern Villa",
    location: "Malibu, CA",
    price: "$2.8M",
    beds: 4,
    baths: 3,
    sqft: "2,800",
  },
  {
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
    tag: "Verified",
    match: 94,
    title: "Skyline Penthouse",
    location: "Manhattan, NY",
    price: "$5.2M",
    beds: 3,
    baths: 2,
    sqft: "1,950",
  },
  {
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1600&auto=format&fit=crop",
    tag: "Open House",
    title: "Contemporary Townhouse",
    location: "Austin, TX",
    price: "$1.15M",
    beds: 3,
    baths: 3,
    sqft: "1,900",
  },
];

const markets = [
  { code: "NYC", name: "New York", listings: "1,240", growth: 2.4, progress: 80 },
  { code: "LDN", name: "London", listings: "980", growth: 1.1, progress: 65 },
  { code: "SYD", name: "Sydney", listings: "650", growth: 4.8, progress: 90 },
  { code: "DXB", name: "Dubai", listings: "2,100", growth: 12.5, progress: 95 },
];

const services = [
  { icon: Briefcase, title: "Legal & Tax", desc: "Structuring, compliance, and cross-border advisory optimization for global investors." },
  { icon: CreditCard, title: "Smart Financing", desc: "Asset-backed lending with approval in minutes, not weeks. Competitive rates for HNW individuals." },
  { icon: Ruler, title: "Design & Build", desc: "From architectural concepts to turn-key renovations. We manage the contractors, you enjoy the result." },
  { icon: Plane, title: "Relocation", desc: "Visa assistance, school enrollment, and logistics for international buyers moving to new markets." },
];

const articles = [
  { tag: "Trend", date: "Oct 24", title: "The Shift to Suburban Luxury", desc: "Why high-net-worth individuals are leaving city centers for curated perimeter estates." },
  { tag: "Fintech", date: "Oct 20", title: "Tokenized Real Estate Assets", desc: "Understanding the fractional ownership model and liquidity premium in 2025." },
  { tag: "Design", date: "Oct 12", title: "Biophilic Design Trends", desc: "How integration with nature is becoming the #1 requested feature for new builds." },
];

const changelog = [
  { version: "v2.4.0", title: "Neural Search v2.0", date: "Oct 24", desc: "Introduced semantic search capabilities allowing natural language queries (e.g., \"homes with good light for painting\").", active: true },
  { version: "v2.3.1", title: "Predictive Valuation", date: "Oct 18", desc: "Improved accuracy of the valuation algorithm by 14% in high-density urban areas. Added confidence intervals to all price estimates.", active: false },
  { version: "v2.3.0", title: "Mobile Dark Mode", date: "Oct 12", desc: "Complete overhaul of contrast ratios for better accessibility. Optimized specifically for OLED displays on mobile devices.", active: false },
];

const faqs = [
  { q: "How accurate is the valuation AI?", a: "Our model, trained on 50M+ historical transaction points, currently holds a Median Absolute Percentage Error (MdAPE) of 2.1% in Tier 1 cities, significantly outperforming traditional appraisals." },
  { q: "Is HAUS available for agents?", a: "Yes. We offer HAUS Pro for verified agents, providing access to our CRM, predictive lead generation, and automated marketing suite." },
  { q: "How do you handle privacy?", a: "We use zero-knowledge proofs for verifying funds and identity without storing sensitive documents. Your search history is encrypted locally." },
];

export default function Landing() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
    });

    function raf(time: number) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const splitTextElements = document.querySelectorAll(".split-animate");
    splitTextElements.forEach((el) => {
      const text = el.textContent || "";
      const words = text.split(" ");
      el.innerHTML = "";
      words.forEach((word) => {
        const wordWrap = document.createElement("span");
        wordWrap.classList.add("word-wrap");
        wordWrap.innerHTML = `<span class="word-inner">${word}&nbsp;</span>`;
        el.appendChild(wordWrap);
      });
    });

    const loadTl = gsap.timeline({
      onComplete: () => {
        document.body.style.opacity = "1";
        initAnimations();
      },
    });

    loadTl
      .to(".loader-line", { width: "100%", duration: 1.2, ease: "power2.inOut" })
      .to(".loader-text", { y: -20, opacity: 0, duration: 0.6, ease: "power2.in" }, "-=0.2")
      .to(".loader", { clipPath: "inset(0 0 100% 0)", duration: 0.8, ease: "power4.inOut" });

    function initAnimations() {
      const heroTl = gsap.timeline();
      heroTl
        .to(".hero-title-wrap span", { y: 0, stagger: 0.1, duration: 1.4, ease: "power3.out" })
        .to(".hero-fade", { opacity: 1, duration: 1, stagger: 0.2 }, "-=0.5");

      gsap.to(".hero-img", {
        yPercent: 20,
        scale: 1.1,
        ease: "none",
        scrollTrigger: { trigger: ".hero-img-wrap", start: "top top", end: "bottom top", scrub: true },
      });

      document.querySelectorAll(".split-animate").forEach((el) => {
        const words = el.querySelectorAll(".word-inner");
        gsap.to(words, {
          y: "0%",
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.015,
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });

      const cards = gsap.utils.toArray<HTMLElement>(".card-item");
      cards.forEach((card, i) => {
        const inner = card.querySelector(".card-inner");
        const nextCard = cards[i + 1];
        if (nextCard && inner) {
          gsap.to(inner, {
            scale: 0.95,
            y: -40,
            opacity: 0.5,
            ease: "none",
            scrollTrigger: { trigger: nextCard, start: "top bottom", end: "top 10vh", scrub: true },
          });
        }
      });

      gsap.from(".footer-sticky > div", {
        y: 100,
        opacity: 0,
        scrollTrigger: { trigger: ".wrapper", start: "bottom bottom", end: "bottom 50%", scrub: 1 },
      });
    }

    return () => {
      lenisRef.current?.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="landing-page">
      <div className="fixed inset-0 z-0 w-full h-full pointer-events-none noise-bg" />

      <div className="loader">
        <div className="loader-text tracking-tight">HAUS</div>
        <div className="loader-line" />
      </div>

      <div className="wrapper">
        {/* Hero */}
        <section className="h-screen relative flex flex-col items-center justify-center overflow-hidden">
          <div className="absolute inset-0 w-full h-full hero-img-wrap">
            <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1600&auto=format&fit=crop" className="w-full h-[120%] object-cover brightness-[0.7] hero-img" alt="Modern Architecture" />
          </div>
          <div className="relative z-10 text-center text-white px-4 w-full max-w-5xl">
            <div className="flex items-center justify-center gap-2 mb-6 hero-fade opacity-0">
              <span className="px-3 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-[10px] uppercase tracking-widest font-medium">Early Access v1.0</span>
            </div>
            <h1 className="font-display text-[13vw] leading-[0.8] tracking-tighter overflow-hidden hero-title-wrap">
              <span className="block translate-y-full">THE NEW</span>
            </h1>
            <div className="flex items-center justify-center gap-4 md:gap-8 overflow-hidden hero-title-wrap">
              <h1 className="font-display text-[13vw] leading-[0.8] tracking-tighter text-white">
                <span className="block translate-y-full">HOME OF</span>
              </h1>
            </div>
            <div className="overflow-hidden hero-title-wrap">
              <h1 className="font-display text-[13vw] leading-[0.8] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
                <span className="block translate-y-full">HOMES</span>
              </h1>
            </div>
            <p className="mt-8 text-sm md:text-base font-light text-white/80 max-w-lg mx-auto opacity-0 hero-fade">
              Curated properties. Powerful search. Expert support.<br />AI-native real estate for the modern era.
            </p>
            <div className="mt-12 mx-auto max-w-md w-full glass-panel rounded-2xl p-2 flex items-center gap-3 opacity-0 hero-fade transform translate-y-4">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-black shrink-0">
                <Mic className="w-5 h-5" />
              </div>
              <div className="flex-1 text-left">
                <div className="text-xs text-white/60 font-medium">Try asking...</div>
                <div className="text-sm text-white font-medium">"3 bed house in Melbourne with a pool"</div>
              </div>
              <div className="px-3 py-1.5 bg-white/10 rounded-lg text-[10px] font-medium uppercase tracking-wider text-white/70">Enter</div>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-3 opacity-0 hero-fade">
              <span className="text-[10px] text-neutral-600 uppercase tracking-widest pt-1.5 font-medium">Trending</span>
              {["Waterfront", "Off-market", "Penthouse"].map((tag) => (
                <button key={tag} className="px-3 py-1.5 rounded-full border border-white/5 bg-white/5 hover:bg-white/10 text-[10px] text-neutral-400 hover:text-white transition-colors">{tag}</button>
              ))}
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 hero-fade">
            <span className="text-[9px] uppercase tracking-widest text-white/30 font-medium">Explore</span>
            <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-32 px-6 md:px-20 max-w-[1600px] mx-auto bg-[#050505]">
          <div className="grid lg:grid-cols-12 gap-12 items-start border-b border-white/10 pb-24">
            <div className="lg:col-span-7">
              <h2 className="font-display text-4xl md:text-6xl font-medium leading-[1.05] tracking-tight split-animate text-white">
                A revolution in<br /><span className="text-neutral-500">real estate.</span> Search, invest, and buy in one platform.
              </h2>
            </div>
            <div className="lg:col-span-5 flex flex-col justify-between h-full pt-2">
              <div className="text-lg md:text-xl font-light text-neutral-400 leading-relaxed split-animate">
                No more checkbox hell. HAUS combines market expertise with a seamless, voice-first AI experience. We prioritize transparency, verified listings, and data-driven insights.
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {[
              { value: "12k+", label: "Active Listings", change: "+14%" },
              { value: "98%", label: "Satisfaction", change: "+2.4%" },
              { value: "$1B+", label: "Volume" },
              { value: "Zero", label: "Hidden Fees" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="flex items-end gap-2 mb-1">
                  <div className="text-3xl font-medium tracking-tight text-white">{stat.value}</div>
                  {stat.change && (
                    <div className="text-[10px] font-medium text-emerald-500 mb-1.5 flex items-center">
                      <ArrowUp className="w-2.5 h-2.5 mr-0.5" />{stat.change}
                    </div>
                  )}
                </div>
                <div className="text-xs text-neutral-500 uppercase tracking-widest font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Trusted By */}
        <section className="py-20 border-t border-white/10 bg-[#050505] relative z-10">
          <div className="px-6 md:px-20 max-w-[1400px] mx-auto">
            <p className="text-[10px] font-mono text-neutral-600 text-center mb-10 uppercase tracking-[0.2em]">Trusted by Industry Leaders</p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60">
              {[
                { Icon: Triangle, name: "VORTEX" },
                { Icon: Circle, name: "OBLIQUE" },
                { Icon: Hexagon, name: "NEXUS" },
                { Icon: Square, name: "QUARTZ" },
                { Icon: Diamond, name: "ÆON" },
              ].map(({ Icon, name }) => (
                <div key={name} className="flex items-center gap-2 group cursor-default">
                  <Icon className="w-5 h-5 text-white group-hover:text-indigo-400 transition-colors" />
                  <span className="text-lg font-bold tracking-tighter text-white group-hover:text-indigo-400 transition-colors">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Card Stack Section */}
        <section className="stack-section pb-32">
          <div className="px-6 md:px-20 mb-20">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">Platform Capabilities</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-white">INTELLIGENT<br />TOOLS</h2>
          </div>
          <div className="stack-container px-4 md:px-0">
            {/* Card 1: AI Assistant */}
            <div className="card-item">
              <div className="card-inner">
                <div className="card-content">
                  <div className="w-full">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-mono text-gray-400">01 / 03</span>
                      <Sparkles className="w-5 h-5 text-gray-800" />
                    </div>
                    <h3 className="font-display text-3xl font-medium tracking-tight mt-6 text-white">AI PROPERTY ASSISTANT</h3>
                    <p className="text-xs font-medium text-neutral-400 uppercase tracking-widest mt-2">GPT-4 Powered</p>
                  </div>
                  <div className="space-y-6">
                    <p className="text-sm text-gray-600 leading-relaxed font-light">Analyze investment potential, draft offer letters, and compare listings instantly. Your 24/7 expert.</p>
                    <div className="flex gap-2">
                      <span className="px-3 py-1 bg-gray-100 rounded-md text-[10px] uppercase tracking-wider font-medium text-gray-600">Market Trends</span>
                      <span className="px-3 py-1 bg-gray-100 rounded-md text-[10px] uppercase tracking-wider font-medium text-gray-600">Legal Drafting</span>
                    </div>
                  </div>
                </div>
                <div className="card-img-wrap flex items-center justify-center bg-neutral-900 p-12">
                  <div className="w-full max-w-sm bg-neutral-950 rounded-xl shadow-2xl border border-white/10 p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400"><Bot className="w-4 h-4" /></div>
                      <div className="text-sm font-medium text-white">HAUS AI</div>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-white/5 p-3 rounded-lg rounded-tl-none text-xs text-neutral-400 leading-relaxed">Based on the 12-month forecast, this property has a projected ROI of +12.4%. Rental yield is above suburb average.</div>
                      <div className="h-2 w-24 bg-white/10 rounded animate-pulse" />
                    </div>
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <div className="flex gap-2">
                        <div className="flex-1 h-8 bg-white/5 rounded-lg border border-white/10" />
                        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-black"><ArrowUp className="w-4 h-4" /></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Fair Play */}
            <div className="card-item">
              <div className="card-inner">
                <div className="card-content">
                  <div className="w-full">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-mono text-gray-400">02 / 03</span>
                      <ShieldCheck className="w-5 h-5 text-gray-800" />
                    </div>
                    <h3 className="font-display text-3xl font-medium tracking-tight mt-6">FAIR PLAY PROTOCOL</h3>
                    <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mt-2">Compliance Ready</p>
                  </div>
                  <div className="space-y-6">
                    <p className="text-sm text-gray-600 leading-relaxed font-light">No underquoting. No dodgy tactics. We detect price anomalies and verify every document automatically.</p>
                    <div className="flex gap-2">
                      <span className="px-3 py-1 bg-gray-100 rounded-md text-[10px] uppercase tracking-wider font-medium text-gray-600">AUSTRAC Certified</span>
                      <span className="px-3 py-1 bg-gray-100 rounded-md text-[10px] uppercase tracking-wider font-medium text-gray-600">ID Check</span>
                    </div>
                  </div>
                </div>
                <div className="card-img-wrap flex items-center justify-center bg-neutral-900 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
                  <div className="bg-neutral-950 p-6 rounded-xl shadow-2xl border border-white/10 w-64 z-10">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-xs font-medium text-neutral-500">Risk Score</span>
                      <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">LOW</span>
                    </div>
                    <div className="space-y-3">
                      {["Identity", "Funds Source", "Ownership"].map((item) => (
                        <div key={item} className="flex justify-between items-center">
                          <span className="text-xs text-neutral-400">{item}</span>
                          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: 3D Tours */}
            <div className="card-item">
              <div className="card-inner">
                <div className="card-content">
                  <div className="w-full">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-mono text-gray-400">03 / 03</span>
                      <Glasses className="w-5 h-5 text-gray-800" />
                    </div>
                    <h3 className="font-display text-3xl font-medium tracking-tight mt-6">IMMERSIVE 3D</h3>
                    <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mt-2">NeRF • WebXR</p>
                  </div>
                  <div className="space-y-6">
                    <p className="text-sm text-gray-600 leading-relaxed font-light">Explore homes remotely with photorealistic tours. AI staging helps you visualize the potential of every room.</p>
                    <div className="flex gap-2">
                      <span className="px-3 py-1 bg-gray-100 rounded-md text-[10px] uppercase tracking-wider font-medium text-gray-600">VR Ready</span>
                      <span className="px-3 py-1 bg-gray-100 rounded-md text-[10px] uppercase tracking-wider font-medium text-gray-600">Spatial AI</span>
                    </div>
                  </div>
                </div>
                <div className="card-img-wrap">
                  <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop" className="card-img" alt="Interior 3D" />
                  <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-lg text-xs font-medium flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />Live View
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hyper-Local Intelligence */}
        <section className="py-32 px-6 md:px-20 bg-[#050505] border-t border-white/10">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">Market Pulse</span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-white split-animate">HYPER-LOCAL<br />INTELLIGENCE</h2>
              </div>
              <p className="text-sm text-neutral-400 max-w-md leading-relaxed">Don't just buy a home, buy into a future. Our predictive models analyze millions of data points to forecast neighborhood growth with 94% accuracy.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
              {/* Map Card */}
              <div className="md:col-span-2 md:row-span-2 relative bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden group">
                <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2400&auto=format&fit=crop" className="w-full h-full object-cover opacity-40 grayscale group-hover:scale-105 transition-transform duration-700" alt="Map area" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
                <div className="absolute top-1/3 left-1/4 bg-white text-black px-3 py-1.5 rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-110 cursor-default">
                  <div className="text-[10px] font-bold tracking-tight">+$124k (1yr)</div>
                  <div className="w-2 h-2 bg-white absolute -bottom-1 left-1/2 -translate-x-1/2 rotate-45" />
                </div>
                <div className="absolute top-1/2 right-1/3 bg-black/80 backdrop-blur border border-white/20 text-white px-3 py-1.5 rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-110 cursor-default">
                  <div className="text-[10px] font-bold tracking-tight">Top Rated School</div>
                </div>
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-xl font-medium text-white mb-1">Surry Hills, NSW</h3>
                  <div className="flex items-center gap-4 text-xs text-neutral-400">
                    <span className="flex items-center gap-1 text-emerald-400"><TrendingUp className="w-3 h-3" />+8.4% Growth</span>
                    <span className="flex items-center gap-1"><Users className="w-3 h-3" />High Demand</span>
                  </div>
                </div>
              </div>
              {/* Chart Card */}
              <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 flex flex-col justify-between group">
                <div className="flex justify-between items-start">
                  <span className="text-xs text-neutral-500 uppercase tracking-widest font-medium">Price Velocity</span>
                  <BarChart2 className="w-5 h-5 text-neutral-700 group-hover:text-white transition-colors" />
                </div>
                <div className="h-32 flex items-end justify-between gap-2 mt-4">
                  <div className="w-full bg-white/5 rounded-t group-hover:bg-white/10 transition-colors h-[40%]" />
                  <div className="w-full bg-white/5 rounded-t group-hover:bg-white/10 transition-colors h-[55%]" />
                  <div className="w-full bg-white/5 rounded-t group-hover:bg-white/10 transition-colors h-[45%]" />
                  <div className="w-full bg-white/5 rounded-t group-hover:bg-white/10 transition-colors h-[70%]" />
                  <div className="w-full bg-white/5 rounded-t group-hover:bg-white/10 transition-colors h-[60%]" />
                  <div className="w-full bg-emerald-500/20 rounded-t h-[85%] relative">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-emerald-500 text-black text-[9px] font-bold px-1.5 py-0.5 rounded">NOW</div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="text-2xl font-medium text-white tracking-tight">14 days</div>
                  <div className="text-xs text-neutral-500">Avg. time on market</div>
                </div>
              </div>
              {/* Score Card */}
              <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 flex flex-col justify-center gap-1">
                {[
                  { icon: Coffee, title: "Lifestyle", sub: "Cafes, Parks, Art", score: "9.8" },
                  { icon: Train, title: "Transit", sub: "Metro, Bus, Walk", score: "9.2" },
                  { icon: Shield, title: "Safety", sub: "Incident Reports", score: "9.5" },
                ].map((item, i) => (
                  <div key={item.title} className={`flex items-center justify-between py-3 ${i < 2 ? 'border-b border-white/5' : ''}`}>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center border border-white/5">
                        <item.icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">{item.title}</div>
                        <div className="text-[10px] text-neutral-500">{item.sub}</div>
                      </div>
                    </div>
                    <div className="text-lg font-bold text-emerald-400">{item.score}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Listings */}
        <section className="py-24 px-6 md:px-20 bg-[#050505]">
          <div className="flex justify-between items-end mb-12">
            <h2 className="font-display text-3xl font-medium tracking-tight text-white">FEATURED<br />LISTINGS</h2>
            <Link to="/" className="text-xs font-medium uppercase tracking-widest border-b border-white/20 pb-1 hover:border-white hover:text-white text-neutral-400 transition-colors">View All</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {listings.map((listing, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[4/3] bg-neutral-800 rounded-lg overflow-hidden mb-4 relative">
                  <img src={listing.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={listing.title} />
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur px-2 py-1 rounded text-[10px] font-medium uppercase tracking-wider text-white">{listing.tag}</div>
                  {listing.match && (
                    <div className="absolute top-3 right-3 bg-indigo-500/90 backdrop-blur-md border border-indigo-400/20 px-2 py-1 rounded text-[10px] font-semibold uppercase tracking-wider text-white flex items-center gap-1 shadow-lg">
                      <Sparkles className="w-2.5 h-2.5" />{listing.match}% Match
                    </div>
                  )}
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-sm text-white">{listing.title}</h3>
                    <p className="text-xs text-neutral-400 mt-1">{listing.location}</p>
                  </div>
                  <div className="text-sm font-medium text-white">{listing.price}</div>
                </div>
                <div className="flex gap-3 mt-3 text-xs text-neutral-500">
                  <span>{listing.beds} bd</span>•<span>{listing.baths} ba</span>•<span>{listing.sqft} sqft</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Access Levels / Membership */}
        <section className="py-32 px-6 md:px-20 border-t border-white/10 bg-[#050505]">
          <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16">
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">Membership</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">ACCESS<br />LEVELS</h2>
              <p className="text-neutral-400 text-sm leading-relaxed max-w-md">Unlock the full potential of HAUS. From casual browsing to institutional-grade analytics and off-market deal flow.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-8 rounded-2xl border border-white/10 bg-white/5 flex flex-col hover:bg-white/10 transition-colors">
                <div className="mb-4 text-xs font-mono text-neutral-400 uppercase tracking-widest">Core</div>
                <div className="text-3xl font-medium text-white mb-1">Free</div>
                <div className="text-xs text-neutral-500 mb-8">Forever</div>
                <ul className="space-y-4 mb-8 flex-1">
                  {["Global Search", "Basic AI Insights", "Public Data"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-xs text-neutral-300"><Check className="w-3.5 h-3.5 text-emerald-400" />{item}</li>
                  ))}
                </ul>
                <button className="w-full py-3 rounded-lg border border-white/20 text-xs font-bold uppercase tracking-widest text-white hover:bg-white hover:text-black transition-colors">Current Plan</button>
              </div>
              <div className="p-8 rounded-2xl border border-indigo-500/30 bg-gradient-to-b from-indigo-900/10 to-transparent flex flex-col relative overflow-hidden group">
                <div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="mb-4 text-xs font-mono text-indigo-400 uppercase tracking-widest flex justify-between">
                  <span>Private Office</span><Crown className="w-3 h-3" />
                </div>
                <div className="text-3xl font-medium text-white mb-1">$2,500</div>
                <div className="text-xs text-neutral-500 mb-8">/ month</div>
                <ul className="space-y-4 mb-8 flex-1 relative z-10">
                  {["Off-market Listings", "Wealth Advisory", "API Access", "Dedicated Agent"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-xs text-white"><Check className="w-3.5 h-3.5 text-indigo-400" />{item}</li>
                  ))}
                </ul>
                <button className="relative z-10 w-full py-3 rounded-lg bg-indigo-600 text-xs font-bold uppercase tracking-widest text-white hover:bg-indigo-500 transition-colors shadow-[0_0_20px_rgba(79,70,229,0.3)]">Apply for Access</button>
              </div>
            </div>
          </div>
        </section>

        {/* Glass Pavilion - Featured Property */}
        <section className="py-32 px-6 md:px-20 border-t border-white/10 bg-[#050505]">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-[1400px] mx-auto">
            <div className="grid grid-cols-2 gap-4 h-[500px] md:h-[600px]">
              <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden group">
                <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Main View" />
                <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-widest text-white">Exclusive</div>
              </div>
              <div className="rounded-2xl overflow-hidden hidden lg:block">
                <img src="https://images.unsplash.com/photo-1600566752355-35792bedcfe1?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" alt="Detail 1" />
              </div>
              <div className="rounded-2xl overflow-hidden hidden lg:block">
                <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" alt="Detail 2" />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">Live Auction • 2d 14h left</span>
              </div>
              <h2 className="font-display text-5xl md:text-6xl font-medium tracking-tighter text-white mb-4 leading-[0.9]">THE GLASS<br />PAVILION</h2>
              <p className="text-lg text-neutral-400 font-light mb-8 max-w-md">A masterwork of minimalism. Floor-to-ceiling glass, floating cantilevers, and a private botanical garden in the heart of Montecito.</p>
              <div className="grid grid-cols-3 gap-8 border-y border-white/10 py-8 mb-10">
                {[{ val: "5", label: "Bedrooms" }, { val: "6.5", label: "Bathrooms" }, { val: "8.4k", label: "Sq Ft" }].map((s) => (
                  <div key={s.label}>
                    <span className="block text-3xl font-medium text-white tracking-tight">{s.val}</span>
                    <span className="text-xs text-neutral-500 uppercase tracking-widest mt-1 block">{s.label}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-6">
                <button className="group bg-white text-black px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-indigo-500 hover:text-white transition-all duration-300 flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)]">
                  Place Bid<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                <div className="flex flex-col">
                  <span className="text-[10px] text-neutral-500 uppercase tracking-widest mb-0.5">Current Ask</span>
                  <span className="text-xl font-medium text-white">$14,500,000</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services - HAUS Private */}
        <section className="py-32 px-6 md:px-20 border-t border-white/10 bg-[#050505]">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-2 gap-20">
              <div className="lg:sticky lg:top-32 self-start">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">HAUS Private</span>
                </div>
                <h2 className="font-display text-5xl md:text-6xl font-medium tracking-tighter text-white mb-6 leading-[0.9] split-animate">BEYOND THE<br />TRANSACTION</h2>
                <p className="text-lg text-neutral-400 font-light max-w-md leading-relaxed mb-8">Access a curated ecosystem of partners. From instant liquidity to interior architecture, we manage the complexities of ownership so you don't have to.</p>
                <a href="#" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white border-b border-white/20 pb-1 hover:border-white transition-colors group">
                  Explore Services<ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
              <div className="flex flex-col gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
                {services.map((svc) => (
                  <div key={svc.title} className="group bg-[#0A0A0A] p-8 hover:bg-neutral-900 transition-colors duration-300 relative overflow-hidden cursor-pointer">
                    <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-4 group-hover:translate-x-0">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-violet-500/20 group-hover:text-violet-400 transition-colors">
                      <svc.icon className="w-5 h-5 text-neutral-400 group-hover:text-violet-400 transition-colors" />
                    </div>
                    <h3 className="font-display text-2xl text-white mb-2">{svc.title}</h3>
                    <p className="text-sm text-neutral-500 max-w-sm group-hover:text-neutral-400 transition-colors">{svc.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Market Intelligence / Editorial */}
        <section className="py-32 px-6 md:px-20 border-t border-white/10 bg-[#050505]">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">Editorial</span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-white">MARKET<br />INTELLIGENCE</h2>
              </div>
              <a href="#" className="text-xs font-medium uppercase tracking-widest border-b border-white/20 pb-1 hover:border-white hover:text-white text-neutral-400 transition-colors group flex items-center gap-1">
                Read All<ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
            <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
              {articles.map((art) => (
                <div key={art.title} className="bg-[#050505] p-10 hover:bg-neutral-900 transition-colors group cursor-pointer relative">
                  <div className="flex items-center justify-between mb-8">
                    <span className="px-2 py-1 rounded border border-white/10 text-[10px] uppercase tracking-wider text-neutral-400">{art.tag}</span>
                    <span className="text-[10px] text-neutral-500 font-mono">{art.date}</span>
                  </div>
                  <h3 className="text-2xl text-white font-medium mb-4 leading-tight group-hover:text-indigo-400 transition-colors">{art.title}</h3>
                  <p className="text-xs text-neutral-500 leading-relaxed mb-8">{art.desc}</p>
                  <div className="text-xs font-bold uppercase tracking-widest text-white flex items-center gap-2 group-hover:gap-3 transition-all">
                    Read<ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Quote */}
        <section className="py-32 flex flex-col items-center justify-center text-center px-6 border-t border-white/10 bg-[#050505]">
          <div className="max-w-3xl mx-auto">
            <Quote className="w-8 h-8 text-neutral-600 mx-auto mb-8" />
            <h3 className="font-display text-2xl md:text-3xl font-medium tracking-tight mb-8 leading-normal text-white">
              "HAUS's AI found me a property that wasn't even listed yet. The investment score was spot-on—I've seen 15% appreciation in just 8 months."
            </h3>
            <div className="flex flex-col items-center">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100" className="w-10 h-10 rounded-full mb-3 object-cover grayscale opacity-80" alt="Sarah Chen" />
              <div className="text-xs font-semibold uppercase tracking-widest text-white">Sarah Chen</div>
              <div className="text-xs font-medium text-neutral-500 mt-1">Chen Capital</div>
            </div>
          </div>
        </section>

        {/* Mobile App Section */}
        <section className="py-32 px-6 md:px-20 border-t border-white/10 bg-[#050505] overflow-hidden">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="order-2 lg:order-1 flex justify-center lg:justify-start relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-transparent blur-[80px] rounded-full pointer-events-none" />
                <div className="relative z-10 w-full max-w-[320px] bg-neutral-950 border border-white/10 rounded-[2.5rem] shadow-2xl p-3 rotate-[-6deg] hover:rotate-0 transition-all duration-700 group">
                  <div className="h-full w-full bg-black rounded-[2rem] overflow-hidden border border-white/5 relative aspect-[9/19]">
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20 flex items-center justify-center gap-2 px-2">
                      <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
                      <div className="text-[8px] text-white font-mono">HAUS LIVE</div>
                    </div>
                    <div className="pt-16 px-5 pb-5 h-full flex flex-col">
                      <div className="flex justify-between items-end mb-8">
                        <div>
                          <div className="text-[10px] text-neutral-400 uppercase tracking-wider">Total Assets</div>
                          <div className="text-2xl font-medium text-white">$4,280,000</div>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"><User className="w-4 h-4 text-white" /></div>
                      </div>
                      <div className="space-y-3 flex-1">
                        <div className="bg-neutral-900/80 p-4 rounded-xl border border-white/5 backdrop-blur-md">
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500" /><span className="text-[10px] text-indigo-300">New Match</span></div>
                            <span className="text-[10px] text-neutral-500">2m ago</span>
                          </div>
                          <div className="text-sm text-white font-medium">Penthouse in Tribeca</div>
                          <div className="text-[10px] text-neutral-400 mt-1">Off-market • $12.5M</div>
                        </div>
                        <div className="bg-neutral-900/50 p-4 rounded-xl border border-white/5">
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /><span className="text-[10px] text-emerald-300">Appreciation</span></div>
                          </div>
                          <div className="text-sm text-white font-medium">Bondi Beach Villa</div>
                          <div className="text-[10px] text-neutral-400 mt-1">Valuation up +4.2%</div>
                        </div>
                      </div>
                      <div className="bg-white/5 rounded-full p-1.5 grid grid-cols-4 gap-1 mt-4">
                        <div className="h-10 rounded-full bg-white/10 flex items-center justify-center text-white"><Home className="w-4 h-4" /></div>
                        <div className="h-10 rounded-full flex items-center justify-center text-neutral-500 hover:bg-white/5 transition-colors"><Search className="w-4 h-4" /></div>
                        <div className="h-10 rounded-full flex items-center justify-center text-neutral-500 hover:bg-white/5 transition-colors"><Heart className="w-4 h-4" /></div>
                        <div className="h-10 rounded-full flex items-center justify-center text-neutral-500 hover:bg-white/5 transition-colors"><MessageCircle className="w-4 h-4" /></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">Mobile Ecosystem</span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">THE MARKET IN<br />YOUR POCKET</h2>
                <p className="text-neutral-400 text-sm leading-relaxed max-w-md mb-8">Stay ahead of the curve with instant alerts for off-market listings, real-time valuation updates, and direct access to your advisory team.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex items-center justify-center sm:justify-start gap-3 px-6 py-3 bg-white text-black rounded-lg hover:bg-neutral-200 transition-colors group">
                    <Smartphone className="w-5 h-5" />
                    <div className="text-left leading-none">
                      <div className="text-[9px] uppercase tracking-wider font-bold opacity-60 mb-1">Download for</div>
                      <div className="text-xs font-bold">iOS</div>
                    </div>
                  </button>
                  <button className="flex items-center justify-center sm:justify-start gap-3 px-6 py-3 bg-neutral-900 text-white border border-white/10 rounded-lg hover:bg-neutral-800 transition-colors group">
                    <Tablet className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" />
                    <div className="text-left leading-none">
                      <div className="text-[9px] uppercase tracking-wider font-bold opacity-60 mb-1">Download for</div>
                      <div className="text-xs font-bold">Android</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Changelog */}
        <section className="py-32 px-6 md:px-20 border-t border-white/10 bg-[#050505]">
          <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">Changelog</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">SHIPPED<br />LATELY</h2>
              <p className="text-neutral-400 text-sm leading-relaxed max-w-sm mb-8">We ship daily. Transparency is core to our mission. Track platform updates, new features, and improvements.</p>
              <button className="px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white text-xs font-bold uppercase tracking-widest text-white hover:text-black transition-colors">View Full Log</button>
            </div>
            <div className="lg:col-span-8 relative">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10 md:left-4" />
              {changelog.map((item, i) => (
                <div key={item.version} className={`relative pl-8 md:pl-12 ${i < changelog.length - 1 ? 'pb-12' : ''}`}>
                  <div className={`absolute left-[-4px] md:left-[12px] top-1.5 w-2 h-2 rounded-full ${item.active ? 'bg-white' : 'bg-neutral-600'} ring-4 ring-black`} />
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-2">
                    <span className={`text-lg font-medium ${item.active ? 'text-white' : 'text-neutral-300'}`}>{item.title}</span>
                    <span className={`font-mono text-[10px] px-2 py-0.5 rounded ${item.active ? 'text-pink-400 bg-pink-500/10' : 'text-neutral-500 bg-white/5'}`}>{item.version}</span>
                    <span className="text-xs text-neutral-500">{item.date}</span>
                  </div>
                  <p className={`text-sm leading-relaxed max-w-xl ${item.active ? 'text-neutral-400' : 'text-neutral-500'}`}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Live Markets */}
        <section className="py-32 px-6 md:px-20 border-t border-white/10 bg-[#050505]">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">Coverage</span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-white">LIVE<br />MARKETS</h2>
              </div>
              <p className="text-sm text-neutral-400 max-w-md leading-relaxed">Real-time liquidity tracking across 12 major metropolises. We only launch in markets where our data density exceeds 95%.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
              {markets.map((market) => (
                <div key={market.code} className="bg-[#050505] p-8 hover:bg-neutral-900 transition-colors group">
                  <div className="flex justify-between items-start mb-12">
                    <span className="text-xs font-mono text-neutral-500">{market.code}</span>
                    <span className="flex items-center gap-1 text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                      <ArrowUpRight className="w-3 h-3" />{market.growth}%
                    </span>
                  </div>
                  <h3 className="text-xl text-white font-medium mb-1">{market.name}</h3>
                  <p className="text-xs text-neutral-500 mb-4">{market.listings} Active Listings</p>
                  <div className="w-full h-1 bg-neutral-800 rounded-full overflow-hidden">
                    <div className="h-full bg-cyan-500" style={{ width: `${market.progress}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-32 px-6 md:px-20 border-t border-white/10 bg-[#050505]">
          <div className="max-w-[1000px] mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-neutral-500" />
                <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">The Protocol</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-white">FREQUENTLY ASKED</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="group border border-white/10 rounded-2xl bg-white/5 p-6 hover:border-white/20 transition-all cursor-pointer">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium text-white">{faq.q}</h3>
                    <Plus className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors" />
                  </div>
                  <div className="max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-500 ease-in-out">
                    <p className="pt-4 text-sm text-neutral-400 leading-relaxed max-w-2xl">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA - Build the Future */}
        <section className="py-32 px-6 md:px-20 border-t border-white/10 bg-[#050505] overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/5 to-transparent" />
          <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">Haus OS</span>
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-medium tracking-tight text-white mb-6">BUILD THE<br />FUTURE</h2>
              <p className="text-lg text-neutral-400 font-light mb-8 max-w-md">Access our proprietary valuation engine, market data stream, and transaction infrastructure via a unified GraphQL API.</p>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 rounded-lg bg-indigo-600 text-white text-xs font-bold uppercase tracking-widest hover:bg-indigo-500 transition-colors shadow-[0_0_20px_rgba(79,70,229,0.3)]">Read Docs</button>
                <button className="px-6 py-3 rounded-lg border border-white/10 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-colors flex items-center gap-2"><Github className="w-4 h-4" />GitHub</button>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000" />
              <div className="relative bg-[#0A0A0A] border border-white/10 rounded-xl p-6 font-mono text-xs leading-relaxed text-neutral-400 shadow-2xl">
                <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                  <span className="ml-2 text-[10px] text-neutral-600">query.graphql</span>
                </div>
                <div className="space-y-1">
                  <div><span className="text-purple-400">query</span> <span className="text-yellow-200">GetPropertyValuation</span> {"{"}</div>
                  <div className="pl-4"><span className="text-indigo-300">property</span>(id: <span className="text-green-400">"prop_8x92m..."</span>) {"{"}</div>
                  <div className="pl-8"><span className="text-indigo-300">address</span> {"{"}</div>
                  <div className="pl-12">street</div>
                  <div className="pl-12">city</div>
                  <div className="pl-8">{"}"}</div>
                  <div className="pl-8"><span className="text-indigo-300">valuation</span> {"{"}</div>
                  <div className="pl-12">estimatedPrice</div>
                  <div className="pl-12">confidence</div>
                  <div className="pl-12">growth_1y_forecast</div>
                  <div className="pl-8">{"}"}</div>
                  <div className="pl-4">{"}"}</div>
                  <div>{"}"}</div>
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
      <footer className="footer-sticky">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2700&auto=format&fit=crop" className="w-full h-full object-cover opacity-10 pointer-events-none grayscale" alt="Footer background" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent" />
        </div>
        <div className="relative z-10 text-center w-full max-w-4xl px-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest text-gray-300">Waitlist Active</span>
          </div>
          <a href="#" className="block group">
            <h2 className="font-display text-[10vw] leading-[0.8] font-medium tracking-tighter text-white group-hover:text-gray-300 transition-colors duration-500">GET STARTED</h2>
            <div className="h-[1px] w-0 group-hover:w-full bg-white/50 mx-auto transition-all duration-700 mt-4" style={{ transitionTimingFunction: 'cubic-bezier(0.16,1,0.3,1)' }} />
          </a>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 text-left border-t border-white/10 pt-12">
            <div className="flex flex-col gap-4">
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">Platform</span>
              {["Search", "Analytics", "Agents"].map((item) => (<a key={item} href="#" className="text-xs text-gray-400 hover:text-white transition-colors">{item}</a>))}
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">Company</span>
              {["About", "Careers", "Press"].map((item) => (<a key={item} href="#" className="text-xs text-gray-400 hover:text-white transition-colors">{item}</a>))}
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">Legal</span>
              {["Terms", "Privacy", "AUSTRAC"].map((item) => (<a key={item} href="#" className="text-xs text-gray-400 hover:text-white transition-colors">{item}</a>))}
            </div>
            <div className="flex flex-col justify-between">
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">© 2025</span>
              <div className="text-[10px] text-gray-600 uppercase tracking-widest">HAUS Group Pty Ltd</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
