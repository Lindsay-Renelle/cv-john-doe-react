# Portfolio Développeur Web

Ce projet est un portfolio personnel réalisé dans le cadre de ma formation. Il présente mes compétences, mon parcours, et quelques réalisations. Le site est développé avec **React** et stylisé avec **Tailwind CSS**.


## Technologies utilisées

- [React](https://reactjs.org/) — pour construire les composants
- [Tailwind CSS](https://tailwindcss.com/) — pour le style rapide et responsive
- [React Router](https://reactrouter.com/) — pour la navigation entre les pages

Ce projet utilise [Vite](https://vitejs.dev/) pour le build rapide et léger.


## Structure du projet

`src/ 
├── components/ → Composants réutilisables (Navbar, Footer, Home, About, etc.) 
├── pages/ → Pages principales (Landing, Portfolio, Contact, etc.) 
├── assets/ → Images et ressources ├── App.js → Configuration des routes 
└── index.js → Point d’entrée de l’application`

- `tailwind.config.js` — configuration personnalisée des couleurs, polices, etc.


## Site en ligne

- [Voir le site](celine-devweb.alwaysdata.net)


## Prérequis

- Node.js ≥ 18
- npm ≥ 9
- Vite (installé automatiquement)


## Installation

1. Cloner le projet :

git clone https://github.com/Lindsay-Renelle/cv-john-doe-react.git


2. Installer les dépendances :

npm install

3. Lancer le serveur de développement :

npm run dev


## Hébergement

Le site est hébergé sur AlwaysData, un service d’hébergement web compatible avec les projets React et Vite. Le déploiement est effectué manuellement via FileZilla, un client FTP sécurisé.


# Déploiement sur AlwaysData

1. Compiler le projet pour la produciton

npm run build

2. Se connecter à AlwaysData via FileZilla
• Ouvrir FileZilla
• Renseigner les identifiants FTP fournis par AlwaysData
• Se connecter au serveur distant

3. Transférer les fichiers du dossier dist/
• Glisser-déposer tous les fichiers du dossier dist/ dans le répertoire www/ du serveur AlwaysData

4. Vérifier le site en ligne
• Une URL publique est générée automatiquement (ex. https://celine-devweb.alwaysdata.net)
• Le site est accessible immédiatement après le transfert

## Objectifs

• Créer une interface claire et professionnelle
• Respecter une maquette visuelle précise
• Utiliser des composants modulaires
• Appliquer mes compétences en HTML, CSS, JavaScript, React et Tailwind

## Aperçu
Le site contient :

• Une section Home avec une image de fond
• Une section À propos avec photo et texte
• Une liste de compétences avec barres de progression
• Une navigation fluide et responsive

## Contact
Si vous souhaitez me contacter ou en savoir plus, vous pouvez utiliser le formulaire de contact intégré ou m’écrire directement.

### Validation W3C

• Les pages HTML et le fichier CSS ont été validés via les outils W3C.  
• Les captures d’écran des résultats sont disponibles dans le dossier `/captures`à la racine de "cv-john-doe-react"

## Livrable attendu

Ce dépôt contient :
• Le code source complet du projet React/Vite
• Le fichier `README.md` avec les instructions d’installation et de déploiement
• Les captures d’écran des validations W3C dans le dossier `/captures`
• Le lien vers le site hébergé : [https://celine-dweeb.alwaysdata.net](https://celine-dweeb.alwaysdata.net)
