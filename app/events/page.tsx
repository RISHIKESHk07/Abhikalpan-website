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

interface AccordionSubItem {
  heading: string;
  subtext: string;
}
const clubsData = [
  {
    name: "ERS",
    fullName: "ELECTRONICS AND ROBOTICS SOCIETY",
    description: "",
    events: [
      {
        title: "FPV MAZE SOLVER",
        content: [{
          subtext: "The FPV Maze Solver competition challenges participants to design a bot that navigates a maze while overcoming obstacles. It tests robotics, programming, and problem-solving skills, fostering innovation and teamwork.",
          heading: "FPV MAZE SOLVER"
        }]
      },
      {
        title: "RoboWars",
        content: [{
          subtext: "The RoboWar competition challenges participants to design and build robots that battle in an arena, testing durability, strategy, and engineering excellence.",
          heading: "RoboWars"
        }]
      },
      {
        title: "SPEAKER SESSION",
        content: [{
          subtext: "A special interactive session where participants meet alumni with expertise in robotics, gaining valuable insights from their experiences and having the opportunity to ask questions.",
          heading: "SPEAKER SESSION"
        }]
      }
    ]
  },
  {
    name: "TPC",
    fullName: "THE PROGRAMMING CLUB",
    description: "A coding community dedicated to fostering programming excellence through competitive challenges and innovative projects.",
    events: [
      {
        title: "ECHELON-VALORANT",
        content: [{
          heading: "Gaming Tournament",
          subtext: "Echelon is a high-stakes Valorant tournament where the sharpest teams battle for supremacy. With online and offline rounds, only the best will make it to the finals. The event offers thrilling competition, cash prizes, and ultimate bragging rights."
        }]
      },
      {
        title: "CODE ARENA",
        content: [{
          heading: "ICPC-Style Contest",
          subtext: "The Code Arena is an ICPC-style contest on Codeforces, testing problem-solving, algorithms, and coding efficiency. With fair rankings, exciting prizes, and diverse challenges, it’s a must-attend for coding enthusiasts."
        }]
      },
      {
        title: "CSS BATTLEFIELD",
        content: [{
          heading: "CSS Competition",
          subtext: "CSS Battlefield is a fast-paced competition where participants replicate designs with pixel-perfect precision using pure CSS. Tasks include 3 still images and 2 animated GIFs, testing speed, creativity, and attention to detail."
        }]
      }
    ]
  },
  {
    name: "AFC",
    fullName: "AERO FABRICATION CLUB",
    description: "",
    events: [
      {
        title: "AERORUSH",
        content: [{
          heading: "AERORUSH",
          subtext: "The Aero Rush Drone Design Competition challenges students to create innovative multirotor drone designs using CAD tools, emphasizing efficiency, precision, and creativity."
        }]
      },
      {
        title: "AEROMODELING QUIZ",
        content: [{
          heading: "AEROMODELING QUIZ",
          subtext: "Aeromodeling Quiz is designed to test participants' knowledge of aerodynamics, aircraft structures, propulsion, and aviation history. Open to all engineering and aviation enthusiasts."
        }]
      },
      {
        title: "RC GLIDER",
        content: [{
          heading: "RC GLIDER",
          subtext: "The RC Glider Workshop, challenges participants to design, build, and fly gliders and tests aerodynamics, structural design, and piloting skills, making it an exciting opportunity for aviation enthusiasts to showcase their expertise in flight mechanics."
        }]
      },
      {
        title: "DRONE WORKSHOP",
        content: [{
          heading: "DRONE WORKSHOP",
          subtext: "A hands-on workshop covering drone design, assembly, and autonomous flight principles."
        }]
      },
      {
        title: "DRONE EXHIBITION",
        content: [{
          heading: "DRONE EXHIBITION",
          subtext: "A showcase of innovative drones, highlighting their design, technology, and real-world applications."
        }]
      },
      {
        title: "ANSYS WORKSHOP",
        content: [{
          heading: "ANSYS WORKSHOP",
          subtext: "To provide participants with hands-on experience in ANSYS for engineering simulations, covering structural, thermal, and fluid analysis."
        }]
      }
    ]
  },
  {
    name: "RACING",
    fullName: "RACING CLUB",
    description: "",
    events: [
      {
        title: "DRIVELINE",
        content: [{
          heading: "DRIVELINE",
          subtext: "EV Powertrain Design Challenge is a national competition for engineering students and EV enthusiasts. Teams design a complete EV powertrain, optimizing performance, cost, and efficiency"
        }]
      },
      {
        title: "AUTOTRIVA QUIZ",
        content: [{
          heading: "AUTOTRIVIA QUIZ",
          subtext: "AutoTrivia is an online quiz competition designed to challenge and expand participants knowledge of the automotive industry."
        }]
      },
      {
        title: "EV WORKSHOP",
        content: [{
          heading: "EV WORKSHOP",
          subtext: "An EV workshop is a session focused on electric vehicles (EVs) covering topics like their design, components (motors, batteries, charging systems), assembly, and maintenance. It often includes hands-on activities, insights into industry trends, sustainability benefits, and the economic and policy aspects of EVs. These workshops aim to educate participants on EV technology and its role in promoting sustainable mobility"
        }]
      },
      {
        title: "SEMINAR",
        content: [{
          heading: "SEMINAR",
          subtext: "The seminar will provide valuable insights into real-world applications of engineering simulation, enhancing technical knowledge and career opportunities for students. Ansys experts will share their expertise, making it a great learning experience for all engineering learners and professionals."
        }]
      }
    ]
  },
  {
    name: "CAD",
    fullName: "COMPUTER AIDED DESIGN",
    description: "",
    events: [
      {
        title: "CREATION CHALLENGE & 3D PRINTING",
        content: [{
          heading: "CREATION CHALLENGE & 3D PRINTING",
          subtext: "This workshop is designed to provide participants with a hands-on opportunity to explore the fascinating world of 3D printing, learn essential skills, and unleash their creativity in a collaborative environment. The goal of this workshop is to introduce participants to the fundamentals of 3D printing technology, including design principles, material selection, and machine operation."
        }]
      },
      {
        title: "INNOVATION & DESIGN CHALLENGE",
        content: [{
          heading: "INNOVATION & DESIGN CHALLENGE",
          subtext: "The Innovation & Design Challenge is a premier competition organized as part of Abhikalpan'25, the annual tech fest of IIITDM Jabalpur. Hosted by the CAD & 3D Printing Club, this event aims to ignite creativity and technical expertise by challenging participants to design innovative solutions. The competition will span both online and offline modes, providing teams with a platform to showcase their CAD modeling, design thinking, and practical implementation skills."
        }]
      },
      {
        title: "CAD BATTLEFIELD",
        content: [{
          heading: "CAD BATTLEFIELD",
          subtext: " The event tests participants ability to accurately recreate a complex 3D model within a set time limit using a designated CAD software. Judged on accuracy, speed, and drafting quality, this event pushes competitors to optimize workflow, interpret      designs efficiently, and achieve precision under pressure."
        }]
      },
      {
        title: "CAD MANIA",
        content: [{
          heading: "CAD MANIA",
          subtext: "The CAD Mania event challenges participants to precisely replicate a complex 3D model within a limited time using designated CAD software. Competitors are evaluated based on accuracy, speed, and drafting quality, encouraging them to refine their workflow, interpret designs effectively, and maintain precision under pressure."
        }]
      }
    ]
  },
  {
    name: "BMC",
    fullName: "BUSINESS AND MANAGEMENT CLUB",
    description: "",
    events: [
      {
        title: "TRADING EVENT",
        content: [{
          heading: "Virtual Trading",
          subtext: "This virtual trading competition is designed to test participants’ financial acumen, strategic thinking, and decision-making skills. Using the Roostoo platform, participants will manage virtual portfolios and aim to maximize their value over three days. This event provides a practical learning experience in financial markets and trading strategies."
        }]
      },
      {
        title: "BUSINESS HACKATHON",
        content: [{
          heading: "24-Hour Challenge",
          subtext: "This 24-hour hackathon challenges participants to solve real-world business problems using innovation, data analysis, and strategy development. Teams will work collaboratively to create solutions and present them to a panel of judges. The event provides an excellent platform to showcase analytical thinking, creativity, and teamwork."
        }]
      }
    ]
  }
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

      {clubsData.map((club, index) => (
        <React.Fragment key={index}>
          {index % 2 === 0 ? (
            // Left Section
            <section className="flex flex-wrap gap-[30px]" key={index}>
              <section
                className="mt-[100px] w-full md:w-[555px] lg:w-[700px] h-[370px] sm:h-[450px] md:h-[600px]"
                style={{
                  backgroundImage: `url(${Container.src})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  maxWidth: "740px",
                  maxHeight: "750px",
                }}
              >
                <div className="flex flex-col items-start justify-center text-white bg-opacity-50 mb-10 md:mb-[120px] mt-[20px] ml-[20px]">
                  <p className="text-white font-genos font-normal text-[5vw] sm:text-[6vw] md:text-[48px]">
                    By,
                  </p>
                  <h1 className="text-white font-aporo font-normal text-[7vw] sm:text-[7vw] md:text-[52px]">
                    {club.fullName}
                  </h1>
                  <Image
                    src={Strip.src}
                    alt="strip"
                    width={398}
                    height={10}
                    className="mb-[5px] md:mb-[12px] lg:mb-[38px] mt-[6px] md:mt-[12px] w-[240px] md:w-[398px]"
                  />
                  <p className="text-white font-hellvitica font-light text-[12px] lg:text-[20px] leading-snug">
                    {club.description}
                  </p>
                </div>
              </section>
              <section className="mx-auto md:ml-[2px] lg:ml-[10px]">
                <Image
                  src={Strip.src}
                  alt="strip"
                  width={480}
                  height={20}
                  className="mb-[40px] mt-[30px] md:mt-[100px] w-[290px] md:w-[480px]"
                />
                <Accordion type="single" collapsible className="w-[290px] md:w-[480px]">
                  {club.events.map((event, eventIndex) => (
                    <EventAccordionItem
                      key={eventIndex}
                      title={event.title}
                      content={event.content}
                      index={eventIndex.toString()}
                    />
                  ))}
                </Accordion>
              </section>
            </section>
          ) : (
            // Right Section
            <section className="flex justify-start lg:justify-end flex-wrap-reverse gap-[30px]">
              <section className="mx-auto md:mx-0">
                <Image
                  src={Strip.src}
                  alt="strip"
                  width={480}
                  height={20}
                  className="mb-[40px] mt-[30px] md:mt-[100px] w-[290px] md:w-[480px]"
                />
                <Accordion type="single" collapsible className="w-[290px] md:w-[480px]">
                  {club.events.map((event, eventIndex) => (
                    <EventAccordionItem
                      key={eventIndex}
                      title={event.title}
                      content={event.content}
                      index={eventIndex.toString()}
                    />
                  ))}
                </Accordion>
              </section>
              <section
                className="mt-[100px] w-full md:w-[555px] lg:w-[689px] h-[450px] md:h-[600px]"
                style={{
                  backgroundImage: `url(${Container2.src})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  maxWidth: "740px",
                  maxHeight: "750px",
                }}
              >
                <div className="flex flex-col items-start justify-center text-white bg-opacity-50 mb-10 md:mb-[120px] mt-[20px] ml-[20px]">
                  <p className="text-white font-genos font-normal text-[5vw] sm:text-[6vw] md:text-[48px]">
                    By,
                  </p>
                  <h1 className="text-white font-aporo font-normal text-[7vw] sm:text-[7vw] md:text-[52px]">
                    {club.fullName}
                  </h1>
                  <Image
                    src={Strip.src}
                    alt="strip"
                    width={398}
                    height={10}
                    className="mb-[5px] md:mb-[12px] lg:mb-[38px] mt-[6px] md:mt-[12px] w-[240px] md:w-[398px]"
                  />
                  <p className="text-white font-hellvitica font-light text-[12px] lg:text-[20px] leading-snug">
                    {club.description}
                  </p>
                </div>
              </section>
            </section>
          )}
        </React.Fragment>
      ))}
      <Footer />
    </div>
  );
}

export default page;
