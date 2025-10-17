import React, { useEffect, useState } from "react";

function GithubModal({ isOpen, onClose }) {
  const [data, setData] = useState(null);

  //Récupération des données GitHub uniquement quand la modale s’ouvre
  useEffect(() => {
    if (isOpen) {
      fetch("https://api.github.com/users/github-john-doe")
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error("Erreur API GitHub :", error));
    }
  }, [isOpen]);

  // Si la modale n’est pas ouverte, on ne rend rien
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      {/* Fenêtre modale */}
      <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-1/2 relative">
        
        {/* Bouton de fermeture */}
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-600 hover:text-red-600 text-xl"
        >
          ✖
        </button>

        {/* Titre principal */}
        <h2 className="text-2xl font-bold text-center mb-4 text-blue-600">
          Profil GitHub de John Doe
        </h2>

        {/*Données du profil (ou message de chargement) */}
        {data ? (
          <div className="flex flex-col items-center text-center space-y-4">
            {/* Avatar */}
            <img
              src={data.avatar_url}
              alt={data.name}
              className="w-24 h-24 rounded-full border-2 border-blue-400"
            />

            {/* Nom et bio */}
            <h3 className="text-xl font-semibold">{data.name}</h3>
            <p className="text-gray-600 italic">{data.bio}</p>

            {/* Infos supplémentaires */}
            <div className="text-sm text-gray-700 space-y-1">
              <p>
                <strong>Dépôts publics :</strong> {data.public_repos}
              </p>
              <p>
                <strong>Abonnés :</strong> {data.followers}
              </p>
              <p>
                <strong>Abonnements :</strong> {data.following}
              </p>
              <p>
                <strong>Compte créé le :</strong>{" "}
                {new Date(data.created_at).toLocaleDateString("fr-FR")}
              </p>
            </div>

            {/* Lien vers le profil GitHub */}
            <a
              href={data.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Voir sur GitHub
            </a>
          </div>
        ) : (
          <p className="text-center text-gray-500">Chargement...</p>
        )}
      </div>
    </div>
  );
}

export default GithubModal;
