'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var pad = function pad(str, size) {
  return (new Array(size + 1).join('0') + str).slice(-size);
};

var globalCount = (function () {
  var count = 0;
  var window = window || global;

  for (var i in window) {
    count++;
  }

  return count;
})();

var navi = navigator.mimeTypes.length + navigator.userAgent.length;

var fingerprint = pad(navi.toString(36) + globalCount.toString(36), 4);

exports['default'] = function () {
  return fingerprint;
};

module.exports = exports['default'];

