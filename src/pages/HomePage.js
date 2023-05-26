import React from "react";
import Typewriter from "typewriter-effect";
import Arrow from "../components/Arrow.js";

const HomePage = () => {
  return (
    <div className="home">
      <div className="home-main">
        <p className="caption1">Hi, my name is</p>
        <div className="name">
          <Typewriter
            onInit={(typewriter)=> {
              typewriter
                .typeString("Nemat Bhullar.")
                .start();
            }}
          />
        </div>
        <p className="caption2">I'm a Software Engineer, currently in my 3rd year of study at the University of New South Wales.</p>
      </div>
      <div className="final-message down-arrow">
        <a href="/#about">
          <Arrow />
        </a>
      </div>
    </div>
  )
}

export default HomePage;