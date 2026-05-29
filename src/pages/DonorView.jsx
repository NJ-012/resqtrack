import {
  UtensilsCrossed,
  ShieldCheck,
  QrCode,
  Package,
  Building2,
  BadgeCheck,
  ScanLine,
  Sparkles,
} from "lucide-react";

export default function DonorView() {
  const qrPattern = [
    1, 0, 1, 1, 0, 1,
    0, 1, 0, 0, 1, 0,
    1, 1, 1, 0, 0, 1,
    0, 0, 1, 1, 0, 1,
    1, 0, 0, 1, 1, 0,
    1, 1, 0, 0, 1, 1,
  ];

  return (
      <div className="min-h-screen bg-[#070A0F] text-white overflow-x-hidden overflow-y-auto flex flex-col">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[380px] h-[380px] sm:w-[480px] sm:h-[480px] lg:w-[550px] lg:h-[550px] bg-emerald-500/10 blur-[180px]" />
        <div className="absolute bottom-0 right-0 w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] lg:w-[500px] lg:h-[500px] bg-cyan-500/10 blur-[180px]" />

        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-8 py-5 md:py-8 premium-section flex-1 flex flex-col justify-stretch">
        {/* Header */}
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-5 mb-7">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-400 blur-2xl opacity-25" />

              <div className="relative w-14 h-14 rounded-[26px] bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center shadow-2xl shadow-emerald-500/20">
                <Building2 className="w-7 h-7 text-black" />
              </div>
            </div>

            <div>
              <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
                Donor Operations
              </h1>

              <p className="text-zinc-400 mt-1 text-sm md:text-base">
                Enterprise surplus redistribution control interface.
              </p>
            </div>
          </div>

          {/* Status */}
          <div className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/20 px-5 py-4 rounded-2xl backdrop-blur-xl shadow-lg shadow-emerald-500/5">
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-400 blur-md opacity-50" />

              <BadgeCheck className="relative w-5 h-5 text-emerald-400" />
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                Compliance Status
              </p>

              <p className="text-sm font-semibold text-emerald-400 leading-tight">
                Verified Donor Facility
              </p>
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-[0.9fr_1.1fr] gap-5 xl:gap-6 items-start">
          {/* LEFT PANEL */}
          <div className="space-y-5">
            {/* Registration Form */}
            <div className="relative bg-white/[0.04] border border-white/10 rounded-[32px] p-5 md:p-6 backdrop-blur-2xl shadow-2xl shadow-black/30 overflow-hidden">
              {/* subtle glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 blur-[100px]" />

              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <h2 className="text-[26px] font-semibold leading-tight">
                      Surplus Batch Registration
                    </h2>

                    <p className="text-zinc-400 text-sm mt-1.5 max-w-md leading-relaxed">
                      Register safe excess inventory for authenticated
                      redistribution and chain-of-custody transfer.
                    </p>
                  </div>

                  <div className="bg-cyan-500/10 border border-cyan-500/20 p-3 rounded-2xl text-cyan-400 shrink-0">
                    <UtensilsCrossed className="w-5 h-5" />
                  </div>
                </div>

                {/* Form */}
                <div className="space-y-4">
                  {/* Category */}
                  <div>
                    <label className="text-[11px] uppercase tracking-[0.2em] text-zinc-500 mb-2.5 block">
                      Food Category
                    </label>

                    <select className="w-full bg-[#0F141B]/90 border border-white/10 rounded-2xl px-4 py-4 text-[15px] outline-none transition-all duration-300 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-400/10 hover:border-white/20 hover:bg-[#121822]">
                      <option>Rice</option>
                      <option>Dairy</option>
                      <option>Curry</option>
                      <option>Bread</option>
                      <option>Fried Food</option>
                    </select>
                  </div>

                  {/* Quantity */}
                  <div>
                    <label className="text-[11px] uppercase tracking-[0.2em] text-zinc-500 mb-2.5 block">
                      Quantity
                    </label>

                    <input
                      type="text"
                      placeholder="50 meal boxes"
                      className="w-full bg-[#0F141B]/90 border border-white/10 rounded-2xl px-4 py-4 text-[15px] outline-none transition-all duration-300 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-400/10 hover:border-white/20 hover:bg-[#121822]"
                    />
                  </div>

                  {/* Facility */}
                  <div>
                    <label className="text-[11px] uppercase tracking-[0.2em] text-zinc-500 mb-2.5 block">
                      Donor Facility
                    </label>

                    <input
                      type="text"
                      placeholder="Sapphire Grand Hotel"
                      className="w-full bg-[#0F141B]/90 border border-white/10 rounded-2xl px-4 py-4 text-[15px] outline-none transition-all duration-300 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-400/10 hover:border-white/20 hover:bg-[#121822]"
                    />
                  </div>

                  {/* Trust indicators */}
                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <div className="bg-black/20 border border-white/5 rounded-2xl px-4 py-3">
                      <p className="text-zinc-500 text-xs uppercase tracking-wider">
                        Liability
                      </p>

                      <p className="mt-1 text-sm font-medium text-emerald-400">
                        Digitally Protected
                      </p>
                    </div>

                    <div className="bg-black/20 border border-white/5 rounded-2xl px-4 py-3">
                      <p className="text-zinc-500 text-xs uppercase tracking-wider">
                        Audit Trail
                      </p>

                      <p className="mt-1 text-sm font-medium text-cyan-400">
                        Real-Time Active
                      </p>
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="group relative w-full mt-2 overflow-hidden bg-gradient-to-r from-emerald-400 via-emerald-300 to-cyan-400 text-black font-semibold py-4.5 rounded-2xl transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] shadow-[0_0_30px_rgba(16,185,129,0.18)] hover:shadow-[0_0_45px_rgba(34,211,238,0.28)]">
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="relative flex items-center justify-center gap-2">
                      <Sparkles className="w-4 h-4" />

                      <span>Generate Transfer Token</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="space-y-5">
            {/* QR CENTERPIECE */}
            <div className="relative overflow-hidden rounded-[34px] border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 via-cyan-500/5 to-cyan-500/10 p-5 md:p-7 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
              {/* Ambient glows */}
              <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-emerald-500/20 blur-[140px]" />
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cyan-500/15 blur-[140px]" />

              {/* subtle border shine */}
              <div className="absolute inset-0 rounded-[34px] border border-white/5 pointer-events-none" />

              <div className="relative z-10">
                {/* Top section */}
                <div className="flex items-start justify-between gap-4 mb-7">
                  <div>
                    <p className="uppercase tracking-[0.24em] text-[11px] text-zinc-500">
                      Verification Token
                    </p>

                    <h2 className="text-[clamp(2.25rem,8vw,3.5rem)] md:text-6xl font-black mt-3 leading-none">
                      READY
                    </h2>

                    <p className="text-sm text-zinc-400 mt-3 max-w-sm leading-relaxed">
                      Secure QR transfer token generated and awaiting courier
                      authentication.
                    </p>
                  </div>

                  <div className="relative shrink-0">
                    <div className="absolute inset-0 bg-cyan-400 blur-2xl opacity-30" />

                    <div className="relative bg-cyan-500/10 border border-cyan-500/20 p-4 rounded-3xl">
                      <QrCode className="w-9 h-9 text-cyan-400" />
                    </div>
                  </div>
                </div>

                {/* QR Module */}
                <div className="relative">
                  {/* Outer glow */}
                  <div className="absolute inset-0 rounded-[30px] bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.28),transparent_65%)] blur-[12px]" />

                  <div className="relative overflow-hidden rounded-[30px] bg-[#0B1018]/95 border border-white/10 p-5 md:p-7">
                    {/* scanning overlay */}
                    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08),transparent_60%)]" />

                    {/* scan line */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-cyan-400/90 shadow-[0_0_35px_rgba(34,211,238,0.85)] donor-scan-line z-20" />

                    {/* corner accents */}
                    <div className="absolute top-5 left-5 w-10 h-10 border-l-[3px] border-t-[3px] border-cyan-400/80 rounded-tl-xl" />
                    <div className="absolute top-5 right-5 w-10 h-10 border-r-[3px] border-t-[3px] border-cyan-400/80 rounded-tr-xl" />
                    <div className="absolute bottom-5 left-5 w-10 h-10 border-l-[3px] border-b-[3px] border-cyan-400/80 rounded-bl-xl" />
                    <div className="absolute bottom-5 right-5 w-10 h-10 border-r-[3px] border-b-[3px] border-cyan-400/80 rounded-br-xl" />

                    {/* QR block */}
                    <div className="relative w-full max-w-[430px] aspect-square mx-auto flex items-center justify-center">
                      <div className="relative">
                        {/* glow */}
                        <div className="absolute inset-0 bg-cyan-400/20 blur-[50px]" />

                    <div className="relative rounded-[26px] bg-[#05080D] border border-white/10 p-5 sm:p-6 md:p-8 shadow-[0_0_40px_rgba(0,0,0,0.45)]">
                    <div className="grid grid-cols-6 gap-[clamp(4px,1.2vw,8px)]">
                            {qrPattern.map((cell, i) => (
                              <div
                                key={i}
                                className={`w-[clamp(16px,2.8vw,24px)] h-[clamp(16px,2.8vw,24px)] md:w-[clamp(18px,2.8vw,26px)] md:h-[clamp(18px,2.8vw,26px)] rounded-[4px] transition-all duration-300 ${
                                  cell
                                    ? "bg-white shadow-[0_0_10px_rgba(255,255,255,0.15)]"
                                    : "bg-[#05080D] border border-white/10"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex items-center gap-2 text-sm text-zinc-500">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />

                        <span>
                          Scan-ready / custody transfer active
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-cyan-400 text-sm">
                        <ScanLine className="w-4 h-4" />

                        <span>Awaiting Driver Verification</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Success banner */}
                <div className="mt-5 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl px-4 py-4 flex items-start gap-3">
                  <Package className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />

                  <div>
                    <p className="text-sm font-medium text-emerald-300">
                      Secure Transfer Token Generated
                    </p>

                    <p className="text-xs text-emerald-200/70 mt-1 leading-relaxed">
                      Digital custody chain initialized successfully. Liability
                      isolation and audit monitoring are now active.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes donorScan {
          0% {
            transform: translateY(-10%);
          }
          100% {
            transform: translateY(1200%);
          }
        }

        .donor-scan-line {
          animation: donorScan 3s linear infinite;
        }
      `}</style>
    </div>
  );
}