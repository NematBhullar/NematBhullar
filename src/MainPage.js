import React, { useRef } from "react";  

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import DesignsPage from './pages/DesignsPage';
import ContactPage from './pages/ContactPage';

import Overlay from './components/Overlay';
// import Icons from "./Icons";

const MainPage = () => {
  const scrollRef = useRef(null);

  return (
    <div className="scroll-container">
      
      {/* Start page */}
      <div className="scroll-area" ref={scrollRef} id="home">
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
