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

type LoanTerm = {
  id: string
  label: string
}

type QuickAction = {
  id: string
  label: string
  icon: string
}

export default function CryptoLoansPage() {
  const [collateralAmount] = useState("0.00503")
  const [loanAmount] = useState("390.16")
  const [selectedTerm, setSelectedTerm] = useState("flexible")

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

  const loanTerms: LoanTerm[] = [
    { id: "3-month", label: "3 Month" },
    { id: "6-month", label: "6 Month" },
    { id: "1-year", label: "1 Year" },
    { id: "flexible", label: "Flexible" },
  ]

  const quickActions: QuickAction[] = [
    { id: "deposit", label: "Deposit", icon: "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/09777092-f1ef-4125-b9d9-7334561f0379_1600w.png" },
    { id: "send", label: "Send", icon: "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d15064d6-5ed3-4b61-977f-0bf125954978_1600w.png" },
    { id: "swap", label: "Swap", icon: "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b63092f2-716b-48d3-8e40-3479df40b1b1_1600w.png" },
    { id: "loan", label: "Loan", icon: "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/159f488c-535e-4947-86b7-9f96c1686706_320w.png" },
  ]

  const StatusBar = () => (
    <div className="absolute inset-x-0 top-0 z-20">
      <div className="h-12 px-4 pt-2.5 flex items-center justify-between text-[13px]">
        <div className="font-medium tracking-tight">9:41</div>
        <div className="flex items-center gap-1.5">
          <Signal className="size-4 opacity-90" strokeWidth={1.5} />
          <Wifi className="size-4 opacity-90" strokeWidth={1.5} />
          <Battery className="size-5 opacity-90" strokeWidth={1.5} />
        </div>
      </div>
    </div>
  )

  const HomeIndicator = () => (
    <div className="absolute inset-x-0 bottom-0 z-20">
      <div className="h-8 flex items-end justify-center pb-2">
        <div className="w-[134px] h-[5px] rounded-full bg-white/80" />
      </div>
    </div>
  )

  return (
    <div className="antialiased flex items-center justify-center text-neutral-100 bg-neutral-950 min-h-screen">
      {/* Background Image */}
      <div
        className="fixed top-0 w-full -z-10 h-screen bg-cover bg-center brightness-75 hue-rotate-180"
        style={{
          backgroundImage: "url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6b18c9b8-d29b-416a-9c49-ea59f1d4b3b9_3840w.jpg)",
        }}
      />

      <main className="flex items-center justify-center min-h-screen p-8">
        <div className="flex items-center justify-center gap-8">
          {/* Screen 1: Marketing */}
          <div
            className="overflow-hidden bg-neutral-900 bg-cover border-white/10 border rounded-[2rem] relative shadow-2xl w-[393px] h-[852px]"
            style={{
              backgroundImage: "url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a41b5399-c391-4a89-983e-b808071668e1_800w.jpg)",
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                alt="3D coins"
                className="h-full w-full object-cover opacity-60"
                src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80"
              />
              <div className="bg-gradient-to-b from-black/10 via-black/30 to-black/70 absolute top-0 right-0 bottom-0 left-0" />
            </div>

            <StatusBar />

            <div className="flex flex-col h-full pt-[56px] pr-6 pb-[34px] pl-6 relative justify-between">
              <div className="space-y-4">
                <h1 className="md:text-5xl leading-tight text-4xl font-semibold tracking-tight">
                  Secure Crypto Lending
                </h1>
                <p className="text-sm text-neutral-300">
                  Unlock instant liquidity with your digital assets. No credit checks, no lengthy approvals.
                </p>
              </div>

              <div className="space-y-4">
                <button className="inline-flex gap-2 hover:bg-neutral-100 transition text-sm font-medium text-neutral-900 bg-white w-full rounded-xl pt-3.5 pr-4 pb-3.5 pl-4 items-center justify-center">
                  Get Started
                  <ArrowRight className="size-4" strokeWidth={1.5} />
                </button>

                <div className="rounded-xl bg-neutral-900/60 ring-1 ring-white/10 p-3 flex items-center gap-3">
                  <ShieldCheck className="size-4 text-emerald-400" strokeWidth={1.5} />
                  <p className="text-xs text-neutral-300">Assets remain in secure custody while you borrow.</p>
                </div>
              </div>
            </div>

            <HomeIndicator />
          </div>

          {/* Screen 2: Dashboard */}
          <div className="overflow-hidden xl:bg-gray-950 bg-neutral-900 border-white/10 border rounded-[2rem] relative shadow-2xl w-[393px] h-[852px]">
            <StatusBar />

            <div className="flex flex-col overflow-y-auto h-full pt-[56px] pr-5 pb-[34px] pl-5">
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-y-1">
                  <h2 className="text-sm xl:text-neutral-500 font-medium tracking-tight">Good morning</h2>
                  <h2 className="text-xl font-medium tracking-tight">Frederick Desjardin</h2>
                </div>
                <img
                  alt="avatar"
                  className="size-12 ring-1 ring-white/10 object-cover rounded-full"
                  src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/48bfa4c0-f6a0-4932-b61a-337e47aa04e9_320w.jpg"
                />
              </div>

              {/* Balance Card */}
              <div className="xl:bg-neutral-800/50 ring-white/20 ring-1 bg-neutral-800/50 rounded-xl mt-4 pt-4 pr-4 pb-4 pl-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium tracking-tight">Balance</span>
                  <div className="inline-flex gap-2 bg-neutral-900/60 ring-white/10 ring-1 rounded-lg pt-1 pr-2 pb-1 pl-2 items-center">
                    <button className="text-[11px] px-2 py-1 rounded-md bg-white/5 text-neutral-200">All</button>
                    <button className="text-[11px] px-2 py-1 rounded-md text-neutral-400 hover:text-neutral-200">Available</button>
                  </div>
                </div>

                <div className="mt-2 space-y-2">
                  <div className="text-4xl font-semibold tracking-tight">
                    $56,356<span className="align-top text-base font-medium text-neutral-400">.25</span>
                  </div>
                  <div className="text-xs text-neutral-400">= 0.536279 BTC</div>
                </div>

                {/* Chart Area */}
                <div className="mt-4">
                  <div className="relative">
                    <div className="overflow-hidden h-36">
                      {/* SVG Chart Placeholder */}
                      <svg
                        width="386"
                        height="144"
                        viewBox="0 0 386 144"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[386px] h-[144px] -translate-x-2"
                        strokeWidth="2"
                        style={{ width: "386px", height: "144px", color: "rgb(245, 245, 245)" }}
                      >
                        <path
                          d="M382.363 69.7469C382.363 71.2197 381.17 72.4136 379.697 72.4136C378.224 72.4136 377.03 71.2197 377.03 69.7469C377.03 68.2742 378.224 67.0803 379.697 67.0803C381.17 67.0803 382.363 68.2742 382.363 69.7469ZM379.697 70.2469C373.079 70.2469 367.648 67.1884 362.972 62.6715C358.305 58.1623 354.353 52.1652 350.685 46.2171C347.002 40.245 343.615 34.34 340.045 29.9112C336.468 25.4733 332.818 22.6623 328.656 22.6623V21.6623C333.3 21.6623 337.209 24.7995 340.824 29.2836C344.446 33.7769 347.883 39.7682 351.536 45.6922C355.204 51.6402 359.099 57.5393 363.667 61.9522C368.227 66.3574 373.422 69.2469 379.697 69.2469V70.2469ZM328.656 22.6623C324.503 22.6623 320.899 25.5384 317.419 30.0879C313.947 34.6258 310.708 40.6798 307.237 46.7988C303.779 52.8935 300.098 59.04 295.768 63.6619C291.431 68.29 286.395 71.4418 280.23 71.4418V70.4418C286.014 70.4418 290.805 67.4962 295.038 62.9782C299.276 58.4539 302.906 52.4056 306.367 46.3054C309.814 40.2295 313.099 34.0887 316.624 29.4803C320.141 24.8837 324.005 21.6623 328.656 21.6623V22.6623ZM280.23 71.4418C272.155 71.4418 265.777 66.9276 260.5 60.2849C255.227 53.6474 250.999 44.8186 247.225 36.0419C243.438 27.2359 240.115 18.5062 236.63 11.9496C234.889 8.67499 233.127 5.98311 231.277 4.11502C229.429 2.24957 227.534 1.24694 225.515 1.24695V0.246948C227.898 0.246943 230.032 1.4379 231.987 3.41123C233.939 5.38192 235.755 8.174 237.513 11.4802C241.024 18.0851 244.383 26.9041 248.143 35.6468C251.916 44.4189 256.1 53.1388 261.283 59.6629C266.461 66.1817 272.582 70.4418 280.23 70.4418V71.4418ZM225.515 1.24695C221.434 1.24696 218.844 4.25078 216.554 9.13859C215.415 11.568 214.376 14.4089 213.272 17.4796C212.17 20.543 211.006 23.8286 209.624 27.1151C206.861 33.6872 203.207 40.3147 197.361 45.2967C191.503 50.2895 183.484 53.5957 172.057 53.5957V52.5957C183.272 52.5957 191.054 49.3582 196.713 44.5356C202.384 39.7023 205.963 33.2426 208.702 26.7275C210.072 23.4705 211.227 20.2124 212.331 17.1412C213.433 14.0773 214.487 11.1926 215.648 8.71431C217.957 3.78674 220.791 0.246958 225.515 0.246948V1.24695ZM172.057 53.5957C166.573 53.5957 162.971 56.0925 160.251 59.8931C157.505 63.7289 155.683 68.8598 153.792 74.0862C151.916 79.2754 149.973 84.5563 146.976 88.5313C143.954 92.54 139.849 95.2367 133.694 95.2367V94.2367C139.488 94.2367 143.314 91.7282 146.178 87.9293C149.067 84.0966 150.964 78.9672 152.852 73.7461C154.727 68.5624 156.595 63.283 159.437 59.3111C162.305 55.304 166.188 52.5957 172.057 52.5957V53.5957ZM133.694 95.2367C122.032 95.2367 114.043 88.7149 106.692 82.3243C99.2887 75.8881 92.5892 69.6572 83.3808 69.6572V68.6572C93.0397 68.6572 100.04 75.216 107.348 81.5696C114.708 87.9687 122.442 94.2367 133.694 94.2367V95.2367ZM83.3808 69.6572C78.8472 69.6572 73.5005 72.5317 67.9715 76.9826C62.4647 81.4156 56.8673 87.3372 51.8453 93.275C46.8256 99.21 42.3925 105.147 39.2137 109.601C37.6245 111.828 36.3495 113.684 35.472 114.982C35.0333 115.631 34.694 116.141 34.4646 116.488C34.3499 116.662 34.2626 116.795 34.2042 116.884C34.175 116.929 34.1529 116.963 34.1382 116.985C34.1309 116.996 34.1254 117.005 34.1218 117.011C34.1199 117.013 34.1186 117.015 34.1177 117.017C34.1172 117.017 34.1169 117.018 34.1167 117.018C34.1165 117.019 34.1164 117.019 33.6967 116.747C33.277 116.475 33.2772 116.475 33.2775 116.475C33.2777 116.474 33.2781 116.474 33.2786 116.473C33.2796 116.471 33.281 116.469 33.283 116.466C33.2868 116.46 33.2925 116.451 33.3 116.44C33.3152 116.417 33.3376 116.382 33.3672 116.337C33.4265 116.246 33.5146 116.112 33.6303 115.937C33.8615 115.587 34.2027 115.074 34.6435 114.422C35.525 113.118 36.8049 111.255 38.3997 109.021C41.5886 104.552 46.0388 98.5916 51.0818 92.6292C56.1223 86.6695 61.7667 80.6937 67.3445 76.2036C72.9 71.7314 78.4807 68.6572 83.3808 68.6572V69.6572Z"
                          fill="#4089F1"
                        />
                      </svg>
                    </div>

                    <div className="pointer-events-none absolute top-0 right-0 bottom-0 left-0">
                      <div
                        className="absolute"
                        style={{
                          left: "78%",
                          top: "36%",
                          width: "180px",
                          height: "180px",
                          transform: "translate(-50%,-50%)",
                          background: "radial-gradient(closest-side, rgba(52,211,153,0.28), rgba(52,211,153,0.10), rgba(52,211,153,0.02) 70%, transparent 72%)",
                          filter: "blur(6px)",
                        }}
                      />
                      <div className="absolute left-[78%] top-0 bottom-0 border-l border-dashed border-white/10" />
                      <div className="absolute top-[36%] left-0 right-0 border-t border-dashed border-white/10" />
                      <div className="absolute left-[78%] top-[36%] -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-4 ring-emerald-400/20" />

                      {/* Tooltip */}
                      <div className="absolute left-[78%] top-[36%] -translate-x-1/2 -translate-y-full -mt-3 bg-neutral-900/90 backdrop-blur-sm px-3 py-2 rounded-lg text-xs text-neutral-200 ring-1 ring-white/10">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-emerald-400" />
                          <span>$23,457,543</span>
                        </div>
                        <div className="text-[10px] text-neutral-400 text-center mt-1">May 2024</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-6 text-[13px] text-neutral-400 mt-3">
                  <div className="text-left">Jan</div>
                  <div className="text-left">Feb</div>
                  <div className="text-left">Mar</div>
                  <div className="text-left">April</div>
                  <div className="text-left text-neutral-100 font-medium">May</div>
                  <div className="text-left">Jun</div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-4 mt-4 gap-4">
                {quickActions.map((action) => (
                  <button
                    key={action.id}
                    className="flex flex-col hover:bg-neutral-900 transition xl:bg-neutral-800/50 bg-neutral-900/60 w-30 h-30 bg-cover ring-white/20 ring-1 rounded-lg pt-3 pb-3 items-center"
                    style={{ backgroundImage: `url(${action.icon})` }}
                  />
                ))}
              </div>
              <div className="grid grid-cols-4 mt-4 gap-4">
                {quickActions.map((action) => (
                  <span key={action.id} className="text-[11px] xl:text-center -translate-y-1 text-neutral-300 mt-2 -translate-y-3">
                    {action.label}
                  </span>
                ))}
              </div>

              {/* Your Assets */}
              <div className="flex xl:mt-0 mt-4 mb-4 items-center justify-between">
                <h3 className="text-lg font-semibold">Your Assets</h3>
                <button className="text-gray-400 text-sm font-medium">View All</button>
              </div>

              <div className="mb-8 space-y-3">
                {cryptoAssets.map((asset) => (
                  <div
                    key={asset.name}
                    className="flex xl:bg-neutral-800/50 bg-gray-900/30 border-0 ring-white/20 ring-1 rounded-xl pt-4 pr-4 pb-4 pl-4 backdrop-blur-sm gap-4 items-center"
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
                  </div>
                ))}

                {/* Transactions */}
                {transactions.map((tx) => (
                  <div
                    key={tx.id}
                    className="flex xl:bg-neutral-800/50 bg-gray-900/30 border-0 ring-white/20 ring-1 rounded-xl pt-4 pr-4 pb-4 pl-4 backdrop-blur-sm gap-4 items-center"
                  >
                    <div className="flex-1">
                      <p className="font-medium">{tx.title}</p>
                      <p className="text-gray-400 text-sm">{tx.time}</p>
                    </div>
                    <div className="text-right">
                      <p className={`font-medium ${tx.isReceived ? "text-green-400" : "text-red-400"}`}>
                        {tx.amount}
                      </p>
                      <p className="text-gray-400 text-sm">{tx.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <HomeIndicator />
          </div>

          {/* Screen 3: New Loan */}
          <div className="overflow-hidden xl:bg-gray-950 bg-neutral-900 border-white/10 border rounded-[2rem] relative shadow-2xl w-[393px] h-[852px]">
            <StatusBar />

            <div className="flex flex-col h-full pr-5 pl-5 pt-[56px] pb-[34px] overflow-y-auto">
              <div className="flex items-center gap-2">
                <button className="rounded-lg p-2 ring-1 ring-white/10 bg-neutral-900/60 hover:bg-neutral-800 transition">
                  <ChevronLeft className="size-4 text-neutral-300" strokeWidth={1.5} />
                </button>
                <h2 className="text-xl font-medium tracking-tight">New Loan</h2>
              </div>

              {/* Collateral */}
              <div className="ring-white/20 ring-1 bg-neutral-800/50 rounded-xl mt-4 pt-4 pr-4 pb-4 pl-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium tracking-tight">Collateral amount</span>
                  <span className="text-[11px] text-neutral-400">Available: 0.05372 BTC</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="size-9 rounded-full bg-[#F7931A]/15 ring-1 ring-[#F7931A]/20 grid place-items-center">
                    <span className="text-[10px] font-medium text-[#F7931A]">BTC</span>
                  </div>
                  <div className="flex-1 text-3xl font-semibold tracking-tight tabular-nums">{collateralAmount}</div>
                  <div className="flex items-center gap-2">
                    <button className="rounded-lg p-2 ring-1 ring-white/10 bg-neutral-900/60 hover:bg-neutral-800 transition">
                      <Minus className="size-4" strokeWidth={1.5} />
                    </button>
                    <button className="rounded-lg p-2 ring-1 ring-white/10 bg-neutral-900/60 hover:bg-neutral-800 transition">
                      <Plus className="size-4" strokeWidth={1.5} />
                    </button>
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
                  <div className="flex-1 text-3xl font-semibold tracking-tight tabular-nums">{loanAmount}</div>
                </div>
              </div>

              {/* Terms */}
              <div className="bg-neutral-800/50 ring-white/20 ring-1 rounded-xl mt-3 pt-4 pr-4 pb-4 pl-4">
                <div className="flex items-center gap-2 text-xs text-neutral-400">
                  <span className="xl:text-white text-sm font-medium tracking-tight">Term</span>
                </div>
                <div className="mt-2 grid grid-cols-4 gap-2">
                  {loanTerms.map((term) => (
                    <button
                      key={term.id}
                      onClick={() => setSelectedTerm(term.id)}
                      className={`rounded-lg px-3 py-2 text-xs ring-1 ring-white/10 hover:bg-neutral-900 transition ${
                        selectedTerm === term.id
                          ? "bg-white text-neutral-900 font-medium"
                          : "bg-neutral-900/60 text-neutral-300"
                      }`}
                    >
                      {term.label}
                    </button>
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
                <button className="inline-flex gap-2 hover:bg-neutral-100 transition text-sm font-medium text-neutral-900 bg-white w-full rounded-xl pt-3.5 pr-4 pb-3.5 pl-4 items-center justify-center">
                  Get loan
                  <ArrowRight className="size-4" strokeWidth={1.5} />
                </button>
              </div>
            </div>

            <HomeIndicator />
          </div>
        </div>
      </main>
    </div>
  )
}
