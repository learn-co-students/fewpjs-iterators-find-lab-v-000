const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr) {
  let win = arr.find( record => record.result === 'W' )
  if (win) {
    return win.year;
    }
  
}