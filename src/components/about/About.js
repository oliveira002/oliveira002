import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './about.css'
import me from './me.jpg'
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
    return(
        <div className="fix4">
            <div className="selection2">
                <div className="oioi">
                    <div className="mt-2">
                        <div className="abt fw-bold">About Me</div>
                        <div className="h5 fw-bold"> ~ a brief introduction</div>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="pic d-flex mb-4 mt-5">
                        <img className="me" src= {me} width ="350" height="320"></img>
                        <div className="rght">
                            <div className="d-flex pronto ms-4">
                                <div className="texto">
                                    <div className="h4 fw-light ">I'm <span className="h4 fw-bold"> 20 </span> Years Old and I'm studying <span className="h4 fw-bold">Informatics and Computing Engineering</span> at <span className="h4 fw-bold">FEUP</span> (3rd year)</div>
                                    <div className="h4 fw-light">I'm a very <span className="h4 fw-bold"> Flexible </span> and <span className="h4 fw-bold"> Communicate </span> person, always looking for challenges to improve and test my knowledge!</div>
                                    <div className="mt-4" >
                                        <button className="cv"> Download CV <FontAwesomeIcon className = "ms-2" icon={ faDownload }/></button>
                                    </div>
                                </div>
                                <div className="skills ms-4">
                            <span className="sheader h4 fw-bold"> My Skills </span>
                            <div className="container me-5">
                                <div class="row mt-4">
                                    <div class="col-sm">
                                        <div className="d-flex jojo">
                                            <img src = {ht}width="60" height = "60"></img>
                                            <span> HTML </span>
                                        </div>
                                    </div>
                                    <div class="col-sm">
                                        <div className="d-flex jojo">
                                                <img src = {csss}width="60" height = "60"></img>
                                                <span> CSS </span>
                                        </div>
                                    </div>
                                    <div class="col-sm">
                                        <div className="d-flex jojo">
                                                <img src = {js}width="60" height = "60"></img>
                                                <span> JavaScript </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-4">
                                    <div class="col-sm">
                                        <div className="d-flex jojo">
                                            <img src = {cpp}width="60" height = "60"></img>
                                            <span> C/C++ </span>
                                        </div>
                                    </div>
                                    <div class="col-sm">
                                        <div className="d-flex jojo">
                                                <img src = {cinco}width="60" height = "60"></img>
                                                <span> Java </span>
                                        </div>
                                    </div>
                                    <div class="col-sm">
                                        <div className="d-flex jojo">
                                                <img src = {nove}width="60" height = "60"></img>
                                                <span> Python </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-4">
                                    <div class="col-sm">
                                        <div className="d-flex jojo">
                                            <img src = {sete}width="60" height = "60"></img>
                                            <span> SQL </span>
                                        </div>
                                    </div>
                                    <div class="col-sm">
                                        <div className="d-flex jojo">
                                                <img src = {oito}width="60" height = "60"></img>
                                                <span> PHP </span>
                                        </div>
                                    </div>
                                    <div class="col-sm">
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

