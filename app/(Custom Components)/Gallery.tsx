
import Image from "next/image";
import { FC } from "react";

const GalleryPage: FC = () => {
  const galleryImages = [
    { src: "/gallery/Aerothon.jpg", alt: "Event photo 1" },
    { src: "/gallery/AFC.jpg", alt: "Event photo 2" },
    { src: "/gallery/APS.jpg", alt: "Event photo 3" },
    { src: "/gallery/CAD.jpg", alt: "Event photo 4" },
    { src: "/gallery/CAD2.jpg", alt: "Event photo 5" },
    { src: "/gallery/OldAbhikalpan.jpeg", alt: "Event photo 6" },
  ];

  return (
    <div className=" text-white min-h-screen py-12 px-4">

      <div className="text-center mb-12">
        <h1 className="text-6xl font-bold font-aporo tracking-wide">GALLERY</h1>
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md">
            <Image
              src={image.src}
              alt={image.alt}
              width={400}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      <div className="mt-12 text-center font-hellvitica text-lg">
        <p>
          ABHIKALPAN is the annual technical fest of IIITDM Jabalpur, an institute
          which boasts of technical superiority and innovation in what it builds.
        </p>
        <p>
          It’s central India’s biggest technical extravaganza for creating, nurturing,
          and fueling one’s interest in various domains of computer science, robotics,
          electronics, gaming, and design.
        </p>
      </div>
    </div>
  );
};

export default GalleryPage;