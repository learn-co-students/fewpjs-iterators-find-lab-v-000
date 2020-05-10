const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(a) {
  let result = a.find(s => s.result === "W")
  return !!result ? result.year : result;
}