import { Link } from 'react-router-dom';
import SectionHeader from './SectionHeader';
import Card from './Card';

export default function MusicSportSection() {
  const musicCards = [
    { slug: 'golden-hour', image: 'https://picsum.photos/seed/golden-hour/300/300', title: 'Golden Hour', artist: 'Luna Ray' },
    { slug: 'city-of-stars', image: 'https://picsum.photos/seed/city-stars/300/300', title: 'City of Stars', artist: 'The Synthetics' },
    { slug: 'ocean-drive', image: 'https://picsum.photos/seed/ocean-drive/300/300', title: 'Ocean Drive', artist: 'Neon Collective' },
    { slug: 'afro-soul', image: 'https://picsum.photos/seed/afro-soul/300/300', title: 'Afro Soul', artist: 'Jazz Horizon' },
  ];

  const sportCards = [
    { id: 'nba-finals-preview-breaking-down-the-favourites', image: 'https://picsum.photos/seed/nba-basketball/400/225', badge: 'SPORTS', title: 'NBA Finals Preview: Breaking Down the Favourites', author: 'Sarah Chen - Mar 8, 2026' },
    { id: 'athletics-world-championships-records-set-to-fall', image: 'https://picsum.photos/seed/athletics-track/400/225', badge: 'SPORTS', title: 'Athletics World Championships: Records Set to Fall', author: 'Marcus Johnson - Mar 4, 2026' },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Music (Left) */}
        <div>
          <SectionHeader title="MUSIC" />
          <div className="grid grid-cols-2 gap-4">
            {musicCards.map((card, idx) => (
              <Link to={`/post/${card.slug}`} key={idx} className="group cursor-pointer block">
                <div className="relative overflow-hidden rounded-lg mb-3 aspect-square">
                  <img src={card.image} alt={card.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
                </div>
                <h3 className="font-bold text-sm group-hover:text-brand-secondary transition-colors">{card.title}</h3>
                <p className="text-xs text-gray-500">{card.artist}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Sport News (Right) */}
        <div>
          <SectionHeader title="SPORT NEWS" />
          
          {/* Large Sport Card */}
          <Link to={`/post/champions-league-final-the-ultimate-showdown`} className="mb-6 relative group cursor-pointer overflow-hidden rounded-lg aspect-[2/1] block">
            <img src="https://picsum.photos/seed/champions-league/800/400" alt="Sport Main" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-4">
              <span className="bg-brand-secondary text-white text-[10px] font-bold uppercase px-2 py-1 rounded-sm mb-2 inline-block">SPORTS</span>
              <h3 className="text-white text-xl font-bold leading-tight group-hover:text-brand-secondary transition-colors">Champions League Final: The Ultimate Showdown</h3>
              <p className="text-gray-300 text-xs mt-1">Elena Rodriguez - Mar 28, 2026</p>
            </div>
          </Link>

          {/* Small Sport Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {sportCards.map((card, idx) => (
              <Link to={`/post/${card.id}`} key={idx} className="group cursor-pointer block">
                <div className="relative overflow-hidden rounded-lg mb-3 aspect-video">
                  <img src={card.image} alt={card.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
                  <div className="absolute bottom-2 left-2">
                    <span className="bg-brand-secondary text-white text-[10px] font-bold uppercase px-2 py-1 rounded-sm">{card.badge}</span>
                  </div>
                </div>
                <h3 className="font-bold text-sm leading-snug mb-1 group-hover:text-brand-secondary transition-colors line-clamp-2">{card.title}</h3>
                <p className="text-xs text-gray-500">{card.author}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
