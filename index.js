

// const record = [
//   {year: "2018", result: "L"},
//   {year: "2017", result: "W"},
//   {year: "2016", result: "N/A"}
// ]
const superbowlWin = (record) => {
	
	const winYear = record.find(record => record.result === 'W' )
	
	
	// if (winYear !== null ) {
	// 	return winYear.year
	// } else {
	// 	return undefined
	// }

	if (!!winYear) {
		return winYear.year
	} else {
		return undefined
	}
}