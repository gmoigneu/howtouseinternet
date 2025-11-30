---
title: "Apprendre par l'exemple (few-shot prompting)"
duration: 5 min
learningObjectives:
  - Comprendre la différence entre le prompting zero-shot et few-shot
  - Apprendre pourquoi montrer des exemples est plus puissant que décrire
  - Appliquer les techniques few-shot pour obtenir des sorties formatées avec précision
---

## Apprendre par l'exemple (few-shot prompting)

Jusqu'à présent, nous avons dit à l'IA ce que nous voulons à travers des descriptions et des instructions. Explorons maintenant une technique encore plus puissante : montrer à l'IA ce que nous voulons à travers des exemples.

Cette approche s'appelle "few-shot prompting" parce que vous fournissez quelques exemples (shots) qui démontrent le modèle que vous voulez que l'IA suive.

### Zero-shot vs few-shot

Tout ce que nous avons fait jusqu'à maintenant a été du prompting "zero-shot", où nous fournissons des instructions sans exemples. Cela fonctionne bien pour les demandes simples, surtout lorsqu'elles sont combinées avec de bons personas, contexte et instructions de formatage.

Mais parfois, montrer est plus puissant que dire.

Lorsque vous fournissez des exemples de la sortie que vous voulez, l'IA n'a pas besoin d'interpréter vos instructions. Elle peut voir exactement ce que vous voulez dire. Le modèle est démontré, pas seulement décrit.

### Pourquoi montrer est plus puissant que dire

Considérez essayer d'expliquer un style d'écriture particulier :

```
Écris dans un ton décontracté mais informatif, utilisant de l'humour occasionnel et une adresse directe, avec des paragraphes courts et des phrases percutantes.
```

Cela donne à l'IA quelque chose sur quoi travailler, mais il y a encore de la place pour l'interprétation. Que signifie exactement "humour occasionnel" ? Quelle est la brièveté des paragraphes ? Qu'est-ce qui rend une phrase "percutante" ?

Maintenant considérez montrer un exemple :

```
Écris dans ce style :

"Voici le problème avec les mots de passe : nous savons tous qu'ils devraient être forts, uniques et impossibles à retenir. Super. Merci. Très utile.

Mais il y a en fait une solution à ce désordre. Ça s'appelle un gestionnaire de mots de passe, et une fois que vous commencez à en utiliser un, vous vous demanderez pourquoi vous avez jamais essayé de vous souvenir de 47 variations du nom de votre chien."

Maintenant écris sur l'authentification à deux facteurs dans le même style.
```

L'IA peut maintenant correspondre au ton, à la structure, à la longueur des phrases et au style d'humour exactement parce qu'elle a un exemple concret à suivre.

### Que montrer dans vos exemples

Vos exemples peuvent démontrer n'importe quel aspect de la réponse qui vous importe :

**Ton :** À quel point l'écriture doit être formelle, décontractée ou enthousiaste

**Structure :** Comment l'information doit être organisée et présentée

**Niveau de détail :** Combien d'explication inclure pour chaque point

**Vocabulaire :** Quel type de mots et terminologie utiliser

**Longueur :** Combien de temps chaque section ou élément devrait être

**Perspective :** De quel point de vue écrire

### Faire évoluer notre exemple fil rouge

Ajoutons un exemple few-shot à notre prompt Japon. Nous allons montrer à l'IA exactement ce que nous voulons qu'un jour de l'itinéraire ressemble :

```
Tu es un consultant de voyage expérimenté au Japon qui a aidé des centaines de visiteurs pour la première fois à planifier leurs voyages au cours des 15 dernières années.

Je planifie mon premier voyage au Japon avec les détails suivants :
[Tout notre contexte du chapitre 4]

Voici un exemple de exactement comment je veux que chaque jour soit formaté :

| Date | Lieu | Matin | Après-midi | Soir | Coût est. |
|------|------|-------|------------|------|-----------|
| 5 avril | Tokyo (Asakusa) | Arrivée Narita, train vers Asakusa. Enregistrement au ryokan. | Explorer le temple Senso-ji. | Dîner au Sometaro (okonomiyaki, réserver à l'avance). Marcher dans Nakamise la nuit. | 45 $ |

Pour les hébergements, formate comme ceci :
- Tokyo (5-8 avril) : Sadachiyo Sukeroku no Yado - Ryokan traditionnel à Asakusa, 150 $/nuit. Parfait pour les premières nuits au Japon, petit-déjeuner inclus.

Complète s'il te plaît les jours restants en suivant ce format et style exact. Note le niveau de spécificité : noms de restaurants réels lorsque possible, notes de réservation, attractions spécifiques plutôt que de vagues suggestions "explorer la ville".
```

Maintenant l'IA a un modèle cristallin à suivre. Chaque jour correspondra au format de votre exemple. Le niveau de détail, la structure, même les notes entre parenthèses seront cohérents.

### Quand le few-shot est essentiel

Certaines situations nécessitent presque le prompting few-shot :

**Correspondre à une voix de marque :** Si vous avez besoin de contenu qui sonne comme les matériaux existants de votre entreprise, montrez des exemples de cette voix.

**Formats inhabituels :** Si vous avez besoin d'une structure non conventionnelle, montrez à quoi elle ressemble.

**Formats techniques spécifiques :** Si vous avez besoin de code, de données ou de sortie structurée dans un style particulier, montrez ce style.

**Normes de qualité subjectives :** Si "bon" est difficile à définir dans votre contexte, montrez des exemples de ce à quoi "bon" ressemble pour vous.

### Construire votre propre bibliothèque de prompts

Au fur et à mesure que vous développez des prompts qui fonctionnent bien, sauvegardez-les. Construisez une bibliothèque personnelle de prompts et exemples efficaces que vous pouvez réutiliser et adapter.

Incluez :
- Le texte complet du prompt
- Pourquoi il fonctionne bien
- Pour quel contexte il a été conçu
- Exemples de bonnes sorties qu'il a produites

Cette bibliothèque devient de plus en plus précieuse au fil du temps. Au lieu de créer chaque prompt à partir de zéro, vous adaptez des modèles éprouvés.

### Exercice : Créez un exemple de sortie

Pour votre prompt en évolution, créez un exemple de exactement ce que vous voulez que la sortie ressemble.

Écrivez une instance complète : si vous voulez une liste, écrivez un élément idéal. Si vous voulez une analyse, écrivez un paragraphe exactement comme vous le voudriez. Si vous voulez du code, écrivez un échantillon dans le style exact que vous préférez.

Ajoutez cet exemple à votre prompt avec une note comme "Suis ce style exact et ce niveau de détail."

Comparez les résultats à vos tentatives précédentes. Remarquez avec quelle précision l'IA correspond à votre modèle démontré.
