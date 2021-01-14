const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr) {
  let s = arr.find(x => x.result === "W")
  return s ? s.year : undefined
}
