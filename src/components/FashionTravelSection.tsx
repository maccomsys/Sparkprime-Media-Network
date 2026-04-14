import SectionHeader from './SectionHeader';
import Card from './Card';

export default function FashionTravelSection() {
  const fashionCards = [
    { id: 'sustainable-fashion-how-the-industry-is-going-green', image: 'https://picsum.photos/seed/sustainable-fashion/400/225', badge: 'FASHION', title: 'Sustainable Fashion: How the Industry Is Going Green' },
    { id: 'african-prints-are-dominating-global-runways-in-2025', image: 'https://picsum.photos/seed/african-prints/400/225', badge: 'FASHION', title: 'African Prints Are Dominating Global Runways in 2025' },
    { id: 'streetwear-trends-what-to-expect-this-season', image: 'https://picsum.photos/seed/streetwear-trends/400/225', badge: 'FASHION', title: 'Streetwear Trends: What to Expect This Season' },
  ];

  const travelCards = [
    { id: '10-hidden-beaches-you-need-to-visit-before-they-are-famous', image: 'https://picsum.photos/seed/hidden-beaches/400/225', badge: 'TRAVEL', title: '10 Hidden Beaches You Need to Visit Before They Are Famous' },
    { id: 'a-backpackers-guide-to-exploring-kyoto-on-a-budget', image: 'https://picsum.photos/seed/kyoto-japan/400/225', badge: 'TRAVEL', title: 'A Backpacker\'s Guide to Exploring Kyoto on a Budget' },
    { id: 'the-ultimate-safari-experience-kenyas-maasai-mara', image: 'https://picsum.photos/seed/safari-kenya/400/225', badge: 'TRAVEL', title: 'The Ultimate Safari Experience: Kenya\'s Maasai Mara' },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Fashion */}
        <div>
          <SectionHeader title="FASHION" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* First card spans full width on small screens, half on larger */}
            <div className="sm:col-span-2">
              <Card {...fashionCards[0]} titleClassName="text-lg" />
            </div>
            <Card {...fashionCards[1]} />
            <Card {...fashionCards[2]} />
          </div>
        </div>

        {/* Travel */}
        <div>
          <SectionHeader title="TRAVEL" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="sm:col-span-2">
              <Card {...travelCards[0]} titleClassName="text-lg" />
            </div>
            <Card {...travelCards[1]} />
            <Card {...travelCards[2]} />
          </div>
        </div>
      </div>
    </section>
  );
}
