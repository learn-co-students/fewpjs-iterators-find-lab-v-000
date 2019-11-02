const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr) {
  const winner = arr.find((o) => o.result === 'W')

  if (winner) {
    return winner.year
  }
}
