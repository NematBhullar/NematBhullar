import React from "react";
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
            <img src={linked} className="social" alt="linkedin"/>
            <img src={fb} className="social" alt="facebook"/>
            <img src={insta} className="social" alt="instagram"/>
            <img src={git} className="social" alt="github"/>
          </div>
        </div>
      </div>
      
      <div className="footer">
        {/* Footer */}
      </div>
     
      <div className="final-message">Designed and handcrafted by Nemat Bhullar</div>
    </div>
  )
}

export default ContactPage;