import Footer from "../(Custom Components)/Footer";
import Navbar from "../(Custom Components)/Navbar";
import Container from "@/public/images/PeopleContainerTitle.png";
import PeopleCard from "../(Custom Components)/PeopleCard";
import Organizer from "@/public/images/Organizer.jpeg";
import Organizer1 from "@/public/images/Organizer1.jpg";
import Organizer2 from "@/public/images/Organizer2.jpg";
import Organizer3 from "@/public/images/Organizer3.jpeg";
import Organizer4 from "@/public/images/Organizer4.jpg";
import Organizer5 from "@/public/images/Organizer5.jpg";
import Organizer6 from "@/public/images/Organizer6.jpeg";
import Organizer7 from "@/public/images/Organizer7.jpeg";
import Organizer8 from "@/public/images/Organizer8.jpeg";
import Organizer11 from "@/public/images/Organizers11_Reishabh_Rathore.jpg";
import Organizer10 from "@/public/images/Organizer10.jpg";
import Organizer12 from "@/public/images/Organizer12.png";
import Organizer13 from "@/public/images/Organizer13.jpg";
import Organizer14 from "@/public/images/Organizer14.jpg";
import Organizer15 from "@/public/images/Organizer15.jpg";
import Organizer16 from "@/public/images/Organizer16.jpg";
import Organizer17 from "@/public/images/Organizer17.jpg";
import Organizer18 from "@/public/images/Organizer18.jpg";
import CC1 from "@/public/images/ShounakPatil(Co-Coordinator)ESPORTS.jpg";
import CC2 from "@/public/images/KshitijPatel(CC Code ARENA).jpg";
import CC3 from "@/public/images/Safal Tripathi(CC CSS BATTLE).jpg";
import ERSC1 from "@/public/images/Prince Raj (Coordinator FAZ) .jpg";
import ERSC2 from "@/public/images/Ratan jyoti Coordinator ERS SPEAKER .jpg";
import ERSC3 from "@/public/images/Indrapal Singh Coordinator ROBOWARS.jpg";
import AFC1 from "@/public/images/saummya Aero RUSH C.jpg";
import AFC2 from "@/public/images/Sumit Aermodelling Quiz C.jpg";
import AFC3 from "@/public/images/Khushi RC GLIDER.jpg";
import AFC4 from "@/public/images/Shashank Drone workshop.jpg";
import AFC5 from "@/public/images/YashSheorey Drone Exhibition.jpeg";
import AFC6 from "@/public/images/SIddharth-an Ansys C .jpg";
import RC1 from "@/public/images/DriveLine Mehul Agarwal C .jpg";
import RC2 from "@/public/images/Aiswarya Coordinator Autotrivia.jpeg";
import RC3 from "@/public/images/Anish Coordinator EV WORKSHOP .jpg";
import RC4 from "@/public/images/Anmol Kumar Seminar Coordinator .jpg";
import CAD1 from "@/public/images/Adicherla Vaishiena (Coordinator) Creation innovation.jpg";
import CAD2 from "@/public/images/Lavanya Bhargava Coordinator Inovation.jpg";
import CAD3 from "@/public/images/Aditya Saran CAD Battle coordinator.jpg";
import CAD4 from "@/public/images/Anurag Mishra CAD MANIA.jpg";
// import B1 from "@/public/images/Hemlata_coordinator Business Hackathon.jpg"
import B2 from "@/public/images/NITIN PANDEY(Coordinator) Trading.jpg";
function page() {
  return (
    <section className="min-h-screen bg-[#074144]">
      <Navbar />
      <div className="mt-[3vh] sm:mt-[30vh] mb-[32px]">
        <h1 className=" text-[32px] md:text-[86px] text-center font-aporo mb-[4px] text-white">
          Meet the TEAM
        </h1>
        <p className=" text-center text-[10px] md:text-[22px] font-hellvitica text-white">
          For any queries regarding any section mentioned feel free to contact.
        </p>
      </div>
      <section>
        <section
          className="w-[310px] md:w-[512px] h-[89px] ml-[30px]"
          style={{
            backgroundImage: `url(${Container.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          <p className="font-aporo text-[19px] md:text-[34.95px] text-center leading-[75px] md:leading-[85px] lg:leading-[100px] pr-[100px] text-white">
            CORE COMMITTEE
          </p>
        </section>
        <section className="grid  place-items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[32px] p-[48px] mx-auto scrollbar-hide">
          <PeopleCard
            name="Sankalp"
            event="STUDENT FEST CONVENOR"
            src={Organizer7}
            phone="0000000"
            mail="example@example.com"
          />
          <PeopleCard
            name="Anurag"
            event="INFRA & ACCOMDATION LEAD"
            src={Organizer2}
            phone="0000000"
            mail="example@example.com"
          />
          <PeopleCard
            name="Gurleen"
            event="DESIGN LEAD"
            src={Organizer3}
            phone="0000000"
            mail="example@example.com"
          />
          <PeopleCard
            name="Shivanshu"
            event="FINANCE LEAD "
            src={Organizer4}
            phone="0000000"
            mail="example@example.com"
          />
          <PeopleCard
            name="Vinayak"
            event="HELP DESK & SECURITY"
            src={Organizer5}
            phone="0000000"
            mail="example@example.com"
          />
          <PeopleCard
            name="SWASTIK"
            event="DESIGN LEAD"
            src={Organizer6}
            phone="0000000"
            mail="example@example.com"
          />
          <PeopleCard
            name="Hemakshi"
            event="EVENTS & WORKSHOP LEAD"
            src={Organizer1}
            phone="0000000"
            mail="example@example.com"
          />
          <PeopleCard
            name="Devika"
            event="FINANCE LEAD"
            src={Organizer8}
            phone="0000000"
            mail="example@example.com"
          />
          <PeopleCard
            name="Reishabh Rathore"
            event="EVENTS & WORKSHOP"
            src={Organizer11}
            phone="0000000"
            mail="example@example.com"
          />
          <PeopleCard
            name="Ayush Vardhan"
            event="SPONSOR LEAD"
            src={Organizer12}
            phone="0000000"
            mail="example@example.com"
          />
          <PeopleCard
            name="Tushar Sharma "
            event="EVENTS & WORKSHOP LEAD"
            src={Organizer13}
            phone="0000000"
            mail="example@example.com"
          />
          <PeopleCard
            name="Lavanya Bhargava"
            event="PR & OUTREACH LEAD"
            src={Organizer14}
            phone="7016208803"
            mail="example@example.com"
          />
          <PeopleCard
            name="Kritansh Singh"
            event="SPONSOR LEAD"
            src={Organizer15}
            phone="7016208803"
            mail="example@example.com"
          />
          <PeopleCard
            name="RAKSHIT"
            event="SPOSNOR LEAD"
            src={Organizer16}
            phone="7016208803"
            mail="example@example.com"
          />
          <PeopleCard
            name="Aniket"
            event="INFRA & ACCOMDATION LEAD"
            src={Organizer17}
            phone="7016208803"
            mail="example@example.com"
          />
          <PeopleCard
            name="ALOK"
            event="EVENTS & WORKSHOP LEAD"
            src={Organizer18}
            phone="7016208803"
            mail="example@example.com"
          />
          <PeopleCard
            name="Devika"
            event="FINANCE LEAD"
            src={Organizer}
            phone="0000000"
            mail="example@example.com"
          />
          <PeopleCard
            name="Shashank pandey "
            event="HELP DESK & SECURITY LEAD"
            src={Organizer10}
            phone="0000000"
            mail="example@example.com"
          />
        </section>
      </section>
      <section>
        <section
          className="w-[310px] md:w-[512px] h-[89px] ml-auto mt-[100px]"
          style={{
            backgroundImage: `url(${Container.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          <p className="font-aporo text-[19px] md:text-[34.95px] text-center leading-[75px] md:leading-[85px] lg:leading-[100px] pr-[100px] text-white">
            COORDINATORS
          </p>
        </section>
        <section className="grid place-items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[32px]  p-[48px] mx-auto scrollbar-hide mb-[100px]">
          <PeopleCard
            name="Shounak Patil"
            event="Echelon-Valorant Tournament"
            src={CC1}
            phone="93242 10017"
            mail="example@example.com"
          />
          <PeopleCard
            name=" Kshitij Patel"
            event="The Code Arena"
            src={CC2}
            phone="88279 67459"
            mail="example@example.com"
          />
          <PeopleCard
            name="Safal tripathi"
            event="CSS Battlefield"
            src={CC3}
            phone="9792273310"
            mail="example@example.com"
          />
          <PeopleCard
            name="Prince Raj"
            event="FPV Maze Solver"
            src={ERSC1}
            phone=" 9024340468"
            mail="example@example.com"
          />
          <PeopleCard
            name=" Ratan jyoti"
            event="Speaker session"
            src={ERSC2}
            phone="9935516343"
            mail="example@example.com"
          />
          <PeopleCard
            name="Indrapal Singh"
            event="RoboWars"
            src={ERSC3}
            phone="7000835181"
            mail="example@example.com"
          />
          <PeopleCard
            name=" Saummya Telange"
            event="AeroRush"
            src={AFC1}
            phone="97261 80458"
            mail="example@example.com"
          />
          <PeopleCard
            name=" Sumit Chouhan"
            event="Aeromodeling  Quiz"
            src={AFC2}
            phone="7400603978"
            mail="example@example.com"
          />
          <PeopleCard
            name=" Khushi Kanojiya"
            event="RC Glider"
            src={AFC3}
            phone="91425 62717"
            mail="example@example.com"
          />
          <PeopleCard
            name="  Shashaank Srivastava"
            event="Drone Workshop"
            src={AFC4}
            phone="9140340531"
            mail="example@example.com"
          />
          <PeopleCard
            name=" Yash Sheorey"
            event="Drone Exhibition"
            src={AFC5}
            phone="9926687674"
            mail="example@example.com"
          />
          <PeopleCard
            name=" Siddharth Pandey"
            event="Ansys Workshop"
            src={AFC6}
            phone="9450749400"
            mail="example@example.com"
          />
          <PeopleCard
            name="Adicherla Vaishiena"
            event="Creation challenge & 3D Printing Workshop"
            src={CAD1}
            phone="9581249349"
            mail="example@example.com"
          />
          <PeopleCard
            name=" Aditya Saran"
            event="CAD Battlefield"
            src={CAD3}
            phone="9430330421"
            mail="example@example.com"
          />
          <PeopleCard
            name=" Lavanya Bhargava"
            event="Innovation & Design Challenge"
            src={CAD2}
            phone="8982661001"
            mail="example@example.com"
          />
          <PeopleCard
            name="Anurag Mishra"
            event="CAD Mania"
            src={CAD4}
            phone="9044950475"
            mail="example@example.com"
          />
          <PeopleCard
            name="Mehul Agarwal"
            event="DriveLine"
            src={RC1}
            phone="000000000"
            mail="example@example.com"
          />
          <PeopleCard
            name="Aiswarya"
            event="AutoTriva Quiz"
            src={RC2}
            phone="9369945836"
            mail="example@example.com"
          />
          <PeopleCard
            name="Anish"
            event="Ev workshop "
            src={RC3}
            phone="9324210017"
            mail="example@example.com"
          />
          <PeopleCard
            name="Anmol Kumar"
            event="Seminar"
            src={RC4}
            phone=" 9170493269"
            mail="example@example.com"
          />
          {/* <PeopleCard name="Hemalata" event="Business Hackathon" src={B1}/> */}
          <PeopleCard
            name="Nitin Pandey"
            event="Trading Event"
            src={B2}
            phone="7016208803"
            mail="example@example.com"
          />
        </section>
      </section>
      <Footer />
    </section>
  );
}
export default page;
