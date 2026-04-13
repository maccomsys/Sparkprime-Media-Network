import SectionHeader from './SectionHeader';
import Card from './Card';

export default function MusicSportSection() {
  const musicCards = [
    { image: 'https://picsum.photos/seed/mus1/300/300', title: 'Golden Hour', artist: 'Luna Ray' },
    { image: 'https://picsum.photos/seed/mus2/300/300', title: 'City of Stars', artist: 'The Synthetics' },
    { image: 'https://picsum.photos/seed/mus3/300/300', title: 'Ocean Drive', artist: 'Neon Collective' },
    { image: 'https://picsum.photos/seed/mus4/300/300', title: 'Afro Soul', artist: 'Jazz Horizon' },
  ];

  const sportCards = [
    { image: 'https://picsum.photos/seed/sport2/400/225', badge: 'SPORTS', title: 'NBA Finals Preview: Breaking Down the Favourites', author: 'Sarah Chen - Mar 8, 2026' },
    { image: 'https://picsum.photos/seed/sport3/400/225', badge: 'SPORTS', title: 'Athletics World Championships: Records Set to Fall', author: 'Marcus Johnson - Mar 4, 2026' },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Music (Left) */}
        <div>
          <SectionHeader title="MUSIC" />
          <div className="grid grid-cols-2 gap-4">
            {musicCards.map((card, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-3 aspect-square">
                  <img src={card.image} alt={card.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
                </div>
                <h3 className="font-bold text-sm group-hover:text-brand-green transition-colors">{card.title}</h3>
                <p className="text-xs text-gray-500">{card.artist}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sport News (Right) */}
        <div>
          <SectionHeader title="SPORT NEWS" />
          
          {/* Large Sport Card */}
          <div className="mb-6 relative group cursor-pointer overflow-hidden rounded-lg aspect-[2/1]">
            <img src="https://picsum.photos/seed/sport1/800/400" alt="Sport Main" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-4">
              <span className="bg-brand-green text-white text-[10px] font-bold uppercase px-2 py-1 rounded-sm mb-2 inline-block">TECHNOLOGY</span>
              <h3 className="text-white text-xl font-bold leading-tight group-hover:text-brand-green transition-colors">Cybersecurity in 2025: Protecting the Digital World</h3>
              <p className="text-gray-300 text-xs mt-1">Elena Rodriguez - Mar 28, 2026</p>
            </div>
          </div>

          {/* Small Sport Cards */}
          <div className="grid grid-cols-2 gap-4">
            {sportCards.map((card, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-3 aspect-video">
                  <img src={card.image} alt={card.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
                  <div className="absolute bottom-2 left-2">
                    <span className="bg-brand-green text-white text-[10px] font-bold uppercase px-2 py-1 rounded-sm">{card.badge}</span>
                  </div>
                </div>
                <h3 className="font-bold text-sm leading-snug mb-1 group-hover:text-brand-green transition-colors line-clamp-2">{card.title}</h3>
                <p className="text-xs text-gray-500">{card.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
