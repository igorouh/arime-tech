"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  {
    image: "/images/hero1.jpg",
    title: "DES SOLUTIONS DURABLES",
    subtitle: "POUR VOS INSTALLATIONS ET ÉQUIPEMENTS",
    text: "Électricité industrielle • Rebobinage • Maintenance • Transformateurs • Groupes électrogènes • Froid & Climatisation",
  },
  {
    image: "/images/hero2.jpg",
    title: "ÉLECTRICITÉ INDUSTRIELLE",
    subtitle: "REBOBINAGE • MAINTENANCE",
    text: "Des interventions rapides et des solutions adaptées à vos équipements industriels.",
  },
  {
    image: "/images/hero3.jpg",
    title: "TRANSFORMATEURS & GROUPES ÉLECTROGÈNES",
    subtitle: "FIABILITÉ • PERFORMANCE",
    text: "Maintenance, réparation, diagnostic et remise en service de vos installations.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[65vh] overflow-hidden">

      {slides.map((slide, index) => (

        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
        >

          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={index === 0}
            className="object-cover scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#003E7E]/90 via-[#003E7E]/70 to-transparent"></div>

          <div className="relative h-full max-w-7xl mx-auto px-8 flex items-center">

            <div className="max-w-2xl">

              <span className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                ARIME TECH
              </span>

              <h1 className="text-5xl lg:text-6xl font-black italic text-white leading-tight">
                {slide.title}
              </h1>

              <h2 className="mt-4 text-2xl italic font-bold text-red-400">
                {slide.subtitle}
              </h2>

              <p className="mt-8 text-lg italic text-gray-200 leading-8">
                {slide.text}
              </p>

              <div className="mt-10 flex gap-5">

                <button className="bg-red-600 hover:bg-red-700 transition text-white px-8 py-4 rounded-lg font-semibold">
                  Nos Services
                </button>

                <button className="border-2 border-white text-white hover:bg-white hover:text-[#003E7E] transition px-8 py-4 rounded-lg font-semibold">
                  Demander un devis
                </button>

              </div>

            </div>

          </div>

        </div>

      ))}

      {/* Indicateurs */}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">

        {slides.map((_, index) => (

          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all rounded-full ${
              current === index
                ? "bg-red-600 w-10 h-3"
                : "bg-white w-3 h-3"
            }`}
          />

        ))}

      </div>

    </section>
  );
}