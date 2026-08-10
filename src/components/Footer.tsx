import React from 'react';
import { Play, ArrowUp, Youtube, Instagram, Linkedin, Twitter, Video } from 'lucide-react';
import { EDITOR_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-black font-black">
                <Play className="w-4 h-4 fill-current ml-0.5 text-black" />
              </div>
              <span className="text-xl font-black text-white font-mono tracking-tight">
                SUNIL PAREEK<span className="text-zinc-500">.</span>
              </span>
            </a>
            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed mb-6">
              {EDITOR_INFO.bio}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {EDITOR_INFO.socialLinks?.youtube && (
                <a
                  href={EDITOR_INFO.socialLinks.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 hover:bg-zinc-800 flex items-center justify-center transition-all"
                  title="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              )}
              {EDITOR_INFO.socialLinks?.instagram && (
                <a
                  href={EDITOR_INFO.socialLinks.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 hover:bg-zinc-800 flex items-center justify-center transition-all"
                  title="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              )}
              {EDITOR_INFO.socialLinks?.linkedin && (
                <a
                  href={EDITOR_INFO.socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 hover:bg-zinc-800 flex items-center justify-center transition-all"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              {EDITOR_INFO.socialLinks?.twitter && (
                <a
                  href={EDITOR_INFO.socialLinks.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 hover:bg-zinc-800 flex items-center justify-center transition-all"
                  title="Twitter / X"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 font-mono">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#home" className="hover:text-white transition-colors">Home Timeline</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About & Bio</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio & Work</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Editing Process</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
            </ul>
          </div>

          {/* Services Quick List */}
          <div className="md:col-span-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 font-mono">
              Specialized Skills
            </h4>
            <ul className="space-y-2 text-xs">
              <li><span className="text-zinc-300">Adobe Premiere Pro & After Effects</span></li>
              <li><span className="text-zinc-300">DaVinci Resolve Color Grading</span></li>
              <li><span className="text-zinc-300">Viral Short-Form Reels & Shorts</span></li>
              <li><span className="text-zinc-300">Sound Design & Dynamic Audio Mixing</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs gap-4">
          <p>© {new Date().getFullYear()} {EDITOR_INFO.name}. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 bg-zinc-900 hover:bg-white text-zinc-300 hover:text-black px-4 py-2 rounded-xl border border-white/10 transition-all text-xs font-semibold"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

