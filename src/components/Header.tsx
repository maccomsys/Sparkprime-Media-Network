import { Search, LogIn, UserPlus } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-[#0D0D0D] text-gray-400 text-xs py-1.5 px-4 flex justify-between items-center border-b border-gray-800">
        <div className="flex items-center space-x-4">
          <span>{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
        <div className="flex items-center space-x-3">
          <a href="#" className="hover:text-white transition-colors">Login</a>
          <span>|</span>
          <a href="#" className="hover:text-white transition-colors">Register</a>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-[#111111] text-white px-4 py-3 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src="https://i.ibb.co/dJKd8qBm/logo.png" alt="Spark Prime" className="h-12 md:h-16 w-auto" referrerPolicy="no-referrer" />
          </div>

          {/* Search */}
          <div className="flex-1 max-w-2xl relative">
            <input 
              type="text" 
              placeholder="Search Spark Prime Network..." 
              className="w-full bg-white text-gray-900 rounded-md py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green"
            />
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            <button className="flex items-center space-x-1 border border-brand-green text-brand-green px-4 py-2 rounded text-sm font-medium hover:bg-brand-green hover:text-white transition-colors">
              <LogIn className="h-4 w-4" />
              <span>Login</span>
            </button>
            <button className="flex items-center space-x-1 bg-brand-green text-white px-4 py-2 rounded text-sm font-medium hover:bg-opacity-90 transition-colors">
              <UserPlus className="h-4 w-4" />
              <span>Register</span>
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="max-w-7xl mx-auto mt-4 overflow-x-auto scrollbar-hide">
          <nav className="flex space-x-6 text-sm font-medium text-gray-300 pb-2 whitespace-nowrap">
            {['News', 'Entertainment', 'Technology', 'Sports', 'Business', 'Health', 'Fashion', 'Lifestyle', 'Vehicles', 'Travel', 'Videos', 'Music', 'Games', 'App Store', 'Affiliate'].map((cat) => (
              <a key={cat} href="#" className="hover:text-brand-green transition-colors uppercase tracking-wider text-xs">
                {cat}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
