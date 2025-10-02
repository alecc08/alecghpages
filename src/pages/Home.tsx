import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-image">
            <img
              src="/alec-mini.png"
              alt="Alec Chamberland"
              className="funko-image"
            />
          </div>
          <div className="hero-text">
            <h1>Alec Chamberland</h1>
            <p className="passion-statement">
              Driven by a passion for technology and the art of coding, I create applications
              that blend functionality with thoughtful design.
            </p>
          </div>
        </div>
      </section>

      <section className="featured-projects">
        <h2>Featured Projects</h2>
        <div className="project-cards">
          <Link to="/listkeeper" className="project-card">
            <h3>ListKeeper</h3>
            <p>A beautifully simple list app that focuses on what matters</p>
            <span className="project-tag">Flutter • Android</span>
          </Link>
          <Link to="/pixelfarm" className="project-card">
            <h3>Pixel Farm</h3>
            <p>Roguelike farming adventure with charming pixel art</p>
            <span className="project-tag">Godot • In Development</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
