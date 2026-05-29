export default function GlassCard({ children, className = "" }) {
  return (
    <div
      className={`glass-card premium-fade bg-white/[0.04] border border-white/10 rounded-[30px] backdrop-blur-2xl shadow-2xl shadow-black/30 ${className}`}
    >
      {children}
    </div>
  );
}