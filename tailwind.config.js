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
        sans: ['"Nunito Sans"', 'sans-serif'], // par défaut pour tout le site
        nunito: ['"Nunito Sans"', 'sans-serif'], // alias optionnel
      },
      
      fontWeight: {
        normal: 400,
        semibold: 600,
      },
    },
  },
  plugins: [],
}
