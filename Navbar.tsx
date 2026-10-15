import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = ['Banner', 'About', 'Skills', 'Experience', 'Projects', 'Contact'];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-gray-200/50' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <a href="#" className="text-xl font-bold text-gray-900 tracking-tight">
          Prostil<span className="text-primary">.</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-gray-600 hover:text-primary font-medium transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 px-5 py-2 bg-primary text-white text-sm font-medium rounded-full hover:bg-primary-dark transition-all hover:shadow-lg hover:shadow-primary/25 active:scale-95"
          >
            Contact Me
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-gray-700 hover:text-primary transition-colors"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-fade-in">
          <div className="px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-gray-600 hover:text-primary font-medium py-2 transition-colors"
              >
                {link}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-full text-center hover:bg-primary-dark transition-all"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
