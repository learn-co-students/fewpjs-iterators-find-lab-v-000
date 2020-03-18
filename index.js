const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record){
  const w = record.find(r => r.result === 'W')
  if (w) {
    return w.year
  }
  else {
    return undefined
  }
}

