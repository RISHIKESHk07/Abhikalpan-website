import React from "react";
import Image from "next/image";
import cardonee from "@/public/images/spcard1.png";
import cardtwoo from "@/public/images/spcard2.png";
import cardthreee from "@/public/images/spcard3.png";
import cardfourr from "@/public/images/spcard4.png";

const SponsorsPage = () => {
  return (
    <div className="min-h-screen text-white ">
      <div className="relative">

      <header className="text-left ml-4 sm:ml-6 md:ml-10 mt-[20vh] p-3">
  <h1 
    className="text-[42px] xs:text-[40px] sm:text-[48px] md:text-[52px] lg:text-[56px] mb-[5vh] sm:mb-[8vh] md:mb-[10vh] font-bold tracking-widest 
               font-aporo uppercase text-white flex items-center flex-wrap"
  >
    Sponsors
    <Image
      src="/images/design.png"
      alt="line"
      width={150} 
      height={150}
      className="w-24 xs:w-20 sm:w-24 md:w-28 lg:w-36 ml-1 sm:ml-4 md:ml-6"
    />
  </h1>

  <p 
    className="text-[16px] xs:text-base sm:text-lg md:text-xl font-helvetica text-white
               max-w-xl xs:max-w-sm sm:max-w-2xl md:max-w-4xl"
  >
    From technological giants and design pioneers to local enterprises, 
    our sponsors have played a pivotal role in empowering students and 
    showcasing cutting-edge advancements. Their support has made it 
    possible to bridge the gap between academia and industry, fostering 
    a thriving ecosystem of talent, ideas, and opportunities.
  </p>
</header>



        
<section
  className="p-4 xs:p-6 relative flex flex-col items-end w-full"
  style={{
    backgroundImage: `url(${cardthreee.src})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "95vw",
    maxWidth: "975px",
    height: "75vh", 
    maxHeight: "583px", 
    marginTop: "10vh", 
    marginLeft: "auto",
    marginRight: "10vh", 
  }}
>
  <div className="relative md:text-left w-full flex flex-col items-center">
    <h2 className="text-[26px] sm:text-[40px] mt-[21vh] sm:mt-[12vh] md:mt-[9vh] font-aporo uppercase  text-teal-300 sm:mr-[29vh] md:text-left">
      Title Sponsors
    </h2>
    <Image
      src="/images/underline.png"
      alt="underline"
      width={0}
      height={0}
      className="w-auto h-auto sm:mr-[32vh]"
    />
  

  <div className="flex flex-col md:flex-row items-center justify-center mt-[2vh] md:mt-[4vh] gap-4 sm:gap-8 w-full px-4">
    <Image
      src="/images/cocacola.png"
      alt="Coca-Cola Logo"
      width={295}
      height={275}
      className="w-[30vw] sm:w-[250px] h-auto"
    />

    <div className="max-w-xs xs:max-w-sm sm:max-w-lg text-teal-300 text-left">
      <p className="text-[3vw] sm:text-[22px] text-white leading-relaxed  max-[800px]:hidden">
        From technological giants and design pioneers to local enterprises,
        our sponsors have played a pivotal role in empowering students and
        showcasing cutting-edge advancements.
        Their support has made it possible to bridge the gap between academia
        and industry, fostering a thriving ecosystem of talent, ideas, and opportunities.
      </p>
    </div>
    </div>
  </div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-4">
  <div
    className="rounded-xl flex items-center justify-center p-6 sm:p-4 md:p-6"
    style={{
      backgroundImage: `url(${cardtwoo.src})`,
      backgroundSize: "contain", 
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      minHeight: "400px",  
    }}
  >
    
    <div className="max-w-sm text-white text-left space-y-4 sm:max-w-xl">
      <h3 className="text-xl sm:text-2xl md:text-3xl font-aporo uppercase">
        Associate Sponsors
      </h3>
      <Image
        src="/images/underline.png"
        alt="line"
        width={0}
        height={0}
        className="w-auto h-auto"
      />
      <div className="flex flex-col md:flex-row items-center justify-center mt-[4vh] gap-4 sm:gap-8 ">
      <Image
      src="/images/LIC.png"
      alt="line"
      width={266}
      height={155}
      className="mr-8 sm:mb-4 sm:h-16 h-auto w-auto"
    />
      <p className="max-[1000px]:hidden text-xs lg:text-[16px] text-white leading-relaxed">
        From technological giants and design pioneers to local enterprises, our sponsors have played a pivotal role in empowering students and showcasing cutting-edge advancements.

          Their support has made it possible to bridge the gap between academia and industry, fostering a thriving ecosystem of talent, ideas, and opportunities.
        
      </p>
      </div>
    </div>
  </div>

  <div
    className="rounded-xl flex flex-col sm:flex-row items-center justify-center p-6"
    style={{
      backgroundImage: `url(${cardonee.src})`,
      backgroundSize: "contain",  
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      minHeight: "350px",  
    }}
  >
    <div className="max-w-sm text-white text-center  space-y-4">
      <h3 className="text-2xl lg:text-center sm:text-2xl lg:text-4xl font-aporo uppercase">
        Apparel Sponsors
      </h3>
      <Image
        src="/images/underline.png"
        alt="line"
        width={0}
        height={0}
        className="w-full h-auto lg:mx-auto sm:ml-0 mb-8 sm:mb-4"
      />
      <Image
        src="/images/SBI.png"
        alt="SBI Logo"
        width={300}
        height={300}
        className="mb-4 sm:mb-0 w-auto h-auto mx-auto"
      />
    </div>
  </div>
</section>



     
<section className="flex flex-col items-center space-y-8">
  <div className="flex flex-wrap justify-center gap-8 w-full px-4">
    {[...Array(3)].map((_, i) => (
      <div
        key={i}
        className="rounded-xl p-6"
        style={{
          backgroundImage: `url(${cardfourr.src})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          minHeight: "500px",
          width: "100%", 
          maxWidth: "310px", 
        }}
      >
        <div className="text-white text-left">
          <h3 className="text-2xl font-genos mb-6 mt-32">
            Event Sponsor
          </h3>
          <Image
            src="/images/NTPC.png"
            alt="NTPC Logo"
            width={160}
            height={160}
            className="mx-auto md:mb-0"
          />
          <p className="text-3xl text-center mt-8 font-aporo">Robowars</p>
        </div>
      </div>
    ))}
  </div>
</section>


      </div>
    </div>
  );
};

export default SponsorsPage;
