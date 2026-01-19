import { Link } from "react-router-dom";
import {
  Sparkles, Search, Heart, Bell, Settings, Home, TrendingUp, MapPin,
  Calendar, MessageSquare, FileText, ArrowRight, ArrowUpRight, Plus,
  Eye, Clock, DollarSign, BarChart2, Users, ChevronRight,
} from "lucide-react";
import "@/styles/landing.css";

const savedProperties = [
  { id: 1, image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=400", title: "Oceanview Villa", location: "Malibu, CA", price: "$2.8M", match: 98 },
  { id: 2, image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=400", title: "Skyline Penthouse", location: "Manhattan, NY", price: "$5.2M", match: 94 },
  { id: 3, image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=400", title: "Modern Townhouse", location: "Austin, TX", price: "$1.15M", match: 91 },
];

const recentSearches = [
  { query: "3 bed house in Sydney with pool", results: 24, time: "2 hours ago" },
  { query: "Investment properties under $1M", results: 156, time: "Yesterday" },
  { query: "Waterfront apartments Melbourne", results: 42, time: "3 days ago" },
];

const upcomingViewings = [
  { property: "128 Crown Street", time: "Tomorrow, 10:00 AM", agent: "Mike Ross" },
  { property: "45 Pacific Highway", time: "Sat, 2:00 PM", agent: "Sarah Chen" },
];

const marketAlerts = [
  { type: "price_drop", message: "Price dropped 5% on Oceanview Villa", time: "1 hour ago" },
  { type: "new_listing", message: "New listing matching your criteria in Bondi", time: "3 hours ago" },
  { type: "market", message: "Sydney median price up 2.1% this month", time: "Today" },
];

export default function Dashboard() {
  return (
    <div className="landing-page min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full px-6 py-4 flex justify-between items-center z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <Link to="/landing" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-white/10 border border-white/10 flex items-center justify-center">
            <Sparkles className="h-4 w-4 text-white/80" />
          </div>
          <span className="text-lg font-semibold tracking-tight">HAUS</span>
        </Link>
        <div className="flex items-center gap-2">
          <Link to="/search" className="p-2 rounded-lg hover:bg-white/5 text-neutral-400 hover:text-white transition-colors">
            <Search className="w-5 h-5" />
          </Link>
          <Link to="/notifications" className="p-2 rounded-lg hover:bg-white/5 text-neutral-400 hover:text-white transition-colors relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </Link>
          <Link to="/settings" className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 border border-white/20" />
        </div>
      </nav>

      <main className="pt-24 pb-20 px-6 md:px-12 max-w-[1600px] mx-auto">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-display font-medium tracking-tight text-white mb-2">Good morning, John</h1>
          <p className="text-neutral-400">Here's what's happening with your property search.</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { icon: Heart, label: "Saved Properties", value: "12", color: "text-rose-400" },
            { icon: Eye, label: "Properties Viewed", value: "47", color: "text-blue-400" },
            { icon: Calendar, label: "Upcoming Viewings", value: "3", color: "text-amber-400" },
            { icon: MessageSquare, label: "Unread Messages", value: "5", color: "text-emerald-400" },
          ].map((stat) => (
            <div key={stat.label} className="p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
              <stat.icon className={`w-5 h-5 ${stat.color} mb-3`} />
              <div className="text-2xl font-medium text-white mb-1">{stat.value}</div>
              <div className="text-xs text-neutral-500">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Saved Properties */}
            <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
              <div className="p-4 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-rose-400" />
                  <h2 className="font-medium text-white">Saved Properties</h2>
                </div>
                <Link to="/favorites" className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1">
                  View all <ChevronRight className="w-3 h-3" />
                </Link>
              </div>
              <div className="p-4 grid md:grid-cols-3 gap-4">
                {savedProperties.map((property) => (
                  <Link key={property.id} to={`/listing/${property.id}`} className="group">
                    <div className="aspect-[4/3] rounded-lg overflow-hidden mb-3 relative">
                      <img src={property.image} alt={property.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute top-2 right-2 px-2 py-1 rounded bg-indigo-500/90 text-[10px] font-medium text-white flex items-center gap-1">
                        <Sparkles className="w-2.5 h-2.5" />{property.match}%
                      </div>
                    </div>
                    <h3 className="text-sm font-medium text-white group-hover:text-indigo-400 transition-colors">{property.title}</h3>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-xs text-neutral-500 flex items-center gap-1"><MapPin className="w-3 h-3" />{property.location}</span>
                      <span className="text-xs font-medium text-white">{property.price}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Recent Searches */}
            <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
              <div className="p-4 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Search className="w-4 h-4 text-blue-400" />
                  <h2 className="font-medium text-white">Recent Searches</h2>
                </div>
                <Link to="/search" className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1">
                  New search <Plus className="w-3 h-3" />
                </Link>
              </div>
              <div className="divide-y divide-white/5">
                {recentSearches.map((search, i) => (
                  <Link key={i} to="/search" className="p-4 flex items-center justify-between hover:bg-white/5 transition-colors group">
                    <div>
                      <p className="text-sm text-white group-hover:text-indigo-400 transition-colors">{search.query}</p>
                      <p className="text-xs text-neutral-500 mt-1">{search.results} results • {search.time}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-neutral-600 group-hover:text-white transition-colors" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Market Snapshot */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <BarChart2 className="w-4 h-4 text-cyan-400" />
                  <h2 className="font-medium text-white">Market Snapshot</h2>
                </div>
                <Link to="/analytics" className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1">
                  Full analytics <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "Median Price", value: "$1.24M", change: "+2.1%", up: true },
                  { label: "Days on Market", value: "28", change: "-3 days", up: true },
                  { label: "Auction Rate", value: "72%", change: "+5%", up: true },
                ].map((stat) => (
                  <div key={stat.label} className="p-3 rounded-lg bg-white/5 border border-white/5">
                    <div className="text-xs text-neutral-500 mb-1">{stat.label}</div>
                    <div className="text-lg font-medium text-white">{stat.value}</div>
                    <div className={`text-[10px] ${stat.up ? "text-emerald-400" : "text-red-400"}`}>{stat.change}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Viewings */}
            <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
              <div className="p-4 border-b border-white/10 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-amber-400" />
                <h2 className="font-medium text-white">Upcoming Viewings</h2>
              </div>
              <div className="divide-y divide-white/5">
                {upcomingViewings.map((viewing, i) => (
                  <div key={i} className="p-4">
                    <p className="text-sm font-medium text-white mb-1">{viewing.property}</p>
                    <p className="text-xs text-neutral-500 flex items-center gap-1 mb-2">
                      <Clock className="w-3 h-3" />{viewing.time}
                    </p>
                    <p className="text-xs text-neutral-400">with {viewing.agent}</p>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t border-white/10">
                <button className="w-full py-2 rounded-lg border border-white/10 text-xs font-medium text-white hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
                  <Plus className="w-3 h-3" /> Schedule Viewing
                </button>
              </div>
            </div>

            {/* Market Alerts */}
            <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
              <div className="p-4 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bell className="w-4 h-4 text-purple-400" />
                  <h2 className="font-medium text-white">Alerts</h2>
                </div>
                <Link to="/notifications" className="text-xs text-indigo-400 hover:text-indigo-300">View all</Link>
              </div>
              <div className="divide-y divide-white/5">
                {marketAlerts.map((alert, i) => (
                  <div key={i} className="p-4">
                    <p className="text-sm text-white mb-1">{alert.message}</p>
                    <p className="text-xs text-neutral-500">{alert.time}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <h2 className="font-medium text-white mb-4">Quick Actions</h2>
              <div className="space-y-2">
                {[
                  { icon: Search, label: "New Search", to: "/search" },
                  { icon: Home, label: "List Property", to: "/sell" },
                  { icon: Users, label: "Find Agent", to: "/agents" },
                  { icon: FileText, label: "Get Appraisal", to: "/appraisal-request" },
                ].map((action) => (
                  <Link
                    key={action.label}
                    to={action.to}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                      <action.icon className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-sm text-neutral-300 group-hover:text-white transition-colors">{action.label}</span>
                    <ArrowRight className="w-4 h-4 text-neutral-600 ml-auto group-hover:text-white transition-colors" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
