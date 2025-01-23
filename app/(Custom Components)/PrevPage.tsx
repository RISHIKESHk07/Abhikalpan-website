import Image from "next/image";
import React from "react";
import Btn from "@/public/images/previous_page.png";

const PrevPage = () => {
  return (
    <div className="flex items-center justify-center scale-[0.7]">
        <p className="text-center text-red-100 text-[2.1rem] font-genos tracking-wide z-10">
          Previous Website
        </p>
        <Image className="absolute" src={Btn} alt="logo" />
    </div>
  );
};

export default PrevPage;
