import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../contexts/LanguageContext';

const ListKeeper = () => {
  const { t } = useTranslation();

  return (
    <div className="project-page">
      <section className="project-header">
        <h1>{t('nav.listkeeper')}</h1>
        <p className="project-subtitle">{t('listkeeper.subtitle')}</p>
        <div className="project-meta">
          <span className="meta-item">{t('meta.android')}</span>
          <span className="meta-divider">•</span>
          <span className="meta-item">{t('meta.flutter')}</span>
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
        <h2>{t('listkeeper.about')}</h2>
        <p>{t('listkeeper.description')}</p>
      </section>

      <section className="project-highlights">
        <h2>{t('listkeeper.highlights')}</h2>
        <ul className="highlights-list">
          {t('listkeeper.highlightsList').map((highlight: string, index: number) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
      </section>

      <section className="project-legal">
        <p>
          <a href="/privacy-policy-listkeeper-en.html" target="_blank" rel="noopener noreferrer">{t('listkeeper.privacyPolicy')}</a>
        </p>
      </section>

      <div className="back-link">
        <Link to="/" className="btn-text">← {t('listkeeper.backToHome')}</Link>
      </div>
    </div>
  );
};

export default ListKeeper;

