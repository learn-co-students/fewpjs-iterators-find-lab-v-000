const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
  let victory = record.find( r  => r.result === "W" );
  if (typeof victory !== "undefined") {  //returns a string indicating the type of the unevaluated operand
    return victory["year"]
  } else {
  	return victory
  }
}