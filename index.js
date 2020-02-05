const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(objs) {
  let answer = objs.find(x => x.result === "W");
    return !!answer ? answer.year : undefined
}