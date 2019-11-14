// const testVar = {}

// function testFunc() {
//   return "hi"
// }

// function superbowlWin(arrayOfSuperBowls) {
//   const superWin = arrayOfSuperBowls.find(function(superbowl) {
//     superbowl.result == "W";
//   })
//   return superWin ? superWin.year : undefined
// }

function superbowlWin(arrayOfSuperBowls) {
  const winningYear = arrayOfSuperBowls.find(superbowl => superbowl.result == "W")
  if(!!winningYear) { return winningYear.year }
}


