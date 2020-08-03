Node.prototype.$p = function(c) {
    if (typeof(c)=='undefined'){c=1}
    var ex;
    ex = "this."
    for (var i = 0; i < c; i++) {
        ex += "parentElement.";
    }
    var _ = eval(ex.cut(1));
    return _;
}
String.prototype.count = function(char) {
    return (this.match(new RegExp(char, "g")) || []).length;
}
function delCookie(key,path) {
    if (typeof(path)=="string") {path = "/"+path+"/";}
    document.cookie = key + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT'+";"+path;
    return !getCookie(key);
}
String.prototype.cut = function(num) {
    if (typeof(num)!="number"){throw("number needed")}
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
    //https://2ch.hk/rf/
    var count= 0;
    var tett = "";
    var tit = $q('#title').href;
    for(var i = 0; i < tit.length;i++) {
        if (tit[i] == '/') {count++};
        if (count ==3) {
            tett+=tit[i]
        }
        else if (count>3) {
            return tett.substr(1);
        }
    }
}
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
function newOption(id, name) {
	var _opt = document.createElement('option');
	_opt.id = _opt.value = id;
	_opt.innerText = name;
	return _opt;
}
function $rstate(state) {
	if (state == 0)
		console.log('Initializing..');
	else if (state == 1) 
		console.log('Loading...');
	else if (state  == 4) 
		console.log('Completed');
}
Node.prototype.$q(el) {
    return this.querySelector(el);
}