import React from "react";
import Slideshow from "./Slider";

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
          <div className="flex space-x-4">
            <a
              href="https://x.com/Abhikalpanfest?t=k9TVaA4kf8Zwb6yrR-xK3Q&s=09"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-300"
            >
              <img className=" w-6 sm:w-12  h-6 sm:h-12" src="/images/twitter.png" />
            </a>
            <a
              href="https://www.instagram.com/abhikalpan_iiitdmj?igsh=MTI3cWo2ODd4dTFtZQ=="
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-300"
            >
              <img className=" w-6 sm:w-12  h-6 sm:h-12" src="/images/instagram.png" />
            </a>
            <a
              href="https://www.linkedin.com/in/abhikalpan-iiitdmj-2k19?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-300"
            >
              <img className=" w-6 sm:w-12  h-6 sm:h-12" src="/images/linkedin.png" />
            </a>
          </div>
        </div>
      </div>
      <Slideshow />
    </div>
  );
};

export default AboutUs;
