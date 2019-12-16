const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
  let result = record.find(game => game.result == "W");

  if (result) {
    return result.year;
  } else {
    return result;
  }
}
