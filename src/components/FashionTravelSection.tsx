import SectionHeader from './SectionHeader';
import Card from './Card';

export default function FashionTravelSection() {
  const fashionCards = [
    { image: 'https://picsum.photos/seed/fash1/400/225', badge: 'TECHNOLOGY', title: 'Cybersecurity in 2025: Protecting the Digital World' },
    { image: 'https://picsum.photos/seed/fash2/400/225', badge: 'SPORTS', title: 'Rising Stars in African Football You Should Know' },
    { image: 'https://picsum.photos/seed/fash3/400/225', badge: 'BUSINESS', title: 'Central Banks and Inflation: What the Numbers Really Tell Us' },
  ];

  const travelCards = [
    { image: 'https://picsum.photos/seed/trav1/400/225', badge: 'TECHNOLOGY', title: 'How Open-Source Software Is Powering Innovation' },
    { image: 'https://picsum.photos/seed/trav2/400/225', badge: 'SPORTS', title: 'Tennis Grand Slams: The Road to the Year-End Finals' },
    { image: 'https://picsum.photos/seed/trav3/400/225', badge: 'BUSINESS', title: 'E-Commerce Growth in West Africa: Opportunities and Challenges' },
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
