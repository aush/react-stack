[![npm version](https://img.shields.io/npm/v/react-stack.svg?style=flat-square)](https://www.npmjs.com/package/react-stack) [![Build Status](https://img.shields.io/travis/aush/react-stack.svg?style=flat-square)](https://travis-ci.org/aush/react-stack) [![Dependency Status](https://img.shields.io/david/aush/react-stack.svg?style=flat-square)](https://david-dm.org/aush/react-stack) [![devDependency Status](https://img.shields.io/david/dev/aush/react-stack.svg?style=flat-square)](https://david-dm.org/aush/react-stack#info=devDependencies) [![Coverage Status](https://img.shields.io/coveralls/aush/react-stack.svg?style=flat-square)](https://coveralls.io/github/aush/react-stack?branch=master) [![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://raw.githubusercontent.com/aush/react-stack/master/LICENSE)

#React Stack
Simple and intuitive flex-based layout.
###Install
`npm install --save react-stack`

Don't forget to manually install React^0.14 (peer dependency) if you're using npm@3.
###Use
#####ES6
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { VerticalStack, HorizontalStack } from 'react-stack';
// or for brevity import { Vertical, Horizontal } from 'react-stack';

ReactDOM.render(
  <HorizontalStack>
    <div />
    <div />
    <VerticalStack>
      <div />
      <div />
      <div />
    </VerticalStack>
  </HorizontalStack>,
  document.getElementById('app')
);
```
#####ES5
```javascript
var ReactStack = require('react-stack');
var Vertical = ReactStack.Vertical;
var Horizontal = ReactStack.Horizontal;
...
```
#####Good old 1998 Script Tag:
The component depends on React ^0.14 (a introduction of stateless components), so if you're using it without a build step, React ^0.14 must be present as a global.
````html
<script src="https://npmcdn.com/react@^0.14/dist/react.min.js"></script>
<script src="https://npmcdn.com/react-dom@^0.14/dist/react-dom.min.js"></script>
<script src="https://npmcdn.com/react-stack"></script>
````
###API
`*Stack`'s and `*Wrap`'s expose standard flex properties:
* `justifyContent`: `flex-start` (default), `flex-end`, `center`, `space-between`, `space-around`
* `alignItems`: `flex-start`, `flex-end`, `center`, `baseline`, `stretch` (default)
* `alignContent`: `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `stretch` (default)

Lower lever `Stack` and `Wrap` add:
* `orientation`: `horizontal` (default), `vertical`

Even lower `Flex` add:
* `wrap`: `true`, `false` (default)

Also check [tests](https://github.com/aush/react-stack/blob/master/test).
###Demo
Navigate to the 'demo' folder and execute
```
npm install
npm run build
npm start
```
###Codepen example
