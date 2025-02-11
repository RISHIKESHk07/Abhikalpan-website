import React from "react";
import Container from "@/public/images/CardContainer.png";
import Line from "@/public/images/ContactusLine.png";
import Strip from "@/public/images/ContactTitleContainer.png";
import Phone from "@/public/images/Phone.png";
import Mail from "@/public/images/Email.png";
import Insta from "@/public/images/mdi_instagram.png";
import Linkdln from "@/public/images/Linkdln.png";
import X from "@/public/images/prime_twitter.png";
import Image, { StaticImageData } from "next/image";
function ContactusCard({name, email,phone,src}: {name:string, email:string, phone:string ,src:StaticImageData}) {
  return (
    <div className="relative">
      <section
        className="relative"
        style={{
          backgroundImage: `url(${Container.src})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="h-[433.16px] w-[310px] sm:w-[427.81px] p-2">
          <section
            style={{
              backgroundImage: `url(${Strip.src})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              width: "282px",
              height: "24px",
              marginTop: "16px",
              marginLeft: "24px",
            }}
          >
            <p className="text-[13px] leading-[15px] pt-[4px] pl-[24px]">
              Event Coordinator
            </p>
          </section>
          <div>
            <Image src={src} alt="profile image" className=" w-[170px] sm:w-[226.5px] h-[129.5px] sm:h-[183.5px] p-2 mx-auto my-1 bg-gray-400 full rounded" />
          </div>
          <div className="flex gap-[11px] justify-start items-center m-2">
            <section>
              <Image
                src={Line.src}
                alt="line"
                width={30}
                height={110}
                className="w-[2px] md:w-[2px] h-[60px] md:h-[110px]"
              />
            </section>
            <section>
              <div className="flex flex-col gap-[1px] md:gap-[8px]">
                <div className="text-[#ACFDFF] text-[20px] sm:text-[33px] font-genos mb-[1px]">
                  {name}
                </div>
                <div className="flex gap-2 leading-5">
                  <Image src={Phone.src} alt="phone" width={18} height={18} className="w-[16px] md:w-[18px] h-[16px] md:h-[18px]"/>
                  <p className="font-hellvitica text-[10px] sm:text-[17px] text-white">
                    {phone}
                  </p>
                </div>
                <div className="flex gap-2 w-full">
                  <Image src={Mail.src} alt="phone" width={24} height={18} className="w-[16px] md:w-[24px] h-[12px] md:h-[18px]" />
                  <p className="font-hellvitica text-[12px] text-white">
                    {email}
                  </p>
                </div>
              </div>
            </section>
          </div>
          <div className="flex gap-[20px] ml-[28px] sm:ml-[50px] mt-6 sm:mt-8">
            <Image src={Insta.src} alt="phone" width={24} height={18} className="w-[16px] md:w-[24px] h-[12px] md:h-[18px]" />
            <Image src={Linkdln.src} alt="phone" width={24} height={18} className="w-[16px] md:w-[24px] h-[12px] md:h-[18px]" />
            <Image src={X.src} alt="phone" width={24} height={18} className="w-[20px] md:w-[24px] h-[12px] md:h-[20px]"/>
            </div>
        </div>
      </section>
    </div>
  );
}

export default ContactusCard;
