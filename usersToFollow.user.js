// ==UserScript==
// @name         Instagram AutoFollow
// @namespace    http://tampermonkey.net/
// @version      0.71
// @description  try to take over the world!
// @author       You
// @updateURL    https://github.com/randomperson190/usersToFollow/raw/main/usersToFollow.user.js
// @downloadURL  https://github.com/randomperson190/usersToFollow/raw/main/usersToFollow.user.js
// @resource usersToFollow https://raw.githubusercontent.com/randomperson190/usersToFollow/main/usersToFollow.txt
// @resource timing https://raw.githubusercontent.com/randomperson190/usersToFollow/main/timing.txt
// @match        https://www.instagram.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=instagram.com
// @grant        GM_xmlhttpRequest
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_getResourceText
// ==/UserScript==

/*
GM_setValue("someKey", "someValue");
GM_getValue("someKey", "someValue");
*/

function getCurrentURL() {
    return window.location.href;
}

function getListOfUsers() {
    const data = GM_getResourceText("usersToFollow");
    return data.split("\n");
}

function getTimings() {
    const data = GM_getResourceText("timing");
    return data.split("\n");
}

// ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
// ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

function esHoraEspecial(h, m) {
    let hours = String(h);
    let minutes = String(m);
    let momentoActual = hours + minutes;
    let momentosEspeciales = [];
    return momentosEspeciales.includes(momentoActual);
}

function waitTillPageLoad() {
    waitTillPageLoadCounter += 1;
    if (waitTillPageLoadCounter == 3600) { // A la hora se hace una recarga por las dudas que quede trabado
        location.reload();
    }
    let followElement = document.evaluate("//div[text()='Follow']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (followElement != null) {
        main();
    }
    let requestedElement = document.evaluate("//div[text()='Requested']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (requestedElement != null) {
        main();
    }
    let followingElement = document.evaluate("//div[text()='Following']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (followingElement != null) {
        main();
    }
    let reloadPageElement = document.evaluate("//div[text()='Reload page']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (reloadPageElement != null) {
        reloadPageElement.click();
    }
    let pageNotFoundElement1 = document.evaluate('//h2[text()="' + "Sorry, this page isn't available." + '"]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    let pageNotFoundElement2 = document.evaluate('//span[text()="' + "Sorry, this page isn't available." + '"]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (pageNotFoundElement1 != null || pageNotFoundElement2 != null) {
        let currentUserPage = getCurrentURL().replaceAll("https://www.instagram.com/", "").replaceAll("/", "").replaceAll(" ", "").replaceAll("%20", "").replaceAll("?hl=en", "").replaceAll("?hl=es", "");
        let usersToFollow = getListOfUsers();
        if (usersToFollow.includes(currentUserPage) == false) {
            window.location.href = "https://www.instagram.com/" + usersToFollow[0];
        }
        for (let i in usersToFollow) {
            let currentUser = usersToFollow[i];
            if (currentUserPage == currentUser) {
                window.location.href = "https://www.instagram.com/" + usersToFollow[parseInt(i) + 1];
            }
        }
    }
}

function main() {
    clearInterval(intervalWaitTillPageLoad);
    let followElement = document.evaluate("//div[text()='Follow']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    let followingElement = document.evaluate("//div[text()='Following']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    let requestedElement = document.evaluate("//div[text()='Requested']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    let currentUserPage = getCurrentURL().replaceAll("https://www.instagram.com/", "").replaceAll("/", "").replaceAll(" ", "").replaceAll("%20", "").replaceAll("?hl=en", "").replaceAll("?hl=es", "");
    let usersToFollow = getListOfUsers();
    let date = new Date;
    console.log("main");
    /*
    // ::: Causa error lo siguiente :::
    GM_notification({
        silent: true,
        title: "Último user abierto",
        text: date.getHours() + ":" + date.getMinutes(),
    });
    */
    if (followingElement == null && requestedElement == null && followElement != null) {
        if (usersToFollow.includes(currentUserPage)) {
            followElement.click();
        }
    }
    if (followingElement != null || requestedElement != null) {
        if (usersToFollow.includes(currentUserPage) == false) {
            window.location.href = "https://www.instagram.com/" + usersToFollow[0];
        }
        for (let i in usersToFollow) {
            let currentUser = usersToFollow[i];
            if (currentUserPage == currentUser) {
                window.location.href = "https://www.instagram.com/" + usersToFollow[parseInt(i) + 1];
            }
        }
    } else {
        let usersToFollowLength = usersToFollow.length;
        let messageElement = document.evaluate("//div[text()='Message']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        let postsElement = document.evaluate("//div[text()=' posts']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        let followersElement = document.evaluate("//div[text()=' followers']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        let followingElement = document.evaluate("//div[text()=' following']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        let usernameTopElement = document.evaluate("//h1[text()='" + currentUserPage + "']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        let usernameMainElement = document.evaluate("//h2[text()='" + currentUserPage + "']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        if (usersToFollow.includes(currentUserPage) == false) {
            if (messageElement != null) {
                messageElement.innerText = "?/" + String(usersToFollowLength);
            }
            if (postsElement != null) {
                postsElement.innerText = "?/" + String(usersToFollowLength);
            }
            if (followersElement != null) {
                followersElement.innerText = "?/" + String(usersToFollowLength);
            }
            if (followingElement != null) {
                followingElement.innerText = "?/" + String(usersToFollowLength);
            }
            if (usernameTopElement != null) {
                usernameTopElement.innerText = usernameTopElement.innerText + " - ?/" + String(usersToFollowLength);
            }
            if (usernameMainElement != null) {
                usernameMainElement.innerText = usernameMainElement.innerText + " - ?/" + String(usersToFollowLength);
            }
            document.title = currentUserPage + " - ?/" + String(usersToFollowLength);
            setTimeout(() => {
                document.title = currentUserPage + " - ?/" + String(usersToFollowLength);
            }, 10000);
        } else {
            for (let i in usersToFollow) {
                let currentUser = usersToFollow[i];
                if (currentUserPage == currentUser) {
                    if (messageElement != null) {
                        messageElement.innerText = String(parseInt(i)+1) + "/" + String(usersToFollowLength);
                    }
                    if (postsElement != null) {
                        postsElement.innerText = String(parseInt(i)+1) + "/" + String(usersToFollowLength);
                    }
                    if (followersElement != null) {
                        followersElement.innerText = String(parseInt(i)+1) + "/" + String(usersToFollowLength);
                    }
                    if (followingElement != null) {
                        followingElement.innerText = String(parseInt(i)+1) + "/" + String(usersToFollowLength);
                    }
                    if (usernameTopElement != null) {
                        usernameTopElement.innerText = usernameTopElement.innerText + " - " + String(parseInt(i)+1) + "/" + String(usersToFollowLength);
                    }
                    if (usernameMainElement != null) {
                        usernameMainElement.innerText = usernameMainElement.innerText + " - " + String(parseInt(i)+1) + "/" + String(usersToFollowLength);
                    }
                    document.title = currentUserPage + " - " + String(parseInt(i)+1) + "/" + String(usersToFollowLength);
                    setTimeout(() => {
                        document.title = currentUserPage + " - " + String(parseInt(i)+1) + "/" + String(usersToFollowLength);
                    }, 10000);
                }
            }
        }
        setInterval(main2, 1000);
    }
}

function main2() {
    let date = new Date;
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let currentUserPage = getCurrentURL().replaceAll("https://www.instagram.com/", "").replaceAll("/", "").replaceAll(" ", "").replaceAll("%20", "").replaceAll("?hl=en", "").replaceAll("?hl=es", "");;
    let timings = getTimings();
    console.log("main2");
    console.log(parseInt((timings[0])));
    console.log(parseInt((timings[1])));
    console.log(parseInt((timings[2])));
    console.log(parseInt((timings[3])));
    console.log(parseInt((timings[4])));
    console.log(parseInt((timings[5])));
    if (seconds == 0 && ((minutes == parseInt(timings[0]) || minutes == parseInt(timings[1]) || minutes == parseInt(timings[2]) || minutes == parseInt(timings[3]) || minutes == parseInt(timings[4]) || minutes == parseInt(timings[5]) || minutes == parseInt(timings[6]) || minutes == parseInt(timings[7]) || minutes == parseInt(timings[8]) || minutes == parseInt(timings[9])) || esHoraEspecial(hours, minutes))) {
        let usersToFollow = getListOfUsers();
        if (usersToFollow.includes(currentUserPage) == false) {
            window.location.href = "https://www.instagram.com/" + usersToFollow[0];
        }
        for (let i in usersToFollow) {
            let currentUser = usersToFollow[i];
            if (currentUserPage == currentUser) {
                window.location.href = "https://www.instagram.com/" + usersToFollow[parseInt(i) + 1];
            }
        }
    }
}

let waitTillPageLoadCounter = 0;
const intervalWaitTillPageLoad = setInterval(waitTillPageLoad, 1000);
