import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './intro.css'
import 'animate.css';


export const Intro = () => {
  return (
    <div className ="banner">
        <div className="typer h1 fw-bold">
            Hey! I'm Oliveira.
        </div>
        <div className='res h5 animate__animated animate__fadeIn animate__delay-2s'>
            Welcome to my portfolio! I'm studying Informatics and Computing Engineering at FEUP. Here you can find the most interesting projects I developed throughout the course.
        </div>
    </div>
  )
}
