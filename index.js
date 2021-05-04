const testVar = {}

function testFunc() {
  return "hi"
}

//The find() method returns the value of the first element in the provided array that satisfies the provided testing function.
//If no values satisfy the testing function, undefined is returned.



const superbowlWin = (aGames) => {
 let gameResult =  aGames.find( value  => value.result === "W"  )
 return !!gameResult ? gameResult.year : undefined
}
