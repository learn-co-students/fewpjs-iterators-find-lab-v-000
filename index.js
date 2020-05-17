const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(teamRecord) {
  const gameWon = teamRecord.find( game => game.result === "W" );
  
  return gameWon ? gameWon.year : undefined;
}