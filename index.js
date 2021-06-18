const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
  let result = record.find(object => {
    return object.result === "W"
  })

  return result ? result.year : undefined
}
