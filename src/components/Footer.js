import React from 'react'
import './Footer.css'

import fb from "./fb.svg"
import tweteer from "./tweeter.svg"
import insta from "./insta.svg"

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='travalog'>
                <img className='footer-logo' src="/logo.svg" alt="" />
                <p className='footer-text'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                    in a piece of classical Latin literature from 45 BC.</p>
                    <div className='link-icons'>
                        <img width="20px" src={fb.src} alt="" />
                        <img width="20px" src={tweteer.src} alt="" />
                        <img width="20px" src={insta.src} alt="" />
                    </div>
            </div>
            <div className='company'>
                <p className='footer-title'>Company</p>
                <p className="footer-text">About</p>
                <p className="footer-text">Career</p>
                <p className="footer-text">Mobile</p>
            </div>
            <div className='contact'>
            <p className='footer-title'>Contact</p>
                <p className="footer-text">Why Travlog?</p>
                <p className="footer-text">Partner with us</p>
                <p className="footer-text">FAQ's</p>
                <p className="footer-text">Blog</p>
            </div>
            <div className='meet-us'>
            <p className='footer-title'>Meet Us</p>
                <p className="footer-text">+00 92 1234 56789</p>
                <p className="footer-text">info@travlog.com</p>
                <p className="footer-text">205. R Street, New York BD23200</p>
                <p className="footer-text">Blog</p>

            </div>
        </div>
    )
}

export default Footer
