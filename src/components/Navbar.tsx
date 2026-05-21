import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ activeSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0f]/90 backdrop-blur-md border-b border-white/5 py-3' : 'py-5'
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <button onClick={() => scrollTo('home')} className="text-xl font-bold tracking-tight">
          <span className="text-[#38bdf8]">Ummay</span>
          <span className="text-white">Sahara</span>
          <span className="text-[#38bdf8]">.</span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`text-sm font-medium transition-colors duration-200 relative group ${activeSection === link.id ? 'text-[#38bdf8]' : 'text-gray-400 hover:text-white'
                }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-[#38bdf8] transition-all duration-300 ${activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
              />
            </button>
          ))}
          <button
            onClick={() => scrollTo('contact')}
            className="ml-2 px-4 py-2 text-sm font-semibold rounded-lg bg-[#38bdf8]/10 border border-[#38bdf8]/30 text-[#38bdf8] hover:bg-[#38bdf8]/20 transition-all duration-200"
          >
            Hire Me
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden mt-2 mx-4 rounded-xl bg-[#111118] border border-white/10 p-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${activeSection === link.id
                  ? 'text-[#38bdf8] bg-[#38bdf8]/10'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
