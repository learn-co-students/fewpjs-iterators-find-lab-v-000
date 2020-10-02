// const testVar = {}

// function testFunc() {
//   return "hi"
// }

function superbowlWin(record) {
  let current_record = record.find(current_hash => current_hash.result === "W") 
    if (current_record) {
      return current_record.year
    } else {
      return undefined
    }
}
// const result = inventory.find(({ name }) => name === 'cherries');