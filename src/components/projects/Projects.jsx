import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './projects.css';
import {useRef, useState } from "react";
import { useEffect } from "react";
import uber from './food.png'
import sensor from './sensor.png'
import webid from './webid.png'
import stcp from './stcp.png'
import big from './bigeats.png'
import asae from './asae.jpg'
import shop from './shop.jpg'
import { observe } from "react-intersection-observer";



export const Projects = () => {

    const projects = [
        {
          id: 1,
          title: "Big Eats",
          type: "web",
          img: uber,
          tags: ["HTML","CSS","JavaScript","PHP"],
          desc: "Development of a website where restaurants can list and offer their menus for take-away, and consequently clients can order them.",
          link: "https://github.com/oliveira002/FEUP-LTW",

        },
        {
          id: 2,
          title: "WeBid",
          type: "web",
          img: webid,
          tags: ["HTML","CSS","JavaScript","Laravel","Bootstrap"],
          desc: "Development of a website capable of supporting an online auction service. Users can create/bid on the different auctions that are available at the time",
            link: "https://github.com/oliveira002/FEUP-LBAW",
        },
        {
          id: 6,
          title: "Public Transports Network",
          type: "ia",
          img: stcp,
          tags: ["C++", "Graphs"],
          desc: "Development of an application that given a sample of the STCP dataset, would allow the user to find the best path to take between two stops.",
          link: "https://github.com/oliveira002/FEUP-AED/tree/main/PROJ2",
        },
        {
          id: 7,
          title: "ASAE Optimal Route Problem",
          type: "ia",
          img: asae,
          tags: ["Python","Optimization"],
          desc: "Development of algorithms to solve the ASAE's problem of planning and resources' allocation to cover the inspection of the establishments.",
            link: "https://github.com/oliveira002/FEUP-RCOM/tree/main/PROJ2",
        },
        {
          id: 8,
          title: "Online Shopper Purchasing Intention",
          type: "ia",
          img: shop,
          tags: ["Machine Learning","Python","Classification"],
          desc: "Supervised learning project that focused on the application of Machine Learning models.",
            link: "https://github.com/oliveira002/FEUP-RCOM/tree/main/PROJ2",
        },
        {
          id: 9,
          title: "SensorHub",
          type: "web",
          img: sensor,
          tags: ["ReactJS","NodeJS","MongoDB"],
          desc: "Development of a Full Stack Web Application that allows the configuration of different Kallisto devices and also display real-time data from the sensors.",
            link: "https://github.com/oliveira002/FEUP-RCOM/tree/main/PROJ2",
        },
      ];   
      
      const fst = useRef();
      const snd = useRef();
      const thr = useRef();
      const fth = useRef();
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

  
    return(
        <div className="fix3" id = "projectos">
            <div className="selection">
                <div className="mx-auto boas">
                    <div ref = {fst}className="proj impar mt-4"> Projects </div>
                    <div ref = {snd} className = "par mt-2">
                      <p className="h3 sum" >Here you can view some of the projects I developed, in case you want to view them in detail by clicking on them you will be redirected to its repository</p>
                    </div>
                    <div ref = {thr} className="filters mt-5 impar">
                        <button id = "web"className="on"  value = "web" onClick={handleBtns} > Web Development </button>
                        <button id = "ia" value = "ia" onClick={handleBtns}> Artificial Intelligence </button>
                        <button id = "other" value = "other" onClick={handleBtns} > Other </button>
                    </div>
                    <div ref = {fth} className = "ola mt-5 mb-5">
                      <div className="mt-4 d-flex justify-content-center flex-wrap ">
                      {projs.length ? projs.map((proj,index) => (
                        <div key={proj.id} className = 'frame p-3 align-items-center'>
                            <div className="second">
                              <div className="images">
                                {proj.id !== 9 ?  <h5 className="mt-2 fw-bold tit">{proj.title} </h5> : null
                                }
                                <img src = {proj.img} width = "320" height= "200"></img>
                              </div>
                              <div className="mt-3 ms-1">
                                <div className="d-flex all">
                                  {proj.tags.map((_, i) => (
                                    <div className="tags me-2" key={i+10}>{proj.tags[i]}</div>
                                  ))}
                                </div>
                              </div>
                              <div className="descr mt-2 ms-1">
                                <span>{proj.desc}</span>
                              </div>
                            </div>
                            <div className="mt-3 ms-2 mb-4 rdm">
                                <a href = {proj.link} className="button-34" target="_blank" role="button">Repository</a>
                            </div>
                        </div>
                      )) 
                      : 
                      <h4>No Projects Yet</h4>
                      }
                      </div>
                     </div>
                </div>
            </div>
        </div>
    )
}