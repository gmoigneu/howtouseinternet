---
title: Fraude au président et attaques de whaling
duration: 10 min
learningObjectives:
  - Reconnaître les tactiques sophistiquées d'usurpation d'identité de dirigeants incluant les deepfakes
  - Comprendre pourquoi les dirigeants sont des cibles privilégiées
  - Mettre en œuvre des procédures de vérification pour les demandes à haut risque
---

# Fraude au président et attaques de whaling

Le "whaling" cible les individus à haute valeur—PDG, directeurs financiers et dirigeants—avec de l'ingénierie sociale sophistiquée. Ces attaques combinent l'usurpation d'identité de dirigeants avec l'urgence et l'autorité pour contourner les contrôles normaux, entraînant des pertes financières massives.

## L'ampleur du problème

**Statistiques 2024 :**
- **Augmentation de 442 %** des attaques de vishing (phishing vocal) sur les dirigeants
- **Augmentation de 42x** du phishing par QR code ciblant les dirigeants
- **2,9 milliards de dollars** perdus à cause de la fraude au président dans le monde
- **125 000 dollars** de perte moyenne par attaque de whaling réussie
- **Clonage vocal :** 3 secondes d'audio = précision de correspondance de 85 %
- **Appels vidéo deepfake** utilisés dans plusieurs fraudes de plus de 20 millions de dollars

## Comment fonctionne la fraude au président

### **Fraude classique par email du PDG :**

1. **Phase de recherche :** Les escrocs recherchent la hiérarchie de l'entreprise, les relations, les modèles de communication
2. **Usurpation d'identité :** Email depuis un compte PDG usurpé ou compromis
3. **Urgence :** "En réunion, besoin d'un virement urgent"
4. **Autorité :** Exploite la position du PDG pour contourner la vérification
5. **Confidentialité :** "N'en discutez avec personne, affaire confidentielle"
6. **Résultat :** L'employé envoie l'argent sans vérification

### **Techniques avancées (2024) :**

**Clonage vocal :**
- L'IA clone la voix d'un dirigeant à partir de 3 secondes d'audio (conférences téléphoniques, vidéos, messages vocaux)
- L'escroc appelle l'équipe financière en tant que "PDG" demandant un virement urgent
- Précision de 85 %+ rend la détection presque impossible

**Appels vidéo deepfake :**
- Vidéo deepfake en temps réel usurpant l'identité de dirigeants
- Utilisé dans la fraude Arup de 25 millions de dollars (Hong Kong, 2024)
- Le directeur financier pensait être en appel vidéo avec le PDG et d'autres dirigeants
- Tous étaient des deepfakes générés par IA

**Phishing par QR code :**
- Les QR codes contournent les filtres email
- Augmentation de 42x ciblant les dirigeants
- Liens vers des sites de vol d'identifiants

## Études de cas réels

### **Cas 1 : Deepfake Arup Engineering (25-39 millions de dollars, 2024)**

**Ce qui s'est passé :**
- Un employé des finances de la filiale de Hong Kong a reçu une demande de réunion
- Appel vidéo avec le "directeur financier" et d'autres "dirigeants"
- Tous les participants étaient des deepfakes générés par IA
- A autorisé 15 transactions totalisant 25 à 39 millions de dollars
- Découvert seulement lors du contact avec le vrai directeur financier plus tard

**Signaux d'alerte manqués :**
- Urgence inhabituelle pour de gros transferts
- Pas de vérification en personne pour des montants massifs
- N'a pas vérifié par un canal séparé

### **Cas 2 : Attaque par clonage vocal Retool (2024)**

**Ce qui s'est passé :**
- Un employé IT a reçu un appel du "responsable IT"
- La voix correspondait parfaitement au vrai responsable
- A demandé les identifiants pour un "problème système urgent"
- L'employé s'est conformé, compromettant plusieurs systèmes

**Comment ça a été arrêté :**
- L'équipe de sécurité a remarqué une activité inhabituelle
- Le vrai responsable était en voyage (ne pouvait pas avoir appelé)
- La réponse rapide a limité les dégâts

## Signaux d'alerte dans les attaques de whaling

🚩 **Signaux d'alerte de communication :**
- Urgence inhabituelle ("besoin de cela en 1 heure")
- Exigences de confidentialité ("ne le dites à personne")
- Demandes en dehors du processus normal
- Envoyé en dehors des heures ou lorsque le dirigeant voyage
- Grammaire/ton ne correspond pas au style habituel du dirigeant

🚩 **Signaux d'alerte de demande :**
- Gros virements sans approbation standard
- Changements des informations de paiement des fournisseurs
- Demandes d'identifiants ou d'accès
- Contournement des procédures d'approvisionnement normales
- "Faites-moi confiance" plutôt que suivre le protocole

🚩 **Signaux d'alerte techniques :**
- Email depuis un domaine externe (CEO@gmail.com au lieu du domaine de l'entreprise)
- Le nom d'affichage correspond mais pas l'adresse email
- Adresse de réponse différente de l'expéditeur
- Pas de fil d'email précédent (commence une nouvelle conversation)

## Procédures de vérification

### **Pour toutes les demandes à haut risque :**

**La règle de vérification hors bande :**
- **Jamais** répondre à un email/message suspect
- **Toujours** vérifier par un canal de communication séparé
- Appeler un numéro de téléphone connu (pas celui fourni dans le message)
- Se rendre au bureau du dirigeant si possible
- Utiliser le chat interne de l'entreprise (vérifier qu'il n'est pas compromis)

**Approbation multi-personnes :**
- Aucune personne seule n'autorise de gros transferts
- Mettre en place un système de double approbation
- Exiger des signatures physiques pour les montants au-dessus du seuil
- Utiliser des systèmes d'approbation numériques avec 2FA

**Questions défi :**
- Établir des questions de vérification personnelles que seul le vrai dirigeant connaît
- "De quoi avons-nous discuté lors de la réunion de lundi ?"
- "Quel est le nom de code du projet dont nous avons discuté hier ?"
- Changer les questions régulièrement

### **Pour les appels vocaux/vidéo :**

**Vérification d'appel vocal :**
- Poser des questions personnelles que seule la vraie personne connaît
- Demander un rappel sur un numéro connu
- Utiliser des mots de code défi-réponse
- Vérifier par un canal séparé
- Écouter les modèles de parole non naturels ou les délais

**Vérification d'appel vidéo :**
- Demander à la personne de tourner la tête, sourire, faire des gestes spécifiques
- Demander qu'elle tienne un objet avec la date d'aujourd'hui
- Poser des questions inattendues
- Passer à une vérification en personne ou par téléphone pour les grandes sommes
- Utiliser une vérification multi-personnes

### **Pour les virements bancaires :**

**Procédures obligatoires :**
- Vérification par rappel sur un numéro de téléphone connu
- Double approbation requise
- Période d'attente (24 heures) pour les demandes inhabituelles
- Vérification face à face pour les montants supérieurs à 50 000 dollars
- Ne jamais contourner les procédures, même pour le PDG

## Stratégies de protection

### **Contrôles techniques :**

1. **Authentification des emails :**
   - SPF, DKIM, DMARC configurés
   - Afficher les avertissements d'expéditeur externe
   - Signaler les emails de domaines similaires au domaine de l'entreprise

2. **Surveillance des domaines :**
   - Surveiller les domaines de typosquatting (votreentreprisee.com)
   - Enregistrer les fautes d'orthographe courantes
   - Alerter sur les nouveaux domaines similaires

3. **Protection des comptes de dirigeants :**
   - MFA résistant au phishing (clés FIDO2, pas SMS)
   - Changements réguliers de mot de passe
   - Surveiller les identifiants compromis
   - Limiter les informations publiques sur les dirigeants

4. **Contrôles de virement :**
   - Vérification par rappel requise
   - Système de double approbation
   - Séparation des tâches
   - Limites quotidiennes/par transaction

### **Politique et formation :**

1. **Politiques claires :**
   - Procédures écrites pour les virements
   - Pas d'exceptions pour personne, y compris le PDG
   - Vérification requise même si "confidentiel"
   - Employés habilités à vérifier

2. **Formation régulière :**
   - Exemples spécifiques de whaling
   - Pratique des procédures de vérification
   - Attaques simulées
   - Mise à jour sur les nouvelles techniques (deepfakes, clonage vocal)

3. **Adhésion des dirigeants :**
   - Les dirigeants doivent aussi suivre les procédures
   - Soutien public pour la culture de vérification
   - Féliciter les employés qui vérifient, ne jamais punir

4. **Mots de code :**
   - Établir des codes de vérification de type familial
   - "Si je n'utilise pas le mot de code, ne faites pas confiance"
   - Changer périodiquement

## Points clés à retenir

- ✅ **Augmentation de 442 %** des attaques de vishing ciblant les dirigeants
- ✅ **Le clonage vocal** ne nécessite que 3 secondes d'audio
- ✅ **Les deepfakes** utilisés dans plusieurs fraudes de plus de 20 millions de dollars
- ✅ **La vérification hors bande** est obligatoire pour les demandes à haut risque
- ✅ **Pas d'exceptions** - même le PDG doit suivre les procédures de vérification
- ✅ **Les questions défi** aident à vérifier l'identité lors des appels
- ✅ **Contrôles techniques :** Authentification des emails, MFA, surveillance
- ✅ **La culture compte :** Habiliter les employés à vérifier, ne jamais punir la prudence

**Rappelez-vous :** Les dirigeants légitimes comprendront et apprécieront toujours les procédures de vérification. Si quelqu'un prétendant être un dirigeant se fâche lorsque vous vérifiez, c'est un signal d'alerte massif. Construisez une culture où la vérification est attendue, pas questionnée.
