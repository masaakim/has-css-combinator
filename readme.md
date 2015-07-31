# has-css-combinator [![Build Status](https://travis-ci.org/morishitter/has-css-combinator.svg)](https://travis-ci.org/morishitter/has-css-combinator)

Check if a selector has combinator.

## Installation

```shell
$ npm install has-css-combinator
```

## Usage

```js
var hasCombinator = require('has-css-combinator')

hasCombinator('.foo+.bar') // true
hasCombinator('.foo + .bar') // true
hasCombinator('.foo ~ .bar') // true
hasCombinator('.foo > .bar') // true
hasCombinator('.foo') // false
hasCombinator('p.foo') // false
```

## License

The MIT License (MIT)

Copyright (c) 2015 Masaaki Morishita
