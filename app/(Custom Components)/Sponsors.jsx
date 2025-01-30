
import React from "react";
import design from "@/public/images/design.png"

const SponsorsPage = () => {
  return (
    <div className="min-h-screen bg-[#002b36] text-teal-300 p-8">
      <div className="container mx-auto space-y-12">

        <header className="text-left space-y-4">
          <h1 className="text-5xl font-bold tracking-widest font-aporo uppercase">SPONSORS</h1>
          <p className="text-lg font-hellvitica text-left text-teal-400 max-w-3xl ">
            From technological giants and design pioneers to local enterprises,
            our sponsors have played a pivotal role in empowering students and
            showcasing cutting-edge advancements. Their support has made it
            possible to bridge the gap between academia and industry, fostering
            a thriving ecosystem of talent, ideas, and opportunities.
          </p>
        </header>

    
        <section className="text-left">
         
        <div className="relative w-[400px] h-[250px] bg-[#003847] rounded-lg border border-teal-400 shadow-md p-6 mr-0 ml-auto">

          <h2 className="text-2xl  text-center font-aporo uppercase">Title Sponsors</h2>
            <div className="flex items-center justify-center h-full">
              <img
                src="https://via.placeholder.com/150x80?text=Coca-Cola"
                alt="Title Sponsor"
                className="w-48 h-auto"
              />
              <p className="text-teal-300 mt-4">
              From technological giants and design pioneers to local enterprises,
              our sponsors have played a pivotal role in empowering students and
              showcasing cutting-edge advancements.
            </p>
            </div>
            
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
         
          <div className="relative w-[350px] h-[250px] mx-auto bg-[#003847] rounded-lg border border-teal-400 shadow-md p-6">
            <h3 className="text-xl font-aporo text-center mb-4 uppercase">Associate Sponsors</h3>
            <div className="flex items-center justify-center h-full">
              <img
                src="https://via.placeholder.com/120x80?text=LIC"
                alt="Associate Sponsor"
                className="w-32 h-auto"
              />
              <p className="text-teal-300 mt-4">
              From technological giants and design pioneers to local enterprises,
              our sponsors have played a pivotal role in empowering students and
              showcasing cutting-edge advancements.
            </p>
            </div>
          </div>

          <div className="relative w-[350px] h-[250px] mx-auto bg-[#003847] rounded-lg border border-teal-400 shadow-md p-6">
            <h3 className="text-xl font-aporo text-center mb-4 uppercase">Apparel Sponsors</h3>
            <div className="flex items-center justify-center h-full">
              <img
                src="https://via.placeholder.com/120x80?text=SBI"
                alt="Apparel Sponsor"
                className="w-32 h-auto"
              />
            </div>
          </div>
        </section>

        <section className="space-y-6">
         
          <div className="relative mx-auto w-[300px] h-[200px] bg-[#003847] rounded-lg border border-teal-400 shadow-md p-6">
          <h2 className="text-2xl font-aporo text-center uppercase">Event Sponsor</h2>
            <div className="flex flex-col items-center justify-center h-full">
              <img
                src="https://via.placeholder.com/100x50?text=NTPC"
                alt="Event Sponsor"
                className="w-24 h-auto"
              />
              <p className="mt-4 text-center text-teal-300 font-semibold uppercase">Robowars</p>
            </div>
          </div>
        </section>

       
      </div>
    </div>
  );
};

export default SponsorsPage;
