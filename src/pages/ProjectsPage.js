import React from "react";
import gitlink from "../assets/git-link.png";
import link from "../assets/link.png";

const ProjectsPage = () => {
  return (
    <div className="projects">
      <h1><span>Projects</span></h1>
      <div className="projects-main">
        
        <div className="each-project-div">
          <p className="project-heading">Title</p>
          <div className="each-project">
          
          </div>
          <div>
            <img src={gitlink} alt="gitlink"/>
            <img src={link} alt="link"/>
          </div>
          <p className="project-skills">React &#183; JavaScript</p>
        </div>
        
        <div className="each-project-div">
          <p className="project-heading">Title</p>
          <div className="each-project">
          
          </div>
          
          <div>
            <img src={gitlink} alt="gitlink"/>
            <img src={link} alt="link"/>
          </div>
        </div>
        
        <div className="each-project-div">
          <p className="project-heading">Title</p>
          <div className="each-project">
          
          </div>
          <div>
            <img src={gitlink} alt="gitlink"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage;
