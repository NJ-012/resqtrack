export default function AuditLog({ logs = [] }) {
  return (
    <div className="space-y-4 premium-fade">
      {logs.map((log, i) => (
        <div
          key={i}
          className="border border-white/10 rounded-2xl p-4 bg-white/[0.03] glass-card"
        >
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">
              {log.action}
            </h3>

            <span className="text-xs text-zinc-500">
              {log.timestamp}
            </span>
          </div>

          <p className="text-sm text-zinc-400 mt-2">
            {log.actor}
          </p>
        </div>
      ))}
    </div>
  )
}