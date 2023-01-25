Télécharger la dernière version de l'image [marbrex/react-slides](https://hub.docker.com/r/marbrex/react-slides) depuis DockerHub:  
```bash
docker pull marbrex/react-slides
```

Lancer un container:  
```bash
docker run -d \
  --name react-slides \
  -p 8080:8080 \
  marbrex/react-slides
```

> *Remarque:* Enlever l'option `-d` pour afficher les logs dans le terminal.

