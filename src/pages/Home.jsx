import React, { useState } from "react";
import { Helmet } from "react-helmet";
import GithubModal from "../components/GithubModal"; // ← Ajouté ici
import homeImgDesktop from "../assets/images/hero-bg.jpg";
import homeImgTablet from "../assets/images/hero-bg-tablette.jpg";
import homeImgMobile from "../assets/images/hero-bg-mobile.jpg";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToApropos = () => {
    const el = document.getElementById("apropos");
    if (!el) return;
    const NAV_HEIGHT = 70;
    const top = el.getBoundingClientRect().top + window.pageYOffset - NAV_HEIGHT;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const handleEnSavoirPlus = () => {
    setIsModalOpen(true);       // Ouvre la modale
    scrollToApropos();          // Scroll vers la section
  };

  return (
    <>
      <Helmet>
        <title>Accueil – John Doe</title>
        <meta
          name="description"
          content="Page d’accueil du portfolio de John Doe, développeur web full stack."
        />
      </Helmet>

      <section className="relative w-full h-[700px] overflow-hidden">
        {/* Images responsive */}
        <img src={homeImgDesktop} alt="Bannière desktop" className="hidden lg:block w-full h-full object-cover object-center" />
        <img src={homeImgTablet} alt="Bannière tablette" className="hidden md:block lg:hidden w-full h-full object-cover object-center" />
        <img src={homeImgMobile} alt="Bannière mobile" className="block md:hidden w-full h-full object-cover object-center" />

        {/* Texte superposé */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">Bonjour, je suis John Doe</h1>
          <h2 className="text-2xl text-white mb-8 drop-shadow-lg">Développeur web full stack</h2>

          {/* Bouton modifié */}
          <button
            onClick={handleEnSavoirPlus}
            className="bg-[#0d6efd] hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-md shadow-md border border-blue-400 transition"
          >
            En savoir plus
          </button>
        </div>
      </section>

      {/* Modale GitHub */}
      <GithubModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

export default Home;
