import {
  FaAward,
  FaTools,
  FaBolt,
  FaUserCog,
  FaHandshake,
  FaCogs,
  FaSmile,
} from "react-icons/fa";

export default function WhyChoose() {
  const advantages = [
    {
      icon: <FaAward />,
      title: "Qualité des prestations",
      description:
        "Des interventions réalisées avec rigueur et dans le respect des normes professionnelles.",
    },
    {
      icon: <FaTools />,
      title: "Qualité des matériaux",
      description:
        "Nous utilisons des matériaux, pièces et consommables de qualité afin de garantir la fiabilité et la durabilité de vos équipements.",
    },
    {
      icon: <FaBolt />,
      title: "Réactivité",
      description:
        "Une prise en charge rapide pour réduire les temps d'arrêt de vos installations.",
    },
    {
      icon: <FaUserCog />,
      title: "Expertise technique",
      description:
        "Une équipe compétente et expérimentée au service de tous vos projets industriels.",
    },
    {
      icon: <FaHandshake />,
      title: "Confiance",
      description:
        "Une relation durable fondée sur la transparence, le professionnalisme et le respect de nos engagements.",
    },
    {
      icon: <FaCogs />,
      title: "Solutions durables",
      description:
        "Des solutions personnalisées adaptées aux besoins de chaque client et de chaque installation.",
    },
    {
      icon: <FaSmile />,
      title: "Satisfaction client",
      description:
        "Votre satisfaction est notre priorité et guide chacune de nos interventions.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="inline-block bg-blue-100 text-[#0056A6] px-5 py-2 rounded-full font-semibold">
            POURQUOI CHOISIR ARIME TECH ?
          </span>

          <h2 className="mt-6 text-4xl font-extrabold italic text-gray-900">
            Votre partenaire de confiance pour vos installations industrielles
          </h2>

          <div className="w-24 h-1 bg-red-600 mx-auto mt-5 rounded-full"></div>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {advantages.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border-t-4 border-red-600 hover:-translate-y-2"
            >

              <div className="text-5xl text-[#0056A6] mb-6">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}