import React from 'react';
import { Play, MessageSquare, Sparkles, Check } from 'lucide-react';
import { TimelineEditor } from './TimelineEditor';
import { DEFAULT_EDITOR_PHOTO } from '../utils/mediaUtils';
import { EDITOR_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const scrollToPortfolio = () => {
    const portfolio = document.getElementById('portfolio');
    if (portfolio) {
      portfolio.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-black">
      {/* Background ambient lighting glows - Glassy dark monochrome */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-white/[0.04] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-zinc-700/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Header + Editor PNG Photo Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12 lg:mb-16">
          
          {/* Left Column: Editor Portrait */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative order-2 lg:order-1">
            <div className="relative group w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[420px] rounded-3xl overflow-hidden p-2 bg-gradient-to-b from-white/10 via-zinc-900/60 to-black/90 border border-white/15 shadow-2xl shadow-black transition-all duration-500 hover:scale-[1.02] hover:border-white/30">
              
              {/* Backlight Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-zinc-500/10 to-transparent blur-2xl pointer-events-none" />

              {/* Editor Image */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#050505] flex items-center justify-center">
                <img
                  src={DEFAULT_EDITOR_PHOTO}
                  alt={EDITOR_INFO.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 contrast-[1.05] brightness-[1.02]"
                />
                
                {/* Bottom Gradient Overlay for typography legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                {/* Editor Title overlay bottom */}
                <div className="absolute bottom-4 left-4 right-4 text-center bg-black/80 backdrop-blur-xl border border-white/10 p-3 rounded-xl shadow-2xl">
                  <h3 className="text-white font-extrabold text-base tracking-tight flex items-center justify-center gap-1.5">
                    <span>{EDITOR_INFO.name}</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  </h3>
                  <p className="text-zinc-400 text-xs font-mono mt-0.5">{EDITOR_INFO.title}</p>
                </div>
              </div>

              {/* Floating Pill Badges around photo */}
              <div className="absolute -bottom-2 -left-4 bg-zinc-900/90 backdrop-blur-xl border border-white/15 text-zinc-200 px-3 py-1.5 rounded-full text-xs font-bold shadow-2xl flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-zinc-300" />
                <span>100+ Videos Cut</span>
              </div>

              <div className="absolute top-8 -left-5 bg-black/90 backdrop-blur-xl border border-white/15 text-emerald-400 px-3 py-1 rounded-full text-[11px] font-mono font-bold shadow-2xl hidden sm:flex items-center gap-1">
                <span>4K / LOG Ready</span>
              </div>
            </div>
          </div>

          {/* Right Column: Main Hero Headline & Tagline */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-2">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/80 border border-white/10 text-zinc-300 text-xs font-semibold mb-6 shadow-2xl backdrop-blur-xl">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>AVAILABLE FOR FREELANCE & FULL-TIME PROJECTS</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight uppercase leading-[1.08]">
              I CREATE{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-200 to-zinc-400 underline decoration-zinc-500/50 decoration-wavy decoration-2">
                STORIES THAT
              </span>{' '}
              CONNECT<span className="text-zinc-500">.</span>
            </h1>

            {/* Tagline */}
            <p className="mt-6 text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed font-normal">
              {EDITOR_INFO.bio}
            </p>

            {/* Key Skill Highlights */}
            <div className="mt-6 flex flex-wrap gap-2 justify-center lg:justify-start">
              <span className="bg-zinc-900/70 backdrop-blur-xl border border-white/10 text-zinc-300 px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-white" />
                <span>Cinematic Pacing</span>
              </span>
              <span className="bg-zinc-900/70 backdrop-blur-xl border border-white/10 text-zinc-300 px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-white" />
                <span>Custom Sound Design</span>
              </span>
              <span className="bg-zinc-900/70 backdrop-blur-xl border border-white/10 text-zinc-300 px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-white" />
                <span>Pro Color Grading</span>
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button
                onClick={scrollToPortfolio}
                className="bg-white hover:bg-zinc-200 text-black px-7 py-3.5 rounded-xl text-sm font-bold shadow-xl shadow-white/10 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Explore Portfolio</span>
              </button>

              <button
                onClick={onOpenContact}
                className="bg-zinc-900/80 hover:bg-zinc-800 text-white border border-white/15 px-7 py-3.5 rounded-xl text-sm font-bold backdrop-blur-xl transition-all hover:scale-105 active:scale-95 flex items-center gap-2 shadow-2xl"
              >
                <MessageSquare className="w-4 h-4 text-zinc-300" />
                <span>Let's Talk</span>
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Premiere Timeline Editor Showcase */}
        <div className="w-full mt-4">
          <TimelineEditor />
        </div>
      </div>
    </section>
  );
};

