import React from "react";
import Arrow from "../components/Arrow.js";
import gitlink from "../assets/git-link.png";
import link from "../assets/link.png";
import weather from "../project-assets/weatherapp.png";
import invoice from "../project-assets/invoice.png";
import lurkforwork from "../project-assets/lurkforwork.png";


const ProjectsPage = () => {
  return (
    <div className="projects">
      <h1><span>Projects</span></h1>
      <div className="projects-main">
        
        <div className="each-project-div">
          <p className="project-heading">Title</p>
          <div className="each-project">
            <img src={weather} alt="weather" className="each-project-image"/>
            <div className="project-text-overlay">
              <p className="project-text">Description</p>
            </div>
          </div>
          <div className="link-icons">
            <img src={gitlink} alt="gitlink"/>
            <img src={link} alt="link"/>
          </div>
          <p className="project-skills">React &#183; JavaScript</p>
        </div>
        
        <div className="each-project-div">
          <p className="project-heading">Title</p>
          <div className="each-project">
            <img src={invoice} alt="invoice" className="each-project-image"/>
            <div className="project-text-overlay">
              <p className="project-text">Description</p>
            </div>
          </div>
          <div className="link-icons">
            <img src={gitlink} alt="gitlink"/>
            <img src={link} alt="link"/>
          </div>
        </div>

        <div className="each-project-div">
          <p className="project-heading">Title</p>
          <div className="each-project">
            <img src={lurkforwork} alt="lurkforwork" className="each-project-image"/>
            <div className="project-text-overlay">
              <p className="project-text">Description</p>
            </div>
          </div>
          <div className="link-icons">
            <img src={gitlink} alt="gitlink"/>
          </div>
        </div>
      </div>
      <div className="final-message">
        <a href="/#designs">
          <Arrow />
        </a>
      </div>
    </div>
  )
}

export default ProjectsPage;
