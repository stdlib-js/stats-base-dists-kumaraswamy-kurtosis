<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Kurtosis

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Kumaraswamy's double bounded][kumaraswamy-distribution] distribution [excess kurtosis][kurtosis].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [excess kurtosis][kurtosis] for a [Kumaraswamy's double bounded][kumaraswamy-distribution] random variable with first shape parameter `a` and second shape parameter `b` is

<!-- <equation class="equation" label="eq:kumaraswamy_kurtosis" align="center" raw="\operatorname{Kurt}\left( X \right) = \frac{ m_4 - ( 4.0 \cdot m_3 \cdot m_1 ) + ( 6.0 \cdot m_2 \cdot m_1^2 ) - ( 3.0 \cdot m_1^4 ) ) }{\left( m_2 - m_1^2 \right)^2}" alt="Excess kurtosis for a Kumaraswamy's double bounded distribution."> -->

<div class="equation" align="center" data-raw-text="\operatorname{Kurt}\left( X \right) = \frac{ m_4 - ( 4.0 \cdot m_3 \cdot m_1 ) + ( 6.0 \cdot m_2 \cdot m_1^2 ) - ( 3.0 \cdot m_1^4 ) ) }{\left( m_2 - m_1^2 \right)^2}" data-equation="eq:kumaraswamy_kurtosis">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/kumaraswamy/kurtosis/docs/img/equation_kumaraswamy_kurtosis.svg" alt="Excess kurtosis for a Kumaraswamy's double bounded distribution.">
    <br>
</div>

<!-- </equation> -->

where the raw moments of the distribution are given by

<!-- <equation class="equation" label="eq:kumaraswamy_raw_moments" align="center" raw="m_n = b \, B\left(1+\tfrac{n}{a}, b \right)" alt="Raw moments for a Kumaraswamy's double bounded distribution."> -->

<div class="equation" align="center" data-raw-text="m_n = b \, B\left(1+\tfrac{n}{a}, b \right)" data-equation="eq:kumaraswamy_raw_moments">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/kumaraswamy/kurtosis/docs/img/equation_kumaraswamy_raw_moments.svg" alt="Raw moments for a Kumaraswamy's double bounded distribution.">
    <br>
</div>

<!-- </equation> -->

with `B` denoting the [beta function][beta-function].

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import kurtosis from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-kumaraswamy-kurtosis@esm/index.mjs';
```

#### kurtosis( a, b )

Returns the [excess kurtosis][kurtosis] of a [Kumaraswamy's double bounded][kumaraswamy-distribution] distribution with first shape parameter `a` and second shape parameter `b`.

```javascript
var v = kurtosis( 1.0, 1.0 );
// returns ~1.8

v = kurtosis( 4.0, 12.0 );
// returns ~2.704

v = kurtosis( 2.0, 8.0 );
// returns ~2.666
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var v = kurtosis( NaN, 2.0 );
// returns NaN

v = kurtosis( 2.0, NaN );
// returns NaN
```

If provided `a <= 0`, the function returns `NaN`.

```javascript
var y = kurtosis( -1.0, 0.5 );
// returns NaN

y = kurtosis( 0.0, 0.5 );
// returns NaN
```

If provided `b <= 0`, the function returns `NaN`.

```javascript
var y = kurtosis( 0.5, -1.0 );
// returns NaN

y = kurtosis( 0.5, 0.0 );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@esm/index.mjs';
import kurtosis from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-kumaraswamy-kurtosis@esm/index.mjs';

var a;
var b;
var v;
var i;

for ( i = 0; i < 10; i++ ) {
    a = randu() * 10.0;
    b = randu() * 10.0;
    v = kurtosis( a, b );
    console.log( 'a: %d, b: %d, Kurt(X;a,b): %d', a.toFixed( 4 ), b.toFixed( 4 ), v.toFixed( 4 ) );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-kumaraswamy-kurtosis.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-kumaraswamy-kurtosis

[test-image]: https://github.com/stdlib-js/stats-base-dists-kumaraswamy-kurtosis/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-kumaraswamy-kurtosis/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-kumaraswamy-kurtosis/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-kumaraswamy-kurtosis?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-kumaraswamy-kurtosis.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-kumaraswamy-kurtosis/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-kumaraswamy-kurtosis/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-kumaraswamy-kurtosis/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-kumaraswamy-kurtosis/tree/esm

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-kumaraswamy-kurtosis/main/LICENSE

[beta-function]: https://en.wikipedia.org/wiki/Beta_function

[kumaraswamy-distribution]: https://en.wikipedia.org/wiki/Kumaraswamy_distribution

[kurtosis]: https://en.wikipedia.org/wiki/Kurtosis

</section>

<!-- /.links -->
