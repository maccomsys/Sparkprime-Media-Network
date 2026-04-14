import { Link } from 'react-router-dom';
import SectionHeader from './SectionHeader';
import { PlayCircle } from 'lucide-react';

export default function LatestNewsSection() {
  const newsItems = [
    { id: '1', image: 'https://picsum.photos/seed/microchip/100/100', title: 'AI Chips Are Redefining the Future of Computing', date: 'Apr 9, 2026' },
    { id: '2', image: 'https://picsum.photos/seed/5g-network/100/100', title: '5G Networks Are Transforming How We Connect', date: 'Apr 5, 2026' },
    { id: '3', image: 'https://picsum.photos/seed/quantum-computer/100/100', title: 'The Rise of Quantum Computing: What You Need to Know', date: 'Apr 1, 2026' },
    { id: '4', image: 'https://picsum.photos/seed/cybersecurity/100/100', title: 'Cybersecurity in 2025: Protecting the Digital World', date: 'Mar 28, 2026' },
  ];

  const musicTracks = [
    { slug: 'golden-hour', image: 'https://picsum.photos/seed/golden-hour/50/50', title: 'Golden Hour', artist: 'Luna Ray', duration: '3:45' },
    { slug: 'city-of-stars', image: 'https://picsum.photos/seed/city-stars/50/50', title: 'City of Stars', artist: 'The Synthetics', duration: '4:12' },
    { slug: 'ocean-drive', image: 'https://picsum.photos/seed/ocean-drive/50/50', title: 'Ocean Drive', artist: 'Neon Collective', duration: '3:28' },
    { slug: 'afro-soul', image: 'https://picsum.photos/seed/afro-soul/50/50', title: 'Afro Soul', artist: 'Jazz Horizon', duration: '5:01' },
    { slug: 'midnight-groove', image: 'https://picsum.photos/seed/midnight-groove/50/50', title: 'Midnight Groove', artist: 'Luna Ray', duration: '4:15' },
    { slug: 'highlife-forever', image: 'https://picsum.photos/seed/highlife/50/50', title: 'Highlife Forever', artist: 'Neon Collective', duration: '3:55' },
    { slug: 'lagos-nights', image: 'https://picsum.photos/seed/lagos-nights/50/50', title: 'Lagos Nights', artist: 'Jazz Horizon', duration: '4:30' },
    { slug: 'broken-beautiful', image: 'https://picsum.photos/seed/broken-beautiful/50/50', title: 'Broken Beautiful', artist: 'Luna Ray', duration: '3:40' },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Latest News (Left - 2 cols) */}
        <div className="lg:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <SectionHeader title="LATEST NEWS" />
            <Link to="/archive" className="text-sm font-bold text-brand-secondary hover:text-brand-primary transition-colors">
              View All Posts &rarr;
            </Link>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <Link to={`/post/how-open-source-software-is-powering-innovation`} className="md:w-1/2 relative group cursor-pointer block">
              <img src="https://picsum.photos/seed/open-source-code/600/400" alt="Main News" className="w-full rounded-lg object-cover aspect-video" referrerPolicy="no-referrer" />
              <div className="absolute bottom-2 left-2">
                <span className="bg-brand-secondary text-white text-[10px] font-bold uppercase px-2 py-1 rounded-sm">TECHNOLOGY</span>
              </div>
            </Link>
            <div className="md:w-1/2 flex flex-col justify-center">
              <Link to={`/post/how-open-source-software-is-powering-innovation`}>
                <h3 className="text-2xl font-bold mb-3 hover:text-brand-secondary cursor-pointer transition-colors">How Open-Source Software Is Powering Innovation</h3>
              </Link>
              <p className="text-gray-600 text-sm mb-4">From Linux to TensorFlow, collaborative code is at the heart of the world's most transformative digital products.</p>
              <p className="text-xs text-gray-500">Amara Osei - Mar 20, 2026</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {newsItems.map((item, idx) => (
              <Link to={`/post/${item.id}`} key={idx} className="flex gap-4 items-center group cursor-pointer block">
                <img src={item.image} alt={item.title} className="w-20 h-20 rounded object-cover flex-shrink-0" referrerPolicy="no-referrer" />
                <div>
                  <h4 className="font-bold text-sm mb-1 group-hover:text-brand-secondary transition-colors line-clamp-2">{item.title}</h4>
                  <p className="text-xs text-gray-500">{item.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Music Widget (Right - 1 col) */}
        <div className="lg:col-span-1">
          <SectionHeader title="MUSIC" />
          
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
            <div className="space-y-3 mb-4">
              {musicTracks.map((track, idx) => (
                <Link to={`/post/${track.slug}`} key={idx} className="flex items-center justify-between group cursor-pointer p-2 hover:bg-white rounded transition-colors block">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <img src={track.image} alt={track.title} className="w-10 h-10 rounded-full object-cover" referrerPolicy="no-referrer" />
                      <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <PlayCircle className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm group-hover:text-brand-secondary transition-colors">{track.title}</h4>
                      <p className="text-xs text-gray-500">{track.artist}</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-400 font-medium">{track.duration}</span>
                </Link>
              ))}
            </div>
            <button className="w-full border-2 border-brand-secondary text-brand-secondary font-bold py-2 rounded hover:bg-brand-secondary hover:text-white transition-colors text-sm">
              Open Music Player
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
