function superbowlWin(arr){
  const win = arr.find(obj => obj.result === "W");
  if (win) {
    return win.year;
  }
}