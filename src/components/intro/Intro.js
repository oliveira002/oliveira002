import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ig from './instagram.svg';
import github from './github.svg';
import lin from './linkedin.svg';
import './intro.css'
import 'animate.css';


export const Intro = () => {
  return (
    <div className='fix'>
      <div className ="banner">
        <div class = "comps">
            <div className="typer fw-bold">
                Hey! I'm Oliveira.
            </div>
            <div className='res h3 animate__animated animate__fadeIn animate__delay-2s'>
                Welcome to my portfolio! I'm studying Informatics and Computing Engineering at FEUP. Here you can find the most interesting projects I developed throughout the course.
            </div>
            <div>
              <button className='work animate__animated animate__bounceIn animate__delay-3s' >
                <span className='h3'>Check Out My Work!</span>
              </button>
            </div>
            <ul className='d-flex socials ps-0 clr'>
              <li><img className='clr' src = {ig} width = "25" height= "25"></img></li>
              <li><img src = {github} width = "25" height= "25"></img></li>
              <li><img src = {lin} width = "25" height= "25"></img></li>
            </ul>
        </div>
      </div>
    </div>
  )
}
