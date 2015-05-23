var feedCat = require(process.argv[2]);
var test = require('tape');

// test('everything is yummy', function(t) {
// 	t.equal(feedCat('fish'), 'yum', 'fish is yummy');
// 	t.end();
// });
//
// test('chocolate is not', function(t) {
// 	t.throws(function() {
// 		feedCat('chocolate');
// 	});
// 	t.end();
// });
//

// again, there is no need to separate it into 2 tests
test('feed the cat', function(t) {
	t.plan(2);
	t.equal(feedCat('fish'), 'yum');
	t.throws(function() {
		feedCat('chocolate');
	});
	// or t.throws(feedCat.bind(null, 'chocolate'));
});
