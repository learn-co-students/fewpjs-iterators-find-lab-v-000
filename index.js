const testVar = {};

function isWon(obj) {
  return obj.result === "W";
}

function superbowlWin(record) {
  let selected = record.find(isWon);
  if (!!selected) {
    return selected.year;
  } else {
    return undefined;
  }
}
