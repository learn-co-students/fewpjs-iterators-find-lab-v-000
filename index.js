const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(obj) {
    const win = obj.find(e => e.result === 'W')//iterate over Object array/ pull the first key with a result value strongly equal to W
  if (win){ // if the result is === to W proceed
      return win.year // return the year key with the result value of W
  };
}
