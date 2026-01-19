"use client"

/**
 * MobileStoryboard - Visual storyboard component for mobile UI flows
 *
 * @description
 * Displays a mobile device frame with configurable screens, perfect for showcasing
 * user flows, onboarding sequences, or feature walkthroughs. Supports custom themes
 * (cyan/blue for core flows, fuchsia/purple for voice flows).
 *
 * @example
 * ```tsx
 * <MobileStoryboard
 *   screens={[
 *     { title: "Tailor Your Agent", component: <AgentCustomizer /> },
 *     { title: "Toolbox", component: <Toolbox /> },
 *   ]}
 *   theme="cyan"
 * />
 * ```
 */

import type React from "react"
import { useState, useRef, useEffect } from "react"
import {
  Sparkles,
  Search,
  Workflow,
  Headphones,
  Wand2,
  Wallet,
  Bot,
  FileText,
  Sliders,
  Signal,
  Wifi,
  ArrowRight,
  Mic,
  Plus,
  MoreHorizontal,
  Map,
  ZoomIn,
  Share,
  Grid2x2Check,
  Ruler,
  Smartphone,
  Tablet,
  Monitor,
  LogIn,
  House,
  AudioLines,
  Target,
  Bell,
  Settings,
  CreditCard,
  History,
  ShieldAlert,
  Library,
  ListTree,
} from "lucide-react"

// ============================================================================
// Types
// ============================================================================

export type StoryboardTheme = "cyan" | "fuchsia"

export interface StoryboardScreen {
  id: string
  title: string
  subtitle?: string
  description?: string
  component: React.ReactNode
  label?: string
}

interface MobileStoryboardProps {
  screens: StoryboardScreen[]
  theme?: StoryboardTheme
  title?: string
  subtitle?: string
  showDeviceSelector?: boolean
  defaultDevice?: "mobile" | "tablet" | "desktop"
  className?: string
}

interface DeviceFrameProps {
  children: React.ReactNode
  theme: StoryboardTheme
  device?: "mobile" | "tablet" | "desktop"
  className?: string
}

interface StatusBarProps {
  theme?: StoryboardTheme
}

interface ScreenCardProps {
  children: React.ReactNode
  theme: StoryboardTheme
  label: string
  className?: string
}

interface ConnectorProps {
  theme?: StoryboardTheme
}

interface SkillBadgeProps {
  icon: React.ReactNode
  label: string
  theme?: StoryboardTheme
}

interface ToolCardProps {
  icon: React.ReactNode
  title: string
  description: string
  color?: "green" | "cyan" | "blue" | "purple"
}

interface StepperProps {
  currentStep: number
  steps: string[]
  theme?: StoryboardTheme
}

interface MessageBubbleProps {
  type: "system" | "user" | "assistant"
  content: React.ReactNode
  actions?: React.ReactNode
  theme?: StoryboardTheme
}

interface VoiceVisualizerProps {
  isActive?: boolean
  theme?: StoryboardTheme
}

interface ProgressIndicatorProps {
  progress: number
  label?: string
  theme?: StoryboardTheme
}

// ============================================================================
// Theme Configurations
// ============================================================================

const THEME_COLORS = {
  cyan: {
    from: "from-cyan-400/60",
    via: "via-blue-500/40",
    to: "to-cyan-500/60",
    shadow: "shadow-[0_20px_80px_-12px_rgba(6,182,212,0.4)]",
    text: "from-cyan-300 via-blue-300 to-cyan-200",
    icon: "text-cyan-300",
    bg: "bg-cyan-500/15",
    border: "border-cyan-400/30",
    buttonText: "text-cyan-200",
  },
  fuchsia: {
    from: "from-fuchsia-400/60",
    via: "via-purple-500/40",
    to: "to-fuchsia-500/60",
    shadow: "shadow-[0_20px_80px_-12px_rgba(217,70,239,0.35)]",
    text: "from-fuchsia-300 via-purple-300 to-fuchsia-200",
    icon: "text-fuchsia-300",
    bg: "bg-fuchsia-500/15",
    border: "border-fuchsia-400/30",
    buttonText: "text-fuchsia-200",
  },
} as const

// ============================================================================
// Helper Components
// ============================================================================

function StatusBar({ theme = "cyan" }: StatusBarProps) {
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

function DeviceFrame({ children, theme, device = "mobile", className = "" }: DeviceFrameProps) {
  const colors = THEME_COLORS[theme]
  const deviceWidth = device === "mobile" ? "w-[390px]" : device === "tablet" ? "w-[768px]" : "w-[1280px]"
  const deviceHeight = device === "mobile" ? "h-[844px]" : device === "tablet" ? "h-[1024px]" : "h-[800px]"

  return (
    <div className={`${deviceWidth} max-w-full shrink-0 ${className}`}>
      <div className={`relative rounded-[3rem] p-[2px] bg-gradient-to-b ${colors.from} ${colors.via} ${colors.to} ${colors.shadow}`}>
        <div className={`rounded-[2.9rem] bg-black overflow-hidden ${deviceHeight} relative`}>
          <StatusBar theme={theme} />
          {children}
          <div className="w-36 h-1 bg-white/30 rounded-full mx-auto mt-6 absolute bottom-6 left-1/2 -translate-x-1/2" />
        </div>
      </div>
    </div>
  )
}

function ScreenCard({ children, theme, label, className = "" }: ScreenCardProps) {
  return (
    <div className={className}>
      <DeviceFrame theme={theme}>{children}</DeviceFrame>
      <div className="text-[12px] text-neutral-400 mt-2 text-center">{label}</div>
    </div>
  )
}

function Connector({ theme = "cyan" }: ConnectorProps) {
  return (
    <div className="shrink-0 mt-[180px]">
      <div className="size-10 rounded-full border border-white/10 bg-neutral-900/60 flex items-center justify-center">
        <ArrowRight className="w-5 h-5 text-neutral-300" />
      </div>
    </div>
  )
}

function SkillBadge({ icon, label, theme = "cyan" }: SkillBadgeProps) {
  const colors = THEME_COLORS[theme]
  return (
    <button
      className={`px-3.5 py-2 rounded-full text-[12px] bg-gradient-to-br ${colors.bg} border ${colors.border} ${colors.buttonText} backdrop-blur-md hover:opacity-80 transition shadow-[0_0_12px_rgba(34,211,238,0.25)]`}
    >
      <div className="flex items-center gap-1.5">{icon}</div>
    </button>
  )
}

function ToolCard({ icon, title, description, color = "cyan" }: ToolCardProps) {
  const colorClasses = {
    green: "from-green-400/20 to-emerald-400/10 border-green-300/30 text-green-300 hover:border-green-400/40",
    cyan: "from-cyan-400/20 to-blue-400/10 border-cyan-300/30 text-cyan-300 hover:border-cyan-400/40",
    blue: "from-blue-400/20 to-cyan-400/10 border-blue-300/30 text-blue-300 hover:border-blue-400/40",
    purple: "from-purple-400/20 to-fuchsia-400/10 border-purple-300/30 text-purple-300 hover:border-purple-400/40",
  }

  return (
    <div className={`p-4 rounded-2xl bg-neutral-900/40 backdrop-blur-xl border border-white/10 hover:${colorClasses[color].split(" ")[1]} transition relative overflow-hidden group`}>
      <div className={`absolute -inset-6 bg-gradient-to-br ${colorClasses[color].split(" ").slice(0, 2).join(" ")} pointer-events-none opacity-10`} />
      <div className={`size-10 rounded-xl flex items-center justify-center bg-gradient-to-br ${colorClasses[color].split(" ").slice(0, 4).join(" ")} border shadow-[0_0_24px_rgba(74,222,128,0.35)]`}>
        {icon}
      </div>
      <div className="mt-3">
        <div className="text-[14px] text-neutral-100 tracking-tight">{title}</div>
        <div className="text-[12px] text-neutral-400">{description}</div>
      </div>
    </div>
  )
}

function Stepper({ currentStep, steps, theme = "cyan" }: StepperProps) {
  const colors = THEME_COLORS[theme]

  return (
    <div className="mt-7">
      <div className="flex items-center justify-between">
        <div className="flex-1 flex items-center">
          {steps.map((step, index) => (
            <React.Fragment key={step}>
              <div
                className={`size-7 rounded-full text-[12px] flex items-center justify-center ${
                  index + 1 === currentStep
                    ? `bg-gradient-to-br from-cyan-500 to-blue-500 text-white shadow-[0_0_16px_rgba(34,211,238,0.5)]`
                    : "bg-neutral-900/70 border border-white/10 text-neutral-300"
                }`}
              >
                {index + 1}
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`h-0.5 flex-1 mx-2 ${
                    index + 1 < currentStep ? "bg-gradient-to-r from-cyan-500/50 to-blue-500/40" : "bg-white/10"
                  }`}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="mt-2 flex items-center justify-between text-[11px] text-neutral-400 px-1">
        {steps.map((step) => (
          <span key={step}>{step}</span>
        ))}
      </div>
    </div>
  )
}

function MessageBubble({ type, content, actions, theme = "cyan" }: MessageBubbleProps) {
  const isSystem = type === "system"
  const isUser = type === "user"

  let bubbleClasses = "rounded-2xl p-3"
  if (isSystem) {
    bubbleClasses += " rounded-tl-sm bg-neutral-900/60 border border-white/10"
  } else if (isUser) {
    const colors = THEME_COLORS[theme]
    bubbleClasses += ` rounded-tr-sm bg-gradient-to-br ${colors.bg} border ${colors.border}`
  } else {
    bubbleClasses += " rounded-tl-sm bg-neutral-900/60 border border-white/10"
  }

  return (
    <div className={`flex ${isUser ? "items-end gap-2 justify-end" : "items-start gap-2"}`}>
      {!isUser && (
        <div className="size-7 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 border border-cyan-300/60 flex items-center justify-center shrink-0">
          <Sparkles className="w-3.5 h-3.5 text-white" />
        </div>
      )}
      <div className="max-w-[78%] space-y-2">
        <div className={bubbleClasses}>
          <p className="text-[13px] text-neutral-200">{content}</p>
        </div>
        {actions && <div className="flex gap-2">{actions}</div>}
      </div>
    </div>
  )
}

function VoiceVisualizer({ isActive = false, theme = "fuchsia" }: VoiceVisualizerProps) {
  const colors = THEME_COLORS[theme]

  if (!isActive) {
    return (
      <div className="relative w-64 h-64 rounded-full border border-fuchsia-300/40 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black overflow-hidden shadow-[0_0_40px_6px_rgba(217,70,239,0.25)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(217,70,239,0.35),transparent_60%),radial-gradient(circle_at_70%_70%,rgba(168,85,247,0.35),transparent_55%)]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="p-5 rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-600 border border-white/20 shadow-[0_0_28px_8px_rgba(217,70,239,0.35)]">
            <Mic className="w-10 h-10 text-white" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-64 h-64 rounded-full bg-gradient-to-br from-neutral-900 via-neutral-950 to-black border border-fuchsia-300/30 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(217,70,239,0.3),transparent_55%),radial-gradient(circle_at_70%_70%,rgba(168,85,247,0.3),transparent_55%)]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex items-end gap-1.5">
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <span
              key={i}
              className="w-1.5 bg-fuchsia-400/70 rounded-full animate-pulse"
              style={{
                height: `${6 + (i % 3) * 2}px`,
                animationDuration: `${0.9 + i * 0.1}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function ProgressIndicator({ progress, label, theme = "fuchsia" }: ProgressIndicatorProps) {
  const colors = THEME_COLORS[theme]

  return (
    <div className="mt-6">
      <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r from-fuchsia-500 to-purple-500 animate-pulse`}
          style={{ width: `${progress}%` }}
        />
      </div>
      {label && <div className="mt-2 text-[12px] text-neutral-400">{label}</div>}
    </div>
  )
}

// ============================================================================
// Main Component
// ============================================================================

export function MobileStoryboard({
  screens,
  theme = "cyan",
  title = "Storyboard",
  subtitle = "High-level flow with in-progress frames",
  showDeviceSelector = true,
  defaultDevice = "mobile",
  className = "",
}: MobileStoryboardProps) {
  const [selectedDevice, setSelectedDevice] = useState(defaultDevice)
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const flowScreens = screens.filter((s) => s.id.startsWith("core-"))
  const voiceScreens = screens.filter((s) => s.id.startsWith("voice-"))

  const colors = THEME_COLORS[theme]

  return (
    <div className={`w-full min-h-screen bg-neutral-950 text-neutral-100 antialiased ${className}`}>
      {/* Backdrop */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-cyan-500/20 blur-3xl rounded-full" />
      </div>

      {/* Header */}
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
            {/* Left Sidebar */}
            <aside className={`hidden lg:block w-64 shrink-0 border-r border-white/10 min-h-[calc(100vh-56px)] ${!sidebarOpen ? "w-0 overflow-hidden" : ""}`}>
              <div className="p-4">
                <div className="text-[12px] uppercase tracking-wider text-neutral-500 mb-2">Flows</div>
                <nav className="space-y-1">
                  <a className="flex items-center gap-2 px-2.5 py-2 rounded-lg bg-neutral-900/60 border border-white/10 text-[13px]" href="#">
                    <Workflow className="w-4.5 h-4.5 text-cyan-300" />
                    Core: Tailor → Toolbox → Chat
                  </a>
                  <a className="flex items-center gap-2 px-2.5 py-2 rounded-lg hover:bg-neutral-900/40 border border-transparent hover:border-white/10 text-[13px]" href="#">
                    <LogIn className="w-4.5 h-4.5 text-neutral-400" />
                    Onboarding
                  </a>
                  <a className="flex items-center gap-2 px-2.5 py-2 rounded-lg hover:bg-neutral-900/40 border border-transparent hover:border-white/10 text-[13px]" href="#">
                    <House className="w-4.5 h-4.5 text-neutral-400" />
                    Home
                  </a>
                  <a className="flex items-center gap-2 px-2.5 py-2 rounded-lg hover:bg-neutral-900/40 border border-transparent hover:border-white/10 text-[13px]" href="#">
                    <AudioLines className="w-4.5 h-4.5 text-neutral-400" />
                    Voice Picker
                  </a>
                  <a className="flex items-center gap-2 px-2.5 py-2 rounded-lg hover:bg-neutral-900/40 border border-transparent hover:border-white/10 text-[13px]" href="#">
                    <Target className="w-4.5 h-4.5 text-neutral-400" />
                    Goal Setup
                  </a>
                  <a className="flex items-center gap-2 px-2.5 py-2 rounded-lg hover:bg-neutral-900/40 border border-transparent hover:border-white/10 text-[13px]" href="#">
                    <Bell className="w-4.5 h-4.5 text-neutral-400" />
                    Notifications
                  </a>
                  <a className="flex items-center gap-2 px-2.5 py-2 rounded-lg hover:bg-neutral-900/40 border border-transparent hover:border-white/10 text-[13px]" href="#">
                    <Settings className="w-4.5 h-4.5 text-neutral-400" />
                    Settings
                  </a>
                  <a className="flex items-center gap-2 px-2.5 py-2 rounded-lg hover:bg-neutral-900/40 border border-transparent hover:border-white/10 text-[13px]" href="#">
                    <CreditCard className="w-4.5 h-4.5 text-neutral-400" />
                    Billing
                  </a>
                  <a className="flex items-center gap-2 px-2.5 py-2 rounded-lg hover:bg-neutral-900/40 border border-transparent hover:border-white/10 text-[13px]" href="#">
                    <History className="w-4.5 h-4.5 text-neutral-400" />
                    History
                  </a>
                  <a className="flex items-center gap-2 px-2.5 py-2 rounded-lg hover:bg-neutral-900/40 border border-transparent hover:border-white/10 text-[13px]" href="#">
                    <ShieldAlert className="w-4.5 h-4.5 text-neutral-400" />
                    Error States
                  </a>
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
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className={`text-[22px] md:text-[24px] tracking-tight bg-gradient-to-r ${colors.text} bg-clip-text text-transparent`}>
                      {title}
                    </h1>
                    <p className="text-[13px] text-neutral-400">{subtitle}</p>
                  </div>
                  <div className="hidden sm:flex items-center gap-2">
                    <div className="h-9 px-3 rounded-xl bg-neutral-900/60 border border-white/10 text-[13px] flex items-center gap-2">
                      <Grid2x2Check className="w-4.5 h-4.5 text-neutral-300" />
                      Snap to grid
                    </div>

                    {showDeviceSelector && (
                      <div className="h-9 rounded-xl bg-neutral-900/60 border border-white/10 text-[13px] flex items-center p-1 gap-1">
                        <button
                          className={`h-7 px-2.5 rounded-lg flex items-center gap-1.5 ${
                            selectedDevice === "mobile"
                              ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white border border-cyan-300/60"
                              : "border border-white/10 text-neutral-300 hover:border-cyan-400/40"
                          }`}
                          onClick={() => setSelectedDevice("mobile")}
                        >
                          <Smartphone className="w-4 h-4" />
                          <span className="hidden xl:block">Mobile</span>
                          <span className="hidden lg:block opacity-80">390×844</span>
                        </button>
                        <button
                          className={`h-7 px-2.5 rounded-lg flex items-center gap-1.5 ${
                            selectedDevice === "tablet"
                              ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white border border-cyan-300/60"
                              : "border border-white/10 text-neutral-300 hover:border-cyan-400/40"
                          }`}
                          onClick={() => setSelectedDevice("tablet")}
                        >
                          <Tablet className="w-4 h-4" />
                          <span className="hidden xl:block">Tablet</span>
                          <span className="hidden lg:block opacity-60">768×1024</span>
                        </button>
                        <button
                          className={`h-7 px-2.5 rounded-lg flex items-center gap-1.5 ${
                            selectedDevice === "desktop"
                              ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white border border-cyan-300/60"
                              : "border border-white/10 text-neutral-300 hover:border-cyan-400/40"
                          }`}
                          onClick={() => setSelectedDevice("desktop")}
                        >
                          <Monitor className="w-4 h-4" />
                          <span className="hidden xl:block">Desktop</span>
                          <span className="hidden lg:block opacity-60">1280×800</span>
                        </button>
                      </div>
                    )}

                    <div className="h-9 text-[13px] flex gap-2 bg-neutral-900/60 border-white/10 border rounded-xl pr-3 pl-3 items-center">
                      <Ruler className="w-4.5 h-4.5 text-neutral-300" />
                      {selectedDevice === "mobile" ? "390 × 844" : selectedDevice === "tablet" ? "768 × 1024" : "1280 × 800"}
                    </div>
                  </div>
                </div>

                {/* Canvas */}
                <div className="mt-5 rounded-2xl border border-white/10 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px] p-4 sm:p-6">
                  {/* Core Flow Lane */}
                  {flowScreens.length > 0 && (
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="size-2 rounded-full bg-cyan-400" />
                        <div className="text-[13px] text-neutral-300 tracking-tight">Core Flow</div>
                        <div className="text-[12px] text-neutral-500">Tailor → Toolbox → Conversation</div>
                      </div>

                      <div className="relative">
                        <div className="flex gap-6 overflow-x-auto pb-2 items-start">
                          {flowScreens.map((screen, index) => (
                            <React.Fragment key={screen.id}>
                              <ScreenCard theme={theme} label={`${index + 1} · ${screen.label || screen.title}`}>
                                {screen.component}
                              </ScreenCard>
                              {index < flowScreens.length - 1 && <Connector theme={theme} />}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Voice Flow Lane */}
                  {voiceScreens.length > 0 && (
                    <div className="mt-10">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="size-2 rounded-full bg-fuchsia-400" />
                        <div className="text-[13px] text-neutral-300 tracking-tight">Voice Assistant</div>
                        <div className="text-[12px] text-neutral-500">Idle → Listening → Transcribing → Responding</div>
                      </div>

                      <div className="relative">
                        <div className="flex gap-6 overflow-x-auto pb-2 items-start">
                          {voiceScreens.map((screen, index) => (
                            <React.Fragment key={screen.id}>
                              <ScreenCard theme={theme} label={`${String.fromCharCode(65 + index)} · ${screen.label || screen.title}`}>
                                {screen.component}
                              </ScreenCard>
                              {index < voiceScreens.length - 1 && <Connector theme={theme} />}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}

// ============================================================================
// Export Helper Components for Custom Screen Creation
// ============================================================================

export {
  DeviceFrame,
  StatusBar,
  ScreenCard,
  Connector,
  SkillBadge,
  ToolCard,
  Stepper,
  MessageBubble,
  VoiceVisualizer,
  ProgressIndicator,
  THEME_COLORS,
}
