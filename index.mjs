// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-beta@v0.2.1-esm/index.mjs";function e(e,a){var i,n,r,m,d,h;return s(e)||e<=0||s(a)||a<=0?NaN:(m=a*t(1+1/e,a),d=a*t(1+2/e,a),h=a*t(1+3/e,a),n=a*t(1+4/e,a)-4*h*m+6*d*(r=m*m)-3*r*r,n/=(i=d-m*m)*i)}export{e as default};
//# sourceMappingURL=index.mjs.map
