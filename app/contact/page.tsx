import ContactUs from "../(Custom Components)/ContactusCard";
import Footer from "../(Custom Components)/Footer";
import Navbar from "../(Custom Components)/Navbar";
import sankalp from "@/public/images/SankalpUpdated.jpeg";
import chetan from "@/public/images/chetan.jpeg";
import AV from "@/public/images/AVSir.png";
import RP from "@/public/images/RPSir.jpeg";
import AP from "@/public/images/APSir.jpeg";
export const metadata = {
  title: "Contacts at Abhikalpan'25 - IIITDM Jabalpur TechFest",
  description:
    "Learn more about Abhikalpan'25, the techfest of IIITDM Jabalpur through are contacts below...",
  alternates: {
    canonical: "https://www.abhikalpan.live/contact",
  },
  robots: { index: true, follow: true },
};

const page = () => {
  return (
    <section className="min-h-screen bg-[#074144]">
      <Navbar />
      <div className="mt-[3vh] sm:mt-[30vh] mb-[32px]">
        <h1 className=" text-[32px] md:text-[86px] text-center font-aporo mb-[4px] text-white">
          CONTACT US
        </h1>
        <p className=" text-center text-[10px] md:text-[22px] font-hellvitica text-white">
          For any queries regarding any section mentioned feel free to contact.
        </p>
      </div>

      <h1 className=" text-[24px] md:text-[56px] text-center font-aporo mb-[50px] text-white mt-[50px]">
        FACULTY
      </h1>

      <div className="flex flex-wrap justify-center gap-6 items-center mx-auto mb-[48px]">
        <ContactUs
          name={"Dr. Amit Vishwakarma"}
          phone={"+91 84864 91176"}
          email={"amitv@iiitdmj.ac.in"}
          src={AV}
          title="Faculty Fest Convenor"
        />
        <ContactUs
          name={"Dr. Akshay Pandey"}
          phone={"+91 90745 25228"}
          email={"drakshay@iiitdmj.ac.in"}
          src={AP}
          title="Faculty Fest Co-Convenor"
        />
        <ContactUs
          name={"Dr. Rabindra Prasad"}
          phone={"+91 74070 51146"}
          email={"rabindrap@iiitdmj.ac.in"}
          src={RP}
          title="Faculty Fest Co-Convenor"
        />
      </div>


      <h1 className=" text-[24px] md:text-[56px] text-center font-aporo text-white mt-[120px] mb-[50px]">
        STUDENT
      </h1>
      <div className="flex flex-wrap justify-center gap-6 items-center mx-auto mb-[48px]">
        <ContactUs
          name={"Chetan Anand Jhariya"}
          phone={"+91 70009 47461"}
          email={"22bme021@iiitdmj.ac.in"}
          src={chetan}
          title="Student Co-Coordinator"
        />
        <ContactUs
          name={"Sankalp"}
          phone={"+91 84096 46129"}
          email={"22bme05@iiitdmj.ac.in"}
          src={sankalp}
          title="Student Coordinator"
        />
      </div>

      <Footer />
    </section>
  );
};

export default page;
