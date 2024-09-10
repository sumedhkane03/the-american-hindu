import React from 'react'

import { BsFacebook, BsInstagram, BsTwitter, BsTwitterX, BsYoutube } from 'react-icons/bs'
import "../styles/Header.css";
import { FaFacebook, FaInstagram } from 'react-icons/fa';


function MobileHeader() {
  return (
    <>

      <div className='pl-2 d-header flex-col items-center '>
        <div>
          <img
            src="TAHSwami(2).png"
            alt="The American Hindu Logo"
            className="mt-1 w-60 h-60 object-cover rounded-full overflow-hidden max-w-[60px] max-h-[60px] bg-red-100" />

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

