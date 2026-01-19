"use client"

import { useState } from "react"
import {
  ShieldCheck,
  ArrowRight,
  ChevronLeft,
  Minus,
  Plus,
  TrendingUp,
  TrendingDown,
  Signal,
  Wifi,
  Battery,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

type CryptoAsset = {
  name: string
  symbol: string
  amount: string
  value: string
  change: string
  isPositive: boolean
}

type Transaction = {
  id: number
  title: string
  time: string
  amount: string
  value: string
  isReceived: boolean
}

export default function CryptoLoansMobilePage() {
  const [collateralAmount, setCollateralAmount] = useState("0.00503")
  const [loanAmount, setLoanAmount] = useState("390.16")
  const [selectedTerm, setSelectedTerm] = useState("flexible")
  const [currentScreen, setCurrentScreen] = useState<"marketing" | "dashboard" | "loan">("dashboard")

  const cryptoAssets: CryptoAsset[] = [
    { name: "Bitcoin", symbol: "0.724 BTC", amount: "0.724 BTC", value: "$31,425.68", change: "+3.2%", isPositive: true },
    { name: "Ethereum", symbol: "4.12 ETH", amount: "4.12 ETH", value: "$11,730.24", change: "-0.8%", isPositive: false },
    { name: "Cardano", symbol: "1,250 ADA", amount: "1,250 ADA", value: "$5,171.93", change: "+7.4%", isPositive: true },
    { name: "Solana", symbol: "45.6 SOL", amount: "45.6 SOL", value: "$3,420.15", change: "+5.1%", isPositive: true },
    { name: "Polygon", symbol: "2,850 MATIC", amount: "2,850 MATIC", value: "$2,562.30", change: "-2.1%", isPositive: false },
    { name: "Chainlink", symbol: "125 LINK", amount: "125 LINK", value: "$1,875.00", change: "+1.8%", isPositive: true },
  ]

  const transactions: Transaction[] = [
    { id: 1, title: "Received Bitcoin", time: "Today, 2:15 PM", amount: "+0.125 BTC", value: "$5,486.56", isReceived: true },
    { id: 2, title: "Sent Ethereum", time: "Yesterday, 6:30 PM", amount: "-0.5 ETH", value: "$1,425.00", isReceived: false },
  ]

  const loanTerms = [
    { id: "3-month", label: "3 Month" },
    { id: "6-month", label: "6 Month" },
    { id: "1-year", label: "1 Year" },
    { id: "flexible", label: "Flexible" },
  ]

  const quickActions = [
    { id: "deposit", label: "Deposit", icon: "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/09777092-f1ef-4125-b9d9-7334561f0379_1600w.png" },
    { id: "send", label: "Send", icon: "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d15064d6-5ed3-4b61-977f-0bf125954978_1600w.png" },
    { id: "swap", label: "Swap", icon: "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b63092f2-716b-48d3-8e40-3479df40b1b1_1600w.png" },
    { id: "loan", label: "Loan", icon: "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/159f488c-535e-4947-86b7-9f96c1686706_320w.png" },
  ]

  const StatusBar = () => (
    <div className="flex items-center justify-between text-[13px] font-medium tracking-tight text-white px-4 pt-2.5 h-12">
      <span>9:41</span>
      <div className="flex items-center gap-1.5 opacity-90">
        <Signal className="size-4" strokeWidth={1.5} />
        <Wifi className="size-4" strokeWidth={1.5} />
        <Battery className="size-5" strokeWidth={1.5} />
      </div>
    </div>
  )

  const HomeIndicator = () => (
    <div className="h-8 flex items-end justify-center pb-2">
      <div className="w-[134px] h-[5px] rounded-full bg-white/80" />
    </div>
  )

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 antialiased flex items-center justify-center p-8">
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-75 hue-rotate-180"
          style={{
            backgroundImage: "url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6b18c9b8-d29b-416a-9c49-ea59f1d4b3b9_3840w.jpg)",
          }}
        />
      </div>

      <main className="flex items-center justify-center gap-8">
        {/* Screen 1: Marketing */}
        <Card className="overflow-hidden rounded-[2rem] shadow-2xl border border-white/10 bg-neutral-900 w-[393px] h-[852px] relative">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80"
              alt="3D coins"
              className="h-full w-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/70" />
          </div>

          <div className="relative z-10 flex flex-col h-full pt-[56px] px-6 pb-[34px] justify-between">
            <StatusBar />
            <div className="space-y-4 mt-4">
              <h1 className="text-4xl font-semibold tracking-tight leading-tight">
                Secure Crypto Lending
              </h1>
              <p className="text-sm text-neutral-300">
                Unlock instant liquidity with your digital assets. No credit checks, no lengthy approvals.
              </p>
            </div>

            <div className="space-y-4">
              <Button className="inline-flex items-center gap-2 hover:bg-neutral-100 transition text-sm font-medium text-neutral-900 bg-white w-full rounded-xl py-3.5 px-4">
                Get Started
                <ArrowRight className="size-4" strokeWidth={1.5} />
              </Button>

              <div className="rounded-xl bg-neutral-900/60 ring-1 ring-white/10 p-3 flex items-center gap-3">
                <ShieldCheck className="size-4 text-emerald-400" strokeWidth={1.5} />
                <p className="text-xs text-neutral-300">Assets remain in secure custody while you borrow.</p>
              </div>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 z-20">
            <HomeIndicator />
          </div>
        </Card>

        {/* Screen 2: Dashboard */}
        <Card className="overflow-hidden rounded-[2rem] shadow-2xl border border-white/10 bg-neutral-900 w-[393px] h-[852px] relative">
          <StatusBar />

          <div className="flex flex-col overflow-y-auto h-full pt-[56px] px-5 pb-[34px]">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-sm text-neutral-500 font-medium tracking-tight">Good morning</h2>
                <h2 className="text-xl font-medium tracking-tight">Frederick Desjardin</h2>
              </div>
              <img
                src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/48bfa4c0-f6a0-4932-b61a-337e47aa04e9_320w.jpg"
                alt="avatar"
                className="size-12 ring-1 ring-white/10 object-cover rounded-full"
              />
            </div>

            {/* Balance Card */}
            <CardContent className="bg-neutral-800/50 ring-1 ring-white/20 rounded-xl p-4 mt-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium tracking-tight">Balance</span>
                <div className="inline-flex gap-2 bg-neutral-900/60 ring-1 ring-white/10 rounded-lg p-1">
                  <button className="text-[11px] px-2 py-1 rounded-md bg-white/5 text-neutral-200">All</button>
                  <button className="text-[11px] px-2 py-1 rounded-md text-neutral-400 hover:text-neutral-200">Available</button>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-4xl font-semibold tracking-tight">
                  $56,356<span className="align-top text-base font-medium text-neutral-400">.25</span>
                </div>
                <div className="text-xs text-neutral-400">≈ 0.536279 BTC</div>
              </div>

              {/* Chart Placeholder */}
              <div className="relative h-36 mt-4">
                <div className="absolute left-[78%] top-[36%] -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-4 ring-emerald-400/20" />
                <div className="absolute left-[78%] top-[36%] -translate-x-1/2 -translate-y-full -mt-3 bg-neutral-900/90 backdrop-blur-sm px-3 py-2 rounded-lg text-xs text-neutral-200 ring-1 ring-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>$23,457,543</span>
                  </div>
                  <div className="text-[10px] text-neutral-400 text-center mt-1">May 2024</div>
                </div>
                <div className="absolute left-[78%] top-0 bottom-0 border-l border-dashed border-white/10" />
                <div className="absolute top-[36%] left-0 right-0 border-t border-dashed border-white/10" />
              </div>

              <div className="grid grid-cols-6 text-[13px] text-neutral-400 mt-3">
                {["Jan", "Feb", "Mar", "April", "May", "Jun"].map((month, i) => (
                  <div key={month} className={`text-left ${i === 4 ? "text-neutral-100 font-medium" : ""}`}>
                    {month}
                  </div>
                ))}
              </div>
            </CardContent>

            {/* Quick Actions */}
            <div className="grid grid-cols-4 gap-x-4 gap-y-4 mt-4">
              {quickActions.map((action) => (
                <button
                  key={action.id}
                  className="flex flex-col hover:bg-neutral-900 transition bg-neutral-900/60 w-full aspect-square bg-cover ring-1 ring-white/20 rounded-lg p-3 items-center justify-center relative overflow-hidden group"
                  style={{ backgroundImage: `url(${action.icon})` }}
                >
                  <span className="text-[11px] text-neutral-300 mt-auto relative z-10">{action.label}</span>
                </button>
              ))}
            </div>

            {/* Your Assets */}
            <div className="flex items-center justify-between mt-4 mb-4">
              <h3 className="text-lg font-semibold">Your Assets</h3>
              <button className="text-gray-400 text-sm font-medium">View All</button>
            </div>

            <div className="space-y-3 mb-8">
              {cryptoAssets.map((asset) => (
                <CardContent
                  key={asset.name}
                  className="flex bg-gray-900/30 ring-1 ring-white/20 rounded-xl p-4 items-center gap-4 backdrop-blur-sm border-0"
                >
                  <div className="flex-1">
                    <p className="font-medium">{asset.name}</p>
                    <p className="text-sm text-gray-400">{asset.symbol}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{asset.value}</p>
                    <div className="flex items-center gap-1 justify-end">
                      {asset.isPositive ? (
                        <TrendingUp className="w-3 h-3 text-green-400" strokeWidth={1.5} />
                      ) : (
                        <TrendingDown className="w-3 h-3 text-red-400" strokeWidth={1.5} />
                      )}
                      <span className={`text-sm ${asset.isPositive ? "text-green-400" : "text-red-400"}`}>
                        {asset.change}
                      </span>
                    </div>
                  </div>
                </CardContent>
              ))}

              {/* Transactions */}
              {transactions.map((tx) => (
                <CardContent
                  key={tx.id}
                  className="flex bg-gray-900/30 ring-1 ring-white/20 rounded-xl p-4 items-center gap-4 backdrop-blur-sm border-0"
                >
                  <div className="flex-1">
                    <p className="font-medium">{tx.title}</p>
                    <p className="text-sm text-gray-400">{tx.time}</p>
                  </div>
                  <div className="text-right">
                    <p className={`font-medium ${tx.isReceived ? "text-green-400" : "text-red-400"}`}>
                      {tx.amount}
                    </p>
                    <p className="text-sm text-gray-400">{tx.value}</p>
                  </div>
                </CardContent>
              ))}
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 z-20">
            <HomeIndicator />
          </div>
        </Card>

        {/* Screen 3: New Loan */}
        <Card className="overflow-hidden rounded-[2rem] shadow-2xl border border-white/10 bg-neutral-900 w-[393px] h-[852px] relative">
          <div className="absolute inset-x-0 top-0 z-20">
            <StatusBar />
          </div>

          <div className="flex flex-col h-full px-5 pt-[56px] pb-[34px] overflow-y-auto">
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-lg p-2 ring-1 ring-white/10 bg-neutral-900/60 hover:bg-neutral-800 transition h-10 w-10"
              >
                <ChevronLeft className="size-4 text-neutral-300" strokeWidth={1.5} />
              </Button>
              <h2 className="text-xl font-medium tracking-tight">New Loan</h2>
            </div>

            {/* Collateral */}
            <div className="ring-1 ring-white/20 bg-neutral-800/50 rounded-xl mt-4 p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium tracking-tight">Collateral amount</span>
                <span className="text-[11px] text-neutral-400">Available: 0.05372 BTC</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="size-9 rounded-full bg-[#F7931A]/15 ring-1 ring-[#F7931A]/20 grid place-items-center">
                  <span className="text-[10px] font-medium text-[#F7931A]">BTC</span>
                </div>
                <div className="flex-1 text-3xl font-semibold tracking-tight tabular-nums">
                  {collateralAmount}
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-lg p-2 ring-1 ring-white/10 bg-neutral-900/60 hover:bg-neutral-800 transition h-9 w-9"
                  >
                    <Minus className="size-4" strokeWidth={1.5} />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-lg p-2 ring-1 ring-white/10 bg-neutral-900/60 hover:bg-neutral-800 transition h-9 w-9"
                  >
                    <Plus className="size-4" strokeWidth={1.5} />
                  </Button>
                </div>
              </div>
            </div>

            {/* Loan amount */}
            <div className="mt-3 rounded-xl bg-neutral-800/50 ring-1 ring-white/20 p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium tracking-tight">Loan amount</span>
                <span className="text-[11px] text-neutral-400">Max Borrow: 9999 USDT</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="size-9 rounded-full bg-emerald-500/15 ring-1 ring-emerald-500/20 grid place-items-center">
                  <span className="text-[10px] font-medium text-emerald-400">USDT</span>
                </div>
                <div className="flex-1 text-3xl font-semibold tracking-tight tabular-nums">
                  {loanAmount}
                </div>
              </div>
            </div>

            {/* Terms */}
            <div className="bg-neutral-800/50 ring-1 ring-white/20 rounded-xl mt-3 p-4">
              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <span className="text-sm font-medium tracking-tight">Term</span>
              </div>
              <div className="mt-2 grid grid-cols-4 gap-2">
                {loanTerms.map((term) => (
                  <Button
                    key={term.id}
                    onClick={() => setSelectedTerm(term.id)}
                    className={`rounded-lg px-3 py-2 text-xs ring-1 ring-white/10 hover:bg-neutral-900 transition ${
                      selectedTerm === term.id
                        ? "bg-white text-neutral-900 font-medium"
                        : "bg-neutral-900/60 text-neutral-300"
                    }`}
                  >
                    {term.label}
                  </Button>
                ))}
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-neutral-400">APY</span>
                  <span className="font-medium">18%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-neutral-400">Liquidation BTC price</span>
                  <span className="tabular-nums font-medium">$79,980.16</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-neutral-400">Issue fee</span>
                  <span className="tabular-nums font-medium">0 USDT</span>
                </div>

                <div>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-neutral-400">LTV</span>
                    <span className="tabular-nums text-emerald-400 font-medium">74%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-neutral-800 ring-1 ring-white/5 overflow-hidden">
                    <div className="h-full w-[74%] bg-gradient-to-r from-emerald-500 to-emerald-400" />
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-neutral-400">Loan availability</span>
                  <span className="tabular-nums font-medium">389.8805857654</span>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-xl bg-neutral-900/70 ring-1 ring-white/20 p-4">
              <p className="text-[11px] text-neutral-400">
                By clicking Get loan, I expressly agree to the{" "}
                <a href="#" className="text-neutral-200 underline underline-offset-2">
                  Terms of Service
                </a>
                .
              </p>
            </div>

            <div className="mt-auto pt-3">
              <Button className="inline-flex items-center gap-2 hover:bg-neutral-100 transition text-sm font-medium text-neutral-900 bg-white w-full rounded-xl py-3.5 px-4">
                Get loan
                <ArrowRight className="size-4" strokeWidth={1.5} />
              </Button>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 z-20">
            <HomeIndicator />
          </div>
        </Card>
      </main>
    </div>
  )
}
