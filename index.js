const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
  let game = record.find(game => game.result === "W");
  // my solution
  return game === undefined ? game : game.year;
  // Flatiron solution - I keep forgetting about the !!
  // return !!result ? result.year : undefined
};