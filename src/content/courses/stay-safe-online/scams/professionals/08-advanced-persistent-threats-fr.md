---
title: Menaces persistantes avancées (APT)
duration: 10 min
learningObjectives:
  - Comprendre les tactiques et motivations des APT
  - Reconnaître les signes d'activité APT
  - Mettre en œuvre des capacités de détection et de réponse
---

# Menaces persistantes avancées (APT)

Les menaces persistantes avancées sont des attaquants sophistiqués et bien financés—souvent parrainés par des États—qui accèdent aux réseaux et restent indétectés pendant de longues périodes. Avec 1 entreprise sur 4 affectée et un temps médian d'exfiltration de 2 jours, les APT représentent la catégorie de menace la plus sophistiquée.

## L'ampleur du problème

**Statistiques 2024 :**
- **1 entreprise sur 4** affectée par une activité APT
- **43 % des incidents de haute gravité** attribués aux APT
- **Médiane de 2 jours** entre l'accès et l'exfiltration des données
- **Moyenne de plus de 200 jours** non détectés (amélioration grâce à une meilleure détection)
- **Salt Typhoon, Lazarus, APT41, APT29/28** groupes les plus actifs

## Caractéristiques des APT

**Ce qui les rend différents :**
- Bien financés et patients
- Malwares et outils personnalisés
- Techniques vivant sur le terrain
- Focus sur la furtivité plutôt que la vitesse
- Objectifs d'accès à long terme
- Souvent parrainés par des États

**Cibles communes :**
- Agences gouvernementales
- Entrepreneurs de la défense
- Infrastructures critiques
- Entreprises technologiques
- Services financiers
- Organisations de santé

## Cycle de vie de l'attaque

**1. Reconnaissance :** Recherche approfondie de la cible
**2. Compromission initiale :** Spearphishing, zero-days, chaîne d'approvisionnement
**3. Établir un pied-à-terre :** Installation de malware, mécanismes de persistance
**4. Escalade de privilèges :** Obtenir des droits admin/admin de domaine
**5. Reconnaissance interne :** Cartographier le réseau, identifier les données précieuses
**6. Mouvement latéral :** Se propager vers des systèmes supplémentaires
**7. Collecte de données :** Rassembler les informations cibles
**8. Exfiltration :** Retirer les données (souvent lentement pour éviter la détection)
**9. Maintenir l'accès :** Laisser des portes dérobées pour un accès futur

## Stratégies de détection

**Indicateurs comportementaux :**
- Modèles de trafic réseau inhabituels
- Accès hors horaire par des comptes privilégiés
- Gros transferts de données vers des destinations inhabituelles
- Utilisation de protocoles ou ports non communs
- Plusieurs tentatives de connexion échouées suivies de succès
- Accès à des systèmes hors du rôle normal

**Indicateurs techniques :**
- Utilisation suspecte de PowerShell
- Abus de WMI/tâches planifiées
- Outils Mimikatz ou de dumping d'identifiants
- Mouvement latéral via RDP/SSH
- Activité admin de domaine depuis des postes de travail
- Modifications des outils de sécurité

**Capacités de détection :**
- EDR (Endpoint Detection and Response)
- SIEM avec analyses avancées
- Analyse du trafic réseau
- Équipes de chasse aux menaces
- Détection d'anomalies comportementales
- Intégration de threat intelligence

## Réponse et atténuation

**Stratégies défensives :**
- Mentalité d'assumer la violation
- Segmentation du réseau
- Accès au moindre privilège
- MFA partout
- Chasse aux menaces régulière
- Plan de réponse aux incidents

**Si une APT est suspectée :**
- Ne pas alerter l'attaquant (il détruira les preuves)
- Engager une firme IR et les forces de l'ordre
- Enquête forensique
- Coordonner l'éradication sur tous les systèmes
- Reconstruire les systèmes compromis
- Réinitialiser tous les identifiants

## Points clés à retenir

- ✅ **1 entreprise sur 4** affectée par une activité APT
- ✅ **Attaquants patients et sophistiqués**
- ✅ **La détection nécessite** une analyse comportementale et la chasse aux menaces
- ✅ **Mentalité d'assumer la violation** essentielle
- ✅ **Réponse coordonnée** empêche la fuite de l'attaquant
- ✅ **Segmentation et moindre privilège** limitent l'impact
