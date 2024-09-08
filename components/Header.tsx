"use client";

import React, { useState, useEffect, act } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { BsFacebook, BsInstagram, BsTwitterX, BsYoutube } from "react-icons/bs";
import { MdMenu, MdClose } from "react-icons/md";
import "../styles/Navbar.css";

export default function Header() {
  const [activeSection, setActiveSection] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [menu, setMenu] = useState(false);
  const pathname = usePathname();

  const menuLeave = () => {
    const coolMenu = document.getElementById("cool-menu");
    if (coolMenu !== null) {
      coolMenu.classList.add("menu-leave");
      coolMenu.classList.remove("menu-enter");
    }

    setTimeout(() => {
      setMenu(false);
    }, 400);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // This matches Tailwind's 'md' breakpoint
    };
    handleResize(); // Check initial size
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "team", "join"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();

          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(currentSection || "");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setActiveSection(pathname.slice(1) || "home");
  }, [pathname]);

  const navItems = [
    // { name: "Book", href: "#book" },
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Team", href: "#team" },
    { name: "Join Us", href: "#join" },
  ];

  if (isMobile) {
    return (
      <>
        {/* <MdMenu
          className='open-menu'
          size={70}
          onClick={() => {
            setMenu(true);
          }}
        />

        {menu && (
          <div className='menu-container menu-enter' id='cool-menu'>
            <MdClose className='close-menu' onClick={menuLeave} />
            <p className='menu-btn'>Home</p>
          </div>
        )}
      */}
      </>
    ); //Render mobile menu
  }

  return (
    <header className='fixed top-6 left-1/2 transform -translate-x-1/2 bg-transparent backdrop-blur-md z-50 rounded-2xl shadow-lg w-[90%] max-w-[900px]'>
      <div className='px-4 sm:px-8 py-3 flex items-center justify-between'>
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`text-white hover:text-gray-400 transition duration-300 text-center text-base sm:text-lg font-semibold px-2 sm:px-4 ${
              activeSection === item.href.slice(1) ? "text-white" : ""
            }`}>
            <span className='relative inline-block'>
              {item.name}
              {/* <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-gray-700 transition-all duration-300 ${
                  activeSection === item.href.slice(1)
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}></span> */}
            </span>
          </Link>
        ))}
        <div className='flex justify-center px-2 sm:px-4'>
          <Image
            src='/swami.jpg'
            alt='Swami Logo'
            width={60}
            height={60}
            className='rounded-full'
          />
        </div>
      </div>
    </header>
  );
}
