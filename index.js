// const testVar = {}
//
// function testFunc() {
//   return "hi"
// }
function isTeamWinner(team) {
  if (team.result === "W") {
    return team;
  } else {
    return undefined;
  }
}

function superbowlWin(team) {
  let found = team.find(team => team.result === "W");
  if (!!found) {
    return found.year;
  } else {
    return undefined;
  }
}
