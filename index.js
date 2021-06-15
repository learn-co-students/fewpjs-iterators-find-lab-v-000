// const testVar = {}

// function testFunc() {
//   return "hi"
// }

const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
]

function superbowlWin(recordArr) {
  const win = recordArr.find(({result}) => result === "W")

  if (win) {
    return win.year
  } else {
    return undefined
  }
}