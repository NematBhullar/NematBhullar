import React, { useRef } from "react";
import useScrollSnap from "react-use-scroll-snap";
import Navbar from './Navbar';
import Footer from './Footer';
import Typewriter from "typewriter-effect";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  useScrollSnap({ ref: scrollRef, duration: 10, delay: 0});

  return (
    <div>
      <Navbar />
      <div className="home" ref={scrollRef}>
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
      <div className="about" ref={scrollRef}>
        <div className="about-main">
          <h1>About Me</h1>
          <p>About me...</p>
          <p>About me...</p>
          <p>About me...</p>
        </div>
        <div className="button-link">
          <button onClick={() => navigate("/projects")}>Software Projects</button>
          <button onClick={() => navigate("/designs")}>UI/UX Designs</button>
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default Home;