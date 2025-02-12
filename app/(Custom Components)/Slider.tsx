"use client"

import { useState, useEffect } from "react";
import circle from "@/public/images/circle.svg";
const images = [
  "/images/abhi1.jpg",
  "/images/Media2.png",
  "/images/Media1.png",
  "/images/slideshow1.jpeg",
  "/images/pic13.jpeg",
  "/images/pic11.jpeg",
  "/images/slideshow2.jpg"
];

export default function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="absolute right-0 w-[35vw] h-[35vw]  bg-center bg-no-repeat bg-contain flex items-center justify-center"
      style={{ backgroundImage: `url(${circle.src})` }}
    >
      <div className="relative w-[20vw] h-[20vw] overflow-hidden rounded-full border-4 border-white shadow-lg">
        <img
          src={images[currentIndex]}
          alt="Slideshow"
          className="w-full h-full object-cover transition-opacity duration-1000"
        />
      </div>
    </div>
  );
}