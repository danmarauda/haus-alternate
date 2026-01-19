"use client";

import { useState } from "react";
import Link from "next/link";
import { Sparkles, Mail, Lock, Eye, EyeOff, ArrowRight, Chrome, User, Check } from "lucide-react";
import "@/styles/landing.css";

const plans = [
  { id: "buyer", label: "Buying", desc: "Search and purchase properties" },
  { id: "seller", label: "Selling", desc: "List and sell your property" },
  { id: "agent", label: "Agent", desc: "Professional real estate agent" },
  { id: "investor", label: "Investor", desc: "Portfolio and market analysis" },
];

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("buyer");
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Register:", { name, email, password, selectedPlan });
  };

  const passwordStrength = password.length === 0 ? 0 : password.length < 6 ? 1 : password.length < 10 ? 2 : 3;

  return (
    <div className="landing-page min-h-screen flex">
      {/* Left Side - Image */}
      <div className="hidden lg:block lg:flex-1 relative">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop"
          alt="Modern Architecture"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#050505] via-[#050505]/50 to-transparent" />
        <div className="absolute top-12 left-12">
          <Link href="/landing" className="inline-flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-white/10 border border-white/10 flex items-center justify-center backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-white/80" />
            </div>
            <span className="text-lg font-semibold tracking-tight text-white">HAUS</span>
          </Link>
        </div>
        <div className="absolute bottom-12 left-12 right-12">
          <div className="flex items-center gap-4 mb-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <img key={i} src={`https://i.pravatar.cc/40?img=${i + 10}`} alt="" className="w-8 h-8 rounded-full border-2 border-[#050505] -ml-2 first:ml-0" />
            ))}
            <span className="text-sm text-neutral-400">+12,400 users</span>
          </div>
          <h2 className="text-2xl font-display font-medium text-white mb-2">Join the future of real estate</h2>
          <p className="text-neutral-400 text-sm">AI-powered search, verified listings, and expert support.</p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12 overflow-y-auto">
        <div className="max-w-md w-full mx-auto">
          {/* Mobile Logo */}
          <Link href="/landing" className="lg:hidden inline-flex items-center gap-2 mb-12">
            <div className="h-8 w-8 rounded-md bg-white/10 border border-white/10 flex items-center justify-center">
              <Sparkles className="h-4 w-4 text-white/80" />
            </div>
            <span className="text-lg font-semibold tracking-tight">HAUS</span>
          </Link>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-display font-medium tracking-tight text-white mb-2">Create your account</h1>
            <p className="text-neutral-400 text-sm">Start your property journey with HAUS today.</p>
          </div>

          {/* User Type Selection */}
          <div className="mb-6">
            <label className="block text-xs font-medium text-neutral-400 mb-3">I'm interested in</label>
            <div className="grid grid-cols-2 gap-2">
              {plans.map((plan) => (
                <button
                  key={plan.id}
                  type="button"
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    selectedPlan === plan.id
                      ? "border-indigo-500 bg-indigo-500/10"
                      : "border-white/10 bg-white/5 hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-sm font-medium ${selectedPlan === plan.id ? "text-white" : "text-neutral-300"}`}>{plan.label}</span>
                    {selectedPlan === plan.id && <Check className="w-4 h-4 text-indigo-400" />}
                  </div>
                  <span className="text-[10px] text-neutral-500">{plan.desc}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Social Login */}
          <div className="flex gap-3 mb-6">
            <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-sm font-medium text-white">
              <Chrome className="w-4 h-4" />
              Google
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-sm font-medium text-white">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
              GitHub
            </button>
          </div>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-4 bg-[#050505] text-neutral-500">or</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-neutral-400 mb-2">Full name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Smith"
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-white/20 focus:bg-white/10 transition-colors"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-400 mb-2">Email address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-white/20 focus:bg-white/10 transition-colors"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-400 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a strong password"
                  className="w-full pl-11 pr-12 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-white/20 focus:bg-white/10 transition-colors"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {/* Password Strength */}
              <div className="flex gap-1 mt-2">
                {[1, 2, 3].map((level) => (
                  <div
                    key={level}
                    className={`h-1 flex-1 rounded-full transition-colors ${
                      passwordStrength >= level
                        ? passwordStrength === 1 ? "bg-red-500" : passwordStrength === 2 ? "bg-yellow-500" : "bg-emerald-500"
                        : "bg-white/10"
                    }`}
                  />
                ))}
              </div>
              <p className="text-[10px] text-neutral-500 mt-1">Use 10+ characters with a mix of letters, numbers & symbols</p>
            </div>

            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="terms"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="w-4 h-4 mt-0.5 rounded border-white/10 bg-white/5 text-indigo-500 focus:ring-indigo-500 focus:ring-offset-0"
                required
              />
              <label htmlFor="terms" className="text-xs text-neutral-400">
                I agree to the{" "}
                <Link href="/terms" className="text-white hover:text-indigo-400 transition-colors">Terms of Service</Link>
                {" "}and{" "}
                <Link href="/privacy" className="text-white hover:text-indigo-400 transition-colors">Privacy Policy</Link>
              </label>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white text-black text-sm font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors"
            >
              Create Account
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Footer */}
          <p className="mt-8 text-center text-sm text-neutral-500">
            Already have an account?{" "}
            <Link href="/login" className="text-white hover:text-indigo-400 transition-colors font-medium">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
