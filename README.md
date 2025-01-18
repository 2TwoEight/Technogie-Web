# Projets

## Description du projet

Ce projet contient trois applications web distinctes :

1. **TP1 To Do List** : Une application de liste de tâches permettant d'ajouter, de supprimer et de filtrer des tâches.
2. **TP2 Messagerie** : Une application de messagerie simple permettant d'ajouter des messages alternant entre la gauche et la droite.
3. **TP Vuejs SuperHero** : Une application Vue.js permettant de visualiser une liste de super-héros, de voir les détails de chaque super-héros et de trouver des super-héros en fonction des superpouvoirs sélectionnés.

## Table des matières

- [Instructions d'installation et d'utilisation](#instructions-dinstallation-et-dutilisation)
  - [Prérequis](#prérequis)
  - [Installation](#installation)
  - [Utilisation](#utilisation)
    - [TP1 To Do List](#tp1-to-do-list)
    - [TP2 Messagerie](#tp2-messagerie)
    - [TP Vuejs SuperHero](#tp-vuejs-superhero)
      - [Structure du projet](#structure-du-projet)
      - [Fonctionnalités TP Super-héros](#fonctionnalités-tp-super-héros)
        - [Liste des super-héros](#liste-des-super-héros)
        - [Détails d'un super-héros](#détails-dun-super-héros)
        - [SuperPower Matcher](#superpower-matcher)


## Instructions d'installation et d'utilisation

### Prérequis

- Un navigateur web moderne (Chrome, Firefox, Edge, etc.)
- Un éditeur de code (Visual Studio Code, Sublime Text, etc.)
- Node.js et npm installés sur votre machine.
- Un serveur local pour servir les fichiers (par exemple, `live-server`).

### Installation

1. Clonez le dépôt sur votre machine locale :

    ```sh
    git clone <URL_DU_DEPOT>
    ```

2. Accédez au répertoire du projet :

    ```sh
    cd <NOM_DU_REPERTOIRE>
    ```

3. Installez `live-server` si ce n'est pas déjà fait :

    ```sh
    npm install -g live-server
    ```

### Utilisation

#### TP1 To Do List

1. Ouvrez le fichier `TP1 To Do List/index.html` dans votre navigateur web.
2. Utilisez les champs de texte pour ajouter des tâches avec un nom et une description.
3. Utilisez les cases à cocher pour marquer les tâches comme terminées.
4. Utilisez le bouton "Supprimer" pour enlever une tâche de la liste.
5. Utilisez le menu déroulant pour filtrer les tâches (toutes, terminées, non terminées).

#### TP2 Messagerie

1. Ouvrez le fichier `TP2 Messagerie/index.html` dans votre navigateur web.
2. Utilisez la zone de texte pour saisir un message.
3. Cliquez sur le bouton "Ajouter" pour ajouter le message à l'affichage. Les messages alternent entre la gauche et la droite.

#### TP Vuejs SuperHero

1. Lancez `live-server` dans le répertoire du projet :

    ```sh
    live-server src
    ```

2. Ouvrez votre navigateur et accédez à l'adresse fournie par `live-server` (par exemple, `http://127.0.0.1:8080`).

##### Structure du projet

- `src/index.html` : Page principale affichant la liste des super-héros.
- `src/detail.html` : Page affichant les détails d'un super-héros sélectionné.
- `src/matcher.html` : Page permettant de trouver des super-héros en fonction des superpouvoirs sélectionnés.
- `src/navbar.html` : Contient le code de la barre de navigation.
- `src/app.js` : Contient le code Vue.js pour l'application.

##### Fonctionnalités TP Super-héros

###### Liste des super-héros

- Affiche une liste de super-héros avec leurs noms et images.
- Permet de rechercher des super-héros par nom.
- Permet d'afficher les pouvoirs des super-héros.

###### Détails d'un super-héros

- Affiche les détails complets d'un super-héros sélectionné, y compris la biographie, les statistiques de pouvoir, l'apparence, le travail et les connexions.

###### SuperPower Matcher

- Permet aux utilisateurs de sélectionner les niveaux de superpouvoirs qu'ils aimeraient avoir à l'aide de curseurs.
- Affiche une liste de super-héros qui ont ces niveaux de superpouvoirs.
