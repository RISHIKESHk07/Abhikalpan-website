import ContactUs from "../(Custom Components)/ContactusCard";
import Footer from "../(Custom Components)/Footer";
import Navbar from "../(Custom Components)/Navbar";
import sankalp from "@/public/images/SankalpUpdated.jpeg"
import chetan from "@/public/images/chetan.jpeg";
import yashpal from "@/public/images/yashpal.jpg"

export const metadata = {
    title: "Contacts at Abhikalpan'25 - IIITDM Jabalpur TechFest",
    description: "Learn more about Abhikalpan'25, the techfest of IIITDM Jabalpur through are contacts below...",
    alternates: {
      canonical: "https://www.abhikalpan.live/contac",
    },
    robots: { index: true, follow: true },
  };

const page = () => {
    return (
        <section className="min-h-screen bg-[#074144]">
            <Navbar/>
            <div className="mt-[3vh] sm:mt-[30vh] mb-[32px]">
                <h1 className=" text-[32px] md:text-[86px] text-center font-aporo mb-[4px] text-white">CONTACT US</h1>
                <p className=" text-center text-[10px] md:text-[22px] font-hellvitica text-white">For any queries regarding any section mentioned feel free to contact.</p>
            </div>
            <div className="flex flex-wrap justify-around items-center mx-auto mb-[48px]">
            <ContactUs name={"Chetan Anand Jhariya"} phone={"+91 70009 47461"} email={"22bme021@iiitdmj.ac.in"} src={chetan} />
            <ContactUs name={"Sankalp"} phone={"+91 84096 46129"} email={"22bme05@iiitdmj.ac.in"} src={sankalp} />
            <ContactUs name={"Dr. Yashpal Singh Katharria"} phone={"+91 81075 91910"} email={"yashpalk@iiitdmj.ac.in"} src={yashpal} />
            </div>
            <Footer/>
        </section>
    )
}

export default page;