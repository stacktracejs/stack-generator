stack-generator
===============
[![Build Status](https://travis-ci.org/stacktracejs/stack-generator.svg?branch=master)](https://travis-ci.org/stacktracejs/stack-generator) [![Coverage Status](https://img.shields.io/coveralls/stacktracejs/stack-generator.svg)](https://coveralls.io/r/stacktracejs/stack-generator) [![Code Climate](https://codeclimate.com/github/stacktracejs/stack-generator/badges/gpa.svg)](https://codeclimate.com/github/stacktracejs/stack-generator)

Generate artificial backtrace by walking arguments.callee.caller chain. **Works everywhere except strict-mode**.

## Usage
```
StackGenerator.backtrace()

=> [StackFrame('funName1', []), StackFrame(..), StackFrame(..)]
```

## Installation
```
npm install stack-generator
bower install stack-generator
https://raw.githubusercontent.com/stacktracejs/stack-generator/master/dist/stack-generator.min.js
```

## Browser Support
*(See [Karma Config](karma.conf.ci.js) for list of browsers tested by CI)*

 * Chrome 1+
 * Firefox 3+
 * Safari 6+
 * Opera 9+
 * IE 6+
 * iOS 6+
 * Android 4.0+

## Contributing
Want to be listed as a *Contributor*? Start with the [Contributing Guide](CONTRIBUTING.md)!

## License
This project is licensed to the [Public Domain](http://unlicense.org)
