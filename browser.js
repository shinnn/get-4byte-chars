/*!
 * get-4byte-chars | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/get-4byte-chars
*/
window.get4byteChars = function get4byteChars(str, option) {
  'use strict';

  option = option || {unique: true};
  var unique = option.unique !== false;

  if (typeof str !== 'string') {
    throw new TypeError(
      String(str) +
      ' is not a string. Expected a string to get 4-byte characters from it.'
    );
  }

  var results = [];

  var index = 0;
  while (index < str.length) {
    var currentChar = str.charAt(index) + str.charAt(index + 1);
    if (window.is4byteChar(currentChar)) {
      index += 2;

      if (!unique || results.indexOf(currentChar) === -1) {
        results.push(currentChar);
      }
    } else {
      index += 1;
    }
  }

  return results;
};
