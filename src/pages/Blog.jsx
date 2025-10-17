import React from "react";
import { Helmet } from "react-helmet"; // ← Ajouté ici
import coder from "../assets/images/blog/coder.jpg";
import croissance from "../assets/images/blog/croissance.jpg";
import google from "../assets/images/blog/google.jpg";
import screens from "../assets/images/blog/screens.jpg";
import seo from "../assets/images/blog/seo.jpg";
import technos from "../assets/images/blog/technos.png";

function Blog() {
  const articles = [
    { image: coder, title: "Coder son site en HTML/CSS", date: "Publié le 22 août 2022" },
    { image: croissance, title: "Vendre ses produits sur le web", date: "Publié le 20 août 2022" },
    { image: google, title: "Se positionner sur Google", date: "Publié le 1 août 2022" },
    { image: screens, title: "Coder en responsive design", date: "Publié le 31 juillet 2022" },
    { image: seo, title: "Techniques de référencement", date: "Publié le 30 juillet 2022" },
    { image: technos, title: "Apprendre à coder", date: "Publié le 12 juillet 2022" },
  ];

  return (
    <>
      <Helmet>
        <title>Blog – John Doe</title>
        <meta
          name="description"
          content="Articles et réflexions autour du développement web et des technologies."
        />
      </Helmet>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-black mb-2">BLOG</h2>
        <p className="text-center text-gray-700 mb-6">
          Retrouvez ici quelques articles sur le développement web.
        </p>
        <div className="w-48 h-1 bg-[#0d6efd] mx-auto mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-black mb-2">
                  {article.title}
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  Some quick example text to build on the card title and make up
                  the bulk of the card’s content. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Integer posuere erat a ante.
                </p>
                <button className="mt-auto bg-[#0d6efd] text-white px-4 py-2 rounded hover:bg-blue-700 transition self-start">
                  Lire la suite
                </button>
                <p className="text-xs text-gray-500 mt-4">{article.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Blog;
