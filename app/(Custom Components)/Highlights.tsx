import React from "react";
import { Card, CardTitle, CardContent } from "../(Custom Components)/ui/card";

interface CardItem {
  title: string;
  description: string;
}

export default function Highlights() {
  const cards: CardItem[] = Array(5).fill({
    title: "Workshops",
    description:
      "The festival showcases a wide array of workshops of all domains ranging from ethical hacking to Raspberry Pi. These awe-inspiring workshops provide an excellent environment to the students in order to enhance their technical skills.",
  });

  return (
    <>
      <div className="relative top-0  font-normal text-center w-full text-[10vw] md:text-[6.3vw] mt-[20vw] font-inter pb-10">
        <h1 className="z-50 text-[#01F8FF] blur-sm">Highlights</h1>
        <h1 className="absolute inset-0 text-white z-0">Highlights</h1>
      </div>
      <section className=" p-8  flex flex-col items-center  w-screen overflow-scroll scrollbar-hide pl-[1300px] relative">

        <div className="flex gap-10 bg-pink-500/500">
          {cards.map((card, index) => (
            <Card
              key={index}
              className="bg-gradient-to-t from-amber-200/20 to-transparent shadow-md text-white hover:scale-105 transition-transform "

            >
              <CardContent className="p-2">
                <div className="h-80 w-full bg-gray-300 rounded-md p-8 mb-4"></div>

                <CardTitle className="text-3xl font-normal text-start font-genos">{card.title}</CardTitle>
                <p className="leading-5 font-genos text-lg">{card.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}