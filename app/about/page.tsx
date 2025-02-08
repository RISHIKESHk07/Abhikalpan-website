import React from "react";
import Navbar from "../(Custom Components)/Navbar";
import Footer from "../(Custom Components)/Footer";
import Bg from "@/public/images/part1.png";
import Bg2 from "@/public/images/part2.png";
import gears from "@/public/images/circle_dark.png";
import Image from "next/image";

const page = () => {
  return (
    <>
      {/* Added overflow-hidden */}
      <Navbar />
      <div className="flex justify-end m-10 mt-[3vh] sm:mt-[30vh]">
        <img src="/images/About2.png" alt="" className="w-[15vw]" />
        <h1 className="font-aporo text-[28px] md:text-[85.6px] text-white">
          ABOUT US
        </h1>
      </div>
      {/* Left Side 1 */}
      <section style={{}}>
        <section
          className="relative w-full md:min-h-[310px]"
          style={{
            backgroundImage: `url(${Bg.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            maxWidth: "1100px",
          }}
        >
          <div className="flex md:flex-row items-center justify-between max-w-[1000px] mx-auto px-4">
            <div className="flex flex-col items-start justify-center text-white bg-opacity-50 mb-10 md:mb-14 ml-[2vw]">
              <p className="text-white font-genos font-normal text-[5vw] sm:text-[6vw] md:text-[48px] whitespace-nowrap overflow-hidden text-ellipsis leading-tight">
                About
              </p>
              <h1 className="text-white font-aporo font-normal text-[7vw] sm:text-[7vw] md:text-[52px] whitespace-nowrap overflow-hidden text-ellipsis leading-tight">
                PDPM IIITDMJ
              </h1>
              <p className="text-white font-hellvitica font-light text-[2.5vw] sm:text-[2.5vw] md:text-[19px] leading-snug">
                Where Innovation Meets Design <br />
                to Shape the Future of Technology!
              </p>
            </div>
            <div className="flex justify-center md:justify-end md:w-auto">
              <img
                src="/images/logo.png"
                alt="Logo"
                className="w-[18vw] sm:w-[16vw] md:w-[96px] md:h-[96px] lg:w-[268px] lg:h-[279px] mr-[3vw] mt-[2vw] md:mt-[1vw]"
              />
            </div>
          </div>
        </section>
        <div className="text-white font-hellvitica text-[10px] md:text-[20px] ml-[5vw] leading-[23px]">
          <p>
            The Indian Institute of Information Technology, Design, and <br />
            Manufacturing (IIITDM) Jabalpur, established in 2005, is an <br />
            Institute of National Importance under the Ministry of Education,{" "}
            <br />
            Government of India. The institute offers undergraduate, <br />
            postgraduate, and doctoral programs in fields like Computer Science,{" "}
            <br />
            Electronics and Communication, Mechanical Engineering, and Smart{" "}
            <br />
            Manufacturing. Life at IIITDM Jabalpur is dynamic, with students{" "}
            <br />
            engaging in technical, cultural, and sports activities. Annual{" "}
            <br />
            events like Tarang and Abhikalpan attract talent from across the
            country.
          </p>
        </div>
        <div className="flex gap-10 justify-center flex-wrap mx-auto m-6">
          <img
            src="/images/IMG1.png"
            alt=""
            className="w-[200px] sm:w-auto h-auto hover:scale-105 transition 500"
          />
          <img
            src="/images/IMG2.png"
            alt=""
            className="w-[200px] sm:w-auto h-auto hover:scale-105 transition 500"
          />
          <img
            src="/images/IMG1.png"
            alt=""
            className="w-[200px] sm:w-auto h-auto hover:scale-105 transition 500"
          />
        </div>
      </section>
      {/* Right side 1 */}
      <section className="mt-[32px] ml-0 relative">
        <section
          className="relative w-full ml-auto md:min-h-[310px] "
          style={{
            backgroundImage: `url(${Bg2.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            maxWidth: "1000px",
          }}
        >
          <div className="flex md:flex-row items-center justify-between max-w-[1020px] ml-[0px] px-4 mr-[1vw] ">
            <div className="flex justify-center md:justify-end md:w-auto">
              <img
                src="/images/logo2.png"
                alt="Logo"
                className="w-[60vw] h-[20vw] sm:w-[50vw] sm:h-[18vw] md:w-[300px] md:h-[110px] lg:w-[396px] lg:h-[144px] mt-[3vw] sm:mt-[2vw] md:mt-[1vw]"
              />
            </div>
            <div className="flex flex-col items-start justify-center text-white  bg-opacity-50 mb-10 md:mb-14 mr-[2vw]">
              <p className="text-white font-genos font-normal text-[5vw] sm:text-[6vw] md:text-[48px] whitespace-nowrap overflow-hidden text-ellipsis leading-tight">
                More about
              </p>
              <h1 className="text-white font-aporo font-normal text-[7vw] sm:text-[7vw] md:text-[52px] whitespace-nowrap overflow-hidden text-ellipsis leading-tight">
                Abhikalpan
              </h1>
              <p className="text-white font-hellvitica font-light text-[2.5vw] sm:text-[2.5vw] md:text-[19px] leading-snug">
                Bridging Ideas and Innovation to Shape <br /> the Future of
                Technology and Design!
              </p>
            </div>
          </div>
        </section>
        <div className="text-right text-white font-hellvitica text-[10px] md:text-[20px] mr-[5vw] leading-[23px] ml-auto">
          <p>
            The Indian Institute of Information Technology, Design, and <br />
            Manufacturing (IIITDM) Jabalpur, established in 2005, is an <br />
            Institute of National Importance under the Ministry of Education,{" "}
            <br />
            Government of India. The institute offers undergraduate, <br />
            postgraduate, and doctoral programs in fields like Computer Science,{" "}
            <br />
            Electronics and Communication, Mechanical Engineering, and Smart{" "}
            <br />
            Manufacturing. Life at IIITDM Jabalpur is dynamic, with students{" "}
            <br />
            engaging in technical, cultural, and sports activities. Annual{" "}
            <br />
            events like Tarang and Abhikalpan attract talent from across the
            country.
          </p>
        </div>
        <div className="flex gap-10 justify-center flex-wrap mx-auto m-6">
          <img
            src="/images/IMG1.png"
            alt=""
            className="w-[200px] sm:w-auto h-auto hover:scale-105 transition 500"
          />
          <img
            src="/images/IMG2.png"
            alt=""
            className="w-[200px] sm:w-auto h-auto hover:scale-105 transition 500"
          />
          <img
            src="/images/IMG1.png"
            alt=""
            className="w-[200px] sm:w-auto h-auto hover:scale-105 transition 500"
          />
        </div>
        <Image src={gears} alt="gears" className="absolute top-0 -left-[30vw] -z-10 opacity-15" />
      </section>
      {/* Left Side 2 */}
      <section style={{}} className="relative">
        <section
          className="relative w-full md:min-h-[310px]" 
          style={{
            backgroundImage: `url(${Bg.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            maxWidth: "1100px",
          }}
        >
          <div className="flex md:flex-row items-center justify-between max-w-[1000px] mx-auto px-4">
            <div className="flex flex-col items-start justify-center text-white bg-opacity-50 mb-10 md:mb-14 ml-[2vw]">
              <p className="text-white font-genos font-normal text-[5vw] sm:text-[6vw] md:text-[48px] whitespace-nowrap overflow-hidden text-ellipsis leading-tight">
                About
              </p>
              <h1 className="text-white font-aporo font-normal text-[7vw] sm:text-[7vw] md:text-[52px] whitespace-nowrap overflow-hidden text-ellipsis leading-tight">
                ABIKALPAN&apos;S THEME
              </h1>
              <p className="text-white font-hellvitica font-light text-[2.5vw] sm:text-[2.5vw] md:text-[19px] leading-snug">
                Navigating the Evolution of Technology and <br />
                Design, from Tradition to Tomorrow!
              </p>
            </div>
          </div>
        </section>
        <div className="text-white font-hellvitica text-[10px] md:text-[20px] ml-[5vw] leading-[23px]">
          <p>
            Abhikalpan&apos;25 celebrates the transformative journey of
            technology <br />
            and design, bridging the past, present, and future. From AI and{" "}
            <br />
            quantum computing to sustainable design and smart cities, <br />
            innovation is reshaping industries and our world. This year&apos;s
            fest <br />
            honors visionary thinkers across eras, reflecting on past wisdom{" "}
            <br />
            and future possibilities to craft a better tomorrow. Join us in{" "}
            <br />
            celebrating the journey of innovation that shapes the future! <br />
          </p>
        </div>
        <div className="flex gap-10 justify-center flex-wrap mx-auto m-6">
          <img
            src="/images/IMG1.png"
            alt=""
            className="w-[200px] sm:w-auto h-auto hover:scale-105 transition 500"
          />
          <img
            src="/images/IMG2.png"
            alt=""
            className="w-[200px] sm:w-auto h-auto hover:scale-105 transition 500"
          />
          <img
            src="/images/IMG1.png"
            alt=""
            className="w-[200px] sm:w-auto h-auto hover:scale-105 transition 500"
          />
        </div>
        <Image src={gears} alt="gears" className="absolute top-0 -right-[35vw] -z-10 opacity-15" />
      </section>
      {/* Right side 2 */}
      <section className="mt-[32px] ml-0">
        <section
          className="relative w-full ml-auto md:min-h-[310px]"
          style={{
            backgroundImage: `url(${Bg2.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            maxWidth: "1000px",
          }}
        >
          <div className="flex md:flex-row items-center justify-end max-w-[1020px] ml-[0px] px-4 mr-[1vw]">
            <div className="flex flex-col items-start justify-center text-white bg-opacity-50 mb-10 md:mb-14 mr-[2vw]">
              <p className="text-white font-genos font-normal text-[5vw] sm:text-[6vw] md:text-[48px] whitespace-nowrap overflow-hidden text-ellipsis leading-tight">
                About,
              </p>
              <h1 className="text-white font-aporo font-normal text-[7vw] sm:text-[7vw] md:text-[52px] whitespace-nowrap overflow-hidden text-ellipsis leading-tight">
                MEDIA OUTREACH
              </h1>
              <p className="text-white font-hellvitica font-light text-[2.5vw] sm:text-[2.5vw] md:text-[19px] leading-snug">
                Bridging Ideas and Innovation to Shape <br /> the Future of
                Technology and Design!
              </p>
            </div>
          </div>
        </section>
        <div className="text-right text-white font-hellvitica text-[10px] md:text-[20px] mr-[5vw] leading-[23px] ml-auto">
          <p>
          Media Outreach plays a crucial role in amplifying the impact of{" "}
              <br />
              events and activities at IIITDM Jabalpur, ensuring they reach a{" "}
              <br />
              wider audience. It involves strategically engaging with various{" "}
              <br />
              media platforms to promote the institute’s initiatives, <br />
              achievements, and events like Abhikalpan, and Tarang. <br />
          </p>
        </div>
        <div className="flex gap-10 justify-center flex-wrap mx-auto m-6">
          <img
            src="/images/IMG1.png"
            alt=""
            className="w-[200px] sm:w-auto h-auto hover:scale-105 transition 500"
          />
          <img
            src="/images/IMG2.png"
            alt=""
            className="w-[200px] sm:w-auto h-auto hover:scale-105 transition 500"
          />
          <img
            src="/images/IMG1.png"
            alt=""
            className="w-[200px] sm:w-auto h-auto hover:scale-105 transition 500"
          />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;
