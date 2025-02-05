import Image from 'next/image';
import React from 'react';
import Date from '@/public/images/date_bg.svg';
import KnowMoreImage from '@/public/images/knowmoreimage.svg'

export interface EventType {
  title: string;
  organizer: string;
  image: string;
  time: string;
  date: string;
}

export const eventData: EventType[] = [
  {
    title: "Hackathon",
    organizer: "TPC - The programming club",
    image: Date,
    time: "2 PM",
    date: "5 Feb '25"
  },
  {
    title: "Code Quest",
    organizer: "TPC - The programming club",
    image: Date,
    time: "4 PM",
    date: "5 Feb '25"
  },
  {
    title: "Web Development",
    organizer: "TPC - The programming club",
    image: Date,
    time: "10 AM",
    date: "6 Feb '25"
  },
  {
    title: "AI Workshop",
    organizer: "TPC - The programming club",
    image: Date,
    time: "2 PM",
    date: "6 Feb '25"
  },
  {
    title: "CTF Challenge",
    organizer: "TPC - The programming club",
    image: Date,
    time: "5 PM",
    date: "5 Feb '25"
  },
  {
    title: "IoT Workshop",
    organizer: "TPC - The programming club",
    image: Date,
    time: "11 AM",
    date: "6 Feb '25"
  },
  {
    title: "Machine Learning",
    organizer: "TPC - The programming club",
    image: Date,
    time: "3 PM",
    date: "5 Feb '25"
  },
  {
    title: "Cybersecurity",
    organizer: "TPC - The programming club",
    image: Date,
    time: "1 PM",
    date: "6 Feb '25"
  }
];

const eventData5feb = eventData.filter((event) => event.date === "5 Feb '25");


const Schedule: React.FC = () => {
  return (
    <section className="w-full min-h-screen py-8 relative">
      {/* Header */}
      <div className="text-center md:text-left px-4 md:px-[8rem]">
        <h1 className="text-4xl md:text-6xl font-genos text-white">
          Schedule
        </h1>
      </div>

      {/* Dates */}
      <div className="flex flex-col md:flex-row justify-between md:justify-start gap-4 md:gap-[29rem] px-4 md:px-[8rem] mt-8 mb-4">
        <p className="font-medium text-white font-genos text-3xl md:text-5xl text-center md:text-left">
          5 Feb &apos;25
        </p>
        <p className="font-medium text-white font-genos text-3xl md:text-5xl text-center md:text-left sm:block hidden">
          6 Feb &apos;25
        </p>
      </div>

      {/* Events Grid */}
      <div className='sm:block hidden'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 px-4 md:px-[8rem] ">
          {eventData.map((event, index) => (
            <div
              key={index}
              className="rounded-lg flex flex-row md:flex-row gap-2 md:gap-8 justify-start items-center md:items-start relative  "
            >
              {/* Time and Image */}
              <div className="relative w-[30%] md:w-auto md:left-0 flex justify-center md:self-start cursor-pointer bg-pink-300/300">
                <Image
                  src={event.image}
                  alt={`Event ${index + 1}`}
                  className=""
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center pl-3 pt-2 text-white font-genos">
                  <p className="text-[4.5vw]  leading-[2.5vw]">{event.time.split(" ")[0]}</p>
                  <p className="text-base md:text-lg">PM</p>
                </div>
              </div>

              {/* Event Details */}
              <div className="font-genos flex flex-col items-center md:items-start justify-center">
                <p className="text-2xl md:text-4xl text-white text-center md:text-left">
                  {event.title}
                </p>
                <p className="text-lg md:text-xl text-white text-center md:text-left">
                  {event.organizer}
                </p>
              </div>
            </div>
          ))}
        </div>  
      </div>
      <div className='block sm:hidden'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 px-4 md:px-[8rem] ">
          {eventData5feb.map((event, index) => (
            <div
              key={index}
              className="rounded-lg flex flex-row md:flex-row gap-2 md:gap-8 justify-start items-center md:items-start relative  "
            >
              {/* Time and Image */}
              <div className="relative w-[30%] md:w-auto md:left-0 flex justify-center md:self-start cursor-pointer bg-pink-300/300">
                <Image
                  src={event.image}
                  alt={`Event ${index + 1}`}
                  className=""
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center pl-3 pt-2 text-white font-genos">
                  <p className="text-[4.5vw]  leading-[2.5vw]">{event.time.split(" ")[0]}</p>
                  <p className="text-base md:text-lg">PM</p>
                </div>
              </div>

              {/* Event Details */}
              <div className="font-genos flex flex-col items-center md:items-start justify-center">
                <p className="text-2xl md:text-4xl text-white text-center md:text-left">
                  {event.title}
                </p>
                <p className="text-lg md:text-xl text-white text-center md:text-left">
                  {event.organizer}
                </p>
              </div>
            </div>
          ))}
        </div>  
      </div>

      <div className='md:w-[22vw] w-[33vw]  bg-blue-600/600 flex items-center justify-center absolute right-[10vw] -bottom-14'>
        <Image
        alt='Know More'
        src={KnowMoreImage}
        />
        <p className='absolute md:text-[2vw] text-[4vw] text-[#FFFFFF] font-genos'>Know More</p>
      </div>
    </section>
  );
}
export default Schedule;
