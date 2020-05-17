const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(teamRecord) {
  let gameWon = teamRecord.find( game => game.result === "W" );
  
  return gameWon ? gameWon.year : undefined;
}