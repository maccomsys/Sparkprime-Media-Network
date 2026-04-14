import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, LogIn, UserPlus, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full relative">
      {/* Top Bar */}
      <div className="hidden sm:flex bg-[#0f233f] text-gray-300 text-xs py-1.5 px-4 justify-between items-center border-b border-[#2a528a]">
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
      <div className="bg-brand-primary text-white px-4 py-3 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 md:gap-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img src="https://i.ibb.co/dJKd8qBm/logo.png" alt="Spark Prime" className="h-12 md:h-16 w-auto" referrerPolicy="no-referrer" />
            </Link>
          </div>

          {/* Desktop Search */}
          <div className="hidden md:block flex-1 max-w-2xl relative">
            <input 
              type="text" 
              placeholder="Search Spark Prime Network..." 
              className="w-full bg-white text-gray-900 rounded-md py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-secondary"
            />
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3 flex-shrink-0">
            <Link to="/archive" className="text-sm font-medium hover:text-brand-secondary transition-colors mr-2">
              Archive
            </Link>
            <button className="flex items-center space-x-1 border border-brand-secondary text-brand-secondary px-4 py-2 rounded text-sm font-medium hover:bg-brand-secondary hover:text-white transition-colors">
              <LogIn className="h-4 w-4" />
              <span>Login</span>
            </button>
            <button className="flex items-center space-x-1 bg-brand-secondary text-white px-4 py-2 rounded text-sm font-medium hover:bg-opacity-90 transition-colors">
              <UserPlus className="h-4 w-4" />
              <span>Register</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2 hover:text-brand-secondary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-brand-primary border-t border-[#2a528a] p-4 flex flex-col gap-4 shadow-lg z-50">
            {/* Mobile Search */}
            <div className="relative w-full">
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full bg-white text-gray-900 rounded-md py-3 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-secondary"
              />
              <Search className="absolute left-3 top-3.5 h-4 w-4 text-gray-500" />
            </div>
            
            {/* Mobile Actions */}
            <div className="flex flex-col gap-3">
              <Link 
                to="/archive" 
                className="text-center text-sm font-medium hover:text-brand-secondary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Post Archive
              </Link>
              <button className="flex items-center justify-center space-x-2 border border-brand-secondary text-brand-secondary px-4 py-3 rounded text-sm font-medium hover:bg-brand-secondary hover:text-white transition-colors w-full">
                <LogIn className="h-4 w-4" />
                <span>Login</span>
              </button>
              <button className="flex items-center justify-center space-x-2 bg-brand-secondary text-white px-4 py-3 rounded text-sm font-medium hover:bg-opacity-90 transition-colors w-full">
                <UserPlus className="h-4 w-4" />
                <span>Register</span>
              </button>
            </div>
          </div>
        )}

        {/* Categories */}
        <div className="max-w-7xl mx-auto mt-4 overflow-x-auto scrollbar-hide">
          <nav className="flex space-x-6 text-sm font-medium text-gray-300 pb-2 whitespace-nowrap">
            {['News', 'Entertainment', 'Technology', 'Sports', 'Business', 'Health', 'Fashion', 'Lifestyle', 'Vehicles', 'Travel', 'Videos', 'Music', 'Games', 'App Store', 'Affiliate'].map((cat) => (
              <Link key={cat} to={`/category/${cat.toLowerCase()}`} className="hover:text-brand-secondary transition-colors uppercase tracking-wider text-xs">
                {cat}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
