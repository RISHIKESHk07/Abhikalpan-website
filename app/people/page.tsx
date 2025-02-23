import Footer from "../(Custom Components)/Footer";
import Navbar from "../(Custom Components)/Navbar";
import Container from "@/public/images/PeopleContainerTitle.png";
import PeopleCard from "../(Custom Components)/PeopleCard";
import { StaticImageData } from "next/image";

export const metadata = {
  title: "People at Abhikalpan'25 - IIITDM Jabalpur TechFest",
  description: "Look up the related event coordinators and crore commitee here ",
  alternates: {
    canonical: "https://www.abhikalpan.live/people",
  },
  robots: { index: true, follow: true },
};

const images = {
  Organizer7: "/images/SankalpUpdated.jpeg",
  Chetan: "/images/chetan.jpeg",
  Organizer2: "/images/AnuragUpdated.jpeg",
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
  Organizer31: "/images/Organizer31.jpg",
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
  B2: "/images/NITIN PANDEY(Coordinator) Trading.jpg",
  Organizer20:"/images/Organizer20.jpg",
  Organizer21:"/images/Organizer21.jpeg",
  Organizer22:"/images/Organizer22.jpg",
  Organizer23:"/images/RK.jpeg",
  APS1:"/images/Aman Kumar.jpg",
  APS2:"/images/Prakriti Das.jpg",
  APS3:"/images/Devansh Singh.jpg",
  APS4:"/images/Harshiv Agarwal.jpg"
};

const coreCommittee = [
  { name: "Sankalp", event: "STUDENT FEST CONVENOR", src: images.Organizer7 , phone: "8409646129" },
  { name: "Chetan", event: "STUDENT FEST CONVENOR", src: images.Chetan , phone: "70009 47461" },
  { name: "Anurag", event: "INFRA & ACCOMDATION LEAD", src: images.Organizer2 , phone: "9135384332"},
  { name: "Gurleen", event: "DESIGN LEAD", src: images.Organizer3, phone: "7304245055" },
  { name: "Falguni", event: "DESIGN LEAD", src: images.Organizer31, phone: "7038154301" },
  { name: "Shivanshu", event: "FINANCE LEAD", src: images.Organizer4 , phone: "7607990976"},
  { name: "Vinayak", event: "HELP DESK & SECURITY", src: images.Organizer5 , phone: "8503807674"},
  { name: "SWASTIK", event: "DESIGN LEAD", src: images.Organizer6, phone: "6002707686" },
  { name: "Hemakshi", event: "EVENTS & WORKSHOP LEAD", src: images.Organizer1 , phone: "9687249347"},
  { name: "Devika", event: "FINANCE LEAD", src: images.Organizer8 , phone: "9876543210"},
  { name: "Reishabh Rathore", event: "EVENTS & WORKSHOP", src: images.Organizer11, phone: "9315137833" },
  { name: "Ayush Vardhan", event: "SPONSOR LEAD", src: images.Organizer12 , phone: "7307034352"},
  { name: "Tushar Sharma", event: "EVENTS & WORKSHOP LEAD", src: images.Organizer13, phone: "7456945732" },
  { name: "Lavanya Bhargava", event: "PR & OUTREACH LEAD", src: images.Organizer14 , phone: "8982661001"},
  { name: "Kritansh Singh", event: "SPONSOR LEAD", src: images.Organizer15 , phone: "8303294919"},
  { name: "RAKSHIT", event: "SPONSOR LEAD", src: images.Organizer16 , phone: "9876543210"},
  { name: "Aniket", event: "INFRA & ACCOMDATION LEAD", src: images.Organizer17, phone: "7996363111" },
  { name: "ALOK", event: "EVENTS & WORKSHOP LEAD", src: images.Organizer18 , phone: "9151348969"},
  { name: "Shashank Pandey", event: "HELP DESK & SECURITY LEAD", src: images.Organizer10 , phone: "9876543210"},
  {name:"Harsh singh " , event:"BRANDING TEAM LEAD", src:images.Organizer20,phone:"6393277329" },
  {name: "Prateek Pandey" , event:"EVENTS & WORKSHOP LEAD" , src:images.Organizer21 , phone:"9892537975"},
  {name: "Akash Viswakarna" ,event:"INFRA & ACCOMDATION LEAD" , src:images.Organizer22 ,phone:"8291473674"},
  {name: "Rishikesh Kuppala" , event:"WEBSITE LEAD" , src:images.Organizer23 ,phone:"0000000000"}
];

const coordinators = [
  { name: "Shounak Patil", event: "Echelon-Valorant Tournament", src: images.CC1 , phone: "9324210017"},
  { name: "Kshitij Patel", event: "The Code Arena", src: images.CC2 , phone: "8827967459"},
  { name: "Safal Tripathi", event: "CSS Battlefield", src: images.CC3 , phone: "9792273310"},
  { name: "Prince Raj", event: "FPV Maze Solver", src: images.ERSC1, phone: "9024340468" },
  { name: "Ratan Jyoti", event: "Speaker session", src: images.ERSC2 , phone: "9935516343"},
  { name: "Indrapal Singh", event: "RoboWars", src: images.ERSC3 , phone: "7000835181"},
  { name: "Saummya Telange", event: "AeroRush", src: images.AFC1 , phone: "9726180458"},
  { name: "Sumit Chouhan", event: "Aeromodeling Quiz", src: images.AFC2 , phone: "7400603978"},
  { name: "Khushi Kanojiya", event: "RC Glider", src: images.AFC3 , phone: "9142562717"},
  { name: "Shashaank Srivastava", event: "Drone Workshop", src: images.AFC4 , phone: "9140340531"},
  { name: "Yash Sheorey", event: "Drone Exhibition", src: images.AFC5 , phone: "9926687674"},
  { name: "Siddharth Pandey", event: "Ansys Workshop", src: images.AFC6 , phone: "9450749400"},
  { name: "Adicherla Vaishiena", event: "Creation challenge & 3D Printing Workshop", src: images.CAD1, phone: " 9581249349" },
  { name: "Aditya Saran", event: "CAD Battlefield", src: images.CAD3, phone: "9430330421" },
  { name: "Lavanya Bhargava", event: "Innovation & Design Challenge", src: images.CAD2 , phone: "8982661001"},
  { name: "Anurag Mishra", event: "CAD Mania", src: images.CAD4 , phone: " 9044950475"},
  { name: "Mehul Agarwal", event: "DriveLine", src: images.RC1, phone: "9511382403" },
  { name: "Aishwarya Jaiswal", event: "AutoTrivia Quiz", src: images.RC2 , phone: "9369945836"},
  { name: "Anish", event: "EV Workshop", src: images.RC3 , phone: "9508720514"},
  { name: "Anmol Kumar", event: "Seminar", src: images.RC4 , phone: "9170493269"},
  { name: "Nitin Pandey", event: "Trading Event", src: images.B2 , phone: "7016208803"},
  {name: " Aman Kumar" , event:"Cosmic Quest" , src:images.APS1 ,phone:"8115067089"},
  {name:" Prakriti Das", event:"Laser Constellation" ,src: images.APS2, phone:"9434845550" },
  {name:"Devansh singh" ,event:"Touchdown Triumph",src:images.APS3 ,phone:"7222940769"},
  {name:" Harshiv Agrawal" ,event:"Eclipse - Case Study",src:images.APS4 ,phone:"8488060744"},
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

const TeamSection = ({ title, members }:{title:string,members:Array< {name:string ,event:string,src:string|StaticImageData ,phone:string}>}) => (
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
      {members.map(({ name, event, src,phone }, index) => (
        <PeopleCard key={index} name={name} event={event} src={src} phone={phone} mail="example@example.com" />
      ))}
    </div>
  </section>
);

export default Page;
