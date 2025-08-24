import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const UltraList = () => {
  const project = projects.ultralist;

  return (
    <div className="project-page">
      <section className="project-header card">
        <h1>{project.title}</h1>
        <p className="project-subtitle">A powerful task management application</p>
        <Link to="/" className="btn">Back to Home</Link>
      </section>

      <section className="project-overview card">
        <h2>Project Overview</h2>
        <p>{project.description}</p>
      </section>

      <section className="project-features card">
        <h2>Key Features</h2>
        <div className="feature-grid">
          {project.features.map((feature, index) => (
            <div className="feature-item" key={index}>
              <h3>{feature}</h3>
              <p>{getFeatureDescription(feature)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="project-details card">
        <h2>Technical Details</h2>
        <ul>
          {Object.entries(project.technicalDetails).map(([key, value]) => (
            <li key={key}><strong>{key}:</strong> {value}</li>
          ))}
        </ul>
      </section>

      <section className="project-demo card">
        <h2>Demo Screenshots</h2>
        <div className="screenshot-grid">
          {project.screenshots.map((screenshot, index) => (
            <div className="screenshot-item" key={index}>
              <img src={screenshot} alt={`${project.title} Screenshot ${index + 1}`} />
              <p>{getScreenshotDescription(index)}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

// Helper function to provide more detailed descriptions for features
const getFeatureDescription = (feature: string): string => {
  switch(feature) {
    case 'Task Management':
      return 'Create, edit, and organize tasks with ease using our intuitive interface.';
    case 'Priority Levels':
      return 'Assign priority levels to tasks for better organization and focus.';
    case 'Due Dates & Reminders':
      return 'Set due dates with customizable reminders to stay on track.';
    case 'Collaboration Tools':
      return 'Share tasks and collaborate with team members in real-time.';
    default:
      return '';
  }
};

// Helper function to provide descriptions for screenshots
const getScreenshotDescription = (index: number): string => {
  switch(index) {
    case 0:
      return 'Dashboard View';
    case 1:
      return 'Task Management Interface';
    default:
      return 'Project Screenshot';
  }
};

export default UltraList;
