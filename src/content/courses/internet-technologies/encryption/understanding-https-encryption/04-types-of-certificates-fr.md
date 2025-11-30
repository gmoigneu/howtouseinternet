---
title: "Types de certificats et quoi vérifier"
duration: 4 min
learningObjectives:
  - Connaître la différence entre les certificats DV, OV et EV
  - Comprendre quel niveau de vérification chaque type fournit
  - Reconnaître les signes d'alerte de certificats invalides
  - Savoir quoi vérifier avant de faire confiance à un site web
---

## Types de certificats et quoi vérifier

Tous les certificats TLS ne se valent pas. Ils se déclinent en trois types principaux, chacun nécessitant différents niveaux de vérification avant d'être émis.

### Certificats à validation de domaine (DV)

Les certificats à validation de domaine sont le type le plus simple et le plus courant. La CA vérifie uniquement que vous contrôlez le nom de domaine. Pas de vérification d'identité, pas de vérification d'entreprise.

**Comment fonctionne la vérification :**
La CA envoie un défi (comme un e-mail à admin@votredomaine.com ou un fichier spécial à placer sur votre site web). Si vous le complétez, vous obtenez le certificat.

**Ce qu'il prouve :**
Quelqu'un qui contrôle ce domaine a demandé un certificat. C'est tout.

**Utilisations courantes :**
- Sites web personnels et blogs
- Sites de petites entreprises
- Tout site nécessitant un chiffrement de base

**Coût :**
Souvent gratuit (Let's Encrypt) ou très peu coûteux.

Les certificats DV sont parfaitement adaptés pour la plupart des sites web. Ils chiffrent votre connexion aussi fortement que n'importe quel autre certificat. La différence réside uniquement dans la quantité d'informations que la CA a vérifiée sur le demandeur du certificat.

### Certificats à validation d'organisation (OV)

Les certificats à validation d'organisation nécessitent plus de vérification. La CA vérifie que votre organisation existe réellement avant d'émettre le certificat.

**Comment fonctionne la vérification :**
La CA vérifie :
- La propriété du domaine
- Le nom de l'organisation et son existence légale
- L'adresse physique
- Le numéro de téléphone

Cela implique généralement de vérifier les bases de données gouvernementales et de passer des appels téléphoniques.

**Ce qu'il prouve :**
Une organisation vérifiée contrôle ce site web.

**Utilisations courantes :**
- Sites web d'entreprises
- Sites gouvernementaux
- Organisations souhaitant afficher une identité vérifiée

**Coût :**
Modéré (généralement 50-200 $ par an).

Lorsque vous consultez un certificat OV, vous pouvez voir le nom de l'organisation dans les détails du certificat.

### Certificats à validation étendue (EV)

Les certificats à validation étendue nécessitent le processus de vérification le plus rigoureux.

**Comment fonctionne la vérification :**
La CA effectue des vérifications approfondies incluant :
- Toutes les exigences OV
- L'existence légale, opérationnelle et physique de l'organisation
- L'identité de personnes spécifiques demandant le certificat
- La vérification que le demandeur est autorisé par l'organisation
- La vérification en face-à-face ou par vidéo dans certains cas

Ce processus peut prendre des jours ou des semaines.

**Ce qu'il prouve :**
Une organisation minutieusement vérifiée contrôle ce site web, et des personnes autorisées spécifiques ont demandé le certificat.

**Utilisations courantes :**
- Banques et institutions financières
- Grands sites de commerce électronique
- Organisations de santé
- Tout site traitant des données hautement sensibles

**Coût :**
Plus élevé (généralement 100-500 $ ou plus par an).

Les navigateurs affichaient auparavant les certificats EV avec une barre d'adresse verte et le nom de l'entreprise. La plupart des navigateurs ne le font plus, mais vous pouvez toujours voir le nom de l'organisation en consultant les détails du certificat.

### Comparaison des types de certificats

| Caractéristique | DV | OV | EV |
|---------|-----|-----|-----|
| Chiffre les données | Oui | Oui | Oui |
| Vérifie le contrôle du domaine | Oui | Oui | Oui |
| Vérifie l'existence de l'organisation | Non | Oui | Oui |
| Vérification légale approfondie | Non | Non | Oui |
| Délai d'émission | Minutes | Jours | Jours à semaines |
| Coût typique | Gratuit-50 $ | 50-200 $ | 100-500 $ ou plus |

### Ce qu'il faut vérifier en tant qu'utilisateur

Voici les conseils pratiques pour rester en sécurité :

**Vérifiez toujours la présence de HTTPS**

Avant d'entrer des informations sensibles, confirmez que vous voyez « https:// » au début de l'adresse. Recherchez l'icône de cadenas.

**Vérifiez que vous êtes sur le bon domaine**

L'attaque la plus courante n'est pas de casser le chiffrement. C'est de vous tromper pour que vous visitiez le mauvais site web. Vérifiez toujours attentivement le nom de domaine :
- yourbank.com (correct)
- your-bank.com (suspect)
- yourbank.secure-login.com (faux : vous êtes sur secure-login.com)

**Surveillez les avertissements de certificat**

Si votre navigateur affiche un avertissement de certificat, arrêtez-vous. Ne continuez pas à moins de comprendre complètement pourquoi l'avertissement est apparu. Les avertissements courants incluent :

- « Votre connexion n'est pas privée »
- « Le certificat de sécurité de ce site n'est pas approuvé »
- « Le certificat de sécurité a expiré »

**Connaissez la différence entre cadenas et confiance**

Un cadenas signifie que votre connexion est chiffrée. Il ne signifie pas que le site web est légitime. Les sites frauduleux peuvent aussi avoir des certificats valides. Vérifiez toujours que vous êtes sur le site web que vous aviez l'intention de visiter.

### Résumé : votre liste de vérification HTTPS

Avant d'entrer des mots de passe, des informations de paiement ou des données personnelles :

1. Confirmez que l'adresse commence par https://
2. Recherchez l'icône de cadenas
3. Vérifiez à nouveau que vous êtes sur le bon domaine
4. N'ignorez jamais les avertissements de certificat
5. Rappelez-vous : HTTPS signifie connexion sécurisée, pas site web digne de confiance

Comprendre HTTPS et les certificats vous donne une compétence cruciale pour naviguer sur internet en toute sécurité. Vous savez maintenant ce qui se passe en coulisses lorsque vous voyez cette icône de cadenas, et plus important encore, vous savez quoi vérifier avant de confier vos informations à un site web.
