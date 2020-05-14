
superbowlWin = (record) => {
  let result = record.find( record => record.result === "W" )
  return !!result ? result.year : undefined
}

// Tests passing:
// record
// superbowlWin
//   ✓ returns a year the KC Chiefs won the superbowl
//   ✓ returns undefined if the record has no win objects


// 2 passing (5s)