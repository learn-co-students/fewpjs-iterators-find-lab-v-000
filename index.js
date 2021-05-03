const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr){
    let found = arr.find(obj => obj["result"] === "W");
    return found ? found["year"] : found;
}
