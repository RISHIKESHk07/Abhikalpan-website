import React from "react";
import Navbar from "../(Custom Components)/Navbar";
import Footer from "../(Custom Components)/Footer";
import Container from "@/public/images/EventsCardContainer.png";
import Strip from "@/public/images/EventsStrip.png";
import Image from "next/image";
import ContainerButton from "@/public/images/PeopleContainerTitle.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import register_now_bg from "@/public/images/register_now_bg.svg";
import register_bottom_img from "@/public/assets/register_now_bottom_img.svg";

export const metadata = {
  title: "Events at Abhikalpan'25 - IIITDM Jabalpur TechFest",
  description:
    "Explore the exciting tech and design events at Abhikalpan'25...",
  alternates: {
    canonical: "https://www.abhikalpan.live/events",
  },
  robots: { index: true, follow: true },
};

interface AccordionSubItem {
  heading: string;
  subtext: string;
  link: string;
}
const clubsData = [
  {
    name: "ERS",
    fullName: "ELECTRONICS AND ROBOTICS SOCIETY",
    description:
      "Electronics and Robotics Society is the dynamic community of innovators and tech enthusiasts dedicated to exploring the limitless possibilities of electronics and robotics, driving automation, and shaping a smarter, more connected future through hands-on learning and groundbreaking projects.",
    events: [
      {
        title: "FPV MAZE SOLVER",
        content: [
          {
            subtext:
              "The FPV Maze Solver competition challenges participants to design a bot that navigates a maze while overcoming obstacles. It tests robotics, programming, and problem-solving skills, fostering innovation and teamwork.",
            heading: "FPV MAZE SOLVER",
            link: "https://drive.google.com/file/d/16EeJD0psJQZnU6I6L7d-jLghTV_aBf0t/view?usp=drive_link",
          },
        ],
      },
      {
        title: "RoboWars",
        content: [
          {
            subtext:
              "The RoboWar competition challenges participants to design and build robots that battle in an arena, testing durability, strategy, and engineering excellence.",
            heading: "RoboWars",
            link: "https://drive.google.com/file/d/1K_ZU5xFRL9CNBdowhBUr8QmPIKAOGwrO/view?usp=drive_link",
          },
        ],
      },
      {
        title: "SPEAKER SESSION",
        content: [
          {
            subtext:
              "A special interactive session where participants meet alumni with expertise in robotics, gaining valuable insights from their experiences and having the opportunity to ask questions.",
            heading: "SPEAKER SESSION",
            link: "",
          },
        ],
      },
    ],
  },
  {
    name: "APS",
    fullName: "Astronomy and Physics Society",
    description:
      "Astronomy and Physics Society fosters a passion for space and scientific exploration through discussions, workshops, and stargazing events. It brings together students interested in understanding the universe, from fundamental physics to cutting-edge astronomy.",
    events: [
      {
        title: "Eclipse - Case Study",
        content: [
          {
            subtext:
              " This competition tests problem-solving and analytical skills. Teams propose solutions in two rounds: online submission and offline presentation. Judging criteria include creativity, feasibility, clarity, and analytical quality. It offers a platform to showcase critical thinking and innovation ",
            heading: "Eclipse - Case Study",
            link: "https://drive.google.com/file/d/1nh3aM8v2rw4DUUVdEhzJ9WxBqJ3Y8KTc/view?usp=drive_link",
          },
        ],
      },
      {
        title: "CosmicQuest",
        content: [
          {
            subtext:
              " CosmicQuest is an exciting competition for astronomy enthusiasts. Test your knowledge on astrophysics, mythology, Quantum Mechanics, and recent discoveries through two engaging rounds of theoretical and practical challenges. Join us at IIITDM Jabalpur for this thrilling opportunity to showcase your expertise and connect with fellow enthusiasts.",
            heading: "CosmicQuest",
            link: "https://drive.google.com/file/d/199vJHfo9L-9C-uI1hj6e_5aHPIqDdxy-/view?usp=drive_link",
          },
        ],
      },
      {
        title: "Laser Constellation",
        content: [
          {
            subtext:
              "Laser Constellations is an exciting team event where creativity and precision collide. In two rounds—Identification and Setup—teams identify constellations from clues and recreate them using lasers and mirrors within an hour. The competition is offline, and judging is based on accuracy, creativity, and time management.",
            heading: "Laser Constellation",
            link: "https://drive.google.com/file/d/1VvRa4fnu1c3AJNp0Q5M0upss2R6vGiR1/view?usp=drive_link",
          },
        ],
      },
      {
        title: "Touchdown Triumph",
        content: [
          {
            subtext:
              "The competition challenges teams to design and build a lander that encapsulates and protects a specified fragile object, survives impact and landing tests while maintaining stability, and demonstrates precision in touchdown along with creative engineering solutions.",
            heading: "Touchdown Triumph",
            link: "https://drive.google.com/file/d/17ZMGrmVERSOra0BPihrQVNZKuUTDSqo5/view?usp=drive_link",
          },
        ],
      },
    ],
  },
  {
    name: "TPC",
    fullName: "THE PROGRAMMING CLUB",
    description:
      "The Programming Club at IIITDM Jabalpur nurtures coding enthusiasts through competitions, hackathons, and workshops on algorithms, AI, and software development. It prepares students for contests like ACM ICPC and Codeforces while fostering a strong problem-solving culture.",
    events: [
      {
        title: "ECHELON-VALORANT",
        content: [
          {
            heading: "Gaming Tournament",
            subtext:
              "Echelon is a high-stakes Valorant tournament where the sharpest teams battle for supremacy. With online and offline rounds, only the best will make it to the finals. The event offers thrilling competition, cash prizes, and ultimate bragging rights.",
            link: "https://drive.google.com/file/d/18j2xi54siHKpummxhmCBaaYSG7NAQAOq/view?usp=drive_link",
          },
        ],
      },
      {
        title: "CODE ARENA",
        content: [
          {
            heading: "ICPC-Style Contest",
            subtext:
              "The Code Arena is an ICPC-style contest on Codeforces, testing problem-solving, algorithms, and coding efficiency. With fair rankings, exciting prizes, and diverse challenges, it’s a must-attend for coding enthusiasts.",
            link: "https://drive.google.com/file/d/1GRkVaMY74QPxnTlffDNODWwuemVeUaVG/view?usp=drive_link",
          },
        ],
      },
      {
        title: "CSS BATTLEFIELD",
        content: [
          {
            heading: "CSS Competition",
            subtext:
              "CSS Battlefield is a fast-paced competition where participants replicate designs with pixel-perfect precision using pure CSS. Tasks include 3 still images and 2 animated GIFs, testing speed, creativity, and attention to detail.",
            link: "https://drive.google.com/file/d/1KyHRQPbfa8KI5dDKNsItdXAQorGh0j4j/view?usp=drive_link",
          },
        ],
      },
    ],
  },
  {
    name: "AFC",
    fullName: "AERO FABRICATION CLUB",
    description:
      "AeroFabrication Club specializes in the design, fabrication, and testing of UAVs. The club focuses on aerodynamics, propulsion systems, and control mechanisms, providing hands-on experience in building cutting-edge UAVs for various applications. Through workshops, projects, and competitions, members gain valuable skills in aerospace engineering and innovation.",
    events: [
      {
        title: "AERORUSH",
        content: [
          {
            heading: "AERORUSH",
            subtext:
              "The Aero Rush Drone Design Competition challenges students to create innovative multirotor drone designs using CAD tools, emphasizing efficiency, precision, and creativity.",
            link: "https://drive.google.com/file/d/1RfU_HQXR7_YfWVOyhFE_0yuP3i9kKq_Q/view?usp=drive_link",
          },
        ],
      },
      {
        title: "AEROMODELING QUIZ",
        content: [
          {
            heading: "AEROMODELING QUIZ",
            subtext:
              "Aeromodeling Quiz is designed to test participants' knowledge of aerodynamics, aircraft structures, propulsion, and aviation history. Open to all engineering and aviation enthusiasts.",
            link: "https://drive.google.com/file/d/1uyKnEAoyQfObGjHQf2bly3yU5--ZuRTl/view?usp=drive_link",
          },
        ],
      },
      {
        title: "RC GLIDER",
        content: [
          {
            heading: "RC GLIDER",
            subtext:
              "The RC Glider Workshop, challenges participants to design, build, and fly gliders and tests aerodynamics, structural design, and piloting skills, making it an exciting opportunity for aviation enthusiasts to showcase their expertise in flight mechanics.",
            link: "https://docs.google.com/document/d/1B41iUXjbF9r5MVswVyAEh_wrjOODvuuO/edit?usp=drive_link&ouid=106216020587041742880&rtpof=true&sd=true",
          },
        ],
      },
      {
        title: "DRONE WORKSHOP",
        content: [
          {
            heading: "DRONE WORKSHOP",
            subtext:
              "A hands-on workshop covering drone design, assembly, and autonomous flight principles.",
            link: "",
          },
        ],
      },
      {
        title: "DRONE EXHIBITION",
        content: [
          {
            heading: "DRONE EXHIBITION",
            subtext:
              "A showcase of innovative drones, highlighting their design, technology, and real-world applications.",
            link: "https://github.com/",
          },
        ],
      },
      {
        title: "ANSYS WORKSHOP",
        content: [
          {
            heading: "ANSYS WORKSHOP",
            subtext:
              "To provide participants with hands-on experience in ANSYS for engineering simulations, covering structural, thermal, and fluid analysis.",
            link: "https://drive.google.com/file/d/1Uey96q_giCC8xt3QbRr1JtWzxFhjpHxh/view?usp=drive_link",
          },
        ],
      },
    ],
  },
  {
    name: "RACING",
    fullName: "RACING CLUB",
    description:
      "IIITDMJ Racing Club is dedicated to designing and building high-performance vehicles for national competitions. It provides hands-on experience in automotive engineering, aerodynamics, and manufacturing, fostering innovation in motorsports technology",
    events: [
      {
        title: "DRIVELINE",
        content: [
          {
            heading: "DRIVELINE",
            subtext:
              "EV Powertrain Design Challenge is a national competition for engineering students and EV enthusiasts. Teams design a complete EV powertrain, optimizing performance, cost, and efficiency",
            link: "https://drive.google.com/file/d/1KUC-WBHlj_Mi3ZoyjmuLC_MwQ2Tq6rF8/view?usp=drive_link",
          },
        ],
      },
      {
        title: "AUTOTRIVA QUIZ",
        content: [
          {
            heading: "AUTOTRIVIA QUIZ",
            subtext:
              "AutoTrivia is an online quiz competition designed to challenge and expand participants knowledge of the automotive industry.",
            link: "https://drive.google.com/file/d/1bvsXerhULGGXMZNKz8V5LezVtYXuxfxm/view?usp=drive_link",
          },
        ],
      },
      {
        title: "EV WORKSHOP",
        content: [
          {
            heading: "EV WORKSHOP",
            subtext:
              "An EV workshop is a session focused on electric vehicles (EVs) covering topics like their design, components (motors, batteries, charging systems), assembly, and maintenance. It often includes hands-on activities, insights into industry trends, sustainability benefits, and the economic and policy aspects of EVs. These workshops aim to educate participants on EV technology and its role in promoting sustainable mobility",
            link: "https://drive.google.com/file/d/1bq1dHIzXDwKleGvbfsRl5-gEK-ICzoxc/view?usp=drive_link",
          },
        ],
      },
      {
        title: "SEMINAR",
        content: [
          {
            heading: "SEMINAR",
            subtext:
              "The seminar will provide valuable insights into real-world applications of engineering simulation, enhancing technical knowledge and career opportunities for students. Ansys experts will share their expertise, making it a great learning experience for all engineering learners and professionals.",
            link: "",
          },
        ],
      },
    ],
  },
  {
    name: "CAD",
    fullName: "CAD & 3D PRINTING CLUB",
    description:
      "The CAD and 3D Printing Club of IIITDM Jabalpur fosters creativity and innovation through design and prototyping, offering workshops, competitions, and projects for students to explore CAD, 3D modeling, and additive manufacturing.",
    events: [
      {
        title: "3D PrintX",
        content: [
          {
            heading: "3D PRINTX",
            subtext:
              "This workshop is designed to provide participants with a hands-on opportunity to explore the fascinating world of 3D printing, learn essential skills, and unleash their creativity in a collaborative environment. The goal of this workshop is to introduce participants to the fundamentals of 3D printing technology, including design principles, material selection, and machine operation.",
            link: "https://drive.google.com/file/d/1fqkh4h6KftmzjAVmTyUk-ycbfGN0nw0r/view?usp=drive_link",
          },
        ],
      },
      {
        title: "INNOVATION & DESIGN CHALLENGE",
        content: [
          {
            heading: "INNOVATION & DESIGN CHALLENGE",
            subtext:
              "The Innovation & Design Challenge is a premier competition organized as part of Abhikalpan'25, the annual tech fest of IIITDM Jabalpur. Hosted by the CAD & 3D Printing Club, this event aims to ignite creativity and technical expertise by challenging participants to design innovative solutions. The competition will span both online and offline modes, providing teams with a platform to showcase their CAD modeling, design thinking, and practical implementation skills.",
            link: "https://drive.google.com/file/d/1wk4P2GAATLlfFVOIA3MA5CakIwQf7t0L/view?usp=drive_link",
          },
        ],
      },
      {
        title: "CAD BATTLEFIELD",
        content: [
          {
            heading: "CAD BATTLEFIELD",
            subtext:
              " The event tests participants ability to accurately recreate a complex 3D model within a set time limit using a designated CAD software. Judged on accuracy, speed, and drafting quality, this event pushes competitors to optimize workflow, interpret      designs efficiently, and achieve precision under pressure.",
            link: "https://drive.google.com/file/d/1mYnuivqgnvVSDNAbsO8GheL1eimZYJcV/view?usp=drive_link",
          },
        ],
      },
      {
        title: "CAD MANIA",
        content: [
          {
            heading: "CAD MANIA",
            subtext:
              "The CAD Mania event challenges participants to precisely replicate a complex 3D model within a limited time using designated CAD software. Competitors are evaluated based on accuracy, speed, and drafting quality, encouraging them to refine their workflow, interpret designs effectively, and maintain precision under pressure.",
            link: "https://drive.google.com/file/d/1MTscwQpLb9UJfy1IH8HnjRFrCAzEyIo3/view?usp=drive_link",
          },
        ],
      },
    ],
  },
  {
    name: "BMC",
    fullName: "BUSINESS AND MANAGEMENT CLUB",
    description:
      "Business and Management Club cultivates entrepreneurial and managerial skills through case studies, market analysis, and business strategy discussions. It organizes workshops, competitions, and networking events to prepare students for leadership roles in the corporate world.",
    events: [
      {
        title: "TRADING EVENT",
        content: [
          {
            heading: "Virtual Trading",
            subtext:
              "This virtual trading competition is designed to test participants’ financial acumen, strategic thinking, and decision-making skills. Using the Roostoo platform, participants will manage virtual portfolios and aim to maximize their value over three days. This event provides a practical learning experience in financial markets and trading strategies.",
            link: "https://drive.google.com/file/d/1NUz7Z4NmKnyQ1R8DXfs7qDqzW3s5mPTP/view?usp=drive_link",
          },
        ],
      },
      {
        title: "BUSINESS HACKATHON",
        content: [
          {
            heading: "24-Hour Challenge",
            subtext:
              "This 24-hour hackathon challenges participants to solve real-world business problems using innovation, data analysis, and strategy development. Teams will work collaboratively to create solutions and present them to a panel of judges. The event provides an excellent platform to showcase analytical thinking, creativity, and teamwork.",
            link: "https://drive.google.com/file/d/1dC2wAIHlzHQ4QMjudNYwm_ixolhAMn8Q/view?usp=drive_link",
          },
        ],
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
  index: string | null;
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
            <p className="font-hellvitica mb-2 text-[#D9D9D9] mt-2 leading-[24px]">
              {item.subtext}
            </p>
            <br />
            {item.link != "" ? (
              <div
                className="w-[180px] md:w-[200px] ml-auto h-[90px]"
                style={{
                  backgroundImage: `url(${ContainerButton.src})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <a
                  href={item.link}
                  className="font-aporo text-[12px] md:text-[14px] text-center text-white leading-[40px] pl-[30px]"
                >
                  RULE BOOK
                </a>
              
            <div
              className="w-[180px] md:w-[200px] ml-auto h-[90px]"
              style={{
                backgroundImage: `url(${ContainerButton.src})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            >
              <a
                href="https://unstop.com/college-fests/abhikalpan25-indian-institute-of-information-technology-design-and-manufacturing-iiitdm-jabalpur-321930"
                className="font-aporo text-[12px] md:text-[14px] text-center text-white leading-[40px] pl-[30px]"
              >
                Register Now
              </a>
            </div>
            </div>
              
            ) : null}
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
      <div className="flex justify-end  mt-[60px] sm:mt-[320px] leading-[64px] items-center mr-[5vw]">
        <img
          src="/images/About2.png"
          alt=""
          className="w-[18vw] md:w-[8vw] h-[3vh] md:h-[7vh] leading-[24px] md:leading-[24px]"
        />
        <h1 className="ml-[20px] font-aporo text-[28px] md:text-[85.6px] text-white">
          EVENTS
        </h1>
      </div>
      <div className="w-full flex items-center justify-center gap-2  mt-[30px] md:mt-[80px]">
        <a
          href="https://unstop.com/college-fests/abhikalpan25-indian-institute-of-information-technology-design-and-manufacturing-iiitdm-jabalpur-321930"
          className=" self-end w-[38vw] mb-1 flex items-center justify-center "
        >
          <div className="absolute self-end w-[38vw] lg:w-[30vw] mb-0 flex items-center justify-center">
            <Image
              className=" w-[38vw]"
              src={register_now_bg}
              alt="registenow_button"
            />
            <Image
              className=" bottom-[0.5vw] right-[2vw] w-[8vw] absolute hidden"
              src={register_bottom_img}
              alt="register_bottom_img"
            />
            <p className="absolute font-genos text-white text-[2.8vw]">
              Register Now
            </p>
          </div>
        </a>
        <a
          href="https://drive.google.com/drive/folders/1FtyS7cwdEYRaXNvRfiUr1DyUWk1FIwvF"
          className=" self-end w-[38vw] mb-1 flex items-center justify-center "
        >
          <div className=" self-end w-[38vw] lg:w-[30vw] mb-0 flex items-center justify-center">
            <Image
              className=" w-[38vw]"
              src={register_now_bg}
              alt="registenow_button"
            />
            <Image
              className=" bottom-[0.5vw] right-[2vw] w-[8vw] absolute hidden "
              src={register_bottom_img}
              alt="register_bottom_img"
            />
            <p className="absolute font-genos text-white text-[2.8vw]">
              Guidelines
            </p>
          </div>
        </a>
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
                <div className="flex flex-col items-start justify-center text-white bg-opacity-50 mb-10 md:mb-[120px] mt-[20px] ml-[15px]">
                  <p className="text-white font-genos font-normal text-[5vw] sm:text-[6vw] md:text-[48px]">
                    By,
                  </p>
                  <h1 className="text-white font-aporo font-normal text-[7vw] sm:text-[7vw] md:text-[52px] md:w-[580px]">
                    {club.fullName}
                  </h1>
                  <Image
                    src={Strip.src}
                    alt="strip"
                    width={398}
                    height={10}
                    className="mb-[5px] md:mb-[12px] lg:mb-[38px] mt-[6px] md:mt-[12px] w-[240px] md:w-[398px]"
                  />
                  <p className="text-white font-hellvitica font-light text-[12px] lg:text-[20px] w-[290px] md:w-[500px]">
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
                <Accordion
                  type="single"
                  collapsible
                  className="w-[290px] md:w-[480px]"
                >
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
                <Accordion
                  type="single"
                  collapsible
                  className="w-[290px] md:w-[480px]"
                >
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
                className="mt-[100px] w-full md:w-[555px] lg:w-[689px] h-[450px] md:h-auto
		   bg-[url('/images/EventsCardContainer.png')] lg:bg-[url('/images/EventsCardContainer2.png')] 
		   bg-contain bg-no-repeat max-w-[740px] max-h-[750px]"
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
                    className="mb-[5px] md:mb-[12px] lg:mb-[25px] mt-[6px] md:mt-[12px] w-[240px] md:w-[398px]"
                  />
                  <p className="text-white font-hellvitica font-light text-[12px] lg:text-[20px] w-[290px] md:w-[530px]">
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
