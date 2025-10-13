function Services() {
    const services = [
      {
        emoji: "🖥️",
        title: "UX DESIGN",
        description:
          "L’UX Design est une méthode de conception centrée sur l’utilisateur. Son but est d’offrir une expérience de navigation optimale à l’internaute.",
      },
      {
        emoji: "⚙️",
        title: "DÉVELOPPEMENT WEB",
        description:
          "Le développement de sites web repose sur l’utilisation des langages HTML, CSS, JavaScript et PHP.",
      },
      {
        emoji: "🔍",
        title: "RÉFÉRENCEMENT",
        description:
          "Le référencement naturel d’un site, aussi appelé SEO, consiste à mettre des techniques en œuvre pour améliorer sa position dans les résultats des moteurs de recherche.",
      },
    ];
  
    return (
      <section className="max-w-7xl mx-auto px-4 py-16">
        {/* Titre */}
        <h2 className="text-3xl font-bold text-center text-[#0d6efd] mb-2">
          MON OFFRE DE SERVICES
        </h2>
        <p className="text-center text-gray-700 mb-6">
          Voici les prestations sur lesquelles je peux intervenir
        </p>
  
        {/* Ligne bleue */}
        <div className="w-24 h-1 bg-[#0d6efd] mx-auto mb-12" />
  
        {/* Cartes de services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-center"
            >
              <div className="text-4xl mb-4">{service.emoji}</div>
              <h3 className="text-xl font-semibold text-[#0d6efd] mb-2">
                {service.title}
              </h3>
              <p className="text-gray-700 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Services;
  