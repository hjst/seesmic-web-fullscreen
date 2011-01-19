// ==UserScript==
// @name           Seesmic Web: fullscreen
// @namespace      http://seesmic.com/web
// @description    Make Seesmic Web "fullscreen", showing only the columns.
// @include        http://seesmic.com/web/*
// ==/UserScript==

var link = document.createElement('link');
link.href = 'http://github.com/hjst/seesmic-web-fullscreen/raw/master/fullscreen.css';
link.type = 'text/css';
link.rel = 'stylesheet';
link.media = 'screen';
link.title = 'dynamicLoadedSheet';
document.getElementsByTagName("head")[0].appendChild(cssNode);
