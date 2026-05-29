export default function RiskMeter({ risk }) {
  const width = `${Math.min(risk, 100)}%`

  const color =
    risk < 40
      ? "bg-emerald-400"
      : risk < 70
      ? "bg-yellow-400"
      : risk < 90
      ? "bg-orange-400"
      : "bg-red-500"

  return (
    <div className="w-full premium-fade">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-zinc-400">
          Spoilage Risk
        </span>

        <span className="font-semibold">
          {risk}%
        </span>
      </div>

      <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden glass-card">
        <div
          className={`h-full ${color} transition-all duration-500`}
          style={{ width }}
        />
      </div>
    </div>
  )
}