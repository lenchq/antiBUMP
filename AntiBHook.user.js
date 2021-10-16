// ==UserScript==
// @name         antiBHook
// @namespace    koq
// @version      1.0
// @description  Hook for Antibump
// @author       lenchik-lox
// @include      *://2ch.hk/*/res/*
// @include      *://2ch.*/*
// @include      *://2ch.*/*/res/*
// @include      https://2ch.hk/*
// @include      https://2ch.hk/*/res/*
// @include      https://2ch.*/*
// @include      https://2ch.*/*
// @icon         https://www.google.com/s2/favicons?domain=2ch.hk
// @require      https://code.jquery.com/jquery-2.1.4.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $.ajax({url:"https://raw.githubusercontent.com/lenchik-lox/antiBUMP/master/antiBUMP.user.js",complete:(e)=>{
        var script = document.createElement('script');
        script.innerHTML = e.responseText;
        (document.body || document.head || document.documentElement).appendChild(script);
    }})
    
})();