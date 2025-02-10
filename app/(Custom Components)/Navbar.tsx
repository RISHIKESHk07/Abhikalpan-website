"use client";

import Image from "next/image";
import { usePathname } from 'next/navigation';
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

import Logo from "@/public/assets/AbhikalpanLogo.svg";
import Navbr from "@/public/images/navbar_bg_img.svg";
import Union from "@/public/assets/NavbarLine.png";
import Link from "next/link";
import img from "@/public/assets/register_now_bottom_img.svg"

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="md:hidden flex justify-between w-full items-center px-4 py-2 z-50 bg-pink-300/300">
      <Image src={Logo} alt="logo" className="w-[40vw] z-50" />
        <button
          onClick={toggleSidebar}
          className="text-white z-50 focus:outline-none self-start mt-[1.6vw]"
        >
          <Menu className="w-6 h-6 " />
        </button>
      </div>  
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50" onClick={toggleSidebar}></div>
      )}
      <div
        className={`fixed top-0 left-0 bg-[#062e30] h-full text-white w-64 transform ${isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex flex-col font-genos h-auto text-[#12f5f7] overflow-hidden mr-10 bg-pink-500/500">
          <div className="pl-5 flex items-center h-20 w-full flex-row justify-between relative">
            <Image src={Logo} alt="logo" className="w-28" />
            <button onClick={toggleSidebar}
            >
              <X />
            </button>
          </div>
          <nav className="flex font-genos flex-col text-2xl w-full ">
            <Link href="/" onClick={toggleSidebar} className="px-5 flex justify-center flex-col relative">
              <div className="h-[1px] w-full bg-gradient-to-r from-[#12f5f7] to-transparent absolute top-0"></div>
              {pathname === '/' && <p className="py-2 absolute blur-sm">Home</p>}
              <p className="py-2">Home</p>
              <Image src={img} alt="" className="h-3 absolute -right-3" />
              <div className="h-[1px] w-full bg-gradient-to-r from-[#12f5f7] to-transparent absolute bottom-0"></div>
            </Link>
            <Link href="/about" onClick={toggleSidebar} className="px-5 relative flex justify-center flex-col">
              {pathname === '/about' && <p className="py-2 absolute blur-sm">About</p>}
              <p className="py-2">About</p>
              <Image src={img} alt="" className="h-3 absolute -right-3" />
              <div className="h-[1px] w-full bg-gradient-to-r from-[#12f5f7] to-transparent absolute bottom-0"></div>
            </Link>
            <Link href="/events" onClick={toggleSidebar} className="px-5 relative flex justify-center flex-col">
              {pathname === '/events' && <p className="py-2 absolute blur-sm">Events</p>}
              <p className="py-2">Events</p>
              <Image src={img} alt="" className="h-3 absolute -right-3" />
              <div className="h-[1px] w-full bg-gradient-to-r from-[#12f5f7] to-transparent absolute bottom-0"></div>
            </Link>
            <Link href="/sponsors" onClick={toggleSidebar} className="px-5 relative flex justify-center flex-col">
              {pathname === '/sponsers' && <p className="py-2 absolute blur-sm">Sponsers</p>}
              <p className="py-2">Sponsors</p>
              <Image src={img} alt="" className="h-3 absolute -right-3" />
              <div className="h-[1px] w-full bg-gradient-to-r from-[#12f5f7] to-transparent absolute bottom-0"></div>
            </Link>
            <Link href="/people" onClick={toggleSidebar} className="px-5 relative flex justify-center flex-col">
              {pathname === '/people' && <p className="py-2 absolute blur-sm">People</p>}
              <p className="py-2">People</p>
              <Image src={img} alt="" className="h-3 absolute -right-3" />
              <div className="h-[1px] w-full bg-gradient-to-r from-[#12f5f7] to-transparent absolute bottom-0"></div>
            </Link>
            <Link href="/contact" onClick={toggleSidebar} className="px-5 relative flex justify-center flex-col">
              {pathname === '/contact' && <p className="py-2 absolute blur-sm">Contact</p>}
              <p className="py-2">Contact</p>
              <Image src={img} alt="" className="h-3 absolute -right-3" />
              <div className="h-[1px] w-full bg-gradient-to-r from-[#12f5f7] to-transparent absolute bottom-0"></div>
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