"use strict";(self.webpackChunkcomponents=self.webpackChunkcomponents||[]).push([[945],{945:function(t,e,n){n.r(e),n.d(e,{Icon:function(){return C}});var r=n(822),o=n.n(r),i=(n(745),n(379)),c=n.n(i),a=n(795),u=n.n(a),s=n(569),f=n.n(s),l=n(565),p=n.n(l),d=n(216),y=n.n(d),v=n(589),m=n.n(v),h=n(424),b={};function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function w(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(o=r.key,i=void 0,i=function(t,e){if("object"!==g(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==g(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o),"symbol"===g(i)?i:String(i)),r)}var o,i}function S(t,e){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},S(t,e)}function O(t){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},O(t)}b.styleTagTransform=m(),b.setAttributes=p(),b.insert=f().bind(null,"head"),b.domAPI=u(),b.insertStyleElement=y(),c()(h.Z,b),h.Z&&h.Z.locals&&h.Z.locals;var j=n(728),T={};function P(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=O(t);if(e){var o=O(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return function(t,e){if(e&&("object"===g(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,n)}}T.styleTagTransform=m(),T.setAttributes=p(),T.insert=f().bind(null,"head"),T.domAPI=u(),T.insertStyleElement=y(),c()(j.Z,T),j.Z&&j.Z.locals&&j.Z.locals;var x=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&S(t,e)}(i,t);var e,n,r=P(i);function i(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),r.apply(this,arguments)}return e=i,(n=[{key:"render",value:function(){return o().createElement("span",{className:"icon",style:{"--content":'"'.concat(this.props.icon,'"')}})}}])&&w(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),i}(r.Component),C=x},728:function(t,e,n){var r=n(81),o=n.n(r),i=n(645),c=n.n(i)()(o());c.push([t.id,".icon::before {\n    font-family: ComicIcons;\n    content: var(--content);\n}",""]),e.Z=c},424:function(t,e,n){var r=n(81),o=n.n(r),i=n(645),c=n.n(i)()(o());c.push([t.id,"\n",""]),e.Z=c},645:function(t){t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var c={};if(r)for(var a=0;a<this.length;a++){var u=this[a][0];null!=u&&(c[u]=!0)}for(var s=0;s<t.length;s++){var f=[].concat(t[s]);r&&c[f[0]]||(void 0!==i&&(void 0===f[5]||(f[1]="@layer".concat(f[5].length>0?" ".concat(f[5]):""," {").concat(f[1],"}")),f[5]=i),n&&(f[2]?(f[1]="@media ".concat(f[2]," {").concat(f[1],"}"),f[2]=n):f[2]=n),o&&(f[4]?(f[1]="@supports (".concat(f[4],") {").concat(f[1],"}"),f[4]=o):f[4]="".concat(o)),e.push(f))}},e}},81:function(t){t.exports=function(t){return t[1]}},745:function(t,e,n){var r=n(468);r.createRoot,r.hydrateRoot},379:function(t){var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var i={},c=[],a=0;a<t.length;a++){var u=t[a],s=r.base?u[0]+r.base:u[0],f=i[s]||0,l="".concat(s," ").concat(f);i[s]=f+1;var p=n(l),d={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==p)e[p].references++,e[p].updater(d);else{var y=o(d,r);r.byIndex=a,e.splice(a,0,{identifier:l,updater:y,references:1})}c.push(l)}return c}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var i=r(t=t||[],o=o||{});return function(t){t=t||[];for(var c=0;c<i.length;c++){var a=n(i[c]);e[a].references--}for(var u=r(t,o),s=0;s<i.length;s++){var f=n(i[s]);0===e[f].references&&(e[f].updater(),e.splice(f,1))}i=u}}},569:function(t){var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:function(t){t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:function(t,e,n){t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:function(t){t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:function(t){t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}}]);