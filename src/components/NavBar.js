"use client"

import React, { useRef, useState } from 'react'
import "./Navbar.css"


const NavBar = () => {

    const [show, setShow] = useState(false);

    const linkRef = useRef();

    const toggle = () => {

        setShow((prev) => !prev)
        linkRef.current.classList.toggle("showlinks")
        console.log(linkRef.current.classList)

    }


    return (
        <div className='nav'>

            <svg width="145" height="41" viewBox="0 0 145 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M8.55273 4.09787C7.12207 5.09823 5.82837 6.28098 4.70532 7.6124C9.29462 7.18633 15.1252 7.88204 21.8944 11.2667C29.123 14.8809 34.9438 15.0031 38.9948 14.2217C38.6272 13.1088 38.1644 12.0392 37.6163 11.0224C32.979 11.5115 27.034 10.8641 20.1056 7.39998C15.706 5.20018 11.8278 4.29401 8.55273 4.09787ZM34.9074 7.16665C31.2453 3.075 25.9234 0.5 20 0.5C18.2605 0.5 16.5727 0.722107 14.9637 1.13948C17.1429 1.73409 19.4579 2.60399 21.8944 3.82227C26.967 6.35853 31.3464 7.17516 34.9074 7.16665ZM39.8609 18.1281C34.9669 19.0945 28.2088 18.896 20.1056 14.8444C12.53 11.0566 6.50043 11.1043 2.4339 12.008C2.224 12.0546 2.01904 12.1036 1.81903 12.1546C1.28662 13.3125 0.861634 14.5301 0.556702 15.7945C0.882386 15.7075 1.21893 15.6248 1.56616 15.5476C6.49957 14.4513 13.4701 14.4989 21.8944 18.7111C29.4701 22.4989 35.4996 22.4512 39.5662 21.5475C39.7055 21.5166 39.8428 21.4846 39.9778 21.4516C39.9926 21.1363 40 20.819 40 20.5C40 19.6975 39.9528 18.906 39.8609 18.1281ZM39.3248 25.6723C34.4783 26.5196 27.917 26.1944 20.1056 22.2888C12.53 18.501 6.50043 18.5487 2.4339 19.4524C1.53125 19.6529 0.719239 19.8972 0.00293 20.1551C0.000977 20.2698 0 20.3848 0 20.5C0 31.5457 8.95429 40.5 20 40.5C29.2571 40.5 37.0453 34.2109 39.3248 25.6723Z" fill="url(#paint0_linear_832_821)" />
                <path d="M61.52 28.5V15.18H56.144V11.58H71.312V15.18H65.936V28.5H61.52ZM70.7949 28.5V16.692H74.9469V18.684C75.4909 17.324 76.6669 16.58 78.4749 16.452L79.6509 16.356L79.8909 19.956L77.5629 20.172C76.7149 20.252 76.0989 20.492 75.7149 20.892C75.3309 21.276 75.1389 21.852 75.1389 22.62V28.5H70.7949ZM85.1879 28.764C84.2759 28.764 83.4679 28.596 82.7639 28.26C82.0759 27.924 81.5319 27.468 81.1319 26.892C80.7479 26.3 80.5559 25.628 80.5559 24.876C80.5559 24.028 80.7799 23.356 81.2279 22.86C81.6759 22.348 82.3959 21.988 83.3879 21.78C84.3799 21.556 85.6999 21.444 87.3479 21.444H88.2599V21.108C88.2599 20.532 88.1079 20.124 87.8039 19.884C87.5159 19.644 87.0119 19.524 86.2919 19.524C85.6839 19.524 85.0119 19.62 84.2759 19.812C83.5399 20.004 82.8199 20.3 82.1159 20.7L81.0359 17.892C81.4359 17.604 81.9479 17.348 82.5719 17.124C83.1959 16.9 83.8519 16.732 84.5399 16.62C85.2279 16.492 85.8759 16.428 86.4839 16.428C88.4519 16.428 89.9079 16.852 90.8519 17.7C91.8119 18.548 92.2919 19.884 92.2919 21.708V28.5H88.3079V26.82C88.0999 27.428 87.7239 27.908 87.1799 28.26C86.6359 28.596 85.9719 28.764 85.1879 28.764ZM86.1479 25.98C86.7399 25.98 87.2359 25.788 87.6359 25.404C88.0519 25.02 88.2599 24.516 88.2599 23.892V23.46H87.3479C86.4039 23.46 85.7079 23.564 85.2599 23.772C84.8279 23.964 84.6119 24.276 84.6119 24.708C84.6119 25.076 84.7399 25.38 84.9959 25.62C85.2679 25.86 85.6519 25.98 86.1479 25.98ZM98.0874 28.5L92.9034 16.692H97.3914L99.9594 23.388L102.671 16.692H106.871L101.591 28.5H98.0874ZM112.271 28.764C110.639 28.764 109.455 28.356 108.719 27.54C107.983 26.708 107.615 25.46 107.615 23.796V11.58H111.887V23.652C111.887 24.772 112.399 25.332 113.423 25.332C113.583 25.332 113.743 25.324 113.903 25.308C114.079 25.292 114.247 25.268 114.407 25.236L114.359 28.5C113.719 28.676 113.023 28.764 112.271 28.764ZM121.818 28.764C120.506 28.764 119.362 28.516 118.386 28.02C117.41 27.524 116.65 26.812 116.106 25.884C115.562 24.956 115.29 23.86 115.29 22.596C115.29 21.316 115.562 20.22 116.106 19.308C116.65 18.38 117.41 17.668 118.386 17.172C119.362 16.676 120.506 16.428 121.818 16.428C123.13 16.428 124.274 16.676 125.25 17.172C126.226 17.668 126.978 18.38 127.506 19.308C128.05 20.22 128.322 21.316 128.322 22.596C128.322 23.86 128.05 24.956 127.506 25.884C126.978 26.812 126.226 27.524 125.25 28.02C124.274 28.516 123.13 28.764 121.818 28.764ZM121.818 25.62C122.458 25.62 122.986 25.38 123.402 24.9C123.818 24.42 124.026 23.652 124.026 22.596C124.026 21.524 123.818 20.756 123.402 20.292C122.986 19.812 122.458 19.572 121.818 19.572C121.162 19.572 120.626 19.812 120.21 20.292C119.794 20.756 119.586 21.524 119.586 22.596C119.586 23.652 119.794 24.42 120.21 24.9C120.626 25.38 121.162 25.62 121.818 25.62ZM136.135 33.084C134.951 33.084 133.839 32.972 132.799 32.748C131.775 32.524 130.895 32.156 130.159 31.644L131.263 28.764C131.871 29.132 132.591 29.42 133.423 29.628C134.271 29.836 135.039 29.94 135.727 29.94C136.703 29.94 137.431 29.732 137.911 29.316C138.407 28.916 138.655 28.284 138.655 27.42V26.316C138.319 26.892 137.815 27.348 137.143 27.684C136.471 28.02 135.751 28.188 134.983 28.188C133.927 28.188 133.007 27.948 132.223 27.468C131.439 26.972 130.823 26.284 130.375 25.404C129.943 24.524 129.727 23.492 129.727 22.308C129.727 21.124 129.943 20.092 130.375 19.212C130.823 18.332 131.439 17.652 132.223 17.172C133.007 16.676 133.927 16.428 134.983 16.428C135.783 16.428 136.511 16.604 137.167 16.956C137.839 17.292 138.327 17.74 138.631 18.3V16.692H142.807V26.916C142.807 28.98 142.231 30.524 141.079 31.548C139.927 32.572 138.279 33.084 136.135 33.084ZM136.303 25.044C137.007 25.044 137.567 24.804 137.983 24.324C138.399 23.844 138.607 23.172 138.607 22.308C138.607 21.444 138.399 20.772 137.983 20.292C137.567 19.812 137.007 19.572 136.303 19.572C135.615 19.572 135.063 19.812 134.647 20.292C134.231 20.772 134.023 21.444 134.023 22.308C134.023 23.172 134.231 23.844 134.647 24.324C135.063 24.804 135.615 25.044 136.303 25.044Z" fill="#191825" />
                <defs>
                    <linearGradient id="paint0_linear_832_821" x1="36" y1="43.7" x2="-3.73321" y2="36.0931" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#5D50C6" />
                        <stop offset="1" stopColor="#F85E9F" />
                    </linearGradient>
                </defs>
            </svg>

            <div ref={linkRef} className='link-container'>
                <div></div>
                <div className='links'>
                    <a className='link active'>Home</a>
                    <a className='link '>Discover</a>
                    <a className='link '>Special Deals</a>
                    <a className='link '>Contact</a>
                </div>

                <div className="auth-links">
                    <a className='link '>Log In</a>
                    <button className='signup-btn'>Sign Up</button>
                </div>
            </div>

            <div className='menu' onClick={toggle}>
                {
                    !show ? <svg width="35px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
                        : <svg width="35px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                }
            </div>



        </div>
    )
}

export default NavBar
