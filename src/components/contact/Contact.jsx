import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './contact.css'
import {useRef, useState } from "react";
import { useEffect } from "react";
import { faDownload, faLocation, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import resume from '../../../public/resume.pdf';


export const Contact = () => {
      const fst = useRef();
      const snd = useRef();
      const thr = useRef();
      const fth = useRef();
      const cinc = useRef();
      const sei = useRef();
      const set = useRef();
      const nueve = useRef();
      const dez = useRef();

      const tmp = [fst,snd]

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
        <footer className="fix5 d-flex flex-row align-items-center justify-content-center">
            <div className="d-flex flex-column momo impar" ref={fst}>
                <span className ="abt fw-bold h2">Available for freelance opportunities!</span>
                <span className="fw-lighter h5" >Have any question, suggestion, or simply want to get in touch with me?</span>
                <div className="d-flex flex-row mb-4">
                    <span className="fancy fw-bold h5">jlp.oliveira02@gmail.com</span>
                </div>
            </div>
            <nav className = "d-flex flex-column par" ref={snd}>
                <ul className = "links2">
                    <li> <a href= "#home" className="h5 reset">Home</a></li>
                    <li> <a href= "#skills" className="h5 reset">Skills</a></li>
                    <li> <a href= "#projectos" className="h5 reset">Projects</a></li>
                    <li> <a href= "#about" className="h5 reset">About Me</a></li>
                    <li> <a href={resume} target="_blank" className="h5 reset">Resume</a></li>
                </ul>
            </nav>
        </footer>
    )
}

