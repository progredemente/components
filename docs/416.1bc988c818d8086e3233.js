"use strict";(self.webpackChunkcomponents=self.webpackChunkcomponents||[]).push([[416],{348:function(n,e,t){t.r(e),t.d(e,{AppsBar:function(){return L},GIFEncoder:function(){return Q},GIFer:function(){return X},Icon:function(){return R},ImageCropperModal:function(){return z},appList:function(){return j}});var r=t(822),a=t.n(r),o=(t(745),t(379)),i=t.n(o),c=t(795),l=t.n(c),s=t(569),p=t.n(s),d=t(565),f=t.n(d),u=t(216),g=t.n(u),m=t(589),h=t.n(m),b=t(424),y={};y.styleTagTransform=h(),y.setAttributes=f(),y.insert=p().bind(null,"head"),y.domAPI=l(),y.insertStyleElement=g(),i()(b.Z,y),b.Z&&b.Z.locals&&b.Z.locals;var v=t(671),w=t(144),x=t(340),A=t(963),B=t(120),k=t(728),E={};E.styleTagTransform=h(),E.setAttributes=f(),E.insert=p().bind(null,"head"),E.domAPI=l(),E.insertStyleElement=g(),i()(k.Z,E),k.Z&&k.Z.locals&&k.Z.locals;var Z=function(n){(0,x.Z)(o,n);var e,t,r=(e=o,t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}(),function(){var n,r=(0,B.Z)(e);if(t){var a=(0,B.Z)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,A.Z)(this,n)});function o(){return(0,v.Z)(this,o),r.apply(this,arguments)}return(0,w.Z)(o,[{key:"render",value:function(){return a().createElement("span",{className:"icon",style:{"--content":'"'.concat(this.props.icon,'"')}})}}]),o}(r.Component),R=Z,C=t(326),I=t(942),M=t(343),T=(t(63),t(393)),F={};F.styleTagTransform=h(),F.setAttributes=f(),F.insert=p().bind(null,"head"),F.domAPI=l(),F.insertStyleElement=g(),i()(T.Z,F),T.Z&&T.Z.locals&&T.Z.locals;var S,N=function(n){(0,x.Z)(i,n);var e,t,o=(e=i,t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}(),function(){var n,r=(0,B.Z)(e);if(t){var a=(0,B.Z)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,A.Z)(this,n)});function i(n){var e;return(0,v.Z)(this,i),e=o.call(this,n),(0,I.Z)((0,C.Z)(e),"hideModal",(function(){var n=new Image;n.src=e.cropperRef.current.cropper.getCroppedCanvas().toDataURL(),n.onload=function(){e.props.setCrop(n),e.setState({showModal:!1})}})),e.state={showModal:!1},e.cropperRef=(0,r.createRef)(),e}return(0,w.Z)(i,[{key:"showModal",value:function(){this.setState({showModal:!0})}},{key:"render",value:function(){return a().createElement("div",{className:"image-cropper-modal".concat(this.state.showModal?"":" hidden"),onClick:this.hideModal,onMouseUp:function(){return!1}},a().createElement("div",{className:"image-cropper-modal-container",onClick:function(n){n.stopPropagation()}},a().createElement("div",{className:"image-cropper-modal-title"},"Recortar imagen"),a().createElement(M.Cropper,{src:this.props.image.src,aspectRatio:1,style:{height:Math.min(500,window.innerWidth-40),width:Math.min(500,window.innerWidth-40)},zoomable:!1,ref:this.cropperRef}),a().createElement("div",{className:"prg-button",onClick:this.hideModal},"Aceptar")))}}]),i}(r.Component),z=N,P=t(877),U={};U.styleTagTransform=h(),U.setAttributes=f(),U.insert=p().bind(null,"head"),U.domAPI=l(),U.insertStyleElement=g(),i()(P.Z,U),P.Z&&P.Z.locals&&P.Z.locals;try{S=navigator.language.toLowerCase().split("-")[0]}catch(n){}["en","es"].includes(S)||(S="en");var j={perroflautum:{img:"perroflautum.png",name:"Perro Flautum",type:"other"},strawman:{img:"strawman.png",name:"es"===S?"Hombre de paja":"Straw man",type:"image"},cable:{img:"cable.png",name:"Recoge Cable",type:"gif"},camaleon:{img:"camaleon.png",name:"Camaleón",type:"gif"},calor:{img:"calor.png",name:"¡Calor!",type:"other"},"buon-appetito":{img:"buon_appetito.png",name:"Buon Appetito",type:"gif"},"d-hondt":{img:"d_hondt.png",name:"d'Hondt tread on me",type:"other"},planchabragas:{img:"planchabragas.png",name:"Plancha Bragas",type:"gif"},esquizobanderas:{img:"esquizobanderas.png",name:"Esquizobanderas",type:"image"}};var D=function(n){(0,x.Z)(i,n);var e,t,o=(e=i,t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}(),function(){var n,r=(0,B.Z)(e);if(t){var a=(0,B.Z)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,A.Z)(this,n)});function i(n){var e;return(0,v.Z)(this,i),(e=o.call(this,n)).ref=(0,r.createRef)(),e}return(0,w.Z)(i,[{key:"componentDidMount",value:function(){var n=JSON.parse(sessionStorage.getItem("apps-bar-scroll")||'{"top": 0, "left": 0}');this.ref.current.scrollTop=n.top,this.ref.current.scrollLeft=n.left,this.ref.current.onscroll=function(n){sessionStorage.setItem("apps-bar-scroll",JSON.stringify({top:n.target.scrollTop,left:n.target.scrollLeft}))}}},{key:"render",value:function(){var n=this;return a().createElement("div",{className:"apps-bar-container"},a().createElement("div",{className:"apps-bar",ref:this.ref},a().createElement("a",{className:"apps-bar-app apps-bar-home",href:"/labs"},a().createElement("img",{src:"".concat("/resources","/labs_home.png")}),a().createElement("span",null,"progredemente labs")),Object.keys(j).map((function(e){return a().createElement("a",{key:e,className:"apps-bar-app".concat(n.props.current===e?" current":""),href:"/".concat(e)},a().createElement("img",{src:"".concat("/resources","/").concat(j[e].img)}),a().createElement("span",null,j[e].name))}))),a().createElement("div",{className:"apps-bar-page"},this.props.children))}}]),i}(r.Component),L=D;function O(){var n,e,t,r,a,o,i,c,l,s,p,d,f={},u=[],g=[],m=5003,h=0,b=!1,y=0,v=0,w=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535],x=[],A=f.LZWEncoder=function(a,o,i,c){n=a,e=o,t=i,r=Math.max(2,c)},B=function(n,e){x[d++]=n,d>=254&&R(e)},k=function(n){E(m),h=s+2,b=!0,M(s,n)},E=function(n){for(var e=0;e<n;++e)u[e]=-1},Z=f.compress=function(n,e){var t,r,a,o,f,y;for(b=!1,c=C(i=l=n),p=1+(s=1<<n-1),h=s+2,d=0,o=I(),y=0,t=m;t<65536;t*=2)++y;y=8-y,E(m),M(s,e);n:for(;-1!=(a=I());)if(t=(a<<12)+o,u[r=a<<y^o]!=t){if(u[r]>=0){f=5003-r,0===r&&(f=1);do{if((r-=f)<0&&(r+=5003),u[r]==t){o=g[r];continue n}}while(u[r]>=0)}M(o,e),o=a,h<4096?(g[r]=h++,u[r]=t):k(e)}else o=g[r];M(o,e),M(p,e)},R=(f.encode=function(t){t.writeByte(r),a=n*e,o=0,Z(r+1,t),t.writeByte(0)},function(n){d>0&&(n.writeByte(d),n.writeBytes(x,0,d),d=0)}),C=function(n){return(1<<n)-1},I=function(){return 0===a?-1:(--a,255&t[o++])},M=function(n,e){for(y&=w[v],v>0?y|=n<<v:y=n,v+=i;v>=8;)B(255&y,e),y>>=8,v-=8;if((h>c||b)&&(b?(c=C(i=l),b=!1):(++i,c=12==i?4096:C(i))),n==p){for(;v>0;)B(255&y,e),y>>=8,v-=8;R(e)}};return A.apply(this,arguments),f}function G(){var n,e,t,r,a,o={},i=256,c=1024,l=1<<18,s=[],p=[],d=[],f=[],u=o.NeuQuant=function(n,o,c){var l,s;for(e=n,t=o,r=c,a=new Array(i),l=0;l<i;l++)a[l]=new Array(4),(s=a[l])[0]=s[1]=s[2]=(l<<12)/i,d[l]=256,p[l]=0},g=(o.map=function(n,e,t){var r,o,c,l,p,d,f;for(p=1e3,f=-1,o=(r=s[e])-1;r<i||o>=0;)r<i&&((c=(d=a[r])[1]-e)>=p?r=i:(r++,c<0&&(c=-c),(l=d[0]-n)<0&&(l=-l),(c+=l)<p&&((l=d[2]-t)<0&&(l=-l),(c+=l)<p&&(p=c,f=d[3])))),o>=0&&((c=e-(d=a[o])[1])>=p?o=-1:(o--,c<0&&(c=-c),(l=d[0]-n)<0&&(l=-l),(c+=l)<p&&((l=d[2]-t)<0&&(l=-l),(c+=l)<p&&(p=c,f=d[3]))));return f},o.process=function(){return function(){var a,o,i,l,s,p,d,u,g,y,v,w,x,A;for(t<1509&&(r=1),n=30+(r-1)/3,w=e,x=0,A=t,y=(v=t/(3*r))/100|0,u=c,(d=(p=2048)>>6)<=1&&(d=0),a=0;a<d;a++)f[a]=u*(256*(d*d-a*a)/(d*d));for(g=t<1509?3:t%499!=0?1497:t%491!=0?1473:t%487!=0?1461:1509,a=0;a<v;)if(i=(255&w[x+0])<<4,l=(255&w[x+1])<<4,s=(255&w[x+2])<<4,o=b(i,l,s),h(u,o,i,l,s),0!==d&&m(d,o,i,l,s),(x+=g)>=A&&(x-=t),0===y&&(y=1),++a%y==0)for(u-=u/n,(d=(p-=p/30)>>6)<=1&&(d=0),o=0;o<d;o++)f[o]=u*(256*(d*d-o*o)/(d*d))}(),g(),function(){var n,e,t,r,o,c,l,p;for(l=0,p=0,n=0;n<i;n++){for(t=n,r=(o=a[n])[1],e=n+1;e<i;e++)(c=a[e])[1]<r&&(t=e,r=c[1]);if(c=a[t],n!=t&&(e=c[0],c[0]=o[0],o[0]=e,e=c[1],c[1]=o[1],o[1]=e,e=c[2],c[2]=o[2],o[2]=e,e=c[3],c[3]=o[3],o[3]=e),r!=l){for(s[l]=p+n>>1,e=l+1;e<r;e++)s[e]=n;l=r,p=n}}for(s[l]=p+255>>1,e=l+1;e<256;e++)s[e]=255}(),function(){for(var n=[],e=new Array(i),t=0;t<i;t++)e[a[t][3]]=t;for(var r=0,o=0;o<i;o++){var c=e[o];n[r++]=a[c][0],n[r++]=a[c][1],n[r++]=a[c][2]}return n}()},function(){var n;for(n=0;n<i;n++)a[n][0]>>=4,a[n][1]>>=4,a[n][2]>>=4,a[n][3]=n}),m=function(n,e,t,r,o){var c,s,p,d,u,g,m;for((p=e-n)<-1&&(p=-1),(d=e+n)>i&&(d=i),c=e+1,s=e-1,g=1;c<d||s>p;){if(u=f[g++],c<d){m=a[c++];try{m[0]-=u*(m[0]-t)/l,m[1]-=u*(m[1]-r)/l,m[2]-=u*(m[2]-o)/l}catch(n){}}if(s>p){m=a[s--];try{m[0]-=u*(m[0]-t)/l,m[1]-=u*(m[1]-r)/l,m[2]-=u*(m[2]-o)/l}catch(n){}}}},h=function(n,e,t,r,o){var i=a[e];i[0]-=n*(i[0]-t)/c,i[1]-=n*(i[1]-r)/c,i[2]-=n*(i[2]-o)/c},b=function(n,e,t){var r,o,c,l,s,f,u,g,m,h;for(m=g=~(1<<31),u=f=-1,r=0;r<i;r++)(o=(h=a[r])[0]-n)<0&&(o=-o),(c=h[1]-e)<0&&(c=-c),o+=c,(c=h[2]-t)<0&&(c=-c),(o+=c)<g&&(g=o,f=r),(l=o-(p[r]>>12))<m&&(m=l,u=r),s=d[r]>>10,d[r]-=s,p[r]+=s<<10;return d[f]+=64,p[f]-=65536,u};return u.apply(this,arguments),o}function Q(){for(var n=0,e={};n<256;n++)e[n]=String.fromCharCode(n);function t(){this.bin=[]}t.prototype.getData=function(){for(var n="",t=this.bin.length,r=0;r<t;r++)n+=e[this.bin[r]];return n},t.prototype.writeByte=function(n){this.bin.push(n)},t.prototype.writeUTFBytes=function(n){for(var e=n.length,t=0;t<e;t++)this.writeByte(n.charCodeAt(t))},t.prototype.writeBytes=function(n,e,t){for(var r=t||n.length,a=e||0;a<r;a++)this.writeByte(n[a])};var r,a,o,i,c,l,s,p,d,f={},u=null,g=-1,m=0,h=!1,b=[],y=7,v=-1,w=!1,x=!0,A=!1,B=10,k="Generated by jsgif (https://github.com/antimatter15/jsgif/)",E=(f.setDelay=function(n){m=Math.round(n/10)},f.setDispose=function(n){n>=0&&(v=n)},f.setRepeat=function(n){n>=0&&(g=n)},f.setTransparent=function(n){u=n},f.setComment=function(n){k=n},f.addFrame=function(n,e){if(null===n||!h||null===i)throw new Error("Please call start method before calling addFrame");var t=!0;try{e?n instanceof ImageData?(c=n.data,A&&r==n.width&&a==n.height||Z(n.width,n.height)):n instanceof Uint8ClampedArray?n.length==r*a*4?c=n:(console.log("Please set the correct size: ImageData length mismatch"),t=!1):(console.log("Please provide correct input"),t=!1):(c=n.getImageData(0,0,n.canvas.width,n.canvas.height).data,A||Z(n.canvas.width,n.canvas.height)),I(),R(),x&&(S(),z(),g>=0&&N()),M(),""!==k&&T(),F(),x||z(),U(),x=!1}catch(n){t=!1}return t},f.download=function(n){if(null===i||0==w)console.log("Please call start method and add frames and call finish method before calling download");else{n=void 0!==n?n.endsWith(".gif")?n:n+".gif":"download.gif";var e=document.createElement("a");e.download=n,e.href=URL.createObjectURL(new Blob([new Uint8Array(i.bin)],{type:"image/gif"})),e.click()}},f.finish=function(){if(!h)return!1;var n=!0;h=!1;try{i.writeByte(59),w=!0}catch(e){n=!1}return n},function(){o=0,c=null,l=null,s=null,d=null,w=!1,x=!0}),Z=(f.setFrameRate=function(n){15!=n&&(m=Math.round(100/n))},f.setQuality=function(n){n<1&&(n=1),B=n},f.setSize=function(n,e){h&&!x||((r=n)<1&&(r=320),(a=e)<1&&(a=240),A=!0)}),R=(f.start=function(){E();var n=!0;w=!1,i=new t;try{i.writeUTFBytes("GIF89a")}catch(e){n=!1}return h=n},f.cont=function(){return E(),w=!1,i=new t,h=!0},function(){var n=l.length,e=n/3;s=[];var t=new G(l,n,B);d=t.process();for(var r=0,a=0;a<e;a++){var i=t.map(255&l[r++],255&l[r++],255&l[r++]);b[i]=!0,s[a]=i}l=null,p=8,y=7,null!==u&&(o=C(u))}),C=function(n){if(null===d)return-1;for(var e=(16711680&n)>>16,t=(65280&n)>>8,r=255&n,a=0,o=16777216,i=d.length,c=0;c<i;){var l=e-(255&d[c++]),s=t-(255&d[c++]),p=r-(255&d[c]),f=l*l+s*s+p*p,u=c/3;b[u]&&f<o&&(o=f,a=u),c++}return a},I=function(){var n=r,e=a;l=[];for(var t=c,o=0,i=0;i<e;i++)for(var s=0;s<n;s++){var p=i*n*4+4*s;l[o++]=t[p],l[o++]=t[p+1],l[o++]=t[p+2]}},M=function(){var n,e;i.writeByte(33),i.writeByte(249),i.writeByte(4),null===u?(n=0,e=0):(n=1,e=2),v>=0&&(e=7&v),e<<=2,i.writeByte(0|e|n),P(m),i.writeByte(o),i.writeByte(0)},T=function(){i.writeByte(33),i.writeByte(254),i.writeByte(k.length),i.writeUTFBytes(k),i.writeByte(0)},F=function(){i.writeByte(44),P(0),P(0),P(r),P(a),x?i.writeByte(0):i.writeByte(128|y)},S=function(){P(r),P(a),i.writeByte(240|y),i.writeByte(0),i.writeByte(0)},N=function(){i.writeByte(33),i.writeByte(255),i.writeByte(11),i.writeUTFBytes("NETSCAPE2.0"),i.writeByte(3),i.writeByte(1),P(g),i.writeByte(0)},z=function(){i.writeBytes(d);for(var n=768-d.length,e=0;e<n;e++)i.writeByte(0)},P=function(n){i.writeByte(255&n),i.writeByte(n>>8&255)},U=function(){new O(r,a,s,p).encode(i)};return f.stream=function(){return i},f.setProperties=function(n,e){h=n,x=e},f}var H=t(335),W={};W.styleTagTransform=h(),W.setAttributes=f(),W.insert=p().bind(null,"head"),W.domAPI=l(),W.insertStyleElement=g(),i()(H.Z,W),H.Z&&H.Z.locals&&H.Z.locals;var J=JSON.parse('{"es":{"loading":"Cargando","by":"por","loadButtonText":"Cargar imagen","editButtonText":"Editar imagen","downloadButtonText":"Descargar"},"en":{"loading":"Loading","by":"by","loadButtonText":"Load image","editButtonText":"Edit image","downloadButtonText":"Download"}}');var V=function(n){(0,x.Z)(i,n);var e,t,o=(e=i,t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}(),function(){var n,r=(0,B.Z)(e);if(t){var a=(0,B.Z)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,A.Z)(this,n)});function i(n){var e;return(0,v.Z)(this,i),(e=o.call(this,n)).state={loaded:!1,gif:null,loadedImage:null,crop:null},e.lang=e.props.lang||"es",e.i18n=e.lang in J?J[e.lang]:J.es,e.scaleFactor=.25,e.side=1500,e.img=null,e.defaultImg=null,e.cropperModalRef=e.props.withCropper?(0,r.createRef)():null,e}return(0,w.Z)(i,[{key:"componentDidMount",value:function(){var n=this;this.img=new Image,this.img.src=this.props.sourceImageUrl,this.img.onload=function(){n.props.defaultImgs?(n.defaultImg=new Image,n.defaultImg.src=n.props.defaultImgs[Math.floor(Math.random()*n.props.defaultImgs.length)],n.defaultImg.onload=function(){n.setState({loaded:!0}),n.create()}):(n.setState({loaded:!0}),n.create())}}},{key:"setCrop",value:function(n){this.setState({crop:n},this.create)}},{key:"create",value:function(){var n=new Q,e=document.createElement("canvas");e.width=this.side*this.scaleFactor,e.height=this.side*this.scaleFactor;var t=e.getContext("2d",{willReadFrequently:!0});n.start(),this.props.create(n,t,this.img,this.state.crop||this.state.loadedImage||this.defaultImg,this.scaleFactor,this.side,this.clear.bind(this)),n.finish();var r=n.stream().getData();this.setState({gif:"data:image/gif;base64,".concat(window.btoa(r))})}},{key:"clear",value:function(n){n.fillStyle="white",n.fillRect(0,0,this.side*this.scaleFactor,this.side*this.scaleFactor)}},{key:"download",value:function(){var n=document.createElement("a");n.download="".concat(this.props.appId,".gif"),n.href=this.state.gif,n.click()}},{key:"load",value:function(){var n=this,e=document.createElement("input");e.type="file",e.accept="image/png, image/jpeg",e.onchange=function(){var t=new FileReader;t.addEventListener("load",(function(e){var t=new Image;t.src=e.target.result,t.onload=function(){n.setState({loadedImage:t},(function(){n.cropperModalRef?n.cropperModalRef.current.showModal():n.create()}))}})),t.readAsDataURL(e.files[0])},e.click()}},{key:"render",value:function(){var n=this;return a().createElement(L,{current:this.props.appId},!this.state.loaded&&a().createElement("div",{className:"gifer-loading"},a().createElement("img",{src:this.props.loadingImageUrl,alt:this.i18n.loading}),this.i18n.loading),this.state.loaded&&this.state.gif&&a().createElement("div",{className:"gifer-app"},a().createElement("div",{className:"gifer-title"},a().createElement("img",{src:this.props.sourceImageUrl,alt:this.props.title}),a().createElement("div",null,this.i18n.by," ",a().createElement("a",{href:"/",target:"_blank"},"progredemente"))),a().createElement("img",{src:this.state.gif,alt:"gif",className:"gifer-gif"}),a().createElement("div",{className:"gifer-buttons"},a().createElement("div",{className:"prg-button",onClick:function(){n.load()}},this.props.loadButtonText||this.i18n.loadButtonText," ",a().createElement(R,{icon:this.props.loadButtonIncon||"F"})),this.state.loadedImage&&a().createElement(a().Fragment,null,this.cropperModalRef&&a().createElement("div",{className:"prg-button",onClick:function(){n.cropperModalRef.current.showModal()}},this.props.editButtonText||this.i18n.editButtonText," ",a().createElement(R,{icon:"E"})),a().createElement("div",{className:"prg-button gifer-download",onClick:function(){n.download()}},this.i18n.downloadButtonText," ",a().createElement(R,{icon:"D"})))),this.cropperModalRef&&this.state.loadedImage&&a().createElement(z,{setCrop:function(e){return n.setCrop(e)},image:this.state.loadedImage,ref:this.cropperModalRef,lang:this.lang})))}}]),i}(r.Component),X=V},877:function(n,e,t){var r=t(81),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([n.id,".apps-bar-container {\n    --apps-bar-primary-color: black;\n    --apps-bar-secondary-color: gray;\n    --apps-bar-text-primary-color: black;\n    --apps-bar-text-secondary-color: white;\n    --apps-bar-width: 60px;\n    --apps-bar-icon-width: 40px;\n    --apps-bar-padding: calc((var(--apps-bar-width) - var(--apps-bar-icon-width)) / 2);\n    --apps-bar-grow-time: .15s;\n    display: flex;\n    height: 100%;\n    width: 100%;\n}\n\n.apps-bar a {\n    text-decoration: none;\n}\n\n.apps-bar {\n    height: 100%;\n    background-color: var(--apps-bar-secondary-color);\n    width: var(--apps-bar-width);\n    position: absolute;\n    transition: width var(--apps-bar-grow-time) ease-out;\n    overflow-x: hidden;\n    z-index: 10;\n}\n\n.apps-bar:hover{\n    width: 300px;\n}\n\n.apps-bar-app {\n    display: flex;\n    align-items: center;\n    padding: calc(var(--apps-bar-padding)/2) var(--apps-bar-padding);\n    font-size: .75em;\n    width: 300px;\n    color: var(--apps-bar-text-primary-color);\n}\n\n.apps-bar-app.current,\n.apps-bar-app:hover{\n    background-color: var(--apps-bar-primary-color);\n    color: var(--apps-bar-text-secondary-color);\n}\n\n.apps-bar-home:hover{\n    background-color: initial;\n    color: initial;\n}\n\n.apps-bar-app > img {\n    display: block;\n    width: var(--apps-bar-icon-width);\n    height: var(--apps-bar-icon-width);\n    border-radius: 5px;\n    background-color: white;\n}\n\n.apps-bar-home > img{\n    background-color: transparent;\n    width: var(--apps-bar-icon-width);\n    height: var(--apps-bar-icon-width);\n    filter: drop-shadow(var(--apps-bar-primary-color) calc(var(--apps-bar-icon-width) * 2) 0px);\n    transform: translateX(calc(-2 * var(--apps-bar-icon-width)));\n}\n\n.apps-bar-page {\n    flex-grow: 1;\n    overflow-y: auto;\n    margin-left: var(--apps-bar-width);\n}\n\n.apps-bar-app > span {\n    margin-left: var(--apps-bar-padding);\n    visibility: hidden;\n}\n\n.apps-bar-home > span {\n    font-size: 1.25em;\n    color: var(--apps-bar-text-primary-color);\n}\n\n.apps-bar-home:hover > span {\n    color: var(--apps-bar-primary-color);\n}\n\n.apps-bar:hover .apps-bar-app > span {\n    visibility: visible;\n    transition: visibility 0s linear var(--apps-bar-grow-time);\n}\n\n@media all and (max-width: 1000px){\n    .apps-bar-container {\n        flex-direction: column-reverse;\n    }\n    .apps-bar {\n        height: var(--apps-bar-width);\n        width: 100%;\n        position: absolute;\n        transition: none;\n        overflow-x: auto;\n        overflow-y: hidden;\n        white-space: nowrap;\n        text-align: center;\n        padding: 0 calc(var(--apps-bar-padding));\n    }\n\n    .apps-bar::before {\n        width: calc(var(--apps-bar-padding));\n        position: fixed;\n        height: 100%;\n        content: '';\n        display: block;\n        left: 0;\n        background: linear-gradient(90deg, var(--apps-bar-secondary-color), transparent);\n        z-index: 1;\n    }\n\n    .apps-bar::after {\n        width: calc(var(--apps-bar-padding));\n        position: fixed;\n        height: 100%;\n        content: '';\n        display: block;\n        right: 0;\n        bottom: 0;\n        height: var(--apps-bar-width);\n        background: linear-gradient(90deg, transparent, var(--apps-bar-secondary-color));\n    }\n\n    .apps-bar:hover{\n        width: 100%;\n    }\n\n    .apps-bar-app {\n        display: inline-block;\n        padding: var(--apps-bar-padding) calc(var(--apps-bar-padding)/2);\n        font-size: .75em;\n        color: var(--apps-bar-text-primary-color);\n        width: var(--apps-bar-icon-width);\n        box-sizing: content-box;\n    }\n    \n    .apps-bar-app > img {\n        display: initial;\n    }\n    \n    .apps-bar-page {\n        flex-grow: 1;\n        overflow-y: auto;\n        margin-left: 0;\n        margin-bottom: var(--apps-bar-width);\n    }\n    \n    .apps-bar-app > span {\n        display: none;\n    }\n\n    .apps-bar-home > img{\n        filter: drop-shadow(var(--apps-bar-primary-color) 0px calc(var(--apps-bar-icon-width) * -2));\n        transform: translateY(calc(2 * var(--apps-bar-icon-width)));\n    }\n}\n",""]),e.Z=i},335:function(n,e,t){var r=t(81),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([n.id,".gifer * {\n    font-family: ComicTypo;\n    --gifer-primary-color: black;\n    --gifer-secondary-color: gray;\n}\n\nhtml.gifer, .gifer body, .gifer #root {\n  height: 100%;\n}\n\n.gifer body {\n    margin: 0;\n    font-size: 1.5em;\n}\n\n.gifer .prg-button {\n    --prg-button-background-color: var(--gifer-secondary-color);\n    --prg-button-text-color: black;\n}\n\n.gifer-app {\n    height: 100%;\n    color: var(--gifer-primary-color);\n}\n\n.gifer-app * {\n    box-sizing: border-box;\n}\n\n.gifer-app a {\n    text-decoration: none;\n    color: var(--gifer-primary-color);\n}\n\n.gifer-gif {\n    max-width: 100%;\n    display: block;\n    margin: 0 auto;\n}\n\n.gifer-buttons {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-wrap: wrap;\n    max-width: 500px;\n    margin: 10px auto;\n}\n\n.gifer-download {\n    background-color: var(--gifer-primary-color);\n    color: white;\n}\n\n.gifer-buttons > .prg-button {\n    flex: 40%;\n}\n\n\n.gifer-buttons > .prg-button.download {\n    flex: 100%;\n}\n\n.gifer-loading {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n}\n\n.gifer-loading > img {\n    width: 200px;\n}\n\n.gifer-title {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    margin: 0 auto;\n    padding: 10px 0;\n    max-width: 350px;\n    color: var(--gifer-secondary-color);\n}\n\n.gifer-title > img {\n    height: 240px;\n    width: 325px;\n    object-position: calc(-1 * var(--gifer-title-start-position) - 1px) -1px;\n    object-fit: none;\n    margin-bottom: 10px;\n}\n\n.gifer-title > div {\n    margin-left: auto;\n    font-size: .75em;\n}\n\n.gifer .image-cropper-modal {\n    --image-cropper-modal-background-shade-color: var(--gifer-primary-color) !important;  \n\n}\n\n.gifer .apps-bar-container {\n    --apps-bar-primary-color: var(--gifer-primary-color) !important;\n    --apps-bar-secondary-color: var(--gifer-secondary-color) !important;\n}",""]),e.Z=i},728:function(n,e,t){var r=t(81),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([n.id,".icon::before {\n    font-family: ComicIcons;\n    content: var(--content);\n}",""]),e.Z=i},393:function(n,e,t){var r=t(81),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([n.id,".image-cropper-modal {\n    --image-cropper-modal-background-shade-color: gray;\n    --image-cropper-modal-background-color: white;\n    --image-cropper-modal-title-color: black;\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    z-index: 20;\n    padding: 10px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.image-cropper-modal:before {\n    background-color: var(--image-cropper-modal-background-shade-color);\n    opacity: .25;\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    display: block;\n    content: ''\n}\n\n.image-cropper-modal::after {\n    background-color: black;\n    opacity: .25;\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    display: block;\n    content: ''\n}\n\n.image-cropper-modal.hidden {\n    display: none;\n}\n\n.image-cropper-modal-container {\n    background-color: var(--image-cropper-modal-background-color);\n    border-radius: 10px;\n    padding: 10px;\n    display: inline-flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    z-index: 1;\n}\n\n.image-cropper-modal-title {\n    font-size: 1.5em;\n    padding: 10px;\n    color: var(--image-cropper-modal-title-color)\n}",""]),e.Z=i},424:function(n,e,t){var r=t(81),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([n.id,"",""]),e.Z=i},738:function(n){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC"}}]);