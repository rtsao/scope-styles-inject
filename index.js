'use strict';

var scopeStyles = require('scope-styles');
var insertCss = require('insert-css');

function wrappedScopeStyles() {
  var result = scopeStyles.apply(null, arguments);
  insertCss(scopeStyles.getCss(result));
  return result;
}

module.exports = wrappedScopeStyles;
module.exports.getCss = scopeStyles.getCss;
