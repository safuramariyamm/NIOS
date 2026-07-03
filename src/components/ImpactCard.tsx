type ImpactCardProps = {
  value: string;
  label: string;
  accent?: boolean;
};

export function ImpactCard({ value, label, accent = false }: ImpactCardProps) {
  return (
    <div className={`rounded-[24px] border border-white/70 bg-white/80 p-6 shadow-[0_20px_70px_rgba(15,23,42,0.08)] backdrop-blur ${accent ? "bg-gradient-to-br from-[#F97316] to-[#2563EB] text-white" : "text-[#111827]"}`}>
      <p className={`text-3xl font-semibold sm:text-4xl ${accent ? "text-white" : "text-[#111827]"}`}>{value}</p>
      <p className={`mt-2 text-sm font-medium uppercase tracking-[0.3em] ${accent ? "text-white/80" : "text-[#6B7280]"}`}>{label}</p>
    </div>
  );
}
