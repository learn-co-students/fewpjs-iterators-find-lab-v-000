const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = (statsArray) => {
  const wins = statsArray.find( element => element.result === "W")
	return wins ? wins.year : wins
}
