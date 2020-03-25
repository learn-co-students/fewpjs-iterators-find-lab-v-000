const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = (record) => {
  const win = record.find(object => object.result === 'W')
  return !!win ? win.year : undefined
}
