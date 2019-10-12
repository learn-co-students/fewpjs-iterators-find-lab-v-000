const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let winning_year = array.find(array => array.result === "W")
  return !!winning_year ? winning_year.year : undefined
}
