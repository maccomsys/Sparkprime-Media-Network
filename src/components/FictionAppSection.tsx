import { Link } from 'react-router-dom';
import SectionHeader from './SectionHeader';

export default function FictionAppSection() {
  const stories = [
    { slug: 'the-lost-kingdom-of-ashanti', letter: 'T', color: 'bg-teal-600', title: 'The Lost Kingdom of Ashanti', author: 'Kofi Mensah', chapters: '24 chapters', badge: 'FANTASY' },
    { slug: 'whispers-in-the-dark', letter: 'W', color: 'bg-emerald-600', title: 'Whispers in the Dark', author: 'Sarah Okafor', chapters: '13 chapters', badge: 'THRILLER' },
    { slug: 'love-beneath-the-baobab', letter: 'L', color: 'bg-green-500', title: 'Love Beneath the Baobab', author: 'Amara Diallo', chapters: '14 chapters', badge: 'ROMANCE' },
    { slug: 'silicon-dreams', letter: 'S', color: 'bg-emerald-500', title: 'Silicon Dreams', author: 'Daniel Asante', chapters: '15 chapters', badge: 'SCI-FI' },
    { slug: 'the-silent-river', letter: 'T', color: 'bg-teal-700', title: 'The Silent River', author: 'Aisha Owusu', chapters: '10 chapters', badge: 'DRAMA' },
  ];

  const apps = [
    { slug: 'protask-manager', image: 'https://picsum.photos/seed/task-manager-app/60/60', title: 'ProTask Manager', category: 'Productivity', rating: 3.9 },
    { slug: 'smartnotes-ai', image: 'https://picsum.photos/seed/smart-notes-app/60/60', title: 'SmartNotes AI', category: 'Productivity', rating: 4.0 },
    { slug: 'quickedit-photo', image: 'https://picsum.photos/seed/photo-edit-app/60/60', title: 'QuickEdit Photo', category: 'Photography', rating: 4.1 },
    { slug: 'easybudget', image: 'https://picsum.photos/seed/budget-finance-app/60/60', title: 'EasyBudget', category: 'Finance', rating: 4.2 },
    { slug: 'fittracker-pro', image: 'https://picsum.photos/seed/fitness-tracker-app/60/60', title: 'FitTracker Pro', category: 'Health & Fitness', rating: 4.3 },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Fiction Stories */}
        <div>
          <SectionHeader title="FICTION STORIES" />
          <div className="space-y-4">
            {stories.map((story, idx) => (
              <Link to={`/post/${story.slug}`} key={idx} className="flex items-center gap-4 group cursor-pointer p-2 hover:bg-gray-50 rounded-lg transition-colors block">
                <div className={`w-12 h-12 rounded flex items-center justify-center text-white font-bold text-xl flex-shrink-0 ${story.color}`}>
                  {story.letter}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold text-brand-secondary uppercase tracking-wider">{story.badge}</span>
                  </div>
                  <h3 className="font-bold text-sm group-hover:text-brand-secondary transition-colors">{story.title}</h3>
                  <p className="text-xs text-gray-500">by {story.author} • {story.chapters}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* App Store */}
        <div>
          <SectionHeader title="APP STORE" />
          <div className="space-y-4">
            {apps.map((app, idx) => (
              <Link to={`/post/${app.slug}`} key={idx} className="flex items-center justify-between group cursor-pointer p-2 hover:bg-gray-50 rounded-lg transition-colors border border-transparent hover:border-gray-100 block">
                <div className="flex items-center gap-4">
                  <img src={app.image} alt={app.title} className="w-12 h-12 rounded-xl object-cover shadow-sm" referrerPolicy="no-referrer" />
                  <div>
                    <h3 className="font-bold text-sm group-hover:text-brand-secondary transition-colors">{app.title}</h3>
                    <p className="text-xs text-gray-500">{app.category}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <div className="flex items-center text-xs text-yellow-500">
                    <span>★ {app.rating}</span>
                  </div>
                  <button className="bg-gray-100 text-gray-900 hover:bg-brand-primary hover:text-white text-xs font-bold px-4 py-1.5 rounded transition-colors">
                    GET
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
