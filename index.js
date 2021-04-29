const testVar = {}

function testFunc() {
  return "hi"
}
function superbowlWin(data) {
  let result = data.find(data => data.result === "W")
  return !!result ? result.year : undefined
}