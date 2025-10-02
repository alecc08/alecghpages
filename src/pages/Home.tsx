import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../contexts/LanguageContext';

const Home = () => {
  const { t } = useTranslation();

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
              {t('home.passionStatement')}
            </p>
          </div>
        </div>
      </section>

      <section className="featured-projects">
        <h2>{t('home.featuredProjects')}</h2>
        <div className="project-cards">
          <div className="project-card listkeeper-card">
            <Link to="/listkeeper" className="card-link">
              <h3>{t('nav.listkeeper')}</h3>
              <p>{t('home.listkeeperDescription')}</p>
              <span className="project-tag">{t('home.listkeeperTag')}</span>
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
            <h3>{t('nav.pixelfarm')}</h3>
            <p>{t('home.pixelfarmDescription')}</p>
            <span className="project-tag">{t('home.pixelfarmTag')}</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
