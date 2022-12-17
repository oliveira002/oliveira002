import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './header.css'

export const Navbar = () => {
    return(
        <header>
                <span className="fw-bold h4 mb-0 logo"> Oliveira </span>
                <nav className = "d-flex">
                    <ul className = "links">
                        <li> <a href= "" className="h5 reset">Home</a></li>
                        <li> <a href= "" className="h5 reset">Projects</a></li>
                        <li> <a href= "" className="h5 reset">About Me</a></li>
                    </ul>
                </nav>
        </header>
    )
}

