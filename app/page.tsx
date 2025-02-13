import Navbar from "./(Custom Components)/Navbar";
import Footer from "./(Custom Components)/Footer";
import Main from "./(Custom Components)/Main";
import Events from "./(Custom Components)/Events";
import Schedule from "./(Custom Components)/Schedule";
import AboutUs from "./(Custom Components)/Aboutus";
import { Metadata } from "next";

export const metadata : Metadata = {
  title: "Abhikalpan: The TechFest of IIITDM Jabalpur",
  description:
    "Abhikalpan'25 celebrates the transformative journey of technology and design, bridging the past, present, and future. From AI and quantum computing to sustainable design and smart cities, innovation is reshaping industries and our world. This year's fest honors visionary thinkers across eras, reflecting on past wisdom and future possibilities to craft a better tomorrow. Join us in celebrating the journey of innovation that shapes the future!",
  metadataBase: new URL("https://www.abhikalpan.live"),
  alternates: {
    canonical: "https://www.abhikalpan.live",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#074144] overflow-hidden relative">
      <Navbar />
      <Main />
      <AboutUs />
      <Schedule />
      {/* <Highlights/> */}
      <Events />
      <Footer />
    </div>
  );
}
