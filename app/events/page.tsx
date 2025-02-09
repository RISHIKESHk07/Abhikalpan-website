import React from "react";
import Navbar from "../(Custom Components)/Navbar";
import Footer from "../(Custom Components)/Footer";
import Container from "@/public/images/EventsCardContainer.png";
import Strip from "@/public/images/EventsStrip.png";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface AccordionSubItem {
  heading: string;
  subtext: string;
}

const ersAccordionData: { title: string; content: Array<AccordionSubItem> }[] =
  [
    {
      title: "IOT WORKSHOP",
      content: [
        {
          heading: "Introduction to IoT Fundamentals",
          subtext:
            "Participants will learn about IoT architecture, key components such as sensors, and communication protocols like HTTP, along with real-world applications.",
        },
        {
          heading: "Hands-on Project Building",
          subtext:
            "A guided session where attendees will work on a simple IoT project, gaining practical experience in designing and deploying IoT solutions.",
        },
        {
          heading: "Pre-configured IoT Kits",
          subtext:
            "Each participant will receive a ready-to-use kit to streamline the learning process and enable easy project implementation",
        },
      ],
    },
    {
      title: "FPV MAZE SOLVER",
      content: [
        {
          heading: "Introduction to IoT Fundamentals",
          subtext:
            "Participants will learn about IoT architecture, key components such as sensors, and communication protocols like HTTP, along with real-world applications.",
        },
        {
          heading: "Hands-on Project Building",
          subtext:
            "A guided session where attendees will work on a simple IoT project, gaining practical experience in designing and deploying IoT solutions.",
        },
        {
          heading: "Pre-configured IoT Kits",
          subtext:
            "Each participant will receive a ready-to-use kit to streamline the learning process and enable easy project implementation",
        },
      ],
    },
    {
      title: "SPEAKER SESSION1",
      content: [
        {
          heading: "Introduction to IoT Fundamentals",
          subtext:
            "Participants will learn about IoT architecture, key components such as sensors, and communication protocols like HTTP, along with real-world applications.",
        },
        {
          heading: "Hands-on Project Building",
          subtext:
            "A guided session where attendees will work on a simple IoT project, gaining practical experience in designing and deploying IoT solutions.",
        },
        {
          heading: "Pre-configured IoT Kits",
          subtext:
            "Each participant will receive a ready-to-use kit to streamline the learning process and enable easy project implementation",
        },
      ],
    },
    {
      title: "SPEAKER SESSION2",
      content: [
        {
          heading: "Introduction to IoT Fundamentals",
          subtext:
            "Participants will learn about IoT architecture, key components such as sensors, and communication protocols like HTTP, along with real-world applications.",
        },
        {
          heading: "Hands-on Project Building",
          subtext:
            "A guided session where attendees will work on a simple IoT project, gaining practical experience in designing and deploying IoT solutions.",
        },
        {
          heading: "Pre-configured IoT Kits",
          subtext:
            "Each participant will receive a ready-to-use kit to streamline the learning process and enable easy project implementation",
        },
      ],
    },
    {
      title: "SPEAKER SESSION3",
      content: [
        {
          heading: "Introduction to IoT Fundamentals",
          subtext:
            "Participants will learn about IoT architecture, key components such as sensors, and communication protocols like HTTP, along with real-world applications.",
        },
        {
          heading: "Hands-on Project Building",
          subtext:
            "A guided session where attendees will work on a simple IoT project, gaining practical experience in designing and deploying IoT solutions.",
        },
        {
          heading: "Pre-configured IoT Kits",
          subtext:
            "Each participant will receive a ready-to-use kit to streamline the learning process and enable easy project implementation",
        },
      ],
    },
  ];

const EventAccordionItem = ({
  title,
  content,
  index,
}: {
  title: string;
  content: Array<AccordionSubItem>;
  index: string;
}) => {
  return (
    <AccordionItem value={`item-${index}`} className="border-none">
      <AccordionTrigger className="text-[#ACFDFF] font-aporo text-[24px] md:text-[32px] underline-none">
        {title}
      </AccordionTrigger>
      <AccordionContent className="font-aporo text-[20px] text-white">
        {content.map((item) => (
          <>
            <span className="font-genos text-[36px]">{item.heading}</span>
            <br />
            <p className="font-hellvitica mb-2 text-[#D9D9D9]">
              {item.subtext}
            </p>
            <br />
          </>
        ))}
      </AccordionContent>
      <Image
        src={Strip.src}
        alt="strip"
        width={480}
        height={10}
        className="mb-[40px]"
      />
    </AccordionItem>
  );
};

function page() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-end m-10 mt-[60px] sm:mt-[180px] leading-[64px] items-center mr-[5vw]">
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
          className="mt-[100px] w-full md:w-[555px] lg:w-[700px] sm:h-[450px] md:h-auto"
          style={{
            backgroundImage: `url(${Container.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            maxWidth: "740px",
            maxHeight: "750px",
          }}
        >
          <div className="flex flex-col items-start justify-center text-white bg-opacity-50 mb-10 md:mb-[120px] mt-[20px] ml-[20px]">
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
            <p className="text-white font-hellvitica font-light text-[12px] lg:text-[20px] leading-snug">
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
        </section>
        <section className=" mx-auto md:ml-[2px] lg:ml-[10px]">
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
            {ersAccordionData.map((item, index) => (
              <EventAccordionItem
                title={item.title}
                content={item.content}
                index={index.toString()}
                key={index}
              />
            ))}
          </Accordion>
        </section>
      </section>
      {/*RIGH -1 */}
      <section className="flex justify-start lg:justify-end flex-wrap-reverse gap-[60px]">
        <section className="mx-auto md:mx-0">
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
            {ersAccordionData.map((item, index) => (
              <EventAccordionItem
                title={item.title}
                content={item.content}
                index={index.toString()}
                key={index}
              />
            ))}
          </Accordion>
        </section>
        <section
          className="mt-[100px] w-full md:w-[555px] lg:w-[689px] sm:h-[450px] md:h-auto
		   bg-[url('/images/EventsCardContainer.png')] lg:bg-[url('/images/EventsCardContainer2.png')] 
		   bg-contain bg-no-repeat max-w-[740px] max-h-[750px]"
        >
          <div className="flex flex-col items-start justify-center lg:justify-end text-white bg-opacity-50 mb-10 md:mb-[120px] mt-[20px] ml-[20px] ">
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
            <p className="text-white font-hellvitica font-light text-[12px] lg:text-[20px] leading-snug">
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
        </section>
      </section>
	  {/* LEFT-2 */}
      <section className="flex flex-wrap gap-[60px]">
        <section
          className="mt-[100px] w-full md:w-[555px] lg:w-[700px] sm:h-[450px] md:h-auto"
          style={{
            backgroundImage: `url(${Container.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            maxWidth: "740px",
            maxHeight: "750px",
          }}
        >
          <div className="flex flex-col items-start justify-center text-white bg-opacity-50 mb-10 md:mb-[120px] mt-[20px] ml-[20px]">
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
            <p className="text-white font-hellvitica font-light text-[12px] lg:text-[20px] leading-snug">
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
        </section>
        <section className=" mx-auto md:ml-[2px] lg:ml-[10px]">
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
            {ersAccordionData.map((item, index) => (
              <EventAccordionItem
                title={item.title}
                content={item.content}
                index={index.toString()}
                key={index}
              />
            ))}
          </Accordion>
        </section>
      </section>
      {/*RIGH -2 */}
      <section className="flex justify-start lg:justify-end flex-wrap-reverse gap-[60px]">
        <section className="mx-auto md:mx-0">
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
            {ersAccordionData.map((item, index) => (
              <EventAccordionItem
                title={item.title}
                content={item.content}
                index={index.toString()}
                key={index}
              />
            ))}
          </Accordion>
        </section>
        <section
          className="mt-[100px] w-full md:w-[555px] lg:w-[689px] sm:h-[450px] md:h-auto
		   bg-[url('/images/EventsCardContainer.png')] lg:bg-[url('/images/EventsCardContainer2.png')] 
		   bg-contain bg-no-repeat max-w-[740px] max-h-[750px]"
        >
          <div className="flex flex-col items-start justify-center lg:justify-end text-white bg-opacity-50 mb-10 md:mb-[120px] mt-[20px] ml-[20px] ">
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
            <p className="text-white font-hellvitica font-light text-[12px] lg:text-[20px] leading-snug">
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
        </section>
      </section>
	  {/* LEFT-3 */}
      <section className="flex flex-wrap gap-[60px]">
        <section
          className="mt-[100px] w-full md:w-[555px] lg:w-[700px] sm:h-[450px] md:h-auto"
          style={{
            backgroundImage: `url(${Container.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            maxWidth: "740px",
            maxHeight: "750px",
          }}
        >
          <div className="flex flex-col items-start justify-center text-white bg-opacity-50 mb-10 md:mb-[120px] mt-[20px] ml-[20px]">
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
            <p className="text-white font-hellvitica font-light text-[12px] lg:text-[20px] leading-snug">
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
        </section>
        <section className=" mx-auto md:ml-[2px] lg:ml-[10px]">
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
            {ersAccordionData.map((item, index) => (
              <EventAccordionItem
                title={item.title}
                content={item.content}
                index={index.toString()}
                key={index}
              />
            ))}
          </Accordion>
        </section>
      </section>
      {/*RIGH -3 */}
      <section className="flex justify-start lg:justify-end flex-wrap-reverse gap-[60px]">
        <section className="mx-auto md:mx-0">
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
            {ersAccordionData.map((item, index) => (
              <EventAccordionItem
                title={item.title}
                content={item.content}
                index={index.toString()}
                key={index}
              />
            ))}
          </Accordion>
        </section>
        <section
          className="mt-[100px] w-full md:w-[555px] lg:w-[689px] sm:h-[450px] md:h-auto
		   bg-[url('/images/EventsCardContainer.png')] lg:bg-[url('/images/EventsCardContainer2.png')] 
		   bg-contain bg-no-repeat max-w-[740px] max-h-[750px]"
        >
          <div className="flex flex-col items-start justify-center lg:justify-end text-white bg-opacity-50 mb-10 md:mb-[120px] mt-[20px] ml-[20px] ">
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
            <p className="text-white font-hellvitica font-light text-[12px] lg:text-[20px] leading-snug">
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
        </section>
      </section>
	  {/* LEFT-4 */}
      <section className="flex flex-wrap gap-[60px]">
        <section
          className="mt-[100px] w-full md:w-[555px] lg:w-[700px] sm:h-[450px] md:h-auto"
          style={{
            backgroundImage: `url(${Container.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            maxWidth: "740px",
            maxHeight: "750px",
          }}
        >
          <div className="flex flex-col items-start justify-center text-white bg-opacity-50 mb-10 md:mb-[120px] mt-[20px] ml-[20px]">
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
            <p className="text-white font-hellvitica font-light text-[12px] lg:text-[20px] leading-snug">
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
        </section>
        <section className=" mx-auto md:ml-[2px] lg:ml-[10px]">
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
            {ersAccordionData.map((item, index) => (
              <EventAccordionItem
                title={item.title}
                content={item.content}
                index={index.toString()}
                key={index}
              />
            ))}
          </Accordion>
        </section>
      </section>
      {/*RIGH -4 */}
      <section className="flex justify-start lg:justify-end flex-wrap-reverse gap-[60px]">
        <section className="mx-auto md:mx-0">
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
            {ersAccordionData.map((item, index) => (
              <EventAccordionItem
                title={item.title}
                content={item.content}
                index={index.toString()}
                key={index}
              />
            ))}
          </Accordion>
        </section>
        <section
          className="mt-[100px] w-full md:w-[555px] lg:w-[689px] sm:h-[450px] md:h-auto
		   bg-[url('/images/EventsCardContainer.png')] lg:bg-[url('/images/EventsCardContainer2.png')] 
		   bg-contain bg-no-repeat max-w-[740px] max-h-[750px]"
        >
          <div className="flex flex-col items-start justify-center lg:justify-end text-white bg-opacity-50 mb-10 md:mb-[120px] mt-[20px] ml-[20px] ">
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
            <p className="text-white font-hellvitica font-light text-[12px] lg:text-[20px] leading-snug">
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
        </section>
      </section>
	  {/* LEFT-5 */}
      <section className="flex flex-wrap gap-[60px]">
        <section
          className="mt-[100px] w-full md:w-[555px] lg:w-[700px] sm:h-[450px] md:h-auto"
          style={{
            backgroundImage: `url(${Container.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            maxWidth: "740px",
            maxHeight: "750px",
          }}
        >
          <div className="flex flex-col items-start justify-center text-white bg-opacity-50 mb-10 md:mb-[120px] mt-[20px] ml-[20px]">
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
            <p className="text-white font-hellvitica font-light text-[12px] lg:text-[20px] leading-snug">
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
        </section>
        <section className=" mx-auto md:ml-[2px] lg:ml-[10px]">
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
            {ersAccordionData.map((item, index) => (
              <EventAccordionItem
                title={item.title}
                content={item.content}
                index={index.toString()}
                key={index}
              />
            ))}
          </Accordion>
        </section>
      </section>
      {/*RIGH -5 */}
      <section className="flex justify-start lg:justify-end flex-wrap-reverse gap-[60px]">
        <section className="mx-auto md:mx-0">
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
            {ersAccordionData.map((item, index) => (
              <EventAccordionItem
                title={item.title}
                content={item.content}
                index={index.toString()}
                key={index}
              />
            ))}
          </Accordion>
        </section>
        <section
          className="mt-[100px] w-full md:w-[555px] lg:w-[689px] sm:h-[450px] md:h-auto
		   bg-[url('/images/EventsCardContainer.png')] lg:bg-[url('/images/EventsCardContainer2.png')] 
		   bg-contain bg-no-repeat max-w-[740px] max-h-[750px]"
        >
          <div className="flex flex-col items-start justify-center lg:justify-end text-white bg-opacity-50 mb-10 md:mb-[120px] mt-[20px] ml-[20px] ">
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
            <p className="text-white font-hellvitica font-light text-[12px] lg:text-[20px] leading-snug">
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
        </section>
      </section>
	  {/* LEFT-6 */}
      <section className="flex flex-wrap gap-[60px]">
        <section
          className="mt-[100px] w-full md:w-[555px] lg:w-[700px] sm:h-[450px] md:h-auto"
          style={{
            backgroundImage: `url(${Container.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            maxWidth: "740px",
            maxHeight: "750px",
          }}
        >
          <div className="flex flex-col items-start justify-center text-white bg-opacity-50 mb-10 md:mb-[120px] mt-[20px] ml-[20px]">
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
            <p className="text-white font-hellvitica font-light text-[12px] lg:text-[20px] leading-snug">
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
        </section>
        <section className=" mx-auto md:ml-[2px] lg:ml-[10px]">
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
            {ersAccordionData.map((item, index) => (
              <EventAccordionItem
                title={item.title}
                content={item.content}
                index={index.toString()}
                key={index}
              />
            ))}
          </Accordion>
        </section>
      </section>
      {/*RIGH -6 */}
      <section className="flex justify-start lg:justify-end flex-wrap-reverse gap-[60px]">
        <section className="mx-auto md:mx-0">
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
            {ersAccordionData.map((item, index) => (
              <EventAccordionItem
                title={item.title}
                content={item.content}
                index={index.toString()}
                key={index}
              />
            ))}
          </Accordion>
        </section>
        <section
          className="mt-[100px] w-full md:w-[555px] lg:w-[689px] sm:h-[450px] md:h-auto
		   bg-[url('/images/EventsCardContainer.png')] lg:bg-[url('/images/EventsCardContainer2.png')] 
		   bg-contain bg-no-repeat max-w-[740px] max-h-[750px]"
        >
          <div className="flex flex-col items-start justify-center lg:justify-end text-white bg-opacity-50 mb-10 md:mb-[120px] mt-[20px] ml-[20px] ">
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
            <p className="text-white font-hellvitica font-light text-[12px] lg:text-[20px] leading-snug">
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
        </section>
      </section>
	  {/* LEFT-7 */}
      <section className="flex flex-wrap gap-[60px]">
        <section
          className="mt-[100px] w-full md:w-[555px] lg:w-[700px] sm:h-[450px] md:h-auto"
          style={{
            backgroundImage: `url(${Container.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            maxWidth: "740px",
            maxHeight: "750px",
          }}
        >
          <div className="flex flex-col items-start justify-center text-white bg-opacity-50 mb-10 md:mb-[120px] mt-[20px] ml-[20px]">
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
            <p className="text-white font-hellvitica font-light text-[12px] lg:text-[20px] leading-snug">
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
        </section>
        <section className=" mx-auto md:ml-[2px] lg:ml-[10px]">
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
            {ersAccordionData.map((item, index) => (
              <EventAccordionItem
                title={item.title}
                content={item.content}
                index={index.toString()}
                key={index}
              />
            ))}
          </Accordion>
        </section>
      </section>
      {/*RIGH -7 */}
      <section className="flex justify-start lg:justify-end flex-wrap-reverse gap-[60px]">
        <section className="mx-auto md:mx-0">
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
            {ersAccordionData.map((item, index) => (
              <EventAccordionItem
                title={item.title}
                content={item.content}
                index={index.toString()}
                key={index}
              />
            ))}
          </Accordion>
        </section>
        <section
          className="mt-[100px] w-full md:w-[555px] lg:w-[689px] sm:h-[450px] md:h-auto
		   bg-[url('/images/EventsCardContainer.png')] lg:bg-[url('/images/EventsCardContainer2.png')] 
		   bg-contain bg-no-repeat max-w-[740px] max-h-[750px]"
        >
          <div className="flex flex-col items-start justify-center lg:justify-end text-white bg-opacity-50 mb-10 md:mb-[120px] mt-[20px] ml-[20px] ">
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
            <p className="text-white font-hellvitica font-light text-[12px] lg:text-[20px] leading-snug">
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
        </section>
      </section>
      <Footer />
    </div>
  );
}

export default page;
