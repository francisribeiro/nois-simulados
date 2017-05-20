(function () {
	'use strict';

	if (process.argv.length < 3) {
		console.error('Usage: npm run seed [subject]');
		process.exit();
	}

	try {
		var seed = require('./seed/' + process.argv.pop() + '.js');
	} catch (e) {
		console.error(e.message);
		process.exit();
	}

	seed.run();

})();