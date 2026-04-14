import { Link } from 'react-router-dom';
import SectionHeader from './SectionHeader';

export default function GamesStoreSection() {
  const games = [
    { slug: 'cyber-quest-2050', image: 'https://picsum.photos/seed/cyber-rpg-game/300/300', title: 'Cyber Quest 2050', category: 'RPG', rating: 4.8, price: 'FREE' },
    { slug: 'neon-riders', image: 'https://picsum.photos/seed/neon-racing-game/300/300', title: 'Neon Riders', category: 'Racing', rating: 3.9, price: '$7.99' },
    { slug: 'cosmic-legends', image: 'https://picsum.photos/seed/cosmic-strategy-game/300/300', title: 'Cosmic Legends', category: 'Strategy', rating: 4.0, price: '$10.99' },
    { slug: 'dragon-strike', image: 'https://picsum.photos/seed/dragon-action-game/300/300', title: 'Dragon Strike', category: 'Action', rating: 4.1, price: 'FREE' },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 mb-12">
      <SectionHeader title="GAMES STORE" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {games.map((game, idx) => (
          <Link to={`/post/${game.slug}`} key={idx} className="group cursor-pointer border border-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow block">
            <div className="relative aspect-square overflow-hidden">
              <img src={game.image} alt={game.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-sm mb-1 group-hover:text-brand-secondary transition-colors truncate">{game.title}</h3>
              <p className="text-xs text-gray-500 mb-2">{game.category}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-xs text-yellow-500">
                  <span>★ {game.rating}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-gray-900">{game.price}</span>
                  <button className="bg-brand-primary text-white text-xs font-bold px-3 py-1.5 rounded hover:bg-brand-secondary transition-colors">
                    GET
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
