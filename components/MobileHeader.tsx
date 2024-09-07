import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter, BsTwitterX, BsYoutube } from 'react-icons/bs'
import "../styles/Header.css";
import { FaFacebook, FaInstagram } from 'react-icons/fa';

function MobileHeader() {
  return (
    <>
    <div className='mx-auto flex justify-center flex-col items-center mb-4 bg-gradient-to-br from-red-600 via-navy-900 to-sky-400'>
                <img
                    src="swami.jpg"
                    alt="The American Hindu Logo"
                    className="w-50 h-50 object-cover rounded-full overflow-hidden max-w-[100px] max-h-[100px] bg-red-100 mt-2"
                />
            
    
    <div className="header-socials">
    <a target="_blank" href="https://google.com"><BsFacebook/></a>
    <a target="_blank" href="https://google.com"><BsInstagram/></a>
    <a target="_blank" href="https://google.com"><BsTwitterX/></a>
    <a target="_blank" href="https://google.com"><BsYoutube/></a>
    </div>
    
    </div>
  </>
  )
}

export default MobileHeader;