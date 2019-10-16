

function superbowlWin(record) {
  const win = record.find(obj => obj.result === "W");
  
  if (win === undefined) {
  	return undefined;
  } else {
  	return win.year;
  }
  
}

