import React from 'react';

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
    </div>
  );
};

export default Home;
