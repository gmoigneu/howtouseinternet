---
title: "Le pouvoir des personas"
duration: 4 min
learningObjectives:
  - Comprendre comment les personas réduisent le focus de réponse de l'IA
  - Apprendre à sélectionner le bon persona pour différentes tâches
  - Appliquer les personas pour améliorer la qualité des prompts
---

## Le pouvoir des personas

Maintenant que vous comprenez ce qui se passe sous le capot, explorons notre première technique majeure pour améliorer les prompts : les personas.

### Qui répond à votre question ?

Considérez ce scénario : Vous avez besoin de conseils pour planifier un voyage au Japon. L'IA n'existe pas. Qui demanderiez-vous ?

Peut-être demanderiez-vous à un ami qui a voyagé au Japon plusieurs fois. Ou à un agent de voyage professionnel spécialisé dans les destinations asiatiques. Ou à quelqu'un qui a grandi au Japon et connaît intimement la culture. Ou à un blogueur de voyage à petit budget qui sait comment étirer chaque dollar.

Chacune de ces personnes vous donnerait des conseils différents en fonction de leur expertise, perspective et priorités. L'ami pourrait mettre l'accent sur les joyaux cachés qu'il a découverts. L'agent de voyage pourrait se concentrer sur la logistique et le timing. Le local pourrait vous orienter vers des expériences que les touristes manquent habituellement. Le blogueur budget pourrait partager des astuces pour économiser de l'argent.

Maintenant voici l'idée clé : **l'IA peut être n'importe laquelle de ces personnes. Ou aucune d'entre elles.**

Lorsque vous ne donnez aucun persona à l'IA, elle adopte par défaut un mode assistant générique et sans voix. Elle vous donne des informations qui auraient pu être écrites par n'importe qui, ce qui signifie qu'elles ont essentiellement été écrites par personne en particulier. La réponse n'a pas de personnalité, pas d'expertise, pas de point de vue.

Mais lorsque vous attribuez un persona, l'IA change tout son modèle de réponse pour correspondre à cette identité. Le vocabulaire change. Les priorités changent. Le style change. Les recommandations spécifiques changent.

### Appliquer un persona à notre exemple fil rouge

Faisons évoluer notre prompt Japon avec un persona :

```
Tu es un consultant de voyage expérimenté au Japon qui a aidé des centaines de visiteurs pour la première fois à planifier leurs voyages au cours des 15 dernières années. Tu connais le pays intimement, comprends les erreurs courantes que font les touristes, et possèdes des connaissances privilégiées sur les meilleures expériences.

Planifie-moi un voyage au Japon.
```

Même si nous n'avons pas encore ajouté beaucoup d'autres détails, ce prompt générera une réponse nettement différente. L'IA a maintenant une perspective à adopter. Elle partagera des conseils qui semblent venir de quelqu'un avec une expérience profonde et pratique plutôt que de quelqu'un lisant un résumé de Wikipedia.

Le résultat pourrait inclure des avertissements sur les pièges à touristes courants, des recommandations pour des expériences populaires auprès des locaux, et le genre de conseils pratiques qui ne viennent que d'une expérience réelle extensive.

### Comment les personas réduisent le focus de l'IA

Rappelez-vous notre discussion antérieure sur la probabilité ? Un persona réduit considérablement l'espace des réponses possibles.

Sans persona, l'IA pourrait répondre comme un conseiller prudent, un blogueur de voyage enthousiaste, un comptable pratique axé sur le budget, un expert culturel axé sur l'histoire, ou d'innombrables autres voix. Toutes ces options sont des complétions valides.

Avec un persona spécifique, vous éliminez la plupart de ces options. L'IA sait maintenant qu'elle doit compléter le modèle avec une voix qui correspond à l'identité assignée.

### Personas utiles courants

Voici quelques personas qui fonctionnent bien dans différentes situations :

**L'enseignant patient :** "Tu es un enseignant patient et encourageant expliquant ce concept à un débutant complet."

**L'expert expérimenté :** "Tu es un professionnel senior avec 20 ans d'expérience dans ce domaine."

**Le critique sceptique :** "Tu es un critique attentif qui identifie les faiblesses et les problèmes potentiels."

**Le guide enthousiaste :** "Tu es un guide enthousiaste qui rend les sujets complexes accessibles et passionnants."

**Le conseiller pratique :** "Tu es un conseiller pragmatique axé sur des recommandations réalisables et réalistes."

**L'avocat du diable :** "Tu es un avocat du diable qui remet en question les hypothèses et considère des points de vue alternatifs."

### Prompts système vs prompts utilisateur

Vous pourriez remarquer que certaines interfaces IA ont un champ séparé pour "prompts système" ou "instructions personnalisées". Ce sont des endroits où vous pouvez définir un persona persistant qui s'applique à chaque conversation.

Pour l'instant, ne vous inquiétez pas de la distinction technique. Les techniques que vous apprenez fonctionnent que vous incluiez le persona au début d'un prompt régulier ou dans un champ de prompt système dédié. L'important est que vous disiez à l'IA qui elle doit être.

### Exercice : Ajoutez un persona à votre prompt

Retournez au prompt que vous avez créé au chapitre 1. Maintenant ajoutez un persona pertinent au début.

Pensez à qui vous donnerait la meilleure réponse possible à votre question. Quel type d'expert, de conseiller ou d'assistant voudriez-vous ? Décrivez cette personne et posez-lui votre question.

Comparez cette réponse à votre original. Remarquez comment la voix, le focus et le contenu spécifique changent lorsque vous donnez à l'IA une identité claire à incarner.
