import React, { useState, useEffect } from 'react';
import { Menu, X, Play, Send } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenContact,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'portfolio', 'process', 'services', 'testimonials', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Portfolio', href: '#portfolio', id: 'portfolio' },
    { label: 'Process', href: '#process', id: 'process' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Testimonials', href: '#testimonials', id: 'testimonials' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-2xl shadow-black'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo - SUNIL PAREEK */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-9 h-9 rounded-xl bg-white text-black flex items-center justify-center font-black text-lg shadow-lg shadow-white/10 group-hover:scale-105 transition-transform">
            <Play className="w-4 h-4 fill-current ml-0.5" />
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-black tracking-wider text-white font-mono uppercase">
              SUNIL PAREEK<span className="text-zinc-500 font-normal">.</span>
            </span>
            <span className="text-[9px] font-mono tracking-widest text-zinc-400 uppercase">
              VIDEO EDITOR
            </span>
          </div>
        </a>

        {/* Desktop Navigation Menu - Glass Pill */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-900/60 backdrop-blur-xl px-4 py-1.5 rounded-full border border-white/10 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                activeSection === link.id
                  ? 'bg-white text-black font-bold shadow-md shadow-white/20'
                  : 'text-zinc-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions Section */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenContact}
            className="bg-white hover:bg-zinc-200 text-black px-5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-lg shadow-white/10 hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Let's Work Together</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-zinc-900/80 border border-white/10 text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-zinc-300" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-black/95 backdrop-blur-2xl border-b border-white/10 py-6 px-6 shadow-2xl flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-between transition-all ${
                  activeSection === link.id
                    ? 'bg-white/15 text-white border border-white/20'
                    : 'text-zinc-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                <span>{link.label}</span>
                <span className="text-zinc-500 text-xs font-mono">0{navLinks.indexOf(link) + 1}</span>
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full bg-white hover:bg-zinc-200 text-black py-3.5 rounded-xl text-sm font-bold shadow-lg shadow-white/10 flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Let's Work Together</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

