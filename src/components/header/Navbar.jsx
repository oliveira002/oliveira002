import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './header.css'
import resume from '../../../public/resume.pdf';

export const Navbar = () => {
    return(
        <div className="fix2" id = "home">
        <header>
                <a href="#home" className="fw-bold h4 mb-0 ms-0 logo"> João Oliveira </a>
                <nav className = "d-flex">
                    <ul className = "links">
                        <li> <a href= "#home" className="h5 reset">Home</a></li>
                        <li> <a href= "#skills" className="h5 reset">Skills</a></li>
                        <li> <a href= "#projectos" className="h5 reset">Projects</a></li>
                        <li> <a href= "#about" className="h5 reset">About Me</a></li>
                        <li> <a href={resume} target="_blank" className="h5 reset">Resume</a></li>
                    </ul>
                </nav>
        </header>
        </div>
    )
}

