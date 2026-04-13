import SectionHeader from './SectionHeader';
import { PlayCircle } from 'lucide-react';

export default function LatestNewsSection() {
  const newsItems = [
    { image: 'https://picsum.photos/seed/news1/100/100', title: 'AI Chips Are Redefining the Future of Computing', date: 'Apr 9, 2026' },
    { image: 'https://picsum.photos/seed/news2/100/100', title: '5G Networks Are Transforming How We Connect', date: 'Apr 5, 2026' },
    { image: 'https://picsum.photos/seed/news3/100/100', title: 'The Rise of Quantum Computing: What You Need to Know', date: 'Apr 1, 2026' },
    { image: 'https://picsum.photos/seed/news4/100/100', title: 'Cybersecurity in 2025: Protecting the Digital World', date: 'Mar 28, 2026' },
  ];

  const musicTracks = [
    { image: 'https://picsum.photos/seed/music1/50/50', title: 'Golden Hour', artist: 'Luna Ray', duration: '3:45' },
    { image: 'https://picsum.photos/seed/music2/50/50', title: 'City of Stars', artist: 'The Synthetics', duration: '4:12' },
    { image: 'https://picsum.photos/seed/music3/50/50', title: 'Ocean Drive', artist: 'Neon Collective', duration: '3:28' },
    { image: 'https://picsum.photos/seed/music4/50/50', title: 'Afro Soul', artist: 'Jazz Horizon', duration: '5:01' },
    { image: 'https://picsum.photos/seed/music5/50/50', title: 'Midnight Groove', artist: 'Luna Ray', duration: '4:15' },
    { image: 'https://picsum.photos/seed/music6/50/50', title: 'Highlife Forever', artist: 'Neon Collective', duration: '3:55' },
    { image: 'https://picsum.photos/seed/music7/50/50', title: 'Lagos Nights', artist: 'Jazz Horizon', duration: '4:30' },
    { image: 'https://picsum.photos/seed/music8/50/50', title: 'Broken Beautiful', artist: 'Luna Ray', duration: '3:40' },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Latest News (Left - 2 cols) */}
        <div className="lg:col-span-2">
          <SectionHeader title="LATEST NEWS" />
          
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <div className="md:w-1/2 relative group cursor-pointer">
              <img src="https://picsum.photos/seed/latestmain/600/400" alt="Main News" className="w-full rounded-lg object-cover aspect-video" referrerPolicy="no-referrer" />
              <div className="absolute bottom-2 left-2">
                <span className="bg-brand-green text-white text-[10px] font-bold uppercase px-2 py-1 rounded-sm">TECHNOLOGY</span>
              </div>
            </div>
            <div className="md:w-1/2 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-3 hover:text-brand-green cursor-pointer transition-colors">How Open-Source Software Is Powering Innovation</h3>
              <p className="text-gray-600 text-sm mb-4">From Linux to TensorFlow, collaborative code is at the heart of the world's most transformative digital products.</p>
              <p className="text-xs text-gray-500">Amara Osei - Mar 20, 2026</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {newsItems.map((item, idx) => (
              <div key={idx} className="flex gap-4 items-center group cursor-pointer">
                <img src={item.image} alt={item.title} className="w-20 h-20 rounded object-cover flex-shrink-0" referrerPolicy="no-referrer" />
                <div>
                  <h4 className="font-bold text-sm mb-1 group-hover:text-brand-green transition-colors line-clamp-2">{item.title}</h4>
                  <p className="text-xs text-gray-500">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Music Widget (Right - 1 col) */}
        <div className="lg:col-span-1">
          <SectionHeader title="MUSIC" />
          
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
            <div className="space-y-3 mb-4">
              {musicTracks.map((track, idx) => (
                <div key={idx} className="flex items-center justify-between group cursor-pointer p-2 hover:bg-white rounded transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <img src={track.image} alt={track.title} className="w-10 h-10 rounded-full object-cover" referrerPolicy="no-referrer" />
                      <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <PlayCircle className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm group-hover:text-brand-green transition-colors">{track.title}</h4>
                      <p className="text-xs text-gray-500">{track.artist}</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-400 font-medium">{track.duration}</span>
                </div>
              ))}
            </div>
            <button className="w-full border-2 border-brand-green text-brand-green font-bold py-2 rounded hover:bg-brand-green hover:text-white transition-colors text-sm">
              Open Music Player
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
