import React, { useState } from 'react';
import { Play, Clock, ChevronRight } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { getAutoThumbnail } from '../utils/mediaUtils';

interface FeaturedWorkProps {
  onOpenVideoModal: (videoUrl: string, title: string) => void;
}

export const FeaturedWork: React.FC<FeaturedWorkProps> = ({ onOpenVideoModal }) => {
  const featuredProjects = PORTFOLIO_PROJECTS.filter((p) => p.featured || true).slice(0, 4);
  const [activeProject, setActiveProject] = useState<Project>(featuredProjects[0]);

  const getThumbnailUrl = (proj: Project) => {
    if (proj.thumbnail && proj.thumbnail.trim() !== '') {
      return proj.thumbnail;
    }
    return getAutoThumbnail(
      proj.videoUrl,
      'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80'
    );
  };

  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.currentTarget;
    if (target.src.includes('hqdefault.jpg')) {
      target.src = target.src.replace('hqdefault.jpg', 'mqdefault.jpg');
    } else if (target.src.includes('mqdefault.jpg')) {
      target.src = target.src.replace('mqdefault.jpg', '0.jpg');
    } else if (!target.src.includes('unsplash')) {
      target.src = 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80';
    }
  };

  return (
    <section className="py-24 bg-black relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="mb-12">
          <span className="text-zinc-400 text-xs font-mono font-bold tracking-widest uppercase mb-2 block">
            FEATURED WORK
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Projects That Define My Journey<span className="text-zinc-500">.</span>
          </h2>
        </div>

        {/* Layout: Big Main Display Left + Stack Selection Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Featured Video Card Left */}
          <div className="lg:col-span-8 bg-zinc-900/40 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden flex flex-col justify-between p-4 md:p-6 shadow-2xl relative group">
            <div
              className="relative aspect-video w-full rounded-2xl overflow-hidden cursor-pointer bg-zinc-950"
              onClick={() => onOpenVideoModal(activeProject.videoUrl, activeProject.title)}
            >
              <img
                src={getThumbnailUrl(activeProject)}
                alt={activeProject.title}
                referrerPolicy="no-referrer"
                onError={handleImgError}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              {/* Big Play Button Overlay */}
              <div className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-white text-black flex items-center justify-center shadow-2xl shadow-white/30 hover:scale-110 transition-transform">
                <Play className="w-7 h-7 fill-current ml-1" />
              </div>

              {/* Top Category Badge */}
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-xl border border-white/15 text-zinc-200 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider shadow-xl">
                {activeProject.categoryLabel}
              </div>

              {/* Bottom Info overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <h3 className="text-xl md:text-2xl font-black text-white">
                    {activeProject.title}
                  </h3>
                  <p className="text-zinc-300 text-xs md:text-sm mt-1 max-w-lg line-clamp-2">
                    {activeProject.description}
                  </p>
                </div>

                <div className="hidden sm:flex items-center gap-2 bg-black/80 backdrop-blur-xl px-3 py-1.5 rounded-lg text-xs font-mono text-zinc-300 border border-white/15">
                  <Clock className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{activeProject.duration}</span>
                </div>
              </div>
            </div>

            {/* Bottom Meta Bar */}
            <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between text-xs text-zinc-400 gap-2">
              <div className="flex items-center gap-2">
                <span className="text-zinc-500">Client:</span>
                <span className="text-zinc-200 font-semibold">{activeProject.client || 'Agency Partner'}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-zinc-500">Tools:</span>
                <div className="flex gap-1">
                  {activeProject.toolsUsed.map((tool) => (
                    <span key={tool} className="bg-white/5 border border-white/10 px-2 py-0.5 rounded text-[10px] text-zinc-300">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Stack Selection List */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-widest px-1">
              Select Featured Cut:
            </div>

            {featuredProjects.map((proj) => {
              const isSelected = activeProject.id === proj.id;
              return (
                <div
                  key={proj.id}
                  onClick={() => setActiveProject(proj)}
                  className={`p-3.5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center gap-3.5 ${
                    isSelected
                      ? 'bg-zinc-800/80 border-white/30 text-white shadow-2xl shadow-black backdrop-blur-xl'
                      : 'bg-zinc-900/40 border-white/10 text-zinc-400 hover:border-white/20 hover:bg-zinc-800/40 backdrop-blur-xl'
                  }`}
                >
                  <div className="relative w-20 h-14 rounded-xl overflow-hidden shrink-0 bg-zinc-950">
                    <img
                      src={getThumbnailUrl(proj)}
                      alt={proj.title}
                      referrerPolicy="no-referrer"
                      onError={handleImgError}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    {isSelected && (
                      <div className="absolute inset-0 bg-white/20 backdrop-blur-xs flex items-center justify-center">
                        <Play className="w-4 h-4 text-white fill-current" />
                      </div>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                      {proj.categoryLabel}
                    </div>
                    <h4 className="text-sm font-bold text-white truncate">{proj.title}</h4>
                    <span className="text-[11px] font-mono text-zinc-400">{proj.duration}</span>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-white translate-x-1' : 'text-zinc-600'
                    }`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

