import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../(Custom Components)/ui/card";

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
    <section className="bg-gradient-to-b from-gray-800 to-teal-600 p-8 min-h-screen flex flex-col items-center">
    
      <h1 className="text-4xl font-bold text-white mb-10">Highlights</h1>
     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 w-full max-w-7xl">
        {cards.map((card, index) => (
          <Card
            key={index}
            className="bg-gray-100 bg-opacity-10 shadow-md text-white hover:scale-105 transition-transform"
          >
            <CardContent className="p-6"> 
              <div className="h-48 w-full bg-gray-300 rounded-md p-8 mb-4"></div>

              <CardTitle className="text-lg text-center">{card.title}</CardTitle> 
              <p className="text-sm">{card.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
