export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  metrics: string;
  link?: string;
}

export interface Milestone {
  id: string;
  title: string;
  year: string;
  description: string[];
  x: number; // Percentage 0-100 for SVG path alignment roughly
  y: number; // Percentage
}

export enum ViewMode {
  GUI = 'GUI',
  TERMINAL = 'TERMINAL',
}