"use strict";(self.webpackChunkcomponents=self.webpackChunkcomponents||[]).push([[908],{488:function(n,t,e){e.r(t),e.d(t,{AppsBar:function(){return L},GIFEncoder:function(){return Q},Icon:function(){return C},ImageCropperModal:function(){return N},appList:function(){return j}});var r=e(822),a=e.n(r),o=(e(745),e(379)),i=e.n(o),c=e(795),p=e.n(c),s=e(569),l=e.n(s),u=e(565),f=e.n(u),d=e(216),h=e.n(d),m=e(589),g=e.n(m),b=e(424),y={};y.styleTagTransform=g(),y.setAttributes=f(),y.insert=l().bind(null,"head"),y.domAPI=p(),y.insertStyleElement=h(),i()(b.Z,y),b.Z&&b.Z.locals&&b.Z.locals;var v=e(671),w=e(144),A=e(340),B=e(963),Z=e(120),x=e(728),k={};k.styleTagTransform=g(),k.setAttributes=f(),k.insert=l().bind(null,"head"),k.domAPI=p(),k.insertStyleElement=h(),i()(x.Z,k),x.Z&&x.Z.locals&&x.Z.locals;var R=function(n){(0,A.Z)(o,n);var t,e,r=(t=o,e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}(),function(){var n,r=(0,Z.Z)(t);if(e){var a=(0,Z.Z)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,B.Z)(this,n)});function o(){return(0,v.Z)(this,o),r.apply(this,arguments)}return(0,w.Z)(o,[{key:"render",value:function(){return a().createElement("span",{className:"icon",style:{"--content":'"'.concat(this.props.icon,'"')}})}}]),o}(r.Component),C=R,E=e(326),M=e(942),T=e(343),P=(e(63),e(393)),S={};S.styleTagTransform=g(),S.setAttributes=f(),S.insert=l().bind(null,"head"),S.domAPI=p(),S.insertStyleElement=h(),i()(P.Z,S),P.Z&&P.Z.locals&&P.Z.locals;var I,F=function(n){(0,A.Z)(i,n);var t,e,o=(t=i,e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}(),function(){var n,r=(0,Z.Z)(t);if(e){var a=(0,Z.Z)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,B.Z)(this,n)});function i(n){var t;return(0,v.Z)(this,i),t=o.call(this,n),(0,M.Z)((0,E.Z)(t),"hideModal",(function(){var n=new Image;n.src=t.cropperRef.current.cropper.getCroppedCanvas().toDataURL(),n.onload=function(){t.props.setCrop(n),t.setState({showModal:!1})}})),t.state={showModal:!1},t.cropperRef=(0,r.createRef)(),t}return(0,w.Z)(i,[{key:"showModal",value:function(){this.setState({showModal:!0})}},{key:"render",value:function(){return a().createElement("div",{className:"image-cropper-modal".concat(this.state.showModal?"":" hidden"),onClick:this.hideModal,onMouseUp:function(){return!1}},a().createElement("div",{className:"image-cropper-modal-container",onClick:function(n){n.stopPropagation()}},a().createElement("div",{className:"image-cropper-modal-title"},"Recortar imagen"),a().createElement(T.Cropper,{src:this.props.face.src,aspectRatio:1,style:{height:Math.min(500,window.innerWidth-40),width:Math.min(500,window.innerWidth-40)},zoomable:!1,ref:this.cropperRef}),a().createElement("div",{className:"prg-button",onClick:this.hideModal},"Aceptar")))}}]),i}(r.Component),N=F,U=e(877),z={};z.styleTagTransform=g(),z.setAttributes=f(),z.insert=l().bind(null,"head"),z.domAPI=p(),z.insertStyleElement=h(),i()(U.Z,z),U.Z&&U.Z.locals&&U.Z.locals;try{I=navigator.language.toLowerCase().split("-")[0]}catch(n){}["en","es"].includes(I)||(I="en");var j={perroflautum:{img:"perroflautum.png",name:"Perro Flautum",type:"other"},strawman:{img:"strawman.png",name:"es"===I?"Hombre de paja":"Straw man",type:"image"},cable:{img:"cable.png",name:"Recoge Cable",type:"gif"},camaleon:{img:"camaleon.png",name:"Camaleón",type:"gif"},calor:{img:"calor.png",name:"¡Calor!",type:"other"},"buon-appetito":{img:"buon_appetito.png",name:"Buon Appetito",type:"gif"},"d-hondt":{img:"d_hondt.png",name:"d'Hondt tread on me",type:"other"},planchabragas:{img:"planchabragas.png",name:"Plancha Bragas",type:"gif"}};var D=function(n){(0,A.Z)(i,n);var t,e,o=(t=i,e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}(),function(){var n,r=(0,Z.Z)(t);if(e){var a=(0,Z.Z)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,B.Z)(this,n)});function i(n){var t;return(0,v.Z)(this,i),(t=o.call(this,n)).ref=(0,r.createRef)(),t}return(0,w.Z)(i,[{key:"componentDidMount",value:function(){var n=JSON.parse(sessionStorage.getItem("apps-bar-scroll")||'{"top": 0, "left": 0}');this.ref.current.scrollTop=n.top,this.ref.current.scrollLeft=n.left,this.ref.current.onscroll=function(n){sessionStorage.setItem("apps-bar-scroll",JSON.stringify({top:n.target.scrollTop,left:n.target.scrollLeft}))}}},{key:"render",value:function(){var n=this;return a().createElement("div",{className:"apps-bar-container"},a().createElement("div",{className:"apps-bar",ref:this.ref},a().createElement("a",{className:"apps-bar-app apps-bar-home",href:"/labs"},a().createElement("img",{src:"".concat("/resources","/labs_home.png")}),a().createElement("span",null,"progredemente labs")),Object.keys(j).map((function(t){return a().createElement("a",{key:t,className:"apps-bar-app".concat(n.props.current===t?" current":""),href:"/".concat(t)},a().createElement("img",{src:"".concat("/resources","/").concat(j[t].img)}),a().createElement("span",null,j[t].name))}))),a().createElement("div",{className:"apps-bar-page"},this.props.children))}}]),i}(r.Component),L=D;function O(){var n,t,e,r,a,o,i,c,p,s,l,u,f={},d=[],h=[],m=5003,g=0,b=!1,y=0,v=0,w=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535],A=[],B=f.LZWEncoder=function(a,o,i,c){n=a,t=o,e=i,r=Math.max(2,c)},Z=function(n,t){A[u++]=n,u>=254&&C(t)},x=function(n){k(m),g=s+2,b=!0,T(s,n)},k=function(n){for(var t=0;t<n;++t)d[t]=-1},R=f.compress=function(n,t){var e,r,a,o,f,y;for(b=!1,c=E(i=p=n),l=1+(s=1<<n-1),g=s+2,u=0,o=M(),y=0,e=m;e<65536;e*=2)++y;y=8-y,k(m),T(s,t);n:for(;-1!=(a=M());)if(e=(a<<12)+o,d[r=a<<y^o]!=e){if(d[r]>=0){f=5003-r,0===r&&(f=1);do{if((r-=f)<0&&(r+=5003),d[r]==e){o=h[r];continue n}}while(d[r]>=0)}T(o,t),o=a,g<4096?(h[r]=g++,d[r]=e):x(t)}else o=h[r];T(o,t),T(l,t)},C=(f.encode=function(e){e.writeByte(r),a=n*t,o=0,R(r+1,e),e.writeByte(0)},function(n){u>0&&(n.writeByte(u),n.writeBytes(A,0,u),u=0)}),E=function(n){return(1<<n)-1},M=function(){return 0===a?-1:(--a,255&e[o++])},T=function(n,t){for(y&=w[v],v>0?y|=n<<v:y=n,v+=i;v>=8;)Z(255&y,t),y>>=8,v-=8;if((g>c||b)&&(b?(c=E(i=p),b=!1):(++i,c=12==i?4096:E(i))),n==l){for(;v>0;)Z(255&y,t),y>>=8,v-=8;C(t)}};return B.apply(this,arguments),f}function G(){var n,t,e,r,a,o={},i=256,c=1024,p=1<<18,s=[],l=[],u=[],f=[],d=o.NeuQuant=function(n,o,c){var p,s;for(t=n,e=o,r=c,a=new Array(i),p=0;p<i;p++)a[p]=new Array(4),(s=a[p])[0]=s[1]=s[2]=(p<<12)/i,u[p]=256,l[p]=0},h=(o.map=function(n,t,e){var r,o,c,p,l,u,f;for(l=1e3,f=-1,o=(r=s[t])-1;r<i||o>=0;)r<i&&((c=(u=a[r])[1]-t)>=l?r=i:(r++,c<0&&(c=-c),(p=u[0]-n)<0&&(p=-p),(c+=p)<l&&((p=u[2]-e)<0&&(p=-p),(c+=p)<l&&(l=c,f=u[3])))),o>=0&&((c=t-(u=a[o])[1])>=l?o=-1:(o--,c<0&&(c=-c),(p=u[0]-n)<0&&(p=-p),(c+=p)<l&&((p=u[2]-e)<0&&(p=-p),(c+=p)<l&&(l=c,f=u[3]))));return f},o.process=function(){return function(){var a,o,i,p,s,l,u,d,h,y,v,w,A,B;for(e<1509&&(r=1),n=30+(r-1)/3,w=t,A=0,B=e,y=(v=e/(3*r))/100|0,d=c,(u=(l=2048)>>6)<=1&&(u=0),a=0;a<u;a++)f[a]=d*(256*(u*u-a*a)/(u*u));for(h=e<1509?3:e%499!=0?1497:e%491!=0?1473:e%487!=0?1461:1509,a=0;a<v;)if(i=(255&w[A+0])<<4,p=(255&w[A+1])<<4,s=(255&w[A+2])<<4,o=b(i,p,s),g(d,o,i,p,s),0!==u&&m(u,o,i,p,s),(A+=h)>=B&&(A-=e),0===y&&(y=1),++a%y==0)for(d-=d/n,(u=(l-=l/30)>>6)<=1&&(u=0),o=0;o<u;o++)f[o]=d*(256*(u*u-o*o)/(u*u))}(),h(),function(){var n,t,e,r,o,c,p,l;for(p=0,l=0,n=0;n<i;n++){for(e=n,r=(o=a[n])[1],t=n+1;t<i;t++)(c=a[t])[1]<r&&(e=t,r=c[1]);if(c=a[e],n!=e&&(t=c[0],c[0]=o[0],o[0]=t,t=c[1],c[1]=o[1],o[1]=t,t=c[2],c[2]=o[2],o[2]=t,t=c[3],c[3]=o[3],o[3]=t),r!=p){for(s[p]=l+n>>1,t=p+1;t<r;t++)s[t]=n;p=r,l=n}}for(s[p]=l+255>>1,t=p+1;t<256;t++)s[t]=255}(),function(){for(var n=[],t=new Array(i),e=0;e<i;e++)t[a[e][3]]=e;for(var r=0,o=0;o<i;o++){var c=t[o];n[r++]=a[c][0],n[r++]=a[c][1],n[r++]=a[c][2]}return n}()},function(){var n;for(n=0;n<i;n++)a[n][0]>>=4,a[n][1]>>=4,a[n][2]>>=4,a[n][3]=n}),m=function(n,t,e,r,o){var c,s,l,u,d,h,m;for((l=t-n)<-1&&(l=-1),(u=t+n)>i&&(u=i),c=t+1,s=t-1,h=1;c<u||s>l;){if(d=f[h++],c<u){m=a[c++];try{m[0]-=d*(m[0]-e)/p,m[1]-=d*(m[1]-r)/p,m[2]-=d*(m[2]-o)/p}catch(n){}}if(s>l){m=a[s--];try{m[0]-=d*(m[0]-e)/p,m[1]-=d*(m[1]-r)/p,m[2]-=d*(m[2]-o)/p}catch(n){}}}},g=function(n,t,e,r,o){var i=a[t];i[0]-=n*(i[0]-e)/c,i[1]-=n*(i[1]-r)/c,i[2]-=n*(i[2]-o)/c},b=function(n,t,e){var r,o,c,p,s,f,d,h,m,g;for(m=h=~(1<<31),d=f=-1,r=0;r<i;r++)(o=(g=a[r])[0]-n)<0&&(o=-o),(c=g[1]-t)<0&&(c=-c),o+=c,(c=g[2]-e)<0&&(c=-c),(o+=c)<h&&(h=o,f=r),(p=o-(l[r]>>12))<m&&(m=p,d=r),s=u[r]>>10,u[r]-=s,l[r]+=s<<10;return u[f]+=64,l[f]-=65536,d};return d.apply(this,arguments),o}function Q(){for(var n=0,t={};n<256;n++)t[n]=String.fromCharCode(n);function e(){this.bin=[]}e.prototype.getData=function(){for(var n="",e=this.bin.length,r=0;r<e;r++)n+=t[this.bin[r]];return n},e.prototype.writeByte=function(n){this.bin.push(n)},e.prototype.writeUTFBytes=function(n){for(var t=n.length,e=0;e<t;e++)this.writeByte(n.charCodeAt(e))},e.prototype.writeBytes=function(n,t,e){for(var r=e||n.length,a=t||0;a<r;a++)this.writeByte(n[a])};var r,a,o,i,c,p,s,l,u,f={},d=null,h=-1,m=0,g=!1,b=[],y=7,v=-1,w=!1,A=!0,B=!1,Z=10,x="Generated by jsgif (https://github.com/antimatter15/jsgif/)",k=(f.setDelay=function(n){m=Math.round(n/10)},f.setDispose=function(n){n>=0&&(v=n)},f.setRepeat=function(n){n>=0&&(h=n)},f.setTransparent=function(n){d=n},f.setComment=function(n){x=n},f.addFrame=function(n,t){if(null===n||!g||null===i)throw new Error("Please call start method before calling addFrame");var e=!0;try{t?n instanceof ImageData?(c=n.data,B&&r==n.width&&a==n.height||R(n.width,n.height)):n instanceof Uint8ClampedArray?n.length==r*a*4?c=n:(console.log("Please set the correct size: ImageData length mismatch"),e=!1):(console.log("Please provide correct input"),e=!1):(c=n.getImageData(0,0,n.canvas.width,n.canvas.height).data,B||R(n.canvas.width,n.canvas.height)),M(),C(),A&&(I(),N(),h>=0&&F()),T(),""!==x&&P(),S(),A||N(),z(),A=!1}catch(n){e=!1}return e},f.download=function(n){if(null===i||0==w)console.log("Please call start method and add frames and call finish method before calling download");else{n=void 0!==n?n.endsWith(".gif")?n:n+".gif":"download.gif";var t=document.createElement("a");t.download=n,t.href=URL.createObjectURL(new Blob([new Uint8Array(i.bin)],{type:"image/gif"})),t.click()}},f.finish=function(){if(!g)return!1;var n=!0;g=!1;try{i.writeByte(59),w=!0}catch(t){n=!1}return n},function(){o=0,c=null,p=null,s=null,u=null,w=!1,A=!0}),R=(f.setFrameRate=function(n){15!=n&&(m=Math.round(100/n))},f.setQuality=function(n){n<1&&(n=1),Z=n},f.setSize=function(n,t){g&&!A||((r=n)<1&&(r=320),(a=t)<1&&(a=240),B=!0)}),C=(f.start=function(){k();var n=!0;w=!1,i=new e;try{i.writeUTFBytes("GIF89a")}catch(t){n=!1}return g=n},f.cont=function(){return k(),w=!1,i=new e,g=!0},function(){var n=p.length,t=n/3;s=[];var e=new G(p,n,Z);u=e.process();for(var r=0,a=0;a<t;a++){var i=e.map(255&p[r++],255&p[r++],255&p[r++]);b[i]=!0,s[a]=i}p=null,l=8,y=7,null!==d&&(o=E(d))}),E=function(n){if(null===u)return-1;for(var t=(16711680&n)>>16,e=(65280&n)>>8,r=255&n,a=0,o=16777216,i=u.length,c=0;c<i;){var p=t-(255&u[c++]),s=e-(255&u[c++]),l=r-(255&u[c]),f=p*p+s*s+l*l,d=c/3;b[d]&&f<o&&(o=f,a=d),c++}return a},M=function(){var n=r,t=a;p=[];for(var e=c,o=0,i=0;i<t;i++)for(var s=0;s<n;s++){var l=i*n*4+4*s;p[o++]=e[l],p[o++]=e[l+1],p[o++]=e[l+2]}},T=function(){var n,t;i.writeByte(33),i.writeByte(249),i.writeByte(4),null===d?(n=0,t=0):(n=1,t=2),v>=0&&(t=7&v),t<<=2,i.writeByte(0|t|n),U(m),i.writeByte(o),i.writeByte(0)},P=function(){i.writeByte(33),i.writeByte(254),i.writeByte(x.length),i.writeUTFBytes(x),i.writeByte(0)},S=function(){i.writeByte(44),U(0),U(0),U(r),U(a),A?i.writeByte(0):i.writeByte(128|y)},I=function(){U(r),U(a),i.writeByte(240|y),i.writeByte(0),i.writeByte(0)},F=function(){i.writeByte(33),i.writeByte(255),i.writeByte(11),i.writeUTFBytes("NETSCAPE2.0"),i.writeByte(3),i.writeByte(1),U(h),i.writeByte(0)},N=function(){i.writeBytes(u);for(var n=768-u.length,t=0;t<n;t++)i.writeByte(0)},U=function(n){i.writeByte(255&n),i.writeByte(n>>8&255)},z=function(){new O(r,a,s,l).encode(i)};return f.stream=function(){return i},f.setProperties=function(n,t){g=n,A=t},f}},877:function(n,t,e){var r=e(81),a=e.n(r),o=e(645),i=e.n(o)()(a());i.push([n.id,".apps-bar-container {\n    --apps-bar-primary-color: black;\n    --apps-bar-secondary-color: gray;\n    --apps-bar-text-primary-color: black;\n    --apps-bar-text-secondary-color: white;\n    --apps-bar-width: 60px;\n    --apps-bar-icon-width: 40px;\n    --apps-bar-padding: calc((var(--apps-bar-width) - var(--apps-bar-icon-width)) / 2);\n    --apps-bar-grow-time: .15s;\n    display: flex;\n    height: 100%;\n    width: 100%;\n}\n\n.apps-bar {\n    height: 100%;\n    background-color: var(--apps-bar-secondary-color);\n    width: var(--apps-bar-width);\n    position: absolute;\n    transition: width var(--apps-bar-grow-time) ease-out;\n    overflow-x: hidden;\n    z-index: 10;\n}\n\n.apps-bar:hover{\n    width: 300px;\n}\n\n.apps-bar-app {\n    display: flex;\n    align-items: center;\n    padding: calc(var(--apps-bar-padding)/2) var(--apps-bar-padding);\n    font-size: .75em;\n    width: 300px;\n    color: var(--apps-bar-text-primary-color);\n}\n\n.apps-bar-app.current,\n.apps-bar-app:hover{\n    background-color: var(--apps-bar-primary-color);\n    color: var(--apps-bar-text-secondary-color);\n}\n\n.apps-bar-home:hover{\n    background-color: initial;\n    color: initial;\n}\n\n.apps-bar-app > img {\n    display: block;\n    width: var(--apps-bar-icon-width);\n    height: var(--apps-bar-icon-width);\n    border-radius: 5px;\n    background-color: white;\n}\n\n.apps-bar-home > img{\n    background-color: transparent;\n    width: var(--apps-bar-icon-width);\n    height: var(--apps-bar-icon-width);\n    filter: drop-shadow(var(--apps-bar-primary-color) calc(var(--apps-bar-icon-width) * 2) 0px);\n    transform: translateX(calc(-2 * var(--apps-bar-icon-width)));\n}\n\n.apps-bar-page {\n    flex-grow: 1;\n    overflow-y: auto;\n    margin-left: var(--apps-bar-width);\n}\n\n.apps-bar-app > span {\n    margin-left: var(--apps-bar-padding);\n    visibility: hidden;\n}\n\n.apps-bar-home > span {\n    font-size: 1.25em;\n    color: var(--apps-bar-text-primary-color);\n}\n\n.apps-bar-home:hover > span {\n    color: var(--apps-bar-primary-color);\n}\n\n.apps-bar:hover .apps-bar-app > span {\n    visibility: visible;\n    transition: visibility 0s linear var(--apps-bar-grow-time);\n}\n\n@media all and (max-width: 1000px){\n    .apps-bar-container {\n        flex-direction: column-reverse;\n    }\n    .apps-bar {\n        height: var(--apps-bar-width);\n        width: 100%;\n        position: absolute;\n        transition: none;\n        overflow-x: auto;\n        overflow-y: hidden;\n        white-space: nowrap;\n        text-align: center;\n        padding: 0 calc(var(--apps-bar-padding));\n    }\n\n    .apps-bar::before {\n        width: calc(var(--apps-bar-padding));\n        position: fixed;\n        height: 100%;\n        content: '';\n        display: block;\n        left: 0;\n        background: linear-gradient(90deg, var(--apps-bar-secondary-color), transparent);\n        z-index: 1;\n    }\n\n    .apps-bar::after {\n        width: calc(var(--apps-bar-padding));\n        position: fixed;\n        height: 100%;\n        content: '';\n        display: block;\n        right: 0;\n        bottom: 0;\n        height: var(--apps-bar-width);\n        background: linear-gradient(90deg, transparent, var(--apps-bar-secondary-color));\n    }\n\n    .apps-bar:hover{\n        width: 100%;\n    }\n\n    .apps-bar-app {\n        display: inline-block;\n        padding: var(--apps-bar-padding) calc(var(--apps-bar-padding)/2);\n        font-size: .75em;\n        color: var(--apps-bar-text-primary-color);\n        width: var(--apps-bar-icon-width);\n        box-sizing: content-box;\n    }\n    \n    .apps-bar-app > img {\n        display: initial;\n    }\n    \n    .apps-bar-page {\n        flex-grow: 1;\n        overflow-y: auto;\n        margin-left: 0;\n        margin-bottom: var(--apps-bar-width);\n    }\n    \n    .apps-bar-app > span {\n        display: none;\n    }\n}\n",""]),t.Z=i},728:function(n,t,e){var r=e(81),a=e.n(r),o=e(645),i=e.n(o)()(a());i.push([n.id,".icon::before {\n    font-family: ComicIcons;\n    content: var(--content);\n}",""]),t.Z=i},393:function(n,t,e){var r=e(81),a=e.n(r),o=e(645),i=e.n(o)()(a());i.push([n.id,".image-cropper-modal {\n    --image-cropper-modal-background-shade-color: rgba(128, 128, 128, 0.5);\n    --image-cropper-modal-background-color: white;\n    --image-cropper-modal-title-color: black;\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    z-index: 20;\n    background-color: var(--image-cropper-modal-background-shade-color);\n    padding: 10px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.image-cropper-modal.hidden {\n    display: none;\n}\n\n.image-cropper-modal-container {\n    background-color: var(--image-cropper-modal-background-color);\n    border-radius: 10px;\n    padding: 10px;\n    display: inline-flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.image-cropper-modal-title {\n    font-size: 1.5em;\n    padding: 10px;\n    color: var(--image-cropper-modal-title-color)\n}",""]),t.Z=i},424:function(n,t,e){var r=e(81),a=e.n(r),o=e(645),i=e.n(o)()(a());i.push([n.id,"",""]),t.Z=i},738:function(n){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC"}}]);