import React, { useRef } from "react";  
import useScrollSnap from "react-use-scroll-snap";

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import DesignsPage from './pages/DesignsPage';
import ContactPage from './pages/ContactPage';

import Navbar from './components/Navbar';
import Overlay from './components/Overlay';
// import Icons from "./Icons";

const MainPage = () => {
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 10, delay: 0});

  return (
    <div className="scroll-container">
      
      {/* Start page */}
      <div className="scroll-area" ref={scrollRef} id="home">
        <Navbar/>
        <HomePage />
      </div>
      
      {/* About page */}
      <div className="scroll-area" ref={scrollRef} id="about">
        <AboutPage />
      </div>

      {/* Projects page */}
      <div className="scroll-area" ref={scrollRef} id="projects">
        <ProjectsPage />
      </div>

      {/* Designs page */}
      <div className="scroll-area" ref={scrollRef} id="designs">
        <DesignsPage />
      </div>

       {/* Contact page */}
       <div className="scroll-area" ref={scrollRef} id="contact">
        <Overlay />
        <ContactPage />
       </div>
  
    </div>
  );
}

export default MainPage;
