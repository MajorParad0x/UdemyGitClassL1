(()=>{"use strict";var e,t,r,n={409:(e,t,r)=>{function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}r(90);const i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.menuIcon=document.querySelector(".site-header__menu-icon"),this.menuContent=document.querySelector(".site-header__menu-content"),this.siteHeader=document.querySelector(".site-header"),this.events()}var t,r;return t=e,(r=[{key:"events",value:function(){var e=this;this.menuIcon.addEventListener("click",(function(){return e.toggleTheMenu()}))}},{key:"toggleTheMenu",value:function(){this.menuContent.classList.toggle("site-header__menu-content--is-visible"),this.siteHeader.classList.toggle("site-header--is-expanded"),this.menuIcon.classList.toggle("site-header__menu-icon--close-x")}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();var o=r(493),l=r.n(o),s=r(279),a=r.n(s);function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}const u=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.thresholdPercent=r,this.itemsToReveal=t,this.browserHeight=window.innerHeight,this.hideInitially(),this.scrollThrottle=l()(this.calcCaller,200).bind(this),this.events()}var t,r;return t=e,(r=[{key:"events",value:function(){var e=this;window.addEventListener("scroll",this.scrollThrottle),window.addEventListener("resize",a()((function(){e.browserHeight=window.innerHeight}),333))}},{key:"calcCaller",value:function(){var e=this;this.itemsToReveal.forEach((function(t){0==t.isRevealed&&e.calculateIfScrolledTo(t)}))}},{key:"calculateIfScrolledTo",value:function(e){window.scrollY+this.browserHeight>e.offsetTop&&e.getBoundingClientRect().top/this.browserHeight*100<this.thresholdPercent&&(e.classList.add("reveal-item--is-visible"),e.isRevealed=!0,1==e.isLastItem&&window.removeEventListener("scroll",this.scrollThrottle))}},{key:"hideInitially",value:function(){this.itemsToReveal.forEach((function(e){e.classList.add("reveal-item"),e.isRevealed=!1})),this.itemsToReveal[this.itemsToReveal.length-1].isLastItem=!0}}])&&c(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var h;new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.siteHeader=document.querySelector(".site-header"),this.pageSections=document.querySelectorAll(".page-section"),this.browserHeight=window.innerHeight,this.previousScrollY=window.scrollY,this.events()}var t,r;return t=e,(r=[{key:"events",value:function(){var e=this;window.addEventListener("scroll",l()((function(){return e.runOnScroll()}),200)),window.addEventListener("resize",a()((function(){e.browserHeight=window.innerHeight}),333))}},{key:"runOnScroll",value:function(){var e=this;this.determineScrollDirection(),window.scrollY>60?this.siteHeader.classList.add("site-header--dark"):this.siteHeader.classList.remove("site-header--dark"),this.pageSections.forEach((function(t){return e.calcSection(t)}))}},{key:"determineScrollDirection",value:function(){window.scrollY>this.previousScrollY?this.scrollDirection="down":this.scrollDirection="up",this.previousScrollY=window.scrollY}},{key:"calcSection",value:function(e){if(window.scrollY+this.browserHeight>e.offsetTop&&window.scrollY<e.offsetTop+e.offsetHeight){var t=e.getBoundingClientRect().y/this.browserHeight*100;if(t<18&&t>-.1&&"down"==this.scrollDirection||t<33&&"up"==this.scrollDirection){var r=e.getAttribute("data-matching-link");document.querySelectorAll(".primary-nav a:not(".concat(r,")")).forEach((function(e){return e.classList.remove("is-current-link")})),document.querySelector(r).classList.add("is-current-link")}}}}])&&d(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}()),new u(document.querySelectorAll(".feature-item"),75),new u(document.querySelectorAll(".testimonial"),60),new i,document.querySelectorAll(".open-modal").forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),void 0===h?r.e(582).then(r.bind(r,222)).then((function(e){h=new e.default,setTimeout((function(){return h.openTheModal()}),20)})).catch((function(){return console.log("There was a problem loading modal")})):h.openTheModal()}))}))}},i={};function o(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={exports:{}};return n[e](r,r.exports,o),r.exports}o.m=n,e=[],o.O=(t,r,n,i)=>{if(!r){var l=1/0;for(u=0;u<e.length;u++){for(var[r,n,i]=e[u],s=!0,a=0;a<r.length;a++)(!1&i||l>=i)&&Object.keys(o.O).every((e=>o.O[e](r[a])))?r.splice(a--,1):(s=!1,i<l&&(l=i));if(s){e.splice(u--,1);var c=n();void 0!==c&&(t=c)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[r,n,i]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,r)=>(o.f[r](e,t),t)),[])),o.u=e=>"modal.ecafe47d7aac8b5ac482.js",o.miniCssF=e=>"styles.e9ed6ff680eb1b1e6512.css",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t={},r="travel-site:",o.l=(e,n,i,l)=>{if(t[e])t[e].push(n);else{var s,a;if(void 0!==i)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==r+i){s=d;break}}s||(a=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.setAttribute("data-webpack",r+i),s.src=e),t[e]=[n];var h=(r,n)=>{s.onerror=s.onload=null,clearTimeout(f);var i=t[e];if(delete t[e],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((e=>e(n))),r)return r(n)},f=setTimeout(h.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=h.bind(null,s.onerror),s.onload=h.bind(null,s.onload),a&&document.head.appendChild(s)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{var e={179:0};o.f.j=(t,r)=>{var n=o.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var i=new Promise(((r,i)=>n=e[t]=[r,i]));r.push(n[2]=i);var l=o.p+o.u(t),s=new Error;o.l(l,(r=>{if(o.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var i=r&&("load"===r.type?"missing":r.type),l=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+l+")",s.name="ChunkLoadError",s.type=i,s.request=l,n[1](s)}}),"chunk-"+t,t)}},o.O.j=t=>0===e[t];var t=(t,r)=>{var n,i,[l,s,a]=r,c=0;if(l.some((t=>0!==e[t]))){for(n in s)o.o(s,n)&&(o.m[n]=s[n]);if(a)var u=a(o)}for(t&&t(r);c<l.length;c++)i=l[c],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(u)},r=self.webpackChunktravel_site=self.webpackChunktravel_site||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var l=o.O(void 0,[216],(()=>o(409)));l=o.O(l)})();