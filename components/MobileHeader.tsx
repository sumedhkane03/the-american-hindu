import React from 'react'
import { BsFacebook, BsInstagram, BsTwitterX, BsX, BsYoutube } from 'react-icons/bs'
import "../styles/Team.css";

function MobileHeader() {
  return (
    <>
      <div className='container mx-auto flex justify-center items-center mb-4'>
        <div className="flex items-center space-x-4">
          <div className="rounded-full overflow-hidden max-w-[200px] max-h-[200px] bg-red-100 mt-5">
            <img
              src="swami.jpg"
              alt="The American Hindu Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="member-socials">
        <section className="flex justify-center items-center mb-1 mr-6 font-100">
          <div className="ml-9">
            <a href="https://www.facebook.com/TheAmericanHinduPage"> <BsFacebook />  </a>
          </div>
          <div className="ml-9">
            <a href="https://instagram.com/theamericanhindu"> <BsInstagram />  </a>

          </div>
          <div className="ml-9">
            <a href="https://twitter.com/American_Hindu"> <BsTwitterX />  </a>

          </div>
          <div className="ml-9">
            <BsYoutube />
          </div>
        </section>

      </div>
    </>
  )
}

export default MobileHeader
