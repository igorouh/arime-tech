"use client";

import { useState } from "react";
import {
  FaBolt,
  FaTools,
  FaHandshake,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nom: "",
    telephone: "",
    email: "",
    societe: "",
    sujet: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Votre demande a été envoyée.");
  };

  return (
    <main className="bg-slate-50">

      {/* HERO */}

      <section className="bg-gradient-to-r from-[#003B73] via-[#0056A6] to-[#0A74DA] text-white py-24">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <span className="uppercase tracking-[5px] text-blue-200">
            Contact
          </span>

          <h1 className="text-5xl font-bold mt-5">
            Contactez ARIME TECH
          </h1>

          <div className="w-24 h-1 bg-red-500 rounded-full mx-auto mt-6"></div>

          <p className="max-w-3xl mx-auto mt-8 text-blue-100 leading-8 text-lg">

            Vous avez un projet industriel, une panne,
            une demande de devis ou besoin d'une assistance ?

            Notre équipe est à votre écoute et vous répondra
            dans les meilleurs délais.

          </p>

        </div>

      </section>

      {/* CARTES */}

      <section className="-mt-12 relative z-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-7">

            <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 transition">

              <FaBolt className="mx-auto text-red-600 text-5xl" />

              <h3 className="font-bold text-2xl mt-6">
                Réponse rapide
              </h3>

              <p className="text-gray-600 mt-4 leading-7">

                Nous répondons à toutes vos demandes
                dans les meilleurs délais.

              </p>

            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 transition">

              <FaTools className="mx-auto text-[#0056A6] text-5xl" />

              <h3 className="font-bold text-2xl mt-6">
                Expertise technique
              </h3>

              <p className="text-gray-600 mt-4 leading-7">

                Des solutions adaptées à vos
                installations industrielles.

              </p>

            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 transition">

              <FaHandshake className="mx-auto text-green-600 text-5xl" />

              <h3 className="font-bold text-2xl mt-6">
                Accompagnement
              </h3>

              <p className="text-gray-600 mt-4 leading-7">

                Un suivi personnalisé
                pour chacun de vos projets.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* FORMULAIRE */}

      <section className="py-24">

        <div className="max-w-5xl mx-auto px-6">

          <div className="bg-white rounded-[30px] shadow-xl p-10">

            <h2 className="text-4xl font-bold text-center">

              Envoyez-nous votre demande

            </h2>

            <p className="text-center text-gray-600 mt-4 mb-12">

              Complétez le formulaire ci-dessous.
              Nous vous contacterons rapidement.

            </p>

            <form
              onSubmit={handleSubmit}
              className="space-y-7"
            >
                            {/* Ligne 1 */}

              <div className="grid md:grid-cols-2 gap-6">

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Nom complet *
                  </label>

                  <input
                    type="text"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-gray-300 px-5 py-4 focus:border-[#0056A6] focus:ring-2 focus:ring-[#0056A6]/20 outline-none transition"
                    placeholder="Votre nom complet"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Téléphone *
                  </label>

                  <input
                    type="tel"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-gray-300 px-5 py-4 focus:border-[#0056A6] focus:ring-2 focus:ring-[#0056A6]/20 outline-none transition"
                    placeholder="+229 XX XX XX XX"
                  />
                </div>

              </div>

              {/* Ligne 2 */}

              <div className="grid md:grid-cols-2 gap-6">

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Adresse e-mail *
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-gray-300 px-5 py-4 focus:border-[#0056A6] focus:ring-2 focus:ring-[#0056A6]/20 outline-none transition"
                    placeholder="exemple@email.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Société (facultatif)
                  </label>

                  <input
                    type="text"
                    name="societe"
                    value={formData.societe}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-300 px-5 py-4 focus:border-[#0056A6] focus:ring-2 focus:ring-[#0056A6]/20 outline-none transition"
                    placeholder="Nom de votre entreprise"
                  />
                </div>

              </div>

              {/* Type */}

              <div>

                <label className="block text-gray-700 font-medium mb-2">
                  Type de demande
                </label>

                <select
                  name="sujet"
                  value={formData.sujet}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 px-5 py-4 focus:border-[#0056A6] focus:ring-2 focus:ring-[#0056A6]/20 outline-none transition"
                >
                  <option value="">Choisissez un service</option>
                  <option>Demande de devis</option>
                  <option>Rebobinage</option>
                  <option>Électricité industrielle</option>
                  <option>Maintenance industrielle</option>
                  <option>Transformateurs</option>
                  <option>Groupes électrogènes</option>
                  <option>Froid & Climatisation</option>
                  <option>Achat de produits</option>
                  <option>Autre</option>
                </select>

              </div>

              {/* Message */}

              <div>

                <label className="block text-gray-700 font-medium mb-2">
                  Votre message *
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={7}
                  className="w-full rounded-xl border border-gray-300 px-5 py-4 resize-none focus:border-[#0056A6] focus:ring-2 focus:ring-[#0056A6]/20 outline-none transition"
                  placeholder="Décrivez votre besoin..."
                />

              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold text-lg py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                ENVOYER MA DEMANDE
              </button>

            </form>

          </div>

        </div>

      </section>
            {/* COORDONNÉES */}

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">

            <span className="text-[#0056A6] uppercase tracking-[4px] font-semibold">
              Nous trouver
            </span>

            <h2 className="text-4xl font-bold mt-4">
              Nos coordonnées
            </h2>

            <div className="w-24 h-1 bg-red-600 rounded-full mx-auto mt-5"></div>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-slate-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition">

              <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center mx-auto">

                <FaMapMarkerAlt className="text-red-600 text-3xl" />

              </div>

              <h3 className="font-bold text-xl text-center mt-6">
                Adresse
              </h3>

              <p className="text-center text-gray-600 mt-3 leading-7">
                Agla Hlazounto
                <br />
                Cotonou - Bénin
              </p>

            </div>

            <div className="bg-slate-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition">

              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mx-auto">

                <FaPhoneAlt className="text-[#0056A6] text-3xl" />

              </div>

              <h3 className="font-bold text-xl text-center mt-6">
                Téléphone
              </h3>

              <p className="text-center text-gray-600 mt-3">
                +229 01 29 29 29 59
              </p>

            </div>

            <div className="bg-slate-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition">

              <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mx-auto">

                <FaEnvelope className="text-green-600 text-3xl" />

              </div>

              <h3 className="font-bold text-xl text-center mt-6">
                Email
              </h3>

              <p className="text-center text-gray-600 mt-3 break-all">
                contact@arime-tech.com
              </p>

            </div>

            <div className="bg-slate-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition">

              <div className="w-16 h-16 rounded-2xl bg-cyan-100 flex items-center justify-center mx-auto">

                <FaGlobe className="text-cyan-600 text-3xl" />

              </div>

              <h3 className="font-bold text-xl text-center mt-6">
                Site web
              </h3>

              <p className="text-center text-gray-600 mt-3">
                www.arime-tech.com
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* LOCALISAION */}

      <section className="pb-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">

            <span className="uppercase tracking-[4px] text-[#0056A6] font-semibold">
              Notre localisation
            </span>

            <h2 className="text-4xl font-bold mt-4">
              Venez nous rendre visite
            </h2>

            <div className="w-24 h-1 bg-red-600 rounded-full mx-auto mt-5 mb-6"></div>

            <p className="max-w-3xl mx-auto text-gray-600 leading-8">
              Notre atelier est situé à Agla Hlazounto en face de l'agene UNACREP, Cotonou. Nous vous accueillons
        avec plaisir pour vos projets de maintenance industrielle, de rebobinage,
        d'électricité industrielle et de réparation de transformateurs ou groupes électrogènes.
            </p>

            </div>

            <div className="overflow-hidden rounded-[30px] shadow-2xl border border-gray-200">

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3965.1597443792602!2d2.3546929999999997!3d6.373368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMjInMjQuMSJOIDLCsDIxJzE2LjkiRQ!5e0!3m2!1sfr!2sbj!4v1785932751048!5m2!1sfr!2sbj"

              width="100%"
              height="500"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Localisation ARIME TECH"
            />

          </div>

          <div className="flex justify-center mt-10">

            <a
            href="https://maps.app.goo.gl/chHQTyfT2Smhgtuz8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            >
              📍 Obtenir un itinéraire
              </a>

              <a href="tel:+2290129292959">📞 Appeler maintenant</a>

              </div>

        </div>

      </section>

    </main>
  );
}