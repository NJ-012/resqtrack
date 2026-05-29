export default function StatusBadge({ status }) {
  const styles = {
    LOW: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    MODERATE: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    HIGH: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    CRITICAL: "bg-red-500/10 text-red-400 border-red-500/20",
  }

  return (
    <div
      className={`px-4 py-2 rounded-2xl border text-sm font-semibold glass-card premium-fade ${styles[status]}`}
    >
      {status}
    </div>
  )
}