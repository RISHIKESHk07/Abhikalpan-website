import Footer from "../(Custom Components)/Footer";
import Navbar from "../(Custom Components)/Navbar";
import Container from "@/public/images/PeopleContainerTitle.png";
import PeopleCard from "../(Custom Components)/PeopleCard";
import { StaticImageData } from "next/image";

const images = {
  Organizer7: "/images/Organizer7.jpeg",
  Organizer2: "/images/Organizer2.jpg",
  Organizer3: "/images/Organizer3.jpeg",
  Organizer4: "/images/Organizer4.jpg",
  Organizer5: "/images/Organizer5.jpg",
  Organizer6: "/images/Organizer6.jpeg",
  Organizer1: "/images/Organizer1.jpg",
  Organizer8: "/images/Organizer8.jpeg",
  Organizer11: "/images/Organizers11_Reishabh_Rathore.jpg",
  Organizer12: "/images/Organizer12.png",
  Organizer13: "/images/Organizer13.jpg",
  Organizer14: "/images/Organizer14.jpg",
  Organizer15: "/images/Organizer15.jpg",
  Organizer16: "/images/Organizer16.jpg",
  Organizer17: "/images/Organizer17.jpg",
  Organizer18: "/images/Organizer18.jpg",
  Organizer10: "/images/Organizer10.jpg",
  CC1: "/images/ShounakPatil(Co-Coordinator)ESPORTS.jpg",
  CC2: "/images/KshitijPatel(CC Code ARENA).jpg",
  CC3: "/images/Safal Tripathi(CC CSS BATTLE).jpg",
  ERSC1: "/images/Prince Raj (Coordinator FAZ) .jpg",
  ERSC2: "/images/Ratan jyoti Coordinator ERS SPEAKER .jpg",
  ERSC3: "/images/Indrapal Singh Coordinator ROBOWARS.jpg",
  AFC1: "/images/saummya Aero RUSH C.jpg",
  AFC2: "/images/Sumit Aermodelling Quiz C.jpg",
  AFC3: "/images/Khushi RC GLIDER.jpg",
  AFC4: "/images/Shashank Drone workshop.jpg",
  AFC5: "/images/YashSheorey Drone Exhibition.jpeg",
  AFC6: "/images/SIddharth-an Ansys C .jpg",
  CAD1: "/images/Adicherla Vaishiena (Coordinator) Creation innovation.jpg",
  CAD3: "/images/Aditya Saran CAD Battle coordinator.jpg",
  CAD2: "/images/Lavanya Bhargava Coordinator Inovation.jpg",
  CAD4: "/images/Anurag Mishra CAD MANIA.jpg",
  RC1: "/images/DriveLine Mehul Agarwal C .jpg",
  RC2: "/images/Aiswarya Coordinator Autotrivia.jpeg",
  RC3: "/images/Anish Coordinator EV WORKSHOP .jpg",
  RC4: "/images/Anmol Kumar Seminar Coordinator .jpg",
  B2: "/images/NITIN PANDEY(Coordinator) Trading.jpg"
};

const coreCommittee = [
  { name: "Sankalp", event: "STUDENT FEST CONVENOR", src: images.Organizer7 },
  { name: "Anurag", event: "INFRA & ACCOMDATION LEAD", src: images.Organizer2 },
  { name: "Gurleen", event: "DESIGN LEAD", src: images.Organizer3 },
  { name: "Shivanshu", event: "FINANCE LEAD", src: images.Organizer4 },
  { name: "Vinayak", event: "HELP DESK & SECURITY", src: images.Organizer5 },
  { name: "SWASTIK", event: "DESIGN LEAD", src: images.Organizer6 },
  { name: "Hemakshi", event: "EVENTS & WORKSHOP LEAD", src: images.Organizer1 },
  { name: "Devika", event: "FINANCE LEAD", src: images.Organizer8 },
  { name: "Reishabh Rathore", event: "EVENTS & WORKSHOP", src: images.Organizer11 },
  { name: "Ayush Vardhan", event: "SPONSOR LEAD", src: images.Organizer12 },
  { name: "Tushar Sharma", event: "EVENTS & WORKSHOP LEAD", src: images.Organizer13 },
  { name: "Lavanya Bhargava", event: "PR & OUTREACH LEAD", src: images.Organizer14 },
  { name: "Kritansh Singh", event: "SPONSOR LEAD", src: images.Organizer15 },
  { name: "RAKSHIT", event: "SPONSOR LEAD", src: images.Organizer16 },
  { name: "Aniket", event: "INFRA & ACCOMDATION LEAD", src: images.Organizer17 },
  { name: "ALOK", event: "EVENTS & WORKSHOP LEAD", src: images.Organizer18 },
  { name: "Shashank Pandey", event: "HELP DESK & SECURITY LEAD", src: images.Organizer10 }
];

const coordinators = [
  { name: "Shounak Patil", event: "Echelon-Valorant Tournament", src: images.CC1 },
  { name: "Kshitij Patel", event: "The Code Arena", src: images.CC2 },
  { name: "Safal Tripathi", event: "CSS Battlefield", src: images.CC3 },
  { name: "Prince Raj", event: "FPV Maze Solver", src: images.ERSC1 },
  { name: "Ratan Jyoti", event: "Speaker session", src: images.ERSC2 },
  { name: "Indrapal Singh", event: "RoboWars", src: images.ERSC3 },
  { name: "Saummya Telange", event: "AeroRush", src: images.AFC1 },
  { name: "Sumit Chouhan", event: "Aeromodeling Quiz", src: images.AFC2 },
  { name: "Khushi Kanojiya", event: "RC Glider", src: images.AFC3 },
  { name: "Shashaank Srivastava", event: "Drone Workshop", src: images.AFC4 },
  { name: "Yash Sheorey", event: "Drone Exhibition", src: images.AFC5 },
  { name: "Siddharth Pandey", event: "Ansys Workshop", src: images.AFC6 },
  { name: "Adicherla Vaishiena", event: "Creation challenge & 3D Printing Workshop", src: images.CAD1 },
  { name: "Aditya Saran", event: "CAD Battlefield", src: images.CAD3 },
  { name: "Lavanya Bhargava", event: "Innovation & Design Challenge", src: images.CAD2 },
  { name: "Anurag Mishra", event: "CAD Mania", src: images.CAD4 },
  { name: "Mehul Agarwal", event: "DriveLine", src: images.RC1 },
  { name: "Aiswarya", event: "AutoTrivia Quiz", src: images.RC2 },
  { name: "Anish", event: "EV Workshop", src: images.RC3 },
  { name: "Anmol Kumar", event: "Seminar", src: images.RC4 },
  { name: "Nitin Pandey", event: "Trading Event", src: images.B2 }
];

function Page() {
  return (
    <section className="min-h-screen bg-[#074144]">
      <Navbar />
      <div className="mt-[3vh] sm:mt-[30vh] mb-[32px]">
        <h1 className="text-[32px] md:text-[86px] text-center font-aporo mb-[4px] text-white">Meet the TEAM</h1>
        <p className="text-center text-[10px] md:text-[22px] font-hellvitica text-white">
          For any queries regarding any section mentioned feel free to contact.
        </p>
      </div>

      <TeamSection title="CORE COMMITTEE" members={coreCommittee} />
      <TeamSection title="COORDINATORS" members={coordinators} />
      <Footer />
    </section>
  );
}

const TeamSection = ({ title, members }:{title:string,members:Array< {name:string ,event:string,src:string|StaticImageData}>}) => (
  <section>
    <div
      className="w-[310px] md:w-[512px] h-[89px] ml-auto mt-[100px]"
      style={{ backgroundImage: `url(${Container.src})`, backgroundSize: "contain", backgroundRepeat: "no-repeat" }}
    >
      <p className="font-aporo text-[19px] md:text-[34.95px] text-center leading-[75px] md:leading-[85px] lg:leading-[100px] pr-[100px] text-white">
        {title}
      </p>
    </div>
    <div className="grid place-items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[32px] p-[48px] mx-auto scrollbar-hide mb-[100px]">
      {members.map(({ name, event, src }, index) => (
        <PeopleCard key={index} name={name} event={event} src={src} phone="0000000" mail="example@example.com" />
      ))}
    </div>
  </section>
);

export default Page;
