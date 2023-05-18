import React, { useRef } from "react";
import useScrollSnap from "react-use-scroll-snap";
import Navbar from './Navbar';
import Footer from './Footer';
import Typewriter from "typewriter-effect";
import { useNavigate } from "react-router-dom";
import linked from "./assets/linkedin.png";
import fb from "./assets/facebook.png";
import insta from "./assets/insta.png";
import git from "./assets/git.png";

const Home = () => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  useScrollSnap({ ref: scrollRef, duration: 10, delay: 0});

  return (
    <div className="scroll-container">
      {/* Start page */}
      <div className="scroll-area" ref={scrollRef}>
        <Navbar/>
        <div className="home">
          <div className="scroll">
            <div className="line"></div>
            <p>SCROLL</p>
            <div className="line"></div>
          </div>
          <div className="home-main">
            <p className="caption">Hi, my name is</p>
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
            <p className="caption">Software Engineer</p>
          </div>
        </div>
      </div>
      
      {/* About page */}
      <div className="about scroll-area" ref={scrollRef} id="about">
        <h1><span>About Me</span></h1>
        <div className="about-main">
          <p>Hello! My name is Nemat and I'm currently pursuing a degree in software engineering. I enjoy coding 
            and building websites, whilst spending my free time marketing or creating UI/UX designs. </p>
          <p>I've been interested in web development since high school, where I delved in simple Python projects through
            NCSS and created a tic-tac-toe game and a bowling scorecard.</p>
          <p>Fast forward to today I'm in my penultimate year of engineering, creating various software projects with enthusiastic teams. </p> 
        </div>
        <div className="button-link">
          <button onClick={() => navigate("/portfolio")}>Portfolio</button>
          <button>Resume</button>
        </div>
        <hr />
      </div>

       {/* Contact page */}
       <div className="scroll-area" ref={scrollRef} id="contact">
        <div className="contact">
          <div className="contact-main">
            <h1><span>Contact Me</span></h1>
            <p>For any enquiries, or just to say hello, feel free to reach out through my socials.</p>
          </div>
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
          <hr />
        </div>
        <Footer/>
       </div>
    </div>
  );
}

export default Home;
