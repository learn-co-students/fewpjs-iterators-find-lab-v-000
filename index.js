const testVar = {}

function testFunc() {
  return "hi"
}
function superbowlWin(arg) {
  if (arg.find(e => e.result === 'W'))
   return arg.find(e => e.result === 'W').year
}

// function superbowlWin(arg) {
//   const result = arg.find(e => e.result === 'W');
//   result ? result.year : undefined
// }
