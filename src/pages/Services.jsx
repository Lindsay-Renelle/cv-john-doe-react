// Importation des modules nécessaires
import React from "react";
import { Helmet } from "react-helmet"; // SEO : balises <head> dynamiques
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faCogs, faSearch } from "@fortawesome/free-solid-svg-icons";

// Définition du composant Services
function Services() {
  // Liste des services avec icônes et descriptions
  const services = [
    {
      icon: faLaptopCode,
      title: "UX DESIGN",
      description:
        "L’UX Design est une méthode de conception centrée sur l’utilisateur. Son but est d’offrir une expérience de navigation optimale à l’internaute.",
    },
    {
      icon: faCogs,
      title: "DÉVELOPPEMENT WEB",
      description:
        "Le développement de sites web repose sur l’utilisation des langages HTML, CSS, JavaScript et PHP.",
    },
    {
      icon: faSearch,
      title: "RÉFÉRENCEMENT",
      description:
        "Le référencement naturel d’un site, aussi appelé SEO, consiste à mettre des techniques en œuvre pour améliorer sa position dans les résultats des moteurs de recherche.",
    },
  ];

  return (
    <>
      {/* SEO : balises <title> et <meta description> */}
      <Helmet>
        <title>Services – John Doe</title>
        <meta
          name="description"
          content="Présentation des services proposés par John Doe : UX design, développement web, et référencement naturel."
        />
      </Helmet>

      {/* Section principale */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        {/* Titre principal */}
        <h2 className="text-3xl font-bold text-center text-black mb-2">
          MON OFFRE DE SERVICES
        </h2>

        {/* Sous-titre */}
        <p className="text-center text-gray-700 mb-6">
          Voici les prestations sur lesquelles je peux intervenir
        </p>

        {/* 🔹 Ligne bleue de séparation */}
        <div className="w-48 h-1 bg-[#0d6efd] mx-auto mb-12" />

        {/* Grille de services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-center transition transform hover:-translate-y-1"
            >
              {/* Icône Font Awesome */}
              <FontAwesomeIcon
                icon={service.icon}
                className="text-[#0d6efd] text-5xl mb-4"
              />

              {/* Titre du service */}
              <h3 className="text-xl font-semibold text-[black mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Services;
