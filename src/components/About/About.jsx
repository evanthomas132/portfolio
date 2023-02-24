import React from "react";
import "./about.css";
const About = () => {
  return (
    <div className="about" id="about">
      <div className="about_title">
        <h1>About Me!</h1>
      </div>
      <div className="about_me">
        <p>
          After earning a First-Class degree in Biomedical Science, I was
          uncertain about the career path I wanted to take. It was then that I
          stumbled upon coding and discovered a whole new world of creativity
          and problem-solving. I was immediately drawn to the idea of creating
          something from scratch, using logic and critical thinking to build
          software that could make a real impact in the world. As I delved
          deeper into coding, I found myself engrossed in learning everything I
          could about programming languages, web development, and software
          engineering. The more I learned, the more I realized that coding was
          the perfect fit for me. From that point on, I was fully dedicated to
          learning and developing my skills as a programmer. I spent countless
          hours building projects, taking on challenging assignments, and
          continuously improving my abilities.
        </p>
      </div>
      <div className="skills">
        <div className="technical_skills">
        <h2>Technical Skills</h2>
        <div className="technical_list">
        <ul>
          <li>React</li>
          <li>Javascript</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>RESTful API's</li>
          <li>MongoDB</li>
        </ul>
        </div>
        </div>
        <div className="soft_skills">
          <h2>Soft Skills</h2>
          <div className="soft_list">
            <ul>
              <li>Communication</li>
              <li>Teamword</li>
              <li>Interpersonal Skills</li>
              <li>Adaptability</li>
              <li>Attention to Detail</li>
              <li>Collaboration</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
