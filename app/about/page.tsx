import React from "react";
import Navbar from "../(Custom Components)/Navbar";
import Footer from "../(Custom Components)/Footer";

const page = () => {
  return (
    <>
      <img
        src="/images/g1.png"
        alt=""
        className="absolute left-[76.2%] top-[50vh]"
      />
      <img src="/images/g4.png" alt="" className="absolute top-[300%]" />

      <div className="overflow-hidden">
        {" "}
        {/* Added overflow-hidden */}
        <Navbar />
      </div>

      <div className="flex justify-end m-10">
        <img src="/images/About2.png" alt="" className="max-w-full" />
        <img src="/images/ABOUTUs.png" alt="" className="max-w-full" />
      </div>

      {/* Break Point */}

      <div className="relative w-full h-[313px] md:h-[313px] top-[15vh]">
        <img
          src="/images/part2.png"
          alt="Part"
          className="object-cover w-full h-full -scale-x-[100%]"
          style={{ width: "837px", height: "313px" }}
        />
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <div className="flex flex-col items-start justify-center text-white bg-opacity-50 w-3/4 translate-y-[15vh]">
            <p className="text-white font-genos font-normal text-[48px] whitespace-nowrap overflow-hidden text-ellipsis">
              About
            </p>
            <h1 className="text-white font-aporo font-normal text-[52px] whitespace-nowrap overflow-hidden text-ellipsis">
              PDPM IIITDMJ
            </h1>
            <p className="text-white text-[19px] font-hellvitica font-light">
              Where Innovation Meets Design <br />
              to Shape the Future of Technology!
            </p>
            <img
              src="/images/logo.png"
              alt="Logo"
              className="w-16 h-16 md:w-[268px] md:h-[279px] translate-x-[80vh] translate-y-[-32vh]"
            />
          </div>
        </div>
      </div>

      <div className="text-white font-hellvitica text-[17px] translate-x-0 translate-y-20 m-5">
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
          engaging in technical, cultural, and sports activities. Annual <br />
          events like Tarang and Abhikalpan attract talent from across the
          country.
        </p>
      </div>

      <div className="absolute flex gap-10 translate-y-[35vh] translate-x-24 flex-wrap">
        <img
          src="/images/IMG1.png"
          alt=""
          className="max-w-full h-auto hover:scale-105 transition 500"
        />
        <img
          src="/images/IMG2.png"
          alt=""
          className="max-w-full h-auto hover:scale-105 transition 500"
        />
        <img
          src="/images/IMG1.png"
          alt=""
          className="max-w-full h-auto hover:scale-105 transition 500"
        />
      </div>

      {/* Break Point */}
      <div className="relative w-full h-[313px] md:h-[313px] top-[110vh] flex justify-end">
        <div className="relative w-full max-w-[837px]">
          <img
            src="/images/part2.png"
            alt="Part"
            className="object-cover w-full h-full"
            style={{ height: "313px" }} // Keep height fixed
          />
          <div className="absolute inset-0 flex items-center justify-end p-5">
            <div className="flex flex-col items-end justify-center text-white bg-opacity-50 w-3/5 translate-y-[-5vh] translate-x-[70vh]">
              <p className="text-white font-genos font-normal text-[36px] ">
                More About,
              </p>
              <h1 className="text-white font-aporo font-normal text-[42px]">
                ABHIKALPAN
              </h1>
              <p className="text-white text-[16px] font-light">
                Bridging Ideas and Innovation to Shape <br /> the Future of
                Technology and Design!
              </p>
            </div>
            <div className="text-white font-hellvitica text-[19px] translate-x-[-5vh] max-w-[100vh] text-justify translate-y-[60vh]">
              Abhikalpan is the annual techno-design fest of IIITDM Jabalpur,
              celebrating innovation, creativity, and technical excellence. It
              attracts students and professionals nationwide, offering
              competitions, workshops, and exhibitions that showcase talent and
              explore emerging technologies. The fest features coding
              challenges, robotics and design contests, hackathons, and
              expert-led seminars. Over the years, Abhikalpan has become a
              landmark event, embodying IIITDM Jabalpur&apos;s commitment to
              advancing technology and design.
            </div>
          </div>
          <div className="absolute left-4 top-4">
            <img
              src="/images/logo2.png"
              alt="Logo"
              className="w-[350px] h-[132px] md:w-[400px] md:h-[140px] p-auto translate-y-20" // Adjust size as needed
            />
          </div>
          <div className="absolute text-white font-hellvitica text-[20px] justify-start items-left text-left -translate-x-[110%] translate-y-[190vh]">
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
              celebrating the journey of innovation that shapes the future!{" "}
              <br />
            </p>
          </div>
        </div>
      </div>
      <div className="absolute flex gap-10 translate-y-[190vh] translate-x-24 flex-wrap">
        <img
          src="/images/IMG1.png"
          alt=""
          className="max-w-full h-auto hover:scale-105 transition 500"
        />
        <img
          src="/images/IMG2.png"
          alt=""
          className="max-w-full h-auto hover:scale-105 transition 500"
        />
        <img
          src="/images/IMG1.png"
          alt=""
          className="max-w-full h-auto hover:scale-105 transition 500"
        />
      </div>
      {/* Break Point */}

      <div className="relative w-full h-[313px] md:h-[313px] top-[250vh]">
        <img
          src="/images/part1.png"
          alt="Part"
          className="object-cover w-full h-full"
          style={{ width: "837px", height: "313px" }}
        />
        <div className="absolute inset-0 flex items-center justify-between p-4 -translate-y-5">
          <div className="flex flex-col items-start justify-center text-white bg-opacity-50 w-3/4">
            <p className="mt-2 text-lg md:text-[48px] font-genos -translate-y-9">
              About
            </p>
            <h1 className="text-3xl text-[52px] font-bold font-aporo -translate-y-4 -translate-x-1">
              ABIKALPAN&apos;S THEME
            </h1>
            <p className="text-white text-[18px] font-hellvitica font-light translate-y-4">
              Navigating the Evolution of Technology and <br />
              Design, from Tradition to Tomorrow!
            </p>
          </div>
        </div>
      </div>
      <div className="absolute flex gap-10 translate-y-[300vh] translate-x-24 flex-wrap">
        <img
          src="/images/IMG1.png"
          alt=""
          className="max-w-full h-auto hover:scale-105 transition 500"
        />
        <img
          src="/images/IMG2.png"
          alt=""
          className="max-w-full h-auto hover:scale-105 transition 500"
        />
        <img
          src="/images/IMG1.png"
          alt=""
          className="max-w-full h-auto hover:scale-105 transition 500"
        />
      </div>
      {/* Break Point */}
      <div className="relative w-full h-[313px] md:h-[313px] top-[360vh] flex justify-end">
        <div className="relative w-full max-w-[837px] ">
          <img
            src="/images/part2.png"
            alt="Part"
            className="object-cover w-full h-full"
            style={{ height: "313px" }} // Keep height fixed
          />
          <div className="absolute inset-3 flex items-center justify-end p-12 -translate-y-9">
            <div className="flex flex-col items-end justify-center text-white bg-opacity-50 w-3/4">
              <p className="mt-2 text-lg text-[8vh] font-genos m-10 ">About,</p>
              <h1 className="text-3xl text-[52px] font-bold font-aporo ">
                MEDIA OUTREACH
              </h1>
            </div>
            <div className="absolute text-white font-hellvitica text-[20px] translate-x-[3vh] text-center translate-y-72">
              Media Outreach plays a crucial role in amplifying the impact of{" "}
              <br />
              events and activities at IIITDM Jabalpur, ensuring they reach a{" "}
              <br />
              wider audience. It involves strategically engaging with various{" "}
              <br />
              media platforms to promote the institute’s initiatives, <br />
              achievements, and events like Abhikalpan, and Tarang. <br />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex gap-10 translate-y-[410vh] translate-x-24 flex-wrap">
        <img
          src="/images/IMG1.png"
          alt=""
          className="max-w-full h-auto hover:scale-105 transition 500"
        />
        <img
          src="/images/IMG2.png"
          alt=""
          className="max-w-full h-auto hover:scale-105 transition 500"
        />
        <img
          src="/images/IMG1.png"
          alt=""
          className="max-w-full h-auto hover:scale-105 transition 500"
        />
      </div>

      <div className="relative h-screen top-[430vh]">
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default page;
