import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Accueil from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Mentions from "./pages/Mentions";

function App() {
  return (
    <Router>
      <Routes>
        {/* Accueil + À propos sur une seule page */}
        <Route
          path="/"
          element={
            <Layout>
              <Accueil />
              <About />
            </Layout>
          }
        />

        {/* Autres pages */}
        <Route
          path="/services"
          element={
            <Layout>
              <Services />
            </Layout>
          }
        />
        <Route
          path="/portfolio"
          element={
            <Layout>
              <Portfolio />
            </Layout>
          }
        />
        <Route
          path="/blog"
          element={
            <Layout>
              <Blog />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />

        {/* ✅ Page Mentions légales (corrigée) */}
        <Route
          path="/mentions"
          element={
            <Layout>
              <Mentions />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
