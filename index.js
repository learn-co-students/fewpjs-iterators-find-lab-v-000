const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = function(record) {
  let win = record.find(record => record.result === "W");
  if (win) {
    return win.year;
  }
}
