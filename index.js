const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(record) {
  let win = record.find(o => o.result === "W")
  if(win)
    return win.year
}
