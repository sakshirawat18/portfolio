import React from 'react'
import '../style/Hero.css'
import line from '../assets/line.png'
import model from '../assets/model.png'

import Navbar from './Navbar'

const Hero = () => {
  return (
    <div className="Main">
      <Navbar />
      <div className="Hero-Container">
        <div className="Hero-left">
          <h1 className='title'>Think. Make. Solve.</h1>
          <div className='subtitle'>
            <img src={line} alt="line" /> What we Do
          </div>
          <p className='description'>
            we enjoy creating delightful, human-centered digital experiences.
          </p>
          <button className='btn'>Learn More</button>
        </div>

        <div className="Hero-right">
          {/* 3d model */}
          <img src={model} alt="model" />
        </div>
      </div>
    </div>
  )
}

export default Hero