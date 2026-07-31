"use client";

import Image from "next/image";
import Link from "next/link";

import {
  FaBolt,
  FaTools,
  FaSnowflake,
  FaBoxes,
} from "react-icons/fa";

import {
  GiElectric,
  GiPowerGenerator,
} from "react-icons/gi";

import { TbTransform } from "react-icons/tb";

const services = [
  {
    title: "Électricité industrielle",
    image: "/images/services/electricite.jpg",
    icon: <FaBolt size={28} />,
  },
  {
    title: "Rebobinage de moteurs",
    image: "/images/services/rebobinage.jpg",
    icon: <GiElectric size={28} />,
    featured: true,
  },
  {
    title: "Maintenance industrielle",
    image: "/images/services/maintenance.jpg",
    icon: <FaTools size={28} />,
  },
  {
    title: "Transformateurs",
    image: "/images/services/transformateur.jpg",
    icon: <TbTransform size={28} />,
  },
  {
    title: "Groupes électrogènes",
    image: "/images/services/groupe.jpg",
    icon: <GiPowerGenerator size={28} />,
  },
  {
    title: "Froid & Climatisation",
    image: "/images/services/climatisation.jpg",
    icon: <FaSnowflake size={28} />,
  },
  {
    title: "Produits & Consommables",
    image: "/images/services/produits.jpg",
    icon: <FaBoxes size={28} />,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-4xl italic font-extrabold text-[#0056A6]">
            NOS SERVICES
          </h2>

          <div className="w-24 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            Des prestations professionnelles adaptées aux besoins des entreprises,
            des industries et des particuliers.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {services.map((service, index) => (

            <Link
              href="/services"
              key={index}
              className={`group overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-2xl transition duration-500 hover:-translate-y-2 ${
                service.featured ? "lg:scale-105 border-2 border-red-500" : ""
              }`}
            >

              <div className="relative h-48 overflow-hidden">

                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />

              </div>

              <div className="bg-white px-5 py-5">

                <div className="flex items-center gap-4">

                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-[#0056A6]">

                    {service.icon}

                  </div>

                  <h3 className="font-bold text-gray-800 leading-6">

                    {service.title}

                  </h3>

                </div>

              </div>

            </Link>

          ))}

        </div>

      </div>
    </section>
  );
}