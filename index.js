const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(record){
  let obj = record.find(item=>item.result === "W")
  return !!obj ? obj.year : undefined
}
