import Image from 'next/image';
import Link from "next/link";
import React from 'react';
import Date from '@/public/images/date_bg.svg';
import KnowMoreImage from '@/public/images/knowmoreimage.svg'
import gears from '@/public/images/circle_dark.png'
export interface EventType {
  title: string;
  organizer: string;
  image: string;
  time: string;
  date: string;
}

export const eventData: EventType[] = [
  {
    title: "3D Printing Workshop",
    organizer: "CAD & 3D PRINTING CLUB",
    image: Date,
    time: "2 PM",
    date: "11 April '25"
  },
  {
    title: "CryptoTrading Hackathon",
    organizer: "BUSINESS AND MANAGEMENT CLUB",
    image: Date,
    time: "2 PM",
    date: "11 April '25"
  },
  {
    title: "Velocity Vista",
    organizer: "RACING CLUB",
    image: Date,
    time: "4 PM",
    date: "11 April '25"
  },
  {
    title: "CSS BattleField",
    organizer: "TPC - The programming club",
    image: Date,
    time: "9 AM",
    date: "12 April '25"
  },
  {
    title: "E-Sports",
    organizer: "TPC - The programming club",
    image: Date,
    time: "2 PM",
    date: "12 April '25"
  },
  {
    title: "CAD BattleField",
    organizer: "CAD & 3D PRINTING CLUB",
    image: Date,
    time: "2 PM",
    date: "12 April '25"
  },
  {
    title: "Machine Learning",
    organizer: "TPC - The programming club",
    image: Date,
    time: "3 PM",
    date: "15 April '25"
  },
  {
    title: "RC Glider Competition",
    organizer: "AERO FABRICATION CLUB",
    image: Date,
    time: "11 AM",
    date: "12 April '25"
  },
  {
    title: "Robowars competition",
    organizer: "ELECTRONICS AND ROBOTICS SOCIETY",
    image: Date,
    time: "11 AM",
    date: "13 April '25"
  },
  {
    title: "Innovation Design",
    organizer: "CAD & 3D PRINTING CLUB",
    image: Date,
    time: "9 AM",
    date: "13 April '25"
  },
  {
    title: "The Code Arena",
    organizer: "TPC - The programming club",
    image: Date,
    time: "10 AM",
    date: "13 April '25"
  },
  {
    title: "EV Workshop",
    organizer: "RACING CLUB",
    image: Date,
    time: "2 PM",
    date: "13 April '25"
  }
];

const eventData1march = eventData.filter((event) => event.date === "11 April '25");
const eventData2march = eventData.filter((event) => event.date === "12 April '25");
const eventData3march = eventData.filter((event) => event.date === "13 April '25");


const Schedule: React.FC = () => {
  return (
    <section className="w-full py-8 relative bg-pink-500/500">
      <div className="text-center pb-[8vw] bg-blue-300/300 flex justify-center font-inter  md:text-[6vw] text-[9vw] md:h-[10vw] h-[18vw]">
        <h1 className='absolute text-white z-40'>Schedule</h1>
        <h1 className='absolute text-[#01F8FF] blur-sm z-0'>Schedule</h1>
      </div>
      <div className='w-full bg-green-500/500 sm:hidden flex-col h-[90vw] py-5 flex justify-between'>
        <div className='font-genos text-center text-white text-[8vw]'>
          11 April &apos;25
        </div>
        {
          eventData1march.map((event, index) => (
            <div
              key={index}
              className="bg-yellow-200/200 w-full h-auto flex flex-row "
            >
              <div className='w-[20%] bg-lime-700/700 h-full flex items-center justify-center'>
                <Image
                  src={event.image}
                  alt={`Event ${index + 1}`}
                  className=""
                />
                <div className='h-[20vw] w-[20vw] bg-orange-400/400 absolute rounded-full flex items-center justify-center flex-col ml-3'>
                  <p className='text-white font-genos text-[9vw] leading-[3vw] mt-[1vw]'>{event.time.split(" ")[0]}</p>
                  <p className='text-white font-genos text-[3.5vw]'>{event.time.split(" ")[1]}</p>
                </div>
              </div>
              <div className='w-[75%] h-full text-white font-genos pl-[6vw] flex flex-col justify-center'>
                <p className='text-[5vw]'>{event.title}</p>
                <p className='text-[3vw]'>{event.organizer}</p>
              </div>
            </div>
          ))
        }
      </div>
      <div className='w-full bg-green-500/500 h-full hidden sm:flex-row sm:flex'>
        <div className='w-1/3 bg-blue-500/500 h-full flex flex-col gap-[2vw] py-14'>
          <div className='font-genos text-center text-white text-[4vw]'>
            11 April &apos;25
          </div>
          {
            eventData1march.map((event, index) => (
              <div
                key={index}
                className="bg-yellow-200/200  w-full h-[8vw] flex flex-row"
              >
                <div className='w-[25%] bg-lime-700/700 h-full flex items-center justify-center'>
                  <Image
                    src={event.image}
                    alt={`Event ${index + 1}`}
                    className=""
                  />
                  <div className='h-[7vw] w-[7vw] bg-orange-400/400 absolute rounded-full flex items-center justify-center flex-col ml-3'>
                    <p className='text-white font-genos text-[3vw] leading-[1vw] mt-[1vw]'>{event.time.split(" ")[0]}</p>
                    <p className='text-white font-genos text-[1.5vw]'>{event.time.split(" ")[1]}</p>
                  </div>
                </div>
                <div className='w-[75%] h-full text-white font-genos pl-[1vw]'>
                  <p className='text-[2.2vw] leading-[3vw]'>{event.title}</p>
                  <p className='text-[1.6vw] leading-[1.5vw]'>{event.organizer}</p>
                </div>

              </div>
            ))
          }
        </div>
        <div className='w-1/3 bg-amber-500/500 h-full flex flex-col gap-[2vw] py-14'>
          <div className='font-genos text-center text-white text-[4vw]'>
            12 April &apos;25
          </div>
          {
            eventData2march.map((event, index) => (
              <div
                key={index}
                className="bg-red-200/200 w-full h-[8vw] flex flex-row"
              >
                <div className='w-[25%] bg-lime-700/700 h-full flex items-center justify-center'>
                  <Image
                    src={event.image}
                    alt={`Event ${index + 1}`}
                    className=""
                  />
                  <div className='h-[7vw] w-[7vw] bg-orange-400/400 absolute rounded-full flex items-center justify-center flex-col ml-3'>
                    <p className='text-white font-genos text-[3vw] leading-[1vw] mt-[1vw]'>{event.time.split(" ")[0]}</p>
                    <p className='text-white font-genos text-[1.5vw]'>{event.time.split(" ")[1]}</p>
                  </div>
                </div>
                <div className='w-[75%] h-full text-white font-genos pl-[1vw]'>
                  <p className='text-[2.2vw] leading-[3vw]'>{event.title}</p>
                  <p className='text-[1.6vw] leading-[1.5vw]'>{event.organizer}</p>
                </div>
              </div>
            ))
          }
        </div>
        <div className='w-1/3 bg-blue-500/500 h-full flex flex-col gap-[2vw] py-14'>
          <div className='font-genos text-center text-white text-[4vw]'>
            13 April &apos;25
          </div>
          {
            eventData3march.map((event, index) => (
              <div
                key={index}
                className="bg-yellow-200/200 w-full h-[8vw] flex flex-row relative"
              >
                <div className='w-[25%] bg-lime-700/700 h-full flex items-center justify-center'>
                  <Image
                    src={event.image}
                    alt={`Event ${index + 1}`}
                    className=""
                  />
                  <div className='h-[7vw] w-[7vw] bg-orange-400/400 absolute rounded-full flex items-center justify-center flex-col ml-2'>
                    <p className='text-white font-genos text-[3vw] leading-[1vw] mt-[1vw]'>{event.time.split(" ")[0]}</p>
                    <p className='text-white font-genos text-[1.5vw]'>{event.time.split(" ")[1]}</p>
                  </div>
                </div>
                <div className='w-[75%] h-full text-white font-genos pl-[1vw]'>
                  <p className='text-[2.2vw] leading-[3vw]'>{event.title}</p>
                  <p className='text-[1.6vw] leading-[1.5vw]'>{event.organizer}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <Image
        alt='gears'
        src={gears}
        className='md:w-[65vw] w-[80vw] -bottom-[20vw] absolute -right-[12vw] opacity-15'
      />
      <Link href="/events" className="absolute right-[10vw] -bottom-[2vw]">
  <div className="md:w-[22vw] w-[33vw] bg-blue-600/600 flex items-center justify-center">
    <Image alt="Know More" src={KnowMoreImage} className="w-full" />
    <p className="absolute md:text-[2vw] text-[4vw] text-[#FFFFFF] font-genos">
      Know More
    </p>
  </div>
</Link>
    </section>
  );
}
export default Schedule;
