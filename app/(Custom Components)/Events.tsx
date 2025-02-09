"use client";

import Image from "next/image";
import { CardContent } from "../(Custom Components)/ui/card";

interface EventItem {
  title?: string;
  size: string;
  image?: string;
}

export default function Events() {
  const events: EventItem[] = [
    { title: "ROBORUSH", size: "h-56", image: "/eventphoto/roborush.jpg" },
    { title: "SAE Supra", size: "h-64", image: "/eventphoto/racing.jpg" },
    { title: "HACKBYTE", size: "h-72", image: "/eventphoto/tpc.jpg" },
    { title: "APS Workshop", size: "h-48", image: "/eventphoto/aps.jpg" },
    { title: "WATER ROCKET", size: "h-48", image: "/eventphoto/afc.jpg" },
    { title: "MAD4CAD", size: "h-72", image: "/eventphoto/cad.jpg" },
    { title: "ROBORUSH", size: "h-96", image: "/eventphoto/ers.jpg" },
    { size: "h-24" },
  ];

  return (
    <section className="p-8 mt-10 flex flex-col w-screen justify-center items-center relative">
    
      <div className="font-inter mb-[10vw] md:text-[5.5vw] text-[10vw] bg-blue-500 w-full flex items-center justify-center">
        <h1 className="z-0 blur-sm text-[#01F8FF] absolute top-0">Events</h1>
        <h1 className="absolute top-0 text-white">Events</h1>
      </div>

      <div className="columns-1 md:columns-3 lg:columns-4 gap-6 w-full max-w-full">
        {events.map((event, index) => (
          <div
            key={index}
            className={`relative mb-6 bg-gray-100 bg-opacity-10 shadow-md text-white hover:scale-105 transition-transform duration-300 rounded-lg overflow-hidden ${event.size}
             hover:shadow-xl group`}
          >
            
            {event.image ? (
              <Image
                src={event.image}
                alt={event.title || "Event Image"}
                layout="fill"
                objectFit="cover"
                className="absolute inset-0"
              />
            ) : (
              
              <h1 className="absolute inset-0 flex justify-center items-center text-white text-3xl font-semibold font-genos z-10">
  Know More
</h1>

            )}

            <div className="absolute inset-0 bg-black bg-opacity-10 transition-opacity duration-300 group-hover:bg-opacity-60"></div>

           
            <CardContent className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-2xl font-semibold font-genos z-10">{event.title}</h3>
            </CardContent>
          </div>
        ))}
      </div>
    </section>
  );
}
