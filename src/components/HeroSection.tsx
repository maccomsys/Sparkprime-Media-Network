import { Link } from 'react-router-dom';

export default function HeroSection() {
  const heroCards = [
    { id: 'ai-chips-are-redefining-the-future-of-computing', image: 'https://picsum.photos/seed/microchip/800/600', badge: 'TECHNOLOGY', title: 'AI Chips Are Redefining the Future of Computing' },
    { id: '5g-networks-are-transforming-how-we-connect', image: 'https://picsum.photos/seed/5g-network/800/600', badge: 'TECHNOLOGY', title: '5G Networks Are Transforming How We Connect' },
    { id: 'the-rise-of-quantum-computing-what-you-need-to-know', image: 'https://picsum.photos/seed/quantum-computer/800/600', badge: 'TECHNOLOGY', title: 'The Rise of Quantum Computing: What You Need to Know' },
    { id: 'cybersecurity-in-2025-protecting-the-digital-world', image: 'https://picsum.photos/seed/cybersecurity/800/600', badge: 'TECHNOLOGY', title: 'Cybersecurity in 2025: Protecting the Digital World' },
    { id: 'the-creator-economy-is-now-worth-over-250-billion', image: 'https://picsum.photos/seed/augmented-reality/800/600', badge: 'TECHNOLOGY', title: 'The Creator Economy Is Now Worth Over $250 Billion' }, // Updated to match post 5
  ];

  return (
    <section className="mb-12">
      {/* Breaking News Ticker */}
      <div className="bg-brand-primary text-white flex items-center text-sm">
        <div className="bg-brand-secondary font-bold px-4 py-2 uppercase tracking-wider whitespace-nowrap">
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
        <Link to={`/post/${heroCards[0].id}`} className="md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2 relative group cursor-pointer overflow-hidden aspect-video lg:aspect-auto block">
          <img src={heroCards[0].image} alt={heroCards[0].title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6">
            <span className="bg-brand-secondary text-white text-xs font-bold uppercase px-2 py-1 rounded-sm mb-3 inline-block">
              {heroCards[0].badge}
            </span>
            <h2 className="text-white text-2xl md:text-3xl font-bold leading-tight group-hover:text-brand-secondary transition-colors">
              {heroCards[0].title}
            </h2>
          </div>
        </Link>

        {/* Smaller Cards */}
        {heroCards.slice(1, 5).map((card, idx) => (
          <Link to={`/post/${card.id}`} key={idx} className="relative group cursor-pointer overflow-hidden aspect-video block">
            <img src={card.image} alt={card.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-4">
              <span className="bg-brand-secondary text-white text-[10px] font-bold uppercase px-2 py-1 rounded-sm mb-2 inline-block">
                {card.badge}
              </span>
              <h3 className="text-white text-sm md:text-base font-bold leading-snug group-hover:text-brand-secondary transition-colors">
                {card.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
