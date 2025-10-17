import React from "react";
import { Helmet } from "react-helmet"; 
import freshFood from "../assets/images/portfolio/fresh-food.jpg";
import restaurantAkira from "../assets/images/portfolio/restaurant-japonais.jpg";
import espaceBienEtre from "../assets/images/portfolio/espace-bien-etre.jpg";

function Portfolio() {
  const projects = [
    {
      image: freshFood,
      title: "Fresh food",
      description: "Réalisation d’un site avec commande en ligne.",
      tech: "Site réalisé avec PHP et MySQL",
    },
    {
      image: restaurantAkira,
      title: "Restaurant Akira",
      description: "Réalisation d’un site vitrine.",
      tech: "Site réalisé avec WordPress",
    },
    {
      image: espaceBienEtre,
      title: "Espace bien-être",
      description:
        "Réalisation d’un site vitrine pour un praticien de bien-être.",
      tech: "Site réalisé en HTML/CSS",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Portfolio – John Doe</title>
        <meta
          name="description"
          content="Découvrez les projets réalisés par John Doe, développeur web full stack."
        />
      </Helmet>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-black mb-2">
          PORTFOLIO
        </h2>
        <p className="text-center text-gray-700 mb-6">
          Voici quelques-unes de mes réalisations
        </p>
        <div className="w-48 h-1 bg-[#0d6efd] mx-auto mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col items-center text-center"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow items-center">
                <h3 className="text-xl font-semibold text-black mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  {project.description}
                </p>
                <button className="border border-[#0d6efd] text-[#0d6efd] px-4 py-2 rounded hover:bg-[#0d6efd] hover:text-white transition">
                  Voir
                </button>
                <p className="text-xs text-gray-500 mt-4">{project.tech}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Portfolio;
