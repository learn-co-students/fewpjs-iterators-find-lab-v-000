const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let winner = array.find(object => object.result === "W")
    return winner ? winner.year : undefined 
}