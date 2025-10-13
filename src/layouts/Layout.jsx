import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bannerImg from "../assets/images/banner.jpg";

function Layout({ children }) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Barre de navigation */}
      <Navbar />

      {/* Bannière affichée sur toutes les pages sauf l'accueil */}
      {!isHome && (
        <div className="w-full">
          <img
            src={bannerImg}
            alt="Bannière"
            className="w-full h-[250px] object-cover object-center"
          />
        </div>
      )}

      {/* Contenu principal */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Pied de page */}
      <Footer />
    </div>
  );
}

export default Layout;
