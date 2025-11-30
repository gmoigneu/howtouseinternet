---
title: "Tout assembler"
duration: 6 min
learningObjectives:
  - Reconnaître qu'une pensée claire produit des prompts clairs
  - Apprendre à diagnostiquer les échecs de prompts de manière systématique
  - Construire des prompts efficaces en combinant toutes les techniques
---

## Tout assembler

Nous avons couvert les personas, le contexte, le formatage de sortie, les exemples few-shot et les techniques de raisonnement. Il est maintenant temps de comprendre comment ces pièces s'assemblent et pourquoi certaines personnes obtiennent systématiquement d'excellents résultats tandis que d'autres luttent.

### Une pensée claire produit des prompts clairs

Il y a un modèle parmi les personnes qui écrivent des prompts efficaces : elles savent ce qu'elles veulent avant de commencer à taper.

Cela semble évident, mais la plupart des échecs de prompts remontent à une pensée confuse. Lorsque vous demandez "de l'aide pour mon projet" ou "des idées pour ma présentation", vous demandez à l'IA de deviner ce dont vous avez réellement besoin. L'IA ne peut pas lire dans vos pensées. Elle ne peut travailler qu'avec ce que vous lui donnez.

Chaque technique que nous avons couverte est vraiment une façon différente de clarifier votre propre pensée :

- Choisir un **persona** signifie décider qui répondrait le mieux à votre question
- Fournir du **contexte** signifie identifier quels faits comptent réellement
- Spécifier le **format de sortie** signifie imaginer à quoi ressemble un résultat utile
- Créer des **exemples** signifie démontrer plutôt que décrire
- Utiliser des **étapes de raisonnement** signifie décomposer comment aborder le problème

Les techniques ne sont pas seulement des instructions pour l'IA. Elles sont un cadre pour organiser vos propres pensées.

### Diagnostiquer les échecs de prompts

Lorsqu'un prompt ne fonctionne pas, résistez à l'envie d'essayer immédiatement des variations aléatoires. Au lieu de cela, passez par une liste de vérification diagnostique :

**Ai-je expliqué ma situation ?** L'IA ne sait rien de vous à moins que vous ne le lui disiez. Votre titre de poste, votre date limite, votre public, vos contraintes, rien de tout cela n'est évident.

**Ai-je spécifié la perspective ?** Un conseiller financier, un ami sceptique et un vendeur enthousiaste répondraient tous différemment à la même question. Quelle perspective voulez-vous réellement ?

**Ai-je décrit une bonne réponse ?** Si vous ne pouvez pas imaginer à quoi ressemble le succès, l'IA non plus. Format, longueur, ton, structure, soyez explicite.

**Ai-je fourni assez de détails ?** Chaque détail manquant est un vide que l'IA comble avec des hypothèses. Ces hypothèses sont souvent fausses.

**Cela fonctionnerait-il pour un humain ?** Imaginez remettre votre prompt à un étranger capable sans aucun contexte sur votre situation. Pourrait-il vous donner une réponse utile ? Sinon, ajoutez ce qui manque.

La plupart du temps, travailler à travers ces questions révèle exactement ce qui s'est mal passé.

### La transformation complète

Voyons le parcours complet de notre premier chapitre à maintenant.

**Où nous avons commencé :**

```
Planifie-moi un voyage au Japon.
```

Ce prompt pourrait être répondu de milliers de façons. L'IA n'a aucune idée de qui vous êtes, de ce que vous aimez, de combien de temps vous restez ou de ce qui compte pour vous.

**Où nous sommes maintenant :**

```
Tu es un consultant de voyage expérimenté au Japon qui a aidé des centaines de visiteurs pour la première fois à planifier leurs voyages au cours des 15 dernières années. Tu connais le pays intimement, comprends les erreurs courantes que font les touristes, et possèdes des connaissances privilégiées sur les meilleures expériences.

Je planifie mon premier voyage au Japon avec les détails suivants :

Budget : 3000 $ pour tout sauf les vols (déjà réservés)
Durée : 2 semaines, arrivée le 5 avril, départ le 19 avril
Intérêts : Nourriture (spécialités locales et régionales), culture traditionnelle (temples, sanctuaires, jardins), photographie. PAS intéressé par la randonnée, la vie nocturne ou la culture anime/jeux vidéo.
Style de voyage : Rythme modéré. Préfère la profondeur à l'ampleur. Certaine structure avec de la place pour la spontanéité.
Considérations physiques : Peut marcher confortablement 8-10 km/jour. Problèmes mineurs de genou avec les escaliers raides.
Préférence d'hébergement : Hôtels de milieu de gamme ou ryokans traditionnels. Veux au moins une expérience de ryokan.

Avant de créer l'itinéraire, réfléchis à :
1. Optimisation de l'itinéraire : flux géographique le plus logique, minimisant les retours en arrière
2. Facteurs saisonniers : timing et lieux des cerisiers en fleurs pour le 5-19 avril
3. Considérations de rythme : bon nombre de régions compte tenu de mes contraintes
4. Équilibre des expériences : temples, nourriture, photographie à travers le voyage

Ensuite fournis un itinéraire jour par jour dans ce format :

| Date | Lieu | Matin | Après-midi | Soir | Coût est. |
|------|------|-------|------------|------|-----------|
| 5 avril | Tokyo (Asakusa) | Arrivée Narita, train vers Asakusa. Enregistrement au ryokan. | Explorer le temple Senso-ji. | Dîner au Sometaro (okonomiyaki). Marcher dans Nakamise la nuit. | 45 $ |

Suis ce niveau exact de spécificité : noms de restaurants réels lorsque possible, notes de réservation, attractions spécifiques plutôt que de vagues suggestions.

Après l'itinéraire, inclus :
1. Recommandations d'hébergement pour chaque lieu (avec prix)
2. Conseils de voyage spécifiques à avril
3. Une liste de bagages pour cet itinéraire

Si tu n'es pas sûr des horaires actuels, des prix ou des changements récents, dis s'il te plaît "vérifier les [X] actuels" plutôt que de deviner.
```

Chaque technique apparaît dans ce prompt : un persona défini, un contexte riche sur le voyageur, des exigences de formatage explicites, un exemple concret de la sortie désirée et des étapes de raisonnement structurées. L'IA a maintenant tout ce dont elle a besoin pour produire une réponse vraiment utile.

### Construire sur ce qui fonctionne

Au fur et à mesure que vous développez des prompts qui fonctionnent bien, sauvegardez-les. Gardez une collection de :

- Modèles pour les tâches que vous faites régulièrement
- Descriptions de personas que vous vous retrouvez à réutiliser
- Formats de sortie qui correspondent à vos besoins
- Exemples qui démontrent vos préférences

Lorsque vous faites face à une tâche similaire, commencez à partir de votre collection plutôt que de zéro. Modifiez ce qui fonctionne déjà plutôt que de réinventer à chaque fois.

Au fil du temps, vous remarquerez des modèles. Certaines structures fonctionnent bien pour certains types de demandes. Certaines formulations produisent systématiquement de meilleurs résultats. Votre bibliothèque personnelle de prompts devient de plus en plus précieuse.

### Au-delà du prompting

Les compétences que vous avez développées dans ce cours s'étendent bien au-delà des interactions avec l'IA.

Lorsque vous apprenez à spécifier clairement le contexte, vous devenez meilleur pour briefer des collègues. Lorsque vous pratiquez la définition de ce à quoi ressemble le succès, vous devenez meilleur pour définir les attentes. Lorsque vous décomposez les demandes complexes en étapes, vous devenez un communicateur plus clair en général.

Chaque fois que vous écrivez un bon prompt, vous pratiquez la discipline de la communication précise. Cette discipline se transfère aux emails, réunions, spécifications de projet et toute situation où vous devez transmettre ce que vous voulez réellement.

### Exercice final

Retournez au prompt que vous avez créé au chapitre 1. Réécrivez-le à partir de zéro en utilisant tout ce que vous avez appris :

1. Ajoutez un persona pertinent
2. Incluez tout le contexte qui compte
3. Spécifiez exactement comment vous voulez que la sortie soit formatée
4. Fournissez un exemple si cela aide
5. Demandez des étapes de raisonnement si le problème est complexe

Comparez votre nouveau prompt et sa réponse à votre tentative originale. La différence démontre ce que vous avez appris.

Vous avez maintenant une méthode fiable pour obtenir des résultats utiles de l'IA. Les techniques sont simples, mais les appliquer de manière cohérente demande de la pratique. Plus vous les utilisez, plus elles deviennent naturelles.

---

## Sources et apprentissage continu

Pour continuer à développer vos compétences en prompting, explorez ces ressources officielles :

**Documentation officielle d'IA :**
- [Guide de prompt engineering d'OpenAI](https://platform.openai.com/docs/guides/prompt-engineering)
- [Documentation de prompt engineering d'Anthropic](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering)
- [Guide de prompting de Google AI](https://ai.google.dev/gemini-api/docs/prompting-intro)

Les principes de ce cours s'appliquent à tous les assistants IA. Au fur et à mesure que la technologie évolue, une communication claire reste la base d'une utilisation efficace.
