import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './about.css'
import me from './me.jpg'
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

      const tmp = [fst,snd,thr,fth,cinc,sei,set,nueve,dez]

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
        <div className="fix4" id = "about">
            <div className="selection2">
                <div className="oioi">
                    <div ref = {fst} className="mt-5 impar">
                        <div className ="abt fw-bold">About Me</div>
                        <div className="h5 fw-bold"> ~ a brief introduction</div>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="pic d-flex mb-4 mt-5">
                        <img ref = {snd} className="me par" src= {me} width ="350" height="320"></img>
                        <div className="rght">
                            <div className="d-flex pronto ms-4">
                                <div className="texto">
                                    <div ref = {thr} className="h4 fw-light par ">I'm <span className="h4 fw-bold"> 20 </span> Years Old and I'm studying <span className="h4 fw-bold">Informatics and Computing Engineering</span> at <span className="h4 fw-bold">FEUP</span> (3rd year)</div>
                                    <div ref = {fth} className="h4 fw-light par">I'm a very <span className="h4 fw-bold"> Flexible </span> and <span className="h4 fw-bold"> Communicate </span> person, always looking for challenges to improve and test my knowledge!</div>
                                    <div className="mt-4" >
                                        <a href = "https://drive.google.com/uc?export=download&id=1PiAWjbF3X4UDsaIptI91QwnMeMpjqZc7" ref = {cinc} className="cv par animate__delay-3s"> Download CV <FontAwesomeIcon className = "ms-2" icon={ faDownload }/></a>
                                    </div>
                                </div>
                                <div className="skills ms-4">
                            <span ref = {sei} className="sheader h4 fw-bold impar animate__delay-1s"> My Skills </span>
                            <div className="container me-5">
                                <div ref = {set} className="row mt-4 impar animate__delay-2s">
                                    <div className="col-sm">
                                        <div className="d-flex jojo">
                                            <img src = {ht}width="60" height = "60"></img>
                                            <span> HTML </span>
                                        </div>
                                    </div>
                                    <div className="col-sm impar">
                                        <div className="d-flex jojo">
                                                <img src = {csss}width="60" height = "60"></img>
                                                <span> CSS </span>
                                        </div>
                                    </div>
                                    <div className="col-sm">
                                        <div className="d-flex jojo">
                                                <img src = {js}width="60" height = "60"></img>
                                                <span> JavaScript </span>
                                        </div>
                                    </div>
                                </div>
                                <div ref = {nueve} className="row mt-4 animate__delay-2s">
                                    <div className="col-sm">
                                        <div className="d-flex jojo">
                                            <img src = {cpp}width="60" height = "60"></img>
                                            <span> C/C++ </span>
                                        </div>
                                    </div>
                                    <div className="col-sm">
                                        <div className="d-flex jojo">
                                                <img src = {cinco}width="60" height = "60"></img>
                                                <span> Java </span>
                                        </div>
                                    </div>
                                    <div className="col-sm">
                                        <div className="d-flex jojo">
                                                <img src = {nove}width="60" height = "60"></img>
                                                <span> Python </span>
                                        </div>
                                    </div>
                                </div>
                                <div ref = {dez} className="row mt-4 animate__delay-2s impar">
                                    <div className="col-sm">
                                        <div className="d-flex jojo">
                                            <img src = {sete}width="60" height = "60"></img>
                                            <span> SQL </span>
                                        </div>
                                    </div>
                                    <div className="col-sm">
                                        <div className="d-flex jojo">
                                                <img src = {oito}width="60" height = "60"></img>
                                                <span> PHP </span>
                                        </div>
                                    </div>
                                    <div className="col-sm">
                                        <div className="d-flex jojo">
                                                <img src = {seis}width="60" height = "60"></img>
                                                <span> Haskell </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

