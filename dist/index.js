"use strict";var f=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var q=f(function(g,c){
var o=require('@stdlib/math-base-assert-is-nan/dist'),a=require('@stdlib/math-base-special-beta/dist');function p(e,r){var i,s,u,t,v,m,n;return o(e)||e<=0||o(r)||r<=0?NaN:(t=r*a(1+1/e,r),v=r*a(1+2/e,r),m=r*a(1+3/e,r),n=r*a(1+4/e,r),i=v-t*t,u=t*t,s=n-4*m*t+6*v*u-3*u*u,s/=i*i,s)}c.exports=p
});var x=q();module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
