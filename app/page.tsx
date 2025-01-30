import Contact from "./(Custom Components)/Contactus";
import Navbar from "./(Custom Components)/Navbar";
import Footer from "./(Custom Components)/Footer";
import ToBeLaunched from "./(Custom Components)/ToBeLaunched";
import GalleryPage from "./(Custom Components)/Gallery";
import VideoComponent from "./(Custom Components)/Video";
import Sponsors from "./(Custom Components)/Sponsors"

export default function Home() {
  return (
    <div className="">
      <Navbar className="sticky top-0 z-50" />
      <div>
        <Sponsors/>
        
        <ToBeLaunched />
        <GalleryPage />
        <Contact />
        <Footer />
        
      </div>
    </div>
  );
}
