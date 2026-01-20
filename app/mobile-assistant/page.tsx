"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import {
  Signal,
  Wifi,
  Plus,
  Mic,
  ChevronLeft,
  Sparkles,
  Image,
  FileText,
  Code,
  Lightbulb,
  CheckCircle,
} from "lucide-react"
import { Suspense } from "react"
import { Shell } from "@/components/shell"
import { ErrorBoundary } from "@/components/error-boundary"
import { PageLoader } from "@/components/page-loader"


/**
 * Mobile Voice Assistant Page
 *
 * Showcases the HAUS voice-native assistant with three mobile screen designs:
 * - Onboarding screen with video orb
 * - Home/Dashboard with recent conversations
 * - Live Listening with animated text transcription
 */

interface Conversation {
  id: string
  title: string
  description: string
  time: string
  messageCount: number
  color: string
  textColor: string
}

interface QuickAction {
  icon: React.ReactNode
  label: string
  gradient: string
  borderColor: string
  textColor: string
}

interface StudioScreen {
  name: string
  dotColor: string
}

const todayConversations: Conversation[] = [
  {
    id: "1",
    title: "Draft follow-up email",
    description: "Summarize yesterday's call and propose next steps for the Q4 launch timeline...",
    time: "2 hours ago",
    messageCount: 23,
    color: "bg-cyan-400",
    textColor: "text-cyan-400",
  },
  {
    id: "2",
    title: "Code review and optimization",
    description: "Scan for unnecessary renders, suggest memoization, and refine effects dependencies.",
    time: "4 hours ago",
    messageCount: 18,
    color: "bg-blue-500",
    textColor: "text-blue-400",
  },
] as const

const yesterdayConversations: Conversation[] = [
  {
    id: "3",
    title: "Design system documentation",
    description: "Generate usage guidelines, props tables, and accessibility notes for core components.",
    time: "Yesterday",
    messageCount: 31,
    color: "bg-sky-400",
    textColor: "text-sky-400",
  },
  {
    id: "4",
    title: "Business plan draft",
    description: "Outline target market, pricing, GTM channels, and 12-month milestones.",
    time: "Yesterday",
    messageCount: 45,
    color: "bg-indigo-400",
    textColor: "text-indigo-400",
  },
] as const

const quickActions: QuickAction[] = [
  {
    icon: <Image className="w-4 h-4 text-cyan-400" aria-hidden="true" />,
    label: "Image",
    gradient: "from-cyan-400/10 to-cyan-400/5",
    borderColor: "border-cyan-400/20 hover:border-cyan-400/30",
    textColor: "text-cyan-400",
  },
  {
    icon: <FileText className="w-4 h-4 text-blue-400" aria-hidden="true" />,
    label: "Text",
    gradient: "from-blue-400/10 to-blue-400/5",
    borderColor: "border-blue-400/20 hover:border-blue-400/30",
    textColor: "text-blue-400",
  },
  {
    icon: <Code className="w-4 h-4 text-sky-400" aria-hidden="true" />,
    label: "Code",
    gradient: "from-sky-400/10 to-sky-400/5",
    borderColor: "border-sky-400/20 hover:border-sky-400/30",
    textColor: "text-sky-400",
  },
  {
    icon: <Lightbulb className="w-4 h-4 text-indigo-400" aria-hidden="true" />,
    label: "Ideas",
    gradient: "from-indigo-400/10 to-indigo-400/5",
    borderColor: "border-indigo-400/20 hover:border-indigo-400/30",
    textColor: "text-indigo-400",
  },
] as const

const studioScreens: StudioScreen[] = [
  { name: "Onboarding", dotColor: "bg-cyan-400" },
  { name: "Home", dotColor: "bg-blue-400" },
  { name: "Live Listening", dotColor: "bg-sky-400" },
] as const

function MobileAssistantPageContent() {
  const [animatedText, setAnimatedText] = useState("")
  const [isListening] = useState(true)
  const animationRef = useRef<NodeJS.Timeout | null>(null)

  const fullText =
    "Schedule a 30-minute sync with the design team next Tuesday at 10am, then draft a concise agenda with three key discussion points and share it in the project channel."

  // Type animation effect
  useEffect(() => {
    let currentIndex = 0

    const typeText = () => {
      if (currentIndex < fullText.length) {
        setAnimatedText(fullText.substring(0, currentIndex + 1))
        currentIndex++
        animationRef.current = setTimeout(typeText, 45)
      } else {
        animationRef.current = setTimeout(() => {
          currentIndex = 0
          setAnimatedText("")
          setTimeout(typeText, 500)
        }, 1600)
      }
    }

    typeText()

    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current)
      }
    }
  }, [])

  return (
    <div
      className="min-h-screen bg-neutral-950 text-neutral-100 antialiased"
      style={{
        fontFamily:
          "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji",
      }}
    >
      {/* Custom Styles */}
      <style jsx global>{`
        @keyframes neonPulse {
          0%,
          100% {
            box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1),
              inset 0 2px 4px rgba(0, 0, 0, 0.3),
              inset 0 0 15px rgba(6, 182, 212, 0.3),
              inset 0 0 25px rgba(59, 130, 246, 0.2);
          }
          50% {
            box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15),
              inset 0 2px 4px rgba(0, 0, 0, 0.3),
              inset 0 0 25px rgba(6, 182, 212, 0.5),
              inset 0 0 40px rgba(59, 130, 246, 0.3),
              inset 0 0 60px rgba(6, 182, 212, 0.2);
          }
        }
        .neon-border {
          animation: neonPulse 3s ease-in-out infinite;
        }
        @keyframes entranceSlideUp {
          0% {
            opacity: 0;
            transform: translateY(80px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .entrance-animation-1 {
          animation: entranceSlideUp 0.8s ease-out forwards;
          animation-delay: 0.2s;
          opacity: 0;
        }
        .entrance-animation-2 {
          animation: entranceSlideUp 0.8s ease-out forwards;
          animation-delay: 0.4s;
          opacity: 0;
        }
        .entrance-animation-3 {
          animation: entranceSlideUp 0.8s ease-out forwards;
          animation-delay: 0.6s;
          opacity: 0;
        }
      `}</style>

      <main className="min-h-screen w-full flex flex-col items-center justify-start" aria-labelledby="mobile-assistant-heading">
        <h1 id="mobile-assistant-heading" className="sr-only">Mobile Voice Assistant Showcase</h1>

        {/* Backdrop */}
        <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden="true">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-cyan-500/20 blur-3xl rounded-full" />
        </div>

        {/* Phones Section */}
        <section className="mx-auto max-w-[1400px] px-4 sm:px-8 py-8" aria-labelledby="phones-section-heading">
          <h2 id="phones-section-heading" className="sr-only">Phone Screens</h2>
          <div className="grid gap-8 xl:gap-10 grid-cols-1 lg:grid-cols-3 place-items-center">
            {/* Screen 1 - Onboarding */}
            <div className="w-[390px] max-w-full entrance-animation-1">
              <PhoneFrame>
                <StatusBar />
                <div className="relative flex flex-col h-full pt-12 pr-8 pb-8 pl-8">
                  {/* Video orb */}
                  <div className="relative mx-auto mt-12 w-72 h-72 rounded-full overflow-hidden">
                    <span className="absolute inset-0 ring-[40px] ring-cyan-400/20 z-10 rounded-full" aria-hidden="true" />
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover rounded-full"
                      style={{
                        filter: "brightness(1.1) contrast(1.2) saturate(1.1)",
                      }}
                    >
                      <source
                        src="https://cdn.midjourney.com/video/6f26b771-e923-4933-b969-0ea6f7611832/0.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>

                  {/* Headline */}
                  <div className="flex-1 flex flex-col justify-center mt-6">
                    <h2 className="text-[38px] leading-[1.05] text-white/90 tracking-tight">
                      Meet HAUS, your voice-native assistant
                    </h2>
                    <p className="text-[16px] leading-6 text-neutral-400 mt-4">
                      Control your workflow hands-free with contextual voice
                      commands and seamless AI actions
                    </p>

                    {/* Pager dots */}
                    <div className="mt-8 flex items-center gap-2" aria-label="Screens navigation">
                      <span className="w-8 h-1.5 rounded-full bg-cyan-400/80" aria-current="page" />
                      <span className="w-2 h-1.5 rounded-full bg-neutral-700" aria-hidden="true" />
                      <span className="w-2 h-1.5 rounded-full bg-neutral-700" aria-hidden="true" />
                      <span className="w-2 h-1.5 rounded-full bg-neutral-700" aria-hidden="true" />
                    </div>
                  </div>

                  {/* CTA buttons */}
                  <div className="space-y-3 mb-8">
                    <button
                      className="w-full h-14 rounded-2xl text-[15px] tracking-[0.04em] text-white"
                      style={{
                        border: "2px solid #00D4FF",
                        background:
                          "linear-gradient(to right, rgba(0,212,255,0.45) 1%, rgba(0,212,255,0.6) 40%, rgba(0,212,255,0.6) 60%, rgba(0,212,255,0.4) 100%)",
                        boxShadow:
                          "rgba(0,212,255,0.4) 0 0 10px inset, rgba(0,212,255,0.12) 0 0 9px 3px",
                      }}
                    >
                      Sign up
                    </button>
                    <button
                      className="w-full h-14 rounded-2xl text-[15px] tracking-[0.04em] transition-all duration-200"
                      style={{
                        border: "2px solid #00B4FF",
                        background:
                          "linear-gradient(to right, rgba(0,180,255,0.12) 1%, transparent 40%, transparent 60%, rgba(0,180,255,0.12) 100%)",
                        color: "#00B4FF",
                        boxShadow:
                          "rgba(0,180,255,0.45) 0 0 10px inset, rgba(0,180,255,0.12) 0 0 9px 3px",
                      }}
                    >
                      Sign in
                    </button>
                  </div>

                  <HomeIndicator />
                </div>
              </PhoneFrame>
            </div>

            {/* Screen 2 - Home / Dashboard */}
            <div className="w-[390px] max-w-full entrance-animation-2">
              <PhoneFrame>
                <StatusBar />
                <div className="relative flex flex-col h-full pt-4 pr-6 pb-6 pl-6">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="relative p-[2px] rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500">
                        <img
                          src="https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=300&auto=format&fit=crop"
                          className="h-8 w-8 rounded-full object-cover"
                          alt="User avatar"
                        />
                      </div>
                      <div>
                        <h2 className="text-[18px] text-white tracking-tight">
                          HAUS Voice Assistant
                        </h2>
                      </div>
                    </div>
                    <button className="size-8 rounded-full bg-neutral-900/60 border border-white/10 flex items-center justify-center" aria-label="New conversation">
                      <Plus className="w-4 h-4 text-neutral-300" />
                    </button>
                  </div>

                  {/* Recent Conversations */}
                  <div className="flex-1 space-y-4 mb-6 overflow-y-auto">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm text-neutral-300">
                        Recent conversations
                      </h3>
                      <button className="text-xs text-cyan-400">See all</button>
                    </div>

                    <div className="space-y-3">
                      <div className="text-xs text-neutral-500 px-1">Today</div>

                      {todayConversations.map((conversation) => (
                        <ConversationCard
                          key={conversation.id}
                          conversation={conversation}
                        />
                      ))}

                      <div className="text-xs text-neutral-500 px-1 pt-2">
                        Yesterday
                      </div>

                      {yesterdayConversations.map((conversation) => (
                        <ConversationCard
                          key={conversation.id}
                          conversation={conversation}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="mb-4 p-4 rounded-xl border border-white/10 bg-neutral-900/30">
                    <h4 className="text-xs text-neutral-400 mb-3 px-1">
                      Quick actions
                    </h4>
                    <div className="grid grid-cols-4 gap-2" role="list" aria-label="Quick actions">
                      {quickActions.map((action, index) => (
                        <button
                          key={index}
                          className={`p-3 rounded-xl bg-gradient-to-b ${action.gradient} border ${action.borderColor} flex flex-col items-center gap-1.5 transition-colors`}
                          aria-label={action.label}
                        >
                          {action.icon}
                          <span className={`text-xs ${action.textColor}`}>
                            {action.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Voice Command Button */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 -z-10 blur-xl bg-gradient-to-r from-blue-400/30 via-cyan-400/25 to-sky-500/30 rounded-2xl scale-110" aria-hidden="true" />
                    <div className="absolute inset-0 -z-10 blur-sm bg-gradient-to-r from-cyan-400/20 via-blue-400/15 to-sky-400/20 rounded-2xl" aria-hidden="true" />

                    <button
                      className="group relative w-full h-14 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-sky-500/10 border-2 border-cyan-400/40 text-white text-[15px] flex items-center justify-center gap-3 hover:border-cyan-400/70 hover:from-cyan-500/15 hover:via-blue-500/15 hover:to-sky-500/15 transition-all duration-300 overflow-hidden shadow-lg shadow-cyan-400/20"
                      style={{ backdropFilter: "blur(12px)" }}
                      aria-label="Tap to speak with HAUS voice assistant"
                    >
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-cyan-400/8 via-blue-400/12 to-sky-400/8" aria-hidden="true" />
                      <div className="relative z-10 p-1.5 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 group-hover:scale-110 transition-transform duration-300">
                        <Mic className="w-4 h-4 text-white" aria-hidden="true" />
                      </div>
                      <span className="relative z-10 group-hover:text-cyan-100">
                        Tap to speak with HAUS
                      </span>
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/8 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Status */}
                  <div className="flex items-center justify-center gap-2 mb-8" role="status" aria-live="polite">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" aria-hidden="true" />
                    <span className="text-xs text-neutral-400">
                      HAUS is ready
                    </span>
                  </div>

                  <HomeIndicator />
                </div>
              </PhoneFrame>
            </div>

            {/* Screen 3 - Live Listening */}
            <div className="w-[390px] max-w-full entrance-animation-3">
              <PhoneFrame>
                <StatusBar />
                <div className="relative px-8 pb-8 pt-6 flex flex-col h-full">
                  {/* Top bar */}
                  <div className="flex items-center justify-between">
                    <button className="size-10 rounded-full bg-neutral-900/70 border border-white/10 flex items-center justify-center" aria-label="Go back">
                      <ChevronLeft className="w-5 h-5 text-neutral-300" />
                    </button>
                    <button className="size-10 rounded-full bg-gradient-to-b from-cyan-400 to-blue-500 flex items-center justify-center shadow-[0_0_24px_4px_rgba(34,211,238,0.35)]" aria-label="Open settings">
                      <Sparkles className="w-5 h-5 text-white" />
                    </button>
                  </div>

                  {/* Animated prompt text */}
                  <div className="mt-8 min-h-[128px]">
                    <div className="text-[19px] leading-7 tracking-tight">
                      <span className="block bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-300 bg-clip-text text-transparent">
                        {animatedText || "A"}
                      </span>
                    </div>
                  </div>

                  {/* Voice orb */}
                  <div className="flex-1 flex items-center justify-center">
                    <div className="relative z-10 flex items-center justify-center w-56 h-56 rounded-full overflow-hidden">
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover rounded-full"
                        style={{
                          filter: "brightness(1.1) contrast(1.2) saturate(1.1)",
                        }}
                      >
                        <source
                          src="https://cdn.midjourney.com/video/5029e61e-010a-4f9f-8daf-ef0a0ff34af6/3.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </div>

                  <div className="text-center mb-8" role="status" aria-live="polite">
                    <p className="animate-pulse text-sm text-neutral-400">
                      {isListening ? "Listening..." : "Paused"}
                    </p>
                  </div>

                  <HomeIndicator />
                </div>
              </PhoneFrame>
            </div>
          </div>
        </section>

        {/* Studio Section */}
        <section className="mx-auto max-w-[1400px] w-full px-4 sm:px-8 pb-16" aria-labelledby="studio-section-heading">
          <h2 id="studio-section-heading" className="sr-only">Studio Screens</h2>
          <div className="flex items-end justify-between pt-6 mt-2 border-t border-white/10">
            <div>
              <h2 className="text-[22px] tracking-tight text-white/90">
                Studio
              </h2>
              <p className="text-sm text-neutral-400 mt-1">
                Added previews of your current screens
              </p>
            </div>
            <div className="text-xs text-neutral-400">3 items</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6" role="list" aria-label="Studio screen previews">
            {studioScreens.map((screen, index) => (
              <StudioCard key={screen.name} screen={screen} index={index} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

// Phone Frame Component
function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative rounded-[3rem] p-[2px] bg-gradient-to-b from-cyan-400/60 via-blue-500/40 to-cyan-500/60 shadow-[0_20px_80px_-12px_rgba(6,182,212,0.4)]">
      <div className="rounded-[2.9rem] bg-black overflow-hidden h-[844px] relative neon-border" role="img" aria-label="iPhone frame">
        {children}
      </div>
    </div>
  )
}

// Status Bar Component
function StatusBar() {
  return (
    <div className="flex items-center justify-between px-8 pt-4 pb-2" role="status" aria-label="Phone status bar">
      <div className="text-white text-sm">9:41</div>
      <div className="w-6 h-5 rounded-full bg-neutral-800/70" aria-hidden="true" />
      <div className="flex items-center gap-1 text-white" aria-label="Connectivity">
        <Signal className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
        <Wifi className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
        <div className="w-6 h-3 rounded-sm border border-white/60 relative" aria-label="Battery">
          <div className="absolute inset-0.5 bg-white rounded-[1px]" aria-hidden="true" />
          <div className="absolute -right-0.5 top-1 w-0.5 h-1 bg-white/60 rounded-r-sm" aria-hidden="true" />
        </div>
      </div>
    </div>
  )
}

// Home Indicator Component
function HomeIndicator() {
  return <div className="w-36 h-1 bg-white/30 rounded-full mx-auto" role="presentation" />
}

// Conversation Card Component
function ConversationCard({ conversation }: { conversation: Conversation }) {
  return (
    <div className="p-3 rounded-xl bg-neutral-900/40 border border-white/5 hover:border-cyan-400/20 transition-colors" role="listitem">
      <div className="flex items-start gap-3">
        <div
          className={`size-2 rounded-full ${conversation.color} mt-2 flex-shrink-0`}
          aria-hidden="true"
        />
        <div className="flex-1 min-w-0">
          <p className="text-[13px] text-neutral-200 line-clamp-1">
            {conversation.title}
          </p>
          <p className="text-xs text-neutral-500 mt-1 line-clamp-2">
            {conversation.description}
          </p>
          <div className="flex items-center justify-between mt-2">
            <span className="text-xs text-neutral-600">{conversation.time}</span>
            <span className={`text-xs ${conversation.textColor}`}>
              {conversation.messageCount} messages
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

// Studio Card Component
function StudioCard({
  screen,
  index,
}: {
  screen: StudioScreen
  index: number
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-neutral-900/40 p-3" role="listitem">
      <div className="flex items-center justify-between mb-3 px-1">
        <div className="flex items-center gap-2">
          <span className={`w-1.5 h-1.5 rounded-full ${screen.dotColor}`} aria-hidden="true" />
          <span className="text-sm text-neutral-200">{screen.name}</span>
        </div>
        <div className="inline-flex items-center gap-1 text-xs text-cyan-400">
          <CheckCircle className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
          Added
        </div>
      </div>
      <div className="relative w-full h-[440px] overflow-hidden rounded-xl border border-white/10 bg-neutral-950">
        <div
          className="origin-top mx-auto"
          style={{
            transform: "scale(0.5)",
            transformOrigin: "top center",
            width: "390px",
          }}
        >
          {/* Placeholder content for studio preview */}
          <div className="h-[844px] bg-gradient-to-b from-neutral-900 to-black rounded-[2.9rem] flex items-center justify-center" aria-hidden="true">
            <div className="text-neutral-600 text-sm">
              {screen.name} Preview
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function MobileAssistantPage() {
  return (
    <ErrorBoundary>
      <Shell>
        <Suspense fallback={<PageLoader text="Loading mobile assistant..." />}>
          <MobileAssistantPageContent />
        </Suspense>
      </Shell>
    </ErrorBoundary>
  )
}
