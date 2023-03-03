// ==UserScript==
// @name         Instagram AutoFollow
// @namespace    http://tampermonkey.net/
// @version      0.18
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

const data = `luuzfusto
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
lili.melony
delfiarismendi
lulibar________
mmore.lacourt
lulyyaguirre
coronellana
imnotviolo
belu.bertolaa
cami.mendelek
erii_milena
_martualcober_
luuargannaraz
bustsmily
larahaecks
coticirillo
candee.yael
sancfloor
agustina.bre_
albornozailiin
ccamiveiga
soffgilduart7
camii.garciia
miliferrando
daydominguezz
kika.coronel00
luzz_marinaa20
nicolebainotti
kiaxxs
tinagus2005
turron_de_paco_ewe
miilagros.herrera
abriilramos_
danielamoralesuribe
eliicollado
sofiaholmbergfoto
ester_vanesa
mpriscila____
eliana.gauto
mickyfernandez_
donna.carena.92
lulacarelli
bri.luquee
danii_notte
sofiiijalil
garzon.jacq
elisa.massa2402
daianaabregu
daanitta1
daygisellegimenez
valeriabuenosaires
pequee86
sofi_sanso
sabrii654
chavier.gabriela
camferrary
__nahii.benitez.ok__
lucianagabrielarossi
vale3sols
barbarita_bardon
lorealailugones
micaelamorin
manu.giambra
nadiiaa_vaneesaa
vikitarey
casas.marisa
romina9658
any1712
grafnancy
nicolenani
solciito.gonzalez
marchumarchu77
borenatalia
giselagomezz
solcito_150885
gisemosta
maruuu_mat
mamas_171
cecydiaz33
isaa_slt
sofibeatrice_
villagra.kiara_
adri_ocanto
camiicuervoo
magamoreno86
fabianalobbosco
lucianabarrueto
iaramoscardini
cristhal_negro
rodulfoliliana
ccamiailen
melina.bellezaybienestar
isolina_marisel
romivj
ailuuleserre
la_morocha_de_maipu
luanaapinto
luceromaggie
brisaafariass
gabri.santanaa
cinti_cas
rorovera
betyseg
cinrocha1980
carghiardelli
lorenaaaasabrina
tamaradillmannfotografia
camicattaneooo
porrecayanina
simplemente_unica_80
analiabruni
villaresmara
figueroaa_daniela
marilina.cuenca.85
yani.d.ricota
maii_0.9
32_malasuerte
paula.nieva.549
marupal18
marianela.rom
andy.harillo_ah
florenciasofiapozzi
cattainimari
mel_sosx
milislootmans
natalibelenlemos
morcheebaskye
agusymateo
lolaglamqueen
mariagarcia760326
jenif_er5755
luli.cavion
lara.morales_
mica_chiesa
giulimorettoo
flaca_sissi
lizmartinez117
agustargirl
val6nn
fffloor.r
aymicarna
camilapalczi
mileurbancic
agos_saavedra
agusblanco_
chuleonardis
marucencic
candy_orona
candee.la
milivegga
ceci040116
florobless
marcapde237
carolinapenia
cami.dragani
cami.lopreiato
camiisucci
lucia_perri
carolina.landrielg
sofiorrico
pri_cristoferi
agusbibini
flaviavallejos_
raquedasilvamello
aldanavquiroga
agussromanello
cangarzon
belen.arg5407
jazcpc
agosdaneri
laurataboas
ornescarfo
naiaraveltri
luumanuel
mica_mora98
cereijocami
victoriacarrizo_
meliturria
paauga
julinaveira
sofitatoo
martuacedo_
naaibelen
gimenez_vicxx
agossrdz
leila.salinass
_martirrink
florguutierrez
micaaelaaldana
florcabreraa_
lauriigenna
chiaamangone
juazoulay
daniela.gimenez2
lud_halbich
ipatitu
agu.taquini__
iry.kuz
ivy_garciia
romylalu
_guaaaada
damontcande
mai_lanzillotta
agostinasj
sofiivictorianna
malecocchiola
martisinforiano
_milagr0s._
tiziisigurta
guadaknudsen
julipaez989
a_rlette
chiaraboiani
acostameli_
daigago
tammy_bordon
sofiargenziano
c.e.c.i.i.i
samlovesyoursmile
camiladaianaizzo
florerrecalde
camilaayelenn
cami_venturino
mika_correa
camiddorado
marisasalcedo_1
bianzoppini
ailin.mms
claritaolmos
decimoseptimaletragriega
camspinelli
abrilsko
belen.mjrs
florpalmi
micurambaud
agusss_marquez
sofia_antonellabacas
luugenna1
paulinkaaa_
tweety898
florcirigliano_
marcela.menesesh
sabrinaaylen__
florsuraniti
arianaschmidt_
_cami_caceres
julicastilllo
karen_steinle
style.allison.vii
giuumeza
solcasteluchi_
irisrae15
candelagomez2
shaiel_8a
rooldan_valu10
_sool_villalba
sabasdqt
iampiscis
flora.ac2
ceciarchilla
abrilpastorotti
maru_tu_colo
cata___aguero
sara.pereyra99
mikaaa23vaninetti
deelfi_vip
agus_caviglia123
marii___paganoo_
celi__viipp
val3ntina.m3r3le
ailenn_arj
susi_i40
joii_caastroo
nagodemore
candee.garcc_
pri_cortezzz
bris.a7667
carlagomez5557
tu_rubia_8611
garciaaaa2378
sol.bossi
mary.turnes
tejera_miaa
aldalovepierrepaul
l4ti.ziaguilar
lttt.ina
valenn_caseres78
kaatialoopezz
maii_viipp.15
naiguzzetti.ok
almitttaa_
diame.fava
123_anto_pirola
candevippp_
__clariiii__
azugonzalezb
nahiarocampos
agus_biggi7
martu_godoy__
zaira_vipp
martinagodoy_15
lu_dechiaa
cata.aguilar1
bnlenp
viccobertolini
julietaanderson5
celess_fava
cande_riemer_
beluu_taus
prii_campooss
valen.larreaa
_kaatheee_
more.quinteros12
isaarfarass
emiliitaaaaa_
bere_.gerez
lourdestizio
luu.lezcan0
lunacabral7
ppazjulieta
zahigalvan
valentina.escot
antoo_osorioo
alumine_sosa16
fiore_yanivelli27
sargiotti.oliviaa
priscilapinero_4
beree_agustinaa
aluu_santoro
violetabalinio
la_pilii_paa
jimebianqueri
julianaquinteross
iaraa.tauzz
mica.zarantonello
emi_camargooo
luu_sueldia9
maii.farias
pilisanchezgalarza
britoviole_
paz.maureiraa
angeles_toti
michellepilarr
llanoagos19
ramialvarez78
marti__leguizamon
juana_fatica`

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
console.log("• Followeando en 45 ...");
setTimeout(function() {
    let xpath = "//div[text()='Follow']";
    let matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    console.log("• Followeando");
    matchingElement.click();
}, 45000); // 5000 no alcanza
