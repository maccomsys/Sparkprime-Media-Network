import SectionHeader from './SectionHeader';

export default function HealthBusinessSection() {
  const healthItems = [
    { image: 'https://picsum.photos/seed/health1/100/100', badge: 'TECHNOLOGY', title: '5G Networks Are Transforming How We Connect', date: 'Apr 5, 2026' },
    { image: 'https://picsum.photos/seed/health2/100/100', badge: 'SPORTS', title: 'NBA Finals Preview: Breaking Down the Favourites', date: 'Mar 8, 2026' },
    { image: 'https://picsum.photos/seed/health3/100/100', badge: 'BUSINESS', title: 'How Remote Work Is Reshaping the Global Economy', date: 'Feb 8, 2026' },
    { image: 'https://picsum.photos/seed/health4/100/100', badge: 'HEALTH', title: 'The Science Behind a Good Night\'s Sleep and Why It Matters', date: 'Jan 19, 2026' },
  ];

  const businessItems = [
    { image: 'https://picsum.photos/seed/bus1/100/100', badge: 'TECHNOLOGY', title: 'Electric Vehicles and Their Impact on Smart Cities', date: 'Mar 24, 2026' },
    { image: 'https://picsum.photos/seed/bus2/100/100', badge: 'SPORTS', title: 'Women\'s Sport Is Booming — Here\'s the Data to Prove It', date: 'Feb 24, 2026' },
    { image: 'https://picsum.photos/seed/bus3/100/100', badge: 'BUSINESS', title: 'Africa\'s Startup Ecosystem Just Raised a Record $5 Billion', date: 'Feb 12, 2026' },
    { image: 'https://picsum.photos/seed/bus4/100/100', badge: 'BUSINESS', title: 'How Remote Work Is Reshaping the Global Economy', date: 'Feb 8, 2026' },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Health */}
        <div>
          <SectionHeader title="HEALTH" />
          <div className="space-y-4">
            {healthItems.map((item, idx) => (
              <div key={idx} className="flex gap-4 items-center group cursor-pointer">
                <img src={item.image} alt={item.title} className="w-24 h-16 rounded object-cover flex-shrink-0" referrerPolicy="no-referrer" />
                <div>
                  <span className="text-[10px] font-bold text-brand-green uppercase tracking-wider mb-1 block">{item.badge}</span>
                  <h4 className="font-bold text-sm mb-1 group-hover:text-brand-green transition-colors line-clamp-2 leading-snug">{item.title}</h4>
                  <p className="text-xs text-gray-500">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Business */}
        <div>
          <SectionHeader title="BUSINESS" />
          <div className="space-y-4">
            {businessItems.map((item, idx) => (
              <div key={idx} className="flex gap-4 items-center group cursor-pointer">
                <img src={item.image} alt={item.title} className="w-24 h-16 rounded object-cover flex-shrink-0" referrerPolicy="no-referrer" />
                <div>
                  <span className="text-[10px] font-bold text-brand-green uppercase tracking-wider mb-1 block">{item.badge}</span>
                  <h4 className="font-bold text-sm mb-1 group-hover:text-brand-green transition-colors line-clamp-2 leading-snug">{item.title}</h4>
                  <p className="text-xs text-gray-500">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
