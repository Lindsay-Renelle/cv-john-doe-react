import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import servicesBg from "../assets/images/services-bg.jpg";

function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page introuvable – John Doe</title>
        <meta
          name="description"
          content="La page que vous recherchez n'existe pas ou a été déplacée."
        />
        <meta name="robots" content="noindex" />
      </Helmet>

      <section
        className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${servicesBg})`,
        }}
      >
        <div className="bg-white bg-opacity-90 max-w-xl w-full text-center rounded-lg shadow-lg p-8">
          <h1 className="text-6xl font-bold text-black mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Oups… cette page n'existe pas
          </h2>
          <p className="text-gray-600 mb-6">
            Le lien est peut-être incorrect ou la page a été déplacée.
          </p>
          <Link
            to="/"
            className="bg-[#0d6efd] text-white px-6 py-3 rounded hover:bg-blue-700 transition"
          >
            Retour à l’accueil
          </Link>
        </div>
      </section>
    </>
  );
}

export default NotFound;
