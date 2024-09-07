import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import "../styles/Team.css";

function MobileHeader() {
  return (
    <>
    <div className='container mx-auto flex justify-center items-center mb-4'>
        <div className="flex items-center space-x-4">
                <div className="rounded-full overflow-hidden max-w-[200px] max-h-[200px] bg-red-100">
                <img
                    src="swami.jpg"
                    alt="The American Hindu Logo"
                    className="w-full h-full object-cover"
                />
                </div>
            </div>
    </div>
    <div className="member-socials">
        <BsFacebook/>
    </div>
  </>
  )
}

export default MobileHeader