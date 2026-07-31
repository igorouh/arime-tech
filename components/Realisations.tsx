import Image from "next/image";

const realisations = [
  {
    image: "/images/realisations/realisation1.jpg",
    title: "Rebobinage de moteur électrique",
    category: "Maintenance",
    large: true,
  },
  {
    image: "/images/realisations/realisation2.jpg",
    title: "Diagnostics",
    category: "Maintenance",
  },
  {
    image: "/images/realisations/realisation3.jpg",
    title: "Armoire électrique",
    category: "Électricité industrielle",
  },
  {
    image: "/images/realisations/realisation4.jpg",
    title: "Transformateur",
    category: "Installation",
  },
  {
    image: "/images/realisations/realisation5.jpg",
    title: "Groupe électrogène",
    category: "Réparation",
  },
  {
    image: "/images/realisations/realisation6.jpg",
    title: "Climatisation",
    category: "Froid & Climatisation",
  },
];

export default function Realisations() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="bg-blue-100 text-[#0056A6] px-5 py-2 rounded-full font-semibold">
            NOS RÉALISATIONS
          </span>

          <h2 className="mt-6 text-4xl italic font-extrabold text-gray-900">
            Notre savoir-faire en images
          </h2>

          <div className="w-24 h-1 bg-red-600 mx-auto mt-5 rounded-full"></div>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            Quelques réalisations illustrant notre expertise dans les domaines
            de l'électricité industrielle, du rebobinage, de la maintenance
            et des équipements industriels.
          </p>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">

          {realisations.map((item, index) => (

            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer ${
                item.large
                  ? "lg:col-span-2 lg:row-span-2 h-[500px]"
                  : "h-[240px]"
              }`}
            >

              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#003E7E]/90 via-[#003E7E]/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"/>

              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-16 group-hover:translate-y-0 transition duration-500">

                <span className="inline-block bg-red-600 text-white text-xs px-3 py-1 rounded-full mb-3">

                  {item.category}

                </span>

                <h3 className="text-white text-2xl font-bold">

                  {item.title}

                </h3>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}