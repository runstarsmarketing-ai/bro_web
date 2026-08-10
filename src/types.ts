export type Category = 'All' | 'Long Videos' | 'Reels' | 'Ads' | 'Short Films';

export interface Project {
  id: string;
  title: string;
  category: Category;
  categoryLabel: string;
  duration: string;
  thumbnail: string;
  videoUrl: string;
  description: string;
  client?: string;
  toolsUsed: string[];
  featured?: boolean;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  comment: string;
  rating: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
}
