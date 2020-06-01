const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(array) {
  if (array.find( g => g.result === "W")) {
    return array.find( g => g.result === "W").year
  } else {
    return undefined
  }

}
