"use client"

/**
 * HAUS Mobile Storyboard Page
 *
 * @description
 * A comprehensive storyboard view showcasing mobile UI flows for HAUS:
 * - Core Flow: Tailor Your Agent -> Toolbox -> Conversation
 * - Voice Assistant: Idle -> Listening -> Transcribing -> Responding
 * - Device frame mockups with iOS-style status bars
 * - Cyan/Blue and Fuchsia/Purple themed sections
 */

import {
  Sparkles,
  Map,
  ZoomIn,
  Share,
  MoreHorizontal,
  Workflow,
  LogIn,
  Home,
  AudioLines,
  Target,
  Bell,
  Settings,
  CreditCard,
  History,
  ShieldAlert,
  Library,
  ListTree,
  Grid2X2Check,
  Smartphone,
  Tablet,
  Monitor,
  Ruler,
  Signal,
  Wifi,
  ArrowRight,
  Sliders,
  Wallet,
  Bot,
  FileText,
  Headphones,
  Wand2,
  Search,
  Headset,
  Plus,
  Paperclip,
  Mic,
  Send,
} from "lucide-react"

// Status Bar Component (iOS-style)
function StatusBar() {
  return (
    <div className="flex items-center justify-between px-8 pt-4 pb-2">
      <div className="text-white text-sm">9:41</div>
      <div className="w-6 h-5 rounded-full bg-neutral-800/70" />
      <div className="flex items-center gap-1 text-white">
        <Signal className="w-4 h-4" />
        <Wifi className="w-4 h-4" />
        <div className="w-6 h-3 rounded-sm border border-white/60 relative">
          <div className="absolute inset-0.5 bg-white rounded-[1px]" />
          <div className="absolute -right-0.5 top-1 w-0.5 h-1 bg-white/60 rounded-r-sm" />
        </div>
      </div>
    </div>
  )
}

// Home Indicator Component
function HomeIndicator() {
  return <div className="w-36 h-1 bg-white/30 rounded-full mx-auto mt-6" />
}

// Connector Arrow Component
function ConnectorArrow() {
  return (
    <div className="shrink-0 mt-[180px]">
      <div className="size-10 rounded-full border border-white/10 bg-neutral-900/60 flex items-center justify-center">
        <ArrowRight className="w-5 h-5 text-neutral-300" />
      </div>
    </div>
  )
}

// Tailor Your Agent Screen
function TailorAgentScreen() {
  return (
    <div className="w-[390px] max-w-full shrink-0">
      <div className="relative rounded-[3rem] p-[2px] bg-gradient-to-b from-cyan-400/60 via-blue-500/40 to-cyan-500/60 shadow-[0_20px_80px_-12px_rgba(6,182,212,0.4)]">
        <div className="rounded-[2.9rem] bg-black overflow-hidden h-[844px] relative">
          <StatusBar />
          <div className="relative flex flex-col h-full pt-6 pr-6 pb-6 pl-6">
            {/* Header */}
            <div className="text-center mt-2">
              <h2 className="text-[22px] md:text-[24px] tracking-tight bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-200 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(6,182,212,0.45)]">
                Tailor Your Agent
              </h2>
              <p className="text-[13px] text-neutral-400 mt-2">
                Customize appearance, voice, and capabilities
              </p>
            </div>

            {/* Avatar Orb */}
            <div className="relative mx-auto mt-7">
              <div className="absolute inset-0 -z-10 blur-2xl bg-gradient-to-br from-cyan-500/35 via-blue-500/25 to-cyan-400/30 rounded-full w-64 h-64" />
              <div className="relative w-64 h-64 rounded-full overflow-hidden border border-cyan-400/30 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black shadow-[0_0_40px_4px_rgba(34,211,238,0.25)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(34,211,238,0.35),transparent_60%),radial-gradient(circle_at_70%_70%,rgba(59,130,246,0.35),transparent_55%)]" />
                <div className="absolute inset-0 mix-blend-screen opacity-70">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    style={{ filter: "brightness(1.05) contrast(1.1) saturate(1.2)" }}
                  >
                    <source
                      src="https://cdn.midjourney.com/video/5029e61e-010a-4f9f-8daf-ef0a0ff34af6/3.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="p-4 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-[0_0_24px_8px_rgba(34,211,238,0.35)]">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>

              {/* Customization quick picks */}
              <div className="flex items-center justify-center gap-3 mt-4">
                <button className="p-2.5 rounded-full bg-neutral-900/60 backdrop-blur-md border border-white/10 hover:border-cyan-400/40 transition">
                  <Bot className="w-5 h-5 text-cyan-300" />
                </button>
                <button className="p-2.5 rounded-full bg-neutral-900/60 backdrop-blur-md border border-white/10 hover:border-cyan-400/40 transition">
                  <Headphones className="w-5 h-5 text-blue-300" />
                </button>
                <button className="p-2.5 rounded-full bg-neutral-900/60 backdrop-blur-md border border-white/10 hover:border-cyan-400/40 transition">
                  <Wand2 className="w-5 h-5 text-cyan-200" />
                </button>
              </div>
            </div>

            {/* Stepper */}
            <div className="mt-7">
              <div className="flex items-center justify-between">
                <div className="flex-1 flex items-center">
                  <div className="size-7 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 text-white text-[12px] flex items-center justify-center shadow-[0_0_16px_rgba(34,211,238,0.5)]">
                    1
                  </div>
                  <div className="h-0.5 flex-1 mx-2 bg-gradient-to-r from-cyan-500/50 to-blue-500/40" />
                  <div className="size-7 rounded-full bg-neutral-900/70 border border-white/10 text-[12px] text-neutral-300 flex items-center justify-center">
                    2
                  </div>
                  <div className="h-0.5 flex-1 mx-2 bg-white/10" />
                  <div className="size-7 rounded-full bg-neutral-900/70 border border-white/10 text-[12px] text-neutral-300 flex items-center justify-center">
                    3
                  </div>
                </div>
              </div>
              <div className="mt-2 flex items-center justify-between text-[11px] text-neutral-400 px-1">
                <span>Choose Skills</span>
                <span>Pick Voice</span>
                <span>Set Goals</span>
              </div>
            </div>

            {/* Skills */}
            <div className="mt-5">
              <div className="text-[13px] text-neutral-300 mb-2">Example skills</div>
              <div className="flex flex-wrap gap-2.5">
                <button className="px-3.5 py-2 rounded-full text-[12px] bg-gradient-to-br from-cyan-500/15 to-blue-500/10 border border-cyan-400/30 text-cyan-200 backdrop-blur-md hover:border-cyan-300/60 transition shadow-[0_0_12px_rgba(34,211,238,0.25)]">
                  <div className="flex items-center gap-1.5">
                    <Search className="w-3.5 h-3.5" />
                    <span>Research</span>
                  </div>
                </button>
                <button className="px-3.5 py-2 rounded-full text-[12px] bg-gradient-to-br from-cyan-500/15 to-blue-500/10 border border-cyan-400/30 text-cyan-200 backdrop-blur-md hover:border-cyan-300/60 transition">
                  <div className="flex items-center gap-1.5">
                    <Workflow className="w-3.5 h-3.5" />
                    <span>Project Management</span>
                  </div>
                </button>
                <button className="px-3.5 py-2 rounded-full text-[12px] bg-gradient-to-br from-cyan-500/15 to-blue-500/10 border border-cyan-400/30 text-cyan-200 backdrop-blur-md hover:border-cyan-300/60 transition">
                  <div className="flex items-center gap-1.5">
                    <Headset className="w-3.5 h-3.5" />
                    <span>Customer Support</span>
                  </div>
                </button>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-auto">
              <button className="w-full h-14 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 text-[15px] tracking-tight text-white border border-cyan-300/60 shadow-[0_10px_40px_-8px_rgba(34,211,238,0.55)] hover:shadow-[0_10px_50px_-6px_rgba(34,211,238,0.75)] transition">
                Deploy My Agent
              </button>
            </div>

            <HomeIndicator />
          </div>
        </div>
      </div>
      <div className="text-[12px] text-neutral-400 mt-2 text-center">1 - Tailor Your Agent</div>
    </div>
  )
}

// Toolbox Screen
function ToolboxScreen() {
  return (
    <div className="w-[390px] max-w-full shrink-0">
      <div className="relative shadow-[0_20px_80px_-12px_rgba(6,182,212,0.4)] bg-gradient-to-b from-cyan-400/60 via-blue-500/40 to-cyan-500/60 rounded-[3rem] p-[2px]">
        <div className="overflow-hidden h-[844px] relative bg-black rounded-[2.9rem]">
          <StatusBar />
          <div className="relative flex flex-col h-full pt-6 pr-6 pb-6 pl-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-[22px] tracking-tight bg-gradient-to-r from-cyan-300 via-cyan-200 to-blue-300 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(6,182,212,0.45)]">
                HAUS Toolbox
              </h2>
              <button className="size-9 rounded-full bg-neutral-900/60 border border-white/10 flex items-center justify-center">
                <Sliders className="w-4.5 h-4.5 text-neutral-300" />
              </button>
            </div>

            {/* Tools Grid */}
            <div className="grid grid-cols-2 gap-3">
              {/* Finance Tracker */}
              <div className="p-4 rounded-2xl bg-neutral-900/40 backdrop-blur-xl border border-white/10 hover:border-green-400/40 transition relative overflow-hidden">
                <div className="absolute -inset-6 bg-gradient-to-br from-green-400/10 via-transparent to-transparent pointer-events-none" />
                <div className="size-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-green-400/20 to-emerald-400/10 border border-green-300/30 shadow-[0_0_24px_rgba(74,222,128,0.35)]">
                  <Wallet className="w-5 h-5 text-green-300" />
                </div>
                <div className="mt-3">
                  <div className="text-[14px] text-neutral-100 tracking-tight">Finance Tracker</div>
                  <div className="text-[12px] text-neutral-400">Spending insights</div>
                </div>
              </div>

              {/* Task Automator */}
              <div className="p-4 rounded-2xl bg-neutral-900/40 backdrop-blur-xl border border-white/10 hover:border-cyan-400/40 transition relative overflow-hidden">
                <div className="absolute -inset-6 bg-gradient-to-br from-cyan-400/10 via-transparent to-transparent pointer-events-none" />
                <div className="size-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-cyan-400/20 to-blue-400/10 border border-cyan-300/30 shadow-[0_0_24px_rgba(34,211,238,0.35)]">
                  <Bot className="w-5 h-5 text-cyan-300" />
                </div>
                <div className="mt-3">
                  <div className="text-[14px] text-neutral-100 tracking-tight">Task Automator</div>
                  <div className="text-[12px] text-neutral-400">Workflow scripts</div>
                </div>
              </div>

              {/* Meeting Summarizer */}
              <div className="p-4 rounded-2xl bg-neutral-900/40 backdrop-blur-xl border border-white/10 hover:border-blue-400/40 transition relative overflow-hidden">
                <div className="absolute -inset-6 bg-gradient-to-br from-blue-400/10 via-transparent to-transparent pointer-events-none" />
                <div className="size-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-blue-400/20 to-cyan-400/10 border border-blue-300/30 shadow-[0_0_24px_rgba(59,130,246,0.35)]">
                  <FileText className="w-5 h-5 text-blue-300" />
                </div>
                <div className="mt-3">
                  <div className="text-[14px] text-neutral-100 tracking-tight">Meeting Summarizer</div>
                  <div className="text-[12px] text-neutral-400">Notes & action items</div>
                </div>
              </div>

              {/* Idea Generator */}
              <div className="p-4 rounded-2xl bg-neutral-900/40 backdrop-blur-xl border border-white/10 hover:border-purple-400/40 transition relative overflow-hidden">
                <div className="absolute -inset-6 bg-gradient-to-br from-purple-400/10 via-transparent to-transparent pointer-events-none" />
                <div className="size-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-purple-400/20 to-fuchsia-400/10 border border-purple-300/30 shadow-[0_0_24px_rgba(168,85,247,0.35)]">
                  <Sparkles className="w-5 h-5 text-purple-300" />
                </div>
                <div className="mt-3">
                  <div className="text-[14px] text-neutral-100 tracking-tight">Idea Generator</div>
                  <div className="text-[12px] text-neutral-400">Creative prompts</div>
                </div>
              </div>
            </div>

            {/* Subscription Banner */}
            <div className="mt-auto">
              <div className="mt-6 p-4 rounded-2xl bg-gradient-to-br from-neutral-900/70 to-black/80 border border-white/10 backdrop-blur-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_50%_-20%,rgba(34,211,238,0.2),transparent)]" />
                <div className="flex items-center justify-between relative z-10">
                  <div>
                    <div className="text-[14px] text-neutral-100 tracking-tight">Unlock the full toolbox</div>
                    <div className="text-[12px] text-neutral-400">Advanced agents, priority compute</div>
                  </div>
                  <button className="px-3.5 h-10 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-[13px] border border-cyan-300/60 shadow-[0_10px_30px_-10px_rgba(34,211,238,0.65)] hover:shadow-[0_10px_40px_-8px_rgba(34,211,238,0.75)]">
                    Upgrade to Pro
                  </button>
                </div>
              </div>
            </div>

            <HomeIndicator />
          </div>
        </div>
      </div>
      <div className="text-[12px] text-neutral-400 mt-2 text-center">2 - Toolbox</div>
    </div>
  )
}

// Conversation Screen
function ConversationScreen() {
  return (
    <div className="w-[390px] max-w-full shrink-0">
      <div className="relative rounded-[3rem] p-[2px] bg-gradient-to-b from-cyan-400/60 via-blue-500/40 to-cyan-500/60 shadow-[0_20px_80px_-12px_rgba(6,182,212,0.4)]">
        <div className="rounded-[2.9rem] bg-black overflow-hidden h-[844px] relative">
          <StatusBar />
          <div className="relative flex flex-col h-full pt-4 pr-4 pb-6 pl-4">
            {/* Chat Header */}
            <div className="flex items-center gap-3 px-2 py-2">
              <div className="size-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 border border-cyan-300/60 shadow-[0_0_16px_rgba(34,211,238,0.35)] flex items-center justify-center">
                <Bot className="w-4.5 h-4.5 text-white" />
              </div>
              <div>
                <div className="text-[14px] tracking-tight text-neutral-100">Conversation</div>
                <div className="text-[12px] text-neutral-500">Connected - Realtime</div>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <button
                  className="size-9 rounded-xl bg-neutral-900/60 border border-white/10 flex items-center justify-center hover:border-cyan-400/40 transition"
                  aria-label="New chat"
                >
                  <Plus className="w-4.5 h-4.5 text-neutral-300" />
                </button>
                <button
                  className="size-9 rounded-xl bg-neutral-900/60 border border-white/10 flex items-center justify-center hover:border-cyan-400/40 transition"
                  aria-label="More"
                >
                  <MoreHorizontal className="w-4.5 h-4.5 text-neutral-300" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="mt-2 flex-1 overflow-y-auto space-y-3 px-2">
              {/* System bubble */}
              <div className="flex items-start gap-2">
                <div className="size-7 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 border border-cyan-300/60 flex items-center justify-center shrink-0">
                  <Sparkles className="w-3.5 h-3.5 text-white" />
                </div>
                <div className="max-w-[78%] rounded-2xl rounded-tl-sm bg-neutral-900/60 border border-white/10 p-3">
                  <p className="text-[13px] text-neutral-200">
                    Hi! I&apos;m your HAUS. I can manage tasks, search, and create. What can I help with today?
                  </p>
                </div>
              </div>

              {/* User bubble */}
              <div className="flex items-end gap-2 justify-end">
                <div className="max-w-[78%] rounded-2xl rounded-tr-sm bg-gradient-to-br from-cyan-500/15 to-blue-500/10 border border-cyan-400/30 p-3">
                  <p className="text-[13px] text-neutral-100">
                    Summarize this week&apos;s meetings and create an action list.
                  </p>
                </div>
              </div>

              {/* Assistant bubble with card */}
              <div className="flex items-start gap-2">
                <div className="size-7 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 border border-cyan-300/60 flex items-center justify-center shrink-0">
                  <Bot className="w-3.5 h-3.5 text-white" />
                </div>
                <div className="max-w-[78%] space-y-2">
                  <div className="rounded-2xl bg-neutral-900/60 border border-white/10 p-3">
                    <p className="text-[13px] text-neutral-200">
                      Here&apos;s a concise summary and prioritized actions:
                    </p>
                    <ul className="mt-2 text-[13px] text-neutral-300 list-disc pl-4 space-y-1">
                      <li>Finalize Q3 KPI dashboards by Friday</li>
                      <li>Draft vendor RFP outline</li>
                      <li>Schedule team retro for Tue 10am</li>
                    </ul>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-3 h-9 rounded-xl bg-neutral-900/60 border border-white/10 text-[12px] text-neutral-200 hover:border-cyan-400/40 transition">
                      Add to Tasks
                    </button>
                    <button className="px-3 h-9 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-[12px] border border-cyan-300/60">
                      Open in Toolbox
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Composer */}
            <div className="mt-3 px-2">
              <div className="h-14 rounded-2xl bg-neutral-900/60 border border-white/10 flex items-center px-2 gap-2">
                <button
                  className="size-10 rounded-xl bg-neutral-900/60 border border-white/10 flex items-center justify-center hover:border-cyan-400/40 transition"
                  aria-label="Attach"
                >
                  <Paperclip className="w-5 h-5 text-neutral-300" />
                </button>
                <input
                  className="flex-1 bg-transparent outline-none text-[13px] placeholder:text-neutral-500"
                  placeholder="Type a message or use the mic..."
                />
                <button
                  className="size-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white border border-cyan-300/60 flex items-center justify-center shadow-[0_0_16px_rgba(34,211,238,0.4)] hover:shadow-[0_0_26px_rgba(34,211,238,0.55)] transition"
                  aria-label="Voice"
                >
                  <Mic className="w-5 h-5" />
                </button>
                <button
                  className="size-10 rounded-xl bg-neutral-900/60 border border-white/10 flex items-center justify-center hover:border-cyan-400/40 transition"
                  aria-label="Send"
                >
                  <Send className="w-5 h-5 text-neutral-200" />
                </button>
              </div>
            </div>

            <HomeIndicator />
          </div>
        </div>
      </div>
      <div className="text-[12px] text-neutral-400 mt-2 text-center">3 - Conversation</div>
    </div>
  )
}

// Voice Idle Screen
function VoiceIdleScreen() {
  return (
    <div className="w-[390px] max-w-full shrink-0">
      <div className="relative rounded-[3rem] p-[2px] bg-gradient-to-b from-fuchsia-400/60 via-purple-500/40 to-fuchsia-500/60 shadow-[0_20px_80px_-12px_rgba(217,70,239,0.35)]">
        <div className="rounded-[2.9rem] bg-black overflow-hidden h-[844px] relative">
          <StatusBar />
          <div className="relative flex flex-col h-full pt-8 pr-6 pb-6 pl-6">
            {/* Header */}
            <div className="text-center">
              <h2 className="text-[22px] tracking-tight bg-gradient-to-r from-fuchsia-300 via-purple-300 to-fuchsia-200 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(217,70,239,0.45)]">
                HAUS Voice
              </h2>
              <p className="text-[13px] text-neutral-400 mt-1.5">Tap the mic and speak naturally</p>
            </div>

            {/* Idle Orb */}
            <div className="mt-10 mx-auto relative">
              <div className="absolute inset-0 -z-10 blur-3xl bg-gradient-to-br from-fuchsia-500/30 via-purple-500/20 to-fuchsia-400/25 rounded-full w-64 h-64" />
              <button
                className="group relative w-64 h-64 rounded-full border border-fuchsia-300/40 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black overflow-hidden shadow-[0_0_40px_6px_rgba(217,70,239,0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400/70"
                aria-label="Tap to talk"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(217,70,239,0.35),transparent_60%),radial-gradient(circle_at_70%_70%,rgba(168,85,247,0.35),transparent_55%)] transition transform group-active:scale-[1.03]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="p-5 rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-600 border border-white/20 shadow-[0_0_28px_8px_rgba(217,70,239,0.35)] group-active:scale-110 transition">
                    <Mic className="w-10 h-10 text-white" />
                  </div>
                </div>
              </button>
              <div className="mt-4 text-center text-[12px] text-neutral-400">Hold to talk - Release to send</div>
            </div>

            {/* Quick intents */}
            <div className="mt-10 grid grid-cols-3 gap-2">
              <button className="h-10 rounded-xl bg-neutral-900/60 border border-white/10 text-[12px] text-neutral-300 hover:border-fuchsia-400/40 transition">
                Summarize
              </button>
              <button className="h-10 rounded-xl bg-neutral-900/60 border border-white/10 text-[12px] text-neutral-300 hover:border-fuchsia-400/40 transition">
                Remind me
              </button>
              <button className="h-10 rounded-xl bg-neutral-900/60 border border-white/10 text-[12px] text-neutral-300 hover:border-fuchsia-400/40 transition">
                Search
              </button>
            </div>

            <HomeIndicator />
          </div>
        </div>
      </div>
      <div className="text-[12px] text-neutral-400 mt-2 text-center">A - Idle</div>
    </div>
  )
}

// Voice Listening Screen
function VoiceListeningScreen() {
  return (
    <div className="w-[390px] max-w-full shrink-0">
      <div className="relative rounded-[3rem] p-[2px] bg-gradient-to-b from-fuchsia-400/60 via-purple-500/40 to-fuchsia-500/60 shadow-[0_20px_80px_-12px_rgba(217,70,239,0.35)]">
        <div className="rounded-[2.9rem] bg-black overflow-hidden h-[844px] relative">
          <StatusBar />
          <div className="relative flex flex-col h-full pt-8 pr-6 pb-6 pl-6">
            {/* Header */}
            <div className="text-center">
              <h2 className="text-[22px] tracking-tight bg-gradient-to-r from-fuchsia-300 via-purple-300 to-fuchsia-200 bg-clip-text text-transparent">
                Listening...
              </h2>
              <p className="text-[12px] text-neutral-400 mt-1">Speak now</p>
            </div>

            {/* Listening visualizer */}
            <div className="mt-12 flex-1 flex items-center justify-center">
              <div className="relative w-64 h-64 rounded-full bg-gradient-to-br from-neutral-900 via-neutral-950 to-black border border-fuchsia-300/30 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(217,70,239,0.3),transparent_55%),radial-gradient(circle_at_70%_70%,rgba(168,85,247,0.3),transparent_55%)]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex items-end gap-1.5">
                    <span className="w-1.5 h-6 bg-fuchsia-400/70 rounded-full animate-pulse" />
                    <span className="w-1.5 h-10 bg-purple-400/70 rounded-full animate-pulse" style={{ animationDelay: "0.1s" }} />
                    <span className="w-1.5 h-7 bg-fuchsia-400/70 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }} />
                    <span className="w-1.5 h-12 bg-purple-400/70 rounded-full animate-pulse" style={{ animationDelay: "0.3s" }} />
                    <span className="w-1.5 h-8 bg-fuchsia-400/70 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }} />
                    <span className="w-1.5 h-11 bg-purple-400/70 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
                    <span className="w-1.5 h-7 bg-fuchsia-400/70 rounded-full animate-pulse" style={{ animationDelay: "0.6s" }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="mt-6 flex items-center justify-center gap-3">
              <button className="px-4 h-10 rounded-xl bg-neutral-900/60 border border-white/10 text-[12px] text-neutral-300 hover:border-fuchsia-400/40 transition">
                Cancel
              </button>
              <button className="px-4 h-10 rounded-xl bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white text-[12px] border border-fuchsia-300/60">
                Finish
              </button>
            </div>

            <HomeIndicator />
          </div>
        </div>
      </div>
      <div className="text-[12px] text-neutral-400 mt-2 text-center">B - Listening</div>
    </div>
  )
}

// Voice Transcribing Screen
function VoiceTranscribingScreen() {
  return (
    <div className="w-[390px] max-w-full shrink-0">
      <div className="relative rounded-[3rem] p-[2px] bg-gradient-to-b from-fuchsia-400/60 via-purple-500/40 to-fuchsia-500/60 shadow-[0_20px_80px_-12px_rgba(217,70,239,0.35)]">
        <div className="rounded-[2.9rem] bg-black overflow-hidden h-[844px] relative">
          <div className="flex items-center justify-between px-8 pt-4 pb-2">
            <div className="text-white text-sm">9:42</div>
            <div className="w-6 h-5 rounded-full bg-neutral-800/70" />
            <div className="flex items-center gap-1 text-white">
              <Signal className="w-4 h-4" />
              <Wifi className="w-4 h-4" />
              <div className="w-6 h-3 rounded-sm border border-white/60 relative">
                <div className="absolute inset-0.5 bg-white rounded-[1px]" />
                <div className="absolute -right-0.5 top-1 w-0.5 h-1 bg-white/60 rounded-r-sm" />
              </div>
            </div>
          </div>
          <div className="relative flex flex-col h-full pt-8 pr-6 pb-6 pl-6">
            <div className="text-center">
              <h2 className="text-[22px] tracking-tight bg-gradient-to-r from-fuchsia-300 via-purple-300 to-fuchsia-200 bg-clip-text text-transparent">
                Transcribing...
              </h2>
              <p className="text-[12px] text-neutral-400 mt-1">Generating accurate transcript</p>
            </div>

            {/* Transcript preview */}
            <div className="mt-6 space-y-3">
              <div className="p-3 rounded-2xl bg-neutral-900/60 border border-white/10">
                <div className="text-[12px] text-neutral-500 mb-1">You</div>
                <p className="text-[13px] text-neutral-200">
                  Hey HAUS, summarize my meetings and make a prioritized to-do list for the team. Also draft an email to
                  stakeholders.
                </p>
              </div>
              <div className="p-3 rounded-2xl bg-neutral-900/40 border border-white/10">
                <div className="text-[12px] text-neutral-500 mb-1">Detecting context</div>
                <div className="flex items-center gap-1.5 text-[13px] text-neutral-300">
                  <span className="inline-block size-1.5 rounded-full bg-fuchsia-400 animate-pulse" />
                  <span>Fetching calendar and notes</span>
                </div>
              </div>
            </div>

            {/* Progress */}
            <div className="mt-6">
              <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                <div className="h-full w-1/2 bg-gradient-to-r from-fuchsia-500 to-purple-500 animate-pulse" />
              </div>
              <div className="mt-2 text-[12px] text-neutral-400">Transcription 52%</div>
            </div>

            <div className="mt-auto flex items-center justify-between">
              <button className="px-3 h-10 rounded-xl bg-neutral-900/60 border border-white/10 text-[12px] text-neutral-300 hover:border-fuchsia-400/40 transition">
                Edit text
              </button>
              <button className="px-3 h-10 rounded-xl bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white text-[12px] border border-fuchsia-300/60">
                Continue
              </button>
            </div>

            <HomeIndicator />
          </div>
        </div>
      </div>
      <div className="text-[12px] text-neutral-400 mt-2 text-center">C - Transcribing</div>
    </div>
  )
}

// Voice Responding Screen
function VoiceRespondingScreen() {
  return (
    <div className="w-[390px] max-w-full shrink-0">
      <div className="relative rounded-[3rem] p-[2px] bg-gradient-to-b from-fuchsia-400/60 via-purple-500/40 to-fuchsia-500/60 shadow-[0_20px_80px_-12px_rgba(217,70,239,0.35)]">
        <div className="rounded-[2.9rem] bg-black overflow-hidden h-[844px] relative">
          <div className="flex items-center justify-between px-8 pt-4 pb-2">
            <div className="text-white text-sm">9:43</div>
            <div className="w-6 h-5 rounded-full bg-neutral-800/70" />
            <div className="flex items-center gap-1 text-white">
              <Signal className="w-4 h-4" />
              <Wifi className="w-4 h-4" />
              <div className="w-6 h-3 rounded-sm border border-white/60 relative">
                <div className="absolute inset-0.5 bg-white rounded-[1px]" />
                <div className="absolute -right-0.5 top-1 w-0.5 h-1 bg-white/60 rounded-r-sm" />
              </div>
            </div>
          </div>
          <div className="relative flex flex-col h-full pt-8 pr-6 pb-6 pl-6">
            {/* Header */}
            <div className="text-center">
              <h2 className="text-[22px] tracking-tight bg-gradient-to-r from-fuchsia-300 via-purple-300 to-fuchsia-200 bg-clip-text text-transparent">
                Responding
              </h2>
              <p className="text-[12px] text-neutral-400 mt-1">AI is preparing your summary</p>
            </div>

            {/* Response card */}
            <div className="mt-6 rounded-2xl bg-neutral-900/60 border border-white/10 p-4 overflow-hidden relative">
              <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_50%_-20%,rgba(217,70,239,0.15),transparent)] pointer-events-none" />
              <div className="text-[12px] text-neutral-500 mb-1">HAUS</div>
              <div className="space-y-2">
                <p className="text-[13px] text-neutral-200">
                  I drafted a recap and action plan based on your meetings. Shall I send it to the team and add tasks to
                  your board?
                </p>
                <ul className="text-[13px] text-neutral-300 list-disc pl-4">
                  <li>Q3 KPI dashboard - due Fri</li>
                  <li>Vendor RFP - outline today</li>
                  <li>Team retro - Tue 10:00</li>
                </ul>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <button className="px-3 h-9 rounded-xl bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white text-[12px] border border-fuchsia-300/60">
                  Send recap
                </button>
                <button className="px-3 h-9 rounded-xl bg-neutral-900/60 border border-white/10 text-[12px] text-neutral-200 hover:border-fuchsia-400/40 transition">
                  Review first
                </button>
                <button className="px-3 h-9 rounded-xl bg-neutral-900/60 border border-white/10 text-[12px] text-neutral-200 hover:border-fuchsia-400/40 transition">
                  Open transcript
                </button>
              </div>
            </div>

            {/* Footer actions */}
            <div className="mt-auto flex items-center justify-between">
              <button className="px-4 h-10 rounded-xl bg-neutral-900/60 border border-white/10 text-[12px] text-neutral-300 hover:border-fuchsia-400/40 transition">
                Discard
              </button>
              <button className="px-4 h-10 rounded-xl bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white text-[12px] border border-fuchsia-300/60">
                Send to Chat
              </button>
            </div>

            <HomeIndicator />
          </div>
        </div>
      </div>
      <div className="text-[12px] text-neutral-400 mt-2 text-center">D - Responding</div>
    </div>
  )
}

// Navigation Item Component
interface NavItemProps {
  icon: React.ComponentType<{ className?: string }>
  label: string
  active?: boolean
}

function NavItem({ icon: Icon, label, active }: NavItemProps) {
  const baseClass = "flex items-center gap-2 px-2.5 py-2 rounded-lg text-[13px]"
  const activeClass = active
    ? "bg-neutral-900/60 border border-white/10"
    : "hover:bg-neutral-900/40 border border-transparent hover:border-white/10"
  const iconColor = active ? "text-cyan-300" : "text-neutral-400"

  return (
    <a className={`${baseClass} ${activeClass}`} href="#">
      <Icon className={`w-4.5 h-4.5 ${iconColor}`} />
      {label}
    </a>
  )
}

// Main Page Component
export default function MobileStoryboardPage() {
  return (
    <div
      className="min-h-screen bg-neutral-950 text-neutral-100 antialiased"
      style={{ fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji" }}
    >
      {/* Backdrop */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-cyan-500/20 blur-3xl rounded-full" />
      </div>

      {/* Top Nav */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 bg-neutral-950/80 border-b border-white/10">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6">
          <div className="h-14 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="size-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 border border-cyan-300/60 shadow-[0_0_24px_rgba(34,211,238,0.35)] flex items-center justify-center">
                <Sparkles className="w-4.5 h-4.5 text-white" />
              </div>
              <div className="text-[15px] tracking-tight">HAUS</div>
              <div className="text-neutral-600">/</div>
              <div className="text-[14px] text-neutral-300">Mobile v1</div>
              <div className="hidden md:flex items-center gap-2 ml-4 text-[12px] text-neutral-400">
                <Map className="w-4 h-4" />
                <span>Storyboard</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="hidden sm:flex items-center gap-2 h-9 px-3 rounded-xl bg-neutral-900/60 border border-white/10 text-[13px]">
                <ZoomIn className="w-4.5 h-4.5" />
                Zoom
              </button>
              <button className="hidden md:flex items-center gap-2 h-9 px-3 rounded-xl bg-neutral-900/60 border border-white/10 text-[13px]">
                <Share className="w-4.5 h-4.5" />
                Export
              </button>
              <button className="size-9 rounded-full bg-neutral-900/60 border border-white/10 flex items-center justify-center">
                <MoreHorizontal className="w-4.5 h-4.5 text-neutral-300" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="w-full">
        <div className="max-w-[1800px] mx-auto">
          <div className="flex">
            {/* Left Rail */}
            <aside className="hidden lg:block w-64 shrink-0 border-r border-white/10 min-h-[calc(100vh-56px)]">
              <div className="p-4">
                <div className="text-[12px] uppercase tracking-wider text-neutral-500 mb-2">Flows</div>
                <nav className="space-y-1">
                  <NavItem icon={Workflow} label="Core: Tailor -> Toolbox -> Chat" active />
                  <NavItem icon={LogIn} label="Onboarding" />
                  <NavItem icon={Home} label="Home" />
                  <NavItem icon={AudioLines} label="Voice Picker" />
                  <NavItem icon={Target} label="Goal Setup" />
                  <NavItem icon={Bell} label="Notifications" />
                  <NavItem icon={Settings} label="Settings" />
                  <NavItem icon={CreditCard} label="Billing" />
                  <NavItem icon={History} label="History" />
                  <NavItem icon={ShieldAlert} label="Error States" />
                </nav>
              </div>
              <div className="px-4">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-3" />
                <div className="text-[12px] uppercase tracking-wider text-neutral-500 mb-2">Artifacts</div>
                <nav className="space-y-1">
                  <div className="flex items-center gap-2 px-2.5 py-2 rounded-lg hover:bg-neutral-900/40 text-[13px]">
                    <Library className="w-4.5 h-4.5 text-neutral-400" />
                    Components
                  </div>
                  <div className="flex items-center gap-2 px-2.5 py-2 rounded-lg hover:bg-neutral-900/40 text-[13px]">
                    <ListTree className="w-4.5 h-4.5 text-neutral-400" />
                    User Journeys
                  </div>
                </nav>
              </div>
            </aside>

            {/* Storyboard Canvas */}
            <section className="flex-1 min-h-[calc(100vh-56px)]">
              <div className="sm:px-8 pt-6 pr-4 pb-6 pl-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-[22px] md:text-[24px] tracking-tight bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-200 bg-clip-text text-transparent">
                      Storyboard
                    </h1>
                    <p className="text-[13px] text-neutral-400">High-level flow with in-progress frames</p>
                  </div>
                  <div className="hidden sm:flex items-center gap-2">
                    <div className="h-9 px-3 rounded-xl bg-neutral-900/60 border border-white/10 text-[13px] flex items-center gap-2">
                      <Grid2X2Check className="w-4.5 h-4.5 text-neutral-300" />
                      Snap to grid
                    </div>

                    {/* Device selector */}
                    <div className="h-9 rounded-xl bg-neutral-900/60 border border-white/10 text-[13px] flex items-center p-1 gap-1">
                      <button className="h-7 px-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white border border-cyan-300/60 flex items-center gap-1.5">
                        <Smartphone className="w-4 h-4 text-white" />
                        <span className="hidden xl:block">Mobile</span>
                        <span className="hidden lg:block text-white/80">390x844</span>
                      </button>
                      <button className="h-7 px-2.5 rounded-lg border border-white/10 text-neutral-300 hover:border-cyan-400/40 flex items-center gap-1.5">
                        <Tablet className="w-4 h-4 text-neutral-300" />
                        <span className="hidden xl:block">Tablet</span>
                        <span className="hidden lg:block text-neutral-400">768x1024</span>
                      </button>
                      <button className="h-7 px-2.5 rounded-lg border border-white/10 text-neutral-300 hover:border-cyan-400/40 flex items-center gap-1.5">
                        <Monitor className="w-4 h-4 text-neutral-300" />
                        <span className="hidden xl:block">Desktop</span>
                        <span className="hidden lg:block text-neutral-400">1280x800</span>
                      </button>
                    </div>

                    <div className="h-9 text-[13px] flex gap-2 bg-neutral-900/60 border-white/10 border rounded-xl pr-3 pl-3 items-center">
                      <Ruler className="w-4.5 h-4.5 text-neutral-300" />
                      390 x 844
                    </div>
                  </div>
                </div>

                {/* Canvas backdrop */}
                <div className="mt-5 rounded-2xl border border-white/10 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px] p-4 sm:p-6">
                  {/* Lane: Core Flow */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="size-2 rounded-full bg-cyan-400" />
                      <div className="text-[13px] text-neutral-300 tracking-tight">Core Flow</div>
                      <div className="text-[12px] text-neutral-500">Tailor -> Toolbox -> Conversation</div>
                    </div>

                    <div className="relative">
                      <div className="flex gap-6 overflow-x-auto pb-2 items-start">
                        <TailorAgentScreen />
                        <ConnectorArrow />
                        <ToolboxScreen />
                        <ConnectorArrow />
                        <ConversationScreen />
                      </div>
                    </div>
                  </div>

                  {/* Lane: Voice Assistant */}
                  <div className="mt-10">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="size-2 rounded-full bg-fuchsia-400" />
                      <div className="text-[13px] text-neutral-300 tracking-tight">Voice Assistant</div>
                      <div className="text-[12px] text-neutral-500">Idle -> Listening -> Transcribing -> Responding</div>
                    </div>

                    <div className="relative">
                      <div className="flex gap-6 overflow-x-auto pb-2 items-start">
                        <VoiceIdleScreen />
                        <ConnectorArrow />
                        <VoiceListeningScreen />
                        <ConnectorArrow />
                        <VoiceTranscribingScreen />
                        <ConnectorArrow />
                        <VoiceRespondingScreen />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
