import { Link } from "react-router-dom";
import React, { useState } from "react";
import GithubModal from "./GithubModal"; // Assure-toi que le chemin est correct

function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false); // État pour ouvrir/fermer la modale

  return (
    <>
      <footer className="bg-[#f3f3f3] text-black font-sans pt-12">
        {/* 4 colonnes */}
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 pb-8">
          {/* Colonne 1 : Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">John Doe</h3>
            <p className="text-sm mb-1">40 Rue Laure Diebold</p>
            <p className="text-sm mb-1">69009 Lyon, France</p>
            <p className="text-sm mb-4">Téléphone : 06 20 30 40 50</p>

            {/* Icônes Font Awesome */}
            <div className="flex gap-4 text-xl text-black">
              {/* GitHub : déclenche la modale */}
              <button
                onClick={() => setIsModalOpen(true)}
                aria-label="GitHub"
                className="hover:text-black transition-colors"
              >
                <i className="fa-brands fa-github"></i>
              </button>

              {/* Twitter : lien externe */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="hover:text-black transition-colors"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>

              {/* LinkedIn : lien externe */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-black transition-colors"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Colonne 2 : Liens utiles */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens utiles</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-[#0d6efd]">{">"}</span>{" "}
                <Link to="/" className="hover:underline">
                  Accueil
                </Link>
              </li>
              <li>
                <span className="text-[#0d6efd]">{">"}</span>{" "}
                <Link to="/services" className="hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <span className="text-[#0d6efd]">{">"}</span>{" "}
                <Link to="/contact" className="hover:underline">
                  Me contacter
                </Link>
              </li>
              <li>
                <span className="text-[#0d6efd]">{">"}</span>{" "}
                <Link to="/portfolio" className="hover:underline">
                  Réalisations
                </Link>
              </li>
              <li>
                <span className="text-[#0d6efd]">{">"}</span>{" "}
                <Link to="/mentions" className="hover:underline">
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Réalisations */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Mes dernières réalisations</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-[#0d6efd]">{">"}</span> Fresh food
              </li>
              <li>
                <span className="text-[#0d6efd]">{">"}</span> Restaurant Akira
              </li>
              <li>
                <span className="text-[#0d6efd]">{">"}</span> Espace bien-être
              </li>
            </ul>
          </div>

          {/* Colonne 4 : Articles */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Mes derniers articles</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-[#0d6efd]">{">"}</span> Coder son site en HTML/CSS
              </li>
              <li>
                <span className="text-[#0d6efd]">{">"}</span> Vendre ses produits sur le web
              </li>
              <li>
                <span className="text-[#0d6efd]">{">"}</span> Se positionner sur Google
              </li>
            </ul>
          </div>
        </div>

        {/* Bas du footer */}
        <div className="bg-black text-white text-center text-sm py-4">
          &copy; Designed by John Doe
        </div>
      </footer>

      {/* Modale GitHub */}
      <GithubModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

export default Footer;
