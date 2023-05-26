import React from "react";
import Arrow from "../components/Arrow.js";

const AboutPage = () => {
  return (
    <div className="about">
      <h1><span>About Me</span></h1>
      <div className="about-main">
        <div className="text">
          <p>Hello! My name is Nemat and I'm currently pursuing a degree in software engineering. I enjoy <b className="highlight">coding 
            and building websites</b>, whilst spending my free time marketing, partaking in photography or creating <b className="highlight">UI/UX designs.</b> </p>
          <p>I've been interested in web development since high school, where I delved in simple Python projects through <b className="highlight">NCSS</b> and created a tic-tac-toe game and a bowling scorecard.</p>
          <p>Fast forward to today I'm in my <b className="highlight">penultimate year</b> of engineering, creating various software projects with enthusiastic teams. </p> 
        </div>
        <div className="skill-container">
          <div className="skill-div">
            <p className="skill-heading"><center>Frontend</center></p>
            <ul className="skill-list">
              <li>JavaScript</li>
              <li>React</li>
              <li>HTML/CSS</li>
              <li>Figma</li>
            </ul>
          </div>
          <div className="skill-div">
            <p className="skill-heading"><center>Backend</center></p>
            <ul className="skill-list">
              <li>Python</li>
              <li>Java</li>
              <li>C</li>
              <li>SQL/PostgreSQL</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="final-message">
        <a href="/#projects">
          <Arrow />
        </a>
      </div>
    </div>
  )
}

export default AboutPage;