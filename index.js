const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(records) {
  let win = records.find( record => record.result === "W");
  if (win) {
    return win.year;
  }
}
