import React from 'react'

import { BsFacebook, BsInstagram, BsTwitter, BsTwitterX, BsYoutube } from 'react-icons/bs'
import "../styles/Header.css";
import "../styles/Book.css";
import { FaFacebook, FaInstagram } from 'react-icons/fa';
// import { Navbar } from 'react-bootstrap';
import NavbarHeader from '../components//Navbar.js';

function MobileHeader() {
  return (
    <>
      <div>

        <div className='mobile-title mx-auto flex justify-center flex-col items-center bg-gradient-to-br from-red-600 via-navy-900 to-sky-400'>
          <p className=' mt-2 text-3xl font-semibold font-sans-serif '>The American Hindu</p> 
          {/* text-3xl font-semibold font-serif pt-3  */}
          <a href='#home'>
            <img
              src="swami.jpg"
              alt="The American Hindu Logo"
              className=" w-50 h-50 object-cover rounded-full overflow-hidden max-w-[100px] max-h-[100px] bg-red-100 mt-2 mb-6"
            />
          </a>


          {/* <div className="header-socials">
            <a className='pr-3' target="_blank" href="https://facebook.com/TheAmericanHinduPage"><BsFacebook /></a>
            <a className='pr-3' target="_blank" href="https://instagram.com/theamericanhindu"><BsInstagram /></a>
            <a target="_blank" href="https://x.com/American_Hindu"><BsTwitterX /></a>
            
          </div> */}

        </div>
      </div>
    </>

  )
}

export default MobileHeader;

