import React from "react";
import Image from "next/image";
import right_circle from '@/public/images/right_circle.svg'
import left_circle from '@/public/images/left_circle.svg'

const AboutUs = () => {
  return (
    <div className=" flex items-center text-left gap-[20px] bg-pink-400/400 pb-52 relative mt-[70vw] bg-pink-500/500">
      <div className="p-8 text-left">
        {/* Title */}
        <h1 className="text-[4vw] text-white font-bold mb-6 font-aporo">
          What is Abhikalpan?
        </h1>
        <p className="text-[1.8vw] text-white w-[60%]  mb-8">
          ABHIKALPAN is the annual technical fest of IIITDM Jabalpur, an
          institute which boasts of technical superiority and innovation in what
          it builds. It’s central India’s biggest technical extravaganza for
          creating, nurturing and fueling one’s interest in various domains of
          computer science, robotics, electronics, gaming and design. In
          conjunction with the various technical events, various informal events
          keep the fest alive. The events that invite the footfall of thousands
          include Robowar, Circuit master, Brand presentation, Astronomy quiz
          amongst others.
        </p>
        <div className="flex gap-4">
          <button>
            <Image
              src='/images/twitter.png'
              alt="Twitter"
              width={50}
              height={50}
              className="hover:opacity-80"
            />
          </button>
          <button>
            <Image
              src="/images/instagram.png"
              alt="Instagram"
              width={50}
              height={50}
              className="hover:opacity-80"
            />
          </button>
          <button>
            <Image
              src="/images/linkedin.png"
              alt="LinkedIn"
              width={50}
              height={50}
              className="hover:opacity-80"
            />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-end h-screen relative">
      </div>
      <Image
        className="absolute top-[2vw] -right-[10vw] h-[43vw]"
        src={right_circle}
        alt="circle"
      />
      <Image
        className="absolute bottom-0 -left-10 h-[50vw]"
        src={left_circle}
        alt="circle"
      />
    </div>
  );
};

export default AboutUs;
