const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record){
  let r = record.find(record => record.result === "W")
  console.log(r)
  return !!r ? r.year : undefined
  //if r is true/'W' then return the year or if false return undefined
}