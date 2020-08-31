const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  if (array.find(s => s.result === "W") == undefined){
    return undefined
  }
  else {
    return array.find(s => s.result === "W").year
  }
}
