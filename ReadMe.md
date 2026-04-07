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

⚠️ Désactiver le script après utilisation en restant sur la page d'instant-gaming, en allant en haut à droite du navigateur dans extensions/Violentmonkey et en déselectionnant "Instant-Gaming"

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
