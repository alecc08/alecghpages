import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../contexts/LanguageContext';

const PixelFarm = () => {
  const { t } = useTranslation();

  return (
    <div className="project-page">
      <section className="project-header">
        <h1>{t('nav.pixelfarm')}</h1>
        <p className="project-subtitle">{t('pixelfarm.subtitle')}</p>
        <div className="project-meta">
          <span className="meta-item">{t('meta.androidIosPlanned')}</span>
          <span className="meta-divider">•</span>
          <span className="meta-item">{t('meta.godot')}</span>
        </div>
      </section>

      <section className="project-overview">
        <h2>{t('pixelfarm.about')}</h2>
        <p>{t('pixelfarm.description')}</p>
      </section>

      <section className="project-highlights">
        <h2>{t('pixelfarm.whatToExpect')}</h2>
        <ul className="highlights-list">
          {t('pixelfarm.highlightsList').map((highlight: string, index: number) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
      </section>

      <div className="back-link">
        <Link to="/" className="btn-text">← {t('pixelfarm.backToHome')}</Link>
      </div>
    </div>
  );
};

export default PixelFarm;
