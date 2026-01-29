'use client';

import { Phone, Mail, Facebook, Twitter, Linkedin, Youtube, Instagram, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    // Only add scroll listener on home page
    if (isHomePage) {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      // On other pages, header is always with background
      setIsScrolled(true);
    }
  }, [isHomePage]);

  // Header style based on page and scroll
  const topBarClass = 'bg-[#7c3aed] text-white';

  const navClass = isHomePage && !isScrolled 
    ? 'bg-transparent text-white border-b border-white/10' 
    : 'bg-white text-gray-800 shadow-md';

  const navLinkClass = isHomePage && !isScrolled
    ? 'text-white hover:text-[#7c3aed]'
    : 'text-gray-700 hover:text-[#7c3aed]';

  const mobileNavClass = isHomePage && !isScrolled
    ? 'border-white/10'
    : 'border-gray-200';

  const logoColor = isHomePage && !isScrolled 
    ? 'text-white' 
    : 'text-[#7c3aed]';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      {/* Top Bar */}
      <div className={`block py-2 sm:py-2.5 px-4 transition-all duration-300 ${topBarClass}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2 sm:gap-6 text-xs sm:text-sm">
            <a href="tel:+919560031319" className="flex items-center gap-1 sm:gap-2 hover:opacity-80 transition-opacity">
              <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">+91 - 9560031319</span>
              <span className="sm:hidden">+91 9560031319</span>
            </a>
            <a href="mailto:info.niveshsarthi@gmail.com" className="hidden md:flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail className="w-4 h-4" />
              <span>info.niveshsarthi@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <span className="text-xs sm:text-sm font-medium">Growth Utsav</span>
            <div className="flex items-center gap-2 sm:gap-3">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Facebook className="w-3 h-3 sm:w-4 sm:h-4" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Twitter className="w-3 h-3 sm:w-4 sm:h-4" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Linkedin className="w-3 h-3 sm:w-4 sm:h-4" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Youtube className="w-3 h-3 sm:w-4 sm:h-4" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Instagram className="w-3 h-3 sm:w-4 sm:h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`py-3 sm:py-4 px-4 transition-all duration-300 ${navClass}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <Link href="/" className="flex items-center gap-2 sm:gap-3">
            <div className={`w-10 h-10 sm:w-12 sm:h-12 ${isHomePage && !isScrolled ? 'bg-white/20 border border-white/30' : 'bg-[#7c3aed]'} rounded-lg flex items-center justify-center flex-shrink-0`}>
              <svg className={`w-6 h-6 sm:w-8 sm:h-8 ${isHomePage && !isScrolled ? 'text-white' : 'text-white'}`} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 2.18l8 4v8.82c0 4.52-3.07 8.74-7 9.75V4.18z"/>
              </svg>
            </div>
            <div className="min-w-0">
              <h1 className={`text-sm sm:text-xl font-bold leading-tight truncate ${logoColor}`}>
                Nivesh Sarthi
              </h1>
              <p className={`text-xs sm:text-xs ${isHomePage && !isScrolled ? 'text-gray-300' : 'text-gray-600'} truncate`}>
                Real Estate in Real Sense
              </p>
            </div>
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-black/5 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <ul className="hidden md:flex items-center gap-6 lg:gap-8">
            <li>
              <Link 
                href="/" 
                className={`${pathname === '/' ? 'text-[#7c3aed] font-medium' : navLinkClass} transition-colors text-sm`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className={`${pathname === '/about' ? 'text-[#7c3aed] font-medium' : navLinkClass} transition-colors text-sm`}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link 
                href="/properties" 
                className={`${pathname === '/properties' ? 'text-[#7c3aed] font-medium' : navLinkClass} transition-colors text-sm`}
              >
                Properties
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className={`${pathname === '/contact' ? 'text-[#7c3aed] font-medium' : navLinkClass} transition-colors text-sm`}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden mt-4 pb-4 border-t pt-4 transition-all duration-300 ${mobileNavClass}`}>
            <ul className="flex flex-col gap-4">
              <li>
                <Link 
                  href="/" 
                  className={`${pathname === '/' ? 'text-[#7c3aed] font-medium' : navLinkClass} transition-colors block py-2`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className={`${pathname === '/about' ? 'text-[#7c3aed] font-medium' : navLinkClass} transition-colors block py-2`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/properties" 
                  className={`${pathname === '/properties' ? 'text-[#7c3aed] font-medium' : navLinkClass} transition-colors block py-2`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Properties
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className={`${pathname === '/contact' ? 'text-[#7c3aed] font-medium' : navLinkClass} transition-colors block py-2`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}