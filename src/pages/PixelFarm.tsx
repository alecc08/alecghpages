import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const PixelFarm = () => {
  const project = projects.pixelfarm;

  return (
    <div className="project-page">
      <section className="project-header">
        <h1>{project.title}</h1>
        <p className="project-subtitle">Coming soon...</p>
        <div className="project-meta">
          <span className="meta-item">{project.platform}</span>
          <span className="meta-divider">•</span>
          <span className="meta-item">{project.engine}</span>
        </div>
      </section>

      <section className="project-overview">
        <h2>About</h2>
        <p>{project.description}</p>
      </section>

      {project.highlights && (
        <section className="project-highlights">
          <h2>What to Expect</h2>
          <ul className="highlights-list">
            {project.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </section>
      )}

      <div className="back-link">
        <Link to="/" className="btn-text">← Back to Home</Link>
      </div>
    </div>
  );
};

export default PixelFarm;
