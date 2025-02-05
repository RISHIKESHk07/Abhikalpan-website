"use client";

import Image from "next/image";
<<<<<<< HEAD

import React, { useState } from "react";
=======
>>>>>>> 6955d2a (sponsors page)
import { Menu } from "lucide-react";
import Logo from "@/public/assets/AbhikalpanLogo.svg";
import Navbr from "@/public/images/navbar_bg_img.svg";
import Union from "@/public/assets/NavbarLine.png";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation"; 
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (path: string) => {
    router.push(path); 
    setIsOpen(false); 
  };

  return (
<<<<<<< HEAD
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
=======
    <div className="overflow-x-hidden ">
      
      <div className="md:hidden flex justify-between items-center px-4 py-2 ">
        <Image src={Logo} alt="logo" className="w-25 h-20" />
        <button onClick={toggleSidebar} className="text-white focus:outline-none">
          <Menu className="w-6 h-6" />
        </button>
      </div>

   
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleSidebar}></div>}

    
      <div
        className={`fixed top-0 left-0 bg-cyan-900 h-full text-white w-64 max-w-[80%] transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
>>>>>>> 6955d2a (sponsors page)
      >
        <div className="flex flex-col font-genos items-center py-8">
          <Image src={Logo} alt="logo" className="w-auto h-auto mb-6 max-w-[70%]" />
          <nav className="flex font-genos flex-col gap-4 text-lg">
            {["About", "Events", "Sponsors", "People", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => handleNavigation(`/${item}`)}
                className="cursor-pointer text-white hover:text-gray-300"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </nav>
        </div>
      </div>
<<<<<<< HEAD
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
=======

      
      <div className="hidden md:flex justify-between items-center sticky top-0 z-50 px-8 py-4">
        <div className="absolute h-28 opacity-50 w-full">.</div>
        <Image
          src={Logo}
          alt="logo"
          className="absolute top-[30%] left-[5.2%] w-[25%] max-w-[350px] md:w-[22%] lg:w-[20%] xl:w-[18%] 2xl:w-[16%]"
        />
        <div className="relative w-full">
  <Image src={Navbr} alt="navbar" className="p-4 w-full" />
  <div
    className="absolute top-[33%] right-4 flex gap-4 text-cyan-300 text-sm 
    sm:right-[6rem] sm:gap-[0.5rem] sm:text-base 
    md:right-[8rem] md:gap-[1rem] md:text-lg 
    lg:right-[10rem] lg:gap-[3rem] lg:text-lg 
    2xl:right-[12rem] 2xl:gap-[4rem] 2xl:text-3xl"
  >
    {["About", "Events", "Sponsors", "People", "Contact"].map((item) => (
      <Link key={item} href={`/${item}`} className="cursor-pointer font-genos hover:text-gray-300">
        {item}
      </Link>
    ))}
  

          </div>
        </div>
        <div className="absolute top-[72%] right-[2%] flex gap-[4rem] text-cyan-300 pl-[10%] pr-[2%] w-full">
          <Image src={Union} alt="navbar line" className="p-0 opacity-50 w-full" />
        </div>
      </div>
    </div>
>>>>>>> 6955d2a (sponsors page)
  );
};

export default Navbar;
