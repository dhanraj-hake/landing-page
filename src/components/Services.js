import React from 'react'

import "./Services.css"

import cardImage from "./service-img1.svg"

const Services = () => {
  return (
    <div className='services-container'>
      <div className='totle-box'>
        <p className='color-pink'>Services</p>
        <p className='desc'>Our top value categories for you</p>
      </div>
      <div className="slider">

        <div className='slider-card'>
            <img width="40px" src={cardImage.src} alt="" />
            <p className='title'>Best Tour Guide</p>
            <p className='desc'>Lorem ipsum dolor sit.</p>
        </div>
        

        <div className='slider-card'>
            <img width="40px" src={cardImage.src} alt="" />
            <p className='title'>Best Tour Guide</p>
            <p className='desc'>Lorem ipsum dolor sit.</p>
        </div>

        <div className='slider-card'>
            <img width="40px" src={cardImage.src} alt="" />
            <p className='title'>Best Tour Guide</p>
            <p className='desc'>Lorem ipsum dolor sit.</p>
        </div>

      </div>
    </div>
  )
}

export default Services
