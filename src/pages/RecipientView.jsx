import {
  ShieldCheck,
  QrCode,
  ScanLine,
  CheckCircle2,
  Building2,
  Clock3,
  Truck,
  Thermometer,
  FileCheck2,
  ChevronRight,
  PackageCheck,
  BadgeCheck,
  Leaf,
  Activity,
  LockKeyhole,
} from "lucide-react";

export default function RecipientView() {
  return (
    <div className="min-h-screen bg-[#070A0F] text-white overflow-hidden flex flex-col">
      {/* Ambient Enterprise Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[420px] h-[420px] sm:w-[520px] sm:h-[520px] lg:w-[620px] lg:h-[620px] bg-emerald-500/10 blur-[220px]" />

        <div className="absolute bottom-0 left-0 w-[360px] h-[360px] sm:w-[460px] sm:h-[460px] lg:w-[520px] lg:h-[520px] bg-cyan-500/10 blur-[220px]" />

        {/* subtle enterprise grid */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:55px_55px]" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-3 sm:px-4 md:px-7 py-5 md:py-7 premium-section flex-1 flex flex-col justify-stretch">
        {/* Header */}
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-5 mb-7">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-500 blur-2xl opacity-20" />

              <div className="relative w-14 h-14 rounded-3xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center shadow-2xl shadow-emerald-500/20">
                <Building2 className="w-7 h-7 text-black" />
              </div>
            </div>

            <div>
              <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
                Recipient Verification Hub
              </h1>

              <p className="text-zinc-400 mt-1 text-sm md:text-base leading-relaxed">
                Final compliance checkpoint in the ResQTrack digital
                chain-of-custody network.
              </p>
            </div>
          </div>

          {/* status */}
          <div className="relative overflow-hidden flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/20 px-5 py-4 rounded-2xl backdrop-blur-xl shadow-lg shadow-black/20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.12),transparent_70%)]" />

            <div className="relative">
              <div className="absolute inset-0 bg-emerald-400 blur-lg opacity-40" />

              <BadgeCheck className="relative w-6 h-6 text-emerald-400" />
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                Verification Status
              </p>

              <p className="text-sm font-semibold text-emerald-400 leading-tight tracking-wide">
                Trusted NGO Partner
              </p>
            </div>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 2xl:grid-cols-[0.88fr_1.12fr] gap-5 2xl:gap-6 items-start">
          {/* LEFT */}
          <div className="space-y-5">
            {/* Scanner */}
            <div className="relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[32px] p-5 md:p-6 backdrop-blur-2xl shadow-[0_20px_70px_rgba(0,0,0,0.45)]">
              <div className="absolute top-0 right-0 w-44 h-44 bg-cyan-500/10 blur-[100px]" />

              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div>
                    <h2 className="text-[28px] font-semibold leading-tight">
                      Secure Delivery Confirmation
                    </h2>

                    <p className="text-sm text-zinc-400 mt-1.5 leading-relaxed max-w-md">
                      Scan courier custody token to finalize secure operational
                      transfer and permanently close the audit trail.
                    </p>
                  </div>

                  <div className="bg-cyan-500/10 border border-cyan-500/20 p-3 rounded-2xl text-cyan-400">
                    <ScanLine className="w-5 h-5" />
                  </div>
                </div>

                {/* Scanner viewport */}
                <div className="relative overflow-hidden rounded-[30px] bg-[#0F141B] border border-white/10 aspect-square flex items-center justify-center">
                  {/* glow */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_65%)]" />

                  {/* scan line */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-cyan-400 shadow-[0_0_30px_#22d3ee] animate-[scan_3s_linear_infinite]" />

                  {/* scanner corners */}
                  <div className="absolute top-5 left-5 w-10 h-10 border-l-[3px] border-t-[3px] border-cyan-400/80 rounded-tl-xl" />
                  <div className="absolute top-5 right-5 w-10 h-10 border-r-[3px] border-t-[3px] border-cyan-400/80 rounded-tr-xl" />
                  <div className="absolute bottom-5 left-5 w-10 h-10 border-l-[3px] border-b-[3px] border-cyan-400/80 rounded-bl-xl" />
                  <div className="absolute bottom-5 right-5 w-10 h-10 border-r-[3px] border-b-[3px] border-cyan-400/80 rounded-br-xl" />

                  <div className="relative w-60 h-60 border-2 border-dashed border-cyan-400/60 rounded-[36px] flex items-center justify-center">
                    <div className="absolute inset-0 rounded-[36px] bg-cyan-400/5 animate-pulse" />

                    <QrCode className="w-24 h-24 text-cyan-400/80 drop-shadow-[0_0_18px_rgba(34,211,238,0.35)]" />
                  </div>
                </div>

                {/* footer */}
                <div className="mt-5 flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-sm text-zinc-500">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

                    <span>Secure verification channel active</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-cyan-400">
                    <Activity className="w-4 h-4" />

                    <span>Awaiting Recipient Authentication</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Impact stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/[0.04] border border-white/10 rounded-[30px] p-5 md:p-6 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
                <div className="flex items-center justify-between">
                  <PackageCheck className="w-5 h-5 text-emerald-400" />

                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>

                <p className="text-sm text-zinc-500 mt-4">
                  Meals Distributed
                </p>

                <h3 className="text-4xl font-bold mt-2 leading-none">
                  18,420
                </h3>
              </div>

              <div className="bg-white/[0.04] border border-white/10 rounded-[30px] p-5 md:p-6 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
                <div className="flex items-center justify-between">
                  <Leaf className="w-5 h-5 text-cyan-400" />

                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                </div>

                <p className="text-sm text-zinc-500 mt-4">
                  Waste Prevented
                </p>

                <h3 className="text-4xl font-bold mt-2 leading-none">
                  4.8 Tons
                </h3>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-5">
            {/* VERIFIED */}
            <div className="relative overflow-hidden bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-[34px] p-6 md:p-7 backdrop-blur-2xl shadow-[0_25px_90px_rgba(0,0,0,0.45)]">
              {/* glow */}
              <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-emerald-500/20 blur-[140px]" />

              <div className="relative z-10">
                {/* top */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-7">
                  <div>
                    <p className="uppercase tracking-[0.28em] text-[11px] text-zinc-500">
                      Delivery Integrity Status
                    </p>

                    <div className="flex items-center gap-4 mt-4">
                      <h2 className="text-6xl md:text-7xl font-black leading-none text-white tracking-tight">
                        VERIFIED
                      </h2>

                      <div className="hidden md:flex w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 items-center justify-center">
                        <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                      </div>
                    </div>

                    <p className="text-zinc-300 text-sm md:text-base mt-5 max-w-2xl leading-relaxed">
                      Recipient authentication completed successfully. Delivery
                      integrity validated and securely recorded in the ResQTrack
                      compliance ledger.
                    </p>
                  </div>

                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-3xl p-5 shrink-0 backdrop-blur-xl">
                    <div className="relative">
                      <div className="absolute inset-0 bg-emerald-400 blur-3xl opacity-25" />

                      <ShieldCheck className="relative w-16 h-16 text-emerald-400 drop-shadow-[0_0_20px_rgba(16,185,129,0.35)]" />
                    </div>
                  </div>
                </div>

                {/* data cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    ["Batch ID", "RQT-48291"],
                    ["Meal Count", "50 Veg Meal Boxes"],
                    ["Donor Source", "Sapphire Grand Hotel"],
                    ["Risk Classification", "Safe for Distribution"],
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-black/20 border border-white/5 rounded-2xl p-4 backdrop-blur-xl"
                    >
                      <p className="text-xs uppercase tracking-[0.16em] text-zinc-500">
                        {item[0]}
                      </p>

                      <h3 className="mt-3 font-semibold text-lg leading-snug text-zinc-100">
                        {item[1]}
                      </h3>
                    </div>
                  ))}
                </div>

                {/* compliance strip */}
                <div className="mt-5 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-4 flex items-start gap-3">
                  <LockKeyhole className="w-5 h-5 text-emerald-400 mt-0.5" />

                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                      Compliance Record
                    </p>

                    <p className="text-sm text-emerald-300 mt-1 leading-relaxed">
                      Final delivery verification permanently sealed into the
                      chain-of-custody audit registry.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-white/[0.04] border border-white/10 rounded-[34px] p-6 md:p-7 backdrop-blur-2xl shadow-[0_25px_90px_rgba(0,0,0,0.45)]">
              {/* header */}
              <div className="flex items-start justify-between gap-4 mb-8">
                <div>
                  <h2 className="text-[28px] font-semibold leading-tight">
                    Chain-of-Custody Audit Timeline
                  </h2>

                  <p className="text-sm text-zinc-400 mt-1.5 leading-relaxed">
                    Verified operational history across the ResQTrack custody
                    network.
                  </p>
                </div>

                <div className="bg-white/[0.03] border border-white/10 p-3 rounded-2xl">
                  <FileCheck2 className="w-5 h-5 text-zinc-400" />
                </div>
              </div>

              {/* timeline */}
              <div className="relative">
                {/* main line */}
                <div className="absolute left-[20px] top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/40 via-white/10 to-emerald-500/40" />

                <div className="space-y-7">
                  {[
                    {
                      icon: Clock3,
                      title: "Batch Registered",
                      desc: "Hotel kitchen logged surplus inventory into ResQTrack.",
                      time: "18:04",
                      color: "text-cyan-400",
                    },
                    {
                      icon: Truck,
                      title: "Courier Verification",
                      desc: "Custody officially transferred to authorized driver.",
                      time: "18:17",
                      color: "text-yellow-400",
                    },
                    {
                      icon: Thermometer,
                      title: "Transit Monitoring",
                      desc: "Environmental risk engine monitored spoilage conditions.",
                      time: "18:29",
                      color: "text-orange-400",
                    },
                    {
                      icon: CheckCircle2,
                      title: "Recipient Authentication",
                      desc: "NGO completed final secure delivery confirmation.",
                      time: "18:42",
                      color: "text-emerald-400",
                    },
                  ].map((step, idx) => (
                    <div
                      key={idx}
                      className="relative flex gap-5 group"
                    >
                      {/* icon */}
                      <div className="relative z-10 shrink-0">
                        <div
                          className={`absolute inset-0 blur-xl opacity-30 ${step.color.replace(
                            "text",
                            "bg"
                          )}`}
                        />

                        <div
                          className={`relative w-10 h-10 rounded-2xl flex items-center justify-center bg-black/40 border border-white/10 backdrop-blur-xl ${step.color}`}
                        >
                          <step.icon className="w-4 h-4" />
                        </div>
                      </div>

                      {/* content */}
                      <div className="flex-1 min-w-0">
                        <div className="bg-black/15 border border-white/[0.04] rounded-2xl p-4 transition-all duration-300 group-hover:border-white/10">
                          <div className="flex items-center justify-between gap-4 flex-wrap">
                            <div>
                              <h3 className="font-semibold text-zinc-100 leading-snug">
                                {step.title}
                              </h3>

                              <p className="text-sm text-zinc-500 mt-1.5 leading-relaxed">
                                {step.desc}
                              </p>
                            </div>

                            <div className="text-right shrink-0">
                              <p className="text-xs uppercase tracking-[0.16em] text-zinc-600">
                                Timestamp
                              </p>

                              <p className="text-sm text-zinc-300 mt-1">
                                {step.time}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* footer */}
              <div className="mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-zinc-600">
                    Digital Audit Signature
                  </p>

                  <p className="font-mono text-sm text-zinc-300 mt-2">
                    SHA256-F92X1A88-RESQTRACK
                  </p>
                </div>

                <button className="group flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
                  View Full Audit

                  <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% {
            top: 0%;
          }

          100% {
            top: 100%;
          }
        }
      `}</style>
    </div>
  );
}