var qunit = require('qunit');

qunit.run({
    code: {

		// Include the source code
		path: './src/fizzbuzz.js',

		// What global var should it introduce for your tests?
		namespace: 'fizzbuzz'

    },
    tests: [

		// Include the test suite(s)
		'fizzbuzz.test.js'

  ].map(function (v) { return './tests/' + v; })
});
