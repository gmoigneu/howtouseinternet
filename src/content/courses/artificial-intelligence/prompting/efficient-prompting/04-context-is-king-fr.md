---
title: "Le contexte est roi"
duration: 5 min
learningObjectives:
  - Comprendre pourquoi le contexte est la technique de prompting la plus importante
  - Apprendre la règle ABC : Always Be Contexting (toujours contextualiser)
  - Savoir comment prévenir les hallucinations de l'IA grâce à un meilleur contexte
---

## Le contexte est roi

S'il y a une technique dans tout ce cours qui améliorera vos résultats plus que toute autre, c'est celle-ci : **fournir du contexte**.

Le contexte n'est pas seulement utile. C'est tout.

### ABC : Always be contexting

Voici une règle simple à retenir : **ABC - Always Be Contexting (toujours contextualiser).**

Chaque information pertinente que vous incluez dans votre prompt améliore la réponse. Chaque information que vous omettez crée un vide que l'IA doit remplir avec des hypothèses, et ces hypothèses seront souvent fausses.

Lorsque l'IA vous donne des réponses qui manquent la cible, c'est presque toujours parce que l'IA manquait de contexte que vous avez mais que vous n'avez pas partagé.

### Pourquoi l'IA hallucine

Vous avez probablement entendu dire que l'IA "hallucine", générant de fausses informations qui semblent confiantes et correctes. Bien que cela puisse se produire pour diverses raisons techniques, il y a une cause majeure que vous pouvez contrôler : le contexte insuffisant.

Lorsque vous posez une question sans assez de contexte, l'IA doit combler les lacunes. Elle fait des hypothèses sur ce que vous voulez dire, dans quelle situation vous êtes et quel type de réponse vous avez besoin. Parfois ces hypothèses sont raisonnables. Souvent, elles ne le sont pas.

**Plus de contexte égale moins d'hallucination égale de meilleurs résultats.**

Lorsque vous fournissez un contexte détaillé, vous réduisez l'espace où l'IA doit deviner. Vous contraignez la réponse aux domaines où l'IA a réellement des données d'entraînement pertinentes, et vous la guidez vers le type spécifique d'information dont vous avez réellement besoin.

### Que inclure dans le contexte

Voici les types de contexte qui améliorent le plus souvent les réponses :

**Faits sur votre situation :** Qu'est-ce qui est réellement vrai ? Quelles sont les circonstances données ? Qu'est-ce qui s'est déjà passé ou qui a déjà été décidé ?

**Contraintes dans lesquelles vous travaillez :** Quelles sont vos limites ? Cela pourrait être le budget, le temps, les contraintes physiques, les règles que vous devez suivre ou les ressources dont vous disposez.

**Vos préférences :** Qu'aimez-vous et que n'aimez-vous pas ? Qu'est-ce qui compte le plus pour vous ? Qu'essayez-vous d'optimiser ?

**Votre parcours :** Que savez-vous déjà ? Quel est votre niveau d'expérience ? Quel est votre rôle ou position ?

**Votre objectif :** Pourquoi avez-vous besoin de cela ? Que ferez-vous avec l'information ? Qui d'autre est impliqué ?

### Faire évoluer notre exemple fil rouge

Transformons notre prompt Japon avec un contexte riche :

```
Tu es un consultant de voyage expérimenté au Japon qui a aidé des centaines de visiteurs pour la première fois à planifier leurs voyages au cours des 15 dernières années.

Je planifie mon premier voyage au Japon avec les détails suivants :

Budget : 3000 $ pour tout sauf les vols (qui sont déjà réservés)

Durée : 2 semaines, arrivée le 5 avril et départ le 19 avril

Intérêts : J'adore la nourriture (surtout essayer des spécialités locales et régionales), la culture traditionnelle (temples, sanctuaires, jardins), et la photographie. Je ne suis pas intéressé par la randonnée, la vie nocturne ou la culture anime/jeux vidéo.

Style de voyage : Rythme modéré. Je préfère voir moins d'endroits en profondeur plutôt que de me précipiter à travers beaucoup. J'aime une certaine structure mais veux de la flexibilité pour des découvertes spontanées.

Considérations physiques : Je peux marcher confortablement 8 à 10 km par jour mais j'ai des problèmes mineurs de genou avec les escaliers raides.

Préférence d'hébergement : Hôtels de milieu de gamme ou ryokans traditionnels. Je veux au moins une expérience de ryokan.

Aide-moi à planifier ce voyage.
```

Regardez combien nous avons réduit les possibilités. L'IA ne peut plus suggérer d'auberges de jeunesse bon marché ou de stations balnéaires de luxe. Elle ne peut pas recommander de randonnée en montagne ou le quartier des jeux d'Akihabara. Elle ne peut pas empiler vingt villes ou suggérer un séjour paresseux dans une seule ville.

L'IA a maintenant des contraintes spécifiques dans lesquelles travailler, et le résultat reflétera VOTRE voyage, pas le voyage d'un touriste générique.

### La permission d'échouer

Voici une technique que beaucoup de gens négligent : dites explicitement à l'IA quoi faire lorsqu'elle ne sait pas quelque chose.

```
Si tu n'es pas sûr des prix actuels, des horaires d'ouverture ou des changements récents à n'importe quel endroit, dis s'il te plaît "Je ne suis pas certain des [X] actuels" plutôt que de fournir des informations potentiellement obsolètes.
```

Ce simple ajout réduit considérablement l'hallucination. Vous donnez à l'IA la permission d'admettre l'incertitude au lieu de la forcer à combler chaque vide avec des suppositions qui semblent confiantes.

### Quand utiliser la recherche web

De nombreux outils IA offrent maintenant des capacités de recherche web qui peuvent accéder aux informations actuelles. Utilisez ces fonctionnalités lorsque :

- Vous avez besoin de prix actuels, d'horaires ou de disponibilité
- Vous voulez des critiques récentes ou des nouvelles sur un lieu
- Vous avez besoin d'informations sur des événements se produisant après la date limite d'entraînement de l'IA
- Vous voulez vérifier que les recommandations sont toujours exactes

Si votre outil IA offre la recherche web, demandez-lui explicitement de rechercher des informations actuelles si nécessaire. Si ce n'est pas le cas, soyez sceptique sur les détails sensibles au temps et vérifiez-les vous-même.

### Attention : l'IA ne se souvient pas

Une erreur courante : supposer que l'IA se souvient des conversations précédentes.

À moins que vous ne soyez dans un fil de conversation continu, l'IA n'a aucun souvenir de ce dont vous avez discuté hier ou la semaine dernière. Chaque nouvelle conversation repart à zéro. Si le contexte d'une conversation précédente est pertinent, vous devez l'inclure à nouveau.

Même dans une conversation, soyez prudent de supposer que l'IA suit tout. Pour les projets complexes, résumez périodiquement l'état actuel et les décisions clés pour garder l'IA alignée avec vos besoins.

### Exercice : Listez et ajoutez votre contexte

Retournez à votre prompt en évolution. Faites une liste de 5 à 10 éléments de contexte pertinents pour votre demande :

- Quels sont les faits de votre situation ?
- Dans quelles contraintes travaillez-vous ?
- Quelles sont vos préférences ?
- Quel est votre parcours ?
- Quel est votre objectif ?

Ajoutez-les à votre prompt. Comparez cette réponse à vos versions précédentes. Remarquez combien la réponse devient plus ciblée et utile lorsque l'IA comprend votre situation spécifique.
