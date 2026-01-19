import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Filter,
  ArrowUpDown,
  Bell,
  Plus,
  Home,
  MoreHorizontal,
  CalendarClock,
  Check,
  Activity,
  Eye,
  Gavel,
  X,
  TrendingUp,
  AlertCircle,
  Calendar,
  Gift,
  Key,
  Share2,
  MoreVertical,
  Phone,
  Mail,
  CheckCircle,
  Clock,
  List,
  Download,
  Sparkles,
  User,
  Briefcase,
  BarChart2,
  Building,
  MapPin,
} from "lucide-react";

// TypeScript Interfaces
interface DealCard {
  id: string;
  title: string;
  subtitle: string;
  image?: string;
  column: "appraisal" | "premarket" | "active" | "under-offer" | "settlement";
  tags?: Array<{
    text: string;
    variant: "warm-lead" | "drafting" | "auction" | "private-treaty" | "verified";
  }>;
  probability?: string;
  estimate?: string;
  gci?: string;
  agents?: string[];
  deadline?: string;
  status?: "settled" | "pending";
  action?: string;
  metrics?: {
    enquiries: number;
    inspections: number;
    contracts: number;
  };
  tasks?: Array<{
    text: string;
    checked: boolean;
  }>;
  value?: string;
  vendor?: {
    name: string;
    email: string;
  };
  milestones?: Array<{
    label: string;
    status: "complete" | "pending" | "active";
    due?: string;
  }>;
}

interface Column {
  id: string;
  title: string;
  count: number;
  gci: string;
  color: string;
  pulse?: boolean;
}

// Data
const columns: Column[] = [
  { id: "appraisal", title: "Appraisal", count: 4, gci: "$85k", color: "neutral" },
  { id: "premarket", title: "Pre-Market", count: 2, gci: "$45k", color: "indigo" },
  { id: "active", title: "Active", count: 3, gci: "$122k", color: "emerald", pulse: true },
  { id: "under-offer", title: "Under Offer", count: 1, gci: "$90k", color: "purple" },
  { id: "settlement", title: "Settlement", count: 5, gci: "", color: "neutral" },
];

const deals: DealCard[] = [
  {
    id: "1",
    title: "88 Campbell St",
    subtitle: "Surry Hills",
    column: "appraisal",
    tags: [{ text: "Warm Lead", variant: "warm-lead" }],
    probability: "40%",
    agents: ["JD"],
    deadline: "Call Tue 2pm",
  },
  {
    id: "2",
    title: "15 Ocean St",
    subtitle: "Double Bay",
    image: "https://images.unsplash.com/photo-1600596542815-60c37c65b585?auto=format&fit=crop&q=80&w=100&h=100",
    column: "appraisal",
    estimate: "$4.5M - $5M",
    gci: "$90k",
    deadline: "Proposal Sent 2d ago",
    action: "Follow Up",
  },
  {
    id: "3",
    title: "Unit 402, The Altair",
    subtitle: "Rushcutters Bay · $1.8M",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=400",
    column: "premarket",
    tags: [{ text: "Agency Signed", variant: "verified" }],
    tasks: [
      { text: "Agency Agreement", checked: true },
      { text: "Photography Booked (Fri)", checked: false },
      { text: "Marketing Copy", checked: false },
    ],
  },
  {
    id: "4",
    title: "72 Wilson St",
    subtitle: "Newtown",
    column: "premarket",
    tags: [{ text: "Drafting", variant: "drafting" }],
    deadline: "Updated 1h ago",
  },
  {
    id: "5",
    title: "128 Crown Street",
    subtitle: "Surry Hills · Guide: $2.2M",
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg",
    column: "active",
    tags: [{ text: "Auction Sat 1pm", variant: "auction" }],
    metrics: {
      enquiries: 42,
      inspections: 18,
      contracts: 5,
    },
    agents: ["MK", "+4"],
  },
  {
    id: "6",
    title: "5/20 Cooper St",
    subtitle: "Redfern · $1.1M",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=400",
    column: "active",
    tags: [{ text: "Private Treaty", variant: "private-treaty" }],
    deadline: "DOM: 14",
    alert: "Price reduction suggested.",
  },
  {
    id: "7",
    title: "22 Park Road",
    subtitle: "Paddington",
    column: "under-offer",
    value: "$4,250,000",
    milestones: [
      { label: "0.25% Deposit Paid", status: "complete" },
      { label: "Finance Clause (24h)", status: "active", due: "Due TOMORROW" },
    ],
  },
  {
    id: "8",
    title: "808/200 George St",
    subtitle: "Sydney CBD",
    column: "settlement",
    status: "settled",
    tags: [{ text: "Gift Sent", variant: "verified" }],
  },
  {
    id: "9",
    title: "14 Smith St",
    subtitle: "Surry Hills",
    column: "settlement",
    deadline: "7 Days",
    alert: "Arrange Keys",
  },
];

const AgentPipeline = () => {
  const [mounted, setMounted] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedDeal, setSelectedDeal] = useState<DealCard | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getTagStyles = (variant: string) => {
    const base = "text-[10px] font-medium uppercase tracking-wide rounded px-1.5 py-0.5 border";
    switch (variant) {
      case "warm-lead":
        return `${base} bg-orange-500/10 text-orange-400 border-orange-500/20`;
      case "drafting":
        return `${base} bg-white/5 text-neutral-400 border-white/5`;
      case "auction":
        return `${base} bg-emerald-500 text-black font-bold`;
      case "private-treaty":
        return `${base} bg-black/60 backdrop-blur text-white border-white/10`;
      case "verified":
        return `${base} bg-emerald-500/10 text-emerald-500 border-emerald-500/20`;
      default:
        return `${base} bg-white/5 text-neutral-400 border-white/5`;
    }
  };

  const handleCardClick = (deal: DealCard) => {
    setSelectedDeal(deal);
    setSidebarOpen(true);
  };

  return (
    <div className="flex flex-col h-screen bg-[#050505] text-neutral-300 overflow-hidden">
      {/* Background Effects */}
      <div
        className="fixed inset-0 z-0 w-full h-full pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.05%22/%3E%3C/svg%3E')",
        }}
      />

      {/* Navigation */}
      <nav className="shrink-0 w-full px-6 md:px-8 h-16 flex justify-between items-center z-50 bg-[#050505] border-b border-white/5">
        <div className="flex items-center gap-8">
          <Link
            to="/"
            className="font-display text-lg font-medium tracking-tight flex items-center gap-2 group"
          >
            <div className="w-8 h-8 bg-indigo-600 text-white flex items-center justify-center font-bold tracking-tighter rounded-sm group-hover:scale-95 transition-transform duration-300">
              AG
            </div>
            <span className="text-white">
              PROP
              <span className="text-neutral-500">.AGENT</span>
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-1">
            <Link
              to="/agent-dashboard"
              className="px-3 py-1.5 text-xs font-medium text-neutral-400 hover:text-white transition-colors rounded hover:bg-white/5"
            >
              Dashboard
            </Link>
            <span className="px-3 py-1.5 text-xs font-medium text-white bg-white/5 shadow-sm rounded border border-white/5">
              Pipeline
            </span>
            <Link
              to="#"
              className="px-3 py-1.5 text-xs font-medium text-neutral-400 hover:text-white transition-colors rounded hover:bg-white/5"
            >
              Contacts
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          {/* Pipeline Summary Widget */}
          <div className="hidden lg:flex items-center gap-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.02] mr-4">
            <div className="flex flex-col items-end leading-none">
              <span className="text-[9px] font-mono text-neutral-500 uppercase">
                Est. GCI
              </span>
              <span className="text-xs font-medium text-emerald-400">$342,500</span>
            </div>
            <div className="w-px h-6 bg-white/10"></div>
            <div className="flex flex-col items-start leading-none">
              <span className="text-[9px] font-mono text-neutral-500 uppercase">
                Active Vol
              </span>
              <span className="text-xs font-medium text-white">$14.2M</span>
            </div>
          </div>

          <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-1.5 rounded text-xs font-medium transition-colors flex items-center gap-2">
            <Plus className="w-3.5 h-3.5" />
            New Deal
          </button>
          <button className="relative p-2 text-neutral-400 hover:text-white transition-colors mr-2">
            <Bell className="w-5 h-5" />
            <div className="absolute top-2 right-2.5 w-1.5 h-1.5 bg-indigo-500 rounded-full border border-[#050505]"></div>
          </button>
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-blue-500 border border-white/20 ring-4 ring-black/50"></div>
        </div>
      </nav>

      {/* Pipeline Header / Filters */}
      <header className="shrink-0 px-6 md:px-8 py-4 flex items-center justify-between border-b border-white/5 bg-[#050505]/50 backdrop-blur-sm z-40">
        <div className="flex items-center gap-4">
          <div className="flex items-center bg-[#0A0A0A] border border-white/5 rounded-lg p-0.5">
            <button className="px-3 py-1.5 rounded-md bg-white/10 text-white text-xs font-medium shadow-sm">
              Board
            </button>
            <button className="px-3 py-1.5 rounded-md text-neutral-500 hover:text-white text-xs font-medium transition-colors">
              List
            </button>
          </div>
          <div className="h-6 w-px bg-white/5"></div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-neutral-500">Filter:</span>
            <button className="flex items-center gap-1.5 px-2.5 py-1 rounded border border-dashed border-white/20 text-xs text-neutral-400 hover:text-white hover:border-white/40 transition-all">
              <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
              Sales
            </button>
            <button className="flex items-center gap-1.5 px-2.5 py-1 rounded border border-dashed border-white/20 text-xs text-neutral-400 hover:text-white hover:border-white/40 transition-all">
              <User className="w-3 h-3" />
              Vendor: All
            </button>
            <div className="h-4 w-px bg-white/5 mx-1"></div>
            <button className="flex items-center gap-1.5 px-2.5 py-1 rounded border border-dashed border-white/20 text-xs text-neutral-400 hover:text-white hover:border-white/40 transition-all">
              <ArrowUpDown className="w-3 h-3" />
              Sort
            </button>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative group">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-neutral-500 group-focus-within:text-white transition-colors" />
            <input
              type="text"
              placeholder="Search address..."
              className="bg-[#0A0A0A] border border-white/10 rounded-lg pl-8 pr-3 py-1.5 text-xs text-white focus:outline-none focus:border-indigo-500/50 w-48 focus:w-64 transition-all placeholder:text-neutral-600"
            />
          </div>
        </div>
      </header>

      {/* Kanban Board Wrapper */}
      <main className="flex-1 overflow-x-auto overflow-y-hidden">
        <div className="h-full flex px-6 md:px-8 py-6 gap-6 min-w-max">
          {columns.map((column, colIndex) => (
            <div
              key={column.id}
              className="min-w-[340px] w-[340px] h-full flex flex-col"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${colIndex * 0.1}s`,
              }}
            >
              <div className="flex items-center justify-between mb-4 px-1">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      column.pulse
                        ? `bg-${column.color}-500 animate-pulse absolute`
                        : `bg-${column.color}-500`
                    } ${column.pulse ? "relative" : ""}`}
                  >
                    {column.pulse && (
                      <div className={`w-2 h-2 rounded-full bg-${column.color}-500 animate-pulse absolute`}></div>
                    )}
                  </div>
                  <h3 className="text-xs font-medium text-white uppercase tracking-wider font-mono">
                    {column.title}
                  </h3>
                  <span className="bg-white/5 text-neutral-400 px-1.5 py-0.5 rounded text-[10px]">
                    {column.count}
                  </span>
                </div>
                {column.gci && (
                  <span className="text-[10px] text-neutral-500 font-mono">
                    Est. GCI: {column.gci}
                  </span>
                )}
              </div>

              <div className="flex-1 overflow-y-auto pr-2 space-y-3 pb-20">
                {deals
                  .filter((deal) => deal.column === column.id)
                  .map((deal, index) => (
                    <div
                      key={deal.id}
                      onClick={() => handleCardClick(deal)}
                      className="p-3 rounded-xl border border-white/5 bg-[#0A0A0A] hover:border-white/10 cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-xl group"
                    >
                      {deal.image && (
                        <div className="relative h-24 w-full -mx-3 -mt-3 mb-3 rounded-t-xl overflow-hidden">
                          <img
                            src={deal.image}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                            alt=""
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent"></div>
                          {deal.tags && deal.tags.length > 0 && (
                            <div className="absolute bottom-2 left-2 flex gap-1">
                              {deal.tags.map((tag, tagIndex) => (
                                <span key={tagIndex} className={getTagStyles(tag.variant)}>
                                  {tag.text}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      )}

                      <div className="flex items-start justify-between mb-2">
                        <div className="flex gap-3">
                          {!deal.image && (
                            <div className="w-10 h-10 rounded bg-neutral-800 flex items-center justify-center border border-white/5 shrink-0">
                              <Home className="w-4 h-4 text-neutral-500" />
                            </div>
                          )}
                          <div className="flex-1">
                            <h4 className="text-sm font-medium text-white leading-tight mb-0.5">
                              {deal.title}
                            </h4>
                            <p className="text-[11px] text-neutral-500">{deal.subtitle}</p>
                            {deal.value && (
                              <div className="text-right mt-1">
                                <div className="text-xs font-bold text-white">{deal.value}</div>
                                <div className="text-[9px] text-neutral-500">Sale Price</div>
                              </div>
                            )}
                          </div>
                        </div>
                        <button className="text-neutral-600 hover:text-white">
                          <MoreHorizontal className="w-4 h-4" />
                        </button>
                      </div>

                      {deal.estimate && deal.gci && (
                        <div className="grid grid-cols-2 gap-2 mb-2">
                          <div className="bg-white/5 rounded px-2 py-1">
                            <div className="text-[9px] text-neutral-500 uppercase">
                              Est. Value
                            </div>
                            <div className="text-xs text-neutral-300">{deal.estimate}</div>
                          </div>
                          <div className="bg-white/5 rounded px-2 py-1">
                            <div className="text-[9px] text-neutral-500 uppercase">
                              Est. GCI
                            </div>
                            <div className="text-xs text-indigo-300">{deal.gci}</div>
                          </div>
                        </div>
                      )}

                      {deal.tags && (
                        <div className="flex items-center gap-2 mb-2">
                          {deal.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className={getTagStyles(tag.variant)}>
                              {tag.text}
                            </span>
                          ))}
                          {deal.probability && (
                            <span className="text-[10px] text-neutral-500 font-mono">
                              Prob: {deal.probability}
                            </span>
                          )}
                        </div>
                      )}

                      {deal.metrics && (
                        <div className="grid grid-cols-3 gap-px bg-white/5 rounded border border-white/5 mb-3">
                          <div className="bg-[#0A0A0A] p-1.5 text-center">
                            <div className="text-[9px] text-neutral-500">Enq</div>
                            <div className="text-xs font-medium text-white">{deal.metrics.enquiries}</div>
                          </div>
                          <div className="bg-[#0A0A0A] p-1.5 text-center">
                            <div className="text-[9px] text-neutral-500">Insp</div>
                            <div className="text-xs font-medium text-white">{deal.metrics.inspections}</div>
                          </div>
                          <div className="bg-[#0A0A0A] p-1.5 text-center">
                            <div className="text-[9px] text-neutral-500">Cont</div>
                            <div className="text-xs font-medium text-white">{deal.metrics.contracts}</div>
                          </div>
                        </div>
                      )}

                      {deal.tasks && (
                        <div className="space-y-1.5 mb-3">
                          {deal.tasks.map((task, taskIndex) => (
                            <div key={taskIndex} className="flex items-center gap-2 text-[10px]">
                              <div
                                className={`w-3 h-3 rounded-full border flex items-center justify-center ${
                                  task.checked
                                    ? "border-indigo-500 bg-indigo-500/20"
                                    : "border-white/30 hover:border-white"
                                }`}
                              >
                                {task.checked && <Check className="w-2 h-2 text-indigo-400" />}
                              </div>
                              <span className={task.checked ? "line-through opacity-50" : ""}>
                                {task.text}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}

                      {deal.milestones && (
                        <div className="space-y-2 mt-3">
                          {deal.milestones.map((milestone, milestoneIndex) => (
                            <div
                              key={milestoneIndex}
                              className="flex justify-between items-center p-2 rounded bg-white/5 border border-white/5"
                            >
                              <div className="flex items-center gap-2">
                                <div
                                  className={`w-1.5 h-1.5 rounded-full ${
                                    milestone.status === "complete"
                                      ? "bg-green-500"
                                      : milestone.status === "active"
                                      ? "bg-yellow-500 animate-pulse"
                                      : "bg-white/20"
                                  }`}
                                ></div>
                                <span
                                  className={`text-[10px] ${
                                    milestone.status === "complete"
                                      ? "text-neutral-300"
                                      : milestone.status === "active"
                                      ? "text-white font-medium"
                                      : "text-neutral-300"
                                  }`}
                                >
                                  {milestone.label}
                                </span>
                              </div>
                              {milestone.due && (
                                <span className="text-[9px] font-mono text-neutral-500">
                                  {milestone.due}
                                </span>
                              )}
                              {milestone.status === "complete" && (
                                <Check className="w-3 h-3 text-green-500" />
                              )}
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                        {deal.agents && (
                          <div className="flex -space-x-2">
                            {deal.agents.map((agent, agentIndex) => (
                              <div
                                key={agentIndex}
                                className="w-6 h-6 rounded-full bg-neutral-700 border border-[#0A0A0A] flex items-center justify-center text-[9px] text-white"
                              >
                                {agent}
                              </div>
                            ))}
                          </div>
                        )}
                        {deal.deadline && !deal.milestones && (
                          <div className="flex items-center gap-1.5 text-[10px] text-neutral-400">
                            <CalendarClock className="w-3 h-3" />
                            {deal.deadline}
                          </div>
                        )}
                        {deal.action && !deal.milestones && (
                          <button className="bg-white text-black text-[10px] font-medium px-2 py-1 rounded hover:bg-neutral-200 opacity-0 group-hover:opacity-100 transition-opacity">
                            {deal.action}
                          </button>
                        )}
                      </div>

                      {deal.alert && (
                        <div className="mt-2 p-2 bg-orange-500/5 border border-orange-500/10 rounded flex gap-2 items-start">
                          <AlertCircle className="w-3 h-3 text-orange-400 mt-0.5 shrink-0" />
                          <p className="text-[10px] text-orange-200">{deal.alert}</p>
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          ))}

          {/* Add Column Button */}
          <div className="min-w-[50px] flex items-start pt-2">
            <button className="w-10 h-10 rounded-full border border-dashed border-white/20 flex items-center justify-center text-white/20 hover:text-white hover:border-white/50 transition-all">
              <Plus className="w-5 h-5" />
            </button>
          </div>
        </div>
      </main>

      {/* AI Insight Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="bg-[#0A0A0A] border border-white/10 p-3 rounded-lg shadow-2xl flex items-center gap-3 transition-transform hover:-translate-y-1 duration-300">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shrink-0">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <div>
            <p className="text-[11px] text-neutral-200">
              <span className="font-medium text-white">AI Insight:</span> 2 new sales
              nearby.
            </p>
            <button className="text-[10px] text-indigo-400 hover:text-indigo-300 mt-0.5 font-medium">
              View Analysis
            </button>
          </div>
          <button className="text-neutral-500 hover:text-white">
            <X className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Deal Detail Sidebar */}
      {sidebarOpen && selectedDeal && (
        <>
          <div
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-black/10 backdrop-blur-[2px] z-[55] transition-opacity"
          ></div>
          <aside className="fixed top-0 right-0 h-full w-full md:w-[480px] bg-[#0A0A0A] border-l border-white/10 z-[60] transform transition-transform duration-300 ease-out shadow-2xl flex flex-col font-body">
            {/* Sidebar Header */}
            <div className="h-16 shrink-0 border-b border-white/5 flex items-center justify-between px-6 bg-[#0A0A0A]/50 backdrop-blur">
              <div className="flex items-center gap-3">
                <span className="px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-[10px] font-mono uppercase tracking-wide">
                  Active Deal
                </span>
                <div className="h-4 w-px bg-white/10"></div>
                <span className="text-xs text-neutral-500 font-mono">ID: #{selectedDeal.id}</span>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 text-neutral-400 hover:text-white transition-colors">
                  <Share2 className="w-4 h-4" />
                </button>
                <button className="p-2 text-neutral-400 hover:text-white transition-colors">
                  <MoreVertical className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="p-2 text-neutral-400 hover:text-white transition-colors ml-1"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Sidebar Content */}
            <div className="flex-1 overflow-y-auto">
              {selectedDeal.image && (
                <div className="h-56 w-full relative group border-b border-white/5">
                  <img
                    src={selectedDeal.image}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    alt=""
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/10 to-transparent"></div>
                </div>
              )}

              {/* Hero */}
              <div className="p-6 pb-2">
                <h2 className="text-2xl font-display font-semibold text-white tracking-tight mb-1">
                  {selectedDeal.title}
                </h2>
                <p className="text-neutral-400">{selectedDeal.subtitle}</p>

                <div className="flex items-center gap-4 mt-6">
                  <div className="flex-1">
                    <div className="text-[10px] uppercase text-neutral-500 font-mono mb-1">
                      Est. Value
                    </div>
                    <div className="text-lg font-medium text-white">
                      {selectedDeal.estimate || "$1,850,000"}
                    </div>
                  </div>
                  <div className="w-px h-8 bg-white/10"></div>
                  <div className="flex-1">
                    <div className="text-[10px] uppercase text-neutral-500 font-mono mb-1">
                      Potential GCI
                    </div>
                    <div className="text-lg font-medium text-emerald-400">
                      {selectedDeal.gci || "$34,500"}
                    </div>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className="px-6 mt-4 border-b border-white/5 flex gap-6">
                <button className="pb-3 text-sm font-medium text-white border-b-2 border-indigo-500">
                  Overview
                </button>
                <button className="pb-3 text-sm font-medium text-neutral-500 hover:text-neutral-300 transition-colors">
                  Activity
                </button>
                <button className="pb-3 text-sm font-medium text-neutral-500 hover:text-neutral-300 transition-colors">
                  Files
                </button>
                <button className="pb-3 text-sm font-medium text-neutral-500 hover:text-neutral-300 transition-colors">
                  Notes
                </button>
              </div>

              {/* Tab Content */}
              <div className="p-6 space-y-6">
                {/* Vendor Card */}
                <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xs font-semibold text-white uppercase tracking-wider">
                      Vendor Details
                    </h3>
                    <button className="text-[10px] text-indigo-400 hover:underline">
                      Edit
                    </button>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-bold text-white border border-white/10">
                      JD
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">James Dalton</div>
                      <div className="text-xs text-neutral-500">james.d@example.com</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <button className="flex items-center justify-center gap-2 py-2 rounded bg-white/5 hover:bg-white/10 border border-white/5 text-xs text-neutral-300 transition-colors">
                      <Phone className="w-3.5 h-3.5" />
                      Call
                    </button>
                    <button className="flex items-center justify-center gap-2 py-2 rounded bg-white/5 hover:bg-white/10 border border-white/5 text-xs text-neutral-300 transition-colors">
                      <Mail className="w-3.5 h-3.5" />
                      Email
                    </button>
                  </div>
                </div>

                {/* Progress Checklist */}
                <div>
                  <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
                    Stage Progress
                  </h3>
                  <div className="space-y-2">
                    {[
                      "Sign Agency Agreement",
                      "Order Marketing Assets",
                      "Book Photographer",
                    ].map((task, index) => (
                      <label
                        key={task}
                        className="flex items-center gap-3 p-3 rounded-lg border border-white/5 bg-white/[0.02] group cursor-pointer hover:border-indigo-500/30 transition-colors"
                      >
                        <input
                          type="checkbox"
                          className="w-4 h-4 rounded border-white/20 bg-transparent text-indigo-600 focus:ring-0 focus:ring-offset-0 checked:bg-indigo-500 checked:border-indigo-500"
                          defaultChecked={index === 0}
                        />
                        <span
                          className={`text-sm group-hover:text-white ${
                            index === 0 ? "text-neutral-400 line-through decoration-white/20" : "text-neutral-300"
                          }`}
                        >
                          {task}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Recent Activity */}
                <div>
                  <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
                    Latest Activity
                  </h3>
                  <div className="relative border-l border-white/10 ml-1.5 space-y-6 pb-2">
                    <div className="pl-6 relative">
                      <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-[#0A0A0A] border border-indigo-500"></div>
                      <div className="text-xs text-neutral-500 mb-0.5">Today, 10:23 AM</div>
                      <div className="text-sm text-neutral-300">
                        Changed status to <span className="text-white">Appraisal</span>
                      </div>
                    </div>
                    <div className="pl-6 relative">
                      <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-[#0A0A0A] border border-white/20"></div>
                      <div className="text-xs text-neutral-500 mb-0.5">Yesterday, 4:15 PM</div>
                      <div className="text-sm text-neutral-300">
                        Email sent to Vendor regarding marketing copy drafts.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="p-4 border-t border-white/5 bg-[#0A0A0A] shrink-0">
              <button className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-medium text-sm transition-colors shadow-lg shadow-indigo-500/20">
                Move to Next Stage
              </button>
            </div>
          </aside>
        </>
      )}
    </div>
  );
};

export default AgentPipeline;
