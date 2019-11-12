const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = array => {
  let result = array.find(element => element.result === "W");
  return !!result ? result.year : undefined;
}
