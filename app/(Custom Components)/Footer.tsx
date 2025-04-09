import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React from "react";
import Image from "next/image";
import register_now_bg from "@/public/images/register_now_bg.svg";
import register_bottom_img from "@/public/assets/register_now_bottom_img.svg";

export default function Footer() {
  return (
    <footer className="text-white py-8 border-t border-white/50 mx-8">
      <div className="container mx-auto px-4 flex flex-col space-y-8 md:space-y-0 md:flex-row justify-between">
        <div className="flex flex-col items-start space-y-6 md:w-1/2">
          <img
            src="/assets/AbhikalpanLogo.svg"
            alt="Abhikalpan Logo"
            className="h-32 md:h-40"
          />

          <div className="flex space-x-4">
            <a
              href="https://x.com/Abhikalpanfest?t=k9TVaA4kf8Zwb6yrR-xK3Q&s=09"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-300"
            >
              <img className="w-12 h-12" src="/images/twitter.png" />
            </a>
            <a
              href="https://www.instagram.com/abhikalpan_iiitdmj?igsh=MTI3cWo2ODd4dTFtZQ=="
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-300"
            >
              <img className="w-12 h-12" src="/images/instagram.png" />
            </a>
            <a
              href="https://www.linkedin.com/in/abhikalpan-iiitdmj-2k19?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-300"
            >
              <img className="w-12 h-12" src="/images/linkedin.png" />
            </a>
          </div>
          <p className="text-sm font-hellvitica">
            &copy; 2025 Abhikalpan, All rights reserved
          </p>
        </div>

        <div className="flex flex-col items-end space-y-6 md:w-1/2">
          <div className="flex gap-[8px] leading-[50px]">
            <Popover>
              <PopoverTrigger>
                <div className="text-[16px] text-cyan-300 border border-cya-2  px-[16px] rounded-md font-hellvitica">
                  ?
                </div>
              </PopoverTrigger>
              <PopoverContent>
                <div>
                  <p className=" font-hellvitica text-[18px] text-center">
                    *For any queries related to Registration process do contact
                    <b>
                      {" "}
                      <span className="text-nowrap p-1">
                        {" "}
                        Tushar sharma (+91 95489 45732)
                      </span>{" "}
                      or{" "}
                      <span className="text-nowrap">
                        Aman kumar (+91 81150 67089)
                      </span>
                    </b>{" "}
                  </p>
                </div>
              </PopoverContent>
            </Popover>
            <a
              href="https://unstop.com/college-fests/abhikalpan25-indian-institute-of-information-technology-design-and-manufacturing-iiitdm-jabalpur-321930"
              className="self-end text-right"
            >
              <img
                src="/assets/RegisterNOW.png"
                alt="Register Now"
                className="h-14 md:h-19 hover:opacity-90"
              />
            </a>
          </div>
          <div className="self-end">
            <a href="#top" className="text-cyan-300">
              <img
                src="/assets/ArrowUp.png"
                className="w-10 h-10 md:w-12 md:h-12 hover:text-white"
              />
            </a>
          </div>
          <div className="text-end font-hellvitica text-sm">
            <p>Designed in collaboration with Department of Design IIITDMJ</p>
            <p>Developed by the Technical Fraternity IIITDMJ</p>
          </div>
          <a
          href="https://docs.google.com/document/d/1nDhLzq4vcRoiR6nucN8MzUm_RsMAvYUW0u3_m3-XCTY/edit?tab=t.0"
          className=" self-end w-[20vw] mb-4 flex items-center justify-center "
        >
          <div className=" self-end w-[20vw] lg:w-[30vw] mb-0 flex items-center justify-center">
            <Image
              className=" w-[20vw]"
              src={register_now_bg}
              alt="registenow_button"
            />
            <Image
              className=" bottom-[0.5vw] right-[0vw] w-[8vw] absolute hidden "
              src={register_bottom_img}
              alt="register_bottom_img"
            />
            <p className="absolute font-genos  text-white text-[1.8vw]">
              Code of Conduct
            </p>
          </div>
        </a>
        </div>
      </div>
    </footer>
  );
}
