import React from 'react'
import  './Banner.css'
import banner1 from "./banner1.svg"
import banner2 from "./banner2.svg"
import banner3 from "./banner3.svg"
import banner4 from "./banner4.svg"
import banner5 from "./banner5.svg"
import bannerSide from "./banner-side.svg"

const Banners = () => {
  return (
    <div className='banner-container'>
        <img src={banner1.src} alt="" />
        <img src={banner2.src} alt="" />
        <img src={banner3.src} alt="" />
        <img src={banner4.src} alt="" />
        <img src={banner5.src} alt="" />
        <div className="circle-2"></div>
    </div>
  )
}

export default Banners
