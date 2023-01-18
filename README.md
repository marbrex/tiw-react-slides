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

> Remarque: `yarn init` génère un fichier de config `.editorconfig`. Afin de l'appliquer dans VS Code, il faut installer une extension Editor Config.

### Ajouter Express

> P.S. Ignorer (désactiver) le cache yarn (Zero-Installs) dans le .gitignore

```shell
yarn add express --dev
```

### Ajouter Dotenv

> Remarque: Ajouter en tant que **core** dependency

```shell
yarn add dotenv
```

### Ajouter et configurer ESLint

```shell
yarn add eslint --dev
```

#### Configuration

La commande suivante lance un wizard de configuration:

```shell
yarn eslint --init
```

```log
You can also run this command directly using 'npm init @eslint/config'.
√ How would you like to use ESLint? · style
√ What type of modules does your project use? · esm
√ Which framework does your project use? · react
√ Does your project use TypeScript? · Yes
√ Where does your code run? · browser, node
√ How would you like to define a style for your project? · guide
√ Which style guide do you want to follow? · standard-with-typescript
√ What format do you want your config file to be in? · JSON
```

Ensuite, ESLint propose d'installer toutes les dépendances automatiquement:

```log
Checking peerDependencies of eslint-config-standard-with-typescript@latest
The config that you've selected requires the following dependencies:

eslint-plugin-react@latest
eslint-config-standard-with-typescript@latest
@typescript-eslint/eslint-plugin@^5.0.0
eslint@^8.0.1
eslint-plugin-import@^2.25.2
eslint-plugin-n@^15.0.0
eslint-plugin-promise@^6.0.0
typescript@*

√ Would you like to install them now? · Yes
√ Which package manager do you want to use? · yarn
```

Le fichier de configuration **.eslintrc.json** est généré à la fin.
