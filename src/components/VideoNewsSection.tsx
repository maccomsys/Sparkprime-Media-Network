import SectionHeader from './SectionHeader';
import { PlayCircle } from 'lucide-react';

export default function VideoNewsSection() {
  const smallVideos = [
    { image: 'https://picsum.photos/seed/vid2/300/200', title: 'Mental Health Awareness Is Changing Workplace Culture', duration: '5:50' },
    { image: 'https://picsum.photos/seed/vid3/300/200', title: 'Breakthrough in Cancer Detection: AI Reads Scans Better Than Doctors', duration: '7:22' },
    { image: 'https://picsum.photos/seed/vid4/300/200', title: 'The Mediterranean Diet: Why Scientists Keep Coming Back to It', duration: '8:30' },
    { image: 'https://picsum.photos/seed/vid5/300/200', title: 'Running for Beginners: How to Start and Stay Consistent', duration: '9:04' },
    { image: 'https://picsum.photos/seed/vid6/300/200', title: 'African Prints Are Dominating Global Runways in 2025', duration: '10:13' },
    { image: 'https://picsum.photos/seed/vid7/300/200', title: 'Sustainable Fashion: How the Industry Is Going Green', duration: '11:13' },
  ];

  return (
    <section className="bg-[#0D0D0D] py-12 mb-12">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader title="VIDEO NEWS" dark />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Video */}
          <div className="lg:col-span-2 relative group cursor-pointer overflow-hidden rounded-lg aspect-video">
            <img src="https://picsum.photos/seed/vid1/800/450" alt="Main Video" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
              <PlayCircle className="w-16 h-16 text-brand-green opacity-90 group-hover:scale-110 transition-transform" />
            </div>
            <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black/90 to-transparent">
              <span className="bg-brand-green text-white text-[10px] font-bold uppercase px-2 py-1 rounded-sm mb-3 inline-block">VIDEOS</span>
              <h3 className="text-white text-2xl font-bold leading-tight">Superfoods: Separating the Facts from the Marketing Hype</h3>
              <p className="text-gray-300 text-sm mt-2">10:45 • 1.2M views</p>
            </div>
          </div>

          {/* Small Videos Grid */}
          <div className="grid grid-cols-2 gap-4">
            {smallVideos.map((vid, idx) => (
              <div key={idx} className="relative group cursor-pointer overflow-hidden rounded-lg aspect-video">
                <img src={vid.image} alt={vid.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <PlayCircle className="w-8 h-8 text-brand-green" />
                </div>
                <div className="absolute bottom-1 right-1 bg-black/80 text-white text-[10px] px-1.5 py-0.5 rounded">
                  {vid.duration}
                </div>
                <div className="absolute bottom-0 left-0 p-2 w-full bg-gradient-to-t from-black/90 to-transparent">
                  <h4 className="text-white text-xs font-bold line-clamp-2 leading-tight">{vid.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
