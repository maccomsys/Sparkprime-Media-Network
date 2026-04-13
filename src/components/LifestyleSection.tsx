import SectionHeader from './SectionHeader';

export default function LifestyleSection() {
  const lifestyleCards = [
    { 
      image: 'https://picsum.photos/seed/life1/600/400', 
      badge: 'BUSINESS', 
      title: 'The Creator Economy Is Now Worth Over $250 Billion',
      excerpt: 'Bloggers, podcasters, and influencers are turning passion projects into full-scale media businesses.',
      stats: 'David Kim - Jan 27, 2026'
    },
    { 
      image: 'https://picsum.photos/seed/life2/600/400', 
      badge: 'BUSINESS', 
      title: 'E-Commerce Growth in West Africa: Opportunities and Challenges',
      excerpt: 'Mobile-first consumers across West Africa are fueling a retail revolution that global brands can\'t afford to ignore.',
      stats: 'Amara Osei - Jan 23, 2026'
    },
    { 
      image: 'https://picsum.photos/seed/life3/600/400', 
      badge: 'HEALTH', 
      title: 'The Science Behind a Good Night\'s Sleep and Why It Matters',
      excerpt: 'New research confirms that quality sleep is the single most powerful tool for physical and mental recovery.',
      stats: 'Kwame Asante - Jan 19, 2026'
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 mb-12">
      <SectionHeader title="LIFESTYLE MAGAZINE" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {lifestyleCards.map((card, idx) => (
          <div key={idx} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/3]">
              <img src={card.image} alt={card.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
              <div className="absolute top-2 left-2">
                <span className="bg-brand-green text-white text-[10px] font-bold uppercase px-2 py-1 rounded-sm">
                  {card.badge}
                </span>
              </div>
            </div>
            <h3 className="font-bold text-lg mb-2 group-hover:text-brand-green transition-colors leading-snug">{card.title}</h3>
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">{card.excerpt}</p>
            <p className="text-xs text-gray-400 font-medium">{card.stats}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
