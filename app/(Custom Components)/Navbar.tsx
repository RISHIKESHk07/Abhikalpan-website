"use client";

import Image from "next/image";

import React, { useState } from "react";
import { Menu } from "lucide-react";
import Logo from "@/public/assets/AbhikalpanLogo.svg";
import Navbr from "@/public/images/navbar_bg_img.svg";
import Union from "@/public/assets/NavbarLine.png";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="md:hidden flex justify-between items-center px-4 py-2 z-50"
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
        <div className="fixed inset-0 bg-black bg-opacity-50 " onClick={toggleSidebar}></div>
      )}
      <div
        className={`fixed top-0 left-0 bg-cyan-900 h-full text-white w-64 transform ${isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex flex-col font-genos items-center py-8">
          <Image src={Logo} alt="logo" className="w-20 h-auto mb-6" />
          <nav className="flex font-genos flex-col gap-4 text-lg">
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
      <div className="w-[90%] bg-blue-500/500 h-20 hidden md:block absolute z-40 top-6 left-1/2 transform -translate-x-1/2">
        <Image
          alt="navbar"
          src={Navbr}
          className="w-full"
        />
        <Image
          alt="logo"
          src={Logo}
          className="absolute inset-[1.9vw] w-[16vw]"
        />
        <div
          className=" h-[2.5vw] bg-pink-300/300 text-cyan-300 pr-[2.8vw] font-genos absolute right-0 top-[2vw] text-[2vw] gap-[3vw] flex">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/events">Events</Link>
          <Link href="/sponsors">Sponsors</Link>
          <Link href="/people">People</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <Image
          alt="line"
          src={Union}
          className="absolute top-[6vw] right-[2vw] opacity-50 w-[90%]"
        />
      </div>
    </>
  );
};

export default Navbar;