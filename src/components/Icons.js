import React from "react";
import web from "./assets/web.png";
import uxui from "./assets/ux-ui.png";
import paintbrush from "./assets/paintbrush.png";
import camera from "./assets/camera.png";

const Icons = () => {
  return (
    <div className="about-icons">
      <img src={web} className="about-icon" alt="web"/>
      <img src={uxui} className="about-icon" alt="uxui"/>
      <img src={paintbrush} className="about-icon" alt="paintbrush"/>
      <img src={camera} className="about-icon" alt="camera"/>
    </div>
  )
}

export default Icons;
