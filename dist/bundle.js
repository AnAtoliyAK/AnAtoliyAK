!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);class r{constructor(e,n,t,r,o,a,l){this.value=e,this.valueLabel=n,this.row=t,this.position=r}}function o(){const e=document.body;let n=document.createElement("div");e.appendChild(n),n.classList.add("virtual-keyboard");let t=[new r("","~",1,1),new r("1","1",1,2),new r("2","2",1,3),new r("3","3",1,4),new r("4","4",1,5),new r("5","5",1,6),new r("6","6",1,7),new r("7","7",1,8),new r("8","8",1,9),new r("9","9",1,10),new r("0","0",1,11),new r("-","-",1,12),new r("=","=",1,13),new r("","Backspace",1,14),new r("","Tab",1,1),new r("q","Q",2,2),new r("w","W",2,3),new r("e","E",2,4),new r("r","R",2,5),new r("t","T",2,6),new r("y","Y",2,7),new r("u","U",2,8),new r("i","I",2,9),new r("o","O",2,10),new r("p","P",2,11),new r("","[",2,12),new r("","]",2,13),new r("","/",2,14),new r("","DEL",2,15)];for(let e=0;e<t.length;e++){let r=t[e],o=document.createElement("div");o.innerHTML=r.valueLabel,o.classList.add("keyboard__key"),o.id=r.valueLabel,n.appendChild(o)}}document.body.onload=function(){(function(){let e=document.createElement("textarea");e.classList.add("virtual-screen"),document.body.appendChild(e)})(),o(),function(){let e=document.querySelectorAll(".virtual-keyboard div"),n=document.querySelector(".virtual-screen");e.forEach(t=>{t.addEventListener("click",t=>{e.forEach(e=>e.classList.remove("keyboard__key_active")),console.log(t),t.target.classList.add("keyboard__key_active"),n.textContent+=t.target.id})})}()}}]);