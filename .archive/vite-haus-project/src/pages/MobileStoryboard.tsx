import { useState, useEffect } from "react";
import {
  Workflow,
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
  Sparkles,
  ZoomIn,
  Share,
  MoreHorizontal,
  Map,
  Grid2x2Check,
  Ruler,
  Smartphone,
  Tablet,
  Monitor,
  ArrowRight,
  Sliders,
  Wallet,
  Bot,
  FileText,
  Wand2,
  Search,
  Headset,
  Headphones,
  MessageSquare,
  Plus,
  Check,
  Mic,
  Paperclip,
  Send,
  ChevronLeft,
} from "lucide-react";

interface NavItem {
  id: string;
  label: string;
  icon: any;
  active?: boolean;
}

interface Tool {
  id: string;
  name: string;
  description: string;
  icon: any;
  gradient: string;
  iconGradient: string;
  borderColor: string;
}

interface Message {
  id: string;
  sender: "user" | "assistant";
  content: string;
  actions?: Array<{ label: string; style?: string }>;
  card?: {
    title: string;
    items: string[];
    actions: Array<{ label: string; style?: string }>;
  };
}

interface QuickAction {
  id: string;
  label: string;
  icon: any;
  gradient: string;
  borderColor: string;
  iconColor: string;
}

interface Screen {
  id: string;
  title: string;
  label: string;
}

const MobileStoryboard = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems: NavItem[] = [
    { id: "1", label: "Core: Tailor → Toolbox → Chat", icon: Workflow, active: true },
    { id: "2", label: "Onboarding", icon: LogIn },
    { id: "3", label: "Home", icon: House },
    { id: "4", label: "Voice Picker", icon: AudioLines },
    { id: "5", label: "Goal Setup", icon: Target },
    { id: "6", label: "Notifications", icon: Bell },
    { id: "7", label: "Settings", icon: Settings },
    { id: "8", label: "Billing", icon: CreditCard },
    { id: "9", label: "History", icon: History },
    { id: "10", label: "Error States", icon: ShieldAlert },
  ];

  const tools: Tool[] = [
    {
      id: "1",
      name: "Finance Tracker",
      description: "Spending insights",
      icon: Wallet,
      gradient: "from-green-400/10 via-transparent",
      iconGradient: "from-green-400/20 to-emerald-400/10",
      borderColor: "border-green-300/30",
    },
    {
      id: "2",
      name: "Task Automator",
      description: "Workflow scripts",
      icon: Bot,
      gradient: "from-cyan-400/10 via-transparent",
      iconGradient: "from-cyan-400/20 to-blue-400/10",
      borderColor: "border-cyan-300/30",
    },
    {
      id: "3",
      name: "Meeting Summarizer",
      description: "Notes & action items",
      icon: FileText,
      gradient: "from-blue-400/10 via-transparent",
      iconGradient: "from-blue-400/20 to-cyan-400/10",
      borderColor: "border-blue-300/30",
    },
    {
      id: "4",
      name: "Idea Generator",
      description: "Creative prompts",
      icon: Sparkles,
      gradient: "from-purple-400/10 via-transparent",
      iconGradient: "from-purple-400/20 to-fuchsia-400/10",
      borderColor: "border-purple-300/30",
    },
  ];

  const skills = [
    { icon: Search, label: "Research" },
    { icon: Workflow, label: "Project Management" },
    { icon: Headset, label: "Customer Support" },
  ];

  const messages: Message[] = [
    {
      id: "1",
      sender: "assistant",
      content:
        "Hi! I'm your HAUS. I can manage tasks, search, and create. What can I help with today?",
    },
    {
      id: "2",
      sender: "user",
      content: "Summarize this week's meetings and create an action list.",
    },
    {
      id: "3",
      sender: "assistant",
      content: "Here's a concise summary and prioritized actions:",
      card: {
        title: "Summary and Actions",
        items: [
          "Finalize Q3 KPI dashboards by Friday",
          "Draft vendor RFP outline",
          "Schedule team retro for Tue 10am",
        ],
        actions: [
          { label: "Add to Tasks", style: "bg-neutral-900/60 border border-white/10" },
          { label: "Open in Toolbox", style: "bg-gradient-to-r from-cyan-500 to-blue-500" },
        ],
      },
    },
  ];

  const quickActions: QuickAction[] = [
    {
      id: "1",
      label: "Image",
      icon: Search,
      gradient: "from-cyan-400/10 to-cyan-400/5",
      borderColor: "border-cyan-400/20",
      iconColor: "text-cyan-400",
    },
    {
      id: "2",
      label: "Text",
      icon: FileText,
      gradient: "from-blue-400/10 to-blue-400/5",
      borderColor: "border-blue-400/20",
      iconColor: "text-blue-400",
    },
    {
      id: "3",
      label: "Code",
      icon: MessageSquare,
      gradient: "from-sky-400/10 to-sky-400/5",
      borderColor: "border-sky-400/20",
      iconColor: "text-sky-400",
    },
    {
      id: "4",
      label: "Ideas",
      icon: Sparkles,
      gradient: "from-indigo-400/10 to-indigo-400/5",
      borderColor: "border-indigo-400/20",
      iconColor: "text-indigo-400",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans antialiased">
      {/* Backdrop */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-cyan-500/20 blur-3xl rounded-full" />
      </div>

      {/* Top Nav */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 bg-neutral-950/80 border-b border-white/10">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6">
          <div className="h-14 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 border border-cyan-300/60 shadow-[0_0_24px_rgba(34,211,238,0.35)] flex items-center justify-center">
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
              <button className="hidden sm:flex items-center gap-2 h-9 px-3 rounded-xl bg-neutral-900/60 border border-white/10 text-[13px]">
                <Share className="w-4.5 h-4.5" />
                Export
              </button>
              <button className="w-9 h-9 rounded-full bg-neutral-900/60 border border-white/10 flex items-center justify-center">
                <MoreHorizontal className="w-4.5 h-4.5 text-neutral-300" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full">
        <div className="max-w-[1800px] mx-auto">
          <div className="flex">
            {/* Left Rail */}
            <aside className="hidden lg:block w-64 shrink-0 border-r border-white/10 min-h-[calc(100vh-56px)]">
              <div className="p-4">
                <div className="text-[12px] uppercase tracking-wider text-neutral-500 mb-2">
                  Flows
                </div>
                <nav className="space-y-1">
                  {navItems.map((item) => (
                    <a
                      key={item.id}
                      href="#"
                      className={`flex items-center gap-2 px-2.5 py-2 rounded-lg text-[13px] ${
                        item.active
                          ? "bg-neutral-900/60 border border-white/10"
                          : "hover:bg-neutral-900/40 border border-transparent hover:border-white/10"
                      }`}
                    >
                      <item.icon
                        className={`w-4.5 h-4.5 ${
                          item.active ? "text-cyan-300" : "text-neutral-400"
                        }`}
                      />
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
              <div className="px-4">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-3" />
                <div className="text-[12px] uppercase tracking-wider text-neutral-500 mb-2">
                  Artifacts
                </div>
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
                    <h1 className="text-[22px] md:text-[24px] tracking-tight bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-200 bg-clip-text text-transparent">
                      Storyboard
                    </h1>
                    <p className="text-[13px] text-neutral-400">
                      High-level flow with in-progress frames
                    </p>
                  </div>
                  <div className="hidden sm:flex items-center gap-2">
                    <div className="h-9 px-3 rounded-xl bg-neutral-900/60 border border-white/10 text-[13px] flex items-center gap-2">
                      <Grid2x2Check className="w-4.5 h-4.5 text-neutral-300" />
                      Snap to grid
                    </div>
                    <div className="h-9 rounded-xl bg-neutral-900/60 border border-white/10 text-[13px] flex items-center p-1 gap-1">
                      <button className="h-7 px-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white border border-cyan-300/60 flex items-center gap-1.5">
                        <Smartphone className="w-4 h-4 text-white" />
                        <span className="hidden xl:block">Mobile</span>
                        <span className="hidden lg:block text-white/80">
                          390×844
                        </span>
                      </button>
                      <button className="h-7 px-2.5 rounded-lg border border-white/10 text-neutral-300 hover:border-cyan-400/40 flex items-center gap-1.5">
                        <Tablet className="w-4 h-4 text-neutral-300" />
                        <span className="hidden xl:block">Tablet</span>
                        <span className="hidden lg:block text-neutral-400">
                          768×1024
                        </span>
                      </button>
                      <button className="h-7 px-2.5 rounded-lg border border-white/10 text-neutral-300 hover:border-cyan-400/40 flex items-center gap-1.5">
                        <Monitor className="w-4 h-4 text-neutral-300" />
                        <span className="hidden xl:block">Desktop</span>
                        <span className="hidden lg:block text-neutral-400">
                          1280×800
                        </span>
                      </button>
                    </div>
                    <div className="h-9 text-[13px] flex gap-2 bg-neutral-900/60 border-white/10 border rounded-xl pr-3 pl-3 items-center">
                      <Ruler className="w-4.5 h-4.5 text-neutral-300" />
                      390 × 844
                    </div>
                  </div>
                </div>

                {/* Canvas */}
                <div
                  className="mt-5 rounded-2xl border border-white/10 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px] p-4 sm:p-6"
                  style={{
                    opacity: mounted ? 1 : 0,
                    transform: mounted ? "translateY(0)" : "translateY(20px)",
                    transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  {/* Lane: Core Flow */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-2 h-2 rounded-full bg-cyan-400" />
                      <div className="text-[13px] text-neutral-300 tracking-tight">
                        Core Flow
                      </div>
                      <div className="text-[12px] text-neutral-500">
                        Tailor → Toolbox → Conversation
                      </div>
                    </div>

                    <div className="flex gap-6 overflow-x-auto pb-2 items-start">
                      {/* Screen 1: Tailor Your Agent */}
                      <PhoneFrame
                        title="Tailor Your Agent"
                        label="1 · Tailor Your Agent"
                        delay={0.2}
                      >
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
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="p-4 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-[0_0_24px_8px_rgba(34,211,238,0.35)]">
                                <Sparkles className="w-8 h-8 text-white" />
                              </div>
                            </div>
                          </div>

                          {/* Customization Quick Picks */}
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
                              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 text-white text-[12px] flex items-center justify-center shadow-[0_0_16px_rgba(34,211,238,0.5)]">
                                1
                              </div>
                              <div className="h-0.5 flex-1 mx-2 bg-gradient-to-r from-cyan-500/50 to-blue-500/40" />
                              <div className="w-7 h-7 rounded-full bg-neutral-900/70 border border-white/10 text-[12px] text-neutral-300 flex items-center justify-center">
                                2
                              </div>
                              <div className="h-0.5 flex-1 mx-2 bg-white/10" />
                              <div className="w-7 h-7 rounded-full bg-neutral-900/70 border border-white/10 text-[12px] text-neutral-300 flex items-center justify-center">
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
                          <div className="text-[13px] text-neutral-300 mb-2">
                            Example skills
                          </div>
                          <div className="flex flex-wrap gap-2.5">
                            {skills.map((skill) => (
                              <button
                                key={skill.label}
                                className="px-3.5 py-2 rounded-full text-[12px] bg-gradient-to-br from-cyan-500/15 to-blue-500/10 border border-cyan-400/30 text-cyan-200 backdrop-blur-md hover:border-cyan-300/60 transition shadow-[0_0_12px_rgba(34,211,238,0.25)]"
                              >
                                <div className="flex items-center gap-1.5">
                                  <skill.icon className="w-3.5 h-3.5" />
                                  <span>{skill.label}</span>
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* CTA */}
                        <div className="mt-auto">
                          <button className="w-full h-14 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 text-[15px] tracking-tight text-white border border-cyan-300/60 shadow-[0_10px_40px_-8px_rgba(34,211,238,0.55)] hover:shadow-[0_10px_50px_-6px_rgba(34,211,238,0.75)] transition">
                            Deploy My Agent
                          </button>
                        </div>
                      </PhoneFrame>

                      {/* Arrow Connector */}
                      <Connector />

                      {/* Screen 2: Toolbox */}
                      <PhoneFrame
                        title="HAUS Toolbox"
                        label="2 · Toolbox"
                        delay={0.4}
                      >
                        <div className="flex items-center justify-between mb-4">
                          <h2 className="text-[22px] tracking-tight bg-gradient-to-r from-cyan-300 via-cyan-200 to-blue-300 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(6,182,212,0.45)]">
                            HAUS Toolbox
                          </h2>
                          <button className="w-9 h-9 rounded-full bg-neutral-900/60 border border-white/10 flex items-center justify-center">
                            <Sliders className="w-4.5 h-4.5 text-neutral-300" />
                          </button>
                        </div>

                        {/* Tools Grid */}
                        <div className="grid grid-cols-2 gap-3">
                          {tools.map((tool) => (
                            <div
                              key={tool.id}
                              className="p-4 rounded-2xl bg-neutral-900/40 backdrop-blur-xl border border-white/10 hover:border-opacity-40 transition relative overflow-hidden group"
                            >
                              <div
                                className={`absolute -inset-6 bg-gradient-to-br ${tool.gradient} pointer-events-none`}
                              />
                              <div
                                className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br ${tool.iconGradient} border ${tool.borderColor} shadow-[0_0_24px_rgba(74,222,128,0.35)]`}
                              >
                                <tool.icon className="w-5 h-5" />
                              </div>
                              <div className="mt-3">
                                <div className="text-[14px] text-neutral-100 tracking-tight">
                                  {tool.name}
                                </div>
                                <div className="text-[12px] text-neutral-400">
                                  {tool.description}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Subscription Banner */}
                        <div className="mt-auto">
                          <div className="mt-6 p-4 rounded-2xl bg-gradient-to-br from-neutral-900/70 to-black/80 border border-white/10 backdrop-blur-xl relative overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_50%_-20%,rgba(34,211,238,0.2),transparent)]" />
                            <div className="flex items-center justify-between relative z-10">
                              <div>
                                <div className="text-[14px] text-neutral-100 tracking-tight">
                                  Unlock the full toolbox
                                </div>
                                <div className="text-[12px] text-neutral-400">
                                  Advanced agents, priority compute
                                </div>
                              </div>
                              <button className="px-3.5 h-10 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-[13px] border border-cyan-300/60 shadow-[0_10px_30px_-10px_rgba(34,211,238,0.65)] hover:shadow-[0_10px_40px_-8px_rgba(34,211,238,0.75)]">
                                Upgrade to Pro
                              </button>
                            </div>
                          </div>
                        </div>
                      </PhoneFrame>

                      {/* Arrow Connector */}
                      <Connector />

                      {/* Screen 3: Conversation */}
                      <PhoneFrame
                        title="Conversation"
                        label="3 · Conversation"
                        delay={0.6}
                      >
                        {/* Chat Header */}
                        <div className="flex items-center gap-3 px-2 py-2">
                          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 border border-cyan-300/60 shadow-[0_0_16px_rgba(34,211,238,0.35)] flex items-center justify-center">
                            <Bot className="w-4.5 h-4.5 text-white" />
                          </div>
                          <div>
                            <div className="text-[14px] tracking-tight text-neutral-100">
                              Conversation
                            </div>
                            <div className="text-[12px] text-neutral-500">
                              Connected · Realtime
                            </div>
                          </div>
                          <div className="ml-auto flex items-center gap-2">
                            <button className="w-9 h-9 rounded-xl bg-neutral-900/60 border border-white/10 flex items-center justify-center hover:border-cyan-400/40 transition">
                              <Plus className="w-4.5 h-4.5 text-neutral-300" />
                            </button>
                            <button className="w-9 h-9 rounded-xl bg-neutral-900/60 border border-white/10 flex items-center justify-center hover:border-cyan-400/40 transition">
                              <MoreHorizontal className="w-4.5 h-4.5 text-neutral-300" />
                            </button>
                          </div>
                        </div>

                        {/* Messages */}
                        <div className="mt-2 flex-1 overflow-y-auto space-y-3 px-2">
                          {messages.map((message) => (
                            <div
                              key={message.id}
                              className={`flex ${
                                message.sender === "user"
                                  ? "items-end gap-2 justify-end"
                                  : "items-start gap-2"
                              }`}
                            >
                              {message.sender === "assistant" && (
                                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 border border-cyan-300/60 flex items-center justify-center shrink-0">
                                  <Sparkles className="w-3.5 h-3.5 text-white" />
                                </div>
                              )}
                              <div className="max-w-[78%] space-y-2">
                                {!message.card ? (
                                  <div
                                    className={`rounded-2xl p-3 ${
                                      message.sender === "user"
                                        ? "rounded-tr-sm bg-gradient-to-br from-cyan-500/15 to-blue-500/10 border border-cyan-400/30"
                                        : "rounded-tl-sm bg-neutral-900/60 border border-white/10"
                                    }`}
                                  >
                                    <p className="text-[13px] text-neutral-200">
                                      {message.content}
                                    </p>
                                  </div>
                                ) : (
                                  <>
                                    <div className="rounded-2xl bg-neutral-900/60 border border-white/10 p-3">
                                      <p className="text-[13px] text-neutral-200">
                                        {message.content}
                                      </p>
                                      <ul className="mt-2 text-[13px] text-neutral-300 list-disc pl-4 space-y-1">
                                        {message.card.items.map((item, idx) => (
                                          <li key={idx}>{item}</li>
                                        ))}
                                      </ul>
                                    </div>
                                    <div className="flex gap-2">
                                      {message.card.actions.map((action, idx) => (
                                        <button
                                          key={idx}
                                          className={`px-3 h-9 rounded-xl text-[12px] ${
                                            action.style || ""
                                          }`}
                                        >
                                          {action.label}
                                        </button>
                                      ))}
                                    </div>
                                  </>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Composer */}
                        <div className="mt-3 px-2">
                          <div className="h-14 rounded-2xl bg-neutral-900/60 border border-white/10 flex items-center px-2 gap-2">
                            <button className="w-10 h-10 rounded-xl bg-neutral-900/60 border border-white/10 flex items-center justify-center hover:border-cyan-400/40 transition">
                              <Paperclip className="w-5 h-5 text-neutral-300" />
                            </button>
                            <input
                              className="flex-1 bg-transparent outline-none text-[13px] placeholder:text-neutral-500"
                              placeholder="Type a message or use the mic…"
                            />
                            <button className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white border border-cyan-300/60 flex items-center justify-center shadow-[0_0_16px_rgba(34,211,238,0.4)] hover:shadow-[0_0_26px_rgba(34,211,238,0.55)] transition">
                              <Mic className="w-5 h-5" />
                            </button>
                            <button className="w-10 h-10 rounded-xl bg-neutral-900/60 border border-white/10 flex items-center justify-center hover:border-cyan-400/40 transition">
                              <Send className="w-5 h-5 text-neutral-200" />
                            </button>
                          </div>
                        </div>
                      </PhoneFrame>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

// Phone Frame Component
interface PhoneFrameProps {
  title: string;
  label: string;
  children: React.ReactNode;
  delay?: number;
}

const PhoneFrame: React.FC<PhoneFrameProps> = ({ title, label, children, delay = 0 }) => {
  return (
    <div className="w-[390px] max-w-full shrink-0">
      <div
        className="relative rounded-[3rem] p-[2px] bg-gradient-to-b from-cyan-400/60 via-blue-500/40 to-cyan-500/60 shadow-[0_20px_80px_-12px_rgba(6,182,212,0.4)]"
        style={{
          opacity: 1,
          animation: `entranceSlideUp 0.8s ease-out forwards ${delay}s`,
        }}
      >
        <div className="rounded-[2.9rem] bg-black overflow-hidden h-[844px] relative">
          {/* Status Bar */}
          <StatusBar />

          {/* Content */}
          <div className="relative flex flex-col h-full pt-6 pr-6 pb-6 pl-6">
            {children}
          </div>

          {/* Home Indicator */}
          <div className="w-36 h-1 bg-white/30 rounded-full mx-auto mt-6" />
        </div>
      </div>
      <div className="text-[12px] text-neutral-400 mt-2 text-center">{label}</div>
    </div>
  );
};

// Status Bar Component
const StatusBar = () => (
  <div className="flex items-center justify-between px-8 pt-4 pb-2">
    <div className="text-white text-sm">9:41</div>
    <div className="w-6 h-5 rounded-full bg-neutral-800/70" />
    <div className="flex items-center gap-1 text-white">
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 20h.01" />
        <path d="M7 20v-4" />
        <path d="M12 20v-8" />
        <path d="M17 20V8" />
        <path d="M22 4v16" />
      </svg>
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 20h.01" />
        <path d="M2 8.82a15 15 0 0 1 20 0" />
        <path d="M5 12.859a10 10 0 0 1 14 0" />
        <path d="M8.5 16.429a5 5 0 0 1 7 0" />
      </svg>
      <div className="w-6 h-3 rounded-sm border border-white/60 relative">
        <div className="absolute inset-0.5 bg-white rounded-[1px]" />
        <div className="absolute -right-0.5 top-1 w-0.5 h-1 bg-white/60 rounded-r-sm" />
      </div>
    </div>
  </div>
);

// Connector Component
const Connector = () => (
  <div className="shrink-0 mt-[180px]">
    <div className="w-10 h-10 rounded-full border border-white/10 bg-neutral-900/60 flex items-center justify-center">
      <ArrowRight className="w-5 h-5 text-neutral-300" />
    </div>
  </div>
);

export default MobileStoryboard;
