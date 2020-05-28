const testVar = {}

function testFunc() {
  return "hi"
}

// Iterate over record array of Objects.
// Find the result property that has a value of "W" in an Object
// Get the year property in that Object.

function superbowlWin(record) {
  // console.log(record, "record") // Returns record ARRAYS of OBJECTS

  //const result = inventory.find( ({ name }) => name === 'cherries' );
  const win = record.find( ({ result }) => result === 'W')
  //const win = record.find( ( info ) => info.result === 'W') // ANOTHER WAY TO SOLVE
  //console.log(win, "win")   // { year: "1969", result: "W"},

  return !!win ? win.year : undefined 
}