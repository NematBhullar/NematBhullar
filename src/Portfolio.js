import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import invoice from './assets/invoice.png';
import lurkforwork from './assets/lurkforwork.png';
import weatherapp from './assets/weatherapp.png';

const Portfolio = () => {
  return (
    <div>
      <Navbar state="portfolio"/>
      <h1><span>Portfolio</span></h1>
      <div className="each-project">
        <div className="project-box">
          <img src={lurkforwork} className="project-image" alt="lurkforwork"/>
        </div> 

        <div className="project-name">
          <div className="line-dark"></div>
          <p>LurkForWork</p>
          <div className="line-dark"></div>
        </div> 

        <div className="project-box background-lightgrey">
          <p className="project-description">LurkForWork Social Networking Website, a rip-off version of the popular professional social networking tool LinkedIn.</p>
          <div>
            <p className="section-heading"><b>SKILLS</b></p>
            <p>Frontend Development, JavaScript, HTML, CSS, UX/UI Design</p>
          </div>
          <div>
            <p className="section-heading"><b>URL</b></p>
            <a href="https://github.com/NematBhullar/LurkForWork" className="a-blue">https://github.com/NematBhullar/LurkForWork</a>
          </div>
        </div>
      </div>

      <div className="each-project">
        <div className="project-box">
          <img src={weatherapp} className="project-image" alt="weatherapp"/>
        </div> 

        <div className="project-name">
          <div className="line-dark"></div>
          <p>Weather Events</p>
          <div className="line-dark"></div>
        </div>

        <div className="project-box background-lightgrey">
          <p className="project-description">A website that displays weather events 
            and efficiency of power production given the weather conditions of a certain day.</p>
          <div>
            <p className="section-heading"><b>SKILLS</b></p>
            <p>Backend Development, GraphQL, Problem Solving, Analytical Skills, Product Management</p>
          </div>
          <div>
            <p className="section-heading"><b>URL</b></p>
            <a href="https://main--f12a-papa-weather.netlify.app" className="a-blue">https://main--f12a-papa-weather.netlify.app</a>
          </div>
        </div>
      </div>

      <div className="each-project">
        <div className="project-box">
          <img src={invoice} className="project-image" alt="invoice"/>
        </div>

        <div className="project-name">
          <div className="line-dark"></div>
          <p>Icecream E-Invoicing</p>
          <div className="line-dark"></div>
        </div>

        <div className="project-box background-lightgrey">
          <p className="project-description">Icecream E-Invoicing is an invoice transfer application 
          that coverts input into a usable UBL format then sends it to the recipient's email. </p>
          <div>
            <p className="section-heading"><b>SKILLS</b></p>
            <p>Backend Development, Python, APIs, Testing</p>
          </div>
          <div>
            <p className="section-heading"><b>URL</b></p>
            <a href="https://seng2021-app-d4e5c.web.app/" className="a-blue">https://seng2021-app-d4e5c.web.app/</a>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Portfolio;
