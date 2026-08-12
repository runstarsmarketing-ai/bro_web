import React from 'react';
import { Check, Play, Award, Film, Smile, Clock } from 'lucide-react';
import { ABOUT_STATS, EDITOR_INFO } from '../data/portfolioData';

interface AboutProps {
  onOpenVideoModal: (videoUrl: string, title: string) => void;
}

export const About: React.FC<AboutProps> = ({ onOpenVideoModal }) => {
  const statIcons = [Clock, Film, Smile, Award];

  return (
    <section id="about" className="py-24 bg-black relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="text-zinc-400 text-xs font-mono font-bold tracking-widest uppercase mb-2">
              ABOUT SUNIL PAREEK
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Crafting Emotions Through Every Cut<span className="text-zinc-500">.</span>
            </h2>

            <p className="text-zinc-400 text-base leading-relaxed mb-8">
              {EDITOR_INFO.bio}
            </p>

            {/* Checklist items */}
            <div className="space-y-3.5 mb-8 w-full">
              <div className="flex items-center gap-3 bg-zinc-900/50 backdrop-blur-xl border border-white/10 p-3.5 rounded-2xl shadow-xl">
                <div className="w-7 h-7 rounded-lg bg-white/10 text-white flex items-center justify-center font-bold">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-zinc-200 text-sm font-semibold">{EDITOR_INFO.experienceYears} Years of Professional Experience</span>
              </div>

              <div className="flex items-center gap-3 bg-zinc-900/50 backdrop-blur-xl border border-white/10 p-3.5 rounded-2xl shadow-xl">
                <div className="w-7 h-7 rounded-lg bg-white/10 text-white flex items-center justify-center font-bold">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-zinc-200 text-sm font-semibold">{EDITOR_INFO.completedProjects} High Impact Projects Delivered</span>
              </div>

              <div className="flex items-center gap-3 bg-zinc-900/50 backdrop-blur-xl border border-white/10 p-3.5 rounded-2xl shadow-xl">
                <div className="w-7 h-7 rounded-lg bg-white/10 text-white flex items-center justify-center font-bold">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-zinc-200 text-sm font-semibold">{EDITOR_INFO.satisfactionRate} Client Satisfaction Rate</span>
              </div>
            </div>
          </div>

          {/* Right Video Workspace Graphic Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-zinc-900/50 backdrop-blur-2xl shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80"
                alt="Sunil Pareek Editing Studio Workspace"
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105 contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              {/* Play Button Overlay */}
              <button
                onClick={() =>
                  onOpenVideoModal(
                    'https://www.image2url.com/r2/default/videos/1786506675087-889095ef-9af2-48df-b3eb-a9697156aadb.mp4',
                    'Sunil Pareek - Studio Editing Showreel'
                  )
                }
                className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-white text-black flex items-center justify-center shadow-2xl shadow-white/30 hover:scale-110 transition-transform"
                title="Watch Studio Showreel"
              >
                <Play className="w-7 h-7 fill-current ml-1" />
              </button>

              <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-xl p-4 rounded-2xl border border-white/15 flex items-center justify-between shadow-2xl">
                <div>
                  <h4 className="text-white font-bold text-sm">Color Graded Studio Suite</h4>
                  <p className="text-xs text-zinc-400">Sunil Pareek Post-Production Station</p>
                </div>
                <span className="text-xs bg-white text-black px-3 py-1 rounded-lg font-bold shadow-md">
                  SHOWREEL
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {ABOUT_STATS.map((stat, idx) => {
            const Icon = statIcons[idx % statIcons.length];
            return (
              <div
                key={stat.label}
                className="bg-zinc-900/40 backdrop-blur-xl border border-white/10 p-6 rounded-2xl text-center hover:border-white/25 transition-colors shadow-2xl"
              >
                <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-white/10 text-white flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-3xl font-black text-white font-mono">{stat.value}</div>
                <div className="text-xs font-medium text-zinc-400 mt-1">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

