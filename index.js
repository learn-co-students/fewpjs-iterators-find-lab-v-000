const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = data => {
  const win = data.find(g => g.result === "W")
  return win ? win.year : win
}