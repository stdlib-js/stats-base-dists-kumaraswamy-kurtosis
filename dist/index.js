"use strict";var f=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var q=f(function(g,c){
var o=require('@stdlib/math-base-assert-is-nan/dist'),u=require('@stdlib/math-base-special-beta/dist');function p(e,r){var a,s,i,t,v,m,n;return o(e)||e<=0||o(r)||r<=0?NaN:(t=r*u(1+1/e,r),v=r*u(1+2/e,r),m=r*u(1+3/e,r),n=r*u(1+4/e,r),a=v-t*t,i=t*t,s=n-4*m*t+6*v*i-3*i*i,s/=a*a,s)}c.exports=p
});var x=q();module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
