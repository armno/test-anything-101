var test = require('tape');
var fancify = require(process.argv[2]);

// test('append and prepend ~*~ to my string', function(t) {
// 	t.equal(fancify('Hello'), '~*~Hello~*~', 'it fancifies my string.');
// 	t.end();
// });
//
// test('fancify in ALL CAPS when passing TRUE', function(t) {
// 	t.equal(fancify('Hello', true), '~*~HELLO~*~', 'it capitalizily fancifies my string');
// 	t.end();
// });
//
// test('determine character in the middle with the 3rd argument', function(t) {
// 	t.equal(fancify('Hello', false, '!'), '~!~Hello~!~', 'it customizibly fancifies my string!');
// 	t.end();
// });


// there is no need to separate assertions into different test. so...
test('fancify my string', function(t) {
	t.equal(fancify('Hello'), '~*~Hello~*~', 'it fancifies my string.');
	t.equal(fancify('Hello', true), '~*~HELLO~*~', 'it capitalizily fancifies my string');
	t.equal(fancify('Hello', false, '!'), '~!~Hello~!~', 'it customizibly fancifies my string!');
	t.end();
});
