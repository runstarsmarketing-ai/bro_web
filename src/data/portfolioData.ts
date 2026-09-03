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
    title: 'Data Analyst Roadmap 2026 | Land Your First Data Analytics Job',
    category: 'Long Videos',
    categoryLabel: 'LONG VIDEO',
    duration: '07:12',
    thumbnail: '',
    videoUrl: 'https://youtu.be/gN5Fdkcyfug?si=1jB2ipkFULeb15Bx',
    description: 'A fast-paced technical comparison edit combining talking-head footage, screen recordings, animated text, visual callouts, and clean transitions to make complex developer topics easy to follow.',
    client: 'PW Medharthi',
    toolsUsed: ['Adobe Premiere Pro'],
    featured: true,
  },
  {
    id: 'short-film-sunil',
    title: 'Visual Storytelling Edit',
    category: 'Long Videos',
    categoryLabel: 'LONG VIDEO',
    duration: '09:16',
    thumbnail: '',
    videoUrl: 'https://youtu.be/KP7TpVETLzo?si=QXgFUGFX2DkQVEx0',
    description: 'A dynamic talking-head edit featuring clean cuts, punch-in zooms, animated captions, motion graphics, and engaging visual effects designed to keep the viewer hooked throughout.',
    client: 'Influencer',
    toolsUsed: ['Premiere Pro'],
    featured: true,
  },
  {
    id: 'urban-reel-sunil',
    title: 'Cinematic Career Storytelling',
    category: 'Long Videos',
    categoryLabel: 'LONG VIDEO',
    duration: '10:55',
    thumbnail: '',
    videoUrl: 'https://youtu.be/gN5Fdkcyfug?si=Vc0OF7m89eXOXY1_',
    description: 'A clean documentary-style edit combining strong pacing, visual storytelling, dynamic typography, b-roll, and engaging transitions to turn informational content into a compelling viewing experience.',
    client: 'Influencer',
    toolsUsed: ['After Effects', 'Premiere Pro'],
    featured: true,
  },
  {
    id: 'youtube-vlog-sunil',
    title: 'YouTube Creator Story Edit',
    category: 'Long Videos',
    categoryLabel: 'LONG VIDEO',
    duration: '09:50',
    thumbnail: '',
    videoUrl: 'https://youtu.be/s1lP-qu_zq0?si=jr_SMDCnyoAe-hBm',
    description: 'A high-impact YouTube video exploring the massive wave of job losses and practical strategies for surviving layoffs, edited for strong pacing, engaging storytelling, and viewer retention.',
    client: 'Influencer',
    toolsUsed: ['Premiere Pro', 'After Effects'],
    featured: true,
  },
  {
    id: 'travel-doc-sunil',
    title: 'Creator-Focused Edit',
    category: 'Reels',
    categoryLabel: 'REELS',
    duration: '01:25',
    thumbnail: '',
    videoUrl: 'https://youtu.be/oiUkNneKl2A?si=7BSJZtxuGCuRr5FX',
    description: 'A polished talking-head edit focused on clear storytelling, dynamic pacing, engaging captions, seamless B-roll integration, and subtle motion graphics to keep viewers engaged.',
    client: 'Influencer',
    toolsUsed: ['Premiere Pro'],
    featured: false,
  },
  {
    id: 'cinematic-reels-sunil',
    title: 'Presenter-Led Storytelling',
    category: 'Reels',
    categoryLabel: 'REELS',
    duration: '00:30',
    thumbnail: '',
    videoUrl: 'https://youtu.be/NneZOhFIuWI?si=OIihaDcqTBmdWwWj',
    description: 'A refined expert-led edit combining natural pacing, cinematic B-roll, dynamic typography, smooth transitions, and precise cuts to transform informative content into an engaging visual story.',
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

