const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(e) {
  let yr = e.find( t => t.result === "W" )
  if (yr) {
    return yr.year
  };
}
