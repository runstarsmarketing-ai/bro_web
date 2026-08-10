import React from 'react';
import { Compass, Scissors, Sliders, Send } from 'lucide-react';
import { PROCESS_STEPS } from '../data/portfolioData';

export const Process: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Compass: <Compass className="w-6 h-6" />,
    Scissors: <Scissors className="w-6 h-6" />,
    Sliders: <Sliders className="w-6 h-6" />,
    Send: <Send className="w-6 h-6" />,
  };

  return (
    <section id="process" className="py-24 bg-black relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-zinc-400 text-xs font-mono font-bold tracking-widest uppercase mb-2 block">
            MY WORK PROCESS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Turning Ideas Into Impact<span className="text-zinc-500">.</span>
          </h2>
          <p className="mt-4 text-zinc-400 text-sm sm:text-base">
            A structured, collaborative workflow designed to ensure every story achieves visual excellence from raw concept to final export.
          </p>
        </div>

        {/* 4 Process Step Cards Grid with Connecting Line */}
        <div className="relative">
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-y-6 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.number}
                className="bg-zinc-900/40 backdrop-blur-2xl border border-white/10 p-6 rounded-3xl hover:border-white/30 transition-all duration-300 hover:shadow-2xl hover:shadow-black hover:-translate-y-1 group flex flex-col items-center text-center"
              >
                {/* Step Number Circle */}
                <div className="relative mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-black border border-white/15 text-zinc-200 flex items-center justify-center font-bold shadow-xl group-hover:bg-white group-hover:text-black transition-all duration-300">
                    {iconMap[step.iconName]}
                  </div>
                  <span className="absolute -top-3 -right-3 bg-white text-black font-mono text-[10px] font-extrabold px-2 py-0.5 rounded-full border border-white/30 shadow-md">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-zinc-200 transition-colors">
                  {step.title}
                </h3>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

