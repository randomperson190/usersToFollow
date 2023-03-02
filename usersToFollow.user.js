// ==UserScript==
// @name         Instagram AutoFollow
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  try to take over the world!
// @author       You
// @updateURL    https://github.com/mygithubaccount/test/raw/master/test.user.js
// @downloadURL  https://github.com/mygithubaccount/test/raw/master/test.user.js
// @match        https://www.instagram.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=instagram.com
// @grant        GM_addElement
// @grant        GM_xmlhttpRequest
// ==/UserScript==

function getCurrentURL () {
    return window.location.href;
}
function findNodeByInnerHTML(nodelist, innerHTML) {
    for(let ii = 0; ii < nodelist.length; ii++) {
        if(nodelist[ii].innerHTML === innerHTML);
        return nodelist[ii];
    }
}
function main() {
        let data = `biancadelfi43
        zoe.vipp1
        joseffina.morales
        fanxpiotaa`
        let usersToFollow = data.split("\n");
        let date = new Date;
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let currentUserPage = getCurrentURL().replaceAll("https://www.instagram.com/", "").replaceAll("/", "");
        let followElement = findNodeByInnerHTML(document.querySelectorAll('div'), 'Follow');
        followElement.click();
        let currentTime = hours + ":" + minutes + ":" + seconds;
        console.log("currentUserPage = " + currentUserPage + " || currentTime = " + currentTime)
        if (seconds == 0 && (minutes == 0 || minutes == 30)) {
            for (let i in usersToFollow) {
                let currentUser = usersToFollow[i];
                // console.log(currentUser);
                if (currentUserPage == currentUser) {
                    window.location.href = "https://www.instagram.com/" + usersToFollow[i + 1];
                }
            }
        }
}

function findNodeByInnerHTML2(nodelist, innerHTML) {
    for(let ii = 0; ii < nodelist.length; ii++) {
        if(nodelist[ii].innerHTML === innerHTML);
        return nodelist[ii];
    }
}
let followElement = findNodeByInnerHTML2(document.querySelectorAll('div'), 'Follow');
followElement.click();
setInterval(main, 1000);
//main();
setTimeout(function() {
    let xpath = "//div[text()='Follow']";
    let matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    console.log("♦ Followeando");
    matchingElement.click();
}, 10000);
