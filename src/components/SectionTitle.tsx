type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionTitle({ eyebrow, title, description, align = "left" }: SectionTitleProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div className={`max-w-2xl ${alignment}`}>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#F97316]">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-[#111827] sm:text-4xl">{title}</h2>
      <p className="mt-4 text-lg leading-8 text-[#6B7280]">{description}</p>
    </div>
  );
}
