import Image from "next/image";
import { FaAward, FaBolt, FaHandshake, FaUsers } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}

          <div className="relative">

            <Image
              src="/images/about.jpg"
              alt="ARIME TECH"
              width={700}
              height={600}
              className="rounded-3xl shadow-2xl object-cover"
            />

            <div className="absolute -bottom-8 -right-8 bg-[#0056A6] text-white p-6 rounded-2xl shadow-xl hidden lg:block">

              <h3 className="text-3xl font-bold italic">
                ARIME TECH
              </h3>

              <p className="mt-2 text-sm">
                Votre partenaire en maintenance industrielle
              </p>

            </div>

          </div>

          {/* Texte */}

          <div>

            <span className="inline-block bg-blue-100 text-[#0056A6] px-5 py-2 rounded-full font-semibold">
              À PROPOS
            </span>

            <h2 className="mt-6 text-4xl font-extrabold italic text-gray-900 leading-tight">
              Une expertise au service de vos installations industrielles
            </h2>

            <div className="w-24 h-1 bg-red-600 mt-5 rounded-full"></div>

            <p className="mt-8 text-gray-600 leading-8">
              ARIME TECH est une entreprise spécialisée dans le rebobinage de
              moteurs électriques, l'électricité industrielle, la maintenance
              industrielle, les transformateurs, les groupes électrogènes,
              le froid & climatisation ainsi que la vente de produits et
              consommables électriques.
            </p>

            <p className="mt-5 text-gray-600 leading-8">
              Notre objectif est d'offrir des solutions fiables, durables
              et adaptées aux besoins de nos clients, en privilégiant
              la qualité du travail, la réactivité et la satisfaction.
            </p>

            <p className="mt-8 font-bold text-gray-900">
              Nos équipes interviennent quotidiennement dans des
              environnements variés, notamment :
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-10 mt-4">

              <div className="flex items-center gap-3">
                <span className="text-red-600 font-bold">✓</span>
                <span>Industries</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-red-600 font-bold">✓</span>
                <span>Usines de production</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-red-600 font-bold">✓</span>
                <span>Bâtiments & Entreprises</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-red-600 font-bold">✓</span>
                <span>Commerces & PME / PMI</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-red-600 font-bold">✓</span>
                <span>Administrations publiques</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-red-600 font-bold">✓</span>
                <span>Hôpitaux & Centres de santé</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-red-600 font-bold">✓</span>
                <span>Hôtels & Complexes touristiques</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-red-600 font-bold">✓</span>
                <span>Stations de pompage</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-red-600 font-bold">✓</span>
                <span>Carrières & Mines</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-red-600 font-bold">✓</span>
                <span>Infrastructures énergétiques</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-red-600 font-bold">✓</span>
                <span>Chambres froides</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-red-600 font-bold">✓</span>
                <span>Installations portuaires</span>
              </div>


              </div>

            </div>

          </div>

        </div>


    </section>
  );
}