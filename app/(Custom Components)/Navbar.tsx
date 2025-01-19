import Image from "next/image";
import React from "react";
import Navbr from "@/public/assets/Navbar.png";
import Union from "@/public/assets/Union.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex sticky justify-center content-center flex-col p-0 m-0">
      <div>
        <Image
          src={Navbr}
          alt="logo"
          width={1300}
          height={100}
          className="p-4"
        />
        <div className="absolute top-[3rem] right-[7rem] flex gap-[4rem] text-lg text-cyan-300">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/events">Events</Link>
          <Link href="/sponsors">Sponsors</Link>
          <Link href="/people">People</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
      <div className="absolute top-[6.5rem] right-[7rem] flex gap-[4rem] text-lg text-cyan-300">
        <Image
          src={Union}
          alt="logo"
          width={1100}
          height={100}
          className="p-0 opacity-50"
        />
      </div>
    </div>
  );
};

export default Navbar;
