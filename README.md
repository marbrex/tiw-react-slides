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

> P.S. **Yarn** doit être installé au préalable.

Problèmes rencontrées
---

- A mon avis, le temps donné pour faire ce TP était un peu court (surtout en prenant en compte les autres UEs). En plus, je n'ai jamais travaillé sur un projet React/Redux/ReactRouter, et j'ai donc passé un certain temps à apprendre les nouveaux frameworks. Par conséquent, je n'ai pas eu le temps de faire la dernière partie.