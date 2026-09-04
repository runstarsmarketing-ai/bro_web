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
  { label: 'Hours', value: '300+' },
];

export const PORTFOLIO_PROJECTS: Project[] = [
  
  {
    id: 'product-ad-sunil',
    title: 'Data Analyst Roadmap & Career Guide',
    category: 'Long Videos',
    categoryLabel: 'LONG VIDEO',
    duration: '10:55',
    thumbnail: '',
    videoUrl: 'https://youtu.be/gN5Fdkcyfug',
    description: 'A comprehensive educational roadmap edit designed for high retention. Features clean typography callouts, step-by-step screen overlays, punchy sound design, and structured chaptering that turns a complex career framework into an easy-to-follow visual guide.',
    client: 'Influencer',
    toolsUsed: ['Adobe Premiere Pro'],
    featured: true,
  },
  {
    id: 'short-film-sunil',
    title: 'Myth-Busting Health & Science Explainer',
    category: 'Long Videos',
    categoryLabel: 'LONG VIDEO',
    duration: '04:44',
    thumbnail: '',
    videoUrl: 'https://youtu.be/eSvhM0xpELk',
    description: 'A crisp, research-backed talking-head breakdown crafted to debunk viral health myths. Uses dynamic jump cuts, scientific callout graphics, zoomed punch-ins, and contextual stock overlays to keep informational science engaging and accessible.',
    client: 'Influencer',
    toolsUsed: ['Premiere Pro'],
    featured: true,
  },
  {
    id: 'urban-reel-sunil',
    title: 'Global Remote Work & Career Strategy',
    category: 'Long Videos',
    categoryLabel: 'LONG VIDEO',
    duration: '07:35',
    thumbnail: '',
    videoUrl: 'https://youtu.be/-cXH_K7A488',
    description: 'A modern career breakdown focusing on remote opportunities with international firms. Edited with smooth split-screen motion graphics, data popups, animated lower thirds, and seamless narrative pacing to maximize audience watch time.',
    client: 'Influencer',
    toolsUsed: ['After Effects', 'Premiere Pro'],
    featured: true,
  },
  {
    id: 'youtube-vlog-sunil',
    title: 'Gut Health & Digestive Wellness Guide',
    category: 'Long Videos',
    categoryLabel: 'LONG VIDEO',
    duration: '08:08',
    thumbnail: '',
    videoUrl: 'https://youtu.be/xKFZID_1zSs',
    description: 'A step-by-step wellness masterclass edited with intuitive graphic lists, engaging B-roll overlays, and calm yet brisk pacing. Simplifies actionable nutritional advice and medical steps into clear, visual takeaways.',
    client: 'Influencer',
    toolsUsed: ['Premiere Pro', 'After Effects'],
    featured: true,
  },
  {
    id: 'travel-doc-sunil',
    title: 'Navigating the 2026 Tech & AI Shift',
    category: 'Long Videos',
    categoryLabel: 'LONG VIDEO',
    duration: '13:44',
    thumbnail: '',
    videoUrl: 'https://youtu.be/PZC-3N3ej_A',
    description: 'An analytical deep-dive into coding layoffs, AI disruption, and modern hiring trends. Packed with animated industry charts, punchy quote cards, kinetic typography, and structured pacing built to keep long-form viewers hooked.',
    client: 'Influencer',
    toolsUsed: ['Premiere Pro'],
    featured: false,
  },
  {
    id: 'travel-doc-suniel',
    title: 'Backend Tech Showdown: Java vs. Golang',
    category: 'Long Videos',
    categoryLabel: 'LONG VIDEO',
    duration: '07:13',
    thumbnail: '',
    videoUrl: 'https://youtu.be/vWQa9916Gcc',
    description: 'A developer-focused tech comparison comparing architectural trade-offs. Edited with side-by-side comparison tables, engaging visual metaphors, code-friendly text graphics, and rhythmic pacing tailored for software engineers.',
    client: 'Influencer',
    toolsUsed: ['Premiere Pro'],
    featured: false,
  },
  {
    id: 'cinematic-reels-surnil',
    title: 'Viral Hook & Mindset Short',
    category: 'Reels',
    categoryLabel: 'REELS',
    duration: '00:34',
    thumbnail: '',
    videoUrl: 'https://youtu.be/oiUkNneKl2A',
    description: 'A snappy vertical short engineered for maximum retention. Features dynamic word-by-word highlighted captions, high-energy zooms, custom sound effects, and fast-paced B-roll cuts.',
    client: 'Influencer',
    toolsUsed: ['Premiere Pro'],
    featured: false,
  },
  {
    id: 'cinematic-reels-rsunil',
    title: 'Bite-Sized Career Insight Reel',
    category: 'Reels',
    categoryLabel: 'REELS',
    duration: '00:51',
    thumbnail: '',
    videoUrl: 'https://youtu.be/NneZOhFIuWI',
    description: 'A high-converting short-form edit blending talking-head footage with punchy motion text, sound design accents, and strategic framing designed to stop the scroll in the first 3 seconds.',
    client: 'Influencer',
    toolsUsed: ['Premiere Pro'],
    featured: false,
  },
  {
    id: 'cinemratic-reels-sunil',
    title: 'Quick Tech & Habit Breakdown',
    category: 'Reels',
    categoryLabel: 'REELS',
    duration: '00:43',
    thumbnail: '',
    videoUrl: 'https://youtu.be/e5hbxS-vqJU',
    description: 'A punchy vertical micro-content piece utilizing smooth zooms, colorful animated keywords, subtle sound risers, and seamless pacing to deliver actionable value in under a minute.',
    client: 'Influencer',
    toolsUsed: ['Premiere Pro'],
    featured: false,
  },
  {
    id: 'cinematic-reels-sunitl',
    title: 'High-Energy Micro Hook Reel',
    category: 'Reels',
    categoryLabel: 'REELS',
    duration: '00:15',
    thumbnail: '',
    videoUrl: 'https://youtu.be/cxXL7NE9iCA',
    description: 'An ultra-compact 15-second teaser edit crafted for viral loop potential. Emphasizes bold animated kinetic typography, rapid visual cuts, and snappy audio sync.',
    client: 'Influencer',
    toolsUsed: ['Premiere Pro'],
    featured: false,
  },
  {
    id: 'cinematic-rtreels-sunil',
    title: 'Extended Vertical Storytelling Reel',
    category: 'Reels',
    categoryLabel: 'REELS',
    duration: '02:34',
    thumbnail: '',
    videoUrl: 'https://youtu.be/FiXqHsEU0ww',
    description: 'An in-depth vertical narrative edit balancing long-form substance with short-form visual energy. Features styled subtitles, supporting graphics, and balanced cuts to maintain engagement over two minutes.',
    client: 'Influencer',
    toolsUsed: ['Premiere Pro'],
    featured: false,
  },
  {
    id: 'cinematic-reels-surynil',
    title: 'Global Career & Education Podcast',
    category: 'Podcast',
    categoryLabel: 'PODCAST',
    duration: '34:36',
    thumbnail: '',
    videoUrl: 'https://youtu.be/sgnN7tYUzs4',
    description: 'A complete multi-camera podcast edit covering global career paths and degrees. Features speaker-switched angle cuts, clean visual branding, context-setting lower thirds, and smooth pacing to keep a 30+ minute conversation engaging.',
    client: 'Influencer',
    toolsUsed: ['Premiere Pro'],
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
    name: 'Nirupama',
    role: 'Certified Nutrition Coach',
    company: '350k+ Youtube Channel',
    avatar: 'https://user23064.na.imgto.link/public/20260904/channels4-profile.avif',
    comment: 'I’ve had a great experience working with Sunil. He understands the topic really well and edits the videos accordingly. He is highly responsive to feedback and amendments, and consistently punctual with deadlines. Highly recommended! ',
    rating: 5,
  },
  {
    id: '2',
    name: 'Genie Ashwani',
    role: 'influencer',
    company: '150K+ Youtube Channel',
    avatar: 'https://user23064.na.imgto.link/public/20260904/channels4-profile-1.avif',
    comment: 'Sunil is a reliable editor who understands what the video needs. His edits are clean, engaging, and always delivered with good attention to detail. It was great working with him.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Shivangi Tiwari',
    role: 'Content creator',
    company: '120k+ Youtube Channel',
    avatar: 'https://user23064.na.imgto.link/public/20260904/channels4-profile-2.avif',
    comment: 'Sunil transformed our raw unorganized footage into a stunning visual story. Highly recommended for any serious influencer or agency!',
    rating: 5,
  },
];

