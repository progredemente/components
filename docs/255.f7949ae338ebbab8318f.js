"use strict";(self.webpackChunkcomponents=self.webpackChunkcomponents||[]).push([[255,16],{16:function(e,o,r){r.r(o),r.d(o,{Cropper:function(){return p},default:function(){return p}});var t=r(822),n=r.n(t),a=r(458),c=r.n(a),i=function(){return i=Object.assign||function(e){for(var o,r=1,t=arguments.length;r<t;r++)for(var n in o=arguments[r])Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);return e},i.apply(this,arguments)};function l(e,o){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(t=Object.getOwnPropertySymbols(e);n<t.length;n++)o.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(r[t[n]]=e[t[n]])}return r}var u=["aspectRatio","autoCrop","autoCropArea","background","center","checkCrossOrigin","checkOrientation","cropBoxMovable","cropBoxResizable","data","dragMode","guides","highlight","initialAspectRatio","minCanvasHeight","minCanvasWidth","minContainerHeight","minContainerWidth","minCropBoxHeight","minCropBoxWidth","modal","movable","preview","responsive","restore","rotatable","scalable","toggleDragModeOnDblclick","viewMode","wheelZoomRatio","zoomOnTouch","zoomOnWheel","zoomable","cropstart","cropmove","cropend","crop","zoom","ready"],s={opacity:0,maxWidth:"100%"},p=n().forwardRef((function(e,o){var r=l(e,[]),a=r.dragMode,p=void 0===a?"crop":a,d=r.src,f=r.style,v=r.className,m=r.crossOrigin,b=r.scaleX,g=r.scaleY,y=r.enable,h=r.zoomTo,O=r.rotateTo,T=r.alt,z=void 0===T?"picture":T,C=r.ready,w=r.onInitialized,k=l(r,["dragMode","src","style","className","crossOrigin","scaleX","scaleY","enable","zoomTo","rotateTo","alt","ready","onInitialized"]),E={scaleY:g,scaleX:b,enable:y,zoomTo:h,rotateTo:O},x=function(){for(var e=[],o=0;o<arguments.length;o++)e[o]=arguments[o];var r=(0,t.useRef)(null);return n().useEffect((function(){e.forEach((function(e){e&&("function"==typeof e?e(r.current):e.current=r.current)}))}),[e]),r}(o,(0,t.useRef)(null));(0,t.useEffect)((function(){var e;(null===(e=x.current)||void 0===e?void 0:e.cropper)&&"number"==typeof h&&x.current.cropper.zoomTo(h)}),[r.zoomTo]),(0,t.useEffect)((function(){var e;(null===(e=x.current)||void 0===e?void 0:e.cropper)&&void 0!==d&&x.current.cropper.reset().clear().replace(d)}),[d]),(0,t.useEffect)((function(){if(null!==x.current){var e=new(c())(x.current,i(i({dragMode:p},k),{ready:function(e){null!==e.currentTarget&&function(e,o){void 0===o&&(o={});var r=o.enable,t=void 0===r||r,n=o.scaleX,a=void 0===n?1:n,c=o.scaleY,i=void 0===c?1:c,l=o.zoomTo,u=void 0===l?0:l,s=o.rotateTo;t?e.enable():e.disable(),e.scaleX(a),e.scaleY(i),void 0!==s&&e.rotateTo(s),u>0&&e.zoomTo(u)}(e.currentTarget.cropper,E),C&&C(e)}}));w&&w(e)}return function(){var e,o;null===(o=null===(e=x.current)||void 0===e?void 0:e.cropper)||void 0===o||o.destroy()}}),[x]);var M,R=(M=i(i({},k),{crossOrigin:m,src:d,alt:z}),u.reduce((function(e,o){var r=e,t=o;return r[t],l(r,["symbol"==typeof t?t:t+""])}),M));return n().createElement("div",{style:f,className:v},n().createElement("img",i({},R,{style:s,ref:x})))}))}}]);