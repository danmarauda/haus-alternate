import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Home,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Activity,
  BarChart3,
  Building,
  MapPin,
  Calendar,
  Users,
  Settings,
  Bell,
  Plus,
  Search,
  X,
  ChevronDown,
  ArrowUp,
  ArrowDown,
  Star,
  Check,
  AlertCircle,
} from "lucide-react";

// Types
interface Metric {
  label: string;
  value: string;
  change: string;
  trend: "up" | "down" | "neutral";
  icon: any;
}

interface GrowthSuburb {
  rank: number;
  suburb: string;
  state: string;
  growth: string;
  median: string;
}

interface Auction {
  address: string;
  suburb: string;
  state: string;
  price: string;
  result: "sold" | "passed" | "vendor";
  time: string;
}

interface ResearchList {
  id: string;
  name: string;
  icon: any;
  count: number;
}

const ResidentialIntelligence = () => {
  const [mounted, setMounted] = useState(false);
  const [viewMode, setViewMode] = useState<"residential" | "commercial">("residential");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedList, setSelectedList] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);

  // Metrics data
  const metrics: Metric[] = [
    {
      label: "Auction Clearance",
      value: "68.4%",
      change: "+2.1%",
      trend: "up",
      icon: Activity,
    },
    {
      label: "Home Value Index",
      value: "$954,300",
      change: "+0.8%",
      trend: "up",
      icon: Home,
    },
    {
      label: "Days on Market",
      value: "28",
      change: "-3",
      trend: "neutral",
      icon: Calendar,
    },
    {
      label: "Rental Yield",
      value: "3.2%",
      change: "+0.1%",
      trend: "up",
      icon: DollarSign,
    },
    {
      label: "New Listings",
      value: "12,847",
      change: "+5.2%",
      trend: "up",
      icon: Plus,
    },
    {
      label: "Vacancy Rate",
      value: "1.1%",
      change: "-0.2%",
      trend: "down",
      icon: Building,
    },
    {
      label: "Vendor Discount",
      value: "-3.2%",
      change: "-0.4%",
      trend: "down",
      icon: TrendingDown,
    },
    {
      label: "Investor Lending",
      value: "34.8%",
      change: "+1.2%",
      trend: "up",
      icon: BarChart3,
    },
  ];

  // Research lists
  const researchLists: ResearchList[] = [
    { id: "watchlist", name: "Watchlist", icon: Star, count: 12 },
    { id: "comparables", name: "Comparables", icon: BarChart3, count: 8 },
    { id: "alerts", name: "Price Alerts", icon: Bell, count: 5 },
    { id: "saved", name: "Saved Searches", icon: Search, count: 3 },
  ];

  // Growth suburbs
  const growthSuburbs: GrowthSuburb[] = [
    { rank: 1, suburb: "Melton South", state: "VIC", growth: "+18.2%", median: "$545,000" },
    { rank: 2, suburb: "Mildura", state: "VIC", growth: "+16.8%", median: "$385,000" },
    { rank: 3, suburb: "Bundaberg", state: "QLD", growth: "+15.4%", median: "$425,000" },
    { rank: 4, suburb: "Port Augusta", state: "SA", growth: "+14.9%", median: "$298,000" },
    { rank: 5, suburb: "Geraldton", state: "WA", growth: "+13.7%", median: "$389,000" },
  ];

  // Cooling markets
  const coolingMarkets: GrowthSuburb[] = [
    { rank: 1, suburb: "Paddington", state: "NSW", growth: "-5.2%", median: "$2,450,000" },
    { rank: 2, suburb: "Brighton", state: "VIC", growth: "-4.1%", median: "$3,200,000" },
    { rank: 3, suburb: "Cottesloe", state: "WA", growth: "-3.8%", median: "$4,100,000" },
    { rank: 4, suburb: "Peppermint Grove", state: "WA", growth: "-3.2%", median: "$5,800,000" },
    { rank: 5, suburb: "Toorak", state: "VIC", growth: "-2.9%", median: "$5,200,000" },
  ];

  // Top yields
  const topYields: GrowthSuburb[] = [
    { rank: 1, suburb: "Broken Hill", state: "NSW", growth: "7.2%", median: "$185,000" },
    { rank: 2, suburb: "Coober Pedy", state: "SA", growth: "6.8%", median: "$165,000" },
    { rank: 3, suburb: "Kalgoorlie", state: "WA", growth: "6.5%", median: "$420,000" },
    { rank: 4, suburb: "Cairns", state: "QLD", growth: "5.9%", median: "$485,000" },
    { rank: 5, suburb: "Burnie", state: "TAS", growth: "5.7%", median: "$395,000" },
  ];

  // Auction data
  const auctions: Auction[] = [
    {
      address: "42 Harbour View Drive",
      suburb: "Elizabeth Bay",
      state: "NSW",
      price: "$3,250,000",
      result: "sold",
      time: "2m ago",
    },
    {
      address: "18 Ocean Street",
      suburb: "Bondi",
      state: "NSW",
      price: "$2,850,000",
      result: "sold",
      time: "5m ago",
    },
    {
      address: "156 Canterbury Road",
      suburb: "Canterbury",
      state: "VIC",
      price: "$2,100,000",
      result: "vendor",
      time: "8m ago",
    },
    {
      address: "7 Bay Terrace",
      suburb: "Wynnum",
      state: "QLD",
      price: "$1,450,000",
      result: "passed",
      time: "12m ago",
    },
    {
      address: "89 Esplanade",
      suburb: "Henley Beach",
      state: "SA",
      price: "$1,280,000",
      result: "sold",
      time: "15m ago",
    },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  const getResultBadge = (result: Auction["result"]) => {
    switch (result) {
      case "sold":
        return (
          <span className="px-2 py-1 rounded-md bg-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase">
            Sold
          </span>
        );
      case "vendor":
        return (
          <span className="px-2 py-1 rounded-md bg-amber-500/20 text-amber-400 text-xs font-semibold uppercase">
            Vendor Bid
          </span>
        );
      case "passed":
        return (
          <span className="px-2 py-1 rounded-md bg-red-500/20 text-red-400 text-xs font-semibold uppercase">
            Passed In
          </span>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans">
      {/* Preloader */}
      {!mounted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#050505]">
          <div className="flex flex-col items-center gap-6">
            <div className="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin" />
            <p className="text-sm text-neutral-500 font-mono">INITIALIZING...</p>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-[1800px] mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="text-2xl font-bold tracking-tight"
              style={{
                fontFamily: '"Space Grotesk", sans-serif',
                background: "linear-gradient(135deg, #C9A962 0%, #10b981 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              HAUS
            </Link>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setViewMode("residential")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  viewMode === "residential"
                    ? "bg-[#C9A962] text-black"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                Residential
              </button>
              <button
                onClick={() => setViewMode("commercial")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  viewMode === "commercial"
                    ? "bg-[#C9A962] text-black"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                Commercial
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 rounded-lg hover:bg-white/5 transition-colors"
            >
              <Search className="w-5 h-5 text-white/60" />
            </button>
            <button className="p-2 rounded-lg hover:bg-white/5 transition-colors relative">
              <Bell className="w-5 h-5 text-white/60" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-emerald-500 rounded-full" />
            </button>
            <button className="p-2 rounded-lg hover:bg-white/5 transition-colors">
              <Settings className="w-5 h-5 text-white/60" />
            </button>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C9A962] to-emerald-500 flex items-center justify-center text-sm font-bold text-black">
              JD
            </div>
          </div>
        </div>
      </header>

      {/* Search Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-32 bg-black/80 backdrop-blur-sm">
          <div className="w-full max-w-3xl px-6">
            <div className="bg-[#0A0A0A] rounded-2xl border border-white/10 overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 border-b border-white/10">
                <Search className="w-6 h-6 text-white/40" />
                <input
                  type="text"
                  placeholder="Search suburbs, properties, markets..."
                  className="flex-1 bg-transparent text-lg text-white placeholder-white/40 outline-none"
                  autoFocus
                />
                <button
                  onClick={() => setSearchOpen(false)}
                  className="p-2 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <X className="w-5 h-5 text-white/60" />
                </button>
              </div>
              <div className="p-6">
                <p className="text-sm text-white/40 mb-3">RECENT SEARCHES</p>
                <div className="flex flex-wrap gap-2">
                  {["Bondi Beach NSW", "Toorak VIC", "Cottesloe WA", "Paddington NSW"].map(
                    (search) => (
                      <button
                        key={search}
                        className="px-3 py-1.5 rounded-lg bg-white/5 text-sm text-white/80 hover:bg-white/10 transition-colors"
                      >
                        {search}
                      </button>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-[73px] bottom-0 z-30 bg-[#0A0A0A] border-r border-white/10 transition-all duration-300 ${
          sidebarOpen ? "w-72 translate-x-0" : "w-0 -translate-x-full"
        }`}
      >
        <div className="w-72 h-full overflow-y-auto p-6">
          {/* User Profile */}
          <div className="mb-8 pb-6 border-b border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C9A962] to-emerald-500 flex items-center justify-center text-base font-bold text-black">
                JD
              </div>
              <div>
                <p className="font-semibold">James Davidson</p>
                <p className="text-sm text-white/60">Premium Investor</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 text-center">
              <div className="p-3 rounded-lg bg-white/5">
                <p className="text-lg font-bold text-[#C9A962]">12</p>
                <p className="text-xs text-white/60">Properties</p>
              </div>
              <div className="p-3 rounded-lg bg-white/5">
                <p className="text-lg font-bold text-emerald-500">$4.8M</p>
                <p className="text-xs text-white/60">Portfolio</p>
              </div>
            </div>
          </div>

          {/* Research Lists */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-sm text-white/80">RESEARCH LISTS</h3>
              <button className="p-1.5 rounded-lg hover:bg-white/5 transition-colors">
                <Plus className="w-4 h-4 text-white/40" />
              </button>
            </div>
            <div className="space-y-1">
              {researchLists.map((list) => (
                <button
                  key={list.id}
                  onClick={() => setSelectedList(list.id === selectedList ? null : list.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                    selectedList === list.id
                      ? "bg-emerald-500/10 text-emerald-400"
                      : "text-white/60 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <list.icon className="w-4 h-4" />
                  <span className="flex-1 text-left text-sm font-medium">{list.name}</span>
                  <span className="text-xs text-white/40">{list.count}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div>
            <h3 className="font-semibold text-sm text-white/80 mb-4">QUICK ACTIONS</h3>
            <div className="space-y-1">
              <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/60 hover:bg-white/5 hover:text-white transition-all text-sm">
                <MapPin className="w-4 h-4" />
                <span>Suburb Analysis</span>
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/60 hover:bg-white/5 hover:text-white transition-all text-sm">
                <TrendingUp className="w-4 h-4" />
                <span>Market Trends</span>
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/60 hover:bg-white/5 hover:text-white transition-all text-sm">
                <Users className="w-4 h-4" />
                <span>Agent Network</span>
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main
        className={`pt-[73px] transition-all duration-300 ${
          sidebarOpen ? "ml-72" : "ml-0"
        }`}
      >
        <div className="p-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1
              className="text-4xl font-bold mb-2"
              style={{ fontFamily: '"Space Grotesk", sans-serif' }}
            >
              {viewMode === "residential" ? "Residential" : "Commercial"} Intelligence
            </h1>
            <p className="text-white/60">
              {viewMode === "residential"
                ? "Comprehensive Australian residential market data and analytics"
                : "Commercial property insights across Australia"}
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div
                  key={metric.label}
                  className="p-5 rounded-xl bg-[#0A0A0A] border border-white/10 hover:border-white/20 transition-all"
                  style={{
                    opacity: mounted ? 1 : 0,
                    transform: mounted ? "translateY(0)" : "translateY(20px)",
                    transition: `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.05}s`,
                  }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-2 rounded-lg bg-white/5">
                      <Icon className="w-4 h-4 text-white/60" />
                    </div>
                    <div className="flex items-center gap-1">
                      {metric.trend === "up" ? (
                        <ArrowUp className="w-4 h-4 text-emerald-500" />
                      ) : metric.trend === "down" ? (
                        <ArrowDown className="w-4 h-4 text-red-500" />
                      ) : null}
                      <span
                        className={`text-sm font-medium ${
                          metric.trend === "up"
                            ? "text-emerald-500"
                            : metric.trend === "down"
                            ? "text-red-500"
                            : "text-white/60"
                        }`}
                      >
                        {metric.change}
                      </span>
                    </div>
                  </div>
                  <p className="text-2xl font-bold mb-1">{metric.value}</p>
                  <p className="text-sm text-white/60">{metric.label}</p>
                </div>
              );
            })}
          </div>

          {/* Charts & Analytics Section */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            {/* Main Chart */}
            <div className="col-span-2 p-6 rounded-xl bg-[#0A0A0A] border border-white/10">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold mb-1">Capital City Aggregate Index</h3>
                  <p className="text-sm text-white/60">Monthly change over 12 months</p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1.5 rounded-lg bg-white/5 text-sm text-white/60 hover:bg-white/10 transition-colors">
                    1Y
                  </button>
                  <button className="px-3 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 text-sm font-medium">
                    All
                  </button>
                </div>
              </div>

              {/* Chart Area */}
              <div className="relative h-[300px] mb-4">
                {/* SVG Chart */}
                <svg
                  viewBox="0 0 1000 300"
                  className="w-full h-full"
                  style={{ overflow: "visible" }}
                >
                  {/* Grid Lines */}
                  {[0, 1, 2, 3, 4].map((i) => (
                    <line
                      key={i}
                      x1="0"
                      y1={i * 60}
                      x2="1000"
                      y2={i * 60}
                      stroke="rgba(255,255,255,0.05)"
                      strokeWidth="1"
                    />
                  ))}

                  {/* Area Fill */}
                  <path
                    d="M0,250 C100,240 150,200 250,210 C350,220 400,180 500,150 C600,120 700,160 800,100 C900,40 950,80 1000,60 L1000,300 L0,300 Z"
                    fill="url(#gradient)"
                    opacity="0.2"
                  />

                  {/* Line Chart */}
                  <path
                    d="M0,250 C100,240 150,200 250,210 C350,220 400,180 500,150 C600,120 700,160 800,100 C900,40 950,80 1000,60"
                    fill="none"
                    stroke="#C9A962"
                    strokeWidth="2"
                    vectorEffect="non-scaling-stroke"
                    style={{
                      strokeDasharray: 2000,
                      strokeDashoffset: mounted ? 0 : 2000,
                      transition: "stroke-dashoffset 2s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  />

                  {/* Gradient Definition */}
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#C9A962" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#C9A962" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* Data Points */}
                  {[0, 250, 500, 750, 1000].map((x, i) => {
                    const y = [250, 210, 150, 100, 60][i];
                    return (
                      <g key={i}>
                        <circle cx={x} cy={y} r="4" fill="#C9A962" />
                        {i > 0 && (
                          <text
                            x={x}
                            y={y - 15}
                            fill="white"
                            fontSize="10"
                            textAnchor="middle"
                            className="font-mono"
                          >
                            {["+8.2%", "+6.5%", "+4.8%", "+3.1%", "+0.8%"][i - 1]}
                          </text>
                        )}
                      </g>
                    );
                  })}
                </svg>
              </div>

              {/* Legend */}
              <div className="flex items-center justify-center gap-6 pt-4 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#C9A962]" />
                  <span className="text-sm text-white/60">Sydney</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="text-sm text-white/60">Melbourne</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-indigo-500" />
                  <span className="text-sm text-white/60">Brisbane</span>
                </div>
              </div>
            </div>

            {/* Live Auction Stream */}
            <div className="p-6 rounded-xl bg-[#0A0A0A] border border-white/10">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold mb-1">Live Auction Stream</h3>
                  <p className="text-sm text-white/60">Real-time results</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs text-emerald-500 font-medium">LIVE</span>
                </div>
              </div>

              <div className="space-y-3">
                {auctions.map((auction, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all"
                    style={{
                      opacity: mounted ? 1 : 0,
                      transform: mounted ? "translateX(0)" : "translateX(20px)",
                      transition: `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s`,
                    }}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <p className="text-sm font-medium mb-0.5">{auction.address}</p>
                        <p className="text-xs text-white/60">
                          {auction.suburb}, {auction.state}
                        </p>
                      </div>
                      {getResultBadge(auction.result)}
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-bold text-[#C9A962]">{auction.price}</p>
                      <p className="text-xs text-white/40">{auction.time}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-4 py-2.5 rounded-lg border border-white/10 text-sm text-white/60 hover:bg-white/5 transition-colors">
                View All Auctions
              </button>
            </div>
          </div>

          {/* Markets Analysis */}
          <div className="grid grid-cols-3 gap-6">
            {/* Top Growth Suburbs */}
            <div className="p-6 rounded-xl bg-[#0A0A0A] border border-white/10">
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 rounded-lg bg-emerald-500/10">
                  <TrendingUp className="w-5 h-5 text-emerald-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Top Growth</h3>
                  <p className="text-xs text-white/60">12 month change</p>
                </div>
              </div>

              <div className="space-y-3">
                {growthSuburbs.map((suburb, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all"
                  >
                    <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold flex items-center justify-center">
                      {suburb.rank}
                    </span>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{suburb.suburb}</p>
                      <p className="text-xs text-white/60">
                        {suburb.state} • {suburb.median}
                      </p>
                    </div>
                    <p className="text-sm font-bold text-emerald-500">{suburb.growth}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cooling Markets */}
            <div className="p-6 rounded-xl bg-[#0A0A0A] border border-white/10">
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 rounded-lg bg-red-500/10">
                  <TrendingDown className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Cooling Markets</h3>
                  <p className="text-xs text-white/60">Declining values</p>
                </div>
              </div>

              <div className="space-y-3">
                {coolingMarkets.map((market, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all"
                  >
                    <span className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 text-xs font-bold flex items-center justify-center">
                      {market.rank}
                    </span>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{market.suburb}</p>
                      <p className="text-xs text-white/60">
                        {market.state} • {market.median}
                      </p>
                    </div>
                    <p className="text-sm font-bold text-red-500">{market.growth}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Yields */}
            <div className="p-6 rounded-xl bg-[#0A0A0A] border border-white/10">
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 rounded-lg bg-[#C9A962]/10">
                  <DollarSign className="w-5 h-5 text-[#C9A962]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Top Yields</h3>
                  <p className="text-xs text-white/60">Rental returns</p>
                </div>
              </div>

              <div className="space-y-3">
                {topYields.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all"
                  >
                    <span className="w-6 h-6 rounded-full bg-[#C9A962]/20 text-[#C9A962] text-xs font-bold flex items-center justify-center">
                      {item.rank}
                    </span>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{item.suburb}</p>
                      <p className="text-xs text-white/60">
                        {item.state} • {item.median}
                      </p>
                    </div>
                    <p className="text-sm font-bold text-[#C9A962]">{item.growth}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Sidebar Toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className={`fixed left-0 top-1/2 -translate-y-1/2 z-30 p-2 rounded-r-lg bg-[#0A0A0A] border-y border-r border-white/10 transition-all ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ChevronDown
          className={`w-4 h-4 text-white/60 transition-transform ${
            sidebarOpen ? "rotate-90" : "-rotate-90"
          }`}
        />
      </button>
    </div>
  );
};

export default ResidentialIntelligence;
