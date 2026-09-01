import { Project, ProcessStep, Service, Testimonial } from '../types';

/**
 * ============================================================================
 * SUNIL PAREEK - PORTFOLIO VIDEO DATABASE & SETTINGS
 * ============================================================================
 * HOW TO ADD OR REMOVE VIDEOS:
 * ----------------------------------------------------------------------------
 * 1. To ADD a video: Copy any object block in the PORTFOLIO_PROJECTS array below
 *    and paste it. Give it a unique `id`, `title`, `videoUrl`, and `thumbnail`.
 * 2. Supported `videoUrl` formats:
 *    - YouTube watch link (e.g. "https://www.youtube.com/watch?v=XXXX")
 *    - YouTube Shorts link (e.g. "https://www.youtube.com/shorts/XXXX")
 *    - Instagram Reel link (e.g. "https://www.instagram.com/reel/XXXX/")
 *    - Google Drive share view link (e.g. "https://drive.google.com/file/d/XXXX/view")
 *    - Direct MP4 video file URL (e.g. "https://domain.com/video.mp4")
 * 3. To REMOVE a video: Delete or comment out the corresponding `{ ... }` block.
 * ============================================================================
 */

export const EDITOR_INFO = {
  name: 'Sunil Pareek',
  title: 'Lead Video Editor & Visual Storyteller',
  bio: "Hi, I'm Sunil Pareek — Professional Video Editor & Visual Storyteller. I transform raw footage into high-retention, high-converting cinematic videos for brands, YouTube creators, documentary projects, and social media channels.",
  experienceYears: '3+',
  completedProjects: '100+',
  satisfactionRate: '99%',
  email: 'sunileditor9840@gmail.com',
  phone: '+91 932824-1585',
  location: 'Jaipur / Rajasthan, India (Available Worldwide Remote)',
  socialLinks: {
    youtube: 'https://www.youtube.com/@sunilxeditt',
    instagram: 'https://www.instagram.com/officialsunilpareek',
    linkedin: 'https://www.linkedin.com/in/videoeditorsunilpareek/',
    twitter: 'https://twitter.com',
  },
};

export const ABOUT_STATS = [
  { label: 'Years of Experience', value: '3+' },
  { label: 'Projects Completed', value: '100+' },
  { label: 'Client Satisfaction', value: '99%' },
  
];

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: 'travel-doc-sunil',
    title: 'Cinematic Travel Documentary',
    category: 'Long Videos',
    categoryLabel: 'LONG VIDEO',
    duration: '03:45',
    thumbnail: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://cdn.uploadtourl.com/ba144bc4-e650-4af2-84bb-ab2ba76894de_output_progressive_b5ce18fe-f512-4c91-8fa8-63df0560925e.mp4',
    description: 'An immersive cinematic journey exploring hidden landscapes, dramatic drone shots, and color-graded nature sequences.',
    client: 'Wanderlust Media',
    toolsUsed: ['Adobe Premiere Pro', 'DaVinci Resolve', 'After Effects'],
    featured: true,
  },
  {
    id: 'cinematic-reels-sunil',
    title: 'High Retention Instagram Reel',
    category: 'Reels',
    categoryLabel: 'REELS',
    duration: '00:30',
    thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://cdn.uploadtourl.com/ba144bc4-e650-4af2-84bb-ab2ba76894de_output_progressive_b5ce18fe-f512-4c91-8fa8-63df0560925e.mp4',
    description: 'High-energy 9:16 vertical video reel with beat-synced cuts, sound design hits, and dynamic typography animations.',
    client: 'Urban Fitness Brand',
    toolsUsed: ['Premiere Pro', 'CapCut Pro', 'Logic Pro X'],
    featured: true,
  },
  {
    id: 'product-ad-sunil',
    title: 'Commercial Product Launch Ad',
    category: 'Ads',
    categoryLabel: 'ADS',
    duration: '00:45',
    thumbnail: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    description: 'Sleek luxury product commercial highlighting product features through studio lighting cleanup, macro cuts, and custom sound design.',
    client: 'Aura Premium Audio',
    toolsUsed: ['DaVinci Resolve', 'Blender', 'After Effects'],
    featured: true,
  },
  {
    id: 'short-film-sunil',
    title: 'The Last Narrative - Short Film',
    category: 'Short Films',
    categoryLabel: 'SHORT FILM',
    duration: '08:12',
    thumbnail: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    description: 'Award-winning dramatic narrative short film with cinematic moody lighting, acoustic sound scoring, and dialogue audio cleanup.',
    client: 'Sunil Pareek Productions',
    toolsUsed: ['Premiere Pro', 'DaVinci Resolve', 'iZotope RX'],
    featured: true,
  },
  {
    id: 'urban-reel-sunil',
    title: 'Street Style & Culture Edit',
    category: 'Reels',
    categoryLabel: 'REELS',
    duration: '10:55',
    thumbnail: '',
    videoUrl: 'https://youtu.be/gN5Fdkcyfug?si=Vc0OF7m89eXOXY1_',
    description: 'Fast-paced street style fashion edit showcasing neon city night visuals and seamless match cuts.',
    client: 'Streetwear Co.',
    toolsUsed: ['After Effects', 'Premiere Pro'],
    featured: false,
  },
  {
    id: 'youtube-vlog-sunil',
    title: 'YouTube Creator Story Edit',
    category: 'Long Videos',
    categoryLabel: 'LONG VIDEO',
    duration: '09:50',
    thumbnail: '',
    videoUrl: 'https://youtu.be/s1lP-qu_zq0?si=jr_SMDCnyoAe-hBm',
    description: 'Engaging YouTube storytelling edit featuring lower-thirds, hook animations, sound effects, and retention optimization.',
    client: 'Sunil Pareek Channel',
    toolsUsed: ['Premiere Pro Multi-Cam', 'Audition'],
    featured: false,
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Understand',
    description: 'I listen to your ideas, brand vision, and goals to understand the target audience and narrative arc.',
    iconName: 'Compass',
  },
  {
    number: '02',
    title: 'Edit',
    description: 'I craft the raw footage into a compelling story with precise cuts, timing, speed ramps, and pacing.',
    iconName: 'Scissors',
  },
  {
    number: '03',
    title: 'Refine',
    description: 'We review and perfect color grading, audio leveling, motion graphics, and visual enhancements together.',
    iconName: 'Sliders',
  },
  {
    number: '04',
    title: 'Deliver',
    description: 'You receive high-resolution, platform-optimized export files ready to captivate your audience immediately.',
    iconName: 'Send',
  },
];

export const SERVICES: Service[] = [
  {
    id: 'video-editing',
    title: 'Video Editing',
    description: 'Professional editing with smooth cuts, dynamic pacing, narrative flow, and seamless transition effects.',
    iconName: 'Video',
    features: ['Multi-camera Editing', 'Dynamic Transitions', 'Rhythm & Beat Matching', 'Platform Formatting'],
  },
  {
    id: 'color-grading',
    title: 'Color Grading',
    description: 'Cinematic color grading to transform flat RAW footage into vivid, mood-enhancing visual masterpieces.',
    iconName: 'Palette',
    features: ['LOG / RAW Conversion', 'Shot Matching', 'Custom LUT Creation', 'Skin Tone Optimization'],
  },
  {
    id: 'motion-graphics',
    title: 'Motion Graphics',
    description: 'Engaging motion graphics, kinetic typography, lower-thirds, intro sequences, and logo stingers.',
    iconName: 'Sparkles',
    features: ['3D Text Effects', 'Lower Thirds & Titles', 'Logo Animations', 'Visual FX Tracking'],
  },
  {
    id: 'sound-design',
    title: 'Sound Design',
    description: 'High-quality sound design, background music synchronization, noise reduction, and spatial audio enhancement.',
    iconName: 'Volume2',
    features: ['Audio Dialogue Cleanup', 'SFX Placement', 'Music Beat Syncing', 'Loudness Normalization'],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Unknown',
    role: 'Content Creator',
    company: '100k+ Youtube Channel',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    comment: 'Working with Sunil Pareek was an amazing experience! The video pacing was beyond my expectations and boosted our viewer retention by 40%.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Unknown',
    role: 'health Coach',
    company: 'influencer',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    comment: 'Sunil is highly professional, creative and always delivers on time. His color grading gave our brand advertisement a true film look.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Unknown',
    role: 'Teacher',
    company: 'Tutor',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    comment: 'Sunil transformed our raw unorganized footage into a stunning visual story. Highly recommended for any serious influencer or agency!',
    rating: 5,
  },
];

