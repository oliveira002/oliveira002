import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './projects.css';
import { useState } from "react";
import { useEffect } from "react";

export const Projects = () => {


    const projects = [
        {
          title: "Big Eats",
          type: "web",
        },
        {
          title: "WeBid",
          type: "web",
        },
        {
            title: "STCP",
            type: "algorithms",
          },
      ];   
      
      const [projs, setProjs] = useState(projects);
      const [currType, setCurrType] = useState("All");


    const handleBtns = (e) => {
        let btn = e.target.value;
        setCurrType(btn);
    };
    
    useEffect(() => {
        if (currType === "all") {
          setProjs(projects);
        } else {
          const filtered = projects.filter((proj) => {
            return (
              proj.type === currType 
            );
          });
          setProjs(filtered);
        }
      }, [currType]);

    return(
        <div className="fix3">
            <div className="selection mt-2">
                <div className="mx-auto">
                    <div className="proj mt-2"> Projects </div>
                    <div className='h3 sum'>Here you can view most of the projects I developed, in case you want to view them in detail by clicking on them you will be redirected to its repository.</div>
                    <div className="filters mt-4">
                        <button className="on" onClick={handleBtns} value = "all"> All </button>
                        <button value = "web"> Web Development </button>
                        <button value = "algorithms" onClick={handleBtns}> Algorithms </button>
                        <button value = "networks"> Computer Networks </button>
                    </div>
                    {projs.map((proj) => (
                        <h4>Project Name: {proj.title} </h4>
                    ))}
                </div>
            </div>
        </div>
    )
}