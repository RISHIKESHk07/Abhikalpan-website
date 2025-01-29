import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex items-center text-left gap-[20px] m-0">
      <div className="p-8 text-left">
        {/* Title */}
        <h1 className="text-5xl text-white font-bold mb-6">
          What is Abhikalpan?
        </h1>
        <p className="text-lg text-white max-w-2xl mx-auto mb-8">
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
              width={40}
              height={40}
              className="hover:opacity-80"
            />
          </button>
          <button>
            <Image
              src="/images/instagram.png"
              alt="Instagram"
              width={40}
              height={40}
              className="hover:opacity-80"
            />
          </button>
          <button>
            <Image
              src="/images/linkedin.png"
              alt="LinkedIn"
              width={40}
              height={40}
              className="hover:opacity-80"
            />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-end h-screen relative">
        <Image
          className="absolute top-0 left-0 w-auto h-auto"
          src="/images/img1.png"
          alt="text"
          width={50}
          height={50}
        />
        <Image
          className="w-full h-auto"
          src="/images/img2.png"
          alt="circle"
          width={50}
          height={50}
        />
      </div>
    </div>
  );
};

export default AboutUs;
