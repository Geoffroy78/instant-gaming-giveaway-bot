// ==UserScript==
// @name        Instant-Gaming
// @namespace   https://github.com/Geoffroy78/instant-gaming-giveaway-bot/
// @match       *://www.instant-gaming.com/*
// @grant       GM_registerMenuCommand
// @version     1.1
// @author      -
// @description 26/01/2026 21:05:54
// @downloadURL https://raw.githubusercontent.com/Geoffroy78/instant-gaming-giveaway-bot/refs/heads/main/script.user.js
// @updateURL https://raw.githubusercontent.com/Geoffroy78/instant-gaming-giveaway-bot/refs/heads/main/script.user.js
// ==/UserScript==

(function() {
  "use strict";
  /*const giveaways = {
    alive: [
      "BOBLENNON","INSTANTGAMING","SUPREMELEADER","ICONOBLAST","bugland",
      "GAMEMOVIELAND","CODQG","NALFEINN","VARG","skyyart","ALKOR","ROBERT",
      "GAMEWAVE","RATSUPER","YANKA","STREAMRUNNERS","MeetTheMyth","PHENRIR",
      "GMODFR","INSTANTGAMINGES","ACRE","BILLYCHEROKEE","LYNX","ZONALEROS",
      "GUIGUI","PORAID","INSTANTGAMINGPT","TOMBIE","muusoo","xariel",
      "POKEMONMILLENNIUM","AQUIYAHORA","PIVI","Seals311","vicio",
      "INSTANTGAMINGITALIA","INFOPOINT-ITALIA","FROZ3N","ELOTRIX","NYKK3",
      "PLAYERINSIDE","ILGATTOSULTUBO","FRANCESCOPARDINI","NU89","ITERMOSIFONI",
      "CORYPHEUS","THETJI","deladysigner","KURU","biffa","K0MPA",
      "instantgamingde","INSTANTGAMINGPL","snedgie","mitasims","officialinvictus",
      "GCA","tahva","frankieslair","GIORNOGAMING","SOLOUMIDO","CYBERLUK",
      "STELIUS","CSGOFR","EXOMADARA","KWOREY","PHOTORACERTV","ARLAN360",
      "j0nathan","HEIKKI360","topgames","CABRAVOLADORA","DRWAL","MERTA",
      "IMPAKT","kiszak","playluque","STRADI","poro","DESASTRESHOW","JOFRIK99",
      "kemist","MFGAMING","HeyStan","TraKe","Drunge","Zazza23","BlackPommes",
      "Bayliun","LUSORKOEFFIZIENT","quantoquevaicustar","eusouocap","joepad17",
      "vutomy","elkai","onlywaifu","cryzenx","naito75","remedy","losiu",
      "azhunky","ramosturbo","mello","pixelade","carinazinhaa","huebi","miriampetricor"
    ]
  };*/
  const LIST_URL =
    "https://raw.githubusercontent.com/enzomtpYT/InstantGamingGiveawayList/main/json.json";

  const BASE_URL = "https://www.instant-gaming.com/fr/giveaway/";

  let giveaways = null;

  // Charge la liste depuis GitHub
  fetch(LIST_URL)
    .then(r => r.json())
    .then(data => {
      giveaways = data;
      console.log("✅ Giveaway list loaded", giveaways.alive.length);
      Participer();
    })
    .catch(err => {
      console.error("❌ Impossible de charger la liste", err);
    });

  function Participer() {
    const currentName = window.location.href.split("/giveaway/")[1]?.split("?")[0];
    const index = giveaways.alive.indexOf(currentName);

    handlePage(() => {
      goNext(index !== -1 ? index + 1 : 0);
    });
  }

   async function handlePage(done) {
    const wait = ms => new Promise(r => setTimeout(r, ms));

    // Attendre que validate ou rewards soient présents
    while (true) {
      const validate = document.querySelector("button.button.validate");
      const rewards = document.querySelectorAll("a.button.reward");
      const rewardSuccess = document.querySelectorAll("a.button.reward.success");

      console.log(
        "validate present:", !!validate,
        "| rewards length:", rewards.length,
        "| success:", rewardSuccess.length
      );

      // Bouton Participer présent
      if (validate) {
        validate.click();

        // attendre disparition du bouton validate
        while (document.querySelector("button.button.validate")) {
          await wait(150);
        }
        continue; // revenir au début pour vérifier les rewards
      }

      // Tout les rewards sont en success
      if (rewards.length === rewardSuccess.length) {
        done();
        return;
      }

      // Certains rewards sont en non-success
      if (rewards.length > 0 && rewards.length !== rewardSuccess.length) {
        rewards.forEach(btn => {
          if (!btn.classList.contains("success")) {
            btn.click();
          }
        });

        // attendre que tous les rewards deviennent success
        while (document.querySelectorAll("a.button.reward:not(.success)").length > 0) {
          await wait(150);
        }

        done();
        return;
      }

      // await wait(150); // petite pause si rien n'est prêt
    }
  }

  function goNext(index) {
    if (index >= giveaways.alive.length) {
      console.log("✅ Tous les giveaways traités");
      return;
    }
    window.location.href = `${BASE_URL}${giveaways.alive[index]}?igr=cata78`;
  }

  // if (typeof GM_registerMenuCommand !== "undefined") {
  //   GM_registerMenuCommand("Participate", Participer);
  // }

  Participer();
})();
