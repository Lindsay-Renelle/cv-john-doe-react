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

- [Voir le site](https://ton-nom.alwaysdata.net)


## Installation

1. Cloner le projet :

git clone https://github.com/ton-utilisateur/ton-projet.git


2. Installer les dépendances :

npm install

3. Lancer le serveur de développement :

npm run dev


## Hébergement

Le site sera hébergé sur **AlwaysData**, un service d’hébergement web.

Pour transférer les fichiers du projet vers le serveur, j’utilise **FileZilla**, un client FTP.

### Étapes :

1. Compiler le projet pour la production :

npm run build


2. Se connecter à AlwaysData via FileZilla :
- Hôte : ftp.alwaysdata.com
- Identifiants fournis par AlwaysData

3. Transférer le dossier `dist/` (généré par Vite) dans le répertoire web du serveur

4. Vérifier que le site est accessible en ligne via l’URL fournie par AlwaysData

## Objectifs

- Créer une interface claire et professionnelle
- Respecter une maquette visuelle précise
- Utiliser des composants modulaires
- Appliquer mes compétences en HTML, CSS, JavaScript, React et Tailwind

## Site en ligne

- [Voir le site](https://ton-nom.alwaysdata.net)


## Aperçu

Le site contient :
- Une section Home avec une image de fond
- Une section À propos avec photo et texte
- Une liste de compétences avec barres de progression
- Une navigation fluide et responsive

## Contact

Si vous souhaitez me contacter ou en savoir plus, vous pouvez utiliser le formulaire de contact intégré ou m’écrire directement.

---
### Validation W3C

Toutes les pages du site ont été validées via le navigateur :

- Pages validées : Accueil, À propos, Services, Portfolio, Blog, Contact, Mentions légales, Modale, Page 404
- Composants communs (Footer, Navbar) validés indirectement car présents sur chaque page
- Aucune erreur bloquante détectée, uniquement des avertissements liés à l’environnement de développement (Vite)
