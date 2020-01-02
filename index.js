const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = function(wins) {
  let found = wins.find( w => w.result === "W" )
  if (!found) {
    return undefined;
  }
  else {
    return found.year;
  }
}