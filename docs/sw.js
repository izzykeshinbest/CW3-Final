if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let t={};const c=e=>n(e,o),l={module:{uri:o},exports:t,require:c};i[o]=Promise.all(s.map((e=>l[e]||c(e)))).then((e=>(r(...e),t)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-CzeaLNIN.js",revision:null},{url:"assets/index-Q0nIhklI.css",revision:null},{url:"index.html",revision:"f90497c090e51df9d4f002781d766831"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"icons/icon-192x192.png",revision:"56c056b59cbd0ab42d63bf9ec28250d8"},{url:"icons/icon-512x512.png",revision:"f93e66359c0ea27bb60498fbe0b49b51"},{url:"manifest.webmanifest",revision:"87af9895c7077f394c90f4e1f90c953e"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));