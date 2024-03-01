// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return r!=r}var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var n=Object.prototype.toString;var t=Object.prototype.hasOwnProperty;var i="function"==typeof Symbol?Symbol:void 0,a="function"==typeof i?i.toStringTag:"";var o=e&&"symbol"==typeof Symbol.toStringTag?function(r){var e,i,o,u,c;if(null==r)return n.call(r);i=r[a],c=a,e=null!=(u=r)&&t.call(u,c);try{r[a]=void 0}catch(e){return n.call(r)}return o=n.call(r),e?r[a]=i:delete r[a],o}:function(r){return n.call(r)},u="function"==typeof Uint32Array;var c="function"==typeof Uint32Array?Uint32Array:null;var f,s="function"==typeof Uint32Array?Uint32Array:void 0;f=function(){var r,e,n;if("function"!=typeof c)return!1;try{e=new c(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(u&&n instanceof Uint32Array||"[object Uint32Array]"===o(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?s:function(){throw new Error("not implemented")};var l=f,p="function"==typeof Float64Array;var v="function"==typeof Float64Array?Float64Array:null;var g,y="function"==typeof Float64Array?Float64Array:void 0;g=function(){var r,e,n;if("function"!=typeof v)return!1;try{e=new v([1,3.14,-3.14,NaN]),n=e,r=(p&&n instanceof Float64Array||"[object Float64Array]"===o(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?y:function(){throw new Error("not implemented")};var d=g,h="function"==typeof Uint8Array;var w="function"==typeof Uint8Array?Uint8Array:null;var b,m="function"==typeof Uint8Array?Uint8Array:void 0;b=function(){var r,e,n;if("function"!=typeof w)return!1;try{e=new w(e=[1,3.14,-3.14,256,257]),n=e,r=(h&&n instanceof Uint8Array||"[object Uint8Array]"===o(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?m:function(){throw new Error("not implemented")};var A=b,_="function"==typeof Uint16Array;var E="function"==typeof Uint16Array?Uint16Array:null;var U,I="function"==typeof Uint16Array?Uint16Array:void 0;U=function(){var r,e,n;if("function"!=typeof E)return!1;try{e=new E(e=[1,3.14,-3.14,65536,65537]),n=e,r=(_&&n instanceof Uint16Array||"[object Uint16Array]"===o(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?I:function(){throw new Error("not implemented")};var S,N={uint16:U,uint8:A};(S=new N.uint16(1))[0]=4660;var k=52===new N.uint8(S.buffer)[0],x=!0===k?1:0,F=new d(1),j=new l(F.buffer);function T(r){return F[0]=r,j[x]}var O=!0===k?1:0,V=new d(1),$=new l(V.buffer);function G(r,e){return V[0]=r,$[O]=e>>>0,V[0]}var H=Number.POSITIVE_INFINITY,W=Number.NEGATIVE_INFINITY,C=1023;var L=.6931471803691238,P=1.9082149292705877e-10,R=.41421356237309503,M=-.2928932188134525,Z=1.862645149230957e-9,X=5551115123125783e-32,Y=9007199254740992,q=.6666666666666666;var z=Math.sqrt;function B(r){return Math.abs(r)}var D=Math.floor,J=Math.ceil;function K(r){return r<0?J(r):D(r)}var Q=1023,rr=-1023,er=-1074;function nr(r){return r===H||r===W}var tr=2147483648,ir=2147483647,ar="function"==typeof Object.defineProperty?Object.defineProperty:null;var or=Object.defineProperty;function ur(r){return"number"==typeof r}function cr(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function fr(r,e,n){var t=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=n?r+cr(i):cr(i)+r,t&&(r="-"+r)),r}var sr=String.prototype.toLowerCase,lr=String.prototype.toUpperCase;function pr(r){var e,n,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,t=parseInt(n,10),!isFinite(t)){if(!ur(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(n=(-t).toString(e),r.precision&&(n=fr(n,r.precision,r.padRight)),n="-"+n):(n=t.toString(e),t||r.precision?r.precision&&(n=fr(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===lr.call(r.specifier)?lr.call(n):sr.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var vr=Math.abs,gr=String.prototype.toLowerCase,yr=String.prototype.toUpperCase,dr=String.prototype.replace,hr=/e\+(\d)$/,wr=/e-(\d)$/,br=/^(\d+)$/,mr=/^(\d+)e/,Ar=/\.0$/,_r=/\.0*e/,Er=/(\..*[^0])0*e/;function Ur(r){var e,n,t=parseFloat(r.arg);if(!isFinite(t)){if(!ur(r.arg))throw new Error("invalid floating-point number. Value: "+n);t=r.arg}switch(r.specifier){case"e":case"E":n=t.toExponential(r.precision);break;case"f":case"F":n=t.toFixed(r.precision);break;case"g":case"G":vr(t)<1e-4?((e=r.precision)>0&&(e-=1),n=t.toExponential(e)):n=t.toPrecision(r.precision),r.alternate||(n=dr.call(n,Er,"$1e"),n=dr.call(n,_r,"e"),n=dr.call(n,Ar,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=dr.call(n,hr,"e+0$1"),n=dr.call(n,wr,"e-0$1"),r.alternate&&(n=dr.call(n,br,"$1."),n=dr.call(n,mr,"$1.e")),t>=0&&r.sign&&(n=r.sign+n),n=r.specifier===yr.call(r.specifier)?yr.call(n):gr.call(n)}function Ir(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}var Sr=String.fromCharCode,Nr=isNaN,kr=Array.isArray;function xr(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Fr(r){var e,n,t,i,a,o,u,c,f,s,l,p,v;if(!kr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,c=0;c<r.length;c++)if(t=r[c],"string"==typeof t)o+=t;else{if(e=void 0!==t.precision,!(t=xr(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),n=t.flags,f=0;f<n.length;f++)switch(i=n.charAt(f)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,Nr(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,Nr(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=pr(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!Nr(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Nr(a)?String(t.arg):Sr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=Ur(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=fr(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(s=t.arg,l=t.width,p=t.padRight,v=void 0,(v=l-s.length)<0?s:s=p?s+Ir(v):Ir(v)+s)),o+=t.arg||"",u+=1}return o}var jr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Tr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Or(r){var e,n,t,i;for(n=[],i=0,t=jr.exec(r);t;)(e=r.slice(i,jr.lastIndex-t[0].length)).length&&n.push(e),n.push(Tr(t)),i=jr.lastIndex,t=jr.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function Vr(r){var e,n;if("string"!=typeof r)throw new TypeError(Vr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[Or(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return Fr.apply(null,e)}var $r=Object.prototype,Gr=$r.toString,Hr=$r.__defineGetter__,Wr=$r.__defineSetter__,Cr=$r.__lookupGetter__,Lr=$r.__lookupSetter__;var Pr,Rr,Mr=function(){try{return ar({},"x",{}),!0}catch(r){return!1}}()?or:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===Gr.call(r))throw new TypeError(Vr("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===Gr.call(n))throw new TypeError(Vr("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(Cr.call(r,e)||Lr.call(r,e)?(t=r.__proto__,r.__proto__=$r,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Hr&&Hr.call(r,e,n.get),o&&Wr&&Wr.call(r,e,n.set),r};function Zr(r,e,n){Mr(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}!0===k?(Pr=1,Rr=0):(Pr=0,Rr=1);var Xr,Yr,qr={HIGH:Pr,LOW:Rr},zr=new d(1),Br=new l(zr.buffer),Dr=qr.HIGH,Jr=qr.LOW;function Kr(r,e,n,t){return zr[0]=r,e[t]=Br[Dr],e[t+n]=Br[Jr],e}function Qr(r){return Kr(r,[0,0],1,0)}Zr(Qr,"assign",Kr),!0===k?(Xr=1,Yr=0):(Xr=0,Yr=1);var re={HIGH:Xr,LOW:Yr},ee=new d(1),ne=new l(ee.buffer),te=re.HIGH,ie=re.LOW;function ae(r,e){return ne[te]=r,ne[ie]=e,ee[0]}var oe=[0,0];function ue(r,e){var n,t;return Qr.assign(r,oe,1,0),n=oe[0],n&=ir,t=T(e),ae(n|=t&=tr,oe[1])}var ce=22250738585072014e-324,fe=4503599627370496;function se(e,n,t,i){return r(e)||nr(e)?(n[i]=e,n[i+t]=0,n):0!==e&&B(e)<ce?(n[i]=e*fe,n[i+t]=-52,n):(n[i]=e,n[i+t]=0,n)}Zr((function(r){return se(r,[0,0],1,0)}),"assign",se);var le=2146435072;var pe=2220446049250313e-31,ve=2148532223,ge=[0,0],ye=[0,0];function de(e,n){var t,i;return 0===n||0===e||r(e)||nr(e)?e:(se(e,ge,1,0),e=ge[0],n+=ge[1],n+=function(r){var e=T(r);return(e=(e&le)>>>20)-C|0}(e),n<er?ue(0,e):n>Q?e<0?W:H:(n<=rr?(n+=52,i=pe):i=1,Qr.assign(e,ye,1,0),t=ye[0],t&=ve,i*ae(t|=n+C<<20,ye[1])))}var he=.6931471803691238,we=1.9082149292705877e-10,be=1.4426950408889634,me=709.782712893384,Ae=-745.1332191019411,_e=1/(1<<28),Ee=-_e;function Ue(e){var n;return r(e)||e===H?e:e===W?0:e>me?H:e<Ae?0:e>Ee&&e<_e?1+e:function(r,e,n){var t,i,a,o;return de(1-(e-(t=r-e)*(a=t-(i=t*t)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(e-(n=K(e<0?be*e-.5:be*e+.5))*he,n*we,n)}function Ie(r){return D(r)===r}function Se(r){return Ie(r/2)}function Ne(r){return Se(r>0?r-1:r+1)}var ke=!0===k?0:1,xe=new d(1),Fe=new l(xe.buffer);function je(r,e){return xe[0]=r,Fe[ke]=e>>>0,xe[0]}function Te(r){return 0|r}var Oe=1072693247,Ve=1e300,$e=1e-300;var Ge=1048575,He=1048576,We=1072693248,Ce=536870912,Le=524288,Pe=20,Re=9007199254740992,Me=.9617966939259756,Ze=.9617967009544373,Xe=-7.028461650952758e-9,Ye=[1,1.5],qe=[0,.5849624872207642],ze=[0,1.350039202129749e-8];var Be=1.4426950408889634,De=1.4426950216293335,Je=1.9259629911266175e-8;var Ke=.6931471805599453,Qe=1048575;var rn=1048576,en=1071644672,nn=20,tn=.6931471824645996,an=-1.904654299957768e-9;var on=1072693247,un=1105199104,cn=1139802112,fn=1083179008,sn=1072693248,ln=1083231232,pn=3230714880,vn=31,gn=1e300,yn=1e-300,dn=8008566259537294e-32,hn=[0,0],wn=[0,0];function bn(e,n){var t,i,a,o,u,c,f,s,l,p,v,g,y,d;if(r(e)||r(n))return NaN;if(Qr.assign(n,hn,1,0),u=hn[0],0===hn[1]){if(0===n)return 1;if(1===n)return e;if(-1===n)return 1/e;if(.5===n)return z(e);if(-.5===n)return 1/z(e);if(2===n)return e*e;if(3===n)return e*e*e;if(4===n)return(e*=e)*e;if(nr(n))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:B(r)<1==(e===H)?0:H}(e,n)}if(Qr.assign(e,hn,1,0),o=hn[0],0===hn[1]){if(0===o)return function(r,e){return e===W?H:e===H?0:e>0?Ne(e)?r:0:Ne(e)?ue(H,r):H}(e,n);if(1===e)return 1;if(-1===e&&Ne(n))return-1;if(nr(e))return e===W?bn(-0,-n):n<0?0:H}if(e<0&&!1===Ie(n))return(e-e)/(e-e);if(a=B(e),t=o&ir|0,i=u&ir|0,f=u>>>vn|0,c=(c=o>>>vn|0)&&Ne(n)?-1:1,i>un){if(i>cn)return function(r,e){return(T(r)&ir)<=Oe?e<0?Ve*Ve:$e*$e:e>0?Ve*Ve:$e*$e}(e,n);if(t<on)return 1===f?c*gn*gn:c*yn*yn;if(t>sn)return 0===f?c*gn*gn:c*yn*yn;v=function(r,e){var n,t,i,a,o,u,c;return a=(i=e-1)*i*(0===(c=i)?.5:.5+c*(.25*c-.3333333333333333)),n=(u=i*Je-a*Be)-((t=je(t=(o=De*i)+u,0))-o),r[0]=t,r[1]=n,r}(wn,a)}else v=function(r,e,n){var t,i,a,o,u,c,f,s,l,p,v,g,y,d,h,w,b,m,A,_,E;return m=0,n<He&&(m-=53,n=T(e*=Re)),m+=(n>>Pe)-C|0,n=(A=n&Ge|0)|We|0,A<=235662?_=0:A<767610?_=1:(_=0,m+=1,n-=He),o=je(i=(w=(e=G(e,n))-(f=Ye[_]))*(b=1/(e+f)),0),t=(n>>1|Ce)+Le,c=G(0,t+=_<<18),h=(a=i*i)*a*(0===(E=a)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),c=je(c=3+(a=o*o)+(h+=(u=b*(w-o*c-o*(e-(c-f))))*(o+i)),0),l=je(l=(w=o*c)+(b=u*c+(h-(c-3-a))*i),0),p=Ze*l,y=(v=Xe*l+(b-(l-w))*Me+ze[_])-((g=je(g=p+v+(s=qe[_])+(d=m),0))-d-s-p),r[0]=g,r[1]=y,r}(wn,a,t);if(g=(p=(n-(s=je(n,0)))*v[0]+n*v[1])+(l=s*v[0]),Qr.assign(g,hn,1,0),y=Te(hn[0]),d=Te(hn[1]),y>=fn){if(0!=(y-fn|d))return c*gn*gn;if(p+dn>g-l)return c*gn*gn}else if((y&ir)>=ln){if(0!=(y-pn|d))return c*yn*yn;if(p<=g-l)return c*yn*yn}return g=function(r,e,n){var t,i,a,o,u,c,f,s,l,p;return l=((s=r&ir|0)>>nn)-C|0,f=0,s>en&&(i=G(0,((f=r+(rn>>l+1)>>>0)&~(Qe>>(l=((f&ir)>>nn)-C|0)))>>>0),f=(f&Qe|rn)>>nn-l>>>0,r<0&&(f=-f),e-=i),r=Te(r=T(c=1-((c=(a=(i=je(i=n+e,0))*tn)+(o=(n-(i-e))*Ke+i*an))*(t=c-(i=c*c)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=o-(c-a))+c*u)-c))),(r+=f<<nn>>>0)>>nn<=0?de(c,f):G(c,r)}(y,l,p),c*g}var mn=2.718281828459045,An=2220446049250313e-31;function _n(r){var e,n;return 0===r?1/0:((r<0?-r:r)<=1?(e=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+4624429436045379e-20*r))))))))),n=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+1*r)))))))))):(e=4624429436045379e-20+(r=1/r)*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+709811.662581658*r))))))))),n=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+0*r)))))))))),e/n)}var En=10.900511;function Un(e,n){var t,i,a,o,u,c,f;return r(e)||r(n)||e<0||n<0?NaN:1===n?1/e:1===e?1/n:(f=e+n)<An?(u=f/e,u/=n):f===e&&n<An?1/n:f===n&&e<An?1/e:(e<n&&(c=n,n=e,e=c),i=e+En-.5,a=n+En-.5,o=f+En-.5,u=_n(e)*(_n(n)/_n(f)),B(n*(t=e-.5-n))<100*o&&e>100?u*=Ue(t*function(e){var n,t,i,a,o,u,c,f,s,l;if(e<-1||r(e))return NaN;if(-1===e)return W;if(e===H)return e;if(0===e)return e;if(l=1,(i=e<0?-e:e)<R){if(i<Z)return i<X?e:e-e*e*.5;e>M&&(l=0,a=e,t=1)}return 0!==l&&(i<Y?(o=(l=((t=T(s=1+e))>>20)-C)>0?1-(s-e):e-(s-1),o/=s):(l=((t=T(s=e))>>20)-C,o=0),(t&=1048575)<434334?s=G(s,1072693248|t):(l+=1,s=G(s,1071644672|t),t=1048576-t>>2),a=s-1),n=.5*a*a,0===t?0===a?l*L+(o+=l*P):l*L-((f=n*(1-q*a))-(l*P+o)-a):(f=(c=(u=a/(2+a))*u)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(c),0===l?a-(n-u*(n+f)):l*L-(n-(u*(n+f)+(l*P+o))-a))}(-n/o)):u*=bn(i/o,t),u*=bn(o>1e10?i/o*(a/o):i*a/(o*o),n),u*=z(mn/a))}function In(e,n){var t,i,a,o,u,c;return r(e)||e<=0||r(n)||n<=0?NaN:(o=n*Un(1+1/e,n),u=n*Un(1+2/e,n),c=n*Un(1+3/e,n),i=n*Un(1+4/e,n)-4*c*o+6*u*(a=o*o)-3*a*a,i/=(t=u-o*o)*t)}export{In as default};
//# sourceMappingURL=mod.js.map
