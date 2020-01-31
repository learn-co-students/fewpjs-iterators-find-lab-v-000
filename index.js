function superbowlWin(record) {
  return record.find(readStats) ? record.find(readStats).year : undefined;
  function readStats(stat) { return stat.result === "W" ? stat : undefined };
};

// Flatiron solution

// superbowlWin = (record) => {
//   let result = record.find( record => record.result === "W" )
//   return !!result ? result.year : undefined
// }

// Why couldn't I get this to work right for me?
