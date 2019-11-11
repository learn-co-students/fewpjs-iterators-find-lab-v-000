const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
  // remember to save value to variable after the computer checks for element
  // then add variable to if condition
  // output of condition is stored in value and can return corresponding value
  let win = record.find(record => record.result === "W")
  if (win) {
    return win.year
  }
}

// const superbowlWin = function(record) {
//   record.find(r => r.result === "W")
//   return r.year;
// }

