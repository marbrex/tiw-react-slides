# TIW8 - TP React Slides

Eldar Kasmamytov p1712650

Où l'application est déployée ?
---

L'application est conteneurisée avec **Docker** et déployée sur mon cluster **Kubernetes** dans le cloud.  
Voici [L'URL du déploiement](http://130.162.234.201/edit)  

> P.S. La connexion n'est pas chifrée, je n'ai pas eu le temps de configurer l'accès en TLS, ce n'est que du HTTP.

Installer en local
---

### Avec Docker

Vous pouvez installer l'application en local avec Docker, l'image est sur mon [repo DockerHub](https://hub.docker.com/r/marbrex/react-slides).

### Cloner le projet

Vous pouvez également cloner le [repo Git](https://forge.univ-lyon1.fr/p1712650/tiw-react-slides).  
Pour installer les dépendances, build le client et lancer le serveur:  
```shell
make
```

> P.S. **Yarn** (version >= 2) doit être installé au préalable.

### Commandes utiles

Build le client (bundle avec Parcel)
```shell
yarn client-build
```

Lancer un serveur de développement (côté front) avec Parcel
```shell
yarn client-dev
```

Démarrer le serveur Node/Express
```shell
yarn server-up
```

Lint le code (ESLint)
```shell
yarn lint
```

Modules externes utilisés dans le projet
---

- Un bundler **Parcel** au lieu de **Webpack** (J'ai quand même fait un webpack fonctionnel au début sur une branche à part, mais la configuration m'a paru un peu lourde). Parcel est simple à utiliser, ne nécéssite pas beaucoup de configuration et plus rapide que Webpack. En plus, Parcel supporte beaucoup de formats *out of the box*.
- **SASS** au lieu de **Tailwind**. SASS est un langage étendu de CSS (pre-processor). Il est plus comfortable à utiliser et plus flexible comparé à Tailwind. Le code des composants n'est pas pollué avec plein de classes Tailwind.

Problèmes rencontrées
---

- A mon avis, le temps donné pour faire ce TP était un peu court (surtout en prenant en compte les autres UEs). En plus, je n'ai jamais travaillé sur un projet React/Redux/ReactRouter, et j'ai donc passé un certain temps à apprendre les nouveaux frameworks. Par conséquent, je n'ai pas eu le temps de faire la dernière partie.