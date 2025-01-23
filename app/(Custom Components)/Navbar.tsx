"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Menu } from "lucide-react";
import Logo from "@/public/assets/AbhikalpanLogo.png";
import Navbr from "@/public/assets/Navbar.png";
import Union from "@/public/assets/NavbarLine.png";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
    
      <div className="md:hidden flex justify-between items-center px-4 py-2  "
      >
        <Image src={Logo} alt="logo" className="w-25 h-20 " />
        <button
          onClick={toggleSidebar}
          className="text-white focus:outline-none"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleSidebar}></div>
      )}
      <div
        className={`fixed top-0 left-0 bg-cyan-900 h-full text-white w-64 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex flex-col items-center py-8">
          <Image src={Logo} alt="logo" className="w-20 h-auto mb-6" />
          <nav className="flex flex-col gap-4 text-lg">
            <Link href="/" onClick={toggleSidebar}>
              Home
            </Link>
            <Link href="/about" onClick={toggleSidebar}>
              About
            </Link>
            <Link href="/events" onClick={toggleSidebar}>
              Events
            </Link>
            <Link href="/sponsors" onClick={toggleSidebar}>
              Sponsors
            </Link>
            <Link href="/people" onClick={toggleSidebar}>
              People
            </Link>
            <Link href="/contact" onClick={toggleSidebar}>
              Contact
            </Link>
          </nav>
        </div>
      </div>

     
     
      <div className="hidden md:flex justify-between items-center sticky top-0 z-50 px-8 py-4 ">
  <div className="absolute h-28 opacity-50 w-full">.</div>
  <Image
    src={Logo}
    alt="logo"
    className="absolute top-[30%] left-[5.2%] w-[25%] max-w-[350px] md:w-[22%] lg:w-[20%] xl:w-[18%] 2xl:w-[16%]"



  />
  <div className="relative w-full">
    <Image
      src={Navbr}
      alt="logo"
      layout="responsive"
      className="p-4 w-full"
    />
    <div
      className="absolute top-[33%] right-0 flex gap-2 text-cyan-300 text-sm 
      sm:right-[6rem] sm:gap-[0.5rem] sm:text-base 
      md:right-[6rem] md:gap-[1rem] md:text-lg 
      lg:gap-[3rem] lg:text-lg 
      2xl:right-[8rem] 2xl:gap-[4rem] 2xl:text-2xl"
    >
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/events">Events</Link>
      <Link href="/sponsors">Sponsors</Link>
      <Link href="/people">People</Link>
      <Link href="/contact">Contact</Link>
    </div>
  </div>
  <div className="absolute top-[72%] right-[2%] flex gap-[4rem] text-cyan-300 pl-[10%] pr-[2%] w-full">
    <Image src={Union} alt="logo" className="p-0 opacity-50 w-full" />
  </div>
</div>

    </div>
  );
};

export default Navbar;