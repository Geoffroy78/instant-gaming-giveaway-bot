# Instant Gaming Giveaway Auto Script

Userscript qui automatise la participation aux giveaways sur  
https://www.instant-gaming.com/

Compatible avec Firefox et Violentmonkey.

---

## Fonctionnalités

- Charge automatiquement la liste des giveaways depuis GitHub
- Clique automatiquement sur le bouton "Participer"
- Clique automatiquement sur les boutons "Reward"
- Passe automatiquement au giveaway suivant
- Possibilité d'activer ou de désactiver le script manuellement depuis le menu Violentmonkey

---

## Prérequis

- Mozilla Firefox
- Extension Violentmonkey

---

## Installation

### 1. Installer Violentmonkey

1. Ouvrir Firefox  
2. Aller sur le site des extensions Firefox  
3. Rechercher "Violentmonkey"  
4. Cliquer sur "Ajouter à Firefox"

---

### 2. Installer le script

#### Méthode via GitHub

1. Ouvrir le fichier `script.user.js` sur GitHub  
2. Cliquer sur le bouton "Raw"  
3. Violentmonkey proposera automatiquement d’installer le script  
4. Cliquer sur "Install"

#### Méthode manuelle

1. Cliquer sur l’icône Violentmonkey dans le navigateur  
2. Ouvrir le Dashboard  
3. Cliquer sur "+" pour créer un nouveau script  
4. Coller le contenu du script  
5. Enregistrer

---

## Utilisation

1. Aller sur :  
https://www.instant-gaming.com/?igr=cata78

2. Le script se lance automatiquement

Ou

3. Cliquer sur l’icône Violentmonkey puis sélectionner "Instant-Gaming" et réactualiser la page instant-gaming

---

## Fonctionnement

Le script :

1. Télécharge la liste des giveaways actifs depuis :

https://raw.githubusercontent.com/enzomtpYT/InstantGamingGiveawayList/main/json.json

2. Analyse la page pour détecter :
   - le bouton `button.button.validate`
   - les boutons `a.button.reward`

3. Clique automatiquement sur les boutons nécessaires

4. Passe au giveaway suivant lorsque toutes les actions sont terminées

---

## Avertissement

⚠️ Avant d'utiliser le script, assurez-vous d'être connecté à votre compte Instant Gaming.

Si le script s'est exécuté avant que vous soyez connecté :
1. Désactivez le script.
2. Connectez-vous normalement à votre compte Instant Gaming.
3. Réactivez le script.
4. Actualisez la page.

⚠️ Après utilisation, il est recommandé de désactiver le script pour éviter qu'il s'exécute inutilement.

Pour désactiver le script :
1. Restez sur la page Instant Gaming.
2. Cliquez sur l'icône des extensions en haut à droite du navigateur.
3. Ouvrez Violentmonkey.
4. Décochez le script "Instant-Gaming".

Pour l'activer le script :
1. Restez sur la page Instant Gaming.
2. Cliquez sur l'icône des extensions en haut à droite du navigateur.
3. Ouvrez Violentmonkey.
4. Cochez le script "Instant-Gaming".

## Structure du projet

- `script.user.js`
- `README.md`

---

## Liens utiles

Instant Gaming  
https://www.instant-gaming.com/

Violentmonkey  
https://addons.mozilla.org/firefox/addon/violentmonkey/

Liste des giveaways  
https://raw.githubusercontent.com/enzomtpYT/InstantGamingGiveawayList/main/json.json

---

## Mise à jour

Si le site change sa structure, les sélecteurs suivants devront être modifiés :

```js
button.button.validate
a.button.reward
```
