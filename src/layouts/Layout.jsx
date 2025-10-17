import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bannerDesktop from "../assets/images/banner.jpg";
import bannerTablet from "../assets/images/banner-tablette.jpg";
import bannerMobile from "../assets/images/banner-mobile.jpg";

function Layout({ children }) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Barre de navigation */}
      <Navbar />

      {/* Bannière responsive */}
      {!isHome && (
        <div className="w-full h-[250px] overflow-hidden">
          {/* Desktop */}
          <img
            src={bannerDesktop}
            alt="Bannière desktop"
            className="hidden lg:block w-full h-full object-cover object-center"
          />

          {/* Tablette */}
          <img
            src={bannerTablet}
            alt="Bannière tablette"
            className="hidden md:block lg:hidden w-full h-full object-cover object-center"
          />

          {/* Mobile */}
          <img
            src={bannerMobile}
            alt="Bannière mobile"
            className="block md:hidden w-full h-full object-cover object-center"
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
