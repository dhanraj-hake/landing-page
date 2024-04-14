import React from 'react'
import "./TravelPoint.css"

import travelPointImg from "./travel-point-img.png"

const TravelPoint = () => {
  return (
    <div className='travel-point-container'>
        <div className="travelleft">
            <img className='travel-point-img' src={travelPointImg.src} alt="" />
            <div className="bg-shape"></div>
        </div>
        <div className="travelright">
            <p className='color-pink travel-title'>Travel Point</p>
            <p className='main-heading'>We helping you find your dream location</p>
            <p className='third-link'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
            <div className='travelright-grid'>
                <div className='flex'>
                <div className='travelright-box'>
                    <p className='num'>500+</p>
                    <p className='desc'>Holiday Package</p>
                </div>
                <div className='travelright-box'>
                    <p className='num'>100</p>
                    <p className='desc'>Holiday Package</p>
                </div>
                </div>
                <div className='flex'>
                <div className='travelright-box'>
                    <p className='num'>7</p>
                    <p className='desc'>Holiday Package</p>
                </div>
                <div className='travelright-box'>
                    <p className='num'>2k+</p>
                    <p className='desc'>Holiday Package</p>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TravelPoint
