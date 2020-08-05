const testVar = {}

function testFunc() {
  return "hi"
}

function isWin(element, index, array) {
  return (element.result === "W")
}

function superbowlWin(array) {
  let result = array.find(isWin)
  return !!result ? result.year : undefined
}