export default function HeroSection() {
  const heroCards = [
    { image: 'https://picsum.photos/seed/tech1/800/600', badge: 'TECHNOLOGY', title: 'AI Chips Are Redefining the Future of Computing' },
    { image: 'https://picsum.photos/seed/tech2/800/600', badge: 'TECHNOLOGY', title: '5G Networks Are Transforming How We Connect' },
    { image: 'https://picsum.photos/seed/tech3/800/600', badge: 'TECHNOLOGY', title: 'The Rise of Quantum Computing: What You Need to Know' },
    { image: 'https://picsum.photos/seed/tech4/800/600', badge: 'TECHNOLOGY', title: 'Cybersecurity in 2025: Protecting the Digital World' },
    { image: 'https://picsum.photos/seed/tech5/800/600', badge: 'TECHNOLOGY', title: 'The Future of Augmented Reality in Everyday Life' },
    { image: 'https://picsum.photos/seed/tech6/800/600', badge: 'TECHNOLOGY', title: 'How Blockchain is Revolutionizing Supply Chains' },
  ];

  return (
    <section className="mb-12">
      {/* Breaking News Ticker */}
      <div className="bg-[#1A1A1A] text-white flex items-center text-sm">
        <div className="bg-brand-green font-bold px-4 py-2 uppercase tracking-wider whitespace-nowrap">
          Breaking
        </div>
        <div className="overflow-hidden whitespace-nowrap px-4 w-full">
          <p className="animate-marquee inline-block">
            AI Chips Are Redefining the Future of Computing • 5G Networks Are Transforming How We Connect • The Rise of Quantum Computing: What You Need to Know • Cybersecurity in 2025: Protecting the Digital World
          </p>
        </div>
      </div>

      {/* Hero Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 mt-1">
        {/* Large Featured (Spans 2 cols, 2 rows) */}
        <div className="lg:col-span-2 lg:row-span-2 relative group cursor-pointer overflow-hidden aspect-video lg:aspect-auto">
          <img src={heroCards[0].image} alt={heroCards[0].title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6">
            <span className="bg-brand-green text-white text-xs font-bold uppercase px-2 py-1 rounded-sm mb-3 inline-block">
              {heroCards[0].badge}
            </span>
            <h2 className="text-white text-2xl md:text-3xl font-bold leading-tight group-hover:text-brand-green transition-colors">
              {heroCards[0].title}
            </h2>
          </div>
        </div>

        {/* Smaller Cards */}
        {heroCards.slice(1, 5).map((card, idx) => (
          <div key={idx} className="relative group cursor-pointer overflow-hidden aspect-video">
            <img src={card.image} alt={card.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-4">
              <span className="bg-brand-green text-white text-[10px] font-bold uppercase px-2 py-1 rounded-sm mb-2 inline-block">
                {card.badge}
              </span>
              <h3 className="text-white text-sm md:text-base font-bold leading-snug group-hover:text-brand-green transition-colors">
                {card.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
