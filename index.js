const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(record){
  let obj = record.find(item=>item.result === "W")
  if obj
    return obj.year
  else
    undefined
}
