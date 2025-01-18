import React from "react";
import { Card, CardContent } from "../(Custom Components)/ui/card";

interface EventItem {
  title: string;
  size: string;

}

export default function Events() {
  const events: EventItem[] = [
    { title: "Event 1", size: "h-56",},
    { title: "Event 2", size: "h-64",},
    { title: "Event 3", size: "h-72",},
    { title: "Event 4", size: "h-48",},
    { title: "Event 5", size: "h-48",},
    { title: "Event 6", size: "h-72",},
    { title: "Event 7", size: "h-80",},
    { title: "Event 8", size: "h-40",},
    { title: "Event 9", size: "h-96",},
    { title: "Know More", size: "auto",},
  ];

  return (
    <section className="bg-gradient-to-b from-gray-800 to-teal-700 p-8 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold text-white mb-10">Events</h1>

    
      <div className="columns-2 sm:columns-3 lg:columns-5 gap-6 w-full max-w-7xl">
        {events.map((event, index) => (
          <div
            key={index}
            className={`mb-6 bg-gray-100 bg-opacity-10 shadow-md text-white hover:scale-105 transition-transform rounded-lg overflow-hidden ${event.size}`}
          >
           
           
            <CardContent className="flex flex-col justify-center items-center h-1/3 p-4">
              <h3 className="text-lg font-semibold">{event.title}</h3>
            </CardContent>
          </div>
        ))}
      </div>
    </section>
  );
}
