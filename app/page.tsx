import Contact from "./(Custom Components)/Contactus";
import Navbar from "./(Custom Components)/Navbar";
import Footer from "./(Custom Components)/Footer";
import ToBeLaunched from "./(Custom Components)/ToBeLaunched";
import GalleryPage from "./(Custom Components)/Gallery";
import VideoComponent from "./(Custom Components)/Video";
import Sponsors from "./(Custom Components)/Sponsors"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-600 via-copper to-teal-900">
      <Navbar />
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
