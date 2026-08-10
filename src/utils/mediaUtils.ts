/**
 * Helper utilities for embedding YouTube, Instagram, Google Drive, and MP4 videos,
 * as well as handling custom thumbnail and editor photo persistence.
 */

export interface EmbedInfo {
  type: 'youtube' | 'drive' | 'instagram' | 'direct';
  embedUrl: string;
}

/**
 * Parses a video URL and determines if it is YouTube, Google Drive, Instagram, or direct MP4.
 */
export function getEmbedInfo(url: string): EmbedInfo {
  if (!url) {
    return { type: 'direct', embedUrl: '' };
  }

  const cleanUrl = url.trim();

  // YouTube matchers (standard youtube.com/watch?v=ID, youtube.com/embed/ID, youtu.be/ID, shorts)
  const youtubeMatch =
    cleanUrl.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/|youtube\.com\/shorts\/)([^"&?\/\s]{11})/i);

  if (youtubeMatch && youtubeMatch[1]) {
    const videoId = youtubeMatch[1];
    return {
      type: 'youtube',
      embedUrl: `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`,
    };
  }

  // Google Drive matchers (drive.google.com/file/d/ID/view, drive.google.com/open?id=ID)
  const driveMatch = cleanUrl.match(/drive\.google\.com\/(?:file\/d\/([^\/?#]+)|open\?id=([^\/?#]+))/i);
  if (driveMatch) {
    const fileId = driveMatch[1] || driveMatch[2];
    return {
      type: 'drive',
      embedUrl: `https://drive.google.com/file/d/${fileId}/preview`,
    };
  }

  // Instagram matchers (instagram.com/p/ID, instagram.com/reel/ID)
  const instagramMatch = cleanUrl.match(/instagram\.com\/(?:p|reel)\/([^\/?#]+)/i);
  if (instagramMatch && instagramMatch[1]) {
    const postId = instagramMatch[1];
    return {
      type: 'instagram',
      embedUrl: `https://www.instagram.com/p/${postId}/embed`,
    };
  }

  // Default to direct video tag (MP4, WebM, blob, etc.)
  return {
    type: 'direct',
    embedUrl: cleanUrl,
  };
}

/**
 * Returns a default YouTube thumbnail URL if available, or a fallback image.
 */
export function getAutoThumbnail(url: string, fallback: string): string {
  const embed = getEmbedInfo(url);
  if (embed.type === 'youtube') {
    const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/|youtube\.com\/shorts\/)([^"&?\/\s]{11})/i);
    if (match && match[1]) {
      return `https://i.ytimg.com/vi/${match[1]}/hqdefault.jpg`;
    }
  }
  return fallback;
}

/**
 * Storage helpers for local user settings
 */
export const EDITOR_PHOTO_KEY = 'efditor_photo_url';
export const CUSTOM_PROJECTS_KEY = 'efditor_custom_projects';
export const HERO_VIDEO_KEY = 'efditor_hero_video_url';

export const DEFAULT_EDITOR_PHOTO =
  'https://cdn.uploadtourl.com/ea39b065-cef3-453c-af84-21c3ed750441_editorrr.jfif';

export function getSavedEditorPhoto(): string {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(EDITOR_PHOTO_KEY) || DEFAULT_EDITOR_PHOTO;
  }
  return DEFAULT_EDITOR_PHOTO;
}

export function saveEditorPhoto(photoUrl: string): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(EDITOR_PHOTO_KEY, photoUrl);
  }
}
