# get-4byte-chars

[![NPM version](https://img.shields.io/npm/v/get-4byte-chars.svg)](https://www.npmjs.com/package/get-4byte-chars)
[![Bower version](https://img.shields.io/bower/v/get-4byte-chars.svg)](https://github.com/shinnn/get-4byte-chars/releases)
[![Build Status](https://travis-ci.org/shinnn/get-4byte-chars.svg?branch=master)](https://travis-ci.org/shinnn/get-4byte-chars)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/get-4byte-chars.svg)](https://coveralls.io/r/shinnn/get-4byte-chars)
[![dependencies Status](https://david-dm.org/shinnn/get-4byte-chars/status.svg)](https://david-dm.org/shinnn/get-4byte-chars)
[![devDependencies Status](https://david-dm.org/shinnn/get-4byte-chars/dev-status.svg)](https://david-dm.org/shinnn/get-4byte-chars?type=dev)

Get all 4-byte characters form a string

```javascript
get4byteChars('I 💓 🍣.'); //=> ['💓', '🍣']
```

## Installation

### [npm](https://www.npmjs.com/)

```
npm install get-4byte-chars
```

### [bower](https://bower.io/)

```
bower install get-4byte-chars
```

## API

### get4byteChars(*str* [, *option*])

*str*: `String`  
*option*: `Object`  
Return: `Array`

It detects characters that costs 4 bytes in [UTF-8](https://tools.ietf.org/html/rfc3629) from a given string, and returns them as an array.

#### option.unique

Type: `Boolean`  
Default: `true`

Omit all duplicated characters from result.

```javascript
get4byteChars('🌊🌊 \😺/ 🌊🌊');
//=> ['🌊', '😺']

get4byteChars('🌊🌊 \😺/ 🌊🌊', {unique: false});
//=> ['🌊', '🌊', '😺', '🌊', '🌊']
```

## License

Copyright (c) 2016 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
