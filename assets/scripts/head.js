'use strict';
(function( $ ){

//Check IE version
function checkIeVersion(version) {
    var val = false;
    switch (version) {
        case 7:
        val = /MSIE 7/.test(navigator.userAgent);
        break;
        case 8:
        val = /MSIE 8/.test(navigator.userAgent);
        break;
        case 9:
        val = /MSIE 9/.test(navigator.userAgent);
        break;
        case 10:
        val = /MSIE 10/.test(navigator.userAgent);
        break;
        case 11:
        val = /rv:11/.test(navigator.userAgent);
        break;
    }
    return val;
}

//Detect Browser
function browserDetect() {
    var isExplorer = (navigator.userAgent.indexOf('MSIE') || navigator.userAgent.indexOf('rv:11')) > -1,
    isFirefox = navigator.userAgent.indexOf('Firefox') > -1,
    isSafari = navigator.userAgent.indexOf("Safari") > -1,
    isChrome = navigator.userAgent.indexOf('Chrome') > -1,
    isOpera = navigator.userAgent.indexOf("OPR") > -1,
    isMac = navigator.userAgent.indexOf('Mac OS') > -1;
    if (isExplorer) {
        $('html').addClass('allIe');
    }
    if (isFirefox) {
        $('html').addClass('firefox');
    }
    if (isChrome && isSafari && !isOpera) {
        $('html').addClass('chrome');
    }
    if (!isChrome && isSafari) {
        $('html').addClass('safari');
    }
    if (checkIeVersion(8)) {
        $('html').addClass('ie8');
    }
    if (!checkIeVersion(8)) {
        $('html').addClass('all');
    }
    if (checkIeVersion(9)) {
        $('html').addClass('ie9');
    }
    if (checkIeVersion(10)) {
        $('html').addClass('ie10');
    }
    if (checkIeVersion(11)) {
        $('html').addClass('ie11');
    }
}

//Check viewport
function viewPort () {
     if($(window).width() < 768){
        $("head").append('<meta name="viewport" content="width=580px" />');
    }
    else{
        $("head").append('<meta name="viewport" content="width=1024px" />');
    };
}

$(document).ready(function() {
  browserDetect();
  viewPort();
   
});
}( jQuery ));