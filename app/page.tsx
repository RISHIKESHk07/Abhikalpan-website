import Navbar from "./(Custom Components)/Navbar";
import Footer from "./(Custom Components)/Footer";
import Main from "./(Custom Components)/Main";
import Events from "./(Custom Components)/Events";
import Highlights from "./(Custom Components)/Highlights";
import Schedule from "./(Custom Components)/Schedule";
import AboutUs from "./(Custom Components)/Aboutus";
import SponsorsPage from "./(Custom Components)/Sponsors";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#074144] overflow-hidden relative">
      <Navbar />
        <Main />
        <AboutUs/>
        <Schedule/>
        <SponsorsPage/>
        <Highlights/>
        <Events/>
        <Footer />
    </div>
  );
}