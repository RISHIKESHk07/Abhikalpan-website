import React from "react";
import Image from "next/image";
import sdcard_img from "@/public/images/sdcard_img.svg";
import register_now_bg from "@/public/images/register_now_bg.svg";
import knowmore from "@/public/images/knowmore_side_img.svg";
import register_bottom_img from "@/public/assets/register_now_bottom_img.svg";

const Main = () => {
  return (
    <div className="w-[90%] bg-pink-500/500 h-[65vw] absolute sm:top-[10vw] md:top-6 top-[15vw] left-1/2 transform -translate-x-1/2">
      <div className="w-full absolute bg-pink-500/500 flex items-center justify-end">
        <Image src={sdcard_img} alt="sd Card" className="w-full -z-10" />
        <img
          src="/images/logo2.png"
          alt="Logo"
          className="absolute mr-[50vw] w-[40vw] sm:w-[50vw] h-[20vw] sm:h-[18vw] md:w-[300px] md:h-[110px] lg:w-[30vw] lg:h-[20vh] mt-[3vw] sm:mt-[2vw] md:mt-[1vw]"
        />
        <div className="w-[40%] h-[35%] mb-10 absolute bg-blue-600/600 flex flex-col justify-center pr-10">
        <a
          href="https://forms.gle/QqLbFDFP9AnVuTnt6"
          className=" self-end w-[28vw] mb-4 flex items-center justify-center "
        >
          <div className=" self-end w-[30vw] lg:w-[30vw] mb-0 flex items-center justify-center">
            <Image
              className=" w-[30vw]"
              src={register_now_bg}
              alt="registenow_button"
            />
            <Image
              className=" bottom-[0.5vw] right-[0vw] w-[8vw] absolute hidden "
              src={register_bottom_img}
              alt="register_bottom_img"
            />
            <p className="absolute font-genos text-white text-[2.8vw]">
              Grab our Merch!!
            </p>
          </div>
        </a>
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

        <a href="https://forms.gle/7h1yDQfXaxBqRVgY7"
          className="absolute self-end w-[38vw] mb-1 flex items-center justify-center z-50">
          <div className="absolute self-end w-[38vw] mb-0 flex items-center justify-center">
            <Image
              className=" w-[38vw]"
              src={register_now_bg}
              alt="registenow_button"
            />
            <Image
              className=" bottom-[0.5vw] right-[2vw] w-[5vw] absolute"
              src={register_bottom_img}
              alt="register_bottom_img"
            />
            <p className="absolute font-genos text-white text-[2.2vw]">
            Accommodation Registration
            </p>
          </div>
        </a>
        
        {/* <div className="h-10 flex items-center absolute -bottom-[6vw] left-0 justify-center w-[20vw] bg-blue-500/500 pl-2">
          <Image
            src={eventschedule}
            alt="event_schedule"
            className="relative w-full"
          />
          <p className="absolute text-[2.2vw] text-[#FFFFFF] font-genos">
            Event Schedule
          </p>
        </div> */}
        <div className="h-10 flex items-center absolute -bottom-[8vw]  sm:-bottom-[6vw] right-0 justify-between pl-[3vw] w-[19vw] bg-blue-500/500 px-2">
          <p className="text-[2.3vw] text-[#FFFFFF] font-genos">Know More</p>
          
          <Image src={knowmore} alt="knowmore" className="w-[2.5vw]" />
          
        </div>
      </div>
    </div>
  );
};

export default Main;
