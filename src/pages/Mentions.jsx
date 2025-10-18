import React, { useState } from "react";
import { Helmet } from "react-helmet"; // SEO : balises <head> dynamiques

function Mentions() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
    {
      title: "Éditeur du site",
      content: (
        <>
          <p>John Doe</p>
          <p>40 Rue Laure Diebold</p>
          <p>69009 Lyon, France</p>
          <p className="text-primary">06 20 30 40 50</p>
          <p className="text-primary">john.doe@gmail.com</p>
        </>
      ),
    },
    {
      title: "Hébergeur",
      content: (
        <>
          <p>Always Data</p>
          <p>91 rue du Faubourg Saint Honoré</p>
          <p>75008 Paris</p>
          <p>
            <a
              href="https://www.alwaysdata.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              www.alwaysdata.com
            </a>
          </p>
        </>
      ),
    },
    {
      title: "Crédits",
      content: (
        <>
          <p>Site développé par John Doe, étudiant du CEF.</p>
          <p>
            Les images libres de droit sont issues du site{" "}
            <a
              href="https://pixabay.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Pixabay
            </a>
            .
          </p>
        </>
      ),
    },
  ];

  return (
    <>
      {/* SEO : balises <title>, <meta description> et <meta robots> */}
      <Helmet>
        <title>Mentions légales – John Doe</title>
        <meta
          name="description"
          content="Mentions légales du site portfolio de John Doe."
        />
        <meta name="robots" content="noindex" />
      </Helmet>

      <section className="max-w-4xl mx-auto px-4 py-16 font-nunito">
        {/* Titre principal */}
        <h2 className="text-3xl font-semibold text-black text-center mb-2 uppercase">
          Mentions légales
        </h2>

        {/* Ligne bleue de séparation */}
        <div className="w-24 h-1 bg-primary mx-auto mb-12" />

        {/* Boucle sur les 3 blocs */}
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-blue-50 border border-primary rounded-lg p-6 mb-6 shadow-sm transition-all duration-300"
          >
            <button
              onClick={() => toggleSection(index)}
              className="w-full flex justify-between items-center text-left"
            >
              <span
                className={`text-lg font-semibold ${
                  openIndex === index ? "text-primary" : "text-gray-900"
                }`}
              >
                {section.title}
              </span>
              <span
                className={`fa-solid fa-chevron-${
                  openIndex === index ? "up" : "down"
                } text-primary text-xl transition-transform duration-300`}
                aria-hidden="true"
              ></span>
            </button>

            {/* Contenu affiché seulement quand la section est ouverte */}
            {openIndex === index && (
              <div className="mt-4 text-sm text-gray-700 space-y-1">
                {section.content}
              </div>
            )}
          </div>
        ))}
      </section>
    </>
  );
}

export default Mentions;
