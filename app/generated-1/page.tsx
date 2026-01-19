"use client"

import React, { useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Menu,
  ArrowRight,
  Box,
  Layers,
  Command,
  Zap,
  Globe,
  Activity,
  Shield,
  Eye,
  Quote,
} from "lucide-react"

// Animated reveal wrapper component
const Reveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
      animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.8, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function LuminalStudioPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200 overflow-x-hidden selection:bg-red-500/30 selection:text-white">
      {/* Animated background aura */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black to-black opacity-90" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 z-10 w-full h-full pointer-events-none grid grid-cols-1 border-t border-white/10" />

      {/* HERO SECTION */}
      <section className="relative z-20 w-full grid grid-cols-1 md:grid-cols-4 min-h-screen">
        {/* Hero Item 1 */}
        <div className="flex flex-col md:p-8 md:border-b-0 group border-white/10 border-b pt-6 pr-6 pb-6 pl-6 relative justify-between">
          <div className="absolute right-0 top-0 h-full w-[1px] bg-white/10 hidden md:block overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-transparent via-red-500 to-transparent animate-beam opacity-75" />
          </div>
          <div className="absolute -right-[5px] -top-[5px] text-white/30 text-xs hidden md:block z-20">+</div>

          <div className="flex flex-col gap-1">
            <span className="text-sm tracking-wide text-zinc-400 font-medium">LUMINAL STUDIO</span>
          </div>

          <div className="mt-auto mb-12 max-w-xs">
            <Reveal>
              <p className="text-lg text-zinc-300 leading-relaxed font-normal">
                Creative studio crafting brands, products, and digital experiences that stand out and move the world forward.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Hero Item 2 */}
        <div className="flex flex-col md:p-8 md:border-b-0 group border-white/10 border-b pt-6 pr-6 pb-6 pl-6 relative justify-between">
          <div className="absolute right-0 top-0 h-full w-[1px] bg-white/10 hidden md:block overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-transparent via-red-500 to-transparent animate-beam opacity-75" style={{ animationDelay: "1.5s" }} />
          </div>
          <div className="absolute -right-[5px] -top-[5px] text-white/30 text-xs hidden md:block z-20">+</div>
        </div>

        {/* Hero Item 3 */}
        <div className="flex flex-col justify-between p-6 md:p-8 border-b md:border-b-0 border-white/10 relative group">
          <div className="absolute right-0 top-0 h-full w-[1px] bg-white/10 hidden md:block overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-transparent via-red-500 to-transparent animate-beam opacity-75" style={{ animationDelay: "3s" }} />
          </div>
          <div className="absolute -right-[5px] -top-[5px] text-white/30 text-xs hidden md:block z-20">+</div>
        </div>

        {/* Hero Item 4 */}
        <div className="flex flex-col justify-between p-6 md:p-8 relative">
          <div className="flex justify-end md:justify-start">
            <button className="flex items-center gap-2 text-sm text-white font-medium hover:text-zinc-300 transition-colors uppercase tracking-widest">
              Menu <Menu className="w-4 h-4" />
            </button>
          </div>

          <div className="hidden md:flex md:justify-start mt-auto mb-12 items-end justify-end">
            <Reveal delay={0.2}>
              <div className="relative group cursor-pointer">
                <div className="absolute -inset-[1px] rounded-md bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_300deg,#ef4444_360deg)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-border-spin blur-[0.5px]" />
                <div className="relative bg-zinc-900 border border-red-500/20 text-zinc-300 px-5 py-2.5 rounded-md flex items-center gap-3 shadow-lg shadow-red-500/5 h-full w-full group-hover:text-red-400 group-hover:border-red-500/50 transition-all duration-300">
                  <span className="text-sm font-medium tracking-[0.2em] uppercase">View Work</span>
                  <ArrowRight className="w-[18px] h-[18px] text-zinc-500 group-hover:text-red-400 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Big Center Title */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-10 pointer-events-none hidden md:block">
          <Reveal delay={0.4}>
            <h1 className="text-[clamp(3rem,16vw,24rem)] leading-none text-white tracking-tighter mix-blend-overlay opacity-90 font-syne font-medium">
              LUMINAL
            </h1>
          </Reveal>
        </div>
      </section>

      {/* LOGO MARQUEE SECTION */}
      <section className="z-20 overflow-hidden bg-zinc-950 w-full border-white/10 border-t relative">
        <div className="flex z-0 overflow-hidden py-10 relative items-center">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />

          <div className="flex gap-20 animate-marquee-infinite whitespace-nowrap min-w-full">
            {[...Array(2)].map((_, groupIdx) => (
              <div key={groupIdx} className="flex items-center gap-20 shrink-0">
                {[
                  { icon: Layers, name: "Layers" },
                  { icon: Command, name: "Command" },
                  { icon: Box, name: "Modules" },
                  { icon: Zap, name: "Energy" },
                  { icon: Box, name: "Vertex" },
                  { icon: Activity, name: "Pulse" },
                  { icon: Globe, name: "Global" },
                ].map((logo, idx) => (
                  <div
                    key={`${groupIdx}-${idx}`}
                    className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity duration-300"
                  >
                    <logo.icon className="w-7 h-7" strokeWidth={1.5} />
                    <span className="text-lg font-semibold tracking-tight text-white font-syne">{logo.name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES DETAIL SECTION */}
      <section className="z-20 bg-zinc-950 w-full border-white/10 border-t relative">
        <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
          <div className="md:col-span-1 flex flex-col min-h-[400px] h-full p-8 justify-between">
            <div>
              <span className="font-mono text-zinc-600 text-xs block mb-4">///</span>
              <Reveal delay={0.1}>
                <h2 className="text-3xl font-syne tracking-tight text-white mb-4 font-medium">Capabilities</h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                  We build brands that lead, products that perform, and strategies that deliver measurable results.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.3}>
              <button className="w-max px-6 py-3 border border-white/10 rounded-full text-xs font-medium uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                All Services
              </button>
            </Reveal>
          </div>

          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 divide-y divide-x divide-white/10">
            {/* Service 1: Branding */}
            <div className="group flex flex-col hover:bg-white/[0.02] transition-colors duration-500 pt-8 pr-8 pb-8 pl-8 relative">
              <div className="aspect-video overflow-hidden flex flex-col group cursor-pointer transition-all duration-500 hover:bg-zinc-900 hover:border-white/10 bg-zinc-900/50 w-full border-white/5 border rounded mb-8 relative items-center justify-center">
                <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />
                <svg viewBox="0 0 200 160" className="w-64 h-auto drop-shadow-2xl transform transition-transform duration-700 ease-out group-hover:scale-110">
                  <defs>
                    <linearGradient id="cube-light-top" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="100%" stopColor="#d4d4d4" />
                    </linearGradient>
                    <linearGradient id="cube-light-left" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#a3a3a3" />
                      <stop offset="100%" stopColor="#737373" />
                    </linearGradient>
                    <linearGradient id="cube-light-right" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#737373" />
                      <stop offset="100%" stopColor="#525252" />
                    </linearGradient>
                  </defs>
                  <g className="transition-transform duration-500 ease-out group-hover:translate-y-3" transform="translate(100, 108)">
                    <path d="M0,-14 L24,0 L0,14 L-24,0 Z" className="fill-zinc-700/80" />
                    <path d="M-24,0 L0,14 V40 L-24,26 Z" className="fill-zinc-800" />
                    <path d="M0,14 L24,0 V26 L0,40 Z" className="fill-zinc-900" />
                  </g>
                  <g className="transition-transform duration-500 ease-out group-hover:-translate-x-3 group-hover:translate-y-1" transform="translate(56, 82)">
                    <path d="M0,-14 L24,0 L0,14 L-24,0 Z" className="fill-zinc-700/80" />
                    <path d="M-24,0 L0,14 V40 L-24,26 Z" className="fill-zinc-800" />
                    <path d="M0,14 L24,0 V26 L0,40 Z" className="fill-zinc-900" />
                  </g>
                  <g className="transition-transform duration-500 ease-out group-hover:translate-x-3 group-hover:translate-y-1" transform="translate(144, 82)">
                    <path d="M0,-14 L24,0 L0,14 L-24,0 Z" className="fill-zinc-700/80" />
                    <path d="M-24,0 L0,14 V40 L-24,26 Z" className="fill-zinc-800" />
                    <path d="M0,14 L24,0 V26 L0,40 Z" className="fill-zinc-900" />
                  </g>
                  <g className="transition-transform duration-500 ease-out group-hover:-translate-y-3" transform="translate(100, 56)">
                    <circle cx="0" cy="10" r="30" className="fill-white/5 blur-xl" />
                    <path d="M0,-14 L24,0 L0,14 L-24,0 Z" fill="url(#cube-light-top)" />
                    <path d="M-24,0 L0,14 V40 L-24,26 Z" fill="url(#cube-light-left)" />
                    <path d="M0,14 L24,0 V26 L0,40 Z" fill="url(#cube-light-right)" />
                    <path d="M-24,0 L0,-14 L24,0" fill="none" className="stroke-white/40 stroke-[0.5]" />
                    <path d="M0,14 V40" fill="none" className="stroke-white/20 stroke-[0.5]" />
                  </g>
                </svg>
              </div>
              <div className="flex flex-col flex-grow">
                <span className="font-mono text-red-500 text-xs block mb-3">01</span>
                <Reveal>
                  <h3 className="text-xl text-white font-medium uppercase tracking-widest mb-3">Branding</h3>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">Forging distinct visual identities that resonate.</p>
                </Reveal>
              </div>
              <div className="mt-auto pt-6 border-t border-white/5">
                <span className="text-xs text-zinc-500 group-hover:text-white transition-colors flex items-center gap-2">
                  Explore Identity
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </div>
            </div>

            {/* Service 2: Web Design */}
            <div className="group flex flex-col hover:bg-white/[0.02] transition-colors duration-500 pt-8 pr-8 pb-8 pl-8 relative">
              <div className="aspect-video overflow-hidden flex flex-col group select-none bg-zinc-950 w-full border-white/10 border rounded-xl mb-8 pt-6 pr-6 pb-6 pl-6 relative shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />
                <div className="flex items-center gap-2 mb-6 shrink-0 relative z-10">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F57] shadow-sm" />
                  <div className="w-3 h-3 rounded-full bg-[#FEBC2E] shadow-sm" />
                  <div className="w-3 h-3 rounded-full bg-[#28C840] shadow-sm" />
                </div>
                <div className="flex gap-5 w-full h-full min-h-0 relative z-10">
                  <div className="w-[28%] h-full bg-white/[0.02] rounded-lg border border-white/[0.05] p-5 flex flex-col hover:bg-white/[0.03] hover:border-white/10 transition-all duration-500">
                    <div className="w-1/2 h-2 bg-white/10 rounded-full mb-3" />
                    <div className="w-3/4 h-2 bg-white/10 rounded-full opacity-40 mb-8" />
                    <div className="w-1/3 h-1.5 bg-white/10 rounded-full mb-3 opacity-30" />
                    <div className="w-2/3 h-1.5 bg-white/10 rounded-full mb-3 opacity-30" />
                    <div className="mt-auto w-full aspect-square bg-white/[0.04] rounded-md border border-white/[0.02]" />
                  </div>
                  <div className="flex-1 h-full flex flex-col gap-5 min-h-0">
                    <div className="flex-1 bg-white/[0.02] rounded-lg border border-white/[0.05] p-6 flex items-center gap-8 hover:bg-white/[0.03] hover:border-white/10 transition-all duration-500">
                      <div className="w-24 h-24 rounded-full bg-white/[0.07] shrink-0" />
                      <div className="flex flex-col gap-3 w-full max-w-sm">
                        <div className="w-2/5 h-2.5 bg-white/10 rounded-full" />
                        <div className="w-full h-2.5 bg-white/10 rounded-full opacity-40" />
                        <div className="flex gap-2 mt-2">
                          <div className="w-16 h-1.5 bg-white/10 rounded-full opacity-20" />
                          <div className="w-8 h-1.5 bg-white/10 rounded-full opacity-20" />
                        </div>
                      </div>
                    </div>
                    <div className="h-[42%] flex gap-5">
                      <div className="flex-1 bg-white/[0.02] rounded-lg border border-white/[0.05] p-6 flex flex-col justify-end gap-3 hover:bg-white/[0.03] hover:border-white/10 transition-all duration-500">
                        <div className="w-1/2 h-2 bg-white/10 rounded-full" />
                        <div className="w-3/4 h-2 bg-white/10 rounded-full opacity-40" />
                      </div>
                      <div className="flex-1 bg-white/[0.02] rounded-lg border border-white/[0.05] p-6 flex flex-col justify-end gap-3 hover:bg-white/[0.03] hover:border-white/10 transition-all duration-500">
                        <div className="w-2/3 h-2 bg-white/10 rounded-full" />
                        <div className="w-1/3 h-2 bg-white/10 rounded-full opacity-40" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col flex-grow">
                <span className="font-mono text-red-500 text-xs block mb-3">02</span>
                <Reveal>
                  <h3 className="text-xl text-white font-medium uppercase tracking-widest mb-3">Web Design</h3>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">Crafting immersive digital environments.</p>
                </Reveal>
              </div>
              <div className="mt-auto pt-6 border-t border-white/5">
                <span className="text-xs text-zinc-500 group-hover:text-white transition-colors flex items-center gap-2">
                  View Case Studies
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </div>
            </div>

            {/* Service 3: Product */}
            <div className="group flex flex-col hover:bg-white/[0.02] transition-colors duration-500 pt-8 pr-8 pb-8 pl-8 relative">
              <div className="aspect-video overflow-hidden flex group bg-zinc-900/50 w-full border-white/5 border rounded mb-8 relative items-center justify-center">
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-red-600/20 blur-[90px] rounded-full pointer-events-none" />
                <div className="absolute top-0 left-1/3 w-1/2 h-1/3 bg-orange-600/10 blur-[60px] rounded-full pointer-events-none" />
                <div className="relative w-[90%] md:w-[85%] h-auto min-h-[70%] bg-[#0A0A0B] rounded-xl border border-white/10 shadow-2xl overflow-hidden flex flex-col font-mono text-xs sm:text-sm backdrop-blur-sm">
                  <div className="h-10 border-b border-white/5 flex items-center px-4 gap-2 bg-white/[0.02]">
                    <div className="w-3 h-3 rounded-full bg-zinc-700 shadow-sm" />
                    <div className="w-3 h-3 rounded-full bg-zinc-800 shadow-sm" />
                    <div className="w-3 h-3 rounded-full bg-zinc-800 shadow-sm" />
                  </div>
                  <div className="flex-1 p-4 md:p-6 relative overflow-hidden bg-[#0A0A0B]">
                    <div className="absolute top-5 right-[15%] z-20 flex flex-col items-start pointer-events-none animate-pulse">
                      <div className="bg-zinc-800/90 backdrop-blur text-zinc-400 text-[10px] px-2 py-0.5 rounded-full border border-white/10 shadow-lg mb-0.5 whitespace-nowrap font-sans translate-x-3">
                        Michael
                      </div>
                    </div>
                    <div className="absolute top-[55%] left-[12%] z-20 flex flex-col items-end pointer-events-none">
                      <div className="bg-zinc-800/90 backdrop-blur text-zinc-400 text-[10px] px-2 py-0.5 rounded-full border border-white/10 shadow-lg mb-0.5 whitespace-nowrap font-sans -translate-x-3">
                        Sofia
                      </div>
                    </div>
                    <div className="flex gap-4 md:gap-6 relative z-10">
                      <div className="flex flex-col text-zinc-800 text-right select-none space-y-1.5 pt-0.5">
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div>
                        <div>6</div>
                        <div>7</div>
                      </div>
                      <div className="flex flex-col text-zinc-500 w-full space-y-1.5">
                        <div className="relative -mx-2 px-2 flex items-center">
                          <div className="absolute inset-0 bg-red-500/5 rounded border border-red-500/10 w-fit pr-10" />
                          <div className="relative z-10">
                            <span className="text-red-500">const</span>
                            <span className="text-zinc-300">m</span>
                            <span className="text-zinc-600">=</span>
                            <span className="text-red-500">new</span>
                            <span className="text-white">Monitor</span>
                            <span className="text-zinc-600">(</span>
                            <span className="text-zinc-500">&quot;ecom&quot;</span>
                            <span className="text-zinc-600">);</span>
                            <span className="inline-block w-[2px] h-4 bg-red-500 align-middle ml-0.5 animate-pulse rounded-full" />
                          </div>
                        </div>
                        <div>
                          <span className="text-red-500">const</span>
                          <span className="text-zinc-300">rt</span>
                          <span className="text-zinc-600">=</span>
                          <span className="text-zinc-300">m</span>
                          <span className="text-zinc-600">.</span>
                          <span className="text-white">metric</span>
                          <span className="text-zinc-600">(</span>
                          <span className="text-zinc-500">&quot;resp_time&quot;</span>
                          <span className="text-zinc-600">).</span>
                          <span className="text-white">mean</span>
                          <span className="text-zinc-600">();</span>
                        </div>
                        <div>
                          <span className="text-red-500">const</span>
                          <span className="text-zinc-300">er</span>
                          <span className="text-zinc-600">=</span>
                          <span className="text-zinc-300">m</span>
                          <span className="text-zinc-600">.</span>
                          <span className="text-white">metric</span>
                          <span className="text-zinc-600">(</span>
                          <span className="text-zinc-500">&quot;err_rate&quot;</span>
                          <span className="text-zinc-600">).</span>
                          <span className="text-white">last</span>
                          <span className="text-zinc-600">();</span>
                        </div>
                        <div className="h-5" />
                        <div>
                          <span className="text-red-500">if</span>
                          <span className="text-zinc-600">(</span>
                          <span className="text-zinc-300">rt</span>
                          <span className="text-zinc-600">&gt;</span>
                          <span className="text-red-400">250</span>
                          <span className="text-red-500">||</span>
                          <span className="text-zinc-300">er</span>
                          <span className="text-zinc-600">&gt;</span>
                          <span className="text-red-400">0.02</span>
                          <span className="text-zinc-600">)</span>
                        </div>
                        <div className="pl-4">
                          <span className="text-white">AutoScale</span>
                          <span className="text-zinc-600">.</span>
                          <span className="text-white">addInstance</span>
                          <span className="text-zinc-600">();</span>
                        </div>
                        <div className="h-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col flex-grow">
                <span className="font-mono text-red-500 text-xs block mb-3">03</span>
                <Reveal>
                  <h3 className="text-xl text-white font-medium uppercase tracking-widest mb-3">Product</h3>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">Functional systems for complex needs.</p>
                </Reveal>
              </div>
              <div className="mt-auto pt-6 border-t border-white/5">
                <span className="text-xs text-zinc-500 group-hover:text-white transition-colors flex items-center gap-2">
                  See Components
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </div>
            </div>

            {/* Service 4: Strategy */}
            <div className="group flex flex-col hover:bg-white/[0.02] transition-colors duration-500 p-8 relative">
              <div className="aspect-video overflow-hidden flex bg-zinc-900/50 w-full border-white/5 border rounded mb-8 relative select-none">
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-40 h-40 bg-red-500/5 blur-[50px] rounded-full pointer-events-none" />
                <div className="w-3/5 h-full flex flex-col p-5 border-r border-white/5 relative">
                  <div className="flex gap-4 mb-2 z-10">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-[1px] bg-zinc-700" />
                      <span className="text-[10px] font-medium text-zinc-500">Organic</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-[1px] bg-red-900/60" />
                      <span className="text-[10px] font-medium text-zinc-500">Social</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-[1px] bg-red-500" />
                      <span className="text-[10px] font-medium text-zinc-500">Direct</span>
                    </div>
                  </div>
                  <div className="flex-grow relative flex items-end justify-around pb-4 pt-4 px-2">
                    <div className="absolute inset-x-0 top-4 bottom-4 flex flex-col justify-between pointer-events-none opacity-20">
                      <div className="border-t border-dashed border-white/10 w-full h-px" />
                      <div className="border-t border-dashed border-white/10 w-full h-px" />
                      <div className="border-t border-dashed border-white/10 w-full h-px" />
                      <div className="border-t border-dashed border-white/10 w-full h-px" />
                    </div>
                    {["Jan", "Feb"].map((month, idx) => (
                      <div key={month} className="flex items-end gap-1 h-full w-[30%] relative group">
                        <div className="w-1/3 bg-zinc-700 h-[30%] rounded-t-[2px] group-hover:bg-zinc-600 transition-all duration-500" />
                        <div className="w-1/3 bg-red-900/60 h-[65%] rounded-t-[2px] group-hover:bg-red-900/80 transition-all duration-500" />
                        <div className="w-1/3 bg-red-500 h-[45%] rounded-t-[2px] shadow-[0_0_10px_rgba(239,68,68,0.3)] group-hover:h-[50%] transition-all duration-500" />
                        <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] text-zinc-600 font-medium">
                          {month}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-2/5 h-full flex flex-col justify-center p-5 bg-zinc-950/30">
                  <div className="flex flex-col gap-3.5">
                    {["Compact", "Animated", "Highlights", "Trend Lines", "Rounding", "Brand Clrs"].map((label, idx) => (
                      <div key={label} className="flex items-center justify-between group cursor-pointer">
                        <span
                          className={`text-[10px] font-medium ${idx >= 1 && idx <= 4 ? "text-white" : "text-zinc-400"} group-hover:text-white transition-colors`}
                        >
                          {label}
                        </span>
                        <div
                          className={`w-7 h-3.5 rounded-full relative transition-colors ${
                            idx >= 1 && idx <= 4
                              ? "bg-red-500/20 border border-red-500/50"
                              : "bg-zinc-800 group-hover:bg-zinc-700"
                          }`}
                        >
                          <div
                            className={`absolute top-0.5 w-2.5 h-2.5 rounded-full transition-all ${
                              idx >= 1 && idx <= 4 ? "right-0.5 bg-red-500 shadow-sm" : "left-0.5 bg-zinc-500"
                            }`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col flex-grow">
                <span className="font-mono text-red-500 text-xs block mb-3">04</span>
                <Reveal>
                  <h3 className="text-xl text-white font-medium uppercase tracking-widest mb-3">Strategy</h3>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">Data-driven roadmaps to navigate the future.</p>
                </Reveal>
              </div>
              <div className="mt-auto pt-6 border-t border-white/5">
                <span className="text-xs text-zinc-500 group-hover:text-white transition-colors flex items-center gap-2">
                  Our Methodology
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEXT BANNER SECTION */}
      <section className="relative z-20 w-full border-t border-white/10 bg-zinc-950 overflow-hidden">
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 w-full">
          <div className="hidden md:block" />
          <div className="md:col-span-3 flex items-center py-20 md:py-32 pl-6 pr-6 md:pl-8">
            <Reveal>
              <h2 className="text-5xl md:text-7xl lg:text-9xl font-syne tracking-tighter text-white leading-none font-medium">
                11 years in the game
              </h2>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ELEVATED FEATURES SECTION */}
      <section className="relative z-20 w-full border-t border-white/10 bg-zinc-950">
        <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
          <div className="p-8 md:col-span-1 flex flex-col justify-between h-full min-h-[400px]">
            <div>
              <span className="font-mono text-zinc-600 text-xs block mb-4">///</span>
              <Reveal delay={0.1}>
                <h2 className="text-3xl font-syne tracking-tight text-white mb-4 font-medium">Elevated Features</h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                  Crafted with precision to enhance your digital presence through cutting-edge technology.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.3}>
              <button className="w-max px-6 py-3 border border-white/10 rounded-full text-xs font-medium uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                Explore Features
              </button>
            </Reveal>
          </div>

          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 divide-y divide-white/10 md:divide-y-0 md:divide-x">
            {/* Feature 1: Fast Performance */}
            <div className="group pt-8 pr-8 pb-8 pl-8 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center mb-4 text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors">
                  <Zap className="w-5 h-5" />
                </div>
                <Reveal>
                  <h3 className="text-white font-medium mb-2">Fast Performance</h3>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="text-zinc-500 text-sm">Optimized for speed and efficiency.</p>
                </Reveal>
              </div>
              <div className="relative h-32 w-full flex items-end gap-1.5 mt-8">
                <div className="absolute -top-2 left-0 bg-zinc-900 border border-white/10 rounded px-2.5 py-1.5 flex items-center gap-1.5 shadow-xl transition-transform duration-300 group-hover:-translate-y-1 z-10 ring-1 ring-white/5">
                  <span className="text-white text-xs font-medium font-syne">87%</span>
                  <span className="text-red-500 text-[10px] font-bold">+</span>
                </div>
                {[60, 15, 80, 25, 100, 20, 70, 10, 45].map((height, idx) => (
                  <div
                    key={idx}
                    className={`w-full rounded-t-[2px] transition-all duration-500 ease-out ${
                      idx % 2 === 0
                        ? `bg-gradient-to-t from-red-500/10 to-red-500 opacity-80 group-hover:opacity-100 group-hover:h-[${height + 5}%]`
                        : "bg-white/5 group-hover:bg-white/10"
                    }`}
                    style={{ height: `${height}%`, transitionDelay: `${idx * 75}ms` }}
                  />
                ))}
              </div>
            </div>

            {/* Feature 2: Secure Core */}
            <div className="group pt-8 pr-8 pb-8 pl-8 flex flex-col justify-between h-full">
              <div className="relative z-10">
                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center mb-4 text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors">
                  <Shield className="w-5 h-5" />
                </div>
                <Reveal>
                  <h3 className="text-white font-medium mb-2">Secure Core</h3>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="text-zinc-500 text-sm">Built with security as a priority.</p>
                </Reveal>
              </div>
              <div className="relative w-full h-32 mt-8 rounded bg-zinc-900/50 border border-white/5 overflow-hidden flex items-center justify-center group-hover:border-red-500/20 transition-colors duration-500">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:16px_16px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]" />
                <div className="relative flex items-center justify-center w-full h-full">
                  <svg className="absolute w-24 h-24 animate-[spin_10s_linear_infinite] opacity-30 group-hover:opacity-100 transition-opacity duration-500 text-zinc-600 group-hover:text-red-500" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="4" strokeDasharray="2 8" strokeLinecap="round" />
                  </svg>
                  <svg className="absolute w-16 h-16 animate-[spin_15s_linear_infinite_reverse] opacity-20 group-hover:opacity-60 transition-opacity duration-500 text-zinc-500 group-hover:text-red-400" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="1 6" strokeLinecap="round" />
                  </svg>
                  <div className="relative z-10 w-12 h-12 bg-zinc-950 rounded-xl border border-white/10 flex items-center justify-center shadow-2xl group-hover:border-red-500/50 group-hover:shadow-[0_0_25px_rgba(239,68,68,0.25)] transition-all duration-300 transform group-hover:scale-110">
                    <div className="absolute inset-0 bg-red-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                    <Shield className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors duration-300 relative z-10" />
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3: Scalable Design */}
            <div className="group pt-8 pr-8 pb-8 pl-8 flex flex-col justify-between h-full">
              <div className="relative z-10">
                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center mb-4 text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors">
                  <Eye className="w-5 h-5" />
                </div>
                <Reveal>
                  <h3 className="text-white font-medium mb-2">Scalable Design</h3>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="text-zinc-500 text-sm">Grows with your business needs.</p>
                </Reveal>
              </div>
              <div className="relative w-full h-32 mt-8 select-none pointer-events-none">
                <div className="absolute top-0 right-0 w-[90%] h-[90%] bg-zinc-900/40 border border-white/5 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-x-3 group-hover:-translate-y-2 ease-out" />
                <div className="absolute bottom-0 left-0 w-full h-[95%] bg-[#0A0A0B] border border-white/10 rounded-tl-xl rounded-tr-md flex flex-col overflow-hidden shadow-2xl group-hover:border-red-500/20 transition-all duration-500">
                  <div className="h-8 border-b border-white/5 bg-white/[0.01] flex items-center px-3 justify-between shrink-0">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 bg-gradient-to-br from-white to-zinc-500 rounded-[2px] opacity-80" />
                      <div className="h-1.5 w-10 bg-white/10 rounded-full" />
                    </div>
                  </div>
                  <div className="flex-1 relative p-3 flex flex-col justify-end">
                    <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                      <div className="h-1 w-6 bg-white/10 rounded-full" />
                      <div className="h-2 w-12 bg-white/5 rounded-full" />
                    </div>
                    <svg className="absolute inset-0 w-full h-[60%] overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 50">
                      <defs>
                        <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#ef4444" stopOpacity="0.2" />
                          <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path d="M0,40 Q15,45 30,25 T60,20 T85,10 L100,5 L100,50 L0,50 Z" fill="url(#chartFill)" className="text-red-500 transition-opacity duration-500 opacity-60 group-hover:opacity-80" />
                      <path d="M0,40 Q15,45 30,25 T60,20 T85,10 L100,5" fill="none" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_0_6px_rgba(239,68,68,0.6)]" vectorEffect="non-scaling-stroke" />
                      <g className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        <circle cx="85" cy="10" r="2.5" className="fill-[#0A0A0B] stroke-red-500 stroke-[1.5]" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTS SECTION */}
      <section className="relative z-20 w-full border-t border-white/10 bg-zinc-950">
        <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
          <div className="p-8 md:col-span-1 flex flex-col justify-between h-full min-h-[400px]">
            <div>
              <span className="font-mono text-zinc-600 text-xs block mb-4">///</span>
              <Reveal delay={0.1}>
                <h2 className="text-3xl font-syne tracking-tight text-white mb-4 font-medium">Client Voices</h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                  Hear from those who have transformed their digital landscape with us.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.3}>
              <button className="w-max px-6 py-3 border border-white/10 rounded-full text-xs font-medium uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                Read Stories
              </button>
            </Reveal>
          </div>

          <div className="md:col-span-3 relative overflow-hidden flex items-center bg-zinc-950">
            <div className="absolute left-0 top-0 bottom-0 w-32 z-20 bg-gradient-to-r from-zinc-950 to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 z-20 bg-gradient-to-l from-zinc-950 to-transparent pointer-events-none" />

            <div className="flex gap-6 py-12 animate-marquee-infinite w-max pl-8">
              {[
                {
                  quote: "The attention to detail and creative direction provided by Luminal Studio completely redefined our brand identity.",
                  author: "Alex Morgan",
                  role: "CEO, Apex Dynamics",
                  img: "https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=150&q=80",
                },
                {
                  quote: "A masterclass in design systems. The scalability and performance have exceeded our wildest expectations.",
                  author: "Sarah Chen",
                  role: "CTO, Nexus Corp",
                  img: "https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=150&q=80",
                },
                {
                  quote: "Transformation was instant. We saw metrics improve overnight thanks to the new user experience strategy.",
                  author: "Marcus Thorne",
                  role: "Director, Horizon Ventures",
                  img: "https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=150&q=80",
                },
              ].map((testimonial, idx) => (
                <React.Fragment key={idx}>
                  <div className="w-[480px] p-10 border border-white/5 bg-white/[0.02] rounded-2xl flex flex-col justify-between shrink-0 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300 group cursor-default">
                    <Quote className="w-8 h-8 text-zinc-700 mb-8 group-hover:text-red-500 transition-colors" />
                    <blockquote className="text-2xl text-zinc-200 font-light leading-snug mb-8 font-syne tracking-tight">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.img}
                        alt={testimonial.author}
                        className="w-12 h-12 rounded-full object-cover border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                      <div>
                        <div className="text-white text-sm font-medium">{testimonial.author}</div>
                        <div className="text-zinc-500 text-xs">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                  {/* Duplicate for seamless loop */}
                  {idx < 2 && (
                    <div className="w-[480px] p-10 border border-white/5 bg-white/[0.02] rounded-2xl flex flex-col justify-between shrink-0 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300 group cursor-default">
                      <Quote className="w-8 h-8 text-zinc-700 mb-8 group-hover:text-red-500 transition-colors" />
                      <blockquote className="text-2xl text-zinc-200 font-light leading-snug mb-8 font-syne tracking-tight">
                        &ldquo;{testimonial.quote}&rdquo;
                      </blockquote>
                      <div className="flex items-center gap-4">
                        <img
                          src={testimonial.img}
                          alt={testimonial.author}
                          className="w-12 h-12 rounded-full object-cover border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-300"
                        />
                        <div>
                          <div className="text-white text-sm font-medium">{testimonial.author}</div>
                          <div className="text-zinc-500 text-xs">{testimonial.role}</div>
                        </div>
                      </div>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="relative z-20 w-full border-t border-white/10 bg-zinc-950">
        <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
          <div className="p-8 md:col-span-1 flex flex-col justify-between h-full min-h-[400px]">
            <div>
              <span className="font-mono text-zinc-600 text-xs block mb-4">///</span>
              <Reveal delay={0.1}>
                <h2 className="text-3xl font-syne tracking-tight text-white mb-4 font-medium">Investment</h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                  Transparent pricing packages designed to scale with your ambitions.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.3}>
              <button className="w-max px-6 py-3 border border-white/10 rounded-full text-xs font-medium uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                View Plans
              </button>
            </Reveal>
          </div>

          <div className="p-8 md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Starter Plan */}
            <div className="p-6 border border-white/5 bg-white/5 rounded-lg hover:border-red-500/30 transition-colors">
              <Reveal>
                <h3 className="text-lg text-white font-medium mb-2">Starter</h3>
              </Reveal>
              <div className="text-3xl font-syne text-white mb-4 tracking-tight">$2,500</div>
              <ul className="space-y-3 mb-8">
                {["Brand Strategy", "Visual Identity", "UI/UX Design"].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-zinc-400">
                    <span className="text-red-500">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Reveal delay={0.2}>
                <button className="w-full py-3 bg-zinc-800 text-white text-xs uppercase tracking-widest hover:bg-red-500 transition-colors rounded">
                  Select Plan
                </button>
              </Reveal>
            </div>

            {/* Professional Plan */}
            <div className="p-6 border border-white/5 bg-white/5 rounded-lg hover:border-red-500/30 transition-colors relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-500 text-white text-[10px] uppercase font-bold px-2 py-1">
                Popular
              </div>
              <Reveal>
                <h3 className="text-lg text-white font-medium mb-2">Professional</h3>
              </Reveal>
              <div className="text-3xl font-syne text-white mb-4 tracking-tight">$5,000</div>
              <ul className="space-y-3 mb-8">
                {["All Starter Features", "Web Development", "CMS Integration"].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-zinc-400">
                    <span className="text-red-500">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Reveal delay={0.2}>
                <button className="w-full py-3 bg-white text-black text-xs uppercase tracking-widest hover:bg-red-500 hover:text-white transition-colors rounded">
                  Select Plan
                </button>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-20 w-full border-t border-white/10 bg-zinc-950">
        <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
          <div className="p-8 md:col-span-1 flex flex-col justify-between h-full min-h-[300px]">
            <div>
              <span className="font-mono text-zinc-600 text-xs block mb-4">///</span>
              <Reveal delay={0.1}>
                <h2 className="text-3xl font-syne tracking-tight text-white mb-4 font-medium">Connect</h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                  Ready to start your next project? Let&apos;s build something extraordinary together.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.3}>
              <button className="w-max px-6 py-3 bg-red-500 text-white rounded-full text-xs font-medium uppercase tracking-widest hover:bg-red-600 transition-colors">
                Contact Us
              </button>
            </Reveal>
          </div>

          <div className="p-8 md:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-white text-sm font-medium uppercase tracking-widest mb-6">Sitemap</h4>
              <ul className="space-y-4">
                {["Home", "Work", "Agency"].map((item, idx) => (
                  <li key={idx}>
                    <a href="#" className="text-zinc-500 text-sm hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white text-sm font-medium uppercase tracking-widest mb-6">Socials</h4>
              <ul className="space-y-4">
                {["Instagram", "Twitter", "LinkedIn"].map((item, idx) => (
                  <li key={idx}>
                    <a href="#" className="text-zinc-500 text-sm hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 md:col-span-2">
              <h4 className="text-white text-sm font-medium uppercase tracking-widest mb-6">Newsletter</h4>
              <form className="flex flex-col gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent border-b border-white/20 py-2 text-white text-sm focus:outline-none focus:border-red-500 transition-colors placeholder:text-zinc-700"
                />
                <Reveal>
                  <button type="submit" className="self-start text-xs text-zinc-400 uppercase tracking-widest hover:text-white transition-colors">
                    Subscribe
                  </button>
                </Reveal>
              </form>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-0">
          <div className="px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="text-zinc-600 text-xs">© 2024 Luminal Studio. All rights reserved.</span>
            <span className="text-zinc-600 text-xs">Designed with precision.</span>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes beam-drop {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(500%);
          }
        }
        .animate-beam {
          animation: beam-drop 5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        @keyframes border-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-border-spin {
          animation: border-spin 2s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee-infinite {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee-infinite:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
