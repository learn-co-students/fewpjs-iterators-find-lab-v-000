const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr) {
  var win = arr.find(e => e.result === "W")
  return win.year
}