// Project metadata
export interface Project {
  id: string;
  title: string;
  description: string;
  features: string[];
  technicalDetails: { [key: string]: string };
  screenshots: string[];
}

export const projects = {
  listkeeper: {
    id: 'listkeeper',
    title: 'ListKeeper',
    description: 'A comprehensive task management application designed to help users organize their daily activities and increase productivity.',
    features: [
      'Task Management',
      'Priority Levels', 
      'Due Dates & Reminders',
      'Collaboration Tools'
    ],
    technicalDetails: {
      'Frontend': 'React, TypeScript, Tailwind CSS',
      'Backend': 'Node.js with Express',
      'Database': 'MongoDB',
      'Authentication': 'JWT-based system'
    },
    screenshots: [
  '/src/assets/listkeeper-dashboard.png',
  '/src/assets/listkeeper-task-list.png'
    ]
  } as Project,
  
  pixelfarm: {
    id: 'pixelfarm',
    title: 'Pixel Farm',
    description: 'A creative studio focused on producing high-quality pixel art and indie games with retro-inspired aesthetics.',
    features: [
      'Pixel Art Creation',
      'Game Development',
      'Creative Collaboration',
      'Community Engagement'
    ],
    technicalDetails: {
      'Art Tools': 'Aseprite, Photoshop, GIMP',
      'Game Engines': 'Unity, Godot',
      'Programming Languages': 'C#, GDScript, JavaScript',
      'Platforms': 'Web (HTML5), Mobile, Desktop'
    },
    screenshots: [
      '/src/assets/pixelfarm-game.png',
      '/src/assets/pixelfarm-character.png'
    ]
  } as Project
};
