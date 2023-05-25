import React, { useRef } from "react";
import useScrollSnap from "react-use-scroll-snap";
import Navbar from './Navbar';
import Overlay from './Overlay';
// import Icons from "./Icons";
import Typewriter from "typewriter-effect";
import linked from "./assets/linkedin.png";
import fb from "./assets/facebook.png";
import insta from "./assets/insta.png";
import git from "./assets/git.png";

const Home = () => {
  const scrollRef = useRef(null);

  useScrollSnap({ ref: scrollRef, duration: 10, delay: 0});

  return (
    <div className="scroll-container">
      
      {/* Start page */}
      <div className="scroll-area" ref={scrollRef} id="home">
        <Navbar/>
        <div className="home">
          <div className="home-main">
            <p className="caption1">Hi, my name is</p>
            <div className="name">
              <Typewriter
                onInit={(typewriter)=> {
                  typewriter
                    .typeString("Nemat Bhullar.")
                    .start();
                  }
                }
              />
            </div>
            <p className="caption2">Software Engineer</p>
            <p className="caption3">3rd Year at University of New South Wales</p>
          </div>
        </div>
      </div>
      
      {/* About page */}
      <div className="scroll-area" ref={scrollRef} id="about">
        <div className="about">
          <h1><span>About Me</span></h1>
          <div className="about-main">
            <div className="text">
              <p>Hello! My name is Nemat and I'm currently pursuing a degree in software engineering. I enjoy coding 
                and building websites, whilst spending my free time marketing or creating UI/UX designs. </p>
              <p>I've been interested in web development since high school, where I delved in simple Python projects through
                NCSS and created a tic-tac-toe game and a bowling scorecard.</p>
              <p>Fast forward to today I'm in my penultimate year of engineering, creating various software projects with enthusiastic teams. </p> 
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
            {/* <Icons /> */}
          </div>
        </div>
      </div>

      {/* Projects page */}
      <div className="scroll-area" ref={scrollRef} id="projects">
        <div className="projects">
          <h1><span>Projects</span></h1>
          <div className="projects-main">

          </div>
        </div>
      </div>

      {/* Designs page */}
      <div className="scroll-area" ref={scrollRef} id="designs">
        <div className="designs">
          <h1><span>Designs</span></h1>
          <div className="designs-main">

          </div>
        </div>
      </div>

       {/* Contact page */}
       <div className="scroll-area" ref={scrollRef} id="contact">
        <Overlay />
        <div className="contact">
          <h1><span>Contact Me</span></h1>
          <div className="contact-main">
            <p>For any enquiries, or just to say hello, feel free to reach out through my socials.</p>
            <div className="contact-info">
              <div>
                <p className="section-heading">Phone</p>
                <p>+ 61 490 120 843</p> 
              </div>
              <div>
                <p className="section-heading">Email</p>
                <p>nematbhullar18@gmail.com</p>
              </div>
              <div>
                <p className="section-heading">Socials</p>
                <img src={linked} className="social" alt="linkedin"/>
                <img src={fb} className="social" alt="facebook"/>
                <img src={insta} className="social" alt="instagram"/>
                <img src={git} className="social" alt="github"/>
              </div>
            </div>
          </div>
          <div className="footer">
            {/* Footer */}
          </div>
          <div className="final-message">
            Designed and handcrafted by Nemat Bhullar
          </div>
        </div>
       </div>
    </div>
  );
}

export default Home;
