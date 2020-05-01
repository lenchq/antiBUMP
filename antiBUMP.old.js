// ==UserScript==
// @name         antiBUMP
// @namespace    koq
// @version      1.4
// @description  BUMP OUT OF HERE. removes all messages with "BUMP" on 2ch.
// @author       dik&dok
// @match        *://2ch.hk/*/res/*
// @match        *://2ch.*/*
// @match        *://2ch.*/*/res/*
// @match        https://2ch.hk/*
// @match        https://2ch.hk/*/res/*
// @match        https://2ch.*/*
// @grant        none
// @downloadUrl  https://raw.githubusercontent.com/lenchik-lox/antiBUMP/master/antiBUMP.user.js
// @updateUrl    https://raw.githubusercontent.com/lenchik-lox/antiBUMP/master/antiBUMP.user.js
// ==/UserScript==


'use strict';
function getCookie(name) {
    var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
function setCookie(key, value, days) {
    if(days==undefined)
    {days=7}
    var date=new Date();
    date.setTime(date.getTime() + days*24*60*60*1000);
    var expires = '; expires=' + date.toGMTString();
    document.cookie = key + '=' + value + expires + '; path=/';
}
function rand(min,max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}
if (!(getCookie("bb")=="true"|| getCookie("bb")=="false")) {
    setCookie("bb","true");
    setCookie("bbst","false");
}
//menu...
var jalil = ["бамп","бап","бам","бапм","bamp","bump","b*mp","бабамп","бумп","бамп!","бамп?","бымп","бомп","бамж","бвмп","bmpp","бюмп","бамплю","ббмп","баамп","бамп!!","бамп!!!","bunp","блымп",/*"",""*/];
//window.ss = jalil;
var dakk = jalil[rand(0,jalil.length-1)];
dakk = dakk[0].toUpperCase()+dakk.substring(1,dakk.length)
jalil.push("1","2","3","4","5","6","7","8","9","0","a","а");
var t = document.createElement("span");
var m = document.createElement("span");
var dook = getCookie("bb") === "true";
var s = document.createElement("span");
var cbox = document.createElement("input");
var sett = document.createElement("div");
var lab = document.createElement("label");
var icon = document.createElement("img");
var p = document.createElement('label');
var d0k,d1k,d2k,d3k;
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
    var d = 0;
    var mode = (getCookie("bbst") == "true");
    if (mode) {cbox.checked = "true";}

    for (var lublu_karandashi = 0; lublu_karandashi<them_cum.length; lublu_karandashi++) {
        //if (them_cum[lublu_karandashi].innerText.toLowerCase() == ("бамп" || "bump" || "/bump!?/" || "bamp" || "бабамп" || "бымп" || "бумп")){
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
                if (!mode) {them_cum[lublu_karandashi].style.display = 'none';} else if(mode) {them_cum[lublu_karandashi].parentElement.parentElement.remove();continue;}
                try{try
                {
                    post[lublu_karandashi+d].innerText = "бамп";
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

t.innerHTML = dakk;
cbox.type = "checkbox";
cbox.id = "abcbox";
cbox.style.cssText = "margin:.21em";
sett.id = "absett";
p.innerHTML = "Полное удаление сообщений с 'бамп'";
p.style.cssText = "padding:.3em"
lab.innerHTML = "Настройки";
icon.src = "https://i.imgur.com/hsyzbF4.png";
sett.style.cssText = ";transition:.2s ease-in-out;position:fixed;background:var(--theme_default_postbg);width:15em;height:10em;opacity:1;left:40em; top:6em;border-radius:7px; border:1px solid rgba(0,0,0,.5);z-index:100;";
icon.style = ";transition:.3s ease-in-out;position:relative;width:1em;height:1em;vertical-align:middle;display:inline-block;margin:.6em;cursor:pointer;";
p.id = lab.id = "abtext"
lab.style = "text-align:center; position:relative; display:inline-block; left:5.1em";
icon.onclick = function() {var kak = sett.style.opacity == "1" ? "rotate(-60deg)" : "rotate(0deg)";sett.style.visibility = "visible";var ksk = sett.style.opacity == "1" ? "hidden" : "visible";var kok = sett.style.opacity == "1" ? "0" : "1"; sett.style.opacity = kok; icon.style.transform=kak; setTimeout(function() {sett.style.visibility = ksk},205)};
t.style.cssText += ";transition:.2s ease-in-out;left:0px;position:relative;"+d1k;
m.style.cssText += ";transition:.2s ease-in-out;border-radius:10px;vertical-align:middle;width:32px;height:16px;; position:relative;display:inline-block; padding:2px; cursor:pointer;"+d3k;
s.style.cssText += ";transition:.2s ease-in-out;border-radius:100%;vertical-align:middle;width:10px;height:10px;background:#EEEEEE;position:relative;display:inline-block;margin:-1px;cursor:pointer;"+d2k;
s.onclick = m.onclick = kak
function kak() {
    if (getCookie("bb")=="true") {
        /*s.style += ";transition:.2s ease-in-out;border-radius:100%;vertical-align:middle;width:10px;height:10px;background:#EEEEEE;position:relative;display:inline-block;margin:-1px;cursor:pointer;left:-14px;";
        m.style += ";transition:.2s ease-in-out;border-radius:10px;vertical-align:middle;width:32px;height:16px;; position:relative;display:inline-block; padding:2px; cursor:pointer;background:#FF972F;";
        t.style ="text-decoration:line-through";*/
        s.style += ";transition:.2s ease-in-out;border-radius:100%;vertical-align:middle;width:10px;height:10px;background:#EEEEEE;position:relative;display:inline-block;margin:-1px;cursor:pointer;left:-28px;";
        m.style += ";transition:.2s ease-in-out;border-radius:10px;vertical-align:middle;width:32px;height:16px;; position:relative;display:inline-block; padding:2px; cursor:pointer;background:#9D9D9D;";
        t.style = "text-decoration:none";
        setCookie("bb","false");
    }
    else if (getCookie("bb")=="false") {
        /*s.style += ";transition:.2s ease-in-out;border-radius:100%;vertical-align:middle;width:10px;height:10px;background:#EEEEEE;position:relative;display:inline-block;margin:-1px;cursor:pointer;left:-28px;";
        m.style += ";transition:.2s ease-in-out;border-radius:10px;vertical-align:middle;width:32px;height:16px;; position:relative;display:inline-block; padding:2px; cursor:pointer;background:#9D9D9D;";
        t.style = "text-decoration:none";*/
        s.style += ";transition:.2s ease-in-out;border-radius:100%;vertical-align:middle;width:10px;height:10px;background:#EEEEEE;position:relative;display:inline-block;margin:-1px;cursor:pointer;left:-14px;";
        m.style += ";transition:.2s ease-in-out;border-radius:10px;vertical-align:middle;width:32px;height:16px;; position:relative;display:inline-block; padding:2px; cursor:pointer;background:#FF972F;";
        t.style ="text-decoration:line-through";
        setCookie("bb","true");
    }
    setInterval(function() {location.reload()},250);
}
cbox["onchange"] = function() {
    var cok = getCookie("bbst");
    if (cok== "true") {
        setCookie("bbst","false");console.log("FAQ");
    }
    else if (cok == "false") {
        setCookie("bbst","true");
    }
}
var koqs = document.querySelectorAll('span.adminbar__cat')[1];

koqs.appendChild(m);
koqs.appendChild(s);
koqs.appendChild(t);
koqs.appendChild(icon);
document.querySelector('header').appendChild(sett);
sett.appendChild(lab); sett.appendChild(document.createElement('br'));
sett.appendChild(cbox);
sett.appendChild(p);

