import Image from 'next/image'
import React from 'react'
import Date from '@/public/assets/date.png'

const Schedule: React.FC = () => {
  const events = Array(8).fill({
    title: "Hackathon",
    organizer: "TPC - The programming club",
    image: Date,
  });

  return (
    <div className="px-24 rounded-lg my-12">
      <h1 className="text-[85.33px] font-bold text-white">Schedule</h1>

      <div className="flex justify-start gap-[29rem] pl-[8rem] mt-8 mb-4 text-3xl">
        <p className=" font-medium">5 Feb &apos;25</p>
        <p className="font-medium">6 Feb &apos;25</p>
      </div>

      <div className="grid grid-cols-2 gap-8">
        {events.map((event, index) => (
          <div
            key={index}
            className="rounded-lg flex gap-8 justify-center"
          >
            <Image
              src={event.image}
              alt={`Event ${index + 1}`}
              width={100}
              height={200}
              className=""
            />
            <div className="pt-4">
              <p className="text-xl font-semibold">{event.title}</p>
              <p className="text-gray-600">{event.organizer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
