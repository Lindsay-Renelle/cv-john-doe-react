/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0d6efd',      // Couleur principale (boutons, liens)
        text: '#444',             // Texte normal
        title: '#1e1e1e',         // Titres
        background: '#EEE',       // Fond
        strong: '#000000',        // Balises <strong>
      },
      fontFamily: {
        nunito: ['"Nunito Sans"', 'sans-serif'], // Police principale
      },
      fontWeight: {
        normal: 400,
        semibold: 600,
      },
    },
  },
  plugins: [],
}
