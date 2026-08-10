import React, { useState, useEffect, useRef } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Lock,
  Eye,
  EyeOff,
  Pointer,
  Scissors,
  Type,
  RotateCcw,
  Crop,
  Search,
  Sparkles,
  Video
} from 'lucide-react';

const FALLBACK_HERO_VIDEO = 'https://cdn.uploadtourl.com/ba144bc4-e650-4af2-84bb-ab2ba76894de_output_progressive_b5ce18fe-f512-4c91-8fa8-63df0560925e.mp4';

export const TimelineEditor: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [currentTime, setCurrentTime] = useState<number>(3.5);
  const [duration, setDuration] = useState<number>(10);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [activeTool, setActiveTool] = useState<string>('pointer');
  const [v2Visible, setV2Visible] = useState<boolean>(true);
  const [v1Visible, setV1Visible] = useState<boolean>(true);
  const [a1Muted, setA1Muted] = useState<boolean>(false);

  // Hero video source handling (/hero.mp4 with fallback)
  const [videoSource, setVideoSource] = useState<string>('/hero.mp4');
  const [videoFileName, setVideoFileName] = useState<string>('hero.mp4');

  const videoRef = useRef<HTMLVideoElement>(null);

  // Play/Pause sync
  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying, videoSource]);

  // Sync mute state
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted || a1Muted;
    }
  }, [isMuted, a1Muted]);

  // Sync current time on video update
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(parseFloat(videoRef.current.currentTime.toFixed(2)));
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      const vidDuration = videoRef.current.duration;
      if (vidDuration && !isNaN(vidDuration)) {
        setDuration(parseFloat(vidDuration.toFixed(2)));
      }
    }
  };

  // Video error handling (if /hero.mp4 not found on server, fallback to sample video)
  const handleVideoError = () => {
    if (videoSource === '/hero.mp4') {
      console.log('Local /hero.mp4 fallback engaged');
      setVideoSource(FALLBACK_HERO_VIDEO);
    }
  };

  const handleTimeClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, clickX / rect.width));
    const newTime = parseFloat((percentage * duration).toFixed(2));
    setCurrentTime(newTime);
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
    }
  };

  const formatTimecode = (seconds: number) => {
    const secs = Math.floor(seconds);
    const ms = Math.floor((seconds % 1) * 100);
    const formattedSecs = secs.toString().padStart(2, '0');
    const formattedMs = ms.toString().padStart(2, '0');
    return `00:00:${formattedSecs}:${formattedMs}`;
  };

  const playheadPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="w-full bg-[#050505] border border-white/10 rounded-3xl shadow-2xl shadow-black overflow-hidden flex flex-col transition-all duration-300 hover:border-white/20">
      {/* Top Header Bar of Editor */}
      <div className="bg-zinc-900/90 backdrop-blur-xl px-4 py-3 border-b border-white/10 flex items-center justify-between text-xs text-zinc-400">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 bg-black/80 border border-white/15 px-3 py-1 rounded-lg text-white font-bold tracking-wide shadow-md">
            <span className="bg-white text-black text-[10px] px-1.5 py-0.5 rounded font-black">Pr</span>
            <span>PREMIERE PRO</span>
          </div>
          <span className="hidden sm:inline-block text-zinc-600">|</span>
          <span className="text-zinc-300 font-mono hidden sm:inline-block truncate max-w-[180px]">
            {videoFileName}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-black/80 px-3 py-1 rounded-lg border border-white/10 text-white font-mono font-bold shadow-md">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            <span>{formatTimecode(currentTime)}</span>
          </div>
        </div>
      </div>

      {/* Main Body: Sidebar Tools + Video Player + Timeline */}
      <div className="flex flex-col lg:flex-row">
        {/* Left Toolbar Palette */}
        <div className="bg-zinc-950/80 border-b lg:border-b-0 lg:border-r border-white/10 p-2.5 flex lg:flex-col items-center justify-between lg:justify-start gap-2 text-zinc-400">
          <button
            onClick={() => setActiveTool('pointer')}
            title="Selection Tool (V)"
            className={`p-2 rounded-lg transition-all ${
              activeTool === 'pointer' ? 'bg-white text-black shadow-md' : 'hover:bg-white/10 hover:text-white'
            }`}
          >
            <Pointer className="w-4 h-4" />
          </button>
          <button
            onClick={() => setActiveTool('razor')}
            title="Razor Tool (C)"
            className={`p-2 rounded-lg transition-all ${
              activeTool === 'razor' ? 'bg-white text-black shadow-md' : 'hover:bg-white/10 hover:text-white'
            }`}
          >
            <Scissors className="w-4 h-4" />
          </button>
          <button
            onClick={() => setActiveTool('text')}
            title="Type Tool (T)"
            className={`p-2 rounded-lg transition-all ${
              activeTool === 'text' ? 'bg-white text-black shadow-md' : 'hover:bg-white/10 hover:text-white'
            }`}
          >
            <Type className="w-4 h-4" />
          </button>
          <button
            onClick={() => setActiveTool('crop')}
            title="Crop / Transform"
            className={`p-2 rounded-lg transition-all ${
              activeTool === 'crop' ? 'bg-white text-black shadow-md' : 'hover:bg-white/10 hover:text-white'
            }`}
          >
            <Crop className="w-4 h-4" />
          </button>
          <button
            onClick={() => setActiveTool('effects')}
            title="Effects & Keyframes"
            className={`p-2 rounded-lg transition-all ${
              activeTool === 'effects' ? 'bg-white text-black shadow-md' : 'hover:bg-white/10 hover:text-white'
            }`}
          >
            <Sparkles className="w-4 h-4" />
          </button>
          <div className="hidden lg:block w-full h-[1px] bg-white/10 my-1"></div>
          <button
            onClick={() => setActiveTool('zoom')}
            title="Zoom Tool (Z)"
            className={`p-2 rounded-lg transition-all ${
              activeTool === 'zoom' ? 'bg-white text-black shadow-md' : 'hover:bg-white/10 hover:text-white'
            }`}
          >
            <Search className="w-4 h-4" />
          </button>
        </div>

        {/* Center Canvas & Timeline */}
        <div className="flex-1 flex flex-col p-4 md:p-5 gap-4 bg-black">
          {/* Top Video Preview Display Monitor */}
          <div className="relative aspect-video w-full bg-[#030303] rounded-2xl overflow-hidden border border-white/10 group shadow-2xl">
            {/* Real HTML5 Video element */}
            <video
              ref={videoRef}
              src={videoSource}
              loop
              playsInline
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onError={handleVideoError}
              className={`w-full h-full object-cover transition-opacity duration-300 ${
                v1Visible || v2Visible ? 'opacity-100' : 'opacity-10'
              }`}
            />

            {/* Cinematic Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 pointer-events-none" />

            {/* Glowing Text Overlay representing V2 layer */}
            {v2Visible && (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none transition-all">
                <span className="inline-block bg-black/80 backdrop-blur-xl px-6 py-2.5 rounded-full text-white font-black text-sm md:text-lg tracking-widest uppercase border border-white/20 shadow-2xl">
                  
                </span>
              </div>
            )}

            {/* Top Right Track Overlay Tag */}
            <div className="absolute top-3 right-3 flex items-center gap-2 bg-black/80 backdrop-blur-xl border border-white/10 px-3.5 py-1 rounded-full text-xs text-zinc-300 shadow-xl">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-mono text-[11px]">{videoFileName}</span>
            </div>

            {/* Play/Pause Center Overlay */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 shadow-2xl shadow-white/30"
            >
              {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-1" />}
            </button>

            {/* Controls Bar bottom overlay */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white bg-black/85 backdrop-blur-xl px-4 py-2 rounded-xl border border-white/15 shadow-2xl">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="hover:text-zinc-300 transition"
                  title={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => {
                    setCurrentTime(0);
                    if (videoRef.current) videoRef.current.currentTime = 0;
                  }}
                  className="hover:text-zinc-300 transition"
                  title="Reset to 00:00"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="hover:text-zinc-300 transition"
                  title={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
                </button>
              </div>
              <div className="font-mono text-zinc-400 text-[11px]">
                {currentTime.toFixed(2)}s / {duration.toFixed(2)}s
              </div>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="bg-zinc-950/80 border border-white/10 rounded-2xl p-4 flex flex-col gap-2.5 backdrop-blur-xl">
            {/* Ruler Header with Timecode notches */}
            <div
              className="relative h-6 bg-zinc-900 rounded-lg border border-white/10 cursor-pointer overflow-hidden select-none"
              onClick={handleTimeClick}
            >
              <div className="absolute inset-0 flex justify-between items-center px-2 text-[10px] text-zinc-500 font-mono">
                {Array.from({ length: 11 }).map((_, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <span className="text-[9px]">00:0{i}</span>
                    <div className="w-[1px] h-2 bg-zinc-700 mt-0.5" />
                  </div>
                ))}
              </div>

              {/* White Playhead Line */}
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-white z-30 transition-all pointer-events-none"
                style={{ left: `${playheadPercentage}%` }}
              >
                <div className="w-2.5 h-2.5 bg-white border border-black rotate-45 -translate-x-[4px] -translate-y-1 rounded-xs" />
              </div>
            </div>

            {/* Track Layers */}
            <div className="flex flex-col gap-1.5 relative">
              {/* V2 Track (Text Overlay) */}
              <div className="flex items-center gap-2 h-9">
                <div className="w-16 sm:w-20 bg-zinc-900 border border-white/10 rounded-lg px-2 py-1 flex items-center justify-between text-[11px] font-bold text-zinc-300">
                  <span className="text-white">V2</span>
                  <div className="flex items-center gap-1 text-zinc-500">
                    <Lock className="w-3 h-3 hover:text-white cursor-pointer" />
                    <button onClick={() => setV2Visible(!v2Visible)}>
                      {v2Visible ? (
                        <Eye className="w-3 h-3 text-white hover:text-zinc-300" />
                      ) : (
                        <EyeOff className="w-3 h-3 text-red-400" />
                      )}
                    </button>
                  </div>
                </div>

                <div
                  className="flex-1 h-full bg-zinc-900/60 rounded-lg border border-white/10 relative overflow-hidden cursor-pointer"
                  onClick={handleTimeClick}
                >
                  <div
                    className={`absolute top-0.5 bottom-0.5 rounded-md px-3 flex items-center text-[11px] font-semibold text-white transition-opacity ${
                      v2Visible ? 'bg-zinc-800 border border-white/20 shadow-sm' : 'bg-zinc-900 opacity-30'
                    }`}
                    style={{ left: '25%', width: '50%' }}
                  >
                    <span>Editing Is a skill</span>
                  </div>
                </div>
              </div>

              {/* V1 Track (Main Hero Video Clip) */}
              <div className="flex items-center gap-2 h-10">
                <div className="w-16 sm:w-20 bg-zinc-900 border border-white/10 rounded-lg px-2 py-1 flex items-center justify-between text-[11px] font-bold text-zinc-300">
                  <span className="text-zinc-300">V1</span>
                  <div className="flex items-center gap-1 text-zinc-500">
                    <Lock className="w-3 h-3 hover:text-white cursor-pointer" />
                    <button onClick={() => setV1Visible(!v1Visible)}>
                      {v1Visible ? (
                        <Eye className="w-3 h-3 text-zinc-300 hover:text-white" />
                      ) : (
                        <EyeOff className="w-3 h-3 text-red-400" />
                      )}
                    </button>
                  </div>
                </div>

                <div
                  className="flex-1 h-full bg-zinc-900/60 rounded-lg border border-white/10 relative overflow-hidden cursor-pointer"
                  onClick={handleTimeClick}
                >
                  <div
                    className={`absolute top-0.5 bottom-0.5 rounded-md px-3 flex items-center gap-2 text-[11px] font-semibold text-white transition-opacity ${
                      v1Visible ? 'bg-zinc-700/80 border border-white/20 shadow-sm' : 'bg-zinc-900 opacity-30'
                    }`}
                    style={{ left: '0%', width: '100%' }}
                  >
                    <div className="flex items-center gap-1.5 overflow-hidden">
                      <Video className="w-3.5 h-3.5 text-zinc-300 shrink-0" />
                      <span className="truncate font-mono font-bold">{videoFileName}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* A1 Track (Audio Track) */}
              <div className="flex items-center gap-2 h-9">
                <div className="w-16 sm:w-20 bg-zinc-900 border border-white/10 rounded-lg px-2 py-1 flex items-center justify-between text-[11px] font-bold text-zinc-300">
                  <span className="text-emerald-400">A1</span>
                  <div className="flex items-center gap-1 text-zinc-500">
                    <Lock className="w-3 h-3 hover:text-white cursor-pointer" />
                    <button onClick={() => setA1Muted(!a1Muted)}>
                      {a1Muted ? (
                        <VolumeX className="w-3 h-3 text-red-400" />
                      ) : (
                        <Volume2 className="w-3 h-3 text-emerald-400" />
                      )}
                    </button>
                  </div>
                </div>

                <div
                  className="flex-1 h-full bg-zinc-900/60 rounded-lg border border-white/10 relative overflow-hidden cursor-pointer"
                  onClick={handleTimeClick}
                >
                  <div
                    className={`absolute top-0.5 bottom-0.5 rounded-md px-3 flex items-center gap-2 text-[11px] font-medium text-emerald-100 transition-opacity ${
                      !a1Muted && !isMuted ? 'bg-emerald-900/60 border border-emerald-500/40' : 'bg-zinc-900 opacity-30'
                    }`}
                    style={{ left: '0%', width: '100%' }}
                  >
                    <span className="font-mono text-[10px]">Audio_Sync.wav</span>
                    {/* Waveform SVG */}
                    <div className="flex-1 flex items-center gap-[2px] h-3 overflow-hidden opacity-80">
                      {Array.from({ length: 45 }).map((_, i) => (
                        <div
                          key={i}
                          className="w-0.5 bg-emerald-300 rounded-full transition-all duration-300"
                          style={{
                            height: isPlaying
                              ? `${Math.sin(i + currentTime * 5) * 40 + 50}%`
                              : `${(i % 5) * 20 + 20}%`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Full height scrubber vertical overlay */}
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-white z-20 pointer-events-none"
                style={{
                  left: `calc(72px + (100% - 72px) * ${playheadPercentage / 100})`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

