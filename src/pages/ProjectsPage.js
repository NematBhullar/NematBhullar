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
          <div className="main-content">
            <div className="each-project">
              <img src={weather} alt="weather" className="each-project-image"/>
              {/* <div className="project-text-overlay">
              </div> */}
            </div>
            <div className="project-caption">
              <div className="project-heading-div">
                <p className="project-heading">Weather Events</p>
                <div className="link-icons">
                  <a href="https://github.com/NematBhullar/PapaWeatherEvents"><img src={gitlink} alt="gitlink"/></a>
                  <a href="https://main--f12a-papa-weather.netlify.app/"><img src={link} alt="link"/></a>
                </div>
              </div>
              <p className="project-text">A website that displays weather events 
                and efficiency of power production given the weather conditions of a certain day</p>
              <p className="project-skills">GraphQL &#183; Python &#183; React &#183; Product Management</p>
            </div>
          </div>
        </div>
        
        <div className="each-project-div">
          <div className="main-content">
            <div className="each-project">
              <img src={invoice} alt="invoice" className="each-project-image"/>
              {/* <div className="project-text-overlay">
              </div> */}
            </div>
            <div className="project-caption">
              <div className="project-heading-div">
                <p className="project-heading">E-Invoicing</p>
                <div className="link-icons">
                  <a href="https://github.com/NematBhullar/IcecreamInvoicing"><img src={gitlink} alt="gitlink"/></a>
                </div>
              </div>
              <p className="project-text">An invoice transfer application 
                that coverts input into a usable UBL format then sends it to the recipient's email.</p>
              <p className="project-skills">Python &#183; APIs &#183; React &#183; Testing</p>
            </div>
          </div>
        </div>

        <div className="each-project-div">
          <div className="main-content">
            <div className="each-project">
              <img src={lurkforwork} alt="lurkforwork" className="each-project-image"/>
              <div className="project-text-overlay">
              </div>
            </div>
            <div className="project-caption">
              <div className="project-heading-div">
                <p className="project-heading">LurkForWork</p>
                <div className="link-icons">
                  <a href="https://github.com/NematBhullar/LurkForWork"><img src={gitlink} alt="gitlink"/></a>
                </div>
              </div>
              <p className="project-text">LurkForWork Social Networking Website is a rip-off version of the popular professional social networking tool, LinkedIn.</p>
              <p className="project-skills">JavaScript &#183; HTML &#183; CSS &#183; UX/UI Design</p>
            </div>
          </div>
        </div>
      
      </div>
      <div className="final-message">
        <a href="/#designs">
        </a>
      </div>
    </div>
  )
}

export default ProjectsPage;
