// ==UserScript==
// @name         antiBUMP
// @namespace    koq
// @version      1.2
// @description  BUMP OUT OF HERE. removes all messages with "BUMP" an 2ch.
// @author       dik&dok
// @match        *://2ch.hk/*/res/*
// @match        *://2ch.*/*
// @grant        none
// @downloadUrl  https://raw.githubusercontent.com/lenchik-lox/antiBUMP/master/antiBUMP.js
// @updateUrl    https://raw.githubusercontent.com/lenchik-lox/antiBUMP/master/antiBUMP.js
// ==/UserScript==


    'use strict';
    function getCookie(name) {
        var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }
    function setCookie(name, value) {
        var ja = new Date(Date.now()+259200);ja = ja.toUTCString();
        var updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value)+"; path=/; expires="+ja;

        document.cookie = updatedCookie;
    }
    if (getCookie("bb")!=("true"||"false")) {
        setCookie("bb","false");
    }
    //menu...
    var t = document.createElement("span");
    var m = document.createElement("span");
    var dook = getCookie("bb");
    var s = document.createElement("span");
    var d0k,d1k,d2k,d3k;
    d0k = d1k = "";
    if (dook == "true") {
        /*var posts = document.querySelectorAll('.thread__post'); OLD VERSION
        for (var i = 0;i<posts.length;i++) {
            var message = posts[i].querySelector('article').innerText.toLowerCase();
            console.log((i+1)+" SELECTED");
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
        var them_cum = document.getElementsByClassName('post__message');
        var post = document.querySelectorAll('.post__anon');
        for (var lublu_karandashi = 0; lublu_karandashi<them_cum.length; lublu_karandashi++) {
            //if (them_cum[lublu_karandashi].innerText.toLowerCase() == ("бамп" || "bump" || "/bump!?/" || "bamp" || "бабамп" || "бымп" || "бумп")){
            var jalil = ["бамп","бап","бам","бапм","bamp","bump","b*mp","бабамп","бумп","бамп!","бамп?","бымп","бомп","бамж","бвмп","bmpp","бюмп"/*,"","","","","","","","","",""*/];
            for (var xXx_nagibator666_xXx = 0; xXx_nagibator666_xXx<jalil.length;xXx_nagibator666_xXx++) {
                if (them_cum[lublu_karandashi].innerText.toLowerCase().indexOf(jalil[xXx_nagibator666_xXx])>=0 && (them_cum[lublu_karandashi].innerText.length<5||them_cum[lublu_karandashi].innerText.toLowerCase().indexOf(">>")>=0)) {
                    them_cum[lublu_karandashi].style.display = 'none';
                    post[lublu_karandashi].innerText = "бамп";
                }
            }
            //}
        }
        s.style+="left:30px;"; m.style+="background:orange;"; d2k = "left:-28px;"; d3k = "background:#9D9D9D;"; d1k = "text-decoration:none";
        //d0k="";d2k = "left:-14px;";d3k="background:#FF972F;";d1k = "text-decoration:line-through";
    }
    else if (dook=="false") {
        d0k="";d2k = "left:-14px;";d3k="background:#FF972F;";d1k = "text-decoration:line-through";
        //s.style+="left:30px;"; m.style+="background:orange;"; d2k = "left:-28px;"; d3k = "background:#9D9D9D;"; d1k = "text-decoration:none";
    }
    //m.className = s.className = "koqq";
    t.innerHTML = "bump";
    t.style.cssText += ";transition:.2s ease-in-out;left:0px;position:relative;"+d1k;
    m.style.cssText += ";transition:.2s ease-in-out;border-radius:10px;vertical-align:middle;width:32px;height:16px;; position:relative;display:inline-block; padding:2px; cursor:pointer;"+d3k;
    s.style.cssText += ";transition:.2s ease-in-out;border-radius:100%;vertical-align:middle;width:10px;height:10px;background:#EEEEEE;position:relative;display:inline-block;margin:-1px;cursor:pointer;"+d2k;
    s.onclick = m.onclick = kak
        function kak() {
        if (getCookie("bb")=="true") {
            s.style += ";transition:.2s ease-in-out;border-radius:100%;vertical-align:middle;width:10px;height:10px;background:#EEEEEE;position:relative;display:inline-block;margin:-1px;cursor:pointer;left:-14px;";
            m.style += ";transition:.2s ease-in-out;border-radius:10px;vertical-align:middle;width:32px;height:16px;; position:relative;display:inline-block; padding:2px; cursor:pointer;background:#FF972F;";
            t.style ="text-decoration:line-through";
            setCookie("bb","false");
        }
        else if (getCookie("bb")=="false") {
            s.style += ";transition:.2s ease-in-out;border-radius:100%;vertical-align:middle;width:10px;height:10px;background:#EEEEEE;position:relative;display:inline-block;margin:-1px;cursor:pointer;left:-28px;";
            m.style += ";transition:.2s ease-in-out;border-radius:10px;vertical-align:middle;width:32px;height:16px;; position:relative;display:inline-block; padding:2px; cursor:pointer;background:#9D9D9D;";
            t.style = "text-decoration:none";
            setCookie("bb","true");
        }
        //setTimeout(function() {location.reload()},200);
    }
    var koqs = document.querySelectorAll('span.adminbar__cat')[1];

    koqs.appendChild(m);
    koqs.appendChild(s);
    koqs.appendChild(t);

    for (var ksux = 0;ksux<document.querySelectorAll('.spoiler').length;ksux++) {
        var d5k = document.querySelectorAll('.spoiler')[ksux];
        d5k.style += ";cursor:pointer;";
        d5k.onclick = kok;
    }
    function kok() {
        this.style += ";background:none;color:#333333;";
    }
