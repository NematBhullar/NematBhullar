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
        <li><img src={linked} alt="linkedin"/></li>
        <li><img src={fb} alt="facebook"/></li>
        <li><img src={insta} alt="instagram"/></li>
        <li><img src={git} alt="github"/></li>
        <li><div className="line"></div></li>
      </ul>
    </div>
  )
}

export default Overlay;