import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './about.css'
import {useRef, useState } from "react";
import { useEffect } from "react";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import ht from './1.png'
import js from './2.png'
import csss from './3.png'
import cpp from './4.png'
import cinco from './5.png'
import seis from './6.png'
import sete from './7.png'
import oito from './8.png'
import nove from './9.png'
import diez from './10.png'
import onze from './11.png'
import doze from './12.png'
import treze from './13.png'
import fourteen from './14.png'
import cat from './cat.gif'


export const About = () => {
      const fst = useRef();
      const snd = useRef();
      const thr = useRef();
      const fth = useRef();
      const cinc = useRef();
      const sei = useRef();
      const set = useRef();
      const nueve = useRef();
      const dez = useRef();

      const tmp = [fst,snd,thr,fth,cinc,sei,set]

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
        <div className="fix4" id = "skills">
            <div className="selection2">
                <div className="oioi">
                    <div ref = {fst} className="mt-3 impar">
                        <span className ="abt fw-bold">Skills</span>
                        <p className="h3 sum fw-light" >Here you can see the technologies I have more experience on and that I'm most familiar with.</p>
                    </div>
                </div>
                <div className="d-flex flex-column align-items-center container">
                    <div ref = {snd} className = "linha d-flex mt-3 mb-3 impar">
                        <span className="text h5">Frontend</span>
                    </div>
                    <div ref = {thr} className ="d-flex align-items-center justify-content-center par conti">
                        <div className = "skillsCont">
                            <img src={ht} width = "45"/>
                            <span className = "fw-lighter"> HTML </span>
                        </div>
                        <div className = "skillsCont">
                            <img src={csss} width = "45"/>
                            <span className = "fw-lighter"> CSS </span>
                        </div>
                        <div className = "skillsCont">
                            <img src={js} width = "45"/>
                            <span className = "fw-lighter"> JavaScript </span>
                        </div>
                        <div className = "skillsCont">
                            <img src={cinco} width = "45" className="me-1"/>
                            <span className = "fw-lighter"> React </span>
                        </div>
                    </div>
                    <div ref = {fth} className = "linha d-flex mt-5 mb-3 impar">
                        <span className="text h5">Backend</span>
                    </div>
                    <div ref = {cinc} className ="d-flex align-items-center justify-content-center par conti">
                        <div className = "skillsCont">
                            <img src={cpp} width = "45"/>
                            <span className = "fw-lighter"> C/C++ </span>
                        </div>
                        <div className = "skillsCont">
                            <img src={nove} width = "45" className="me-1"/>
                            <span className = "fw-lighter"> Python </span>
                        </div>
                        <div className = "skillsCont">
                            <img src={seis} width = "45"/>
                            <span className = "fw-lighter"> Java </span>
                        </div>
                        <div className = "skillsCont">
                            <img src={diez} width = "45"/>
                            <span className = "fw-lighter"> NodeJS </span>
                        </div>
                        <div className = "skillsCont">
                            <img src={oito} width = "45"/>
                            <span className = "fw-lighter"> PHP </span>
                        </div>
                        <div className = "skillsCont">
                            <img src={fourteen} width = "45"/>
                            <span className = "fw-lighter"> Laravel </span>
                        </div>
                        <hr/>
                    </div>
                    <div ref = {sei} className = "linha d-flex mt-5 mb-2 impar">
                        <span className="text h5">Database</span>
                    </div>
                    <div ref = {set} className ="d-flex align-items-center justify-content-center par mb-5 conti">
                        <div className = "skillsCont">
                            <img src={doze} width = "45"/>
                            <span className = "fw-lighter"> MySQL </span>
                        </div>
                        <div className = "skillsCont">
                            <img src={onze} width = "45" className="me-1"/>
                            <span className = "fw-lighter"> MongoDB </span>
                        </div>
                        <div className = "skillsCont">
                            <img src={treze} width = "45"/>
                            <span className = "fw-lighter"> PostgreSQL </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

