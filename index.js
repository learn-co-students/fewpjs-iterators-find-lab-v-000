const testVar = {};

function testFunc() {
  return "hi";
}

function superbowlWin(superbowls) {
  const foundGame = superbowls.find((s) => s.result === "W");
  return !foundGame ? undefined : foundGame.year;
}
