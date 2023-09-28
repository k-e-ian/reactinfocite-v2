import React from "react";
import reactLogo from "../assets/logo.svg"


function NavBar() {
    return (
       <nav>
            <img className="nav--logo" src={reactLogo} alt="react_logo" />
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--logo_title">React Course - Project 1</h4>
       </nav>
    );
}

export default NavBar;