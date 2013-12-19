/*! http://mths.be/repeat v0.1.0 by @mathias */
if (!String.prototype.repeat) {
	String.prototype.repeat = function(count) {
		'use strict'; // needed to support `apply`/`call` with `undefined`/`null`
		if (this == null) {
			throw TypeError();
		}
		var string = String(this);
		// `ToInteger`
		var n = count ? Number(count) : 0;
		if (n != n) { // better `isNaN`
			n = 0;
		}
		// Account for out-of-bounds indices
		if (n < 0 || n == Infinity) {
			throw RangeError();
		}
		if (n == 0) {
			return '';
		}
		var result = '';
		while (n--) {
			result += string;
		}
		return result;
	};
}
