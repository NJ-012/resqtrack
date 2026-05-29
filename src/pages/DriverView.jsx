import { useState } from "react";

import {
  Truck,
  Thermometer,
  CloudRain,
  Clock3,
  ShieldAlert,
  ScanLine,
  ShieldCheck,
  Activity,
  Siren,
} from "lucide-react";

export default function DriverView() {
  const [temperature, setTemperature] = useState(34);
  const [humidity, setHumidity] = useState(68);
  const [transitTime, setTransitTime] = useState(42);

  const risk = temperature * 2 + humidity * 0.8 + transitTime * 1.5;

  let riskLevel = "LOW";

  if (risk >= 160) {
    riskLevel = "CRITICAL";
  } else if (risk >= 120) {
    riskLevel = "HIGH";
  } else if (risk >= 70) {
    riskLevel = "MODERATE";
  }

  const riskColor =
    riskLevel === "LOW"
      ? "emerald"
      : riskLevel === "MODERATE"
      ? "yellow"
      : riskLevel === "HIGH"
      ? "orange"
      : "red";

  return (
    <div className="min-h-screen bg-[#070A0F] text-white overflow-hidden flex flex-col">
      {/* Ambient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-0 right-0 w-[620px] h-[620px] bg-${riskColor}-500/10 blur-[210px] transition-all duration-700`}
        />

        <div className="absolute bottom-0 left-0 w-[520px] h-[520px] bg-cyan-500/10 blur-[220px]" />

        {/* Grid texture */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:55px_55px]" />
      </div>

      <div className="relative z-10 max-w-[1650px] mx-auto px-4 py-5 md:px-7 md:py-7 premium-section flex-1 flex flex-col justify-stretch">
        {/* Header */}
        <div className="flex flex-col 2xl:flex-row 2xl:items-center 2xl:justify-between gap-5 mb-7">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="absolute inset-0 bg-orange-500 blur-2xl opacity-25" />

              <div className="relative w-14 h-14 rounded-3xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-2xl shadow-orange-500/20">
                <Truck className="w-7 h-7 text-black" />
              </div>
            </div>

            <div>
              <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
                Driver Transit Console
              </h1>

              <p className="text-zinc-400 mt-1 text-sm md:text-base leading-relaxed">
                AI-powered environmental transit surveillance and spoilage
                risk monitoring.
              </p>
            </div>
          </div>

          {/* Status */}
          <div
            className={`relative overflow-hidden flex items-center gap-3 bg-${riskColor}-500/10 border border-${riskColor}-500/20 px-5 py-4 rounded-2xl backdrop-blur-xl shadow-lg shadow-black/30 ${
              riskLevel === "CRITICAL"
                ? "ring-1 ring-red-400/40"
                : ""
            }`}
          >
            {riskLevel === "CRITICAL" && (
              <div className="absolute inset-0 emergencyPulse" />
            )}

            <div className="relative">
              <div
                className={`absolute inset-0 bg-${riskColor}-400 blur-lg opacity-40`}
              />

              <ShieldCheck
                className={`relative w-5 h-5 text-${riskColor}-400`}
              />
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                Spoilage Risk
              </p>

              <p
                className={`text-sm font-semibold text-${riskColor}-400 leading-tight tracking-wide`}
              >
                {riskLevel}
              </p>
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 2xl:grid-cols-[0.9fr_1.1fr] gap-5 2xl:gap-6 items-start">
          {/* LEFT */}
          <div className="space-y-5">
            {/* Scan Section */}
            <div className="relative bg-white/[0.04] border border-white/10 rounded-[32px] p-5 md:p-6 backdrop-blur-2xl shadow-[0_20px_70px_rgba(0,0,0,0.45)] overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 blur-[90px]" />

              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div>
                    <h2 className="text-[28px] font-semibold leading-tight">
                      Pickup Verification
                    </h2>

                    <p className="text-zinc-400 text-sm mt-1.5 leading-relaxed max-w-md">
                      Scan donor transfer token to initialize secure
                      chain-of-custody transit tracking.
                    </p>
                  </div>

                  <div className="bg-cyan-500/10 border border-cyan-500/20 p-3 rounded-2xl text-cyan-400">
                    <ScanLine className="w-5 h-5" />
                  </div>
                </div>

                {/* Scanner */}
                <div className="relative aspect-square md:aspect-[1.08/1] rounded-[30px] bg-[#0F141B] border border-white/10 flex items-center justify-center overflow-hidden">
                  {/* texture */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)]" />

                  {/* scan beam */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-cyan-400 shadow-[0_0_35px_#22d3ee] animate-[scan_3s_linear_infinite]" />

                  {/* pulse overlay */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08),transparent_60%)]" />

                  {/* corners */}
                  <div className="absolute top-5 left-5 w-10 h-10 border-l-[3px] border-t-[3px] border-cyan-400/80 rounded-tl-xl" />
                  <div className="absolute top-5 right-5 w-10 h-10 border-r-[3px] border-t-[3px] border-cyan-400/80 rounded-tr-xl" />
                  <div className="absolute bottom-5 left-5 w-10 h-10 border-l-[3px] border-b-[3px] border-cyan-400/80 rounded-bl-xl" />
                  <div className="absolute bottom-5 right-5 w-10 h-10 border-r-[3px] border-b-[3px] border-cyan-400/80 rounded-br-xl" />

                  <div className="relative w-64 h-64 rounded-[36px] border-2 border-dashed border-cyan-400/60 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-[36px] bg-cyan-400/5 animate-pulse" />

                    <ScanLine className="w-24 h-24 text-cyan-400/80 drop-shadow-[0_0_18px_rgba(34,211,238,0.45)]" />
                  </div>
                </div>

                {/* footer */}
                <div className="mt-5 flex items-center justify-between gap-4 flex-wrap">
                  <div className="flex items-center gap-2 text-sm text-zinc-500">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

                    <span>Secure scan channel active</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-cyan-400">
                    <Activity className="w-4 h-4" />

                    <span>Awaiting Donor Authentication</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Environment Controls */}
            <div className="relative bg-white/[0.04] border border-white/10 rounded-[32px] p-5 md:p-6 backdrop-blur-2xl shadow-[0_20px_70px_rgba(0,0,0,0.45)] overflow-hidden">
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-orange-500/10 blur-[100px]" />

              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4 mb-7">
                  <div>
                    <h2 className="text-[28px] font-semibold leading-tight">
                      Environmental Conditions
                    </h2>

                    <p className="text-zinc-400 text-sm mt-1.5 leading-relaxed">
                      Live atmospheric conditions continuously affecting food
                      stability during transit.
                    </p>
                  </div>

                  <div className="bg-orange-500/10 border border-orange-500/20 p-3 rounded-2xl text-orange-400">
                    <Thermometer className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-7">
                  {/* Temp */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Thermometer className="w-4 h-4 text-orange-400" />

                        <span className="text-sm tracking-wide">
                          Ambient Temperature
                        </span>
                      </div>

                      <span className="font-semibold text-orange-300">
                        {temperature}°C
                      </span>
                    </div>

                    <input
                      type="range"
                      min="20"
                      max="50"
                      value={temperature}
                      onChange={(e) =>
                        setTemperature(Number(e.target.value))
                      }
                      className="w-full driver-slider"
                    />
                  </div>

                  {/* Humidity */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <CloudRain className="w-4 h-4 text-cyan-400" />

                        <span className="text-sm tracking-wide">
                          Humidity
                        </span>
                      </div>

                      <span className="font-semibold text-cyan-300">
                        {humidity}%
                      </span>
                    </div>

                    <input
                      type="range"
                      min="20"
                      max="100"
                      value={humidity}
                      onChange={(e) =>
                        setHumidity(Number(e.target.value))
                      }
                      className="w-full driver-slider"
                    />
                  </div>

                  {/* Transit */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Clock3 className="w-4 h-4 text-yellow-400" />

                        <span className="text-sm tracking-wide">
                          Transit Duration
                        </span>
                      </div>

                      <span className="font-semibold text-yellow-300">
                        {transitTime} mins
                      </span>
                    </div>

                    <input
                      type="range"
                      min="10"
                      max="180"
                      value={transitTime}
                      onChange={(e) =>
                        setTransitTime(Number(e.target.value))
                      }
                      className="w-full driver-slider"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-5">
            {/* Risk Console */}
            <div
              className={`relative overflow-hidden bg-${riskColor}-500/10 border border-${riskColor}-500/20 rounded-[34px] p-6 md:p-7 backdrop-blur-2xl shadow-[0_25px_90px_rgba(0,0,0,0.5)] ${
                riskLevel === "CRITICAL"
                  ? "border-red-500/30"
                  : ""
              }`}
            >
              {/* atmospheric glow */}
              <div
                className={`absolute top-0 right-0 w-[420px] h-[420px] bg-${riskColor}-500/20 blur-[140px]`}
              />

              {/* critical pulse */}
              {riskLevel === "CRITICAL" && (
                <>
                  <div className="absolute inset-0 criticalAura" />
                  <div className="absolute inset-0 criticalGridFlash opacity-[0.05]" />
                </>
              )}

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-8">
                  <div>
                    <p className="uppercase tracking-[0.28em] text-[11px] text-zinc-500">
                      Live Spoilage Analysis
                    </p>

                    <h2
                      className={`text-6xl md:text-7xl font-black mt-4 leading-none text-${riskColor}-400 ${
                        riskLevel === "CRITICAL"
                          ? "criticalPulse"
                          : ""
                      }`}
                    >
                      {riskLevel}
                    </h2>

                    <p className="text-zinc-400 text-sm mt-4 leading-relaxed max-w-lg">
                      AI monitoring engine is recalculating spoilage
                      acceleration probability based on environmental
                      volatility and route exposure duration.
                    </p>
                  </div>

                  <div className="relative shrink-0">
                    <div
                      className={`absolute inset-0 bg-${riskColor}-400 blur-3xl opacity-35`}
                    />

                    <div
                      className={`relative bg-${riskColor}-500/10 border border-${riskColor}-500/20 rounded-3xl p-4`}
                    >
                      {riskLevel === "CRITICAL" ? (
                        <Siren
                          className={`w-12 h-12 text-${riskColor}-400 criticalPulse`}
                        />
                      ) : (
                        <ShieldAlert
                          className={`w-12 h-12 text-${riskColor}-400`}
                        />
                      )}
                    </div>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-black/20 border border-white/5 rounded-2xl p-4">
                    <p className="text-zinc-500 text-xs uppercase tracking-wider">
                      Safe Window
                    </p>

                    <h3 className="text-3xl font-bold mt-2">
                      {Math.max(5, 120 - transitTime)}
                      <span className="text-lg text-zinc-500 ml-1">
                        mins
                      </span>
                    </h3>
                  </div>

                  <div className="bg-black/20 border border-white/5 rounded-2xl p-4">
                    <p className="text-zinc-500 text-xs uppercase tracking-wider">
                      Risk Index
                    </p>

                    <h3
                      className={`text-3xl font-bold mt-2 text-${riskColor}-400`}
                    >
                      {Math.round(risk)}%
                    </h3>
                  </div>
                </div>

                {/* Alert strip */}
                <div
                  className={`mt-6 rounded-2xl border p-4 ${
                    riskLevel === "CRITICAL"
                      ? "bg-red-500/10 border-red-500/20"
                      : riskLevel === "HIGH"
                      ? "bg-orange-500/10 border-orange-500/20"
                      : "bg-white/[0.03] border-white/10"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={`w-2 h-2 rounded-full mt-2 ${
                        riskLevel === "CRITICAL"
                          ? "bg-red-400 criticalDot"
                          : `bg-${riskColor}-400`
                      }`}
                    />

                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
                        Operational Advisory
                      </p>

                      <p className="text-sm text-zinc-200 mt-1 leading-relaxed">
                        {riskLevel === "CRITICAL"
                          ? "Critical spoilage acceleration detected. Maintain cooling stability and prepare emergency rerouting procedures immediately."
                          : "Environmental conditions remain under active AI surveillance during live transit operations."}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-7 pt-5 border-t border-white/5 flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-sm text-zinc-500">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />

                    <span>Telemetry stream stable</span>
                  </div>

                  <div className="text-sm text-zinc-400">
                    Route Monitoring Active
                  </div>
                </div>
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

        .driver-slider {
          -webkit-appearance: none;
          appearance: none;
          height: 8px;
          border-radius: 9999px;
          background: linear-gradient(
            90deg,
            rgba(34, 211, 238, 0.7),
            rgba(251, 146, 60, 0.75)
          );
          box-shadow:
            inset 0 0 0 1px rgba(255, 255, 255, 0.06),
            0 0 25px rgba(34, 211, 238, 0.08);
        }

        .driver-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 22px;
          height: 22px;
          border-radius: 9999px;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.98),
            rgba(34, 211, 238, 0.85)
          );
          border: 1px solid rgba(255, 255, 255, 0.18);

          box-shadow:
            0 0 0 8px rgba(34, 211, 238, 0.12),
            0 0 35px rgba(34, 211, 238, 0.35);

          transition: all 0.25s ease;
        }

        .driver-slider::-webkit-slider-thumb:hover {
          transform: scale(1.08);
        }

        .driver-slider::-moz-range-thumb {
          width: 22px;
          height: 22px;
          border-radius: 9999px;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.98),
            rgba(34, 211, 238, 0.85)
          );

          box-shadow:
            0 0 0 8px rgba(34, 211, 238, 0.12),
            0 0 35px rgba(34, 211, 238, 0.35);
        }

        .criticalAura {
          background: radial-gradient(
            circle at center,
            rgba(239, 68, 68, 0.28),
            transparent 58%
          );

          animation: criticalAura 1.8s ease-in-out infinite;
        }

        @keyframes criticalAura {
          0% {
            opacity: 0.7;
            transform: scale(1);
          }

          50% {
            opacity: 1;
            transform: scale(1.025);
          }

          100% {
            opacity: 0.7;
            transform: scale(1);
          }
        }

        .criticalPulse {
          animation: criticalPulse 1.2s ease-in-out infinite;
          text-shadow: 0 0 25px rgba(239, 68, 68, 0.35);
        }

        @keyframes criticalPulse {
          0% {
            transform: translateY(0);
            filter: brightness(1);
          }

          50% {
            transform: translateY(-1px);
            filter: brightness(1.14);
          }

          100% {
            transform: translateY(0);
            filter: brightness(1);
          }
        }

        .criticalDot {
          animation: criticalDot 1s ease-in-out infinite;
          box-shadow: 0 0 22px rgba(239, 68, 68, 0.45);
        }

        @keyframes criticalDot {
          0% {
            transform: scale(1);
            opacity: 0.75;
          }

          50% {
            transform: scale(1.35);
            opacity: 1;
          }

          100% {
            transform: scale(1);
            opacity: 0.75;
          }
        }

        .criticalGridFlash {
          background-image:
            linear-gradient(
              rgba(239, 68, 68, 0.12) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(239, 68, 68, 0.12) 1px,
              transparent 1px
            );

          background-size: 50px 50px;

          animation: gridFlash 2.2s linear infinite;
        }

        @keyframes gridFlash {
          0% {
            opacity: 0.02;
          }

          50% {
            opacity: 0.08;
          }

          100% {
            opacity: 0.02;
          }
        }

        .emergencyPulse {
          animation: emergencyPulse 1.5s ease-in-out infinite;
          background: radial-gradient(
            circle at center,
            rgba(239, 68, 68, 0.12),
            transparent 70%
          );
        }

        @keyframes emergencyPulse {
          0% {
            opacity: 0.5;
          }

          50% {
            opacity: 1;
          }

          100% {
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
}