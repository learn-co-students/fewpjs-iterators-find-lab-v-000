const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array_of_records) {
 let record = array_of_records.find(game => game.result === "W" ? game.year : undefined)
 if (record === undefined) {
   return undefined
 } else {
   return record.year;
 }
  
}