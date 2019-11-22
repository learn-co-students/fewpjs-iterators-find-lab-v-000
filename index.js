const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
]

/*
function superbowlWin(record) {    // receives 1 argument(record)
  let winYear = record.find(record => record.result === "W")  // find returns only the first win
  return !!winYear ? result.year : undefined
}
*/

superbowlWin = (record) => {
  let result = record.find( record => record.result === "W" )
  return !!result ? result.year : undefined
}

function testFunc() {
  return "hi"
}
