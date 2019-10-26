const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = (statsArray) => {
	return statsArray.find( element => {
		if (element.result === "W"){
			return element.year
		} else {
			return undefined;
		}
	})
}
