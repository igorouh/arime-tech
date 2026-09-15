import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#061522] text-white">

      {/* =====================================================
          CTA INDUSTRIEL
      ===================================================== */}
      <section className="relative overflow-hidden border-b border-white/10">

        {/* Motif technique discret */}
        <div className="absolute inset-0 opacity-[0.035] pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #ffffff 1px, transparent 1px), linear-gradient(#ffffff 1px, transparent 1px)",
              backgroundSize: "55px 55px",
            }}
          />
        </div>

        {/* Accent graphique */}
        <div className="absolute left-0 top-0 h-full w-1 bg-red-600" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-14 md:py-16">

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

            <div className="max-w-2xl">

              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-red-500"></span>

                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
                  Assistance technique
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
                Vous avez un besoin technique ?
              </h2>

              <p className="mt-4 text-gray-400 text-base md:text-lg leading-7">
                Parlons de votre projet industriel et trouvons ensemble
                une solution adaptée à vos installations et équipements.
              </p>

            </div>

            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3
              bg-red-600 hover:bg-red-700
              px-7 py-4
              text-sm font-semibold uppercase tracking-wide
              transition-all duration-300
              shrink-0"
            >
              Demander un devis

              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </Link>

          </div>

        </div>
      </section>


      {/* =====================================================
          FOOTER PRINCIPAL
      ===================================================== */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 py-14">

          {/* =================================================
              IDENTITÉ
          ================================================= */}
          <div className="lg:col-span-6">

            <Link href="/" className="inline-flex items-center">
              <Image
                src="/images/logo.png"
                alt="ARIME TECH"
                width={82}
                height={82}
                priority
                className="object-contain"
              />
            </Link>

            <h3 className="mt-5 text-2xl font-bold tracking-wide">
              ARIME <span className="text-red-500">TECH</span>
            </h3>

            <div className="flex items-center gap-3 mt-4">
              <span className="w-12 h-1 bg-red-500"></span>
              <span className="w-5 h-1 bg-blue-500"></span>
            </div>

            <p className="mt-6 max-w-lg text-gray-400 leading-7">
              Des solutions durables pour vos installations et équipements
              industriels.
            </p>

            <p className="mt-4 text-sm text-gray-500 max-w-lg leading-6">
              Une expertise technique au service de la performance,
              de la fiabilité et de la continuité de vos installations.
            </p>

          </div>


          {/* =================================================
              ACCÈS RAPIDE
          ================================================= */}
          <div className="lg:col-span-3">

            <div className="flex items-center gap-3 mb-6">

              <span className="w-1 h-5 bg-red-500"></span>

              <h3 className="text-sm font-semibold uppercase tracking-[0.16em]">
                Accès rapide
              </h3>

            </div>

            <nav className="space-y-4">

              <Link
                href="/"
                className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
              >
                <ArrowRight
                  size={14}
                  className="text-red-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                />
                Accueil
              </Link>

              <Link
                href="/#apropos"
                className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
              >
                <ArrowRight
                  size={14}
                  className="text-red-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                />
                À propos
              </Link>

              <Link
                href="/#services"
                className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
              >
                <ArrowRight
                  size={14}
                  className="text-red-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                />
                Services
              </Link>

              <Link
                href="/#realisations"
                className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
              >
                <ArrowRight
                  size={14}
                  className="text-red-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                />
                Réalisations
              </Link>

              <Link
                href="/contact"
                className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
              >
                <ArrowRight
                  size={14}
                  className="text-red-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                />
                Contact
              </Link>

            </nav>

          </div>


          {/* =================================================
              CONTACT
          ================================================= */}
          <div className="lg:col-span-3">

            <div className="flex items-center gap-3 mb-6">

              <span className="w-1 h-5 bg-red-500"></span>

              <h3 className="text-sm font-semibold uppercase tracking-[0.16em]">
                Contact
              </h3>

            </div>


            <div className="space-y-5">

              {/* Adresse */}
              <div className="flex items-start gap-4">

                <MapPin
                  size={19}
                  className="text-red-500 mt-1 shrink-0"
                />

                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-600">
                    Adresse
                  </p>

                  <p className="mt-1 text-sm text-gray-300">
                    Agla Hlazounto
                    <br />
                    Cotonou, Bénin
                  </p>
                </div>

              </div>


              {/* Téléphone */}
              <div className="flex items-start gap-4">

                <Phone
                  size={18}
                  className="text-red-500 mt-1 shrink-0"
                />

                <div>

                  <p className="text-xs uppercase tracking-wider text-gray-600">
                    Téléphone
                  </p>

                  <a
                    href="tel:+2290129292959"
                    className="mt-1 block text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    +229 01 29 29 29 59
                  </a>

                </div>

              </div>


              {/* Email */}
              <div className="flex items-start gap-4">

                <Mail
                  size={18}
                  className="text-red-500 mt-1 shrink-0"
                />

                <div className="min-w-0">

                  <p className="text-xs uppercase tracking-wider text-gray-600">
                    Email
                  </p>

                  <a
                    href="mailto:contact@arime-tech.com"
                    className="mt-1 block text-sm text-gray-300 hover:text-white transition-colors break-all"
                  >
                    contact@arime-tech.com
                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>


        {/* =====================================================
            LIGNE CONTACT / WHATSAPP
        ===================================================== */}
        <div className="border-t border-white/10 py-6">

          <div className="flex flex-col md:flex-row items-center justify-between gap-5">

            <p className="text-xs md:text-sm text-gray-500 text-center md:text-left">
              Une question sur votre installation ? Notre équipe est à votre écoute.
            </p>

            <a
              href="https://wa.me/2290129292959"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              <MessageCircle
                size={18}
                className="text-green-500"
              />

              Échanger sur WhatsApp

              <ArrowRight size={15} />

            </a>

          </div>

        </div>

      </div>


      {/* =====================================================
          BARRE FINALE
      ===================================================== */}
      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5">

          <div className="flex flex-col md:flex-row items-center justify-between gap-3">

            <p className="text-xs text-gray-600 text-center md:text-left">
              © {new Date().getFullYear()} ARIME TECH. Tous droits réservés.
            </p>

            <p className="text-xs text-gray-600 text-center">
              Des solutions durables pour vos installations et équipements industriels.
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}