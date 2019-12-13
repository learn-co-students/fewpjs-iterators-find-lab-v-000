const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(superbowls) {
  let record = superbowls.find(superbowl => superbowl.result === "W")
  return (record ? record.year : record)
}
