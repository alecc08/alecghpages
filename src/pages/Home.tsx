import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section card">
        <h1>Alec Chamberland</h1>
        <p className="subtitle">Software Developer & Creator</p>
        <p>
          Welcome to my professional portfolio website. Here you'll find information about my work, 
          projects, and career journey.
        </p>
        <div className="hero-buttons">
          <Link to="/listkeeper" className="btn">View ListKeeper Project</Link>
          <Link to="/pixelfarm" className="btn btn-outline ml-2">View Pixel Farm Project</Link>
        </div>
      </section>

      <section className="about-section card">
        <h2>About Me</h2>
        <p>
          I'm a passionate software developer with expertise in creating modern web applications 
          using React, TypeScript, and Node.js. My journey in technology started at an early age, 
          and I've been constantly learning and evolving as a professional.
        </p>
        <p>
          With a strong foundation in computer science principles and hands-on experience building 
          scalable applications, I'm committed to creating high-quality software that solves real-world problems.
        </p>
      </section>

      <section className="experience-section card">
        <h2>Career Highlights</h2>
        <div className="experience-item">
          <h3>Software Developer</h3>
          <p className="company">Tech Innovations Inc.</p>
          <p>Developed and maintained multiple React applications, improving user experience by 40%.</p>
        </div>
        <div className="experience-item">
          <h3>Full Stack Developer</h3>
          <p className="company">Digital Solutions Co.</p>
          <p>Built RESTful APIs and responsive web interfaces using modern JavaScript frameworks.</p>
        </div>
      </section>

      <section className="aspirations-section card">
        <h2>Aspirations & Future Goals</h2>
        <p>
          I'm constantly seeking new challenges to expand my skills. My future goals include:
        </p>
        <ul>
          <li>Leading development teams on complex software projects</li>
          <li>Contributing to open-source initiatives that make a difference</li>
          <li>Mentoring junior developers and sharing knowledge</li>
          <li>Exploring emerging technologies in AI and machine learning</li>
        </ul>
        <p>
          Through continuous learning and practical application, I aim to build impactful software 
          solutions that enhance user experiences.
        </p>
      </section>
    </div>
  );
};

export default Home;
