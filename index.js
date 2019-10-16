// const testVar = {}

// function testFunc() {
//   return "hi"
// }

function superbowlWin(record) {
  const firstSbWin = record.find((r) => r.result === "W");
  return !!firstSbWin ? firstSbWin.year : undefined;
}