import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './projects.css';
import {useRef, useState } from "react";
import { useEffect } from "react";
import stcp from './stcp.png'
import webid from './webid.png'
import big from './uber.png'
import { Row } from "react-bootstrap";
import { observe } from "react-intersection-observer";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';



export const Projects = () => {

    const projects = [
        {
          id: 1,
          title: "Big Eats",
          type: "web",
          img: big,
          desc: "Development of a website where restaurants can list and offer their menus for take-away, and consequently clients can order them. Developed using pure HTML, CSS, JavaScript, PHP & SQL.",
        },
        {
          id: 2,
          title: "WeBid",
          type: "web",
          img: webid,
          desc: "Development of a website capable of supporting an online auction service. Use of Laravel as a back-end framework and Bootstrap for the front-end. This project was split into 4 phases: Requirements Specification, Database Specification, Architecture Specification and Prototype & Final Product and Presentation.",
        },
        {
            id: 3,
            title: "Public Transports Network",
            type: "algorithms",
            img: stcp,
            desc: "Development of an application in C++ that given a sample of the STCP dataset, would allow the user to find the best path to take between two stops. Use of Graphs and implementation of algorithms like DFS, BFS, Dijkstra & Prim",
          },
          {
            id: 4,
            title: "Serial Port",
            type: "networks",
            img: stcp,
            desc: "Development of an application with two distinct layers, the application and the link layer. This application would allow the transfer of a file between two PC's connected by a Serial Port.",
          },
          {
            id: 5,
            title: "Bomberman",
            type: "algorithms",
            img: stcp,
            desc: "Development of a bomberman game using an object-oriented language (Java). Use of Git as a version control system. Design unit tests using JUnit, apply Design Patterns to solve design problems & identify Code Smells and use Refactoring techniques.",
          },
          {
            id: 6,
            title: "FTP Application",
            type: "networks",
            img: stcp,
            desc: "Development of an FTP Application that given an URL would download the file on the path with the filename specified on the URL.",
          },
      ];   
      
      const fst = useRef();
      const snd = useRef();
      const thr = useRef();
      const fth = useRef()
      const start = projects.filter(proj => proj.type === 'web');
      const [projs, setProjs] = useState(start);
      const [currType, setCurrType] = useState("web");
      const [isVisible, setVisible] = useState(false);

    const handleBtns = (e) => {
        let btn = e.target.value;
        let prev = document.getElementById(currType)
        prev.classList.remove("on");
        let next = document.getElementById(btn);
        next.classList.add("on");
        setCurrType(btn);
    };
    
    useEffect(() => {
      if (currType === "web") {
        setProjs(start);
      } else {
        const filtered = projects.filter((proj) => {
          return (
            proj.type === currType 
          );
        });
        setProjs(filtered);
      }
    }, [currType]);

    const tmp = [fst,snd,thr,fth]

    const cls = "animate__animated animate__bounceInLeft"

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

  
    // { `"proj mt-2"${isVisible ? cls : ""}`}
    return(
        <div className="fix3" id = "projectos">
            <div className="selection mt-2">
                <div className="mx-auto">
                    <div ref = {fst}className="proj mt-5 impar"> Projects </div>
                    <div ref = {snd} className = "par mt-2">
                      <p className="h3" >Here you can view most of the projects I developed, in case you want</p>
                      <div className="h3" >to view them in detail by clicking on them you will be redirected to its repository.</div>
                    </div>
                    <div ref = {thr} className="filters mt-5 impar">
                        <button id = "web"className="on"  value = "web" onClick={handleBtns} > Web Development </button>
                        <button id = "algorithms" value = "algorithms" onClick={handleBtns}> Algorithms & Game Development </button>
                        <button id = "networks" value = "networks" onClick={handleBtns} > Computer Networks </button>
                    </div>
                    <div ref = {fth} className = "ola mt-5">
                      <div className="mt-4 d-flex flex-row flex-wrap justify-content-center ">
                      {projs.length ? projs.map((proj) => (
                        <div key={proj.id} className = "frame d-flex flex-column p-3">
                          <button className="">
                            <h5 className="mt-2 fw-bold">{proj.title} </h5>
                            <img src = {proj.img} width = "320" height= "200"></img>
                            <div className="mt-3 ms-1">
                              <div className="tags">HTML</div>
                            </div>
                          </button>
                          <div className="descr mt-2 ms-1">
                            <span>{proj.desc}</span>
                          </div>
                        </div>

                      )) : <h4>No Projects Yet</h4> }
                      </div>
                     </div>
                </div>
            </div>
        </div>
    )
}