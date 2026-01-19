"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import {
  Sparkles, ArrowLeft, Calculator, DollarSign, Percent, Calendar,
  TrendingDown, Info, ArrowRight, Home, PiggyBank, CreditCard,
} from "lucide-react"

export default function MortgageCalculatorPage() {
  const [propertyPrice, setPropertyPrice] = useState(800000)
  const [deposit, setDeposit] = useState(160000)
  const [interestRate, setInterestRate] = useState(6.5)
  const [loanTerm, setLoanTerm] = useState(30)
  const [repaymentType, setRepaymentType] = useState<"pi" | "io">("pi")

  const calculations = useMemo(() => {
    const loanAmount = propertyPrice - deposit
    const monthlyRate = interestRate / 100 / 12
    const totalPayments = loanTerm * 12

    let monthlyPayment: number
    let totalInterest: number
    let totalPayment: number

    if (repaymentType === "pi") {
      // Principal & Interest
      monthlyPayment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) /
                       (Math.pow(1 + monthlyRate, totalPayments) - 1)
      totalPayment = monthlyPayment * totalPayments
      totalInterest = totalPayment - loanAmount
    } else {
      // Interest Only
      monthlyPayment = loanAmount * monthlyRate
      totalInterest = monthlyPayment * totalPayments
      totalPayment = loanAmount + totalInterest
    }

    const lvr = (loanAmount / propertyPrice) * 100
    const depositPercent = (deposit / propertyPrice) * 100

    // Stamp duty estimate (NSW rates simplified)
    let stampDuty = 0
    if (propertyPrice <= 14000) {
      stampDuty = propertyPrice * 0.0125
    } else if (propertyPrice <= 32000) {
      stampDuty = 175 + (propertyPrice - 14000) * 0.015
    } else if (propertyPrice <= 85000) {
      stampDuty = 445 + (propertyPrice - 32000) * 0.0175
    } else if (propertyPrice <= 319000) {
      stampDuty = 1372.5 + (propertyPrice - 85000) * 0.035
    } else if (propertyPrice <= 1064000) {
      stampDuty = 9562.5 + (propertyPrice - 319000) * 0.045
    } else {
      stampDuty = 43087.5 + (propertyPrice - 1064000) * 0.055
    }

    return {
      loanAmount,
      monthlyPayment,
      fortnightlyPayment: monthlyPayment / 2,
      weeklyPayment: monthlyPayment / 4,
      totalInterest,
      totalPayment,
      lvr,
      depositPercent,
      stampDuty,
      lmi: lvr > 80 ? loanAmount * 0.02 : 0, // Simplified LMI estimate
    }
  }, [propertyPrice, deposit, interestRate, loanTerm, repaymentType])

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-AU", { style: "currency", currency: "AUD", maximumFractionDigits: 0 }).format(value)
  }

  return (
    <div className="landing-page min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 backdrop-blur-xl border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="p-2 rounded-lg hover:bg-white/5 text-neutral-400 hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <Link href="/landing" className="inline-flex items-center gap-2">
              <div className="h-6 w-6 rounded-md bg-white/10 border border-white/10 flex items-center justify-center">
                <Sparkles className="h-3.5 w-3.5 text-white/80" />
              </div>
              <span className="text-base font-semibold tracking-tight">HAUS</span>
            </Link>
          </div>
          <Link href="/agents" className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1">
            Speak to a Broker <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </nav>

      <main className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Calculator className="w-6 h-6 text-indigo-400" />
            <h1 className="text-3xl font-display font-medium tracking-tight text-white">Mortgage Calculator</h1>
          </div>
          <p className="text-neutral-400">Estimate your monthly repayments and total loan costs.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Calculator Inputs */}
          <div className="lg:col-span-2 space-y-6">
            {/* Property Price */}
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <div className="flex items-center justify-between mb-4">
                <label className="text-sm font-medium text-white flex items-center gap-2">
                  <Home className="w-4 h-4 text-neutral-400" />
                  Property Price
                </label>
                <span className="text-lg font-medium text-white">{formatCurrency(propertyPrice)}</span>
              </div>
              <input
                type="range"
                min="100000"
                max="5000000"
                step="10000"
                value={propertyPrice}
                onChange={(e) => setPropertyPrice(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-indigo-500"
              />
              <div className="flex justify-between mt-2 text-xs text-neutral-500">
                <span>$100K</span>
                <span>$5M</span>
              </div>
            </div>

            {/* Deposit */}
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <div className="flex items-center justify-between mb-4">
                <label className="text-sm font-medium text-white flex items-center gap-2">
                  <PiggyBank className="w-4 h-4 text-neutral-400" />
                  Deposit
                </label>
                <div className="text-right">
                  <span className="text-lg font-medium text-white">{formatCurrency(deposit)}</span>
                  <span className="text-xs text-neutral-500 ml-2">({calculations.depositPercent.toFixed(0)}%)</span>
                </div>
              </div>
              <input
                type="range"
                min="0"
                max={propertyPrice * 0.5}
                step="5000"
                value={deposit}
                onChange={(e) => setDeposit(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-indigo-500"
              />
              <div className="flex justify-between mt-2 text-xs text-neutral-500">
                <span>$0</span>
                <span>50%</span>
              </div>
              {calculations.lvr > 80 && (
                <div className="mt-3 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-start gap-2">
                  <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-amber-200">LVR above 80% may require Lender&apos;s Mortgage Insurance (LMI)</p>
                </div>
              )}
            </div>

            {/* Interest Rate & Term */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
                <div className="flex items-center justify-between mb-4">
                  <label className="text-sm font-medium text-white flex items-center gap-2">
                    <Percent className="w-4 h-4 text-neutral-400" />
                    Interest Rate
                  </label>
                  <span className="text-lg font-medium text-white">{interestRate.toFixed(2)}%</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="10"
                  step="0.05"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                />
                <div className="flex justify-between mt-2 text-xs text-neutral-500">
                  <span>2%</span>
                  <span>10%</span>
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
                <div className="flex items-center justify-between mb-4">
                  <label className="text-sm font-medium text-white flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-neutral-400" />
                    Loan Term
                  </label>
                  <span className="text-lg font-medium text-white">{loanTerm} years</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="30"
                  step="1"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                />
                <div className="flex justify-between mt-2 text-xs text-neutral-500">
                  <span>5 yrs</span>
                  <span>30 yrs</span>
                </div>
              </div>
            </div>

            {/* Repayment Type */}
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <label className="text-sm font-medium text-white mb-4 block">Repayment Type</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setRepaymentType("pi")}
                  className={`p-4 rounded-xl border transition-colors ${
                    repaymentType === "pi"
                      ? "border-indigo-500 bg-indigo-500/10 text-white"
                      : "border-white/10 bg-white/5 text-neutral-400 hover:bg-white/10"
                  }`}
                >
                  <div className="font-medium">Principal & Interest</div>
                  <div className="text-xs mt-1 opacity-70">Pay down principal over time</div>
                </button>
                <button
                  onClick={() => setRepaymentType("io")}
                  className={`p-4 rounded-xl border transition-colors ${
                    repaymentType === "io"
                      ? "border-indigo-500 bg-indigo-500/10 text-white"
                      : "border-white/10 bg-white/5 text-neutral-400 hover:bg-white/10"
                  }`}
                >
                  <div className="font-medium">Interest Only</div>
                  <div className="text-xs mt-1 opacity-70">Lower payments, no principal</div>
                </button>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-6">
            {/* Monthly Payment */}
            <div className="p-6 rounded-2xl border border-indigo-500/30 bg-indigo-500/10">
              <div className="text-sm text-indigo-300 mb-1">Monthly Repayment</div>
              <div className="text-4xl font-medium text-white">{formatCurrency(calculations.monthlyPayment)}</div>
              <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-white/10">
                <div>
                  <div className="text-xs text-neutral-400">Fortnightly</div>
                  <div className="text-lg font-medium text-white">{formatCurrency(calculations.fortnightlyPayment)}</div>
                </div>
                <div>
                  <div className="text-xs text-neutral-400">Weekly</div>
                  <div className="text-lg font-medium text-white">{formatCurrency(calculations.weeklyPayment)}</div>
                </div>
              </div>
            </div>

            {/* Loan Summary */}
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <h3 className="font-medium text-white mb-4">Loan Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-400">Loan Amount</span>
                  <span className="text-white font-medium">{formatCurrency(calculations.loanAmount)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-400">LVR</span>
                  <span className={`font-medium ${calculations.lvr > 80 ? "text-amber-400" : "text-emerald-400"}`}>
                    {calculations.lvr.toFixed(1)}%
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-400">Total Interest</span>
                  <span className="text-white font-medium">{formatCurrency(calculations.totalInterest)}</span>
                </div>
                <div className="flex justify-between text-sm border-t border-white/10 pt-3">
                  <span className="text-neutral-400">Total Repayments</span>
                  <span className="text-white font-medium">{formatCurrency(calculations.totalPayment)}</span>
                </div>
              </div>
            </div>

            {/* Additional Costs */}
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <h3 className="font-medium text-white mb-4">Estimated Costs</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-400">Stamp Duty (NSW)</span>
                  <span className="text-white font-medium">{formatCurrency(calculations.stampDuty)}</span>
                </div>
                {calculations.lmi > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-400">LMI (Est.)</span>
                    <span className="text-amber-400 font-medium">{formatCurrency(calculations.lmi)}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-400">Legal Fees (Est.)</span>
                  <span className="text-white font-medium">$2,500</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/agents"
              className="block w-full py-4 rounded-xl bg-white text-black text-center text-sm font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors"
            >
              Get Pre-Approved
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 p-4 rounded-xl border border-white/10 bg-white/5">
          <p className="text-xs text-neutral-500 leading-relaxed">
            <strong className="text-neutral-400">Disclaimer:</strong> This calculator provides estimates only and should not be considered financial advice.
            Actual loan terms, rates, and fees may vary. Stamp duty is calculated using NSW rates and may differ in other states.
            Please consult with a qualified mortgage broker or financial advisor for accurate figures specific to your situation.
          </p>
        </div>
      </main>
    </div>
  )
}
