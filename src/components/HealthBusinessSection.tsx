import { Link } from 'react-router-dom';
import SectionHeader from './SectionHeader';

export default function HealthBusinessSection() {
  const healthItems = [
    { id: '5g-networks-are-transforming-how-we-connect', image: 'https://picsum.photos/seed/5g-network/100/100', badge: 'TECHNOLOGY', title: '5G Networks Are Transforming How We Connect', date: 'Apr 5, 2026' },
    { id: 'nba-finals-preview-breaking-down-the-favourites', image: 'https://picsum.photos/seed/nba-basketball/100/100', badge: 'SPORTS', title: 'NBA Finals Preview: Breaking Down the Favourites', date: 'Mar 8, 2026' },
    { id: 'how-remote-work-is-reshaping-the-global-economy', image: 'https://picsum.photos/seed/remote-work/100/100', badge: 'BUSINESS', title: 'How Remote Work Is Reshaping the Global Economy', date: 'Feb 8, 2026' },
    { id: 'the-science-behind-a-good-nights-sleep-and-why-it-matters', image: 'https://picsum.photos/seed/sleep-science/100/100', badge: 'HEALTH', title: 'The Science Behind a Good Night\'s Sleep and Why It Matters', date: 'Jan 19, 2026' },
  ];

  const businessItems = [
    { id: 'sustainable-fashion-how-the-industry-is-going-green', image: 'https://picsum.photos/seed/sustainable-fashion/100/100', badge: 'FASHION', title: 'Sustainable Fashion: How the Industry Is Going Green', date: 'Feb 15, 2026' },
    { id: 'womens-sport-is-booming-heres-the-data-to-prove-it', image: 'https://picsum.photos/seed/womens-sports/100/100', badge: 'SPORTS', title: 'Women\'s Sport Is Booming — Here\'s the Data to Prove It', date: 'Feb 24, 2026' },
    { id: 'africas-startup-ecosystem-just-raised-a-record-5-billion', image: 'https://picsum.photos/seed/africa-startup/100/100', badge: 'BUSINESS', title: 'Africa\'s Startup Ecosystem Just Raised a Record $5 Billion', date: 'Feb 12, 2026' },
    { id: 'how-remote-work-is-reshaping-the-global-economy', image: 'https://picsum.photos/seed/remote-work/100/100', badge: 'BUSINESS', title: 'How Remote Work Is Reshaping the Global Economy', date: 'Feb 8, 2026' },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Health */}
        <div>
          <SectionHeader title="HEALTH" />
          <div className="space-y-4">
            {healthItems.map((item, idx) => (
              <Link to={`/post/${item.id}`} key={idx} className="flex gap-4 items-center group cursor-pointer block">
                <img src={item.image} alt={item.title} className="w-24 h-16 rounded object-cover flex-shrink-0" referrerPolicy="no-referrer" />
                <div>
                  <span className="text-[10px] font-bold text-brand-secondary uppercase tracking-wider mb-1 block">{item.badge}</span>
                  <h4 className="font-bold text-sm mb-1 group-hover:text-brand-secondary transition-colors line-clamp-2 leading-snug">{item.title}</h4>
                  <p className="text-xs text-gray-500">{item.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Business */}
        <div>
          <SectionHeader title="BUSINESS" />
          <div className="space-y-4">
            {businessItems.map((item, idx) => (
              <Link to={`/post/${item.id}`} key={idx} className="flex gap-4 items-center group cursor-pointer block">
                <img src={item.image} alt={item.title} className="w-24 h-16 rounded object-cover flex-shrink-0" referrerPolicy="no-referrer" />
                <div>
                  <span className="text-[10px] font-bold text-brand-secondary uppercase tracking-wider mb-1 block">{item.badge}</span>
                  <h4 className="font-bold text-sm mb-1 group-hover:text-brand-secondary transition-colors line-clamp-2 leading-snug">{item.title}</h4>
                  <p className="text-xs text-gray-500">{item.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
