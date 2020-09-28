const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let year = array.find( x => x.result === "W")
  if (year) {
    return year.year
  } else {
    return undefined
  }
}
