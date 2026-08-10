import React from 'react';
import { X, ExternalLink } from 'lucide-react';
import { getEmbedInfo } from '../utils/mediaUtils';

interface VideoModalProps {
  isOpen: boolean;
  videoUrl: string;
  title: string;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, videoUrl, title, onClose }) => {
  if (!isOpen) return null;

  const embed = getEmbedInfo(videoUrl);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-300">
      {/* Click Backdrop to close */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-5xl bg-zinc-950/95 border border-white/15 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col backdrop-blur-2xl">
        {/* Header Bar */}
        <div className="p-4 bg-zinc-900/80 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2 max-w-[80%]">
            <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse shrink-0" />
            <h3 className="text-white font-bold text-sm sm:text-base font-mono truncate">{title}</h3>
            {embed.type !== 'direct' && (
              <span className="hidden sm:inline-block bg-white/10 text-zinc-200 border border-white/20 text-[10px] uppercase font-bold px-2 py-0.5 rounded ml-2 shrink-0">
                {embed.type} Link
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/20 text-zinc-300 hover:text-white transition-colors border border-white/10"
            title="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Canvas Player */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center">
          {embed.type === 'youtube' || embed.type === 'drive' || embed.type === 'instagram' ? (
            <iframe
              src={embed.embedUrl}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full border-0"
            />
          ) : (
            <video
              src={videoUrl}
              controls
              autoPlay
              className="w-full h-full object-contain"
            >
              Your browser does not support HTML5 video playback.
            </video>
          )}
        </div>

        {/* Footer Bar */}
        <div className="p-3 bg-black/80 text-xs text-zinc-400 flex items-center justify-between border-t border-white/10">
          <div className="flex items-center gap-2">
            <span>HD Color Graded Video Stream</span>
            {videoUrl && (
              <a
                href={videoUrl}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:flex items-center gap-1 text-white hover:underline"
              >
                <span>Open Link</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
          <span className="font-mono text-zinc-400">Sunil Pareek Showcase</span>
        </div>
      </div>
    </div>
  );
};

