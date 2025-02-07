import CardContainer from "@/public/images/PeopleContainer.png";
import NameTitle from "@/public/images/PeopleNameTitle.png";
import AbhiLogo from "@/public/assets/AbhikalpanLogo.png";
import Insta from "@/public/images/mdi_instagram.png";
import Linkdln from "@/public/images/Linkdln.png";
import X from "@/public/images/prime_twitter.png";
import Image from "next/image";
function PeopleCard() {
  return (
    <div className="m-0 p-0">
      <section
        className="w-[290px] sm:w-[386px] h-[534px] p-4"
        style={{
          backgroundImage: `url(${CardContainer.src})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Image
          src={AbhiLogo.src}
          height={38}
          width={101}
          alt="Abhikalpan Logo"
        />
        <div className="relative">
          <section
            className="p-2 w-[280px] sm:w-[372px] h-[39px] absolute -left-[28px] sm:-left-[38px] font-aporo"
            style={{
              backgroundImage: `url(${NameTitle.src})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          >
            asdfghjkl
          </section>
        </div>
        <div className="flex flex-col items-center gap-[25px]">
          <div className=" w-[237px] sm:w-[296.76px] h-[180px] sm:h-[233.38px] bg-[#FFFFFF33] mt-[40px] sm:mt-[65px]">
            IMage
          </div>
          <div className="w-[237px] sm:w-[296.76px] h-[45px] sm:h-[74.59px] bg-[#0C97A0F5]">
            SMTHG
          </div>
        </div>
        <div className="flex gap-[20px] ml-[13px] sm:ml-[45px] mt-6 sm:mt-8">
          <Image
            src={Insta.src}
            alt="phone"
            width={24}
            height={18}
            className="w-[16px] md:w-[24px] h-[12px] md:h-[18px]"
          />
          <Image
            src={Linkdln.src}
            alt="phone"
            width={24}
            height={18}
            className="w-[16px] md:w-[24px] h-[12px] md:h-[18px]"
          />
          <Image
            src={X.src}
            alt="phone"
            width={24}
            height={18}
            className="w-[20px] md:w-[24px] h-[12px] md:h-[20px]"
          />
        </div>
      </section>
    </div>
  );
}

export default PeopleCard;
