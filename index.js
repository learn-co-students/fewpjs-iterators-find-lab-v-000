const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(records) {
  if(records.find(t => t.result === "W")){
    return records.find(t => t.result === "W").year
  } else{
    return undefined
  }
}
