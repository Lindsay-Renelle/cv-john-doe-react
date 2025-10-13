import React, { useState } from "react";

function Mentions() {
  // États pour gérer l'ouverture/fermeture de chaque bloc
  const [open, setOpen] = useState("editeur");

  // Fonction de bascule
  const toggleSection = (section) => {
    setOpen(open === section ? "" : section);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-16 font-nunito">
      {/* Titre principal */}
      <h2 className="text-3xl font-semibold text-[#0d6efd] text-center mb-2">
        MENTIONS LÉGALES
      </h2>
      <div className="w-24 h-1 bg-[#0d6efd] mx-auto mb-12" />

      {/* Bloc 1 : Éditeur du site */}
      <div className="bg-blue-50 border border-[#0d6efd] rounded-lg p-6 mb-8 cursor-pointer transition-all duration-300">
        <div
          className="flex justify-between items-center mb-4"
          onClick={() => toggleSection("editeur")}
        >
          <h3
            className={`text-lg font-semibold ${
              open === "editeur" ? "text-[#0d6efd]" : "text-black"
            }`}
          >
            Éditeur du site
          </h3>
          <i
            className={`fa-solid fa-chevron-${
              open === "editeur" ? "up" : "down"
            } text-[#0d6efd] text-xl transition-transform duration-300`}
          ></i>
        </div>
        {open === "editeur" && (
          <div className="text-sm text-gray-700 space-y-1">
            <p>John Doe</p>
            <p>40 Rue Laure Diebold</p>
            <p>69009 Lyon, France</p>
            <p className="text-[#0d6efd]">06 20 30 40 50</p>
            <p className="text-[#0d6efd]">john.doe@gmail.com</p>
          </div>
        )}
      </div>

      {/* Bloc 2 : Hébergeur */}
      <div className="bg-blue-50 border border-[#0d6efd] rounded-lg p-6 mb-8 cursor-pointer transition-all duration-300">
        <div
          className="flex justify-between items-center mb-4"
          onClick={() => toggleSection("hebergeur")}
        >
          <h3
            className={`text-lg font-semibold ${
              open === "hebergeur" ? "text-[#0d6efd]" : "text-black"
            }`}
          >
            Hébergeur
          </h3>
          <i
            className={`fa-solid fa-chevron-${
              open === "hebergeur" ? "up" : "down"
            } text-[#0d6efd] text-xl transition-transform duration-300`}
          ></i>
        </div>
        {open === "hebergeur" && (
          <div className="text-sm text-gray-700 space-y-1">
            <p>Always Data</p>
            <p>91 rue du Faubourg Saint Honoré</p>
            <p>75008 Paris</p>
            <p>
              <a
                href="https://www.alwaysdata.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0d6efd] hover:underline"
              >
                www.alwaysdata.com
              </a>
            </p>
          </div>
        )}
      </div>

      {/* Bloc 3 : Crédits */}
      <div className="bg-blue-50 border border-[#0d6efd] rounded-lg p-6 cursor-pointer transition-all duration-300">
        <div
          className="flex justify-between items-center mb-4"
          onClick={() => toggleSection("credits")}
        >
          <h3
            className={`text-lg font-semibold ${
              open === "credits" ? "text-[#0d6efd]" : "text-black"
            }`}
          >
            Crédits
          </h3>
          <i
            className={`fa-solid fa-chevron-${
              open === "credits" ? "up" : "down"
            } text-[#0d6efd] text-xl transition-transform duration-300`}
          ></i>
        </div>
        {open === "credits" && (
          <div className="text-sm text-gray-700 space-y-2">
            <p>Site développé par John Doe, étudiant du CEF.</p>
            <p>
              Les images libres de droit sont issues du site{" "}
              <a
                href="https://pixabay.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0d6efd] hover:underline"
              >
                Pixabay
              </a>
              .
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Mentions;
