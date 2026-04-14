import { Link } from 'react-router-dom';
import SectionHeader from './SectionHeader';
import { PlayCircle } from 'lucide-react';

export default function VideoNewsSection() {
  const smallVideos = [
    { slug: 'mental-health-awareness-is-changing-workplace-culture', image: 'https://picsum.photos/seed/mental-health-workplace/300/200', title: 'Mental Health Awareness Is Changing Workplace Culture', duration: '5:50' },
    { slug: 'breakthrough-in-cancer-detection-ai-reads-scans-better-than-doctors', image: 'https://picsum.photos/seed/ai-cancer-scan/300/200', title: 'Breakthrough in Cancer Detection: AI Reads Scans Better Than Doctors', duration: '7:22' },
    { slug: 'the-mediterranean-diet-why-scientists-keep-coming-back-to-it', image: 'https://picsum.photos/seed/mediterranean-diet/300/200', title: 'The Mediterranean Diet: Why Scientists Keep Coming Back to It', duration: '8:30' },
    { slug: 'running-for-beginners-how-to-start-and-stay-consistent', image: 'https://picsum.photos/seed/running-shoes/300/200', title: 'Running for Beginners: How to Start and Stay Consistent', duration: '9:04' },
    { slug: 'african-prints-are-dominating-global-runways-in-2025', image: 'https://picsum.photos/seed/african-fashion/300/200', title: 'African Prints Are Dominating Global Runways in 2025', duration: '10:13' },
    { slug: 'sustainable-fashion-how-the-industry-is-going-green', image: 'https://picsum.photos/seed/sustainable-fashion/300/200', title: 'Sustainable Fashion: How the Industry Is Going Green', duration: '11:13' },
  ];

  return (
    <section className="bg-[#0f233f] py-12 mb-12">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader title="VIDEO NEWS" dark />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Video */}
          <Link to="/post/superfoods-separating-the-facts-from-the-marketing-hype" className="lg:col-span-2 relative group cursor-pointer overflow-hidden rounded-lg aspect-video block">
            <img src="https://picsum.photos/seed/superfoods-healthy/800/450" alt="Main Video" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
              <PlayCircle className="w-16 h-16 text-brand-secondary opacity-90 group-hover:scale-110 transition-transform" />
            </div>
            <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black/90 to-transparent">
              <span className="bg-brand-secondary text-white text-[10px] font-bold uppercase px-2 py-1 rounded-sm mb-3 inline-block">VIDEOS</span>
              <h3 className="text-white text-2xl font-bold leading-tight">Superfoods: Separating the Facts from the Marketing Hype</h3>
              <p className="text-gray-300 text-sm mt-2">10:45 • 1.2M views</p>
            </div>
          </Link>

          {/* Small Videos Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {smallVideos.map((vid, idx) => (
              <Link to={`/post/${vid.slug}`} key={idx} className="relative group cursor-pointer overflow-hidden rounded-lg aspect-video block">
                <img src={vid.image} alt={vid.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <PlayCircle className="w-8 h-8 text-brand-secondary" />
                </div>
                <div className="absolute bottom-1 right-1 bg-black/80 text-white text-[10px] px-1.5 py-0.5 rounded">
                  {vid.duration}
                </div>
                <div className="absolute bottom-0 left-0 p-2 w-full bg-gradient-to-t from-black/90 to-transparent">
                  <h4 className="text-white text-xs font-bold line-clamp-2 leading-tight">{vid.title}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
