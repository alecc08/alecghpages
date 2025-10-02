// Project metadata
export interface Project {
  id: string;
  title: string;
  description: string;
  platform?: string;
  engine?: string;
  highlights?: string[];
}

export const projects = {
  listkeeper: {
    id: 'listkeeper',
    title: 'ListKeeper',
    description: 'In a world of bloated productivity apps that try to do everything, ListKeeper takes a different approach. It\'s a beautifully simple list management app that does one thing exceptionally well: helping you organize your thoughts and tasks without the noise. No complex features you\'ll never use, no overwhelming interfaces—just elegant, focused list-making that stays out of your way.',
    platform: 'Android',
    engine: 'Flutter',
    highlights: [
      'Clean, intuitive interface',
      'Fast and lightweight',
      'Focus on simplicity'
    ]
  } as Project,

  pixelfarm: {
    id: 'pixelfarm',
    title: 'Pixel Farm',
    description: 'An upcoming roguelike farming adventure that blends charming pixel art with deep, engaging gameplay. While we\'re keeping the details under wraps for now, we can promise months of captivating gameplay in a completely ad-free experience. Built with passion and designed for those who appreciate both strategy and style.',
    platform: 'Android (iOS planned)',
    engine: 'Godot',
    highlights: [
      'Handcrafted pixel art',
      'Roguelike farming mechanics',
      'Ad-free experience',
      'Extensive replayability'
    ]
  } as Project
};
