import React from "react";
import Image from "next/image";
import cardonee from "@/public/images/spcard1.png";
import cardtwoo from "@/public/images/spcard2.png";
import cardthreee from "@/public/images/spcard3.png";
import cardfourr from "@/public/images/spcard4.png";
import Navbar from "../(Custom Components)/Navbar";
import Footer from "../(Custom Components)/Footer";

export const metadata = {
  title: "Sponsors at Abhikalpan'25 - IIITDM Jabalpur TechFest",
  description: "Explore our Sponsor for Abhikalpan'25...",
  alternates: {
    canonical: "https://www.abhikalpan.live/sponsors",
  },
  robots: { index: true, follow: true },
};

const SponsorsPage = () => {
  const DisabledLife = "Disabled";
  return DisabledLife == "Disabled" ? (
    <div>
      <Navbar />
      <div 
        className="mt-[240px]  text-[28px] md:text-[35.6px] mb-[3vh]  font-bold tracking-widest 
       font-aporo uppercase text-white  min-h-screen w-full"
      ><p className="text-center mt-[40px]">Page under construction !!!</p></div>
      <Footer/>
    </div>
  ) : (
    <div className="min-h-screen text-white ">
      <Navbar />
      <div className="relative">
        <header className="text-left ml-4 sm:ml-6 md:ml-[77px] mt-[15vh] p-3">
          <h1
            className="text-[28px] md:text-[85.6px] mb-[3vh] sm:mb-[4vh] md:mb-[5vh] font-bold tracking-widest 
               font-aporo uppercase text-white flex items-center flex-wrap"
          >
            Sponsors
            <Image
              src="/images/design.png"
              alt="line"
              width={168}
              height={61.79}
              className="w-[18vw] md:w-[8vw] h-[3vh] md:h-[7vh] leading-[24px] md:leading-[24px]"
            />
          </h1>

          <p
            className="text-[16px] xs:text-[16px] sm:text-[16px] md:text-[20px] font-helvetica text-white
               max-w-xl xs:max-w-sm sm:max-w-2xl md:max-w-[42rem] xl:text-[25px]"
          >
            From technological giants and design pioneers to local enterprises,
            our sponsors have played a pivotal role in empowering students and
            showcasing cutting-edge advancements. Their support has made it
            possible to bridge the gap between academia and industry, fostering
            a thriving ecosystem of talent, ideas, and opportunities.
          </p>
        </header>

        <section
          className="sm:p-6 relative flex flex-col sm:items-end w-full 
  min-h-[50vh] sm:min-h-[85vh] md:min-h-[65vh] lg:min-h-[75vh] xl:min-h-[68vh] xl:min-w-[55vw]"
          style={{
            backgroundImage: `url(${cardthreee.src})`,
            backgroundSize: "95% 90%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "95vw",
            maxWidth: "975px",
            marginTop: "0.5vh",
            marginLeft: "auto",
          }}
        >
          <div className="relative md:text-left w-full flex flex-col items-center">
            <h2 className="text-[26px] sm:text-[36px] lg:text-[52px] lg:ml-10 md:ml-10 xl:ml-20 mt-[7vh] sm:ml-[45vh] sm:mt-[9vh] md:mt-[7vh] lg:mt-[4.5vh] font-aporo uppercase text-teal-300 sm:mr-[38vh] lg:mr-[38vh] pt-6">
              Title Sponsors
            </h2>
            <Image
              src="/images/underline.png"
              alt="underline"
              width={0}
              height={0}
              className="sm:w-auto sm:ml-[70vh] xl:ml-20 md:ml-40 w-60 lg:ml-32 h-auto ml-2 sm:mr-[35vh]"
            />

            <div className="flex flex-row items-center justify-center mt-[2vh] md:mt-[3vh] gap-4 sm:gap-8 w-full px-4">
              <Image
                src="/images/cocacola.png"
                alt="Coca-Cola Logo"
                width={295}
                height={275}
                className="w-[27vw] sm:w-[15vw]  md:w-[20vw] lg:w-[15vw] h-auto"
              />

              <div className="max-w-xs sm:max-w-lg text-left">
                <p className="text-[10px] sm:text-[17px] md:text-[16px] lg:text-[20px]  text-white leading-relaxed">
                  From technological giants and design pioneers to local
                  enterprises, our sponsors have played a pivotal role in
                  empowering students and showcasing cutting-edge advancements.
                  <span>
                    Their support has made it possible to bridge the gap between
                    academia and industry, fostering a thriving ecosystem of
                    talent, ideas, and opportunities.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-0 mb-0 sm:p-4">
          <div
            className="rounded-xl flex min-h-[300px] sm:min-h-[400px] items-center xl:max-w-[900px] lg:ml-16 justify-center mt-0 mb-0 sm:p-4 md:p-6"
            style={{
              backgroundImage: `url(${cardtwoo.src})`,
              backgroundSize: "95% 100%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <div className="max-w-sm lg:ml-8 text-white text-left  sm:ml-0 sm:text-left mt-0 mb-0 sm:space-y-4 sm:max-w-xl">
              <h3 className="text-[16px] sm:text-2xl md:text-3xl lg:text-2xl lg:mt-7 font-aporo uppercase">
                Associate Sponsors
              </h3>
              <Image
                src="/images/underline.png"
                alt="line"
                width={0}
                height={0}
                className="w-56 sm:w-auto h-auto"
              />
              <div className="flex flex-row items-start sm:items-center justify-center mt-[2vh] sm:mt-[4vh] gap-0 sm:gap-4 ">
                <Image
                  src="/images/LIC.png"
                  alt="line"
                  width={266}
                  height={155}
                  className="mr-2 sm:mr-0 sm:mb-4 sm:h-16 h-auto w-24 sm:w-36 md:w-auto lg:w-auto"
                />
                <p className="text-[10px] mr-8 sm:text-[11px] md:text-[13px] lg:text-[13px] max-w-[48vw] xl:max-w-[90%] xl:text-lg sm:max-w-xl text-white leading-relaxed">
                  From technological giants and design pioneers to local
                  enterprises, our sponsors have played a pivotal role in
                  empowering students
                  <span className="text-left">
                    and showcasing cutting-edge advancements.Their support has
                    made it possible to bridge the gap between academia and
                    industry, fostering a thriving ecosystem of talent, ideas,
                    and opportunities.
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div
            className="rounded-xl flex flex-col sm:flex-row items-center justify-center p-6 sm:min-h-[350px]"
            style={{
              backgroundImage: `url(${cardonee.src})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              minHeight: "300px",
            }}
          >
            <div className="max-w-sm text-white  text-center space-y-4">
              <h3 className="text-2xl lg:text-center sm:text-2xl lg:text-4xl font-aporo uppercase">
                Apparel Sponsors
              </h3>
              <Image
                src="/images/underline.png"
                alt="line"
                width={0}
                height={0}
                className="lg:w-auto h-auto w-60 md:w-72 lg:mx-auto sm:ml-0 mb-8 sm:mb-4"
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

        <section className="flex flex-col mt-4 sm:mt-0 items-center space-y-2 sm:space-y-8">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-8 w-full px-4">
            {[...Array(3)].map((_, i) => (
              <div
                className="min-h-[300px] sm:min-h-[420px]"
                key={i}
                style={{
                  backgroundImage: `url(${cardfourr.src})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  width: "100%",
                  maxWidth: "310px",
                }}
              >
                <div className="text-white text-left">
                  <h3 className="text-2xl font-genos mb-6 mt-12 sm:mt-28 ml-6">
                    Event Sponsor
                  </h3>
                  <Image
                    src="/images/NTPC.png"
                    alt="NTPC Logo"
                    width={160}
                    height={160}
                    className="mx-auto md:mb-0"
                  />
                  <p className="text-3xl text-center mt-8 font-aporo">
                    Robowars
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default SponsorsPage;
