const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(objectArray) {
 var winning_record = objectArray.find(h => h.result === "W") //find only finds the first matching element
 if (winning_record == null) { //null is js nil
  return undefined;
 }
 return winning_record.year;
}