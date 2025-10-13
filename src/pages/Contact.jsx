import contactBg from "../assets/images/contact-bg.jpg";

function Contact() {
  return (
    <section
      className="bg-cover bg-center py-16"
      style={{ backgroundImage: `url(${contactBg})` }}
    >
      <div className="bg-white bg-opacity-90 max-w-7xl mx-auto px-4 py-12 rounded-lg shadow-lg">
        {/* Titre */}
        <h2 className="text-3xl font-bold text-center text-[#0d6efd] mb-2">
          ME CONTACTER
        </h2>
        <p className="text-center text-gray-700 mb-6">
          Pour me contacter en vue d’un entretien ou d’une future collaboration,
          merci de remplir le formulaire de contact.
        </p>
        <div className="w-24 h-1 bg-[#0d6efd] mx-auto mb-12" />

        {/* Deux colonnes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Formulaire */}
          <div>
            <h3 className="text-lg font-semibold text-[#0d6efd] mb-2">
              Formulaire de contact
            </h3>
            <div className="w-16 h-1 bg-[#0d6efd] mb-6" />

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Votre nom"
                className="w-full border border-gray-300 rounded px-4 py-2"
              />
              <input
                type="email"
                placeholder="Votre adresse email"
                className="w-full border border-gray-300 rounded px-4 py-2"
              />
              <input
                type="tel"
                placeholder="Votre numéro de téléphone"
                className="w-full border border-gray-300 rounded px-4 py-2"
              />
              <input
                type="text"
                placeholder="Sujet"
                className="w-full border border-gray-300 rounded px-4 py-2"
              />
              <textarea
                placeholder="Votre message"
                rows="5"
                className="w-full border border-gray-300 rounded px-4 py-2"
              />
              <button
                type="submit"
                className="bg-[#0d6efd] text-white px-6 py-2 rounded hover:bg-blue-700 transition"
              >
                Envoyer
              </button>
            </form>
          </div>

          {/* Coordonnées */}
          <div>
            <h3 className="text-lg font-semibold text-[#0d6efd] mb-2">
              Mes coordonnées
            </h3>
            <div className="w-16 h-1 bg-[#0d6efd] mb-6" />

            <div className="text-sm text-gray-700 space-y-2 mb-6">
              <p>40 Rue Laure Diebold, 69009 Lyon, France</p>
              <p className="text-[#0d6efd]">06 20 30 40 50</p>
            </div>

            {/* Carte */}
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
  );
}

export default Contact;
