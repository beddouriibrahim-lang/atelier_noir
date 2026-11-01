# ATELIER NOIR — site vitrine de démonstration (barber studio)

Site **entièrement fictif** destiné à servir de portfolio et de démonstration commerciale. Aucune entreprise réelle, aucun témoignage client et aucune disponibilité ne sont représentés. Les prix affichés sont illustratifs.

## Démarrer sur son ordinateur

1. Décompresser le fichier ZIP.
2. Ouvrir `index.html` avec Chrome, Edge ou Firefox.
3. Naviguer, tester le menu mobile et le formulaire de demande de réservation.

Aucun npm, React, backend, abonnement ou serveur n'est requis.

## Personnaliser pour un vrai client

1. **script.js** : modifier l'objet `BUSINESS` en haut du fichier : `whatsappNumber` (format `2126XXXXXXXX` sans `+`), `phoneDisplay`, `address`, `hours`, `instagramUrl`, `instagramLabel`.
2. **index.html** : remplacer "ATELIER NOIR" (nom fictif), les textes, la ville, les prix dans les cartes, les coordonnées/nom dans le titre SEO et la présentation. Le nom dans `script.js` doit aussi être mis à jour.
3. **assets/** : remplacer les illustrations de démo par les **vraies photos du salon**, avec son accord. Dans `index.html`, remplacer les `src` de la galerie. Pour la grande image d'accueil, choisir une photo détenue/licenciée et adapter le CSS `.hero-photo` et le JS `heroPhotoUrl` (ou enlever le script de chargement et afficher la photo locale via CSS).
4. **Tarifs / horaires / informations** : toujours valider avec le propriétaire avant publication. Retirer le bandeau « SITE DÉMO » et la mention de marque fictive uniquement une fois le site réellement personnalisé.
5. **Réservation** : ce formulaire prépare une **demande** à envoyer sur WhatsApp, **sans confirmation automatique** ni calendrier disponible. Ajouter un vrai logiciel de réservation si le client veut une réservation automatique.
6. Vérifier l'affichage sur téléphone et ordinateur, les liens, les performances et l'accord du client avant mise en ligne.

## Mettre en ligne sur Netlify (sans programmation)

1. Aller sur https://app.netlify.com/drop
2. Déposer le **dossier** contenant `index.html`, `styles.css`, `script.js` et `assets/` (pas seulement le fichier HTML).
3. Utiliser l'URL `*.netlify.app` obtenue pour partager la démo. Puis proposer un nom de domaine personnalisé si le client l'achète.

Documentation officielle : https://docs.netlify.com/deploy/create-deploys/

## Fichiers

- `index.html` — sections et contenu
- `styles.css` — design adaptatif desktop/mobile
- `script.js` — interactions et WhatsApp
- `assets/*.svg` — illustrations originales (créées pour cette démo)

## Remarques

- Les polices Google sont optionnelles : des polices de secours fonctionnent hors connexion.
- Toutes les illustrations sont incluses en local. Aucun stock photo externe n’est requis. Pour de vraies photos, obtenir l’accord du salon et les droits nécessaires.
- Aucun formulaire ne conserve de données sur un serveur : les champs servent uniquement à préparer un message WhatsApp.
- Les images, coordonnées, services et prix doivent être confirmés et remplacés avant livraison.
