import React from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare } from 'lucide-react';
import { EDITOR_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenContactModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenContactModal }) => {
  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-zinc-900/40 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column Text */}
            <div className="lg:col-span-7">
              <span className="text-zinc-400 text-xs font-mono font-bold tracking-widest uppercase mb-2 block">
                LET'S CONNECT
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Have a Project in Mind?<br />
                <span className="text-zinc-400">
                  Let's Work Together.
                </span>
              </h2>
              <p className="mt-4 text-zinc-400 text-base max-w-xl">
                Whether you need a high-converting commercial ad, viral reel, YouTube polish, or full post-production for your film, I'm here to bring your vision to life.
              </p>

              {/* Direct Contact Cards */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-black/60 border border-white/10 p-4 rounded-2xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-white flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] text-zinc-500 font-mono uppercase">Phone</div>
                    <a href={`tel:${EDITOR_INFO.phone}`} className="text-xs font-bold text-white hover:text-zinc-300 truncate block">
                      {EDITOR_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="bg-black/60 border border-white/10 p-4 rounded-2xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-white flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] text-zinc-500 font-mono uppercase">Email</div>
                    <a href={`mailto:${EDITOR_INFO.email}`} className="text-xs font-bold text-white hover:text-zinc-300 truncate block">
                      {EDITOR_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="bg-black/60 border border-white/10 p-4 rounded-2xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] text-zinc-500 font-mono uppercase">Location</div>
                    <span className="text-xs font-bold text-white truncate block">
                      {EDITOR_INFO.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column Action Box */}
            <div className="lg:col-span-5 bg-black/80 border border-white/15 p-6 sm:p-8 rounded-3xl flex flex-col items-center text-center shadow-2xl backdrop-blur-xl">
              <div className="w-14 h-14 rounded-2xl bg-white text-black flex items-center justify-center mb-4 shadow-xl animate-bounce">
                <MessageSquare className="w-7 h-7 fill-current" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">Ready to Start Your Video?</h3>
              <p className="text-zinc-400 text-xs mb-6 leading-relaxed">
                Send project details, timeline requirements, or raw footage links to get a custom quote.
              </p>

              <button
                onClick={onOpenContactModal}
                className="w-full bg-white hover:bg-zinc-200 text-black py-3.5 rounded-xl text-sm font-bold shadow-xl shadow-white/10 hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 text-black" />
                <span>Let's Work Together</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

