const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let answer = array.find( game => game.result === "W" );
  if (answer) {
    return answer.year
  };
}