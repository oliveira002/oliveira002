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


export const Projects = () => {

    const projects = [
        {
          id: 1,
          title: "Big Eats",
          type: "web",
          img: big,
          tags: ["HTML","CSS","JavaScript","PHP"]
        },
        {
          id: 2,
          title: "WeBid",
          type: "web",
          img: webid,
        },
        {
            id: 3,
            title: "STCP",
            type: "algorithms",
            img: stcp,
          },
          {
            id: 4,
            title: "Serial Port",
            type: "networks",
            img: stcp,
          },
          {
            id: 5,
            title: "Bomberman",
            type: "algorithms",
            img: stcp,
          },
          {
            id: 6,
            title: "Airport Service",
            type: "algorithms",
            img: stcp,
          },
      ];   
      
      const myRef = useRef();
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


    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        setVisible(entry.isIntersecting);
        if(entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(myRef.current);
        }
      })
      observer.observe(myRef.current);
    }, [])

    const cls = "animate__animated animate__bounceInLeft"
    // { `"proj mt-2"${isVisible ? cls : ""}`}
    return(
        <div className="fix3" id = "projectos">
            <div className="selection mt-2">
                <div className="mx-auto">

                    <div ref = {myRef}className={ `proj mt-2 ${isVisible ? cls : ""}`}> Projects </div>
                    <p className="h5">Here you can view most of the projects I developed, in case you want</p>
                    <div className="h5" >to view them in detail by clicking on them you will be redirected to its repository.</div>
                    <div className="filters mt-4">
                        <button id = "web"className="on"  value = "web" onClick={handleBtns} > Web Development </button>
                        <button id = "algorithms" value = "algorithms" onClick={handleBtns}> Algorithms </button>
                        <button id = "networks" value = "networks" onClick={handleBtns} > Computer Networks </button>
                    </div>
                    <div className="">
                      <div className="mt-4 d-flex flex-row flex-wrap justify-content-center ">
                      {projs.length ? projs.map((proj) => (
                        <div key={proj.id} className = "frame d-flex flex-column p-3">
                          <h5 className="mt-2 fw-bold">{proj.title} </h5>
                          <img src = {proj.img} width = "320" height= "200"></img>
                          <div className="mt-2">
                            <button className="tags">HTML</button>
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