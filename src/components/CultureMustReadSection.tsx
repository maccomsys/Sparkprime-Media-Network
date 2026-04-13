import SectionHeader from './SectionHeader';
import Card from './Card';

export default function CultureMustReadSection() {
  const cultureCards = [
    { image: 'https://picsum.photos/seed/culture1/400/225', badge: 'SPORTS', title: 'Athletics World Championships: Records Set to Fall' },
    { image: 'https://picsum.photos/seed/culture2/400/225', badge: 'SPORTS', title: 'Rising Stars in African Football You Should Know' },
    { image: 'https://picsum.photos/seed/culture3/400/225', badge: 'SPORTS', title: 'Women\'s Sport Is Booming — Here\'s the Data to Prove It' },
    { image: 'https://picsum.photos/seed/culture4/400/225', badge: 'SPORTS', title: 'Tennis Grand Slams: The Road to the Year-End Finals' },
  ];

  const mustReadCards = [
    { image: 'https://picsum.photos/seed/must1/400/225', badge: 'SPORTS', title: 'How Sports Science Is Giving Athletes a Winning Edge' },
    { image: 'https://picsum.photos/seed/must2/400/225', badge: 'BUSINESS', title: 'Africa\'s Startup Ecosystem Just Raised a Record $5 Billion' },
    { image: 'https://picsum.photos/seed/must3/400/225', badge: 'BUSINESS', title: 'How Remote Work Is Reshaping the Global Economy' },
    { image: 'https://picsum.photos/seed/must4/400/225', badge: 'BUSINESS', title: 'Green Energy Investments Hit an All-Time High in 2025' },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 mb-12">
      <div className="mb-12">
        <SectionHeader title="CULTURE" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cultureCards.map((card, idx) => (
            <Card key={idx} image={card.image} badge={card.badge} title={card.title} />
          ))}
        </div>
      </div>

      <div>
        <SectionHeader title="MUST READ" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mustReadCards.map((card, idx) => (
            <Card key={idx} image={card.image} badge={card.badge} title={card.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
