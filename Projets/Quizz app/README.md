# Le Quiz

Une expérience web interactive de culture générale, de sciences et de numérique, réalisée en HTML, CSS et JavaScript sans dépendance externe.

## Parcours

- **Un peu de tout** : six questions, deux par thème.
- **Culture générale**, **Sciences** ou **Numérique** : six questions tirées au sort parmi douze dans le thème choisi.
- La sélection et l’ordre des questions changent à chaque partie.
- Une explication apparaît après chaque réponse.
- Le résultat présente le score, la précision et la meilleure série.
- Le meilleur score est conservé localement par parcours, dans le navigateur utilisé.

## Lancer le projet

Depuis la racine du portfolio, démarre un serveur statique :

```bash
python -m http.server 8000
```

Ouvre ensuite `http://localhost:8000/Projets/Quizz%20app/`.

## Utilisation

- Sélectionne un parcours et lance la partie.
- Choisis une réponse à la souris ou avec les touches `1` à `4`.
- Le bouton **Question suivante** apparaît après la réponse.
- Les boutons et liens restent accessibles au clavier avec `Tab`, `Entrée` et `Espace`.

## Fichiers

- `index.html` : structure de l’expérience et repères d’accessibilité.
- `style.css` : interface responsive et thème sombre/doré.
- `script.js` : questions, progression, score et records locaux.
- `quiz-preview.svg` : aperçu affiché dans la galerie du portfolio.
