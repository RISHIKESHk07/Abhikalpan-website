import React from "react";
import PrevPage from "./PrevPage";
import LinkedIn from "@/public/images/linkedin.png";
import Twitter from "@/public/images/twitter.png";
import Instagram from "@/public/images/instagram.png";
import Link from "next/link";
import Image from "next/image";

const tobelaunched = () => {
  return (
    <div className="h-screen w-full content-center">
      <div className="flex flex-col items-center justify-center text-white py-[5vh] gap-2 text-center">
        <h1 className="text-5xl font-aporo">TO BE LAUNCHED SOON...</h1>

        <p className="text-center mt-4 font-hellvitica">
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
        <Link href="https://www.linkedin.com/in/abhikalpan-iiitdmj-2k19?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">
          <Image src={LinkedIn} alt="LinkedIn" />
        </Link>
        <Link href="https://x.com/Abhikalpanfest?t=k9TVaA4kf8Zwb6yrR-xK3Q&s=09" target="_blank" rel="noreferrer">
          <Image src={Twitter} alt="Twitter" />
        </Link>
        <Link
          href="https://www.instagram.com/abhikalpan_iiitdmj?igsh=MTI3cWo2ODd4dTFtZQ=="
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
