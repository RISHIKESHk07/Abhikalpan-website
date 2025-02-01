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

        
      <header className="text-left space-y-6">
  <h1 className="text-6xl md:text-7xl font-bold tracking-widest font-aporo uppercase text-white flex items-center">
    Sponsors
    <Image
      src="/images/design.png"
      alt="line"
      width={180}
      height={180}
      className="ml-4"  
    />
  </h1>
  <p className="text-lg font-hellvitica text-teal-400 max-w-4xl">
    From technological giants and design pioneers to local enterprises,
    our sponsors have played a pivotal role in empowering students and
    showcasing cutting-edge advancements. Their support has made it
    possible to bridge the gap between academia and industry, fostering
    a thriving ecosystem of talent, ideas, and opportunities.
  </p>
</header>


        
        <section
  className="p-6 rounded-xl relative flex flex-col items-end"
  style={{
    backgroundImage: `url(${cardthreee.src})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right",
    minHeight: "500px",
  }}
>
 
  <div className=" mt-6">
    <h2 className="text-6xl mr-56 text-left font-aporo uppercase text-teal-300">
      Title Sponsors
    </h2>
    <Image
      src="/images/underline.png"
      alt="underline"
      width={0}
      height={0}
      className="w-auto h-auto"
    />
  </div>

 
  <div className="flex flex-col md:flex-row items-center justify-center mt-10">
  
    <Image
      src="/images/cocacola.png"
      alt="Coca-Cola Logo"
      width={200}
      height={200}
      className="mb-6 md:mb-0 md:mr-8"
    />

   
    <div className="max-w-lg text-teal-300 text-center md:text-left">
      <p className="text-lg text-white leading-relaxed">
        From technological giants and design pioneers to local enterprises,
        our sponsors have played a pivotal role in empowering students and
        showcasing cutting-edge advancements. Their support has made it
        possible to bridge the gap between academia and industry, fostering
        a thriving ecosystem of talent, ideas, and opportunities.
      </p>
    </div>
  </div>
</section>


<section className="grid grid-cols-1 sm:grid-cols-2 gap-8">
  <div
    className="rounded-xl flex items-center justify-center p-6"
    style={{
      backgroundImage: `url(${cardtwoo.src})`,
      backgroundSize: "contain", 
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
      className="mr-8"  
    />
    <div className="max-w-sm text-white text-left space-y-4">
      <h3 className="text-4xl font-aporo uppercase">
        Associate Sponsors
      </h3>
      <Image
        src="/images/underline.png"
        alt="line"
        width={0}
        height={0}
        className="w-full h-auto"
      />
      <p className="align-right">
      From technological giants and design pioneers to local enterprises, our sponsors have played a pivotal role in empowering students and showcasing cutting-edge advancements. Their support has made it possible to bridge the gap between academia and industry, fostering a thriving ecosystem of talent, ideas, and opportunities.
      </p>
    </div>
  </div>

  <div
    className="rounded-xl flex items-center justify-center p-6"
    style={{
      backgroundImage: `url(${cardonee.src})`,
      backgroundSize: "contain",  
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right",
      minHeight: "100px",  
    }}
  >
    <div className="max-w-sm text-white ">
      <h3 className="text-5xl text-right ml-40 font-aporo uppercase mb-4">
        Apparel Sponsors
      </h3>
      <Image
        src="/images/underline.png"
        alt="line"
        width={0}
        height={0}
        className="w-full h-auto ml-40 mb-8"
      />
      <Image
        src="/images/SBI.png"
        alt="SBI Logo"
        width={300}
        height={300}
        className="mb-4 ml-44 md:mb-0"
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
