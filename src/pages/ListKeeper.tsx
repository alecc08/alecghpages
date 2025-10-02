import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const ListKeeper = () => {
  const project = projects.listkeeper;

  return (
    <div className="project-page">
      <section className="project-header">
        <h1>{project.title}</h1>
        <p className="project-subtitle">Simple lists. Done right.</p>
        <div className="project-meta">
          <span className="meta-item">{project.platform}</span>
          <span className="meta-divider">•</span>
          <span className="meta-item">{project.engine}</span>
        </div>
      </section>

      <section className="project-download">
        <a
          href="https://play.google.com/store/apps/details?id=org.alserv.listkeeper"
          target="_blank"
          rel="noopener noreferrer"
          className="play-store-badge"
        >
          <img
            src="/GetItOnGooglePlay_Badge_Web_color_English.png"
            alt="Get it on Google Play"
            className="play-store-img"
          />
        </a>
      </section>

      <section className="project-overview">
        <h2>About</h2>
        <p>{project.description}</p>
      </section>

      {project.highlights && (
        <section className="project-highlights">
          <h2>Highlights</h2>
          <ul className="highlights-list">
            {project.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </section>
      )}

      <section className="project-legal">
        <p>
          <a href="/privacy-policy-listkeeper-en.html" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
        </p>
      </section>

      <div className="back-link">
        <Link to="/" className="btn-text">← Back to Home</Link>
      </div>
    </div>
  );
};

export default ListKeeper;

