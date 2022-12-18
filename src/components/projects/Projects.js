import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './projects.css'

export const Projects = () => {
    return(
        <div className="fix3">
            <div className="selection mt-2">
                <div className="mx-auto">
                    <div className="proj mt-2"> Projects </div>
                    <div className='h3 sum'>Here you can view most of the projects I developed, in case you want to view them in detail by clicking on them you will be redirected to its repository.</div>
                    <div className="filters mt-4">
                        <button className="on"> All </button>
                        <button> Web Development </button>
                        <button> Algorithms </button>
                        <button> Computer Networks </button>
                    </div>
                    <div className="projs">

                    </div>
                </div>
            </div>
        </div>
    )
}