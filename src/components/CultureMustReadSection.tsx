import SectionHeader from './SectionHeader';
import Card from './Card';

export default function CultureMustReadSection() {
  const cultureCards = [
    { id: 'the-renaissance-of-contemporary-african-art', image: 'https://picsum.photos/seed/art-gallery/400/225', badge: 'CULTURE', title: 'The Renaissance of Contemporary African Art' },
    { id: 'indie-film-festivals-where-the-next-big-directors-are-found', image: 'https://picsum.photos/seed/film-festival/400/225', badge: 'CULTURE', title: 'Indie Film Festivals: Where the Next Big Directors Are Found' },
    { id: 'exploring-the-rich-culinary-history-of-the-mediterranean', image: 'https://picsum.photos/seed/culinary-history/400/225', badge: 'CULTURE', title: 'Exploring the Rich Culinary History of the Mediterranean' },
    { id: 'the-evolution-of-electronic-music-over-three-decades', image: 'https://picsum.photos/seed/music-evolution/400/225', badge: 'CULTURE', title: 'The Evolution of Electronic Music Over Three Decades' },
  ];

  const mustReadCards = [
    { id: 'how-sports-science-is-giving-athletes-a-winning-edge', image: 'https://picsum.photos/seed/sports-science/400/225', badge: 'SPORTS', title: 'How Sports Science Is Giving Athletes a Winning Edge' },
    { id: 'africas-startup-ecosystem-just-raised-a-record-5-billion', image: 'https://picsum.photos/seed/africa-startup/400/225', badge: 'BUSINESS', title: 'Africa\'s Startup Ecosystem Just Raised a Record $5 Billion' },
    { id: 'how-remote-work-is-reshaping-the-global-economy', image: 'https://picsum.photos/seed/remote-work/400/225', badge: 'BUSINESS', title: 'How Remote Work Is Reshaping the Global Economy' },
    { id: 'green-energy-investments-hit-an-all-time-high-in-2025', image: 'https://picsum.photos/seed/green-energy/400/225', badge: 'BUSINESS', title: 'Green Energy Investments Hit an All-Time High in 2025' },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 mb-12">
      <div className="mb-12">
        <SectionHeader title="CULTURE" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cultureCards.map((card, idx) => (
            <div key={idx}>
              <Card id={card.id} image={card.image} badge={card.badge} title={card.title} />
            </div>
          ))}
        </div>
      </div>

      <div>
        <SectionHeader title="MUST READ" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mustReadCards.map((card, idx) => (
            <div key={idx}>
              <Card id={card.id} image={card.image} badge={card.badge} title={card.title} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
