import React from 'react';
import { Smartphone, Zap, Sparkles, Send } from 'lucide-react';

interface SeamlessExperienceProps {
  onOpenContact: () => void;
}

export const SeamlessExperience: React.FC<SeamlessExperienceProps> = ({
  onOpenContact,
}) => {
  return (
    <section className="py-24 bg-black relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Device Mockup Canvas */}
          <div className="lg:col-span-6 relative">
            <div className="relative bg-zinc-900/40 backdrop-blur-2xl border border-white/10 p-6 rounded-3xl shadow-2xl overflow-hidden group">
              {/* Laptop Screen Graphic Mockup */}
              <div className="bg-black border border-white/10 rounded-2xl p-3 shadow-inner">
                <div className="flex items-center gap-1.5 mb-2 px-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="text-[10px] text-zinc-500 font-mono ml-2">editor.com/showcase</span>
                </div>
                <img
                  src="https://cdn.uploadtourl.com/8cdb6d74-7187-41d3-a225-f91b1f65119e_pccccccccccc.jfif"
                  alt="Editor on Laptop"
                  className="w-full aspect-video object-cover rounded-xl border border-white/10"
                />
              </div>

              {/* Floating Mobile Phone Graphic Overlay */}
              <div className="absolute -bottom-4 -right-2 w-36 sm:w-44 bg-zinc-950 border border-white/20 rounded-2xl p-2 shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-300">
                <div className="w-8 h-1 bg-zinc-700 rounded-full mx-auto mb-1.5" />
                <img
                  src="https://cdn.uploadtourl.com/92cf6de8-195e-4277-98ff-c03941d43669_bhaiuyaaaaaaaaaaa.jfif"
                  alt="Mobile Editor View"
                  className="w-full aspect-[9/16] object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Right Text Content & Features List */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="text-zinc-400 text-xs font-mono font-bold tracking-widest uppercase mb-2">
              LIFE IS SO COOL
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Seamless Experience Everywhere<span className="text-zinc-500">.</span>
            </h2>

            {/* Feature Pills */}
            <div className="space-y-4 mb-8 w-full">
              <div className="flex items-start gap-4 bg-zinc-900/40 backdrop-blur-2xl border border-white/10 p-4 rounded-2xl">
                <div className="p-2.5 rounded-xl bg-black border border-white/15 text-zinc-200 shrink-0">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Cinematic Storytelling</h4>
                  <p className="text-zinc-400 text-xs mt-0.5">Every cut, transition, and visual is crafted to keep your audience engaged from the first frame to the last.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-zinc-900/40 backdrop-blur-2xl border border-white/10 p-4 rounded-2xl">
                <div className="p-2.5 rounded-xl bg-black border border-white/15 text-zinc-200 shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Sharp Cuts & Smooth Motion</h4>
                  <p className="text-zinc-400 text-xs mt-0.5">Clean pacing, seamless transitions, motion graphics, and visual effects that make every edit feel polished.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-zinc-900/40 backdrop-blur-2xl border border-white/10 p-4 rounded-2xl">
                <div className="p-2.5 rounded-xl bg-black border border-white/15 text-zinc-200 shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Sound, Color & Detail</h4>
                  <p className="text-zinc-400 text-xs mt-0.5">Balanced sound design, cinematic color grading, and precise finishing touches that bring the final video to life.</p>
                </div>
              </div>
            </div>

            {/* Bottom Call to Action Sub-card */}
            <div className="w-full bg-zinc-900/60 backdrop-blur-2xl border border-white/15 p-6 rounded-3xl shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono text-zinc-400 font-bold tracking-widest uppercase">
                  READY TO START?
                </span>
                <h4 className="text-base font-bold text-white mt-0.5">
                  Let's Create Something <span className="text-zinc-300">Amazing</span> Together
                </h4>
              </div>

              <button
                onClick={onOpenContact}
                className="bg-white hover:bg-zinc-200 text-black px-6 py-2.5 rounded-xl text-xs font-bold shadow-xl shadow-white/10 hover:scale-105 transition-all shrink-0 flex items-center gap-2"
              >
                <Send className="w-3.5 h-3.5 text-black" />
                <span>Start a Project</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

