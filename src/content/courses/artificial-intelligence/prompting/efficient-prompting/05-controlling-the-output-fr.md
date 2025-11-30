---
title: "Contrôler la sortie"
duration: 4 min
learningObjectives:
  - Apprendre à spécifier le format, la structure et la longueur de sortie
  - Comprendre comment le contrôle du ton affecte les réponses
  - Appliquer les exigences de formatage pour obtenir exactement ce dont vous avez besoin
---

## Contrôler la sortie

Vous avez appris à attribuer un persona et à fournir du contexte. Ajoutons maintenant une autre technique puissante : dire à l'IA exactement comment formater et présenter sa réponse.

Beaucoup de gens oublient qu'ils peuvent contrôler non seulement ce que l'IA leur dit, mais comment elle le leur dit. C'est l'une des techniques qui a le plus grand impact pour le moins d'effort.

### Vous pouvez (et devriez) dire à l'IA exactement ce que vous voulez

L'IA n'est engagée envers aucun format de réponse particulier. Elle peut vous donner des puces, des listes numérotées, des tableaux, de la prose détaillée, des résumés brefs, du code, du JSON, du markdown, ou presque n'importe quelle structure que vous pouvez décrire.

Si vous ne spécifiez pas, vous obtenez ce qui est par défaut pour l'IA, qui est généralement un mélange de paragraphes et de puces qui peut ou non convenir à vos besoins.

Lorsque vous spécifiez exactement ce que vous voulez, vous obtenez exactement ce que vous voulez.

### Options de format

**Listes à puces :** Idéales pour scanner rapidement et comparer des options

**Étapes numérotées :** Idéales pour les processus, instructions ou éléments classés

**Tableaux :** Idéaux pour comparer plusieurs éléments sur plusieurs dimensions

**En-têtes et sections :** Idéaux pour organiser du contenu long en parties navigables

**Paragraphes en prose :** Idéaux pour les explications, histoires ou lorsque vous voulez un flux de lecture naturel

**JSON ou données structurées :** Idéales lorsque vous devez traiter la sortie de manière programmatique

**Markdown :** Idéal lorsque vous voulez du texte formaté que vous pouvez utiliser dans des documents ou sites web

### Contrôle du ton

Vous pouvez également spécifier le ton de la réponse :

**Formel :** Professionnel, adapté aux contextes d'affaires

**Décontracté :** Amical et conversationnel

**Enthousiaste :** Énergique et encourageant

**Factuel :** Juste les faits, sans embellissement

**Empathique :** Chaleureux et compréhensif

**Direct :** Franc et au point, sans détours

### Contraintes de longueur

Soyez explicite sur la quantité de contenu que vous voulez :

**Limites de mots ou de phrases :** "Gardez chaque description sous 50 mots"

**Demandes de brièveté :** "Sois concis" ou "Donne-moi la version courte"

**Demandes d'exhaustivité :** "Sois approfondi" ou "Inclus tous les détails pertinents"

**Guidance proportionnelle :** "Passe plus de temps sur X et moins sur Y"

### Exigences de structure

Vous pouvez spécifier exactement comment le contenu doit être organisé :

**Sections spécifiques :** "Inclus des sections sur le coût, le temps requis et la difficulté"

**Éléments ordonnés :** "Commence par le point le plus important"

**Correspondance de modèle :** "Suis cette structure exacte : [fournir modèle]"

**Détail progressif :** "Commence par un résumé, puis entre dans les détails"

### Faire évoluer notre exemple fil rouge

Ajoutons le formatage de sortie à notre prompt Japon :

```
Tu es un consultant de voyage expérimenté au Japon qui a aidé des centaines de visiteurs pour la première fois à planifier leurs voyages au cours des 15 dernières années.

Je planifie mon premier voyage au Japon avec les détails suivants :
[Tout notre contexte du chapitre 4]

S'il te plaît, fournis un itinéraire jour par jour dans un format de tableau avec ces colonnes :
- Date (5-19 avril)
- Lieu (dans quelle ville/zone je serai)
- Activité du matin (brève description, 10-15 mots)
- Activité de l'après-midi (brève description, 10-15 mots)
- Activité du soir (brève description, 10-15 mots)
- Coût quotidien estimé (en USD, hébergement exclu)

Après le tableau, inclus :
1. Une brève section sur les hébergements recommandés pour chaque lieu
2. Conseils essentiels spécifiques aux voyages en avril au Japon
3. Une liste de bagages adaptée à cet itinéraire

Garde toutes les descriptions concises et pratiques. Concentre-toi sur les spécificités plutôt que sur les généralités.
```

Maintenant l'IA sait exactement quoi produire. Vous obtiendrez un tableau structuré que vous pouvez réellement utiliser pour planifier, suivi d'informations supplémentaires organisées dans les sections exactes que vous avez demandées.

Comparez cela au prompt vague "Planifie-moi un voyage au Japon". Au lieu de paragraphes de conseils génériques, vous obtenez un document de planification pratique.

### Le format que la plupart des gens oublient

L'une des techniques de formatage les plus puissantes est aussi la plus négligée : demander des compromis, des avantages et inconvénients, ou des informations pertinentes pour la décision.

Au lieu de demander "Que devrais-je faire ?", demandez "Quelles sont les options, et quels sont les compromis pour chacune ?"

```
Donne-moi 3 options pour comment passer le jour 3, avec les avantages et inconvénients de chacune en fonction de mes préférences déclarées.
```

Cela transforme l'IA de quelqu'un qui prend des décisions pour vous en un conseiller qui vous aide à prendre des décisions éclairées vous-même.

### Exercice : Spécifiez votre format de sortie

Prenez votre prompt en évolution et ajoutez des instructions spécifiques de formatage de sortie.

Considérez :
- Quel format serait le plus utile pour vos besoins ? (Liste ? Tableau ? Sections ?)
- Quel ton est approprié ?
- Combien de détails voulez-vous ?
- Devrait-il y avoir des sections ou catégories spécifiques ?
- Les comparaisons ou compromis seraient-ils utiles ?

Ajoutez ces instructions de formatage et comparez les résultats à vos tentatives précédentes.
