import { Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Col */}
          <div className="col-span-1">
            <div className="mb-4">
              <img src="https://i.ibb.co/dJKd8qBm/logo.png" alt="Spark Prime" className="h-12 md:h-16 w-auto" referrerPolicy="no-referrer" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your ultimate destination for news, entertainment, technology, lifestyle, and more. Stay informed, stay entertained, stay inspired with Spark Prime.
            </p>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-green transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Disclaimer</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Community Guidelines</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-green transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Report a Problem</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Advertise</a></li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="font-bold text-lg mb-4">Subscribe to Spark Prime</h3>
            <p className="text-sm text-gray-400 mb-4">Get the latest news, updates, and special offers delivered directly to your inbox.</p>
            <form className="space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-[#1A1A1A] border border-gray-800 rounded px-4 py-2 text-sm focus:outline-none focus:border-brand-green text-white"
              />
              <button className="w-full bg-brand-green text-white font-medium rounded px-4 py-2 text-sm hover:bg-opacity-90 transition-colors">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Spark Prime. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="h-5 w-5" /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Youtube className="h-5 w-5" /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
