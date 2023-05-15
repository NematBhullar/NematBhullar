import React from "react";
import logo from './assets/logo.png';

const Navbar = () => {
    return (
        <div className="nav">
            <img src={logo} alt="logo" className="logo"></img>
            <ul className="links">
                <li>Contact Me </li>
                <li>Resume</li>
            </ul>
        </div>
    )
}

export default Navbar;