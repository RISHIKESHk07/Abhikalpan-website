// import AboutUs from "./(Custom Components)/Aboutus";
// import Contact from "./(Custom Components)/Contactus";
import Navbar from "./(Custom Components)/Navbar";
// import Schedule from "./(Custom Components)/Schedule";
import Highlights from "./(Custom Components)/Highlights";
import Events from "./(Custom Components)/Events";
import Footer from "./(Custom Components)/Footer";

export default function Home() {
  return (
    <div className="p-2 m-1">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      {/* <AboutUs /> */}
      {/* <Schedule /> */}
      <Highlights />
      <Events />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}
