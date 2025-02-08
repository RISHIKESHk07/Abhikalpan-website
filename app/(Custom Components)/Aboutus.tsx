import React from "react";
import Image from "next/image";
import circle from '@/public/images/circle.svg'
import twitter from '@/public/images/twitter.png'
import instagram from '@/public/images/instagram.png'
import linkedin from '@/public/images/linkedin.png'


const AboutUs = () => {
  return (
    <div className="flex items-center bg-pink-500/500 h-[100vw] mb-[20vw] top-[40vw] text-left relative bg-pink-500/500">
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
              src={twitter}
              alt="Twitter"
              className="hover:opacity-80 md:w-[4vw] w-[7vw]"
            />
          </button>
          <button>
            <Image
              src={instagram}
              alt="Instagram"
              className="hover:opacity-80 md:w-[4vw] w-[7vw]"
            />
          </button>
          <button>
            <Image
              src={linkedin}
              alt="LinkedIn"
              className="hover:opacity-80 md:w-[4vw] w-[7vw]"
            />
          </button>
        </div>
      </div>
      <Image
        className="absolute w-[35vw] -right-[5vw]"
        src={circle}
        alt="circle"
      />
    </div>
  );
};

export default AboutUs;
