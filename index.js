const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  if (array.find(object => object.result === "W")) {
    return array.find(object => object.result === "W").year;
  } else {
    return undefined;
  };
};
