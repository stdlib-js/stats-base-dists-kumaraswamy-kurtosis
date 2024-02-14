// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";function r(r){return r!=r}function e(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var t=e(),n=Object.prototype.toString,i=Object.prototype.hasOwnProperty;function o(r,e){return null!=r&&i.call(r,e)}var a,u="function"==typeof Symbol?Symbol:void 0,c="function"==typeof u?u.toStringTag:"",f=t&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,i;if(null==r)return n.call(r);t=r[c],e=o(r,c);try{r[c]=void 0}catch(e){return n.call(r)}return i=n.call(r),e?r[c]=t:delete r[c],i}:function(r){return n.call(r)},l="function"==typeof Uint32Array,s="function"==typeof Uint32Array?Uint32Array:null,p="function"==typeof Uint32Array?Uint32Array:void 0;a=function(){var r,e,t;if("function"!=typeof s)return!1;try{e=new s(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(l&&t instanceof Uint32Array||"[object Uint32Array]"===f(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?p:function(){throw new Error("not implemented")};var y,g=a,d=e(),b=Object.prototype.toString,v="function"==typeof Symbol?Symbol:void 0,h="function"==typeof v?v.toStringTag:"",w=d&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n;if(null==r)return b.call(r);t=r[h],e=o(r,h);try{r[h]=void 0}catch(e){return b.call(r)}return n=b.call(r),e?r[h]=t:delete r[h],n}:function(r){return b.call(r)},m="function"==typeof Float64Array,I="function"==typeof Float64Array?Float64Array:null,N="function"==typeof Float64Array?Float64Array:void 0;y=function(){var r,e,t;if("function"!=typeof I)return!1;try{e=new I([1,3.14,-3.14,NaN]),t=e,r=(m&&t instanceof Float64Array||"[object Float64Array]"===w(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?N:function(){throw new Error("not implemented")};var S,A=y,T=e(),_=Object.prototype.toString,E="function"==typeof Symbol?Symbol:void 0,F="function"==typeof E?E.toStringTag:"",U=T&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n;if(null==r)return _.call(r);t=r[F],e=o(r,F);try{r[F]=void 0}catch(e){return _.call(r)}return n=_.call(r),e?r[F]=t:delete r[F],n}:function(r){return _.call(r)},V="function"==typeof Uint8Array,j="function"==typeof Uint8Array?Uint8Array:null,O="function"==typeof Uint8Array?Uint8Array:void 0;S=function(){var r,e,t;if("function"!=typeof j)return!1;try{e=new j(e=[1,3.14,-3.14,256,257]),t=e,r=(V&&t instanceof Uint8Array||"[object Uint8Array]"===U(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?O:function(){throw new Error("not implemented")};var k,x=S,G=e(),P=Object.prototype.toString,Y="function"==typeof Symbol?Symbol:void 0,$="function"==typeof Y?Y.toStringTag:"",H=G&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n;if(null==r)return P.call(r);t=r[$],e=o(r,$);try{r[$]=void 0}catch(e){return P.call(r)}return n=P.call(r),e?r[$]=t:delete r[$],n}:function(r){return P.call(r)},W="function"==typeof Uint16Array,C="function"==typeof Uint16Array?Uint16Array:null,L="function"==typeof Uint16Array?Uint16Array:void 0;k=function(){var r,e,t;if("function"!=typeof C)return!1;try{e=new C(e=[1,3.14,-3.14,65536,65537]),t=e,r=(W&&t instanceof Uint16Array||"[object Uint16Array]"===H(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?L:function(){throw new Error("not implemented")};var R,M={uint16:k,uint8:x};(R=new M.uint16(1))[0]=4660;var Z=52===new M.uint8(R.buffer)[0],X=!0===Z?1:0,q=new A(1),z=new g(q.buffer);function B(r){return q[0]=r,z[X]}var D=!0===Z?1:0,J=new A(1),K=new g(J.buffer);function Q(r,e){return J[0]=r,K[D]=e>>>0,J[0]}var rr=Number.POSITIVE_INFINITY,er=Number.NEGATIVE_INFINITY,tr=1023,nr=.6931471803691238,ir=1.9082149292705877e-10,or=Math.sqrt;function ar(r){return Math.abs(r)}var ur=Math.floor,cr=Math.ceil;function fr(r){return r<0?cr(r):ur(r)}var lr=Number.NEGATIVE_INFINITY,sr=Number.POSITIVE_INFINITY,pr=Number.POSITIVE_INFINITY,yr=Number.NEGATIVE_INFINITY,gr=Number.POSITIVE_INFINITY,dr=Number.NEGATIVE_INFINITY;function br(r){return r===gr||r===dr}var vr=2147483647,hr="function"==typeof Object.defineProperty?Object.defineProperty:null,wr=Object.defineProperty;function mr(r){return"number"==typeof r}function Ir(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function Nr(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+Ir(i):Ir(i)+r,n&&(r="-"+r)),r}var Sr=String.prototype.toLowerCase,Ar=String.prototype.toUpperCase;function Tr(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!mr(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=Nr(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=Nr(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===Ar.call(r.specifier)?Ar.call(t):Sr.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function _r(r){return"string"==typeof r}var Er=Math.abs,Fr=String.prototype.toLowerCase,Ur=String.prototype.toUpperCase,Vr=String.prototype.replace,jr=/e\+(\d)$/,Or=/e-(\d)$/,kr=/^(\d+)$/,xr=/^(\d+)e/,Gr=/\.0$/,Pr=/\.0*e/,Yr=/(\..*[^0])0*e/;function $r(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!mr(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":Er(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=Vr.call(t,Yr,"$1e"),t=Vr.call(t,Pr,"e"),t=Vr.call(t,Gr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Vr.call(t,jr,"e+0$1"),t=Vr.call(t,Or,"e-0$1"),r.alternate&&(t=Vr.call(t,kr,"$1."),t=Vr.call(t,xr,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===Ur.call(r.specifier)?Ur.call(t):Fr.call(t)}function Hr(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function Wr(r,e,t){var n=e-r.length;return n<0?r:r=t?r+Hr(n):Hr(n)+r}var Cr=String.fromCharCode,Lr=isNaN,Rr=Array.isArray;function Mr(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Zr(r){var e,t,n,i,o,a,u,c,f;if(!Rr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,c=0;c<r.length;c++)if(_r(n=r[c]))a+=n;else{if(e=void 0!==n.precision,!(n=Mr(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,Lr(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,Lr(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=Tr(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!Lr(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Lr(o)?String(n.arg):Cr(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=$r(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=Nr(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Wr(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var Xr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function qr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function zr(r){var e,t,n,i;for(t=[],i=0,n=Xr.exec(r);n;)(e=r.slice(i,Xr.lastIndex-n[0].length)).length&&t.push(e),t.push(qr(n)),i=Xr.lastIndex,n=Xr.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function Br(r){return"string"==typeof r}function Dr(r){var e,t;if(!Br(r))throw new TypeError(Dr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[zr(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return Zr.apply(null,e)}var Jr,Kr=Object.prototype,Qr=Kr.toString,re=Kr.__defineGetter__,ee=Kr.__defineSetter__,te=Kr.__lookupGetter__,ne=Kr.__lookupSetter__;Jr=function(){try{return hr({},"x",{}),!0}catch(r){return!1}}()?wr:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===Qr.call(r))throw new TypeError(Dr("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===Qr.call(t))throw new TypeError(Dr("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(te.call(r,e)||ne.call(r,e)?(n=r.__proto__,r.__proto__=Kr,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&re&&re.call(r,e,t.get),a&&ee&&ee.call(r,e,t.set),r};var ie,oe,ae=Jr;!0===Z?(ie=1,oe=0):(ie=0,oe=1);var ue,ce,fe={HIGH:ie,LOW:oe},le=new A(1),se=new g(le.buffer),pe=fe.HIGH,ye=fe.LOW;function ge(r,e,t,n){return le[0]=r,e[n]=se[pe],e[n+t]=se[ye],e}function de(r){return ge(r,[0,0],1,0)}ae(de,"assign",{configurable:!1,enumerable:!1,writable:!1,value:ge}),!0===Z?(ue=1,ce=0):(ue=0,ce=1);var be={HIGH:ue,LOW:ce},ve=new A(1),he=new g(ve.buffer),we=be.HIGH,me=be.LOW;function Ie(r,e){return he[we]=r,he[me]=e,ve[0]}var Ne=[0,0];function Se(r,e){var t,n;return de.assign(r,Ne,1,0),t=Ne[0],t&=vr,n=B(e),Ie(t|=n&=2147483648,Ne[1])}function Ae(e,t,n,i){return r(e)||br(e)?(t[i]=e,t[i+n]=0,t):0!==e&&ar(e)<22250738585072014e-324?(t[i]=4503599627370496*e,t[i+n]=-52,t):(t[i]=e,t[i+n]=0,t)}!function(r,e,t){ae(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}((function(r){return Ae(r,[0,0],1,0)}),"assign",Ae);var Te=[0,0],_e=[0,0];function Ee(e,t){var n,i;return 0===t||0===e||r(e)||br(e)?e:(Ae(e,Te,1,0),t+=Te[1],t+=function(r){var e=B(r);return(e=(2146435072&e)>>>20)-tr|0}(e=Te[0]),t<-1074?Se(0,e):t>1023?e<0?yr:pr:(t<=-1023?(t+=52,i=2220446049250313e-31):i=1,de.assign(e,_e,1,0),n=_e[0],n&=2148532223,i*Ie(n|=t+tr<<20,_e[1])))}var Fe=1.4426950408889634,Ue=1/(1<<28);function Ve(e){var t;return r(e)||e===sr?e:e===lr?0:e>709.782712893384?sr:e<-745.1332191019411?0:e>-3.725290298461914e-9&&e<Ue?1+e:function(r,e,t){var n,i,o,a;return Ee(1-(e-(n=r-e)*(o=n-(i=n*n)*(0===(a=i)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),t)}(e-.6931471803691238*(t=fr(e<0?Fe*e-.5:Fe*e+.5)),1.9082149292705877e-10*t,t)}function je(r){return ur(r)===r}function Oe(r){return je(r/2)}function ke(r){return Oe(r>0?r-1:r+1)}var xe=!0===Z?0:1,Ge=new A(1),Pe=new g(Ge.buffer);function Ye(r,e){return Ge[0]=r,Pe[xe]=e>>>0,Ge[0]}function $e(r){return 0|r}var He=Number.NEGATIVE_INFINITY,We=Number.POSITIVE_INFINITY,Ce=1048576,Le=[1,1.5],Re=[0,.5849624872207642],Me=[0,1.350039202129749e-8],Ze=1048575,Xe=1048576,qe=1083179008,ze=1e300,Be=1e-300,De=[0,0],Je=[0,0];function Ke(e,t){var n,i,o,a,u,c,f,l,s,p,y,g,d,b;if(r(e)||r(t))return NaN;if(de.assign(t,De,1,0),u=De[0],0===De[1]){if(0===t)return 1;if(1===t)return e;if(-1===t)return 1/e;if(.5===t)return or(e);if(-.5===t)return 1/or(e);if(2===t)return e*e;if(3===t)return e*e*e;if(4===t)return(e*=e)*e;if(br(t))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:ar(r)<1==(e===We)?0:We}(e,t)}if(de.assign(e,De,1,0),a=De[0],0===De[1]){if(0===a)return function(r,e){return e===He?We:e===We?0:e>0?ke(e)?r:0:ke(e)?Se(We,r):We}(e,t);if(1===e)return 1;if(-1===e&&ke(t))return-1;if(br(e))return e===He?Ke(-0,-t):t<0?0:We}if(e<0&&!1===je(t))return(e-e)/(e-e);if(o=ar(e),n=a&vr|0,i=u&vr|0,f=u>>>31|0,c=(c=a>>>31|0)&&ke(t)?-1:1,i>1105199104){if(i>1139802112)return function(r,e){return(B(r)&vr)<=1072693247?e<0?1/0:0:e>0?1/0:0}(e,t);if(n<1072693247)return 1===f?c*ze*ze:c*Be*Be;if(n>1072693248)return 0===f?c*ze*ze:c*Be*Be;y=function(r,e){var t,n,i,o,a,u;return t=(a=1.9259629911266175e-8*(i=e-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((n=Ye(n=(o=1.4426950216293335*i)+a,0))-o),r[0]=n,r[1]=t,r}(Je,o)}else y=function(r,e,t){var n,i,o,a,u,c,f,l,s,p,y,g,d,b,v,h,w,m,I,N,S;return m=0,t<Ce&&(m-=53,t=B(e*=9007199254740992)),m+=(t>>20)-tr|0,t=1072693248|(I=1048575&t|0),I<=235662?N=0:I<767610?N=1:(N=0,m+=1,t-=Ce),a=Ye(i=(h=(e=Q(e,t))-(f=Le[N]))*(w=1/(e+f)),0),n=524288+(t>>1|536870912),c=Q(0,n+=N<<18),v=(o=i*i)*o*(0===(S=o)?.5999999999999946:.5999999999999946+S*(.4285714285785502+S*(.33333332981837743+S*(.272728123808534+S*(.23066074577556175+.20697501780033842*S))))),c=Ye(c=3+(o=a*a)+(v+=(u=w*(h-a*c-a*(e-(c-f))))*(a+i)),0),d=(y=-7.028461650952758e-9*(s=Ye(s=(h=a*c)+(w=u*c+(v-(c-3-o))*i),0))+.9617966939259756*(w-(s-h))+Me[N])-((g=Ye(g=(p=.9617967009544373*s)+y+(l=Re[N])+(b=m),0))-b-l-p),r[0]=g,r[1]=d,r}(Je,o,n);if(g=(p=(t-(l=Ye(t,0)))*y[0]+t*y[1])+(s=l*y[0]),de.assign(g,De,1,0),d=$e(De[0]),b=$e(De[1]),d>=qe){if(0!=(d-qe|b))return c*ze*ze;if(p+8008566259537294e-32>g-s)return c*ze*ze}else if((d&vr)>=1083231232){if(0!=(d-3230714880|b))return c*Be*Be;if(p<=g-s)return c*Be*Be}return g=function(r,e,t){var n,i,o,a,u,c,f,l,s,p;return s=((l=r&vr|0)>>20)-tr|0,f=0,l>1071644672&&(i=Q(0,((f=r+(Xe>>s+1)>>>0)&~(Ze>>(s=((f&vr)>>20)-tr|0)))>>>0),f=(f&Ze|Xe)>>20-s>>>0,r<0&&(f=-f),e-=i),r=$e(r=B(c=1-((c=(o=.6931471824645996*(i=Ye(i=t+e,0)))+(a=.6931471805599453*(t-(i-e))+-1.904654299957768e-9*i))*(n=c-(i=c*c)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(n-2)-((u=a-(c-o))+c*u)-c))),(r+=f<<20>>>0)>>20<=0?Ee(c,f):Q(c,r)}(d,s,p),c*g}var Qe=2220446049250313e-31;function rt(r){var e,t;return 0===r?1/0:((r<0?-r:r)<=1?(e=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+4624429436045379e-20*r))))))))),t=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+1*r)))))))))):(e=4624429436045379e-20+(r=1/r)*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+709811.662581658*r))))))))),t=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+0*r)))))))))),e/t)}var et=10.900511;function tt(e,t){var n,i,o,a,u,c,f;return r(e)||r(t)||e<0||t<0?NaN:1===t?1/e:1===e?1/t:(f=e+t)<Qe?(u=f/e,u/=t):f===e&&t<Qe?1/t:f===t&&e<Qe?1/e:(e<t&&(c=t,t=e,e=c),i=e+et-.5,o=t+et-.5,a=f+et-.5,u=rt(e)*(rt(t)/rt(f)),ar(t*(n=e-.5-t))<100*a&&e>100?u*=Ve(n*function(e){var t,n,i,o,a,u,c,f,l,s;if(e<-1||r(e))return NaN;if(-1===e)return er;if(e===rr)return e;if(0===e)return e;if(s=1,(i=e<0?-e:e)<.41421356237309503){if(i<1.862645149230957e-9)return i<5551115123125783e-32?e:e-e*e*.5;e>-.2928932188134525&&(s=0,o=e,n=1)}return 0!==s&&(i<9007199254740992?(a=(s=((n=B(l=1+e))>>20)-tr)>0?1-(l-e):e-(l-1),a/=l):(s=((n=B(l=e))>>20)-tr,a=0),(n&=1048575)<434334?l=Q(l,1072693248|n):(s+=1,l=Q(l,1071644672|n),n=1048576-n>>2),o=l-1),t=.5*o*o,0===n?0===o?s*nr+(a+=s*ir):s*nr-((f=t*(1-.6666666666666666*o))-(s*ir+a)-o):(f=(c=(u=o/(2+o))*u)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(c),0===s?o-(t-u*(t+f)):s*nr-(t-(u*(t+f)+(s*ir+a))-o))}(-t/a)):u*=Ke(i/a,n),u*=Ke(a>1e10?i/a*(o/a):i*o/(a*a),t),u*=or(2.718281828459045/o))}return function(e,t){var n,i,o,a,u,c;return r(e)||e<=0||r(t)||t<=0?NaN:(a=t*tt(1+1/e,t),u=t*tt(1+2/e,t),c=t*tt(1+3/e,t),i=t*tt(1+4/e,t)-4*c*a+6*u*(o=a*a)-3*o*o,i/=(n=u-a*a)*n)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).kurtosis=e();
//# sourceMappingURL=index.js.map
