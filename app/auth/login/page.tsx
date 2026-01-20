"use client";

import { useState, FormEvent, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, Mail, Lock, Eye, EyeOff, ArrowRight, Chrome } from "lucide-react";
import { Suspense } from "react";
import { Shell } from "@/components/shell";
import { ErrorBoundary } from "@/components/error-boundary";
import { PageLoader } from "@/components/page-loader";


function LoginPageContent() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle login logic
    console.log("Login:", { email, password });
  }, [email, password]);

  return (
    <div className="landing-page min-h-screen flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24">
        <div className="max-w-md w-full mx-auto">
          {/* Logo */}
          <Link href="/landing" className="inline-flex items-center gap-2 mb-12" aria-label="HAUS home">
            <div className="h-8 w-8 rounded-md bg-white/10 border border-white/10 flex items-center justify-center">
              <Sparkles className="h-4 w-4 text-white/80" />
            </div>
            <span className="text-lg font-semibold tracking-tight">HAUS</span>
          </Link>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-display font-medium tracking-tight text-white mb-2">Welcome back</h1>
            <p className="text-neutral-400 text-sm">Sign in to access your properties, saved searches, and more.</p>
          </div>

          {/* Social Login */}
          <div className="space-y-3 mb-8">
            <button className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-sm font-medium text-white" type="button">
              <Chrome className="w-5 h-5" aria-hidden="true" />
              Continue with Google
            </button>
            <button className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-sm font-medium text-white" type="button">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
              Continue with GitHub
            </button>
          </div>

          {/* Divider */}
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-4 bg-[#050505] text-neutral-500">or continue with email</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-xs font-medium text-neutral-400 mb-2">Email address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" aria-hidden="true" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-white/20 focus:bg-white/10 transition-colors"
                  required
                  autoComplete="email"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="password" className="text-xs font-medium text-neutral-400">Password</label>
                <Link href="/forgot-password" className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors">Forgot password?</Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" aria-hidden="true" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full pl-11 pr-12 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-white/20 focus:bg-white/10 transition-colors"
                  required
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" id="remember" className="w-4 h-4 rounded border-white/10 bg-white/5 text-indigo-500 focus:ring-indigo-500 focus:ring-offset-0" />
              <label htmlFor="remember" className="text-xs text-neutral-400">Remember me for 30 days</label>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white text-black text-sm font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors"
            >
              Sign In
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Footer */}
          <p className="mt-8 text-center text-sm text-neutral-500">
            Don't have an account?{" "}
            <Link href="/register" className="text-white hover:text-indigo-400 transition-colors font-medium">Create one</Link>
          </p>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden lg:block lg:flex-1 relative" aria-hidden="true">
        <Image
          src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1600&auto=format&fit=crop"
          alt="Luxury Home"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/50 to-transparent" />
        <div className="absolute bottom-12 left-12 right-12">
          <blockquote className="text-lg text-white font-medium mb-4">
            "HAUS transformed how I search for properties. The AI recommendations are incredibly accurate."
          </blockquote>
          <div className="flex items-center gap-3">
            <Image
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100"
              alt="Sarah Chen"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
            <div>
              <div className="text-sm font-medium text-white">Sarah Chen</div>
              <div className="text-xs text-neutral-400">Property Investor</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <ErrorBoundary>
      <Shell variant="minimal">
        <Suspense fallback={<PageLoader text="Loading sign in..." />}>
          <LoginPageContent />
        </Suspense>
      </Shell>
    </ErrorBoundary>
  );
}
