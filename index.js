const testVar = {};

function testFunc() {
	return 'hi';
}

function superbowlWin(records) {
	const win = records.find((record) => record.result === 'W');
	return !!win ? win.year : undefined;
}
