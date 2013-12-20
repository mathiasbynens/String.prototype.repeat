/*! http://mths.be/repeat v0.1.0 by @mathias */
if (!String.prototype.repeat) {
	(function() {
		'use strict'; // needed to support `apply`/`call` with `undefined`/`null`
		var repeat = function(count) {
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
			var result = string, reps = 1;
			--n;
			while (n >= reps) {
				result += result;
				n -= reps;
				reps *= 2;
			}
			if (n > 0) {
				result += result.substring(0, n * string.length);
			}
			return result;
		};
		if (Object.defineProperty) {
			Object.defineProperty(String.prototype, 'repeat', {
				'value': repeat,
				'configurable': true,
				'writable': true
			});
		} else {
			String.prototype.repeat = repeat;
		}
	}());
}
