import { Link } from "react-router-dom";
import {
  TrendingUp, TrendingDown, BarChart2, Activity, Globe, Bell,
  ArrowUpRight, ArrowDownRight, DollarSign, Home, Users, Clock,
  Zap, Shield, Target, Layers,
} from "lucide-react";
import "@/styles/landing.css";

const markets = [
  { code: "NYC", name: "New York", price: "$14,204", change: 0.4, volume: "2.4B", trend: "up" },
  { code: "LON", name: "London", price: "£12,850", change: -0.2, volume: "1.8B", trend: "down" },
  { code: "DXB", name: "Dubai", price: "AED 3,450", change: 1.8, volume: "3.2B", trend: "up" },
  { code: "SIN", name: "Singapore", price: "S$ 2,950", change: 0, volume: "890M", trend: "neutral" },
  { code: "MIA", name: "Miami", price: "$9,850", change: 0.9, volume: "1.1B", trend: "up" },
  { code: "SYD", name: "Sydney", price: "A$ 18,200", change: 2.1, volume: "1.5B", trend: "up" },
];

const insights = [
  { title: "Luxury segment outperforming", desc: "Properties $5M+ showing 12% higher velocity than market average", icon: TrendingUp, color: "emerald" },
  { title: "Inventory tightening", desc: "Active listings down 18% YoY across Tier 1 cities", icon: Layers, color: "amber" },
  { title: "Buyer demand surge", desc: "Search volume up 34% in coastal markets", icon: Target, color: "indigo" },
];

export default function Analytics() {
  return (
    <div className="landing-page min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full px-6 py-4 md:px-8 h-16 flex justify-between items-center z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5">
        <Link to="/landing" className="font-display text-lg font-medium tracking-tight flex items-center gap-2 group">
          <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-bold tracking-tighter rounded-sm group-hover:scale-95 transition-transform">H.</div>
        </Link>
        <div className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-lg border border-white/5">
          <Link to="/landing" className="px-4 py-1.5 text-xs font-medium text-neutral-400 hover:text-white transition-colors rounded hover:bg-white/5">Home</Link>
          <Link to="/search" className="px-4 py-1.5 text-xs font-medium text-neutral-400 hover:text-white transition-colors rounded hover:bg-white/5">Search</Link>
          <span className="px-4 py-1.5 text-xs font-medium text-white bg-white/10 shadow-sm rounded border border-white/5">Analytics</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/20 bg-green-500/10">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] font-mono font-medium text-green-400">LIVE</span>
          </div>
          <button className="w-8 h-8 flex items-center justify-center text-neutral-400 hover:text-white border border-white/10 rounded-md hover:bg-white/5 transition-all">
            <Bell className="w-4 h-4" />
          </button>
          <Link to="/settings" className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 border border-white/20" />
        </div>
      </nav>

      {/* Live Ticker */}
      <div className="fixed top-16 z-40 w-full overflow-hidden bg-black border-b border-white/5">
        <div className="animate-marquee whitespace-nowrap py-2 text-xs font-mono text-neutral-400">
          {markets.concat(markets).map((m, i) => (
            <span key={i} className="inline-block px-8">
              <span className="text-white font-semibold mr-2">{m.code}</span>
              {m.price}/sqft
              <span className={`ml-1 ${m.trend === "up" ? "text-green-500" : m.trend === "down" ? "text-red-500" : "text-neutral-500"}`}>
                {m.trend === "up" ? "▲" : m.trend === "down" ? "▼" : "―"} {Math.abs(m.change)}%
              </span>
            </span>
          ))}
        </div>
      </div>

      <main className="pt-32 pb-12 px-6 md:px-8 max-w-[1920px] mx-auto">
        {/* Header */}
        <header className="flex flex-col lg:flex-row justify-between items-end gap-6 mb-12">
          <div>
            <h1 className="font-display text-3xl md:text-5xl font-medium tracking-tight text-white mb-2">Market Intelligence</h1>
            <p className="text-neutral-500 text-sm max-w-xl">Real-time liquidity analysis and valuation metrics across global prime markets.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-xs font-medium text-white hover:bg-white/10 transition-colors flex items-center gap-2">
              <Clock className="w-3 h-3" /> 24H
            </button>
            <button className="px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-xs font-medium text-neutral-400 hover:bg-white/10 hover:text-white transition-colors">7D</button>
            <button className="px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-xs font-medium text-neutral-400 hover:bg-white/10 hover:text-white transition-colors">30D</button>
            <button className="px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-xs font-medium text-neutral-400 hover:bg-white/10 hover:text-white transition-colors">YTD</button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Global Volume", value: "$12.4B", change: "+8.2%", icon: DollarSign, up: true },
            { label: "Active Listings", value: "24,892", change: "-3.1%", icon: Home, up: false },
            { label: "Avg. Days on Market", value: "18", change: "-12%", icon: Clock, up: true },
            { label: "Buyer Activity", value: "High", change: "+24%", icon: Users, up: true },
          ].map((stat) => (
            <div key={stat.label} className="bg-[#0A0A0A] border border-white/10 rounded-xl p-6 group hover:border-white/20 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <stat.icon className="w-5 h-5 text-neutral-600 group-hover:text-white transition-colors" />
                <span className={`text-xs font-medium flex items-center gap-1 ${stat.up ? "text-emerald-400" : "text-red-400"}`}>
                  {stat.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                  {stat.change}
                </span>
              </div>
              <div className="text-2xl font-medium text-white mb-1">{stat.value}</div>
              <div className="text-xs text-neutral-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Chart Area */}
          <div className="lg:col-span-2 bg-[#0A0A0A] border border-white/10 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-medium text-white">Price Index</h3>
                <p className="text-xs text-neutral-500">Global weighted average $/sqft</p>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1.5 rounded-lg bg-indigo-500/20 text-xs font-medium text-indigo-400">Residential</button>
                <button className="px-3 py-1.5 rounded-lg bg-white/5 text-xs font-medium text-neutral-400 hover:bg-white/10 transition-colors">Commercial</button>
              </div>
            </div>
            <div className="h-64 flex items-end justify-between gap-2">
              {[40, 55, 45, 70, 60, 85, 75, 90, 80, 95, 88, 92].map((height, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2">
                  <div className={`w-full rounded-t transition-all hover:bg-indigo-500/40 ${i === 11 ? "bg-indigo-500/30" : "bg-white/10"}`} style={{ height: `${height}%` }} />
                  <span className="text-[10px] text-neutral-600 font-mono">{["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"][i]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* AI Insights */}
          <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-6">
              <Zap className="w-4 h-4 text-indigo-400" />
              <h3 className="text-lg font-medium text-white">AI Insights</h3>
            </div>
            <div className="space-y-4">
              {insights.map((insight) => (
                <div key={insight.title} className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors cursor-pointer group">
                  <div className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${insight.color === "emerald" ? "bg-emerald-500/20 text-emerald-400" : insight.color === "amber" ? "bg-amber-500/20 text-amber-400" : "bg-indigo-500/20 text-indigo-400"}`}>
                      <insight.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-white group-hover:text-indigo-400 transition-colors">{insight.title}</h4>
                      <p className="text-xs text-neutral-500 mt-1">{insight.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Markets Table */}
        <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden">
          <div className="p-6 border-b border-white/5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-neutral-500" />
                <h3 className="text-lg font-medium text-white">Global Markets</h3>
              </div>
              <button className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1">
                View All <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="text-left text-xs font-medium text-neutral-500 uppercase tracking-wider px-6 py-4">Market</th>
                  <th className="text-right text-xs font-medium text-neutral-500 uppercase tracking-wider px-6 py-4">Price/sqft</th>
                  <th className="text-right text-xs font-medium text-neutral-500 uppercase tracking-wider px-6 py-4">24h Change</th>
                  <th className="text-right text-xs font-medium text-neutral-500 uppercase tracking-wider px-6 py-4">Volume</th>
                  <th className="text-right text-xs font-medium text-neutral-500 uppercase tracking-wider px-6 py-4">Trend</th>
                </tr>
              </thead>
              <tbody>
                {markets.map((market) => (
                  <tr key={market.code} className="border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono text-neutral-500">{market.code}</span>
                        <span className="text-sm font-medium text-white">{market.name}</span>
                      </div>
                    </td>
                    <td className="text-right px-6 py-4 text-sm text-white font-mono">{market.price}</td>
                    <td className="text-right px-6 py-4">
                      <span className={`text-sm font-medium flex items-center justify-end gap-1 ${market.trend === "up" ? "text-emerald-400" : market.trend === "down" ? "text-red-400" : "text-neutral-500"}`}>
                        {market.trend === "up" ? <TrendingUp className="w-3 h-3" /> : market.trend === "down" ? <TrendingDown className="w-3 h-3" /> : null}
                        {market.change > 0 ? "+" : ""}{market.change}%
                      </span>
                    </td>
                    <td className="text-right px-6 py-4 text-sm text-neutral-400 font-mono">{market.volume}</td>
                    <td className="text-right px-6 py-4">
                      <div className="w-20 h-6 ml-auto flex items-end gap-0.5">
                        {[30, 45, 35, 60, 50, 70].map((h, i) => (
                          <div key={i} className={`flex-1 rounded-sm ${market.trend === "up" ? "bg-emerald-500/30" : market.trend === "down" ? "bg-red-500/30" : "bg-neutral-500/30"}`} style={{ height: `${h}%` }} />
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6 md:px-12">
        <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <BarChart2 className="w-4 h-4 text-neutral-500" />
            <span className="text-xs text-neutral-500">HAUS Market Intelligence</span>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/terms" className="text-xs text-neutral-500 hover:text-white transition-colors">Terms</Link>
            <Link to="/privacy" className="text-xs text-neutral-500 hover:text-white transition-colors">Privacy</Link>
            <Link to="/about" className="text-xs text-neutral-500 hover:text-white transition-colors">About</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
