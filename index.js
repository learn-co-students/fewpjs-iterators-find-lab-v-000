const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(arr) {
  let found = arr.find(rec => rec.result === "W")
  return found ? found.year : undefined
}