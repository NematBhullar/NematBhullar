import React from "react";
import logo from './assets/logo-transparent.png';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className="nav">
            <img src={logo} alt="logo" className="logo" onClick={() => navigate("/")}></img>
            <ul className="links">
                <li>Contact Me </li>
                <li>Resume</li>
            </ul>
        </div>
    )
}

export default Navbar;