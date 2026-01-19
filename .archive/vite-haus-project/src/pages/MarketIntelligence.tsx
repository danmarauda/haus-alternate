import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Bell,
  Search,
  BarChart2,
  Activity,
  Home,
  PieChart,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Minus,
  Check,
  Filter,
  Download,
  Zap,
  TrendingDown,
  List,
  Building,
  MapPin,
} from "lucide-react";

// TypeScript Interfaces
interface Metric {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
  subtitle?: string;
  icon?: any;
}

interface TickerItem {
  city: string;
  value: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
}

interface MarketMover {
  rank: number;
  location: string;
  type: string;
  change: string;
  volume?: string;
}

interface Transaction {
  asset: string;
  id: string;
  location: string;
  price: string;
  type: string;
  time: string;
  status: string;
}

// Data
const tickerItems: TickerItem[] = [
  { city: "NYC", value: "$14,204/sqft", change: "▲ 0.4%", changeType: "positive" },
  { city: "LON", value: "£12,850/sqft", change: "▼ 0.2%", changeType: "negative" },
  { city: "DXB", value: "AED 3,450/sqft", change: "▲ 1.8%", changeType: "positive" },
  { city: "SIN", value: "S$ 2,950/sqft", change: "― 0.0%", changeType: "neutral" },
  { city: "MIA", value: "$9,850/sqft", change: "▲ 0.9%", changeType: "positive" },
  { city: "TOK", value: "¥1.2M/sqm", change: "▼ 0.1%", changeType: "negative" },
  { city: "LAX", value: "$8,450/sqft", change: "▲ 0.3%", changeType: "positive" },
  { city: "PAR", value: "€14,100/sqm", change: "― 0.0%", changeType: "neutral" },
];

const metrics: Metric[] = [
  {
    title: "Global Volume (24h)",
    value: "$4.2B",
    change: "12.5%",
    changeType: "positive",
    icon: BarChart2,
  },
  {
    title: "Market Velocity",
    value: "42 Days",
    change: "3d",
    changeType: "positive",
    icon: Activity,
  },
  {
    title: "Active Listings",
    value: "1,842",
    change: "2.1%",
    changeType: "negative",
    icon: Home,
  },
  {
    title: "Avg. Yield",
    value: "4.85%",
    change: "0.0%",
    changeType: "neutral",
    icon: PieChart,
  },
];

const topGainers: MarketMover[] = [
  { rank: 1, location: "Miami, FL", type: "Waterfront", change: "+4.2%", volume: "$12M Vol" },
  { rank: 2, location: "Austin, TX", type: "Commercial", change: "+3.8%", volume: "$8M Vol" },
  { rank: 3, location: "Lisbon, PT", type: "Historic", change: "+2.1%", volume: "€5M Vol" },
];

const topLosers: MarketMover[] = [
  { rank: 1, location: "SF, CA", type: "Office", change: "-2.4%" },
  { rank: 2, location: "Berlin, DE", type: "Retail", change: "-1.8%" },
];

const transactions: Transaction[] = [
  {
    asset: "Penthouse 4B",
    id: "#8821-X",
    location: "New York, NY",
    price: "$14,250,000",
    type: "Res",
    time: "2m ago",
    status: "Closed",
  },
  {
    asset: "Villa Sereno",
    id: "#9920-A",
    location: "Lake Como, IT",
    price: "€8,400,000",
    type: "Vac",
    time: "14m ago",
    status: "Closed",
  },
  {
    asset: "Tech Park L2",
    id: "#7741-B",
    location: "Singapore",
    price: "S$ 42,000,000",
    type: "Com",
    time: "28m ago",
    status: "Pending",
  },
  {
    asset: "Lot 84-A",
    id: "#1209-Z",
    location: "Aspen, CO",
    price: "$9,200,000",
    type: "Lnd",
    time: "1h ago",
    status: "Closed",
  },
  {
    asset: "Marina Bay 12",
    id: "#3321-M",
    location: "Dubai, UAE",
    price: "AED 18M",
    type: "Res",
    time: "1h ago",
    status: "Closed",
  },
];

const MarketIntelligence = () => {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [chartHoverX, setChartHoverX] = useState(65);
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const handleChartMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (chartRef.current) {
      const rect = chartRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setChartHoverX(percentage);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-neutral-300">
      {/* Background Effects */}
      <div
        className="fixed inset-0 z-0 w-full h-full pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.05%22/%3E%3C/svg%3E')",
        }}
      />
      <div
        className="fixed inset-0 z-0 w-full h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.05) 0%, transparent 60%)",
        }}
      />

      {/* Preloader */}
      {loading && (
        <div className="fixed inset-0 bg-[#050505] z-[10000] flex justify-center items-center">
          <div className="flex flex-col items-center gap-4">
            <span className="font-mono text-[10px] tracking-widest text-neutral-500">
              INITIALIZING DATA FEED
            </span>
            <div className="w-[200px] h-px bg-white/10 relative overflow-hidden">
              <div
                className="absolute left-0 top-0 h-full bg-white transition-all duration-[1000ms]"
                style={{ width: mounted ? "100%" : "0%" }}
              ></div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed top-0 w-full px-6 py-4 md:px-8 h-16 flex justify-between items-center z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5">
        <Link
          to="/"
          className="font-display text-lg font-medium tracking-tight flex items-center gap-2 group"
        >
          <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-bold tracking-tighter rounded-sm group-hover:scale-95 transition-transform duration-300">
            H.
          </div>
        </Link>
        <div className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-lg border border-white/5">
          <Link
            to="/dashboard"
            className="px-4 py-1.5 text-xs font-medium text-neutral-400 hover:text-white transition-colors rounded hover:bg-white/5"
          >
            Dashboard
          </Link>
          <span className="px-4 py-1.5 text-xs font-medium text-white bg-white/10 shadow-sm rounded border border-white/5">
            Market Data
          </span>
          <Link
            to="#"
            className="px-4 py-1.5 text-xs font-medium text-neutral-400 hover:text-white transition-colors rounded hover:bg-white/5"
          >
            Portfolio
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/20 bg-green-500/10">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-[10px] font-mono font-medium text-green-400">
              LIVE SOCKET
            </span>
          </div>
          <button className="w-8 h-8 flex items-center justify-center text-neutral-400 hover:text-white border border-white/10 rounded-md hover:bg-white/5 transition-all">
            <Bell className="w-4 h-4" />
          </button>
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 border border-white/20"></div>
        </div>
      </nav>

      {/* Live Ticker */}
      <div className="fixed top-16 z-40 w-full">
        <div className="w-full overflow-hidden bg-black border-b border-white/5">
          <div className="whitespace-nowrap text-xs font-mono py-2 text-neutral-400 animate-infinite-scroll">
            {tickerItems.map((item, index) => (
              <span key={index} className="ticker-item inline-block px-8">
                <span className="text-white font-semibold mr-2">{item.city}</span>{" "}
                {item.value}{" "}
                <span
                  className={
                    item.changeType === "positive"
                      ? "text-green-500"
                      : item.changeType === "negative"
                      ? "text-red-500"
                      : "text-neutral-500"
                  }
                >
                  {item.change}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 pt-32 pb-12 px-6 md:px-8 max-w-[1920px] mx-auto">
        {/* Header */}
        <header
          className="flex flex-col lg:flex-row justify-between items-end gap-6 mb-12"
          style={{
            opacity: mounted && !loading ? 1 : 0,
            transform: mounted && !loading ? "translateY(0)" : "translateY(8px)",
            transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <div>
            <h1 className="font-display text-3xl md:text-5xl font-medium tracking-tight text-white mb-2">
              Market Intelligence
            </h1>
            <p className="text-neutral-500 text-sm max-w-xl">
              Real-time liquidity analysis and valuation metrics across global prime
              markets. Data aggregated from verified on-chain settlements and agency
              feeds.
            </p>
          </div>
          <div className="flex items-center gap-2 bg-[#0A0A0A] p-1 rounded-lg border border-white/10">
            {["1H", "1D", "1W", "1M", "1Y"].map((period, index) => (
              <button
                key={period}
                className={`px-4 py-2 text-xs font-medium rounded transition-colors ${
                  index === 0
                    ? "bg-white/10 text-white shadow-sm border border-white/5"
                    : "text-neutral-500 hover:text-white hover:bg-white/5"
                }`}
              >
                {period}
              </button>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-12 gap-8">
          {/* Sidebar Filters */}
          <aside
            className="col-span-12 lg:col-span-2 space-y-8"
            style={{
              opacity: mounted && !loading ? 1 : 0,
              transform: mounted && !loading ? "translateY(0)" : "translateY(8px)",
              transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s",
            }}
          >
            {/* Filter Group */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-semibold">
                Asset Class
              </h3>
              <div className="space-y-2">
                {["Residential", "Commercial", "Land"].map((asset) => (
                  <label
                    key={asset}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <div className="w-4 h-4 border border-white/20 rounded bg-[#0A0A0A] flex items-center justify-center transition-colors group-hover:border-white/40">
                      <Check className="w-3 h-3 text-white hidden" />
                    </div>
                    <span className="text-sm text-neutral-300 group-hover:text-white transition-colors">
                      {asset}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Filter Group */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-semibold">
                Region
              </h3>
              <div className="space-y-2">
                {["North America", "EMEA", "APAC"].map((region) => (
                  <label
                    key={region}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <div className="w-4 h-4 border border-white/20 rounded bg-[#0A0A0A] flex items-center justify-center transition-colors group-hover:border-white/40">
                      <Check className="w-3 h-3 text-white hidden" />
                    </div>
                    <span className="text-sm text-neutral-300 group-hover:text-white transition-colors">
                      {region}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Range Slider Simulation */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-semibold">
                Price Range
              </h3>
              <div className="relative h-1 bg-white/10 rounded w-full mt-6">
                <div className="absolute left-1/4 right-1/4 h-full bg-indigo-500"></div>
                <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow cursor-grab hover:scale-125 transition-transform"></div>
                <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow cursor-grab hover:scale-125 transition-transform"></div>
              </div>
              <div className="flex justify-between text-[10px] font-mono text-neutral-400 mt-2">
                <span>$1M</span>
                <span>$50M+</span>
              </div>
            </div>

            {/* Ad/Promo Mini Card */}
            <div className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-xl p-4 mt-8">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-3 h-3 text-amber-400" />
                <span className="text-[10px] font-bold text-white uppercase">
                  Premium Data
                </span>
              </div>
              <p className="text-[11px] text-neutral-400 leading-normal mb-3">
                Unlock order book depth and whale wallet tracking.
              </p>
              <button className="w-full py-2 bg-white text-black text-[10px] font-bold uppercase tracking-widest rounded hover:bg-neutral-200 transition-colors">
                Upgrade
              </button>
            </div>
          </aside>

          {/* Main Dashboard */}
          <main className="col-span-12 lg:col-span-10 space-y-6">
            {/* Top Metrics Grid */}
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
              style={{
                opacity: mounted && !loading ? 1 : 0,
                transform: mounted && !loading ? "translateY(0)" : "translateY(8px)",
                transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
              }}
            >
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-[#0A0A0A] border border-white/10 rounded-xl p-5 relative overflow-hidden group hover:border-white/20 transition-colors"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    {metric.icon && (
                      <metric.icon className="w-12 h-12 text-white" />
                    )}
                  </div>
                  <div className="text-[11px] text-neutral-500 font-mono uppercase tracking-widest mb-2">
                    {metric.title}
                  </div>
                  <div className="flex items-end gap-3">
                    <span className="font-display text-2xl font-medium text-white">
                      {metric.value}
                    </span>
                    <span
                      className={`text-[11px] font-mono mb-1 flex items-center ${
                        metric.changeType === "positive"
                          ? "text-green-500"
                          : metric.changeType === "negative"
                          ? "text-red-500"
                          : "text-neutral-500"
                      }`}
                    >
                      {metric.changeType === "positive" && (
                        <ArrowUpRight className="w-3 h-3 mr-0.5" />
                      )}
                      {metric.changeType === "negative" && (
                        <ArrowDownRight className="w-3 h-3 mr-0.5" />
                      )}
                      {metric.changeType === "neutral" && (
                        <Minus className="w-3 h-3 mr-0.5" />
                      )}
                      {metric.change}
                    </span>
                  </div>
                  {metric.subtitle && (
                    <div className="mt-2 text-[10px] text-neutral-600">
                      {metric.subtitle}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Main Chart Section */}
            <div
              className="bg-[#0A0A0A] border border-white/10 rounded-xl p-6 md:p-8 relative overflow-hidden"
              style={{
                opacity: mounted && !loading ? 1 : 0,
                transform: mounted && !loading ? "translateY(0)" : "translateY(8px)",
                transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.3s",
              }}
            >
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h2 className="text-sm font-medium text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></span>
                    Global Liquidity Index
                  </h2>
                  <p className="text-xs text-neutral-500 mt-1 font-mono">
                    Weighted average of top 10 metropolitan markets
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-medium text-white font-display">
                    142.85
                  </div>
                  <div className="text-xs text-green-500 font-mono">
                    +12.4 (8.2%) YTD
                  </div>
                </div>
              </div>

              {/* Custom SVG Chart */}
              <div
                ref={chartRef}
                className="w-full aspect-[21/9] md:aspect-[3/1] relative cursor-crosshair"
                onMouseMove={handleChartMouseMove}
              >
                {/* Grid Lines */}
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-full h-px bg-white/5"></div>
                  ))}
                </div>

                {/* Tooltip Line */}
                <div
                  className="absolute top-0 bottom-0 w-px bg-indigo-500/50 pointer-events-none z-10 transition-all duration-75"
                  style={{ left: `${chartHoverX}%` }}
                >
                  <div className="absolute top-1/4 -translate-y-1/2 left-0 w-2 h-2 -ml-1 rounded-full bg-indigo-500 border-2 border-black"></div>
                  <div className="absolute top-0 -translate-x-1/2 -mt-8 bg-neutral-900 border border-white/10 px-2 py-1 rounded text-[10px] font-mono whitespace-nowrap text-white">
                    Nov 14: $141.20
                  </div>
                </div>

                <svg
                  viewBox="0 0 1000 300"
                  preserveAspectRatio="none"
                  className="w-full h-full overflow-visible"
                >
                  <defs>
                    <linearGradient
                      id="chartGradient"
                      x1={0}
                      x2={0}
                      y1={0}
                      y2={1}
                    >
                      <stop
                        offset="0%"
                        stopColor="rgba(99, 102, 241, 0.3)"
                      />
                      <stop
                        offset="100%"
                        stopColor="rgba(99, 102, 241, 0)"
                        stopOpacity={0}
                      />
                    </linearGradient>
                  </defs>

                  {/* Area Fill */}
                  <path
                    d="M0,250 C100,240 150,200 250,210 C350,220 400,180 500,150 C600,120 700,160 800,100 C900,40 950,80 1000,60 V300 H0 Z"
                    fill="url(#chartGradient)"
                    className="opacity-0"
                    style={{
                      opacity: mounted && !loading ? 1 : 0,
                      transition: "opacity 1s ease-out 0.5s",
                    }}
                  />

                  {/* Stroke Line */}
                  <path
                    d="M0,250 C100,240 150,200 250,210 C350,220 400,180 500,150 C600,120 700,160 800,100 C900,40 950,80 1000,60"
                    fill="none"
                    stroke="#6366f1"
                    strokeWidth={2}
                    vectorEffect="non-scaling-stroke"
                    style={{
                      strokeDasharray: 2000,
                      strokeDashoffset: mounted && !loading ? 0 : 2000,
                      transition: "stroke-dashoffset 2.5s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  />

                  {/* Dots */}
                  <circle
                    cx="800"
                    cy="100"
                    r="3"
                    fill="#0A0A0A"
                    stroke="#fff"
                    strokeWidth={2}
                    className="shadow-[0_0_15px_2px_rgba(99,102,241,0.5)]"
                    style={{
                      opacity: mounted && !loading ? 1 : 0,
                      transform: mounted && !loading ? "scale(1)" : "scale(0)",
                      transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1) 1.5s",
                    }}
                  />
                  <circle
                    cx="500"
                    cy="150"
                    r="3"
                    fill="#0A0A0A"
                    stroke="#fff"
                    strokeWidth={2}
                    style={{
                      opacity: mounted && !loading ? 1 : 0,
                      transform: mounted && !loading ? "scale(1)" : "scale(0)",
                      transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1) 1.2s",
                    }}
                  />
                </svg>

                {/* X Axis Labels */}
                <div className="absolute bottom-0 left-0 w-full flex justify-between text-[10px] font-mono text-neutral-600 translate-y-6">
                  {["JAN", "MAR", "MAY", "JUL", "SEP", "NOV"].map((label) => (
                    <span key={label}>{label}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Split Section: Gainers/Losers & Table */}
            <div
              className="grid grid-cols-1 lg:grid-cols-3 gap-6"
              style={{
                opacity: mounted && !loading ? 1 : 0,
                transform: mounted && !loading ? "translateY(0)" : "translateY(8px)",
                transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.5s",
              }}
            >
              {/* Top Movers */}
              <div className="lg:col-span-1 space-y-4">
                {/* Top Gainers */}
                <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-5">
                  <h3 className="text-xs font-mono uppercase text-neutral-500 mb-4 flex items-center gap-2">
                    <TrendingUp className="w-3 h-3" />
                    Top Gainers (24h)
                  </h3>
                  <div className="space-y-3">
                    {topGainers.map((item) => (
                      <div key={item.rank}>
                        <div className="flex justify-between items-center group cursor-pointer mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded bg-white/5 flex items-center justify-center text-[10px] text-white">
                              {item.rank}
                            </div>
                            <div>
                              <div className="text-xs font-medium text-white group-hover:text-indigo-400 transition-colors">
                                {item.location.split(",")[0]}
                              </div>
                              <div className="text-[10px] text-neutral-500">{item.type}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-xs font-mono text-green-500">
                              {item.change}
                            </div>
                            <div className="text-[10px] font-mono text-neutral-600">
                              {item.volume}
                            </div>
                          </div>
                        </div>
                        {item.rank < topGainers.length && <div className="w-full h-px bg-white/5"></div>}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Top Losers */}
                <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-5">
                  <h3 className="text-xs font-mono uppercase text-neutral-500 mb-4 flex items-center gap-2">
                    <TrendingDown className="w-3 h-3" />
                    Top Losers (24h)
                  </h3>
                  <div className="space-y-3">
                    {topLosers.map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center group cursor-pointer mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded bg-white/5 flex items-center justify-center text-[10px] text-white">
                              {item.rank}
                            </div>
                            <div>
                              <div className="text-xs font-medium text-white group-hover:text-red-400 transition-colors">
                                {item.location.split(",")[0]}
                              </div>
                              <div className="text-[10px] text-neutral-500">{item.type}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-xs font-mono text-red-500">
                              {item.change}
                            </div>
                          </div>
                        </div>
                        {index < topLosers.length - 1 && <div className="w-full h-px bg-white/5"></div>}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Transaction Table */}
              <div className="lg:col-span-2 bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden flex flex-col">
                <div className="p-5 border-b border-white/10 flex justify-between items-center">
                  <h3 className="text-xs font-medium text-white flex items-center gap-2">
                    <List className="w-3 h-3 text-neutral-500" />
                    Recent Transactions
                  </h3>
                  <div className="flex gap-2">
                    <button className="p-1 hover:bg-white/10 rounded text-neutral-500 hover:text-white transition-colors">
                      <Filter className="w-3 h-3" />
                    </button>
                    <button className="p-1 hover:bg-white/10 rounded text-neutral-500 hover:text-white transition-colors">
                      <Download className="w-3 h-3" />
                    </button>
                  </div>
                </div>
                <div className="overflow-x-auto flex-1">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-white/5 text-[10px] text-neutral-400 font-mono uppercase tracking-wider">
                        <th className="p-4 font-normal">Asset / ID</th>
                        <th className="p-4 font-normal">Location</th>
                        <th className="p-4 font-normal">Price</th>
                        <th className="p-4 font-normal">Type</th>
                        <th className="p-4 font-normal text-right">Time</th>
                        <th className="p-4 font-normal text-right">Status</th>
                      </tr>
                    </thead>
                    <tbody className="text-xs font-mono text-neutral-300">
                      {transactions.map((txn, index) => (
                        <tr
                          key={index}
                          className="border-b border-white/5 hover:bg-white/02 cursor-pointer transition-colors group"
                        >
                          <td className="p-4">
                            <div className="font-medium text-white group-hover:text-indigo-400 transition-colors">
                              {txn.asset}
                            </div>
                            <div className="text-[10px] text-neutral-600">{txn.id}</div>
                          </td>
                          <td className="p-4">{txn.location}</td>
                          <td className="p-4 text-white">{txn.price}</td>
                          <td className="p-4">
                            <span
                              className={`px-2 py-0.5 rounded text-[10px] border ${
                                txn.type === "Res"
                                  ? "bg-blue-500/10 text-blue-400 border-blue-500/20"
                                  : txn.type === "Vac"
                                  ? "bg-purple-500/10 text-purple-400 border-purple-500/20"
                                  : txn.type === "Com"
                                  ? "bg-orange-500/10 text-orange-400 border-orange-500/20"
                                  : txn.type === "Lnd"
                                  ? "bg-green-500/10 text-green-400 border-green-500/20"
                                  : "bg-white/5 text-neutral-400 border-white/5"
                              }`}
                            >
                              {txn.type}
                            </span>
                          </td>
                          <td className="p-4 text-right text-neutral-500">{txn.time}</td>
                          <td className="p-4 text-right">
                            <span className="flex items-center justify-end gap-1">
                              {txn.status === "Closed" && (
                                <>
                                  <CheckCircle className="w-3 h-3 text-emerald-500" /> Closed
                                </>
                              )}
                              {txn.status === "Pending" && (
                                <>
                                  <Clock className="w-3 h-3 text-amber-500" /> Pending
                                </>
                              )}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="p-3 border-t border-white/10 flex justify-center">
                  <button className="text-[10px] font-mono text-neutral-500 hover:text-white uppercase tracking-widest transition-colors">
                    View All Transactions
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      <style>{`
        @keyframes ticker {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-100%, 0, 0);
          }
        }
        .animate-infinite-scroll {
          animation: ticker 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default MarketIntelligence;
