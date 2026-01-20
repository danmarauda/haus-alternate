"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { Sparkles, Mail, ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";
import { Suspense } from "react";
import { Shell } from "@/components/shell";
import { ErrorBoundary } from "@/components/error-boundary";
import { PageLoader } from "@/components/page-loader";


function ForgotPasswordPageContent() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  }, []);

  const handleTryAgain = useCallback(() => {
    setSubmitted(false);
  }, []);

  return (
    <div className="landing-page min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md w-full">
        {/* Logo */}
        <Link href="/landing-1" className="inline-flex items-center gap-2 mb-12" aria-label="HAUS home">
          <div className="h-8 w-8 rounded-md bg-white/10 border border-white/10 flex items-center justify-center">
            <Sparkles className="h-4 w-4 text-white/80" aria-hidden="true" />
          </div>
          <span className="text-lg font-semibold tracking-tight">HAUS</span>
        </Link>

        {!submitted ? (
          <>
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-display font-medium tracking-tight text-white mb-2">Reset your password</h1>
              <p className="text-neutral-400 text-sm">Enter your email address and we'll send you a link to reset your password.</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="resetEmail" className="block text-xs font-medium text-neutral-400 mb-2">Email address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" aria-hidden="true" />
                  <input
                    id="resetEmail"
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

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white text-black text-sm font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors"
              >
                Send Reset Link
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </form>
          </>
        ) : (
          <>
            {/* Success State */}
            <div className="text-center" role="status" aria-live="polite">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mx-auto mb-6" aria-hidden="true">
                <CheckCircle className="w-8 h-8 text-emerald-400" />
              </div>
              <h1 className="text-3xl font-display font-medium tracking-tight text-white mb-2">Check your email</h1>
              <p className="text-neutral-400 text-sm mb-8">
                We've sent a password reset link to<br />
                <span className="text-white font-medium">{email}</span>
              </p>
              <p className="text-xs text-neutral-500 mb-6">
                Didn't receive the email? Check your spam folder or{" "}
                <button
                  onClick={handleTryAgain}
                  className="text-indigo-400 hover:text-indigo-300 transition-colors underline"
                  type="button"
                >
                  try again
                </button>
              </p>
            </div>
          </>
        )}

        {/* Back to Login */}
        <Link
          href="/auth/login"
          className="mt-8 flex items-center justify-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          Back to sign in
        </Link>
      </div>
    </div>
  );
}

export default function ForgotPasswordPage() {
  return (
    <ErrorBoundary>
      <Shell variant="minimal">
        <Suspense fallback={<PageLoader text="Loading..." />}>
          <ForgotPasswordPageContent />
        </Suspense>
      </Shell>
    </ErrorBoundary>
  );
}
