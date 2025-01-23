import React from "react";
import PrevPage from "./PrevPage";
import LinkedIn from "@/public/images/linkedin.png";
import Twitter from "@/public/images/twitter.png";
import Instagram from "@/public/images/instagram.png";
import Link from "next/link";
import Image from "next/image";

const tobelaunched = () => {
  return (
    <div className="bg-bg-img bg-cover bg-center h-screen w-full content-center">
      <div className="flex flex-col items-center justify-center text-white py-[12vh] gap-6 text-center">
        <h1 className="text-5xl">TO BE LAUNCHED SOON...</h1>

        <p className="text-center mt-4">
          This page is under construction, but just like the evolution from
          steam-powered <br /> marvels to neon-lit cyber realms, we&apos;re building
          something extraordinary. Stay <br /> tuned as we gear up to bring the
          magic of Abhikalpan to life.
        </p>
      </div>

      <Link href="/">
        <PrevPage />
      </Link>

      <div className="flex justify-center gap-6 mt-6 scale-[0.7]">
        <Link href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
          <Image src={LinkedIn} alt="LinkedIn" />
        </Link>
        <Link href="https://twitter.com/" target="_blank" rel="noreferrer">
          <Image src={Twitter} alt="Twitter" />
        </Link>
        <Link
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={Instagram} alt="Instagram" />
        </Link>
      </div>
    </div>
  );
};

export default tobelaunched;
