const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(historicalData) {
  let victory = historicalData.find( record => record.result === "W")
  if (victory) {
    return victory.year
  }
}
