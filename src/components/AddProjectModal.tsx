import React, { useState } from 'react';
import { X, Video, Image as ImageIcon, Link as LinkIcon, Upload, Sparkles, Check } from 'lucide-react';
import { Project } from '../types';
import { getAutoThumbnail, getEmbedInfo } from '../utils/mediaUtils';

interface AddProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddProject: (newProject: Project) => void;
}

export const AddProjectModal: React.FC<AddProjectModalProps> = ({
  isOpen,
  onClose,
  onAddProject,
}) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<'Long Videos' | 'Reels' | 'Ads' | 'Short Films'>('Long Videos');
  const [videoUrl, setVideoUrl] = useState('');
  const [customThumbnail, setCustomThumbnail] = useState('');
  const [duration, setDuration] = useState('02:15');
  const [description, setDescription] = useState('');
  const [client, setClient] = useState('');

  if (!isOpen) return null;

  const handleThumbnailUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCustomThumbnail(url);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !videoUrl.trim()) return;

    // Calculate final thumbnail (custom image uploaded / URL pasted or auto YouTube thumbnail)
    const fallbackThumb =
      customThumbnail ||
      getAutoThumbnail(
        videoUrl,
        'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80'
      );

    const categoryLabelMap = {
      'Long Videos': 'LONG VIDEO',
      Reels: 'REELS',
      Ads: 'ADS',
      'Short Films': 'SHORT FILM',
    };

    const newProject: Project = {
      id: `custom-proj-${Date.now()}`,
      title: title.trim(),
      category,
      categoryLabel: categoryLabelMap[category],
      duration: duration.trim() || '02:00',
      thumbnail: fallbackThumb,
      videoUrl: videoUrl.trim(),
      description: description.trim() || 'Custom video project portfolio item.',
      client: client.trim() || 'Private Client',
      toolsUsed: ['Adobe Premiere Pro', 'DaVinci Resolve'],
      featured: true,
    };

    onAddProject(newProject);

    // Reset fields & close
    setTitle('');
    setVideoUrl('');
    setCustomThumbnail('');
    setDescription('');
    setClient('');
    onClose();
  };

  const detectedEmbed = getEmbedInfo(videoUrl);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-200">
      <div className="bg-zinc-950/95 border border-white/15 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto backdrop-blur-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-1">
          <Sparkles className="w-5 h-5 text-white" />
          <h3 className="text-white font-extrabold text-xl">Add New Video Project</h3>
        </div>
        <p className="text-zinc-400 text-xs mb-6">
          Add YouTube, Instagram Reels, Google Drive, or custom video links with your thumbnail!
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div>
            <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1">
              Project Title *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Cinematic Travel Vlog / Brand Reel"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-black/60 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white/40"
            />
          </div>

          {/* Category & Duration */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as any)}
                className="w-full bg-black/60 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-white/40"
              >
                <option value="Long Videos">Long Videos (YouTube, Docs)</option>
                <option value="Reels">Reels / Shorts (9:16)</option>
                <option value="Ads">Commercial Ads</option>
                <option value="Short Films">Short Films</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1">
                Duration (MM:SS)
              </label>
              <input
                type="text"
                placeholder="02:30"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full bg-black/60 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white/40"
              />
            </div>
          </div>

          {/* Video Link */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-1.5">
                <LinkIcon className="w-3.5 h-3.5 text-zinc-300" />
                <span>Video Link (YouTube, IG, Drive, MP4) *</span>
              </label>
              {detectedEmbed.type !== 'direct' && videoUrl && (
                <span className="text-[10px] bg-white/10 text-white px-2 py-0.5 rounded border border-white/20 uppercase font-bold">
                  Detected {detectedEmbed.type}
                </span>
              )}
            </div>
            <input
              type="url"
              required
              placeholder="Paste YouTube link, Instagram reel link, Drive link, or MP4 URL"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              className="w-full bg-black/60 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white/40"
            />
            <p className="text-[11px] text-zinc-500 mt-1">
              Supports: YouTube watch/shorts, Instagram reel/post, Google Drive view links, or direct MP4 files.
            </p>
          </div>

          {/* Custom Thumbnail */}
          <div>
            <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1">
              Custom Thumbnail Image (Optional)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="url"
                placeholder="Paste Thumbnail Image URL"
                value={customThumbnail}
                onChange={(e) => setCustomThumbnail(e.target.value)}
                className="bg-black/60 border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white/40"
              />
              <label className="border border-white/10 hover:border-white/30 rounded-xl px-3 py-2 text-xs text-zinc-200 bg-white/5 flex items-center justify-center gap-2 cursor-pointer transition">
                <Upload className="w-3.5 h-3.5" />
                <span>Upload Image File</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleThumbnailUpload}
                  className="hidden"
                />
              </label>
            </div>
            {customThumbnail && (
              <div className="mt-2 relative w-full h-24 rounded-xl overflow-hidden border border-white/20 bg-black">
                <img
                  src={customThumbnail}
                  alt="Thumbnail preview"
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-1 right-2 bg-black/80 text-white text-[10px] px-2 py-0.5 rounded">
                  Thumbnail Preview
                </span>
              </div>
            )}
          </div>

          {/* Client & Description */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1">
                Client / Channel Name
              </label>
              <input
                type="text"
                placeholder="e.g. Travel Vlog Channel"
                value={client}
                onChange={(e) => setClient(e.target.value)}
                className="w-full bg-black/60 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white/40"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1">
                Short Description
              </label>
              <input
                type="text"
                placeholder="Color graded, sound designed commercial edit"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full bg-black/60 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white/40"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full mt-2 bg-white hover:bg-zinc-200 text-black py-3 rounded-xl font-bold text-sm shadow-xl shadow-white/10 transition-all flex items-center justify-center gap-2"
          >
            <Check className="w-4 h-4 text-black" />
            <span>Add Project To Portfolio</span>
          </button>
        </form>
      </div>
    </div>
  );
};

