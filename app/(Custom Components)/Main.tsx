import React from "react";
import Image from "next/image";
import sdcard_img from "@/public/images/sdcard_img.svg";
import register_now_bg from "@/public/images/register_now_bg.svg";
import eventschedule from "@/public/images/eventschedule.svg";
import knowmore from "@/public/images/knowmore_side_img.svg";
import register_bottom_img from "@/public/assets/register_now_bottom_img.svg";

const Main = () => {
  return (
    <div className="w-[90%] bg-pink-500/500 h-[65vw] absolute sm:top-[10vw] md:top-6 top-[15vw] left-1/2 transform -translate-x-1/2">
      <div className="w-full absolute bg-pink-500/500 flex items-center justify-end">
        <Image src={sdcard_img} alt="sd Card" className="w-full -z-10" />
        <div className="w-[40%] h-[55%] mb-10 absolute bg-blue-600/600 flex flex-col justify-center pr-10">
          <p className="text-white text-[4vw] font-genos text-center self-end ">
            From
          </p>
          <p className="text-white text-[10vw] font-edwardian text-center leading-[2vw]">
            Gears
          </p>
          <p className="text-white text-[4vw] font-genos text-center self-end ">
            to
          </p>
          <p className="text-white text-[5vw] font-aporo text-center leading-[2vw]">
            MICRO
          </p>
          <p className="text-white text-[6vw] font-aporo text-center  self-end ">
            CHIPS
          </p>
        </div>
        <div className="absolute self-end w-[38vw] mb-1 flex items-center justify-center">
          <Image
            className=" w-[38vw]"
            src={register_now_bg}
            alt="registenow_button"
          />
          <Image
            className=" bottom-[0.5vw] right-[2vw] w-[8vw] absolute"
            src={register_bottom_img}
            alt="register_bottom_img"
          />
          <p className="absolute font-genos text-white text-[2.8vw]">
            Register Now
          </p>
        </div>
        <div className="h-10 flex items-center absolute -bottom-[6vw] left-0 justify-center w-[20vw] bg-blue-500/500 pl-2">
          <Image
            src={eventschedule}
            alt="event_schedule"
            className="relative w-full"
          />
          <p className="absolute text-[2.2vw] text-[#FFFFFF] font-genos">
            Event Schedule
          </p>
        </div>
        <div className="h-10 flex items-center absolute -bottom-[6vw] right-0 justify-between pl-[3vw] w-[19vw] bg-blue-500/500 px-2">
          <p className="text-[2.3vw] text-[#FFFFFF] font-genos">Know More</p>
          <Image src={knowmore} alt="knowmore" className="w-[2.5vw]" />
        </div>
      </div>
    </div>
  );
};

export default Main;
