const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(objArray) {
  let result = objArray.find(e => e.result === "W");
  return (result ? result.year : result);
}