import React from "react";
import logowhite from './assets/logo-white.png';
import logo from './assets/logo-transparent.png';
import { useNavigate } from "react-router-dom";

const Navbar = (state) => {
  const navigate = useNavigate();
  if (state.state === "portfolio") {
    return (
      <div className="nav-blue">
        <img src={logowhite} alt="logo" className="logo" onClick={() => navigate("/")}></img>
        <ul className="links-blue">
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/portfolio")}>Portfolio</li>
          <li>Resume</li>
        </ul>
        <ul className="links-small-blue">
        <li onClick={() => navigate("/")}>H</li>
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
          <li><a href="/#about" className="a-normal">About</a></li>
          <li><a href="/#contact" className="a-normal">Contact</a></li>
          <li onClick={() => navigate("/portfolio")}>Portfolio</li>
          <li>Resume</li>
        </ul>
        <ul className="links-small">
          <li onClick={() => navigate("/")}>H</li>
          <li><a href="/#about" className="a-normal">A</a></li>
          <li><a href="/#contact" className="a-normal">C</a></li>
          <li onClick={() => navigate("/portfolio")}>P</li>
          <li>R</li>
        </ul>
      </div>
    )
  }
}

export default Navbar;