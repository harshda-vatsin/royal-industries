interface SectionHeaderProps {
  tag?: string;
  title: string;
  description?: string;
  lightBg?: boolean;
  centered?: boolean;
}

export default function SectionHeader({
  tag,
  title,
  description,
  lightBg = false,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={`mb-16 flex flex-col ${centered ? 'items-center text-center max-w-3xl mx-auto' : 'items-start text-left max-w-4xl'}`}>
      {tag && (
        <span className="text-xs font-bold uppercase tracking-widest text-brand-red mb-3 block border-l-2 border-brand-red pl-2.5">
          {tag}
        </span>
      )}
      <h2 className={`font-heading font-extrabold text-3xl sm:text-4xl tracking-tight leading-tight ${
        lightBg ? 'text-charcoal' : 'text-charcoal'
      }`}>
        {title}
      </h2>
      <div className="w-16 h-1 bg-brand-red my-5"></div>
      {description && (
        <p className="text-base text-gray-500 leading-relaxed font-sans mt-2">
          {description}
        </p>
      )}
    </div>
  );
}
