const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
  let i = record.find( ({ result }) => result === 'W' );
  if (i) {
    return i.year
  }
}