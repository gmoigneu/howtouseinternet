---
title: "Techniques de raisonnement avancées"
duration: 6 min
learningObjectives:
  - Comprendre le prompting Chain of Thought pour les problèmes complexes
  - Apprendre le Tree of Thought pour explorer plusieurs approches
  - Appliquer la validation adversariale pour détecter les erreurs et les angles morts
---

## Techniques de raisonnement avancées

Tout ce que nous avons couvert jusqu'à présent fonctionne bien pour les demandes simples. Mais qu'en est-il des problèmes complexes qui nécessitent une véritable analyse ? Qu'en est-il des situations où il y a des compromis, plusieurs approches valides ou des décisions qui dépendent de la pondération de divers facteurs ?

C'est là que les techniques de raisonnement avancées deviennent essentielles.

### Quand les prompts simples ne suffisent pas

Certaines demandes nécessitent que l'IA réfléchisse réellement à un problème plutôt que de simplement récupérer et formater des informations :

- Décisions avec compromis (choisir entre options avec différents avantages et inconvénients)
- Problèmes nécessitant plusieurs étapes (où les étapes ultérieures dépendent des conclusions antérieures)
- Situations avec contraintes qui interagissent (où optimiser une chose affecte une autre)
- Analyse nécessitant de considérer plusieurs perspectives

Pour ces situations, nous avons besoin de techniques qui encouragent un raisonnement plus profond.

### Chain of thought : Étape par étape

Le prompting Chain of Thought (CoT) est l'une des techniques les plus puissantes pour le raisonnement complexe. L'idée centrale est simple : demander à l'IA de réfléchir au problème étape par étape avant de donner sa réponse finale.

Pourquoi cela fonctionne-t-il ? Lorsque vous demandez des réponses immédiates, l'IA saute directement aux conclusions. Lorsque vous lui demandez de raisonner étape par étape, elle génère des pensées intermédiaires qui la guident vers de meilleures conclusions. Chaque étape s'appuie sur la précédente, et les erreurs sont plus susceptibles d'être détectées en cours de route.

La forme la plus simple de Chain of Thought :

```
Réfléchis à cela étape par étape avant de donner ta réponse.
```

Ou plus spécifiquement :

```
Avant de répondre, passe par les étapes suivantes :
1. D'abord, considère X
2. Ensuite, analyse Y
3. Enfin, évalue Z
4. Maintenant fournis ta recommandation basée sur cette analyse.
```

### Appliquer chain of thought à notre exemple fil rouge

Faisons évoluer notre prompt Japon pour une optimisation complexe :

```
Tu es un consultant de voyage expérimenté au Japon qui a aidé des centaines de visiteurs pour la première fois à planifier leurs voyages au cours des 15 dernières années.

Je planifie mon premier voyage au Japon avec les détails suivants :
[Tout notre contexte du chapitre 4]

Avant de créer l'itinéraire, je veux que tu réfléchisses aux points suivants :

1. Optimisation de l'itinéraire : Quel est le flux géographique le plus logique ? Considère les temps de trajet entre les villes et évite les retours en arrière.

2. Facteurs saisonniers : Le 5-19 avril couvre la saison des cerisiers en fleurs. Quand et où les fleurs sont-elles susceptibles d'être à leur apogée ? Comment cela devrait-il affecter notre itinéraire ?

3. Considérations de rythme : Étant donné ma préférence pour un rythme modéré et les contraintes physiques que j'ai mentionnées, quel est le bon nombre de villes/régions ? Quel est un rythme quotidien réaliste ?

4. Équilibre des expériences : Comment équilibrer les temples/sanctuaires, les expériences culinaires et les opportunités de photographie à travers le voyage ?

D'abord, partage ton raisonnement sur chacun de ces points. Ensuite, crée l'itinéraire jour par jour basé sur cette analyse.
```

Maintenant l'IA doit travailler à travers la complexité avant de proposer une solution. L'itinéraire final reflétera une considération attentive de multiples facteurs plutôt que de simplement lister des destinations populaires.

### Pensée étendue et modèles de raisonnement

Certains systèmes d'IA, y compris Claude, offrent des modes de "pensée étendue" ou de "raisonnement" qui appliquent automatiquement le Chain of Thought. Ces modes permettent à l'IA de passer plus de temps à raisonner avant de répondre.

Lorsqu'ils sont disponibles, ces fonctionnalités valent la peine d'être utilisées pour les problèmes complexes. Ils intègrent la réflexion étape par étape sans nécessiter que vous la demandiez explicitement.

Mais même sans modes de raisonnement dédiés, vous pouvez obtenir des effets similaires en demandant explicitement un raisonnement étape par étape dans vos prompts.

### Tree of thought : Explorer plusieurs chemins

Parfois le problème n'est pas que vous avez besoin d'un raisonnement étape par étape, mais qu'il y a plusieurs approches valides et vous voulez les explorer avant de vous engager.

Le prompting Tree of Thought demande à l'IA de générer plusieurs approches différentes, d'évaluer chacune, puis de recommander ou de synthétiser la meilleure option.

```
J'aimerais que tu génères 3 approches différentes pour cet itinéraire :

Approche A - Focus maximum sur les cerisiers en fleurs : Optimiser entièrement autour de voir les fleurs à leur apogée

Approche B - Voyage culinaire : Optimiser pour les expériences culinaires, avec les fleurs comme bonus

Approche C - Expérience équilibrée : Poids égal à la culture, la nourriture et la beauté saisonnière

Pour chaque approche, décris la structure de base et explique les compromis.

Ensuite, recommande quelle approche correspond le mieux à mes préférences déclarées et explique pourquoi.
```

Cette technique vous empêche d'être enfermé dans la première approche à laquelle l'IA pense. Vous voyez le paysage des possibilités avant de prendre une décision.

### Validation adversariale : Bataille de bots

Voici une technique puissante pour détecter les problèmes et les angles morts : faire en sorte que l'IA se dispute avec elle-même.

Après avoir obtenu une recommandation, demandez à l'IA d'adopter un persona sceptique et de critiquer son propre travail :

```
Maintenant je veux que tu adoptes un rôle différent.

Tu es un voyageur sceptique qui a visité le Japon trois fois et a vu de nombreux itinéraires touristiques mal tourner.

Examine l'itinéraire que tu viens de créer. Identifie :
- Problèmes potentiels ou oublis
- Allocations de temps irréalistes
- Erreurs courantes que ce plan pourrait entraîner
- Considérations manquantes

Sois vraiment critique. Ne te retiens pas.
```

Ensuite, après avoir reçu la critique :

```
Maintenant, retourne à ton rôle de consultant et révise l'itinéraire en fonction des critiques valables soulevées.
```

Cette technique détecte des problèmes qui pourraient autrement passer inaperçus. Le persona "sceptique" de l'IA n'est pas investi dans la défense du plan original et peut repérer les faiblesses plus objectivement.

### Quand utiliser chaque technique

**Chain of Thought :** Utilisez lorsque le problème nécessite un raisonnement séquentiel, lorsque les étapes dépendent des étapes précédentes, ou lorsque vous voulez voir la logique de l'IA.

**Tree of Thought :** Utilisez lorsqu'il y a plusieurs approches valides, lorsque vous voulez explorer les options avant de vous engager, ou lorsque la "meilleure" réponse dépend de priorités qui pourraient être pondérées différemment.

**Validation adversariale :** Utilisez lorsque les enjeux sont élevés, lorsque vous voulez tester une recommandation sous contrainte, ou lorsque vous soupçonnez que la première réponse pourrait avoir des angles morts.

Vous pouvez également combiner ces techniques. Commencez avec Chain of Thought pour développer une solution, utilisez la validation adversariale pour la critiquer, puis affinez en fonction de la critique.

### Exercice : Appliquez chain of thought

Prenez une version complexe de votre prompt, une avec des compromis, plusieurs considérations ou des décisions qui nécessitent de peser différents facteurs.

Avant de demander la réponse, spécifiez les étapes de raisonnement que vous voulez que l'IA suive. Soyez explicite sur les facteurs à considérer et dans quel ordre.

Remarquez comment la réponse finale diffère lorsque l'IA a raisonné à travers le problème systématiquement par rapport à sauter directement aux conclusions.
