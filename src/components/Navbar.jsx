import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "ACCUEIL", path: "/" },
    { label: "SERVICES", path: "/services" },
    { label: "RÉALISATION", path: "/portfolio" },
    { label: "BLOG", path: "/blog" },
    { label: "ME CONTACTER", path: "/contact" },
  ];

  return (
    <header className="bg-black fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold uppercase text-white tracking-wide">
          JOHN DOE
        </div>

        {/* Bouton hamburger (mobile) */}
        <button
          className="text-white text-2xl md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"}`}></i>
        </button>

        {/* Menu desktop */}
        <nav className="hidden md:flex space-x-8 text-sm font-semibold uppercase">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`transition ${
                location.pathname === item.path
                  ? "text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <nav className="md:hidden bg-black px-6 pb-4 space-y-4 text-sm font-semibold uppercase">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`block transition ${
                location.pathname === item.path
                  ? "text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Navbar;
