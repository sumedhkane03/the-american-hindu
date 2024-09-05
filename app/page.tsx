"use client";

import React from "react";
import Header from "../components/Header";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <section
          id="home"
          className="min-h-screen flex flex-col items-center justify-center text-white px-4 py-8 bg-gradient-to-br from-red-600 via-navy-900 to-sky-400"
        >
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 mt-16 lg:mt-24">
            {" "}
            {/* Added top margin */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative w-56 h-56 xs:w-72 xs:h-72 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px]">
                {" "}
                {/* Decreased image size */}
                <Image
                  src="/swami.jpg"
                  alt="HMSA Logo"
                  fill
                  style={{ objectFit: "contain" }}
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h2 className="text-xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Welcome to The American Hindu
              </h2>
              <p className="text-base xs:text-lg sm:text-xl mb-8 mx-auto lg:mx-0 max-w-md">
                The American Hindu is a platform for second-generation American
                Hindus to express their unique perspective, blending American
                upbringing with Hindu values. Independent of established
                organizations, we're a team of young professionals and students
                aiming to fill the gap in representation for U.S.-raised Hindus.
                Through social media and our website, we engage in dialogue,
                educate, and explore Hindu culture's contributions to the world.
                We invite you to join our conversations and be part of The
                American Hindu.
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            {" "}
            {/* Increased top margin */}
            <a
              href="https://forms.gle/W6zBeMVQzswTN1CK8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full sm:w-auto"
            >
              <button className="w-full bg-gray-200 text-gray-800 hover:text-black font-bold py-3 sm:py-4 px-8 sm:px-12 rounded-full hover:bg-gray-100 transform hover:scale-105 transition duration-300 ease-in-out shadow-lg text-xl sm:text-2xl">
                Get Involved
              </button>
            </a>
            <a
              href="https://www.instagram.com/theamericanhindu/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 sm:py-4 px-6 rounded-full hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition duration-300 ease-in-out shadow-lg flex items-center justify-center text-xl sm:text-2xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 sm:w-9 sm:h-9"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              @theamericanhindu
            </a>
          </div>
        </section>
        <section id="about" className="py-8 bg-gray-100">
          <div className="container mx-auto px-4 max-w-7xl"></div>
        </section>
      </main>
    </div>
  );
}
