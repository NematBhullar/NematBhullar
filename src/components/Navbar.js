import React from "react";
import logo from '../assets/logo.png';
import resume from '../assets/resume.pdf';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="nav">
      <img src={logo} alt="logo" className="logo" onClick={() => navigate("/")}></img>
      <ul className="all-links">
        <li className="each-link"><a href="/#home" className="navbar-links">Home</a></li>
        <li className="each-link"><a href="/#about" className="navbar-links">About</a></li>
        <li className="each-link"><a href="/#projects" className="navbar-links">Projects</a></li>
        <li className="each-link"><a href="/#designs" className="navbar-links">Designs</a></li>
        <li className="each-link"><a href="/#contact" className="navbar-links">Contact</a></li>
        <li className="resume-link"><a href={resume}>Resume</a></li>
      </ul>
      <ul className="all-links-small">
        <li className="each-link"><a href="/#home" className="navbar-links">H</a></li>
        <li className="each-link"><a href="/#about" className="navbar-links">A</a></li>
        <li className="each-link"><a href="/#projects" className="navbar-links">P</a></li>
        <li className="each-link"><a href="/#designs" className="navbar-links">D</a></li>
        <li className="each-link"><a href="/#contact" className="navbar-links">C</a></li>
        <li className="resume-link">R</li>
      </ul>
    </div>
  )
}

export default Navbar;