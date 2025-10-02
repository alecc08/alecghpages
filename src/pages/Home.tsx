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
          <div className="project-card listkeeper-card">
            <Link to="/listkeeper" className="card-link">
              <h3>ListKeeper</h3>
              <p>A beautifully simple list app that focuses on what matters</p>
              <span className="project-tag">Flutter • Android</span>
            </Link>
            <a
              href="https://play.google.com/store/apps/details?id=org.alserv.listkeeper"
              target="_blank"
              rel="noopener noreferrer"
              className="card-play-badge"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src="/GetItOnGooglePlay_Badge_Web_color_English.png"
                alt="Get it on Google Play"
                className="card-play-img"
              />
            </a>
          </div>
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
