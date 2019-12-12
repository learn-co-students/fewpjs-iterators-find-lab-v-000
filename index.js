const testVar = {}

function testFunc() {
  return "hi"
}

superbowlWin = (record) => {
  let test = record.find( record => record.result === "W" )
  return !!test ? test.year : undefined
}
