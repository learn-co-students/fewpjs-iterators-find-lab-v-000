const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(record) {
  let answer = record.find(single => single.result === "W") 
    return !!answer ? answer.year : undefined
}