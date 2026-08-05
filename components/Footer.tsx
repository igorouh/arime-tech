import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaChevronRight,
} from "react-icons/fa";

export default function Footer() {
  return (
    <>
      {/* ================= CTA ================= */}

      <section className="relative z-20 max-w-7xl mx-auto px-6 -mb-20">

        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-[#003B73] via-[#0056A6] to-[#0A74DA] shadow-2xl">

          {/* Cercles décoratifs */}

          <div className="absolute -top-16 -left-16 w-56 h-56 bg-white/10 rounded-full blur-2xl"></div>

          <div className="absolute -bottom-20 right-0 w-72 h-72 bg-red-500/10 rounded-full blur-3xl"></div>

          <div className="relative px-10 py-14 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-8">

            <div>

              <span className="inline-block bg-white/15 px-4 py-2 rounded-full text-blue-100 text-sm tracking-widest uppercase">
                ARIME TECH
              </span>

              <h2 className="mt-5 text-4xl font-bold text-white leading-tight">

                Donnez vie à vos
                <br />
                projets industriels

              </h2>

              <p className="mt-5 text-blue-100 max-w-xl leading-8">

                Besoin d'un devis, d'une maintenance,
                d'un rebobinage ou d'une assistance technique ?

                Notre équipe est disponible pour vous accompagner.

              </p>

            </div>

            <Link
              href="/contact"
              className="group bg-red-600 hover:bg-red-700 transition-all duration-300 text-white px-10 py-5 rounded-full font-semibold shadow-xl hover:scale-105"
            >

              Nous contacter

            </Link>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white pt-32">

        {/* Décor */}

        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 pb-16">

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-14">

            {/* Logo */}

            <div>

              <Image
                src="/images/logo.png"
                alt="ARIME TECH"
                width={180}
                height={70}
              />

              <p className="mt-8 text-gray-300 leading-8">

                Votre partenaire en maintenance industrielle,
                rebobinage, électricité industrielle,
                transformateurs, groupes électrogènes
                et froid & climatisation.

              </p>

            </div>

            {/* Navigation */}

            <div>

              <h3 className="uppercase tracking-widest text-sm font-bold text-white">

                Navigation

              </h3>

              <div className="w-14 h-1 bg-red-600 rounded-full mt-3 mb-7"></div>

              <ul className="space-y-4">

                <li>

                  <Link href="/" className="group flex items-center gap-3 text-gray-300 hover:text-white transition">

                    <FaChevronRight className="text-red-500 group-hover:translate-x-1 transition" />

                    Accueil

                  </Link>

                </li>

                <li>

                  <Link href="/#services" className="group flex items-center gap-3 text-gray-300 hover:text-white transition">

                    <FaChevronRight className="text-red-500 group-hover:translate-x-1 transition" />

                    Services

                  </Link>

                </li>

                <li>

                  <Link href="/#about" className="group flex items-center gap-3 text-gray-300 hover:text-white transition">

                    <FaChevronRight className="text-red-500 group-hover:translate-x-1 transition" />

                    À propos

                  </Link>

                </li>

                <li>

                  <Link href="/#realisations" className="group flex items-center gap-3 text-gray-300 hover:text-white transition">

                    <FaChevronRight className="text-red-500 group-hover:translate-x-1 transition" />

                    Réalisations

                  </Link>

                </li>

                <li>

                  <Link href="/boutique" className="group flex items-center gap-3 text-gray-300 hover:text-white transition">

                    <FaChevronRight className="text-red-500 group-hover:translate-x-1 transition" />

                    Boutique

                  </Link>

                </li>

                <li>

                  <Link href="/contact" className="group flex items-center gap-3 text-gray-300 hover:text-white transition">

                    <FaChevronRight className="text-red-500 group-hover:translate-x-1 transition" />

                    Contact

                  </Link>

                </li>

              </ul>

            </div>
                        {/* Nos expertises */}

            <div>

              <h3 className="uppercase tracking-widest text-sm font-bold text-white">
                Nos expertises
              </h3>

              <div className="w-14 h-1 bg-red-600 rounded-full mt-3 mb-7"></div>

              <ul className="space-y-4">

                {[
                  "Rebobinage de moteurs électriques",
                  "Électricité industrielle",
                  "Maintenance industrielle",
                  "Transformateurs",
                  "Groupes électrogènes",
                  "Froid & Climatisation",
                ].map((service) => (

                  <li
                    key={service}
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition duration-300"
                  >

                    <div className="w-2 h-2 rounded-full bg-red-500"></div>

                    {service}

                  </li>

                ))}

              </ul>

            </div>

            {/* Coordonnées */}

            <div>

              <h3 className="uppercase tracking-widest text-sm font-bold text-white">
                Coordonnées
              </h3>

              <div className="w-14 h-1 bg-red-600 rounded-full mt-3 mb-7"></div>

              <div className="space-y-5">

                <div className="flex items-start gap-4">

                  <div className="w-11 h-11 rounded-xl bg-red-600/20 flex items-center justify-center">

                    <FaMapMarkerAlt className="text-red-500" />

                  </div>

                  <div>

                    <p className="font-semibold">
                      Adresse
                    </p>

                    <p className="text-gray-400 text-sm mt-1">
                      Agla Hlazounto
                      <br />
                      Cotonou - Bénin
                    </p>

                  </div>

                </div>

                <div className="flex items-start gap-4">

                  <div className="w-11 h-11 rounded-xl bg-blue-600/20 flex items-center justify-center">

                    <FaPhoneAlt className="text-blue-400" />

                  </div>

                  <div>

                    <p className="font-semibold">
                      Téléphone
                    </p>

                    <p className="text-gray-400 text-sm mt-1">
                      +229 01 29 29 29 59
                    </p>

                  </div>

                </div>

                <div className="flex items-start gap-4">

                  <div className="w-11 h-11 rounded-xl bg-green-600/20 flex items-center justify-center">

                    <FaEnvelope className="text-green-400" />

                  </div>

                  <div>

                    <p className="font-semibold">
                      Email
                    </p>

                    <p className="text-gray-400 text-sm mt-1">
                      contact@arime-tech.com
                    </p>

                  </div>

                </div>

                <div className="flex items-start gap-4">

                  <div className="w-11 h-11 rounded-xl bg-cyan-600/20 flex items-center justify-center">

                    <FaGlobe className="text-cyan-400" />

                  </div>

                  <div>

                    <p className="font-semibold">
                      Site web
                    </p>

                    <p className="text-gray-400 text-sm mt-1">
                      www.arime-tech.com
                    </p>

                  </div>

                </div>

              </div>

              {/* Réseaux sociaux */}

              <div className="mt-10">

                <h4 className="font-semibold mb-5">
                  Suivez-nous
                </h4>

                <div className="flex gap-4">

                  <a
                    href="#"
                    className="group w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#1877F2] transition-all duration-300 hover:scale-110"
                  >
                    <FaFacebookF />
                  </a>

                  <a
                    href="#"
                    className="group w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#0A66C2] transition-all duration-300 hover:scale-110"
                  >
                    <FaLinkedinIn />
                  </a>

                  <a
                    href="#"
                    className="group w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#25D366] transition-all duration-300 hover:scale-110"
                  >
                    <FaWhatsapp />
                  </a>

                  <a
                    href="#"
                    className="group w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-400 transition-all duration-300 hover:scale-110"
                  >
                    <FaInstagram />
                  </a>

                </div>

              </div>

            </div>

          </div>

          {/* Ligne de séparation */}

          <div className="border-t border-white/10 mt-16 pt-8">

            <div className="flex flex-col lg:flex-row justify-between items-center gap-4">

              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} ARIME TECH. Tous droits réservés.
              </p>

              <p className="text-gray-500 text-sm text-center">
                Des solutions durables pour vos installations et équipements industriels.
              </p>

            </div>

          </div>

        </div>

      </footer>

    </>
  );
}