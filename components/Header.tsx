"use client";

import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full shadow-md">

      {/* ==================== BARRE SUPERIEURE ==================== */}

      <div className="w-full bg-[#0056A6] text-white">

        <div className="max-w-[1500px] mx-auto px-8 h-11 flex items-center justify-between text-sm">

          <div className="flex items-center gap-2">
            <span>📞</span>
            <span>+229 01 29 29 29 59</span>
          </div>

          <div className="flex items-center gap-2">
            <span>✉</span>
            <span>contact@arime-tech.com</span>
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <span>📍</span>
            <span>Agla Hlazounto - Cotonou</span>
          </div>

        </div>

      </div>

      {/* ==================== MENU PRINCIPAL ==================== */}

      <div className="bg-white">

        <div className="max-w-[1500px] mx-auto px-8">

          <div className="h-24 flex items-center justify-between">

            {/* ==================== LOGO ==================== */}

            <div className="flex items-center gap-4 w-[360px]">

              <Image
                src="/images/logo.png"
                alt="ARIME TECH"
                width={80}
                height={80}
                priority
              />

              <div>

                <h1 className="text-3xl font-extrabold text-[#0056A6]">
                  ARIME TECH
                </h1>

                <p className="text-red-600 text-sm font-semibold">
                  Des solutions durables pour vos installations et équipements
                </p>

              </div>

            </div>

            {/* ==================== MENU ==================== */}

            <nav className="flex-1 flex justify-center">

              <ul className="hidden lg:flex items-center gap-9 text-black font-semibold">

                <li>
                  <a href="#" className="hover:text-red-600 transition duration-300">
                    Accueil
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-red-600 transition duration-300">
                    À propos
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-red-600 transition duration-300">
                    Services
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-red-600 transition duration-300">
                    Réalisations
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-red-600 transition duration-300">
                    Secteurs
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-red-600 transition duration-300">
                    Boutique
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-red-600 transition duration-300">
                    Contact
                  </a>
                </li>

              </ul>

            </nav>

            {/* ==================== BOUTON ==================== */}

            <div className="w-[260px] flex justify-end">

              <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-7 py-3 rounded-lg shadow-md transition duration-300">

                Demander un devis

              </button>

            </div>

          </div>

        </div>

      </div>

    </header>
  );
}