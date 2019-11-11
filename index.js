const testVar = {}

function testFunc() {
  return "hi"
}

// function declaration
// function superbowlWin(record) {
//   // remember to save value to variable after the computer checks for element
//   // then add variable to if condition
//   // output of condition is stored in value and can return corresponding value
//   let win = record.find(record => record.result === "W")
//   if (win) {
//     return win.year
//   }
// }

// arrow function 
const superbowlWin = function(record) {
  let win = record.find(record => record.result === "W");
  if (win) {
    return win.year;
  }
}

