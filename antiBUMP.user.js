// ==UserScript==
// @name         antiBUMP
// @namespace    koq
// @version      1.9
// @description  BUMP OUT OF HERE. removes all messages with "BUMP" on 2ch.
// @author       dik&dok
// @match        *://2ch.hk/*/res/*
// @match        *://2ch.*/*
// @match        *://2ch.*/*/res/*
// @match        https://2ch.hk/*
// @match        https://2ch.hk/*/res/*
// @include      https://2ch.*/*
// @match        https://2ch.*/*
// @grant        none
// @downloadUrl  https://raw.githubusercontent.com/lenchik-lox/antiBUMP/master/antiBUMP.user.js
// @updateUrl    https://raw.githubusercontent.com/lenchik-lox/antiBUMP/master/antiBUMP.user.js
// @resource     kok.png  https://i.imgur.com/EXSZdp9.png
// ==/UserScript==


'use strict';
function delCookie(key,path) {
    if (typeof(path)=="string") {path = "/"+path+"/";}
    document.cookie = key + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT'+";"+path;
    return !getCookie(key);
}
String.prototype.cut = function(num) {
    if (typeof(num)!="number"){throw("string needed")}
    return this.reve().substring(num).reve();
}
function listToArray(str) {
    var item = "";
    var array = [];
    for (var ea = 0; ea < str.length+1;ea++) {
        if (str[ea]==','||str[ea]==';') {
            array.push(item);
            item = "";
        }
        else {
            item += str[ea];
        }
    }
    return array;
}
function getBoard() {
    var tett = "";
    for (var i = 0; true; i++) {
        var tit = document.head.querySelector('title').innerText;
        if (tit[i] == '-') {break;}
        else {tett += tit[i]}
    }
    //return tett.cut(2);
    return tett.reve().cut(1).substring(1).trim().substr(1,1);
}
window.getBoard = getBoard;
window.lta = listToArray;
//просто функция
function reve(str) {
    var s = str.split("");
    var d = s.reverse();
    var v = d.join("");
    return v;
}
//опа функция расширения
String.prototype.reve = function() {
    var s = this.split("");
    var d = s.reverse();
    var v = d.join("");
    return v;
}
window.torgb = function(hex) {
    var d = 0;
    if (typeof(hex) != "string") {throw "hex must be a string";}
    if (hex.indexOf("#")>=0) {d = 1;}
    var r = hex[1+d] + hex[2+d];
    var g = hex[2+d] + hex[3+d];
    var b = hex[4+d] + hex[5+d];
    return "rgb("+parseInt(r,16).toString()+","+parseInt(g,16).toString()+","+parseInt(b,16).toString()+")";
}
function getCookie(name) {
    var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
function setCookie(key, value, days, path) {
    if(days==undefined)
    {days=7}
    var date=new Date();
    var pat = typeof(path)=="string" ? "path=/"+path.toString() : "path=/";
    date.setTime(date.getTime() + days*24*60*60*1000);
    var expires = '; expires=' + date.toGMTString();
    document.cookie = key + '=' + value + expires + '; '+pat;
}
function rand(min,max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}
function $cr(el) {
    return document.createElement(el);
}
function $q(el) {
    return document.querySelector(el);
}
function $qa(el) {
    return document.querySelectorAll(el);
}
if (!(getCookie("bb")=="true"|| getCookie("bb")=="false")) {
    setCookie("bb","true");
    setCookie("bbst","bump");
}
if (JSON.parse(getCookie('antiplashque'))) {
    try {$q('section.mmm').forEach((el) => {el.remove()})} catch(e) {$q('section.mmm').remove();}
    try {$q('div#plashque').remove();} catch(e){}
    setCookie('plashque','1');
    setCookie('antiplashque','true');
}
if (JSON.parse(getCookie('adskbn'))) {
    $('div.logo').hide();
}
var oldtitle = $q('#title').innerText;
var newtitle = getCookie('customtitle');
var title = document.head.querySelector('title');
if (typeof(newtitle)!="undefined" && newtitle.length>0) {
    $q('#title').innerText = getCookie('customtitle');
    if (location.href.indexOf('res')==-1)
    title.innerText = '/'+getBoard()+'/ - '+newtitle;
}
else {
    if (location.href.indexOf('res')==-1)
    title.innerText = '/'+getBoard()+'/ - '+oldtitle;
}


window.$q = $q;
window.$qa = $qa;
window.$cr = $cr;
window.rand = rand;
//menu...
var jalil = ["бамп","бап","бам","бапм","bamp","bump","b*mp","бабамп","бумп","бамп!","бамп?","бымп","бомп","бамж","бвмп","bmpp","бюмп","бамплю","ббмп","баамп","бамп!!","бамп!!!","bunp","блымп","бамп.","бемп", "roll","ролл"];
//window.ss = jalil;
var dakk = jalil[rand(0,jalil.length-1)];
var style = document.styleSheets[0];
dakk = dakk[0].toUpperCase()+dakk.substring(1,dakk.length)
// jalil.push("1","2","3","4","5","6","7","8","9","0");
var ctext = getCookie("bbst")!=undefined ? decodeURIComponent(getCookie("bbst")) : "бамп";
var butt = $cr("button");
var t = $cr("span");
var m = $cr("span");
var dook = getCookie("bb") === "true";
var s = $cr("span");
var cbox = $cr("input");
var cmbbox = $cr('select');
var editinp = $cr('input');
var antidoskbnner = $cr('input');
var sett = $cr("div");
var nsfw = $cr('a');
var rndd = $cr('a');
var edit = $cr('img');
var glowrand = $cr('input')
var lab = $cr("label");
var nst = $cr('style');
var icon = $cr("img");
var p = $cr('label');
var editmode = false;
var antiplashque = $cr('input');
var sep = $cr('separator');
window.s_mat = listToArray('6ля, 6лядь, 6лять, b3ъeб, cock, cunt, e6aль, ebal, eblan, eбaл, eбaть, eбyч, eбать, eбёт, eблантий, fuck, fucker, fucking, xyёв, xyй, xyя, xуе,xуй, xую, zaeb, zaebal, zaebali, zaebat, архипиздрит, ахуел, ахуеть, бздение, бздеть, бздех, бздецы, бздит, бздицы, бздло, бзднуть, бздун, бздунья, бздюха, бздюшка, бздюшко, бля, блябу, блябуду, бляд, бляди, блядина, блядище, блядки, блядовать, блядство, блядун, блядуны, блядунья, блядь, блядюга, блять, вафел, вафлёр, взъебка, взьебка, взьебывать, въеб, въебался, въебенн, въебусь, въебывать, выблядок, выблядыш, выеб, выебать, выебен, выебнулся, выебон, выебываться, выпердеть, высраться, выссаться, вьебен, гавно, гавнюк, гавнючка, гамно, гандон, гнид, гнида, гниды, говенка, говенный, говешка, говназия, говнецо, говнище, говно, говноед, говнолинк, говночист, говнюк, говнюха, говнядина, говняк, говняный, говнять, гондон, доебываться, долбоеб, долбоёб, долбоящер, дрисня, дрист, дристануть, дристать, дристун, дристуха, дрочелло, дрочена, дрочила, дрочилка, дрочистый, дрочить, дрочка, дрочун, е6ал, е6ут, еб твою мать, ёб твою мать, ёбaн, ебaть, ебyч, ебал, ебало, ебальник, ебан, ебанамать, ебанат, ебаная, ёбаная, ебанический, ебанный, ебанныйврот, ебаное, ебануть, ебануться, ёбаную, ебаный, ебанько, ебарь, ебат, ёбат, ебатория, ебать, ебать-копать, ебаться, ебашить, ебёна, ебет, ебёт, ебец, ебик, ебин, ебись, ебическая, ебки, ебла, еблан, ебливый, еблище, ебло, еблыст, ебля, ёбн, ебнуть, ебнуться, ебня, ебошить, ебская, ебский, ебтвоюмать, ебун, ебут, ебуч, ебуче, ебучее, ебучий, ебучим, ебущ, ебырь, елда, елдак, елдачить, жопа, жопу, заговнять, задрачивать, задристать, задрота, зае6, заё6, заеб, заёб, заеба, заебал, заебанец, заебастая, заебастый, заебать, заебаться, заебашить, заебистое, заёбистое, заебистые, заёбистые, заебистый, заёбистый, заебись, заебошить, заебываться, залуп, залупа, залупаться, залупить, залупиться, замудохаться, запиздячить, засерать, засерун, засеря, засирать, засрун, захуячить, заябестая, злоеб, злоебучая, злоебучее, злоебучий, ибанамат, ибонех, изговнять, изговняться, изъебнуться, ипать, ипаться, ипаццо, Какдвапальцаобоссать, конча, курва, курвятник, лох, лошарa, лошара, лошары, лошок, лярва, малафья, манда, мандавошек, мандавошка, мандавошки, мандей, мандень, мандеть, мандища, мандой, манду, мандюк, минет, минетчик, минетчица, млять, мокрощелка, мокрощёлка, мразь, мудak, мудaк, мудаг, мудак, муде, мудель, мудеть, муди, мудил, мудила, мудистый, мудня, мудоеб, мудозвон, мудоклюй, на хер, на хуй, набздел, набздеть, наговнять, надристать, надрочить, наебать, наебет, наебнуть, наебнуться, наебывать, напиздел, напиздели, напиздело, напиздили, насрать, настопиздить, нахер, нахрен, нахуй, нахуйник, не ебет, не ебёт, невротебучий, невъебенно, нехира, нехрен, Нехуй, нехуйственно, ниибацо, ниипацца, ниипаццо, ниипет, никуя, нихера, нихуя, обдристаться, обосранец, обосрать, обосцать, обосцаться, обсирать, объебос, обьебать обьебос, однохуйственно, опездал, опизде, опизденивающе, остоебенить, остопиздеть, отмудохать, отпиздить, отпиздячить, отпороть, отъебись, охуевательский, охуевать, охуевающий, охуел, охуенно, охуеньчик, охуеть, охуительно, охуительный, охуяньчик, охуячивать, охуячить, очкун, падла, падонки, падонок, паскуда, педерас, педик, педрик, педрила, педрилло, педрило, педрилы, пездень, пездит, пездишь, пездо, пездят, пердануть, пердеж, пердение, пердеть, пердильник, перднуть, пёрднуть, пердун, пердунец, пердунина, пердунья, пердуха, пердь, переёбок, пернуть, пёрнуть, пи3д, пи3де, пи3ду, пиzдец, пидар, пидарaс, пидарас, пидарасы, пидары, пидор, пидорасы, пидорка, пидорок, пидоры, пидрас, пизда, пиздануть, пиздануться, пиздарваньчик, пиздато, пиздатое, пиздатый, пизденка, пизденыш, пиздёныш, пиздеть, пиздец, пиздит, пиздить, пиздиться, пиздишь, пиздища, пиздище, пиздобол, пиздоболы, пиздобратия, пиздоватая, пиздоватый, пиздолиз, пиздонутые, пиздорванец, пиздорванка, пиздострадатель, пизду, пиздуй, пиздун, пиздунья, пизды, пиздюга, пиздюк, пиздюлина, пиздюля, пиздят, пиздячить, писбшки, писька, писькострадатель, писюн, писюшка, по хуй, по хую, подговнять, подонки, подонок, подъебнуть, подъебнуться, поебать, поебень, поёбываает, поскуда, посрать, потаскуха, потаскушка, похер, похерил, похерила, похерили, похеру, похрен, похрену, похуй, похуист, похуистка, похую, придурок, приебаться, припиздень, припизднутый, припиздюлина, пробзделся, проблядь, проеб, проебанка, проебать, промандеть, промудеть, пропизделся, пропиздеть, пропиздячить, раздолбай, разхуячить, разъеб, разъеба, разъебай, разъебать, распиздай, распиздеться, распиздяй, распиздяйство, распроеть, сволота, сволочь, сговнять, секель, серун, серька, сестроеб, сикель, сила, сирать, сирывать, соси, спиздел, спиздеть, спиздил, спиздила, спиздили, спиздит, спиздить, срака, сраку, сраный, сранье, срать, срун, ссака, ссышь, стерва, страхопиздище, сука, суки, суходрочка, сучара, сучий, сучка, сучко, сучонок, сучье, сцание, сцать, сцука, сцуки, сцуконах, сцуль, сцыха, сцышь, съебаться, сыкун, трахае6, трахаеб, трахаёб, трахатель, ублюдок, уебать, уёбища, уебище, уёбище, уебищное, уёбищное, уебк, уебки, уёбки, уебок, уёбок, урюк, усраться, ушлепок, х_у_я_р_а, хyё, хyй, хyйня, хамло, хер, херня, херовато, херовина, херовый, хитровыебанный, хитрожопый, хуeм, хуе, хуё, хуевато, хуёвенький, хуевина, хуево, хуевый, хуёвый, хуек, хуёк, хуел, хуем, хуенч, хуеныш, хуенький, хуеплет, хуеплёт, хуепромышленник, хуерик, хуерыло, хуесос, хуесоска, хуета, хуетень, хуею, хуи, хуй, хуйком, хуйло, хуйня, хуйрик, хуище, хуля, хую, хуюл, хуя, хуяк, хуякать, хуякнуть, хуяра, хуясе, хуячить, целка, чмо, чмошник, чмырь, шалава, шалавой, шараёбиться, шлюха, шлюхой, шлюшка, ябывает');
window.s_eng = [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
window.s_rus = listToArray(' ,а,б,в,г,д,е,ё,ж,з,и,й,к,л,м,н,о,п,р,с,т,у,ф,х,ц,ч,ш,щ,ъ,ы,ь,э,ю,я');
var color = "";
style.addRule(".post_type_oppost","border-radius:3px");
var stil = "font-size:50px;font-weight:bold;color:#7CFC00;-webkit-text-stroke:.036em black";
var text = "Thank you for using AntiBump!";
//style.addRule(".kok","background-color:var(--theme_default_postbghighlight);");
/*style.addRule("@keyframes kzk","0%{background-color:var(--theme_default_postbghighlight)}72%{background-color:var(--theme_default_postbghighlight)}100%{background-color:var(--theme_default_postbg)}");*/
style.addRule("@keyframes kzk","0%{background-color:var(--theme_default_postbghighlight)}72%{background-color:var(--theme_default_postbghighlight)}100%{background-color:var(--theme_default_postbg)}");
var bmps = 0;
var d0k,d1k,d2k,d3k;
window.cid = [];
window.startHref = "";
window.scl = "";
window.lastn = -1;
for (var i = 0; i < window.location.href.length; i++) {
    var u = window.location.href;
    if (u[i] != '#') {
        window.startHref+=u[i];
    }
    else {break;}
}
d0k = d1k = "";
if (dook) {
    /*var posts = document.querySelectorAll('.thread__post'); __OLD VERSION__
        for (var i = 0;i<posts.length;i++) {
            var message = posts[i].querySelector('article').innerText.toLowerCase();
            if (message.length<5) {
                var dik = message.indexOf("бамп");
                var dok = message.indexOf("bump");
                var duk = message.indexOf("sage");
                var dak = message.indexOf("сажа");
                if (dik>=0|| dok>=0 || duk>=0||dak>=0) {
                    posts[i].remove();
                }
            }
        }*/
    var /*let*/them_cum = document.getElementsByClassName('post__message');
    var post = document.querySelectorAll('.post__anon');
    var id = document.querySelectorAll('.postbtn-reply-href');
    var d = 0;
    var mode = (getCookie("bbst") == "true");
    if (mode) {cbox.checked = "true";}

    for (var lublu_karandashi = 0; lublu_karandashi<them_cum.length; lublu_karandashi++) {
        //if (them_cum[lublu_karandashi].innerText.toLowerCase() == ("бамп" || "bump" || "/bump!?/" || "bamp" || "бабамп" || "бымп" || "бумп")){
        var revid = reve(id[lublu_karandashi].innerText);
        var k = 1;
        for (var l = 0; l < 10; l++) {
            if ( revid[l] == revid[l+1]) {k++; continue;}
            else {break;}
        }
        if (k > 1) {
            if (k == 2) {
                color = "#FE1111";
            }
            else if (k == 3) {
                color = "#0FC0FC";
            }
            else if (k == 4) {
                color = "#ED009A";
            }
            else if (k == 5) {
                color = "#FFFF15";
            }
            else if (k == 6) {
                color = "#63FF15";
            }
            var mes = them_cum[lublu_karandashi].parentElement.parentElement.children[0];
            if (mes.className.indexOf("post_type_replied")>=0 || mes.className.indexOf("post_type_watched")>=0) {
                mes.style.borderRight = k+"px solid "+color;
            }
            else {mes.style.borderLeft = k+"px solid "+color;}
        }
        //console.log("kok" + revid);

        //d--;
        for (var xXx_nagibator666_xXx = 0; xXx_nagibator666_xXx<jalil.length;xXx_nagibator666_xXx++) {
            try
            {
                if(them_cum[lublu_karandashi].parentElement.parentElement.querySelector('.post__email').innerText == "Аноним")
                {
                    d++
                };
            }
            catch(e) {}
            var bumps = them_cum[lublu_karandashi].innerText.toLowerCase().indexOf(jalil[xXx_nagibator666_xXx]);
            var lbumps = them_cum[lublu_karandashi].innerText.toLowerCase().lastIndexOf(jalil[xXx_nagibator666_xXx])
            if (bumps>=0 && (them_cum[lublu_karandashi].innerText.length<6||them_cum[lublu_karandashi].innerText.toLowerCase().indexOf(">>")>=0&&them_cum[lublu_karandashi].innerText.length<8||lbumps<6))
            {
                them_cum[lublu_karandashi].style.display = 'none';
                bmps++;
                try{try
                {
                    post[lublu_karandashi+d].innerText = ctext;
                    console.log("BUMP DETECTED AT "+lublu_karandashi);
                }
                    catch(e)
                    {
                        them_cum[lublu_karandashi].parentElement.parentElement.querySelector('.post__email').innerText = "бамп";
                    }}catch(e){}
                continue;
            }
        }
        //}
    }
    //s.style+="left:30px;"; m.style+="background:orange;"; d2k = "left:-28px;"; d3k = "background:#9D9D9D;"; d1k = "text-decoration:none";
    d0k="";d2k = "left:-14px;";d3k="background:#FF972F;";d1k = "text-decoration:line-through";
}
else if (!dook) {
    //d0k="";d2k = "left:-14px;";d3k="background:#FF972F;";d1k = "text-decoration:line-through";
    s.style+="left:30px;"; m.style+="background:orange;"; d2k = "left:-28px;"; d3k = "background:#9D9D9D;"; d1k = "text-decoration:none";
}
//
var kek = [];
for (var ksux = 0;ksux<document.querySelectorAll('.spoiler').length;ksux++) {
    var d5k = document.querySelectorAll('.spoiler')[ksux];
    d5k.style += ";cursor:pointer;";
    d5k.onclick = kok;
    d5k.id = "ja"+ksux;
    kek[ksux] = true
}
function kok() {
    if (kek[parseInt(this.id.substring(2,this.id.length))] == true) {
        this.style += ";cursor:pointer;background:none;color:var(--theme_default_text);";
        this.onmouseover = this.onmouseout = undefined;
        kek[parseInt(this.id.substring(2,this.id.length))] = false;
    }
    else {
        this.style += ";cursor:pointer;background:var(--theme_default_spoiler);color:var(--theme_default_spoiler);user-select:none;";
        this.onmouseover = function() {
            this.style = ";cursor:pointer;background:none;color:var(--theme_default_text);";
        }
        this.onmouseout = function() {
            this.style = ";cursor:pointer;background:var(--theme_default_spoiler);color:var(--theme_default_spoiler);";
        }
        //this.onmouseover=";cursor:pointer;background:none;color:var(--theme_default_text);";
        kek[parseInt(this.id.substring(2,this.id.length))] = true;
    }
}
//m.className = s.className = "koqq";

cmbbox.name = "slovar";

var slovarEng = $cr('option'); slovarEng.value = "s_eng"; slovarEng.innerText = "Английские буквы"; slovarEng.id = "s_eng";
var slovarRus = $cr('option'); slovarRus.value = "s_rus"; slovarRus.innerText = "Русские буквы"; slovarRus.id = "s_rus";
var slovarMat = $cr('option'); slovarMat.value = "s_mat"; slovarMat.innerText = "Пиздатый словарик"; slovarMat.id = "s_mat"
var Optslovars = [slovarEng,slovarRus,slovarMat];
var slovars = [];
for (var i = 0; i < Optslovars.length;i++) {
    slovars[Optslovars[i].id] = window[Optslovars[i].id];
}

cmbbox.append(...Optslovars);
cmbbox.value = getCookie('slov');



t.innerHTML = dakk;

antidoskbnner.type = glowrand.type = antiplashque.type = "checkbox";
try {
    antiplashque.checked = JSON.parse(getCookie('antiplashque'));
    glowrand.checked = JSON.parse(getCookie('glowrand'));
    antidoskbnner.checked = JSON.parse(getCookie('adskbn'));
}catch(E){}
// cbox.type = "checkbox";
cbox.type = "text";
cbox.id = "abcbox";
cbox.style.cssText = "text-align:center;margin:.21em;border-radius:4px; background:inherit;border:none;border-bottom:1px solid gray;font-size:18px;color:inherit;";
butt.id = "abbutton";
style.addRule("#abcbox:focus","outline:none;border-bottom:1px solid black");document.styleSheets[0].addRule("#abbutton:focus","outline:none;");
butt.innerText ="Сохранить";
butt.style = "font-size:1.01em;border-radius:15px;border:1px solid gray;position:inline-block;display:inline-block;vertical-align: bottom;position: absolute;display: inline-block;left:4.5em;color:inherit;background:inherit;bottom: 10px;";
sett.id = "absett";
p.innerHTML = "Заменять 'Аноним' на:";
cbox.value = typeof(ctext)!=undefined?ctext:"бамп";
sep.innerText = " | ";

nsfw.id = "nsfw";
nsfw.innerHTML = "NSFW";
//nsfw.href = "#";
nsfw.style = "margin-left:8px; position:relative; display:inline-block; user-select:none;vertical-align:middle;";

rndd.id = "rnd";
rndd.onclick = randomPost;
rndd.innerText = "Случайный пост";
rndd.style = "user-select:none";
edit.id = "abeditbutton"
style.addRule('#abeditbutton','cursor:pointer');
edit.src = "https://i.imgur.com/EXSZdp9.png";
edit.style = "width:16px;height:16px; user-select:none;position:absolute;vertical-align:text-top; visibility:hidden";
editinp.style = "font-size:35px;outline:none;position:absolute;z-index:9999;color:var(--theme_default_link); visibility:hidden;";
editinp.style.left = $q('#title').offsetWidth.toString()+"px";
editinp.placeholder = $q('#title').innerText;
p.style.cssText = "padding:.3em;"
lab.innerHTML = "Настройки";
cbox.maxlength = ""
icon.src = "https://i.imgur.com/hsyzbF4.png";
sett.style.cssText = "padding:3px;;user-select:none;;transition:.2s ease-in-out;position:fixed;background:var(--theme_default_postbg);width:15em;height:17em;opacity:0;visibility:hidden;left:40em; top:6em;border-radius:7px; border:1px solid rgba(0,0,0,.5);z-index:100;color:var(--theme_default_text);";
icon.style = ";transition:.3s ease-in-out;position:relative;width:1em;height:1em;vertical-align:middle;display:inline-block;margin-left:.6em;cursor:pointer;";
p.id = lab.id = "abtext";
lab.style = "text-align:center; position:relative; display:inline-block; left:4.1em;font-size:17px";
icon.onclick = menu; function menu() {var kak = sett.style.opacity == "1" ? "rotate(-60deg)" : "rotate(0deg)";sett.style.visibility = "visible";var ksk = sett.style.opacity == "1" ? "hidden" : "visible";var kok = sett.style.opacity == "1" ? "0" : "1"; sett.style.opacity = kok; icon.style.transform=kak; setTimeout(function() {sett.style.visibility = ksk},205)};
t.style.cssText += ";transition:.2s ease-in-out;left:0px;position:relative;"+d1k;
m.style.cssText += ";transition:.2s ease-in-out;border-radius:10px;vertical-align:middle;width:32px;height:16px;; position:relative;display:inline-block; padding:2px; cursor:pointer;"+d3k;
s.style.cssText += ";transition:.2s ease-in-out;border-radius:100%;vertical-align:middle;width:10px;height:10px;background:var(--theme_default_bg);position:relative;display:inline-block;margin:-1px;cursor:pointer;"+d2k;
if (!dook) {icon.style.visibility = "hidden"}
s.onclick = m.onclick = kak
function kak() {
    if (getCookie("bb")=="true") {
        /*s.style += ";transition:.2s ease-in-out;border-radius:100%;vertical-align:middle;width:10px;height:10px;background:#EEEEEE;position:relative;display:inline-block;margin:-1px;cursor:pointer;left:-14px;";
        m.style += ";transition:.2s ease-in-out;border-radius:10px;vertical-align:middle;width:32px;height:16px;; position:relative;display:inline-block; padding:2px; cursor:pointer;background:#FF972F;";
        t.style ="text-decoration:line-through";*/
        s.style += ";transition:.2s ease-in-out;border-radius:100%;vertical-align:middle;width:10px;height:10px;background:var(--theme_default_bg);position:relative;display:inline-block;margin:-1px;cursor:pointer;left:-28px;";
        m.style += ";transition:.2s ease-in-out;border-radius:10px;vertical-align:middle;width:32px;height:16px;; position:relative;display:inline-block; padding:2px; cursor:pointer;background:#9D9D9D;";
        t.style = "text-decoration:none";
        setCookie("bb","false");
    }
    else if (getCookie("bb")=="false") {
        /*s.style += ";transition:.2s ease-in-out;border-radius:100%;vertical-align:middle;width:10px;height:10px;background:#EEEEEE;position:relative;display:inline-block;margin:-1px;cursor:pointer;left:-28px;";
        m.style += ";transition:.2s ease-in-out;border-radius:10px;vertical-align:middle;width:32px;height:16px;; position:relative;display:inline-block; padding:2px; cursor:pointer;background:#9D9D9D;";
        t.style = "text-decoration:none";*/
        s.style += ";transition:.2s ease-in-out;border-radius:100%;vertical-align:middle;width:10px;height:10px;background:var(--theme_default_bg);position:relative;display:inline-block;margin:-1px;cursor:pointer;left:-12px;";
        m.style += ";transition:.2s ease-in-out;border-radius:10px;vertical-align:middle;width:32px;height:16px;; position:relative;display:inline-block; padding:2px; cursor:pointer;background:#FF972F;";
        t.style ="text-decoration:line-through";
        setCookie("bb","true");
    }
    setInterval(function() {/*location.reload*/},250);
}
butt.onclick = function() {
    if (cbox.value != ctext) {
        setCookie("bbst",encodeURIComponent(cbox.value))
    }
    menu();
}
window.nsfwFunc = function() {
    var nst = $cr('style');
    nst.id = "nsfw-style";
    nst.type = "text/css";
    nst.innerHTML = ".post__file-preview{opacity:0.05}.post__file-preview:hover{opacity:1}";
    var sty = document.head.querySelector('#nsfw-style');
    if (!window.Store.get('styling.nsfw')) {
        document.head.appendChild(nst);
        window.Store.set('styling.nsfw',true);console.log("NSFW ON");
    }
    else {
        try {sty.remove();}catch(e){document.head.appendChild(nst);};
        window.Store.set('styling.nsfw',false);console.log("NSFW OFF");
    }
}
nsfw.onclick = window.nsfwFunc;
function randomPost() {
    try {window.cid[window.lastn].parentElement.parentElement.parentElement.style.animation = "";} catch(E){/*console.log(E);*/}
    //setTimeout(function() {try {window.cid[window.lastn].parentElement.parentElement.parentElement.style.animation = "";} catch(E){/*console.log(E);*/}},8000);
    var id = document.querySelectorAll('.post__reflink');
    if (window.cid.length < 1) {
        for (var i = 0; i < id.length;i++) {
            if (i%2==0) {
                window.cid.push(id[i]);
            }
        }
    }
    var c = rand(1,window.cid.length-1);
    if (JSON.parse(getCookie('glowrand'))) {
        window.cid[c].parentElement.parentElement.parentElement.scrollIntoView({behavior:'smooth', block:"center"});
    }
    else {
        window.scrollTo(0,(window.cid[c].parentElement.parentElement.parentElement.offsetTop-window.screen.height/2)+250)
    }
    window.scl = window.cid[c].parentElement.parentElement.parentElement.className;
    //window.cid[c].parentElement.parentElement.parentElement.className += " kok";
    window.cid[c].parentElement.parentElement.parentElement.style.animation = "kzk 5s";
    window.lastn = c;
}
var koqs = document.querySelectorAll('span.adminbar__cat')[1];
/*var sepp = $cr('separator');
sepp.innerText = " |";*/




koqs.appendChild(m);
koqs.appendChild(s);
koqs.appendChild(t);

window.wipe = function(a) {
    var currslov = slovars[getCookie('slov')];
    var sha = $q('#shampoo');
    var ulins = [];
    if ($q('#nex').checked){
        sha.value = "";
        var lin = document.querySelectorAll('.post-reply-link');
        for(var e = 0; sha.value.length<5000;e++){
            sha.value += currslov[rand(0,currslov.length-1)];
        }
        for(var ee = 0; ee < lin.length-1;ee++) {
            if (ulins.indexOf(lin[ee].innerText)<0){
                if (lin[ee].innerText.toLowerCase().indexOf('(op)')>=0) {
                    sha.value += lin[ee].innerText.reve().substring(4).reve();
                }
                else sha.value += lin[ee].innerText + " ";
                ulins[ee] = lin[ee].innerText;
            }
        }
        sha.focus();
    } else {sha.value = "";}
}
cmbbox.onchange = function() {
    setCookie('slov',cmbbox.value,30);
}
glowrand.onchange = function(e) {
    var anti = (!JSON.parse(getCookie('glowrand'))).toString();
    if (this.checked) {
        setCookie('glowrand',anti);
    }
    else {setCookie('glowrand',anti)}
}
antiplashque.onchange = function() {
        if (this.checked == true) {
            try {$q('section.mmm').forEach((el) => {el.remove()})} catch(e) {$q('section.mmm').remove();}
            try {$q('div#plashque').remove();} catch(e){}
            setCookie('plashque','1');
            setCookie('antiplashque','true');
        }
        else {delCookie('plashque'); setCookie('antiplashque','false')}
}
function antibnner() {
    try{$qa('section.mmm').forEach((el) => {el.remove()})}catch(e){$q('section.mmm').remove()};
}
antidoskbnner.onchange = function() {
    if (this.checked) {
        $('div.logo').hide();
        setCookie('adskbn','true',30)
    }
    else {
        $('div.logo').show();
        setCookie('adskbn','false',30);
    }
}
edit.onclick = function() {
    if (!editmode) {
        editmode = true;
        editinp.style.visibility = "visible";
        editinp.focus();
    }
    else {
        editmode = false;
        editinp.style.visibility = "hidden";
    }
}
editinp.oninput = function() {
    var nl = (editinp.value.length*24);
    var ol = ($q('#title').innerText.length*24);
    //editinp.style.width = (editinp.value.length*24).toString()+'px' == "0px" ? ($q('#title').innerText.length*24).toString()+"px" : (editinp.value.length*24).toString()+'px';
    if (nl > ol) {
        editinp.style.width = nl+"px";
    }else if (editing.style.width != ol+"px") {
        editinp.style.width = ol+"px";
    }
}
editinp.onkeypress = function(e) {
    var board = getBoard()
    if (e.keyCode == 13) {
        if (editinp.value.length > 0) {
            setCookie('customtitle',editinp.value,30,getBoard()+"/");
            editmode = false;
            editinp.style.visibility = "hidden";
            $q('#title').innerText = editinp.value;
        }
        else {
            document.cookie = 'customtitle=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/'+board+'/';
            editmode = false;
            editinp.style.visibility = "hidden";
            $q('#title').innerText = oldtitle;
        }
    }
}
$q('h1.boardname').onmouseenter = function() {edit.style.visibility = "visible"};
$q('h1.boardname').onmouseleave = function() {edit.style.visibility = "hidden"};
window.scrollcb_array.push(antibnner);
var wb = $cr('div');
var chx = $cr('input');
var chhh = $cr('label');
chx.type = "checkbox";
//chx.className="nex"
chx.id = "nex";
chx.onchange = window.wipe;
wb.className = "options__box";
chhh.for = "nex";
chhh.id="dddeddd";
chhh.innerText=" Вайпануть тред";
var toolbar = document.querySelector('.options');
toolbar.appendChild(wb);
wb.appendChild(chx);
wb.appendChild(chhh);
koqs.appendChild(icon);
koqs.appendChild(nsfw);
document.querySelector('header').appendChild(sett);
sett.appendChild(lab);sett.appendChild($cr('br'));
sett.appendChild(p);sett.appendChild($cr('br'));
sett.appendChild(cbox);//sett.appendChild($cr('br'));sett.appendChild($cr('br'));sett.appendChild($cr('br'));sett.appendChild($cr('br'));
sett.appendChild(butt);
sett.append(cmbbox);
//nsfw.before(sepp);
nsfw.after(sep);
sep.after(rndd);
var spr = "";
var lch = parseInt(bmps.toString()[bmps.toString.length-1]);
if (lch>1 && lch<5) {spr = "а";}
else if (lch>5||lch==0) {spr="ов";}
console.log("%c"+text,stil);
var koq = window.$;
var a = window.$('span[title="Don\'t bump the thread"]');
a.attr('title',"САЖИ ПИДОРУ!");
a.attr('for','sagecheckbox');
window.$("label#dddeddd").attr('for','nex');
window.$alert("Антибамп скрыл "+ bmps+" бамп"+spr);
$q('#abcbox').after(" Словарь для вайпа:");
cmbbox.after($cr("br"),antiplashque," Убирать баннеры 2чграма",$cr('br'));
sett.append(glowrand," Плавная прокрутка при рандомном посте",$cr('br'));
sett.append(antidoskbnner," Убирать баннеры других доск",$cr('br'));
$q('h1.boardname').appendChild(edit);
$q('a#title').parentElement.append(editinp);
