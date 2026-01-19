import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Signal,
  Wifi,
  Mic,
  Sparkles,
  Plus,
  Image,
  FileText,
  MessageSquare,
  Code,
  Lightbulb,
  ChevronLeft,
  CheckCircle,
} from "lucide-react";

interface Conversation {
  id: string;
  title: string;
  preview: string;
  time: string;
  messages: number;
  color: string;
}

interface QuickAction {
  id: string;
  label: string;
  icon: any;
  gradientFrom: string;
  gradientTo: string;
  borderColor: string;
  iconColor: string;
}

const MobileVoiceAssistant = () => {
  const [mounted, setMounted] = useState(false);
  const [animatedText, setAnimatedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const fullText =
    'Schedule a 30-minute sync with the design team next Tuesday at 10am, then draft a concise agenda with three key discussion points and share it in the project channel.';

  useEffect(() => {
    setMounted(true);

    // Typing animation
    const typeText = () => {
      if (currentIndex < fullText.length) {
        setAnimatedText(fullText.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
        intervalRef.current = setTimeout(typeText, 45);
      } else {
        intervalRef.current = setTimeout(() => {
          setCurrentIndex(0);
          setAnimatedText("");
          intervalRef.current = setTimeout(typeText, 500);
        }, 1600);
      }
    };

    intervalRef.current = setTimeout(typeText, 500);

    return () => {
      if (intervalRef.current) {
        clearTimeout(intervalRef.current);
      }
    };
  }, [currentIndex]);

  const conversations: Conversation[] = [
    {
      id: "1",
      title: "Draft follow-up email",
      preview:
        "Summarize yesterday's call and propose next steps for the Q4 launch timeline...",
      time: "2 hours ago",
      messages: 23,
      color: "cyan",
    },
    {
      id: "2",
      title: "Code review and optimization",
      preview:
        "Scan for unnecessary renders, suggest memoization, and refine effects dependencies.",
      time: "4 hours ago",
      messages: 18,
      color: "blue",
    },
    {
      id: "3",
      title: "Design system documentation",
      preview:
        "Generate usage guidelines, props tables, and accessibility notes for core components.",
      time: "Yesterday",
      messages: 31,
      color: "sky",
    },
    {
      id: "4",
      title: "Business plan draft",
      preview:
        "Outline target market, pricing, GTM channels, and 12-month milestones.",
      time: "Yesterday",
      messages: 45,
      color: "indigo",
    },
  ];

  const quickActions: QuickAction[] = [
    {
      id: "1",
      label: "Image",
      icon: Image,
      gradientFrom: "from-cyan-400/10",
      gradientTo: "to-cyan-400/5",
      borderColor: "border-cyan-400/20",
      iconColor: "text-cyan-400",
    },
    {
      id: "2",
      label: "Text",
      icon: FileText,
      gradientFrom: "from-blue-400/10",
      gradientTo: "to-blue-400/5",
      borderColor: "border-blue-400/20",
      iconColor: "text-blue-400",
    },
    {
      id: "3",
      label: "Code",
      icon: MessageSquare,
      gradientFrom: "from-sky-400/10",
      gradientTo: "to-sky-400/5",
      borderColor: "border-sky-400/20",
      iconColor: "text-sky-400",
    },
    {
      id: "4",
      label: "Ideas",
      icon: Lightbulb,
      gradientFrom: "from-indigo-400/10",
      gradientTo: "to-indigo-400/5",
      borderColor: "border-indigo-400/20",
      iconColor: "text-indigo-400",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans antialiased">
      {/* Backdrop */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-cyan-500/20 blur-3xl rounded-full" />
      </div>

      {/* Hero Section with Phones */}
      <section
        className="mx-auto max-w-[1400px] px-4 sm:px-8 py-8"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div className="grid gap-8 xl:gap-10 grid-cols-1 lg:grid-cols-3 place-items-center">
          {/* Screen 1 — Onboarding */}
          <div className="w-[390px] max-w-full">
            <div
              className="relative rounded-[3rem] p-[2px] bg-gradient-to-b from-cyan-400/60 via-blue-500/40 to-cyan-500/60 shadow-[0_20px_80px_-12px_rgba(6,182,212,0.4)]"
              style={{ animation: "entranceSlideUp 0.8s ease-out forwards 0.2s", opacity: 0 }}
            >
              <div className="rounded-[2.9rem] bg-black overflow-hidden h-[844px] relative neon-border">
                <StatusBar />

                <div className="relative flex flex-col h-full pt-12 pr-8 pb-8 pl-8">
                  {/* Video Orb */}
                  <div className="relative mx-auto mt-12 w-72 h-72 rounded-full overflow-hidden">
                    <span className="absolute inset-0 ring-[40px] ring-cyan-400/20 z-10 rounded-full" />
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover rounded-full"
                      style={{ filter: "brightness(1.1) contrast(1.2) saturate(1.1)" }}
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
                      Control your workflow hands-free with contextual voice commands
                      and seamless AI actions
                    </p>

                    {/* Pager Dots */}
                    <div className="mt-8 flex items-center gap-2">
                      <span className="w-8 h-1.5 rounded-full bg-cyan-400/80" />
                      <span className="w-2 h-1.5 rounded-full bg-neutral-700" />
                      <span className="w-2 h-1.5 rounded-full bg-neutral-700" />
                      <span className="w-2 h-1.5 rounded-full bg-neutral-700" />
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-3 mb-8">
                    <button
                      className="w-full h-14 rounded-2xl neon-cyan-btn"
                      style={{
                        fontSize: "15px",
                        padding: "0.7em 2.7em",
                        letterSpacing: "0.04em",
                        borderRadius: "0.9em",
                        border: "2px solid #00D4FF",
                        background:
                          "linear-gradient(to right, rgba(0,212,255,0.45) 1%, rgba(0,212,255,0.6) 40%, rgba(0,212,255,0.6) 60%, rgba(0,212,255,0.4) 100%)",
                        color: "#fff",
                        boxShadow:
                          "rgba(0,212,255,0.4) 0 0 10px inset, rgba(0,212,255,0.12) 0 0 9px 3px",
                      }}
                    >
                      Sign up
                    </button>
                    <button
                      className="w-full h-14 rounded-2xl neon-blue-btn"
                      style={{
                        fontSize: "15px",
                        padding: "0.7em 2.7em",
                        letterSpacing: "0.04em",
                        borderRadius: "0.9em",
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

                  {/* Home Indicator */}
                  <div className="w-36 h-1 bg-white/30 rounded-full mx-auto" />
                </div>
              </div>
            </div>
          </div>

          {/* Screen 2 — Home / Dashboard */}
          <div className="w-[390px] max-w-full">
            <div
              className="relative shadow-[0_20px_80px_-12px_rgba(6,182,212,0.4)] bg-gradient-to-b from-cyan-400/60 via-blue-500/40 to-cyan-500/60 rounded-[3rem] p-[2px]"
              style={{ animation: "entranceSlideUp 0.8s ease-out forwards 0.4s", opacity: 0 }}
            >
              <div className="overflow-hidden h-[844px] relative bg-black rounded-[2.9rem] neon-border">
                <StatusBar />

                <div className="relative flex flex-col h-full pt-4 pr-6 pb-6 pl-6">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="relative p-[2px] rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500">
                        <img
                          src="https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=300&auto=format&fit=crop"
                          className="h-8 w-8 rounded-full object-cover"
                          alt="Profile"
                        />
                      </div>
                      <div>
                        <h2 className="text-[18px] text-white tracking-tight">
                          HAUS Voice Assistant
                        </h2>
                      </div>
                    </div>
                    <button className="w-8 h-8 rounded-full bg-neutral-900/60 border border-white/10 flex items-center justify-center">
                      <Plus className="w-4 h-4 text-neutral-300" />
                    </button>
                  </div>

                  {/* Recent Conversations */}
                  <div className="flex-1 space-y-4 mb-6 overflow-y-auto">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm text-neutral-300">Recent conversations</h3>
                      <button className="text-xs text-cyan-400">See all</button>
                    </div>

                    <div className="space-y-3">
                      <div className="text-xs text-neutral-500 px-1">Today</div>

                      {conversations.slice(0, 2).map((conv) => (
                        <div
                          key={conv.id}
                          className="p-3 rounded-xl bg-neutral-900/40 border border-white/5 hover:border-cyan-400/20 transition-colors"
                        >
                          <div className="flex items-start gap-3">
                            <div
                              className={`w-2 h-2 rounded-full bg-${conv.color}-400 mt-2 flex-shrink-0`}
                            />
                            <div className="flex-1 min-w-0">
                              <p className="text-[13px] text-neutral-200 line-clamp-1">
                                {conv.title}
                              </p>
                              <p className="text-xs text-neutral-500 mt-1 line-clamp-2">
                                {conv.preview}
                              </p>
                              <div className="flex items-center justify-between mt-2">
                                <span className="text-xs text-neutral-600">
                                  {conv.time}
                                </span>
                                <span className={`text-xs text-${conv.color}-400`}>
                                  {conv.messages} messages
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}

                      <div className="text-xs text-neutral-500 px-1 pt-2">
                        Yesterday
                      </div>

                      {conversations.slice(2).map((conv) => (
                        <div
                          key={conv.id}
                          className="p-3 rounded-xl bg-neutral-900/40 border border-white/5 hover:border-cyan-400/20 transition-colors"
                        >
                          <div className="flex items-start gap-3">
                            <div
                              className={`w-2 h-2 rounded-full bg-${conv.color}-400 mt-2 flex-shrink-0`}
                            />
                            <div className="flex-1 min-w-0">
                              <p className="text-[13px] text-neutral-200 line-clamp-1">
                                {conv.title}
                              </p>
                              <p className="text-xs text-neutral-500 mt-1 line-clamp-2">
                                {conv.preview}
                              </p>
                              <div className="flex items-center justify-between mt-2">
                                <span className="text-xs text-neutral-600">
                                  {conv.time}
                                </span>
                                <span className={`text-xs text-${conv.color}-400`}>
                                  {conv.messages} messages
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="mb-4 p-4 rounded-xl border border-white/10 bg-neutral-900/30">
                    <h4 className="text-xs text-neutral-400 mb-3 px-1">Quick actions</h4>
                    <div className="grid grid-cols-4 gap-2">
                      {quickActions.map((action) => (
                        <button
                          key={action.id}
                          className={`p-3 rounded-xl bg-gradient-to-b ${action.gradientFrom} ${action.gradientTo} border ${action.borderColor} flex flex-col items-center gap-1.5 hover:opacity-80 transition-colors`}
                        >
                          <action.icon className={`w-4 h-4 ${action.iconColor}`} />
                          <span className={`text-xs ${action.iconColor}`}>{action.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Voice Command Button */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 -z-10 blur-xl bg-gradient-to-r from-blue-400/30 via-cyan-400/25 to-sky-500/30 rounded-2xl scale-110" />
                    <div className="absolute inset-0 -z-10 blur-sm bg-gradient-to-r from-cyan-400/20 via-blue-400/15 to-sky-400/20 rounded-2xl" />

                    <button className="group relative w-full h-14 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-sky-500/10 border-2 border-cyan-400/40 text-white text-[15px] flex items-center justify-center gap-3 hover:border-cyan-400/70 hover:from-cyan-500/15 hover:via-blue-500/15 hover:to-sky-500/15 transition-all duration-300 overflow-hidden shadow-lg shadow-cyan-400/20 backdrop-blur-md">
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-cyan-400/8 via-blue-400/12 to-sky-400/8" />
                      <div className="relative z-10 p-1.5 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 group-hover:scale-110 transition-transform duration-300">
                        <Mic className="w-4 h-4 text-white" />
                      </div>
                      <span className="relative z-10 group-hover:text-cyan-100">
                        Tap to speak with HAUS
                      </span>
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/8 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
                    </button>
                  </div>

                  {/* Status */}
                  <div className="flex items-center justify-center gap-2 mb-8">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                    <span className="text-xs text-neutral-400">HAUS is ready</span>
                  </div>

                  {/* Home Indicator */}
                  <div className="w-36 h-1 bg-white/30 rounded-full mx-auto" />
                </div>
              </div>
            </div>
          </div>

          {/* Screen 3 — Live Listening */}
          <div className="w-[390px] max-w-full">
            <div
              className="relative rounded-[3rem] p-[2px] bg-gradient-to-b from-cyan-400/60 via-blue-500/40 to-cyan-500/60 shadow-[0_20px_80px_-12px_rgba(6,182,212,0.4)]"
              style={{ animation: "entranceSlideUp 0.8s ease-out forwards 0.6s", opacity: 0 }}
            >
              <div className="rounded-[2.9rem] bg-black overflow-hidden h-[844px] relative neon-border">
                <StatusBar />

                <div className="relative px-8 pb-8 pt-6 flex flex-col h-full">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between">
                    <button className="w-10 h-10 rounded-full bg-neutral-900/70 border border-white/10 flex items-center justify-center">
                      <ChevronLeft className="w-5 h-5 text-neutral-300" />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-gradient-to-b from-cyan-400 to-blue-500 flex items-center justify-center shadow-[0_0_24px_4px_rgba(34,211,238,0.35)]">
                      <Sparkles className="w-5 h-5 text-white" />
                    </button>
                  </div>

                  {/* Animated Prompt Text */}
                  <div className="mt-8 min-h-[128px]">
                    <div className="text-[19px] leading-7 tracking-tight">
                      <span className="block bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-300 bg-clip-text text-transparent">
                        {animatedText}
                      </span>
                    </div>
                  </div>

                  {/* Voice Orb */}
                  <div className="flex-1 flex items-center justify-center">
                    <div className="relative z-10 flex items-center justify-center w-56 h-56 rounded-full overflow-hidden">
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover rounded-full"
                        style={{ filter: "brightness(1.1) contrast(1.2) saturate(1.1)" }}
                      >
                        <source
                          src="https://cdn.midjourney.com/video/5029e61e-010a-4f9f-8daf-ef0a0ff34af6/3.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </div>

                  <div className="text-center mb-8">
                    <p className="animate-pulse text-sm text-neutral-400">Listening...</p>
                  </div>

                  {/* Home Indicator */}
                  <div className="w-36 h-1 bg-white/30 rounded-full mx-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Section */}
      <section className="mx-auto max-w-[1400px] w-full px-4 sm:px-8 pb-16">
        <div className="flex items-end justify-between pt-6 mt-2 border-t border-white/10">
          <div>
            <h2 className="text-[22px] tracking-tight text-white/90">Studio</h2>
            <p className="text-sm text-neutral-400 mt-1">
              Added previews of your current screens
            </p>
          </div>
          <div className="text-xs text-neutral-400">3 items</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {/* Studio Previews - Simplified for now */}
          <div className="rounded-2xl border border-white/10 bg-neutral-900/40 p-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="text-sm text-neutral-200">Onboarding</span>
            <span className="inline-flex items-center gap-1 text-xs text-cyan-400 ml-auto">
              <CheckCircle className="w-4 h-4" />
              Added
            </span>
          </div>
          <div className="rounded-2xl border border-white/10 bg-neutral-900/40 p-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span className="text-sm text-neutral-200">Home</span>
            <span className="inline-flex items-center gap-1 text-xs text-cyan-400 ml-auto">
              <CheckCircle className="w-4 h-4" />
              Added
            </span>
          </div>
          <div className="rounded-2xl border border-white/10 bg-neutral-900/40 p-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            <span className="text-sm text-neutral-200">Live Listening</span>
            <span className="inline-flex items-center gap-1 text-xs text-cyan-400 ml-auto">
              <CheckCircle className="w-4 h-4" />
              Added
            </span>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes neonPulse {
          0%, 100% {
            box-shadow:
              inset 0 0 0 1px rgba(255, 255, 255, 0.1),
              inset 0 2px 4px rgba(0, 0, 0, 0.3),
              inset 0 0 15px rgba(6, 182, 212, 0.3),
              inset 0 0 25px rgba(59, 130, 246, 0.2);
          }
          50% {
            box-shadow:
              inset 0 0 0 1px rgba(255, 255, 255, 0.15),
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
        .neon-cyan-btn:hover {
          background: linear-gradient(
            to right,
            rgba(0, 212, 255, 0.6) 1%,
            rgba(0, 212, 255, 0.75) 40%,
            rgba(0, 212, 255, 0.75) 60%,
            rgba(0, 212, 255, 0.55) 100%
          );
          box-shadow: inset 0 0 15px rgba(0, 212, 255, 0.6),
            0 0 15px 5px rgba(0, 212, 255, 0.2);
        }
        .neon-blue-btn:hover {
          background: linear-gradient(
            to right,
            rgba(0, 180, 255, 0.2) 1%,
            rgba(0, 180, 255, 0.12) 40%,
            rgba(0, 180, 255, 0.12) 60%,
            rgba(0, 180, 255, 0.2) 100%
          );
          box-shadow: inset 0 0 15px rgba(0, 180, 255, 0.6),
            0 0 15px 5px rgba(0, 180, 255, 0.2);
        }
      `}</style>
    </div>
  );
};

// Status Bar Component
const StatusBar = () => (
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
);

export default MobileVoiceAssistant;
