import React from 'react'

import { BsFacebook, BsInstagram, BsTwitter, BsTwitterX, BsYoutube } from 'react-icons/bs'
import "../styles/Header.css";
import { FaFacebook, FaInstagram } from 'react-icons/fa';


function MobileHeader() {
  return (
    <>

      <div className='text-over-image-container mx-auto flex justify-center flex-col items-center  bg-gradient-to-br from-red-600 via-navy-900 to-sky-400'>
        <div>
          <img
            src="TAHSwami(2).png"
            alt="The American Hindu Logo"
            className="w-60 h-60 object-cover rounded-full overflow-hidden max-w-[130px] max-h-[130px] bg-red-100 mt-2 mb-2" />

          {/* <p className='mb-4 ml-6 justify-center font-semibold	mobile-header-the-american'>The American</p>
          <p className =' ml-10 justify-center font-bold		mobile-header-hindu'>Hindu</p> */}
        </div>



        {/* <div className="header-socials">
    <a target="_blank" href="https://google.com"><BsFacebook/></a>
    <a target="_blank" href="https://google.com"><BsInstagram/></a>
    <a target="_blank" href="https://google.com"><BsTwitterX/></a>
    <a target="_blank" href="https://google.com"><BsYoutube/></a>
    </div> */}

      </div>
    </>
  )
}

export default MobileHeader;

