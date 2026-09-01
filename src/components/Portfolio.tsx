import React, { useState, useEffect } from 'react';
import { Play, Clock, Sparkles, Plus, Trash2 } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';
import { Category, Project } from '../types';
import { AddProjectModal } from './AddProjectModal';
import { CUSTOM_PROJECTS_KEY, getAutoThumbnail } from '../utils/mediaUtils';

interface PortfolioProps {
  onOpenVideoModal: (videoUrl: string, title: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onOpenVideoModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [showAll, setShowAll] = useState(false);
  const [projectsList, setProjectsList] = useState<Project[]>(PORTFOLIO_PROJECTS);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Load custom projects from localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(CUSTOM_PROJECTS_KEY);
        if (saved) {
          const customProjs: Project[] = JSON.parse(saved);
          setProjectsList([...customProjs, ...PORTFOLIO_PROJECTS]);
        }
      } catch (err) {
        console.error('Failed to load custom projects', err);
      }
    }
  }, []);

  const handleAddProject = (newProject: Project) => {
    const updated = [newProject, ...projectsList];
    setProjectsList(updated);

    // Save only custom projects to localStorage
    const customOnly = updated.filter((p) => p.id.startsWith('custom-proj-'));
    localStorage.setItem(CUSTOM_PROJECTS_KEY, JSON.stringify(customOnly));
  };

  const handleDeleteCustomProject = (e: React.MouseEvent, projectId: string) => {
    e.stopPropagation();
    const updated = projectsList.filter((p) => p.id !== projectId);
    setProjectsList(updated);
    const customOnly = updated.filter((p) => p.id.startsWith('custom-proj-'));
    localStorage.setItem(CUSTOM_PROJECTS_KEY, JSON.stringify(customOnly));
  };

  const categories: Category[] = ['All', 'Long Videos', 'Reels', 'Podcast'];

  const filteredProjects = projectsList.filter((project) => {
    if (selectedCategory === 'All') return true;
    return project.category === selectedCategory;
  });

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 8);

  return (
    <section id="portfolio" className="py-24 bg-black relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-zinc-400 text-xs font-mono font-bold tracking-widest uppercase mb-2 block">
            PORTFOLIO SHOWCASE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Explore My Work<span className="text-zinc-500">.</span>
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base">
            Filter through my video editing work across commercial ads, short films, YouTube, social reels, and Instagram links.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-white text-black font-bold shadow-lg shadow-white/10 scale-105'
                  : 'bg-zinc-900/60 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-white/10 backdrop-blur-xl'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onOpenVideoModal(project.videoUrl, project.title)}
              className="group bg-zinc-900/40 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-300 hover:shadow-2xl hover:shadow-black hover:-translate-y-1.5 cursor-pointer flex flex-col relative"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-zinc-950">
                <img
                  src={
                    project.thumbnail && project.thumbnail.trim() !== ''
                      ? project.thumbnail
                      : getAutoThumbnail(
                          project.videoUrl,
                          'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80'
                        )
                  }
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src.includes('hqdefault.jpg')) {
                      target.src = target.src.replace('hqdefault.jpg', 'mqdefault.jpg');
                    } else if (target.src.includes('mqdefault.jpg')) {
                      target.src = target.src.replace('mqdefault.jpg', '0.jpg');
                    } else if (!target.src.includes('unsplash')) {
                      target.src = 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80';
                    }
                  }}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent group-hover:via-black/40 transition-colors" />

                {/* Category Badge Top Left */}
                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-xl border border-white/15 text-zinc-200 px-2.5 py-0.5 rounded-md text-[10px] font-bold tracking-wider uppercase shadow-md">
                  {project.categoryLabel}
                </div>

                {/* Delete button if custom added project */}
                {project.id.startsWith('custom-proj-') && (
                  <button
                    onClick={(e) => handleDeleteCustomProject(e, project.id)}
                    className="absolute top-3 right-3 bg-red-600/90 hover:bg-red-600 text-white p-1.5 rounded-md text-xs backdrop-blur-md transition z-20 shadow-lg"
                    title="Delete project"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                )}

                {/* Duration Badge Bottom Right */}
                <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-xl border border-white/10 text-zinc-300 px-2 py-0.5 rounded text-[11px] font-mono flex items-center gap-1">
                  <Clock className="w-3 h-3 text-zinc-400" />
                  <span>{project.duration}</span>
                </div>

                {/* Hover Play Icon Overlay */}
                <div className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100 shadow-2xl shadow-white/30">
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </div>
              </div>

              {/* Card Meta Info */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-white font-bold text-base group-hover:text-zinc-200 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-xs mt-1.5 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tools Used Pills */}
                <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap gap-1.5">
                  {project.toolsUsed.map((tool) => (
                    <span
                      key={tool}
                      className="text-[10px] bg-white/5 text-zinc-300 px-2 py-0.5 rounded border border-white/10"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        {filteredProjects.length > 8 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-white hover:bg-zinc-200 text-black px-8 py-3 rounded-xl text-xs font-bold transition-all shadow-xl shadow-white/10 hover:scale-105 active:scale-95 inline-flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>{showAll ? 'Show Fewer Projects' : 'View All Projects'}</span>
            </button>
          </div>
        )}
      </div>

      {/* Add Project Modal */}
      <AddProjectModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddProject={handleAddProject}
      />
    </section>
  );
};

