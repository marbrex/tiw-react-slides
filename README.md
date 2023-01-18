# TIW8 - TP React

## Prérequis

### Créer un projet vide

- Installer **NodeJS**
- *(Facultatif)* Installer **N**ode **V**ersion **M**anager ([Unix](https://github.com/nvm-sh/nvm) / [Windows](https://github.com/coreybutler/nvm-windows))
- Définir **Yarn** en tant que Package Manager par défaut:
  - *(Préférable)* [Activer](https://yarnpkg.com/getting-started/install) **Corepack** dans NodeJS
    ```shell
    corepack enable
    ```
  - Sinon, installer via npm
    ```shell
    npm install --global yarn
    ```
- Initialiser un nouveau projet avec
  ```shell
  yarn init
  ```
- *(Facultatif)* Mettre à jour la vérsion de **Yarn** pour ce projet. (Télécharge un fichier `.cjs` compressé dans `.yarn/releases`)
  ```shell
  yarn set version stable
  ```
- Configurer le projet en ajoutant dans package.json: (car à partir de la vérsion **2**, yarn génère un package.json minimal)
  ```json
  {
    "version": "1.0.0",
    "author": {
      "name": "Eldar Kasmamytov",
      "email": "eldar.kasmamytov@etu.univ-lyon1.fr",
      "url": "https://eldark.net/"
    },
    "repository": {
      "type": "git",
      "url": "https://forge.univ-lyon1.fr/p1712650/tiw-react-slides"
    },
    "license": "UNLICENSED",
    "type": "module"
  }
  ```

### Ajouter Express

> P.S. Ignorer (désactiver) le cache yarn (Zero-Installs) dans le .gitignore

```shell
yarn add express --dev
```

