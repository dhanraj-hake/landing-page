import React from 'react'

import "./Contact.css"
import mainIcon from "./mail-icon.svg"

const Contact = () => {
  return (
    <div className='contact-contianer'>
    <div className="contact-main">
        <p className='color-pink title'>subscribe to our newsletter</p>
        <p className='desc'>Prepare yourself & let's explore the beauty of the world</p>
        <div className='contact-form'>
            <div className='input-group'>
                <img width="25px" src={mainIcon.src} alt="" />
                <input placeholder='Your Email' type="email" />
            </div>
            <button className='sub-btn'>Subscribe</button>
        </div>
    </div>
    </div>
  )
}

export default Contact
