import React from "react";
import logowhite from './assets/logo-white.png';
import logo from './assets/logo-transparent.png';
import { useNavigate } from "react-router-dom";

const Navbar = (state) => {
  const navigate = useNavigate();
  if (state.state === "blue") {
    return (
      <div className="nav-blue">
        <img src={logowhite} alt="logo" className="logo" onClick={() => navigate("/")}></img>
        <ul className="links-blue">
          <li onClick={() => navigate("/")}>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li onClick={() => navigate("/portfolio")}>Portfolio</li>
          <li>Resume</li>
        </ul>
        <ul className="links-small-blue">
          <li>H</li>
          <li>A</li>
          <li>C</li>
          <li onClick={() => navigate("/portfolio")}>P</li>
          <li>R</li>
        </ul>
      </div>
    )
  } else {
    return (
      <div className="nav">
        <img src={logo} alt="logo" className="logo" onClick={() => navigate("/")}></img>
        <ul className="links">
          <li onClick={() => navigate("/")}>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li onClick={() => navigate("/portfolio")}>Portfolio</li>
          <li>Resume</li>
        </ul>
        <ul className="links-small">
          <li onClick={() => navigate("/")}>H</li>
          <li>A</li>
          <li>C</li>
          <li onClick={() => navigate("/portfolio")}>P</li>
          <li>R</li>
        </ul>
      </div>
    )
  }
}

export default Navbar;