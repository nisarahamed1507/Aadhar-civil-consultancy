import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import Logo from './icons/Logo';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'header-glass' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <Logo className="h-10 w-auto" />
            <span className="hidden text-lg font-bold tracking-[0.18em] text-[#263646] sm:block">AADHAR</span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`font-medium transition-colors cursor-pointer ${location.pathname === link.href
                    ? 'text-[#EC6630] border-b-2 border-[#EC6630]'
                    : 'text-[#415363] hover:text-[#EC6630]'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#263646] hover:text-[#EC6630] focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="header-glass md:hidden">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`font-medium ${location.pathname === link.href
                    ? 'text-[#EC6630]'
                    : 'text-[#415363] hover:text-[#EC6630]'
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
