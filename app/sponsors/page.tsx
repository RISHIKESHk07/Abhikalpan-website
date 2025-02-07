import React from "react";
import Image from "next/image";
import cardonee from "@/public/images/spcard1.png";
import cardtwoo from "@/public/images/spcard2.png";
import cardthreee from "@/public/images/spcard3.png";
import cardfourr from "@/public/images/spcard4.png";

const SponsorsPage = () => {
  return (
    <div className="min-h-screen bg-[#002b36] text-white px-8 pt-4 pb-16">
      <div className="container mx-auto space-y-16">

        
      <header className="text-left space-y-3 xs:space-y-4 sm:space-y-6 px-3 xs:px-4 sm:px-6 md:px-8">
  <h1 
    className="text-4xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-widest 
               font-aporo uppercase text-white flex items-center flex-wrap"
  >
    Sponsors
    <Image
      src="/images/design.png"
      alt="line"
      width={150} 
      height={150}
      className=" max-[800px]:hidden md:ml-3 ml-1 xs:ml-4 sm:ml-4 xs:w-20 sm:w-24 md:w-28 lg:w-36"   
    />
  </h1>

  <p 
    className="text-lg xs:text-base sm:text-lg md:text-xl font-hellvitica text-teal-400 
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
  className=" p-6 xs:p-6 rounded-xl relative flex flex-col items-end hide-bg"
  style={{
    backgroundImage: `url(${cardthreee.src})`,
    backgroundSize: "95% 80%", 
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right",
    minHeight: "500px",
  }}
>
 
  <div className=" mt-6 xs:mt-6  md:text-left">
    <p className="text-3xl xs:text-xl md:text-6xl md:text-left font-aporo uppercase text-teal-300">
      Title Sponsors
    </p>
    <Image
      src="/images/underline.png"
      alt="underline"
      width={0}
      height={0}
      className=" w-auto h-auto md:mx-0"
    />
  </div>

 
  <div className="flex flex-col flex-wrap md:flex-nowrap md:flex-row items-center xs:mt-10 justify-center mt-5">
  
    <Image
      src="/images/cocacola.png"
      alt="Coca-Cola Logo"
      width={200}
      height={200}
      className="max-[800px]:hidden w-24 xs:w-32 sm:w-40 md:w-48 lg:w-56 mt-20 md:mt-1 md:mb-0 md:mr-8"
    />

   
    <div className="max-w-xs  xs:max-w-sm sm:max-w-lg text-teal-300 text-left md:text-left">
      <p className="text-lg xs:text-base text-white leading-relaxed">
        From technological giants and design pioneers to local enterprises,
        our sponsors have played a pivotal role in empowering students and
        showcasing cutting-edge advancements. 
        Their support has made it
        possible to bridge the gap between academia and industry, fostering
        a thriving ecosystem of talent, ideas, and opportunities.
        
      </p>
    </div>
  </div>
</section>


<section className="grid grid-cols-1 sm:grid-cols-2 gap-8">
  <div
    className="rounded-xl flex items-center justify-center md:p-6 hide-bg"
    style={{
      backgroundImage: `url(${cardtwoo.src})`,
      backgroundSize: "95% 100%",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right",
      minHeight: "500px",  
    }}
  >
     <Image
      src="/images/LIC.png"
      alt="line"
      width={180}
      height={180}
      className=" max-[800px]:hidden mr-8"  
    />
    <div className="max-w-sm text-white text-left space-y-4">
      <h3 className="text-2xl md:text-4xl font-aporo uppercase ">
        Associate Sponsors
      </h3>
      <Image
        src="/images/underline.png"
        alt="line"
        width={0}
        height={0}
        className="w-full h-auto"
      />
      <p className="align-right text-md">
      From technological giants and design pioneers to local enterprises, our sponsors have played a pivotal role in empowering students and showcasing cutting-edge advancements. Their support has made it possible to bridge the gap between academia and industry, fostering a thriving ecosystem of talent, ideas, and opportunities.
      </p>
    </div>
  </div>

  <div
    className="rounded-xl flex flex-col md:flex-row items-center justify-center p-6 hide-bg"
    style={{
      backgroundImage: `url(${cardonee.src})`,
      backgroundSize: "contain",  
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right",
      minHeight: "100px",  
    }}
  >
    <div className="max-w-sm text-white text-center md:text-right  space-y-4">
      <h3 className="text-2xl md:text-4xl font-aporo uppercase ">
        Apparel Sponsors
      </h3>
      <Image
        src="/images/underline.png"
        alt="line"
        width={0}
        height={0}
        className="w-full h-auto md:ml-40 mb-8"
      />
      <Image
        src="/images/SBI.png"
        alt="SBI Logo"
        width={300}
        height={300}
        className="mb-4 md:mb-0 w-auto h-auto lg:ml-36 mx-auto "
      />
    </div>
  </div>
</section>


     
<section className="flex flex-col mt-4 sm:mt-0 items-center space-y-2 sm:space-y-8">
  <div className="flex flex-wrap justify-center gap-2 sm:gap-8 w-full px-4">
    {[...Array(3)].map((_, i) => (
      <div className="min-h-[300px] sm:min-h-[420px]"
        key={i}
        
        style={{
          backgroundImage: `url(${cardfourr.src})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%", 
          maxWidth: "380px", 
        }}
      >
        <div className="text-white text-left">
          <h3 className="text-2xl font-genos mb-6 mt-28">
            Event Sponsor
          </h3>
          <Image
            src="/images/NTPC.png"
            alt="NTPC Logo"
            width={160}
            height={160}
            className="mb-4 ml-20 md:mb-0"
          />
          <p className="text-3xl text-center mt-16 font-aporo">Robowars</p>
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