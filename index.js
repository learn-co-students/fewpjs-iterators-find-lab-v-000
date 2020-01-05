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

// superbowlWin = (record) => {
//   let result = record.find( record => record.result === "W" )
//   return !!result ? result.year : undefined
// }
