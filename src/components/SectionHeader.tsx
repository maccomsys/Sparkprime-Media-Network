interface SectionHeaderProps {
  title: string;
  dark?: boolean;
}

export default function SectionHeader({ title, dark = false }: SectionHeaderProps) {
  return (
    <div className={`flex justify-between items-end border-b pb-2 mb-6 ${dark ? 'border-[#2a528a]' : 'border-gray-200'}`}>
      <h2 className={`text-lg font-bold uppercase tracking-wider ${dark ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h2>
      <a href="#" className="text-brand-secondary text-sm font-medium hover:underline flex items-center">
        See All <span className="ml-1">&gt;</span>
      </a>
    </div>
  );
}
