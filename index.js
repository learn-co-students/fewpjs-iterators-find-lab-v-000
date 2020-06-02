const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  const win = array.find( item => item.result === "W")
  return win ? win.year : undefined;
}
