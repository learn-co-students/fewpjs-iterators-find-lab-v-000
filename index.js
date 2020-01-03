const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(sourceArray) {
  let obj = sourceArray.find(entry => entry.result === "W")
    return !!obj ? obj.year : undefined
}
