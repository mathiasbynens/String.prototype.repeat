var assert = require('assert');
var assertEquals = assert.equal;
var assertThrows = assert['throws'];

require('../repeat.js');

assertEquals(String.prototype.repeat.length, 1);

assertEquals('abc'.repeat(), '');
assertEquals('abc'.repeat(undefined), '');
assertEquals('abc'.repeat(null), '');
assertEquals('abc'.repeat(false), '');
assertEquals('abc'.repeat(NaN), '');
assertEquals('abc'.repeat('abc'), '');
assertThrows(function() { 'abc'.repeat(-Infinity); }, RangeError);
assertThrows(function() { 'abc'.repeat(-1); }, RangeError);
assertEquals('abc'.repeat(-0), '');
assertEquals('abc'.repeat(+0), '');
assertEquals('abc'.repeat(1), 'abc');
assertEquals('abc'.repeat(2), 'abcabc');
assertEquals('abc'.repeat(3), 'abcabcabc');
assertEquals('abc'.repeat(4), 'abcabcabcabc');
assertThrows(function() { 'abc'.repeat(+Infinity); }, RangeError);

assertThrows(function() { String.prototype.repeat.call(undefined); }, TypeError);
assertThrows(function() { String.prototype.repeat.call(undefined, 4); }, TypeError);
assertThrows(function() { String.prototype.repeat.call(null); }, TypeError);
assertThrows(function() { String.prototype.repeat.call(null, 4); }, TypeError);
assertEquals(String.prototype.repeat.call(42, 4), '42424242');
assertEquals(String.prototype.repeat.call({ 'toString': function() { return 'abc'; } }, 2), 'abcabc');

assertThrows(function() { String.prototype.repeat.apply(undefined); }, TypeError);
assertThrows(function() { String.prototype.repeat.apply(undefined, [4]); }, TypeError);
assertThrows(function() { String.prototype.repeat.apply(null); }, TypeError);
assertThrows(function() { String.prototype.repeat.apply(null, [4]); }, TypeError);
assertEquals(String.prototype.repeat.apply(42, [4]), '42424242');
assertEquals(String.prototype.repeat.apply({ 'toString': function() { return 'abc'; } }, [2]), 'abcabc');
