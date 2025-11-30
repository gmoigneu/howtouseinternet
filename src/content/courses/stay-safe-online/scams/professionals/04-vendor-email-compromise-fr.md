---
title: Compromission de fournisseur (VEC)
duration: 10 min
learningObjectives:
  - Comprendre les vecteurs d'attaque VEC et les vulnérabilités de la chaîne d'approvisionnement
  - Reconnaître les communications de fournisseurs compromises
  - Mettre en œuvre des procédures de vérification de la sécurité des fournisseurs
---

# Compromission de fournisseur (VEC)

Les attaques de compromission de fournisseur ciblent la chaîne d'approvisionnement en compromettant les comptes email de fournisseurs pour intercepter des paiements, voler des données ou accéder aux systèmes clients. Avec 69 % des entreprises ciblées et une augmentation de 137 % dans les services financiers, le VEC représente un vecteur de menace croissant.

## L'ampleur du problème

**Statistiques 2024 :**
- **69 % des entreprises** ciblées par le VEC
- **Augmentation de 137 %** dans le secteur des services financiers
- **Augmentation de 78 %** des attaques de la chaîne d'approvisionnement dans l'ensemble
- **Augmentation de 66 %** au S1 2024 seulement
- **2,4 milliards de dollars** perdus à cause des attaques VEC
- **Moyenne de 3 mois** avant détection

## Comment fonctionne le VEC

Les attaquants compromettent l'email du fournisseur par phishing, vol d'identifiants ou malware. Ils surveillent ensuite les communications pour comprendre les relations, les calendriers de paiement et les procédures avant de frapper.

**Progression de l'attaque :**
1. Compromettre le compte email du fournisseur
2. Surveiller les communications clients (semaines/mois)
3. Apprendre les processus et le timing de paiement
4. Intercepter la facture ou en envoyer une fausse
5. Le client paie l'escroc au lieu du fournisseur
6. Déplacer l'argent rapidement avant la découverte

## Scénarios VEC courants

**Interception de facture :** L'escroc modifie une vraie facture en transit
**Détournement de paiement :** "Notre compte bancaire a changé" depuis un fournisseur compromis
**Vol de données :** Accès aux contrats clients, tarifs, stratégies
**Mouvement latéral :** Utiliser la confiance du fournisseur pour attaquer les clients
**Empoisonnement de la chaîne d'approvisionnement :** Injecter des malwares dans les mises à jour logicielles

## Signaux d'alerte

🚩 Changements inattendus de méthode de paiement
🚩 Demandes urgentes du fournisseur
🚩 Style ou ton d'email différent
🚩 Demandes contournant le processus normal
🚩 Nouvelle personne de contact sans introduction
🚩 Pression pour agir rapidement

## Procédures de vérification

**Pour les changements de paiement des fournisseurs :**
- Appeler un contact connu (pas le numéro dans l'email)
- Exiger une documentation formelle
- Tester d'abord un petit paiement
- Vérifier avec plusieurs contacts du fournisseur

**Pour les emails suspects de fournisseurs :**
- Vérifier les en-têtes d'email
- Vérifier par un canal alternatif
- Examiner les communications récentes du fournisseur
- Confirmer avec votre gestionnaire de compte

## Stratégies de protection

**Exigences de sécurité des fournisseurs :**
- MFA requis pour tous les fournisseurs
- Évaluations de sécurité annuelles
- Clauses de notification d'incident
- Révisions d'accès régulières

**Contrôles techniques :**
- Authentification des emails (SPF/DKIM/DMARC)
- Avertissements d'expéditeur externe
- Systèmes de vérification des paiements
- Portail fournisseur pour la soumission de factures

**Gestion des fournisseurs :**
- Base de données centralisée des fournisseurs
- Vérification régulière des informations
- Procédures formelles de changement
- Segmentation des fournisseurs basée sur le risque

## Points clés à retenir

- ✅ **69 % des entreprises** ciblées par les attaques VEC
- ✅ **Vérifier tous les changements de paiement des fournisseurs** via des contacts connus
- ✅ **Surveiller les relations avec les fournisseurs** pour les communications suspectes
- ✅ **Exiger des normes de sécurité des fournisseurs** dans les contrats
- ✅ **Utiliser des portails sécurisés** pour les communications sensibles
- ✅ **Audits réguliers des fournisseurs** préviennent la compromission
