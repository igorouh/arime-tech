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

      {/* CTA */}

      <section className="max-w-7xl mx-auto px-6 -mb-16 relative z-10">

        <div className="bg-[#0056A6] rounded-3xl shadow-2xl px-10 py-12 flex flex-col lg:flex-row items-center justify-between">

          <div>

            <h2 className="text-3xl font-bold text-white">
              Donnez vie à vos projets industriels
            </h2>

            <p className="text-blue-100 mt-3 text-lg">
              Besoin d'une maintenance, d'un rebobinage ou d'un devis ?
              Notre équipe est à votre écoute.
            </p>

          </div>

          <Link
            href="/contact"
            className="mt-8 lg:mt-0 bg-red-600 hover:bg-red-700 transition px-8 py-4 rounded-full text-white font-semibold shadow-lg"
          >
            Nous contacter
          </Link>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="bg-slate-900 text-white pt-28 border-t-4 border-red-600">

        <div className="max-w-7xl mx-auto px-6 pb-16">

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

            {/* Logo */}

            <div>

              <Image
                src="/images/logo.png"
                alt="ARIME TECH"
                width={170}
                height={70}
              />

              <p className="mt-6 text-gray-300 leading-8">
                Votre partenaire en maintenance industrielle,
                rebobinage, électricité industrielle,
                groupes électrogènes, transformateurs
                et froid & climatisation.
              </p>

            </div>

            {/* Navigation */}

            <div>

              <h3 className="text-xl font-bold mb-6">
                Navigation
              </h3>

              <ul className="space-y-4">

                <li>
                  <Link href="/" className="flex items-center gap-2 hover:text-red-500 transition">
                    <FaChevronRight />
                    Accueil
                  </Link>
                </li>

                <li>
                  <Link href="/#services" className="flex items-center gap-2 hover:text-red-500 transition">
                    <FaChevronRight />
                    Services
                  </Link>
                </li>

                <li>
                  <Link href="/#about" className="flex items-center gap-2 hover:text-red-500 transition">
                    <FaChevronRight />
                    À propos
                  </Link>
                </li>

                <li>
                  <Link href="/#realisations" className="flex items-center gap-2 hover:text-red-500 transition">
                    <FaChevronRight />
                    Réalisations
                  </Link>
                </li>

                <li>
                  <Link href="/boutique" className="flex items-center gap-2 hover:text-red-500 transition">
                    <FaChevronRight />
                    Boutique
                  </Link>
                </li>

                <li>
                  <Link href="/contact" className="flex items-center gap-2 hover:text-red-500 transition">
                    <FaChevronRight />
                    Contact
                  </Link>
                </li>

              </ul>

            </div>
                        {/* Nos expertises */}

            <div>

              <h3 className="text-xl font-bold mb-6">
                Nos expertises
              </h3>

              <ul className="space-y-4 text-gray-300">

                <li className="flex items-center gap-3">
                  <FaChevronRight className="text-red-500" />
                  Rebobinage de moteurs électriques
                </li>

                <li className="flex items-center gap-3">
                  <FaChevronRight className="text-red-500" />
                  Électricité industrielle
                </li>

                <li className="flex items-center gap-3">
                  <FaChevronRight className="text-red-500" />
                  Maintenance industrielle
                </li>

                <li className="flex items-center gap-3">
                  <FaChevronRight className="text-red-500" />
                  Groupes électrogènes
                </li>

                <li className="flex items-center gap-3">
                  <FaChevronRight className="text-red-500" />
                  Transformateurs
                </li>

                <li className="flex items-center gap-3">
                  <FaChevronRight className="text-red-500" />
                  Froid & Climatisation
                </li>

              </ul>

            </div>

            {/* Coordonnées */}

            <div>

              <h3 className="text-xl font-bold mb-6">
                Coordonnées
              </h3>

              <div className="space-y-5 text-gray-300">

                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-red-500 mt-1 text-lg" />
                  <span>
                    Agla Hlazounto<br />
                    Cotonou - Bénin
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <FaPhoneAlt className="text-red-500" />
                  <span>+229 01 29 29 29 59</span>
                </div>

                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-red-500" />
                  <span>contact@arime-tech.com</span>
                </div>

                <div className="flex items-center gap-3">
                  <FaGlobe className="text-red-500" />
                  <span>www.arime-tech.com</span>
                </div>

              </div>

              <div className="flex gap-4 mt-8">

                <a
                  href="#"
                  className="w-11 h-11 rounded-full bg-white/10 border border-gray-700 flex items-center justify-center hover:bg-[#1877F2] transition-all duration-300 hover:scale-110"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="#"
                  className="w-11 h-11 rounded-full bg-white/10 border border-gray-700 flex items-center justify-center hover:bg-[#0A66C2] transition-all duration-300 hover:scale-110"
                >
                  <FaLinkedinIn />
                </a>

                <a
                  href="#"
                  className="w-11 h-11 rounded-full bg-white/10 border border-gray-700 flex items-center justify-center hover:bg-[#25D366] transition-all duration-300 hover:scale-110"
                >
                  <FaWhatsapp />
                </a>

                <a
                  href="#"
                  className="w-11 h-11 rounded-full bg-white/10 border border-gray-700 flex items-center justify-center hover:bg-[#E4405F] transition-all duration-300 hover:scale-110"
                >
                  <FaInstagram />
                </a>

              </div>

            </div>

          </div>

          {/* Séparateur */}

          <div className="border-t border-gray-700 mt-14 pt-8">

            <div className="flex flex-col md:flex-row items-center justify-between gap-4">

              <p className="text-gray-400 text-sm text-center md:text-left">
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