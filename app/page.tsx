"use client";

import React from "react";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import Image from "next/image";
import Member from "../components/Member";
import "../styles/Book.css";
import "@fontsource/clear-sans";
import { BsFacebook, BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";

export default function Page() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // This matches Tailwind's 'md' breakpoint
    };
    handleResize(); // Check initial size
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return (
      <div className ='pb-9'>
        <MobileHeader />
        <div className='mt-[-20%] powerpoint-scroll-container'>
          {/* <div className='min-h-screen bg-gray-100'> */}
          {/* <main> */}

          <section
            id='home'
            className='min-h-screen max-w-screen flex flex-col items-center justify-center text-white px-4 py-8 custom-book pb-[20%]'>
            {/* <div className='items-center text-center'> */}
            <img
              className='max-w-[70%] max-h-[70%] book-img-blur book-img-style'
              src='/book-rhs.png'
            />
            <h2 className='mt-[-6%] text-center tah-clear-sans pt-[15%]'>
              The Hindu-American Mosaic is the inaugural publication from The
              American Hindu, offering a tribute to the history and evolution of
              the Hindu community in the United States. Through recounts of
              various chapters of this multi-century history, this book delves
              into the diverse experiences and contributions of Hindu-Americans,
              celebrating their cultural heritage and impact on the broader
              American landscape.
            </h2>
            <a
              target='_blank'
              className='pt-[6%]'
              href='https://www.amazon.com/Hindu-American-Mosaic-American-Hindu/dp/B0DFXH93R5/ref=sr_1_1?crid=3SA73LG61AA4M&dib=eyJ2IjoiMSJ9.Gfjy2LwA45QqeZE91v_F24dWWVqWxr3x4PlwrK449Ao.ZotFrzLZ9fB1lo90LnksUfkDdI_SDfp5FZw3F2oxWh0&dib_tag=se&keywords=the+hindu+american+mosaic&qid=1725719899&sprefix=the+american+hindu%2Caps%2C116&sr=8-1'>
              <button className='w-60 buy-book-button-before text-gray-800 hover:text-black font-bold py-3 sm:py-4 px-9 sm:px-12 rounded-full hover:bg-blue-100 transform hover:scale-105 transition duration-300 ease-in-out shadow-lg text-xl sm:text-2xl tah-clear-sans'>
                Buy Now
              </button>
            </a>
            {/* <Button className='buy-book-button border-1px-black mt-8' onClick={buyBook}>
              Buy Now
            </Button> */}
            {/* </div> */}
          </section>
          <div className='bg-gradient-to-br from-red-600 via-navy-900 to-sky-400'>
            <section
              id='about'
              className='min-h-screen flex flex-col items-center justify-center text-white px-4 py-8'>
              <div className='w-full lg:w-1/2 flex justify-center mt-[-5%]'>
                <div className='powerpoint-scroll-container-about-us relative w-40 h-40 xs:w-72 xs:h-72 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px] pt-[-70%] mt-[-5%] mb-[-16%] '>
                  {" "}
                  {/* Decreased image size */}
                  <img
                    src='/swami.jpg'
                    alt='TAH Logo'
                    className='rounded-lg book-img-blur book-img-style'
                  />
                </div>
              </div>
              <div className='mx-auto pt-[30%]'>
                <p className='text-l font-semibold text-center mb-4'>
                  The American Hindu is a dynamic, youth-driven initiative that
                  began as an Instagram content creator in January.
                </p>
                <p className='font-light text-s text-center mb-1 '>
                  The American Hindu has evolved into a self-publishing
                  organization specializing in a diverse range of Hindu
                  educational content. Through a blend of traditional and modern
                  mixed-media formats, including print and digital publications,
                  videos, and interactive resources, the organization aims to make
                  Hindu culture, philosophy, and history accessible and engaging
                  for a wide audience. By empowering young creators and fostering
                  a collaborative environment, The American Hindu preserves and
                  promotes cultural heritage and encourages the exploration and
                  understanding of Hindu traditions in a contemporary context.
                </p>
              </div>
            </section>
          </div>
          <section
            id='join'
            className='mt-[-10%] min-h-screen flex flex-col items-center justify-center text-white px-4 py-8 bg-gradient-to-br from-red-600 via-navy-900 to-sky-400'>
            <div className='container mx-auto px-4 max-w-7xl'>
              <div className='flex flex-col md:flex-row items-start justify-between'>
                <div className='text-white md:w-2/3 pr-0 md:pr-8'>
                  <h2 className='mt-[-20%] text-4xl xs:text-5xl lg:text-6xl font-bold mb-4 text-left'>
                    Join Our Community
                  </h2>
                  <p className='text-xl sm:text-2xl mb-6 text-left'>
                    {/* No mailing list just social media and email */}
                    Follow us on social media to stay updated on our mission to
                    create Hindu representation in mixed media.
                  </p>
                  <div className='flex flex-row gap-[2%]'>
                    {/* <a
                    href='https://forms.gle/nD3DvXgjB5pTeuwy8'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-block'>
                    <button className='bg-white text-black font-bold py-2 px-6 rounded-full hover:bg-gray-200 hover:scale-105 transition duration-300'>
                      Join Now
                    </button>
                  </a> */}
                    {/* <div className='border-2 border-color-black pr-[11%] pt-[1%]'> */}
                    <div className='text-3xl flex flex-row align-middle gap-[15%] pt-[1.5%] '>
                      <a
                        target='_blank'
                        href='https://facebook.com/TheAmericanHinduPage'>
                        <BsFacebook />
                      </a>
                      <a
                        target='_blank'
                        href='https://instagram.com/theamericanhindu'>
                        <FaInstagram />
                      </a>
                      <a target='_blank' href='https://x.com/American_Hindu'>
                        <BsTwitterX />
                      </a>
                      <a target='_blank' href='mailto:theamericanhindu@gmail.com'>
                        <MdEmail />
                      </a>
                      {/* </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  } else {
    return (
      <>
        {/* <div className='min-h-screen bg-gray-100 tah-clear-sans'> */}
        <Header />
        {/* <MobileHeader/> */}

        <main className='powerpoint-scroll-container'>
          <section
            id='home'
            className='min-h-screen flex flex-row items-center justify-center text-white px-4 py-8 custom-book'>
            <div className='items-center text-center'>
              <h2 className='text-center tah-clear-sans mr-9 pl-12 pr-12 pb-8'>
                The Hindu-American Mosaic is the inaugural publication from The
                American Hindu, offering a tribute to the history and evolution
                of the Hindu community in the United States. Through recounts of
                various chapters of this multi-century history, this book delves
                into the diverse experiences and contributions of
                Hindu-Americans, celebrating their cultural heritage and impact
                on the broader American landscape.
              </h2>
              <a
                target='_blank'
                className=''
                href='https://www.amazon.com/Hindu-American-Mosaic-American-Hindu/dp/B0DFXH93R5/ref=sr_1_1?crid=3SA73LG61AA4M&dib=eyJ2IjoiMSJ9.Gfjy2LwA45QqeZE91v_F24dWWVqWxr3x4PlwrK449Ao.ZotFrzLZ9fB1lo90LnksUfkDdI_SDfp5FZw3F2oxWh0&dib_tag=se&keywords=the+hindu+american+mosaic&qid=1725719899&sprefix=the+american+hindu%2Caps%2C116&sr=8-1'>
                <button className=' pt-[5%] w-60 buy-book-button-before text-gray-900 hover:text-black font-bold py-3 sm:py-4 px-9 sm:px-12 rounded-full hover:bg-blue-100 transform hover:scale-105 transition duration-300 ease-in-out shadow-lg text-xl sm:text-2xl tah-clear-sans'>
                  Buy Now
                </button>
              </a>
              {/* <Button className='buy-book-button border-1px-black mt-8' onClick={buyBook}>
              Buy Now
            </Button> */}
            </div>
            <img
              className='max-w-[55%] max-h-[55%] book-img-blur book-img-style'
              src='/book-rhs.png'
            />
          </section>
          <div className='bg-gradient-to-br from-red-600 via-navy-900 to-sky-400'>
            <section
              id='about'
              className='min-h-screen flex flex-row items-center justify-center text-white px-4 py-8'>
              <div className='w-full lg:w-1/2 flex justify-center'>
                <div className='relative w-56 h-56 xs:w-72 xs:h-72 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px]'>
                  {" "}
                  {/* Decreased image size */}
                  <Image
                    src='/swami.jpg'
                    alt='TAH Logo'
                    fill
                    style={{ objectFit: "contain" }}
                    className='rounded-lg book-img-blur book-img-style'
                  />
                </div>
              </div>
              <div className='container mx-auto px-4 max-w-4xl mt-[6.5%]'>
                <p className='text-xl sm:text-xl lg:text-3xl text-center mb-8'>
                  The American Hindu is a dynamic, youth-driven initiative that
                  began as an Instagram content creator in January.
                </p>
                <p className='text-xs sm:text-md lg:text-lg text-center mb-8'>
                  Seeing a lack of informative content on Hindu culture,
                  Hindu-American students and young professionals from around
                  the country came together to fill the void on social media.
                  Focusing on education and advocacy of Hindu topics, the page
                  features several post series such as Hinduism 101, Sanskrit
                  Non-Translatables, Festival Posts, and Trending Topics.
                </p>
                <p className='text-xs sm:text-lg lg:text-lg text-center mb-8'>
                  The American Hindu has since evolved into a self-publishing
                  organization specializing in a diverse range of Hindu
                  educational content. Through a blend of traditional and modern
                  mixed-media formats, including print and digital publications,
                  videos, and interactive resources, the organization aims to
                  make Hindu culture, philosophy, and history accessible and
                  engaging for a wide audience. By empowering young creators and
                  fostering a collaborative environment, The American Hindu
                  preserves and promotes cultural heritage and encourages the
                  exploration and understanding of Hindu traditions in a
                  contemporary context.
                </p>
              </div>
            </section>
          </div>
          <section
            id='join'
            className='min-h-screen flex flex-col items-center justify-center text-white px-4 py-8 bg-gradient-to-br from-red-600 via-navy-900 to-sky-400'>
            <div className='container mx-auto px-4 max-w-7xl'>
              <div className='flex flex-col md:flex-row items-start justify-center'>
                <div className='text-white md:w-2/3 pr-0 md:pr-8'>
                  <h2 className='text-4xl xs:text-5xl lg:text-6xl font-bold mb-4 text-center'>
                    Stay Connected
                  </h2>
                  <p className='text-xl sm:text-2xl mb-6 text-center'>
                    {/* No mailing list just social media and email */}
                    Follow us on social media to stay updated on our mission to
                    create Hindu representation in mixed media.
                  </p>
                  <div className='flex flex-row gap-[2%] flex flex-col justify-center text-center align-center'>
                    {/* <a
                      href='https://forms.gle/nD3DvXgjB5pTeuwy8'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-block'>
                      <button className='bg-white text-black font-bold py-2 px-6 rounded-full hover:bg-gray-200 hover:scale-105 transition duration-300'>
                        Join Now
                      </button>
                    </a> */}
                    {/* <div className='border-2 border-color-black pr-[11%] pt-[1%]'> */}
                    <div className='text-3xl flex flex-row align-middle gap-[15%] pt-[5%] justify-center'>
                      <a
                        target='_blank'
                        href='https://facebook.com/TheAmericanHinduPage'>
                        <BsFacebook />
                      </a>
                      <a
                        target='_blank'
                        href='https://instagram.com/theamericanhindu'>
                        <FaInstagram />
                      </a>
                      <a target='_blank' href='https://x.com/American_Hindu'>
                        <BsTwitterX />
                      </a>
                      <a
                        target='_blank'
                        href='mailto:theamericanhindu@gmail.com'>
                        <MdEmail />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className='fixed bottom-1 opacity-50 left-2'>
              © 2024 The American Hindu. All rights reserved.
            </p>
          </section>
        </main>

        {/* </div> */}
      </>
    );
  }
}
