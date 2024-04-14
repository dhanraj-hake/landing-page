import React from 'react'
import "./Home.css"

import Rectangle from "./Rectangle.png"
import Rectangle2 from "./Rectangle2.png"
import Rectangle3 from "./Rectangle3.png"
import Messageion from "./message-icon.png"
import AddUserIcon from "./add-user-icon.png"

const Home = () => {

    return (
        <div className='home'>
            <div className="left">
                <button className='wish-btn'>Explore the world!</button>
                <p className='home-heading'>Travel <span className='color-pink'>top destination </span>
                    of the world</p>
                <p className='home-desc'>We always make our customer happy by providing
                    as many choices as possible </p>
                <div className='home-bottom-btn-container'>
                    <button className='get-statred-btn'>
                        Get Started
                    </button>
                    <button className=' watch-demo-btn'>
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.9688 0.5C5.44875 0.5 0.96875 4.98 0.96875 10.5C0.96875 16.02 5.44875 20.5 10.9688 20.5C16.4888 20.5 20.9688 16.02 20.9688 10.5C20.9688 4.98 16.4988 0.5 10.9688 0.5ZM13.9688 12.73L11.0687 14.4C10.7087 14.61 10.3088 14.71 9.9187 14.71C9.5188 14.71 9.1287 14.61 8.76875 14.4C8.04875 13.98 7.61875 13.24 7.61875 12.4V9.05C7.61875 8.22 8.04875 7.47 8.76875 7.05C9.4888 6.63 10.3487 6.63 11.0787 7.05L13.9787 8.72C14.6987 9.14 15.1287 9.88 15.1287 10.72C15.1287 11.56 14.6987 12.31 13.9688 12.73Z" fill="#5D50C6" />
                        </svg> Watch Demo

                    </button>
                </div>
            </div>
            <div className="right">
                <div className='left relative'>
                    <img className='card-img' src={Rectangle.src} alt="" />
                    <img className="card-img" src={Rectangle2.src} alt="" />
                    <div className='message-icon'>
                        <img src={Messageion.src} alt="" />
                    </div>
                </div>
                <div className='right-right'>
                    <img className="card-img" src={Rectangle3.src} alt="" />
                    <div className='add-user-icon'>
                        <img src={AddUserIcon.src} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
