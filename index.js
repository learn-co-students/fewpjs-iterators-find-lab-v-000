const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(winObjects) {
  const result = winObjects.find(winObject=>winObject.result === "W")
  return (result) ? result.year : result
}