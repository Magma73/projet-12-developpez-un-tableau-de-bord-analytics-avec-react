[![React version](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/) [![React router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/en/main) [![Styled component](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)](https://styled-components.com/) [![Axios](https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white)](https://axios-http.com/fr/docs/intro) [![Yarn](https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white)](https://yarnpkg.com/) [![Node version](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/en) [![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)](https://vitejs.dev/) [![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white)](https://www.postman.com/)

# Projet 12 - Développez un tableau de bord analytics avec react

## Table des matières

- [Contexte](#contexte-du-projet)
- [Mission](#mission-du-projet)
- [Maquette](#maquette-du-projet)
- [Technologies](#technologies-utilisées)
- [Prérequis](#prérequis)
- [Notes et contraintes](#notes-et-contraintes)
- [Lancer le projet](#lancer-le-projet)

## Contexte du projet

SportSee est une startup dédiée au coaching sportif. En pleine croissance, l'entreprise s'apprête à lancer une nouvelle version de la page de profil de l'utilisateur. Cette page permettra notamment à l'utilisateur de suivre le nombre de séances réalisées et le nombre de calories brûlées.


## Mission du projet
L’objectif ici est de refaire la page profil avec React. Le projet intègre des graphiques sur l’activité sportive (cf. [lien Figma de la maquette](https://www.figma.com/file/BMomGVZqLZb811mDMShpLu/UI-design-Sportify-FR?type=design&node-id=0-1&mode=design&t=PTXck4YXY17A6FWF-0)).
Il faut utiliser soit D3, soit Recharts.

## Maquette du projet

![Maquette du projet](/maquette/Home.png)

## Technologies utilisées

- react : V18.2.0
- react-dom : V18.2.0
- react-router-dom : V6.10.0
- react-scripts : V5.0.1
- axios : V1.4.0
- recharts : V2.7.1
- styled-components : V6.0.0
- [Create React App](https://github.com/facebook/create-react-app)

## Prérequis
- [NodeJS (version 12.18)](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)
- Éditeur de texte (vous êtes libre d'utiliser l'éditeur de texte de votre choix, comme VSCode)

## Notes et contraintes
- Démarrer le projet React
- Mettre en place le back-end (créé par Antoine) pour réaliser les calls HTTP et récupérer des données d’exemple
- Développer l’ensemble de l’application, les composants React, les routes React Router
- Suivre les maquettes Figma : responsives
- Se concentrer sur la version Desktop : le projet doit être lisible sur les écrans d’au moins 1024 par 780 px
- Gérer les calls API : soit avec Fetch, soit Axios
- Réaliser un mock des données de l'API
- Créer un service à part pour les calls API
- Créer une classe de modélisation des données pour s'assurer de toujours formater correctement les données de l'API avant de les utiliser
- Intégrer les User Stories TODO : [Kanban avec les User Stories](https://openclassrooms.notion.site/Tableau-de-bord-SportSee-6686aa4b5f44417881a4884c9af5669e)
- Intégrer les graphiques sur l’activité sportive de l’utilisateur via D3 ou Recharts
- Réaliser un code de qualité


## Lancer le projet
### Étape 1 - Back-end
- Forker ou clonez le [référentiel](https://github.com/Magma73/Projet-12-back-end-sportsee) : `https://github.com/Magma73/Projet-12-back-end-sportsee.git`
- Utilisez la commande `yarn` pour installer les dépendances
- Allez à la racine du dossier principal, puis exécutez la commande `yarn dev`pour lancer le serveur sur le port 3000


### Étape 2 - Front-end
- Forker ou clonez le [référentiel du front-end](https://github.com/Magma73/projet-12-developpez-un-tableau-de-bord-analytics-avec-react.git) : `https://github.com/Magma73/projet-12-developpez-un-tableau-de-bord-analytics-avec-react.git`
- Utilisez la commande `yarn install` pour installer les dépendances
- Accédez à la racine du dossier principal, puis exécutez la commande `yarn start` pour lancer l'application

## Voir la documentation
[![Documentation](https://img.shields.io/badge/Doc-Visit-green)](https://magma73.github.io/projet-12-developpez-un-tableau-de-bord-analytics-avec-react/sport-see/docs/)