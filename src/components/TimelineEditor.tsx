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
  Video,
  Folder,
  FileVideo,
  Music,
  Layers,
  SlidersHorizontal,
  Activity,
  Maximize2
} from 'lucide-react';

const FALLBACK_HERO_VIDEO = 'https://www.image2url.com/r2/default/videos/1786506675087-889095ef-9af2-48df-b3eb-a9697156aadb.mp4';

export const TimelineEditor: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [currentTime, setCurrentTime] = useState<number>(3.5);
  const [duration, setDuration] = useState<number>(10);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [activeTool, setActiveTool] = useState<string>('pointer');
  const [activeWorkspace, setActiveWorkspace] = useState<string>('Editing');
  const [activeLeftTab, setActiveLeftTab] = useState<'project' | 'effects' | 'color'>('project');
  
  const [v2Visible, setV2Visible] = useState<boolean>(true);
  const [v1Visible, setV1Visible] = useState<boolean>(true);
  const [a1Muted, setA1Muted] = useState<boolean>(false);

  // Audio meters state
  const [leftMeter, setLeftMeter] = useState<number>(65);
  const [rightMeter, setRightMeter] = useState<number>(70);

  // Video source handling
  const [videoSource, setVideoSource] = useState<string>('/hero.mp4');
  const [videoFileName, setVideoFileName] = useState<string>('Sunil_Showreel_2026.mp4');

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

  // Audio meter simulation when playing
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && !isMuted && !a1Muted) {
      interval = setInterval(() => {
        setLeftMeter(Math.floor(55 + Math.random() * 35));
        setRightMeter(Math.floor(60 + Math.random() * 32));
      }, 120);
    } else {
      setLeftMeter(0);
      setRightMeter(0);
    }
    return () => clearInterval(interval);
  }, [isPlaying, isMuted, a1Muted]);

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

  const handleVideoError = () => {
    if (videoSource === '/hero.mp4') {
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
    const ms = Math.floor((seconds % 1) * 30); // 30fps frames
    const formattedSecs = secs.toString().padStart(2, '0');
    const formattedFrames = ms.toString().padStart(2, '0');
    return `00:00:${formattedSecs}:${formattedFrames}`;
  };

  const playheadPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="w-full max-w-7xl mx-auto bg-[#0a0a0c] border border-white/15 rounded-2xl shadow-2xl shadow-black overflow-hidden flex flex-col font-sans select-none">
      
      {/* 1. Premiere Pro Main App Top Header & Menus */}
      <div className="bg-[#141418] border-b border-white/10 px-3 py-1.5 flex flex-wrap items-center justify-between text-xs text-zinc-400 gap-2">
        {/* Left: Pr Logo & File Menus */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 bg-[#005fb8] text-white px-2 py-0.5 rounded font-black tracking-wider text-[11px] shadow-sm">
            <span>Pr</span>
          </div>
          <span className="text-white font-semibold text-xs hidden sm:inline-block">Adobe Premiere Pro 2026</span>
          <span className="text-zinc-600 hidden sm:inline-block">|</span>
          <div className="hidden md:flex items-center gap-3 text-[11px] text-zinc-400 font-medium">
            <span className="hover:text-white cursor-pointer transition">File</span>
            <span className="hover:text-white cursor-pointer transition">Edit</span>
            <span className="hover:text-white cursor-pointer transition">Clip</span>
            <span className="hover:text-white cursor-pointer transition font-semibold text-white">Sequence</span>
            <span className="hover:text-white cursor-pointer transition">Marker</span>
            <span className="hover:text-white cursor-pointer transition">Window</span>
            <span className="hover:text-white cursor-pointer transition">Help</span>
          </div>
        </div>

        {/* Center: Workspace Selector Tabs */}
        <div className="flex items-center bg-zinc-900/80 border border-white/10 p-0.5 rounded-lg text-[10px] sm:text-[11px]">
          {['Editing', 'Color', 'Audio', 'Effects'].map((ws) => (
            <button
              key={ws}
              onClick={() => setActiveWorkspace(ws)}
              className={`px-2.5 py-0.5 rounded-md font-medium transition-all ${
                activeWorkspace === ws
                  ? 'bg-[#0078d4] text-white shadow-sm font-semibold'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {ws}
            </button>
          ))}
        </div>

        {/* Right: Project Name & Timecode Badge */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-1.5 text-zinc-400 text-[11px] font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>4K 60fps ProRes HQ</span>
          </div>
          <div className="bg-black/80 px-2.5 py-0.5 rounded border border-white/10 text-emerald-400 font-mono font-bold text-[11px] shadow-inner">
            {formatTimecode(currentTime)}
          </div>
        </div>
      </div>

      {/* 2. Middle Grid: Left Bin Panel + Program Monitor + Right Audio Meter */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-1.5 p-1.5 sm:p-2 bg-[#0e0e11] border-b border-white/10">
        
        {/* A. LEFT PANEL: Project Assets / Effect Controls / Lumetri (Visible on Laptop/Desktop lg+) */}
        <div className="hidden lg:flex lg:col-span-3 bg-[#141418] border border-white/10 rounded-xl flex-col h-[260px] sm:h-[280px] overflow-hidden">
          {/* Panel Header Tabs */}
          <div className="bg-[#1b1b20] border-b border-white/10 flex items-center px-2 py-1 gap-1 text-[10px] sm:text-[11px] font-medium text-zinc-400">
            <button
              onClick={() => setActiveLeftTab('project')}
              className={`px-2 py-1 rounded transition flex items-center gap-1 ${
                activeLeftTab === 'project' ? 'bg-[#0e0e11] text-white border-t-2 border-[#0078d4] font-semibold' : 'hover:text-white'
              }`}
            >
              <Folder className="w-3 h-3 text-[#0078d4]" />
              <span>Project Bin</span>
            </button>
            <button
              onClick={() => setActiveLeftTab('effects')}
              className={`px-2 py-1 rounded transition flex items-center gap-1 ${
                activeLeftTab === 'effects' ? 'bg-[#0e0e11] text-white border-t-2 border-[#0078d4] font-semibold' : 'hover:text-white'
              }`}
            >
              <SlidersHorizontal className="w-3 h-3 text-purple-400" />
              <span>FX Controls</span>
            </button>
            <button
              onClick={() => setActiveLeftTab('color')}
              className={`px-2 py-1 rounded transition flex items-center gap-1 ${
                activeLeftTab === 'color' ? 'bg-[#0e0e11] text-white border-t-2 border-[#0078d4] font-semibold' : 'hover:text-white'
              }`}
            >
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>Lumetri</span>
            </button>
          </div>

          {/* Panel Body Content */}
          <div className="flex-1 p-2 overflow-y-auto text-xs text-zinc-300 custom-scrollbar">
            {activeLeftTab === 'project' && (
              <div className="space-y-1.5">
                <div className="text-[10px] text-zinc-500 font-mono tracking-wider uppercase mb-1">Assets (4 items)</div>
                
                {/* Asset 1: Active Video */}
                <div className="flex items-center gap-2 p-1.5 rounded-lg bg-[#0078d4]/20 border border-[#0078d4]/50 text-white cursor-pointer">
                  <FileVideo className="w-4 h-4 text-[#0078d4] shrink-0" />
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold text-[11px] truncate">{videoFileName}</div>
                    <div className="text-[9px] text-zinc-400 font-mono">3840x2160 • 59.94 fps</div>
                  </div>
                </div>

                {/* Asset 2: Audio Sync */}
                <div className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-white/5 border border-transparent text-zinc-300 cursor-pointer transition">
                  <Music className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div className="min-w-0 flex-1">
                    <div className="font-medium text-[11px] truncate">Audio_Sync_Master.wav</div>
                    <div className="text-[9px] text-zinc-500 font-mono">48000 Hz • Stereo</div>
                  </div>
                </div>

                {/* Asset 3: Title Graphic */}
                <div className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-white/5 border border-transparent text-zinc-300 cursor-pointer transition">
                  <Layers className="w-4 h-4 text-purple-400 shrink-0" />
                  <div className="min-w-0 flex-1">
                    <div className="font-medium text-[11px] truncate">LowerThird_Title.mogrt</div>
                    <div className="text-[9px] text-zinc-500 font-mono">After Effects Graphic</div>
                  </div>
                </div>

                {/* Asset 4: LUT */}
                <div className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-white/5 border border-transparent text-zinc-300 cursor-pointer transition">
                  <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                  <div className="min-w-0 flex-1">
                    <div className="font-medium text-[11px] truncate">Sunil_TealOrange.cube</div>
                    <div className="text-[9px] text-zinc-500 font-mono">3D LUT Profile</div>
                  </div>
                </div>
              </div>
            )}

            {activeLeftTab === 'effects' && (
              <div className="space-y-2 text-[11px]">
                <div className="font-semibold text-white border-b border-white/10 pb-1 flex justify-between">
                  <span>fx Motion Controls</span>
                  <span className="text-[9px] text-zinc-500 font-mono">Selected: V1</span>
                </div>
                <div className="space-y-1.5 font-mono text-[10px]">
                  <div className="flex justify-between items-center text-zinc-400">
                    <span>Position</span>
                    <span className="text-white bg-black/60 px-1.5 py-0.5 rounded border border-white/10">1920.0, 1080.0</span>
                  </div>
                  <div className="flex justify-between items-center text-zinc-400">
                    <span>Scale</span>
                    <span className="text-[#0078d4] font-bold bg-black/60 px-1.5 py-0.5 rounded border border-white/10">100.0%</span>
                  </div>
                  <div className="flex justify-between items-center text-zinc-400">
                    <span>Rotation</span>
                    <span className="text-white bg-black/60 px-1.5 py-0.5 rounded border border-white/10">0.0°</span>
                  </div>
                  <div className="flex justify-between items-center text-zinc-400">
                    <span>Opacity</span>
                    <span className="text-emerald-400 font-bold bg-black/60 px-1.5 py-0.5 rounded border border-white/10">100.0%</span>
                  </div>
                </div>
              </div>
            )}

            {activeLeftTab === 'color' && (
              <div className="space-y-2 text-[11px]">
                <div className="font-semibold text-amber-400 border-b border-white/10 pb-1 flex justify-between">
                  <span>Lumetri Color Wheels</span>
                  <span className="text-[9px] text-zinc-500">Active</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[10px]">
                  <div className="bg-black/40 border border-white/10 rounded p-1.5 text-center">
                    <div className="text-zinc-400 mb-1">Exposure</div>
                    <div className="text-emerald-400 font-bold font-mono">+0.25 EV</div>
                  </div>
                  <div className="bg-black/40 border border-white/10 rounded p-1.5 text-center">
                    <div className="text-zinc-400 mb-1">Contrast</div>
                    <div className="text-[#0078d4] font-bold font-mono">+18.0</div>
                  </div>
                  <div className="bg-black/40 border border-white/10 rounded p-1.5 text-center">
                    <div className="text-zinc-400 mb-1">Highlights</div>
                    <div className="text-amber-400 font-bold font-mono">-12.0</div>
                  </div>
                  <div className="bg-black/40 border border-white/10 rounded p-1.5 text-center">
                    <div className="text-zinc-400 mb-1">Saturation</div>
                    <div className="text-purple-400 font-bold font-mono">115%</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* B. CENTER PANEL: Program Monitor (Full width on Mobile, Center Monitor on Laptop) */}
        <div className="col-span-12 lg:col-span-9 xl:col-span-7 bg-[#141418] border border-white/10 rounded-xl p-2 flex flex-col justify-between">
          
          {/* Program Monitor Top Header */}
          <div className="flex items-center justify-between text-[11px] text-zinc-400 border-b border-white/10 pb-1 mb-1">
            <div className="flex items-center gap-2 font-medium">
              <span className="text-white font-semibold">Program: Hero_Sequence</span>
              <span className="bg-[#0078d4] text-white text-[9px] px-1.5 rounded">Fit 100%</span>
            </div>
            <div className="flex items-center gap-2 font-mono text-[10px]">
              <span className="text-zinc-400">16:9 YouTube HD</span>
              <Maximize2 className="w-3 h-3 text-zinc-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Video Preview Canvas - YouTube Widescreen 16:9 Aspect Ratio */}
          <div className="relative aspect-video w-full max-w-[560px] mx-auto bg-black rounded-lg overflow-hidden border border-white/10 group shadow-inner flex items-center justify-center">
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

            {/* Subtle Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

            {/* Glowing Text Overlay for V2 Track - Lower Third Position */}
            {v2Visible && (
              <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 text-center pointer-events-none z-10">
                <span className="inline-block bg-black/85 backdrop-blur-md px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full text-white font-black text-xs sm:text-sm tracking-widest uppercase border border-white/20 shadow-2xl">
                  STORIES THAT CONNECT
                </span>
              </div>
            )}

            {/* Play overlay button */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="absolute inset-0 m-auto w-10 h-10 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 shadow-2xl shadow-white/30"
            >
              {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
            </button>
          </div>

          {/* Program Monitor Playback Controls Bar */}
          <div className="flex items-center justify-between text-xs text-white bg-black/60 px-2.5 py-1 rounded border border-white/10 mt-1">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="hover:text-zinc-300 transition text-white"
                title={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>
              <button
                onClick={() => {
                  setCurrentTime(0);
                  if (videoRef.current) videoRef.current.currentTime = 0;
                }}
                className="hover:text-zinc-300 transition text-zinc-400"
                title="Reset to 00:00"
              >
                <RotateCcw className="w-3 h-3" />
              </button>
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="hover:text-zinc-300 transition"
                title={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX className="w-3.5 h-3.5 text-red-400" /> : <Volume2 className="w-3.5 h-3.5 text-zinc-300" />}
              </button>
            </div>

            <div className="font-mono text-zinc-400 text-[10px]">
              <span className="text-white font-bold">{currentTime.toFixed(2)}s</span> / {duration.toFixed(2)}s
            </div>
          </div>
        </div>

        {/* C. RIGHT PANEL: Audio VU Master Meters (Visible on XL screens desktop/laptop) */}
        <div className="hidden xl:flex xl:col-span-2 bg-[#141418] border border-white/10 rounded-xl p-2 flex-col h-[260px] sm:h-[280px] justify-between">
          <div className="flex items-center justify-between text-[11px] text-zinc-400 border-b border-white/10 pb-1">
            <span className="text-white font-semibold flex items-center gap-1">
              <Activity className="w-3 h-3 text-emerald-400" />
              <span>Audio Master</span>
            </span>
            <span className="text-[9px] font-mono text-zinc-500">dB</span>
          </div>

          {/* VU Stereo Meters */}
          <div className="flex-1 my-2 bg-black/60 border border-white/10 rounded p-2 flex items-center justify-around gap-2">
            {/* L Channel */}
            <div className="flex flex-col items-center h-full w-4">
              <div className="text-[8px] font-mono text-zinc-500 mb-1">L</div>
              <div className="flex-1 w-full bg-zinc-900 rounded overflow-hidden flex flex-col-reverse p-0.5 border border-white/5">
                <div
                  className="w-full bg-gradient-to-t from-emerald-500 via-amber-400 to-red-500 rounded-xs transition-all duration-100"
                  style={{ height: `${leftMeter}%` }}
                />
              </div>
            </div>

            {/* dB Markers */}
            <div className="flex flex-col justify-between text-[8px] font-mono text-zinc-600 h-full py-2">
              <span>0</span>
              <span>-6</span>
              <span>-12</span>
              <span>-24</span>
              <span>-48</span>
            </div>

            {/* R Channel */}
            <div className="flex flex-col items-center h-full w-4">
              <div className="text-[8px] font-mono text-zinc-500 mb-1">R</div>
              <div className="flex-1 w-full bg-zinc-900 rounded overflow-hidden flex flex-col-reverse p-0.5 border border-white/5">
                <div
                  className="w-full bg-gradient-to-t from-emerald-500 via-amber-400 to-red-500 rounded-xs transition-all duration-100"
                  style={{ height: `${rightMeter}%` }}
                />
              </div>
            </div>
          </div>

          <div className="bg-black/40 border border-white/10 rounded px-2 py-1 text-[9px] font-mono text-zinc-400 flex justify-between items-center">
            <span>Peak:</span>
            <span className="text-emerald-400 font-bold">-3.2 dB</span>
          </div>
        </div>

      </div>

      {/* 3. Bottom Timeline Section */}
      <div className="flex flex-col lg:flex-row bg-[#0e0e11]">
        
        {/* Left Toolbar Palette */}
        <div className="bg-[#141418] border-b lg:border-b-0 lg:border-r border-white/10 p-1.5 flex lg:flex-col items-center justify-between lg:justify-start gap-1 text-zinc-400">
          <button
            onClick={() => setActiveTool('pointer')}
            title="Selection Tool (V)"
            className={`p-1.5 rounded transition-all ${
              activeTool === 'pointer' ? 'bg-[#0078d4] text-white shadow-md' : 'hover:bg-white/10 hover:text-white'
            }`}
          >
            <Pointer className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setActiveTool('razor')}
            title="Razor Tool (C)"
            className={`p-1.5 rounded transition-all ${
              activeTool === 'razor' ? 'bg-[#0078d4] text-white shadow-md' : 'hover:bg-white/10 hover:text-white'
            }`}
          >
            <Scissors className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setActiveTool('text')}
            title="Type Tool (T)"
            className={`p-1.5 rounded transition-all ${
              activeTool === 'text' ? 'bg-[#0078d4] text-white shadow-md' : 'hover:bg-white/10 hover:text-white'
            }`}
          >
            <Type className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setActiveTool('crop')}
            title="Crop / Transform"
            className={`p-1.5 rounded transition-all ${
              activeTool === 'crop' ? 'bg-[#0078d4] text-white shadow-md' : 'hover:bg-white/10 hover:text-white'
            }`}
          >
            <Crop className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setActiveTool('effects')}
            title="Effects & Keyframes"
            className={`p-1.5 rounded transition-all ${
              activeTool === 'effects' ? 'bg-[#0078d4] text-white shadow-md' : 'hover:bg-white/10 hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
          </button>
          <div className="hidden lg:block w-full h-[1px] bg-white/10 my-0.5"></div>
          <button
            onClick={() => setActiveTool('zoom')}
            title="Zoom Tool (Z)"
            className={`p-1.5 rounded transition-all ${
              activeTool === 'zoom' ? 'bg-[#0078d4] text-white shadow-md' : 'hover:bg-white/10 hover:text-white'
            }`}
          >
            <Search className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Timeline Tracks Area */}
        <div className="flex-1 p-2 sm:p-2.5 flex flex-col gap-1.5 bg-[#0a0a0c]">
          
          {/* Timeline Timecode Ruler */}
          <div
            className="relative h-5 bg-[#141418] rounded border border-white/10 cursor-pointer overflow-hidden select-none"
            onClick={handleTimeClick}
          >
            <div className="absolute inset-0 flex justify-between items-center px-2 text-[9px] text-zinc-500 font-mono">
              {Array.from({ length: 11 }).map((_, i) => (
                <div key={i} className="flex flex-col items-center">
                  <span className="text-[8px]">00:0{i}</span>
                  <div className="w-[1px] h-1.5 bg-zinc-700 mt-0.5" />
                </div>
              ))}
            </div>

            {/* Scrub Playhead Line */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-[#0078d4] z-30 transition-all pointer-events-none"
              style={{ left: `${playheadPercentage}%` }}
            >
              <div className="w-2 h-2 bg-[#0078d4] border border-white rotate-45 -translate-x-[3px] -translate-y-0.5 rounded-xs" />
            </div>
          </div>

          {/* Track Headers and Clips */}
          <div className="flex flex-col gap-1 relative">
            
            {/* Track V2 (Text Overlay) */}
            <div className="flex items-center gap-1.5 h-7">
              <div className="w-16 sm:w-20 bg-[#141418] border border-white/10 rounded px-1.5 py-0.5 flex items-center justify-between text-[10px] font-bold text-zinc-300 shrink-0">
                <span className="text-white">V2</span>
                <div className="flex items-center gap-1 text-zinc-500">
                  <Lock className="w-2.5 h-2.5 hover:text-white cursor-pointer" />
                  <button onClick={() => setV2Visible(!v2Visible)}>
                    {v2Visible ? (
                      <Eye className="w-2.5 h-2.5 text-white hover:text-zinc-300" />
                    ) : (
                      <EyeOff className="w-2.5 h-2.5 text-red-400" />
                    )}
                  </button>
                </div>
              </div>

              <div
                className="flex-1 h-full bg-[#141418]/60 rounded border border-white/10 relative overflow-hidden cursor-pointer"
                onClick={handleTimeClick}
              >
                <div
                  className={`absolute top-0.5 bottom-0.5 rounded px-2 flex items-center text-[9px] font-semibold text-white transition-opacity ${
                    v2Visible ? 'bg-purple-900/60 border border-purple-500/40 shadow-sm' : 'bg-zinc-900 opacity-30'
                  }`}
                  style={{ left: '25%', width: '50%' }}
                >
                  <span className="truncate">STORIES THAT CONNECT (Title.mogrt)</span>
                </div>
              </div>
            </div>

            {/* Track V1 (Main Hero Video) */}
            <div className="flex items-center gap-1.5 h-8">
              <div className="w-16 sm:w-20 bg-[#141418] border border-white/10 rounded px-1.5 py-0.5 flex items-center justify-between text-[10px] font-bold text-zinc-300 shrink-0">
                <span className="text-[#0078d4]">V1</span>
                <div className="flex items-center gap-1 text-zinc-500">
                  <Lock className="w-2.5 h-2.5 hover:text-white cursor-pointer" />
                  <button onClick={() => setV1Visible(!v1Visible)}>
                    {v1Visible ? (
                      <Eye className="w-2.5 h-2.5 text-zinc-300 hover:text-white" />
                    ) : (
                      <EyeOff className="w-2.5 h-2.5 text-red-400" />
                    )}
                  </button>
                </div>
              </div>

              <div
                className="flex-1 h-full bg-[#141418]/60 rounded border border-white/10 relative overflow-hidden cursor-pointer"
                onClick={handleTimeClick}
              >
                <div
                  className={`absolute top-0.5 bottom-0.5 rounded px-2 flex items-center gap-1.5 text-[10px] font-semibold text-white transition-opacity ${
                    v1Visible ? 'bg-[#0078d4]/70 border border-[#0078d4] shadow-sm' : 'bg-zinc-900 opacity-30'
                  }`}
                  style={{ left: '0%', width: '100%' }}
                >
                  <Video className="w-3 h-3 text-white shrink-0" />
                  <span className="truncate font-mono font-bold text-[10px]">{videoFileName}</span>
                </div>
              </div>
            </div>

            {/* Track A1 (Audio Track) */}
            <div className="flex items-center gap-1.5 h-7">
              <div className="w-16 sm:w-20 bg-[#141418] border border-white/10 rounded px-1.5 py-0.5 flex items-center justify-between text-[10px] font-bold text-zinc-300 shrink-0">
                <span className="text-emerald-400">A1</span>
                <div className="flex items-center gap-1 text-zinc-500">
                  <Lock className="w-2.5 h-2.5 hover:text-white cursor-pointer" />
                  <button onClick={() => setA1Muted(!a1Muted)}>
                    {a1Muted ? (
                      <VolumeX className="w-2.5 h-2.5 text-red-400" />
                    ) : (
                      <Volume2 className="w-2.5 h-2.5 text-emerald-400" />
                    )}
                  </button>
                </div>
              </div>

              <div
                className="flex-1 h-full bg-[#141418]/60 rounded border border-white/10 relative overflow-hidden cursor-pointer"
                onClick={handleTimeClick}
              >
                <div
                  className={`absolute top-0.5 bottom-0.5 rounded px-2 flex items-center gap-2 text-[9px] font-medium text-emerald-100 transition-opacity ${
                    !a1Muted && !isMuted ? 'bg-emerald-900/60 border border-emerald-500/40' : 'bg-zinc-900 opacity-30'
                  }`}
                  style={{ left: '0%', width: '100%' }}
                >
                  <span className="font-mono text-[9px] shrink-0">Audio_Sync.wav</span>
                  <div className="flex-1 flex items-center gap-[2px] h-2.5 overflow-hidden opacity-80">
                    {Array.from({ length: 42 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-0.5 bg-emerald-300 rounded-full transition-all duration-300"
                        style={{ height: `${20 + Math.sin(i * 0.8 + currentTime * 5) * 60}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
