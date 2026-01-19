import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Camera,
  Check,
  Building2,
  User,
  Users,
  CreditCard,
  Bell,
  Webhook,
  ShieldCheck,
  Briefcase,
  Calculator,
  Code2,
  X,
  Plus,
  Terminal,
  ExternalLink,
  Copy,
  RotateCw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

type UserRole = "agent" | "valuer" | "developer";

const navItems = [
  { icon: User, label: "General Profile", active: true },
  { icon: Users, label: "Team & Access" },
  { icon: CreditCard, label: "Billing & Plans" },
  { icon: Bell, label: "Notifications" },
];

const developerNavItems = [
  { icon: Webhook, label: "API & Webhooks" },
  { icon: ShieldCheck, label: "Tokens & Keys" },
];

const roleCards = [
  {
    id: "agent" as UserRole,
    icon: Briefcase,
    title: "Agent / Agency",
    description: "Sales history, Prospecting tools, CRM Integration.",
    color: "emerald",
  },
  {
    id: "valuer" as UserRole,
    icon: Calculator,
    title: "Valuer",
    description: "AVM reports, Risk analysis, Comparison grids.",
    color: "indigo",
  },
  {
    id: "developer" as UserRole,
    icon: Code2,
    title: "Developer",
    description: "Raw data access, API keys, Webhook configs.",
    color: "amber",
  },
];

export default function AccountSettings() {
  const [selectedRole, setSelectedRole] = useState<UserRole>("agent");
  const [regions, setRegions] = useState(["New South Wales", "Victoria"]);
  const [dailyDigest, setDailyDigest] = useState(true);
  const [auctionAlerts, setAuctionAlerts] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const removeRegion = (region: string) => {
    setRegions(regions.filter((r) => r !== region));
  };

  return (
    <div className="min-h-screen bg-[#050505] text-neutral-300 text-sm leading-relaxed">
      {/* Background Effects */}
      <div
        className="fixed inset-0 z-0 w-full h-full pointer-events-none opacity-40"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")`,
        }}
      />
      <div
        className="fixed inset-0 z-0 w-full h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 100% 0%, rgba(16, 185, 129, 0.04) 0%, transparent 40%)",
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full px-6 md:px-8 h-16 flex justify-between items-center z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5">
        <div className="flex items-center gap-8">
          <Link
            to="/"
            className="font-display text-lg font-medium tracking-tight flex items-center gap-2 group"
          >
            <div className="w-8 h-8 bg-emerald-600 text-white flex items-center justify-center font-bold tracking-tighter rounded-sm group-hover:scale-95 transition-transform duration-300">
              H
            </div>
            <span className="text-white">
              HAUS<span className="text-neutral-500">.AI</span>
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-1">
            <Link
              to="/"
              className="px-3 py-1.5 text-xs font-medium text-neutral-400 hover:text-white transition-colors rounded hover:bg-white/5"
            >
              Dashboard
            </Link>
            <Link
              to="/"
              className="px-3 py-1.5 text-xs font-medium text-neutral-400 hover:text-white transition-colors rounded hover:bg-white/5"
            >
              Market Intel
            </Link>
            <span className="px-3 py-1.5 text-xs font-medium text-white bg-white/5 shadow-sm rounded border border-white/5">
              Settings
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="text-[10px] font-mono font-medium text-neutral-300">
              STATUS: OPERATIONAL
            </span>
          </div>
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-500 border border-white/20 ring-4 ring-black/50" />
        </div>
      </nav>

      {/* Content Wrapper */}
      <div className="relative z-10 pt-28 pb-12 px-6 md:px-8 max-w-[1280px] mx-auto">
        {/* Header Section */}
        <motion.header
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/5">
            <div className="flex items-end gap-6">
              <div className="relative group">
                <div className="w-24 h-24 rounded-xl bg-neutral-800 relative overflow-hidden ring-1 ring-white/10 group-hover:ring-emerald-500/50 transition-all">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop"
                    className="w-full h-full object-cover"
                    alt="Profile"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity cursor-pointer backdrop-blur-[2px]">
                    <Camera className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-emerald-500 rounded-full border-[3px] border-[#050505] flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-display font-medium text-white tracking-tight mb-1">
                  James Davidson
                </h1>
                <div className="flex items-center gap-3 text-xs text-neutral-400 font-mono">
                  <span className="flex items-center gap-1.5">
                    <Building2 className="w-3 h-3" /> Ray White Double Bay
                  </span>
                  <span className="w-1 h-1 bg-neutral-700 rounded-full" />
                  <span>License #2049182</span>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="text-right hidden sm:block">
                <div className="text-[10px] uppercase tracking-widest text-neutral-500 font-mono mb-1">
                  Current Plan
                </div>
                <div className="text-emerald-400 font-medium text-xs border border-emerald-500/20 bg-emerald-500/10 px-2 py-1 rounded">
                  AGENCY PRO
                </div>
              </div>
              <Button className="bg-white text-black hover:bg-neutral-200 px-4 py-2 rounded-lg text-xs font-semibold">
                Upgrade Plan
              </Button>
            </div>
          </div>
        </motion.header>

        <div className="grid grid-cols-12 gap-8 lg:gap-12">
          {/* Sidebar Nav */}
          <motion.aside
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="col-span-12 lg:col-span-3"
          >
            <nav className="sticky top-32 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href="#"
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 text-xs font-medium rounded-lg border border-transparent transition-all group",
                    item.active
                      ? "bg-white/5 text-white border-white/10"
                      : "text-neutral-400 hover:text-white hover:bg-white/5"
                  )}
                >
                  <item.icon
                    className={cn(
                      "w-4 h-4 transition-colors",
                      item.active
                        ? "text-emerald-400"
                        : "group-hover:text-emerald-400"
                    )}
                  />
                  {item.label}
                </a>
              ))}
              <div className="my-4 h-px bg-white/5 mx-3" />
              <div className="px-3 pb-2 text-[10px] font-mono uppercase tracking-widest text-neutral-600">
                Developer
              </div>
              {developerNavItems.map((item) => (
                <a
                  key={item.label}
                  href="#"
                  className="flex items-center gap-3 px-3 py-2 text-xs font-medium rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 border border-transparent transition-all group"
                >
                  <item.icon className="w-4 h-4 group-hover:text-emerald-400 transition-colors" />
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.aside>

          {/* Main Settings Form */}
          <motion.main
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="col-span-12 lg:col-span-9 space-y-10"
          >
            {/* Identity Section */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-sm font-medium text-white font-display">
                  Identity & Accreditation
                </h2>
                <span className="text-[10px] text-neutral-500 font-mono">
                  Last updated: 2 days ago
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-[#0A0A0A] border border-white/5 rounded-xl">
                <div className="space-y-2">
                  <label className="text-xs text-neutral-400 font-medium">
                    Full Legal Name
                  </label>
                  <Input
                    type="text"
                    defaultValue="James William Davidson"
                    className="bg-[#050505] border-white/10 text-white font-mono text-xs h-10"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-neutral-400 font-medium">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    defaultValue="james.d@raywhite.com"
                    className="bg-[#050505] border-white/10 text-white font-mono text-xs h-10"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-neutral-400 font-medium">
                    Primary Phone
                  </label>
                  <Input
                    type="tel"
                    defaultValue="+61 400 123 456"
                    className="bg-[#050505] border-white/10 text-white font-mono text-xs h-10"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-neutral-400 font-medium flex items-center justify-between">
                    Real Estate License / Reg #
                    <span className="text-[9px] text-emerald-500 flex items-center gap-1">
                      <ShieldCheck className="w-2.5 h-2.5" /> VERIFIED
                    </span>
                  </label>
                  <Input
                    type="text"
                    value="2049182-NSW"
                    readOnly
                    className="bg-[#050505] border-white/10 text-neutral-400 font-mono text-xs h-10 opacity-70 cursor-not-allowed"
                  />
                </div>
              </div>
            </section>

            {/* User Role / Workspace Mode */}
            <section>
              <h2 className="text-sm font-medium text-white font-display mb-6">
                Workspace Configuration
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {roleCards.map((role) => (
                  <motion.div
                    key={role.id}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedRole(role.id)}
                    className={cn(
                      "relative p-5 rounded-xl border bg-[#0A0A0A] hover:bg-white/5 cursor-pointer transition-all group",
                      selectedRole === role.id
                        ? "border-emerald-500 bg-emerald-500/[0.03]"
                        : "border-white/10 hover:border-white/20"
                    )}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div
                        className={cn(
                          "w-8 h-8 rounded-lg flex items-center justify-center border",
                          role.color === "emerald" &&
                            "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
                          role.color === "indigo" &&
                            "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
                          role.color === "amber" &&
                            "bg-amber-500/10 text-amber-400 border-amber-500/20"
                        )}
                      >
                        <role.icon className="w-4 h-4" />
                      </div>
                      <div
                        className={cn(
                          "w-4 h-4 rounded-full border flex items-center justify-center transition-all",
                          selectedRole === role.id
                            ? "border-emerald-500 bg-emerald-500"
                            : "border-white/20"
                        )}
                      >
                        {selectedRole === role.id && (
                          <div className="w-1.5 h-1.5 bg-black rounded-full" />
                        )}
                      </div>
                    </div>
                    <h3 className="text-xs font-semibold text-white mb-1">
                      {role.title}
                    </h3>
                    <p className="text-[10px] text-neutral-400 leading-relaxed">
                      {role.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Preferences */}
            <section>
              <h2 className="text-sm font-medium text-white font-display mb-6">
                Regional Focus
              </h2>
              <div className="p-6 bg-[#0A0A0A] border border-white/5 rounded-xl space-y-6">
                <div className="flex flex-wrap gap-2">
                  {regions.map((region) => (
                    <div
                      key={region}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs text-white"
                    >
                      <span>{region}</span>
                      <button
                        onClick={() => removeRegion(region)}
                        className="hover:text-red-400 transition-colors"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                  <button className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-dashed border-white/20 text-xs text-neutral-500 hover:text-white hover:border-white/40 transition-all">
                    <Plus className="w-3 h-3" /> Add Region
                  </button>
                </div>
                <div className="h-px bg-white/5" />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-medium text-white">
                        Daily Market Digest
                      </div>
                      <div className="text-[10px] text-neutral-500 mt-0.5">
                        Receive AM summary of clearance rates in your regions
                      </div>
                    </div>
                    <Switch
                      checked={dailyDigest}
                      onCheckedChange={setDailyDigest}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-medium text-white">
                        Auction Alerts
                      </div>
                      <div className="text-[10px] text-neutral-500 mt-0.5">
                        Real-time SMS when watched properties clear
                      </div>
                    </div>
                    <Switch
                      checked={auctionAlerts}
                      onCheckedChange={setAuctionAlerts}
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* API Section */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-sm font-medium text-white font-display flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-emerald-500" />
                  API Access
                </h2>
                <button className="text-[10px] text-emerald-500 hover:text-emerald-400 font-mono flex items-center gap-1 transition-colors">
                  DOCS <ExternalLink className="w-3 h-3" />
                </button>
              </div>

              <div className="bg-[#0A0A0A] border border-white/5 rounded-xl overflow-hidden">
                {/* Usage Graph */}
                <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-neutral-500 font-mono">
                      Current Usage
                    </div>
                    <div className="text-xs text-white mt-1 font-mono">
                      14,204 / 50,000 Requests
                    </div>
                  </div>
                  <div className="w-32 h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                    <div className="h-full w-[28%] bg-emerald-500" />
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <label className="text-xs text-neutral-400 font-medium mb-2 block">
                      Production API Key
                    </label>
                    <div className="flex gap-2">
                      <div className="relative flex-1">
                        <Input
                          type="text"
                          value="pk_live_51Mxq...3kL9s"
                          readOnly
                          className="bg-[#050505] border-white/10 text-neutral-400 font-mono text-xs h-10"
                        />
                      </div>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={handleCopy}
                        className="border-white/10 bg-white/5 hover:bg-white/10"
                      >
                        {copied ? (
                          <Check className="w-4 h-4 text-emerald-500" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="border-white/10 bg-white/5 hover:bg-red-500/10 hover:text-red-500 hover:border-red-500/20"
                      >
                        <RotateCw className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button className="text-xs text-emerald-500 hover:text-emerald-400 font-medium flex items-center gap-2 transition-colors">
                      <Plus className="w-3 h-3" /> Configure New Webhook
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Danger Zone */}
            <div className="pt-10 mt-10 border-t border-white/5">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xs font-semibold text-red-500">
                    Deactivate Account
                  </h3>
                  <p className="text-[10px] text-neutral-500 mt-1">
                    This will revoke all API keys and remove team access.
                  </p>
                </div>
                <Button
                  variant="outline"
                  className="border-red-500/20 text-red-500 hover:bg-red-500/10 text-xs"
                >
                  Deactivate
                </Button>
              </div>
            </div>

            {/* Save Actions */}
            <div className="sticky bottom-6 flex justify-end gap-3 pt-6">
              <Button
                variant="ghost"
                className="text-neutral-400 hover:text-white text-xs"
              >
                Cancel
              </Button>
              <Button className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs shadow-lg shadow-emerald-900/20">
                Save Changes
              </Button>
            </div>
          </motion.main>
        </div>
      </div>
    </div>
  );
}
