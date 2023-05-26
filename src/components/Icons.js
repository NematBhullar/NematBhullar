import React from "react";
import web from "../assets/web.png";
import uxui from "../assets/ux-ui.png";
import paintbrush from "../assets/paintbrush.png";
import camera from "../assets/camera.png";

const Icons = () => {
  return (
    <div className="footer-icons">
      <img src={web} className="footer-icon" alt="web"/>
      <img src={uxui} className="footer-icon" alt="uxui"/>
      <img src={paintbrush} className="footer-icon" alt="paintbrush"/>
      <img src={camera} className="footer-icon" alt="camera"/>
    </div>
  )
}

export default Icons;
