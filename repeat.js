/*! http://mths.be/repeat v0.1.0 by @mathias */
if (!String.prototype.repeat) {
	(function() {
		'use strict'; // needed to support `apply`/`call` with `undefined`/`null`
		String.prototype.repeat = function(count) {
			if (this == null) {
				throw TypeError();
			}
			var string = String(this);
			// `ToInteger`
			var n = count ? Number(count) : 0;
			if (isNaN(n)) {
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
	}());
}
