var isCoolNumber = require(process.argv[2]);
var assert = require('assert');

assert.deepEqual(isCoolNumber(42), true, '42 is a cool number');

// shorthand - official solution
// assert(isCoolNumber(42));
