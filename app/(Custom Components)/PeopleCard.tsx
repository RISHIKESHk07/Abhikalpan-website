"use client"
import CardContainer from "@/public/images/PeopleContainer.png";
import NameTitle from "@/public/images/PeopleNameTitle.png";
import AbhiLogo from "@/public/assets/AbhikalpanLogo.png";
import Linkdln from "@/public/images/Linkdln.png";
import Mail from "@/public/images/Email.png";
import Image, { StaticImageData } from "next/image";
import Phone from "@/public/images/Phone.png";
import { useToast } from "@/hooks/use-toast";
function PeopleCard({src ,name ,event ,mail, phone}:{src:string|StaticImageData,name:string,event:string,mail:string,phone:string}) {
  
  const { toast } = useToast();

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: "Copied to clipboard!",
        description: text,
      });
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };
  
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
            className="p-2 w-[280px] sm:w-[372px] h-[39px] absolute -left-[28px] sm:-left-[38px] font-aporo text-[#0C97A0F5]"
            style={{
              backgroundImage: `url(${NameTitle.src})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          >
            {name}
          </section>
        </div>
        <div className="flex flex-col items-center gap-[25px]">
          <Image  src={src} alt={'people'} width={297} height={233}  className=" w-[237px] sm:w-[296.76px] h-[180px] sm:h-[233.38px] bg-[#FFFFFF33] mt-[40px] sm:mt-[65px] rounded-md"/>
          <div className="flex justify-center items-center w-[237px] sm:w-[296.76px] h-[45px] sm:h-[74.59px] bg-[#0C97A0F5] text-center text-white font-aporo rounded-sm p-1">
            <p>{event}</p>
          </div>
        </div>
        <div className="flex gap-[20px] ml-[13px] sm:ml-[45px] mt-6 sm:mt-8">
          <Image
            src={Phone.src}
            alt="phone"
            width={24}
            height={18}
            className="w-[16px] md:w-[24px] h-[12px] md:h-[18px]"
            onClick={() => handleCopy(phone)}
          />
          <Image
            src={Linkdln.src}
            alt="phone"
            width={24}
            height={18}
            className="w-[16px] md:w-[24px] h-[12px] md:h-[18px]"
          />
          <Image
            src={Mail.src}
            alt="phone"
            width={24}
            height={18}
            className="w-[20px] md:w-[24px] h-[12px] md:h-[20px]"
            onClick={() => handleCopy(mail)}
          />
        </div>
      </section>
    </div>
  );
}

export default PeopleCard;
