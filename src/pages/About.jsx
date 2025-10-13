import React from "react";
import johnDoe from "../assets/images/john-doe-about.jpg";

function About() {
  return (
    <section
      id="apropos"
      className="w-full bg-[#EEE] flex justify-center py-24 px-8"
    >
      <div className="w-[1200px] bg-white shadow-lg rounded-lg p-12 flex gap-16">
        {/* Colonne gauche : texte */}
        <div className="w-1/2">
          <h2 className="text-4xl font-semibold text-black mb-3 uppercase tracking-wide">
            À propos
          </h2>

          {/* ✅ Ligne bleue de soulignement */}
          <div className="h-[4px] bg-[#0d6efd] w-120 mb-8"></div>
          <p className="text-[#444] leading-relaxed mb-5">
            Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation d'intégrateur-développeur web au CEF.
            Au cours de cette formation, j'ai pu acquérir des bases solides pour travailler dans le domaine du développement web.
          </p>
          <p className="text-[#444] leading-relaxed mb-5">
            Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale pour consolider ma formation de développeur web full stack.
          </p>
          <p className="text-[#444] leading-relaxed">
            J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web.
          </p>
        </div>

        {/* Colonne droite : image + compétences */}
        <div className="w-1/2">
          <img
            src={johnDoe}
            alt="John Doe"
            className="w-full h-auto mb-8 rounded-lg object-cover"
          />

          <h3 className="text-2xl font-semibold text-black mb-6">
            Mes compétences
          </h3>

          <div className="space-y-5">
            <Skill label="HTML 5" percent={90} color="bg-red-500" />
            <Skill label="CSS 3" percent={80} color="bg-blue-400" />
            <Skill label="JavaScript" percent={70} color="bg-yellow-400" />
            <Skill label="PHP" percent={60} color="bg-green-500" />
            <Skill label="React" percent={50} color="bg-blue-800" />
          </div>
        </div>
      </div>
    </section>
  );
}

// Composant barre de compétence
function Skill({ label, percent, color }) {
  return (
    <div>
      <div className="flex justify-between text-sm font-semibold text-[#1e1e1e] mb-1">
        <span>{label}</span>
        <span>{percent}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className={`${color} h-3`}
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
}

export default About;
