const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = array => {
  if (array.find(element => element.result === "W") !== undefined) {
    return array.find(element => element.result === "W").year;
  } else {
    return undefined;
  }
}
