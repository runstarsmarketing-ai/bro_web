import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

export const Testimonials: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-black relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-zinc-400 text-xs font-mono font-bold tracking-widest uppercase mb-2 block">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            What Clients Say<span className="text-zinc-500">.</span>
          </h2>
          <p className="mt-4 text-zinc-400 text-sm sm:text-base">
            Trusted by creators, founders, and directors worldwide. Here is what they have to say about working together.
          </p>
        </div>

        {/* Testimonials Grid Desktop & Carousel View */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={t.id}
              className={`bg-zinc-900/40 backdrop-blur-2xl border p-6 rounded-3xl transition-all duration-300 flex flex-col justify-between ${
                activeIdx === idx
                  ? 'border-white/40 shadow-2xl shadow-black scale-[1.02]'
                  : 'border-white/10 opacity-80 hover:opacity-100 hover:border-white/20'
              }`}
            >
              <div>
                {/* Star Rating */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-white/20 mb-2" />

                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed italic mb-6">
                  "{t.comment}"
                </p>
              </div>

              {/* Author Details */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border border-white/20"
                />
                <div>
                  <h4 className="text-white font-bold text-sm">{t.name}</h4>
                  <p className="text-zinc-400 text-xs">{t.role}, <span className="text-zinc-200">{t.company}</span></p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Dots Indicator */}
        <div className="mt-10 flex items-center justify-center gap-3">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full bg-zinc-900/80 text-zinc-400 hover:text-white border border-white/10"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className={`h-2.5 rounded-full transition-all ${
                  activeIdx === i ? 'w-8 bg-white' : 'w-2.5 bg-zinc-700'
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-2 rounded-full bg-zinc-900/80 text-zinc-400 hover:text-white border border-white/10"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

