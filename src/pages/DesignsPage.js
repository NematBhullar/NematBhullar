import React from "react";
import Slider from "../components/Slider.js";
import Arrow from "../components/Arrow.js";

const DesignsPage = () => {
  return (
    <div className="designs">
      <h1><span>Designs</span></h1>
      <div className="designs-main">
        <Slider />
      </div>
      <div className="final-message">
        <a href="/#contact">
        </a>
      </div>
    </div>
  )
}

export default DesignsPage;