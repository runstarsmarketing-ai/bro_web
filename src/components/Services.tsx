import React from 'react';
import { Video, Palette, Sparkles, Volume2, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

interface ServicesProps {
  onOpenContact: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenContact }) => {
  const iconMap: Record<string, React.ReactNode> = {
    Video: <Video className="w-6 h-6" />,
    Palette: <Palette className="w-6 h-6" />,
    Sparkles: <Sparkles className="w-6 h-6" />,
    Volume2: <Volume2 className="w-6 h-6" />,
  };

  return (
    <section id="services" className="py-24 bg-black relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-zinc-400 text-xs font-mono font-bold tracking-widest uppercase mb-2 block">
            SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            What I Can Do For You<span className="text-zinc-500">.</span>
          </h2>
          <p className="mt-4 text-zinc-400 text-sm sm:text-base">
            Comprehensive post-production video editing services tailored for content creators, commercial brands, agencies, and narrative filmmakers.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-zinc-900/40 backdrop-blur-2xl border border-white/10 p-6 rounded-3xl hover:border-white/30 transition-all duration-300 hover:shadow-2xl hover:shadow-black hover:-translate-y-1.5 flex flex-col justify-between group"
            >
              <div>
                {/* Glow Icon */}
                <div className="w-12 h-12 rounded-2xl bg-black border border-white/15 text-zinc-200 flex items-center justify-center mb-5 group-hover:bg-white group-hover:text-black transition-all duration-300 shadow-xl">
                  {iconMap[service.iconName]}
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zinc-200 transition-colors">
                  {service.title}
                </h3>

                <p className="text-zinc-400 text-xs leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Feature Bullet List */}
                <div className="space-y-2 pt-4 border-t border-white/10">
                  {service.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-[11px] text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={onOpenContact}
                className="mt-6 w-full py-2.5 rounded-xl bg-white/5 hover:bg-white text-zinc-300 hover:text-black border border-white/10 text-xs font-bold transition-all"
              >
                Inquire Service
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

