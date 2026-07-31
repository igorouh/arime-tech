"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    image: "/images/hero1.jpg",
    title: "DES SOLUTIONS DURABLES",
    subtitle: "POUR VOS INSTALLATIONS ET ÉQUIPEMENTS",
    text: "ARIME TECH accompagne les entreprises dans les domaines de l'électricité industrielle, du rebobinage de moteurs électriques, de la maintenance industrielle, des transformateurs, des groupes électrogènes, du froid & climatisation et de la fourniture de produits et consommables électriques.",
  },
  {
    image: "/images/hero2.jpg",
    title: "UNE EXPERTISE AU SERVICE",
    subtitle: "DE VOTRE PERFORMANCE INDUSTRIELLE",
    text: "Nous mettons notre savoir-faire au service de vos installations afin de garantir leur fiabilité, leur sécurité et leur continuité de fonctionnement.",
  },
  {
    image: "/images/hero3.jpg",
    title: "UN PARTENAIRE DE CONFIANCE",
    subtitle: "POUR TOUS VOS PROJETS INDUSTRIELS",
    text: "Nos équipes interviennent avec professionnalisme pour répondre à vos besoins en maintenance, réparation, installation et assistance technique.",
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
            className="object-cover scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#003E7E]/90 via-[#0056A6]/70 to-transparent"></div>

          <div className="relative max-w-7xl h-full mx-auto px-8 flex items-center">

            <div className="max-w-3xl">

              <h1 className="text-5xl lg:text-6xl font-black italic text-white leading-tight">
                {slide.title}
              </h1>

              <h2 className="mt-4 text-2xl lg:text-3xl italic text-red-400 font-bold">
                {slide.subtitle}
              </h2>

              <p className="mt-8 text-lg italic leading-8 text-gray-100">
                {slide.text}
              </p>

              <div className="flex flex-wrap gap-4 mt-10">

                <a
                  href="#services"
                  className="bg-red-600 hover:bg-red-700 transition px-8 py-4 rounded-lg text-white font-semibold shadow-lg"
                >
                  Découvrir nos services
                </a>

                <Link
                  href="/contact"
                  className="border-2 border-white hover:bg-white hover:text-[#003E7E] transition px-8 py-4 rounded-lg text-white font-semibold"
                >
                  Demander un devis
                </Link>

              </div>

            </div>

          </div>
        </div>
      ))}

      {/* Indicateurs */}

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">

        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all rounded-full ${
              current === index
                ? "bg-red-600 w-10 h-3"
                : "bg-white/70 w-3 h-3"
            }`}
          />
        ))}

      </div>

    </section>
  );
}