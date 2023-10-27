import React from "react";
// import Icons from "../components/Icons.js";
import linked from "../assets/linkedin.png";
import fb from "../assets/facebook.png";
import insta from "../assets/insta.png";
import git from "../assets/git.png";

const ContactPage = () => {
  return (
    <div className="contact">
      <h1><span>Contact Me</span></h1>
      <div className="contact-main">
        <p>For any enquiries, or just to say hello, feel free to reach out through my socials.</p>
        <div className="contact-info">
          
          <div>
            <p className="section-heading">Phone</p>
            <p className="text-info">+ 61 490 120 843</p> 
          </div>
          
          <div>
            <p className="section-heading">Email</p>
            <p className="text-info">nematbhullar18@gmail.com</p>
          </div>
          
          <div>
            <p className="section-heading">Socials</p>
            <a href="https://www.linkedin.com/in/nemat-bhullar-781058175/"><img src={linked} className="social" alt="linkedin"/></a>
            <a href="https://github.com/NematBhullar"><img src={git} className="social" alt="github"/></a>
            <a href="https://www.facebook.com/nemat.bhullar"><img src={fb} className="social" alt="facebook"/></a>
            <a href="https://www.instagram.com/nematbhullar/"><img src={insta} className="social" alt="instagram"/></a>
          </div>
        </div>
      </div>
      
      <a href="/#home"><div className="footer"></div></a>
     
      <div className="final-message">Designed and handcrafted by Nemat Bhullar</div>
      <div className="credits" >Image by vectorpocket on Freepik</div>
    </div>
  )
}

export default ContactPage;