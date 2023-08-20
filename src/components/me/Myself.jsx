import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './myself.css'
import {useRef, useState } from "react";
import { useEffect } from "react";
import { faDownload, faEnvelope, faLocation, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import {Dropdown} from './Dropdown'
import me from './me.jpg'


export const Myself = () => {
      const fst = useRef();
      const snd = useRef();
      const thr = useRef();


      const tmp = [fst,snd,thr]

      useEffect(() => {
        
        for(let i = 0; i < tmp.length; i++) {
          const observer1 = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if(entry.isIntersecting) {
              entry.target.classList.add('animate__animated')
              if(entry.target.classList.contains('ola')) {
                entry.target.classList.add('animate__zoomIn')
              }
              else if(entry.target.classList.contains('impar')) {
                entry.target.classList.add('animate__fadeInLeft')
              }
              else {
                entry.target.classList.add('animate__fadeInRight')
              }
            
              observer1.unobserve(tmp[i].current);
            }
          })
          observer1.observe(tmp[i].current);
        }
      }, [])



    return(
        <div className="fix4 " id = "about">
            <div className="selection2 d-flex flex-column align-items-center">
            <div className="oioi mb d-flex flex-column">
                <div ref={fst} className="mt-3 impar d-flex flex-column align-items-center">
                    <span className ="abt fw-bold">Myself</span>
                    <p className="h3 sum fw-light" >Here you will find information related to my education & career.</p>
                </div>
                <div ref={snd} className="picture par">
                    <img src={me}/>
                    <div className="d-flex flex-column align-items-center mt-1">
                        <span>João Oliveira, 21 years old</span>
                        <div className="d-flex flex-row align-items-center">
                            <FontAwesomeIcon icon={faLocationDot}/>
                            <span className="ms-1">Porto, Portugal</span>
                        </div>
                    </div>              
                </div>
            </div>
            <div className="d-flex flex-column lista mb-5 mt-3 impar" ref = {thr}>
                <Dropdown
                    date="2023 - Present"
                    desc="Currently pursuing a **Master's Degree** in Informatics and Computing Engineering at FEUP."
                    title="Master's Degree @ FEUP"
                />
                <Dropdown
                    date="2020 - 2023"
                    desc="Finished my **Bachelor's Degree** in Informatics and Computing Engineering at FEUP with an average grade of **16.0**."
                    title="Bachelor's Degree @ FEUP"
                />
            </div>
            </div>
        </div>
    )
}

