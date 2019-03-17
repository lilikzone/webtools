'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
/* eslint-disable */

// Closest polyfil
(function (root) {
  if (root.Element && !root.Element.prototype.closest) {
    root.Element.prototype.closest = function closest(s) {
      var matches = (this.document || this.ownerDocument).querySelectorAll(s);
      var i = void 0;
      var el = this;

      do {
        i = matches.length;
        while (--i >= 0 && matches.item(i) !== el) {}
      } while (i < 0 && (el = el.parentElement));

      return el;
    };
  }
})(window);

// Ignore case and trim whitespaces
var ignoreCase = exports.ignoreCase = function ignoreCase(value) {
  return value.toUpperCase().trim();
};