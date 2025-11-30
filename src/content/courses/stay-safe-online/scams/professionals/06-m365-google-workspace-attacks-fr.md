---
title: Attaques Microsoft 365 / Google Workspace
duration: 10 min
learningObjectives:
  - Comprendre les menaces spécifiques aux plateformes cloud
  - Reconnaître les tactiques de phishing M365 et Google Workspace
  - Mettre en œuvre des contrôles de sécurité cloud et la surveillance
---

# Attaques Microsoft 365 / Google Workspace

Les plateformes de productivité cloud—Microsoft 365 et Google Workspace—sont des infrastructures critiques pour les entreprises modernes et des cibles privilégiées pour les attaquants. Avec 35 % du phishing usurpant Microsoft et 71,4 % des utilisateurs M365 subissant des compromissions de compte mensuelles, sécuriser ces plateformes est essentiel.

## L'ampleur du problème

**Statistiques 2024 :**
- **35 % de tout le phishing** usurpe Microsoft
- **71,4 % des utilisateurs M365** ont un compte compromis mensuellement
- **Augmentation de 10x** des attaques par mot de passe (30 milliards/mois)
- **Augmentation de 42x** du phishing par QR code ciblant M365
- **12,5 milliards de dollars** perdus à cause des attaques liées à M365
- **Google Workspace :** 15 milliards d'emails de phishing bloqués quotidiennement

## Vecteurs d'attaque courants

**Phishing Microsoft 365 :**
- Fausses pages de connexion Microsoft
- Emails "Votre compte sera suspendu"
- Notifications de partage de fichiers SharePoint
- Demandes de fichiers OneDrive
- Invitations à des réunions Teams de la part d'inconnus
- Phishing de consentement d'application OAuth

**Phishing Google Workspace :**
- Fausses notifications de partage Google Drive
- Arnaques aux alertes de sécurité Gmail
- Spam d'événements de calendrier
- Demandes de permission OAuth
- Attaques par commentaires Google Docs

**Phishing par QR code :**
- Les QR codes contournent les filtres email
- Mène vers des sites de vol d'identifiants
- Augmentation de 42x ciblant les dirigeants
- Apparaît dans les emails, PDF, invitations de calendrier

## Stratégies de protection

**Sécurité de l'authentification :**
- MFA résistant au phishing (clés FIDO2, Windows Hello)
- Désactiver les protocoles d'authentification hérités
- Politiques d'accès conditionnel
- Authentification sans mot de passe quand possible

**Sécurité des emails :**
- Protection avancée contre les menaces activée
- Liens sûrs et pièces jointes sûres
- Politiques anti-phishing configurées
- Avertissements d'expéditeur externe
- Protection contre l'usurpation d'identité

**Contrôles d'accès :**
- Accès conditionnel basé sur l'emplacement, l'appareil, le risque
- Bloquer les protocoles hérités (SMTP, POP, IMAP)
- Exiger des appareils gérés/conformes
- Accès administrateur juste-à-temps

**Surveillance et alertes :**
- Journaux de connexion examinés régulièrement
- Alertes d'activité inhabituelle
- Détection de voyage impossible
- Audit des applications OAuth
- Politiques de prévention de perte de données

## Points clés à retenir

- ✅ **35 % du phishing** cible les utilisateurs Microsoft
- ✅ **MFA résistant au phishing** requis pour tous les comptes
- ✅ **Accès conditionnel** limite l'accès basé sur le risque
- ✅ **Surveiller les applications OAuth** pour les permissions suspectes
- ✅ **Le phishing par QR code** contourne les filtres traditionnels
- ✅ **Audits réguliers** des paramètres de sécurité cloud
