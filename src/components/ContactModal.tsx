import React, { useState } from 'react';
import { X, Send, CheckCircle2, Sparkles, Mail } from 'lucide-react';
import { ContactFormData } from '../types';
import { EDITOR_INFO } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    service: 'Video Editing',
    budget: '$500 - $1,000',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const getMailtoUrl = () => {
    const recipient = EDITOR_INFO.email;
    const subject = encodeURIComponent(`New Project Inquiry (${formData.service}) - ${formData.name}`);
    const body = encodeURIComponent(
      `Hello ${EDITOR_INFO.name},\n\n` +
      `I would like to start a project with you!\n\n` +
      `--- CLIENT DETAILS ---\n` +
      `• Name: ${formData.name}\n` +
      `• Email: ${formData.email}\n` +
      `• Phone: ${formData.phone || 'Not provided'}\n` +
      `• Service Required: ${formData.service}\n` +
      `• Estimated Budget: ${formData.budget}\n\n` +
      `--- PROJECT DETAILS ---\n` +
      `${formData.message}\n`
    );
    return `mailto:${recipient}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const url = getMailtoUrl();
    // Redirect to default email app
    window.location.href = url;

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: 'Video Editing',
      budget: '$500 - $1,000',
      message: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-300">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-xl bg-zinc-950/95 border border-white/15 rounded-3xl overflow-hidden shadow-2xl z-10 p-6 sm:p-8 backdrop-blur-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-white/5 hover:bg-white/20 text-zinc-300 hover:text-white transition-colors border border-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4 border border-emerald-500/40">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">Mail App Opened!</h3>
            <p className="text-zinc-300 text-xs sm:text-sm max-w-md leading-relaxed mb-6">
              Your default email app (Gmail / Mail) has been triggered with your details pre-filled to <span className="text-white font-mono font-bold">{EDITOR_INFO.email}</span>. Click send in your mail app to deliver the message!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
              <a
                href={getMailtoUrl()}
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-xl text-xs font-bold border border-white/10 flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Open Mail App Again</span>
              </a>

              <button
                onClick={handleReset}
                className="w-full sm:w-auto bg-white hover:bg-zinc-200 text-black px-6 py-2.5 rounded-xl text-xs font-bold shadow-xl shadow-white/10"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center gap-2 text-zinc-400 text-xs font-mono font-bold uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4 text-zinc-300" />
              <span>Let's Work Together</span>
            </div>

            <h3 className="text-2xl font-extrabold text-white tracking-tight">
              Start Your Project
            </h3>
            <p className="text-zinc-400 text-xs mb-4">
              Fill in your details below and let's bring your video vision to life.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Rivera"
                  className="w-full bg-black/60 border border-white/10 focus:border-white/40 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@company.com"
                  className="w-full bg-black/60 border border-white/10 focus:border-white/40 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">Service Needed</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-black/60 border border-white/10 focus:border-white/40 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none transition-colors"
                >
                  <option value="Video Editing">Video Editing</option>
                  <option value="Color Grading">Color Grading</option>
                  <option value="Motion Graphics">Motion Graphics</option>
                  <option value="Sound Design">Sound Design</option>
                  <option value="Full Post-Production">Full Post-Production</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">Estimated Budget</label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full bg-black/60 border border-white/10 focus:border-white/40 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none transition-colors"
                >
                  <option value="$250 - $500">$250 - $500</option>
                  <option value="$500 - $1,000">$500 - $1,000</option>
                  <option value="$1,000 - $2,500">$1,000 - $2,500</option>
                  <option value="$2,500+">$2,500+</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1">Project Message & Footage Links</label>
              <textarea
                rows={3}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about your video project, timeline, style reference links..."
                className="w-full bg-black/60 border border-white/10 focus:border-white/40 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-white hover:bg-zinc-200 disabled:opacity-50 text-black py-3.5 rounded-xl text-xs font-bold shadow-xl shadow-white/10 transition-all flex items-center justify-center gap-2 mt-2"
            >
              {loading ? (
                <span>Sending Message...</span>
              ) : (
                <>
                  <Send className="w-4 h-4 text-black" />
                  <span>Send Project Inquiry</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

