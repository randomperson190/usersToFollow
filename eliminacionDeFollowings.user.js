// ==UserScript==
// @name         Instagram Eliminación de Followings
// @namespace    http://tampermonkey.net/
// @version      1
// @description  try to take over the world!
// @author       You
// @updateURL    https://github.com/randomperson190/usersToFollow/raw/main/eliminacionDeFollowings.user.js
// @downloadURL  https://github.com/randomperson190/usersToFollow/raw/main/eliminacionDeFollowings.user.js
// @match        https://www.instagram.com/diego.benic/following
// @match        https://www.instagram.com/diego.benic/following/
// @match        https://www.instagram.com/riogrense07/following
// @match        https://www.instagram.com/riogrense07/following/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=instagram.com
// @grant        GM_xmlhttpRequest
// @grant        GM_getValue
// @grant        GM_setValue
// ==/UserScript==

/*
GM_setValue("someKey", "someValue");
GM_getValue("someKey", "someValue");
*/

function getCurrentURL() {
    return window.location.href;
}

function esHoraEspecial(h, m) {
    let hours = String(h);
    let minutes = String(m);
    let momentoActual = hours + minutes;
    let momentosEspeciales = [];
    return momentosEspeciales.includes(momentoActual);
}

// ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
// ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

function waitTillPageLoad() {
    waitTillPageLoadCounter += 1;
    if (waitTillPageLoadCounter == 999999) {
        location.reload();
    }
    let followingElement = document.evaluate("//div[text()='Following']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (followingElement != null) {
        main();
    }
    let reloadPageElement = document.evaluate("//div[text()='Reload page']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (reloadPageElement != null) {
        reloadPageElement.click();
    }
}

function main() {
    clearInterval(intervalWaitTillPageLoad);
    console.log("Buscando Following");
    let followingElement = document.evaluate("//button/div/div[text()='Following']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (followingElement != null) {
        console.log("Quitando un Following");
        followingElement.click(); // Quitar un following
    }
    setInterval(main2, 1000);
}

function main2() {
    let unfollowElement = document.evaluate("//button[text()='Unfollow']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (unfollowElement != null) {
        console.log("Clickeando en Unfollow");
        unfollowElement.click();
        main3()
    }
}

function main3() {
    let date = new Date;
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if (seconds == 0 && ((minutes == 0 || minutes == 10 || minutes == 20 || minutes == 30 || minutes == 40 || minutes == 50 || minutes == 0 || minutes == 0) || esHoraEspecial(hours, minutes))) {
        location.reload();
    }
}

let waitTillPageLoadCounter = 0;
const intervalWaitTillPageLoad = setInterval(waitTillPageLoad, 1000);
