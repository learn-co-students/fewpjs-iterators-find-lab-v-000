const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  const win = array.find( o => o['result'] === "W");
  if (!win) {
    return undefined;
  } else {
    return win['year'];
  };
}
