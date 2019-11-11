const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
  let win = record.find(record => record.result === "W")
  if (win) {
    return win.year
  }
}

// const superbowlWin = function(record) {
//   record.find(r => r.result === "W")
//   return r.year;
// }

