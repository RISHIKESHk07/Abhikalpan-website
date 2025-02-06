import React from "react";
import Navbar from "../(Custom Components)/Navbar";
import Footer from "../(Custom Components)/Footer";
import Container from "@/public/images/EventsCardContainer.png";
import Container2 from "@/public/images/EventsCardContainer2.png";
import Strip from "@/public/images/EventsStrip.png";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
function page() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-end m-10 mt-[3vh] sm:mt-[30vh] leading-[64px] items-center mr-[5vw]">
        <img
          src="/images/About2.png"
          alt=""
          className="w-[18vw] md:w-[8vw] h-[3vh] md:h-[7vh] leading-[24px] md:leading-[24px]"
        />
        <h1 className="ml-[20px] font-aporo text-[28px] md:text-[85.6px] text-white">
          EVENTS
        </h1>
      </div>

      
      {/* LEFT-1 */}
      <section className="flex flex-wrap gap-[60px]">
        <section
          className="mt-[100px] w-full md:w-[558px] lg:w-[700px]"
          style={{
            backgroundImage: `url(${Container.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            maxWidth: "740px",
            maxHeight: "750px",
          }}
        >
          <div className="flex md:flex-row items-center justify-between mx-auto">
            <div className="flex flex-col items-start justify-center text-white bg-opacity-50 mb-10 md:mb-14 ml-[1vw] md:ml-[6vw] mt-[20px]">
              <p className="text-white font-genos font-normal text-[5vw] sm:text-[6vw] md:text-[48px] whitespace-nowrap overflow-hidden text-ellipsis leading-tight">
                By,
              </p>
              <h1 className="text-white font-aporo font-normal text-[7vw] sm:text-[7vw] md:text-[52px] whitespace-nowrap overflow-hidden text-ellipsis leading-tight">
                ELECTRONICS AND
              </h1>
              <h1 className="text-white font-aporo font-normal text-[7vw] sm:text-[7vw] md:text-[42px] lg:text-[52px] whitespace-nowrap overflow-hidden text-ellipsis leading-tight">
                ROBOTICS SOCIETY
              </h1>
              <Image
                src={Strip.src}
                alt="strip"
                width={398}
                height={10}
                className="mb-[5px] md:mb-[12px] lg:mb-[38px] mt-[6px] md:mt-[12px] w-[240px] md:w-[398px]"
              />
              <p className="text-white font-hellvitica font-light text-[3vw] md:text-[20px] leading-snug">
                “A dynamic community of innovators and tech <br />
                enthusiasts dedicated to exploring the limitless <br />
                possibilities of electronics and robotics, driving <br />{" "}
                automation, and shaping a smarter, more
                <br />
                connected future through hands-on learning and
                <br />
                groundbreaking projects.”
              </p>
            </div>
          </div>
        </section>
        <section className=" mx-auto md:ml-[32px]">
          <Image
            src={Strip.src}
            alt="strip"
            width={480}
            height={20}
            className="mb-[40px] mt-[30px] md:mt-[100px] w-[290px] md:w-[480px]"
          />
          <Accordion
            type="single"
            collapsible
            className=" w-[290px] md:w-[480px]"
          >
            <AccordionItem value="item-1" className="border-none">
              <AccordionTrigger className="text-[#ACFDFF] font-aporo text-[24px] md:text-[32px] underline-none">
                IOT WORKSHOP
              </AccordionTrigger>
              <AccordionContent className="font-aporo text-[20px] text-white">
                <span className="font-genos text-[36px]">
                  Introduction to IoT Fundamentals
                </span>
                <br />
                <p className="font-hellvitica mb-2 text-[#D9D9D9]">
                  Participants will learn about IoT architecture, key components
                  such as sensors, and communication protocols like HTTP, along
                  with real-world applications.
                </p>
                <br />
                <span className="font-genos text-[36px]">
                  Hands-on Project Building{" "}
                </span>
                <br />
                <p className="font-hellvitica mb-2 text-[#D9D9D9]">
                  A guided session where attendees will work on a simple IoT
                  project, gaining practical experience in designing and
                  deploying IoT solutions.
                </p>
                <br />
                <span className="font-genos text-[36px]">
                  Pre-configured IoT Kits{" "}
                </span>
                <br />
                <p className="font-hellvitica mb-2 text-[#D9D9D9]">
                  Each participant will receive a ready-to-use kit to streamline
                  the learning process and enable easy project implementation
                </p>
              </AccordionContent>
              <Image
                src={Strip.src}
                alt="strip"
                width={480}
                height={10}
                className="mb-[40px]"
              />
            </AccordionItem>
            <AccordionItem value="item-2" className="border-none">
              <AccordionTrigger className="text-[#ACFDFF] font-aporo text-[24px] md:text-[32px] underline-none">
                FPV MAZE SOLVER
              </AccordionTrigger>
              <AccordionContent className="font-aporo text-[20px] text-white">
                <span className="font-genos text-[36px]">
                  Introduction to IoT Fundamentals
                </span>
                <br />
                <p className="font-hellvitica mb-2 text-[#D9D9D9]">
                  Participants will learn about IoT architecture, key components
                  such as sensors, and communication protocols like HTTP, along
                  with real-world applications.
                </p>
                <br />
                <span className="font-genos text-[36px]">
                  Hands-on Project Building{" "}
                </span>
                <br />
                <p className="font-hellvitica mb-2 text-[#D9D9D9]">
                  A guided session where attendees will work on a simple IoT
                  project, gaining practical experience in designing and
                  deploying IoT solutions.
                </p>
                <br />
                <span className="font-genos text-[36px]">
                  Pre-configured IoT Kits{" "}
                </span>
                <br />
                <p className="font-hellvitica mb-2 text-[#D9D9D9]">
                  Each participant will receive a ready-to-use kit to streamline
                  the learning process and enable easy project implementation
                </p>
              </AccordionContent>
              <Image
                src={Strip.src}
                alt="strip"
                width={480}
                height={10}
                className="mb-[40px]"
              />
            </AccordionItem>
            <AccordionItem value="item-3" className="border-none">
              <AccordionTrigger className="text-[#ACFDFF] font-aporo text-[24px] md:text-[32px] underline-none">
                SPEAKER SESSION
              </AccordionTrigger>
              <AccordionContent className="font-aporo text-[20px] text-white">
                <span className="font-genos text-[36px]">
                  Introduction to IoT Fundamentals
                </span>
                <br />
                <p className="font-hellvitica mb-2 text-[#D9D9D9]">
                  Participants will learn about IoT architecture, key components
                  such as sensors, and communication protocols like HTTP, along
                  with real-world applications.
                </p>
                <br />
                <span className="font-genos text-[36px]">
                  Hands-on Project Building{" "}
                </span>
                <br />
                <p className="font-hellvitica mb-2 text-[#D9D9D9]">
                  A guided session where attendees will work on a simple IoT
                  project, gaining practical experience in designing and
                  deploying IoT solutions.
                </p>
                <br />
                <span className="font-genos text-[36px]">
                  Pre-configured IoT Kits{" "}
                </span>
                <br />
                <p className="font-hellvitica mb-2 text-[#D9D9D9]">
                  Each participant will receive a ready-to-use kit to streamline
                  the learning process and enable easy project implementation
                </p>
              </AccordionContent>
              <Image
                src={Strip.src}
                alt="strip"
                width={480}
                height={10}
                className="mb-[40px]"
              />
            </AccordionItem>
            <AccordionItem value="item-4" className="border-none">
              <AccordionTrigger className="text-[#ACFDFF] font-aporo text-[24px] md:text-[32px] underline-none">
                SPEAKER SESSION
              </AccordionTrigger>
              <AccordionContent className="font-aporo text-[20px] text-white">
                <span className="font-genos text-[36px]">
                  Introduction to IoT Fundamentals
                </span>
                <br />
                <p className="font-hellvitica mb-2 text-[#D9D9D9]">
                  Participants will learn about IoT architecture, key components
                  such as sensors, and communication protocols like HTTP, along
                  with real-world applications.
                </p>
                <br />
                <span className="font-genos text-[36px]">
                  Hands-on Project Building{" "}
                </span>
                <br />
                <p className="font-hellvitica mb-2 text-[#D9D9D9]">
                  A guided session where attendees will work on a simple IoT
                  project, gaining practical experience in designing and
                  deploying IoT solutions.
                </p>
                <br />
                <span className="font-genos text-[36px]">
                  Pre-configured IoT Kits{" "}
                </span>
                <br />
                <p className="font-hellvitica mb-2 text-[#D9D9D9]">
                  Each participant will receive a ready-to-use kit to streamline
                  the learning process and enable easy project implementation
                </p>
              </AccordionContent>
              <Image
                src={Strip.src}
                alt="strip"
                width={480}
                height={10}
                className="mb-[40px]"
              />
            </AccordionItem>
            <AccordionItem value="item-5" className="border-none">
              <AccordionTrigger className="text-[#ACFDFF] font-aporo text-[24px] md:text-[32px] underline-none">
                SPEAKER SESSION
              </AccordionTrigger>
              <AccordionContent className="font-aporo md:text-[20px] text-white">
                <span className="font-genos text-[36px]">
                  Introduction to IoT Fundamentals
                </span>
                <br />
                <p className="font-hellvitica mb-2 text-[#D9D9D9]">
                  Participants will learn about IoT architecture, key components
                  such as sensors, and communication protocols like HTTP, along
                  with real-world applications.
                </p>
                <br />
                <span className="font-genos text-[36px]">
                  Hands-on Project Building{" "}
                </span>
                <br />
                <p className="font-hellvitica mb-2 text-[#D9D9D9]">
                  A guided session where attendees will work on a simple IoT
                  project, gaining practical experience in designing and
                  deploying IoT solutions.
                </p>
                <br />
                <span className="font-genos text-[36px]">
                  Pre-configured IoT Kits{" "}
                </span>
                <br />
                <p className="font-hellvitica mb-2 text-[#D9D9D9]">
                  Each participant will receive a ready-to-use kit to streamline
                  the learning process and enable easy project implementation
                </p>
              </AccordionContent>
              <Image
                src={Strip.src}
                alt="strip"
                width={480}
                height={10}
                className="mb-[40px]"
              />
            </AccordionItem>
          </Accordion>
        </section>
      </section>
      {/*RIGH -1 */}
      <section className="flex justify-end flex-wrap-reverse gap-[60px]">
        <section className=" mx-auto md:mx-0">
          <Image
            src={Strip.src}
            alt="strip"
            width={480}
            height={20}
            className="mb-[40px] mt-[30px] md:mt-[100px] w-[290px] md:w-[480px]"
          />
          <Accordion
            type="single"
            collapsible
            className=" w-[290px] md:w-[480px]"
          >
            <AccordionItem value="item-1" className="border-none">
              <AccordionTrigger className="text-[#ACFDFF] font-aporo text-[24px] md:text-[32px] underline-none">
                IOT WORKSHOP
              </AccordionTrigger>
              <AccordionContent className="font-aporo text-[20px] text-white">
                <span className="font-genos text-[36px]">
                  Introduction to IoT Fundamentals
                </span>
                <br />
                <p className="font-hellvitica mb-2 text-[#D9D9D9]">
                  Participants will learn about IoT architecture, key components
                  such as sensors, and communication protocols like HTTP, along
                  with real-world applications.
                </p>
                <br />
                <span className="font-genos text-[36px]">
                  Hands-on Project Building{" "}
                </span>
                <br />
                <p className="font-hellvitica mb-2 text-[#D9D9D9]">
                  A guided session where attendees will work on a simple IoT
                  project, gaining practical experience in designing and
                  deploying IoT solutions.
                </p>
                <br />
                <span className="font-genos text-[36px]">
                  Pre-configured IoT Kits{" "}
                </span>
                <br />
                <p className="font-hellvitica mb-2 text-[#D9D9D9]">
                  Each participant will receive a ready-to-use kit to streamline
                  the learning process and enable easy project implementation
                </p>
              </AccordionContent>
              <Image
                src={Strip.src}
                alt="strip"
                width={480}
                height={10}
                className="mb-[40px]"
              />
            </AccordionItem>
            <AccordionItem value="item-2" className="border-none">
              <AccordionTrigger className="text-[#ACFDFF] font-aporo text-[24px] md:text-[32px] underline-none">
                FPV MAZE SOLVER
              </AccordionTrigger>
              <AccordionContent className="font-aporo text-[20px] text-white">
                <span className="font-genos text-[36px]">
                  Introduction to IoT Fundamentals
                </span>
                <br />
                <p className="font-hellvitica mb-2 text-[#D9D9D9]">
                  Participants will learn about IoT architecture, key components
                  such as sensors, and communication protocols like HTTP, along
                  with real-world applications.
                </p>
                <br />
                <span className="font-genos text-[36px]">
                  Hands-on Project Building{" "}
                </span>
                <br />
                <p className="font-hellvitica mb-2 text-[#D9D9D9]">
                  A guided session where attendees will work on a simple IoT
                  project, gaining practical experience in designing and
                  deploying IoT solutions.
                </p>
                <br />
                <span className="font-genos text-[36px]">
                  Pre-configured IoT Kits{" "}
                </span>
                <br />
                <p className="font-hellvitica mb-2 text-[#D9D9D9]">
                  Each participant will receive a ready-to-use kit to streamline
                  the learning process and enable easy project implementation
                </p>
              </AccordionContent>
              <Image
                src={Strip.src}
                alt="strip"
                width={480}
                height={10}
                className="mb-[40px]"
              />
            </AccordionItem>
            <AccordionItem value="item-3" className="border-none">
              <AccordionTrigger className="text-[#ACFDFF] font-aporo text-[24px] md:text-[32px] underline-none">
                SPEAKER SESSION
              </AccordionTrigger>
              <AccordionContent className="font-aporo text-[20px] text-white">
                <span className="font-genos text-[36px]">
                  Introduction to IoT Fundamentals
                </span>
                <br />
                <p className="font-hellvitica mb-2 text-[#D9D9D9]">
                  Participants will learn about IoT architecture, key components
                  such as sensors, and communication protocols like HTTP, along
                  with real-world applications.
                </p>
                <br />
                <span className="font-genos text-[36px]">
                  Hands-on Project Building{" "}
                </span>
                <br />
                <p className="font-hellvitica mb-2 text-[#D9D9D9]">
                  A guided session where attendees will work on a simple IoT
                  project, gaining practical experience in designing and
                  deploying IoT solutions.
                </p>
                <br />
                <span className="font-genos text-[36px]">
                  Pre-configured IoT Kits{" "}
                </span>
                <br />
                <p className="font-hellvitica mb-2 text-[#D9D9D9]">
                  Each participant will receive a ready-to-use kit to streamline
                  the learning process and enable easy project implementation
                </p>
              </AccordionContent>
              <Image
                src={Strip.src}
                alt="strip"
                width={480}
                height={10}
                className="mb-[40px]"
              />
            </AccordionItem>
            <AccordionItem value="item-4" className="border-none">
              <AccordionTrigger className="text-[#ACFDFF] font-aporo text-[24px] md:text-[32px] underline-none">
                SPEAKER SESSION
              </AccordionTrigger>
              <AccordionContent className="font-aporo text-[20px] text-white">
                <span className="font-genos text-[36px]">
                  Introduction to IoT Fundamentals
                </span>
                <br />
                <p className="font-hellvitica mb-2 text-[#D9D9D9]">
                  Participants will learn about IoT architecture, key components
                  such as sensors, and communication protocols like HTTP, along
                  with real-world applications.
                </p>
                <br />
                <span className="font-genos text-[36px]">
                  Hands-on Project Building{" "}
                </span>
                <br />
                <p className="font-hellvitica mb-2 text-[#D9D9D9]">
                  A guided session where attendees will work on a simple IoT
                  project, gaining practical experience in designing and
                  deploying IoT solutions.
                </p>
                <br />
                <span className="font-genos text-[36px]">
                  Pre-configured IoT Kits{" "}
                </span>
                <br />
                <p className="font-hellvitica mb-2 text-[#D9D9D9]">
                  Each participant will receive a ready-to-use kit to streamline
                  the learning process and enable easy project implementation
                </p>
              </AccordionContent>
              <Image
                src={Strip.src}
                alt="strip"
                width={480}
                height={10}
                className="mb-[40px]"
              />
            </AccordionItem>
            <AccordionItem value="item-5" className="border-none">
              <AccordionTrigger className="text-[#ACFDFF] font-aporo text-[24px] md:text-[32px] underline-none">
                SPEAKER SESSION
              </AccordionTrigger>
              <AccordionContent className="font-aporo md:text-[20px] text-white">
                <span className="font-genos text-[36px]">
                  Introduction to IoT Fundamentals
                </span>
                <br />
                <p className="font-hellvitica mb-2 text-[#D9D9D9]">
                  Participants will learn about IoT architecture, key components
                  such as sensors, and communication protocols like HTTP, along
                  with real-world applications.
                </p>
                <br />
                <span className="font-genos text-[36px]">
                  Hands-on Project Building{" "}
                </span>
                <br />
                <p className="font-hellvitica mb-2 text-[#D9D9D9]">
                  A guided session where attendees will work on a simple IoT
                  project, gaining practical experience in designing and
                  deploying IoT solutions.
                </p>
                <br />
                <span className="font-genos text-[36px]">
                  Pre-configured IoT Kits{" "}
                </span>
                <br />
                <p className="font-hellvitica mb-2 text-[#D9D9D9]">
                  Each participant will receive a ready-to-use kit to streamline
                  the learning process and enable easy project implementation
                </p>
              </AccordionContent>
              <Image
                src={Strip.src}
                alt="strip"
                width={480}
                height={10}
                className="mb-[40px]"
              />
            </AccordionItem>
          </Accordion>
        </section>
        <section
          className="mt-[100px] w-full sm:w-[515px] md:w-[555px] lg:w-[700px]"
          style={{
            backgroundImage: `url(${Container2.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            maxWidth: "740px",
            maxHeight: "750px",
          }}
        >
          <div className="flex md:flex-row items-center justify-between mx-auto">
            <div className="flex flex-col items-start justify-center text-white bg-opacity-50 mb-10 md:mb-14 ml-[1vw] md:ml-[6vw] mt-[20px]">
              <p className="text-white font-genos font-normal text-[5vw] sm:text-[6vw] md:text-[48px] whitespace-nowrap overflow-hidden text-ellipsis leading-tight">
                By,
              </p>
              <h1 className="text-white font-aporo font-normal text-[7vw] sm:text-[7vw] md:text-[52px] whitespace-nowrap overflow-hidden text-ellipsis leading-tight">
                ELECTRONICS AND
              </h1>
              <h1 className="text-white font-aporo font-normal text-[7vw] sm:text-[7vw] md:text-[42px] lg:text-[52px] whitespace-nowrap overflow-hidden text-ellipsis leading-tight">
                ROBOTICS SOCIETY
              </h1>
              <Image
                src={Strip.src}
                alt="strip"
                width={398}
                height={10}
                className="mb-[5px] md:mb-[12px] lg:mb-[38px] mt-[6px] md:mt-[12px] w-[240px] md:w-[398px]"
              />
              <p className="text-white font-hellvitica font-light text-[3vw] md:text-[20px] leading-snug">
                “A dynamic community of innovators and tech <br />
                enthusiasts dedicated to exploring the limitless <br />
                possibilities of electronics and robotics, driving <br />{" "}
                automation, and shaping a smarter, more
                <br />
                connected future through hands-on learning and
                <br />
                groundbreaking projects.”
              </p>
            </div>
          </div>
        </section>
      </section>
      <Footer/>
    </div>
  );
}

export default page;
