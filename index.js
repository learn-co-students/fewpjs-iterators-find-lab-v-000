const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
  let result = (record.find( ({result}) => result === "W" ));
  return !!result ? result.year : undefined
}
