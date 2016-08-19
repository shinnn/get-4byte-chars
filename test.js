'use strong';

const requireBowerFiles = require('require-bower-files');
const requireFromString = require('require-from-string');
const {rollup} = require('rollup');
const rollupNodeResolve = require('rollup-plugin-node-resolve');
const test = require('tape');

global.window = {};
requireBowerFiles({self: true});

function runTest(description, get4byteChars) {
  test(description, t => {
    t.equal(get4byteChars.name, 'get4byteChars', 'should have a function name.');

    t.deepEqual(
      get4byteChars('a🌾あ𠮟\n🌾_'),
      ['🌾', '𠮟'],
      'should get 4-byte characters from a string.'
    );

    t.deepEqual(
      get4byteChars('。', {}),
      [],
      'should return an empty array when the string includes no 4-byte characters.'
    );

    t.deepEqual(
      get4byteChars('', {unique: true}),
      [],
      'should return an empty array when it takes an empty string.'
    );

    t.deepEqual(
      get4byteChars('a🌾あ𠮟\n🌾_', {unique: false}),
      ['🌾', '𠮟', '🌾'],
      'should allow duplicates when `unique` option is `false`.'
    );

    t.throws(
      () => get4byteChars(1),
      /^TypeError.*1 is not a string\. Expected a string to get 4-byte characters from it\./,
      'should throw a type error when it takes a non-string value.'
    );

    t.throws(
      () => get4byteChars(),
      /^TypeError.*undefined is not a string\. Expected a string to get 4-byte characters from it\./,
      'should throw a range error when it takes no arguments.'
    );

    t.end();
  });
}

rollup({
  entry: require('./package.json')['jsnext:main'],
  plugins: rollupNodeResolve({jsnext: true})
}).then(bundle => {
  runTest('require(\'get-4byte-chars\')', require('.'));
  runTest('window.get4byteChars', global.window.get4byteChars);
  runTest('Module exports', requireFromString(bundle.generate({format: 'cjs'}).code));
});

