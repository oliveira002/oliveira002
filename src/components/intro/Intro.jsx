import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ig from './instagram.svg';
import github from './github.svg';
import lin from './linkedin.svg';
import ast from './ast.gif'
import './intro.css'
import 'animate.css';


export const Intro = () => {
  return (
    <div className='fix'>
      <div className ="banner">
        <div className='d-flex'>
          <div className = "comps">
              <div className="typer fw-bold">
                  Hey! I'm Oliveira.
              </div>
              <div className='res h3 animate__animated animate__fadeIn animate__delay-2s'>
                  Welcome to my portfolio! I'm studying Informatics and Computing Engineering at FEUP. Here you can find the most interesting projects I developed throughout the course.
              </div>
              <div className='d-flex amazing'>
                <div className='animate__animated animate__bounceIn animate__delay-3s'>
                  <a href = '#'>
                    <button className='work'>
                      <span className='h3'>Check Out My Work!</span>
                    </button>
                  </a>
                </div>
                <ul className='d-flex socials ps-0 clr ms-5 animate__animated animate__bounceInLeft animate__delay-4s'>
                  <li> <a href='https://www.instagram.com/joaowtv/' target="_blank"><img src = {ig} width = "25" height= "25"></img></a></li>
                  <li> <a href='https://github.com/oliveira002' target="_blank"><img src = {github} width = "25" height= "25"></img></a></li>
                  <li> <a href='https://www.linkedin.com/in/oliveira002/' target="_blank"><img src = {lin} width = "25" height= "25"></img> </a></li>
                </ul>
              </div>
          </div>
          <div>
            <img src = {ast} className = 'gif animate__animated animate__delay-4s animate__fadeInRight'></img>
          </div>
        </div>
      </div>
    </div>
  )
}
