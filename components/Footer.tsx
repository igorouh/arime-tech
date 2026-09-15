import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#071A2B] text-white">

      {/* PARTIE PRINCIPALE */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* ENTREPRISE */}
          <div>
            <h2 className="text-2xl font-bold tracking-wide">
              ARIME <span className="text-red-500">TECH</span>
            </h2>

            <div className="w-14 h-1 bg-red-500 rounded-full mt-4 mb-6"></div>

            <p className="text-gray-300 leading-7">
              Des solutions durables pour vos installations et équipements.
            </p>

            <p className="text-gray-400 leading-7 mt-4">
              Nous accompagnons les entreprises dans leurs besoins en
              électricité industrielle, rebobinage, maintenance,
              froid et climatisation.
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <h3 className="text-lg font-bold">
              Navigation
            </h3>

            <div className="w-10 h-1 bg-red-500 rounded-full mt-3 mb-6"></div>

            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition"
                >
                  Accueil
                </Link>
              </li>

              <li>
                <Link
                  href="/#services"
                  className="text-gray-300 hover:text-white transition"
                >
                  Nos services
                </Link>
              </li>

              <li>
                <Link
                  href="/#apropos"
                  className="text-gray-300 hover:text-white transition"
                >
                  À propos
                </Link>
              </li>

              <li>
                <Link
                  href="/#realisations"
                  className="text-gray-300 hover:text-white transition"
                >
                  Réalisations
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-lg font-bold">
              Nos services
            </h3>

            <div className="w-10 h-1 bg-red-500 rounded-full mt-3 mb-6"></div>

            <ul className="space-y-4 text-gray-300">
              <li>Électricité industrielle</li>
              <li>Rebobinage</li>
              <li>Maintenance</li>
              <li>Froid & climatisation</li>
              <li>
                Vente de produits et consommables électriques
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-bold">
              Nous contacter
            </h3>

            <div className="w-10 h-1 bg-red-500 rounded-full mt-3 mb-6"></div>

            <div className="space-y-5">

              {/* ADRESSE */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <FaMapMarkerAlt className="text-red-500" />
                </div>

                <div>
                  <p className="text-sm text-gray-400">
                    Adresse
                  </p>

                  <p className="text-gray-200 mt-1">
                    Agla Hlazounto
                    <br />
                    Cotonou, Bénin
                  </p>
                </div>
              </div>

              {/* TELEPHONE */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <FaPhoneAlt className="text-red-500" />
                </div>

                <div>
                  <p className="text-sm text-gray-400">
                    Téléphone
                  </p>

                  <a
                    href="tel:+2290129292959"
                    className="text-gray-200 hover:text-white transition"
                  >
                    +229 01 29 29 29 59
                  </a>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <FaEnvelope className="text-red-500" />
                </div>

                <div>
                  <p className="text-sm text-gray-400">
                    Email
                  </p>

                  <a
                    href="mailto:contact@arime-tech.com"
                    className="text-gray-200 hover:text-white transition break-all"
                  >
                    contact@arime-tech.com
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* BARRE INFERIEURE */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6">

          <div className="flex flex-col md:flex-row items-center justify-between gap-5">

            <p className="text-sm text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} ARIME TECH. Tous droits réservés.
            </p>

            {/* RESEAUX SOCIAUX */}
            <div className="flex items-center gap-3">

              {/* FACEBOOK */}
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-red-600 flex items-center justify-center transition-all duration-300"
              >
                <FaFacebookF />
              </a>

              {/* LINKEDIN */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-red-600 flex items-center justify-center transition-all duration-300"
              >
                <FaLinkedinIn />
              </a>

              {/* WHATSAPP */}
              <a
                href="https://wa.me/2290129292959"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-green-600 flex items-center justify-center transition-all duration-300"
              >
                <FaWhatsapp />
              </a>

            </div>

          </div>

        </div>
      </div>

    </footer>
  );
}