const testVar = {}

function testFunc() {
  return "hi"
}

superbowlWin = (y)=> {
  let result = y.find(y => y.result === "W"
  )
  return !!result ? result.year : undefined
}
