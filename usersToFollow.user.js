// ==UserScript==
// @name         Instagram AutoFollow
// @namespace    http://tampermonkey.net/
// @version      0.14
// @description  try to take over the world!
// @author       You
// @updateURL    https://github.com/randomperson190/usersToFollow/raw/main/usersToFollow.user.js
// @downloadURL  https://github.com/randomperson190/usersToFollow/raw/main/usersToFollow.user.js
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

const data = `nahii_herrera
sool.portilloo
luuzfusto
danigutiierrez_
alegabriiel_
seleceballos_
brenavaca
nattypereyra_
mmaurios
morecampoy
daiianaa._5
maairepic
maca_cuevass
valeenpalma
cattapereyra
abrilautunno
shaiel__
nikiivega
camiialbarracin_
veroayoroaj
zoesarubi_
luaguiirre_
she.is.lolaa
lourdessolis38
correaacele
magacentteno
melina.boch
briortegga
danaagostinaa
psyccony
agus_surita
sereepesaresi_
agus_berenguel
ludmi_fuentes
_sofi.correa
cande.yanivelli
tomaslorenzoma11037
catluquez
_araa08
braunl_
moreparera_
micaorosco_
milydomiinguez
mmorena.1
niji_romkvzfl
giulygonz
_luu.datri_
naycascone
camii__st
kiruscapina
zoepnzani_
_ceci4
maiochoaizpuro
ilianagrillo
eugeniaszwec_
ayee.tejera
chabeaccossato
azuu.borgna
mayvergara__
abrilrigotto01
checchuu_
_jjazzminn_
vaal.0n
aix.iaraa
daidieci_
_camiiperaltaa
agustinaprette_
iaraa_brahim
melveronn1
juuliherrera_
celesrodriguez._
magui.lucila
alderetebri_
delfiilescano_
_fabiii.10_
mari.llopiz
meloviiedo
melany.rocio2
guadaa_nicole
biangiovannini
vicky__gimenez0
_mariaperalta_
delfina.villegas
bustosmily.2
isaa_marrone
melalmiron1
tamiichavezzz
gnerikaa
lugonzaaleez
micahernandezl
sofirodrriguez
aleesspinosa
leidipa__
nickytorrado
agustina.arayaa
coniii.caro
zooe.a_
ani_ruizz
samiracardosso
ailuu.tt
roobelenn1
fatulina
vikysanfe_
luci_.torres
zelmigarcia
antto_montenegro
martuu_olmos15
lunimara_
antoomarquez__
milidominguez16
vicky.zacco
ailynmilagros_
_guadagaitan
zoedelrioo
martu_pardo
martineezmili_
giiulialvarez
rooc1o
delfizela
_rociooabigail
guadasisa
guadimontero__
patopatoyrepato
suritamel
piafelicetti_
aye_aguss
luliipalacios.37
ssofitorres1
ludmiisegura
mileebobbio
caro.caastillo
_mmilagross_
agushalbr
mel_m.aredes
luuz.vict
camibbeleen
ariiiaaa
fl__orce
biancamagaali
cariiamaro
zoeecattaneo
milii_aylenn
lucilamagali00
_soyathina_
zairaluquez_
viaany_ema
camilaespinosa09
more.corzini
abrilcorreaw
villalbacande__
solvbarbozaa
caroyeruna
ayelenlucero_
pilidiazp_
florfranzese
brisaailennn_
laaramacieel
miaa.alfonso
abalosari
mendezzbri
jazcarnevale
camichiappara_
may.zela_
tutii.gutierrez
jazduarte__
abrilcorreaw2
miluu.pogonza
brisanaahir
sfelicamm
lal.ilaura
_abbiolivera
mara.ssari
iara_ailiin
juliabriil.12
biaan_ojeda
lei_jimenez
briisa_garay04
jucentofanti
valuu_roman
sofivirg14
lili.melony`

function main() {
        let usersToFollow = data.split("\n");
        for (let x in usersToFollow) {
            usersToFollow[x] = usersToFollow[x].replaceAll(" ", "")
            usersToFollow[x] = usersToFollow[x].replaceAll("%20", "")
        }
        let date = new Date;
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let currentUserPage = getCurrentURL().replaceAll("https://www.instagram.com/", "").replaceAll("/", "").replaceAll(" ", "").replaceAll("%20", "");
        let followElement = findNodeByInnerHTML(document.querySelectorAll('div'), 'Follow');
        followElement.click();
        let currentTime = hours + ":" + minutes + ":" + seconds;
        console.log("currentUserPage = " + currentUserPage + " || currentTime = " + currentTime)
        if (seconds == 0 && (minutes == 0 || minutes == 30)) {
            if (usersToFollow.includes(currentUserPage) == false) {
                console.log("• Redirigiendo en 5 segundos ...");
                setTimeout(function() {
                    console.log("• Redirigiendo");
                    window.location.href = "https://www.instagram.com/" + usersToFollow[0];
                }, 5000);
            }
            for (let i in usersToFollow) {
                let currentUser = usersToFollow[i];
                if (currentUserPage == currentUser) {
                    console.log("• Redirigiendo en 5 segundos ...");
                    setTimeout(function() {
                        console.log("• Redirigiendo");
                        window.location.href = "https://www.instagram.com/" + usersToFollow[parseInt(i) + 1];
                    }, 5000);
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
    console.log("• Followeando");
    matchingElement.click();
}, 10000);
