import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './about.css'
import me from './me.jpg'
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export const About = () => {
    return(
        <div className="fix4">
            <div className="selection2">
                <div className="oioi">
                    <div>
                        <div className="abt">About Me</div>
                        <div className="h5"> Brief introduction</div>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="pic d-flex mb-4">
                        <img src= {me} width ="400" height="380"></img>
                        <div className="rght">
                            <div className="texto">
                                <div className="h3"> I'm a 20 years old student currently in the 3rd year of the Bachelor in Informatics and Computing Engineering. In my free time I enjoy hanging out with my friends, or when I'm too tired just simply do something on my own like watch a TV show.</div>
                            </div>
                            <div className="mt-3">
                                <button className="cv"> Download CV <FontAwesomeIcon className = "ms-2" icon={ faDownload }/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

