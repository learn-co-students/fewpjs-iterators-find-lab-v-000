const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let win = array.find(i => i.result === "W")
  if (win) {
    return win.year;
  }
}