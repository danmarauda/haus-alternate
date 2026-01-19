"use client"

import React, { useEffect, useRef, useState } from "react"
import { ArrowRight, FileText, ChevronDown } from "lucide-react"

export default function AliasAEOSPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [state, setState] = useState({
    floors: 8,
    sizeLevel: 2,
    activeIndex: 0,
    expansion: 3.0,
    chaos: 1.0,
    visualFloors: 8,
  })

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Three.js initialization would go here
    // For now, we'll create a simplified canvas visualization
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas?.getContext("2d")
    if (!ctx) return

    // Simple animation loop
    let animationFrameId: number
    const animate = () => {
      // Clear canvas with dark background
      ctx.fillStyle = "#050505"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw simple block visualization
      const blockSize = 60
      const gap = 10
      const cols = 12
      const rows = 8

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * (blockSize + gap) + 50
          const y = row * (blockSize + gap) + 50

          // Create 3D block effect
          const opacity = 0.3 + Math.random() * 0.4
          ctx.fillStyle = `rgba(100, 100, 100, ${opacity})`
          ctx.fillRect(x, y, blockSize, blockSize)

          // Top highlight
          ctx.fillStyle = `rgba(150, 150, 150, ${opacity * 0.5})`
          ctx.fillRect(x, y, blockSize, blockSize * 0.3)

          // Side shadow
          ctx.fillStyle = `rgba(50, 50, 50, ${opacity * 0.5})`
          ctx.fillRect(x + blockSize * 0.7, y, blockSize * 0.3, blockSize)
        }
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [])

  const tiers = ["Low", "Low", "Mid", "High", "Ultra"]
  const sizes = ["Single", "Squad", "Platoon", "Hive"]

  return (
    <div className="relative w-full h-screen bg-[#050505] overflow-hidden">
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full z-[1] outline-none"
        style={{ width: "100%", height: "100%" }}
      />

      {/* Overlay for darkening */}
      <div
        className={`fixed inset-0 bg-black/85 z-[5] pointer-events-none transition-opacity duration-1000 ${
          state.activeIndex >= 1 && state.activeIndex <= 3 ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Concept Container - Shows UCE, MOSAIC, AWE */}
      <div
        className={`fixed inset-0 z-[20] pointer-events-none flex flex-col justify-center items-center p-8 md:p-20 transition-all duration-700 ${
          state.activeIndex >= 1 && state.activeIndex <= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 hidden"
        }`}
      >
        <div className="relative w-full max-w-4xl h-[400px]">
          {/* UCE Section */}
          <div
            className={`absolute inset-0 flex flex-col justify-center items-center md:items-start text-center md:text-left transition-all duration-700 ${
              state.activeIndex === 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                UCE
              </h2>
              <div className="px-3 py-1 rounded-full border border-white/30 text-xs tracking-widest uppercase text-white font-mono">
                Unified Context
              </div>
            </div>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-normal max-w-2xl drop-shadow-lg">
              The bedrock of intelligence. <strong className="text-white">Unified Context Engine</strong> ingests and
              normalizes enterprise data into a shared semantic reality. It ensures every agent and human operates from
              the exact same source of truth.
            </p>
            <div className="mt-8 flex gap-4 text-xs font-mono text-white/50">
              <span className="border border-white/20 px-2 py-1 rounded">Vector Memory</span>
              <span className="border border-white/20 px-2 py-1 rounded">Entity Resolution</span>
            </div>
          </div>

          {/* MOSAIC Section */}
          <div
            className={`absolute inset-0 flex flex-col justify-center items-center md:items-start text-center md:text-left transition-all duration-700 ${
              state.activeIndex === 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                MOSAIC
              </h2>
              <div className="px-3 py-1 rounded-full border border-white/30 text-xs tracking-widest uppercase text-white font-mono">
                Orchestration
              </div>
            </div>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-normal max-w-2xl drop-shadow-lg">
              Dynamic multi-agent synthesis. <strong className="text-white">MOSAIC</strong> decomposes complex objectives
              into executable workflows, handling the handoffs between specialized agents and human operators to get
              work done.
            </p>
            <div className="mt-8 flex gap-4 text-xs font-mono text-white/50">
              <span className="border border-white/20 px-2 py-1 rounded">Task Routing</span>
              <span className="border border-white/20 px-2 py-1 rounded">Collab Protocol</span>
            </div>
          </div>

          {/* AWE Section */}
          <div
            className={`absolute inset-0 flex flex-col justify-center items-center md:items-start text-center md:text-left transition-all duration-700 ${
              state.activeIndex === 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                AWE
              </h2>
              <div className="px-3 py-1 rounded-full border border-white/30 text-xs tracking-widest uppercase text-white font-mono">
                Safety Layer
              </div>
            </div>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-normal max-w-2xl drop-shadow-lg">
              Trust is architectural. <strong className="text-white">Agentic Work Environments</strong> provide the
              deterministic guardrails required for enterprise. Verifiable actions, deep audit trails, and
              human-in-the-loop governance.
            </p>
            <div className="mt-8 flex gap-4 text-xs font-mono text-white/50">
              <span className="border border-white/20 px-2 py-1 rounded">Permissioning</span>
              <span className="border border-white/20 px-2 py-1 rounded">Audit Log</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact/Initialize Container */}
      <div
        className={`fixed inset-0 z-[25] pointer-events-none flex flex-col items-center justify-center px-[40px] md:px-20 transition-all duration-700 ${
          state.activeIndex === 4
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none hidden"
        }`}
      >
        <div className="glass-panel w-full md:w-[480px] p-8 md:p-12 rounded-2xl shadow-2xl pointer-events-auto flex flex-col space-y-10 backdrop-blur-xl bg-black/60 border border-white/8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold text-white tracking-tight">System Ready</h2>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              The AEOS kernel is configured. UCE, MOSAIC, and AWE are aligned for deployment.
            </p>
          </div>

          <div className="flex flex-col space-y-4">
            <a
              href="#"
              className="group block p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all border border-white/5"
            >
              <div className="flex justify-between items-center">
                <span className="text-white font-medium">Initialize Workspace</span>
                <ArrowRight className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
              </div>
              <div className="text-xs text-white/40 mt-1">Bootstrapping UCE Instance...</div>
            </a>

            <a
              href="#"
              className="group block p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all border border-white/5"
            >
              <div className="flex justify-between items-center">
                <span className="text-white font-medium">Read Architecture Spec</span>
                <FileText className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
              </div>
              <div className="text-xs text-white/40 mt-1">Technical Whitepaper • v2.1</div>
            </a>
          </div>

          <div className="pt-8 border-t border-white/10 flex justify-between items-center text-xs text-white/40">
            <div className="flex gap-4">
              <span>ALIAS AEOS</span>
              <span className="text-emerald-500">• Stable</span>
            </div>
            <div className="font-mono">build.8902</div>
          </div>
        </div>
      </div>

      {/* Main UI Layer */}
      <div className="relative z-[30] w-full h-full pointer-events-none flex flex-col md:flex-row justify-between p-[40px] md:p-16">
        {/* Left: Nav */}
        <div className="flex flex-col md:w-auto pointer-events-auto w-full h-auto md:h-full justify-between z-[40]">
          <div className="flex flex-col mb-8 md:mb-0 space-y-3 order-1">
            <div
              className="select-none text-4xl md:text-6xl font-bold text-white tracking-widest uppercase flex items-center gap-1 cursor-pointer"
              onClick={() => window.location.reload()}
            >
              <span className="origin-left scale-x-110">AEOS</span>
            </div>
            <p className="leading-relaxed text-xs md:text-sm font-normal text-white/40 max-w-[300px] hidden md:block backdrop-blur-sm">
              Unified Data. Multi-Agent Orchestration. Safe Environments.
            </p>
          </div>

          <nav className="flex flex-row md:flex-col space-x-6 md:space-x-0 md:space-y-4 order-2 relative pl-6 md:pl-8">
            {/* Scroll Progress Line */}
            <div className="hidden md:block absolute left-0 top-0 h-full w-[1px] bg-white/10">
              <div
                className="absolute left-[-1px] w-[3px] h-10 bg-white shadow-[0_0_10px_white] transition-all duration-500 ease-out"
                style={{
                  top:
                    state.activeIndex === 0
                      ? "0px"
                      : state.activeIndex >= 1 && state.activeIndex <= 3
                        ? "40px"
                        : "80px",
                }}
              />
            </div>

            <button
              onClick={() => setState((s) => ({ ...s, activeIndex: 0 }))}
              className={`text-left transition-all duration-500 font-normal text-lg md:text-2xl leading-tight tracking-tight ${
                state.activeIndex === 0 ? "text-white" : "text-white/30 hover:text-white"
              }`}
            >
              Architect
            </button>
            <button
              onClick={() => setState((s) => ({ ...s, activeIndex: 1 }))}
              className={`text-left transition-all duration-500 font-normal text-lg md:text-2xl leading-tight tracking-tight ${
                state.activeIndex >= 1 && state.activeIndex <= 3 ? "text-white" : "text-white/30 hover:text-white"
              }`}
            >
              Pillars
            </button>
            <button
              onClick={() => setState((s) => ({ ...s, activeIndex: 4 }))}
              className={`text-left transition-all duration-500 font-normal text-lg md:text-2xl leading-tight tracking-tight ${
                state.activeIndex === 4 ? "text-white" : "text-white/30 hover:text-white"
              }`}
            >
              Initialize
            </button>
          </nav>
        </div>

        {/* Right: Builder UI */}
        <div
          className={`absolute inset-0 w-full h-full pointer-events-none flex flex-col md:flex-row justify-end p-[40px] md:p-16 transition-all duration-700 ease-in-out transform ${
            state.activeIndex === 0 ? "" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="hidden md:flex flex-col h-full pointer-events-auto items-center justify-center">
            <div className="bg-zinc-900/60 w-80 border border-white/5 rounded-2xl p-8 shadow-2xl backdrop-blur-xl space-y-8">
              <div className="space-y-4">
                <div className="flex justify-between text-sm text-white/50 font-medium tracking-wide">
                  <span>Context Resolution</span>
                  <span className="text-white font-mono">{tiers[Math.min(Math.floor(state.floors / 3), 4)] || "High"}</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={12}
                  value={state.floors}
                  onChange={(e) => setState((s) => ({ ...s, floors: Number.parseInt(e.target.value) }))}
                  className="w-full h-2 bg-white/15 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-[0_0_15px_rgba(255,255,255,0.3)] [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-black/10 [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:duration-150 [&::-webkit-slider-thumb]:hover:scale-110"
                />
                <div className="flex justify-between text-[10px] text-white/20 uppercase tracking-widest">
                  <span>Low</span>
                  <span>Mid</span>
                  <span>Ultra</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between text-sm text-white/50 font-medium tracking-wide">
                  <span>Swarm Density</span>
                  <span className="text-white font-mono">{sizes[state.sizeLevel] || "Squad"}</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={3}
                  value={state.sizeLevel}
                  onChange={(e) => setState((s) => ({ ...s, sizeLevel: Number.parseInt(e.target.value) }))}
                  className="w-full h-2 bg-white/15 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-[0_0_15px_rgba(255,255,255,0.3)] [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-black/10 [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:duration-150 [&::-webkit-slider-thumb]:hover:scale-110"
                />
              </div>

              <div className="space-y-4 pt-2 border-t border-white/5">
                <div className="text-sm text-white/50 font-medium tracking-wide">Work Environment</div>
                <div className="flex gap-2 p-1 bg-black/20 rounded-lg border border-white/5">
                  <button className="flex-1 py-2 text-xs font-semibold tracking-wide rounded-md bg-white/10 text-white transition-all duration-200">
                    Strict
                  </button>
                  <button className="flex-1 py-2 text-xs font-semibold tracking-wide rounded-md text-white/50 hover:bg-white/10 hover:text-white transition-all duration-200">
                    Fluid
                  </button>
                  <button className="flex-1 py-2 text-xs font-semibold tracking-wide rounded-md text-white/50 hover:bg-white/10 hover:text-white transition-all duration-200">
                    Open
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-10 md:bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-pulse pointer-events-auto">
            <span className="text-xs uppercase tracking-widest text-white">Scroll to Explore</span>
            <ChevronDown className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .glass-panel {
          background: rgba(10, 10, 10, 0.6);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
      `}</style>
    </div>
  )
}
