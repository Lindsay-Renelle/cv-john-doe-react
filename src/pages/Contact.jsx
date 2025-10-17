import React from "react";
 // Permet d’ajouter des balises <head> dynamiques pour le SEO
import { Helmet } from "react-helmet";
import contactBg from "../assets/images/contact-bg.jpg";

function Contact() {
  return (
    <>
      {/* SEO : balises <title> et <meta description> */}
      <Helmet>
         {/* Titre  */}
        <title>Contact – John Doe</title>
        <meta
          name="description"
          content="Formulaire de contact et coordonnées pour joindre John Doe." 
        />
      </Helmet>

      {/* Section principale avec image de fond et contenu */}
      <section
        className="bg-cover bg-center py-16"
        style={{
          backgroundImage: `linear-gradient(rgba(0,105,255,0.5), rgba(0,105,255,0.5)), url(${contactBg})`,
        }}
      >
        <div className="bg-white bg-opacity-90 max-w-7xl mx-auto px-4 py-12 rounded-lg shadow-lg">
          {/*Titre et introduction */}
          <h2 className="text-3xl font-bold text-center text-[#0d6efd] mb-2">
            ME CONTACTER
          </h2>
          <p className="text-center text-gray-700 mb-6">
            Pour me contacter en vue d’un entretien ou d’une future collaboration,
            merci de remplir le formulaire de contact.
          </p>
          <div className="w-24 h-1 bg-[#0d6efd] mx-auto mb-12" />

          {/*Grille responsive : formulaire à gauche, coordonnées à droite */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Bloc formulaire */}
            <div>
              <h3 className="text-lg font-semibold text-[#0d6efd] mb-2">
                Formulaire de contact
              </h3>
              <div className="h-1 bg-[#0d6efd] w-full mb-6" />

              <form className="space-y-4">
                {/*Champs du formulaire */}
                <input type="text" placeholder="Votre nom" required className="w-full border border-gray-300 rounded px-4 py-2" />
                <input type="email" placeholder="Votre adresse email" required className="w-full border border-gray-300 rounded px-4 py-2" />
                <input type="tel" placeholder="Votre numéro de téléphone" required className="w-full border border-gray-300 rounded px-4 py-2" />
                <input type="text" placeholder="Sujet" required className="w-full border border-gray-300 rounded px-4 py-2" />
                <textarea placeholder="Votre message" rows="5" required className="w-full border border-gray-300 rounded px-4 py-2" />
                <button type="submit" className="bg-[#0d6efd] text-white px-6 py-2 rounded hover:bg-blue-700 transition">
                  Envoyer
                </button>
              </form>
            </div>

            {/*Bloc coordonnées + carte Google Maps */}
            <div>
              <h3 className="text-lg font-semibold text-[#0d6efd] mb-2">
                Mes coordonnées
              </h3>
              <div className="h-1 bg-[#0d6efd] w-full mb-6" />

              <div className="text-sm text-gray-700 space-y-2 mb-6">
                <p>40 Rue Laure Diebold, 69009 Lyon, France</p>
                <p className="text-[#0d6efd]">06 20 30 40 50</p>
              </div>

              {/*Carte intégrée */}
              <iframe
                title="Carte de localisation"
                src="https://www.google.com/maps?q=40+Rue+Laure+Diebold,+69009+Lyon,+France&output=embed"
                className="w-full h-64 rounded border"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
