import React from "react";
import homeImg from "../assets/images/hero-bg.jpg";

function Home() {
  return (
    <section className="relative w-full h-[700px] overflow-hidden">
      {/* Image de fond */}
      <img
        src={homeImg}
        alt="Bannière John Doe"
        className="w-full h-full object-cover object-center"
      />

      {/* Texte superposé centré */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
          Bonjour, je suis John Doe
        </h1>
        <h2 className="text-2xl text-white mb-8 drop-shadow-lg">
          Développeur web full stack
        </h2>
        <button className="bg-[#0d6efd] hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-md shadow-md border border-blue-400">
          En savoir plus
        </button>
      </div>
    </section>
  );
}

export default Home;
