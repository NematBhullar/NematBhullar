import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Portfolio = () => {
  return (
    <div>
      <Navbar state="blue"/>
      <h1><span>Portfolio</span></h1>
      <div className="each-project">
        <div className="project-box">Weather Events Website</div>

        <div className="project-name">
          <div className="line-dark"></div>
          <p>Weather Events</p>
          <div className="line-dark"></div>
        </div>
        
        <div className="project-box">Description 1</div>
      </div>

      <div className="each-project">
        <div className="project-box">LurkForWork Social Networking Website</div>   

        <div className="project-name">
          <div className="line-dark"></div>
          <p>LurkForWork</p>
          <div className="line-dark"></div>
        </div> 

        <div className="project-box">Description 2</div>
      </div>

      <div className="each-project">
        <div className="project-box">Icecream E-Invoice Transfer Website</div>

        <div className="project-name">
          <div className="line-dark"></div>
          <p>Ice-cream E-Invoicing</p>
          <div className="line-dark"></div>
        </div>

        <div className="project-box">Description 3</div>
      </div>
      <Footer/>
    </div>
  )
}

export default Portfolio;
