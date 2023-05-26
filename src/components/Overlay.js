import React from "react";
import linked from "../assets/linkedin.png";
import fb from "../assets/facebook.png";
import insta from "../assets/insta.png";
import git from "../assets/git.png";

const Overlay = () => {
  return (
    <div>
      <div className="overlay-email">
        <p>nematbhullar18@gmail.com</p>
        <li><div className="line"></div></li>
      </div>
      <ul className="overlay-socials">
        <li><a href="https://www.linkedin.com/in/nemat-bhullar-781058175/"><img src={linked} alt="linkedin"/></a></li>
        <li><a href="https://github.com/NematBhullar"><img src={git} alt="github"/></a></li>
        <li><a href="https://www.facebook.com/nemat.bhullar"><img src={fb} alt="facebook"/></a></li>
        <li><a href="https://www.instagram.com/nematbhullar/"><img src={insta} alt="instagram"/></a></li>
        <li><div className="line"></div></li>
      </ul>
    </div>
  )
}

export default Overlay;